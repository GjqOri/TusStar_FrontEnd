<template>
<div>
    <Head></Head>
    <!-- Page Title Start -->
    <section class="page-title title-bg13">
        <div class="d-table">
            <div class="d-table-cell">
                <h2>企业用户注册</h2>

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
                        <el-form-item label="企业名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="公司简介" prop="introduction">
                            <el-input v-model="ruleForm.introduction"></el-input>
                        </el-form-item>
                        <el-form :inline="true" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item label="企业类型" prop="type">
                                <el-select v-model="ruleForm.type" placeholder="请选择">
                                    <el-option label="有限责任公司" value="shanghai"></el-option>
                                    <el-option label="股份有限公司" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="企业规模(人)" prop="scale">
                                <el-select v-model="ruleForm.scale" placeholder="请选择">
                                    <el-option label="2000人以上" value="shanghai"></el-option>
                                    <el-option label="500-2000人" value="beijing"></el-option>
                                    <el-option label="200-500人" value="beijing"></el-option>
                                    <el-option label="50-200人" value="beijing"></el-option>
                                    <el-option label="15-50人" value="beijing"></el-option>
                                    <el-option label="1-15人" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <el-form-item label="所在地区" prop="area">
                            <el-input v-model="ruleForm.area"></el-input>
                        </el-form-item>
                        <el-form-item label="注册资金（元）" prop="fund">
                            <el-input v-model.number="ruleForm.fund"></el-input>
                        </el-form-item>
                        <el-form
                                :inline="true"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm"
                        >
                            <el-form-item label="是否上市" prop="listed">
                                <el-select v-model="ruleForm.listed" placeholder="请选择">
                                    <el-option label="是" value="shanghai"></el-option>
                                    <el-option label="否" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所属行业" prop="industry">
                                <el-select v-model="ruleForm.industry" placeholder="请选择">
                                    <el-option label="互联网/游戏/软件" value="shanghai"></el-option>
                                    <el-option
                                            label="广告/传媒/公关/展览"
                                            value="beijing"
                                    ></el-option>
                                    <el-option
                                            label="房产/家居/物业/建筑"
                                            value="beijing"
                                    ></el-option>
                                    <el-option label="教育/培训" value="beijing"></el-option>
                                    <el-option label="农林牧渔" value="beijing"></el-option>
                                    <el-option label="其他" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <el-form-item label="负责人手机号" prop="phone">
                            <el-input v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="公司邮箱" prop="email">
                            <el-input v-model="ruleForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="登录密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="querenpassword">
                            <el-input
                                    type="password"
                                    v-model="ruleForm.querenpassword"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="官方网站" prop="website">
                            <el-input v-model="ruleForm.website"></el-input>
                        </el-form-item>
                        <el-form-item label="总部位置" prop="headquarters">
                            <el-input v-model="ruleForm.headquarters"></el-input>
                        </el-form-item>
                        <el-form-item label="上传营业执照" prop="headquarters">
                            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                              <el-button slot="trigger" size="big" type="primary">选取文件</el-button>
                              <el-button style="margin-left: 10px;" size="big" type="success" @click="submitUpload">上传到服务器</el-button>
                              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                            <el-input type="tex t" v-model="code">
                                <template slot="append">
                                    <div class="login-code"  @click="refreshCode">
                                        <yanzhengma :identifyCode="identifyCode"></yanzhengma>
                                    </div>
                                </template>
                            </el-input>
                        </el-form-item>
                        <div class="signup-btn text-center">
                            <button type="submit" @click="submit()">注册</button>
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
        <i class='bx bx-chevrons-up bx-fade-up'></i>
    </div>
    <!-- Back To Top End -->
</div>
</template>

<script>
    import qs from "qs";
    import {mapActions,} from 'vuex'
    export default {
        data() {
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
            var checknum = (rule, value, callback) => {
                setTimeout(() => {
                    if (!value) {
                        callback();
                    } else if (!Number.isInteger(value)) {
                        callback(new Error("请输入数字值"));
                    } else {
                        callback();
                    }
                }, 100);
            };
            return {
                code:'',
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                ruleForm: {
                    name: "",
                    type: "",
                    scale: "",
                    area: "",
                    fund: "",
                    industry: "",
                    phone: "",
                    email: "",
                    introduction: "",
                    listed: "",
                    headquarters: "",
                    website: "",
                    password: ""
                },
                rules:
                    {
                        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
                        zhanghao: [
                            { required: true, message: "请填写账号", trigger: "blur" },
                            { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                        ],
                        name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
                        email: [
                            {
                                type: "email",
                                message: "请输入正确的邮箱地址",
                                trigger: ["blur", "change"]
                            }
                        ],
                        phone: [
                            { required: false, message: "请填写密码", trigger: "blur" },
                            { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
                        ],
                        fund: [{ validator: checknum, trigger: "blur" }],
                        password: [{ validator: validatePass, trigger: "blur" }],
                        querenpassword: [{ validator: validatePass2, trigger: "blur" }],
                        yanzhengma: [
                            { required: true, message: "请填写验证码", trigger: "blur" }
                        ]
                    },
                fileList: []
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
                            "http://47.95.195.192:8081/company/register",
                            qs.stringify({
                                name: this.ruleForm.name,
                                type:this.ruleForm.type,
                                scale: this.ruleForm.scale,
                                area: this.ruleForm.area,
                                fund: this.ruleForm.fund,
                                industry: this.ruleForm.industry,
                                phone: this.ruleForm.phone,
                                email: this.ruleForm.email,
                                introduction:this.ruleForm.introduction,
                                listed: this.ruleForm.listed,
                                headQuarters: this.ruleForm.headquarters,
                                website: this.ruleForm.website,
                                password: this.ruleForm.password
                            })
                        )
                        .then(function(data)
                        {
                            if(data.data.data ==='success'){
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
                },
                submitUpload() {
                    this.$refs.upload.submit();
                },
                handleRemove(file, fileList) {
                    console.log(file, fileList);
                },
                handlePreview(file) {
                    console.log(file);
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