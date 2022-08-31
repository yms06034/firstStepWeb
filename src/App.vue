<template>
  <Header />
  <RouterView />
  <Dark />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Dark from '~/components/Dark'

export default {
  components: {
    Header,
    Footer,
    Dark
  }
}
</script>

<style lang="scss">
  @import "~/scss/main";
</style>