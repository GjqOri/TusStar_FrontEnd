<template>
<div>
    <Head></Head>
    <!-- Banner Section Start -->
    <div class="banner-section banner-style-five">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="banner-content text-center">
                        <h1 class="wow fadeInUp" data-wow-duration="2s">快速寻找一个适合自己的工作岗位</h1>
                    </div>

                    <search @childFn="parentFn"></search>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Section End -->

    <!-- Category Section Start -->
    <section class="categories-section category-style-three pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center">
                <h2>职位信息</h2>
                <p>根据工作类型，快速选择一批符合您需求的工作岗位</p>
            </div>

            <div class="row">
                <jobInfo
                        v-for="(zhiweixinxiname, i) in zhiweixinxinames"
                        :key="i"
                        :zhiweixinxinames="zhiweixinxinames[i]"
                        :jobTypeNum="jobTypeNum[i]"
                ></jobInfo>
            </div>
        </div>
    </section>
    <!-- Category Section End -->

    <!-- Job Section End -->
    <section class="job-style-two pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center">
                <h2>推荐的职位</h2>
                <p>启迪之星精心为各位求职者推荐的优质职位</p>
            </div>

            <div class="row">
                <jobRecommend
                        v-for="(job, i) in jobs"
                        :key="i"
                        :jobs="jobs[i]"
                ></jobRecommend>
            </div>
        </div>
    </section>
    <!-- Job Section End -->

    <!-- Counter Section Start -->
    <div class="counter-section pt-100 pb-70">
        <div class="container">
            <div class="row counter-area">
                <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="counter-text">
                        <i class="flaticon-resume"></i>
                        <h2><span>1225</span></h2>
                        <p>Job Posted</p>
                    </div>
                </div>

                <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                    <div class="counter-text">
                        <i class="flaticon-recruitment"></i>
                        <h2><span>145</span></h2>
                        <p>Job Filed</p>
                    </div>
                </div>

                <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div class="counter-text">
                        <i class="flaticon-portfolio"></i>
                        <h2><span>170</span></h2>
                        <p>Company</p>
                    </div>
                </div>

                <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                    <div class="counter-text">
                        <i class="flaticon-employee"></i>
                        <h2><span>125</span></h2>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Counter Section End -->
    <foot></foot>

    <!-- Back To Top Start -->
    <div class="top-btn">
        <i class='bx bx-chevrons-up bx-fade-up'></i>
    </div>
    <!-- Back To Top End -->
</div>
</template>

<script>

    export default {
        data() {
            return {
                jobs: [],
                jobTypeNum:[],
                zhiweixinxinames:
                [
                    "技术",
                    "产品",
                    "设计",
                    "运营",
                    "销售",
                    "媒体",
                    "金融",
                    "教育",
                    "服务业"
                ]
            };
        },

        methods: {
            // 获得推荐职位列表
            getjoblist()
            {
                this.axios
                    .get("http://47.95.195.192:8081/user/jobList")
                    .then(res => {
                        //this.company.push(sessionStorage.getItem(res.data.data))
                        this.jobs = res.data.data;
                        // this.jobs.push(res.data.data[0])
                        // console.log(this.jobs);
                        // console.log(this.jobs[0]);
                        // console.log("id:" + this.jobs[0].id, "name:" + this.jobs[0].name);
                    })
                    .catch(error => {
                        console.log("无数据" + error);
                    });
                this.axios
                    .get('http://47.95.195.192:8081/user/getJobTypeNum')
                    .then(res=>{
                        this.jobTypeNum=res.data.data
                    })

            },
            // 获得推荐职位列表结束

            parentFn(payload) {
                this.jobs=payload
                // this.jobs.push(payload);
                console.log("子过来的数据: " + this.jobs[0].jobName);
            }
        },

        mounted: function() {
            this.getjoblist();
        }
    };
</script>

<style scoped>

</style>