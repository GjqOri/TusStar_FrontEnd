import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/js/bootstrap.min.js"
import axios from "axios"
import VueAxios from 'vue-axios'
import {UrlSearch} from "./assets/js/utils"
import htmlToPdf from './assets/js/htmlToPdf';


Vue.use(htmlToPdf);

// import "@/assets/js/contact-form-script.js"
// import "@/assets/js/custom.js"
// import "@/assets/js/form-validator.min.js"
// import "@/assets/js/jquery.ajaxchimp.min.js"
// import "@/assets/js/jquery.magnific-popup.min.js"
// import "@/assets/js/jquery.nice-select.min.js"
// import "@/assets/js/jquery-3.5.0.min.js"
// import "@/assets/js/meanmenu.js"
// import "@/assets/js/owl.carousel.min.js"
// import "@/assets/js/popper.min.js"
// import "@/assets/js/wow.min.js"

import "@/assets/css/animate.css"
import "@/assets/css/bootstrap.min.css"
// import "@/assets/css/boxicon.min.css"
import "@/assets/css/magnific-popup.css"
import "@/assets/css/nice-select.css"
// import "@/assets/css/owl.carousel.min.css"
import "@/assets/css/owl.theme.default.min.css"
import "@/assets/css/responsive.css"
import "@/assets/css/style.css"
import "@/assets/css/meanmenu.css"


//组件引用
import head from './components/Head.vue'
Vue.component("Head",head)
import foot from './components/foot.vue'
Vue.component("Foot",foot)
import yanzhengma from './components/yanzhengma.vue'
Vue.component("yanzhengma",yanzhengma)
import logo from './components/logo'
Vue.component("logo",logo)
import search from './components/search'
Vue.component("search",search)
import  jobInfo from './components/jobInfo'
Vue.component("jobInfo",jobInfo)
import  jobRecommend from './components/jobRecommend'
Vue.component("jobRecommend",jobRecommend)
import appliedJobs from "./components/appliedJobs";
Vue.component('appliedJobs',appliedJobs)
import uploadImg from "./components/uploadImg";
Vue.component('uploadImg',uploadImg)

let Request = new UrlSearch();
Vue.prototype.$Request = Request
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
