<template>
  <div id="wrap">
    <main id="main" class="login_page">
      <div class="login_wrap">
        <div class="LOGO_wrap">
          <img src="../../images/AoroaLabs_logo_b.svg" alt="">
        </div>

        <div class="login_input_wrap">
          <input type="text" name="" id="" placeholder="ID" v-model="username">
          <input type="password" name="" id="" placeholder="PASSWORD" v-model="password">
        </div>

        <a href="#" class="login_btn" @click.prevent="handleLogin">로그인</a>

        <div class="coworkerweb_logo_Wrap">
          <img src="./images/coworkerweb_logo.svg" alt="">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Implement login logic here
      // This might involve form validation, sending an AJAX request to the server, and handling the response
      console.log('Login clicked! Username:', this.username, 'Password:', this.password);
      // Replace with your actual login logic and potentially redirect to the admin panel
    },
  },
};
</script>