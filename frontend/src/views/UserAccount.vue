<template>
  <Header title="Mon réseau social"/>

    <main>
      <section class="left">
            <h1>Menu</h1>
      </section>

      <section class="right">
            <h1>Information utilisateur</h1>
            <div class="user-info-wrapper">
              <p>Blabla le prénom</p>
              <p>Blabla le nom</p>
              <p>Blabla le mail</p>
              <p>Blabla la biographie</p>
            </div>
      </section>
    </main>

  <Footer/>
</template>

<script>
// import Vue from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'UserAccount',
  components: {
    Header,
    Footer
  }
}

</script>

<style>
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
    .left h1, .right h1 {
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
    .right {
        background-color: #EBEBEB;
        flex: 1 1 70%;
    }
    .user-info-wrapper {
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
    }
    .user-info-wrapper p {
        width: 100%;
    }
</style>