<template>
  <div>
    <el-form :model="searchForm"
             prop="searchForm"
             ref="searchForm"
             :inline="true"
             class="demo-form-inline"
             size='mini'>

      <el-form-item>
        <el-button type="primary" icon="el-icon-plus" @click="">添加</el-button>
      </el-form-item>

      <el-form-item label="类别">
        <el-select v-model="searchForm.productType" placeholder="产品分类" clearable>
          <el-option v-for="(type,index) in productTypes" :key=index :label="type" :value="type"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="图册" prop="productCode">
        <el-input v-model="searchForm.productCode" placeholder="请输入图册编码" clearable/>
      </el-form-item>

      <el-form-item label="编码" prop="productCode">
        <el-input v-model="searchForm.productCode" placeholder="请输入产品编码" clearable/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="">搜索</el-button>
      </el-form-item>

    </el-form>


    <template v-for="product in productList">

      <el-col :span="4" class="card-box">
        <el-card>
          <img :src="product.picture" style="text-align:center; width: 95px; height: 170px">

          <!--编辑产品-->
          <product-edit :productId="product.productId"
                        :productCode="product.productCode"
                        :productTypes="productTypes"
                        @queryProduct="queryProduct">
          </product-edit>

          <!--删除产品-->
          <el-button type="text" @click="deleteProduct(product.productId)" style="float: right">
            <i class="el-icon-delete"></i>
          </el-button>

          <!--产品预览-->
          <product-view></product-view>

        </el-card>
      </el-col>

    </template>

  </div>
</template>

<script>

  import ProductAdd from '@/components/product/ProductAdd'
  import ProductEdit from '@/components/product/ProductEdit'
  import ProductView from '@/components/product/ProductView'

  export default {
    data() {
      return {
        productTypes: ['a', 'b', 'c'],
        drawer: false,
        searchForm: {
          productCode: '',
          productType: '',
          pageSize: 120,
          pageNo: 1
        },
        productList: []
      }
    },
    methods: {
      queryProduct: function (val) {
        const param = {};
        param.productType = val;
        param.pageSize = this.searchForm.pageSize;
        param.pageNo = this.searchForm.pageNo;
        this.$post("/product/queryProducts", param).then(response => {
          if (response.code == 1) {
            this.productList = response.data;
          }
        })
      },
      deleteProduct: function (val) {
        this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const param = {};
          param.productId = val;
          this.$post("/product/remove", param).then((response) => {
            if (response.code == 1) {
              this.$emit('queryProduct');
              this.$notify({
                type: 'success',
                message: '删除成功!'
              });
            }
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

    },
    components: {
      "product-add": ProductAdd,
      "product-edit": ProductEdit,
      "product-view": ProductView,
    },
    mounted: function () {
      this.queryProduct();
    },
  }

</script>

<style scope>
  .card-box {
    margin: 30px;
    padding-left: 50px;
    padding-right: 50px;
  }

</style>
