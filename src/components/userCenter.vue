<template>
<div>
    <Head></Head>
    <section class="page-title title-bg4">
        <div class="d-table">
            <div class="d-table-cell">
                <h2>个人中心</h2>
                <ul>
                    <li>
                        <a href="/">主页</a>
                    </li>
<!--                    <li>岗位列表</li>-->
                </ul>
            </div>
        </div>
    </section>
    <section class="section" style="margin-top: 80px">
        <div class="container">
            <!--Title-->
            <div  >
                <div class="col-md-3">
                    <h5 class="text-dark">已投递简历</h5>
                </div>
                <div class="col-md-3" style="float: right">
                    <div class="theme-btn">
                        <button class="btn btn-primary btn-block" >
                            <a href="/createResume" style="color: white">{{showtype}}</a>

                        </button>
                    </div>
                </div>
            </div>
            <div class="row">

<!--                <jobRecommend v-for="(appliedjob,i) in appliedjobs" :key="i" :jobs="jobs[i]" :appliedjobs="appliedjobs[i]"></jobRecommend>-->

<!--                <div class="row" v-for="(job,id) in jobs" :key="id" >-->
                <appliedJobs v-for="(appliedjob,i) in appliedjobs" :key="i" :appliedjobs="appliedjobs[i]"></appliedJobs>
<!--                </div>-->

                <!--User Profile-->

                <!--End User Profile-->
            </div>
        </div>
    </section>
    <foot></foot>
</div>
</template>

<script>
    export default
    {
        data()
        {
            return{
                jobs:[],
                appliedjobs:[],
                showtype:""
            }
        },
        methods: {
            // 获得推荐职位列表
            getjoblist()
            {
                this.axios
                    .get("http://47.95.195.192:8081/user/jobList")
                    .then(res => {
                        this.jobs = res.data.data;
                        console.log("全部职位列表："+this.jobs)
                    })
                    .catch(error => {
                        console.log("岗位列表无数据,错误信息：" + error);
                    });
                this.axios
                    .get("http://47.95.195.192:8081/user/getUserAppliedJobs")
                    .then(res=>{
                        this.appliedjobs=res.data.data
                        console.log("已经申请的职位："+res.data.data)
                        console.log('已经申请职位的id：'+res.data.data[1].jobId)
                    })
                    .catch(error => {
                        console.log("status无数据,错误信息：" + error);
                    });
            },

            geren(){
                this.axios.get('http://47.95.195.192:8081/user/resumeExist').then(res=>{
                    if(res.data.data=='have_resume'){
                        this.showtype="完善简历"
                    }else if(res.data.data=='no_resume'){
                        this.showtype="新建简历"
                    }
                })
            }

        },
        mounted() {
            this.getjoblist()
            this.geren()
        }
    }
</script>

<style scoped>

</style>