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
                       action=""
                       :http-request="upload"
                       :on-success="uploadSuccess"
                       :headers="uploadHeaders"
                       :file-list="form.picture"
                       :limit="1">
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
                       list-type="picture"
                       :file-list="form.smallPictures"
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
        <el-button type="primary" @click="dialogFormVisible = false,save()">保 存</el-button>
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
          picture: [],
          smallPictures: [],
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
      uploadPicture(){
        const result = upload();
      },
      async upload(option) {
        try {
          let vm = this;
          vm.disabled = true;
          const client = Client(this.ossData), file = option.file;
          //随机命名
          const random_name = this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop();
          // 分片上传文件
          await client.multipartUpload(random_name, file, {
            progress: async function (p) {
              let e = {};
              e.percent = p * 100;
              option.onProgress(e)
            }
          }).then(({res}) => {
            if (res.statusCode === 200) {
              console.log("res.requestUrls:" + res.requestUrls);
              return res.requestUrls
            } else {
              vm.disabled = false;
              option.onError('上传失败');
            }
          }).catch(error => {
            vm.disabled = false;
            option.onError('上传失败');
          });
        } catch (error) {
          console.error(error);
          this.disabled = false;
          option.onError('上传失败');
        }
      },
      uploadSuccess: function (response, file, fileList) {
        // this.$notify({
        //   type: 'info',
        //   message: '上传成功'
        // });
        console.log("上传成功：" + JSON.stringify(response));
        console.log("上传成功：" + JSON.stringify(file));
        console.log("上传成功：" + JSON.stringify(fileList));
      },
      save: function () {
        console.log("productType" + JSON.stringify(this.form.productType[this.form.productType.length - 1]));
        console.log("picture" + JSON.stringify(this.form.picture))
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
