<template>
  <div>
    <el-button type="text"  @click="drawer=true" style="float: right"> <i class="el-icon-view"></i></el-button>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      direction="rtl">


    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        form: {}
      };
    }
  }
</script>

<style scoped>

</style>
