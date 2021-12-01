<template>
  <div>
    <Header />
    <main>
      <section class="right">
        <h1 v-if="mode == 'signup'">Inscription</h1>
        <div class="card">
          <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
          <h1 class="card__title" v-else>Inscription</h1>
          <p class="card__subtitle" v-if="mode == 'login'">
            Tu n'as pas encore de compte ?
            <span class="card__action link-primary" @click="switchToCreateAccount()">Créer un compte</span>
          </p>
          <p class="card__subtitle" v-else>
            Tu as déjà un compte ?
            <span class="card__action link-primary" @click="switchToLogin()">Se connecter</span>
          </p>
          <div class="form-row">
            <input v-model="email" class="form-row__input" type="email" placeholder="Adresse mail"/>
          </div>
          <div class="form-row" v-if="mode == 'create'">
            <input v-model="firstName" class="form-row__input" type="text" placeholder="Prénom"/>
            <input v-model="name" class="form-row__input" type="text" placeholder="Nom"/>
          </div>
          <div class="form-row" v-if="mode == 'create'">
            <textarea v-model="biography" class="form-row__input" rows="4" placeholder="Biographie" />
          </div>
          <div class="form-row">
            <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe" />
          </div>
          <div class="form-row alert-danger" v-if="mode == 'login' && status == 'error_login'">
            Adresse mail et/ou mot de passe invalide
          </div>
          <div class="form-row alert-danger" v-if="mode == 'create' && status == 'error_create'">
            Adresse mail déjà utilisée ou invalide
          </div>
          <div class="form-row">
            <button @click="login()" class="button btn-primary" :class="{ 'button--disabled': !validatedFields }" v-if="mode == 'login'">
              <span v-if="status == 'loading'">Connexion en cours...</span>
              <span v-else>Connexion</span>
            </button>
            <button @click="createAccount()" class="button btn-primary" :class="{ 'button--disabled': !validatedFields }" v-else>
              <span v-if="status == 'loading'">Création en cours...</span>
              <span v-else>Créer mon compte</span>
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import store from "../store/index.js";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import apiUrl from "../apiUrl.js";

function switchToCreateAccount() {
  this.mode = "create";
}
function switchToLogin() {
  this.mode = "login";
}

export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      status: '',
      mode: "login",
      email: "",
      firstName: "",
      name: "",
      password: "",
      biography: "",
    };
  },
  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push("/profile");
      return;
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode == "create") {
        if (
          this.email != "" &&
          this.firstName != "" &&
          this.name != "" &&
          this.password != "" &&
          this.biography != ""
        ) {
          return true;
        } else {
          this.status = 'error_create'
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(["status"]),
  },
  methods: {
    switchToCreateAccount,
    switchToLogin,

    login: async function () {
      let flagError = false;
      const payload = { email: this.email, password: this.password };
      const res = await axios
        .post(`${apiUrl}/api/auth/login`, payload)
        .catch((e) => {
          console.log("erreur :>", e);
          this.status = 'error_login'
          flagError = true;
        });
        
      if (flagError) {
        return;
      }
      this.$store.state.user = res.data;
      localStorage.setItem("user", JSON.stringify(res.data));
      this.$router.push("/profile");
    },

    createAccount: async function () {

      const self = this;
      this.$store
        .dispatch("createAccount", {
          email: this.email,
          name: this.name,
          firstName: this.firstName,
          password: this.password,
          biography: this.biography,
        })
        .then(
          function () {
            self.login();
          },
          function (error) {
            this.status = 'error_create'
            console.log(error);
          }
        );
    },
  },
};
</script>

<style scoped>
@import "./common.css";
.form-wrapper {
  margin-top: 1em;
}
.card{
  padding: 1em;
}
.switchLinks {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.loginBtn,
.signupBtn {
  padding: 0.7em 1em;
}
.form-row {
  display: flex;
  justify-content: center;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}
.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}
.form-row__input::placeholder {
  color: #aaaaaa;
}
</style>