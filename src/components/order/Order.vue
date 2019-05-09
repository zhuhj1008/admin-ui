<template>
  <div>
    <!-- 搜索 -->
    <el-form :inline="true" :model="searchForm" class="demo-form-inline" size='mini'>
      <el-form-item>
        <order-add @queryOrder="queryOrder"></order-add>
        <!--<order-add v-on:addOrder="addOrder"></order-add>-->
      </el-form-item>
      <el-form-item label="单号">
        <el-input v-model="searchForm.orderId" placeholder="请输入订单号"/>
      </el-form-item>
      <el-form-item label="经销商">
        <el-input v-model="searchForm.brokerName" placeholder="请输入姓名"/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="searchForm.brokerPhone" placeholder="请输入电话 "/>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="searchForm.orderStatus" placeholder="订单状态">
          <template v-for="status in orderStatus">
            <el-option :label="status.status" :value="status.id"/>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="起止时间">
        <el-col :span="10">
          <el-date-picker type="date" placeholder="开始日期" v-model="searchForm.beginDate"
                          style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="10">
          <el-date-picker type="date" placeholder="结束日期" v-model="searchForm.endDate"
                          style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="queryOrder()">搜索</el-button>
      </el-form-item>
    </el-form>

    <!--表格 -->
    <el-table :data="orderList" style="width: 100%" height="460" size='mini'>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="订单类型">
              <span>{{ props.row.orderType }}</span>
            </el-form-item>
            <el-form-item label="实收总额">
              <span>{{ props.row.actualAmount }}</span>
            </el-form-item>
            <el-form-item label="经销商电话">
              <span>{{ props.row.brokerPhone }}</span>
            </el-form-item>
            <el-form-item label="客户电话">
              <span>{{ props.row.customerPhone }}</span>
            </el-form-item>
            <el-form-item label="送货地址">
              <span>{{ props.row.customerAddress }}</span>
            </el-form-item>
            <el-form-item label="备注">
              <span>{{ props.row.remark }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="orderId"></el-table-column>
      <el-table-column label="经销商" prop="brokerName"></el-table-column>
      <el-table-column label="客户" prop="customerName"></el-table-column>
      <el-table-column label="订单状态" prop="orderStatus"></el-table-column>
      <el-table-column label="订单总额" prop="totalAmount"></el-table-column>
      <el-table-column label="订单日期" prop="createTime" :formatter="dateFormatter"></el-table-column>
      <el-table-column label="交付日期" prop="deliveryTime" :formatter="dateFormatter"></el-table-column>
      <el-table-column fixed="right" label="修改" width="50">
        <template slot-scope="scope">
          <edit-order @queryOrder="queryOrder" :orderId="scope.row.orderId"></edit-order>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="添加" width="50">
        <template slot-scope="scope">
          <edit-order-detail :orderId="scope.row.orderId"></edit-order-detail>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="下载" width="50">
        <template slot-scope="scope">
          <el-button @click="downLoadOrder(scope.row.orderId)" type="text" icon="el-icon-download"
                     size="small"></el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="删除" width="50">
        <template slot-scope="scope">
          <el-button @click="deleteOrder(scope.row.orderId)" type="text" icon="el-icon-delete"
                     size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div style="float: right; margin-top: 10px; margin-bottom: 5px;">
      <el-pagination background small
                     :total="page.total"
                     :current-page.sync="searchForm.pageNo"
                     :page-size="searchForm.pageSize"
                     @current-change="queryOrder()">
      </el-pagination>
    </div>
  </div>
</template>


<script>
  import OrderAdd from '@/components/order/OrderAdd'
  import EditOrder from '@/components/order/EditOrder'
  import EditOrderDetail from '@/components/order/EditOrderDetail'

  export default {
    data() {
      return {
        orderStatus: this.$store.state.order.orderStatus,
        page: {
          total: 400,
        },
        searchForm: {
          orderId: '',
          brokerName: '',
          brokerPhone: '',
          orderStatus: '',
          beginDate: '',
          endDate: '',
          pageNo: 1,
          pageSize: 10
        },
        orderList: []
      }
    },
    mounted:function () {
      this.queryOrder();
    },
    methods: {
      queryOrder: function () {

        this.$post('/order/query', this.searchForm).then((response) => {
          if (response.code == 1) {
            this.page.total = response.data.total;
            this.orderList = response.data.contents;
          }
        });
      },
      editOrder: function (orderNum) {
        console.log('修改订单');
        console.log(orderNum);
      },
      deleteOrder: function (orderNum) {
        this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('删除订单' + orderNum);
          this.$notify({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      downLoadOrder(orderNum) {
        console.log('下载订单' + orderNum);
      },
      dateFormatter(row, column) {
        const date = new Date(row[column.property])
        const Y = date.getFullYear() + '-'
        const M = date.getMonth() + 1 + '-'
        const D = date.getDate() + ' '
        /*const h = date.getHours() + ':'
        const m = date.getMinutes() + ':'
        const s = date.getSeconds();*/
        return Y + M + D;
      },
    },
    components: {
      "order-add": OrderAdd,
      "edit-order": EditOrder,
      "edit-order-detail": EditOrderDetail
    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
