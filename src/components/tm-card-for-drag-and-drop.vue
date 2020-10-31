<template>
  <div
      class="tm-card-for-drag-and-drop"
      draggable="true"
    :id="id"
    @dragstart="dragStart"
    @dragend="dragEnd">
    <div style="display: flex;align-items: flex-start;justify-content: space-between">
      <div style="display: flex;">
        <div>
          <svg v-if="card.type" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M7.88594 7.70724C8.94477 7.70724 9.86164 7.32749 10.6108 6.57822C11.3599 5.82908 11.7397 4.91246 11.7397 3.8535C11.7397 2.79491 11.3599 1.87817 10.6107 1.12878C9.8614 0.379759 8.94465 0 7.88594 0C6.82698 0 5.91036 0.379759 5.16122 1.1289C4.41208 1.87804 4.0322 2.79479 4.0322 3.8535C4.0322 4.91246 4.41208 5.8292 5.16134 6.57834C5.91061 7.32736 6.82735 7.70724 7.88594 7.70724Z" fill="#889ABD"/>
              <path d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4993 11.2921C14.4344 10.9303 14.3508 10.5882 14.2507 10.2756C14.1473 9.95251 14.0067 9.63341 13.8328 9.32763C13.6524 9.01025 13.4405 8.73388 13.2027 8.50647C12.9541 8.26855 12.6496 8.07727 12.2976 7.93774C11.9467 7.79895 11.5579 7.72864 11.1421 7.72864C10.9787 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86325 8.41491C9.65365 8.54846 9.36972 8.67358 9.01901 8.78686C8.67685 8.89758 8.32944 8.95373 7.98655 8.95373C7.64365 8.95373 7.29636 8.89758 6.95384 8.78686C6.60349 8.6737 6.31956 8.54858 6.11021 8.41504C5.86741 8.25989 5.64769 8.11828 5.45714 7.99414C5.15245 7.79553 4.99437 7.72852 4.83104 7.72852C4.41503 7.72852 4.02636 7.79895 3.67565 7.93787C3.32384 8.07715 3.01928 8.26843 2.77038 8.50659C2.53271 8.73413 2.32067 9.01037 2.1405 9.32763C1.96679 9.63341 1.82617 9.95238 1.72265 10.2757C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40979 11.6507 1.36609 11.9909 1.34448 12.3034C1.32324 12.6096 1.3125 12.9273 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7503 3.30285 16 4.13488 16H11.8389C12.671 16 13.3549 15.7505 13.8721 15.2583C14.3958 14.76 14.6613 14.0837 14.6613 13.2481C14.6612 12.9258 14.6503 12.6078 14.629 12.3031Z" fill="#889ABD"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="15.9999" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 3.2H11.2V1.6C11.2 0.712 10.488 0 9.6 0H6.4C5.512 0 4.8 0.712 4.8 1.6V3.2H1.6C0.712 3.2 0.00799999 3.912 0.00799999 4.8L0 13.6C0 14.488 0.712 15.2 1.6 15.2H14.4C15.288 15.2 16 14.488 16 13.6V4.8C16 3.912 15.288 3.2 14.4 3.2ZM9.6 3.2H6.4V1.6H9.6V3.2Z" fill="#889ABD"/>
          </svg>
        </div>
        <div style="margin-left: 9px">{{card.title}}</div>
      </div>
      <div>
        <svg v-if="card.status===2" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z" fill="#4F8AFD"/>
        </svg>
        <svg v-if="card.status===3" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#2CCF11"/>
          <path d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z" fill="#2CCF11"/>
        </svg>
        <svg v-if="card.status===1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 14.4C4.4712 14.4 1.6 11.5288 1.6 8C1.6 4.4712 4.4712 1.6 8 1.6C11.5288 1.6 14.4 4.4712 14.4 8C14.4 11.5288 11.5288 14.4 8 14.4Z" fill="#889ABD"/>
        </svg>
      </div>
    </div>
    <div style="font-size: 0.85rem;margin-top: 8px">Выполнить до {{card.deadline}}</div>
    <div style="display: flex;justify-content: space-between">
      <div style="font-size: 0.85rem;margin-top: 8px">Оценочное время: {{card.time}}</div>
      <div class="executer-oval" style="margin: 0" :style="{background: card.difficulty===3 ? '#F3B6B8': card.difficulty===2 ? '#F1EAA5': '#B9ECB5'}">
        <div>{{card.difficulty===3 ? 'Сложная': card.difficulty===2 ? 'Средняя': 'Легкая'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-card-for-drag-and-drop",
  props: ['id','card'],
  methods: {
    dragStart(e) {
      const target=e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(() => {
        target.style.display='none';
      }, 0);
    },
    
  }
}
</script>

<style>
.tm-card-for-drag-and-drop {
  color: #485C83;
  width: 100%;
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 8px;
}
.tm-card-for-drag-and-drop:active {
  cursor: grabbing;
}
</style>