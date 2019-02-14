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
                资金流水号
              </div>
              <div class="rt">
                ZJLS2018091200093443219
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                类型  
              </div>
              <div class="rt">
                收入
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                资金备注
              </div>
              <div class="rt">
                用户充电
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                电量
              </div>
              <div class="rt">
                150度
              </div>
            </li>
            <li class="cell">
              <div class="lt">
                资金数额
              </div>
              <div class="rt">
                63.78元
              </div>
            </li>
          </ul>
          <ul style="margin-top: 30rpx">
            <li class="cell">
              <div class="lt">
                收款账户
              </div>
              <div class="rt">
                6217001930004256198
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                开户行
              </div>
              <div class="rt">
                建设银行
              </div>
            </li>   
            <li class="cell">
              <div class="lt">
                账户名称
              </div>
              <div class="rt">
                厦门牛庄有限公司
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
@import "../../../../static/assets/scss/home/moneyBills.scss";
</style>
