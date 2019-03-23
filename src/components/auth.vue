<template lang="pug">
  form
    h1 {{ msg }}
    input(type="email" placeholder="E-Mail" required)
    input(type="password" placeholder="Password" required)
    input(type="checkbox" id="remember" checked)
    label(for="remember") Remember me
    input(type="submit" value="Login")
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
form {
  width: 20%;
  height: 320px;
  padding: 30px 15px;
  margin: 50px auto;
  border: 1px solid rgba(131, 131, 131, .7);
  border-radius: 5px;
  text-align: center;
}
h1 {
  font-weight: normal;
}
input:not([type="checkbox"]) {
  display: block;
  width: calc(100% - 30px);
  padding: 10px 15px;
  margin: 25px 0;
  border: 1px solid rgba(131, 131, 131, .7);
  border-radius: 5px;
}
input[type="submit"] {
  width: 40%;
  margin: 60px auto;
  border: 0;
  background-color: rgba(45, 117, 209, 1);
  color: white;
}
input[type="submit"]:hover {
  cursor: pointer;
}
</style>
