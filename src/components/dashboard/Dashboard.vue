<template>
  <div>
    <el-row :gutter="20">

      <el-col :span="6">
        <user-card></user-card>
        <!--<task-card></task-card>-->
      </el-col>

      <el-col :span="18">
        <order-card></order-card>
        <calendar-card></calendar-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import UserCard from '@/components/dashboard/UserCard'
  import OrderCard from '@/components/dashboard/OrderCard'
  import TaskCard from '@/components/dashboard/TaskCard'
  import CalendarCard from '@/components/dashboard/CalendarCard'

  export default {

    components: {
      "user-card": UserCard,
      "task-card": TaskCard,
      "order-card": OrderCard,
      "calendar-card": CalendarCard,
    }
  }
</script>

<style scoped>

</style>
