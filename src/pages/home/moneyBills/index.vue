<template>
  <div id="index" class="parent">
      <div class="child">
        <div class="header">
          <div class="withdrawal" @click="skip('withdrawalApply')">申请提现</div>
          <div class="energy">
            <p class="title">当前余额（元）</p>
            <p class="context">{{balance}}</p>
          </div>
          <div class="fd">
            <div class="lt">
              <p>可提现余额（元）</p>
              <p>56.5</p>
            </div>
            <div class="center">
              <div class="line"></div>
            </div>
            <div class="rt">
              <p>冻结金额（元）</p>
              <p>23333</p>
            </div>
          </div>
        </div>
        <div class="section">
          <ul>
            <li class="cell"  @click="skip('moneyBillsDetails')">
              <div class="hd">
                <div class="icon"><img src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_price2.png" alt=""></div>
                <div class="context">
                  <p class="title">收入</p>
                  <p class="subTitle">107.4元</p>
                </div>
              </div>
              <div class="fd">
                <p class="time">2017-11-16 15:55:02</p>
                <p class="desc">用户买电</p>
              </div>
            </li>
            <!--  -->
            <li class="cell">
              <div class="hd">
                <div class="icon"><img src="https://charge.xmnewlife.com/images/newlife_master/index_charge_fund/ic_price.png" alt=""></div>
                <div class="context">
                  <p class="title">扣佣</p>
                  <p class="subTitle">18.4元</p>
                </div>
              </div>
              <div class="fd">
                <p class="time">2017-11-16 15:55:02</p>
                <p class="desc">用户买电</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      balance: '0.00'
    };
  },
  computed: {
  
  },
  mounted() {

  },
  components: {

  },
  methods: {
    skip(route) {
      wx.navigateTo({
        url: "/pages/home/" + route + "/main"
      })
    }
  },
  watch: {

  },

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/home/moneyBills.scss";
</style>
