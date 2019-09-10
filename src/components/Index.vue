<template>
  <el-main>
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <div class="content-title">折线图</div>
          <ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>
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
          columns: ['日期', '订单量', '金额'],
          rows: [
            {'日期': '1月', '订单量': 5, '金额': 1453},
            {'日期': '2月', '订单量': 15, '金额': 3453.43},
            {'日期': '3月', '订单量': 13, '金额': 5454},
            {'日期': '4月', '订单量': 17, '金额': 4453},
            {'日期': '5月', '订单量': 10, '金额': 6453},
            {'日期': '6月', '订单量': 20, '金额': 9453},
            {'日期': '7月', '订单量': 45, '金额': 1453},
            {'日期': '8月', '订单量': 15, '金额': 8453},
            {'日期': '9月', '订单量': 10, '金额': 1453},
            {'日期': '10月', '订单量': 7, '金额': 7453},
            {'日期': '11月', '订单量': 9, '金额': 4453},
            {'日期': '12月', '订单量': 13, '金额': 8453},
          ]
        },
        lineChartSettings: {
          metrics: ['订单量', '金额'],
          dimension: ['日期']
        },
        lineChartMarkPoint: {
          data: [{
            name: '最大值',
            type: 'max'
          }
          ]
        }
      }
    },
    created: function () {
    },
    methods: {}
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
