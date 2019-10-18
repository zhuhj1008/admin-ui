<template>
    <div>
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>个人中心</span>
        </div>

        <div class="user-profile">
          <div class="box-center">
            <el-avatar :size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="box-center">
            <div class="user-name text-center">朱鸿钧</div>
            <!--<div class="user-role text-center text-muted">更换头像</div>-->
          </div>
        </div>

        <div class="user-bio">
          <div class="user-education user-bio-section">
            <div class="user-bio-section-header">
              <i class="el-icon-time"></i>
              <span>最近登录</span></div>
            <div class="user-bio-section-body">
              <div class="text-muted">
                JS in Computer Science from the University of Technology
              </div>
            </div>
          </div>

          <div class="user-skills user-bio-section">
            <div class="user-bio-section-header">
              <i class="el-icon-time"></i>
              <span>Skills</span></div>
            <div class="user-bio-section-body">
              <div class="progress-item">
                <span>Vue</span>
                <el-progress :percentage="70"/>
              </div>
              <div class="progress-item">
                <span>JavaScript</span>
                <el-progress :percentage="18"/>
              </div>
              <div class="progress-item">
                <span>Css</span>
                <el-progress :percentage="12"/>
              </div>
              <div class="progress-item">
                <span>ESLint</span>
                <el-progress :percentage="100" status="success"/>
              </div>
            </div>
          </div>
        </div>

      </el-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .box-card {
    text-align: left;
    margin: 4px;
  }

  .box-center {
    margin: 0 auto;
    display: table;
  }

  .text-muted {
    color: #777;
  }

  .user-profile {

    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
      font-size: 14px;
    }

    .box-social {
      padding-top: 30px;

      .el-table {
        border-top: 1px solid #dfe6ec;
      }

    }

    .user-follow {
      padding-top: 20px;
    }

  }

  .user-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }

    .user-bio-section {
      font-size: 14px;
      padding: 15px 0;

      .user-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }

    }
  }

</style>
