<template>
     
  <div>
    <div style="padding: 5px;">
      <el-button type="text" class="error" @click="toEditProduct">{{productCode}}</el-button>
      <el-button type="text" class="error" @click="deleteProduct" style="float: right"><i class="el-icon-delete"></i>
      </el-button>
    </div>
    <el-dialog title="产品详情"
               :visible.sync="dialogFormVisible"
               :show-close=false
               :close-on-press-escape=false
               :close-on-click-modal="false"
               append-to-body>

      <el-form :model="form"
               :inline="true"
               :rules="rules"
               size="mini" ref="form" prop="form">

        <el-form-item label="名称" prop="productName">
          <el-input v-model="form.productName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="分类" prop="productTypeArr">
          <el-cascader v-model="form.productTypeArr" :options="productTypes"></el-cascader>
        </el-form-item>

        <el-form-item label="图册" prop="book">
          <el-input v-model="form.book" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="form.productCode" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="价格区间" prop="minPrice">
          <el-input v-model="form.minPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>

        <el-form-item label="~" prop="maxPrice">
          <el-input v-model="form.maxPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>
        <div>
          <el-form-item label="小图" prop="tinyFigure">
            <el-upload class="upload-demo" drag
                       list-type="picture" action=""
                       :http-request="uploadSmall"
                       :headers="uploadHeaders"
                       :file-list="form.tinyFigure"
                       :limit="1">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__text">小图只能上传一个</div>
            </el-upload>

          </el-form-item>

          <el-form-item label="大图" prop="detailFigure">
            <el-upload class="upload-demo" drag
                       list-type="picture" action=""
                       :http-request="uploadPicture"
                       :headers="uploadHeaders"
                       :file-list="form.detailFigure"
                       :limit="10">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__text">大图能上传多个</div>
              <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </el-form-item>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import Client from '../../plugins/ossClient';

  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          productName: '',
          productTypeArr: [],
          productType: '',
          productCode: '',
          book: '',
          minPrice: '',
          maxPrice: '',
          tinyFigure: [],
          detailFigure: [],
        },
        uploadHeaders: {
          authorization: '*'
        },
        ossData: {
          region: '',
          bucket: '',
          accessKeyId: '',
          accessKeySecret: '',
          securityToken: ''
        }, rules: {
          productTypeArr: [
            {required: true, message: '请选择分类', trigger: 'blur'}
          ],
          productCode: [
            {required: true, message: '请输入产品编码', trigger: 'blur'}
          ] ,
        }
      }
    },

    methods: {
      toEditProduct: function () {
        this.dialogFormVisible=true;
        console.log("qwd")
        const param = {};
        param.productId = this.productId;
        this.$post("/product/query", param).then((response) => {
          console.log("相应："+JSON.stringify(response));
          if (response.code == 1) {
            this.form = response.data;
          }
          console.log("表单："+JSON.stringify(this.form));
        });
      },
      getOSSToken: function () {
        this.$post("/common/ossToken").then((response) => {
          if (response.code == 1) {
            this.ossData = response.data;
            this.ossData.region = 'oss-cn-beijing';
            this.ossData.bucket = 'joe-zhj';
          }
        });
      },
      async uploadSmall(option) {
        const client = Client(this.ossData), file = option.file;
        const random_name = this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop();
        let result = await client.put(random_name, file);
        let picture = {};
        picture.name = result.name;
        picture.url = result.url;
        this.form.tinyFigure.push(picture);
      },
      async uploadPicture(option) {
        const client = Client(this.ossData), file = option.file;
        const random_name = this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop();
        let result = await client.put(random_name, file);
        let picture = {};
        picture.name = result.name;
        picture.url = result.url;
        this.form.detailFigure.push(picture);
      },
      deleteProduct: function () {
        this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const param = {};
          param.productId = this.productId;
          this.$post("/product/remove", param).then((response) => {
            if (response.code == 1) {
              this.$emit('queryProduct');
              this.$notify({
                type: 'success',
                message: '删除成功!'
              });
            }
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      // 随机生成文件名
      random_string(len) {
        len = len || 32;
        let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678', maxPos = chars.length, pwd = '';
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      }
    },
    created() {
      this.getOSSToken();
    },
    props: [
      "productId",
      "productCode",
      "productTypes"
    ]
  }
</script>

<style>

</style>
