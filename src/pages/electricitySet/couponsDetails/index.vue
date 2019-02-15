<template>
  <div id="coupons" class="coupons">
    <div class="content parent"> 
      <div class="child">
        <div class="box" :style="form.statusName == '可用' ? 'background: url(https://charge.xmnewlife.com/images/newlife_master/history_coupon/img_1-2.png) no-repeat;background-size: 100% 100%;' : form.statusName == '已过期' ? 'background: url(https://charge.xmnewlife.com/images/newlife_master/history_coupon/img_3.png) no-repeat;background-size: 100% 100%;color:#999999 !important;' : ''">
          <div class="hd">
            <div class="price" :style="form.statusName == '可用' ? 'color:#FF9C00;' : 'color:#999999;'">￥<span>{{form.price}}</span></div>
            <div class="price_desc">订单金额满{{form.threshold}}元可用</div>
          </div>
          <div class="fd">
            <p>优惠券编号:<span>{{form.serialNumber}}</span></p>
            <p>领取时间: <span>{{form.getDate}}</span></p>
            <p>使用时间: <span>{{form.useStartTime}} 至 {{form.useEndTime}}</span></p>
            <p>总发放数量: <span>{{form.issuedNum}}张</span></p>
            <p>已领取数量: <span>{{form.getNum}}张</span></p>
            <p>已使用数量: <span>{{form.useNum}}张</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from "@/utils/index";
import { mapState, mapActions } from 'vuex'
import { getcoupondetail } from '@/api/api'  

export default {
  data() {
    return {
      form: {
        statusName: '可用',
        price: 5,
        threshold: 5.01,
        serialNumber: '2018091200093443219',
        getDate: '2018.12.12  14:28:22',
        useStartTime: '2018.12.12',
        useEndTime: ' 至 2018.12.13',
        issuedNum: 20,
        getNum: 2,
        useNum: 1
      }
    };
  },
  computed: {
  
  },
  mounted() {

  },
  components: {

  },
  methods: {
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
    ToDate(timestamp) {
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000 
      timestamp = timestamp + ""
      if(timestamp.length == 10){
        var date = new Date(timestamp * 1000);
      }else if(timestamp.length == 13){
        var date = new Date(timestamp);
      }
      var Y = date.getFullYear() + ".";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + ".";
      var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
      return Y + M + D;
    },
    //页面路由跳转
    skip(type,pramas) {
      wx.navigateTo({
        url: "/pages/userCenter/" + type + "/main?id=" + pramas
      });
    },
  
  },
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/electricitySet/couponsDetails.scss";
</style>
