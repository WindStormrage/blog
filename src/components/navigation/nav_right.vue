<template>
  <!--判断是否显示-->
  <div :class="tab!=-1 ? 'action' : ''" class="nav">
    <div class="title">{{catalog.title}}</div>
    <div v-for="(item, index) in catalog.content">
      <a @click="choose(index)" :href="'#/composition/'+catalog.nav+'/' + index">
        <li>{{item.title}}</li>
      </a>
      <span class="time">{{item.time}}</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'nav',
    data () {
      return {
      	tab: -1,
        catalog: {
      		title: '博主文章',
          nav: '666',
          content: [
            {title: '文章名字文章名字文章名字', time: '2017/8/28'},
            {title: '文章名字文章名字文章名字', time: '2017/8/28'},
            {title: '文章名字文章名字文章名字', time: '2017/8/28'},
            {title: '文章名字文章名字文章名字', time: '2017/8/28'},
            {title: '文章名字文章名字文章名字', time: '2017/8/28'}
          ]
        }
      }
    },
    created(){
      var that = this;

    	//接收左边导航的数据判断是否显示，-1为隐藏其他显示
      //var that = this;
      this.$root.Bus.$on('tab',(tab)=>{
        that.tab = tab;
        console.log('tab: ' + tab);
        //当他出现的时候要进行渲染
        if(that.tab !== -1){
          //渲染catalog
          that.catalog.title = tab == 1 ? '博主文章' : '精彩转载';
          that.catalog.nav = tab;
          console.log('渲染'+tab);
          that.show(that);
        }
      });
    },
    methods:{
    	//选择到哪篇文章了后就使左边导航高亮
    	choose(index){
    		if(this.catalog.nav === 1)
          this.$root.Bus.$emit('composition',1);
    		else
          this.$root.Bus.$emit('composition',2);
      },
      show(that){
        axios.get('http://www.xiedashuaige.cn:3000/article?id='+that.tab)
          .then(function (res) {
            that.catalog.content = res.data;
            console.log(that.catalog.content)
          })
          .catch(function (err) {
            console.log("err"+err);
          })
      }
    },
    beforeDestroy(){
      this.$root.Bus.$off('tab')
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";

  .nav{
    width: $nav-right;
    height: 100%;
    background-color: $nav-right-bg;
    position: absolute;
    left: $nav-left;
    overflow: scroll;
    overflow-x:visible;
    z-index: 1;
    opacity: 0;
    display: none;
    box-shadow: 5px 0 10px #888888;
    @include slider();
    & :nth-child(2){
      padding-top: 30px;
    }
    li{
      font-size: 1.2rem;
      margin: 40px 20px 0 30px;
    }
    .time{
      padding-top: 10px;
      position: absolute;
      right: 15%;
    }
    .title{
      font-family: "Microsoft YaHei UI";
      font-size: 1.5rem;
      margin: 30px 0 0 30px;
      display: none;
    }
    //中等屏幕隐藏时间
    @media screen and (max-width: 870px) and (min-width: 767px) {
      span{
        display: none;
      }
    }
  }
  //手机屏幕宽度加大，隐藏时间，标题显示
  @media screen and (max-width: 766px) {
    .nav{
      width: $nav-right-s;
    }
    .nav span{
      display: none;
    }
    .nav li{
      margin-top: 25px;
    }
    .nav .title{
      display: block;
    }
  }
  //出现的动画
  .action{
    display: block;
    @include animation (show-tab);
  }
  @keyframes show-tab {
    to{
      opacity: 1;
    }
  }
</style>
