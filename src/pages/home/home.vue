<template>
  <div>
    <!-- head -->
    <!-- <head-top signin-up='home'>
      <span slot='logo' class="head_logo" @click="reload">爱家电</span>
    </head-top> -->
    <head-top :head-title="headTitle" ></head-top>
    <!-- head end-->
    <!-- body -->
  
     <div>
       <p>
       家电类型:
       <select v-model="appTypeId">
      <option value="bingxiang">冰箱</option>
      <option value="kongtiao">空调</option>
      <option value="reshuiqi">热水器</option>
      <option value="xiyiji">洗衣机</option>
    </select>
       </p>
       <p>
         厂商:
        <select v-model="vendorId">
      <option value="meidi">美的</option>
      <option value="geli">格力</option>
      <option value="haier">海尔</option>
      <option value="suboer">苏泊尔</option> 
        </select>
       </p>
    
      <!-- <div class="app_list_container">
        <div v-for="(item,i) in items" :key="i" class="apps">
          <figure>
            <img :src="imageBaseUrl + item.src" />
            <input type="checkbox"  :value="item.id" v-model="appTypeIds">
            <figcaption>{{item.name}}</figcaption>
          </figure>
        </div>
      </div> -->

      <p>
        <h3>安装说明:</h3>
      </p>
      <textarea rows="10" cols="30" v-model="fixMsg" placeholder="对报修家电的说明"></textarea>
      <router-link :to="{name: 'contact' }">
        <div @click="next" class="next">下一步</div>
      </router-link>
    </div> 
  
    <foot-guide></foot-guide>
  </div>
</template>


<script>
  // import Vue from 'vue'
  import headTop from '@/components/header/head'
  import footGuide from '@/components/footer/footGuide'
  import { qryAllHomeAppliances } from '@/service/getData'
  import '@/style/swiper.min.css'
  import { mapActions } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        items: [],
        // fixMsg: '',
        imageBaseUrl: 'static/images/',
        headTitle: '爱家电'
      }
    },
    computed: {
      fixMsg: {
        get () {
          return this.$store.state.fixMsg
        },
        set (val) {
          this.$store.commit('updateFixMsg', val)
        }
      },
      appTypeId: {
        get () {
          return this.$store.state.appTypeId
        },
        set (val) {
          this.$store.commit('udpateAppTypeId', val)
        }
      },
      vendorId: {
        get () {
          return this.$store.state.vendorId
        },
        set (val) {
          this.$store.commit('updateVendorId', val)
        }

      }
    },
    // }mapState([
    //   'appTypeId',
    //   'vendor',
    //   'fixMsg'
    // ]),
    mounted () {
      qryAllHomeAppliances().then(res => {
        // debugger
        this.items = res.data
      })
    },
    components: {
      headTop,
      footGuide
    },
    methods: {
      ...mapActions([
        'getUserInfo',
        'appInfo'
      ]),
      next () {
        this.$store.commit('udpateAppTypeId', 2)
        this.$store.commit('updateVendorId', 2)
        // this.appInfo('xyj', 'meide', this.fixMsg)
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
    // text-align: center;
    /* color: #2c3e50; */
    margin-top: 60px;
  }
  .next{
     position: fixed;
    left: .4rem;
    height: 2.5rem;
    // 144px
    bottom: 2.5rem;
    width: 95%;
    background-color: $blue; 
  //  position: fixed;
  //   width: 100%;
  //   bottom: 3.0rem;
  //   height: 1.95˚rem;
    text-align: center;
  //   background-color: $blue; 
  }
 
  .app_list_container{
    display:flex;
   text-align: left; 
    // @include fj(center);
     flex-wrap: wrap;
     div{
      width: 100%; 
      padding: 4px;
      figure{
       figcaption{
         padding-left: 0.4rem
       }
      }
     }
		
  }
 textarea{
   border: 2px solid;
 } 

</style>
