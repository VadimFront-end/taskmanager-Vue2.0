<template>
  <div class="mask-modal-window-task">
    <div class="modal-window">
      <div style="display: flex;justify-content: space-between">
        <div style="color: #344360;margin-bottom: 8px;font-weight: 600">Проект</div>
        <div class="button-to-exit" @click="$store.commit('isShowProjectWindow')">
          <div class="part-of-exit" style="transform: rotate(45deg)"></div>
          <div class="part-of-exit" style="transform: rotate(-45deg)"></div>
        </div>
      </div>
      <input type="text" class="edit-tasks-title" placeholder="Название проекта" v-model.trim="project.project_name">
      <div
          class="error"
          :style="{visibility: error&&((!project.project_name.length)||project.project_name.length>64) ? 'visible': 'hidden'}"
          style="margin-bottom: 36px;margin-left: 4px">{{project.project_name.length ? 'Превышено количество символов': 'Введите название проекта'}}
      </div>
      <div class="select-status-project">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M14.8872 8.9201C14.4209 8.9201 14.0086 9.22063 13.8648 9.66436C13.0872 12.0662 10.8328 13.8089 8.17514 13.8089C4.87575 13.8089 2.19136 11.1242 2.19136 7.82459C2.19136 5.17787 3.91964 2.93063 6.30676 2.14429C6.76768 1.99242 7.07997 1.56146 7.07997 1.07561C7.07997 0.731477 6.9153 0.407963 6.63722 0.205594C6.35914 0.00291635 6.00083 -0.0542803 5.6736 0.0510819C2.38655 1.10968 0.00100708 4.19059 0.00100708 7.8247C0.00100708 12.3323 3.66778 15.9993 8.17512 15.9993C11.7947 15.9993 14.8652 13.6325 15.9353 10.3663C16.0453 10.0304 15.9876 9.66228 15.7802 9.37599C15.5732 9.08986 15.2412 8.9201 14.8872 8.9201Z" fill="#A7B4CF"/>
            <path d="M10.0126 2.13553C11.8296 2.72376 13.2675 4.15843 13.86 5.97355C14.0076 6.42542 14.4285 6.73053 14.9039 6.73053H14.9264C15.2697 6.73053 15.5922 6.5664 15.7943 6.28911C15.9959 6.01184 16.0536 5.65434 15.9483 5.32765C15.1468 2.83522 13.1795 0.863868 10.6892 0.056448C10.3592 -0.0504615 9.99717 0.00698831 9.71648 0.21096C9.43573 0.415214 9.26942 0.741457 9.26942 1.08869V1.11252C9.26931 1.57831 9.56978 1.99193 10.0126 2.13553Z" fill="#A7B4CF"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div class="container-for-filters-for-projects">
          <div style="color: #889ABD;margin: 0 16px 0 12px">Статус</div>
          <div
              @click="project.project_status='1'"
              class="filter-for-projects"
              style="border-radius: 50px 0 0 50px"
              :style="{background: project.project_status==='1' ? '#4F8AFD': '',
                       color: project.project_status!=='1' ? '#2CCF11': '#FFFFFF'}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.05469 0C6.47762 0 5.99233 0.399383 5.86004 0.936168C4.52479 1.19826 3.30671 1.89894 2.40259 2.93213C1.4175 4.05781 0.875 5.50249 0.875 7C0.875 7.22652 1.05864 7.41016 1.28516 7.41016C1.51167 7.41016 1.69531 7.22652 1.69531 7C1.69531 5.70125 2.16573 4.44845 3.01993 3.47233C3.78716 2.59555 4.81455 1.99462 5.94245 1.75618C6.13998 2.17238 6.5642 2.46094 7.05469 2.46094C7.73317 2.46094 8.28516 1.90895 8.28516 1.23047C8.28516 0.551988 7.73317 0 7.05469 0Z" :fill="project.project_status==='1' ? '#FFFFFF': '#2CCF11'"/>
              <path d="M10.5154 6.25535C10.4163 6.18636 10.2276 6.07729 10.093 6.01918L9.88066 5.50648C9.93308 5.37436 9.99039 5.16297 10.0124 5.04082C10.0361 4.90864 9.99365 4.77321 9.89868 4.67824L9.32179 4.10134C9.22682 4.00635 9.09136 3.96389 8.95921 3.98768C8.83892 4.0093 8.62889 4.06566 8.49354 4.11936L7.98085 3.90698C7.92463 3.77677 7.81566 3.5866 7.74468 3.48458C7.66801 3.37433 7.54223 3.30859 7.40794 3.30859H6.59209C6.4578 3.30859 6.33202 3.37433 6.25535 3.48458C6.18636 3.58375 6.07729 3.77245 6.01918 3.90698L5.50648 4.11936C5.37436 4.06695 5.16297 4.00963 5.04082 3.98768C4.90872 3.96397 4.77321 4.00641 4.67824 4.10134L4.10134 4.67824C4.00638 4.77321 3.96391 4.90864 3.98768 5.04082C4.0093 5.16111 4.06566 5.37113 4.11936 5.50648L3.90698 6.01918C3.77677 6.0754 3.5866 6.18436 3.48458 6.25535C3.37433 6.33202 3.30859 6.4578 3.30859 6.59209V7.40794C3.30859 7.54223 3.37433 7.66801 3.48458 7.74468C3.58375 7.81367 3.77245 7.92274 3.90698 7.98085L4.11936 8.49354C4.06695 8.62567 4.00963 8.83706 3.98768 8.95921C3.96391 9.09139 4.00638 9.22682 4.10134 9.32178L4.67824 9.89868C4.77318 9.99365 4.90856 10.0361 5.04082 10.0124C5.16111 9.99072 5.37113 9.93437 5.50648 9.88066L6.01918 10.093C6.0754 10.2233 6.18436 10.4134 6.25535 10.5154C6.33202 10.6257 6.4578 10.6914 6.59209 10.6914H7.40794C7.54223 10.6914 7.66801 10.6257 7.74468 10.5154C7.81367 10.4163 7.92274 10.2276 7.98085 10.093L8.49354 9.88066C8.62567 9.93308 8.83706 9.99039 8.95921 10.0124C9.09139 10.0361 9.22682 9.99365 9.32179 9.89868L9.89868 9.32178C9.99365 9.22682 10.0361 9.09139 10.0124 8.95921C9.99072 8.83892 9.93437 8.62889 9.88066 8.49354L10.093 7.98085C10.2233 7.92463 10.4134 7.81566 10.5154 7.74468C10.6257 7.66801 10.6914 7.54223 10.6914 7.40794V6.59209C10.6914 6.4578 10.6257 6.33202 10.5154 6.25535ZM7 8.64068C6.09536 8.64068 5.35938 7.9047 5.35938 7.00005C5.35938 6.09541 6.09536 5.35943 7 5.35943C7.90464 5.35943 8.64062 6.09541 8.64062 7.00005C8.64062 7.9047 7.90464 8.64068 7 8.64068Z" :fill="project.project_status==='1' ? '#FFFFFF': '#2CCF11'"/>
              <path d="M12.7137 6.58984C12.4872 6.58984 12.3036 6.77348 12.3036 7C12.3036 8.29875 11.8332 9.55155 10.979 10.5277C10.2117 11.4044 9.18435 12.0054 8.05645 12.2438C7.85892 11.8276 7.43471 11.5391 6.94421 11.5391C6.26573 11.5391 5.71375 12.0911 5.71375 12.7695C5.71375 13.448 6.26573 14 6.94421 14C7.52128 14 8.00657 13.6006 8.13886 13.0638C9.47411 12.8017 10.6922 12.1011 11.5963 11.0679C12.5814 9.94219 13.1239 8.49751 13.1239 7C13.1239 6.77348 12.9403 6.58984 12.7137 6.58984Z" :fill="project.project_status==='1' ? '#FFFFFF': '#2CCF11'"/>
            </svg>
            <span style="margin-left: 4px">Активный</span>
          </div>
          <div
              @click="project.project_status='2'"
              class="filter-for-projects"
              style="color: #EC1B1B"
              :style="{background: project.project_status==='2' ? '#4F8AFD': '',
                       color: project.project_status!=='2' ? '#EC1B1B': '#FFFFFF'}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 7C14 10.864 10.864 14 7 14C3.136 14 0 10.864 0 7C0 6.167 0.154 5.376 0.42 4.634L1.736 5.11C1.519 5.698 1.4 6.335 1.4 7C1.4 10.087 3.913 12.6 7 12.6C10.087 12.6 12.6 10.087 12.6 7C12.6 3.913 10.087 1.4 7 1.4C6.335 1.4 5.705 1.519 5.117 1.736L4.641 0.413C5.383 0.154 6.174 0 7 0C10.864 0 14 3.136 14 7ZM2.45 3.5C3.031 3.5 3.5 3.031 3.5 2.45C3.5 1.869 3.031 1.4 2.45 1.4C1.869 1.4 1.4 1.869 1.4 2.45C1.4 3.031 1.869 3.5 2.45 3.5ZM4.9 4.9V9.1H6.3V4.9H4.9ZM7.7 4.9V9.1H9.1V4.9H7.7Z" :fill="project.project_status==='2' ? '#FFFFFF': '#EC1B1B'"/>
            </svg>
            <span style="margin-left: 4px">Приостановлен</span>
          </div>
          <div
              @click="project.project_status='3'"
              class="filter-for-projects"
              style="color: #889ABD;border-radius: 0 50px 50px 0"
              :style="{background: project.project_status==='3' ? '#4F8AFD': '',
                       color: project.project_status!=='3' ? '#889ABD': '#FFFFFF'}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20796 2.04464C8.13938 1.56851 6.94552 1.45056 5.80442 1.70837C4.66332 1.96619 3.63614 2.58596 2.87606 3.47526C2.11597 4.36455 1.66372 5.47572 1.58675 6.64304C1.50978 7.81037 1.81221 8.9713 2.44893 9.9527C3.08566 10.9341 4.02258 11.6834 5.11994 12.0888C6.2173 12.4942 7.41632 12.5341 8.53817 12.2024C9.66002 11.8707 10.6446 11.1852 11.345 10.2482C12.0455 9.31125 12.4243 8.17295 12.425 7.00309V6.43999C12.425 6.05339 12.7384 5.73999 13.125 5.73999C13.5116 5.73999 13.825 6.05339 13.825 6.43999V7.00349C13.8241 8.47525 13.3476 9.90771 12.4664 11.0865C11.5851 12.2653 10.3465 13.1276 8.93512 13.5449C7.52376 13.9622 6.01532 13.9121 4.63476 13.402C3.25421 12.892 2.07551 11.9494 1.27447 10.7147C0.473422 9.48003 0.0929453 8.0195 0.189782 6.55093C0.286619 5.08236 0.855581 3.68444 1.81181 2.56565C2.76805 1.44686 4.06031 0.667143 5.49589 0.342794C6.93146 0.0184452 8.43342 0.166839 9.77776 0.765844C10.1309 0.92319 10.2896 1.33701 10.1323 1.69014C9.97492 2.04327 9.56109 2.20199 9.20796 2.04464Z" :fill="project.project_status==='3' ? '#FFFFFF': '#889ABD'"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6197 1.6081C13.8932 1.88133 13.8934 2.32454 13.6202 2.59805L7.49522 8.72917C7.36396 8.86055 7.18588 8.9344 7.00017 8.93444C6.81446 8.93449 6.63634 8.86074 6.50502 8.72942L4.66752 6.89192C4.39415 6.61855 4.39415 6.17534 4.66752 5.90197C4.94089 5.6286 5.3841 5.6286 5.65747 5.90197L6.99975 7.24425L12.6298 1.60859C12.903 1.33509 13.3462 1.33487 13.6197 1.6081Z" :fill="project.project_status==='3' ? '#FFFFFF': '#889ABD'"/>
            </svg>
            <span style="margin-left: 4px">Завершен</span>
          </div>
        </div>
      </div>
      <div style="margin: 0 25px 5px;font-size: .85rem">Создатель</div>
      <div style="display: flex;margin-bottom: 64px">
        <svg style="margin-right: 8px" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M14.9841 13.0573C14.6039 12.1591 14.0521 11.3433 13.3595 10.6553C12.669 9.96524 11.851 9.41508 10.9508 9.03518C10.9427 9.03116 10.9347 9.02915 10.9266 9.02513C12.1823 8.1206 12.9987 6.64724 12.9987 4.98492C12.9987 2.23116 10.7613 0 7.99985 0C5.23839 0 3.001 2.23116 3.001 4.98492C3.001 6.64724 3.81734 8.1206 5.0731 9.02713C5.06504 9.03115 5.05698 9.03317 5.04891 9.03719C4.1459 9.41708 3.3356 9.96181 2.6402 10.6573C1.94824 11.3459 1.39654 12.1615 1.01557 13.0593C0.641306 13.9382 0.439457 14.8805 0.420949 15.8352C0.420411 15.8566 0.424184 15.878 0.432047 15.8979C0.439909 15.9179 0.451702 15.9361 0.466729 15.9515C0.481757 15.9669 0.499716 15.9791 0.519547 15.9874C0.539379 15.9957 0.560682 16 0.582202 16H1.7916C1.88029 16 1.95084 15.9296 1.95285 15.8432C1.99317 14.2915 2.61802 12.8382 3.72261 11.7367C4.86549 10.597 6.38328 9.96985 7.99985 9.96985C9.61641 9.96985 11.1342 10.597 12.2771 11.7367C13.3817 12.8382 14.0065 14.2915 14.0468 15.8432C14.0489 15.9317 14.1194 16 14.2081 16H15.4175C15.439 16 15.4603 15.9957 15.4801 15.9874C15.5 15.9791 15.5179 15.9669 15.533 15.9515C15.548 15.9361 15.5598 15.9179 15.5676 15.8979C15.5755 15.878 15.5793 15.8566 15.5787 15.8352C15.5586 14.8744 15.359 13.9397 14.9841 13.0573ZM7.99985 8.44221C7.07466 8.44221 6.20389 8.08241 5.5488 7.42915C4.89371 6.77588 4.5329 5.90754 4.5329 4.98492C4.5329 4.06231 4.89371 3.19397 5.5488 2.5407C6.20389 1.88744 7.07466 1.52764 7.99985 1.52764C8.92504 1.52764 9.7958 1.88744 10.4509 2.5407C11.106 3.19397 11.4668 4.06231 11.4668 4.98492C11.4668 5.90754 11.106 6.77588 10.4509 7.42915C9.7958 8.08241 8.92504 8.44221 7.99985 8.44221Z"
              fill="#A7B4CF"/>
          <path d="M0.999846 14.5H14.9998V16H0.999846V14.5Z" fill="#A7B4CF"/>
        </svg>
        <div style="color: #10141D;">{{ project.project_creator }}</div>
      </div>
      <div style="color: #344360;margin-bottom: 32px;font-weight: 600">Дополнительные поля (необязательные)</div>
      <div style="display: flex">
        <svg style="margin-right: 8px" width="16" height="14" viewBox="0 0 16 14" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 13C0 12.8232 0.070238 12.6537 0.195262 12.5286C0.320287 12.4036 0.489856 12.3334 0.666667 12.3334H10C10.1768 12.3334 10.3464 12.4036 10.4714 12.5286C10.5964 12.6537 10.6667 12.8232 10.6667 13C10.6667 13.1769 10.5964 13.3464 10.4714 13.4714C10.3464 13.5965 10.1768 13.6667 10 13.6667H0.666667C0.489856 13.6667 0.320287 13.5965 0.195262 13.4714C0.070238 13.3464 0 13.1769 0 13ZM0 9.00004C0 8.82323 0.070238 8.65366 0.195262 8.52864C0.320287 8.40361 0.489856 8.33337 0.666667 8.33337H15.3333C15.5101 8.33337 15.6797 8.40361 15.8047 8.52864C15.9298 8.65366 16 8.82323 16 9.00004C16 9.17685 15.9298 9.34642 15.8047 9.47145C15.6797 9.59647 15.5101 9.66671 15.3333 9.66671H0.666667C0.489856 9.66671 0.320287 9.59647 0.195262 9.47145C0.070238 9.34642 0 9.17685 0 9.00004ZM0 5.00004C0 4.82323 0.070238 4.65366 0.195262 4.52864C0.320287 4.40361 0.489856 4.33337 0.666667 4.33337H10C10.1768 4.33337 10.3464 4.40361 10.4714 4.52864C10.5964 4.65366 10.6667 4.82323 10.6667 5.00004C10.6667 5.17685 10.5964 5.34642 10.4714 5.47145C10.3464 5.59647 10.1768 5.66671 10 5.66671H0.666667C0.489856 5.66671 0.320287 5.59647 0.195262 5.47145C0.070238 5.34642 0 5.17685 0 5.00004ZM0 1.00004C0 0.82323 0.070238 0.653661 0.195262 0.528636C0.320287 0.403612 0.489856 0.333374 0.666667 0.333374H15.3333C15.5101 0.333374 15.6797 0.403612 15.8047 0.528636C15.9298 0.653661 16 0.82323 16 1.00004C16 1.17685 15.9298 1.34642 15.8047 1.47145C15.6797 1.59647 15.5101 1.66671 15.3333 1.66671H0.666667C0.489856 1.66671 0.320287 1.59647 0.195262 1.47145C0.070238 1.34642 0 1.17685 0 1.00004Z"
                fill="#A7B4CF"/>
        </svg>
        <input type="text" placeholder="Описание проекта..." class="edit-tasks-description"
               v-model.trim="project.project_description">
      </div>
      <div
          class="error"
          style="margin-bottom: 17px"
          :style="{visibility: project.project_description.length>500 ? 'visible': 'hidden'}">Превышено количество символов
      </div>
<!--      <div class="title-for-input-mw"-->
<!--           :style="{color: focusDeadline ? '#0356F6': '',visibility: project.project_deadline.length ? 'visible': 'hidden'}">-->
<!--        Дедлайн-->
<!--      </div>-->
      <SingleDatePicker
          @selectDate="selectDate"
          v-show="showCalendar"
          style="position: absolute;font-size: 14px;top: 40%;left: 60%"/>
      <label class="label-for-deadline" for="label-clock-sand"
             @click="showCalendar=!showCalendar">
        <svg style="margin-right: 8px" width="10" height="16" viewBox="0 0 10 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8 16C8.88 16 9.6 15.28 9.6 14.4L9.592 11.856C9.592 11.432 9.424 11.032 9.128 10.728L6.4 8L9.128 5.256C9.424 4.96 9.592 4.552 9.592 4.128L9.6 1.6C9.6 0.72 8.88 0 8 0H1.6C0.72 0 0 0.72 0 1.6V4.128C0 4.552 0.168 4.96 0.464 5.264L3.2 8L0.472 10.72C0.168 11.024 0 11.432 0 11.856V14.4C0 15.28 0.72 16 1.6 16H8ZM1.6 4.072V2.4C1.6 1.96 1.96 1.6 2.4 1.6H7.2C7.64 1.6 8 1.96 8 2.4V4.072C8 4.288 7.912 4.488 7.768 4.64L4.8 7.6L1.832 4.632C1.688 4.488 1.6 4.28 1.6 4.072Z"
              :fill="focusDeadline ? '#4F8AFD': '#A7B4CF'"/>
        </svg>
        <div
            class="container-for-input-edit-task"
            :style="{borderBottom: focusDeadline ? '1px solid #0356F6': ''}"
            style="width: 100%">
          <input
              id="label-clock-sand"
              disabled
              type="text"
              style="cursor:pointer;width: 100%"
              :placeholder="focusDeadline ? 'дд.мм.гггг': 'Дедлайн'"
              class="input-edit"
              v-model.trim="project.project_deadline">
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2436 11.7581C13.743 11.2571 13.1581 10.8482 12.5157 10.5502C13.4217 9.81618 13.9996 8.69621 13.9996 7.44025C13.9996 5.22432 12.1517 3.40637 9.93576 3.44037C7.75382 3.47437 5.99587 5.25232 5.99587 7.44025C5.99587 8.69621 6.57586 9.81618 7.47983 10.5502C6.83726 10.848 6.25231 11.2569 5.75188 11.7581C4.65991 12.8521 4.03993 14.2961 3.99993 15.836C3.9994 15.8574 4.00314 15.8786 4.01094 15.8985C4.01875 15.9183 4.03045 15.9365 4.04536 15.9517C4.06027 15.967 4.07809 15.9792 4.09776 15.9875C4.11744 15.9957 4.13858 16 4.15993 16H5.27989C5.36589 16 5.43789 15.932 5.43989 15.846C5.47789 14.686 5.94788 13.6001 6.77385 12.7761C7.19652 12.3512 7.69926 12.0143 8.25299 11.785C8.80672 11.5557 9.40043 11.4385 9.99976 11.4401C11.2177 11.4401 12.3637 11.9141 13.2257 12.7761C14.0496 13.6001 14.5196 14.686 14.5596 15.846C14.5616 15.932 14.6336 16 14.7196 16H15.8396C15.8609 16 15.8821 15.9957 15.9018 15.9875C15.9214 15.9792 15.9392 15.967 15.9542 15.9517C15.9691 15.9365 15.9808 15.9183 15.9886 15.8985C15.9964 15.8786 16.0001 15.8574 15.9996 15.836C15.9596 14.2961 15.3396 12.8521 14.2436 11.7581ZM9.99976 10.0002C9.31578 10.0002 8.6718 9.73418 8.18981 9.2502C7.94792 9.01022 7.75685 8.72397 7.628 8.40854C7.49915 8.09311 7.43515 7.75496 7.43983 7.41425C7.44583 6.75827 7.70782 6.12429 8.16581 5.6543C8.6458 5.16232 9.28778 4.88833 9.97376 4.88033C10.6517 4.87433 11.3097 5.13832 11.7937 5.61231C12.2897 6.09829 12.5617 6.74827 12.5617 7.44025C12.5617 8.12423 12.2957 8.76621 11.8117 9.2502C11.5743 9.48878 11.2919 9.67791 10.9808 9.80664C10.6698 9.93538 10.3364 10.0012 9.99976 10.0002ZM4.9899 7.96824C4.9719 7.79424 4.9619 7.61825 4.9619 7.44025C4.9619 7.12226 4.9919 6.81227 5.0479 6.51028C5.0619 6.43828 5.0239 6.36428 4.9579 6.33428C4.68591 6.21229 4.43592 6.04429 4.21993 5.8323C3.96541 5.58552 3.76514 5.2884 3.63187 4.95989C3.49861 4.63138 3.43529 4.2787 3.44595 3.92435C3.46395 3.28237 3.72194 2.67239 4.17193 2.2124C4.66591 1.70642 5.32989 1.43043 6.03587 1.43843C6.67385 1.44443 7.28984 1.69042 7.75582 2.12641C7.91382 2.2744 8.04981 2.4384 8.16381 2.61439C8.20381 2.67639 8.28181 2.70239 8.3498 2.67839C8.70179 2.55639 9.07378 2.4704 9.45577 2.4304C9.56777 2.4184 9.63177 2.2984 9.58177 2.1984C8.93179 0.912442 7.60383 0.0244686 6.06787 0.000469261C3.84994 -0.0335297 2.00199 1.78442 2.00199 3.99835C2.00199 5.25432 2.57997 6.37428 3.48595 7.10826C2.84997 7.40225 2.26398 7.80824 1.756 8.31623C0.660031 9.41019 0.0400488 10.8542 5.00105e-05 12.3961C-0.000483784 12.4175 0.00326016 12.4387 0.0110613 12.4586C0.0188625 12.4784 0.0305631 12.4966 0.0454735 12.5118C0.0603839 12.5271 0.0782027 12.5393 0.0978796 12.5476C0.117557 12.5558 0.138694 12.5601 0.160045 12.5601H1.28201C1.36801 12.5601 1.44001 12.4921 1.44201 12.4061C1.48001 11.2461 1.94999 10.1602 2.77597 9.3362C3.36395 8.74821 4.08393 8.34023 4.86991 8.14223C4.9479 8.12223 4.9999 8.04823 4.9899 7.96824Z" fill="#A7B4CF"/>
        </svg>
        <span style="color: #889ABD;margin-left: 12px">Команда</span>
      </div>
      <div class="add-subtask" style="padding: 0">+ Добавить в пользователей</div>
      <div style="display: flex;align-items: center"
           :style="{justifyContent: !Number.isNaN(project.id) ? 'space-between': 'center'}">
        <div style="display: flex;cursor: pointer" v-show="!Number.isNaN(project.id)">
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
            <div style="color: #10141D">Вы точно хотите удалить проект?</div>
            <div class="only-for-hover1" @click="$store.dispatch('deleteProject', project.id)">Удалить</div>
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
          <span style="color: #FCFCFD" v-show="!deletingSubtask" @click="saveTask">Сохранить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker'
import {mapGetters} from 'vuex'
export default {
  name: "modal-window-project",
  components: {
    SingleDatePicker
  },
  data() {
    return {
      project: {
        project_name: '',
        project_deadline: '',
        project_description: ''
      },
      error: false,
      deletingSubtask: false,
      showCalendar: false,
      focusDeadline: false
    }
  },
  methods: {
    saveTask() {
      if((this.project.project_name.length<65&&this.project.project_name)&&(this.project.project_description.length<501)) {
        const newProject = {
          project_name: this.project.project_name,
          project_description: this.project.project_description,
          project_deadline: this.project.project_deadline,
          project_status: this.project.project_status,
          id: this.project.id
        }
        if(Number.isNaN(this.project.id))this.$store.dispatch('addProject', newProject);
        else this.$store.dispatch('editProject', newProject);
        this.$store.commit('isShowProjectWindow');
      }
      else this.error=true;
    },
    selectDate(data) {
      data.month++;
      this.project.project_deadline = (String(data.date).length === 1 ? '0' + data.date : data.date) + '.' + (String(data.month).length === 1 ? '0' + data.month : data.month) + '.' + data.year;
      this.showCalendar = false;
    }
  },
  computed: {
    ...mapGetters([
        'GET_PROJECT_DATA'
    ])
  },
  mounted() {
    this.project=this.GET_PROJECT_DATA;
    if(Number.isNaN(this.project.id)) {
      this.project = {
        project_creator: this.$store.state.user.user.username,
        project_name: '',
        id: NaN,
        project_description: '',
        project_deadline: '',
        project_status: '1'
      };
    }
  }
}
</script>

<style>
.select-status-project {
  display: flex;
  margin-bottom: 31px;
  align-items: center;
}
.label-for-deadline {
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 48px;
}
.single-date-picker__calendar-month-header[data-v-1179a6d7] {
  padding: 15px;
  background-image: -webkit-gradient(linear, left top, right top, from(#e0caca), color-stop(#d4b8ca), to(#c7a3b5));
  background-image: linear-gradient(90deg, #e0caca, #d4b8ca, #c7a3b5);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #77505e
}

.single-date-picker__calendar-month-header .single-date-picker__year[data-v-1179a6d7] {
  font-weight: 900;
  font-size: 14px;
  text-transform: capitalize
}

.single-date-picker__calendar-month-header .single-date-picker__arrow[data-v-1179a6d7] {
  cursor: pointer
}

.single-date-picker__calendar-week-header[data-v-187bfc22] {
  color: #77505e
}

.single-date-picker__date[data-v-7e5b706c] {
  font-size: 10px;
  font-size: 14px;
  height: 22px;
  width: 22px;
  display: table-cell;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default
}

.single-date-picker__date.single-date-picker__selected[data-v-7e5b706c], .single-date-picker__date[data-v-7e5b706c]:hover {
  border-radius: 50%;
  border: 2px solid pink
}

.single-date-picker__date.single-date-picker__today[data-v-7e5b706c] {
  border-radius: 50%;
  background-image: -webkit-gradient(linear, left top, right bottom, from(#f1b4b9), to(#d2b0c3));
  background-image: linear-gradient(to bottom right, #f1b4b9, #d2b0c3)
}

tr[data-v-12521860] {
  color: #614a52
}

.single-date-picker__calendar-month[data-v-21b19bdf] {
  width: 100%;
  padding: 10px
}

#single-date-picker[data-v-61873592] {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}

.single-date-picker__calendar-view[data-v-61873592] {
  max-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
  color: #0d1e44
}
</style>