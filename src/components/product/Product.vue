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

    <el-col :span="4" v-for="(product,index) in productList" :key="index" :index="index">
      <el-card>
        <img :src="product.picture" style="text-align:center; width: 95px; height: 170px">
        <product-edit :productId="product.productId"
                      :productCode="product.productCode"
                      :productTypes="productTypes"
                      @queryProduct="queryProduct">

        </product-edit>
      </el-card>
    </el-col>

  </div>
</template>

<script>

  import ProductAdd from '@/components/product/ProductAdd'
  import ProductEdit from '@/components/product/ProductEdit'

  export default {
    data() {
      return {
        productTypes: ['a', 'b', 'c'],
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

    },
    components: {
      "product-add": ProductAdd,
      "product-edit": ProductEdit,
    },
    mounted: function () {
      this.queryProduct();
    },
  }

</script>

<style scope>
  .el-aside-book {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 10px;
  }

  .el-main-book {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 500px;*/
  }

  /*.el-container-book {*/
  /*margin-bottom: 10px;*/
  /*}*/

</style>
