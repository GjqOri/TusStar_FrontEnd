<template>
<div>
<!--    <el-upload-->
<!--            class="avatar-uploader"-->
<!--            action="http://47.95.195.192:8081/user/uploadHead"-->
<!--            :show-file-list="false"-->
<!--            :on-success="handleAvatarSuccess"-->
<!--            :before-upload="beforeAvatarUpload">-->
<!--        <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--        <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--    </el-upload>-->

<!--    <form action="/uploadPhoto1" method="post" enctype="multipart/form-data">-->
<!--        <img id="img" v-bind:src="photoAddress" class="img-fluid avatar avatar-medium d-block mx-auto rounded-pill">-->
<!--        <div class="shangchuan">-->
<!--            <a href="javascript:;" class="file">选择照片-->
<!--                <input type="file" class="custom-file-input"-->
<!--                       id="inputGroupFile01" name="image"-->
<!--                       aria-describedby="inputGroupFileAddon01">-->
<!--            </a>-->
<!--        </div>-->
<!--        <div class="shangchuan">-->
<!--            <input class="file" type="submit" value="上传"/>-->
<!--        </div>-->
<!--    </form>-->
    <form action="/uploadPhoto1" method="post" enctype="multipart/form-data">
    <div id="myPhoto">
        <div class="viewPhoto">
            <img :src="imgURL" alt="" id="portrait"style="width: 200px;height: 200px; border-radius:50%" />
        </div>
        <div class="listBox">
            <dl class="btn btn-success fileinput-button">
                <dt>请上传图片</dt>
                <dd>
                    <input type="file"id="saveImage" name="myphoto" >
                </dd>
            </dl>
        </div>
        <div>
            <input type="button"  class="btn btn-success fileinput-button" value="保存图片" @click="imageSubmit">
        </div>
    </div>
    </form>
</div>

</template>


<style>
    .fileinput-button {
        position: relative;
        display: inline-block;
        overflow: hidden;
        margin-top: 2%;
    }

    .fileinput-button input{
        position:absolute;
        right: 0px;
        top: 0px;
        opacity: 0;
        -ms-filter: 'alpha(opacity=0)';
        font-size: 200px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<script>
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                imageUrl: '',
                action:'',
                mode:{},
                imgURL:'',
            };
        },
        methods:
        {
            handleAvatarSuccess(res, file)
            {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file)
            {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },


            great(){
                document.getElementById('saveImage').onchange = function () {
                    var imgFile = this.files[0];
                    // this.file = event.target.files[0];
                    var fr = new FileReader();
                    fr.onload = function () {
                        document.getElementById('portrait').src = fr.result;
                    };
                    fr.readAsDataURL(imgFile);
                }
            },
            imageSubmit()
            {
                let x = document.getElementById('saveImage').files[0];
                console.log(x);
                let params = new FormData() ; //创建一个form对象,必须是form对象否则后端接受不到数据
                params.append('file',x,x.name);  //append 向form表单添加数据
                //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
                let config =
                    {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                this.axios.post("http://47.95.195.192:8081/user/uploadHead",params,config)
                    .then(function(res){
                        console.log(res);
                        this.imageSave = res.data.image;
                        sessionStorage.setItem('headImg',this.imageSave); //将图片保存，并能够在其他地方加载显示
                        router.go(0);   //刷新页面，头像改变
                        alert("上传成功")

                    }
                    .bind(this))
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            getImg()
            {
                this.axios
                    .get('http://47.95.195.192:8081/user/headExist')
                    .then(res=>{
                        this.imgURL='http://47.95.195.192:8081/static/'+res.data.data
                    })
            },

        modeUpload(item)
            {
                this.mode=item.file
            },
            upload()
            {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1)
                {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                    this.action='http://47.95.195.192:8081/company/uploadHead'
                }
                if (userOrCompany === 2)
                {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                    this.action='http://47.95.195.192:8081/user/uploadHead'
                }
                let fd=new FormData()
                fd.append('file',this.mode)
                this.axios.post('/api/reportRule', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response.data);
                })
                // this.axios
                //     .post('/uploadHead')
                //     .then(res=>{
                //         console.log(res.data.data)
                //     })
            }
        },
        mounted() {
            this.great()
            this.getImg()
        }
    }
</script>