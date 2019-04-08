<template>
	<div class="home">
		<el-container>
			<el-header><admin-header></admin-header></el-header>
			<el-main>
					<!-- 二级路由 -->
					<router-view></router-view>
			</el-main>
			<!-- 外层包一层是为了footer固定在底部 -->
			<!-- <div class="footer"> -->
				<el-footer><admin-footer></admin-footer></el-footer>
			<!-- </div> -->
			
		</el-container>
	
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'
import Order from '@/components/order/Order'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
	  "admin-header":AdminHeader,
		"admin-footer":AdminFooter,
		"order":Order,
  }
}
</script>

	
<style scoped="true">
.footer {position:absolute;
	bottom:0;
	width:100%;
	height:60px;
	background-color: #ffcc00;
}
	
.el-header{
	background-color: #ffcc00;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-footer {
	background-color: #ffcc00;
	color: #333;
	text-align: center;
	line-height: 60px;
}
.el-aside {
	background-color: #EEAD0E	;
	color: #333;
	text-align: center;
	line-height: 20px;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	/* line-height: 500px; */
}

body > .el-container {
	margin-bottom: 20px;
}


  
</style>
