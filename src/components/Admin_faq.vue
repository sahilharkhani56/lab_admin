<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap table-wrap">
        <div class="title-wrap col-group">
          <div class="main-title-wrap col-group">
            <h2 class="main-title">FAQ</h2>
            <div class="top-btn-wrap">
              <a href="admin_faq_create.html" class="top-btn navy-btn">등록</a>
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
            <col width="10%" />
            <col width="72%" />
            <col width="18%" />
          </colgroup>
          <thead>
            <tr class="admin-tr">
              <th class="admin-th">분류</th>
              <th class="admin-th">질문</th>
              <th class="admin-th">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(faq, index) in faqs" :key="index" class="admin-tr">
              <td class="admin-td">{{ faq.category }}</td>
              <td class="admin-td mid-td">{{ faq.question }}</td>
              <td class="admin-td">
                <div class="btn-wrap col-group">
                  <a :href="'/admin_FAQ_create.html?edit=' + faq.id" class="btn">수정</a>
                  <a href="#" class="btn" @click="deleteFAQ(faq.id)">삭제</a>
                </div>
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
      faqs: [
        { id: 1, category: "HORIZON", question: "HORIZON 이용 중 계정정보를 잊었어요." },
        { id: 2, category: "HORIZON", question: "HORIZON 이용 중 계정정보를 잊었어요." },
      ],
    };
  },
  methods: {
    deleteFAQ(id) {
      // Implement logic to delete FAQ with the provided ID
      // This might involve an API call or interacting with a data store
      console.log(`Deleting FAQ with ID: ${id}`);
    },
  },
};
</script>