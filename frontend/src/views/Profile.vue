<template>
  <div>
    <Header />
    <main>
      <section class="right">
        <h1>Espace Personnel</h1>
        <div class="card">
          <h4 class="card__title">Mon profil</h4>
          <p class="card__subtitle">Information utilisateur...</p>
          <p>
            Nom: {{ user.firstName }} {{ user.name }}<br />
            Email: {{ user.email }}<br />
            Biographie: {{ user.biography }}
          </p>
          <div class="form-row">
            <button @click="logout()" class="button btn-primary">Déconnexion</button>
            <button @click="deleteProfile()" class="button btn-primary">
              Delete your profile
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import apiUrl from "../apiUrl.js";

export default {
  name: "Profile",
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      user: {},
    };
  },
  mounted: async function () {
    console.log("this.$store.state.user", this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push("/");
      return;
    }
    console.log("on est loguer");
    let flagError = false;
    const payload = { token: this.$store.state.user.token };
    const res = await axios
      .post(`${apiUrl}/api/auth/user/`, payload)
      .catch((e) => {
        console.log("erreur :>", e);
        this.logout();
        flagError = true;
      });
    if (flagError) {
      return;
    }
    this.user = res.data;
    console.log("this.user", this.user);
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push("/");
    },

    deleteProfile: async function () {
      console.log("Mon user id>" + this.user.id);
      const payload = { id: this.user.id };
      await axios
        .delete(`${apiUrl}/api/auth/delete`, { data: payload })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import "./common.css";

.form-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

</style>