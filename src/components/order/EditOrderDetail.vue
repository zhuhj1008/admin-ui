<template>
	<div>
		<el-button @click="dialogFormVisible = true" type="text" icon="el-icon-plus" size="small"></el-button>
		<el-dialog title="添加订单" :visible.sync="dialogFormVisible" width='80%' append-to-body>

		  	<el-button type="primary" icon="el-icon-plus" @click="" size='mini'>添加</el-button>

			
			<el-table :data="gridData" size='mini' show-summary>
			<el-table-column property="name" label="名称"></el-table-column>
			<el-table-column property="color" label="颜色"></el-table-column>
			<el-table-column property="length" label="长"></el-table-column>
			<el-table-column property="width" label="宽"></el-table-column>
			<el-table-column property="hight" label="高"></el-table-column>
			<el-table-column property="price" label="单价"></el-table-column>
			<el-table-column property="count" label="数量"></el-table-column>
			<el-table-column property="count" label="金额"></el-table-column>
			<el-table-column property="count" label="图"></el-table-column>
			<el-table-column property="" label="操作" width="150">
				<el-button type="primary" icon="el-icon-delete" size='mini'></el-button>
			</el-table-column>
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
				  length:'a',
				  width:'c',
				  hight:'b',
				  price:'180',
				  count:'3',
				  remark:'周末送货'
			  }
			  
		  ],
        dialogFormVisible: false,
        form: {
			orderNo:'20190407003',
			customerName: '朱鸿钧',
			customerPhone:'15175225612',
			customerAddress:'河北省保定市河北大学2114',
			count:10,
			amount:'170.45',
			
        }
      };
    }
  };
</script>

<style>
</style>
