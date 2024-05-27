<template>
  <div id="wrap">
    <div class="admin-container">
      <header id="header"></header>

      <div class="admin-wrap">
        <div class="title-wrap col-group">
          <h2 class="main-title">FAQ</h2>
        </div>

        <form action="">
          <div class="form-wrap row-group faq">
            <div class="form-item row-group">
              <p class="item-default">
                분류
                <span class="red">*</span>
              </p>
              <select name="" id="" class="form-input">
                <option value="">분류를 선택해주세요.</option>
                </select>
            </div>
            <div class="form-item row-group">
              <p class="item-default">
                질문
                <span class="red">*</span>
              </p>
              <input type="text" class="form-input" placeholder="질문을 작성해주세요." />
            </div>

            <div class="form-item editor row-group">
              <p class="item-default">
                답변
                <span class="red">*</span>
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