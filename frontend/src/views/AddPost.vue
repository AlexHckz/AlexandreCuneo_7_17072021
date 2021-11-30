<template>
  <div>
    <Header />
    <main>
      <section class="left">
        <h1>Menu</h1>
      </section>

      <section class="right">
        <h1>Ajouter un post</h1>
        <form @submit="createPost">
          <div class="form-group">
            <label for="exampleFormControlInput1">Titre du post</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="titre du post"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Texte du post</label>
            <textarea
              v-model="text"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Publiez</button>
        </form>
      </section>
    </main>
    <Footer />
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
      name: "",
      text: "",
    };
  },
  methods: {
    createPost() {
      axios
        .post(`http://localhost:3000/api/auth`, {
          name: this.name,
          text: this.text,
        })
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
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
.left h1,
.right h1 {
  margin: 0;
  padding: 0;
  text-align: center;
}
.left {
  background-color: #9f9f9f;
  flex: 0 0 30%;
}
.right {
  min-height: 10vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 20px;
}
.right {
  background-color: #fff;
  flex: 1 1 70%;
  overflow: scroll;
}
.user-info-wrapper {
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
}
.user-info-wrapper p {
  width: 100%;
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
</style>
