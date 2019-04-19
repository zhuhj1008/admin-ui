<template>
	<div>
		<el-button @click="dialogFormVisible = true" type="text" icon="el-icon-plus" size="small"></el-button>
		<el-dialog title="添加订单" :visible.sync="dialogFormVisible" width='80%' append-to-body>
			<el-button type="primary" icon="el-icon-plus" @click="addUser()" size='mini'>添加</el-button>
			<el-button @click="" size="mini">修改</el-button>
			<!-- 已经保存的 -->
			<el-form :inline="true" :model="order" class="demo-form-inline" size='mini' disabled>
				<div>
					<el-form-item>
						<el-input  placeholder="名称"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="颜色"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="长"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="宽"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="高"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="长"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="长"  class="el-select_box input-order"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input  placeholder="长"  class="el-select_box input-order"></el-input>
					</el-form-item>
				</div>
			<template v-for="orderDetail in orderDetails">
					<div>
						<el-form-item>
							<el-input v-model="orderDetail.length" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.width" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.hight" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.hight" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.length" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.hight" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.length" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="orderDetail.length" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
					</div>
				</template>
				</el-form>
			<el-form :inline="true" :model="order" class="demo-form-inline" size='mini'>
				<!-- 动态生成的 -->
				<div class="moreRules">
					<!-- :rules="[{required: true, message: '请完善信息'}]" -->
					<div class="moreRulesIn" v-for="(item, index) in order.addOrderDetails" :key="item.key" >
						<el-form-item  label="" :prop="'addOrderDetails.' + index +'.length'" >
						<el-input v-model="item.length" placeholder="长"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.width'" >
						<el-input v-model="item.width" placeholder="宽"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-form-item  label="" :prop="'addOrderDetails.'+ index +'.hight'" >
						<el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
						</el-form-item>
						<el-button @click="deleteRules(item, index)" size="mini">删除</el-button>
					</div>
				</div>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	  export default {
    data() {
      return {
				orderDetails:[
					{
					length:'1',
					width:'2',
					hight:'3'
					},{
					length:'1',
					width:'2',
					hight:'3'
					},
				],
				order:{
					addOrderDetails:[{
					  length:'',
					  width:'',
					  hight:''
					}]
				},
        dialogFormVisible: false
      };
    },
		methods: {
		   addUser() {
		        this.order.addOrderDetails.push({
		            field:'',
		            name:'',
		            max:'',
		      })
		  },
		   deleteRules(item, index) {
		        this.index = this.order.addOrderDetails.indexOf(item)
		        if (index !== -1) {
		            this.order.addOrderDetails.splice(index, 1)
		        }
		  }
		}
  };
</script>

<style>
.input-order{
	width:65px;
}
</style>
