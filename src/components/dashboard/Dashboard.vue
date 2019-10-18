<template>
  <div>
    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <user-card></user-card>
      </el-col>

      <el-col :span="18" :xs="24">
        <task-card></task-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import UserCard from '@/components/dashboard/UserCard'
  import TaskCard from '@/components/dashboard/TaskCard'

  export default {

    components: {
      "user-card": UserCard,
      "task-card": TaskCard,
    }
  }
</script>

<style scoped>

</style>
