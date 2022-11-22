<template>
  <form>
    <div style="height:500px">
      <div class="find_password">
        <p class="find_password-text">
          가입하신 이메일을 입력해주세면<br />
          임시 비밀번호를 보내드립니다.
        </p>
        <div class="email_form">
          <input 
            class="email_form-input"
            placeholder="example@firststep.com"
            required
            max="1000"
            maxlength="1000"
            id="findpassword"
            type="email"
            value />
            <p class="error_msg">
              이메일을 입력해주세요.
            </p>
        </div>
        <span class="find_password_infor"> 
          만일 이메일이 오지 않는다면 스펨함을 확인해주세요
        </span>
        <button 
          type="button"
          class="find_password-btn">
          확인
        </button>
        <button 
          type="button"
          class="find_password-cancelbtn">
          취소
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../../../scss/main";

.find_password{
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 375px;
  .find_password-text {
    font-size: 15px;
    line-height: 24px;
    color: #2E2E5D;
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
</style>