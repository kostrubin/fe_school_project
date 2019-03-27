<template lang="pug">
  //- v-app#inspire
    v-form
        //- h1 {{ msg }}
        //- input(type="email" placeholder="Email" required)
        //- input(type="password" placeholder="Password" required)
        //- input(type="checkbox" id="remember" checked)
        //- label(for="remember") Remember me
        //- input(type="submit" value="Login")
        
        // for login
        //- v-text-field(
        //-   v-model="Login"
        //-   v-validate="'required'"
        //-   :error-messages="errors.collect('name')"
        //-   label="Login"
        //-   data-vv-name="name"
        //-   required
        //- )

      v-container(class='fluid')
        v-layout(class='row wrap')
          v-flex(class='xs12 sm6')
            v-text-field(
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            )

          //- v-flex(xs12 sm6)
          //-   v-text-field(
          //-     :append-icon="show2 ? 'visibility' : 'visibility_off'"
          //-     :rules="[rules.required, rules.min]"
          //-     :type="show2 ? 'text' : 'password'"
          //-     name="input-10-2"
          //-     label="Visible"
          //-     hint="At least 8 characters"
          //-     value="wqfasds"
          //-     class="input-group--focused"
          //-     @click:append="show2 = !show2"
          //-   )
  
          //- v-flex(xs12 sm6)
          //-   v-text-field(
          //-     :append-icon="show3 ? 'visibility' : 'visibility_off'"
          //-     :rules="[rules.required, rules.min]"
          //-     :type="show3 ? 'text' : 'password'"
          //-     name="input-10-2"
          //-     label="Not visible"
          //-     hint="At least 8 characters"
          //-     value="wqfasds"
          //-     class="input-group--focused"
          //-     @click:append="show3 = !show3"
          //-   )
      
          //- v-flex(xs12 sm6)
          //-   v-text-field(
          //-     :append-icon="show4 ? 'visibility' : 'visibility_off'"
          //-     :rules="[rules.required, rules.emailMatch]"
          //-     :type="show4 ? 'text' : 'password'"
          //-     name="input-10-2"
          //-     label="Error"
          //-     hint="At least 8 characters"
          //-     value="Pa"
          //-     error
          //-     @click:append="show4 = !show4"
          //-   )

        //- v-text-field(
        //-   v-model="Password"
        //-   v-validate="'required'"
        //-   :error-messages="errors.collect('name')"
        //-   label="Password"
        //-   data-vv-name="name"
        //-   required
        //- )
        
        //- v-checkbox(
        //-   v-model="checkbox"
        //-   value="1"
        //-   label="Remember me"
        //-   data-vv-name="checkbox"
        //-   type="checkbox"
        //- )

        //- v-btn(color='info' @click="submit") Login
        
        // for registration
        //- v-text-field(
        //-   v-model="email"
        //-   v-validate="'required|email'"
        //-   :error-messages="errors.collect('email')"
        //-   label="E-mail"
        //-   data-vv-name="email"
        //-   required
        //- )
        //- v-select(
        //-   v-model="select"
        //-   v-validate="'required'"
        //-   :items="items"
        //-   :error-messages="errors.collect('select')"
        //-   label="Select"
        //-   data-vv-name="select"
        //-   required
        //- )
</template>

<script>
export default {
  name: 'Login',
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
// input[type="submit"] {
//   width: 40%;
//   margin: 60px auto;
//   border: 0;
//   background-color: rgba(45, 117, 209, 1);
//   color: white;
//   font-weight: bold;
// }
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
