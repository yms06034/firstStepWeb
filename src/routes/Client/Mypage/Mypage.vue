<template>
  <article>
    <div class="mypage_container" style="height:600px;">
      <div class="mypage_content_area">
        <div class="user_detail">
          <div class="user_profile_img">
            <img 
              src="https://kream-phinf.pstatic.net/MjAyMjA1MDNfMTM4/MDAxNjUxNTgxODc4ODAy.NCptk-UXm1_joPfojVGCGUgApT8uTLz6W_17ke1ILQIg.B_G33hEwk9tSrfO-ARVtRUmM7_WtGydvCM9653PShXEg.PNG/p_413e079a71ed4a0c86ef8be86149b05f.png" 
              alt="userprofileimage"
              class="user_img" />
          </div>
          <div class="user_profile_info">
            <div class="user_info_area">
              <p class="user_name">Balang_11</p>
              <p class="user_email">s*******@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="post_count">
          <div class="post_travelinfo">
            <p class="count">8888</p>
            <p class="title">여행정보</p>
          </div>
          <div class="post_travelreview">
            <p class="count">8888</p>
            <p class="title">여행실사후기</p>
          </div>
          <div class="post_community">
            <p class="count">8888</p>
            <p class="title">커뮤니티</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scope>
.mypage_container {
  margin: 0 auto;
  max-width: 1000px;
  .mypage_content_area {
    display: flex;
    padding: 22px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    align-items: center;
    .user_detail {
      margin-right: 100px;
      display: flex;
      .user_profile_img {
        position: relative;
        margin-right: 12px;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        .user_img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      .user_profile_info {
        display: flex;
        align-items: center;
        position: relative;
        .user_info_area {
          margin-left: 20px;
          .user_name {
            line-height: 21px;
            font-size: 22px;
            letter-spacing: -.27px;
            font-weight: bold;
            color: #000;
            text-align: left;
          }
          .user_email {
            margin-top: 10px;
            line-height: 18px;
            font-size: 14px;
            color: rgba(34, 34, 34 ,.5);
          }
        }
        &::after{
          position: absolute;
          left: 100%;
          width: 1px;
          height: 100%;
          background: #e7e7e7;
          content: "";
          margin-left: 45px;
        }
      }
    }
    .post_count {
      display: flex;
      .post_travelinfo{
        margin-right: 40px;
        .count{
          font-size: 22px;
          font-weight: bold;
        }
        .title{
          font-size: 14px;
          color: #aaaaaa;
        }
      }
      .post_travelreview{
        margin-right: 40px;
        .count{
          font-size: 22px;
          font-weight: bold;
        }
        .title{
          font-size: 14px;
          color: #aaaaaa;
        }
      }
      .post_community{
        .count{
          font-size: 22px;
          font-weight: bold;
        }
        .title{
          font-size: 14px;
          color: #aaaaaa;
        }
      }
    }
  }
}
</style>

