<template>
  <div class="config-main">
    <el-row>
      <!--订单分类-->
      <el-col :span="8">
        <el-card class="box-card">

          <div slot="header" class="clearfix">
            <span>订单分类</span>
            <el-button style="float: right; padding: 3px 0" type="text">保存</el-button>
          </div>

          <div style="height: 150px">
            <el-tag :key="tag" v-for="tag in orderTypes" closable
                    :disable-transitions="false" @close="handleClose(tag,'orderTypes')" class="tag-item">
              {{tag}}
            </el-tag>

            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput"
                      size="small" @keyup.enter.native="handleInputConfirm('orderTypes')" @blur="handleInputConfirm">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
          </div>

        </el-card>
      </el-col>


    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderTypes: localStorage.getItem("orderTypes").split(","),
        productTypes: localStorage.getItem("productTypes").split(","),
        stripes: localStorage.getItem("stripes").split(","),
        colors: localStorage.getItem("colors").split(","),

        dynamicTags: localStorage.getItem("colors").split(","),
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      //删除
      handleClose(tag, configType) {
        if (configType == 'orderTypes') {
          this.orderTypes.splice(this.dynamicTags.indexOf(tag), 1);
        }


      },

      //添加
      handleInputConfirm(configType) {
        let inputValue = this.inputValue;
        if (inputValue) {

          if (configType == 'orderTypes') {
            this.orderTypes.push(inputValue);
          }

        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style>
  .config-main {
    min-height: 700px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .text {
    font-size: 14px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    text-align: left;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .tag-item {
    margin-top: 5px;
  }
</style>

