<template>
  <div>
    <el-button type="text" @click="drawer=true" style="float: right"><i class="el-icon-view"></i></el-button>
    <el-drawer
      :title="productData.productCode"
      :visible.sync="drawer"
      direction="rtl">

      <div></div>

      <!--走马灯-->
      <div style="border: thick outset;">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572503917892&di=f07d2262257ff770845b273294e5a724&imgtype=0&src=http%3A%2F%2Ftva1.sinaimg.cn%2Fcrop.0.0.750.750.1024%2Fc3864306jw8fcrls1zuyrj20ku0kuwfo.jpg"
              style="text-align:center; width: 95px; height: 170px">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--价格-->
      <el-row class="product_price">
        <span>￥ 560~600</span>
      </el-row>

      <!--名称-->
      <el-row class="product_name">
        <span>室内门 实木门  客厅实木门</span>
      </el-row>

      <el-row>
        <el-tag type="success">环保</el-tag>
        <el-tag type="success">静音</el-tag>
        <el-tag type="success">黑胡桃</el-tag>
      </el-row>

    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        productData: {
          productCode: 'A-0103'

        }
      };
    },
    props: [
      "productId"
    ]
  }
</script>

<style scoped>

  /*价格样式（红色，加粗，字号,字体）*/
  .product_price {
    color: red;
    font-weight: bold;
    font-size: 150%;
    font-family: sans-serif;
    padding: 10px 0px 10px 10px;
  }

  .product_name {
    color: black;
    font-weight: bold;
    font-size: 100%;
    font-family: sans-serif;
    padding: 10px 0px 10px 10px;
  }
</style>
