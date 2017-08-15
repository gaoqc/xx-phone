<template>
  <div>
    <!-- head -->
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <!-- head end-->
    <!-- body -->
  
    <div>
      I'm news index 
    </div>
  
    <foot-guide></foot-guide>
  </div>
</template>


<script>
  // import Vue from 'vue'
  import headTop from '@/components/header/head'
  import footGuide from '@/components/footer/footGuide'
  import '@/style/swiper.min.css'
  export default {
    name: 'home',
    data () {
      return {
        headTitle: '知识库'
      }
    },
    mounted () {
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
      // 点击图标刷新页面
      reload () {
        window.location.reload()
      }
    }

  }

</script>

<style lang="scss" scoped>
//   @import 'src/style/mixin';
//   #app {
//     font-family: 'Avenir', Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     /* color: #2c3e50; */
//     margin-top: 60px;
//   }
  
 

</style>
