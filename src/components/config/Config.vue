<template>
  <div class="config-main">
    <el-row>
      <!--订单分类-->
      <el-col :span="8">
        <el-card shadow="hover" class="box-card">

          <div slot="header" class="clearfix">
            <span>订单分类</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="submit1()">保存</el-button>
          </div>

          <div style="height: 150px">
            <el-tag :key="tag" v-for="tag in orderTypes" closable
                    :disable-transitions="false" @close="handleClose1(tag)" class="tag-item">
              {{tag}}
            </el-tag>

            <el-input class="input-new-tag" v-if="inputVisible1" v-model="inputValue" ref="saveTagInput1"
                      size="small" @keyup.enter.native="handleInput1" @blur="handleInput1">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput1">+ 添加</el-button>
          </div>

        </el-card>
      </el-col>


      <!--产品分类-->
      <el-col :span="8">
        <el-card shadow="hover" class="box-card">

          <div slot="header" class="clearfix">
            <span>产品分类</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="submit2()">保存</el-button>
          </div>

          <div style="height: 150px">
            <el-tag :key="tag" v-for="tag in productTypes" closable
                    :disable-transitions="false" @close="handleClose2(tag)" class="tag-item">
              {{tag}}
            </el-tag>

            <el-input class="input-new-tag" v-if="inputVisible2" v-model="inputValue" ref="saveTagInput2"
                      size="small" @keyup.enter.native="handleInput2" @blur="handleInput2">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput2">+ 添加</el-button>
          </div>

        </el-card>
      </el-col>

      <!--条纹-->
      <el-col :span="8">
        <el-card shadow="hover" class="box-card">

          <div slot="header" class="clearfix">
            <span>条纹</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="submit3()">保存</el-button>
          </div>

          <div style="height: 150px">
            <el-tag :key="tag" v-for="tag in stripes" closable
                    :disable-transitions="false" @close="handleClose3(tag)" class="tag-item">
              {{tag}}
            </el-tag>

            <el-input class="input-new-tag" v-if="inputVisible3" v-model="inputValue" ref="saveTagInput3"
                      size="small" @keyup.enter.native="handleInput3" @blur="handleInput3">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput3">+ 添加</el-button>
          </div>

        </el-card>
      </el-col>

      <!--颜色-->
      <el-col :span="12">
        <el-card shadow="hover" class="box-card">

          <div slot="header" class="clearfix">
            <span>颜色</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="submit4()">保存</el-button>
          </div>

          <div style="height: 150px">
            <el-tag :key="tag" v-for="tag in colors" closable
                    :disable-transitions="false" @close="handleClose4(tag)" class="tag-item">
              {{tag}}
            </el-tag>

            <el-input class="input-new-tag" v-if="inputVisible4" v-model="inputValue" ref="saveTagInput4"
                      size="small" @keyup.enter.native="handleInput4" @blur="handleInput4">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput4">+ 添加</el-button>
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
        inputVisible1: false,
        inputVisible2: false,
        inputVisible3: false,
        inputVisible4: false,
        inputValue: ''
      };
    },
    methods: {
      showInput1() {
        this.inputVisible1 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput1.$refs.input.focus();
        });
      },
      showInput2() {
        this.inputVisible2 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput2.$refs.input.focus();
        });
      },
      showInput3() {
        this.inputVisible3 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput3.$refs.input.focus();
        });
      },
      showInput4() {
        this.inputVisible4 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput4.$refs.input.focus();
        });
      },

      //删除
      handleClose1(tag) {
        this.orderTypes.splice(this.orderTypes.indexOf(tag), 1);
      },
      handleClose2(tag) {
        this.productTypes.splice(this.productTypes.indexOf(tag), 1);
      },
      handleClose3(tag) {
        this.stripes.splice(this.stripes.indexOf(tag), 1);
      },
      handleClose4(tag) {
        this.colors.splice(this.colors.indexOf(tag), 1);
      },

      //添加
      handleInput1() {
        if (this.inputValue) {
          this.orderTypes.push(this.inputValue);
        }
        this.inputVisible1 = false;
        this.inputValue = '';
      },
      handleInput2() {
        if (this.inputValue) {
          this.productTypes.push(this.inputValue);
        }
        this.inputVisible2 = false;
        this.inputValue = '';
      },
      handleInput3() {
        if (this.inputValue) {
          this.stripes.push(this.inputValue);
        }
        this.inputVisible3 = false;
        this.inputValue = '';
      },
      handleInput4() {
        if (this.inputValue) {
          this.colors.push(this.inputValue);
        }
        this.inputVisible4 = false;
        this.inputValue = '';
      },

      submit1() {
        const param = {};
        param.configKey = 'orderTypes';
        param.configValue = this.orderTypes;

        localStorage.setItem(param.configKey, param.configValue);

        this.$post("/common/updateConfig", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        });
      },
      submit2() {
        const param = {};
        param.configKey = 'productTypes';
        param.configValue = this.productTypes;

        localStorage.setItem(param.configKey, param.configValue);

        this.$post("/common/updateConfig", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        });
      },
      submit3() {
        const param = {};
        param.configKey = 'stripes';
        param.configValue = this.stripes;

        localStorage.setItem(param.configKey, param.configValue);

        this.$post("/common/updateConfig", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        });
      },
      submit4() {
        const param = {};
        param.configKey = 'colors';
        param.configValue = this.colors;

        localStorage.setItem(param.configKey, param.configValue);

        this.$post("/common/updateConfig", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '保存成功!'
            });
          }
        });
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
    margin: 4px;
  }

  .button-new-tag {
    margin-left: 10px;
    margin-top: 10px;
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
    margin-top: 10px;
  }
</style>

