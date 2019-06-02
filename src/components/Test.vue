<template>
  <div>
    <el-select v-model="query">
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>
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
        query: '02'
      }
    }
  }
</script>

<style scoped>

</style>
