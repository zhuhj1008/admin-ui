<template>
     
  <div>
    <el-card>
      <img src="../../assets/product/product_add.svg" @click="dialogFormVisible=true"
           style="text-align:center; width: 60px; height: 40px">
      <div style="padding: 5px;">
      </div>
    </el-card>
    <el-dialog title="新加产品" :visible.sync="dialogFormVisible" :show-close=false width='55%'
               :close-on-press-escape=false :close-on-click-modal="false" append-to-body>

      <el-form :model="form"
               :inline="true"
               :rules="rules"
               size="mini" ref="form" prop="form">

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
        <el-button type="primary" @click="save('form')">保 存</el-button>
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
          productType: [],
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
      save: function (form) {
        console.log(JSON.stringify(this.form));
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
      "productTypes"
    ]
  }
</script>

<style>

</style>
