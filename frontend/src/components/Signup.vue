<template>
    <main>
      <section class="left">
            <h1>{{titleLeft}}</h1>
      </section>

      <section class="right">
            <h1 v-if="mode == 'signup'">Inscription</h1>
            <h1 v-else>Login</h1>

            <p v-if="mode == 'signup'">Vous avez déjà un compte ? <span class="" @click="switchToLogin()">Connectez vous</span></p>
            <p v-else>Vous n'avez pas de compte ? <span class="" @click="switchToSignup()">Inscrivez -vous</span></p>

            <div class="form-wrapper form-group">
                <form action="/action_page.php" @submit.prevent="submitForm()">


                    <input type="text" id="firstName" name="firstName" placeholder="Votre prénom" v-model="firstName"><br><br>
                    <input type="text" id="name" name="name" placeholder="Votre nom" v-model="name"><br><br>
                    <input type="text" id="email" name="email" placeholder="Votre adresse mail" v-model="email"><br><br>
                    <input type="text" id="password" name="password" placeholder="Votre mot de passe" v-model="password"><br><br>
                    <textarea rows="5" id="biography" name="biography" placeholder="Votre biographie" v-model="biography"></textarea><br><br>

                    <input type="submit" value="Submit">
                </form>
                <p>Veuillez remplir les champs</p>
            </div>
            


      </section>
    </main>
    
</template>

<script>
import axios from 'axios';
import 'bootstrap';
export default {
  name: 'Signup',
  props: {
      titleRight: String,
      titleLeft: String
  },
  data(){
    return{
      firstName : '',
      name : '',
      email : '',
      biography : ''
    }
  },
  methods: {
    //AXIO en post (fetch) data
    switchToLogin () {
      this.mode = 'login'
    },
    switchToSignup () {
      this.mode = 'signup'
    },
    submitForm(){
      let dataBody = {
              firstName : this.firstName,
              name : this.name,
              email : this.email,
              biography : this.biography
            }

      axios.post('http://localhost:3000/api/auth/signup', {
            firstName: dataBody.firstName,
            name: dataBody.name,
            email: dataBody.email,
            biography: dataBody.biography
      })
      .then(function (dataBody) {
        console.log(dataBody);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
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
    .left h1 {
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
    .right h1 {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .right {
        background-color: #EBEBEB;
        flex: 1 1 70%;
    }
    .form-wrapper {
        margin-top: 1em;
    }
    h1 {
      margin-bottom: 1em;
    }
</style>
