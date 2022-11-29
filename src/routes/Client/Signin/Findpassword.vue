<template>
  <form>
    <div style="height:700px">
      <div class="find_password" ref="find_ps_btn">
        <div class="find_ps_send_img">
          <img 
            class="find_ps_img"
            src="https://i.ibb.co/xm3C044/2-2-1.png" 
            alt="firststep_logo" />
        </div>
        <p class="find_password-text">
          가입하신 이메일을 입력해주세면<br />
          임시 비밀번호를 보내드립니다.
        </p>
        <div class="email_form">
          <input 
            class="email_form-input"
            v-model="email"
            type="text"
            placeholder="example@firststep.com"
            max="1000"
            maxlength="1000"
            id="findpassword"
            required />
          <span class="error_msg" v-if="msg.email">{{msg.email}}</span>
        </div>
        <span class="find_password_infor"> 
          만일 이메일이 오지 않는다면 스펨함을 확인해주세요
        </span>
        <button 
          type="button"
          class="find_password-btn"
          @click="email_auth(value)">
          확인
        </button>
        <RouterLink
          to="/Client/Signin/Login">
          <button 
            type="button"
            class="find_password-cancelbtn">
            취소
          </button>
        </RouterLink>
      </div>
      <div class="find_password_display display-none" ref="send_ps_btn">
        <div class="find_ps_send">
          <img 
            class="find_ps_img"
            src="https://i.ibb.co/xm3C044/2-2-1.png" 
            alt="firststep_logo" />
          <p class="send_ps-mail">
            {{email}}로 임시 비밀번호를 보내드렸습니다.
            로그인 후 비밀번호를 수정해주시기 바랍니다.
          </p>
        </div>
        <div class="ps_resend">
          <p class="ps_resend-text">비밀번호를 받지 못하셨나요?</p>
          <button 
            @click="repassword_resend" 
            class="ps_resend-btn">
            재전송
          </button>
        </div>
        <span class="find_password_infor"> 
          만일 이메일이 오지 않는다면 스펨함을 확인해주세요
        </span>
        <RouterLink
          to="/Client/Signin/Login">
          <button 
            type="button"
            class="find_password-btn">
            로그인 하러가기
          </button>
        </RouterLink>
        <!-- <span class="member_txt">
        </span> -->
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Findpassword',
  data() {
    return {
      email: '',
      msg: [],
      findPsShow: true,
      findPsSendShow: false,
    }
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods: {
    validateEmail(value){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
      this.msg['email'] = '';
    } else{
      this.msg['email'] = '이메일 주소를 정확히 입력해주세요';
    }
    },
    email_auth() {
      let passBtn = this.$refs.find_ps_btn;
      let sendBtn = this.$refs.send_ps_btn;
      let fintPsEmail = this.email
      let regExp  = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
      if (fintPsEmail.match(regExp) !== null)
      {
        console.log('성공')
        passBtn.classList.add('display-none')
        sendBtn.classList.remove('display-none')
      } else {
        console.log('실패')
        sendBtn.classList.add('display-none')
        passBtn.classList.remove('display-none')
      }
    },
    repassword_resend() {
      // modal로 변경 예정
      alert('임시 비밀번호가 재발급 되었습니다.\n이메일을 확인해주세요.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/main";
.display-none {
  display: none !important;
}

.find_password{
  display: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 375px;
  .find_ps_send_img {
    display: flex;
    align-items: center;
    justify-content: center;
    .find_ps_img {
      display: block;
      width: 130px;
      height: 130px;
    }

  }
  .find_password-text {
    font-size: 15px;
    line-height: 24px;
    color: #2d2d2d;
    text-align: center;
    margin-top: 40px;
    font-weight: bold;
  }
  .email_form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    .email_form-input {
      height: 44px;
      width: 315px;
      border:1px solid rgb(207, 213, 219);
      border-radius: 5px;
      padding-left: 20px;
      padding-bottom: 3px;
      &::placeholder{
        color:rgb(208, 208, 208);
        font-size: 14px;
      }
    }
    .error_msg {
      font-size: 13px;
      line-height: 15px;
      color: red;
      margin-top: 10px;
    }
  }
  .find_password_infor {
    color: rgb(153, 153, 153);
    font-size: 13px;
    line-height: 20.8px;
    position: relative;
    margin-bottom: 0px;
    white-space: normal;
    word-break: normal;
    padding-left: 10px;
    margin-top: 20px;
    &::before {
      content: "";
      position: absolute;
      top: 7px;
      left: 0px;
      width: 2px;
      height: 2px;
      background-color: rgb(119, 119, 119);
      border-radius: 50%;
    }
  }
  .find_password-btn {
    width: 100%;
    height: 46px;
    background-color: $primary;
    color: white;
    font-size: 15px;
    line-height: 15.6px;
    font-weight: bold;
    border-radius: 4px;
    margin: 40px auto 0px;
    text-align: center;
  }
  .find_password-cancelbtn {
    width: 100%;
    height: 46px;
    border: 1px solid $primary;
    color: $primary;
    font-size: 15px;
    line-height: 15.6px;
    font-weight: bold;
    border-radius: 4px;
    margin: 15px auto 0px;
    text-align: center;
  }
}

.find_password_display {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 375px;
  .find_ps_send {
    display: flex;
    flex-direction: column;
    align-items: center;
    .find_ps_img {
      display: block;
      width: 130px;
      height: 130px;
    }
    .send_ps-mail {
      font-size: 15px;
      margin-top: 40px;
      text-align: left;
      font-weight: bold;
    }
  }
  .find_password_infor {
    color: rgb(153, 153, 153);
    font-size: 13px;
    line-height: 20.8px;
    position: relative;
    margin-bottom: 0px;
    white-space: normal;
    word-break: normal;
    padding-left: 10px;
    margin-top: 10px;
    &::before {
      content: "";
      position: absolute;
      top: 7px;
      left: 0px;
      width: 2px;
      height: 2px;
      background-color: rgb(119, 119, 119);
      border-radius: 50%;
    }
  }
  .ps_resend{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .ps_resend-text {
      font-size: 14px;
    }
    .ps_resend-btn {
      font-size: 14px;
      color: #F77A55;
      font-weight: bold;
      padding-right: 10px;
    }
  }
  .find_password-btn {
    width: 100%;
    height: 46px;
    background-color: $primary;
    color: white;
    font-size: 15px;
    line-height: 15.6px;
    font-weight: bold;
    border-radius: 4px;
    margin: 40px auto 0px;
    text-align: center;
  }
  .member_txt {
    font-size: 14px;
    color: #afafaf;
    margin-top: 20px;
  }
}
</style>