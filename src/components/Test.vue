<template>
  <div>

    <el-form :inline="true" class="demo-form-inline" size='mini'>
      <el-form-item label="单号">
        <el-input v-model="imageName" placeholder="请输入订单号"  clearable/>
      </el-form-item>
      <el-form-item  label="单号">
        <el-button @click="aaa()" type="text" icon="el-icon-delete" size="small"></el-button>
      </el-form-item>
    </el-form>

    <el-upload
      class="upload-demo"
      ref="upload"
      drag
      :on-success="handleSuccess"
      :http-request="handleHttpRequest"
      :headers="uploadHeaders"
      :limit="files"
      :disabled="disabled"
      multiple
      action=""
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">上传文件大小不能超过 1G</div>
    </el-upload>
    <!--:before-upload="beforeUpload"-->
  </div>
</template>

<script>
  import Client from '../plugins/ossClient'
  //将渲染的内容导出
  export default{
    props: {},
    data(){
      return {
        imageName:'',
        imageUrl:'',
        // region: 'oss-cn-beijing',
        // bucket: 'joe-zhj',
        // percentage: 0,
        // url: '',//后台获取token地址
        // ClientObj: null,
        dataObj: {
          region:'oss-cn-beijing',
          bucket:'joe-zhj',
          accessKeyId:'STS.NHPWcL5UV6YasySdjUWTiW474',
          accessKeySecret:'HWu8tBUmBdBRKkkTY3MPqVz3Ydu4AekLToUktXtTnYoY',
          stsToken:'CAISggJ1q6Ft5B2yfSjIr4vlHNn42Ip3gZuKcV/igGoAW9tFuPGc1jz2IH1Mf3lhAO8ftf8/nWtT7vodlrpUcKQDR0vJKNlw7NFM/Bi6Yo3H4ywJHHCszc/LI3OaLjKm9u2wCryLYbGwU/OpbE++5U0X6LDmdDKkckW4OJmS8/BOZcgWWQ/KBlgvRq0hRG1YpdQdKGHaONu0LxfumRCwNkdzvRdmgm4NgsbWgO/ks0WP3QGkk7dK9tSgf8j/M/MBZskvD42Hu8VtbbfE3SJq7BxHybx7lqQs+02c44nGUwgIvEzdaLqNqYY3cFBjHq8hAOteq/zx0/9/t6nBl4bnOeD0phOuok8agAFIbc3FnNy4nrURqqKI/tL4BjBRKTUeT//LaoObdC8niKN3kc3DOrYP+QfVxocxtJJbGYHte7MjvKcd1PEZpZLs+zufQOICoHRAApKxTW0wMxlOH4+3LvWj7smHdmOKxy5WOzOn1xxjvNNou4HNxiV9egNptlmLmKhOqEy153v6KQ=='
        },
        // expiration: '',
        fileList: [],
        files: 10,
        uploadHeaders: {
          authorization: '*'
        },
        disabled: false,
      }
    },
    methods: {
      aaa(){
        const client = Client(this.dataObj);
        // const res = client.signatureUrl(this.imageName);
        const res = client.getObjectUrl(this.imageName);
        console.log(JSON.stringify(res));
      },
      // getDate(){
      //   const date = new Date(),
      //     year = date.getFullYear(),
      //     month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
      //     day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
      //     hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`,
      //     mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
      //   return `${year}${month}${day}${hh}${mm}`;
      // },
      /*getAliToken(){ //获取Token
        return new Promise((resolve, reject) => {
          this.$axios({
            method: 'POST',
            url: this.url
          }).then(res => {
            if (res.success) {
              const {expiration, tempAk, tempSk, token} = res.data;
              this.expiration = expiration;
              this.dataObj = {
                region: this.region,
                bucket: this.bucket,
                accessKeyId: tempAk,
                accessKeySecret: tempSk,
                stsToken: token
              };
              resolve(true);
            } else {
              reject(false);
            }
          }).catch(err => {
            console.log(err);
            reject(false);
          })
        })
      },*/
      // beforeUpload(file){
      //   return new Promise((resolve, reject) => {
      //     this.getAliToken().then(response => {
      //       if (response) {
      //         resolve(response);
      //       } else {
      //         reject(response);
      //       }
      //     }).catch(err => {
      //       console.log(err);
      //       reject(err);
      //     });
      //   })
      // },
      async handleHttpRequest(option){ //上传OSS
        try {
          let vm = this;
          vm.disabled = true;
          const client = Client(this.dataObj), file = option.file, relativePath = 'http://duoyuka.oss-cn-beijing.aliyuncs.com/';
          //随机命名
          const random_name = 'test/'+this.random_string(6) + '_' + new Date().getTime() + '.' + file.name.split('.').pop();
          // 分片上传文件
          await client.multipartUpload(random_name, file, {
            progress: async function (p) {
              let e = {};
              e.percent = p * 100;
              option.onProgress(e)
            }
          }).then(({res}) => {
            console.log(res);
            if (res.statusCode === 200) {
              // option.onSuccess(ret)
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
          console.log("JOE-上传失败")
        }
      },
      handleSuccess(response, file, fileList){
        console.log(response);
        console.log(file);
        console.log(fileList);
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
    watch: {
      url(val){
        if (val) {
          this.urls.push(val);
        }
      }
    },
    // created(){
    //   this.getAliToken();
    // }

  }
</script>


<style scoped>

</style>
