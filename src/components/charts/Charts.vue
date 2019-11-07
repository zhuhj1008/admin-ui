<template>
  <el-main>
    <!-- 下拉列表是通过command传值的-->
    <el-dropdown style="float: left" @command="queryData">
      <span class="el-dropdown-link">年限<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(year,index) in years" :command=year :key=index>{{year}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <div class="content-title">年度TOP10</div>
          <ve-bar :data="barChartData" :settings="barChartSettings"></ve-bar>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">订单年度走势</div>
          <ve-line :data="lineChartData"
                   :settings="lineChartSettings"
                   :mark-point="lineChartMarkPoint"></ve-line>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">地区订单占比</div>
          <ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
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
        years: [2018, 2019],
        barChartData: {
          columns: ['brokerName', 'amount', 'total'],
          rows: [
            {'brokerName': '百家红', 'amount': 1393, 'total': 1},
            {'brokerName': '金满屋', 'amount': 3530, 'total': 3},
            {'brokerName': '红海', 'amount': 2923, 'total': 2},
            {'brokerName': '朱鸿钧', 'amount': 1723, 'total': 1},
            {'brokerName': '周冠一有限公司', 'amount': 3792, 'total': 3},
            {'brokerName': '陈', 'amount': 4593, 'total': 6},
            {'brokerName': '云', 'amount': 4893, 'total': 7},
            {'brokerName': '云', 'amount': 4293, 'total': 8},
            {'brokerName': '同', 'amount': 5593, 'total': 9},
            {'brokerName': '学', 'amount': 2593, 'total': 1},
          ]
        },
        barChartSettings:{
          xAxisType: ['KMB', 'KMB'],
          xAxisName: ['amount', 'total'],
          axisSite: {
            top: ['amount']
          },
          stack: {
            'xxx': ['amount', 'total']
          }
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
          dimension: '地区',
          metrics: '订单量'
        },
        ringChartSettings2: {
          dimension: '地区',
          metrics: '订单金额'
        }
      }
    },
    created: function () {

    },
    methods: {
      queryData(year) {
        this.queryLineData(year);
        this.queryRingData(year);
        this.$message('数据查询完成' + year);
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
            this.ringChartData.rows = JSON.parse(JSON.stringify(response.data)
              .replace(/region/g, '地区').replace(/total/g, '订单量').replace(/amount/g, '订单金额'));
          }
        })
      }
    }, mounted: function () {
      //默认加载当前年份的数据
      const currentYear = new Date().getFullYear();
      this.queryLineData(currentYear);
      this.queryRingData(currentYear);
    }
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

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
