<template>
  <div>

    <button  @click="showComments">Voir les commentaires</button>
    <div v-for="comment in comments" :key="comment.id" class="posts-wrapper">
        {{comment.text}}
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Comment",
  props: {
    postId: Number,
  },
  data() {
    return {
      id: "",
      text: "",
      user_id: "",
      post_id: "",
      comments: [],
    };
  },

 methods: {
    showComments: function () {
      
      console.log("ID du post est >" + this.postId)
      axios
        .post(`http://localhost:3000/api/post/${this.postId}/comments`, {
          post_id: this.postId,
        })
        .then((response) => {
          console.log(response);
          this.comments = response.data;
        })
        .catch(function (error) {
          console.log(error);
          console.log("erreur encore");
          this.status = "rejected";
        });
    },
 }

};
</script>

<style scoped>
.bottom-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
}
.btn-primary {
  margin-top: 0;
}
.btn-close {
  margin: 1em;
}
</style>
