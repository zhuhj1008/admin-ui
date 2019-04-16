<template>
	<div>
		<el-button @click="addUser()" >添加</el-button>
		<el-form :inline="true" :model="order" class="demo-form-inline" size='mini'>
          <!-- 动态生成 -->
          <div class="moreRules">
			  <!-- :rules="[{required: true, message: '请完善信息'}]" -->
			  <div class="moreRulesIn" v-for="(item, index) in order.orderDetails" :key="item.key" >
				  <el-form-item  label="" :prop="'orderDetails.' + index +'.length'" >
				  <el-input v-model="item.length" placeholder="长"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.width'" >
				  <el-input v-model="item.width" placeholder="宽"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-form-item  label="" :prop="'orderDetails.'+ index +'.hight'" >
				  <el-input v-model="item.hight" placeholder="高"  class="el-select_box input-order"></el-input>
				  </el-form-item>
				  <el-button @click="deleteRules(item, index)" size="mini">删除</el-button>
			  </div>
          </div>
		  </el-form>
	</div>
</template>


<script>
	export default {
    data() {
      return {
		order:{
			orderDetails:[{
			  length:'',
			  width:'',
			  hight:''
			}]
		}
      }
    },
    methods: {
	   addUser() {
            this.order.orderDetails.push({
                field:'',
                name:'',
                max:'',
          })
      },
	   deleteRules(item, index) {
            this.index = this.order.orderDetails.indexOf(item)
            if (index !== -1) {
                this.order.orderDetails.splice(index, 1)
            }
      }
    }
  }
</script>

<style>
.input-order{
	width:80px;
}
</style>