<template>
  <div class="body">
    <div class="tab">
      <img @click="burger()" class="burger" src="~assets/img/burger_2.png">
      <div class="name">谢晗阳de博客</div>
      <img class="search" src="~assets/img/search_2.png">
    </div>
    <router-view></router-view>
    <!--<composition></composition>
    <axis></axis>
    <comment></comment>
    <home></home>
    <about></about>-->
  </div>
</template>

<script>

  import Router from 'vue-router'

  import composition from 'components/content/composition.vue';
  import axis from 'components/content/axis.vue';
  import comment from 'components/content/comment.vue';
  import about from 'components/content/about.vue';
  import home from 'components/content/home.vue';

  export default {
    name: 'body',
    components: {
      composition,
      axis,
      comment,
      about,
      home
    },
    data () {
      return {
        bar: false,
        isbody: ''
      }
    },
    methods: {
      burger(){
      	this.bar = !this.bar;
        this.$root.Bus.$emit('bar',this.bar);
      }
    },
    created(){
      var that = this;
      this.$root.Bus.$on('isbody',(isbody)=>{
        that.isbody = isbody;
        switch(isbody){
          case 0:
            this.$router.push({ path: '/home' });
            break;
          case 1:
            this.$router.push({ path: '/composition' });
            break;
          case 2:
            this.$router.push({ path: '/composition' });
            break;
          case 3:
            this.$router.push({ path: '/axis' });
            break;
          case 4:
            this.$router.push({ path: '/comment' });
            break;
          case 5:
            this.$router.push({ path: '/about' });
            break;
        }
      })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";

  .body{
    .tab{
      height: 60px;
      width: calc(100% - 40px);
      background-color: $content-tab;
      display: flex;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      .name{
        font-family: "Microsoft YaHei UI";
        font-size: 1.5rem;
        line-height: 60px;
        color: #F2F2F2;
        display: inline-block;
      }
      .burger, .search{
        margin-top: 15px;
        width: 30px;
        height: 30px;
      }
    }
    @media screen and (min-width: 767px) {
      .tab{
        display: none;
      }
    }
  }
</style>
