<template>
  <div class="container">
    <div class="dialog">
      <p class="title">新增/修改时段价</p>
      <div class="content">
        <p class="subTitle">时段：</p>
        <div class="period" v-for="(item,index) in arr" :key="index">
          <div class="lt">
            <picker @change="bindStartTimeChange" :mode="'time'" :value="startTimeData" :start="'00:00'" :end="'23:59'">
              <input type="text" disabled placeholder="请选择" :value="startTime" placeholder-style="color: #999999;">
            </picker>
            <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow.png" alt="">
          </div>
          <div class="center">至</div>
          <div class="rt">
            <picker @change="bindEndTimeChange" :value="endTimeData" :mode="'time'" :start="'00:00'" :end="'23:59'">
              <input type="text" disabled placeholder="请选择" :value="endTime" placeholder-style="color: #999999;">
            </picker>
            <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow.png" alt="">
          </div>
          <div class="fd">
            <div class="del" @click="del('del')" v-if="arr.length != 1"><img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_del.png" alt=""></div>
            <div class="add" @click="chengeTime('add')" v-if="index == arr.length - 1"><img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_add.png" alt=""></div>
          </div>
        </div>
        <p class="subTitle">涨跌比例：</p>
        <div class="period">
          <div class="lt two">
            <picker @change="bindRatioChange" :value="ratioIndex" :range="ratioData">
              <input type="text" disabled placeholder="请选择涨跌比例" :value="ratio" placeholder-style="color: #999999;">
            </picker>
            <img src="https://charge.xmnewlife.com/images/newlife_master/price_set/ic_arrow.png" alt="">
          </div>
        </div>
      </div>
      <div class="btn" @click="submit()">
        确定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      //该数组控制input动态添加、删除
      arr: [1], 
      //开始时间段数组                 
      startTimeData: '12:00',  
      startTime: '',
      start: '00:00',
      //结束时间段数组
      endTimeData: '18:00',  
      endTime: '',
      end: '',//结束时间不能小于开始时间
      //涨跌比例数组
      ratioData: ['比例1','比例2','比例3','比例4','比例5'],
      ratioIndex: 0,
      ratio: '',
    }
  },
  mounted() {

  },
  methods: {
    chengeTime(type) {
      if(type == 'add'){
        this.arr.push(1)
      }else{
        this.arr.pop(1)
      }
      console.log(this.arr)
    },
    bindStartTimeChange(e) {
      //console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.startTimeData = e.mp.detail.value
      this.startTime = this.startTimeData
    },
    bindEndTimeChange(e) {
      //console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.endTimeData = e.mp.detail.value
      this.endTime = this.endTimeData
    },
    bindRatioChange(e) {
      //console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.ratioIndex = e.mp.detail.value
      this.ratio = this.ratioData[this.ratioIndex]
    },
    del(type) {
      var that = this
      wx.showModal({
        title: '提示',
        content: '确定删除这个时段电价吗？',
        showCancel: false,
        confirmText: "主操作",
        cancelText: "辅助操作",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            that.chengeTime(type)
          }else{
            console.log('用户点击辅助操作')
          }
        }
      });
    },
    submit() {
      var that = this
      wx.showModal({
        content: '确定设置该时段电价吗？',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            that.$emit('getMessage', false)
          }
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../static/assets/scss/components/dialog.scss";

</style>
