<template>
	<div class="admin_header">
		<el-row>
			<el-col :span="4">
				<a href="/home"><img src="../assets/huya-logo.jpg" style="padding-left:8px;"></a>
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
						<el-menu-item :index="menu.menuUrl" router>{{menu.menuName}}</el-menu-item>
					</template>
					
				</el-menu>
			</el-col>
			<el-col :span="4">欢迎你，朱鸿钧</el-col>
		</el-row>
		
		
	</div>
</template>

<script>
	export default {
    data() {
      return {
				menuList:[
					{menuUrl:"/order",menuName:"订单中心"},
					{menuUrl:"/picture",menuName:"按钮"},
					{menuUrl:"/order2",menuName:"调试页面"}		
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
