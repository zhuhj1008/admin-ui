<template>
  <div>
    <el-button type="primary" icon="el-button-plus" @click="dialogFormVisible=true">添加</el-button>
    <el-dialog title="添加代理商" :visible.sync="dialogFormVisible" :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form :model="brokerForm" :inline="true" size="mini" ref="brokerForm" prop="brokerForm">
        <el-form-item label="经销商" prop="brokerName">
          <el-input v-model="brokerForm.brokerName" style="width:150px" clearable></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="contact">
          <el-input v-model="brokerForm.contact" style="width:150px" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="brokerForm.phone" style="width:150px" clearable></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="brokerForm.address" style="width:378px" clearable></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="brokerForm.remark" style="width:378px" clearable></el-input>
        </el-form-item>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,saveBroker('brokerForm')">保 存</el-button>
      </div>
    </el-dialog>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        brokerForm: {
          brokerName: "",
          contact: "",
          phone: "",
          address: "",
          remark: ""
        }
      }
    },
    methods: {
      saveBroker: function (formName) {
        console.log("保存经销商，信息：" + JSON.stringify(this.brokerForm));
        this.$post("/broker/save", this.brokerForm).then((response) => {
          if (response.code == 1) {
            //清空表单数据
            this.$refs[formName].resetFields();
            //重新加载列表数据
            // this.$emit('queryOrder');
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
