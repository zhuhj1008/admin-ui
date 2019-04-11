<template>
    <div class="login-container">
        <el-form :model="ruleForm2"
         status-icon
         ref="ruleForm2" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title">登录</h3>
            <el-form-item prop="username">
							<el-input placeholder="请输入用户名" v-model="ruleForm2.username" auto-complete="off" >
								<template slot="prepend">账号</template>
							</el-input>
              
            </el-form-item>
                <el-form-item prop="password">
									<el-input placeholder="请输入密码" v-model="ruleForm2.password" auto-complete="off" show-password>
										<template slot="prepend">密码</template>
									</el-input>
                </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logining: false,
            ruleForm2: {
                username: 'Joe',
                password: 'Joe',
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(event){
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.ruleForm2.username === 'Joe' && 
                       this.ruleForm2.password === 'Joe'){
                           this.logining = false;
                           sessionStorage.setItem('user', this.ruleForm2.username);
                           this.$router.push({path: '/home'});
                    }else{
                        this.logining = false;
                        this.$alert('用户名或密码错误', '提示', {
                            confirmButtonText: '确认'
                        })
                    }
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
};
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
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>