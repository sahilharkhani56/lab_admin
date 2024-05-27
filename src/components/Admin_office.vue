<template>
  <div class="office-image-list">
    <h2>사무실 이미지</h2>
    <div v-for="image in officeImages" :key="image.id">
      <div class="office-image-item">
        <img :src="image.imageUrl" alt="Office Image">
        <div class="btn-wrap">
          <a :href="getEditUrl(image.id)" class="btn">수정</a>
          <button @click="handleDelete(image.id)" class="btn">삭제</button>
        </div>
        <div class="order_btn_wrap">
          <button><i class="xi-angle-left"></i></button>
          <button><i class="xi-angle-right"></i></button>
        </div>
      </div>
    </div>
    <div v-if="!officeImages.length">등록한 사무실 이미지가 없습니다.</div>
    <div id="pagination">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    officeImages: Array, // Array of office image objects (should include id, imageUrl)
  },
  methods: {
    getEditUrl(imageId) {
      // Implement logic to construct the edit URL based on image ID
      // This might involve a base URL and path with the image ID parameter
      return `/admin_office_edit.html?id=${imageId}`; // Placeholder example
    },
    handleDelete(imageId) {
      // Implement logic to handle image deletion
      // This might involve emitting an event or calling an API method
      console.log("Delete image with ID:", imageId);
      // Confirm deletion with user before proceeding
    },
  },
};
</script>