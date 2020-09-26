<template>
  <div class="auth">
    <img class="log-img" src="../../assets/images/loginImg.png">
    <div class="content-form" v-if="!forgotPassword">
      <div class="form-title">Добро пожаловать!</div>
      <tmEmailInput @getEmail="getEmail" class="first-input-margin" />
      <div
          class="form-helper second-input-margin"
          :style="{visibility: (ERROR&&$v.password.$invalid) ? 'visible' : password.length ? 'visible' : 'hidden',
                   color: (ERROR&&$v.password.$invalid) ? '#EC1B1B' : focusPass ? '#4F8AFD' : '#A7B4CF'}"
      >Пароль
      </div>
      <div class="container-input-log">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                class="log-svg"
                clip-rule="evenodd"
                d="M3.0001 4C3.0001 1.7944 4.7945 0 7.0001 0C9.2057 0 11.0001 1.7944 11.0001 4V5.6H11.8001C12.6825 5.6 13.4001 6.3176 13.4001 7.2V14.4C13.4001 15.2824 12.6825 16 11.8001 16H2.2001C1.3177 16 0.600098 15.2824 0.600098 14.4V7.2C0.600098 6.3176 1.3177 5.6 2.2001 5.6H3.0001V4ZM7.0001 1.6C5.6769 1.6 4.6001 2.6768 4.6001 4V5.6H9.4001V4C9.4001 2.6768 8.3233 1.6 7.0001 1.6ZM7.8001 14.4H11.8017L11.8001 7.2H2.2001V14.4H6.2001H7.8001Z"
                :fill="(ERROR&&$v.password.$invalid) ? '#EC1B1B' : focusPass ? '#4F8AFD' : '#A7B4CF'"/>
        </svg>
        <div class="input"
             :style="{borderBottom: (ERROR&&$v.password.$invalid) ? '1px solid #EC1B1B' : focusPass ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
        <input
            class="log-input"
            type="password"
            placeholder="Пароль"
            v-model.trim="password"
            @focus="focusPass=true"
            @blur="focusPass=false">
          <div class="sign-error" v-if="ERROR&&$v.password.$invalid">!</div>
        </div>
      </div>
      <div class="error" v-if="(ERROR&&!$v.password.required)">Необходимо ввести пароль</div>
      <div class="error" v-else-if="(ERROR&&!$v.password.minLength)">Минимум 8 символов</div>
      <div class="error" v-else-if="(ERROR&&!$v.password.maxLength)">Максимум 27 символов</div>
      <div class="server-error" v-if="typeof(ERROR)==='string'">
        <div class="sign-error">!</div>
        <div class="error" style="margin: 0 5px">{{ERROR}}</div>
      </div>
      <button class="log-butt" @click="sendLoginPasswordToServer">Войти</button>
      <div class="links-container">
        <div class="link-to-authorization-items" @click="forgotPassword=true;$store.commit('deleteError')">Не удается войти</div>
        <div class="ball-bw-links"></div>
        <router-link :to="'/registration'">
          <div class="link-to-authorization-items" @click="$store.commit('deleteError')">Зарегистрироваться</div>
        </router-link>
      </div>
    </div>
    <div v-else class="content-form">
      <div class="form-title">Сменить пароль</div>
      <tmEmailInput @getEmail="getEmail" class="first-input-margin" />
      <button class="log-butt" @click="sendEmailToServer">Сбросить пароль</button>
      <div class="links-container">
        <router-link :to="'/registration'">
          <div class="link-to-authorization-items" @click="$store.commit('deleteError')">Зарегистрироваться</div>
        </router-link>
        <div class="ball-bw-links"></div>
        <div class="link-to-authorization-items" @click="forgotPassword=false;$store.commit('deleteError')">Войти</div>
      </div>
    </div>
  </div>
</template>

<script>
import {required,email,maxLength,minLength} from 'vuelidate/lib/validators'
import tmEmailInput from './tm-email-input'
import {mapGetters} from 'vuex'

export default {
  name: "tm-login",
  components: {
    tmEmailInput
  },
  data() {
    return {
      email: '',
      password: '',
      focusPass: false,
      forgotPassword: false,
      error: ''
    }
  },
  validations: {
    email: {
      email,
      required,
      maxLength: maxLength(129)
    },
    password: {
      required,
      maxLength: maxLength(24),
      minLength: minLength(8)
    }
  },
  methods: {
    async sendLoginPasswordToServer() {
      if(!this.$v.email.$invalid&&!this.$v.password.$invalid) {
        console.log('Enter')
        const userLoginPass={
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('signIn', userLoginPass);
      }
      else this.$store.commit('setError');
    },
    async sendEmailToServer() {
      if(!this.$v.email.$invalid) {
        console.log('Enter')
        await this.$axios.post('', {
            email: this.email
          })
              .then(res => console.log(res.data))
              .catch(e => console.log(e.response))
      }
      else this.$store.commit('setError');
    },
    getEmail(data) {
      this.email=data;
    }
  },
  mounted() {
    console.log(this.USER)
  },
  computed: {
    ...mapGetters([
        'USER',
        'ERROR'
    ])
  }
}
</script>

<style>
.content-form {
  margin: 70px 0 20px;
  background: #FFFFFF;
  box-shadow: 0 4px 25px rgba(2, 57, 164, 0.1);
  border-radius: 14px;
  padding: 56px 50px 32px 50px;
  width: 263px;
}
.form-title {
  user-select: none;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.02em;
  line-height: 32px;
  color: #10141D;
}
.container-input-log {
  width: 100%;
  align-items: center;
  display: flex;
}
.input {
  margin-left: 8px;
  display: flex;
  width: 100%;
  padding: 5px 0 5px 5px;
  border-bottom: 1px solid #889ABD;
}
.log-input {
  color: #10141D;
  width: 100%;
}
.form-helper {
  font-size: 0.9rem;
  line-height: 14px;
  color: #0356F6;
  margin-left: 26px;
}
.log-input::placeholder { color: #889ABD; }
.link-to-authorization-items {
  font-weight: 300;
  line-height: 16px;
  color: #0239A4;
  cursor: pointer;
}
.link-to-authorization-items:hover {
  color: #0356F6;
}
.log-butt {
  cursor: pointer;
  color: #FCFCFD;
  background: #4F8AFD;
  border-radius: 22px;
  margin: 30px auto 0;
  font-weight: 500;
  display: block;
  padding: 8px 0;
  text-align: center;
  border: none;
  width: 70%;
}
.log-butt:hover {
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.3);
}
.log-butt:active {
  background: #0356F6;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.25);
}
.links-container {
  margin-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ball-bw-links {
  margin: 0 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #B0BCD3;
}
.second-input-margin {
  margin-top: 15px;
}
.sign-error {
  width: 16px;
  height: 16px;
  background: #EC1B1B;
  color: white;
  text-align: center;
  border-radius: 50%;
  font-family: 'Open Sans', sans-serif;
}
.first-input-margin {
  margin-top: 55px;
}
@media (max-width: 860px) {
  .log-img {
    height: 200px;
    width: 235px;
  }
  .auth {
    align-items: center;
  }
}
@media (max-width: 600px) {
  .auth {
    flex-direction: column-reverse;
    padding: 0 0 20px 0;
  }
  .content-form {
    margin: 70px auto 20px;
    width: 83%;
    max-width: 263px;
    padding: 56px 25px 32px 25px;
  }
  .log-img {
    margin: 30px auto 5px;
  }
  .links-container {
    margin-top: 30px;
  }
  .first-input-margin {
    margin-top: 20px;
  }
}
</style>