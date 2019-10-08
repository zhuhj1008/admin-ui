<template>
  <div>

    <el-popover
      placement="top-start"
      width="50"
      trigger="click">

      <el-button slot="reference"
                 class="iconfont icon-shengchanliucheng"
                 type="text"
                 size="mini"
                 @click="getOrderStep">
      </el-button>


      <el-steps :space="40" :active="active" direction="vertical">
        <el-step title="新订单" icon="iconfont icon-icon02"></el-step>
        <el-step title="已付款" icon="iconfont icon-yulebao"></el-step>
        <el-step title="生产中" icon="iconfont icon-anquan"></el-step>
        <el-step title="运输中" icon="iconfont icon-yunshu"></el-step>
        <el-step title="安装中" icon="iconfont icon-anzhuangshigong-xianxing"></el-step>
        <el-step title="已完成" icon="iconfont icon-wancheng"></el-step>
      </el-steps>

      <el-button @click="nextStep" size="mini" :disabled=disable>下一步</el-button>

    </el-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        disable: false
      }
    },

    methods: {
      getOrderStep: function () {
        const param = {};
        param.orderId = this.orderId;
        this.$post("/order/queryById", param).then((response) => {
          if (response.code == 1) {
            this.active = response.data.orderStatus;
            if (this.active >= 6) {
              this.disable = true;
            }
          }
        });

      },

      nextStep: function () {
        this.active++;
        const param = {};
        param.orderId = this.orderId;
        this.$post("/order/nextStep", param).then((response) => {
          if (response.code == 1) {
            //重新加载列表
            this.$emit('queryOrder');
            this.$notify({
              type: 'success',
              message: '操作成功!'
            });
          }
        });
        if (this.active >= 6) {
          this.disable = true;
          return;
        }
      }
    },
    props: [
      "orderId"
    ]

  }
</script>

<style scoped>

</style>
