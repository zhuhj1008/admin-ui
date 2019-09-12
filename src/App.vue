<template>
  <div id="app">
    <!-- 一级路由 -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      window.screenWidth = document.body.clientWidth
      window.screenHeigh = document.body.clientHeight;
      localStorage.setItem("screenWidth", window.screenWidth);
      localStorage.setItem("screenHeight", window.screenHeigh);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
