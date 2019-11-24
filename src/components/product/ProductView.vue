<template>
  <div>

    <el-button type="text" @click="drawer=true" style="float: right"><i class="el-icon-view"></i></el-button>
    <el-drawer
      :title="productData.productCode"
      :visible.sync="drawer"
      :show-close="false"
      direction="rtl"
      size="25%">

      <el-scrollbar style="height: 100%;">

        走马灯
        <div style="border: thick outset;">
          <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <el-image
                style="width: 500px; height: 300px"
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572503917892&di=f07d2262257ff770845b273294e5a724&imgtype=0&src=http%3A%2F%2Ftva1.sinaimg.cn%2Fcrop.0.0.750.750.1024%2Fc3864306jw8fcrls1zuyrj20ku0kuwfo.jpg"
                fit="contain"/>
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

        <!--标签-->
        <el-row>
          <el-tag type="success">环保</el-tag>
          <el-tag type="success">静音</el-tag>
          <el-tag type="success">黑胡桃</el-tag>
        </el-row>

        <div>

          <el-image v-for="url in urls" :key="url" :src="url"></el-image>

        </div>
      </el-scrollbar>
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
        },
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
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
