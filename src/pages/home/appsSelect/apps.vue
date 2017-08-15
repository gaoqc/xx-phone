<template>
  <div>
    
  
    <div>
      <div class="app_list_container">
        <div v-for="(item,i) in items" :key="i" class="app">
          <figure>
            <img :src="imageBaseUrl + item.src" />
            <figcaption>{{item.name}}</figcaption>
          </figure>
        </div>
      </div>
      <p>
        <h3>安装说明:</h3>
      </p>
      <textarea rows="10" cols="30" v-model="fixMsg" placeholder="对报修家电的说明"></textarea>
      <router-link :to="{name: 'custInfo' }">
        <div @click="next" class="next">下一步</div>
      </router-link>
    </div>
  
  </div>
</template>


<script>
  // import Vue from 'vue'
  import { qryAllHomeAppliances } from '@/service/getData'
  import '@/style/swiper.min.css'
  export default {
    name: 'home',
    data () {
      return {
        items: [],
        fixMsg: '',
        imageBaseUrl: 'static/images/'
      }
    },
    mounted () {
      qryAllHomeAppliances().then(res => {
        this.items = res
      })
    },
    methods: {
      next () {
        // debugger
      },
      // 点击图标刷新页面
      reload () {
        window.location.reload()
      }
    }

  }

</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    margin-top: 60px;
  }
  .next{
   position: fixed;
    width: 100%;
    bottom: 3.0rem;
    height: 1.95˚rem;
    text-align: center;
    background-color: $blue; 
  }
 
  .app_list_container{
    display:flex;
    // @include fj(center);
     flex-wrap: wrap;
     div{
      width: 144px; 
      padding: 4px;
     }
		
  }
 textarea{
   border: 2px solid;
 } 

</style>
