<template>
  <div id="coupons" class="coupons parent">
    <!-- tabs -->
    <div class="section child">
      <view class="page__bd">
        <view class="weui-tab">
          <view class="weui-navbar">
              <block v-for="(item,index) in tabs" :key="index">
                <view :id="index" :class="[weui,{'weui-bar__item_on':activeIndex == index}]" @click="tabClick($event)">
                  <view class="weui-navbar__title">{{item}}</view>
                </view>
              </block>
              <view class="weui-navbar__slider" v-bind:style="'left:'+sliderLeft+'px; transform: translateX('+sliderOffset+'px);-webkit-transform: translateX('+sliderOffset+'px);'"></view>
          </view>
          <view class="weui-tab__panel">
            <!-- 可用优惠券 -->
            <view class="weui-tab__content" :hidden="activeIndex != 0">
              <div class="content">
                <!-- 空空如也 -->
                <div v-if="empty" class="empty">
                  <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/empty.png" alt="">
                  空空如也~
                </div>
                <div class="cell" v-if="!empty" @click="skip('couponsDetails')">
                  <div class="box">
                    <div class="lt">
                      <p>￥<span class="price">5</span></p>
                    </div>
                    <div class="rt">
                      <div class="hd">满5.01元可用</div>
                      <div class="fd">2018.12.18  15:45:21</div>
                    </div>
                  </div>
                  <div class="foot">
                    <p>说明：充电券仅在充电时使用</p>
                  </div>
                </div>
              </div>
            </view>
            <!-- 过期优惠券 -->
            <view class="weui-tab__content" :hidden="activeIndex != 1">
              <div class="content">
                <!-- 空空如也 -->
                <div v-if="empty" class="empty">
                  <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/empty.png" alt="">
                  空空如也~
                </div>
                <div class="cell used" v-if="!empty">
                  <img class="img_mark" src="https://charge.xmnewlife.com/images/newlife_master/history_coupon/ic_expired.png" alt="">
                  <div class="box " @click="skip('couponsDetails')">
                    <div class="lt">
                      <p>￥<span class="price">10</span></p>
                    </div>
                    <div class="rt">
                      <div class="hd">满10.01元可用</div>
                      <div class="fd">2018.12.18  15:45:21</div>
                    </div>
                    
                  </div>
                  <div class="foot">
                    <p>说明：充电券仅在充电时使用</p>
                  </div>
                </div>
              </div>
            </view>
          </view>
        </view>
      </view>
    </div>
  </div>
</template>
<script>
import utils from "@/utils/index";
import { mapState, mapActions } from 'vuex'
import { getcouponlistbyuser, checkToken } from '@/api/api'  

export default {
  data() {
    return {
      id: '',
      type: 0,
      tabs: ["可用优惠券","过期优惠券"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      weui: 'weui-navbar__item',
      tabelData: [],
      empty: false
    };
  },
  onShow() {
    
  },
  onLoad() {
    var that = this;
    var sliderWidth = 20; // 需要设置底部slider的宽度，用于计算中间位置
    wx.getSystemInfo({
      success: function(res) {
        that.sliderLeft = (res.windowWidth / that.tabs.length - sliderWidth) / 2,
        that.sliderOffset = res.windowWidth / that.tabs.length * that.activeIndex
      }
    });
  },
  methods: {
    //获取我的优惠券列表
    getcouponlistbyuserFun() {
      
    },
    ToTime(timestamp) {
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000 
      timestamp = timestamp + ""
      if(timestamp.length == 10){
        var date = new Date(timestamp * 1000);
      }else if(timestamp.length == 13){
        var date = new Date(timestamp);
      }
      var Y = date.getFullYear() + "-";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
      var s = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
      return Y + M + D + h + m + s;
    },
    //页面路由跳转
    skip(type,pramas) {
      wx.navigateTo({
        url: "/pages/electricitySet/" + type + "/main"
      });
    },
    //tab切换
    tabClick(e) {
      this.type = parseInt(e.currentTarget.id)
      this.sliderOffset = e.currentTarget.offsetLeft
      this.activeIndex = e.currentTarget.id
    }
  },
  computed: {
    
  },
  watch: {

  },

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/btn.scss";
@import "../../../../static/assets/scss/electricitySet/coupons.scss";
</style>

