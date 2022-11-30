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
              <button>
                <img
                  class="user_correction" 
                  src="https://i.ibb.co/h26vN0J/pen.png" 
                  alt="user_correction" />
              </button>
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
      <div class="mycontent_area">
        <div class="top_btnn">
          <button
            type="button"
            class="btnn active"
            ref="tvInfoBtn"
            @click="moveButton(tvInfo)">
            여행정보
          </button>
          <button
            type="button"
            class="btnn"
            ref="tvReviewBtn"
            @click="moveButton(tvReview)">
            여행실사후기
          </button>
          <button
            type="button"
            class="btnn"
            ref="cmnTyBtn"
            @click="moveButton(cmnTy)">
            커뮤니티
          </button>
        </div>
        <!-- travel_info_list -->
        <div v-show="travelInfo === true" class="travel_info_list">
          <table>
            <thead>
              <th v-for="item in header" :key="item" class="thCls">{{ item }}</th>
            </thead>
            <tbody>
              <tr v-for="item in tvInfo" :key="item" class="trCls">
                <td class="num">{{ item.no }}</td>
                <td class="title">
                  <span class="category">{{ item.category }}</span>
                  <router-link :to="item.url">
                    <span class="title">{{ item.title }}</span>
                  </router-link>
                </td>
                <td class="name">
                  <div>
                    <!-- <img class="profileimg" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" alt="profile_img" /> -->
                    <span>{{ item.regId }}</span>
                  </div>
                </td>
                <td class="date">{{ item.regDate }}</td>
                <td class="view">{{ item.views }}</td>
                <td class="like">{{ item.likes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- travel_review_list -->
        <div v-show="travelReview === true" class="travel_review_list">
          <div class="tvreview_content-area">
            <ul class="tv_content">
              <li
                class="tv_img"
                v-for="tR in tvReview"
                :key="tR">
                <img 
                  class="tv_userimg"
                  :src="tR.img" 
                  alt="USER_IMG" />
              </li>
            </ul>
          </div>
        </div>
        <div v-show="community === true" class="community_list">

        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      header: ["번호","제목","글쓴이","작성일","조회수","추천수"] ,
      tvInfo:[
        {
          no : 10
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 9
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 8
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 7
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 6
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 5
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 4
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 3
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 2
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 1
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        }

      ],
      tvReview: [
        {
          id: 1,
          img: 'https://i.pinimg.com/236x/b4/93/92/b493926bfcdb3f2c312d5f37d627a904.jpg'
        },
        {
          id: 2,
          img: 'https://i.pinimg.com/236x/0e/db/0e/0edb0eb326bb2228313f6694f532f3d6.jpg'
        },
        {
          id: 3,
          img: 'https://i.pinimg.com/564x/7c/71/d3/7c71d3bcbc24d5ae5817328b3899ef1d.jpg'
        },
        {
          id: 4,
          img: 'https://i.pinimg.com/236x/6a/1f/7b/6a1f7b9b5d44e5dc6f1a627885e78214.jpg'
        },
        {
          id: 5,
          img: 'https://i.pinimg.com/236x/a4/fe/e4/a4fee42124348f87eb2bc7be23088315.jpg'
        },
        {
          id: 6,
          img: 'https://i.pinimg.com/236x/61/70/41/61704181409d0d430b6f8361ca269daa.jpg'
        },
        {
          id: 7,
          img: 'https://i.pinimg.com/236x/95/d0/07/95d00790cd0a347d9a63fd62c278a982.jpg'
        },
        {
          id: 8,
          img: 'https://i.pinimg.com/236x/a8/7a/65/a87a654ebd8290c07fd59b3f20d1afa9.jpg'
        },
      ],
      cmnTy:[
        {
          no : 10
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 9
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 8
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 7
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 6
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 5
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 4
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 3
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 2
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        },
        {
          no : 1
          , category : "# 게임"
          , title : "띠부띠부"
          , regId : "admin"
          , regDate : "04-22"
          , views : 100
          , likes : 120
          ,url : '/Client/Cmnty/Cmnty_Detail'
        }

      ],
      travelInfo: true,
      travelReview: false,
      community: false,
    }
  },
  methods: {
    moveButton(data) {
      const _this = this;
      const tvInfoBtn = _this.$refs.tvInfoBtn;
      const tvReviewBtn = _this.$refs.tvReviewBtn;
      const cmnTyBtn = _this.$refs.cmnTyBtn;

      if (data === _this.tvInfo){
        _this.travelInfo = true
        _this.travelReview = false
        _this.community = false

        tvInfoBtn.classList.add('active')
        tvReviewBtn.classList.remove('active')
        cmnTyBtn.classList.remove('active')

      }else if (data === _this.tvReview) {
        _this.travelInfo = false
        _this.travelReview = true
        _this.community = false
        
        tvInfoBtn.classList.remove('active')
        tvReviewBtn.classList.add('active')
        cmnTyBtn.classList.remove('active')

      }else if (data === _this.cmnTy) {
        _this.travelInfo = false
        _this.travelReview = false
        _this.community = true

        tvInfoBtn.classList.remove('active')
        tvReviewBtn.classList.remove('active')
        cmnTyBtn.classList.add('active')
      }
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
    border: 1px solid #ebebeb;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 70px;
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
  .mycontent_area {
    display: flex;
    flex-direction: column;
    .top_btnn {
      display: flex;
      .btnn {
        border: 1px solid #EBEBEB;
        border-radius: 10px 10px 0 0;
        padding: 13px 25px;
        font-size: 15px;
        &:nth-child(-n+2){
          border-right: none;
        }
        &:nth-child(-n+3){
          border-bottom: none;
        }
      }
    }
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

  }
}
</style>

