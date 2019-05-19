<template>
  <div>

    <el-form :inline="true" :model="searchForm" class="demo-form-inline" size='mini'>

      <el-form-item label="分类">
        <el-select v-model="searchForm.productType" placeholder="产品分类">
          <el-option :label="1" :value="1"/>
          <el-option :label="2" :value="2"/>
          <el-option :label="3" :value="3"/>
          <el-option :label="4" :value="4"/>
        </el-select>
      </el-form-item>

      <el-form-item label="编码">
        <el-input v-model="searchForm.productCode" placeholder="产品编码"></el-input>
      </el-form-item>

      <el-form-item label="图册">
        <el-select v-model="searchForm.book" placeholder="产品图册">
          <el-option :label="1" :value="1"/>
          <el-option :label="2" :value="2"/>
          <el-option :label="3" :value="3"/>
        </el-select>
      </el-form-item>

    </el-form>

    <el-row>
      <el-col :span="4" v-for="o in 18" :key="o" class="joe">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image">
        </el-card>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <div style="float: right; margin-top: 10px; margin-bottom: 5px;">
      <el-pagination background small
                     layout=" total, sizes, prev, pager, next, jumper"
                     :total="page.total"
                     :current-page.sync="searchForm.pageNo"
                     :page-sizes="[12, 18, 24]"
                     :page-size="searchForm.pageSize"
                     @size-change=""
                     @current-change="">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: {
          total: 240,
        },
        searchForm: {
          productType: "",
          productCode: "",
          book: "",
          pageNo: 1,
          pageSize: 18
        },
        productList: [
          {
            "name": "汉堡包",
            "url": "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          }
        ]
      };
    }
  }
</script>

<style>

  .joe {
    padding: 10px;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>
