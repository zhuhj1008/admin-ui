<template>
  <div>

    <el-form :inline="true" :model="searchForm" class="demo-form-inline" size='mini'>

      <el-form-item>
        <broker-add @queryBroker="queryBroker"></broker-add>
      </el-form-item>

      <el-form-item label="经销商">
        <el-input v-model="searchForm.brokerName"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="searchForm.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="searchForm.phone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="queryBroker()">搜索</el-button>
      </el-form-item>
    </el-form>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="brokerId" label="编号"></el-table-column>
      <el-table-column prop="brokerName" label="经销商"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" :formatter="dateFormatter"></el-table-column>

      <el-table-column fixed="right" label="修改" width="50">
        <template slot-scope="scope">
          <broker-edit @queryBroker="queryBroker" :brokerId="scope.row.brokerId"></broker-edit>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="删除" width="50">
        <template slot-scope="scope">
          <el-button @click="deleteBroker(scope.row.brokerId)" type="text" icon="el-icon-delete"
                     size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>


    <div style="float: right; margin-top: 10px; margin-bottom: 5px;">
      <el-pagination background small
                     layout=" total, prev, pager, next, jumper"
                     :total="page.total"
                     :current-page.sync="searchForm.pageNo"
                     :page-size="searchForm.pageSize"
                     @current-change="queryBroker()">
      </el-pagination>

    </div>

  </div>
</template>

<script>
  import BrokerAdd from "@/components/broker/BrokerAdd"
  import BrokerEdit from "@/components/broker/BrokerEdit"

  export default {
    data() {
      return {
        searchForm: {
          brokerName: "",
          contact: "",
          phone: "",
          pageNo: 1,
          pageSize: 10,
        },
        page: {
          total: 0
        },
        tableData: []
      };
    },
    methods: {
      queryBroker: function () {
        this.$post("/broker/queryList", this.searchForm).then((response) => {
          if (response.code == 1) {
            this.page.total = response.data.total;
            this.tableData = response.data.contents;
          }
        })
      },
      deleteBroker: function (brokerId) {
        this.$confirm('此操作将删除该经销商, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const param = {};
          param.brokerId = brokerId;
          this.$post("/broker/delete", param).then((response) => {
            if (response.code == 1) {
              this.queryBroker();
              this.$notify({
                type: 'success',
                message: '删除成功!'
              });
            }
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      dateFormatter(row, column) {
        const date = new Date(row[column.property])
        const Y = date.getFullYear() + '-'
        const M = date.getMonth() + 1 + '-'
        const D = date.getDate() + ' '
        return Y + M + D;
      }
    },
    mounted: function () {
      this.queryBroker();
    },
    components: {
      "broker-add": BrokerAdd,
      "broker-edit": BrokerEdit
    }
  }
</script>

<style scoped>

</style>
