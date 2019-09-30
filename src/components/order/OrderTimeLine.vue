<template>
  <div>
    <el-popover
      placement="top-start"
      title="时间线"
      width="200"
      trigger="hover">

      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>

      <el-button slot="reference"
                 class="iconfont icon-shijian"
                 type="text"
                 size="mini">
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
          {
            content: '新订单',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'iconfont icon-icon02'
          },
          {
            content: '已付款',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'iconfont icon-yulebao'
          },
          {
            content: '生产中',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'iconfont icon-shuju'
          },
          {
            content: '安装中',
            timestamp: '',
            size: 'large',
            type: 'primary',
            icon: 'iconfont icon-anzhuangshigong-xianxing'
          },
          {
            content: '已完成',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'iconfont icon-wancheng'
          }
        ]

      };
    },
    methods: {
      getTimeLine: function () {

      }

    }
  }
</script>

<style scoped>

</style>
