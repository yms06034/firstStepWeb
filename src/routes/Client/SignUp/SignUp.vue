<template>
  <article>
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
              <label class="label required">
                이메일
              </label>
              <div class="form-control-wrap">
                <input 
                  placeholder="example@firststep.com" 
                  required 
                  max="1000"
                  maxlength="1000"
									v-model="clientEmail"
                  id="firststep_email"
                  type="email" 
                  class="form-control-wrap input-email"/>
              </div>
							<div class="email-auth-wrap">
								<button class="email-auth-btn" name="email-auth-btn" @click="email_auth()" v-show="emailAuthShow === true">이메일 인증</button>
							</div>
							<div class="auth-num-chk" v-show="authNumShow === true">
								<input class="auth-num" type="text" v-model="chkAuthNum" maxlength="6"/>
								<button class="email-chk" name="email-chk-btn" @click="email_chk_btn">확인</button>
							</div>
            </div>
          </div>
          <div class="signUp_form_container_pass">
            <div class="signUp_form_container-jc_pass">
              <label class="label required">
                비밀번호
              </label>
              <div class="form-control-wrap_pass">
                <input 
                  placeholder="비밀번호 8자리 이상" 
                  required 
                  max="1000"
                  maxlength="1000"
									v-model="firststep_pw"
                  id="firststep_pw"
                  type="email"
                  class="form-control-wrap input_pass" />
              </div>
            </div>
          </div>
					<div class="signUp_form_container_pass_chk">
            <div class="signUp_form_container-jc_pass_chk">
              <div class="form-control-wrap_pass_chk">
                <input 
                  placeholder="비밀번호 확인" 
                  required 
                  max="1000"
                  maxlength="1000"
									v-model="firststep_pw_chk"
                  id="firststep_pw_chk"
                  type="email"
                  class="form-control-wrap input_pass_chk" />
              </div>
            </div>
          </div>
					<div class="signUp_form_container_agree_wrap">
						<div class="signUp_form_container_jc_agree_chk">
								<div class="form-control-wrap_agree_chk">
                  <input type="checkbox" name="agree_chk" id="agree_chk" />
									<label for="agree_chk" class="agree_chk"></label>
                  <span class="agree_txt">[필수] 개인정보 처리방침 동의</span>
                </div>
                <div class="form-control-wrap_agree_chk">
									<button class="agree_contents_popup"> 내용 보기 </button>
								</div>
						</div>
					</div>
          <button 
            type="button"
            class="signUp-btn">
            가입하기
          </button>
					<div class="signUp_form_container_member_chk">
						<div class="signUp_form_container_jc_member_chk">
								<div class="form-control-wrap_member_chk">
									<span class="member_txt">이미 FIRSTSTEP 회원이신가요?</span>
								</div>
                <div class="form-control-wrap_member_chk">
                  <button class="go_to_login"> 로그인하러가기 </button>
                </div>
						</div>
					</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data(){
		return{
			clientEmail : ""
			, chkAuthNum : ""
			, firststep_pw  : ""
			, firststep_pw_chk : ""
			, emailAuthShow : true
			, authNumShow : false
		}
	},
	methods: {
		email_auth(){
			const _this = this;
			let clientEmail = _this.clientEmail;
			let regExp  = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
			if(clientEmail.match(regExp) !== null){
				console.log("success");
				alert("이메일이 발송되었습니다.");
				_this.emailAuthShow = false;
				_this.authNumShow = true;
				console.log("_this.emailAuthShow = " + _this.emailAuthShow);
				console.log("_this.authNumShow = " + _this.authNumShow);
			}else{
				console.log("fail");
				alert("이메일 형식에 맞지 않습니다.");
			}
		},
		email_chk_btn(){
			const _this = this;
			let chkAuthNum = _this.chkAuthNum;
			let getAuthNum = 123456;
			if(chkAuthNum.match(getAuthNum)){
				console.log("success");
				alert("인증되었습니다.");
			}else{
				console.log("fail");
				alert("인증번호가 일치하지 않습니다.");
			}
		}
	}
}
</script>

<style lang="scss" scpoe>
@import "../../../scss/main";
.btn-v2 {
  position: relative;
  display: inline-block;
  margin: 0;
  font-family: "Pretendard","Apple SD Gothic Neo","Helvetica Neue",sans-serif;
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
            .input-email {
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
					.form-control-wrap_agree_chk{
						margin-top: 20px;
						.agree_chk{
							margin-right: 10px;
						}
						.agree_contents_popup{
              color: #afafaf;
              border-bottom: 1px solid #afafaf;
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
        margin-top: 40px;
        margin-bottom: 30px;
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
				.email-auth-btn{
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
				.auth-num{
					border: 1px solid rgb(207, 213, 219);
				}
			}
    }
  }
}
</style>