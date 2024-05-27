<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap table-wrap">
        <div class="title-wrap col-group">
          <div class="main-title-wrap col-group">
            <h2 class="main-title">Contact us</h2>
          </div>
          </div>

        <table class="admin-table history-table contact-table">
          <colgroup>
            <col width="9%" />
            <col width="9%" />
            <col width="11%" />
            <col width="16%" />
            <col width="10%" />
            <col width="13%" />
            <col width="4%" />
          </colgroup>
          <thead>
            <tr class="admin-tr">
              <th class="admin-th">작성일</th>
              <th class="admin-th">문의유형</th>
              <th class="admin-th">기업명 | 이름</th>
              <th class="admin-th">이메일</th>
              <th class="admin-th">연락처</th>
              <th class="admin-th">직책</th>
              <th class="admin-th"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="admin-tr" v-for="(contact, index) in contacts" :key="index">
              <td class="admin-td">{{ contact.date }}</td>
              <td class="admin-td mid-td">{{ contact.type }}</td>
              <td class="admin-td">{{ contact.company }} | {{ contact.name }}</td>
              <td class="admin-td mid-td">{{ contact.email }}</td>
              <td class="admin-td">{{ contact.phone }}</td>
              <td class="admin-td mid-td">{{ contact.position }}</td>
              <td class="admin-td">
                <div class="btn-wrap col-group">
                  <a href="/admin_contact_detail.html" class="btn">자세히</a>
                </div>
              </td>
            </tr>
            <tr v-if="!contacts.length" class="admin-tr">
              <td colspan="7" class="admin-td">
                <p class="null-txt">등록된 내용이 없습니다.</p>
              </td>
            </tr>
          </tbody>
        </table>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          date: "2023.11.12",
          type: "문의유형",
          company: "코워커넷",
          name: "김상륜",
          email: "연혁내용",
          phone: "2023.00",
          position: "대리",
        },
        {
          date: "2023.11.12",
          type: "문의유형",
          company: "코워커넷",
          name: "김상륜",
          email: "연혁내용",
          phone: "2023.00",
          position: "대리",
        },
      ],
    };
  },
};
</script>