<template>
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">

        <el-form-item class="form-item" prop="username">
            <el-input 
            placeholder="用户名/手机" v-model="form.username">
            </el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="password">
            <el-input 
            placeholder="密码" v-model="form.password" 
            type="password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>

        <el-button 
        class="submit"
        type="primary"
        @click="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
    data(){
        // 验证用户名
        var validateUsername = (rule,value,callback) => {
            console.log(value)
            let reg = /^1[3-9][0-9]{9}$/
            if(reg.test(value)) {
                callback()
            }else {
                // 提示用户
                callback(new Error('请输入正确的手机号'))
            }
        }
        return {
            // 表单数据
            form: {
                username: '',
                password: ''
            },
            // 表单规则
            rules: {
                username: [
                    {validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    {required: true, message: '密码不可以为空' ,trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        // 提交登录
        handleLoginSubmit(){
            // 二次验证
            this.$refs.form.validate((vaild) => {
                if(vaild) {
                    // 发起登录请求
                    this.$axios({
                        method: 'post',
                        url: '/accounts/login',
                        data: this.form
                    }).then( res => {
                        console.log(res)
                        // 待存储数据 token user 
                        let { data } = res
                        // this.$store.state.user.userInfo
                        console.log(this.$store.state.user.userInfo)
                        // console.log(this.$store.state)
                        this.$store.commit('user/setUserInfo', data)
                        console.log(this.$store.state.user.userInfo)
                        // 登录成功跳转主页
                        // this.$router.push('/')
                    })
                }
            })
           console.log(this.form)
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>