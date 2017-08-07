<template>
  <div id="custInfo">
    <form v-on:submit.prevent>
      <p>称呢:<input type='text' name='name'></input></p>
      <p>手机号码:<input type='text' name='name'></input></p>
      <p>地址:<input type='text' name='name'></input></p>
      <router-link :to="{name: 'home'}">上一步</router-link>
      <input type="submit" name="submit" @click="custInfo" value="提交"/>
      </form>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import { postCustInfo } from '../../service/getData'
  export default {
    name: 'custInfo',
    data () {
      return {}
    },
    created () {
      // debugger
      // Vue.$on('next', (s) => { alert(s) })
    },
    methods: {
      custInfo () {
        // getUser().then(res => {
        //   alert(res)
        // })
        postCustInfo('gaoqc', '17704027838', '广东省深圳市').then(res => {
        })
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
  

</style>
