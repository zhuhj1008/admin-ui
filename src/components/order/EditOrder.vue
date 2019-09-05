<template>
  <div>
    <el-button @click="dialogFormVisible = true,toEditOrder()" type="text" icon="el-icon-edit" size="mini"></el-button>
    <el-dialog title="修改订单" :visible.sync="dialogFormVisible" width='55%' :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>
      <el-form :model="form" :inline="true" size="mini">
        <div>
          <el-form-item>
              <el-radio v-for="item in typeArr"  :key="item.id" v-model="form.orderType" :label="item.id" border>{{item.text}}</el-radio>
          </el-form-item>
        </div>

        <el-form-item label="单号">
          <el-input v-model="form.orderId" autocomplete="off" style="width:130px" disabled></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.count" autocomplete="off" style="width:90px" disabled></el-input>
        </el-form-item>
        <el-form-item label="总额">
          <el-input v-model="form.totalAmount" autocomplete="off" style="width:90px" disabled></el-input>
        </el-form-item>
        <el-form-item label="实收">
          <el-input v-model="form.actualAmount" autocomplete="off" style="width:170px" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态" style="width:240px" v-model="form.orderStatus">
          <el-select v-model="form.orderStatus" placeholder="">
            <el-option v-for="item in statusArr" :key="item.id" :label="item.status"
                       :value="item.status"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="经销">
          <!--<el-input v-model="form.brokerName" autocomplete="off" style="width:200px" clearable></el-input>-->
          <el-autocomplete v-model="form.brokerName"
                           :fetch-suggestions="queryBroker"
                           style="width:200px"></el-autocomplete>
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
        <el-button type="primary" @click="dialogFormVisible = false,editOrder()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        dialogFormVisible: false,
        statusArr: this.$store.state.order.orderStatus,
        typeArr: this.$store.state.order.orderType,
        suggestBroker:[],
        form: {
          selected:'1',
          orderId: '',
          orderType: '',
          orderStatus: '',
          brokerName: '',
          brokerPhone: '',
          customerName: '',
          customerPhone: '',
          customerAddress: '',
          count: '',
          totalAmount: '',
          actualAmount: '',
          remark: '',
        }
      };
    },
    methods: {
      toEditOrder: function () {
        const param = {};
        param.orderId = this.orderId;
        this.$post("/order/queryById", param).then((response) => {
          if (response.code == 1) {
            this.form = response.data;
            console.log("aaa"+JSON.stringify(this.form));
          }
        });
      },
      queryBroker: function (queryString, cb) {
        this.loadBroker();
        const suggestBroker = this.suggestBroker;
        const results = queryString ? suggestBroker.filter(this.createFilter(queryString)) : suggestBroker;
        // 调用 callback 返回建议列表的数据
        cb(results);

      },
      createFilter(queryString) {
        return (broker) => {
          return (broker.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
        };
      },
      editOrder: function () {
        console.log('修改订单' + this.orderId);
        this.$post("/order/update", this.form).then((response) => {
          if (response.code == 1) {
            //重新加载列表数据
            this.$emit('queryOrder');
            this.$notify({
              type: 'success',
              message: '修改成功!'
            });
          }
        });
      },
      loadBroker: function () {
        this.$post("/broker/queryAllName").then(response => {
          if (response.code == 1) {
            const nameList = response.data;
            console.log(JSON.stringify(nameList));
            for (const name of nameList) {
              const broker = {};
              broker.value = name;
              this.suggestBroker.push(broker);
            }
          }
        });
      }
    },
    props: [
      "orderId"
    ]
  };
</script>

<style>
</style>
