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

        <el-form-item label="上架" prop="shangJia">
          <el-switch
            v-model="productForm.shelves"
            active-text="上架"
            inactive-text="不上架">
          </el-switch>
        </el-form-item>
        <br>

        <el-divider content-position="left">商品信息</el-divider>

        <el-form-item label="名称" prop="productName">
          <el-input v-model="productForm.productName" placeholder="请输入名称" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="分类" prop="productType">
          <el-select v-model="productForm.productType" placeholder="产品分类" clearable>
            <el-option v-for="(type,index) in productTypes" :key=index :label="type" :value="type"></el-option>
          </el-select>
        </el-form-item>
        <br>

        <el-form-item label="编码" prop="productCode">
          <el-input v-model="productForm.productCode" placeholder="请输入编码" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="价格(元)" prop="minPrice">
          <el-input v-model="productForm.minPrice" placeholder="最低" autocomplete="off" style="width:80px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="~" prop="maxPrice">
          <el-input v-model="productForm.maxPrice" placeholder="最高" autocomplete="off" style="width:80px"
                    clearable></el-input>
        </el-form-item>
        <br>

        <el-form-item label="计价单位" prop="unit">
          <el-select v-model="productForm.unit" placeholder="请选择计价单位" style="width:200px" clearable>
            <el-option label="套" value="套"></el-option>
          </el-select>
        </el-form-item>


        <el-divider content-position="left">商品属性</el-divider>

        <el-form-item label="材质" prop="material">
          <el-select v-model="productForm.material" placeholder="请选择材质" style="width:200px" clearable>
            <el-option label="原木" value="原木"></el-option>
            <el-option label="白橡木" value="白橡木"></el-option>
            <el-option label="杨木" value="杨木"></el-option>
            <el-option label="红松木" value="红松木"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="颜色" prop="color">
          <el-select v-model="productForm.color" placeholder="选择颜色" style="width:200px" clearable>
            <el-option v-for="(color,index) in colors" :key=index :label="color" :value="color"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="饰面工艺" prop="technology">
          <el-select v-model="productForm.technology" placeholder="选择工艺" style="width:200px" clearable>
            <el-option label="烤漆" value="烤漆"></el-option>
            <el-option label="天然木皮" value="天然木皮"></el-option>
            <el-option label="合成木皮" value="合成木皮"></el-option>
            <el-option label="木纹纸" value="木纹纸"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="尺寸" prop="size">
          <el-input v-model="productForm.size" placeholder="输入尺寸" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="毛重" prop="weight">
          <el-input v-model="productForm.weight" placeholder="输入重量" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="生产周期" prop="timeLimit">
          <el-input v-model="productForm.timeLimit" placeholder="输入生产周期" autocomplete="off" style="width:200px"
                    clearable></el-input>
        </el-form-item>

        <el-form-item label="标签" prop="tags">
          <el-select v-model="productForm.tags" multiple placeholder="请选择商品标签" style="width:320px">
            <el-option v-for="tag in tagOptions" :key="tag" :label="tag" :value="tag"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="包装清单" prop="packingList">
          <el-select v-model="productForm.packingList" multiple placeholder="请选择包装清单" style="width:330px">
            <el-option v-for="item in packageOptions" :key="item" :label="item" :value="item"></el-option>
          </el-select>
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
        productDialog: false,
        pictureDialog: false,
        colors: localStorage.getItem("colors").split(","),
        productTypes: localStorage.getItem("productTypes").split(","),
        packageOptions: localStorage.getItem("packageList").split(","),
        tagOptions: localStorage.getItem("tags").split(","),
        productForm: {
          shelves: false,
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
            this.$emit('queryProduct');
          }
        });


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
            console.log(JSON.stringify(this.ossData))
          }
        });
      },
      async uploadSmall(option) {
        const client = Client(this.ossData), file = option.file;
        const pictureDir = "product/" + this.productId + "/small/" + file.name;
        let result = await client.put(pictureDir, file);
        let picture = {};
        picture.name = result.name;
        picture.url = result.url;
        this.pictureForm.tinyFigure.push(picture);
      },
      async uploadPicture(option) {
        const client = Client(this.ossData), file = option.file;
        const pictureDir = "product/" + this.productId + "/detail/" + file.name;
        let result = await client.put(pictureDir, file);
        let picture = {};
        picture.name = result.name;
        picture.url = result.url;
        this.pictureForm.detailFigure.push(picture);
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
