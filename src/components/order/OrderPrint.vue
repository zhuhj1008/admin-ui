<template>
  <div>
    <el-button @click="toPrint()"
               type="text"
               icon="el-icon-printer"
               size="mini">
    </el-button>

      <!--:show-close="false"-->
      <el-drawer
        :visible.sync="table"
        direction="rtl"
        size="100%">

        <div class="head_title" @click="print()">
          鸿达公司订货单
        </div>

        <!--抬头-->

        <el-row>
          <el-col :span="8">单号：20190342342</el-col>
          <el-col :span="8">经销商：鸿达装饰</el-col>
          <el-col :span="4">客户：客户</el-col>
          <el-col :span="4">电话：15175225612</el-col>
        </el-row>


        <el-table :data="formData.tableData" border style="width: 100%" size="mini">
          <el-table-column prop="1" label="序号" width=50></el-table-column>
          <el-table-column prop="2" label="名称" width=120></el-table-column>
          <el-table-column prop="3" label="颜色" width=120></el-table-column>
          <el-table-column prop="4" label="线条" width=120></el-table-column>
          <el-table-column label="尺寸(mm)">
            <el-table-column prop="5" label="长" width=70></el-table-column>
            <el-table-column prop="6" label="宽" width=70></el-table-column>
            <el-table-column prop="7" label="厚" width=70></el-table-column>
          </el-table-column>
          <el-table-column prop="8" label="数量" width=70></el-table-column>
          <el-table-column prop="9" label="单价" width=70></el-table-column>
          <el-table-column prop="10" label="金额" width=120></el-table-column>
          <el-table-column prop="11" label="备注"></el-table-column>
        </el-table>

        <!--结尾-->

        <el-form :inline="true" :model="formData" class="demo-form-inline">
          <el-row>
            <el-col :span="16">
              <el-form-item label="合计  人民币：">人民币</el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="总额：">总额</el-form-item>
            </el-col>
          </el-row>
          <div class="agreement">
            <el-row>一、付款方式：客户确认订单后付50%预付款，即advanceAmount ,余款remainAmount，余款发货前付清。</el-row>
            <el-row>二、收到定金40天交货，运输由甲方负责，安装由甲方负责。（特殊另行商定）</el-row>
            <el-row>三、订单在当日可以修改，下单后不予修改，改单造成的损失由己方承担，定金不予退还。</el-row>
            <el-row>四、质量标准：按中华人民共和国木质门业标准WB/T1024-2006生产及验收。</el-row>
            <el-row>五、本订单客户收到传真后，请确认尺寸、款式，如无误请签字回传。</el-row>
          </div>
          <el-row>
            <!--<el-col :span="16">&nbsp;</el-col>-->
            <el-col :offset=16 :span="4">订货日期</el-col>
            <el-col :span="4">交货日期</el-col>
          </el-row>

          <el-row>
            <!--<el-col :span="16">&nbsp;</el-col>-->
            <el-col :offset=16 :span="4">送货地址：送货地址</el-col>
            <el-col :span="4">客户签字：</el-col>
          </el-row>
        </el-form>


      </el-drawer>


  </div>


</template>

<script>
  export default {

    data() {
      return {
        table: false,
        formData: {
          tableData: [
            {"1": 1},
            {"1": 1},
            {"1": 1},
            {"1": 1},
            {"1": 1},
            {"1": 1},
          ]
        },

      }
    },
    methods: {
      toPrint: function () {
        this.table = true;
        // setTimeout(() => {
        //   this.table = true;
        //   window.print()
        // }, 2000)
      },
      print: function () {
        window.print()
      }
    }
  }
</script>

<style scoped>

  .head_title{
    font-size: 40px;
    text-align: center;
  }

  #head_title{
    font-size: 40px;
    text-align: center;
  }

</style>
