<template>
	<div class="demo-input-suffix">
	  属性方式：
	  <el-input id="name"
	    placeholder="请选择日期"
	    suffix-icon="el-icon-date"
	    v-model="input2" style="width: 300px;">
	  </el-input>
	  <el-input
	    placeholder="请输入内容"
	    prefix-icon="el-icon-search"
	    v-model="input21" style="width: 300px;">
	  </el-input>
	</div>
</template>

<script>
export default {
  data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
  }
}
</script>

<style>
</style>
