<template>
    <div>
            <div class="btn-wrapper">
                <button class="btn-primary" @click="newEditing"><i class="fas fa-edit"></i>Editer</button>
                <button class="btn-primary" @click="newCommenting"><i class="fas fa-comment"></i>Commenter</button>
            </div>

            <div class="form-group" v-if="editing">
                <form @submit.prevent="editPost">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Modifiez le titre</label>
                        <input v-model="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="titre du post"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Modifiez le texte</label>
                        <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-row alert-success" v-if="status == 'added'">
                        Le poste a bien été ajouté
                    </div>
                    <div class="form-row alert-danger" v-if="status == 'rejected'">
                        Veuillez compléter les champs
                    </div>
                    <div class="container">
                        <button type="submit" class="btn btn-primary">Modifiez</button>
                        <button class="btn-close" @click="close"></button>
                    </div>
                </form>  
            </div>
            
            <div class="form-group" v-if="commenting">
                  <label for="exampleFormControlTextarea1">Votre commentaire:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button class="btn-primary">Commenter</button>
                  <button class="btn-close" @click="close"></button>
            </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Post',
  data() {
    return  {
            id: "",
            name: "",
            text: "",
            editing: false,
            commenting: false
        }
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

            const postId = "27";
            console.log("ID du post est >" + postId);

            const formData = new FormData();
            formData.append("content", this.contentmodifyPost);
            formData.append("image", this.imagePost);

            axios.put('http://localhost:3000/api/post/' + postId, {
                    name: this.name,
                    text: this.text,
            })
            .then(() => {
                window.location.reload()
            })
            .catch(error => {
                const msgerror = error.response.data
                this.notyf.error(msgerror.error)
            })
        }
    }
   
}
</script>

<style scoped>
    .btn-primary {
        margin-top: 0;   
    }
    .btn-close {
        margin: 1em;   
    }
</style>
