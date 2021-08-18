<template>
    <main>
      <section class="left">
            <h1>{{titleLeft}}</h1>
      </section>
      <section class="right">
            <h1>{{titleRight}}</h1>
      </section>
    </main>
</template>

<script>

export default {
  name: 'Main',
  props: {
    titleRight: String,
    titleLeft: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    main {
        display: flex;
        height: calc(100vh - 160px);
    }
    .left {
        min-height: 10vh;
        overflow: hidden;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    .left h1 {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .left {
        
        background-color: #9F9F9F;
        flex: 0 0 30%;
    }
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
