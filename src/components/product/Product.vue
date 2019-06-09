<template>
  <div>
    <el-container class="el-container-book">
      <el-aside class="el-aside-book" style="width: 200px;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <el-submenu v-for="(menu,index) in menus" :key="index" :index="menu.menuId">
            <template slot="title"><span>{{menu.menuName}}</span></template>
            <el-menu-item v-for="(subMenu,index2) in menu.children" :key="index2" :index="subMenu.menuId"
                          @click="consoleLog(subMenu.menuName)">
              {{subMenu.menuName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="el-main-book">
        <el-row>
          <!--新增-->
          <el-col :span="4">
            <product-add :menus="menus"></product-add>
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
        menus: []
      }
    },
    methods: {
      loadProductMenu: function () {
        this.$post("/common/findBookMenu").then(response => {
          if (response.code == 1) {
            console.log(JSON.stringify(response.data));
            this.menus = response.data;
          }
        })
      },
      consoleLog(val) {
        console.log("AAA:" + val);
      },
      queryProduct: function () {

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

</style>
