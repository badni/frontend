<template>
    <div>
        <navbar />
        <!-- Full Page Image Header with Vertically Centered Content -->
        <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
                <h1 class="font-weight-light white">خوش آمدید به دنیای زیبایی</h1>
                <p class="lead white">در دنیای هنرهای ما گم شوید اینجا بد نی!</p><el-button type="primary" round>ادامه</el-button>
            </div>
            </div>
        </div>
        </header>

        <!-- Page Content -->
        <section class="py-5">
        <div class="container">
            <h2 class="font-weight-bold mb-5">محصولات ما</h2>
            <div class="row">
            <div class="col-3">
                <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="hover">
                <img src="../assets/products/1.jpg" class="image">
                </el-card>
            </div>
            <div class="col-3">
                <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="hover">
                <img src="../assets/products/2.jpg" class="image">
                </el-card>
            </div>
            <div class="col-3">
                <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="hover">
                <img src="../assets/products/3.jpg" class="image">
                </el-card>
            </div>
            <div class="col-3">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Card name</span>
                </div>
                </el-card>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
import navbar from './navbar'

export default {
    name: 'homepage',
    components: {
        navbar
    }
}
</script>


<style lang="scss" scoped>

.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('../assets/splash/4.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.white {
  color: #fff;
  text-shadow: #000 0 2px 0;
}
</style>
