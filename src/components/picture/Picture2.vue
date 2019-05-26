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
          <el-col :span="4" v-for="o in 18" :key="o" class="joe">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image">
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {
            menuId: "1",
            menuName: "导航一",
            children: [
              {
                menuId: "2",
                menuName: "导航1-1",
              },
              {
                menuId: "3",
                menuName: "导航1-2",
              }
            ]
          },
          {
            menuId: "4",
            menuName: "导航2",
            children: [
              {
                menuId: "5",
                menuName: "导航2-1",
              }
            ]
          }
        ]
      }
    },
    methods: {
      consoleLog(val) {
        console.log("AAA:" + val);
      }
    },
    mounted: function () {
      // this.queryOrder();
    },
  }

</script>

<style scope>
  .el-aside-book {
    background-color: #ffcc00;
    color: #333;
    text-align: center;
    line-height: 20px;
  }

  .el-main-book {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 500px;
  }

  .el-container-book {
    margin-bottom: 20px;
  }

</style>
