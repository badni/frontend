<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><div class="logo"></div></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">خانه
                  <span class="sr-only">(current)</span>
                </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">دست‌بند</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">گل‌دوزی</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">مجسمه</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <el-button type="success" class="signup-btn" v-on:click="goSignup()" round>ثبت‌نام</el-button>
            <el-button type="primary" class="signin-btn" v-on:click="goLogin()" round>ورود</el-button>
            <el-button type="primary" icon="el-icon-s-goods" circle></el-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    goSignup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bg-dark-custom {
    background-color: #1c1c1c
}

.signup-btn {
    border-radius: 0 20px 20px 0 !important
}

.signin-btn {
    border-radius: 20px 0 0 20px !important
}

.logo {
    background-image: url("../assets/logo.svg");
    background-repeat: no-repeat;
    background-size: auto;
    height: 22px;
    width: 63px;
}
</style>