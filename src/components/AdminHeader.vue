<template>
  <div class="admin_header">
    <el-row>
      <el-col :span="4">
        <!--href="/home"-->
        <a><img src="../assets/hongda.png" style="padding-left:8px;"></a>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ffcc00"
          text-color="#000000"
          active-text-color="#FFFFFF" router>

          <el-submenu v-for="menu in menuList" :key="menu.menuUrl" :index="menu.menuUrl" router>
            <template slot="title">{{menu.menuName}}</template>
            <el-menu-item v-for="subMenu in menu.children" :key="subMenu.menuUrl" :index="subMenu.menuUrl" router>
              {{subMenu.menuName}}
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
      <el-col :span="3">欢迎你，{{name}} </el-col>
      <el-col :span="1"><i class="iconfont icon-tuichu" @click="quit"></i>退出</el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: localStorage.getItem("name"),
        menuList: [
          {
            menuUrl: "/2",
            menuName: "用户中心",
            children: [
              {menuUrl: "/customer", menuName: "客户"},
              {menuUrl: "/user", menuName: "系统用户"},
            ]
          },
          {
            menuUrl: "/3",
            menuName: "订单中心",
            children: [
              {menuUrl: "/order", menuName: "订单"},
              {menuUrl: "/broker", menuName: "经销商"},
            ]
          },
          {
            menuUrl: "/4",
            menuName: "产品",
            children: [
              {menuUrl: "/product", menuName: "产品"},
            ]
          },
          {
            menuUrl: "/5",
            menuName: "统计",
            children: [
              {menuUrl: "/charts", menuName: "订单量图表"},
              {menuUrl: "/brokerCharts", menuName: "经销商销售报表"},
              /*{menuUrl: "/index3", menuName: "加工商生产报表"},*/
            ]
          },
          {
            menuUrl: "/6",
            menuName: "系统配置",
            children: [
              {menuUrl: "/config", menuName: "订单配置"},
            ]
          }
        ],
        activeIndex: 'index',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        /*console.log(key, keyPath);*/
      },
      quit:function () {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style>
</style>
