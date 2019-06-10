<template>
  <div>
    <el-container class="el-container-book">
      <el-aside class="el-aside-book" style="width: 200px;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
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
          <el-col :span="4">
            <product-add :productTypes="productTypes"></product-add>
          </el-col>
          <el-col :span="4" v-for="o in 25" :key="o">
            <el-card>
              <img src="../../assets/product/demo.jpg"
                   style="text-align:center; width: 95px; height: 170px">
              <product-edit></product-edit>
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
        productTypes: []
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
      },
      queryDetail: function () {
        console.log("asas");
      }
    },
    mounted: function () {
      // this.queryOrder();
    },
    components: {
      "product-add": ProductAdd,
      "product-edit": ProductEdit,
    },
    mounted: function () {
      this.loadProductMenu();
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
