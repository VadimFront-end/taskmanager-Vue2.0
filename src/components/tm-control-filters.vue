<template>
  <div class="view-controls">
    <div class="left-filters">
        <div class="filters">
          <span style="margin-right: 8px">Статус:</span>
          <div
              @click="showOnlyThis(0)"
              class="status-filter"
              style="border-radius: 50px 0 0 50px"
              :style="{background: STATUSFILTER.statusDane ? '#4F8AFD': ''}">
            <div class="status-none" :style="{border: STATUSFILTER.statusDane ? '2px solid #FCFCFD': ''}"></div>
          </div>
          <div
              @click="showOnlyThis(1)"
              class="status-filter"
              :style="{background: STATUSFILTER.statusWork ? '#4F8AFD': ''}">
            <svg style="margin: auto" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z" :fill="STATUSFILTER.statusWork ? '#FFFFFF': '#4F8AFD'"/>
            </svg>
          </div>
          <div
              @click="showOnlyThis(2)"
              class="status-filter"
              style="border-radius: 0 50px 50px 0"
              :style="{background: STATUSFILTER.statusToDo ? '#4F8AFD': ''}">
            <svg style="margin: auto" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" :fill="STATUSFILTER.statusToDo ? '#FFFFFF': '#2CCF11'"/>
              <path d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z" :fill="STATUSFILTER.statusToDo ? '#FFFFFF': '#2CCF11'"/>
            </svg>
          </div>
        </div>
        <div class="filters">
          <span style="margin-right: 8px">Сложность:</span>
          <div
              @click="showOnlyThis2(0)"
              class="diff-filter"
              style="border-radius: 50px 0 0 50px"
              :style="{background: DIFFICULTY_FILTER.easy ? '#A7D4A3': '#B9ECB5',
                       border: DIFFICULTY_FILTER.easy ? '3px solid #E5E5E5': ''}">
          </div>
          <div
              @click="showOnlyThis2(1)"
              class="diff-filter"
              style="width: 18px"
              :style="{background: DIFFICULTY_FILTER.normal ? '#D9D395': '#F1EAA5',
                       border: DIFFICULTY_FILTER.normal ? '3px solid #E5E5E5': ''}">
          </div>
          <div
              @click="showOnlyThis2(2)"
              class="diff-filter"
              style="border-radius: 0 50px 50px 0;background: #F3B6B8"
              :style="{background: DIFFICULTY_FILTER.hard ? '#DBA4A6': '#F3B6B8',
                       border: DIFFICULTY_FILTER.hard ? '3px solid #E5E5E5': ''}">
          </div>
        </div>
        <div style="display: flex;align-items: center">
          <div style="margin-right: 8px">Тип:</div>
          <div class="filter-for-type" style="padding: 5px 6px 5px 8px;border-radius: 50px 0 0 50px;margin-right: 2px">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8 2.4H8.4V1.2C8.4 0.534 7.866 0 7.2 0H4.8C4.134 0 3.6 0.534 3.6 1.2V2.4H1.2C0.534 2.4 0.00599999 2.934 0.00599999 3.6L0 10.2C0 10.866 0.534 11.4 1.2 11.4H10.8C11.466 11.4 12 10.866 12 10.2V3.6C12 2.934 11.466 2.4 10.8 2.4ZM7.2 2.4H4.8V1.2H7.2V2.4Z" fill="#889ABD"/>
            </svg>
            <div style="font-size: 12px;color: #485C83;margin-left: 4px">Рабочая</div>
          </div>
          <div class="filter-for-type" style="padding: 5px 8px 5px 6px;border-radius: 0 50px 50px 0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M5.91448 5.78043C6.7086 5.78043 7.39625 5.49561 7.95811 4.93367C8.51997 4.37181 8.80479 3.68434 8.80479 2.89013C8.80479 2.09618 8.51997 1.40862 7.95802 0.846585C7.39607 0.284819 6.70851 0 5.91448 0C5.12026 0 4.43279 0.284819 3.87094 0.846676C3.30908 1.40853 3.02417 2.09609 3.02417 2.89013C3.02417 3.68434 3.30908 4.3719 3.87103 4.93376C4.43298 5.49552 5.12054 5.78043 5.91448 5.78043Z" fill="#889ABD"/>
                <path d="M10.9717 9.22878C10.9555 8.99495 10.9228 8.73989 10.8745 8.47054C10.8258 8.19918 10.7631 7.94265 10.688 7.70818C10.6105 7.46584 10.505 7.22653 10.3746 6.99719C10.2393 6.75915 10.0804 6.55188 9.90203 6.38131C9.71554 6.20288 9.48721 6.05942 9.22317 5.95477C8.96005 5.85068 8.66846 5.79794 8.35654 5.79794C8.23404 5.79794 8.11557 5.84821 7.88678 5.99716C7.74598 6.08899 7.58127 6.19519 7.39744 6.31265C7.24024 6.41281 7.02729 6.50665 6.76426 6.59161C6.50764 6.67465 6.24708 6.71676 5.98991 6.71676C5.73274 6.71676 5.47227 6.67465 5.21538 6.59161C4.95262 6.50674 4.73967 6.4129 4.58266 6.31274C4.40056 6.19638 4.23577 6.09018 4.09285 5.99707C3.86434 5.84811 3.74578 5.79785 3.62328 5.79785C3.31127 5.79785 3.01977 5.85068 2.75674 5.95486C2.49288 6.05933 2.26446 6.20279 2.07779 6.38141C1.89953 6.55206 1.74051 6.75924 1.60537 6.99719C1.4751 7.22653 1.36963 7.46575 1.29199 7.70827C1.21701 7.94274 1.1543 8.19918 1.10559 8.47054C1.05734 8.73952 1.02457 8.99468 1.00836 9.22905C0.992432 9.45866 0.984375 9.69698 0.984375 9.93767C0.984375 10.5641 1.1835 11.0712 1.57617 11.4452C1.96399 11.8142 2.47714 12.0014 3.10116 12.0014H8.87921C9.50323 12.0014 10.0162 11.8143 10.4041 11.4452C10.7969 11.0715 10.996 10.5643 10.996 9.93757C10.9959 9.69579 10.9878 9.45729 10.9717 9.22878Z" fill="#889ABD"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div style="font-size: 12px;color: #485C83;margin-left: 4px">Личная</div>
          </div>
        </div>
    </div>
    <div style="display: flex;align-items: center">
      <span style="margin-right: 8px">Тип просмотра:</span>
      <div style="display: flex">
        <div
            class="view-tasks"
            style="border-radius: 50px 0 0 50px"
            :style="{background: view ? '#4F8AFD' : 'white'}"
            @click="pushView(true)">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M1.875 8.625H0.375C0.275544 8.625 0.180161 8.66451 0.109835 8.73483C0.0395088 8.80516 0 8.90054 0 9L0 10.5C0 10.5995 0.0395088 10.6948 0.109835 10.7652C0.180161 10.8355 0.275544 10.875 0.375 10.875H1.875C1.97446 10.875 2.06984 10.8355 2.14016 10.7652C2.21049 10.6948 2.25 10.5995 2.25 10.5V9C2.25 8.90054 2.21049 8.80516 2.14016 8.73483C2.06984 8.66451 1.97446 8.625 1.875 8.625ZM1.875 1.125H0.375C0.275544 1.125 0.180161 1.16451 0.109835 1.23483C0.0395088 1.30516 0 1.40054 0 1.5L0 3C0 3.09946 0.0395088 3.19484 0.109835 3.26516C0.180161 3.33549 0.275544 3.375 0.375 3.375H1.875C1.97446 3.375 2.06984 3.33549 2.14016 3.26516C2.21049 3.19484 2.25 3.09946 2.25 3V1.5C2.25 1.40054 2.21049 1.30516 2.14016 1.23483C2.06984 1.16451 1.97446 1.125 1.875 1.125ZM1.875 4.875H0.375C0.275544 4.875 0.180161 4.91451 0.109835 4.98484C0.0395088 5.05516 0 5.15054 0 5.25L0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125H1.875C1.97446 7.125 2.06984 7.08549 2.14016 7.01517C2.21049 6.94484 2.25 6.84946 2.25 6.75V5.25C2.25 5.15054 2.21049 5.05516 2.14016 4.98484C2.06984 4.91451 1.97446 4.875 1.875 4.875ZM11.625 9H4.125C4.02554 9 3.93016 9.03951 3.85984 9.10983C3.78951 9.18016 3.75 9.27554 3.75 9.375V10.125C3.75 10.2245 3.78951 10.3198 3.85984 10.3902C3.93016 10.4605 4.02554 10.5 4.125 10.5H11.625C11.7245 10.5 11.8198 10.4605 11.8902 10.3902C11.9605 10.3198 12 10.2245 12 10.125V9.375C12 9.27554 11.9605 9.18016 11.8902 9.10983C11.8198 9.03951 11.7245 9 11.625 9ZM11.625 1.5H4.125C4.02554 1.5 3.93016 1.53951 3.85984 1.60984C3.78951 1.68016 3.75 1.77554 3.75 1.875V2.625C3.75 2.72446 3.78951 2.81984 3.85984 2.89016C3.93016 2.96049 4.02554 3 4.125 3H11.625C11.7245 3 11.8198 2.96049 11.8902 2.89016C11.9605 2.81984 12 2.72446 12 2.625V1.875C12 1.77554 11.9605 1.68016 11.8902 1.60984C11.8198 1.53951 11.7245 1.5 11.625 1.5ZM11.625 5.25H4.125C4.02554 5.25 3.93016 5.28951 3.85984 5.35984C3.78951 5.43016 3.75 5.52554 3.75 5.625V6.375C3.75 6.47446 3.78951 6.56984 3.85984 6.64017C3.93016 6.71049 4.02554 6.75 4.125 6.75H11.625C11.7245 6.75 11.8198 6.71049 11.8902 6.64017C11.9605 6.56984 12 6.47446 12 6.375V5.625C12 5.52554 11.9605 5.43016 11.8902 5.35984C11.8198 5.28951 11.7245 5.25 11.625 5.25Z" :fill="view ? '#FCFCFD' : '#889ABD'"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
            class="view-tasks"
            style="border-radius: 0 50px 50px 0"
            :style="{background: view ? 'white' : '#4F8AFD'}"
            @click="pushView(false)">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.666667C0 0.298477 0.298477 0 0.666667 0H4.66667C5.03486 0 5.33333 0.298477 5.33333 0.666667C5.33333 1.03486 5.03486 1.33333 4.66667 1.33333H0.666667C0.298477 1.33333 0 1.03486 0 0.666667ZM6.66667 0.666667C6.66667 0.298477 6.96514 0 7.33333 0H11.3333C11.7015 0 12 0.298477 12 0.666667C12 1.03486 11.7015 1.33333 11.3333 1.33333H7.33333C6.96514 1.33333 6.66667 1.03486 6.66667 0.666667ZM2 4C1.63181 4 1.33333 4.29848 1.33333 4.66667V10C1.33333 10.3682 1.63181 10.6667 2 10.6667H3.33333C3.70152 10.6667 4 10.3682 4 10V4.66667C4 4.29848 3.70152 4 3.33333 4H2ZM0 4.66667C0 3.5621 0.895431 2.66667 2 2.66667H3.33333C4.4379 2.66667 5.33333 3.5621 5.33333 4.66667V10C5.33333 11.1046 4.4379 12 3.33333 12H2C0.89543 12 0 11.1046 0 10V4.66667ZM8.66667 4C8.29848 4 8 4.29848 8 4.66667V6C8 6.36819 8.29848 6.66667 8.66667 6.66667H10C10.3682 6.66667 10.6667 6.36819 10.6667 6V4.66667C10.6667 4.29848 10.3682 4 10 4H8.66667ZM6.66667 4.66667C6.66667 3.5621 7.5621 2.66667 8.66667 2.66667H10C11.1046 2.66667 12 3.5621 12 4.66667V6C12 7.10457 11.1046 8 10 8H8.66667C7.5621 8 6.66667 7.10457 6.66667 6V4.66667Z" :fill="view ? '#889ABD' : '#FCFCFD'"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "tm-control-filters",
  data() {
    return {
      view: true
    }
  },
  methods: {
    pushView(view) {
      this.view=view;
      this.$emit('view', this.view);
    },
    showOnlyThis(index) {
      this.$store.commit('showOnlyThis1', index);
    },
    showOnlyThis2(index) {
      this.$store.commit('showOnlyThis2', index);
    }
  },
  computed: {
    ...mapGetters([
        'DIFFICULTY_FILTER',
        'STATUSFILTER'
    ])
  }
}
</script>

<style>
.filter-for-type {
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.13);
  display: flex;
  cursor: pointer;
  align-items: center;
  background: white;
  font-weight: 600;
}
.view-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.filters {
  margin-right: 48px;
  display: flex;
  align-items: center;
}
.left-filters {
  display: flex;
}
@media (max-width: 1250px) {
  .left-filters {
    flex-direction: column;
  }
}
.status-filter {
  cursor: pointer;
  margin-left: 2px;
  padding: 0 6px;
  height: 24px;
  display: flex;
  background: white;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.1);
}
.status-none {
  margin: auto;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  border: 2px solid #889ABD;
}
.diff-filter {
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.13);
  cursor: pointer;
  height: 18px;
  border: 3px solid white;
  width: 20px;
  margin-right: 2px;
}
.view-tasks {
  box-shadow: 0px 0px 10px rgba(2, 57, 164, 0.13);
  display: flex;
  padding: 7px 8px;
  cursor: pointer;
}
</style>