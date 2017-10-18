<template>
  <div class="axis">
    <div class="title">随便写写</div>
    <div class="timeline">
      <div v-for="item in line">
        <div class="tab"></div>
        <div class="card">
          <h2>{{item.title}}</h2>
          <p>{{item.content}}</p>
          <div>{{item.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'axis',
    data(){
    	return {
    		line:[
          {title: '题目', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', time: '2017/8/27 16:58'}
        ]
      }
    },
    created: function () {
      var that = this;
      axios.get('http://www.xiedashuaige.cn:3000/axis')
        .then(function (res) {
          that.line = res.data;
        })
        .catch(function (err) {
          console.log("err"+err);
        });
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";

  .axis{
    .title{
      font-family: "Microsoft YaHei UI";
      font-size: 2rem;
      text-align: center;
      margin: 20px 0 50px 0;
    }
    .timeline{
      width: 100%;
      height: 100%;
      position: relative;
      margin-bottom: 50px;
      &::before{
        content: ' ';
        position: absolute;
        top: 10px;
        left: 14.6%;
        height: 100%;
        width: 4px;
        background: $axis-line;
      }
      .tab{
        height: 26px;
        width: 26px;
        position: relative;
        top: 30px;
        left: calc(14.6% - 11px);
        background-color: $axis-tab;
        border-radius: 50%;
      }
      .card{
        background-color: $axis-card;
        margin: 0 20px;
        padding: 10px;
        position: relative;
        top: 0;
        left: 18%;
        width: 500px;
        max-width: calc(82% - 60px);
        border-radius: 10px;
        &::before{
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          left: -10px;
          top: 10px;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid $axis-card;
        }
        h2{
          margin: 5px;
          color: #111111;
        }
        p{
          margin: 10px;
          font-size: 1rem;
          color: #333333;
        }
        div{
          margin: 10px;
          width: 90%;
          text-align: right;
          font-size: 0.8rem;
        }
      }
    }
  }

</style>
