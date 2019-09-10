<template>
  <div class="admin_header">
    <el-row>
      <el-col :span="4">
        <a href="/home"><img src="../assets/Joe_logo.png" style="padding-left:8px;"></a>
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
          <template v-for="menu in menuList">
            <el-menu-item :index="menu.menuUrl" router>
              <!--<i :class="menu.icon"></i>-->
              {{menu.menuName}}
            </el-menu-item>
          </template>

        </el-menu>
      </el-col>
      <el-col :span="4">欢迎你，{{name}}</el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: localStorage.getItem("name"),
        menuList: [
          {menuUrl: "/index", menuName: "首页"},
          {menuUrl: "/order", menuName: "订单中心"},
          {menuUrl: "/broker", menuName: "经销商"},
          {menuUrl:"/picture",menuName:"产品图册"},
          {menuUrl: "/product", menuName: "产品"},
          {menuUrl:"/test",menuName:"调试"},
          {menuUrl:"/config",menuName:"系统配置"},
        ],
        activeIndex: 'order',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
</style>
