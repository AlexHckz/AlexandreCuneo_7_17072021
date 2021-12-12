<template>
  <div class="container">
    <li>{{ post.name }}</li>
    <li>{{ post.text }}</li>
    <!-- <li>{{ post.user_id }}</li> -->
    <div class="reaction-wrapper">
      <i :class="{fas: true, 'fa-thumbs-up': true, blue: like == 1}" @click="requestLike(1)"></i>{{ post.likes }}
      <i :class="{fas: true, 'fa-thumbs-down': true, red: like == -1}" @click="requestLike(-1)"></i>{{ post.dislikes }}
    </div>
    <Comment :postId="post.id" />
    <Edit :postId="post.id" />
  </div>
</template>

<script>
import Edit from "./Edit.vue";
import Comment from "./Comment.vue";
import axios from 'axios';
import apiUrl from "../apiUrl.js";

async function requestIsLike() {
  try { 
    let url = `${apiUrl}/api/post/${this.post.id}/islike`;
    let payload = {
      token: this.$store.state.user.token,
    };
    let result = await axios.post(url, payload)
    console.log('result.data.like; :>> ', result.data.like);
    this.like = result.data.like;
  } catch (error) {
    console.log("error", Object.keys(error.response.data), error.response.data);
  }
}
async function requestLike(btn) {
  let newLikeValue = 0;
  if (btn == 1 && this.like != 1) newLikeValue = 1; // Btn like quand il y a pas de like on ajoute un like
  if (btn == 1 && this.like == 1) newLikeValue = 0;
  if (btn == -1 && this.like != -1) newLikeValue = -1;
  if (btn == -1 && this.like == -1) newLikeValue = 0;
  try { 
    let url = `${apiUrl}/api/post/${this.post.id}/like`;
    let payload = {
      token: this.$store.state.user.token,
      like: newLikeValue,
    };
    let result = await axios.post(url, payload)
    console.log("result", result);
    this.like = newLikeValue;
  } catch (error) {
    console.log("error", error);
  }
}

export default {
  props: {
    post: Object,
  },
  components: {
    Edit,
    Comment,
  },
  data() {
    return {
      like: 0,
    };
  },
  methods: {
    requestIsLike, 
    requestLike,
  },
  created() {
    this.requestIsLike();
  },
};
</script>

<style scoped>
@import "./../views/common.css";
.container {
  flex: 1;
}
li:first-child {
  margin: 0.3em 0;
}
li {
  list-style-type: none;
}
.reaction-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 8px;
}
.reaction-wrapper > * {
  margin: 0 10px;
}
.fas {
  cursor: pointer;
}
.blue {
  color: green;
}
.red {
  color: red;
}
</style>