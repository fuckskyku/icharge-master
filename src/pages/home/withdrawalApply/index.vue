<template>
  <div id="index" class="parent">
      <div class="child">
        <div class="header">
          <div class="content">
            <p class="title">提取账号</p>
            <p class="desc">6217 0018 **** **** 187</p>
          </div>
          <div class="tip">提示：当前仅支持转账到您绑定的对公银行卡</div>
        </div>
        <div class="section">
          <ul>
            <li class="cell">
              <p>提现金额</p>
              <div class="container">
                <span>￥</span>
                <input type="text" placeholder="请输入提现金额" placeholder-style="color:#999999;" :value="balance">
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
      balance: '',

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
@import "../../../../static/assets/scss/home/withdrawalApply.scss";
</style>
