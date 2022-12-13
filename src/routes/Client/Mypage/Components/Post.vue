<template>  
  <div class="post_btn_area">
    <div class="post_trinfo">
      <a
        ref="trinfo"
        class="post_btn active_c"
        href="javascript:void(0)" 
        @click="moveButton(tvInfo)">
        <p class="title">여행정보</p>
        <p class="count">8888</p>
      </a>
    </div>
    <div class="post_trinfo">
      <a 
        ref="trreview"
        class="post_btn"
        href="javascript:void(0)" 
        @click="moveButton(tvReview)">
        <p class="title">여행실사후기</p>
        <p class="count">8888</p>
      </a>
    </div>
    <div class="post_trinfo">
      <a 
        ref="cmnty"
        class="post_btn"
        href="javascript:void(0)" 
        @click="moveButton(cmnTy)">
        <p class="title">커뮤니티</p>
        <p class="count">8888</p>
      </a>
    </div>
  </div>
  <!-- travel_info_list Area -->
  <div class="mycontent_area">
    <div v-show="travelInfo === true" class="travel_info_list">
      <p class="title_header">여행정보</p>
      <table>
        <colgroup>
          <col width="10%" />
          <col width="*%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
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
            <td class="date">{{ item.regDate }}</td>
            <td class="view">{{ item.views }}</td>
            <td class="like">{{ item.likes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- travel_review_list -->
    <div v-show="travelReview === true" class="travel_review_list">
      <p class="title_header">여행실사후기</p>
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
      <p class="title_header">커뮤니티</p>
      <table>
        <colgroup>
          <col width="10%" />
          <col width="*%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <th v-for="item in header" :key="item" class="thCls">{{ item }}</th>
        </thead>
        <tbody>
          <tr v-for="item in cmnTy" :key="item" class="trCls">
            <td class="num">{{ item.no }}</td>
            <td class="title">
              <span class="category">{{ item.category }}</span>
              <router-link :to="item.url">
                <span class="title">{{ item.title }}</span>
              </router-link>
            </td>
            <td class="date">{{ item.regDate }}</td>
            <td class="view">{{ item.views }}</td>
            <td class="like">{{ item.likes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["번호","제목","작성일","조회수","추천수"] ,
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
      let trinfo = this.$refs.trinfo;
      let trreview = this.$refs.trreview;
      let cmnty = this.$refs.cmnty;

      if (data === _this.tvInfo){
        _this.travelInfo = true
        _this.travelReview = false
        _this.community = false

        trinfo.classList.add('active_c')
        trreview.classList.remove('active_c')
        cmnty.classList.remove('active_c')

      }else if (data === _this.tvReview) {
        _this.travelInfo = false
        _this.travelReview = true
        _this.community = false

        trinfo.classList.remove('active_c')
        trreview.classList.add('active_c')
        cmnty.classList.remove('active_c')

      }else if (data === _this.cmnTy) {
        _this.travelInfo = false
        _this.travelReview = false
        _this.community = true

        trinfo.classList.remove('active_c')
        trreview.classList.remove('active_c')
        cmnty.classList.add('active_c')

      }
    }
  }
}
</script>

<style lang="scss" scope>
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
    .top_btnn {
      display: flex;
      margin-bottom: 25px;
      .btnn {
        border: 1px solid #EBEBEB;
        border-radius: 10px;
        padding: 10px 14px;
        font-size: 13px;
        &:nth-child(-n+2) {
          margin-right: 10px
        }
      }
    }
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
</style>