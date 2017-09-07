<template>
  <div class="composition">
    <div class="title">文章题目</div>
    <div class="msg">
      <span>2017/8/27 16:09</span>
      <span>谢晗阳</span>
    </div>
    <div class="html" v-html="html"></div>
    <p class="ps">备注：{{nav}}</p>
  </div>
</template>

<script>

  var showdown= require('showdown');
  var converter= new showdown.Converter();

  export default {
    name: 'composition',
    data(){
    	return{
        html: '666',
        nav: '',
        id: '',
        text: ''
      }
    },
    watch:{
    	'$route'(to, from){
        this.ChangePath();
      }
    },
    created(){
    	this.ChangePath();
    },
    methods: {
    	ChangePath(){
        this.nav=this.$route.params.nav;
        this.id=this.$route.params.id;
        this.text='#hello, markdown!\n##nav='+this.nav+',id='+this.id+'\n文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容\n```\nvar converter = new showdown.Converter();\nvar text= \'#hello, markdown!\';\nvar html= converter.makeHtml(text);\n```![666](http://static.mukewang.com/img/58341b88000176ce06000338-240-180.jpg)\n```\n<div class="text same">\n<h3>1月活动</h3>\n<p>快过年了，大家可以商量着去哪玩吧~</p>\n</div>\n```';
        this.html= converter.makeHtml(this.text);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";


  .composition{
    width: calc(100% - 100px);
    padding: 20px 50px;
    .title{
      text-align: center;
      width: 100%;
      font-family: "Microsoft YaHei UI";
      font-size: 2rem;
    }
    .msg{
      font-size: 1rem;
      text-align: center;
      margin: 10px 0 10px 0;
      span:first-child{
        margin-right: 20px;
      }
    }
    .html{
      margin: 50px 0;
      font-size: 1.2rem;
      line-height: 1.8rem;
      pre{
        overflow: scroll;
      }
      img{
        max-width: 100%;
      }
    }
    .ps{
      font-size: 1.2rem;
      text-align: right;
      margin-top: 30px;
      margin-right: 30px;
    }
  }

</style>

<!--
--代码超过宽度显示滚动条
-->
