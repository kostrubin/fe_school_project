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
          value="1"
          label="Remember me"
          type="checkbox"
        )
        v-btn(
          color="primary",
          @click="onSubmit()"
        )
          span(v-if="loading") Loading...
          span(v-else) Login

        router-link#reg(to="/reg") create an account

        p(v-if="status === 'OK'") Logged in!
        p(v-if="status === 'ERROR'") Please fill the form correctly.
        p(v-if="status != 'OK' && status != 'ERROR'") {{ status }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      repeat: '',
      status: '',
      valid: false,
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
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.status = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.status = 'OK'
            this.$router.push('/map')
          })
          .catch(err => {
            this.status = err.message
          })
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 300px;
  height: 400px;
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
  margin-bottom: 10px;
  font-size: .9em;
}
</style>
