<template>
  <el-main>
    <!-- 下拉列表是通过command传值的-->
    <el-dropdown style="float: left" @command="queryData">
      <span class="el-dropdown-link">年限<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="year in years" :command=year>{{year}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <div class="content-title">小程序访问统计</div>
          <ve-histogram :data="histogramChartData" :settings="histogramChartSettings"
                        :mark-line="histogramChartMarkLine"></ve-histogram>
        </el-col>

        <el-col :span="12" class="echarts-item">
          <div class="content-title">订单年度走势</div>
          <ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>
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
        years:[2018,2019],
        histogramChartData: {
          columns: ['日期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          rows: [{
            '日期': '周一',
            '直接访问': 320,
            '邮件营销': 120,
            '联盟广告': 220,
            '视频广告': 150,
            '搜索引擎': 862,
            '百度': 620,
            '谷歌': 120,
            '必应': 60,
            '其他': 62
          }, {
            '日期': '周二',
            '直接访问': 332,
            '邮件营销': 132,
            '联盟广告': 182,
            '视频广告': 232,
            '搜索引擎': 1018,
            '百度': 732,
            '谷歌': 132,
            '必应': 72,
            '其他': 82
          }, {
            '日期': '周三',
            '直接访问': 301,
            '邮件营销': 101,
            '联盟广告': 191,
            '视频广告': 201,
            '搜索引擎': 964,
            '百度': 701,
            '谷歌': 101,
            '必应': 71,
            '其他': 91
          }, {
            '日期': '周四',
            '直接访问': 334,
            '邮件营销': 134,
            '联盟广告': 234,
            '视频广告': 154,
            '搜索引擎': 1026,
            '百度': 734,
            '谷歌': 134,
            '必应': 74,
            '其他': 84
          }, {
            '日期': '周五',
            '直接访问': 390,
            '邮件营销': 90,
            '联盟广告': 290,
            '视频广告': 190,
            '搜索引擎': 1679,
            '百度': 1090,
            '谷歌': 290,
            '必应': 190,
            '其他': 109
          }, {
            '日期': '周六',
            '直接访问': 330,
            '邮件营销': 230,
            '联盟广告': 330,
            '视频广告': 330,
            '搜索引擎': 1600,
            '百度': 1130,
            '谷歌': 230,
            '必应': 130,
            '其他': 110
          }, {
            '日期': '周日',
            '直接访问': 320,
            '邮件营销': 210,
            '联盟广告': 310,
            '视频广告': 410,
            '搜索引擎': 1570,
            '百度': 1120,
            '谷歌': 220,
            '必应': 110,
            '其他': 120
          }]
        },
        histogramChartSettings: {
          metrics: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          dimension: ['日期']
          // stack: {
          //   '广告': ['邮件营销', '联盟广告', '视频广告'],
          //   '搜索引擎': ['百度', '谷歌', '必应', '其他']
          // }
        },
        histogramChartMarkLine: {
          data: [
            [{type: 'min'}, {type: 'max'}]
          ]
        },
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
          },{
            name: '最小',
            type: 'min'
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
      queryData(year){
        this.queryLineData(year);
        this.queryRingData(year);
        this.$message('数据查询完成' + year);
      },
      queryLineData: function (year) {
        const param = {};
        param.years = year;
        this.$post("/charts/line", param).then(response => {
          if (response.code == 1) {
            this.lineChartData.rows = JSON.parse(JSON.stringify(response.data)
              .replace(/month/g, '日期').replace(/total/g, '订单量').replace(/amount/g, '订单金额'));
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
