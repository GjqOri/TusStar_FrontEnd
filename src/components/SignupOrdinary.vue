<template>
    <div>
        <!-- Page Title Start -->
        <section class="page-title title-bg13">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>普通用户注册</h2>

                </div>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <!-- Page Title End -->

        <!-- Sign up Section Start -->
        <div class="signup-section ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="signup-form">
                            <el-form-item label="账号" prop="zhanghao">
                                <el-input v-model="ruleForm.zhanghao"></el-input>
                            </el-form-item>
                            <el-form-item label="真实姓名" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱" prop="youxiang">
                                <el-input v-model="ruleForm.youxiang"></el-input>
                            </el-form-item>
                            <!--        <el-form :inline="true" :rules="rules" ref="ruleForm" class="demo-ruleForm">-->
                            <!--          <el-form-item>-->
                            <!--            <el-input v-model="ruleForm.youxiangyangzhengma"></el-input>-->
                            <!--          </el-form-item>-->
                            <!--          <el-form-item>-->
                            <!--            <el-button type="primary" @click="fayanzhengma">获取验证码</el-button>-->
                            <!--          </el-form-item>-->
                            <!--        </el-form>-->
                            <el-form-item label="登录密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认您的密码" prop="querenpassword">
                                <el-input type="password" v-model="ruleForm.querenpassword"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="code">
                                <el-input type="text" v-model="code">
                                    <template slot="append">
                                        <div class="login-code"  @click="refreshCode">
                                            <yanzhengma :identifyCode="identifyCode"></yanzhengma>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <div class="signup-btn text-center">
                                <el-button type="primary" @click="submit()">注册</el-button>
                            </div>
                            <div class="create-btn text-center">
                                <p>
                                    已经有账号了？
                                    <a href="/denglu">登录</a>
                                </p>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up Section End -->
        <foot></foot>
        <!-- Back To Top Start -->
        <div class="top-btn">
            <i class='bx el-icon-upload2 bx-fade-up'></i>
        </div>
        <!-- Back To Top End -->
    </div>
</template>

<script>
    import qs from "qs";
    import {mapActions,} from 'vuex'
    export default {
        data()
        {
            var validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else {
                    if (this.ruleForm.querenpassword !== "") {
                        this.$refs.ruleForm.validateField("querenpassword");
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                code:'',
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                ruleForm: {
                    name: "",
                    zhanghao: "",
                    youxiang: "",
                    youxiangyangzhengma: "",
                    password: "",
                    querenpassword: "",
                    yanzhengma: ""
                },
                rules:
                    {
                        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
                        zhanghao: [
                            { required: true, message: "请填写账号", trigger: "blur" },
                            { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                        ],
                        name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
                        youxiang: [
                            { required: true, message: "请填写邮箱", trigger: "blur" },
                            {
                                type: "email",
                                message: "请输入正确的邮箱地址",
                                trigger: ["blur", "change"]
                            }
                        ],
                        password: [{ validator: validatePass, trigger: "blur" }],
                        querenpassword: [{ validator: validatePass2, trigger: "blur" }],
                    }
            };
        },
        methods:
            {
                ...mapActions("d2admin/account", ["login"]),
                refreshCode () {
                    this.identifyCode = ''
                    this.makeCode(this.identifyCodes, 4)
                },
                makeCode (o, l) {
                    for (let i = 0; i < l; i++) {
                        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                    }
                },
                randomNum (min, max) {
                    return Math.floor(Math.random() * (max - min) + min)
                },
                submit()
                {
                    if (this.code.toLowerCase() !== this.identifyCode.toLowerCase())
                    {
                        this.$message.error('请填写正确验证码')
                        this.refreshCode()
                        return
                    }
                    else
                    {
                        this.submitform()
                    }
                },

                submitform()
                {
                    this.axios
                        .post(
                            "http://47.95.195.192:8081/user/register",
                            qs.stringify({
                                phone: this.ruleForm.zhanghao,
                                name: this.ruleForm.name,
                                email: this.ruleForm.youxiang,
                                password: this.ruleForm.password
                            })
                        )
                        .then(function(data)
                        {
                            console.log("jinlail")
                            if(data.data.data ==='success'){
                                console.log("youjinlai")
                                window.location ='/login'
                            }else if(data.data.data === 'userExist'){
                                alert("注册用户已存在")
                            }else{
                                alert("注册失败")
                            }
                            console.log("返回了数据："+data.data);
                        })
                        .catch(error => {
                            console.log("错误信息" + error);
                        });
                }
            },
        mounted()
        {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
            // this.submitform();
        }
    };
</script>

<style scoped>

</style>