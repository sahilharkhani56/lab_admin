<template>
  <div class="header-wrap">
    <div class="img-wrap">
      <img src="/images/AoroaLabs_logo_b.svg" alt="" class="header-logo">
    </div>

    <div class="menu-wrap row-group">
      <div class="gnb">
        <div class="gnb-item" v-for="(item, index) in gnbItems" :key="index">
          <div class="item-default">
            {{ item.title }}
            <i class="xi-angle-down-thin"></i>
          </div>
          <div class="sub-gnb row-group" v-if="item.subItems">
            <a href="#" class="sub-gnb-item" v-for="(subItem, subIndex) in item.subItems" :key="subIndex">{{ subItem.text }}</a>
          </div>
        </div>
      </div>

      <div class="header-btm">
        <a href="/" class="logout-btn">
          로그아웃
          <i class="xi-log-out"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gnbItems: [
        {
          title: 'MAINPAGE 관리',
          subItems: [
            { text: '팝업 관리', href: '/admin_popup.html' },
          ],
        },
        {
          title: 'COMPANY 관리',
          subItems: [
            { text: '연혁 관리', href: '/admin_history.html' },
          ],
        },
        {
          title: 'CAREERS 관리',
          subItems: [
            { text: 'OFFICE 사진 관리', href: '/admin_office.html' },
          ],
        },
        {
          title: 'CONTACT 관리',
          subItems: [
            { text: 'NOTICE 관리', href: '/admin_notice.html' },
            { text: 'CONTACT US 관리', href: '/admin_contact.html' },
          ],
        },
        {
          title: 'FAQ 관리',
          href: '/admin_faq.html',
        },
      ],
    };
  },
};
</script>