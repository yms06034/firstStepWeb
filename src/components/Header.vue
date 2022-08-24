<template>
  <header>
    <Search />
    <div id="top-navbar--wrap">
      <div class="nav nav-pills center">
        <div 
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-item">
          <RouterLink 
            :to="nav.href"
            active-class="a_active"
            class="nav-link h_btn">
            {{ nav.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from './Search.vue'

export default {
  components: {
    Search
  },
  data() {
    return {
      navigations : [
        // {
        //   name: '메인',
        //   href: '/'
        // },
        {
          name: '여행정보',
          href: '/info'
        },
        {
          name: '여행실사후기',
          href: '/review'
        },
        {
          name: '커뮤니티',
          href: '/cmnty'
        },
        {
          name: 'Notice',
          href: '/notice'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
header {
  height: 120px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #CBCBCB;
  .logo {
    margin-right: 40px;
  }
  .center {
    justify-content: center;
  }
  .h_btn {
    margin-right: 50px;
    color: #000;
    &:hover {
      color: #000;
      font-weight: bold;
    } 
  }
  .a_active {
    background-color: none;
    font-weight: bold;
  }
}
</style>
  