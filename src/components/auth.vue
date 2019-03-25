<template lang="pug">
  //- headerComp
  form
    h1 {{ msg }}
    input(type="email" placeholder="Email" required)
    input(type="password" placeholder="Password" required)
    input(type="checkbox" id="remember" checked)
    label(for="remember") Remember me
    input(type="submit" value="Login")

    //- router-link(to = "/find") ololo
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

<style lang="scss" scoped>
form {
  width: 300px;
  height: 320px;
  padding: 30px 15px;
  margin: 10% auto;
  border: 1px solid rgba(131, 131, 131, .7);
  background-color: white;
  border-radius: 5px;
  text-align: center;
}
h1 {
  font-size: 1.4em;
}
input:not([type="checkbox"]) {
  display: block;
  width: calc(100% - 70px);
  padding: 10px 30px;
  margin: 25px 0;
  border: 1px solid rgba(131, 131, 131, .7);
  border-radius: 5px;
}
input[type="email"] {
  background: url(../assets/envelope-regular.svg) no-repeat 10px 50%;
  background-size: 12px;
}
input[type="password"] {
  background: url(../assets/star-of-life-solid.svg) no-repeat 13px 50%;
  background-size: 8px;
}
input[type="submit"] {
  width: 40%;
  margin: 60px auto;
  border: 0;
  background-color: rgba(45, 117, 209, 1);
  color: white;
  font-weight: bold;
}
input[type="checkbox"] {
  background-color: #222;
}
input[type=checkbox]:checked {
  background-color: #222;
}
input+label {
  font-size: .8em;
}
input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.2);
  text-shadow: 0 1px rgba(0,0,0,.4);
}
</style>
