<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible=true">添加</el-button>

    <el-dialog title="添加经销商" :visible.sync="dialogFormVisible" :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form :inline="true"
               :model="brokerForm"
               :rules="rules"
               size="mini"
               ref="brokerForm"
               prop="brokerForm"
               hide-required-asterisk>
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
          <!--<el-select v-model="brokerForm.city" placeholder="" style="width:75px">
            <el-option key="沧州" label="沧州" value="沧州"></el-option>
            <el-option key="衡水" label="衡水" value="衡水"></el-option>
          </el-select>
          <el-select v-model="brokerForm.county" placeholder="" style="width:75px">
            <el-option key="泊头" label="泊头" value="泊头"></el-option>
            <el-option key="阜城" label="阜城" value="阜城"></el-option>
          </el-select>-->
          <el-input v-model="brokerForm.address" style="width:300px" clearable></el-input>
        </el-form-item>


        <el-form-item label="备注" prop="remark">
          <el-input v-model="brokerForm.remark" style="width:378px" clearable></el-input>
        </el-form-item>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('brokerForm')">取 消</el-button>
        <el-button type="primary" @click="saveBroker('brokerForm')">保 存</el-button>
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
          brokerName: '',
          contact: '',
          phone: '',
          city: '',
          county: '',
          address: '',
          remark: ''
        },
        rules: {
          brokerName: [
            {required: true, message: '请输入经销商', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在2 到 8 个字符', trigger: 'blur'}
          ],
          contact: [
            {min: 2, max: 10, message: '长度在2 到 8 个字符', trigger: 'blur'}
          ],
          phone: [
            {min: 0, max: 11, message: '长度11个字符内', trigger: 'blur'}
          ],
          address: [
            {min: 0, max: 25, message: '长度25个字符内', trigger: 'blur'}
          ],
          remark: [
            {min: 0, max: 25, message: '长度25个字符内', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      cancel: function (formName) {
        // //清空表单数据
        this.$refs[formName].resetFields();
        //清空验证结果
        this.$refs[formName].clearValidate();
        //关闭dialog
        this.dialogFormVisible = false;
      },
      saveBroker: function (formName) {
        //清空验证结果
        this.$refs[formName].clearValidate();
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false;
          } else {
            this.$post("/broker/save", this.brokerForm).then((response) => {
              //清空表单数据
              this.$refs[formName].resetFields();
              this.dialogFormVisible = false;
              if (response.code == 1) {
                //重新加载列表数据
                this.$emit('queryBroker');
                this.$notify({
                  type: 'success',
                  message: '保存成功!'
                });
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
