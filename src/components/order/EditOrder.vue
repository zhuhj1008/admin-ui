<template>
	<div>
		<el-button type="text" @click="dialogFormVisible = true" >修改订单</el-button>
		<el-dialog title="修改订单" :visible.sync="dialogFormVisible" >
		  <el-form :model="form" :inline="true">
			<el-form-item label="姓名">
			  <el-input v-model="form.name" autocomplete="off" style="width:100px" size="mini" clearable></el-input>
			</el-form-item>
			<el-form-item label="电话">
			  <el-input v-model="form.phone" autocomplete="off" style="width:50px" size="mini" clearable></el-input>
			</el-form-item>
		  </el-form>
		  <el-table :data="gridData" size='mini'>
			<el-table-column property="name" label="名称" width="80"></el-table-column>
			<el-table-column property="color" label="颜色" width="80"></el-table-column>
			<el-table-column property="length" label="长" width="80"></el-table-column>
			<el-table-column property="width" label="宽" width="80"></el-table-column>
			<el-table-column property="hight" label="高" width="80"></el-table-column>
			<el-table-column property="price" label="单价" width="50"></el-table-column>
			<el-table-column property="count" label="数量" width="50"></el-table-column>
		
		  </el-table>
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
		  gridData:[
			  {
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },{
				  name:'木门',
				  color:'深褐色',
				  length:'350.3',
				  width:'150',
				  hight:'100',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  },
			  
		  ],
        dialogFormVisible: false,
        form: {
          name: 'dsada',
		  phone:'',
        }
      };
    }
  };
</script>

<style>
</style>
