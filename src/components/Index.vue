<template>
  <el-main>
    <el-dropdown style="float: left">
      <span class="el-dropdown-link">年限<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item aria-selected="true">2019</el-dropdown-item>
        <el-dropdown-item>2018</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <div class="content-title">订单年度走势</div>
          <ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>
        </el-col>

        <el-col :span="6" class="echarts-item">
          <div class="content-title">地区订单占比</div>
          <ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
        </el-col>

        <el-col :span="6" class="echarts-item">
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
        lineChartData: {
          columns: ['日期', '订单量', '订单金额'],
          rows: []
        },
        lineChartSettings: {
          metrics: ['订单量', '订单金额'],
          dimension: ['日期']
        },
        lineChartMarkPoint: {
          data: [{
            name: '最大',
            type: 'max'
          }
          ]
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
      queryLineData: function () {
        const param = {};
        param.years = 2019;
        this.$post("/charts/line", param).then(response => {
          if (response.code == 1) {
            this.lineChartData.rows = JSON.parse(JSON.stringify(response.data)
              .replace(/month/g, '日期').replace(/total/g, '订单量').replace(/amount/g, '订单金额'));
            console.log("折线图数据：" + JSON.stringify(this.lineChartData.rows));
          }
        })
      },
      queryRingData: function () {
        const param = {};
        param.years = 2019;
        this.$post("/charts/ring", param).then(response => {
          if (response.code == 1) {
            this.ringChartData.rows = JSON.parse(JSON.stringify(response.data)
              .replace(/region/g, '地区').replace(/total/g, '订单量').replace(/amount/g, '订单金额'));
            console.log("环形图数据：" + JSON.stringify(this.ringChartData.rows));
          }
        })
      }
    }, mounted: function () {
      this.queryLineData();
      this.queryRingData();
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
