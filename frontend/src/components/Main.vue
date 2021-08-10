<template>
    <main>
        <LeftSection/>
        <RightSection/>
    </main>
</template>

<script>
import LeftSection from './LeftSection.vue'
import RightSection from './RightSection.vue'

export default {
  name: 'Main',
  props: {
    titleMain: String
  },
   components: {
    LeftSection,
    RightSection
  }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    main {
        display: flex;
        height: calc(100vh - 160px);
    }
</style>
