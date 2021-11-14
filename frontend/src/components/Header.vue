<template>
    <header>
        <div class="wrapper-left">
            <img src="../assets/main_logo.png" alt="logo principal" width="48px" height="48px">
            <h1>Groupomania</h1>
        </div>
        <div class="wrapper-middle">

            <div id="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/profile" v-if="$store.state.user.userId != -1">Profile</router-link>
                <router-link to="/login" v-else>Login</router-link>
                <router-link to="/admin">Admin</router-link>
                
            </div>
        </div>
        <div class="wrapper-right">
            <router-link to="/profile">
                <img src="../assets/user_logo.png" alt="logo principal" width="48px" height="48px">
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Title of my website',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #0d6efd;
        color: #FFF;
    }
    header .wrapper-middle {
        display: flex;
        font-size: 0.9em;
        flex: 1 1 auto;
    }
    header .wrapper-right {
        display: flex;
        justify-content: flex-end; 
        flex: 0 1 15%;
    }
    header h1 {
        font-size: 1.3em;
        margin: 0 1em;
    }
    header img {
        width: 48px;
        height: 48px;
    }
    header .wrapper-middle a {
        display: flex;
        align-items: center;
        border: solid black 1px;
        background-color: #fff;
        padding: 0.7em 1.2em;
        box-sizing: border-box;
        color: #000;
        text-decoration: none;
    }
    #nav {
        display: flex;
        padding: 0;
    }
    header a {
        margin-right: 2em;    
    }
     header .wrapper-left {
        display: none;
    }
    @media screen and (min-width: 900px) {
        header .wrapper-left {
            display: flex;
            align-items: center;
            flex: 1 1 auto;
        }
        header .wrapper-middle {
            font-size: 1em;
        }
        
    }

</style>
