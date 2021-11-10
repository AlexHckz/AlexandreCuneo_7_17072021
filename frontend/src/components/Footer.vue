<template>
    <footer>
        <div id="footerLinks">
            <a id="footerLinkA" :href="cheatlist">Ma super cheatlist</a>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'Footer',
  data: function () {
    return {
      cheatlist: 'https://devhints.io/vue'
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #0d6efd;
    }
    footer div {
        display: flex;
        justify-content: space-evenly;
        flex: 0 0 300px;
    }
    footer a {
        display: flex;
        align-items: center;
        background-color: none;
        box-sizing: border-box;
        color: #fff;
        text-decoration: none;
    }
</style>
