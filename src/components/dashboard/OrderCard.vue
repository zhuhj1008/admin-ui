<template>
  <div>

      <el-row class="box-card">

        <el-col :span="5">
          <el-card>
            <i class="iconfont icon-icon02"></i>
            <el-divider direction="vertical"></el-divider>
            <span>新添加</span>
            <el-divider direction="vertical"></el-divider>
            <span>5</span>
          </el-card>
        </el-col>

        <el-col :span="5" :offset="1">
          <el-card>
            <i class="iconfont icon-anquan"></i>
            <el-divider direction="vertical"></el-divider>
            <span>生产中</span>
            <el-divider direction="vertical"></el-divider>
            <span>3</span>
          </el-card>
        </el-col>

        <el-col :span="5" :offset="2">
          <el-card>
            <i class="iconfont icon-yunshu"></i>
            <el-divider direction="vertical"></el-divider>
            <span>运输中</span>
            <el-divider direction="vertical"></el-divider>
            <span>2</span>
          </el-card>
        </el-col>

        <el-col :span="5" :offset="1">
          <el-card>
            <i class="iconfont icon-yly_jiagong"></i>
            <el-divider direction="vertical"></el-divider>
            <span>安装中</span>
            <el-divider direction="vertical"></el-divider>
            <span>2</span>
          </el-card>
        </el-col>

      </el-row>

      <el-row class="box-card">
        <el-card>
          <el-table :data="orderData">
            <el-table-column label="序号" prop="orderId"></el-table-column>
            <el-table-column label="订单号" prop="orderNo"></el-table-column>
            <el-table-column label="经销商" prop="brokerName"></el-table-column>
            <el-table-column label="客户" prop="brokerName"></el-table-column>
            <el-table-column label="地址" prop="brokerName"></el-table-column>
          </el-table>
        </el-card>
      </el-row>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date(),
        orderData: [
          {"orderId": 1},
          {"orderId": 1},
          {"orderId": 1},
          {"orderId": 1},
          {"orderId": 1},
        ]
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 10px;
  }

</style>
