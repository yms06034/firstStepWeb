<template>
  <article>
    <div class="mypage_container">
      <div class="mypage_content_area">
        <div class="user_area">
          <div class="user_detail">
            <div class="user_profile_img">
              <img 
                src="https://kream-phinf.pstatic.net/MjAyMjA1MDNfMTM4/MDAxNjUxNTgxODc4ODAy.NCptk-UXm1_joPfojVGCGUgApT8uTLz6W_17ke1ILQIg.B_G33hEwk9tSrfO-ARVtRUmM7_WtGydvCM9653PShXEg.PNG/p_413e079a71ed4a0c86ef8be86149b05f.png" 
                alt="userprofileimage"
                class="user_img" />
              <RouterLink
                to='/Client/Mypage/EditProfile'>
                <button type="button">
                  <img
                    class="user_correction" 
                    src="https://i.ibb.co/h26vN0J/pen.png" 
                    alt="user_correction" />
                </button>
              </RouterLink>
            </div>
            <div class="user_profile_info">
              <div class="user_info_area">
                <p class="user_name">Balang_11</p>
                <p class="user_email">s*******@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header_post_name -->
      <div class="header_post_name">
        <div class="post_name">
          <a
            ref="post"
            class="post active_t"
            href="javascript:void(0)"
            @click="openPost">게시글</a>
        </div>
        <div class="comm_name">
          <a
            ref="comm"
            class="comm"
            href="javascript:void(0)"
            @click="openCmnts">댓글</a>
        </div>
      </div>
      <!-- 게시글 -->
      <Post v-if="Post"/>
      <!-- 댓글 -->
      <Cmnts v-if="Cmnts"/>
    </div>
  </article>
</template>

<script>
import Post from './Components/Post'
import Cmnts from './Components/Cmnts'

export default {
  components : {
    Post,
    Cmnts,
  },
  data() {
    return {
      isModalOpen: false,
      showModal: false,
      modal: false,
      Post: true,
      Cmnts: false
    }
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    openPost() {
      let Post_btn = this.$refs.post
      let Cmnts_btn = this.$refs.comm

      this.Post = true;
      this.Cmnts = false;

      Post_btn.classList.add('active_t')
      Cmnts_btn.classList.remove('active_t')
    },
    openCmnts() {
      let Post_btn = this.$refs.post
      let Cmnts_btn = this.$refs.comm

      this.Post = false;
      this.Cmnts = true;

      Post_btn.classList.remove('active_t')
      Cmnts_btn.classList.add('active_t')
    }
  }
}

</script>

<style lang="scss" scope>
.active {
  font-weight: bold;

}

.mypage_container {
  margin: 0 auto;
  max-width: 1000px;
  .mypage_content_area {
    display: flex;
    padding: 22px;
    border-radius: 10px;
    align-items: center;
    justify-content: left;
    margin-bottom: 20px;
    .user_area {
      display: flex;
      align-items: center;
      .user_detail {
        margin-right: 100px;
        display: flex;
        position: relative;
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
          .user_correction {
            position: absolute;
            width: 30px;
            height: 30px;
            left: 70%;
            bottom: 0;
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
        }
      }
      .post_count {
        display: flex;
        .post_travelinfo{
          margin-right: 40px;
          .post_btn {
            line-height: 1.4;
          }
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
          .post_btn {
            line-height: 1.4;
          }
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
          .post_btn {
            line-height: 1.4;
          }
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
  .header_post_name {
    display: flex;
    justify-content: left;
    .post_name {
      padding: 16px 18px;
      &:hover {
        color: #B0B0B0;
      }
      .post {
        font-weight: bold;
        color: #B0B0B0;
      }
      .active_t {
        font-weight: bold;
        color: #000;
        &:hover {
          color: #000 !important;
        }
      }
    }
    .comm_name {
      padding: 16px 18px;
      &:hover {
        color: #B0B0B0;
      }
      .comm {
        font-weight: bold;
        color: #B0B0B0;
      }
      .active_t {
        font-weight: bold;
        color: #000;
        &:hover {
          color: #000 !important;
        }
      }
    }
  }
  .post_btn_area {
    display: flex;
    justify-content: left;
    border-top: 1px solid #EBEBEB;
    padding-top: 20px;
    margin-bottom: 45px;
    .post_trinfo {
      &:nth-child(-n+2) {
      margin-right: 20px;
      }
      .post_btn {
        line-height: 1.4;
        text-align: center;
        display: flex;
        font-weight: bold;
        color: #B0B0B0;
        border: 1px solid #B0B0B0;
        padding: 10px 16px;
        border-radius: 50px;
        &:hover {
          color: #B0B0B0 !important;
        }
        .count {
          font-size: 14px;
        }
        .title {
          margin-right: 5px;
          font-size: 14px;
        }
      }
      .active_c {
        color: #F3B66D;
        border: 1px solid #F3B66D;
        border-radius: 50px;
        &:hover {
          color: #F3B66D !important;
        }
      }
    }
  }
  .mycontent_area {
    display: flex;
    flex-direction: column;
  }
  .title_header {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    padding: 12px;
    margin-bottom: 8px;
  }
  table {
    width: 100%;
    margin: 0 auto;
    border : 1px solid #eeeeef;
    font-size: 12px;
    th {
      padding : 12px;
      border-top: 1px solid  #eeeeef;
      border-bottom: 1px solid #eeeeef;
    }
    tr{
      border-bottom: 1px solid #eeeeef;
      td {
        line-height: 50px;
      }
      .num {
        font-weight: bold;
      }
      .title {
        text-align: left;
        width: 450px;
      }
      .category {
        margin-right: 18px;
        color: #666;
      }
      .profileimg {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .travel_review_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    .tvreview_content-area {
      width: 100%;
      display: flex;
      .tv_content {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        .tv_img {
          width: 230px;
          height: 230px;
          margin-bottom: 20px;
          .tv_userimg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5%;
          }
        }
      }
    }
  }
  .community_list {
    display: flex;
    flex-direction: column;
  }
}
</style>

