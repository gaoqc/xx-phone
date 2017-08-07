<template>
  <div id="home">
      <div  v-for="(item,i) in items" :key="i" :src="item.src">
        <input type="checkbox" name="ckd"  :value="item.id"> {{item.name}}</input>
       </div>
          <router-link :to="{name: 'custInfo' }" ><div @click="next">下一步</div></router-link>
       <!-- <button type='submit' @click="next">下一步</button> -->

  </div>
</template>

<script>
  // import Vue from 'vue'
  export default {
    name: 'home',
    data () {
      return {
        items: [{name: '冰箱', id: 'bx', src: '../../assets/images/bingxiang.png'}, {name: '空调', id: 'kt', src: '../../assets/images/kongtiao.png'}, {name: '洗衣机', id: 'xyj', src: '../../assets/images/xiyiji.png'}]
      }
    },
    methods: {
      next () {
      }
    }

  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /* #prod {
   height: 100%;
    width: 100%;
   background: url(../../assets/images/bingxiang.png) no-repeat;
 }  */

</style>
