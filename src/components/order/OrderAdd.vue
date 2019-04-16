<template>
	<div>
		<el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
		<el-dialog title="添加新订单" :visible.sync="dialogFormVisible" append-to-body>
		  <el-form :model="orderForm" :inline="true" size="mini">
			<template>
				<el-radio  v-model="orderForm.radio" label="1" border>1</el-radio>
				<el-radio  v-model="orderForm.radio" label="2" border>2</el-radio>
				<el-radio  v-model="orderForm.radio" label="3" border>3</el-radio>
				<el-radio  v-model="orderForm.radio" label="4" border>4</el-radio>
			</template>
			<br/><br/>
			<el-form-item label="姓名">
			  <el-input v-model="orderForm.customerName" autocomplete="off" style="width:200px" clearable></el-input>
			</el-form-item>
			<el-form-item label="电话">
			  <el-input v-model="orderForm.customerPhone" autocomplete="off" style="width:163px" clearable></el-input>
			</el-form-item>
			<el-form-item label="时间">
				<el-col :span="10">
					<el-date-picker type="date" placeholder="开始日期" v-model="orderForm.date1" style="width: 200px;"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model="orderForm.customerAddress" autocomplete="off" style="width:416px" clearable></el-input>
			</el-form-item>
		  </el-form>
		 
		  <div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="addOrder()">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	  export default {
    data() {
      return {
        dialogFormVisible: false,
        orderForm: {
					radio: '',
					customerName: '',
					customerPhone:'',
					customerAddress:'',
					date1:new Date()
        }
      }
    },
		methods:{
			addOrder:function(){
				this.dialogFormVisible = false;
				this.$emit("addOrder",this.orderForm);
			}
		}
  };
</script>

<style>
</style>
