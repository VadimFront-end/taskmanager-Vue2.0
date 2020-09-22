<template>
 <div class="auth">
   <img class="log-img" src="../assets/images/loginImg.png">
   <div class="content-form">
     <div class="form-title">Сменить пароль</div>
     <div
         class="form-helper first-input-margin"
         :style="{visibility: (error&&$v.password.$invalid) ? 'visible' : password.length ? 'visible' : 'hidden',
                     color: (error&&$v.password.$invalid) ? '#EC1B1B' : focusPass ? '#4F8AFD' : '#A7B4CF'}"
     >Пароль
     </div>
     <div class="container-input-log">
       <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd"
               class="log-svg"
               clip-rule="evenodd"
               d="M3.0001 4C3.0001 1.7944 4.7945 0 7.0001 0C9.2057 0 11.0001 1.7944 11.0001 4V5.6H11.8001C12.6825 5.6 13.4001 6.3176 13.4001 7.2V14.4C13.4001 15.2824 12.6825 16 11.8001 16H2.2001C1.3177 16 0.600098 15.2824 0.600098 14.4V7.2C0.600098 6.3176 1.3177 5.6 2.2001 5.6H3.0001V4ZM7.0001 1.6C5.6769 1.6 4.6001 2.6768 4.6001 4V5.6H9.4001V4C9.4001 2.6768 8.3233 1.6 7.0001 1.6ZM7.8001 14.4H11.8017L11.8001 7.2H2.2001V14.4H6.2001H7.8001Z"
               :fill="(error&&$v.password.$invalid) ? '#EC1B1B' : focusPass ? '#4F8AFD' : '#A7B4CF'"/>
       </svg>
       <div class="input"
            :style="{borderBottom: (error&&$v.password.$invalid) ? '1px solid #EC1B1B' : focusPass ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
         <input
             class="log-input"
             type="password"
             placeholder="Пароль"
             v-model.trim="password"
             @focus="focusPass=true"
             @blur="focusPass=false">
         <div class="sign-error" v-if="error&&$v.password.$invalid">!</div>
         <svg v-else-if="!$v.password.$invalid" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="8" cy="8" r="8" fill="#2CCF11"/>
           <path d="M11.75 5L6.5 11L4.25 8.75" stroke="white" stroke-width="1.69643" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
       </div>
     </div>
     <div class="error" v-if="(error&&!$v.password.required)">Необходимо ввести пароль</div>
     <div class="error" v-else-if="(error&&!$v.password.passwordSigns)">Пароль должен содержать как минимум одну заглавную и строчную латинские буквы, цифру и спецсимвол</div>
     <div class="error" v-else-if="(error&&!$v.password.minLength)">Минимум 8 символов</div>
     <div class="error" v-else-if="(error&&!$v.password.maxLength)">Максимальное количество символов - 24</div>
     <div
         class="form-helper second-input-margin"
         :style="{visibility: (error&&$v.passwordConfirm.$invalid) ? 'visible' : passwordConfirm.length ? 'visible' : 'hidden',
                     color: (error&&$v.passwordConfirm.$invalid) ? '#EC1B1B' : focusPassConf ? '#4F8AFD' : '#A7B4CF'}"
     >Подтвердите пароль
     </div>
     <div class="container-input-log">
       <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd"
               class="log-svg"
               clip-rule="evenodd"
               d="M3.0001 4C3.0001 1.7944 4.7945 0 7.0001 0C9.2057 0 11.0001 1.7944 11.0001 4V5.6H11.8001C12.6825 5.6 13.4001 6.3176 13.4001 7.2V14.4C13.4001 15.2824 12.6825 16 11.8001 16H2.2001C1.3177 16 0.600098 15.2824 0.600098 14.4V7.2C0.600098 6.3176 1.3177 5.6 2.2001 5.6H3.0001V4ZM7.0001 1.6C5.6769 1.6 4.6001 2.6768 4.6001 4V5.6H9.4001V4C9.4001 2.6768 8.3233 1.6 7.0001 1.6ZM7.8001 14.4H11.8017L11.8001 7.2H2.2001V14.4H6.2001H7.8001Z"
               :fill="(error&&$v.passwordConfirm.$invalid) ? '#EC1B1B' : focusPassConf ? '#4F8AFD' : '#A7B4CF'"/>
       </svg>
       <div class="input"
            :style="{borderBottom: (error&&$v.passwordConfirm.$invalid) ? '1px solid #EC1B1B' : focusPassConf ? '1px solid #4F8AFD' : '1px solid #A7B4CF'}">
         <input
             class="log-input"
             type="password"
             placeholder="Подтвердите пароль"
             v-model.trim="passwordConfirm"
             @focus="focusPassConf=true"
             @blur="focusPassConf=false">
         <div class="sign-error" v-if="error&&$v.passwordConfirm.$invalid">!</div>
         <svg v-else-if="!$v.passwordConfirm.$invalid" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="8" cy="8" r="8" fill="#2CCF11"/>
           <path d="M11.75 5L6.5 11L4.25 8.75" stroke="white" stroke-width="1.69643" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
       </div>
     </div>
     <div class="error" v-if="(error&&!$v.passwordConfirm.required)">Необходимо заполнить поле</div>
     <div class="error" v-else-if="(error&&!$v.passwordConfirm.sameAsPassword)">Пароли не совпадают</div>
     <button class="log-butt" @click="sendNewPassword">Сбросить пароль</button>
   </div>
 </div>
</template>

<script>
import {maxLength, minLength, required, sameAs} from "vuelidate/lib/validators";

export default {
  name: "tm-change-password",
  data() {
    return {
      password: '',
      passwordConfirm: '',
      focusPass: false,
      focusPassConf: false,
      error: ''
    }
  },
  validations: {
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
    sendNewPassword() {
      if (!this.$v.password.$invalid&&!this.$v.passwordConfirm.$invalid) {
        console.log('Enter')
        this.$axios.post('http://smart-task.space/api/users/login', {
          password: this.password,
          passwordConfirm: this.passwordConfirm
        })
            .then(res => {
              console.log(res.status)
            })
            .catch(e => {
              console.log(e.response);
              this.error=e.response.statusText;
            })
      }
      else this.error = true;
    }
  }
}
</script>