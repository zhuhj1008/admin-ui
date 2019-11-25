<template>
  <div>

    <el-button type="text" @click="dialogFormVisible=true,toProductView()" style="float: right; padding: 10px">
      <i class="iconfont icon-yulan"></i>
    </el-button>

    <el-dialog :title="productData.productCode"
               :visible.sync="dialogFormVisible"
               :show-close=false
               width='30%'
               append-to-body>


      <!--轮播图-->
      <div style="border: thick outset;">
        <el-carousel :interval="3000" arrow="always">
          <el-carousel-item v-for="(carousel,index) in productData.carouselUrls" :key="index">
            <el-image :src="carousel"/>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--价格-->
      <el-row class="product_price">
        <span>￥ {{productData.minPrice}} ~ {{productData.maxPrice}}</span>
      </el-row>

      <!--名称-->
      <el-row class="product_name">
        <span>{{productData.productName}}</span>
      </el-row>

      <!--标签-->
      <el-row>
        <el-tag v-for="(tag,index) in productData.productTags" type="success" :key="index">{{tag}}</el-tag>
      </el-row>

      <!---->
      <el-row>

      </el-row>

      <el-divider content-position="left">商品信息</el-divider>

      <!--详情图-->
      <el-image v-for="(url,index) in productData.detailUrls" :key="index" :src="url"></el-image>

    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        productData: {
          productCode: 'A-0103',
          minPrice: '560',
          maxPrice: '600',
          productName: '室内门 生态烤漆门 卧室门',
          productTags: ['环保', '静音', '黑胡桃'],
          carouselUrls: [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          ],
          detailUrls: [
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
          ]
        },

      };
    },
    methods: {
      toProductView: function () {

      }
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
    font-size: 150%;
    font-family: sans-serif;
    padding: 10px 0px 10px 10px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
</style>
