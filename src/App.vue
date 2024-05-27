<script setup>
import Header from './components/Header.vue';
import Admin_aaq_create from './components/Admin_aaq_create.vue'
import Admin_contect_detail from './components/Admin_contect_detail.vue'
import Admin_contect from './components/Admin_contect.vue'


import Admin_FAQ_create from './components/Admin_FAQ_create.vue'
import Admin_faq from './components/Admin_faq.vue'
import Admin_history_detail_create from './components/Admin_history_detail_create.vue'
import Admin_history from './components/Admin_history.vue'
import Admin_notice_create from './components/Admin_notice_create.vue'
import Admin_notice from './components/Admin_notice.vue'

import Admin_office from './components/Admin_office.vue'
import Admin_office_create from './components/Admin_office_create.vue'
import Admin_popup from './components/Admin_popup.vue'
import Login from './components/Login.vue'
const routes = [
  { path: '/', component: Login }, // Assuming Login is your main entry point
  { path: '/admin_history', component: Admin_history },
  { path: '/admin_history/create', component: Admin_history_detail_create },
    { path: '/admin_faq', component: Admin_faq },
  { path: '/admin_faq/create', component: Admin_FAQ_create },
   { path: '/admin_notice', component: Admin_notice },
  { path: '/admin_notice/create', component: Admin_notice_create },
   { path: '/admin_office', component: Admin_office },
  { path: '/admin_office/create', component: Admin_office_create },
  { path: '/admin_popup', component: Admin_popup },
  { path: '/admin_contact', component: Admin_contect },
  { path: '/admin_contact_detail', component: Admin_contect_detail },
  { path: '/Admin_aaq_create', component: Admin_aaq_create },
];


</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <Admin_history_detail_create/>
  </main>
</template>
