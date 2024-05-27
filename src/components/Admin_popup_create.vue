<template>
  <div class="popup-form-wrapper">
    <h2>팝업 등록</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="popupImage">이미지 (정방형 권장)</label>
        <file-upload v-model="popupImage" :accept="imageMimeTypes"></file-upload>
      </div>
      <div class="form-btn-wrap">
        <a href="#" class="form-prev-btn white-btn">취소</a>
        <button class="form-submit-btn white-btn" type="submit">등록 후 계속</button>
        <button class="form-prev-btn dark-btn" type="submit">등록</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupImage: null,
      imageMimeTypes: "image/gif, image/jpg, image/jpeg, image/png, image/*",
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      // Potentially emit an event with image data or call an API method
      console.log("Submitted form with image:", this.popupImage);
      // Clear form data after successful submission (optional)
    },
  },
};
</script>