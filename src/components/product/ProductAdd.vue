<template>
     
  <div>
    <el-card>
      <img src="../../assets/product/product_add.svg" class="image" style="width: 60px; height: 170px">
      <div style="padding: 5px;">
        <el-button type="text" class="error" @click="dialogFormVisible=true">添加</el-button>
      </div>
    </el-card>
    <el-dialog title="新加产品" :visible.sync="dialogFormVisible" :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
      }
    }
  }
</script>

<style>

</style>
