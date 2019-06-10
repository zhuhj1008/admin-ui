<template>
  <div>
    <el-select v-model="query">
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>

    <el-upload class="upload-demo" drag action="http://localhost:8888/product/savePicture/"
               list-type="picture" :data="uploadData">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__text">小图只能上传一个</div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        options: [{
          value: '01',
          label: '我的'
        }, {
          value: '02',
          label: '你的'
        }, {
          value: '03',
          label: '他的'
        }],
        query: '02',
        uploadData:{
          productId:123,
          type:"小图"
        }
      }
    }
  }
</script>

<style scoped>

</style>
