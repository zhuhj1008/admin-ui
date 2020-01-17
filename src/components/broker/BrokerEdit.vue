<template>
  <div>

    <el-button @click="dialogFormVisible=true,toEdit()"
               type="text"
               icon="iconfont icon-xiugaiyonghuxinxi"
               size="small">
    </el-button>

    <el-dialog title="代理商信息"
               :visible.sync="dialogFormVisible"
               :show-close=false
               :close-on-press-escape=false
               :close-on-click-modal="false"
               append-to-body>

      <el-form :model="brokerForm"
               :inline="true"
               size="mini"
               ref="brokerForm"
               prop="brokerForm"
               :rules="rules"
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
          <el-select v-model="brokerForm.city" placeholder="" style="width:75px">
            <el-option key="沧州" label="沧州" value="沧州"></el-option>
            <el-option key="衡水" label="衡水" value="衡水"></el-option>
          </el-select>
          <el-select v-model="brokerForm.county" placeholder="" style="width:75px">
            <el-option key="泊头" label="泊头" value="泊头"></el-option>
            <el-option key="阜城" label="阜城" value="阜城"></el-option>
          </el-select>
          <el-input v-model="brokerForm.address" style="width:378px" clearable></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input v-model="brokerForm.remark" style="width:378px" clearable></el-input>
        </el-form-item>

      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,editSubmit()">保 存</el-button>
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
            {required: true, message: '请输入经销商', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      toEdit: function () {
        const param = {};
        param.brokerId = this.brokerId;
        this.$post("/broker/query", param).then((response) => {
          if (response.code == 1) {
            this.brokerForm = response.data;
          }
        });
      },
      editSubmit: function () {
        this.$post("/broker/update", this.brokerForm).then((response) => {
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
    },
    props: [
      "brokerId"
    ]
  }
</script>

<style scoped>

</style>
