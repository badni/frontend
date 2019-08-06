<template>
  <div id="app">
    <!-- Navigation -->
    <navbar />

    <!-- Full Page Image Header with Vertically Centered Content -->
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light">خوش آمدید به دنیای زیبایی</h1>
            <p class="lead">در دنیای هنرهای ما گم بشوید!</p><el-button type="primary" round>ادامه</el-button>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <h2 class="font-weight-light">Page Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>

</style>

<style lang="scss">
#app {
  font-family: IRANSansWeb, Tahoma, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  direction: rtl;
}

.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('https://source.unsplash.com/BtbjCFUvBXs/1920x1080');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>