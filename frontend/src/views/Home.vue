<template>
  <Header title="Le titre de mon super site"/>
  <Main titleMain="My Title Main"/>
  <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
