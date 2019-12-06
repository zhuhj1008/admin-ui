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
            v-model="form.shelves"
            active-text="上架"
            inactive-text="不上架">
          </el-switch>
        </el-form-item>
        <br>

        <el-divider content-position="left">商品信息</el-divider>

        <el-form-item label="名称" prop="productName">
          <el-input v-model="form.productName" placeholder="请输入名称" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="分类" prop="productType">
          <el-select v-model="form.productType" placeholder="产品分类" clearable>
            <el-option v-for="(type,index) in productTypes" :key=index :label="type" :value="type"></el-option>
          </el-select>
        </el-form-item>
        <br>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="form.productCode" placeholder="请输入编码" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="价格(元)" prop="minPrice">
          <el-input v-model="form.minPrice" placeholder="最低" autocomplete="off" style="width:80px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="~" prop="maxPrice">
          <el-input v-model="form.maxPrice" placeholder="最高" autocomplete="off" style="width:80px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="计价单位" prop="unit">
          <el-select v-model="form.unit" placeholder="请选择计价单位" style="width:200px" clearable>
            <el-option label="套" value="套"></el-option>
          </el-select>
        </el-form-item>


        <el-divider content-position="left">商品属性</el-divider>

        <el-form-item label="材质" prop="material">
          <el-select v-model="form.material" placeholder="请选择材质" style="width:200px" clearable>
            <el-option label="原木" value="原木"></el-option>
            <el-option label="白橡木" value="白橡木"></el-option>
            <el-option label="杨木" value="杨木"></el-option>
            <el-option label="红松木" value="红松木"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="颜色" prop="color">
          <el-select v-model="form.color" placeholder="选择颜色" style="width:200px" clearable>
            <el-option v-for="(color,index) in colors" :key=index :label="color" :value="color"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="饰面工艺" prop="technology">
          <el-select v-model="form.technology" placeholder="选择工艺" style="width:200px" clearable>
            <el-option label="烤漆" value="烤漆"></el-option>
            <el-option label="天然木皮" value="天然木皮"></el-option>
            <el-option label="合成木皮" value="合成木皮"></el-option>
            <el-option label="木纹纸" value="木纹纸"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="尺寸" prop="size">
          <el-input v-model="form.size" placeholder="输入尺寸" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="毛重" prop="weight">
          <el-input v-model="form.weight" placeholder="输入重量" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="生产周期" prop="timeLimit">
          <el-input v-model="form.timeLimit" placeholder="输入生产周期" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="标签" prop="tags">
          <el-select v-model="form.tags" multiple placeholder="请选择商品标签" style="width:320px">
            <el-option v-for="tag in tagOptions" :key="tag" :label="tag" :value="tag"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="包装清单" prop="packingList">
          <el-select v-model="form.packingList" multiple placeholder="请选择包装清单" style="width:330px">
            <el-option v-for="item in packageOptions" :key="item" :label="item" :value="item"></el-option>
          </el-select>
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
        colors: localStorage.getItem("colors").split(","),
        productTypes: localStorage.getItem("productTypes").split(","),
        packageOptions: localStorage.getItem("packageList").split(","),
        tagOptions: localStorage.getItem("tags").split(","),
        form: {
          shelves: false,
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
          packingList: [],
          tags: []
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
