<template>
  <div id="index" class="aprent">
    <div class="child">
      <div class="section">
        <div class="cell">
          <div class="title">
            桩站公司名称
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入公司名称" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="cell">
          <div class="title">
            统一社会信用代码
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入统一社会信用代码" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="cell clear_broder">
          <div class="title">
            桩站营业执照正面
          </div>
          <div class="subTitle">
            <img src="/static/img/quality/img_2.png" alt="">
          </div>
        </div>
        <div class="cell">
          <div class="title">
            管理员姓名
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入管理员姓名" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="cell">
          <div class="title">
            身份证号
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入身份证号" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="cell clear_broder">
          <div class="title">
            身份证正面+本人拍照
          </div>
          <div class="subTitle">
            <img src="/static/img/quality/img_1.png" alt="">
          </div>
        </div>
        <div class="cell">
          <div class="title">
            桩站具体地址
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入具体地址" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="cell">
          <div class="title">
            银行名称
          </div>
          <div class="subTitle relative">
            <div>
              <picker @change="bindBankChange" :value="bankIndex" :range="bankData">
                <input type="text" disabled placeholder="请选择" :value="bank" placeholder-style="color: #999999;">
              </picker>
            </div>
            <img class="arrow" src="/static/img/quality/ic_arrow.png" alt="">
            <!-- <input type="text" placeholder="请选择" placeholder-style="color: #999999;"> -->
          </div>
        </div>
        <div class="cell">
          <div class="title">
            银行卡账号
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入银行卡账号" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="desc">* 个体户的必须用法人本身的银行账号，企业必须用对公账号。不支持信用卡，6~35位。</div>
        <div class="cell">
          <div class="title">
            确认银行卡账号
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入银行卡账号" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="desc">* 再次输入银行卡账号进行确认</div>
        <div class="cell">
          <div class="title">
            银行卡开户地址
          </div>
          <div class="subTitle border_bottom" style="padding-bottom: 20rpx;">
            <div class="relative in">
              <picker @change="bindProvinceChange" :value="provinceIndex" :range="provinceData">
                <input type="text" disabled placeholder="请选择省份" :value="province" placeholder-style="color: #999999;">
              </picker>
              <img class="arrow" src="/static/img/quality/ic_arrow.png" alt="">
            </div>
            <div class="relative in">
              <picker @change="bindCityChange" :value="cityIndex" :range="cityData">
                <input type="text" disabled placeholder="请选择城市" :value="city" placeholder-style="color: #999999;">
              </picker>
              <img class="arrow" src="/static/img/quality/ic_arrow.png" alt="">
            </div> 
          </div>
          <div class="subTitle">
            <input type="text" placeholder="请输入支行名称" placeholder-style="color: #999999;">
          </div>
        </div>
        <div class="desc">* 填写支行名称，如吕岭支行。请不要重复填写省市信息和银行名称。</div>
      </div>
      <div class="footer">
        <button class="btn disabled">立即提交</button>
      </div>
    </div>
      
  </div>
</template>
<script>
import utils from "@/utils/index";
import { login, getUcCenter } from '@/api/api'  
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      bankIndex: 0,
      provinceIndex: 0,
      cityIndex: 0,
      bankData: ['厦门银行','工商银行','建设银行','招商银行','农业银行'],
      provinceData: ['福建','北京','重庆','云南','广东'],
      cityData: ['厦门','福州','泉州','三明','漳州'],
      bank: '',
      province: '',
      city: '',
      address: '',
      value: [9999]
    };
  },
  computed: {
  
  },
  mounted() {

  },
  components: {

  },
  methods: {
    bindBankChange(e) {
      //console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.bankIndex = e.mp.detail.value
      this.bank = this.bankData[this.bankIndex]
      //console.log(this.bank)
    },
    bindProvinceChange(e) {
      this.provinceIndex = e.mp.detail.value
      this.province = this.provinceData[this.provinceIndex]
    },
    bindCityChange(e) {
      this.cityIndex = e.mp.detail.value
      this.city = this.cityData[this.cityIndex]
    },
  },
  watch: {},

};
</script>

<style scoped lang="scss">
@import "../../../../static/assets/scss/quality/quality.scss";
@import "../../../../static/assets/scss/btn.scss";

</style>
