<template>
  <div id="index" class="parent">
    <div class="child container">
      <div v-if="!empty">
        <ul>
          <li class="cell">
            <div class="hd">
              <div class="line"></div>
              <div class="lt">时段一</div>
              <div class="rt">
                <div class="edit" @click="visibility = true">编辑</div>
                <div class="del"><img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_delete.png" alt=""></div>
              </div>
            </div>
            <div class="bd">
              <div class="lt">
                <p>09:00~12:00</p>
                <p>09:00~12:00</p>  
                <p>09:00~12:00</p>
              </div> 
              <div class="rt"><p>在各桩服务费基础上上涨10%</p></div> 
            </div>
          </li>
        </ul>
        <div><p class="desc">* 您可通过设置各个时段费用的涨跌（只在‘服务费’基础上上涨下调，基础的‘电费’不会变），来调节各时段前来充电的用户数量，增加充电桩有效利用率。</p></div>
      </div>
      <!-- 空空如也 -->
      <div class="empty" v-if="empty">
        <div class="banner">
          <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/empty.png" alt="">
        </div>
        <p class="desc" style="margin-bottom: 20rpx;">空空如也~</p>
        <p class="desc">您可通过设置各个时段费用的涨跌，来调节各时段前来充电的用户数量，增加充电桩有效利用率。</p>
      </div>
      <div>
        <button class="btn" @click="visibility = true">新增时段电价</button>
      </div>
    </div>
    <!-- dialog -->
    <electricityDialog v-if="visibility" @getMessage="showMsg()" :text="msg" />
  </div>
</template>
<script>
import electricityDialog from "@/components/electricityDialog"

export default {
  data() {
    return {
      empty: false,
      visibility: true,
      msg: "mdzz",
    };
  },
  computed: {
  
  },
  mounted() {

  },
  components: {
    electricityDialog
  },
  methods: {
    showMsg(visibility){
      this.visibility=visibility;
    },
    edit() {

    }
  },
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/btn.scss";
@import "../../../../static/assets/scss/electricitySet/periodElectricity.scss";
</style>
