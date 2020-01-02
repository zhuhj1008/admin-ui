<template>
  <div class="admin_header">
    <el-row>
      <el-col :span="4">
        <a href="/dashboard"><img src="../assets/hongda.png" style="padding-left:8px;"></a>
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
      <el-col :span="3">欢迎你，{{name}}</el-col>
      <el-col :span="1"><i class="iconfont icon-tuichu" @click="quit"></i>退出</el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: localStorage.getItem("name"),
        menuList: [],
        activeIndex: 'index',
      };
    },

    mounted: function () {
      this.queryMenu();
    },

    methods: {

      //菜单
      queryMenu: function () {
        this.$post("/common/systemMenu").then((response) => {
          if (response.code == 1) {
            this.menuList = response.data;
          }
        })
      },

      //点击菜单
      handleSelect(key, keyPath) {

      },

      //登出
      quit: function () {
        this.$router.push({path: '/'})
      }

    }
  }
</script>

<style>
</style>
