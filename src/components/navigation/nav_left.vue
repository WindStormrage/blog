<template>
  <div class="nav">
    <div class="head">
      <img :src="data.header">
    </div>
    <div class="name">{{data.name}}</div>
    <div class="tab">
      <!--判断是否高亮，点击传当前的数据过去然后判断由谁高亮-->
      <div :class="isTab == 0 ? 'action' : ''" @click="NavRight(0)">
        <img src="~assets/img/me.png"><li>博客主页</li>
      </div>
      <div :class="isTab == 1 ? 'action' : ''"@click="NavRight(1)">
        <img src="~assets/img/article.png"><li>博主文章</li>
      </div>
      <div :class="isTab == 2 ? 'action' : ''"@click="NavRight(2)">
        <img src="~assets/img/reprint.png"><li>精彩转载</li>
      </div>
      <div :class="isTab == 3 ? 'action' : ''" @click="NavRight(3)">
        <img src="~assets/img/essay.png"><li>随便写写</li>
      </div>
      <div :class="isTab == 4 ? 'action' : ''"@click="NavRight(4)">
        <img src="~assets/img/message.png"><li>欢迎留言</li>
      </div>
      <div :class="isTab == 5 ? 'action' : ''" @click="NavRight(5)">
        <img src="~assets/img/about.png"><li>关于自己</li>
      </div>
    </div>
    <div class="other">
      <div>
        <a target="_blank"
           href="http://wpa.qq.com/msgrd?v=3&uin=695729033&site=qq&menu=yes"><img src="~assets/img/qq.png">
        </a>
        <img src="~assets/img/wechat.png">
      </div>
      <div>
        <img src="~assets/img/github.png">
        <img src="~assets/img/email.png">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'nav',
    data(){
    	return {
    		isTab: -1,
        tab: -1,
        data: {}
      }
    },
    methods: {
    	//判断当前高亮，向右边导航发送数据是否显示，-1为不显示，其他为显示，
      NavRight(index){
      	//点击可以显示右边导航的先不给他高亮
      	if(index !== 1 && index !== 2)
          this.isTab = index;
        //二次点击取消右边显示
        if(index === this.tab){
          this.$root.Bus.$emit('tab',-1);
          this.tab = -1;
          return;
        }
        this.tab = index;
        if(index === 1 || index === 2){
          this.$root.Bus.$emit('tab',index);
        }else{
      		this.$root.Bus.$emit('tab',-1);
        }

        //切换body//除了可以出现右边导航的
        if(index !== 1 && index !== 2)
          this.$root.Bus.$emit('isbody',index)
      }
    },
    created(){
      var that = this;
      axios.get('http://www.xiedashuaige.cn:3000/index')
        .then(function (res) {
          that.data = res.data;
        })
        .catch(function (err) {
          console.log("err"+err);
        })

    	//接收content发来的点击事件，如果使右边导航隐藏
      var that = this;
      this.$root.Bus.$on('disTab',()=>{
        if(that.tab !== -1){
        	//高亮可以不要变只要改变tab就好
          this.$root.Bus.$emit('tab',-1);
          this.tab = -1;
        }
      });
      //接收来自文章的高亮
      this.$root.Bus.$on('composition',(composition)=>{
        //相当于点击了文章
        //设置高亮
        this.isTab = composition;
        //更改右边导航显示情况
        this.tab = -1;
        this.$root.Bus.$emit('tab',-1);
      })
    },
    beforeDestroy(){
      this.$root.Bus.$off('disTab')
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";

  .nav{
    width: $nav-left;
    height: 100%;
    background-color: $nav-lift-bg;
    position: absolute;
    text-align: center;
    z-index: -1;
    @include border();
    border-right:1px solid #aaaaaa;
    overflow-y: scroll;
    @include slider2();
    .head{
      position: relative;
      margin-top: 50%-$gold*100%/2;
      margin-left: 50%-$gold*100%/2;
      width:$gold*100%;
      border-radius: 50%;
      overflow: hidden;
      background-color: $head;
      &:after {
        content: '';
        display: block;
        margin-top: 100%; //margin 百分比相对父元素宽度计算
      }
      img{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .name{
      font-family: "Microsoft YaHei UI";
      margin-top: 20px;
      font-size: 1.8rem;
    }
    //中等屏幕加大名字
    @media screen and (max-width: 870px) and (min-width: 767px) {
      .name{
        font-size: 1.2rem;
      }
    }
    //手机没有名字
    @media screen and (max-width: 766px) {
      .name{
        display: none;
      }
    }
    .tab{
      margin-top: 20px;
      font-size: 1.2rem;
      line-height: 40px;
      img{
        width: 20px;
        height: 20px;
        display: inline-block;
      }
      li{
        margin-left: 5px;
        vertical-align: middle;
        display: inline-block;
      }
      //中等屏幕去掉图片
      @media screen and (max-width: 870px) and (min-width: 767px) {
        img{
          display: none;
        }
      }
      //手机屏幕去掉文字
      @media screen and (max-width: 766px) {
        li{
          display: none;
        }
      }
      div:hover{
        background-color: $nav-hover;
      }
    }
    .other{
      width: 100%;
      position: absolute;
      bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      img{
        margin-top: 15px;
        width: 35px;
        height: 35px;
      }
      @media screen and (min-width: 1144px) {
        div:nth-child(2n){
          margin-left: 5px;
        }
      }
      @media screen and (min-width: 766px) {
        img:nth-child(2n){
          margin-left: 5px;
        }
      }
      @media screen and (max-width: 766px) {
        img{
          width: 30px;
          height: 30px;
        }
      }
    }
    @media screen and (max-height: 400px){
      .other{
        display: none;
      }
    }
  }
  @media screen and (max-width: 766px) {
    .nav{
      //display: none;!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  }
  .action{
    background-color: $nav-action;
  }
</style>
