<template>
    <div>
        <form action="/action_page.php">
            <label for="name">Name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="email">Email:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="email">Mot de passe:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <input type="submit" value="Submit">
        </form>

        <p>Veuillez remplir les champs</p>
    </div>
</template>

<script>
export default {
  name: 'Signup',
  props: {
    instructions: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
