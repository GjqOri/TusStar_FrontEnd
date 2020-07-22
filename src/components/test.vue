<template>
    <div>

        <div id="pdfDom" style="padding-top: 55px;background-color: #fff;">
             <h2>文件标题</h2>
             <h3>文档内容</h3>
        </div>
        <button @click="getPdf(file1)">导出文档</button>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               htmlTitle:'文档'
           }
       }
    }
</script>

<style scoped>

</style>