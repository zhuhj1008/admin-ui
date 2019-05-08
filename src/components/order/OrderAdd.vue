<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog title="添加新订单" :visible.sync="dialogFormVisible" width='55%' :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>
      <el-form :model="orderForm" :inline="true" size="mini">
        <template>
          <el-radio v-model="orderForm.orderType" label="1" border>类型一</el-radio>
          <el-radio v-model="orderForm.orderType" label="2" border>类型二</el-radio>
          <el-radio v-model="orderForm.orderType" label="3" border>类型三</el-radio>
          <el-radio v-model="orderForm.orderType" label="4" border>类型四</el-radio>
        </template>
        <br/><br/>
        <div>
          <el-form-item label="经销商名">
            <el-input v-model="orderForm.brokerName" autocomplete="off" style="width:200px" clearable></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="orderForm.brokerPhone" autocomplete="off" style="width:150px" clearable></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item label="客户姓名">
            <el-input v-model="orderForm.customerName" autocomplete="off" style="width:200px" clearable></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="orderForm.customerPhone" autocomplete="off" style="width:150px" clearable></el-input>
          </el-form-item>
        </div>

        <el-form-item label="送货地址">
          <el-input v-model="orderForm.customerAddress" autocomplete="off" style="width:405px" clearable></el-input>
        </el-form-item>

        <div>
          <el-form-item label="订单时间">
            <el-col :span="10">
              <el-date-picker type="date" placeholder="开始日期" v-model="orderForm.createTime"
                              style="width: 160px;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="交付时间">
            <el-col :span="10">
              <el-date-picker type="date" placeholder="开始日期" v-model="orderForm.deliveryTime"
                              style="width: 160px;"></el-date-picker>
            </el-col>
          </el-form-item>
        </div>

        <el-form-item label="备注">
          <el-input v-model="orderForm.remark" autocomplete="off" style="width:430px" clearable></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="submit()">取 消</el-button>
        <el-button type="primary" @click="submit()">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        orderForm: {
          orderType: '',
          brokerName: '',
          customerName: '',
          brokerPhone: '',
          customerPhone: '',
          customerAddress: '',
          remark: '',
          createTime: new Date(),
          deliveryTime: new Date()
        }
      }
    },
    methods: {
      submit: function () {
        this.dialogFormVisible = false;
        console.log('新增订单' + JSON.stringify(this.orderForm));
        this.$post('/order/save', this.orderForm).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        });
        this.$emit('queryOrder');
      },
      cancel: function () {
        this.$confirm('此操作将不会保存订单信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.dialogFormVisible = false;
        }).catch(() => {
        });
      }
    }
  };
</script>

<style>
</style>
