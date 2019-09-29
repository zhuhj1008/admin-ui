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
                 icon="el-icon-time"
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
            icon: 'el-icon-more'
          },
          {
            content: '生产中',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
          },
          {
            content: '安装中',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
          },
          {
            content: '已完成',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
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
