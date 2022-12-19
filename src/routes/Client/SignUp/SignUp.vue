<template>
  <article>
    <form
      id="signUpForm"
      novalidate
      @submit.prevent="signUpForm"
      method="post">
      <div class="firststep_form_signUp_area">
        <div class="signUp_form_area">
          <div class="default_signUp_top_text">
            <div class="text-center">
              <strong>누구나 간편하게 여행정보</strong>
            </div>
          </div>
          <div class="signUp_form_top_container">
            <div class="signUp_form_container">
              <div class="signUp_form_container-jc">
                <label class="label required"> 이메일 </label>
                <div class="form-control-wrap">
                  <input
                    form="signUpForm"
                    placeholder="example@firststep.com"
                    max="50"
                    maxlength="50"
                    v-model="email"
                    required
                    type="email"
                    name="email"
                    ref="email"
                    class="email_form-input" />
                  <span
                    ref="error_msg"
                    class="error_msg"
                    v-if="msg.email">{{
                      msg.email
                    }}</span>
                </div>
                <div class="email-auth-wrap">
                  <button
                    type="button"
                    class="email-auth-btn"
                    name="email-auth-btn"
                    @click="email_auth()"
                    v-show="emailAuthShow === true">
                    이메일 인증
                  </button>
                </div>
                <div
                  class="auth-num-chk"
                  v-show="authNumShow === true">
                  <input
                    form="signUpForm"
                    class="auth-num"
                    type="text"
                    required
                    v-model="chkAuthNum"
                    maxlength="6" 
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                  <button
                    type="button"
                    class="email-chk"
                    name="email-chk-btn"
                    @click="email_chk_btn">
                    확인
                  </button>
                  <button
                    type="button"
                    class="email-auth-resend"
                    name="email-auth-resend-btn"
                    @click="email-auth-resend-btn">
                    재전송
                  </button>
                </div>
              </div>
            </div>

            <div class="signUp_form_container_pass">
              <div class="signUp_form_container-jc_pass">
                <label class="label required"> 비밀번호 </label>
                <div class="form-control-password">
                  <div class="form-control-wrap_pass">
                    <input
                      form="signUpForm"
                      :type="filedType"
                      required
                      placeholder="비밀번호 8자리 이상"
                      v-model="password"
                      class="form-control-wrap input_pass" />
                    <span
                      class="error_msg"
                      v-if="msg.password">{{
                        msg.password
                      }}</span>
                  </div>
                  <div class="password_control">
                    <button
                      class="password_control_btn"
                      type="button"
                      @click="toggleShow">
                      <span
                        ref="show_hide_icon"
                        class="show_hide_icon"> </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="signUp_form_container_pass_chk">
              <div class="signUp_form_container-jc_pass_chk">
                <label class="label required"> 비밀번호 확인 </label>
                <div class="form-control-password-chk">
                  <div class="form-control-wrap_pass_chk">
                    <input
                      form="signUpForm"
                      placeholder="비밀번호 확인"
                      v-model="password_chk"
                      required
                      :type="filedTypeChk"
                      id="password_chk"
                      class="form-control-wrap input_pass_chk" />
                    <span
                      class="error_msg_chk"
                      v-if="msg.password_chk">{{
                        msg.password_chk
                      }}</span>
                  </div>
                  <div class="password_control_chk">
                    <button
                      type="button"
                      class="password_control_btn_chk"
                      @click="toggleShowChk">
                      <span
                        ref="show_hide_icon_chk"
                        class="show_hide_icon_chk">
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="signUp_form_container_nickname">
              <div class="signUp_form_container-jc_nickname">
                <label class="label required"> 닉네임 </label>
                <div class="form-control-nickname">
                  <div class="form-control-wrap_nickname">
                    <input
                      form="signUpForm"
                      placeholder="닉네임"
                      v-model="nickname"
                      required
                      type="text"
                      id="nickname"
                      class="form-control-wrap input_nickname" />
                    <span
                      class="error_msg_chk"
                      v-if="msg.nickname">{{
                        msg.nickname
                      }}</span>
                  </div>
                  <div class="nickname-chk-wrap">
                    <button
                      type="button"
                      class="nickname-chk-btn"
                      name="nickname-chk-btn"
                      @click="nicknameChk()">
                      중복 확인
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="signUp_form_container_agree_wrap">
              <div class="signUp_form_container_jc_agree_chk">
                <div class="form-control-wrap_agree_chk">
                  <input
                    form="signUpForm"
                    type="checkbox"
                    name="agree_chk"
                    id="agree_chk"
                    ref="agreeChk"
                    v-model="agreeChk"
                    true-value="Y"
                    false-value="N" />
                  <label
                    for="agree_chk"
                    class="agree_chk"></label>
                  <span class="agree_txt">[필수] 이용약관 동의</span>
                </div>
                <div class="form-control-wrap_agree_chk">
                  <!-- <button class="agree_contents_popup" @click="handle_toggle"> <Model /> </button> -->
                  <a
                    class="agree_contents_popup"
                    id="show-modal"
                    @click="openModal">내용보기
                  </a>
                  <Modal
                    @close="closeModal"
                    v-if="modal">
                    <!-- sampleModel.vue에서 <slot /> 주석 해지 후 사용 -->
                    <!-- <p>Vue.js Modal Window!</p> -->
                  </Modal>
                </div>
              </div>
            </div>
            <!-- MODAL -->
            <button
              type="button"
              class="signUp-btn"
              id="toRegister"
              @click="registerUser">
              가입하기
            </button>

            <div class="signUp_form_container_member_chk">
              <div class="signUp_form_container_jc_member_chk">
                <div class="form-control-wrap_member_chk">
                  <span class="member_txt">이미 FIRSTSTEP 회원이신가요?</span>
                </div>
                <div class="form-control-wrap_member_chk">
                  <RouterLink to="/Client/Signin/Login">
                    <button
                      type="submit"
                      class="go_to_login">
                      로그인하러가기
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </article>
</template>

<script>
import Modal from "../../../components/Modal/privacyPoliModal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      email: "",
      msg: [],
      chkAuthNum: "",
      password: "",
      password_chk: "",
      emailAuthShow: true,
      authNumShow: false,
      authEmail: false,
      showPassword: false,
      showPasswordChk: false,
      chkPassword: false,
      filedType: "password",
      filedTypeChk: "password",
      isModalOpen: false,
      showModal: false,
      modal: false,
			nickname : "",
			nicknameChk: true,
			agreeChk : false
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabelChk() {
      return this.showPasswordChk ? "Hide" : "Show";
    },
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
		chkAuthNum(value){
			this.chkAuthNum = value;
			this.validateChkAuthNum(value);
		},
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
    password_chk(value) {
      this.password_chk = value;
      this.validatePasswordChk(value);
    },
    nicknameChk(value){
			this.nickname = value;
			this.validateNickName(value);
		},
    signUpForm(value) {
      this.email = value;
      this.validateEmail(value);
      this.password_chk = value;
      this.validatePasswordChk(value);
    },
  },
  methods: {
    email_auth() {
      const _this = this;
      let clientEmail = _this.email;
      let regExp =
        /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
      if (clientEmail.match(regExp) !== null) {
        console.log("success");
        _this.emailAuthShow = false;
        _this.authNumShow = true;
        console.log("_this.emailAuthShow = " + _this.emailAuthShow);
        console.log("_this.authNumShow = " + _this.authNumShow);
      } else {
        console.log("fail");
      }
    },
    email_chk_btn() {
      const _this = this;
      const msgCode = _this.$refs.error_msg;
      console.log("msgCode = " + msgCode);
      let chkAuthNum = _this.chkAuthNum;
      let getAuthNum = 123456;
      if (chkAuthNum.match(getAuthNum)) {
        console.log("success");
        _this.authEmail = true;
        _this.authNumShow = false;

        _this.msg["email"] = "이메일 인증이 완료되었습니다";

        msgCode.classList.add("success_msg");
      } else {
        console.log("fail");
        alert("인증번호가 일치하지 않습니다.");
      }
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "이메일 주소를 정확히 입력해주세요";
      }
    },
    validatePassword(value) {
      // let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg["password"] = "비밀번호 8자리 이상 입력해주세요";
      } else {
        this.msg["password"] = "";
      }
    },
    validatePasswordChk(value) {
      // let difference = 8 - value.length;
      let chkPw = this.password;
      console.log("chkPw = " + chkPw);

      console.log("value = " + value);
      if (chkPw.match(value)) {
        this.msg["password_chk"] = "";
        this.chkPassword = true;
      } else {
        this.msg["password_chk"] = "비밀번호가 일치하지 않습니다.";
      }
    },
    toggleShow() {
      let chBtn = this.$refs.show_hide_icon;
      if (this.filedType === "password") {
        this.filedType = "text";
        chBtn.classList.add("active");
      } else {
        this.filedType = "password";
        chBtn.classList.remove("active");
      }
    },
    toggleShowChk() {
      let chBtn = this.$refs.show_hide_icon_chk;
      if (this.filedTypeChk === "password") {
        this.filedTypeChk = "text";
        chBtn.classList.add("active");
      } else {
        this.filedTypeChk = "password";
        chBtn.classList.remove("active");
      }
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    validateNickName(value){
      if (value.length === null) {
        this.msg["nickname"] = "닉네임을 입력해주세요";
      } else {
        this.msg["nickname"] = "";
      }
		},
    async registerUser() {
			
				if(this.chkPassword && this.authEmail) {
					if(this.$refs.agreeChk.checked){
							this.$router.push("/");
					}else{
						alert("필수값");
					}
				}
				else {
					console.log("함수 작도 안함")
				}
    },
  },
};
</script>

<style lang="scss" scpoe>
@import "../../../scss/main";

.btn-v2 {
  position: relative;
  display: inline-block;
  margin: 0;
  font-family: "Pretendard", "Apple SD Gothic Neo", "Helvetica Neue", sans-serif;
}

.firststep_form_signUp_area {
  display: flex;
  min-height: 820px;
  align-items: flex-start;
  -webkit-box-align: center;
  justify-content: center;

  .signUp_form_area {
    padding: 0 20px;
    width: 100%;
    max-width: 375px;

    .default_signUp_top_text {
      font-size: 28px;
      line-height: 36px;
      color: rgb(33, 39, 42);
      margin-bottom: 32px;

      .text-center {
        text-align: center !important;
      }
    }

    .signUp_form_top_container {
      display: flex;
      flex-direction: column;
      width: 100%;

      .signUp_form_container {
        display: flex;
        flex-direction: column;
        width: 100%;

        // padding: 0 20px;
        .signUp_form_container-jc {
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

            .email_form-input {
              height: 44px;
              min-height: 44px;
              width: 315px;
              border: 1px solid rgb(207, 213, 219);
              text-align: left;
              padding-left: 15px;
              padding-bottom: 5px;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;

              &:focus {
                border: 1px solid $primary;
              }

              &::placeholder {
                font-size: 13px;
                color: rgb(208, 208, 208);
              }
            }

            .success_msg {
              font-size: 13px;
              line-height: 15px;
              color: #18a70e !important;
							text-align: left;
              margin-top: 10px;
            }

            .error_msg {
              font-size: 13px;
              line-height: 15px;
              color: red;
              margin-top: 10px;
							text-align: left;
            }
          }
        }
      }

      .signUp_form_container_pass {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;

        .signUp_form_container-jc_pass {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 100%;

          .label {
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 15px;
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
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
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
                  background: url(http://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd.png)
                    no-repeat center;
                  cursor: pointer;

                  &::after {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1px;
                    height: 24px;
                    margin-top: -12px;
                    background: #e7e7e7;
                    content: "";
                  }
                }

                .active {
                  background-image: url(http://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd_active.png);
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

      .signUp_form_container_pass_chk {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;

        .signUp_form_container-jc_pass_chk {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 100%;

          .label {
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 15px;
            font-weight: normal;
            padding: 0px;
            text-align: left;
            color: rgb(33, 39, 42);
          }

          .form-control-password-chk {
            display: flex;
            justify-content: flex-start;

            .form-control-wrap_pass_chk {
              display: flex;
              flex-direction: column;
              width: 100%;

              .input_pass_chk {
                height: 44px;
                min-height: 44px;
                width: 315px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
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

            .password_control_chk {
              box-sizing: border-box;
              clear: both;
              font-size: 1rem;
              position: relative;
              text-align: inherit;

              .password_control_btn_chk {
                .show_hide_icon_chk {
                  display: block;
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 50px;
                  height: 50px;
                  background: url(http://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd.png)
                    no-repeat center;
                  cursor: pointer;

                  &::after {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1px;
                    height: 24px;
                    margin-top: -12px;
                    background: #e7e7e7;
                    content: "";
                  }
                }

                .active {
                  background-image: url(http://www.itthere.co.kr/_skin/basic_Live_220719/img/member/icon_pwd_active.png);
                }
              }
            }
          }

          .error_msg_chk {
            font-size: 13px;
            color: red;
            text-align: left;
            margin-top: 5px;
          }
        }
      }

			.signUp_form_container_nickname {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;

        .signUp_form_container-jc_nickname {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 100%;

          .label {
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 15px;
            font-weight: normal;
            padding: 0px;
            text-align: left;
            color: rgb(33, 39, 42);
          }

          .form-control-nickname {
            display: flex;
            flex-direction: column;
            width: 100%;

              .input_nickname {
                height: 44px;
                min-height: 44px;
                width: 315px;
                border: 1px solid rgb(207, 213, 219);
                text-align: left;
                padding-left: 15px;
                padding-bottom: 5px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;

                &:focus {
                  border: 1px solid $primary;
                }

                &::placeholder {
                  font-size: 13px;
                  color: rgb(208, 208, 208);
                }
              }
          }
          .error_msg_chk {
            font-size: 13px;
            color: red;
            text-align: left;
            margin-top: 5px;
          }
        }
      }

      .nickname-chk-wrap {
        margin-top: 10px;

        .nickname-chk-btn {
          width: 100px;
          height: 15px;
          float: right;
          padding: 5px 5px 8px 5px;
          font-size: 13px;
          border-radius: 5px;
          margin-right: 10px;
          border: 1px solid rgb(207, 213, 219);
        }
      }

      .signUp_form_container_agree_wrap {
        margin-top: 40px;
        width: 100%;
        display: flex;

        .signUp_form_container_jc_agree_chk {
          display: flex;
          border-top: 1px solid rgb(207, 213, 219);
          font-size: 14px;
          width: 100%;
          justify-content: space-between;

          .form-control-wrap_agree_chk {
            margin-top: 20px;

            .agree_chk {
              margin-right: 10px;
            }

            .agree_contents_popup {
              color: #afafaf;
              border-bottom: 1px solid #afafaf;
              cursor: pointer;
              &:hover {
                color: #afafaf !important;
              }
            }
          }
        }
      }

      .signUp-btn {
        width: 100%;
        height: 46px;
        background-color: $primary;
        color: rgb(255, 255, 255);
        font-size: 14px;
        line-height: 15px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 15px;
        cursor: pointer;
      }

      .signUp_form_container_member_chk {
        width: 100%;

        .signUp_form_container_jc_member_chk {
          display: flex;
          justify-content: space-between;

          .form-control-wrap_member_chk {
            font-size: 14px;

            .member_txt {
              color: #afafaf;
            }

            .go_to_login {
              font-weight: bold;
              color: #494747;
            }
          }
        }
      }

      .email-auth-wrap {
        margin-top: 10px;

        .email-auth-btn {
          width: 100px;
          height: 15px;
          float: right;
          padding: 5px 5px 8px 5px;
          font-size: 13px;
          border-radius: 5px;
          margin-right: 10px;
          border: 1px solid rgb(207, 213, 219);
        }
      }

      .auth-num-chk {
        margin-top: 10px;
				margin-right: auto;
        .auth-num {
					padding: 5px 5px 8px 5px;
					width: 200px;
          border-radius: 5px;
          margin-right: 10px;
          border: 1px solid rgb(207, 213, 219);
          border: 1px solid rgb(207, 213, 219);
					height: 15px;
        }
				.email-chk{
					width: 35px;
          height: 15px;
          padding: 5px 5px 8px 5px;
          font-size: 13px;
          border-radius: 5px;
          margin-right: 5px;
          border: 1px solid rgb(207, 213, 219);
				}
				.email-auth-resend{
					width: 45px;
          height: 15px;
          float: right;
          padding: 5px 5px 8px 5px;
          font-size: 13px;
          border-radius: 5px;
          border: 1px solid rgb(207, 213, 219);
				}
      }
    }
  }
}
</style>