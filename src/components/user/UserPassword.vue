<template>

  <div>

    <el-button type="text"
               icon="iconfont icon-dingbu_xiugaimima"
               size="mini"
               @click="dialogFormVisible=true">
    </el-button>

    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible" width='20%' :show-close=false
      :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form
        :model="formData"
        :rules="rules"
        prop="formData"
        ref="formData"
        class="demo-form-inline"
        size='small'>

        <el-form-item label="原始密码" prop="password">
          <el-input v-model="formData.password" show-password autocomplete="off" style="width:150px"></el-input>
        </el-form-item>

        <el-form-item label="新设密码" prop="newPassWord">
          <el-input v-model="formData.newPassWord" show-password autocomplete="off" style="width:150px"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="repeatPassWord">
          <el-input v-model="formData.repeatPassWord" show-password autocomplete="off" style="width:150px"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('formData')">取 消</el-button>
        <el-button type="primary" @click="updatePassword('formData')">确 定</el-button>
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
          password: '',
          newPassWord: '',
          repeatPassWord: ''
        },
        rules: {
          password: [
            {required: true, message: '原始密码不能为空', trigger: 'blur'}
          ],
          newPassWord: [
            {required: true, message: '新设密码不能为空', trigger: 'blur'}
          ],
          repeatPassWord: [
            {required: true, message: '确认密码不能为空', trigger: 'blur'}
          ]
        }

      }
    },
    methods: {
      updatePassword: function (formData) {

        this.$refs[formData].validate((valid) => {
          if (!valid) {
            return false;
          } else {

            if (this.formData.newPassWord != this.formData.repeatPassWord) {
              this.$message("两次密码不一致，请重新输入。");
            }

            this.formData.userId = this.userId;
            this.$post("/user/changePassword", this.formData).then((response) => {
              if (response.code == 1) {
                //清空表单数据
                this.$refs[formData].resetFields();
                //关闭弹窗
                this.dialogFormVisible = false;
                //提示成功
                this.$notify({
                  type: 'success',
                  message: '修改密码成功!'
                });


              }
            }).catch(() => {
              this.$message("修改密码失败")
            });

          }
        });


      },
      cancel: function (formData) {
        // //清空表单数据
        this.$refs[formData].resetFields();
        //清空验证结果
        this.$refs[formData].clearValidate();
        //关闭dialog
        this.dialogFormVisible = false;
      }
    },
    props: [
      "userId"
    ]
  }
</script>

<style scoped>

</style>
