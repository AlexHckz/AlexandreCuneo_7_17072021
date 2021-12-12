<template>
  <div>
    <Header></Header>
    <main>
      <section class="right">
        <div class="card">
          <h1>Derniers billets de blog</h1>
          <div v-for="post in posts" :key="post.id" class="posts-wrapper">
            <Post :post="post" />
          </div>
          

          <a href="/add_post" v-if="$store.state.user.userId != -1">
            <button class="btn-primary">Ajouter un post</button>
          </a>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";

import Post from "../components/Post.vue";
import Footer from "../components/Footer.vue";
import apiUrl from "../apiUrl.js";



export default {
  name: "Home",
  components: {
    Header,
    Post,
    Footer,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch(apiUrl + "/api/post/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  methods: {}
};
</script>

<style>
@import "./common.css";
.posts-wrapper {
  position: relative;
  margin-top: 1em;
  padding: 0.5em;
  font-size: 13px;
  background-color: #ebebeb;
  border: solid black 1px;
}

</style>
