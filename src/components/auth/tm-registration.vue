<template>
  <div class="auth">
    <img class="log-img" src="../../assets/images/registImg.png">
    <div class="content-form">
      <div class="form-title">Регистрация</div>
      <div
          class="form-helper second-input-margin"
          :style="{visibility: (ERROR&&$v.name.$invalid) ? 'visible' : name.length ? 'visible' : 'hidden',
                   color: (ERROR&&$v.name.$invalid) ? '#EC1B1B' : focusName ? '#4F8AFD' : '#A7B4CF'}"
      >Ваше имя
      </div>
      <div class="container-input-log">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9841 13.0573C14.6039 12.1591 14.0521 11.3433 13.3595 10.6553C12.669 9.96524 11.851 9.41508 10.9508 9.03518C10.9427 9.03116 10.9347 9.02915 10.9266 9.02513C12.1823 8.1206 12.9987 6.64724 12.9987 4.98492C12.9987 2.23116 10.7613 0 7.99985 0C5.23839 0 3.001 2.23116 3.001 4.98492C3.001 6.64724 3.81734 8.1206 5.0731 9.02713C5.06504 9.03115 5.05698 9.03317 5.04891 9.03719C4.1459 9.41708 3.3356 9.96181 2.6402 10.6573C1.94824 11.3459 1.39654 12.1615 1.01557 13.0593C0.641306 13.9382 0.439457 14.8805 0.420949 15.8352C0.420411 15.8566 0.424184 15.878 0.432047 15.8979C0.439909 15.9179 0.451702 15.9361 0.466729 15.9515C0.481757 15.9669 0.499716 15.9791 0.519547 15.9874C0.539379 15.9957 0.560682 16 0.582202 16H1.7916C1.88029 16 1.95084 15.9296 1.95285 15.8432C1.99317 14.2915 2.61802 12.8382 3.72261 11.7367C4.86549 10.597 6.38328 9.96985 7.99985 9.96985C9.61641 9.96985 11.1342 10.597 12.2771 11.7367C13.3817 12.8382 14.0065 14.2915 14.0468 15.8432C14.0489 15.9317 14.1194 16 14.2081 16H15.4175C15.439 16 15.4603 15.9957 15.4801 15.9874C15.5 15.9791 15.5179 15.9669 15.533 15.9515C15.548 15.9361 15.5598 15.9179 15.5676 15.8979C15.5755 15.878 15.5793 15.8566 15.5787 15.8352C15.5586 14.8744 15.359 13.9397 14.9841 13.0573ZM7.99985 8.44221C7.07466 8.44221 6.20389 8.08241 5.5488 7.42915C4.89371 6.77588 4.5329 5.90754 4.5329 4.98492C4.5329 4.06231 4.89371 3.19397 5.5488 2.5407C6.20389 1.88744 7.07466 1.52764 7.99985 1.52764C8.92504 1.52764 9.7958 1.88744 10.4509 2.5407C11.106 3.19397 11.4668 4.06231 11.4668 4.98492C11.4668 5.90754 11.106 6.77588 10.4509 7.42915C9.7958 8.08241 8.92504 8.44221 7.99985 8.44221Z" :fill="(ERROR&&$v.name.$invalid) ? '#EC1B1B' : focusName ? '#4F8AFD' : '#A7B4CF'"/>
          <path d="M0.999846 14.5H14.9998V16H0.999846V14.5Z" :fill="(ERROR&&$v.name.$invalid) ? '#EC1B1B' : focusName ? '#4F8AFD' : '#A7B4CF'" />
        </svg>
        <div class="input"
             :style="{borderBottom: (ERROR&&$v.name.$invalid) ? '1px solid #EC1B1B' : focusName ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
          <input
              class="log-input"
              type="text"
              placeholder="Ваше имя (необязательно)"
              v-model.trim="name"
              @focus="focusName=true"
              @blur="focusName=false">
          <div class="sign-error" v-if="ERROR&&$v.name.$invalid">!</div>
          <svg v-else-if="!$v.name.$invalid&&name.length" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#2CCF11"/>
            <path d="M11.75 5L6.5 11L4.25 8.75" stroke="white" stroke-width="1.69643" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="error" v-if="(ERROR&&(!$v.name.checkDefise||!$v.name.nameSigns))">Некорректный формат имени</div>
      <div class="error" v-else-if="(ERROR&&!$v.name.maxLength)">Максимум 24 символа</div>
      <tmEmailInput
          @getEmail="getEmail"
          class="second-input-margin"
          :isRegistration="true"/>
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
          <svg v-else-if="!$v.password.$invalid" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#2CCF11"/>
            <path d="M11.75 5L6.5 11L4.25 8.75" stroke="white" stroke-width="1.69643" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="error" v-if="(ERROR&&!$v.password.required)">Необходимо ввести пароль</div>
      <div class="error" v-else-if="(ERROR&&!$v.password.passwordSigns)">Пароль должен содержать как минимум одну заглавную и строчную латинские буквы, цифру и спецсимвол</div>
      <div class="error" v-else-if="(ERROR&&!$v.password.minLength)">Минимум 8 символов</div>
      <div class="error" v-else-if="(ERROR&&!$v.password.maxLength)">Максимальное количество символов - 24</div>
      <div
          class="form-helper second-input-margin"
          :style="{visibility: (ERROR&&$v.passwordConfirm.$invalid) ? 'visible' : passwordConfirm.length ? 'visible' : 'hidden',
                   color: (ERROR&&$v.passwordConfirm.$invalid) ? '#EC1B1B' : focusPassConf ? '#4F8AFD' : '#A7B4CF'}"
      >Подтвердите пароль
      </div>
      <div class="container-input-log">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                class="log-svg"
                clip-rule="evenodd"
                d="M3.0001 4C3.0001 1.7944 4.7945 0 7.0001 0C9.2057 0 11.0001 1.7944 11.0001 4V5.6H11.8001C12.6825 5.6 13.4001 6.3176 13.4001 7.2V14.4C13.4001 15.2824 12.6825 16 11.8001 16H2.2001C1.3177 16 0.600098 15.2824 0.600098 14.4V7.2C0.600098 6.3176 1.3177 5.6 2.2001 5.6H3.0001V4ZM7.0001 1.6C5.6769 1.6 4.6001 2.6768 4.6001 4V5.6H9.4001V4C9.4001 2.6768 8.3233 1.6 7.0001 1.6ZM7.8001 14.4H11.8017L11.8001 7.2H2.2001V14.4H6.2001H7.8001Z"
                :fill="(ERROR&&$v.passwordConfirm.$invalid) ? '#EC1B1B' : focusPassConf ? '#4F8AFD' : '#A7B4CF'"/>
        </svg>
        <div class="input"
             :style="{borderBottom: (ERROR&&$v.passwordConfirm.$invalid) ? '1px solid #EC1B1B' : focusPassConf ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
          <input
              class="log-input"
              type="password"
              placeholder="Подтвердите пароль"
              v-model.trim="passwordConfirm"
              @focus="focusPassConf=true"
              @blur="focusPassConf=false">
          <div class="sign-error" v-if="ERROR&&$v.passwordConfirm.$invalid">!</div>
          <svg v-else-if="!$v.passwordConfirm.$invalid" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#2CCF11"/>
            <path d="M11.75 5L6.5 11L4.25 8.75" stroke="white" stroke-width="1.69643" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="error" v-if="(ERROR&&!$v.passwordConfirm.required)">Необходимо заполнить поле</div>
      <div class="error" v-else-if="(ERROR&&!$v.passwordConfirm.sameAsPassword)">Пароли не совпадают</div>
      <div class="server-error" v-if="ERROR==='Неизвестная ошибка'">
        <div class="sign-error">!</div>
        <div class="error" style="margin: 0 5px">{{ERROR}}</div>
      </div>
      <button class="log-butt" @click="sendUserDataToServer">Зарегистрироваться</button>
      <div class="conditions">Нажимая Зарегистрироваться я принимаю <span class="link-to-conditions">Правила использования сайта</span> и даю <span class="link-to-conditions">Согласие на обработку персональных данных</span></div>
      <router-link :to="'/'">
        <div class="link-to-authorization-items" style="text-align: center" @click="$store.commit('deleteError')">Уже зарегистрированы? Войти</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {email, maxLength, minLength, required,sameAs} from "vuelidate/lib/validators";
import tmEmailInput from './tm-email-input'
import {mapGetters} from 'vuex'

export default {
  name: "tm-registration",
  components: {
    tmEmailInput
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      focusName: false,
      focusPass: false,
      focusPassConf: false
    }
  },
  validations: {
    name: {
      maxLength: maxLength(24),
      checkDefise(name) {
        if(name.indexOf('-')===-1)return true;
        else if(name[0]==='-'||name[name.length-1]==='-')return false;
        else return true;
      },
      nameSigns(name) {
        if(name.length)return /^[-ЁёА-яA-z0-9\s]+$/.test(name)
        else return true;
      }
    },
    email: {
      email,
      required,
      maxLength: maxLength(129)
    },
    password: {
      required,
      maxLength: maxLength(24),
      minLength: minLength(8),
      passwordSigns(password) {
        return (/[?0-9]/.test(password)&&/[?a-z]/.test(password)&&/[?A-Z]/.test(password)&&/[?.!#$%&"*+/=^_`{|}~@-]/.test(password))
      }
    },
    passwordConfirm: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    async sendUserDataToServer() {
      if (!this.$v.email.$invalid && !this.$v.password.$invalid && !this.$v.name.$invalid && !this.$v.passwordConfirm.$invalid) {
        console.log('Enter')
        const userData={
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        await this.$store.dispatch('signUp', userData);
      }
      else this.$store.commit('setError');
    },
    getEmail(data) {
      this.email=data;
    }
  },
  computed: {
    ...mapGetters([
        'ERROR'
    ])
  }
}
</script>

<style>
.conditions {
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 14px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.link-to-conditions {
  color: #0239A4;
  cursor: pointer;
}
</style>