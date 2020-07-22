<template>
<div>
    <Head></Head>
    <div   id="pdfDom">
        <section class="resume-section ptb-100">
            <div class="container">
                <div class="resume-area">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="resume-thumb-area text-center">
                                <img src="../assets/img/logo.png" alt="account image">
                                <h3>{{resume.name}}</h3>
                                <p>{{resume.phone}}</p>
                                
                                <div class="social-links">
                                    <a href="#" target="-blank">
                                        <i class="bx el-icon-chat-dot-round"></i>
                                    </a>
                                    <a href="#" target="-blank">
                                        <i class="bx el-icon-message"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="resume-content about-text">
                                <h3>
                                    <i class='bx bx-user-circle'></i>
                                    自我介绍
                                </h3>
                                <p>{{resume.introduction}}</p>
                            </div>

                            <div class="resume-content basic-info-text">
                                <h3>
                                    <i class='bx bx-book-alt'></i>
                                    基本信息
                                </h3>
                                <ul>
                                    <li>
                                        <span>性别:</span>
                                        {{resume.sex}}
                                    </li>
                                    <li>
                                        <span>民族:</span>
                                        {{resume.nation}}
                                    </li>
                                    <li>
                                        <span>出生年月日:</span>
                                        {{resume.birth}}
                                    </li>
                                    <li>
                                        <span>电子邮箱:</span>
                                        {{resume.email}}
                                    </li>
                                    <li>
                                        <span>毕业院校:</span>
                                        {{resume.school}}
                                    </li>
                                    <li>
                                        <span>最高学历:</span>
                                        {{resume.degree}}
                                    </li>
                                </ul>
                            </div>

                            <div class="resume-content education-text">
                                <h3>
                                    <i class='bx bx-book-reader'></i>
                                   教育经历
                                </h3>

                                <ul>
                                    <li>
                                        <span>入学时间:</span>
                                        {{resume.timeOfEnrollment}}
                                    </li>
                                    <li>
                                        <span>专业:</span>
                                        {{resume.major}}
                                    </li>
                                    <li>
                                        <span>学制:</span>
                                        {{resume.educationalSystem}}
                                    </li>
                                    <li style="width: 92.3%;">
                                        <span>院系:</span>
                                        {{resume.department}}
                                    </li>
                                    <li style="width: 92.3%;">
                                        <span>附加信息(奖惩情况等):</span>
                                        <div style="white-space: pre-wrap;">{{resume.overHeadInfo}}</div>
                                    </li>
                                </ul>
                            </div>

                            <div class="resume-content  experience-text">
                                <h3>
                                    <i class='bx bx-briefcase'></i>
                                    联系方式
                                </h3>
                                <div class="education-info">
                                    <p>手机电话：{{resume.phone}}</p>
                                    <p>电子邮箱：{{resume.email}}</p>
                                    <p>家庭住址：{{resume.address}}</p>
                                </div>
                            </div>

                            <div class="resume-content  experience-text">
                                <h3>
                                    <i class='bx bx-briefcase'></i>
                                    工作/项目/实习经验
                                </h3>

                                <div class="experience-info">
                                    <p>当前(预期)薪资: {{resume.salary}}</p></br>
                                    <p style="white-space: pre-wrap;">实习信息(描述主要工作、成果等):</br> {{resume.internInfo}}</p>
                                    </div>
                            </div>
                            
                            <div class="theme-btn">
                                <a @click="getPdf(file1)" class="default-btn">
                                    下载
                                    <i class='bx bx-download bx-fade-down' ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <foot></foot>
</div>
</template>

<script>

import * as Cookies from "js-cookie";
export default {
    
    data(){
        return{
            resume:[],
            phone:""
        }
    },

    methods:{
        searchResume(){

            let userOrCompany = Cookies.get("userOrCompany")
            console.log("hduauidbasuduasihduiasduia  "+userOrCompany)
            if (userOrCompany == 1){
                this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
            }
            if (userOrCompany == 2){
                this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
            }
            this.axios.get('/getResume').then(res=>{
                this.resume =res.data.data
                console.log("简历错误:"+this.resume)
            }).catch(error=>{
                console.log("简历获取失败:"+error)
            })
        },
        viewResume(){
            this.phone = this.$Request.phone
            console.log("获取的phone"+this.phone)
            this.axios.get('/viewResume/'+this.phone).then(res=>{
                this.resume = res.data.data
                console.log("模板简历获取成功："+this.resume)
            }).catch(eror=>{
                console.log("模板简历获取失败")
            })
        }
        
    },

    mounted :function() {
        this.searchResume()
        this.viewResume()
    },
}
</script>