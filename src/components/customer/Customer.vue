<template>
  <div>
    <el-form
      :model="searchForm"
      prop="searchForm"
      ref="searchForm"
      :inline="true"
      class="demo-form-inline"
      size='mini'>

      <el-form-item>
        <el-button type="primary" icon="el-icon-plus">添加</el-button>
      </el-form-item>

      <el-form-item>
        <el-input v-model.number="searchForm.wxAccount" placeholder="请输入微信号" clearable/>
      </el-form-item>

      <el-form-item>
        <el-input v-model.number="searchForm.phone" placeholder="请输入手机号" clearable/>
      </el-form-item>

      <el-form-item>
        <el-input v-model.number="searchForm.remark" placeholder="请输入备注" clearable/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="customerId" label="编号" width="180"></el-table-column>
      <el-table-column prop="wxAccount" label="微信号" width="180"></el-table-column>
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="enable" label="有效">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeStatus(scope.row.customerId)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
    </el-table>


    <!-- 分页 -->
    <div style="float: right; margin-top: 10px; margin-bottom: 5px;">
      <el-pagination background small
                     layout=" total, sizes, prev, pager, next, jumper"
                     :total="page.total"
                     :current-page.sync="searchForm.pageNo"
                     :page-sizes="[10, 20, 50]"
                     :page-size="searchForm.pageSize"
                     @size-change="changeSize"
                     @current-change="queryCustomerList">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchForm: {
          wxAccount: '',
          phone: '',
          remark: '',
          pageNo: 2,
          pageSize: 10
        },
        page: {
          total: 50,
        },
        tableData: [{
          customerId: '1',
          wxAccount: 'ada',
          nickName: '王小虎',
          phone: '11111111111',
          enable: true,
          address: '上海市普陀区金沙江路 1518 弄',
          remark: '老二'
        }, {
          customerId: '2',
          wxAccount: 'sfsd',
          nickName: '王小虎',
          phone: '11111111111',
          enable: false,
          address: '上海市普陀区金沙江路 1518 弄',
          remark: '老二'
        }, {
          customerId: '3',
          wxAccount: 'qwefds',
          nickName: '王小虎',
          phone: '11111111111',
          enable: false,
          address: '上海市普陀区金沙江路 1518 弄',
          remark: '老二'
        }, {
          customerId: '4',
          wxAccount: 'gdf',
          nickName: '王小虎',
          phone: '11111111111',
          enable: true,
          address: '上海市普陀区金沙江路 1518 弄',
          remark: '老二'
        }]
      }
    },
    methods: {
      queryCustomerList: function () {

        this.$post("/customer/queryList",this.searchForm).then((response) => {
          if (response.code == 1) {
            this.tableData == response.data;
          }
        })

      },

      changeSize: function () {

      },

      changeStatus: function (customerId) {
        console.log("修改状态：" + customerId);
      }
    }


  }
</script>

<style scoped>

</style>
