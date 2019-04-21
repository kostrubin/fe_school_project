<template lang="pug">
  div
    v-app#inspire
      v-form
          //(@submit.prevent="onSubmit")
          h1 Registration

          v-text-field(
            :rules="[rules.required, rules.email]"
            v-model='email'
            label="Email"
          )
          v-text-field(
            :rules="[rules.required, rules.min]",
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            v-model='password'
            label="Password"
            @click:append="show1 = !show1"
          )

          v-text-field(
            :rules="[rules.required, rules.thesame]",
            :type="show1 ? 'text' : 'password'"
            v-model='repeat'
            label="Repeat password"
          )

          v-btn.reg(@click="onSubmit()") Registration
          router-link#reg(to="/") go to login
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Reg',
  data () {
    return {
      email: '',
      password: '',
      repeat: '',
      show1: false,
      show2: true,
      rules: {
        required: value => !!value || 'Required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        min: value => value.length >= 6 || 'Min 6 characters',
        thesame: value => value === this.password || 'Passwords must be identical'
      }
    }
  },
  validations: {
    email: {
      required
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$v)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('submit')
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
        console.log(user)
        this.submitStatus = 'PENDING'
        // setTimeout(() => {
        //   this.submitStatus = 'OK'
        // }, 500)
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
.reg {
  margin-bottom: 10px;
  background-color: rgb(43, 103, 186) !important;
  color: white;
}
#reg {
  display: block;
  font-size: .9em;
}
</style>
