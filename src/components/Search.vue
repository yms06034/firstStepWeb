<template>
  <form>
    <article>
      <div class="head_searchBox">
        <RouterLink 
          to="/"
          class="logo">
          FIRSTSTEP
        </RouterLink>
        <input 
          v-model="title"
          type="text"
          placeholder="원하시는 여행 키워드를 검색해주세요" 
          class='sinput btn' />
        <div class="top_btn">
          <div 
            v-for="nav in navigations" 
            :key="nav.name">
            <RouterLink
              :to="nav.href">
              {{ nav.name }}
            </RouterLink>
          </div>
        </div>
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
          name: '로그인',
          href: '/Client/Login'
        },
        {
          name: '회원가입',
          href: '/Client/Login'
        },
        {
          name: '마이페이지',
          href: '/Client/Login'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

.head_searchBox {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  .sinput {
    width: 720px;
    height: 40px;
    background-color: #F5F5F5;
    border: none;
    border-radius: 13px;
    &::placeholder {
      text-align: center;
      color: #CACACA;
    }
  }
  .top_btn {
    display: flex;
    margin-bottom: 0 !important;
    align-items: center;
  }
}
.logo {
  font-family: 'Roboto', 'sans-serif';
  font-size: 25px;
  color: $primary !important;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: $primary !important;
  }
}
</style>
