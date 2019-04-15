<template>
	<div>
		
		<!-- 搜索 -->
		<el-form :inline="true" :model="searchForm" class="demo-form-inline" size='mini'>
			<el-form-item>
				<order-add v-on:addOrder="addOrder"></order-add>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input v-model="searchForm.name" placeholder="请输入姓名"/>
			</el-form-item>
			<el-form-item label="电话">
				<el-input v-model="searchForm.phone" placeholder="请输入电话 " />
			</el-form-item>
			<el-form-item label="单号">
				<el-input v-model="searchForm.orderNum" placeholder="请输入订单号"/>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="searchForm.orderStatus" placeholder="订单状态">
					<template v-for="status in orderStatus">
						<el-option :label="status.status" :value="status.id"/>
					</template>
					<!-- <el-option label="新订单" value="1"/>
					<el-option label="已付款" value="2"/>
					<el-option label="已完成" value="3"/> -->
				</el-select>
			</el-form-item>
			<el-form-item label="起止时间">
				<el-col :span="10">
					<el-date-picker type="date" placeholder="开始日期" v-model="searchForm.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="10">
					<el-date-picker type="date" placeholder="结束日期" v-model="searchForm.date2" style="width: 100%;"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="queryOrder()">搜索</el-button>
			</el-form-item>
		</el-form>
	
		<!--表格 -->
		 <el-table :data="orderList" style="width: 100%"  height="460" size='mini'	>
		  <el-table-column type="expand">
		    <template slot-scope="props">
		      <el-form label-position="left" inline class="demo-table-expand">
		        <el-form-item label="订单总额">
		          <span>{{ props.row.orderAmount }}</span>
		        </el-form-item>
		        <el-form-item label="送货地址">
		          <span>{{ props.row.orderAddress }}</span>
		        </el-form-item>
		        <el-form-item label="生产厂商">
		          <span>{{ props.row.factory }}</span>
		        </el-form-item>
		        <el-form-item label="支付时间">
		          <span>{{ props.row.paymentDate }}</span>
		        </el-form-item>
		      </el-form>
		    </template>
		  </el-table-column>
		  <el-table-column label="订单号"   prop="orderNum"></el-table-column>
		  <el-table-column label="客户姓名" prop="customerName"></el-table-column>
			<el-table-column label="订单日期" prop="orderDate"></el-table-column>
			<el-table-column label="订单状态" prop="orderStatus"></el-table-column>
			<el-table-column fixed="right" label="修改" width="50">
				<template slot-scope="scope">
				<edit-order></edit-order>
			</template>
			</el-table-column>
			<el-table-column fixed="right" label="添加" width="50">
				<template slot-scope="scope">
					<edit-order-detail></edit-order-detail>
			</template>
			</el-table-column>
			<el-table-column fixed="right" label="下载" width="50">
				<template slot-scope="scope">
				<el-button @click="downLoadOrder(scope.row.orderNum)" type="text" icon="el-icon-download" size="small"></el-button>
			</template>
			</el-table-column>
			<el-table-column fixed="right" label="删除" width="50">
				<template slot-scope="scope">
				<el-button @click="deleteOrder(scope.row.orderNum)" type="text" icon="el-icon-delete" size="small"></el-button>
			</template>
			</el-table-column>
		</el-table>
		
		<!-- 分页 -->
		<div style="float: right; margin-top: 10px; margin-bottom: 5px;">
			<el-pagination background small 
			:total="page.total" 
			:current-page.sync="page.currentPage" 
			:page-size=8
			@current-change="queryOrder()">
			</el-pagination>
		</div>
	</div>
</template>


<script>
	import OrderAdd from '@/components/order/OrderAdd'
	import EditOrder from '@/components/order/EditOrder'
	import EditOrderDetail from '@/components/order/EditOrderDetail'
  export default {
    data() {
      return {
		orderStatus:this.$store.state.order.orderStatus,
		page: {
			  total:400,
			  currentPage:2,
		  },
		searchForm: {
			name: '',
			phome:'',
			orderNum:'',
			region: '',
			orderStatus: '',
			date1:'',
			date2:'',
        },
		orderList: [
			{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},
			{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},
			{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			},{
				orderNum: '201904070001',
				customerName: '朱鸿钧',
				orderDate: '2019-03-17',
				orderStatus: '新订单',
				orderAmount: 3050.3,
				orderAddress:'河北省保定市河北大学2114',
				factory:'河北沧州鸿达木业',
				paymentDate:'2019-04-07'
			}
		]
      }
    },
	methods: {
		queryOrder:function(){
			console.log('查询订单,查询参数'+this.searchForm.toString()+"分页参数"+this.page.currentPage);
		},
		editOrder:function(orderNum){
			console.log('修改订单');
			console.log(orderNum);
		},
		deleteOrder:function(orderNum) {
			this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
			  confirmButtonText: '确定',
			  cancelButtonText: '取消',
			  type: 'warning'
			}).then(() => {
				console.log('删除订单'+orderNum);
				this.$notify({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
			  this.$notify({
				type: 'info',
				message: '已取消删除'
			  });          
			});
		},
		downLoadOrder(orderNum){
			console.log('下载订单'+orderNum);
		},
		addOrder:function(order){
			console.log('新增订单'+order.customerName+order.customerPhone+order.customerAddress+order.date1);
		}
	},
	components:{
		"order-add":OrderAdd,
		"edit-order":EditOrder,
		"edit-order-detail":EditOrderDetail
	}
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>