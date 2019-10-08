<template>
  <div>
    <el-popover
      placement="top-start"
      title="时间线"
      width="200"
      trigger="click">

      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            type="primary"
            size="large"
            :timestamp="activity.date">
            {{activity.node}}
          </el-timeline-item>
        </el-timeline>
      </div>

      <el-button slot="reference"
                 class="iconfont icon-shijian"
                 type="text"
                 size="mini"
                 @click="getTimeLine">
      </el-button>

    </el-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        activities: [
          /*{
            node: '新订单',
            date: '2018-04-12',
            icon: 'iconfont icon-icon02'
          }*/
        ]

      };
    },
    methods: {
      getTimeLine: function () {

        this.activities = [];
        const param = {};
        param.orderId = this.orderId;
        this.$post("/order/timeLine", param).then((response) => {
          if (response.code == 1) {
            //时间数组（接口按照顺序返回的）
            const timeArr = response.data;
            //节点数组
            const nodeArr = new Array("新订单", "已付款", "生产中", "运输中", "安装中", "已完成");
            //图标数组
            const iconArr = new Array("iconfont icon-icon02", "iconfont icon-yulebao", "iconfont icon-anquan", "iconfont icon-yunshuzhong", "iconfont icon-anzhuangshigong-xianxing", "iconfont icon-wancheng")

            for (let i = 0; i < nodeArr.length; i++) {
              let activity = {};
              activity.node = nodeArr[i];
              activity.date = timeArr[i];
              activity.icon = iconArr[i];
              this.activities.push(activity);
            }
          }
        });


      }

    },
    props: [
      "orderId"
    ],
    mounted: function () {
    }
  }
</script>

<style scoped>

</style>
