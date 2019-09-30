<template>
  <div>

    <el-button @click="dialogFormVisible = true,toEditUser()"
               type="text"
               icon="iconfont icon-xiugaiyonghuxinxi"
               size="mini">
    </el-button>

    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible" width='55%' :show-close=false
      :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form
        :model="formData"
        prop="formData"
        ref="formData"
        :rules="rules"
        :inline="true"
        class="demo-form-inline"
        size='mini'>

        <el-form-item label="姓名" prop="userName">
          <el-input v-model="formData.userName" autocomplete="off" style="width:130px" disabled></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model="formData.age" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input v-model="formData.remark" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('formData')">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,editUser('formData')">确 定</el-button>
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
          age: '',
          sex: '',
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

      toEditUser: function () {

        const param = {};
        param.userId = this.userId;
        this.$post("/user/queryUser", param).then((response) => {
          if (response.code == 1) {
            this.formData = response.data;
          }
        }).catch(() => {
          this.$message("获取用户信息失败，请联系管理员。");
        });
      },

      editUser: function (formData) {

        this.$refs[formData].validate((valid) => {

          if (!valid) {
            return false;
          } else {
            const param = this.formData;
            param.userId = this.userId;

            this.$post("/user/updateUser", param).then((response) => {
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
        });
      },
      cancel: function (formData) {
        //清空表单数据
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
