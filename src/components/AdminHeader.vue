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
		name:this.$store.state.currentUser.name,
		menuList:[
			{menuUrl:"/order",menuName:"订单中心",icon:"el-icon-document"},
      {menuUrl:"/broker",menuName:"经销商",icon:"el-icon-phone"}	,
			// {menuUrl:"/picture",menuName:"产品图册",icon:"el-icon-picture-outline"},
      {menuUrl:"/product",menuName:"产品",icon:"el-icon-picture-outline"},
      // {menuUrl:"/test",menuName:"调试页面",icon:"el-icon-setting"},
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
