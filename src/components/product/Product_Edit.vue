<template>
       
    <div>

      <el-dialog title="添加订单" :visible.sync="dialogFormVisible" width='95%' :show-close=false
                 :close-on-press-escape=false :close-on-click-modal="false" append-to-body>


      </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'vue模板'
            }
        }
    }
</script>

<style>

</style>
