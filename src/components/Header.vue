<template>
  <header>
    <Search />
    <div class="nav nav-pills center">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
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
  height: 130px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #CBCBCB;
  .logo {
    margin-right: 40px;
  }
  .center {
    justify-content: center
  }
}
</style>