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
                아이디
              </label>
              <div class="form-control-wrap">
                <input 
                  placeholder="example@firststep.com" 
                  required 
                  max="1000"
                  maxlength="1000"
                  id="firststep_id"
                  type="email" 
                  class="form-control-wrap input"/>
              </div>
            </div>
          </div>
          <div class="login_form_container_pass">
            <div class="login_form_container-jc_pass">
              <label class="label">
                비밀번호
              </label>
              <div class="form-control-wrap_pass">
                <input 
                  placeholder="example@firststep.com" 
                  required 
                  max="1000"
                  maxlength="1000"
                  id="firststep_id"
                  type="email" 
                  class="form-control-wrap input_pass"/>
              </div>
            </div>
          </div>
          <button 
            type="button"
            class="login-btn">
            로그인
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scpoe>
@import "~/scss/main";
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
  }
}
</style>