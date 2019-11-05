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
          <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
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
        chartSettings:{
          xAxisType: ['KMB', 'KMB'],
          xAxisName: ['订单金额', '订单量'],
          axisSite: {
            top: ['订单金额']
          },
          stack: {
            'xxx': ['订单金额', '订单量']
          }
        },
        chartData: {
          columns: ['经销商', '订单金额', '订单量'],
          rows: [
            {'经销商': '百家红', '订单金额': 1393, '订单量': 1},
            {'经销商': '金满屋', '订单金额': 3530, '订单量': 3},
            {'经销商': '红海', '订单金额': 2923, '订单量': 2},
            {'经销商': '朱鸿钧', '订单金额': 1723, '订单量': 1},
            {'经销商': '周冠一有限公司', '订单金额': 3792, '订单量': 3},
            {'经销商': '陈', '订单金额': 4593, '订单量': 6},
            {'经销商': '云', '订单金额': 4893, '订单量': 7},
            {'经销商': '云', '订单金额': 4293, '订单量': 8},
            {'经销商': '同', '订单金额': 5593, '订单量': 9},
            {'经销商': '学', '订单金额': 2593, '订单量': 1},
          ]
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
