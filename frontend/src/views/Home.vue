<template>
  <Header/>
  <main>
      <section class="left">
            <h1>Menu</h1>
      </section>

      <section class="right">
            <h1>Derniers billets de blog</h1>
            <div v-for="post in posts" :key="post.id" class="posts-wrapper">
              <li>{{ post.name }}</li>
              <li>{{ post.text }}</li>
              <Post></Post>
            </div>

          <a href="/add_post" v-if="$store.state.user.userId != -1"><button class="btn-primary">Ajouter un post</button></a>
          

      </section>
    </main>
  <Footer/>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/Header.vue'
import Post from '../components/Post.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Post,
    Footer
  },
  data() {
    return  {
      posts: [],
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/auth/posts')
    .then(res => res.json())
    .then(data => this.posts = data)
    .catch(err => console.log(err.message))
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  

}
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
    margin-top : 1em;
    padding: 0.5em;
    font-size: 13px;
    background-color: #EBEBEB;
    border: solid black 1px;
}
.posts-wrapper li:first-child {
    margin : 0.3em 0;
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
.btn-primary > * {
  margin-right: 5px;
}
</style>
