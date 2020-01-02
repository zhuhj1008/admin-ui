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
          <el-carousel-item v-for="(carousel,index) in productData.tinyFigure" :key="index">
            <el-image :src="carousel.url"/>
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


      <!--买家服务-->
      <div>
        <el-divider content-position="left">买家服务</el-divider>

        <span><i class="iconfont icon-heshichicun"></i> &nbsp; 尺寸定制 &nbsp; </span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="iconfont icon-juanchi"></i> &nbsp; 免费测量 &nbsp; </span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="iconfont icon-jiaofuriqi"></i> &nbsp; 交期保障 &nbsp; </span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="iconfont icon-yunshu"></i> &nbsp; 送货到家 &nbsp; </span>

        <br><br>

        <span><i class="iconfont icon-mianfeigenghuansunhuaijian"></i> &nbsp; 破损补寄 &nbsp; </span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="iconfont icon-dianzuan"></i> &nbsp; 上门安装 &nbsp; </span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="iconfont icon-zhibaojin"></i> &nbsp; 质保一年 &nbsp; </span>
      </div>


      <!--商品信息-->
      <div>
        <el-divider content-position="left">商品信息</el-divider>

        <el-row>
          <el-col :span="8">分类：{{productData.productCode}}</el-col>
          <el-col :span="8">型号：{{productData.productCode}}</el-col>
          <el-col :span="8">计价单位：{{productData.unit}}</el-col>
        </el-row>
        <br>

        <el-row>
          <el-col :span="8">材质：{{productData.material}}</el-col>
          <el-col :span="8">颜色：{{productData.color}}</el-col>
          <el-col :span="8">饰面工艺：{{productData.technology}}</el-col>
        </el-row>
        <br>

        <el-row>
          <el-col :span="8">尺寸：{{productData.size}}</el-col>
          <el-col :span="8">毛重：{{productData.weight}}</el-col>
          <el-col :span="8">生产周期：{{productData.timeLimit}}</el-col>
        </el-row>
        <br>

        <el-row>
          <el-col :span="8">包装清单：{{productData.packingList}}</el-col>
        </el-row>
      </div>


      <!--详情图-->
      <el-divider content-position="left">商品展示</el-divider>

      <el-image v-for="(picture,index) in productData.detailFigure" :key="index" :src="picture.url"></el-image>

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
          unit: '套',
          material: '橡木',
          color: '',
          technology: '免漆',
          size: '200*120*30',
          weight: '30KG',
          timeLimit: '25天',
          packingList: '门 锁 合页',
          tinyFigure: [
            /*'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',*/
          ],
          detailFigure: [
            /*'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',*/
          ]
        },

      };
    },
    methods: {
      toProductView: function () {
        const param = {};
        param.productId = this.productId;
        this.$post("/product/query", param).then((response) => {
          if (response.code == 1) {
            this.productData = response.data;
          }
        });
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
    font-size: 200%;
    font-family: sans-serif;
    padding-top: 20px;
  }

  .product_name {
    color: black;
    font-weight: bold;
    font-size: 150%;
    font-family: sans-serif;
    padding-top: 10px;
  }

  .el-tag + .el-tag {
    margin: 20px 0px 20px 10px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
</style>
