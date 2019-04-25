<template lang="pug">
  div
    v-app#inspire
      v-form
        h1 Login
        v-text-field(
          v-model="email"
          label="Email"
        )
        v-text-field(
          label="Password"
          v-model="password"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        )
        v-checkbox(
          v-model="remember"
          value="1"
          label="Remember me"
          type="checkbox"
        )
        v-btn(
          color="primary",
          @click="onSubmit()"
        ) Login
        router-link#reg(to="/reg") create an account
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      remember: '',
      show: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    // Login button
    onSubmit () {
      // Initialize Vuelodate
      this.$v.$touch()
      // Invalid
      if (this.$v.$invalid) {
        this.status = 'ERROR'
      // Valid
      } else {
        // User
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.$store.dispatch('loginUser', user)
            // this.submitStatus = 'OK'
            this.$router.push('/')
          })
          .catch(err => {
            this.status = err.message
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 300px;
  height: 360px;
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
.v-input--checkbox {
  justify-content: center;
}
#reg {
  display: block;
  font-size: .9em;
}
</style>
