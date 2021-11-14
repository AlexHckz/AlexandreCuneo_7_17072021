<template>
  <Header/>
   <main>
        <section class="left">
            <h1>Menu</h1>
        </section>

        <section class="right">
            <h1 v-if="mode == 'signup'">Espace Personnel</h1>
            <div class="card">
              <h1 class="card__title">Mon profil</h1>
              <p class="card__subtitle">Voilà donc qui je suis...</p>
              <p>{{user.firstName}} {{user.name}} {{user.email}}</p>
              <p>{{user.biography}}</p>
              <div class="form-row">
                <button @click="logout()" class="button">
                  Déconnexion
                </button>
              </div>
            </div>
        </section>
      </main>
  <Footer/>
</template>

<script>
import { mapState } from 'vuex'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Profile',
  components: {
    Header,
    Footer,
  },
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>

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
    }
    .right h1 {
        margin: 0;
        padding: 10px 20px;
        text-align: center;
    }
    .right {
        background-color: #fff;
        flex: 1 1 70%;
        padding: 0px;
    }
    h1 {
    margin-bottom: 1em;
    }
</style>