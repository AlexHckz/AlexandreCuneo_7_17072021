<template>
  <Header/>
  <main>
      <section class="left">
            <h1>Menu</h1>
      </section>

      <section class="right">
            <h1>Information utilisateur</h1>
            <div v-for="user in users" :key="user.id" class="posts-wrapper">
              <li>{{ user.firstName }}</li>
              <li>{{ user.name }}</li>
            </div>
      </section>
    </main>
  <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Admin',
  components: {
    Header,
    Footer
  },
  data() {
    return  {
      users: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/auth/users')
    .then(res => res.json())
    .then(data => this.users = data)
    .catch(err => console.log(err.message))
  }
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
</style>
