<template>
  <article>
    <div class="main_container">
      <div class="first-main_banner">
        <div class="banner_content">
          <swiper
            :navigation="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide>
              <div class="banner_slide">
                <div>
                  <img class="banner_img" src="https://image-cdn.trenbe.com/cms-image/slide-banner-image/20230215/ec5807a3-9362-4465-af3e-e5f2c5b9c2b1.jpg" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="banner_slide">
                <img class="banner_img" src="https://image-cdn.trenbe.com/cms-image/slide-banner-image/20230215/ec5807a3-9362-4465-af3e-e5f2c5b9c2b1.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="banner_slide">
                <img class="banner_img" src="https://image-cdn.trenbe.com/cms-image/slide-banner-image/20230215/ec5807a3-9362-4465-af3e-e5f2c5b9c2b1.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="banner_slide">
                <img class="banner_img" src="https://image-cdn.trenbe.com/cms-image/slide-banner-image/20230215/ec5807a3-9362-4465-af3e-e5f2c5b9c2b1.jpg" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- snd container -->
      <div class="snd_container">
        <div class="snd_content">
          <!-- snd Top title -->
          <div class="snd_toptitle">
            <span class="rev_title">TRAVEL REVIEW</span>
            <a 
              class="rev_subtitle" 
              href="javascripts:void(0)">전체보기</a>
          </div>
          <!-- sub content -->
          <div class="snd_items">
            <div class="snd_category">
              <div class="snd_cate_text activate">
                <button>HOT</button>
              </div>
              <div class="snd_cate_text">
                <button>NEW</button>
              </div>
              <div class="snd_cate_text">
                <button>TOP</button>
              </div>
            </div>
            <div class="snd_box">
              <div class="snd_box-content">
                <img class="snd_box-img" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" />
              </div>
              <div class="snd_box-content">
                <img class="snd_box-img" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" />
              </div>
              <div class="snd_box-content">
                <img class="snd_box-img" src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import '../../../node_modules/swiper/swiper.min.css';
import '../../../node_modules/swiper/swiper-bundle.css'
import '../../../node_modules/swiper/components/navigation/navigation.scss'
import '../../../node_modules/swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

.activate {
  color: $primary !important;
}

.main_container {
  max-width: 1280px;
  margin:0 auto;
  .first-main_banner {
    display: flex;
    width: 100%;
    .banner_content {
      width: 100%;
      .banner_slide {
        width: 100%;
        .banner_img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .snd_container {
    width: 100%;
    margin: 0 auto;
    padding-top: 100px;
    .snd_content {
      .snd_toptitle {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        .rev_title {
          font-size: 20px;
          font-weight: bold;
        }
        .rev_subtitle {
          font-size: 16px;
        }
      }
      .snd_items {
        display: flex;
        flex-direction: column;
        .snd_category {
          display: flex;
          flex-direction: row;
          margin-top: 15px;
          .snd_cate_text {
            font-size: 16px;
            font-weight: bold;
            color: #666;
            margin-right: 15px;
            &:last-child {
              margin-right: 0
            }
          }
        }
        .snd_box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 40px;
          .snd_box-content {
            width: 230px;
            height: auto;
            overflow: hidden;
            border-radius: 10px;
            margin-right: 70px;
            &:last-child {
              margin-right: 0;
            }
            .snd_box-img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}

</style>