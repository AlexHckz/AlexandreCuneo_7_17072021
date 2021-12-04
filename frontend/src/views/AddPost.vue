<template>
  <div>
    <Header />
    <main>
      <section class="right">
        <h1>Ajouter un post</h1>

        <form @submit.prevent="createPost">
          <div class="form-group">
            <label for="exampleFormControlInput1">Titre du post</label>
            <input v-model="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="titre du post"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Texte du post</label>
            <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-row alert-success" v-if="status == 'added'">
            Le poste a bien été ajouté
          </div>
          <div class="form-row alert-danger" v-if="status == 'rejected'">
            Veuillez compléter les champs
          </div>
          <button type="submit" class="btn btn-primary">Publiez</button>
        </form>

      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const axios = require("axios");


export default {
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      status: "",
      name: "",
      text: "",
      user_id: "",
    };
  },
  methods: {
    createPost() {
      console.log('id user >' + this.$store.state.user.userId)
      if(this.name == "" || this.text == "") {
        this.status = 'rejected';
        return;
      }

      axios
        .post(`http://localhost:3000/api/auth`, {
          name: this.name,
          text: this.text,
          user_id: this.$store.state.user.userId,
        })
        .then((response) => {
          console.log(response);
          this.status = 'added'
        })
        .catch(function (error) {
          console.log(error);
          console.log('erreur mon pote');
          this.status = 'rejected'
        });
    },
  },
  beforeMount() {
    let user = localStorage.getItem('user');
    if (!user) {
        document.location.href="/"; 
    } 
  }
};
</script>

<style>
@import "./common.css";

main {
  display: flex;
  height: calc(100vh - 160px);
}
.posts-wrapper {
  margin-top: 1em;
  padding: 0.5em;
  font-size: 13px;
  background-color: #ebebeb;
  border: solid black 1px;
}
.posts-wrapper li:first-child {
  margin: 0.3em 0;
}
.posts-wrapper li {
  list-style-type: none;
}
.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;
}
.btn-wrapper > * {
  margin-right: 0.5em;
}
.btn-primary {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 0.5em;
}
</style>
