<template>
      <Header title="Mon réseau social"/>
      <Signup titleLeft="Menu" titleRight="Inscription"/>
      <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Signup from '../components/Signup.vue'

export default {
  name: 'CreateUser',
  components: {
    Header,
    Footer,
    Signup
  }
}
</script>

<style scoped>
  
</style>

