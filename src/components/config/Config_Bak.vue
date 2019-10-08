<template>
  <div class="config-main">

    <el-tabs v-model="activeName"
             type="card"
             :tab-position="tablePosition">

      <!--订单分类-->
      <el-tab-pane label="订单分类" name="first">
        <div style="float: left">
          <el-tag :key="tag" v-for="tag in orderTypes"
                  closable
                  type="success"
                  :disable-transitions="false"
                  @close="deleteConfig(tag,'orderTypes')">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="addConfigConfirm('orderTypes')"
                    @blur="addConfigConfirm('orderTypes')">
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
                  @close="deleteConfig(tag,'productTypes')">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="addConfigConfirm('productTypes')"
                    @blur="addConfigConfirm('productTypes')">
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
                  @close="deleteConfig(tag,'colors')">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="addConfigConfirm('colors')"
                    @blur="addConfigConfirm('colors')">
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
                  @close="deleteConfig(tag,'stripes')">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
                    ref="saveTagInput" size="small"
                    @keyup.enter.native="addConfigConfirm('stripes')"
                    @blur="addConfigConfirm('stripes')">
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
        orderTypes: localStorage.getItem("orderTypes").split(","),
        productTypes: localStorage.getItem("productTypes").split(","),
        stripes: localStorage.getItem("stripes").split(","),
        colors: localStorage.getItem("colors").split(","),
        inputVisible: false,
        inputValue: '',
        activeName: 'first'
      };
    },
    methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      deleteConfig(tag, type) {
        const param = {};
        param.configKey = type;
        if (type === 'orderTypes') {
          this.orderTypes.splice(this.orderTypes.indexOf(tag), 1);
          param.configValue = this.orderTypes;
        } else if (type === 'productTypes') {
          this.productTypes.splice(this.productTypes.indexOf(tag), 1);
          param.configValue = this.productTypes;
        } else if (type === 'colors') {
          this.colors.splice(this.colors.indexOf(tag), 1);
          param.configValue = this.colors;
        } else if (type === 'stripes') {
          this.stripes.splice(this.stripes.indexOf(tag), 1);
          param.configValue = this.stripes;
        }

        localStorage.setItem(type, param.configValue);

        this.$post("/common/updateConfig", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '修改成功!'
            });
          }
        });

      },

      addConfigConfirm(type) {

        let inputValue = this.inputValue;
        if (inputValue) {
          const param = {};
          param.configKey = type;
          if (type === 'orderTypes') {
            this.orderTypes.push(inputValue);
            param.configValue = this.orderTypes;
          } else if (type === 'productTypes') {
            this.productTypes.push(inputValue);
            param.configValue = this.productTypes;
          } else if (type === 'colors') {
            this.colors.push(inputValue);
            param.configValue = this.colors;
          } else if (type === 'stripes') {
            this.stripes.push(inputValue);
            param.configValue = this.stripes;
          }

          localStorage.setItem(type, param.configValue);

          this.$post("/common/updateConfig", param).then((response) => {
            if (response.code == 1) {
              this.$notify({
                type: 'success',
                message: '修改成功!'
              });
            }
          });
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
