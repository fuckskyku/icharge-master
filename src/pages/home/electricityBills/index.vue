<template>
  <div id="index" class="parent">
      <div class="child">
        <div class="header">
          <div class="energy">
            <p class="title">今日电量（度）</p>
            <p class="context">{{energy}}</p>
          </div>
        </div>
        <div class="section">
          <ul>
            <li class="cell" @click="skip('electricityBillsDetails')">
              <div class="hd">
                <p class="subTitle">使用电量</p>
              </div>
              <div class="fd">
                <p class="degree">150度</p>
                <p class="time">2017-11-16 15:55:02</p>
              </div>
            </li>   
            <li class="cell">
              <div class="hd">
                <p class="subTitle">使用电量</p>
              </div>
              <div class="fd">
                <p class="degree">150度</p>
                <p class="time">2017-11-16 15:55:02</p>
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
      energy: '0.0', //今日电量
      degree: '233'
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
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/home/electricityBills.scss";
</style>
