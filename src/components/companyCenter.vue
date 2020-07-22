<template>
    <div>
    <Head></Head>
        <section class="page-title title-bg9">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>个人中心</h2>
                    <ul>
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <li>个人中心</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section" id="app">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-sm-center">

                            <upload-img></upload-img>

                            <h4 class="mt-3"><a href="#" class="text-dark">{{info.name}}</a></h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mr-3">
                                    <p class="text-muted mb-0"><i class="mdi mdi-map-marker mr-2"></i>{{info.area}}</p>
                                </li>

                                <li class="list-inline-item">
                                    <p class="text-success mb-0"><i
                                            class="mdi el-icon-s-flag mdi-18px mr-2"></i>通过验证
                                    </p>
                                </li>
                            </ul>

                            <ul class="list-inline mb-2">

                                <li class="list-inline-item mr-3">
                                    <p class="text-muted"><i class="mdi mdi-email mr-2"></i>{{info.email}}</p>
                                </li>

                                <li class="list-inline-item">
                                    <p class="text-muted"><i
                                            class="mdi mdi-cellphone-iphone mr-2"></i>{{info.headQuarters}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4 pt-2">
                        <h4>公司简介 :</h4>
                        <div class="rounded border p-4 mt-3">
                            <p class="text-muted">{{info.introduction}}</p>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                               role="tab" aria-controls="pills-home" aria-selected="true">待处理</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                               role="tab" aria-controls="pills-profile" aria-selected="false">历史记录</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab1" data-toggle="pill" href="#pills-profile1"
                               role="tab" aria-controls="pills-profile" aria-selected="false">已发布岗位</a>
                        </li>
                    </ul>
                </div>
                <!--       待处理         -->
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">学校</th>
                                <th scope="col">专业</th>
                                <th scope="col">投递岗位</th>
                                <th scope="col">手机号</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody id="dv">
                            <tr v-for="(item,i) in infoList" :key="i" v-if="item.status === 'wait'">
                                <td>{{item.name}}</td>
                                <td>{{item.school}}</td>
                                <td>{{item.major}}</td>
                                <td>{{item.jobName}}</td>
                                <td>***********</td>
                                <td>
                                    <button type="button" id="btn1" class="btn btn-sm  btn-primary"
                                            v-on:click="notify(item)" >通知面试</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info"
                                            v-on:click="resumeInfo(item)">查看简历</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm  btn-danger"
                                            v-on:click="reject(item)">拒绝</button>
                                </td>
                            </tr>
                            <tr v-for="item in infoList" v-if="item.status === 'interview'" :key="item">
                                <td>{{item.name}}</td>
                                <td>{{item.school}}</td>
                                <td>{{item.major}}</td>
                                <td>{{item.jobName}}</td>
                                <td>{{item.phone}}</td>
                                <td>
                                    <button type="button" id="btn3" class="btn btn-sm  btn-warning"
                                            v-on:click="notify(item)">通知报道</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info"
                                            v-on:click="resumeInfo(item)">查看简历</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm  btn-danger"
                                            v-on:click="reject(item)">拒绝</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--        历史记录      -->
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">学校</th>
                                <th scope="col">专业</th>
                                <th scope="col">投递岗位</th>
                                <th scope="col">手机号</th>
                                <th scope="col">转态</th>
                            </tr>
                            </thead>
                            <tbody>
                          <tr v-for="item in infoList" v-if="item.status === 'work' || item.status === 'refuse' " :key="item">
                              <td>{{item.name}}</td>
                              <td>{{item.school}}</td>
                              <td>{{item.major}}</td>
                              <td>{{item.jobName}}</td>
                              <td>{{item.phone}}</td>
                              <td v-if="item.status==='work'">已录用</td>
                              <td v-if="item.status==='refuse'">已拒绝</td>
                          </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">已发布的岗位</th>
                            </tr>
                            </thead>
                            <tbody v-for="job in jobList" :key="job">
                            <tr>
                              <div class="col-lg-8 col-md-7" style="max-width: 100%">
                                <div class="shadow rounded p-4 mt-4">
                                    <img src="../assets/img/1.png" alt="" height="90" class="float-left shadow rounded-pill mr-3">
                                    <div class="d-block overflow-hidden">
                                        <h6 class="text-muted font-weight-light float-right mb-0"><i class="mdi mdi-clock-outline mr-1"></i>{{job.postTime}}</h6>
                                        <h5 class="mb-1"><a :href="'jobDetail?id='+job.id+'&name='+job.jobName" class="text-dark">{{job.jobName}}</a></h5>
                                        <small class="text-muted font-weight-bold">{{job.type}}</small>
                                        <ul class="employers-icons list-inline mb-1">
                                            <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                            <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                            <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                            <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                            <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                        </ul>
                                        <p class="text-muted mb-0">{{job.jobDesc}}</p>
                                    </div>
                                </div>
                            </div>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>

    <foot style="margin-top: 3%"></foot>
    </div>
</template>

<script>
    $(function () {
        $("[data-toggle='popover']").popover();
    });
</script>
<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        data(){
            return{
                info:"",
                infoList: [],
                jobList:[],
            }
        },

        methods:{
             compDetail(){
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                 console.log("拿到的ID "+Cookies.get('id'))
                 this.axios.get('/companyDetail/'+Cookies.get('id')).then(res=>{
                        this.info = res.data.data,
                        this.Jobdetail()
                        console.log("企业详细信息"+res.data.data)
                }).catch(error=>{
                    console.log("查询失败"+error)
                })
            },



            pendings(){
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                 this.axios.get('/getPendings').then(res=>{
                     if (res.data.success == true){

                         this.infoList = res.data.data
                     }
                 }).catch(err=>{
                      console.log("待处理的申请 :"+err)
                 })
            },

            notify(item){
                // console.log("item"+item.status)
                if(item.status==='wait'){
                    item.status='interview'
                    this.axios.post('/interview',qs.stringify({
                        phone:item.phone,
                        jobName:item.jobName
                    })).then(res=>{
                    }).catch(err=>{
                        console.log("通知面试失败")
                    })
                }else if (item.status === 'interview'){
                    item.status='work'
                    this.axios.post('/work',qs.stringify({
                        phone:item.phone,
                        jobName:item.jobName
                    })).then(res=>{
                    }).catch(err=>{
                        console.log("通知入职失败")
                    })
                }
            },

            resumeInfo(item){
                window.location='/resume-style?phone='+item.phone
            },

            reject(item){
             this.axios.post('/refuse', qs.stringify({
                 phone: item.phone,
                 jobName: item.jobName
             })).then(res => {
                 item.status = 'refuse';
                 console.log("拒绝申请成功:" + res.data.data)
             }).catch(err => {
                 console.log("拒绝申请失败")
             })
            },


           Jobdetail(){
                console.log("this.info.name "+this.info.name)
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2){
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                this.axios.get('/postedJobs/'+this.info.name).then(res=>{
                    this.jobList = res.data.data,
                        console.log("企业中心企业详细信息"+this.jobList[0].postTime)
                }).catch(error=>{
                    console.log("查询失败"+error)
                })
            },

        },

        mounted: function () {
            this.compDetail()
            this.pendings()
            this.notify(item)
            this.reject(item)
        },

        created:function() {
            document.getElementById("btn1").style.color = "black";
        }

    }
</script>

<style scoped>

</style>