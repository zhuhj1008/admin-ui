<template>
  <div>
    <el-form :model="searchForm"
             prop="searchForm"
             ref="searchForm"
             :inline="true"
             class="demo-form-inline"
             size='mini'>

      <el-form-item>
        <product-add></product-add>
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

    <el-row>
      <!--4 1 4 1 4 1 4 1 4 = 24-->
      <template v-for="(product,index) in productList">

        <!--4-->
        <el-col :span="4" class="card-box">
          <el-card>

            <img :src="product.picture" style="text-align:center; width: 160px; height: 160px">

            <!--编辑产品-->
            <product-edit :productId="product.productId"
                          :productCode="product.productCode"
                          :productTypes="productTypes"
                          @queryProduct="queryProduct">
            </product-edit>

            <!--删除产品-->
            <el-button type="text"
                       @click="deleteProduct(product.productId,index)"
                       style="float: right">
              <i class="el-icon-delete"></i>
            </el-button>

            <!--产品预览-->
            <product-view :productId="product.productId"></product-view>

          </el-card>
        </el-col>

        <!--1-->
        <el-col :span="1" v-if="index%5 < 4">
          <el-divider direction="vertical"></el-divider>
        </el-col>

      </template>
    </el-row>

    <!-- 分页 -->
    <el-row>
      <el-col :push="16" :span="8">
        <el-pagination background small
                       layout=" total, sizes, prev, pager, next, jumper"
                       :total="page.total"
                       :current-page.sync="searchForm.pageNo"
                       :page-sizes="[10, 20, 50]"
                       :page-size="searchForm.pageSize"
                       @size-change="changeSize"
                       @current-change="queryProduct()">
        </el-pagination>
      </el-col>
    </el-row>


  </div>
</template>

<script>

  import ProductAdd from '@/components/product/ProductAdd'
  import ProductEdit from '@/components/product/ProductEdit'
  import ProductView from '@/components/product/ProductView'

  export default {
    data() {
      return {
        productTypes: localStorage.getItem("productTypes").split(","),
        searchForm: {
          productCode: '',
          productType: '',
          pageSize: 10,
          pageNo: 1
        },
        page: {
          total: 10
        },
        productList: []
      }
    },
    methods: {
      queryProduct: function () {
        this.$post("/product/queryProducts", this.searchForm).then(response => {
          if (response.code === 1) {
            this.productList = response.data.contents;
            this.page.total = response.data.total;
          }
        })
      },
      changeSize: function (val) {
        this.searchForm.pageSize = val;
        this.queryProduct();
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
            if (response.code === 1) {
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

<style>
  .card-box {
    /*margin: 30px;*/
    padding: 20px 30px 20px 30px;
  }

</style>
