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
        <el-button type="primary" icon="el-icon-search" @click="queryCustomerList">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="customerId" label="编号" width="180"></el-table-column>
      <el-table-column prop="wxAccount" label="微信" width="180"></el-table-column>
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

      <el-table-column fixed="right" label="修改" width="50">
        <customer-edit></customer-edit>
        <template slot-scope="scope">
          <!--<edit-order @queryOrder="queryOrder" :orderId="scope.row.orderId"></edit-order>-->
          <customer-edit :customerId="scope.row.customerId"></customer-edit>
        </template>
      </el-table-column>
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

  import CustomerEdit from '@/components/customer/CustomerEdit'

  export default {
    data() {
      return {
        searchForm: {
          wxAccount: '',
          phone: '',
          remark: '',
          pageNo: 1,
          pageSize: 10
        },
        page: {
          total: 50,
        },
        tableData: []
      }
    },
    methods: {
      queryCustomerList: function () {
        this.$post("/customer/queryList", this.searchForm).then((response) => {
          if (response.code == 1) {
            this.page.total = response.data.total;
            this.tableData = response.data.contents;
            console.log(JSON.stringify(this.tableData))
          }
        }).catch(() => {
          this.$message("加载数据失败");
        })
      },

      changeSize: function (val) {
        this.searchForm.pageSize = val;
        this.queryCustomerList();
      },

      changeStatus: function (customerId) {
        const param = {};
        param.customerId = customerId;
        this.$post("/customer/changeEnable", param).then((response) => {
          if (response.code === 1) {
            this.$notify({
              type: 'success',
              message: '修改成功!'
            });
          }
        }).catch(() => {
          this.$message("修改状态失败");
        });

      }
    },

    mounted: function () {
     this.queryCustomerList();
    },
    components: {
      "customer-edit": CustomerEdit,
    }


  }
</script>

<style scoped>

</style>
