<template>
  <div>
    <!--<el-button type="text" class="error" @click="drawer=true" style="float: right">预览</el-button>-->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer1"
      direction="rtl">




    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer1:this.drawer,
        form:{

        }
      };
    },
    props: [
      "drawer",
    ]
  }
</script>

<style scoped>

</style>
