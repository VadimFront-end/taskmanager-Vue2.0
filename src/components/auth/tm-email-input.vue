<template>
  <div class="tm-email-input">
    <div
        class="form-helper"
        :style="{visibility: (ERROR&&$v.email.$invalid) ? 'visible' : email.length ? 'visible' : 'hidden',
                 color: (ERROR&&$v.email.$invalid) ? '#EC1B1B' : focusEmail ? '#4F8AFD' : '#A7B4CF'}"
    >E-mail
    </div>
    <div class="container-input-log">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4 0.599976H1.6C0.7176 0.599976 0 1.31758 0 2.19998V11.8C0 12.6824 0.7176 13.4 1.6 13.4H14.4C15.2824 13.4 16 12.6824 16 11.8V2.19998C16 1.31758 15.2824 0.599976 14.4 0.599976ZM14.4 2.19998V2.60878L8 7.58718L1.6 2.60958V2.19998H14.4ZM1.6 11.8V4.63518L7.5088 9.23118C7.64889 9.34121 7.82186 9.40102 8 9.40102C8.17814 9.40102 8.35111 9.34121 8.4912 9.23118L14.4 4.63518L14.4016 11.8H1.6Z"
              :fill="(ERROR&&$v.email.$invalid) ? '#EC1B1B' : focusEmail ? '#4F8AFD' : '#A7B4CF'"/>
      </svg>
      <div class="input"
           :style="{borderBottom: (ERROR&&$v.email.$invalid) ? '1px solid #EC1B1B' : focusEmail ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
        <input
            class="log-input"
            type="text"
            placeholder="E-mail"
            v-model.trim="email"
            @focus="focusEmail=true"
            @blur="writeEmail">
        <div class="sign-error" v-if="ERROR&&$v.email.$invalid">!</div>
      </div>
    </div>
    <div class="error" v-if="(ERROR&&!$v.email.required)">Необходимо ввести e-mail</div>
    <div class="error" v-else-if="(ERROR&&$v.email.$invalid)">Некорректный e-mail</div>
  </div>
</template>

<script>
import {email, maxLength, required} from "vuelidate/lib/validators";
import {mapGetters} from 'vuex'

export default {
  name: "tm-email-input",
  data() {
    return {
      email: '',
      focusEmail: false
    }
  },
  validations: {
    email: {
      email,
      required,
      maxLength: maxLength(129)
    }
  },
  methods: {
    writeEmail() {
      this.focusEmail=false;
      this.$emit('getEmail', this.email);
    }
  },
  computed: {
    ...mapGetters([
        'ERROR'
    ])
  }
}
</script>