<template>
  <div>
    <div class="btn-wrapper">
      <button class="btn-primary" @click="newEditing">
        <i class="fas fa-edit"></i>Editer
      </button>
      <button class="btn-primary" @click="newCommenting">
        <i class="fas fa-comment"></i>Commenter
      </button>
    </div>

    <div class="form-group" v-if="editing">
      <form @submit.prevent="editPost">
        <div class="form-group">
          <label for="exampleFormControlInput1">Modifiez le titre</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="modifiez le titre"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Modifiez le texte</label>
          <textarea
            v-model="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="modifiez le texte"
          ></textarea>
        </div>
        <div class="container">
          <button type="submit" class="btn-primary">Modifiez</button>
          <button class="btn-close" @click="close"></button>
        </div>
      </form>
    </div>

    <div class="form-group" v-if="commenting">
      <form @submit.prevent="commentPost">
        <label for="exampleFormControlTextarea1">Votre commentaire:</label>
        <textarea
          v-model="commentText"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button class="btn-primary">Commenter</button>
        <button class="btn-close" @click="close"></button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import apiUrl from "../apiUrl.js";

export default {
  name: "Post",
  props: {
    postId: Number,
  },
  data() {
    return {
      id: "",
      name: "",
      text: "",
      commentText: "",
      editing: false,
      commenting: false,
    };
  },
  methods: {
    newEditing: function () {
      this.editing = true;
      this.commenting = false;
    },
    newCommenting: function () {
      this.commenting = true;
      this.editing = false;
    },
    close: function () {
      this.commenting = false;
      this.editing = false;
    },
    editPost: function () {
      console.log("this.$store", this.$store);
      console.log("ID du post est >" + this.postId);
      const formData = new FormData();
      formData.append("content", this.contentmodifyPost);
      formData.append("image", this.imagePost);

      axios
        .put("http://localhost:3000/api/post/" + this.postId, {
          name: this.name,
          text: this.text,
          token: this.$store.state.user.token,
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          const msgerror = error.response.data;
          console.log("error.response", error.response);
          this.notyf.error(msgerror.error);
        });
    },

    commentPost: function () {
      console.log("id post >" + this.postId);
      console.log("commentText >" + this.commentText);
      console.log("user_id >" + this.$store.state.user.token);

      if (this.commentText == "") {
        console.log("on passe dans le 1er reject");
        this.status = "rejected";
        return;
      }

      axios
        .post(`http://localhost:3000/api/post/${this.postId}/comment`, {
          token: this.$store.state.user.token,
          text: this.commentText,
          post_id: this.postId,
        })
        .then((response) => {
          console.log(response);
          this.status = "added";
        })
        .catch(function (error) {
          console.log(error);
          console.log("erreur mon pote");
          this.status = "rejected";
        });
    },

    // commentPost: async function () {
    //   try {
    //     let url = `${apiUrl}/api/post/${this.post.id}/comment`;
    //     let payload = {
    //       token: this.$store.state.user.token,
    //       text: this.commentText,
    //       post_id: this.postId,
    //     };
    //     let result = await axios
    //       .post(url, payload)
    //       .then((response) => {
    //         console.log(response);
    //         this.status = "added";
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         console.log("erreur mon pote");
    //         this.status = "rejected";
    //       });
    //   } catch (error) {
    //     console.log(
    //       "error",
    //       Object.keys(error.response.data),
    //       error.response.data
    //     );
    //   }
    // },

  },
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
