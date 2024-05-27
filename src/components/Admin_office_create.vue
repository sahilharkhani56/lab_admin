<template>
  <div class="office-image-form">
    <h2>사무실 이미지 등록</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="pcImage">PC 이미지 (640*400px 권장)</label>
        <file-upload v-model="pcImage" :accept="imageMimeTypes"></file-upload>
      </div>
      <div class="form-group">
        <label for="mobileImage">MOBILE 이미지 (315px*415px 권장)</label>
        <file-upload v-model="mobileImage" :accept="imageMimeTypes"></file-upload>
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
      pcImage: null,
      mobileImage: null,
      imageMimeTypes: "image/gif, image/jpg, image/jpeg, image/png, image/*",
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      // Potentially emit an event with image data or call an API method
      console.log("Submitted form with images:", this.pcImage, this.mobileImage);
      // Clear form data after successful submission (optional)
    },
  },
};
</script>