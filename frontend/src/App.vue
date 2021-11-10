<template>
  <router-view/>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 14px;
}

#nav a {
    color: #fff;
    background-color: #ffffff00;
    border: none;
}
#nav a.router-link-exact-active {
  font-size: 1.2em;
}

@media screen and (min-width: 1000px) {
        body {
          font-size: 16px;
        }
    }
</style>
