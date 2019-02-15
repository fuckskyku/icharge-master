<template>
  <div id="index">
    <!-- tabs -->
    <div class="header">
      <div class="page__bd">
        <div class="weui-tab">
          <div class="weui-navbar">
            <block v-for="(item,index) in tabs" :key="index">
              <div :id="index" :class="[weui,{'weui-bar__item_on':activeIndex == index}]" @click="tabClick($event)">
                <div class="weui-navbar__title">{{item}}</div>
              </div>
            </block>
            <div class="weui-navbar__slider" v-bind:style="'left:'+sliderLeft+'px; transform: translateX('+sliderOffset+'px);-webkit-transform: translateX('+sliderOffset+'px);'"></div>
          </div>
          <div class="weui-tab__panel">
            <!-- 设置电价 -->
            <div class="weui-tab__content" :hidden="activeIndex != 0">
              <div class="set">
                <ul class="box">
                  <li class="cell">
                    <span class="sign">·</span>
                    <span>电费</span>
                    <input class="input" type="text" placeholder="元 / 度">
                  </li>
                  <li class="cell">
                    <span class="sign">·</span> 
                    <span>服务费</span>
                    <input class="input" type="text" placeholder="元 / 度">
                  </li>
                </ul>
                <div class="section">
                  <button class="btn">提交电价设置</button>
                  <button class="btn cancel">设置各时段涨跌</button>
                </div>
                <div class="footer">
                  <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/img_car.png" alt="">
                </div>
              </div>
            </div>
            <!-- 设置优惠券 -->
            <div class="weui-tab__content coupons_content" :hidden="activeIndex != 1">
              <div class="coupons">
                <div class="header">
                  <div class="title" @click="skip('coupons')">查看优惠券历史<img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow_orange.png" alt=""></div>
                </div>
                <div class="section">
                  <ul class="box">
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>面额</span>
                      <input class="input" type="text" placeholder="元">
                    </li>
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>门槛</span>
                      <input class="input" type="text" placeholder="元">
                    </li>
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>总数</span>
                      <input class="input" type="text" placeholder="对外发布的总张数">
                    </li>
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>限领</span>
                      <input class="input" type="text" placeholder="每个车主限领张数">
                    </li>
                  </ul>
                  <ul class="warp">
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>设置领取起止时间</span>
                      <div class="fd">
                        <span>开始</span><input class="input" type="text" placeholder="请选择时间">
                        <img class="arrow" src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow2.png" alt="">
                      </div>
                      <div class="fd">
                        <span>结束</span><input class="input" type="text" placeholder="请选择时间">
                        <img class="arrow" src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow2.png" alt="">
                      </div>
                    </li>
                    <li class="cell">
                      <span class="sign">·</span>
                      <span>设置使用起止时间</span>
                      <div class="fd">
                        <span>开始</span><input class="input" type="text" placeholder="请选择时间">
                        <img class="arrow" src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow2.png" alt="">
                      </div>
                      <div class="fd">
                        <span>结束</span><input class="input" type="text" placeholder="请选择时间">
                        <img class="arrow" src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow2.png" alt="">
                      </div>
                    </li>
                  </ul>
                  <div class="tip">
                    * 用户可以在领取时间段预先领取,但在使用时间段内才能使用
                  </div>
                </div>
                <div class="footer">
                  <button class="btn" @click="submit()">发放优惠券</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tabsEND -->
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: ["设置电价", "设置优惠券"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      weui: 'weui-navbar__item',
      error: true, //设置错误提示
    };
  },
  computed: {
  
  },
  mounted() {
    var that = this;
    var sliderWidth = 22; // 需要设置底部slider的宽度，用于计算中间位置
    wx.getSystemInfo({
      success: function(res) {
        that.sliderLeft = (res.windowWidth / that.tabs.length - sliderWidth) / 2,
        that.sliderOffset = res.windowWidth / that.tabs.length * that.activeIndex
      }
    });
  },
  components: {
    
  },
  methods: {
    submit() {
      var that = this
      if(this.error == true){
        wx.showModal({
          title: '提示',
          content: '销售起止时间是用户可以预先领取优惠券的时间。使用时间是用户可以把优惠券用来充电的时间段。所以使用时间必须晚于或等同于领取时间。',
          showCancel: false,
          confirmText: "确定",
          cancelText: "取消",
          success: function (res) {
            console.log(res);
            if (res.confirm) {
              that.error = false
            }else{
              console.log('用户点击辅助操作')
            }
          }
        });
      }
    },
    //tab切换
    tabClick(e) {
      console.log("e",e.currentTarget)
      this.sliderOffset = e.currentTarget.offsetLeft
      this.activeIndex = e.currentTarget.id
    },
    //时间转换
    ToTime(timestamp) {
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000 
      timestamp = timestamp + ""
      if(timestamp.length == 10){
        var date = new Date(timestamp * 1000);
      }else if(timestamp.length == 13){
        var date = new Date(timestamp);
      }
      var Y = date.getFullYear() + ".";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) + "." : date.getMonth() + 1) + ".";
      var D = (date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate()) + " ";
      var h = (date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours()) + ":";
      var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() + ":" : date.getMinutes()) + ":";
      var s = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
      return Y + M + D;
    },
    skip(route) {
      wx.navigateTo({
        url: "/pages/electricitySet/" + route + "/main"
      });
    }
  },
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/btn.scss";
@import "../../../../static/assets/scss/electricitySet/electricitySet.scss";
</style>
