<template>
  <swiper
    :slides-per-view="3"
    :space-between="30"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div>Slide 1</div>
    </swiper-slide>
  </swiper>
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
      SwiperSlide,
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
  };
</script>