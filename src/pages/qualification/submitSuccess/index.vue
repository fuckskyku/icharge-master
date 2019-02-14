<template>
  <div id="index" class="submit">
    <div class="banner"><img src="https://charge.xmnewlife.com/images/newlife_master/quality/ic_right.png" alt=""></div>
    <div class="title">提交成功</div>
    <div class="subTitle">您已成功提交资质认证信息请耐心等待我司工作人员的审核处理审核通过后，我司会与您联系并且签订合同、收取保证金、安排对接</div>
  </div>
</template>
<script>
import utils from "@/utils/index";
import { login, getUcCenter } from '@/api/api'  
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      msg: '',
      time: "12:01",
      countdown: 3,
      userInfo: {},
      isAgree: false,
      disabled: true,
      style: "btn"
    };
  },
  onLaunch() {

  },
  onShow() {
    
  },
  mounted() {
    
  },
  methods: {
    into(){
      wx.reLaunch({
        url: "/pages/index/main"
      });
    }
    
  },
  computed: {
    
  },
  components: {
    
  },
  
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/quality/submit.scss";


</style>
