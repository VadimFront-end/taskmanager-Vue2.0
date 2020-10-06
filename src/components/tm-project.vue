<template>
  <div class="tm-container-for-content-page">
    <div class="title-main-page">Проект:</div>
    <tmControlFilters @view="getView"/>
    <div class="title-for-colon-project">
      <div style="margin-left: 15px">Cтатус</div>
      <div style="margin-left: 15px">Название задачи</div>
      <div style="margin: auto">Исполнитель</div>
      <div style="margin: auto">Срок</div>
      <div style="margin: auto" class="mobile">Сложность</div>
      <div style="margin: auto" class="mobile">Время</div>
    </div>
    <div class="adaptiv-project">
      <div style="width: 90%">
        <tmItemTask
            v-for="(task,index) in FILTERED"
            :key="index"
            :isProject="true"
            :index="index"
            :lengthArray="FILTERED.length"
            :task="task"
            :style="{borderRadius: (index===FILTERED.length-1)&&(index===0) ? '14px': index===FILTERED.length-1 ? '0 0 14px 14px': index===0 ? '14px 14px 0 0' : ''}"/>
      </div>
      <div class="description-of-project">
        <div style="display: flex;align-items: center">
          <div style="color: #576F9D;margin-right: 9px">Статус:</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0625 0C7.403 0 6.84837 0.456437 6.69719 1.06991C5.17119 1.36944 3.77909 2.17022 2.74581 3.351C1.62 4.6375 1 6.28856 1 8C1 8.25887 1.20987 8.46875 1.46875 8.46875C1.72763 8.46875 1.9375 8.25887 1.9375 8C1.9375 6.51572 2.47513 5.08394 3.45134 3.96837C4.32819 2.96634 5.50234 2.27956 6.79138 2.00706C7.01713 2.48272 7.50194 2.8125 8.0625 2.8125C8.83791 2.8125 9.46875 2.18166 9.46875 1.40625C9.46875 0.630844 8.83791 0 8.0625 0Z" fill="#2CCF11"/>
            <path d="M12.0177 7.14897C11.9043 7.07012 11.6887 6.94547 11.5349 6.87906L11.2922 6.29313C11.3521 6.14213 11.4176 5.90053 11.4427 5.76094C11.4698 5.60988 11.4213 5.45509 11.3128 5.34656L10.6535 4.68725C10.5449 4.57869 10.3901 4.53016 10.2391 4.55734C10.1016 4.58206 9.86159 4.64647 9.70691 4.70784L9.12097 4.46513C9.05672 4.31631 8.93219 4.09897 8.85106 3.98237C8.76344 3.85637 8.61969 3.78125 8.46622 3.78125H7.53381C7.38034 3.78125 7.23659 3.85637 7.14897 3.98237C7.07012 4.09572 6.94547 4.31138 6.87906 4.46513L6.29313 4.70784C6.14213 4.64794 5.90053 4.58244 5.76094 4.55734C5.60997 4.53025 5.45509 4.57875 5.34656 4.68725L4.68725 5.34656C4.57872 5.45509 4.53019 5.60988 4.55734 5.76094C4.58206 5.89841 4.64647 6.13844 4.70784 6.29313L4.46513 6.87906C4.31631 6.94331 4.09897 7.06784 3.98237 7.14897C3.85637 7.23659 3.78125 7.38034 3.78125 7.53381V8.46622C3.78125 8.61969 3.85637 8.76344 3.98237 8.85106C4.09572 8.92991 4.31138 9.05456 4.46513 9.12097L4.70784 9.70691C4.64794 9.85791 4.58244 10.0995 4.55734 10.2391C4.53019 10.3902 4.57872 10.5449 4.68725 10.6535L5.34656 11.3128C5.45506 11.4213 5.60978 11.4698 5.76094 11.4427C5.89841 11.418 6.13844 11.3536 6.29313 11.2922L6.87906 11.5349C6.94331 11.6837 7.06784 11.9011 7.14897 12.0177C7.23659 12.1437 7.38034 12.2188 7.53381 12.2188H8.46622C8.61969 12.2188 8.76344 12.1437 8.85106 12.0177C8.92991 11.9043 9.05456 11.6887 9.12097 11.5349L9.70691 11.2922C9.85791 11.3521 10.0995 11.4176 10.2391 11.4427C10.3902 11.4698 10.5449 11.4213 10.6535 11.3128L11.3128 10.6535C11.4213 10.5449 11.4698 10.3902 11.4427 10.2391C11.418 10.1016 11.3536 9.86159 11.2922 9.70691L11.5349 9.12097C11.6837 9.05672 11.9011 8.93219 12.0177 8.85106C12.1437 8.76344 12.2188 8.61969 12.2188 8.46622V7.53381C12.2188 7.38034 12.1437 7.23659 12.0177 7.14897ZM8 9.87506C6.96613 9.87506 6.125 9.03394 6.125 8.00006C6.125 6.96619 6.96613 6.12506 8 6.12506C9.03387 6.12506 9.875 6.96619 9.875 8.00006C9.875 9.03394 9.03387 9.87506 8 9.87506Z" fill="#2CCF11"/>
            <path d="M14.53 7.53125C14.2711 7.53125 14.0612 7.74112 14.0612 8C14.0612 9.48428 13.5236 10.9161 12.5474 12.0316C11.6705 13.0337 10.4964 13.7204 9.20734 13.9929C8.98159 13.5173 8.49678 13.1875 7.93622 13.1875C7.16081 13.1875 6.52997 13.8183 6.52997 14.5938C6.52997 15.3692 7.16081 16 7.93622 16C8.59572 16 9.15034 15.5436 9.30153 14.9301C10.8275 14.6306 12.2196 13.8298 13.2529 12.649C14.3787 11.3625 14.9987 9.71144 14.9987 8C14.9987 7.74112 14.7888 7.53125 14.53 7.53125Z" fill="#2CCF11"/>
          </svg>
          <div style="margin-left: 5px;font-weight: 500;font-size: .85rem">Активный</div>
        </div>
        <div style="display: flex;align-items: center;margin-top: 16px">
          <div style="color: #576F9D;margin-right: 8px">Срок сдачи:</div>
          <div>20 c</div>
        </div>
        <div style="margin-top: 16px;color: #576F9D;margin-bottom: 8px">Описание:</div>
        <div style="font-size: .85rem;line-height: 18px">С другой стороны реализация намеченных плановых заданий позволяет оценить значение систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке дальнейших направлений развития. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке модели развития. Задача организации, в особенности же консультация с широким.</div>
        <div style="color: #576F9D;margin-top: 16px">Создатель:</div>
        <div style="margin-top: 16px;display: flex;align-items: center">
          <div class="creater"></div>
          <div style="color: #0239A4">Иван Иванов</div>
        </div>
        <div style="color: #576F9D;margin-top: 16px">Команда:</div>
        <div style="margin-top: 16px" class="creater"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import tmItemTask from '../components/tm-item-task'
import tmControlFilters from '../components/tm-control-filters'

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
        'FILTERED'
    ])
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #91B6FE;
  margin-right: 8px;
}
@media (max-width: 1000px) {
  .adaptiv-project {
    flex-direction: column;
  }
}
</style>