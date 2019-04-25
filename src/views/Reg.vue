<template lang="pug">
  div
    v-app#inspire
      v-form
          h1 Registration
          v-text-field(
            :rules="[rules.required, rules.email]"
            v-model='email'
            label="Email"
            required
          )
          v-text-field(
            :rules="[rules.required, rules.min]",
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            v-model='password'
            label="Password"
            @click:append="show = !show"
            required
          )
          v-text-field(
            :rules="[rules.required, rules.thesame]",
            :type="show ? 'text' : 'password'"
            v-model='repeat'
            label="Repeat password"
            required
          )
          v-btn(
            color="primary"
            @click="onSubmit()"
          )
            span(v-if="loading") Loading...
            span(v-else) Registration
          router-link#reg(to="/") go to login

          .buttons-list.buttons-list--info
            p.typo__p(v-if="status === 'OK'") Thanks for your submission!
            p.typo__p(v-if="status === 'ERROR'") Please fill the form correctly.
            p.typo__p(v-else) {{ status }}
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
      status: '',
      valid: false,
      show: false,
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
    },
    password: {
      required
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$v)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.status = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            // this.submitStatus = 'OK'
            this.$router.push('/')
          })
          .catch(err => {
            this.submitStatus = err.message
          })
        this.status = 'PENDING'
        setTimeout(() => {
          this.status = 'OK'
        }, 500)
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
#reg {
  display: block;
  font-size: .9em;
}
</style>
