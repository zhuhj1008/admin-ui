<template>
  <div class="login-container">
    <el-form :model="loginForm"
             :rules="rules"
             prop="loginForm"
             status-icon
             ref="loginForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">登录</h3>
      <el-form-item prop="phone">
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.phone">
          <template slot="prepend">账号</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" v-model="loginForm.password" show-password>
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="loginForm.remember" class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          phone: this.$store.state.currentUser.phone,
          password: this.$store.state.currentUser.password,
          remember: this.$store.state.currentUser.remember,
        },
        rules: {
          phone: [
            {required: true, message: '登录手机号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '登录密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (!valid) {
            return false;
          } else {
            this.$post('/user/login', this.loginForm).then((response) => {
              if (response.code == 1) {
                // this.loginForm.userId = response.data.userId;
                // this.loginForm.name = response.data.userName;
                // this.$store.commit("login", this.loginForm);
                // localStorage.setItem("name",response.data.userName);
                this.$store.commit("setLocal","name",response.data.userName);
                this.$router.push({path: '/home'});
              }
            })
          }
        });

      }
    }
  }
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
  }

  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .remember {
    float: left;
    margin-bottom: 10px
  }
</style>
