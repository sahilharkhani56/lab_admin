<template>
  <div class="admin-container">
    <header id="header"></header>

    <div class="admin-wrap admin_photo_gallery">
      <div class="title-wrap col-group">
        <h2>NOTICE</h2>
        <div class="top-btn-wrap">
          <a href="admin_notice_create.html" class="top-btn navy-btn">등록</a>
        </div>
      </div>

      <div class="item_list item_list_2 notice-item_list">
        <ul class="item_list_ul">
          <li v-for="notice in notices" :key="notice.id">
            <div class="img_wrap">
              <img :src="notice.imageUrl" alt="">
            </div>
            <div class="item_txt_wrap">
              <p class="title_p">{{ notice.title }}</p>
              <p class="subtitle_p">{{ notice.previewContent }}</p>
              <div class="btn_wrap">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
            <div class="order_btn_wrap">
              <button><i class="xi-arrow-down"></i></button>
              <button><i class="xi-arrow-up"></i></button>
            </div>
          </li>
        </ul>
      </div>

      <div id="pagination"></div>

      <div class="null-txt" v-if="!notices.length">
        등록한 사진이 없습니다.
      </div>
    </div>
  </div>
</template>