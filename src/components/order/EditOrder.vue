<template>
	<div>
		<el-button @click="dialogFormVisible = true" type="text" icon="el-icon-edit" size="mini"></el-button>
		<el-dialog title="修改订单" :visible.sync="dialogFormVisible" append-to-body>
		  <el-form :model="form" :inline="true" size="mini">
			<el-form-item label="单号">
				<el-input v-model="form.orderNo" autocomplete="off" style="width:130px" disabled></el-input>
			</el-form-item>
			<el-form-item label="数量">
				<el-input v-model="form.count" autocomplete="off" style="width:90px" disabled></el-input>
			</el-form-item>
			<el-form-item label="总额">
				<el-input v-model="form.amount" autocomplete="off" style="width:90px" disabled></el-input>
			</el-form-item>
			<el-form-item label="状态" style="width:240px">
				<el-select v-model="form.orderStatus" placeholder="">
					<el-option label="新订单" value="shanghai"></el-option>
					<el-option label="已完成" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="实收">
				<el-input v-model="form.amount" autocomplete="off" style="width:163px" clearable></el-input>
			</el-form-item>
			<el-form-item label="姓名">
			  <el-input v-model="form.customerName" autocomplete="off" style="width:200px" clearable></el-input>
			</el-form-item>
			<el-form-item label="电话">
			  <el-input v-model="form.customerPhone" autocomplete="off" style="width:163px" clearable></el-input>
			</el-form-item>
			
			<el-form-item label="地址">
				<el-input v-model="form.customerAddress" autocomplete="off" style="width:416px" clearable></el-input>
			</el-form-item>
		  </el-form>
		 
		  <div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
			orderNo:'20190407003',
			orderStatus:'已完成',
			customerName: '朱鸿钧',
			customerPhone:'15175225612',
			customerAddress:'河北省保定市河北大学2114',
			count:10,
			amount:'170.45'
        }
      };
    }
  };
</script>

<style>
</style>
