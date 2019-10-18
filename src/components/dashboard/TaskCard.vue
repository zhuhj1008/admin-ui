<template>
  <div>
    <el-card class="box-card">

      <el-row class="demo-avatar demo-basic">

        <el-col :span="6">
          <el-card class="sub-card">
            <i class="el-icon-time"></i>
            <el-divider direction="vertical"></el-divider>
            <span>新添加</span>
            <el-divider direction="vertical"></el-divider>
            <span>22</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="sub-card">
            <i class="el-icon-time"></i>
            <el-divider direction="vertical"></el-divider>
            <span>生产中</span>
            <el-divider direction="vertical"></el-divider>
            <span>22</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="sub-card">
            <i class="el-icon-time"></i>
            <el-divider direction="vertical"></el-divider>
            <span>运输中</span>
            <el-divider direction="vertical"></el-divider>
            <span>22</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card class="sub-card">
            <i class="el-icon-time"></i>
            <el-divider direction="vertical"></el-divider>
            <span>安装中</span>
            <el-divider direction="vertical"></el-divider>
            <span>22</span>
          </el-card>
        </el-col>

      </el-row>


    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>

  .box-card {
    text-align: left;
    margin: 4px;
  }

  .sub-card{
    /*text-align: center;*/
    margin: 20px;
    font-size: 25px;
  }


</style>
