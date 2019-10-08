<template>
  <div>

    <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>

    <el-dialog
      title="添加管理员"
      :visible.sync="dialogFormVisible" width='40%' :show-close=false
      :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form
        :model="formData"
        prop="formData"
        ref="formData"
        :rules="rules"
        :inline="true"
        class="demo-form-inline">

        <el-form-item label="电话" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" show-password autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="userName">
          <el-input v-model="formData.userName" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input v-model="formData.remark" autocomplete="off" style="width:300px"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('formData')">取 消</el-button>
        <el-button type="primary" @click="saveUser('formData')">确 定</el-button>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        formData: {
          userName: '',
          phone: '',
          password:'',
          remark: ''
        },
        rules: {
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          userName: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      cancel: function (formData) {
        // //清空表单数据
        this.$refs[formData].resetFields();
        //清空验证结果
        this.$refs[formData].clearValidate();
        //关闭dialog
        this.dialogFormVisible = false;
      },
      saveUser: function (formData) {
        this.$refs[formData].validate((valid) => {
          if (!valid) {
            return false;
          } else {
            this.$post("/user/saveUser", this.formData).then((response) => {
              if (response.code == 1) {
                this.$notify({
                  type: 'success',
                  message: '保存成功!'
                });
              }
              // //清空表单数据
              this.$refs[formData].resetFields();
              //清空验证结果
              this.$refs[formData].clearValidate();
              //关闭dialog
              this.dialogFormVisible = false;
              //重新加载列表数据
              this.$emit('queryUserList');
            });
          }
        })
      }


    }
  }
</script>

<style scoped>

</style>
