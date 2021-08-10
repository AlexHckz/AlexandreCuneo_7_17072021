<template>
  <div class="signup">
    <Signup msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'Home',
  components: {
    Signup
  }
}
</script>
