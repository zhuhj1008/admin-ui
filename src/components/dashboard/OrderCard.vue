<template>
  <div>

    <el-row class="box-card">

      <el-col :span="5">
        <el-card class="bgcolor">
          <i class="iconfont icon-icon02"></i>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false" @click="orderStatus = 1,pageNo = 1,queryOrderCard()">新添加</el-link>
          <el-divider direction="vertical"></el-divider>
          <span>{{orderCard.newOrder}}</span>
        </el-card>
      </el-col>

      <el-col :span="5" :offset="1">
        <el-card class="bgcolor">
          <i class="iconfont icon-anquan"></i>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false" @click="orderStatus = 3,pageNo = 1,queryOrderCard()">生产中</el-link>
          <el-divider direction="vertical"></el-divider>
          <span>{{orderCard.processOrder}}</span>
        </el-card>
      </el-col>

      <el-col :span="5" :offset="2">
        <el-card class="bgcolor">
          <i class="iconfont icon-yunshu"></i>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false" @click="orderStatus = 4,pageNo = 1,queryOrderCard()">运输中</el-link>
          <el-divider direction="vertical"></el-divider>
          <span>{{orderCard.transportOrder}}</span>
        </el-card>
      </el-col>

      <el-col :span="5" :offset="1">
        <el-card class="bgcolor">
          <i class="iconfont icon-yly_jiagong"></i>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false" @click="orderStatus = 5,pageNo = 1,queryOrderCard()">安装中</el-link>
          <el-divider direction="vertical"></el-divider>
          <span>{{orderCard.installOrder}}</span>
        </el-card>
      </el-col>

    </el-row>

    <el-row class="box-card">
      <el-card>

        <el-table :data="orderCard.orderData.contents">
          <el-table-column label="序号" prop="orderId"></el-table-column>
          <el-table-column label="订单号" prop="orderNo"></el-table-column>
          <el-table-column label="经销商" prop="brokerName"></el-table-column>
          <el-table-column label="客户" prop="brokerName"></el-table-column>
          <el-table-column label="地址" prop="brokerName"></el-table-column>
        </el-table>

        <!-- 分页 -->
        <div style="float: right; margin-top: 10px; margin-bottom: 5px;">
          <el-pagination background small
                         layout=" total, prev, pager, next"
                         :total="orderCard.orderData.total"
                         :current-page.sync="pageNo"
                         :page-size="pageSize"
                         @current-change="queryOrderCard()">
          </el-pagination>
        </div>
      </el-card>
    </el-row>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderStatus: 1,
        pageSize: 5,
        pageNo: 1,

        orderCard: {
          newOrder: '',
          processOrder: '',
          transportOrder: '',
          installOrder: '',
          orderData: {
            total: 0,
            contents: []
          }
        },
      }
    },
    methods: {
      queryOrderCard: function () {
        const searchForm = {};
        searchForm.orderStatus = this.orderStatus;
        searchForm.pageSize = this.pageSize;
        searchForm.pageNo = this.pageNo;
        this.$post("/dashboard/orderCard", searchForm).then((response) => {
          if (response.code == 1) {
            this.orderCard = response.data;
          }
        })
      }
    },
    mounted: function () {
      this.queryOrderCard();
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 10px;
  }

  .bgcolor {
    /*background-color: #40FFB9;*/
    /*background-color: #40DFFF;*/
  }

</style>
