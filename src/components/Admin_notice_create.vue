<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap">
        <div class="title-wrap col-group">
          <h2>NOTICE</h2>
        </div>

        <form action="">
          <div class="form-wrap row-group popup-form-wrap notice-form-wrap">
            <div class="form-item row-group">
              <p class="item-default">
                질문 <span class="red">*</span>
              </p>
              <input type="text" class="form-input" placeholder="게시물 제목을 작성해주세요." v-model="notice.title" />
            </div>

            <div class="form-item row-group">
              <p class="item-default">
                미리보기 내용 <span class="red">*</span>
              </p>
              <textarea class="form-input form-textarea" placeholder="리스트에서 열람가능한 내용을 작성해주세요." v-model="notice.previewContent"></textarea>
            </div>

            <div class="form-item row-group">
              <p class="item-default">
                썸네일 이미지 <span class="red">*</span>
              </p>
              <div class="file-upload-wrap">
                <input type="file" id="popup_file" accept="image/gif, image/jpg, image/jpeg, image/png, image/*" @change="handleImageUpload">
                <label for="popup_file" class="file-upload-btn white-btn">
                  이미지 등록
                </label>
                <div class="file-preview" v-if="previewImage">
                  <img :src="previewImage" alt="Preview image" />
                  <button type="button" class="file-del-btn" @click="previewImage = null">
                    <i class="xi-close"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="form-item editor row-group">
              <p class="item-default">
                게시물 내용 <span class="red">*</span>
              </p>
              <div id="editor"></div>
            </div>
          </div>
        </form>

        <div class="form-btn-wrap col-group bw-btn-wrap">
          <a href="" class="form-prev-btn white-btn">취소</a>
          <button class="form-submit-btn white-btn" type="submit">등록 후 계속</button>
          <button class="form-prev-btn dark-btn" type="submit">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill'; // Assuming you have Quill installed

export default {
  data() {
    return {
      notice: {
        title: '',
        previewContent: '',
      },
      previewImage: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },
  },
  mounted() {
    var toolbarOptions = [
      // ... same toolbar options as before
    ];

    var quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow', // or 'bubble'
    });
  },
};
</script>