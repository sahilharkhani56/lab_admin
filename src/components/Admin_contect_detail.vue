<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header> <div class="admin-wrap admin-detail-wrap inquiry contact-wrap">
        <div class="title-wrap col-group">
          <h2 class="main-title">Contact us</h2>
        </div>

        <div class="form-wrap col-group">
          <div class="form-item row-group" v-for="(field, index) in contactInfo" :key="index">
            <p class="item-default">{{ field.label }}</p>
            <input
              type="text"
              class="form-input form-input-disabled"
              disabled
              :value="field.value"
            />
          </div>

          <div class="form-item row-group">
            <p class="item-default">문의내용</p>
            <p class="form-textarea form-textarea-disabled">{{ contactInfo.inquiry }}</p>
          </div>
        </div>

        <div class="btn-wrap">
          <a href="admin_contact.html" class="form-prev-btn">확인</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactInfo: [
        { label: '문의종류', value: '-' },
        { label: '이름', value: '-' },
        { label: '기업명', value: '-' },
        { label: '직책', value: '-' },
        { label: '연락처', value: '-' },
        { label: '이메일', value: '-' },
      ],
      inquiry:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  },
};
</script>