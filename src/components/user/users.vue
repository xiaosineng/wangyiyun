<template>
  <div id="home">
    <div class="bf-table bf-ipt-margin">
      <input class="bf-ipt bf-ipt-border" id="mobileInfo" type="text" placeholder="请输入您的账号（手机号，邮箱）">
      <input class="bf-ipt  bf-ipt-margin bf-ipt-border" id="password" type="password" placeholder="请输入您的密码">
      <div class="bf-submit">
        <a id="submitInfo" href="#">
          <input class="bf-ipt-margin ipt1" @click='loginValue()' type="button" value="登陆">
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .bf-table {
    position: relative;
  }

  .bf-ipt {
    height: 0.96rem;
    width: 6.86rem;
    margin: 0 0.16rem;
    border: 1px solid red;
    font-size: 0.36rem;
    color: #333;
    padding: 0 0.16rem;
    box-sizing: border-box;
    background: #F8F8F8;
    border-radius: 0.04rem;
  }

  .bf-ipt:hover {
    background: #EDEDED;
  }

  .bf-ipt:hover {
    background: #EDEDED;
  }

  .bf-yanZhang:hover {
    background: #EDEDED;
  }

  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #999999;
  }

  textarea::-webkit-input-placeholder {
    color: #999999;
  }

  .body_bg {
    background-color: #f8f8f8;
  }

  .bf-ipt-border {
    border: 1px solid #EEEEEE;
    background-color: #f8f8f8;
  }

  .bf-address {
    color: #333333;
  }

  .bf-ipt-margin {
    margin-top: 0.5rem;
  }

  .bf-submit {
    padding: 0 0.16rem;
    margin-top: 1rem;
  }

  .bf-submit input {
    width: 6.86rem;
    height: 0.96rem;
    box-sizing: border-box;
    font-size: 0.36rem;
    border-radius: 0.04rem;
  }

  .bf-submit .ipt1 {
    background: #608FF7;
    color: #FFFFFF;
  }

  .bf-submit .ipt1:hover {
    background-color: #4B7CE8
  }

</style>
<script>
  import $ from '../../../util/axios.js';
  export default {
    name: 'home',
    data() {
      return {
        phone:'',
        password:'',
      }
    },
    created: function () {

    },
    methods: {
        loginValue:function() {
            var phone = document.getElementById('mobileInfo').value;
            var password = document.getElementById('password').value;
            this.phone = phone;
            this.password = password;
            this.login();
        },
        login:function(){
            var $this = this;
             $.ajax.get('/login/cellphone', {
              params: {
                phone: this.phone,
                password: this.password,
            }
          }).then(function (res) {
            if(res.code == 200){
              alert('登陆成功！')
              // console.log(res);
              var userId = res.profile.userId;
              window.localStorage.setItem('userId',userId)
              $this.$store.commit('userId', userId); //将用户的ID存入VUEX
              $this.$router.go('/home');
              
            }else{
              alert('账号或者密码错误！')
            }
          })
        }
    }
  }

</script>
