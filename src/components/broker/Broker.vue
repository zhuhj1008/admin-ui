<template>
  <div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="brokerId" label="编号"></el-table-column>
      <el-table-column prop="brokerName" label="经销商"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="查看" width="50">
        <template slot-scope="scope">
          <el-button @click="deleteBroker(scope.row.brokerId)" type="text" icon="el-icon-view"
                     size="small"></el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="修改" width="50">
        <template slot-scope="scope">
          <el-button @click="deleteBroker(scope.row.brokerId)" type="text" icon="el-icon-edit"
                     size="small"></el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="删除" width="50">
        <template slot-scope="scope">
          <el-button @click="deleteBroker(scope.row.brokerId)" type="text" icon="el-icon-delete"
                     size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          brokerId: "1",
          contact: "周冠一",
          phone: "13866668888",
          brokerName: "河北保定冠一装饰",
          createTime: "20190516"
        }, {
          brokerId: "2",
          contact: "周冠一",
          phone: "13866668888",
          brokerName: "河北保定冠一装饰",
          createTime: "20190516"
        }, {
          brokerId: "3",
          contact: "周冠一",
          phone: "13866668888",
          brokerName: "河北保定冠一装饰",
          createTime: "20190516"
        }, {
          brokerId: "4",
          contact: "周冠一",
          phone: "13866668888",
          brokerName: "河北保定冠一装饰",
          createTime: "20190516"
        }]
      };
    },
    methods: {
      deleteBroker: function (brokerId) {
        console.log("删除，编号：" + brokerId)
      },
    }
  }
</script>

<style scoped>

</style>
