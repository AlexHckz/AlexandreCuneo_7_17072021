<template>
  <Header title="Mon réseau social"/>
  <Main titleLeft="Menu" titleRight="Ma page About"/>
  <Footer/>
</template>

<script>
// import Vue from 'vue'
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

// var vm = new Vue({
//   data: {
//     titleRight: "test titre"
//   }
// })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>