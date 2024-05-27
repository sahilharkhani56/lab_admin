<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap">
        <div class="title-wrap col-group">
          <h2 class="main-title">NOTICE</h2>
        </div>

        <form action="">
          <div class="form-wrap row-group popup-form-wrap notice-form-wrap">
            <div class="form-item row-group">
              <p class="item-default">
                질문 <span class="red">*</span>
              </p>
              <input
                type="text"
                class="form-input"
                placeholder="게시물 제목을 작성해주세요."
                v-model="formData.title"
              />
            </div>

            <div class="form-item row-group">
              <p class="item-default">
                미리보기 내용 <span class="red">*</span>
              </p>
              <textarea
                class="form-input form-textarea"
                placeholder="리스트에서 열람가능한 내용을 작성해주세요."
                v-model="formData.previewContent"
              ></textarea>
            </div>

            <div class="form-item row-group">
              <p class="item-default">
                썸네일 이미지 <span class="red">*</span>
              </p>
              <div class="file-upload-wrap">
                <input type="file" id="popup_file" accept="image/*" />
                <label for="popup_file" class="file-upload-btn white-btn">
                  이미지 등록
                </label>
                <div class="file-preview">
                  <p class="file-name">448*320px 비율 고해상도 사진 등록</p>
                  <button type="button" class="file-del-btn">
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
          <button class="form-submit-btn white-btn" type="submit">
            등록 후 계속
          </button>
          <button class="form-prev-btn dark-btn" type="submit">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';

export default {
  data() {
    return {
      formData: {
        title: '',
        previewContent: '',
      },
    };
  },
  mounted() {
    var toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      ['image', 'code-block'],
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
