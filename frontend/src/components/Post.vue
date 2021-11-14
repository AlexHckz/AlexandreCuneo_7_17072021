<template>
    <div class="btn-wrapper">
                <button class="btn-primary" @click="newEditing"><i class="fas fa-edit"></i>Editer</button>
                <button class="btn-primary" @click="newCommenting"><i class="fas fa-comment"></i>Commenter</button>
              </div>

              <div class="form-group" v-if="editing">
                  <label for="exampleFormControlTextarea1">Editez le billet de blog:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button class="btn-primary">Modifier</button>
                  <button class="btn-close" @click="close"></button>
              </div>
              <div class="form-group" v-if="commenting">
                  <label for="exampleFormControlTextarea1">Votre commentaire:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button class="btn-primary">Commenter</button>
                  <button class="btn-close" @click="close"></button>
    </div>
</template>

<script>

export default {
  name: 'Post',
  data() {
    return  {
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
        }
    }
   
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .btn-close {
        margin: 1em;   
    }
</style>
