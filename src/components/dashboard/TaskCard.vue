<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>待办事项</span>
      </div>

      <template v-for="(task,index) in taskList" :index="index">
        {{task.date}}
        <el-divider direction="vertical"></el-divider><!--竖线-->
        {{task.text}}
        <el-divider></el-divider><!--横线-->
      </template>

    </el-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        taskList: [
          {
            text: '张三请吃饭',
            date: '2019-02-14'
          },
          {
            text: '李四请喝酒',
            date: '2019-04-16'
          },
          {
            text: '王老板',
            date: '2019-11-11'
          },
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
