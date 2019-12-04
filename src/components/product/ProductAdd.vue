<template>
     
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible=true">添加</el-button>

    <el-dialog title="新加产品" :visible.sync="dialogFormVisible" :show-close=false width='55%'
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form :model="form"
               :rules="rules"
               :inline="true"
               size="mini" ref="form" prop="form">

        <el-form-item label="上架" prop="shangJia">
          <el-switch
            v-model="form.show"
            active-text="上架"
            inactive-text="不上架">
          </el-switch>
        </el-form-item>
        <br>

        <el-divider content-position="left">商品信息</el-divider>

        <el-form-item label="名称" prop="productName">
          <el-input v-model="form.productName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="分类" prop="productType">
          <el-select v-model="form.productType" placeholder="产品分类" clearable>
            <el-option v-for="(type,index) in productTypes" :key=index :label="type" :value="type"></el-option>
          </el-select>
        </el-form-item>
        <br>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="form.productCode" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="计价单位" prop="unit">
          <el-input v-model="form.unit" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="单价" prop="minPrice">
          <el-input v-model="form.minPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>


        <el-form-item label="~" prop="maxPrice">
          <el-input v-model="form.maxPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>


        <el-divider content-position="left">商品属性</el-divider>

        <el-form-item label="材质" prop="material">
          <el-input v-model="form.material" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="颜色" prop="color">
          <el-input v-model="form.color" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="饰面工艺" prop="technology">
          <el-input v-model="form.technology" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="尺寸" prop="size">
          <el-input v-model="form.size" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="毛重" prop="weight">
          <el-input v-model="form.weight" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="生产周期" prop="timeLimit">
          <el-input v-model="form.timeLimit" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="包装清单" prop="packingList">
          <el-input v-model="form.packingList" autocomplete="off" style="width:300px" clearable></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save('form')">保 存</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        dialogFormVisible: false,
        productTypes: localStorage.getItem("productTypes").split(","),
        form: {
          show: false,
          productName: '',
          productType: '',
          productCode: '',
          book: '',
          minPrice: '',
          maxPrice: '',
          unit: '',
          material: '',
          color: '',
          technology: '',
          size: '',
          weight: '',
          timeLimit: '',
          packingList: ''
        },

        rules: {
          show: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          productName: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          productType: [
            {required: true, message: '请选择分类', trigger: 'blur'}
          ],
          productCode: [
            {required: true, message: '请输入产品编码', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      save: function (form) {
        this.$refs[form].validate((valid) => {
            if (!valid) {
              return false;
            } else {
              this.$post("/product/save", this.form).then((response) => {
                if (response.code == 1) {
                  //关闭聊天框
                  this.dialogFormVisible = false;
                  //清空表单数据
                  this.$refs[form].resetFields();
                  //重新加载列表数据
                  this.$emit('queryProduct');
                  this.$notify({
                    type: 'success',
                    message: '保存成功!'
                  });
                }
              });
            }
          }
        );
      }

    }
  }
</script>

<style>

</style>
