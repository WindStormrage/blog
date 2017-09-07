<template>
  <div id="app">
    <nav-left></nav-left>
    <nav-right></nav-right>
    <!--初始的时候让class为空，为了使初始的时候不出现动画-->
    <div @click="DidTab()" :class="[!isbar ? (isbar === 0 ? '' : 'disappear') : 'show' , 'content']">
      <bodyer></bodyer>
    </div>
  </div>
</template>

<script>

  import navLeft from 'components/navigation/nav_left.vue';
  import navRight from 'components/navigation/nav_right.vue';
  import Bodyer from 'components/content/body.vue';

  export default {
    name: 'app',
    data(){
    	return {
    		isbar: 0
      }
    },
    components: {
    	navLeft,
      navRight,
      Bodyer
    },
    created(){
    	//监听从汉堡传来的数据，是否显示左边的导航
    	var that = this;
    	this.$root.Bus.$on('bar',(bar)=>{
    		that.isbar = bar;
    		console.log(bar);
      })
    },
    methods:{
    	//如果点击了content就触发右边导航的消失
      DidTab(){
        this.$root.Bus.$emit('disTab',1);
      }
    },
    //组件消失的时候删除监听
    beforeDestroy(){
    	this.$root.Bus.$off('bar')
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "assets/scss/index.scss";

  .content{
    width: $content-l;
    height: 100%;
    position: absolute;
    left: $nav-left;
    background-color: $content-bg;
    z-index: 0;
    overflow: scroll;
    overflow-x:visible;
    @media screen and (min-width: 766px) {
      @include slider2();
    }
  }
  //当屏幕为手机屏幕的时候就使他变为全屏
  @media screen and (max-width: 766px) {
    .content{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      box-shadow: -5px 0 10px #888888;
    }
    //点击汉堡赋值class分别产生不同动画
    .disappear{
      @include animation (disappear-nav);
    }
    .show{
      @include animation (show-nav);
    }
  }
  //两种动画效果
  @keyframes show-nav {
    to{
      left: $nav-left;
    }
  }
  @keyframes disappear-nav {
    from{
      left: $nav-left;
    }
    to{
      left: 0;
    }
  }
</style>
