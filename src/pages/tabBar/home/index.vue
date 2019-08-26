<template>
  <div id="index" class="parent">
      <div class="child">
        <div class="header" @click="skip('home/moneyBills')">
          <div class="hd">
            <div class="lt">
              今天已入账：
            </div>
            <div class="rt">
              <span>{{recorded}}笔</span>
              <img class="img_arrow_white" src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_arrow_white.png" alt="">
            </div>
          </div>
          <div class="bd">
            <span>{{amount}}</span>元
          </div>
        </div>
        <div class="section">
          <div class="charge" @click="skip('home/electricityBills')">
            <div class="hd">
              <div class="line"></div>
              <div class="lt">今天已充电</div>
              <div class="rt">
                <span>{{chargeRecorded}}次</span>
                <img class="img_arrow" src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_arrow_gray.png" alt="">
              </div>
            </div>
            <div class="bd">
              <div class="lt" v-if="isUse"><span>{{useElectric}}</span> 度</div> 
              <div class="lt"  v-if="!isUse"><span>{{useElectric}}</span> 度(今天尚未有人开始充电)</div> 
            </div>
          </div>
          <div class="use" @click="skip('home/useCondition')">
            <div class="hd">
              <div class="line"></div>
              <div class="lt">充电桩在用情况</div>
              <img class="img_arrow" src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_arrow_gray.png" style="margin-right:30rpx;margin-top:-4rpx;" alt="">
            </div>
            <div class="bd">
              <div class="lt"><span>{{useNum}}</span> 根在用</div> 
              <div class="rt"><span>{{idleNum}}</span> 根闲置</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="hd">
            <img class="tip" src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_car.png" alt="">
            <p>停留过久的车辆</p>
          </div>
          <ul class="bd">
            <li class="cell" style="color:#999999;" v-if="!overstay">
              当前没有停留过久的车辆
            </li>
            <div v-if="overstay">
              <li class="cell">
                <div class="lt">闽D 655478</div>
                <div class="center">张先生</div>
                <div class="rt">15805910347</div>
              </li>
              <li class="cell">
                <div class="lt">闽D 655478</div>
                <div class="center">张先生</div>
                <div class="rt">15805910347</div>
              </li>
              <li class="cell">
                <div class="lt">闽D 655478</div>
                <div class="center">张先生</div>
                <div class="rt">15805910347</div>
              </li>
              <li class="cell">
                <div class="lt">闽D 655478</div>
                <div class="center">张先生</div>
                <div class="rt">15805910347</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recorded: '0',
      amount: '0.0',
      chargeRecorded: '0',
      useElectric: '0.0',
      useNum: '0',
      idleNum: '233', 
      isUse: false,
      overstay: true,   //停留过久
    };
  },
  computed: {
  
  },
  mounted() {

  },
  async onPullDownRefresh() {
    wx.setNavigationBarTitle({
      title: '刷新中'
    })//动态设置当前页面的标题。
    wx.showNavigationBarLoading();//在当前页面显示导航条加载动画。
    // this.init();//对init方法进行了重新加载
    setTimeout(()=>{
      wx.stopPullDownRefresh();//停止当前页面下拉刷新。
      wx.setNavigationBarTitle({
        title: '特电-桩站端'
      })//动态设置当前页面的标题。
      wx.hideNavigationBarLoading();//在当前页面隐藏导航条加载动画
    },1000)
  },
  components: {

  },
  methods: {
    init() {

    },
    skip(route) {
      wx.navigateTo({
        url: "/pages/" + route + "/main"
      })
    }
  },
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/home/home.scss";
</style>
