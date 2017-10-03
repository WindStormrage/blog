<template>
  <div class="composition">
    <div class="title">{{data.title}}</div>
    <div class="msg">
      <span>{{data.date}}</span>
      <span>{{data.name}}</span>
    </div>
    <div class="html" v-html="html"></div>
    <p class="ps">备注：{{data.ps}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  var showdown= require('showdown');
  var converter= new showdown.Converter();

  export default {
    name: 'composition',
    data(){
    	return{
        html: '666',
        data: {}
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
        var that = this;
        axios.get('http://localhost:3000/article?id=' + that.$route.params.nav)
          .then(function (res) {
            that.data = res.data[that.$route.params.id];
            //console.log(that.data.text);
            //that.data.text.replace(/\n/g, "99999");
            console.log(that.data.text);
            that.html= converter.makeHtml(that.data.text);
            console.log(that.html);
          })
          .catch(function (err) {
            console.log("err"+err);
          });
      }
    }
  }
</script>




<style lang="scss" rel="stylesheet/scss">
  //@import "~assets/scss/index.scss";
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
      font-size: 150%;
      line-height: 180%;
      margin: 50px 0;
      pre{
        overflow: scroll;
        background-color: #2B2A39;
        color: #a1c9ed;
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
