<template>
  <form>
    <article>
      <div class="r_d_container">
        <div class="r_d_content">
          <div>
            <div class="r_d_social_post_detail">
              <div class="r_d_social_user_state">
                <a href="javascript:void(0)" class="user_state">
                  <div class="user_profile_img">
                    <img 
                      src="https://i.pinimg.com/236x/72/4e/f4/724ef4e3c2bbd2dda183e187593f75db.jpg" 
                      alt="user_profile_img" 
                      class="profile_img" />
                  </div>
                  <!-- a tag structural change -->
                  <div class="user_profile_name">
                    <p class="user_name">gorgeous_sh_</p>
                    <span class="user_up_time">6시간 전</span>
                  </div>
                </a>
              </div>
              <div class="r_d_social_user_img">
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :navigation="true"
                  :pagination="{ type: 'fraction' }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange">
                  <swiper-slide>
                    <div class="r_d_social_user_img">
                      <img 
                        class="user_img" 
                        src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                        alt="test_1" />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="r_d_social_user_img">
                      <img 
                        class="user_img" 
                        src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                        alt="test_1" />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="r_d_social_user_img">
                      <img 
                        class="user_img" 
                        src="https://i.pinimg.com/564x/c3/b2/fa/c3b2fa206fd2d092ce555d537441f98e.jpg" 
                        alt="test_1" />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </form>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css'
import '../../node_modules/swiper/components/navigation/navigation.scss'
import '../../node_modules/swiper/components/pagination/pagination.scss'

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
      modules: [Pagination]
    };
  }
}
</script>

<style lang="scss" scpoe>
@import "~/scss/main";

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  border: 22px solid #fff;
  border-radius: 50px;
  // opacity: .7;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  border: 22px solid #fff;
  border-radius: 50px;
  // opacity: .7;
}
.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 15px;
  color: #000;
  font-weight: bold;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  width: 50px;
  height: 30px;
  top:0 ;
  bottom: 0 !important;
  margin-left: 92%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; opacity: .3;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
}

a:hover {
  color: #000 !important;
  text-decoration: none !important;
}
div {
  margin: 0;
  padding: 0;
}
.r_d_container {
  margin-top: 55px;
  .r_d_content {
    margin: 0 auto;
    padding-bottom: 200px;
    max-width: 730px;
    .r_d_social_post_detail {
      padding-bottom: 40px;
      .r_d_social_user_state {
        padding: 12px 0;
        .user_state {
          display: flex;
          align-content: center;
          .user_profile_img {
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            .profile_img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .user_profile_name {
            margin-left: 15px;
            .user_name {
              font-size: 17px;
              font-weight: bold;
              letter-spacing: -.32px;
            }
            .user_up_time {
              float: left;
              font-size: 13px;
              color: $time;
            }
          }
        }
      }
      .r_d_social_user_img {
        .user_img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>