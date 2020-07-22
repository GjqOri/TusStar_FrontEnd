<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg6">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>岗位详情</h2>
                    <ul>
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <li>岗位详情</li>
                    </ul>
                </div>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <!-- Page Title End -->

        <!-- Job Details Section Start -->
        <section class="job-details ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="job-details-text">
                                    <div class="job-card">
                                        <div class="row align-items-center">
                                            <div class="col-md-2">
                                                <div class="company-logo">
                                                    <img src="../assets/img/company-logo/1.png" alt="logo">
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="job-info">
                                                    <h3>{{jobdetail.jobName}}</h3>
                                                    <ul>
                                                        <li>
                                                            <i class='bx el-icon-location-outline'></i>
                                                            {{jobdetail.workLocation}}
                                                        </li>
                                                        <li>
                                                            <i class='bx el-icon-office-building' ></i>
                                                            {{jobdetail.name}}
                                                        </li>
                                                        <li>
                                                            <i class='bx el-icon-s-platform' ></i>
                                                            {{jobdetail.nature}}
                                                        </li>
                                                    </ul>
                                                    
                                                    <span>
                                                        <i class='bx el-icon-position' ></i>
                                                        发布时间: {{jobdetail.postTime}}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="details-text">
                                        <h3>职位描述</h3>
                                        <p>{{jobdetail.jobDesc}}</p>
                                    </div>
                                    
                                    <div class="details-text">
                                        <h3>工作经验</h3>
                                        <p>{{jobdetail.experience}}</p>
                                    </div>

                                    <div class="details-text">
                                        <h3>职位详情</h3>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>企业名称</span></td>
                                                            <td>{{jobdetail.name}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>企业地址</span></td>
                                                            <td>{{jobdetail.workLocation}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>职位类型</span></td>
                                                            <td>{{jobdetail.type}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>邮箱</span></td>
                                                            <td><a href="mailto:hello@company.com">{{jobdetail.email}}</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>要求学历</span></td>
                                                            <td>{{jobdetail.degree}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>招聘人数</span></td>
                                                            <td>{{jobdetail.recruitingNumbers}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>薪资</span></td>
                                                            <td>{{jobdetail.salary}}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>联系电话</span></td>
                                                            <td><a href="#">{{jobdetail.contactPhone}}</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="theme-btn" v-if="canApply==true">
                                        <button class="btn btn-primary btn-block " v-on:click='applyjob' v-bind:disabled="keyong" >
                                            {{shenqing}}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="job-sidebar">
                            <h3>创始人</h3>
                            <div class="posted-by">
                                <upload-img></upload-img>
<!--                                <img src="../assets/img/client-1.png" alt="client image">-->
                                <h4>{{jobdetail.contactName}}</h4>
                                <span>电话</span>
                                <h4>{{jobdetail.contactPhone}}</h4>
                            </div>
                        </div>

                        <div class="job-sidebar">
                            <h3>关键字</h3>
                            <ul>
                                <li>
                                    <a href="#">网页</a>
                                </li>
                                <li>
                                    <a href="#">数据</a>
                                </li>
                                <li>
                                    <a href="#">搜索引擎</a>
                                </li>
                                <li>
                                    <a href="#">人工智能</a>
                                </li>
                                <li>
                                    <a href="#">图形学</a>
                                </li>
                                <li>
                                    <a href="#">金融</a>
                                </li>
                                <li>
                                    <a href="#">商业</a>
                                </li>
                                <li>
                                    <a href="#">教育</a>
                                </li>
                                <li>
                                    <a href="#">影视</a>
                                </li>
                            </ul>
                        </div>

                        <div class="job-sidebar social-share">
                            <h3>分享</h3>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx el-icon-chat-dot-round"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx el-icon-message"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx el-icon-copy-document"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx el-icon-user"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <foot style="padding-top:5%"></foot>
    </div>
</template>


<script>
import * as Cookies from "js-cookie";
export default {
    
    data(){
        return{
            jobdetail:"",
            id:"",
            shenqing:"发起申请",
            keyong: false,
            canApply:true
        }
    },
    
    methods: {
        applyjob()
        {
            console.log("canapply"+this.canApply)
            if(Cookies.get("userOrCompany")==null){
                alert("请先登录，否则无法申请职位")
            }
            this.axios.get("/resumeExist").then(res=>{
                if (res.data.success == true){
                    if (res.data.data == "no_resume"){
                        alert("请先创建简历")
                        window.location = "/createResume"
                    }else{
                        var se = confirm("您确定要申请这个职位吗？")
                        if (se == true)
                        {
                            this.axios
                                .post('/applyJob/'+this.id)
                                .then(res=>
                                {
                                    if(res.data.data=='success')
                                    {
                                        alert('申请成功')
                                        this.keyong=true
                                        this.shenqing='已申请'
                                    }
                                    else if (res.data.data=='fail')
                                    {
                                        alert('您已经申请过一次，请勿重新申请')
                                        self.keyong = true
                                    }
                                })
                        }
                    }
                }
            })
        },
        checkshenqing()
        {
            this.axios
                .get('/ifApplyJob/'+this.id)
                .then(res=>{
                    if(res.data.data=='applied')
                    {
                        this.keyong=true
                        this.shenqing='已申请'
                    }
                })
        },

        jobdetails()
        {
            if(Cookies.get("userOrCompany") == 1){
                this.canApply = false
            }
            this.id = this.$Request.id
            console.log("id="+this.id)
            this.axios
                .get('http://47.95.195.192:8081/user/job/'+this.id).then(res=>
                    {
                        this.jobdetail=res.data.data
                        console.log("信息："+this.jobsdetial[0].id)
                    })
                .catch(error=>{
                    console.log("查询错误："+error)
            })
        },

    },

    mounted:function()
      {

        this.jobdetails()
        this.checkshenqing()
      },
        created:function() {

            this.jobdetails()
        }
}
</script>

