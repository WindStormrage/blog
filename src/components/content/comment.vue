<template>
  <div class="comment">
    <div class="title">评论</div>
    <div class="frame">
      <div class="name">
        <span>昵称</span>
        <input v-model="name" maxlength="20" type="text" />
      </div>
      <textarea v-model="content"></textarea>
      <div class="button" @click="button">发表</div>
    </div>
    <hr class="separate">
    <div class="loop" v-for="item in comment">
      <div class="card">
        <div class="msg">
          <span>{{item.name}}</span>
          <span>{{item.time}}</span>
        </div>
        <div class="content">{{item.content}}</div>
      </div>
      <hr class="split">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'comment',
    data(){
    	return {
        comment: [
          {name: '名字名字', time: '2017/8/28 1:27', content: '内容'}
          ],
        name: '',
        content: ''
      }
    },
    created: function () {
      var that = this;
      that.create(that)
    },
    methods: {
      create: function (that) {
        axios.get('http://localhost:3000/comment')
          .then(function (res) {
            that.comment = res.data;
          })
          .catch(function (err) {
            console.log("err"+err);
          });
      },
      button: function () {
        var that = this;
        if(that.name == '' || that.content == ''){
          alert('昵称和内容都要填写完哟(＾Ｕ＾)ノ~ＹＯ');
        }else{
          axios.post('http://localhost:3000/postComment', {
            name: that.name,
            content: that.content
          })
            .then(function (res) {
              console.log(res);
              that.create(that);
            })
            .catch(function (err) {
              console.log("err"+err);
            });
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @import "~assets/scss/index.scss";

  .comment{
    .title{
      font-family: "Microsoft YaHei UI";
      font-size: 2rem;
      width: 100%;
      text-align: center;
      margin: 20px 0 60px 0;
    }
    .frame{
      height: 100px;
      width: 500px;
      max-width: 80%;
      border: 2px solid $comment-all;
      margin: 50px auto;
      text-align: center;
      border-radius: 10px;
      position: relative;
      .name{
        text-align: left;
        position: absolute;
        top: -30px;
        span{
          color: #0066ff;
          font-size: 1rem;
          vertical-align: middle;
        }
        input{
          background-color: transparent;
          border: 1px solid $comment-all;
          outline: none;
          border-radius: 5px;
          height: 20px;
          width: 100px;
        }
      }
      textarea{
        margin-top: 5px;
        height: 90px;
        width: 95%;
        background-color: transparent;
        border: transparent;
        resize: none;
        outline: none;
      }
      .button{
        position: absolute;
        right: 20px;
        top: 110px;
        height: 30px;
        width: 60px;
        background-color: $comment-all;
        border-radius: 5px;
        border: transparent;
        line-height: 30px;
        font-size: 1rem;
        color: #fff;
      }
    }
    .separate{
      margin: 20px 10%;
      background-color: $comment-hr;
    }
    .card{
      margin: 30px auto;
      width: 60%;
      position: relative;
      .msg{
        position: absolute;
        top: -20px;
        width: 100%;
        span:nth-child(1){
          margin-left:10px;
        }
        span:nth-child(2){
          position: absolute;
          right: 10px;
        }
      }
      .content{
        width: 100%;
        padding: 10px;
        border: 1px solid $comment-all;
        border-radius: 10px;
        font-size: 0.9rem;
        color: #444444;
        line-height: 1.2rem;
      }
    }
  }
  .split{
    margin: 20px 10%;
    background-color: $comment-hr;
  }
  .loop:last-child .split{
    margin: 20px 0;
  }

</style>
