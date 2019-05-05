<template>
  <div>
    <el-button @click="toEditOrder()" type="text" icon="el-icon-edit" size="mini"></el-button>
    <el-dialog title="修改订单" :visible.sync="dialogFormVisible" close-on-press-escape:false append-to-body>
      <el-form :model="form" :inline="true" size="mini">
        <div>
          <el-form-item>
            <el-radio v-model="form.orderType" label="1" border>三个字</el-radio>
            <el-radio v-model="form.orderType" label="2" border>三个字</el-radio>
            <el-radio v-model="form.orderType" label="3" border>三个字</el-radio>
            <el-radio v-model="form.orderType" label="4" border>三个字</el-radio>
          </el-form-item>
        </div>

        <el-form-item label="单号">
          <el-input v-model="form.orderNo" autocomplete="off" style="width:130px" disabled></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.count" autocomplete="off" style="width:90px" disabled></el-input>
        </el-form-item>
        <el-form-item label="总额">
          <el-input v-model="form.amount" autocomplete="off" style="width:90px" disabled></el-input>
        </el-form-item>
        <el-form-item label="实收">
          <el-input v-model="form.amount" autocomplete="off" style="width:170px" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态" style="width:240px">
          <el-select v-model="form.orderStatus" placeholder="">
            <el-option label="新订单" value="shanghai"></el-option>
            <el-option label="已完成" value="beijing"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="代理">
          <el-input v-model="form.brokerName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.brokerPhone" autocomplete="off" style="width:163px" clearable></el-input>
        </el-form-item>
        <el-form-item label="客户">
          <el-input v-model="form.customerName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.customerPhone" autocomplete="off" style="width:163px" clearable></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="form.customerAddress" autocomplete="off" style="width:416px" clearable></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" autocomplete="off" style="width:416px" clearable></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editOrder()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          orderType: '3',
          orderNo: '20190407003',
          orderStatus: '已完成',
          brokerName: '朱鸿钧',
          brokerPhone: '15175225612',
          customerName: '朱鸿钧',
          customerPhone: '15175225612',
          customerAddress: '河北省保定市河北大学2114',
          count: 10,
          amount: '170.45',
          remark: '',
        }
      };
    },
    methods: {
      toEditOrder: function () {
        this.dialogFormVisible = true;
        console.log('修改订单' + this.orderId);
      },
      editOrder: function () {
        this.dialogFormVisible = false;
        console.log('修改订单' + this.orderId);
      }
    },
    props:[
      "orderId"
    ]
  };
</script>

<style>
</style>
