<template>
  <el-row>
    <el-col :span="5" v-for="o in 8" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        productList:[
          {
            "name":"汉堡包",
            "url":""
          }
        ]
      };
    }
  }
</script>

<style>

  .image {
    width: 100%;
    display: block;
  }

</style>
