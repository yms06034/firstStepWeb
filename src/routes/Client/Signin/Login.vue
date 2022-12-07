<template>
  <article>
    <div class="firststep_form_login_area">
      <div class="login_form_area">
        <div class="default_login_top_text">
          <div class="text-center">
            <strong>누구나 간편하게 여행정보</strong>
          </div>
        </div>
        <div class="login_form_top_container">
          <div class="login_form_container">
            <div class="login_form_container-jc">
              <label class="label">
                이메일
              </label>
              <div class="form-control-wrap">
                <input 
                  class="form-control-wrap input"
                  type="text" 
                  v-model="email"
                  placeholder="example@firststep.com"
                  required />
                <span class="error_msg" v-if="msg.email">{{msg.email}}</span>
              </div>
            </div>
          </div>
          <div class="login_form_container_pass">
            <div class="login_form_container-jc_pass">
              <label class="label">
                비밀번호
              </label>
              <div class="form-control-password">
                <div class="form-control-wrap_pass">
                  <input 
                    :type="filedType"
                    class="form-control-wrap input_pass"
                    v-model="password"
                    placeholder="비밀번호 8자리 이상 입력해주세요"
                    required />
                  <span class="error_msg" v-if="msg.password">{{msg.password}}</span>
                </div>
                <div class="password_control">
                  <button class="password_control_btn" @click="toggleShow">
                    <span ref="show_hide_icon" class="show_hide_icon">
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button 
            type="button"
            class="login-btn">
            로그인
          </button>
        </div>
        <div class="signup_form">
          <a class="signup_href" href="javascript:void(0)">회원가입</a>
          <div class="sigup_center"></div>
          <RouterLink
            to="/Client/Signin/Findpassword"
            class="signup_href">
            비밀번호 찾기
          </RouterLink>
        </div>
        <div class="sociallogin_button_form">
          <button type="button" class="btn-kakaologin">
            <div class="socoal_image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_964_21270___undefinedundefinedundefinedundefinedundefinedaaundefined)">
                  <path d="M12.0004 2C6.47742 2 2.00195 5.8526 2.00195 10.6052C2.00195 13.6988 3.89907 16.4095 6.74577 17.9264C6.53855 18.7767 5.98838 21.0064 5.87855 21.4829C5.74334 22.075 6.07801 22.0671 6.29714 21.9075C6.46914 21.7829 9.03765 19.8825 10.1458 19.0621C10.7603 19.1612 11.3807 19.2109 12.002 19.2109C17.5249 19.2109 22.0004 15.3572 22.0004 10.6052C22.0004 5.85316 17.5234 2 12.002 2" fill="#391B1B"></path>
                </g>
                <defs>
                  <clipPath id="clip0_964_21270___undefinedundefinedundefinedundefinedundefinedaaundefined">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <!-- <img src="https://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_kakao.png" alt="카카오 로그인" /> -->
            </div>
            <p class="kakaologin_text">카카오로 시작하기</p>
          </button>
          <button type="button" class="btn-naverlogin">
            <div class="socoal_image">
              <img src="	https://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_naver.png" alt="네이버 로그인" />
            </div>
            <p class="kakaologin_text">네이버로 시작하기</p>
          </button>
          <button type="button" class="btn-naverlogin">
            <div class="socoal_image">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fill-rule="nonzero">
                  <path fill="#FBBD05" d="M6.99 13.878l-.627 2.339-2.29.048A8.96 8.96 0 0 1 3 12c0-1.492.363-2.9 1.006-4.139l2.04.374.893 2.026A5.35 5.35 0 0 0 6.649 12c.001.66.12 1.294.34 1.878z"></path>
                  <path fill="#4385F4" d="M20.49 10.717c.187.514.305.7.349 1.447.043.747.064.948-.09 1.715a8.782 8.782 0 0 1-3.115 5.14l-2.568-.132-.363-2.269a5.364 5.364 0 0 0 2.307-2.739h-4.812v-3.162h4.883l3.378.029.03-.029z"></path>
                  <path fill="#34A853" d="M17.634 19.018A8.962 8.962 0 0 1 12 21a8.999 8.999 0 0 1-7.927-4.735l2.916-2.387a5.351 5.351 0 0 0 7.713 2.74l2.932 2.4z"></path>
                  <path fill="#EA4336" d="M17.655 5.231l-2.596 2.443C14.424 7.04 13.039 6.65 12 6.65a5.353 5.353 0 0 0-5.061 3.611l-2.932-2.4C5.504 4.973 8.269 3 12 3c2.184 0 4.27.724 5.655 2.231z"></path>
                </g>
              </svg>
              <!-- <img src="	https://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_naver.png" alt="네이버 로그인" /> -->
            </div>
            <p class="kakaologin_text">구글로 시작하기</p>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      password: '',
      email: '',
      msg: [],
      showPassword: false,
      filedType: 'password'
    }
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  watch: {
    email(value){
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods:{
    validateEmail(value){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,30})+$/.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = '이메일 주소를 정확히 입력해주세요';
  } 
    },
    validatePassword(value){
      if (value.length<8) {
        this.msg['password'] = '비밀번호 8자리 이상 입력해주세요';
      } else {
        this.msg['password'] = ''
      }
    },
    toggleShow(){
      let chBtn = this.$refs.show_hide_icon;
      if(this.filedType === 'password'){
        this.filedType = 'text';
        chBtn.classList.add('active');
      }else {
        this.filedType = 'password';
        chBtn.classList.remove('active');
      }
    }
  }
};
</script>

<style lang="scss" scpoe>
@import "../../../scss/main.scss";

.btn-v2 {
  position: relative;
  display: inline-block;
  margin: 0;
  font-family: "Pretendard","Apple SD Gothic Neo","Helvetica Neue",sans-serif;
}

.firststep_form_login_area {
  display: flex;
  min-height: 820px;
  align-items: flex-start;
  -webkit-box-align: center;
  justify-content: center;
  .login_form_area {
    padding: 0 20px;
    width: 100%;
    max-width: 375px;
    .default_login_top_text {
      font-size: 28px;
      line-height: 36px;
      color: rgb(33, 39, 42);
      margin-bottom: 32px;
      .text-center {
        text-align: center !important;
      }
    }
    .login_form_top_container {
      display: flex;
      flex-direction: column;
      width: 100%;
      .login_form_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        // padding: 0 20px;
        .login_form_container-jc {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 100%;
          .label {
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 8px;
            font-weight: normal;
            padding: 0px;
            text-align: left;
            color: rgb(33, 39, 42);
          }
          .form-control-wrap {
            display: flex;
            flex-direction: column;
            width: 100%;
            .input {
              height: 44px;
              min-height: 44px;
              width: 315px;
              border: 1px solid rgb(207, 213, 219);
              text-align: left;
              padding-left: 15px;
              padding-bottom: 5px;
              &:focus {
                border: 1px solid $primary;
              }
              &::placeholder {
                font-size: 13px;
                color: rgb(208, 208, 208);
              }
            }
          }
          .error_msg {
            font-size: 13px;
            color: red;
            text-align: left;
            margin-top: 5px;
          }
        }
      }
      .login_form_container_pass {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        .login_form_container-jc_pass {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 100%;
          .label {
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 8px;
            font-weight: normal;
            padding: 0px;
            text-align: left;
            color: rgb(33, 39, 42);
          }
          .form-control-password {
            display: flex;
            justify-content: flex-start;
            .form-control-wrap_pass {
              display: flex;
              flex-direction: column;
              width: 100%;
              .input_pass {
                height: 44px;
                min-height: 44px;
                width: 315px;
                border: 1px solid rgb(207, 213, 219);
                text-align: left;
                padding-left: 15px;
                padding-bottom: 5px;
                &:focus {
                  border: 1px solid $primary;
                }
                &::placeholder {
                  font-size: 13px;
                  color: rgb(208, 208, 208);
                }
              }
            }
            .password_control {
              box-sizing: border-box;
              clear: both;
              font-size: 1rem;
              position: relative;
              text-align: inherit;
              .password_control_btn {
                .show_hide_icon {
                  display: block;
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 50px;
                  height: 50px;
                  background: url(https://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd.png) no-repeat center;
                  cursor: pointer;
                  &::after{
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1px;
                    height: 24px;
                    margin-top: -12px;
                    background: #e7e7e7;
                    content: '';
                  }
                }
                .active {
                    background-image: url(https://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd_active.png);
                }
              }
            }
          }
          .error_msg {
            font-size: 13px;
            color: red;
            text-align: left;
            margin-top: 5px;
          }
        }
      }
      .login-btn {
        width: 100%;
        height: 46px;
        background-color: $primary;
        color: rgb(255, 255, 255);
        font-size: 14px;
        line-height: 15px;
        font-weight: bold;
        margin-top: 40px;
        cursor: pointer;
      }
    }
    .signup_form {
      display: flex;
      justify-content: center;
      margin: 30px 0 0;
      align-items: center;
      margin-bottom: 40px;
      .signup_href {
        color: #4c545b;
        font-size: 13px;
        line-height: 20px;
        font-weight: normal;
        text-decoration: none;
        &:hover{
          color: #4c545b !important;
        }
      }
      .sigup_center {
        background-color: #a0a0a0;
        width: 1px;
        height: 12px;
        margin: 0 20px;
      }
    }
    .sociallogin_button_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 375px;
      .btn-kakaologin {
        background-color: rgb(250, 227, 0);
        border: 1px solid rgb(250, 227, 0);
        align-items: center;
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .socoal_image {
          width: 24px;
          // height: 24px;
          margin-right: 8px;
        }
        .kakaologin_text {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          line-height: 1.2;
        }
      }
      .btn-naverlogin {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        justify-content: center;
        border: 1px solid rgb(221, 221 ,221);
        outline: none;
        margin-top: 15px;
        .socoal_image {
          width: 24px;
          // height: 24px;
          margin-right: 8px;
        }
        .kakaologin_text {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          line-height: 1.2;
        }
      }
    }
  }
}
</style>