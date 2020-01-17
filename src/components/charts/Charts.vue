<template>
  <el-main>

    <div>

      <el-radio-group v-model="year" @change="queryData">
        <el-radio label="2018" border>2018</el-radio>
        <el-radio label="2019" border>2019</el-radio>
        <el-radio label="2020" border>2020</el-radio>
      </el-radio-group>

    </div>

    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <div class="content-title">年度TOP10</div>
          <ve-bar :data="barChartData" :settings="barChartSettings"></ve-bar>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">地区订单占比</div>
          <ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">订单年度走势</div>
          <ve-line :data="lineChartData"
                   :settings="lineChartSettings"
                   :mark-point="lineChartMarkPoint"></ve-line>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">地区金额占比</div>
          <ve-ring :data="ringChartData" :settings="ringChartSettings2"></ve-ring>
        </el-col>
      </el-row>
    </el-scrollbar>
  </el-main>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        year: "2019",
        years: [2018, 2019],
        barChartData: {
          columns: ['brokerName', 'amount', 'total', 'proportion'],
          rows: []
        },
        barChartSettings: {
          //别名
          labelMap: {
            "brokerName": "经销商",
            "amount": "订单金额",
            "total": "订单量",
            "proportion": "金额占比",
          },
          //排序规则
          dataOrder: {
            label: 'amount',
            order: 'desc'
          },
          //合并
          stack: {
            'xxx': ['amount', 'total', 'proportion']
          },
        },
        lineChartData: {
          //维度和指标集合（第一个为维度-纵向，后边为指标-横向）
          columns: ['month', 'total', 'amount'],
          rows: []//数据
        },
        lineChartSettings: {
          //维度（纵向）
          metrics: ['total', 'amount'],
          //指标（横向）
          dimension: ['month'],
          //别名
          labelMap: {
            month: '日期',
            total: '订单量',
            amount: '订单金额'
          }
        },
        lineChartMarkPoint: {
          data: [{
            name: '最大',
            type: 'max'
          }, {
            name: '最小',
            type: 'min'
          }]
        },
        ringChartData: {
          columns: ['地区', '订单量', '订单金额'],
          rows: []
        },
        ringChartSettings: {
          dimension: 'region',
          metrics: 'total',
          labelMap: {
            region: '地区',
            total: '订单量',
          }
        },
        ringChartSettings2: {
          dimension: 'region',
          metrics: 'amount',
          labelMap: {
            region: '地区',
            amount: '订单金额'
          }
        }
      }
    },
    methods: {
      queryData() {
        this.queryLineData(this.year);
        this.queryRingData(this.year);
        this.queryBarData(this.year);
      },
      queryBarData: function (year) {
        const param = {};
        param.years = year;
        this.$post("/charts/bar", param).then(response => {
          if (response.code == 1) {
            this.barChartData.rows = response.data;
          }
        })
      },
      queryLineData: function (year) {
        const param = {};
        param.years = year;
        this.$post("/charts/line", param).then(response => {
          if (response.code == 1) {
            this.lineChartData.rows = response.data;
          }
        })
      },
      queryRingData: function (year) {
        const param = {};
        param.years = year;
        this.$post("/charts/ring", param).then(response => {
          if (response.code == 1) {
            this.ringChartData.rows = response.data;
          }
        })
      }
    },
    // mounted: function () {
    //   //默认加载当前年份的数据
    //   const currentYear = new Date().getFullYear();
    //   this.queryLineData(currentYear);
    //   this.queryRingData(currentYear);
    //   this.queryBarData(currentYear);
    // }
  }
</script>

<style scoped>
  .content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    padding: 10px 10px;
    font-size: 22px;
    color: #1f2f3d;
  }

</style>
