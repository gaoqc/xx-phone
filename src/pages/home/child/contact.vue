<template>
  <div id="custInfo">
    <!-- head -->
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <!-- head end-->
    <div>
       <section v-for=" (item,i) in addresses" :key="i" class="input_container">
        
       
       <p> 
        {{item.userName}}
        {{item.userPhone}}
        </p>
        <p>
        {{item.userDomain}}
       {{item.userAddDetail}} 
        </p>
        <input type="radio" name="addr" :value="item.Id" v-model="addrId" id="item.Id"></input>  
        
      </section>
       <section class="next">
       <router-link :to="{name: 'orderSure' }">
        <div @click="next" class="next">确认</div>
        </router-link>

      </section>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import headTop from '@/components/header/head'
  import footGuide from '@/components/footer/footGuide'
  import { qryUserAddress } from '@/service/getData'
  export default {
    name: 'custInfo',
    data () {
      return {
        userName: '',
        phone: '',
        province: '',
        city: '报修',
        area: '',
        street: '',
        addDetil: '',
        addresses: null,
        headTitle: '联系信息'
      }
    },
    computed: {
      addrId: {
        get () {
          return this.$store.addressId
        },
        set (val) {
          this.$store.commit('updateAddrId', val)
        }
      }
    },
    created () {
      qryUserAddress().then(res => {
        this.addresses = res.data
      })
      // Vue.$on('next', (s) => { alert(s) })
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
    //   custInfo () {
    //     // getUser().then(res => {
    //     //   alert(res)
    //     // })
    //     postCustInfo(this.$data.name, this.$data.phone, this.$data.address).then(res => {
    //       alert(JSON.stringify(res))
    //     })
    //   }
      next () {

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
   .input_container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: .6rem .8rem;
      border-bottom: 1.5rem  solid #f1f1f1;
      input {
        @include sc(.7rem, #666);
      }
      button {
        @include sc(.65rem, #fff);
        font-family: Helvetica Neue, Tahoma, Arial;
        padding: .28rem .4rem;
        border: 1px;
        border-radius: 0.15rem;
      }
      .right_phone_number {
        background-color: #4cd964;
      }
    }
    .next{
     position: fixed;
    left: .4rem;
    height: 2.5rem;
    text-align: center;
    bottom: 2.5rem;
    width: 95%;
    background-color: $blue; 
  //  position: fixed;
  //   width: 100%;
  //   bottom: 3.0rem;
  //   height: 1.95˚rem;
  //   text-align: center;
  //   background-color: $blue; 
  }
//   .head_back{
//   text-align: left; 
//   }
//   .form{
//     display: flex;
//     flex-direction: column;
//     text-align: left;
//     padding-left: 2rem;
//   }
//   .submit{
//     position: fixed;
//     left: .4rem;
//     height: 2.5rem;
//     text-align: center;
//     bottom: 2.5rem;
//     width: 95%;
//     background-color: $blue; 
    
//   }
  

</style>
