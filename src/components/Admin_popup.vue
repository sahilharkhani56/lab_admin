<template>
  <div class="popup-list-wrapper">
    <h2>팝업 목록</h2>
    <div v-if="!popups.length">등록한 팝업이 없습니다.</div>
    <ul v-else>
      <li v-for="popup in popups" :key="popup.id">
        <div class="popup-item">
          <img :src="popup.imageUrl" alt="Popup Image">
          <div class="btn-wrap">
            <a :href="getEditUrl(popup.id)" class="btn">수정</a>
            <button @click="handleDelete(popup.id)" class="btn">삭제</button>
          </div>
          <div class="order_btn_wrap">
            <button><i class="xi-angle-left"></i></button>
            <button><i class="xi-angle-right"></i></button>
          </div>
        </div>
      </li>
    </ul>
    <div id="pagination">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    popups: Array, // Array of popup objects (should include id, imageUrl)
  },
  methods: {
    getEditUrl(popupId) {
      // Implement logic to construct the edit URL based on popup ID
      // This might involve a base URL and path with the popup ID parameter
      return `/admin_popup_edit.html?id=${popupId}`; // Placeholder example
    },
    handleDelete(popupId) {
      // Implement logic to handle popup deletion
      // This might involve emitting an event or calling an API method
      console.log("Delete popup with ID:", popupId);
      // Confirm deletion with user before proceeding
    },
  },
};
</script>