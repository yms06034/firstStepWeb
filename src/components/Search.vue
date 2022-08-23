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
        <div class="btn">
          <button>로그인</button>
          <button>회원가입</button>
          <button>마이</button>
        </div>
      </div>
    </article>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
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
}
.logo {
  font-family: 'Roboto', 'sans-serif';
  font-size: 25px;
  color: $primary;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: $primary;
  }
}
</style>
