<template>
  <div class="config-main">

    <el-tabs v-model="activeName"
             type="card"
             @tab-click="handleClick"
             :tab-position="tablePosition">

      <!--订单分类-->
      <el-tab-pane label="订单分类" name="first">
        <div style="float: left">
          <el-tag :key="tag" v-for="tag in orderTypes"
                  closable
                  type="success"
                  :disable-transitions="false"
                  @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="medium" @click="showInput">+ 添加</el-button>
        </div>
      </el-tab-pane>

      <!--商品分类-->
      <el-tab-pane label="商品分类" name="second">
        <div style="float: left">
          <el-tag :key="tag" v-for="tag in productTypes"
                  closable
                  type="success"
                  :disable-transitions="false"
                  @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
        </div>
      </el-tab-pane>


      <!--颜色-->
      <el-tab-pane label="颜色" name="third">

        <div style="float: left">
          <el-tag :key="tag" v-for="tag in colors"
                  closable
                  type="success"
                  :disable-transitions="false"
                  @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
        </div>
      </el-tab-pane>


      <!--花纹-->
      <el-tab-pane label="花纹" name="fourth">
        <div style="float: left">
          <el-tag :key="tag" v-for="tag in stripes"
                  closable
                  type="success"
                  :disable-transitions="false"
                  @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        tablePosition: 'top',
        orderTypes: ['实木复合门', '工艺贴皮门', '原木门', '钢木门'],
        productTypes: ['木门', '色板', '配件'],
        stripes: ['斜纹', '横纹', '原木纹'],
        colors: ['黑胡桃', '哑光白', '棕色', '亮白'],
        inputVisible: false,
        inputValue: '',
        activeName: 'first'
      };
    },
    methods: {
      handleClose(tag) {
        this.orderTypes.splice(this.orderTypes.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.orderTypes.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
  .config-main {
    height: 700px;

  }

  .el-tag + .el-tag {
    margin-left: 10px;
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
</style>
