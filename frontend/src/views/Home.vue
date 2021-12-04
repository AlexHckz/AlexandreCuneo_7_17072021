<template>
  <div>
    <Header></Header>
    <main>
      <section class="right">
        <div class="card">
            <h1>Derniers billets de blog</h1>
            <div v-for="post in posts" :key="post.id" class="posts-wrapper">
              <li>{{ post.name }}</li>
              <li>{{ post.text }}</li>
              <Post></Post>
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
    fetch("http://localhost:3000/api/post/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
 
};
</script>

<style>
@import "./common.css";

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
</style>
