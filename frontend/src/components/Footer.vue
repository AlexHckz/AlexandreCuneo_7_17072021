<template>
    <footer>
        <div>
            <a id="footerLinkA" v-bind:href="linkA">Cours Vue JS</a>
            <a id="footerLinkB" >CGU</a>
            <a id="footerLinkC" >Crédits</a> 
        </div>
    </footer>
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
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #FF9090;
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
