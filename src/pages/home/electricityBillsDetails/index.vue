<template>
  <div id="index" class="parent">
      <div class="child">
        <div class="section">
          <ul>
            <li class="cell">
              <div class="lt">
                时间
              </div>
              <div class="rt">
                2018年11月9日15:45:30
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                充电流水号
              </div>
              <div class="rt">
                CDLS2018091200093443219
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                电量
              </div>
              <div class="rt">
                173度
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                车牌号  
              </div>
              <div class="rt">
                闽D 890P9
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                使用车位
              </div>
              <div class="rt">
                FD-105
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                充电时长
              </div>
              <div class="rt">
                1小时31分钟
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                充电桩类型
              </div>
              <div class="rt">
                快充 / 慢充
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
    
  
  },
  watch: {
    
  },

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/style.scss";
@import "../../../../static/assets/scss/home/electricityBills.scss";
</style>
