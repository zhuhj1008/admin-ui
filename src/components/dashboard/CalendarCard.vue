<template>
  <div>
    <el-row class="box-card">
      <el-col :span="16">
        <el-card>
          <el-calendar v-model="value"></el-calendar>
        </el-card>
      </el-col>
      <el-col :span="8">

      </el-col>

    </el-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 10px;
  }
</style>
