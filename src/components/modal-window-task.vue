<template>
  <div class="mask-modal-window-task">
    <div class="modal-window">
      <div style="display: flex;justify-content: space-between">
        <div style="color: #344360;margin-bottom: 8px;font-weight: 600">Задача</div>
        <div class="button-to-exit" @click="$store.commit('closeTaskWindow')">
          <div class="part-of-exit" style="transform: rotate(45deg)"></div>
          <div class="part-of-exit" style="transform: rotate(-45deg)"></div>
        </div>
      </div>
      <input type="text" class="edit-tasks-title" placeholder="Название задачи" v-model.trim="task.title">
      <div
          class="error"
          :style="{visibility: error&&((!task.title.length)||task.title.length>64) ? 'visible': 'hidden'}"
          style="margin-bottom: 11px;margin-left: 4px">{{task.title.length ? 'Превышено количество символов': 'Введите название задачи'}}
      </div>
      <div class="persons">
        <label for="move-here">
          <div class="title-for-input-mw"
               :style="{visibility: (focusExecuter||task.executer.length) ? 'visible': 'hidden',color: focusExecuter ? '#0356F6': ''}">
            Исполнитель
          </div>
          <div style="margin-right: 30px;align-self: flex-end">
            <div style="display: flex;align-items: center">
              <svg style="margin-right: 8px" width="16" height="16" viewBox="0 0 16 16" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.9841 13.0573C14.6039 12.1591 14.0521 11.3433 13.3595 10.6553C12.669 9.96524 11.851 9.41508 10.9508 9.03518C10.9427 9.03116 10.9347 9.02915 10.9266 9.02513C12.1823 8.1206 12.9987 6.64724 12.9987 4.98492C12.9987 2.23116 10.7613 0 7.99985 0C5.23839 0 3.001 2.23116 3.001 4.98492C3.001 6.64724 3.81734 8.1206 5.0731 9.02713C5.06504 9.03115 5.05698 9.03317 5.04891 9.03719C4.1459 9.41708 3.3356 9.96181 2.6402 10.6573C1.94824 11.3459 1.39654 12.1615 1.01557 13.0593C0.641306 13.9382 0.439457 14.8805 0.420949 15.8352C0.420411 15.8566 0.424184 15.878 0.432047 15.8979C0.439909 15.9179 0.451702 15.9361 0.466729 15.9515C0.481757 15.9669 0.499716 15.9791 0.519547 15.9874C0.539379 15.9957 0.560682 16 0.582202 16H1.7916C1.88029 16 1.95084 15.9296 1.95285 15.8432C1.99317 14.2915 2.61802 12.8382 3.72261 11.7367C4.86549 10.597 6.38328 9.96985 7.99985 9.96985C9.61641 9.96985 11.1342 10.597 12.2771 11.7367C13.3817 12.8382 14.0065 14.2915 14.0468 15.8432C14.0489 15.9317 14.1194 16 14.2081 16H15.4175C15.439 16 15.4603 15.9957 15.4801 15.9874C15.5 15.9791 15.5179 15.9669 15.533 15.9515C15.548 15.9361 15.5598 15.9179 15.5676 15.8979C15.5755 15.878 15.5793 15.8566 15.5787 15.8352C15.5586 14.8744 15.359 13.9397 14.9841 13.0573ZM7.99985 8.44221C7.07466 8.44221 6.20389 8.08241 5.5488 7.42915C4.89371 6.77588 4.5329 5.90754 4.5329 4.98492C4.5329 4.06231 4.89371 3.19397 5.5488 2.5407C6.20389 1.88744 7.07466 1.52764 7.99985 1.52764C8.92504 1.52764 9.7958 1.88744 10.4509 2.5407C11.106 3.19397 11.4668 4.06231 11.4668 4.98492C11.4668 5.90754 11.106 6.77588 10.4509 7.42915C9.7958 8.08241 8.92504 8.44221 7.99985 8.44221Z"
                    :fill="focusExecuter ? '#4F8AFD': '#A7B4CF'"/>
                <path d="M0.999846 14.5H14.9998V16H0.999846V14.5Z" :fill="focusExecuter ? '#4F8AFD': '#A7B4CF'"/>
              </svg>
              <div class="container-for-input-edit-task" style="position: relative">
                <input
                    type="text"
                    placeholder="Исполнитель"
                    class="input-edit"
                    id="move-here"
                    @focus="focusExecuter=true"
                    @blur="kostil"
                    style="background: white;cursor: pointer"
                    v-model.trim="task.executer">
                <div class="container-for-arr" :style="{transform: focusExecuter ? 'rotate(180deg)': ''}">
                  <div class="arrow-for-small-task"
                       style="transform: rotate(45deg);margin-right: -2px;background: #B0BCD3"></div>
                  <div class="arrow-for-small-task"
                       style="transform: rotate(-45deg);margin-left: -2px;background: #B0BCD3"></div>
                </div>
                <div class="selected-executer-menu" v-show="focusExecuter">
                  <div
                      :style="{background: item.username===task.executer ? '#D4E3FF':''}"
                      v-for="(item,index) in GET_ALL_USERS"
                      :key="index"
                      @click="task.executer=item.username;task.executer_id=item.id"
                      class="selected-executer-menu-item">
                    <div class="selected-executer-menu-item-pic-person">{{ item.username[0] }}</div>
                    <div>{{ item.username }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
        <div>
          <div style="margin: 0 25px 5px;font-size: .85rem">Создатель</div>
          <div style="display: flex">
            <svg style="margin-right: 8px" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M14.9841 13.0573C14.6039 12.1591 14.0521 11.3433 13.3595 10.6553C12.669 9.96524 11.851 9.41508 10.9508 9.03518C10.9427 9.03116 10.9347 9.02915 10.9266 9.02513C12.1823 8.1206 12.9987 6.64724 12.9987 4.98492C12.9987 2.23116 10.7613 0 7.99985 0C5.23839 0 3.001 2.23116 3.001 4.98492C3.001 6.64724 3.81734 8.1206 5.0731 9.02713C5.06504 9.03115 5.05698 9.03317 5.04891 9.03719C4.1459 9.41708 3.3356 9.96181 2.6402 10.6573C1.94824 11.3459 1.39654 12.1615 1.01557 13.0593C0.641306 13.9382 0.439457 14.8805 0.420949 15.8352C0.420411 15.8566 0.424184 15.878 0.432047 15.8979C0.439909 15.9179 0.451702 15.9361 0.466729 15.9515C0.481757 15.9669 0.499716 15.9791 0.519547 15.9874C0.539379 15.9957 0.560682 16 0.582202 16H1.7916C1.88029 16 1.95084 15.9296 1.95285 15.8432C1.99317 14.2915 2.61802 12.8382 3.72261 11.7367C4.86549 10.597 6.38328 9.96985 7.99985 9.96985C9.61641 9.96985 11.1342 10.597 12.2771 11.7367C13.3817 12.8382 14.0065 14.2915 14.0468 15.8432C14.0489 15.9317 14.1194 16 14.2081 16H15.4175C15.439 16 15.4603 15.9957 15.4801 15.9874C15.5 15.9791 15.5179 15.9669 15.533 15.9515C15.548 15.9361 15.5598 15.9179 15.5676 15.8979C15.5755 15.878 15.5793 15.8566 15.5787 15.8352C15.5586 14.8744 15.359 13.9397 14.9841 13.0573ZM7.99985 8.44221C7.07466 8.44221 6.20389 8.08241 5.5488 7.42915C4.89371 6.77588 4.5329 5.90754 4.5329 4.98492C4.5329 4.06231 4.89371 3.19397 5.5488 2.5407C6.20389 1.88744 7.07466 1.52764 7.99985 1.52764C8.92504 1.52764 9.7958 1.88744 10.4509 2.5407C11.106 3.19397 11.4668 4.06231 11.4668 4.98492C11.4668 5.90754 11.106 6.77588 10.4509 7.42915C9.7958 8.08241 8.92504 8.44221 7.99985 8.44221Z"
                  fill="#A7B4CF"/>
              <path d="M0.999846 14.5H14.9998V16H0.999846V14.5Z" fill="#A7B4CF"/>
            </svg>
            <div style="color: #10141D;">{{ task.author }}</div>
          </div>
        </div>
      </div>
      <div
          class="error"
          style="margin-bottom: 38px"
          :style="{visibility: error&&!persons.includes(this.task.executer) ? 'visible': 'hidden'}">Укажите исполнителя задачи</div>
      <div style="color: #344360;margin-bottom: 32px;font-weight: 600">Дополнительные поля (необязательные)</div>
      <div style="display: flex">
        <svg style="margin-right: 8px" width="16" height="14" viewBox="0 0 16 14" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 13C0 12.8232 0.070238 12.6537 0.195262 12.5286C0.320287 12.4036 0.489856 12.3334 0.666667 12.3334H10C10.1768 12.3334 10.3464 12.4036 10.4714 12.5286C10.5964 12.6537 10.6667 12.8232 10.6667 13C10.6667 13.1769 10.5964 13.3464 10.4714 13.4714C10.3464 13.5965 10.1768 13.6667 10 13.6667H0.666667C0.489856 13.6667 0.320287 13.5965 0.195262 13.4714C0.070238 13.3464 0 13.1769 0 13ZM0 9.00004C0 8.82323 0.070238 8.65366 0.195262 8.52864C0.320287 8.40361 0.489856 8.33337 0.666667 8.33337H15.3333C15.5101 8.33337 15.6797 8.40361 15.8047 8.52864C15.9298 8.65366 16 8.82323 16 9.00004C16 9.17685 15.9298 9.34642 15.8047 9.47145C15.6797 9.59647 15.5101 9.66671 15.3333 9.66671H0.666667C0.489856 9.66671 0.320287 9.59647 0.195262 9.47145C0.070238 9.34642 0 9.17685 0 9.00004ZM0 5.00004C0 4.82323 0.070238 4.65366 0.195262 4.52864C0.320287 4.40361 0.489856 4.33337 0.666667 4.33337H10C10.1768 4.33337 10.3464 4.40361 10.4714 4.52864C10.5964 4.65366 10.6667 4.82323 10.6667 5.00004C10.6667 5.17685 10.5964 5.34642 10.4714 5.47145C10.3464 5.59647 10.1768 5.66671 10 5.66671H0.666667C0.489856 5.66671 0.320287 5.59647 0.195262 5.47145C0.070238 5.34642 0 5.17685 0 5.00004ZM0 1.00004C0 0.82323 0.070238 0.653661 0.195262 0.528636C0.320287 0.403612 0.489856 0.333374 0.666667 0.333374H15.3333C15.5101 0.333374 15.6797 0.403612 15.8047 0.528636C15.9298 0.653661 16 0.82323 16 1.00004C16 1.17685 15.9298 1.34642 15.8047 1.47145C15.6797 1.59647 15.5101 1.66671 15.3333 1.66671H0.666667C0.489856 1.66671 0.320287 1.59647 0.195262 1.47145C0.070238 1.34642 0 1.17685 0 1.00004Z"
                fill="#A7B4CF"/>
        </svg>
        <input type="text" placeholder="Описание задачи..." class="edit-tasks-description"
               v-model.trim="task.description">
      </div>
      <div
          class="error"
          style="margin-bottom: 11px"
          :style="{visibility: task.title.length>500 ? 'visible': 'hidden'}">Превышено количество символов</div>
      <div class="title-for-input-mw"
           :style="{color: focusDeadline ? '#0356F6': '',visibility: task.deadline.length ? 'visible': 'hidden'}">
        Дедлайн
      </div>
      <div style="display: flex">
        <SingleDatePicker
            @selectDate="selectDate"
            v-show="showCalendar"
            style="position: absolute;font-size: 14px;top: 19%;left: 26%"/>
        <label style="display: flex;align-items: center;margin-right: 30px;cursor: pointer" for="label-clock-sand"
               @click="showCalendar=!showCalendar">
          <svg style="margin-right: 8px" width="10" height="16" viewBox="0 0 10 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 16C8.88 16 9.6 15.28 9.6 14.4L9.592 11.856C9.592 11.432 9.424 11.032 9.128 10.728L6.4 8L9.128 5.256C9.424 4.96 9.592 4.552 9.592 4.128L9.6 1.6C9.6 0.72 8.88 0 8 0H1.6C0.72 0 0 0.72 0 1.6V4.128C0 4.552 0.168 4.96 0.464 5.264L3.2 8L0.472 10.72C0.168 11.024 0 11.432 0 11.856V14.4C0 15.28 0.72 16 1.6 16H8ZM1.6 4.072V2.4C1.6 1.96 1.96 1.6 2.4 1.6H7.2C7.64 1.6 8 1.96 8 2.4V4.072C8 4.288 7.912 4.488 7.768 4.64L4.8 7.6L1.832 4.632C1.688 4.488 1.6 4.28 1.6 4.072Z"
                :fill="focusDeadline ? '#4F8AFD': '#A7B4CF'"/>
          </svg>
          <div class="container-for-input-edit-task" :style="{borderBottom: focusDeadline ? '1px solid #0356F6': ''}">
            <input
                id="label-clock-sand"
                disabled
                type="text"
                style="cursor:pointer"
                :placeholder="focusDeadline ? 'дд.мм.гггг': 'Дедлайн'"
                class="input-edit"
                v-model.trim="task.deadline">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M4.79999 7.19995H6.39999V8.79995H4.79999V7.19995ZM4.79999 10.4H6.39999V12H4.79999V10.4ZM7.99999 7.19995H9.59999V8.79995H7.99999V7.19995ZM7.99999 10.4H9.59999V12H7.99999V10.4ZM11.2 7.19995H12.8V8.79995H11.2V7.19995ZM11.2 10.4H12.8V12H11.2V10.4Z"
                  :fill="focusDeadline ? '#4F8AFD': '#A7B4CF'"/>
              <path
                  d="M3.19998 16H14.4C15.2824 16 16 15.2824 16 14.4V3.2C16 2.3176 15.2824 1.6 14.4 1.6H12.8V0H11.2V1.6H6.39998V0H4.79998V1.6H3.19998C2.31758 1.6 1.59998 2.3176 1.59998 3.2V14.4C1.59998 15.2824 2.31758 16 3.19998 16ZM14.4 4.8L14.4008 14.4H3.19998V4.8H14.4Z"
                  :fill="focusDeadline ? '#4F8AFD': '#A7B4CF'"/>
            </svg>
          </div>
        </label>
        <div style="display: flex;align-items: center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.12323C7.19648 2.12323 6.53472 2.39744 5.96619 2.96599C5.39752 3.53468 5.1232 4.1966 5.1232 4.99987C5.1232 5.80341 5.39752 6.46532 5.96618 7.03387C6.53499 7.60246 7.19677 7.87677 8 7.87677C8.80339 7.87677 9.46527 7.60256 10.0339 7.03389L8 2.12323ZM8 2.12323C8.80339 2.12323 9.46527 2.39744 10.0339 2.96598M8 2.12323L10.0339 2.96598M10.0339 2.96598C10.6025 3.53467 10.8768 4.19659 10.8768 4.99987M10.0339 2.96598L10.8768 4.99987M10.8768 4.99987C10.8768 5.8034 10.6025 6.46519 10.0339 7.03388L10.8768 4.99987ZM10.9343 7.93416L10.9343 7.93415C11.7399 7.12844 12.15 6.13886 12.15 4.99987C12.15 3.86127 11.74 2.87156 10.9342 2.0656L10.9342 2.06557C10.1284 1.26 9.13869 0.85 8 0.85C6.86105 0.85 5.87149 1.26 5.0658 2.06572C4.26012 2.87143 3.85 3.86114 3.85 4.99987C3.85 6.13886 4.26012 7.12857 5.0658 7.93428L5.06583 7.93431C5.87175 8.73986 6.86142 9.15 8 9.15C9.13882 9.15 10.1285 8.74 10.9343 7.93416Z" fill="#A7B4CF" stroke="#A7B4CF" stroke-width="0.3"/>
            <path d="M14.9773 12.418L14.9774 12.4181C15.0457 12.7701 15.0925 13.1049 15.1156 13.4131C15.1156 13.4132 15.1156 13.4132 15.1157 13.4133L14.9773 12.418ZM14.9773 12.418C14.908 12.0619 14.8186 11.7242 14.711 11.4144L14.711 11.4143M14.9773 12.418L14.711 11.4143M14.711 11.4143C14.5987 11.0911 14.4466 10.7726 14.2587 10.468C14.0625 10.1495 13.8309 9.87051 13.5695 9.63993C13.293 9.39597 12.9569 9.20201 12.5724 9.06148L12.5723 9.06145M14.711 11.4143L12.5723 9.06145M12.5723 9.06145C12.1861 8.92055 11.7608 8.85012 11.3091 8.85012C11.0933 8.85012 10.8966 8.93528 10.5749 9.12843L10.5748 9.12849M12.5723 9.06145L10.5748 9.12849M10.5748 9.12849C10.3784 9.24662 10.1485 9.38334 9.89172 9.53465C9.68616 9.65541 9.40094 9.77224 9.03963 9.87987L9.03956 9.87989M10.5748 9.12849L9.03956 9.87989M9.03956 9.87989C8.69404 9.983 8.34412 10.035 7.99949 10.035C7.65512 10.035 7.30519 9.983 6.95939 9.87988L6.95935 9.87987M9.03956 9.87989L6.95935 9.87987M6.95935 9.87987C6.59829 9.77232 6.31295 9.65547 6.10784 9.53473C5.8535 9.38485 5.62345 9.24813 5.42407 9.12833C5.10261 8.93517 4.90599 8.85 4.69018 8.85C4.23831 8.85 3.81305 8.92056 3.42698 9.06158C3.04271 9.20188 2.70651 9.39586 2.42975 9.64008L2.42975 9.64008M6.95935 9.87987L2.42975 9.64008M2.42975 9.64008C2.16836 9.87074 1.93676 10.1496 1.74068 10.468M2.42975 9.64008L1.74068 10.468M1.74068 10.468C1.55307 10.7726 1.40078 11.0909 1.28846 11.4145L1.28844 11.4145C1.18103 11.7243 1.09159 12.0619 1.02227 12.418L1.74068 10.468ZM13.3954 15.513L13.3954 15.513C13.708 15.2386 13.8665 14.8623 13.8666 14.3388C13.8665 14.0515 13.8561 13.7691 13.8356 13.4993L13.8347 13.4879H13.8347C13.8147 13.2285 13.7745 12.9418 13.715 12.6354C13.6558 12.3308 13.5803 12.0462 13.4911 11.7893C13.4071 11.5472 13.2918 11.3061 13.1483 11.0735L13.1483 11.0734C13.0131 10.854 12.859 10.6683 12.6912 10.5202L12.7904 10.4077L12.6912 10.5202C12.5389 10.3858 12.3434 10.2726 12.1076 10.1865C11.9032 10.112 11.6721 10.0686 11.4181 10.0589C11.3848 10.0764 11.3357 10.1037 11.2664 10.1453C11.0638 10.2672 10.837 10.402 10.5732 10.5575L10.573 10.5575C10.2687 10.7365 9.88263 10.8948 9.42781 11.0303M13.3954 15.513L9.38497 10.8866M13.3954 15.513C13.0718 15.797 12.635 15.9431 12.0398 15.9431H3.96006C3.36471 15.9431 2.92797 15.797 2.60452 15.5131C2.29181 15.2386 2.13336 14.8621 2.13336 14.3387C2.13336 14.0522 2.1436 13.7697 2.16404 13.4988L2.16405 13.4988C2.18376 13.2359 2.2242 12.9456 2.2846 12.6356L2.2846 12.6356C2.34399 12.3307 2.41933 12.0459 2.50837 11.7894M13.3954 15.513L2.50837 11.7894M9.42781 11.0303L9.38497 10.8866M9.42781 11.0303C9.42781 11.0303 9.42782 11.0303 9.42782 11.0303L9.38497 10.8866M9.42781 11.0303C8.9577 11.1705 8.47714 11.2419 7.99962 11.2419C7.5221 11.2419 7.04168 11.1705 6.57133 11.0302M9.38497 10.8866C8.92831 11.0227 8.46217 11.0919 7.99962 11.0919C7.53706 11.0919 7.07105 11.0227 6.61413 10.8865M6.57133 11.0302L6.61413 10.8865M6.57133 11.0302C6.11686 10.8949 5.73066 10.7365 5.42672 10.5578L5.42663 10.5577C5.16871 10.4058 4.93532 10.267 4.73274 10.1452L4.73271 10.1452C4.66357 10.1036 4.61444 10.0764 4.58116 10.0589M6.57133 11.0302C6.57131 11.0302 6.57129 11.0302 6.57127 11.0302L6.61413 10.8865M6.61413 10.8865L4.58116 10.0589M4.58116 10.0589C4.59359 10.0585 4.60607 10.0581 4.6186 10.0578L4.6149 9.90781M4.58116 10.0589L5.50275 10.4285C5.24517 10.2768 5.01216 10.1382 4.81001 10.0167C4.71066 9.95692 4.64934 9.92469 4.6149 9.90781M4.58116 10.0589C4.32729 10.0686 4.09613 10.112 3.89191 10.1865L3.8919 10.1865C3.65588 10.2726 3.46045 10.3857 3.30822 10.5201L3.30821 10.5201C3.14036 10.6683 2.98625 10.8541 2.85106 11.0733C2.70769 11.3061 2.59255 11.547 2.50837 11.7894M4.58116 10.0589C4.56801 10.052 4.55733 10.0466 4.54887 10.0425L4.6149 9.90781M4.6149 9.90781C4.33235 9.91477 4.07208 9.96105 3.84048 10.0456C3.59007 10.137 3.37754 10.2588 3.20894 10.4077M3.20894 10.4077C3.02868 10.5668 2.86532 10.7644 2.72334 10.9946C2.57457 11.2362 2.45462 11.4869 2.36666 11.7402C2.275 12.0043 2.19793 12.296 2.13737 12.6069L3.20894 10.4077ZM3.20894 10.4077L2.50837 11.7894M1.02227 12.418C0.95373 12.7697 0.907132 13.1046 0.883967 13.4136L1.02227 12.418Z" fill="#A7B4CF" stroke="#A7B4CF" stroke-width="0.3"/>
          </svg>
          <div style="margin: 0 12px 0 16px">Личная</div>
          <div
              class="container-for-change-type"
              @click="task.type=!task.type"
              :style="{border: task.type ? ' 1px solid #4F8AFD': ''}">
            <div
                class="change-type"
                style="margin-right: 2px"
                :style="{visibility: !task.type ? 'visible': 'hidden'}">
            </div>
            <div
                class="change-type"
                style="background: #4F8AFD"
                :style="{visibility: task.type ? 'visible': 'hidden'}">
            </div>
          </div>
        </div>
      </div>
<!--      <div class="error" style="margin-bottom: 11px">Дата введена некорректно</div>-->
      <div class="edit-tasks-time">
        <div>
          <div class="title-for-input-mw"
               :style="{color: focusTime ? '#0356F6': '',visibility: (focusTime||task.time.length) ? 'visible': 'hidden'}">
            Исходная оценка
            времени
          </div>
          <label style="display: flex;align-items: center;cursor: pointer" for="label-time">
            <svg style="margin-right: 8px" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                    d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM8 14.4C6.7342 14.4 5.49683 14.0246 4.44435 13.3214C3.39188 12.6182 2.57158 11.6186 2.08717 10.4492C1.60277 9.27973 1.47603 7.9929 1.72298 6.75142C1.96992 5.50994 2.57946 4.36957 3.47452 3.47452C4.36958 2.57946 5.50995 1.96992 6.75143 1.72297C7.9929 1.47603 9.27973 1.60277 10.4492 2.08717C11.6186 2.57157 12.6182 3.39188 13.3214 4.44435C14.0246 5.49683 14.4 6.7342 14.4 8C14.4 9.69739 13.7257 11.3253 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8 14.4Z"
                    :fill="focusTime ? '#4F8AFD': '#A7B4CF'"/>
                <path
                    d="M11.2 7.2H8.80001V4.8C8.80001 4.58783 8.71573 4.38434 8.5657 4.23431C8.41567 4.08429 8.21219 4 8.00001 4C7.78784 4 7.58436 4.08429 7.43433 4.23431C7.2843 4.38434 7.20001 4.58783 7.20001 4.8V8C7.20001 8.21217 7.2843 8.41566 7.43433 8.56569C7.58436 8.71571 7.78784 8.8 8.00001 8.8H11.2C11.4122 8.8 11.6157 8.71571 11.7657 8.56569C11.9157 8.41566 12 8.21217 12 8C12 7.78783 11.9157 7.58434 11.7657 7.43431C11.6157 7.28429 11.4122 7.2 11.2 7.2Z"
                    :fill="focusTime ? '#4F8AFD': '#A7B4CF'"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="container-for-input-edit-task" :style="{borderBottom: focusTime ? '1px solid #0356F6': ''}">
              <input
                  id="label-time"
                  type="text"
                  :placeholder="focusTime ? 'чч:мм': 'Исходная оценка времени'"
                  class="input-edit"
                  v-model.trim="task.time"
                  @focus="focusTime=true"
                  @blur="focusTime=false">
            </div>
          </label>
        </div>
        <div>
          <div class="title-for-input-mw"
               :style="{color: focusTimeF ? '#0356F6': '',visibility: (focusTimeF||task.timeF.length) ? 'visible': 'hidden'}">
            Фактичекое
            время
          </div>
          <label style="display: flex;align-items: center;cursor: pointer" for="label-timeF">
            <svg style="margin-right: 8px" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                    d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM8 14.4C6.7342 14.4 5.49683 14.0246 4.44435 13.3214C3.39188 12.6182 2.57158 11.6186 2.08717 10.4492C1.60277 9.27973 1.47603 7.9929 1.72298 6.75142C1.96992 5.50994 2.57946 4.36957 3.47452 3.47452C4.36958 2.57946 5.50995 1.96992 6.75143 1.72297C7.9929 1.47603 9.27973 1.60277 10.4492 2.08717C11.6186 2.57157 12.6182 3.39188 13.3214 4.44435C14.0246 5.49683 14.4 6.7342 14.4 8C14.4 9.69739 13.7257 11.3253 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8 14.4Z"
                    :fill="focusTimeF ? '#4F8AFD': '#A7B4CF'"/>
                <path
                    d="M11.2 7.2H8.80001V4.8C8.80001 4.58783 8.71573 4.38434 8.5657 4.23431C8.41567 4.08429 8.21219 4 8.00001 4C7.78784 4 7.58436 4.08429 7.43433 4.23431C7.2843 4.38434 7.20001 4.58783 7.20001 4.8V8C7.20001 8.21217 7.2843 8.41566 7.43433 8.56569C7.58436 8.71571 7.78784 8.8 8.00001 8.8H11.2C11.4122 8.8 11.6157 8.71571 11.7657 8.56569C11.9157 8.41566 12 8.21217 12 8C12 7.78783 11.9157 7.58434 11.7657 7.43431C11.6157 7.28429 11.4122 7.2 11.2 7.2Z"
                    :fill="focusTimeF ? '#4F8AFD': '#A7B4CF'"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="container-for-input-edit-task" :style="{borderBottom: focusTimeF ? '1px solid #0356F6': ''}">
              <input
                  id="label-timeF"
                  type="text"
                  :placeholder="focusTimeF ? 'чч:мм': 'Фактическое время'"
                  class="input-edit"
                  v-model.trim="task.timeF"
                  @focus="focusTimeF=true"
                  @blur="focusTimeF=false">
            </div>
          </label>
        </div>
      </div>
      <div style="display: flex;margin-bottom: 30px">
        <div
            class="error"
            style="width: 49%"
            :style="{visibility: !this.checkOnTime(this.task.time)&&error ? 'visible': 'hidden'}"
        >Время введено некорректно
        </div>
        <div
            class="error"
            :style="{visibility: ((!this.checkOnTime(this.task.timeF))||(!this.task.time&&this.task.timeF))&&error ? 'visible': 'hidden'}"
        >{{!this.task.time ? 'Нужна исходная оценка': 'Время введено некорректно'}}
        </div>
      </div>
      <div class="tasks-differently">
        <svg style="margin-right: 12px" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M16 15.2728H11.6364V1.09094H16V15.2728ZM12.7273 14.1819H14.9091V2.18185H12.7273V14.1819Z"
                fill="#A7B4CF"/>
          <path d="M10.1818 15.2728H5.81818V5.45459H10.1818V15.2728ZM6.90909 14.1819H9.0909V6.5455H6.90909V14.1819Z"
                fill="#A7B4CF"/>
          <path d="M4.36364 15.2727H0V8.72729H4.36364V15.2727Z" fill="#A7B4CF"/>
        </svg>
        <div style="color: #889ABD;margin-right: 16px">Сложность</div>
        <div
            class="tasks-differently-item"
            style="background: #B9ECB5;border-radius: 50px 0 0 50px"
            @click="showOnlyThis2(0)"
            :style="{background: easy ? '#A7D4A3': '#B9ECB5',
                       border: easy ? '3px solid #E5E5E5': ''}"
        >Легкая
        </div>
        <div
            class="tasks-differently-item"
            style="background: #F1EAA5"
            @click="showOnlyThis2(1)"
            :style="{background: normal ? '#D9D395': '#F1EAA5',
                       border: normal ? '3px solid #E5E5E5': ''}"
        >Средняя
        </div>
        <div
            class="tasks-differently-item"
            style="background: #F3B6B8;border-radius: 0 50px 50px 0"
            @click="showOnlyThis2(2)"
            :style="{background: hard ? '#DBA4A6': '#F3B6B8',
                       border: hard ? '3px solid #E5E5E5': ''}"
        >Сложная
        </div>
      </div>
      <div style="display: flex;align-items: center"
           :style="{justifyContent: !Number.isNaN(task.id) ? 'space-between': 'center'}">
        <div style="display: flex;cursor: pointer" v-show="!Number.isNaN(task.id)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.99166 1.44H4.83333C4.92041 1.44 4.99166 1.368 4.99166 1.28V1.44H11.0083V1.28C11.0083 1.368 11.0796 1.44 11.1667 1.44H11.0083V2.88H12.4333V1.28C12.4333 0.574 11.8653 0 11.1667 0H4.83333C4.13468 0 3.56666 0.574 3.56666 1.28V2.88H4.99166V1.44ZM14.9667 2.88H1.03333C0.683015 2.88 0.399994 3.166 0.399994 3.52V4.16C0.399994 4.248 0.471244 4.32 0.558327 4.32H1.75374L2.2426 14.78C2.27426 15.462 2.83239 16 3.50729 16H12.4927C13.1696 16 13.7257 15.464 13.7574 14.78L14.2462 4.32H15.4417C15.5287 4.32 15.6 4.248 15.6 4.16V3.52C15.6 3.166 15.317 2.88 14.9667 2.88ZM12.3403 14.56H3.65968L3.18072 4.32H12.8193L12.3403 14.56Z"
                fill="#EC1B1B"/>
            <path
                d="M5.51967 7.7891C5.21526 7.48148 5.21526 6.98275 5.51967 6.67513C5.82408 6.36752 6.31762 6.36752 6.62203 6.67513L10.4803 10.574C10.7847 10.8816 10.7847 11.3804 10.4803 11.688C10.1759 11.9956 9.68235 11.9956 9.37794 11.688L5.51967 7.7891Z"
                fill="#EC1B1B"/>
            <path
                d="M10.4803 7.7891C10.7847 7.48148 10.7847 6.98275 10.4803 6.67513C10.1759 6.36752 9.68236 6.36752 9.37795 6.67513L5.51969 10.574C5.21528 10.8816 5.21528 11.3804 5.51969 11.688C5.8241 11.9956 6.31764 11.9956 6.62205 11.688L10.4803 7.7891Z"
                fill="#EC1B1B"/>
          </svg>
          <span
              style="margin-left: 8px"
              @click="deletingSubtask=true"
              v-show="!deletingSubtask"
              class="only-for-hover1"
          >Удалить
         </span>
          <div v-show="deletingSubtask" style="display: flex;margin-left: 12px">
            <div style="color: #10141D">Вы точно хотите удалить задачу?</div>
            <div @click="deleteTask(task.id)" class="only-for-hover1">Удалить</div>
            <div @click="deletingSubtask=false" class="only-for-hover2">Назад</div>
          </div>
        </div>
        <div class="save-edits" @click="saveTask">
          <svg style="margin-right: 4px" width="12" height="12" viewBox="0 0 12 12" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                  d="M0.193334 4.19333L4.19333 0.193333C4.25477 0.133366 4.3272 0.0858287 4.40667 0.0533333C4.48932 0.0197446 4.57746 0.00166539 4.66667 0H10C10.5304 0 11.0391 0.210714 11.4142 0.585787C11.7893 0.960859 12 1.46957 12 2V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H2C1.46957 12 0.960858 11.7893 0.585786 11.4142C0.210713 11.0391 0 10.5304 0 10V4.66667C-0.000507355 4.57893 0.0163088 4.49195 0.0494852 4.41073C0.0826616 4.3295 0.131546 4.25563 0.193334 4.19333ZM8 1.33333H5.33333V2.66667H8V1.33333ZM4 10.6667H8V8.66667C8 8.48986 7.92976 8.32029 7.80474 8.19526C7.67971 8.07024 7.51014 8 7.33333 8H4.66667C4.48986 8 4.32029 8.07024 4.19526 8.19526C4.07024 8.32029 4 8.48986 4 8.66667V10.6667ZM1.33333 10C1.33333 10.1768 1.40357 10.3464 1.52859 10.4714C1.65362 10.5964 1.82319 10.6667 2 10.6667H2.66667V8.66667C2.66667 8.13623 2.87738 7.62753 3.25245 7.25245C3.62753 6.87738 4.13623 6.66667 4.66667 6.66667H7.33333C7.86377 6.66667 8.37247 6.87738 8.74755 7.25245C9.12262 7.62753 9.33333 8.13623 9.33333 8.66667V10.6667H10C10.1768 10.6667 10.3464 10.5964 10.4714 10.4714C10.5964 10.3464 10.6667 10.1768 10.6667 10V2C10.6667 1.82319 10.5964 1.65362 10.4714 1.5286C10.3464 1.40357 10.1768 1.33333 10 1.33333H9.33333V3.33333C9.33333 3.51014 9.2631 3.67971 9.13807 3.80474C9.01305 3.92976 8.84348 4 8.66667 4H4.66667C4.48986 4 4.32029 3.92976 4.19526 3.80474C4.07024 3.67971 4 3.51014 4 3.33333V2.27333L1.33333 4.94V10Z"
                  fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="12" height="12" fill="white" transform="matrix(-1 0 0 1 12 0)"/>
              </clipPath>
            </defs>
          </svg>
          <span style="color: #FCFCFD" v-show="!deletingSubtask">Сохранить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "modal-window-task",
  components: {
    SingleDatePicker
  },
  data() {
    return {
      task: {
        status: 1,
        type: false,
        timeF: '',
        title: '',
        executer: this.$store.state.user.user.username,
        executer_id: this.$store.state.user.id,
        deadline: '',
        difficulty: 1,
        time: '',
        author: '',
        description: '',
        id: NaN
      },
      easy: false,
      normal: false,
      hard: false,
      persons: [],
      focusTime: false,
      focusTimeF: false,
      focusDeadline: false,
      focusExecuter: false,
      deletingSubtask: false,
      showCalendar: false,
      error: false,
      indexUser: 0
    }
  },
  methods: {
    saveTask() {
      if ((this.task.title&&this.task.title.length<65) &&
          this.persons.includes(this.task.executer) &&
          this.checkOnTime(this.task.time) &&
          this.checkOnTime(this.task.timeF) &&
          this.task.description.length<=500) {
        if((!this.task.time.length)&&(this.task.timeF.length)) {
          this.error=true;
          return;
        }
        let newTask = {
          status: this.task.status,
          type: this.task.type,
          title: this.task.title,
          executer: this.task.executer,
          executer_id: this.task.executer_id,
          author: this.task.author,
          deadline: this.task.deadline,
          difficulty: this.task.difficulty,
          time: this.task.time,
          timeF: this.task.timeF,
          description: this.task.description,
          project_id: null,
          subtasks: []
        };
        if (Number.isNaN(this.task.id)) this.$store.dispatch('createNewTask', newTask);
        else {
          console.log(1)
          this.$store.dispatch('editTask', this.task);
        }
        this.$store.commit('closeTaskWindow');
      }
      else this.error=true;
    },
    showOnlyThis2(index) {
      this.easy = false;
      this.normal = false;
      this.hard = false;
      if (index === 0) this.easy = true;
      if (index === 1) this.normal = true;
      if (index === 2) this.hard = true;
      this.task.difficulty = index + 1;
    },
    selectDate(data) {
      this.task.deadline = (String(data.date).length === 1 ? '0' + data.date : data.date) + '.' + (String(data.month).length === 1 ? '0' + data.month : data.month) + '.' + data.year;
      this.showCalendar = false;
    },
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
      this.$store.commit('closeTaskWindow');
    },
    kostil() {
      setTimeout(() => {
        this.focusExecuter = false;
      }, 500)
    },
    checkOnTime(time) {
      if(time.length===5) {
        if (+(time.slice(0, 2)) > 23 || +(time.slice(0, 2)) < 0) return false;
        if (+(time.slice(3, 5)) > 59 || +(time.slice(3, 5)) < 0) return false;
        return true;
      }
      if(time.length===0)return true;
      else return false;
    },
    ...mapActions([
        'GET_USERS'
    ])
  },
  computed: {
    ...mapGetters([
      'GET_TASK_DATA',
      'GET_ALL_USERS'
    ])
  },
  mounted() {
    if (!this.GET_TASK_DATA.kostil) {
      this.task = JSON.stringify(this.GET_TASK_DATA);
      this.task = JSON.parse(this.task);
    }
    else {
      this.task.author = this.$store.state.user.user.username ? this.$store.state.user.user.username : this.$store.state.user.user.email;
    }
    this.easy = this.task.difficulty === 1;
    this.normal = this.task.difficulty === 2;
    this.hard = this.task.difficulty === 3;
    this.persons=this.GET_ALL_USERS.map(val => {
      return val.username;
    })
    this.GET_USERS();
  },
  watch: {
    'task.time'(newVal,oldVal) {
      for (let i = 0; i < this.task.time.length; i++) {
        if (i !== 2) {
          if (!/[0-9]/.test(newVal[i])) {
            this.task.time = oldVal;
            break;
          }
        }
        else {
          if (!(newVal[i] === ':')) {
            this.task.time = oldVal;
            break;
          }
        }
      }
      if (newVal > oldVal) {
        if (this.task.time.length === 2) this.task.time += ':';
        if (this.task.time.length >= 5) this.task.time = this.task.time.slice(0, 5);
      }
      if (newVal < oldVal) {
        if (newVal.length===2) this.task.time = this.task.time.slice(0, newVal.length - 1);
      }
    },
    'task.timeF'(newVal,oldVal) {
      for (let i = 0; i < this.task.timeF.length; i++) {
        if (i !== 2) {
          if (!/[0-9]/.test(newVal[i])) {
            this.task.timeF = oldVal;
            break;
          }
        } else {
          if (!(newVal[i] === ':')) {
            this.task.timeF = oldVal;
            break;
          }
        }
      }
      if (newVal > oldVal) {
        if (this.task.timeF.length === 2) this.task.timeF += ':';
        if (this.task.timeF.length >= 5) this.task.timeF = this.task.timeF.slice(0, 5);
      }
      if (newVal < oldVal) {
        if (newVal.length===2) this.task.timeF = this.task.timeF.slice(0, newVal.length - 1);
      }
    }
  }
  // watch: {
  //   'task.deadline'(newVal, oldVal) {
  //     for (let i = 0; i < this.task.deadline.length; i++) {
  //       if (i !== 2 && i !== 5) {
  //         if (!/^[0-9]+$/.test(newVal[i])) {
  //           this.task.deadline = oldVal;
  //           break;
  //         }
  //       } else {
  //         if (!(newVal[i] === '.')) {
  //           this.task.deadline = oldVal;
  //           break;
  //         }
  //       }
  //     }
  //     if (newVal > oldVal) {
  //       if (this.task.deadline.length === 2 || this.task.deadline.length === 5) this.task.deadline += '.';
  //       if (this.task.deadline.length >= 11) this.task.deadline = this.task.deadline.slice(0, 10);
  //     }
  //     if (newVal < oldVal) {
  //       if (newVal[newVal.length - 1] === '.') this.task.deadline = this.task.deadline.slice(0, newVal.length - 2);
  //     }
  //     // if(!(/^[0-9]+$/.test(newVal[newVal.length-1]))) {
  //     //   this.task.deadline=oldVal;
  //     // }
  //     // if(newVal.length>2&&newVal[2]!=='.') {
  //     //   this.task.deadline=oldVal;
  //     //   return;
  //     // }
  //     // if(newVal.length>5&&newVal[5]!=='.') {
  //     //   this.task.deadline=oldVal;
  //     //   return;
  //     // }
  //     // if(newVal>oldVal) {
  //     //   if(this.task.deadline.length===2||this.task.deadline.length===5)this.task.deadline+='.';
  //     //   if(this.task.deadline.length>=11)this.task.deadline=this.task.deadline.slice(0,10);
  //     // }
  //     // if(newVal<oldVal) {
  //     //   if(newVal[newVal.length-1]==='.')this.task.deadline=this.task.deadline.slice(0,newVal.length-2);
  //     // }
  //   }
  // }
}
</script>

<style>
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';

.mask-modal-window-task {
  color: #889ABD;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-window {
  position: relative;
  width: 474px;
  background: white;
  padding: 40px 50px;
  box-shadow: 0 4px 25px rgba(2, 57, 164, 0.1);
  border-radius: 14px;
}

.button-to-exit {
  width: 12px;
  height: 12px;
  margin-top: -12px;
  margin-right: -24px;
  cursor: pointer;
}

.part-of-exit {
  position: absolute;
  background: #B0BCD3;
  width: 16px;
  height: 2px;
}

.edit-tasks-title {
  width: calc(100% - 4px);
  padding: 4px 2px;
  font-size: 1.75rem;
  font-weight: 600;
  color: #10141D;
  border-bottom: 1px solid #889ABD;
}

.persons {
  display: flex;
  align-items: center;
}

.selected-executer-menu {
  margin-left: -4px;
  margin-top: 22px;
  position: absolute;
  width: 198px;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.2);
  border-radius: 5px;
  background: white;
}

.selected-executer-menu-item {
  height: 52px;
  display: flex;
  align-items: center;
  color: #10141D;
  cursor: pointer;
}

.selected-executer-menu-item:hover {
  background: #EDF3FF;
}

.selected-executer-menu-item-pic-person {
  color: #FCFCFD;
  font-size: 1.15rem;
  background: #91B6FE;
  margin-left: 16px;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-for-input-edit-task {
  display: flex;
  border-bottom: 1px solid #889ABD;
  padding: 7px 0 7px 4px;
}

.input-edit {
  font-size: 1rem;
  background: white;
  color: #10141D;
}

.edit-tasks-description {
  width: calc(100% - 4px);
  padding: 0 2px 7px;
  font-size: 1rem;
  color: #10141D;
  border-bottom: 1px solid #889ABD;
}

.edit-tasks-time {
  margin-top: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tasks-differently {
  display: flex;
  align-items: center;
  color: #10141D;
  font-size: 0.85rem;
  margin-bottom: 56px;
}

.container-for-change-type {
  cursor: pointer;
  border: 1px solid #889ABD;
  padding: 3px;
  display: flex;
  border-radius: 50px;
}

.change-type {
  background: #889ABD;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.13);
  border-radius: 50px;
  width: 14px;
  height: 14px;
}

.tasks-differently-item {
  cursor: pointer;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border: 3px solid white;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.13);
  margin-right: 2px;
}

.save-edits {
  cursor: pointer;
  text-align: center;
  background: #4F8AFD;
  border-radius: 22px;
  padding: 8px 24px;
}

.title-for-input-mw {
  font-size: .85rem;
  color: #889ABD;
  margin-left: 28px;
}

.container-for-arr {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.input-edit::placeholder {
  color: #889ABD;
}

.edit-tasks-description::placeholder {
  color: #889ABD;
}

.edit-tasks-title::placeholder {
  color: #889ABD;
}
</style>