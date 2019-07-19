<template>
     
  <div>
    <el-card>
      <img src="../../assets/product/product_add.svg" style="text-align:center; width: 60px; height: 170px">
      <div style="padding: 5px;">
        <el-button type="text" class="error" @click="dialogFormVisible=true">添加</el-button>
      </div>
    </el-card>
    <el-dialog title="新加产品" :visible.sync="dialogFormVisible" width='55%' :show-close=false
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form :model="form" :inline="true" size="mini" ref="form" prop="form">

        <el-form-item label="名称" prop="productName">
          <el-input v-model="form.productName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="分类" prop="productType">
          <el-cascader v-model="form.productType" :options="productTypes"></el-cascader>
        </el-form-item>

        <el-form-item label="图册" prop="book">
          <el-input v-model="form.book" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="form.productCode" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="价格">
          <el-col :span="11.5">
            <el-input v-model="form.minPrice" autocomplete="off" style="width:100px" clearable></el-input>
          </el-col>
          <el-col class="line" :span="1">~</el-col>
          <el-col :span="11.5">
            <el-input v-model="form.maxPrice" autocomplete="off" style="width:100px" clearable></el-input>
          </el-col>
        </el-form-item>
        <div>
          <el-form-item label="小图" prop="productCode">
            <el-upload class="upload-demo" drag list-type="picture"
                       :on-success="uploadSuccess()"
                       :http-request="upload()"
                       :headers="uploadHeaders"
                       :file-list="smallPictures">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__text">小图只能上传一个</div>
            </el-upload>

            <!--<el-upload class="upload-demo" drag
                       list-type="picture" :data="smallPicture">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__text">小图只能上传一个</div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>-->
          </el-form-item>

          <el-form-item label="大图" prop="productCode">
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture" multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__text">大图能上传多个</div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </div>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,save()">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        uploadHeaders: {
          authorization: '*'
        },
        smallPictures:'',
        form: {
          productName: '',
          productType: [],
          productCode: '',
          picture: '',
          book: '',
          minPrice: '',
          maxPrice: ''
        },
      }
    },
    methods: {

      uploadSuccess: function(){
        this.$notify({
          type: 'info',
          message: '上传成功'
        });
        console.log("上传成功："+JSON.stringify(this.smallPictures))
      },
      save: function () {
        console.log("productType" + JSON.stringify(this.form.productType[this.form.productType.length - 1]));
        console.log("picture" + JSON.stringify(this.form.picture))
      }
    },
    props: [
      "productTypes"
    ]
  }
</script>

<style>

</style>
