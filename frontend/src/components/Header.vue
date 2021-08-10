<template>
    <header>
        <div class="wrapper-left">
            <img src="../assets/main_logo.png" alt="logo principal" width="48px" height="48px">
            <h1>{{ title }}</h1>
        </div>
        <div class="wrapper-right">
            <a href="#">Logout</a>
            <img src="../assets/user_logo.png" alt="logo principal" width="48px" height="48px">
        </div>
    </header>
</template>

<script>
export default {
  name: 'Title of my website',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #FF9090;
    }
    header .wrapper-right {
        display: flex;
        justify-content: space-between; 
        flex-basis: 160px;
    }
    header .wrapper-left {
        display: flex;
        align-items: center;
    }
    header h1 {
        font-size: 24px;
        margin: 0 30px;
    }
    header img {
        width: 48px;
        height: 48px;
    }
    header a {
        display: flex;
        align-items: center;
        border: solid black 1px;
        background-color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        color: #000;
        text-decoration: none;
    }
</style>
