<template>
  <div class="tm-container-for-content-page">
    <div style="display: flex;align-items: center;justify-content: space-between">
      <div class="title-main-page">Проект: {{GET_PROJECT_DATA.project_name}}</div>
      <button class="button-for-add-task" @click="$store.commit('showTaskWindow', -1)">Добавить задачу</button>
    </div>
    <tmControlFilters @view="getView" style="display: none"/>
    <div style="display: flex">
      <div class="title-for-colon-project">
        <div style="margin-left: 15px">Cтатус</div>
        <div style="margin-left: 15px">Название задачи</div>
        <div style="margin: auto">Исполнитель</div>
        <div style="margin: auto">Срок</div>
        <div style="margin: auto" class="mobile">Сложность</div>
        <div style="margin: auto" class="mobile">Время</div>
      </div>
      <div style="display: flex;cursor: pointer" @click="$store.commit('isShowProjectWindow')">
        <div style="color: #485C83;margin: 0 8px 0 26px">Информация о проекте </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4.19201C16.0006 4.08673 15.9804 3.98236 15.9406 3.88489C15.9008 3.78742 15.8422 3.69877 15.768 3.62401L12.376 0.232013C12.3013 0.157868 12.2126 0.0992081 12.1151 0.0593964C12.0177 0.0195847 11.9133 -0.000595343 11.808 1.33714e-05C11.7027 -0.000595343 11.5984 0.0195847 11.5009 0.0593964C11.4034 0.0992081 11.3148 0.157868 11.24 0.232013L8.97602 2.49601L0.232013 11.24C0.157868 11.3148 0.0992081 11.4034 0.0593964 11.5009C0.0195847 11.5984 -0.000595343 11.7027 1.33714e-05 11.808V15.2C1.33714e-05 15.4122 0.0842988 15.6157 0.234328 15.7657C0.384357 15.9157 0.58784 16 0.800013 16H4.19201C4.30396 16.0061 4.41593 15.9886 4.52067 15.9486C4.62541 15.9087 4.72058 15.8471 4.80001 15.768L13.496 7.02401L15.768 4.80001C15.841 4.72248 15.9005 4.63324 15.944 4.53601C15.9517 4.47225 15.9517 4.40778 15.944 4.34401C15.9478 4.30677 15.9478 4.26925 15.944 4.23201L16 4.19201ZM3.86401 14.4H1.60001V12.136L9.54401 4.19201L11.808 6.45601L3.86401 14.4ZM12.936 5.32801L10.672 3.06401L11.808 1.93601L14.064 4.19201L12.936 5.32801Z" fill="#889ABD"/>
        </svg>
      </div>
    </div>
    <div class="adaptiv-project">
      <div style="width: 90%">
        <tmItemTask
            v-for="(task,index) in GET_PROJECT_TASKS"
            :key="index"
            :isProject="true"
            :index="index"
            :lengthArray="GET_PROJECT_TASKS.length"
            :task="task"
            :style="{borderRadius: (index===GET_PROJECT_TASKS.length-1)&&(index===0) ? '14px': index===GET_PROJECT_TASKS.length-1 ? '0 0 14px 14px': index===0 ? '14px 14px 0 0' : ''}"/>
      </div>
      <div class="description-of-project">
        <div style="display: flex;align-items: center" v-if="GET_PROJECT_DATA.project_status==='1'">
          <div class="title-projects-items" style="margin-right: 9px">Статус:</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0625 0C7.403 0 6.84837 0.456437 6.69719 1.06991C5.17119 1.36944 3.77909 2.17022 2.74581 3.351C1.62 4.6375 1 6.28856 1 8C1 8.25887 1.20987 8.46875 1.46875 8.46875C1.72763 8.46875 1.9375 8.25887 1.9375 8C1.9375 6.51572 2.47513 5.08394 3.45134 3.96837C4.32819 2.96634 5.50234 2.27956 6.79138 2.00706C7.01713 2.48272 7.50194 2.8125 8.0625 2.8125C8.83791 2.8125 9.46875 2.18166 9.46875 1.40625C9.46875 0.630844 8.83791 0 8.0625 0Z" fill="#2CCF11"/>
            <path d="M12.0177 7.14897C11.9043 7.07012 11.6887 6.94547 11.5349 6.87906L11.2922 6.29313C11.3521 6.14213 11.4176 5.90053 11.4427 5.76094C11.4698 5.60988 11.4213 5.45509 11.3128 5.34656L10.6535 4.68725C10.5449 4.57869 10.3901 4.53016 10.2391 4.55734C10.1016 4.58206 9.86159 4.64647 9.70691 4.70784L9.12097 4.46513C9.05672 4.31631 8.93219 4.09897 8.85106 3.98237C8.76344 3.85637 8.61969 3.78125 8.46622 3.78125H7.53381C7.38034 3.78125 7.23659 3.85637 7.14897 3.98237C7.07012 4.09572 6.94547 4.31138 6.87906 4.46513L6.29313 4.70784C6.14213 4.64794 5.90053 4.58244 5.76094 4.55734C5.60997 4.53025 5.45509 4.57875 5.34656 4.68725L4.68725 5.34656C4.57872 5.45509 4.53019 5.60988 4.55734 5.76094C4.58206 5.89841 4.64647 6.13844 4.70784 6.29313L4.46513 6.87906C4.31631 6.94331 4.09897 7.06784 3.98237 7.14897C3.85637 7.23659 3.78125 7.38034 3.78125 7.53381V8.46622C3.78125 8.61969 3.85637 8.76344 3.98237 8.85106C4.09572 8.92991 4.31138 9.05456 4.46513 9.12097L4.70784 9.70691C4.64794 9.85791 4.58244 10.0995 4.55734 10.2391C4.53019 10.3902 4.57872 10.5449 4.68725 10.6535L5.34656 11.3128C5.45506 11.4213 5.60978 11.4698 5.76094 11.4427C5.89841 11.418 6.13844 11.3536 6.29313 11.2922L6.87906 11.5349C6.94331 11.6837 7.06784 11.9011 7.14897 12.0177C7.23659 12.1437 7.38034 12.2188 7.53381 12.2188H8.46622C8.61969 12.2188 8.76344 12.1437 8.85106 12.0177C8.92991 11.9043 9.05456 11.6887 9.12097 11.5349L9.70691 11.2922C9.85791 11.3521 10.0995 11.4176 10.2391 11.4427C10.3902 11.4698 10.5449 11.4213 10.6535 11.3128L11.3128 10.6535C11.4213 10.5449 11.4698 10.3902 11.4427 10.2391C11.418 10.1016 11.3536 9.86159 11.2922 9.70691L11.5349 9.12097C11.6837 9.05672 11.9011 8.93219 12.0177 8.85106C12.1437 8.76344 12.2188 8.61969 12.2188 8.46622V7.53381C12.2188 7.38034 12.1437 7.23659 12.0177 7.14897ZM8 9.87506C6.96613 9.87506 6.125 9.03394 6.125 8.00006C6.125 6.96619 6.96613 6.12506 8 6.12506C9.03387 6.12506 9.875 6.96619 9.875 8.00006C9.875 9.03394 9.03387 9.87506 8 9.87506Z" fill="#2CCF11"/>
            <path d="M14.53 7.53125C14.2711 7.53125 14.0612 7.74112 14.0612 8C14.0612 9.48428 13.5236 10.9161 12.5474 12.0316C11.6705 13.0337 10.4964 13.7204 9.20734 13.9929C8.98159 13.5173 8.49678 13.1875 7.93622 13.1875C7.16081 13.1875 6.52997 13.8183 6.52997 14.5938C6.52997 15.3692 7.16081 16 7.93622 16C8.59572 16 9.15034 15.5436 9.30153 14.9301C10.8275 14.6306 12.2196 13.8298 13.2529 12.649C14.3787 11.3625 14.9987 9.71144 14.9987 8C14.9987 7.74112 14.7888 7.53125 14.53 7.53125Z" fill="#2CCF11"/>
          </svg>
          <div style="margin-left: 5px;font-weight: 600;font-size: .85rem;color: #2CCF11">Активный</div>
        </div>
        <div style="display: flex;align-items: center" v-else-if="GET_PROJECT_DATA.project_status==='2'">
          <div class="title-projects-items" style="margin-right: 9px">Статус:</div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7C14 10.864 10.864 14 7 14C3.136 14 0 10.864 0 7C0 6.167 0.154 5.376 0.42 4.634L1.736 5.11C1.519 5.698 1.4 6.335 1.4 7C1.4 10.087 3.913 12.6 7 12.6C10.087 12.6 12.6 10.087 12.6 7C12.6 3.913 10.087 1.4 7 1.4C6.335 1.4 5.705 1.519 5.117 1.736L4.641 0.413C5.383 0.154 6.174 0 7 0C10.864 0 14 3.136 14 7ZM2.45 3.5C3.031 3.5 3.5 3.031 3.5 2.45C3.5 1.869 3.031 1.4 2.45 1.4C1.869 1.4 1.4 1.869 1.4 2.45C1.4 3.031 1.869 3.5 2.45 3.5ZM4.9 4.9V9.1H6.3V4.9H4.9ZM7.7 4.9V9.1H9.1V4.9H7.7Z" fill="#EC1B1B"/>
          </svg>
          <div style="margin-left: 5px;font-weight: 600;font-size: .85rem;color: #EC1B1B">Приостановлен</div>
        </div>
        <div style="display: flex;align-items: center" v-else>
          <div class="title-projects-items" style="margin-right: 9px">Статус:</div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20802 2.04471C8.13944 1.56857 6.94558 1.45062 5.80448 1.70843C4.66338 1.96625 3.6362 2.58602 2.87612 3.47532C2.11603 4.36461 1.66378 5.47578 1.58681 6.6431C1.50984 7.81043 1.81227 8.97136 2.449 9.95276C3.08572 10.9342 4.02264 11.6834 5.12 12.0889C6.21736 12.4943 7.41638 12.5341 8.53823 12.2024C9.66008 11.8707 10.6447 11.1853 11.3451 10.2483C12.0456 9.31131 12.4244 8.17301 12.425 7.00315V6.44005C12.425 6.05345 12.7384 5.74005 13.125 5.74005C13.5116 5.74005 13.825 6.05345 13.825 6.44005V7.00355C13.8242 8.47531 13.3476 9.90777 12.4664 11.0865C11.5852 12.2653 10.3465 13.1277 8.93518 13.545C7.52382 13.9623 6.01538 13.9121 4.63482 13.4021C3.25427 12.8921 2.07557 11.9494 1.27453 10.7148C0.473483 9.48009 0.0930063 8.01956 0.189843 6.55099C0.28668 5.08242 0.855642 3.6845 1.81187 2.56571C2.76811 1.44692 4.06037 0.667204 5.49595 0.342855C6.93152 0.0185062 8.43348 0.1669 9.77782 0.765905C10.131 0.923251 10.2897 1.33707 10.1323 1.69021C9.97498 2.04334 9.56116 2.20205 9.20802 2.04471Z" fill="#889ABD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6197 1.60822C13.8933 1.88145 13.8935 2.32467 13.6202 2.59817L7.49525 8.72929C7.36399 8.86068 7.18591 8.93452 7.0002 8.93457C6.81449 8.93461 6.63637 8.86086 6.50505 8.72954L4.66755 6.89204C4.39418 6.61867 4.39418 6.17546 4.66755 5.90209C4.94092 5.62872 5.38413 5.62872 5.6575 5.90209L6.99978 7.24437L12.6298 1.60872C12.903 1.33521 13.3462 1.33499 13.6197 1.60822Z" fill="#889ABD"/>
          </svg>
          <div style="margin-left: 5px;font-weight: 600;font-size: .85rem;color: #889ABD">Завершен</div>
        </div>
        <div style="display: flex;align-items: center;margin-top: 16px">
          <div class="title-projects-items" style="margin-right: 8px">Срок сдачи: </div>
          <div>{{GET_PROJECT_DATA.project_deadline}}</div>
        </div>
        <div class="title-projects-items" style="margin-top: 16px;margin-bottom: 8px">Описание:</div>
        <div style="font-size: .85rem;line-height: 18px;word-break: break-all">{{GET_PROJECT_DATA.project_description}}</div>
        <div class="title-projects-items" style="margin-top: 16px">Создатель:</div>
        <div style="margin-top: 16px;display: flex;align-items: center">
          <div class="creater">{{GET_PROJECT_DATA.project_creator[0]}}</div>
          <div style="color: #0239A4">{{GET_PROJECT_DATA.project_creator}}</div>
        </div>
        <div class="title-projects-items" style="margin-top: 16px">Команда:</div>
        <div style="display: flex">
          <div
              v-for="(executer,index) in GET_ALL_USERS"
              class="executers-item"
              :style="{transform: `translateX(${-15*index}px)`,zIndex: GET_ALL_USERS.length+1-index,
                 display: index>4 ? 'none': ''}"
              :key="index"
          >{{executer.username[0]}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import tmItemTask from '../tm-item-task'
import tmControlFilters from '../tm-control-filters'

export default {
  name: "tm-project",
  components: {
    tmControlFilters,
    tmItemTask
  },
  data() {
    return {
      view: true
    }
  },
  methods: {
    getView(data) {
      this.view=data;
    }
  },
  computed: {
    ...mapGetters([
        'GET_PROJECT_DATA',
        'GET_PROJECT_TASKS',
        'GET_ALL_USERS'
    ])
  },
  destroyed() {
    this.$store.commit('getProjectNull');
  }
}
</script>

<style>
.description-of-project {
  background: #FFFFFF;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.05);
  border-radius: 14px;
  padding: 24px;
  width: 270px;
}
.adaptiv-project {
  align-items: flex-start;
  display:flex;
}
.title-for-colon-project {
  line-height: 16px;
  color: #485C83;
  display: inline-grid;
  grid-template-columns: 82px 340px 100px 82px 100px 82px 82px;
  margin-bottom: 8px;
}
.creater {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #91B6FE;
  margin-right: 8px;
}
.title-projects-items {
  color: #576F9D;
  font-weight: 600;
}
@media (max-width: 1000px) {
  .adaptiv-project {
    flex-direction: column;
  }
}
</style>