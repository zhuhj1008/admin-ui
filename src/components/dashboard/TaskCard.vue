<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>待办事项</span>
      </div>
      1.aaa
      <el-divider></el-divider>
      2.bbb
      <el-divider></el-divider>
      3.ccc
      <el-divider></el-divider>
      4.ddd
      <el-divider></el-divider>
    </el-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        taskList: [
          '张三请吃饭',
          '李四请喝酒',
          '王老板'
        ]
      }
    }
  }
</script>

<style scoped>
  .box-card {
    text-align: left;
    margin: 10px;
  }

</style>
