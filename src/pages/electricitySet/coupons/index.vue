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
                  <img src="/static/img/cut/empty.png" alt="">
                  空空如也~
                </div>
                <div class="box" v-for="(item,index) in tabelData" :key="index" v-if="!empty" @click="skip('couponsDetails',item.id)">
                  <div class="lt">
                    <p>￥<span class="price">{{item.price}}</span>满{{item.threshold}}元可用</p>
                  </div>
                  <div class="rt">
                    <div class="hd">{{item.stationName}}</div>
                    <div class="fd">{{item.getTime}}</div>
                  </div>
                </div>
              </div>
            </view>
            <!-- 已用优惠券 -->
            <view class="weui-tab__content" :hidden="activeIndex != 1">
              <div class="content">
                <!-- 空空如也 -->
                <div v-if="empty" class="empty">
                  <img src="/static/img/cut/empty.png" alt="">
                  空空如也~
                </div>
                <div class="box used" v-for="(item,index) in tabelData" :key="index" v-if="!empty" @click="skip('couponsDetails',item.id)">
                  <img class="img_mark" src="https://charge.xmnewlife.com/images/cut/coupons/ic_used.png" alt="">
                  <div class="lt">
                    <p>￥<span class="price">{{item.price}}</span>满{{item.threshold}}元可用</p>
                  </div>
                  <div class="rt">
                    <div class="hd">{{item.stationName}}</div>
                    <div class="fd">{{item.getTime}}</div>
                  </div>
                </div>
              </div>
            </view>
            <!-- 过期优惠券 -->
            <view class="weui-tab__content" :hidden="activeIndex != 2">
              <div class="content">
                <!-- 空空如也 -->
                <div v-if="empty" class="empty">
                  <img src="/static/img/cut/empty.png" alt="">
                  空空如也~
                </div>
                <div class="box used" v-for="(item,index) in tabelData" :key="index" v-if="!empty" @click="skip('couponsDetails',item.id)">
                  <img class="img_mark" src="https://charge.xmnewlife.com/images/cut/coupons/ic_expired.png" alt="">
                  <div class="lt">
                    <p>￥<span class="price">{{item.price}}</span>满{{item.threshold}}元可用</p>
                  </div>
                  <div class="rt">
                    <div class="hd">{{item.stationName}}</div>
                    <div class="fd">{{item.getTime}}</div>
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
      tabs: ["可用优惠券", "已用优惠券","过期优惠券"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      weui: 'weui-navbar__item',
      tabelData: [],
      empty: false
    };
  },
  onShow() {
    console.log("this.$root.$mp.query",this.$root.$mp.query)
    this.$root.$mp.query.id != undefined ? this.id = this.$root.$mp.query.id : this.id = ''
    this.getcouponlistbyuserFun()
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
      getcouponlistbyuser({
        type: this.type,
        pageSize: 100
      }).then(res =>{
        console.log('res13dsf',res.data)
        if(res.data.code == 200) {
          if(res.data.data.list.length != 0){
            this.empty = false
            this.tabelData = res.data.data.list;
            this.tabelData.forEach(item => {
              item.getTime = this.ToTime(item.getTime)
            });
          }else{
            this.empty = true
          }
        }else{

        }
      })
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
        url: "/pages/userCenter/" + type + "/main?id=" + pramas
      });
    },
    //tab切换
    tabClick(e) {
      this.type = parseInt(e.currentTarget.id)
      this.getcouponlistbyuserFun()
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
.coupons{
  .content{  
    padding: 30rpx 30rpx;
    background: #f4f4f4;
  }
  .box{
    width: 100%;
    height: 160rpx;
    color: #14BF6D;
    background: #ffffff;
    background: url('https://charge.xmnewlife.com/images/cut/coupons/img_coupon1.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    border-radius: 10rpx;
    padding: 42rpx 0 20rpx;
    position: relative;
    z-index: 19;
    margin-bottom: 40rpx;
    .img_hd{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
    }
    .lt{
      flex: 6;
      font-size: 28rpx;
      padding: 0 0 0 25rpx;
      p{
        margin-top: 10rpx;
      }
      .price{
        font-size: 100rpx;
        font-weight: bold;
        margin: 0 10rpx 0 -8rpx;
      }
    }
    .rt{
      flex: 4;
      text-align: right;
      padding: 0 25rpx 0 0;
      .hd{
        color: #333333;
        font-size: 30rpx;
        margin-top: 48rpx;
      }
      .fd{
        color: #999999;
        font-size: 24rpx;
      }
    }
  }
  .used{
    color: #999999 !important;
    background: url('https://charge.xmnewlife.com/images/cut/coupons/img_coupon1.png') no-repeat;
    background-size: 100% 100%;
    .img_mark{
      width: 120rpx;
      height: 94rpx;
      position: absolute;
      top: 0rpx;
      right: 150rpx;
    }
  }
}
.weui-tab{
  background: #ffffff;
}
.weui-navbar{
  border: none; 
}
.weui-navbar{
  color: #999999;
}
.weui-navbar__slider {
  width: 40rpx;
  height: 8rpx;
  border-radius: 8rpx;
}

.weui-panel {
  overflow: auto;
}
.weui-tab__content{
  
}
// overflow
.parent{
  position: absolute;
  height:100%;//高度根据需求自行设定
  width: 100%;
  background: #f4f4f4;
}
.child{
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;  //left,top,right,bottom都为0，充满真个页面
  overflow-y:auto !important;
  overflow-x:hidden !important; //设置Y轴出现滚动条，X轴隐藏
  -webkit-overflow-scrolling: touch; 
}
.empty{
  width: 374rpx;
  height: 360rpx;
  font-size: 34rpx;
  color: #777;
  text-align:center;
  position: relative;
  margin: 0 auto;
  padding-bottom: 30rpx;
  img{
    width: 374rpx;
    height: 288rpx;
  }
}
</style>

