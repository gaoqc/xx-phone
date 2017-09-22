<template>
  <div id="custInfo">
    <!-- head -->
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <!-- head end-->
    <div>
      <form v-on:submit.prevent> 
        <div class="form">
        <p>称呢:
          <input type='text' v-model='name' placeholder='姓名'></input>
        </p>
        <p>手机号码:
          <input type='text' v-model='phone' placeholder='手机号码'></input>
        </p>
        <p>地址:
          <input type='text' v-model='address' placeholder='地址'></input>
        </p>
        </div> 
        <!-- <router-link :to="{name: 'home'}">上一步</router-link> -->
   
        <input type="submit" name="submit" @click="custInfo" value="提交" class="submit" />
      </form>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import headTop from '@/components/header/head'
  import footGuide from '@/components/footer/footGuide'
  import { postCustInfo } from '@/service/getData'
  export default {
    name: 'custInfo',
    data () {
      return {
        name: '',
        phone: '',
        address: '',
        headTitle: '报修',
        appsType: '',
        appsBrand: '',
        imageids: '',
        appsDesc: ''
      }
    },
    created () {
      // debugger
      // Vue.$on('next', (s) => { alert(s) })
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
      custInfo () {
        // getUser().then(res => {
        //   alert(res)
        // })
        postCustInfo(this.$data.name, this.$data.phone, this.$data.address).then(res => {
          alert(JSON.stringify(res))
        })
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
    color: #2c3e50;
    margin-top: 60px;
  }
  .head_back{
  text-align: left; 
  }
  .form{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 2rem;
  }
  .submit{
    position: fixed;
    left: .4rem;
    height: 2.5rem;
    text-align: center;
    bottom: 2.5rem;
    width: 95%;
    background-color: $blue; 
    
  }
  

</style>
