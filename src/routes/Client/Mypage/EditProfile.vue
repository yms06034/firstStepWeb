<template>
  <article>
    <form @:submit.prevent>
			<div class="editprofile_continer">
				<h3 class="top_title">프로필 수정</h3>
        <div class="mypage_content_area">
          <div class="user_area" v-if="imageData">
            <img
              class="user_img" 
              :src="imageData" />
            <!-- <img 
              src="https://kream-phinf.pstatic.net/MjAyMjA1MDNfMTM4/MDAxNjUxNTgxODc4ODAy.NCptk-UXm1_joPfojVGCGUgApT8uTLz6W_17ke1ILQIg.B_G33hEwk9tSrfO-ARVtRUmM7_WtGydvCM9653PShXEg.PNG/p_413e079a71ed4a0c86ef8be86149b05f.png" 
              alt="userprofileimage"
              class="user_img" /> -->
          </div>
          <div class="user_area" v-if="!imageData">
            <img
              src="https://kream.co.kr/_nuxt/img/blank_profile.4347742.png"
              class="user_img" />
          </div>
          <div class="user_profile_info">
            <div class="user_info_area">
              <p class="user_name">Balang_11</p>
            </div>
            <div class="editprofile_btn">
              <label class="edit_imgch_btn" for="custom-file">이미지 수정</label>
              <input 
                type="file" 
                accept="image/*" 
                id="custom-file" 
                class="file_upload_hidden"
                @change="previewImage" />
              <button @click="removeimg" class="edit_delete_btn">삭제</button>
            </div>
          </div>
        </div>
        <div class="user_edit_container">
          <!-- User Email Edit -->
          <div class="email_edit_content">
            <div class="email_title">
              <p>이메일 주소</p>
            </div>
            <div class="user-email_address">
              <p class="user_email">yeongjun1324@gmail.com</p>
              <button class="email_edit_btn">변경</button>
            </div>
          </div>
          <!-- User Password Edit -->
          <div class="password_edit_content">
            <div class="password_title">
              <p>비밀번호</p>
            </div>
            <div class="user-password">
              <p class="password">●●●●●●●●●●●●</p>
              <button class="password_edit_btn">변경</button>
            </div>
          </div>
          <!-- User NickName Edit -->
          <div class="nickname_edit_content">
            <div class="nickname_title">
              <p>닉네임</p>
            </div>
            <div class="user-nickname">
              <p class="nickname">Balang_11</p>
              <button class="nickname_edit_btn">변경</button>
            </div>
          </div>
        </div>
			</div>
    </form>
  </article>
</template>
<script>
export default {
  data() {
    return {
      imageData: "",
      imageMatilda: []
    }
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    removeimg() {
      this.imageData = "" 
    }
  }
}
</script>

<style lang="scss" scoped>
	@import "~/scss/main";
	@import "~/scss/reset.css";

.editprofile_continer {
  margin: 0 auto;
  max-width: 800px;
  padding: 22px;
  .top_title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
  }
  .mypage_content_area {
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: left;
    margin-bottom: 70px;
    .user_area {
      display: block;
      margin-right: 25px;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      image-rendering: pixelated;
        .user_img {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          user-select: none!important;
          object-fit: cover;
        }
      .placeholder {
        background: #F0F0F0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 18px;
        border-radius: 100%;
      }
    }
    .user_profile_info {
      display: flex;
      flex-direction: column;
      position: relative;
    .user_info_area {
      .user_name {
        font-size: 22px;
        letter-spacing: -.27px;
        font-weight: bold;
        color: #000;
        text-align: left;
        }
      }
      .editprofile_btn {
        margin-top: 10px;
        font-size: 13px;
        .file_upload_hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip:rect(0,0,0,0);
          border: 0;
        }
        .edit_imgch_btn {
          letter-spacing: -.3px;
          display: inline-flex;
          border-radius: 10px;
          border:1px solid #d3d3d3;
          height: 34px;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
        }
        .edit_delete_btn {
          margin-left: 8px;
          letter-spacing: -.06px;
          display: inline-flex;
          border-radius: 10px;
          border: 1px solid #d3d3d3;
          height: 34px;
          align-items: center;
          padding: 0 10px;
        }
      }
    }
  }
  .user_edit_container {
    max-width: 500px;
    .email_edit_content {
      text-align: left;
      .email_title {
        font-size: 15px;
        font-weight: bold;
        color: #ADADAD;
      }
      .user-email_address {
        font-size: 15px;
        padding-top: 5px;
        color: #ADADAD;
        border-bottom: 1px solid #ADADAD;
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .user_email {
          
        }
        .email_edit_btn {
          font-size: 13px;
          letter-spacing: -0.3px;
          display: inline-flex;
          border-radius: 10px;
          border: 1px solid #d3d3d3;
          height: 25px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
    .password_edit_content {
      text-align: left;
      margin-top: 40px;
      .password_title {
        font-size: 15px;
        font-weight: bold;
        color: #ADADAD;
      }
      .user-password {
        font-size: 15px;
        padding-top: 5px;
        border-bottom: 1px solid #ADADAD;
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .password {
          color: #5e5e5e;
        }
        .password_edit_btn {
          font-size: 13px;
          letter-spacing: -0.3px;
          display: inline-flex;
          border-radius: 10px;
          border: 1px solid #d3d3d3;
          height: 25px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
          color: #ADADAD;
        }
      }
    }
    .nickname_edit_content {
      text-align: left;
      margin-top: 40px;
      .nickname_title {
        font-size: 15px;
        font-weight: bold;
        color: #ADADAD;
      }
      .user-nickname {
        font-size: 15px;
        padding-top: 5px;
        border-bottom: 1px solid #ADADAD;
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .nickname {
          color: #ADADAD;
        }
        .nickname_edit_btn {
          font-size: 13px;
          letter-spacing: -0.3px;
          display: inline-flex;
          border-radius: 10px;
          border: 1px solid #d3d3d3;
          height: 25px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
          color: #ADADAD;
        }
      }
    }
  }
}
</style>