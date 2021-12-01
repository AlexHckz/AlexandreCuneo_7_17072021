<template>
  <Header />
  <main>
    <section class="right">
      <h1>Information utilisateur</h1>
      
      <div v-for="user in users" :key="user.id" class="posts-wrapper">
        <li>{{ user.firstName }}</li>
        <li>{{ user.name }}</li>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Admin",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/auth/users")
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
@import "./common.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
