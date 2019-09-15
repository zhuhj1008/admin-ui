<template>
  <div>
    <el-container class="el-container-book">

      <el-aside class="el-aside-book" style="width: 200px; height: 700px">
        <product-add :productTypes="productTypes" @queryProduct="queryProduct"></product-add>

        <el-form :model="searchForm"
                 prop="searchForm"
                 ref="searchForm"
                 :inline="true"
                 class="demo-form-inline"
                 size='mini'>
          <el-form-item label="">
            <el-input v-model.number="searchForm.productCode" placeholder="请输入产品编码" clearable/>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="">搜索</el-button>
          </el-form-item>

        </el-form>

        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu v-for="(type,index) in productTypes" :key="index" :index="type.value">
            <template slot="title"><span>{{type.label}}</span></template>
            <el-menu-item v-for="(subType,index2) in type.children" :key="index2" :index="subType.value"
                          @click="queryProduct(subType.value)">
              {{subType.label}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main class="el-main-book">
        <el-row>
          <!--新增-->
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
        </el-row>
      </el-main>

    </el-container>

  </div>
</template>

<script>

  import ProductAdd from '@/components/product/ProductAdd'
  import ProductEdit from '@/components/product/ProductEdit'

  export default {
    data() {
      return {
        searchForm: {
          productCode: ''
        },
        productTypes: [],
        productList: []
      }
    },
    methods: {
      loadProductMenu: function () {
        this.$post("/product/queryType").then(response => {
          if (response.code == 1) {
            this.productTypes = response.data;
          }
        })
      },
      queryProduct: function (val) {
        console.log("查询产品，产品类型:" + val);
        const param = {};
        param.productType = val;
        this.$post("/product/queryProducts", param).then(response => {
          if (response.code == 1) {
            console.log(JSON.stringify(response.data))
            this.productList = response.data;
          }
        })
      },
      queryDetail: function () {
        console.log("asas");
      }
    },
    components: {
      "product-add": ProductAdd,
      "product-edit": ProductEdit,
    },
    mounted: function () {
      this.loadProductMenu();
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
