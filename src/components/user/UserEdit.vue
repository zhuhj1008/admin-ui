<template>
  <div>

    <el-button @click="dialogFormVisible = true,toEditUser()"
               type="text"
               icon="el-icon-edit"
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
        :inline="true"
        class="demo-form-inline"
        size='mini'>

        <el-form-item label="姓名">
          <el-input v-model="formData.userName" autocomplete="off" style="width:130px" disabled></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="formData.phone" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="formData.age" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-input v-model="formData.sex" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="formData.remark" autocomplete="off" style="width:130px"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,editUser">确 定</el-button>
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

      editUser: function () {
        // this.$post("/customer/saveCustomer")
      }


    },
    props: [
      "userId"
    ]

  }
</script>

<style scoped>

</style>
