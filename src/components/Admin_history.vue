<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap table-wrap">
        <div class="title-wrap col-group">
          <div class="main-title-wrap col-group">
            <h2 class="main-title">연혁 관리</h2>
            <div class="top-btn-wrap">
              <a href="#" class="top-btn navy-btn" @click="handleImageUpload">
                이미지 등록
              </a>
              <a href="admin_history_detail_create.html" class="top-btn elimination-btn navy-btn">
                연혁 등록
              </a>
            </div>
          </div>
        </div>

        <div class="filter_wrap history-filter-wrap">
          <div class="filter_input_wrap">
            <select name="" id="">
              <option value="">1페이지에 8개까지</option>
            </select>
          </div>
        </div>

        <table class="admin-table history-table">
          <colgroup>
            <col width="22%" />
            <col width="60%" />
            <col width="18%" />
          </colgroup>
          <thead>
            <tr class="admin-tr">
              <th class="admin-th">날짜</th>
              <th class="admin-th">내용</th>
              <th class="admin-th">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(history, index) in histories" :key="index" class="admin-tr">
              <td class="admin-td">{{ history.date }}</td>
              <td class="admin-td mid-td">{{ history.content }}</td>
              <td class="admin-td">
                <div class="btn-wrap col-group">
                  <a :href="'/admin_history_detail_create.html?edit=' + history.id" class="btn">수정</a>
                  <a href="#" class="btn" @click="handleDelete(history.id)">삭제</a>
                </div>
              </td>
            </tr>
            <tr v-if="!histories.length" class="admin-tr">
              <td colspan="3" class="admin-td">
                <p class="null-txt">등록된 연혁이 없습니다.</p>
              </td>
            </tr>
          </tbody>
        </table>

        <div id="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [
        { id: 1, date: "2023.00", content: "연혁내용" },
        { id: 2, date: "2023.00", content: "Lorem ipsum dolor..." },
      ],
    };
  },
  methods: {
    handleImageUpload() {
      // Implement logic for image upload functionality
      console.log("Image upload clicked");
    },
    handleDelete(id) {
      // Implement logic to delete history with the provided ID
      // This might involve an API call or interacting with a data store
      console.log(`Deleting history with ID: ${id}`);
      // Update the histories data after successful deletion
    },
  },
};
</script>