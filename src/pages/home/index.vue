<template>
  <div id="home">
      <div  v-for="(item,i) in items" :key="i" >
        <input type="checkbox" name="ckd"  :value="item.id" :src="item.src" > {{item.name}}</input>
       </div>
          <router-link :to="{name: 'custInfo' }" ><div @click="next">下一步</div></router-link>
       <!-- <button type='submit' @click="next">下一步</button> -->

  </div>
</template>

<script>
  // import Vue from 'vue'
  import { qryAllHomeAppliances } from '../../service/getData'
  export default {
    name: 'home',
    data () {
      return {
        items: []
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
        // alert(this.$data.items)
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
