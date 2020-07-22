<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg9">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>企业列表</h2>
                    <ul>
                        <li>
                            <a href="index.html">主页</a>
                        </li>
                        <li>企业列表</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="company-section company-style-two pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>企业列表</h2>
                    <p>获取更多适合你的岗位.</p>
                </div>

                    <div class="row">
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" v-for="comp in company" :key="comp">
                            <div class="company-card">
                                <div class="company-logo">
                                    <a href="job-list.html">
                                        <img src="../assets/img/1.png" alt="company logo">
                                    </a>
                                </div>
                                <div class="company-text">
                                    <h3>{{comp.name}}</h3>
                                    <p>
                                        <i class='bx bx-location-plus'></i>
                                        {{comp.area}}
                                    </p>
                                    <a :href="'company-detail?id='+comp.id+'&name='+comp.name" class="company-btn">
                                        查看
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                <i class='bx bx-chevrons-left bx-fade-left'></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link active" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class='bx bx-chevrons-right bx-fade-right'></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    <foot></foot>
    </div>
</template>


<script>
    import * as Cookies from "js-cookie";
    export default {
        data(){
            return {
                company:[],
            }
        },
        methods: {
            findcompany(){
                // let userOrCompany = Cookies.get("userOrCompany")
                // if (userOrCompany === 1){
                //     this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                // }
                // if (userOrCompany === 2){
                //     this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                // }
                this.axios.get('http://47.95.195.192:8081/company/getAllCompanies').then(res=>{
                    this.company = res.data.data
                    console.log("获取数据"+res.data.data[0].type)
                }).catch(error=>{
                    console.log("错误信息"+error)
                })
            }
        },

        mounted:function(){
            this.findcompany()
        },
    }
</script>


<style>

</style>

