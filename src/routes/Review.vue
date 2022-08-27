<template>
  <form @:submit.prevent>
    <article>
      <h1 class="top_title">TRAVEL REVIEW</h1>
      <!-- Top Btn -->
      <!-- <div id="top-navbar--wrap">
        <div class="nav nav-pills center">
          <div 
            v-for="nav in navigations"
            :key="nav.name"
            class="re-nav-item">
            <RouterLink 
              :to="nav.href"
              active-class="a_active"
              class="nav-link re_btn">
              {{ nav.name }}
            </RouterLink>
          </div>
        </div>
      </div> -->
      <div class='top_btn'>
				<button type="button" class="re_btn"># All</button>
				<button type="button" class="re_btn"># 제주도</button>
				<button type="button" class="re_btn"># 국내여행</button>
				<button type="button" class="re_btn"># 해외여행</button>
				<button type="button" class="re_btn"># 일본</button>
				<button type="button" class="re_btn"># 데이트코스</button>
				<button type="button" class="re_btn"># 애견패션</button>
				<button type="button" class="re_btn"># 카페</button>
				<button type="button" class="re_btn"># 맛집탐방</button>
			</div>
    </article>
  </form>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: '# All',
          href: '#div1'
        },
        {
          name: '# 제주도',
          href: '#div2'
        },
        {
          name: '# 국내여행',
          href: '#div3'
        },
        {
          name: '# 해외여행',
          href: '#'
        },
        {
          name: '# 일본',
          href: '#'
        },
        {
          name: '# 데이트코스',
          href: '#'
        },
        {
          name: '# 애견팬션',
          href: '#'
        },
        {
          name: '# 카페',
          href: '#'
        },
        {
          name: '# 맛집탐방',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

.top_title {
  margin-bottom: 30px;
}
.re_btn {
  border: 1px solid #EBEBEB;
  padding: 10px 8px;
  border-radius: 10px;
  margin-right: 10px;
  &:last-child {
    margin-right:0;
  }
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
  .active_btn {
    font-weight: bold;
    background-color: #F3B66D;
    border: none;
    color: #fff;
  }
}
// .re-nav-item {
//   display: inline-block;
//   .re_btn {
//     color: #000;
//     border: 1px solid #EBEBEB;
//     margin-right: 20px;
//     border-radius: 10px;
//     &:hover {
//       color: #000;
//       font-weight: bold;
//     }
//   }
// }
.center {
  justify-content: center;
}
</style>
