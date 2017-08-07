<template>
  <div id="custInfo">
      <p>称呢:<input type='text' name='name'></input></p>
      <p>手机号码:<input type='text' name='name'></input></p>
      <p>地址:<input type='text' name='name'></input></p>
      <router-link :to="{name: 'home'}">上一步</router-link>
  </div>
</template>

<script>
  // import Vue from 'vue'
  export default {
    name: 'custInfo',
    data () {
      return {}
    },
    created () {
      // debugger
      // Vue.$on('next', (s) => { alert(s) })
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
  

</style>
