<template>
        <section class="right">
            <h1>titre</h1>
        </section>
</template>

<script>
export default {
  name: 'RightSection',
  props: {
    titleRight: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .right {
        min-height: 10vh;
        overflow: hidden;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    .right h1 {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .right {
        background-color: #EBEBEB;
        flex: 1 1 70%;
    }
</style>
