<template>
  <div class="home">
    <div class="banner" style="">
      <div class="title"><img :src="confData.logo"></div>
      <div class="introduce">{{confData.msg}}</div>
    </div>
    <div class="content">
      <div class="recommend">
        <div class="tltle">精品展示</div>
        <div class="card" v-for="item in recommend">
          <div class="title">{{item.title}}</div>
          <div class="body">{{item.text}}</div>
          <a @click="more()" :href="'#/composition/'+item.type+'/'+item.typeId" class="more">查看更多</a>
        </div>
      </div>
      <div class="link">
        <div class="title">友情链接</div>
        <div class="card" v-for="item in links">
          <a :href="item.url">
            <span>{{item.name}}</span>
            <span>{{item.site}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'home',
    data(){
    	return {
        recommend: [
          {title: '标题', id: 0,content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'}
        ],
        links: [
          {name: '百度一下', site: 'www.baidu.com', url: 'http://www.baidu.com'}
        ],
        confData: {}
      }
    },
    methods: {
    	more(){
        console.log('9999');
        this.$root.Bus.$emit('composition',1);
      }
    },
    created(){
      var that = this;
      //上面的一些信息
      axios.get('http://www.xiedashuaige.cn:3000/index')
        .then(function (res) {
          that.confData = res.data;
        })
        .catch(function (err) {
          console.log("err"+err);
        });
      //文章展示数据
      axios.get('http://www.xiedashuaige.cn:3000/article?id=3')
        .then(function (res) {
          that.recommend = res.data;
          console.log(that.recommend[0].typeId+'*****************')
        })
        .catch(function (err) {
          console.log("err"+err);
        })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/index.scss";
  .home{
    .banner{
      width: 100%;
      background: url('~static/img/banner.jpg');
      background-repeat: no-repeat;
      background-size: 100%;
      .title{
        padding-top: 4%;
        text-align: center;
        img{
          width: 50%;
          height: 50%;
        }
      }
      .introduce{
        font-family: "Microsoft YaHei UI";
        margin-top: 3%;
        padding-bottom: 3%;
        text-align: center;
        font-size: 2rem;
        color: #fff;
      }
      @media screen and (max-width: 767px) {
        .introduce{
          margin-top: 2%;
          font-size: 1rem;
        }
      }
    }
    .content{
      width: 100%;
      .recommend{
        width: 61.8%;
        float: left;
        .tltle{
          font-size: 2rem;
          padding: 30px;
        }
        .card{
          width: 80%;
          height: 100px;
          margin: 10px auto;
          padding: 5px;
          background-color: $home-card;
          position: relative;
          .title{
            font-size: 1.5rem;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .body{
            font-size: 1.2rem;
            height: 43px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .more{
            position: absolute;
            right: 10px;
            top: 80px;
          }
        }
      }
      .link{
        width: calc(38.2% - 60px);
        float: right;
        position: relative;
        padding: 30px;
        &::after{
          content: ' ';
          width: 2px;
          height: 500px;
          background-color: #A1C9ED;
          position: absolute;
          top:0;
          left: 0;
        }
        .title{
          font-size: 2rem;
          margin-bottom: 50px;
        }
        .card{
          font-size: 1.2rem;
          margin: 20px;
          span{
            margin: 10px;
          }
        }
      }
      @media screen and (max-width: 767px) {
        .link{
          display: none;
        }
        .recommend{
          width: 100%;
        }

      }
    }
  }


</style>
