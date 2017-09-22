<template>
  <div>
    <!-- head -->
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <!-- head end-->
    <!-- body begin -->
    <div>
       <ul class="order_list_ul" >
            <li class="order_list_li" v-for="item in orderList" :key="item.id">
               <p>
                家电类型: {{item.appName}}
               </p>
               <p> 厂商:{{item.vendorName}}</p>
                <p>创建时间:{{item.createTime}}</p>  
                <p>订单状态:{{item.status}}</p>
                <p>留言:{{item.fixMsg}}</p>
                   
                   
                <!-- <img :src="imgBaseUrl + item.restaurant_image_url" class="restaurant_image">
                <section class="order_item_right">
                    <section @click="showDetail(item)">
                        <header class="order_item_right_header">
                            <section class="order_header">
                                <h4 >
                                    <span class="ellipsis">{{item.restaurant_name}} </span>
                                    <svg fill="#333" class="arrow_right">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                    </svg>
                                </h4>
                                <p class="order_time">{{item.formatted_created_at}}</p>
                            </section>
                            <p class="order_status">
                                {{item.status_bar.title}}
                            </p>
                        </header>
                        <section class="order_basket">
                            <p class="order_name ellipsis">{{item.basket.group[0][0].name}}{{item.basket.group[0].length > 1 ? ' 等' + item.basket.group[0].length + '件商品' : ''}}</p>
                            <p class="order_amount">¥{{item.total_amount.toFixed(2)}}</p>
                        </section>
                    </section>
                    <div class="order_again">
                        <compute-time v-if="item.status_bar.title == '等待支付'" :time="item.time_pass"></compute-time>
                        <router-link :to="{path: '/shop', query: {geohash, id: item.restaurant_id}}" tag="span" class="buy_again" v-else>再来一单</router-link>
                    </div>
                </section> -->
            </li>
        </ul>
    </div>
    <!-- body end-->
    <foot-guide></foot-guide>
  </div>
</template>


<script>
  // import Vue from 'vue'
  import headTop from '@/components/header/head'
  import footGuide from '@/components/footer/footGuide'
  import { qryOrderList } from '@/service/getData'
  import '@/style/swiper.min.css'
  export default {
    name: 'home',
    data () {
      return {
        headTitle: '订单',
        orderList: ''
      }
    },
    mounted () {
    },
    created () {
      qryOrderList().then(res => {
        this.orderList = res.data
      })
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
