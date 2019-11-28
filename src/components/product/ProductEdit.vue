<template>
     
  <div>

    <!--按钮-->
    <div style="padding: 5px;">
      <el-button type="text" @click="productDialog = true,toEditProduct()">{{productCode}}</el-button>
      <el-button type="text" @click="pictureDialog=true,toEditProduct(),getOSSToken()">
        <i class="el-icon-picture-outline"></i>
      </el-button>
    </div>

    <!--编辑产品对话框-->
    <el-dialog title="修改产品信息"
               :visible.sync="productDialog"
               :show-close=false
               :close-on-press-escape=false
               :close-on-click-modal="false"
               width='55%'
               append-to-body>

      <el-form :model="productForm"
               :inline="true"
               :rules="rules"
               ref="productForm"
               prop="productForm"
               size="mini">

        <el-form-item label="名称" prop="productName">
          <el-input v-model="productForm.productName" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="分类" prop="productType">
          <el-select v-model="productForm.productType" placeholder="产品分类" clearable>
            <el-option v-for="(type,index) in productTypes" :key=index :label="type" :value="type"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="价格区间" prop="minPrice">
          <el-input v-model="productForm.minPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>

        <el-form-item label="~" prop="maxPrice">
          <el-input v-model="productForm.maxPrice" autocomplete="off" style="width:100px" clearable></el-input>
        </el-form-item>

        <el-form-item label="图册" prop="book">
          <el-input v-model="productForm.book" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="productForm.productCode" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="计价单位" prop="unit">
          <el-input v-model="productForm.unit" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="材质" prop="material">
          <el-input v-model="productForm.material" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="颜色" prop="color">
          <el-input v-model="productForm.color" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="饰面工艺" prop="technology">
          <el-input v-model="productForm.technology" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="尺寸" prop="size">
          <el-input v-model="productForm.size" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="毛重" prop="weight">
          <el-input v-model="productForm.weight" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="生产周期" prop="timeLimit">
          <el-input v-model="productForm.timeLimit" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

        <el-form-item label="包装清单" prop="packingList">
          <el-input v-model="productForm.packingList" autocomplete="off" style="width:200px" clearable></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="productDialog = false">取 消</el-button>
        <el-button type="primary" @click="editProduct(),productDialog = false">保 存</el-button>
      </div>

    </el-dialog>

    <!--编辑图片对话框-->
    <el-dialog title="修改产品图片"
               :visible.sync="pictureDialog"
               :show-close=false
               :close-on-press-escape=false
               :close-on-click-modal="false"
               width='55%'
               append-to-body>

      <el-form :model="pictureForm"
               :inline="true"
               :rules="rules"
               ref="pictureForm"
               prop="pictureForm"
               size="mini">
        <el-form-item label="小图" prop="tinyFigure">
          <el-upload class="upload-demo" drag
                     list-type="picture" action=""
                     :http-request="uploadSmall"
                     :headers="uploadHeaders"
                     :file-list="pictureForm.tinyFigure"
                     :limit="5">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__text">小图只能上传一个</div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>

        </el-form-item>

        <el-form-item label="大图" prop="detailFigure">
          <el-upload class="upload-demo" drag
                     list-type="picture" action=""
                     :http-request="uploadPicture"
                     :headers="uploadHeaders"
                     :file-list="pictureForm.detailFigure"
                     :limit="10">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__text">大图能上传多个</div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="pictureDialog = false">取 消</el-button>
        <el-button type="primary" @click="updatePicture(),pictureDialog = false">保 存</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import Client from '../../plugins/ossClient';

  export default {
    data() {
      return {
        productTypes: localStorage.getItem("productTypes").split(","),
        productDialog: false,
        pictureDialog: false,
        productForm: {
          productName: '',
          productType: '',
          productCode: '',
          book: '',
          unit: '',
          material: '',
          color: '',
          technology: '',
          size: '',
          weight: '',
          timeLimit: '',
          packingList: '',
          minPrice: '',
          maxPrice: ''
        },
        pictureForm: {
          tinyFigure: [],
          detailFigure: []
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
        },
        rules: {
          productName: [
            {required: true, message: '请输入产品编码', trigger: 'blur'}
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

      toEditProduct: function () {
        const param = {};
        param.productId = this.productId;
        this.$post("/product/query", param).then((response) => {
          if (response.code == 1) {
            this.productForm = response.data;
            this.pictureForm = response.data;
          }
        });
      },

      editProduct: function () {
        const param = this.productForm;
        param.productId = this.productId;
        this.$post("/product/update", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '修改成功!'
            });
          }
        });

        this.$emit('queryProduct');
      },

      updatePicture: function () {
        const param = this.pictureForm;
        param.productId = this.productId;
        this.$post("/product/updatePicture", param).then((response) => {
          if (response.code == 1) {
            this.$notify({
              type: 'success',
              message: '修改成功!'
            });
          }
        });
        this.$emit('queryProduct');
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
        this.pictureForm.tinyFigure.push(picture);
      },
      async uploadPicture(option) {
        const client = Client(this.ossData), file = option.file;
        const random_name = this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop();
        let result = await client.put(random_name, file);
        let picture = {};
        picture.name = result.name;
        picture.url = result.url;
        this.pictureForm.detailFigure.push(picture);
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
    props: [
      "productId",
      "productCode"
    ]
  }
</script>

<style>

</style>
