<template>
  <div id="login" class="login">
    <div class="title"><img src="/static/img/LOGO.png" alt="" style="width:100%;height:100%"></div>
    <!-- <div class="title"><open-data type="userAvatarUrl"></open-data></div> -->
    <div class="subTitle">手机号验证登录</div>
    <form>
      <!-- 手机号 -->
      <div class="context">
        <img src="https://charge.xmnewlife.com/images/cut/login_03.png" class="m1" alt="">
        <input class="tel" v-model="mobile" @blur="verificationTel()" @input="verify()" type="tel" pattern="[0-9]*" placeholder="请输入手机号"  placeholder-style="color:#B3B3B3">
        <div class="line"></div>
      </div>
      <!-- 验证码 -->
      <div class="context">
        <img src="https://charge.xmnewlife.com/images/cut/login_06.png" class="m2" alt="">
        <input class="weui-input margin26" v-model="Code" @change="verificationCode()" @input="verify()" type="number" placeholder="请输入验证码"  placeholder-style="color:#B3B3B3">
        <button type="button" :disabled="dis" class="code_btn" :class="[style2,{dis:dis == true}]" @click="getCodes()" value="获取验证码">{{codeMsg}}</button>
        <div class="line"></div>
      </div>
      <button class="btn" :disabled="disabled" :class="[style,{disabled:disabled == true}]" @click="submit()">确 定</button>
    </form>
  </div>
</template>
<script>
import utils from "@/utils/index";
import { register, login, checkToken, getPhoneCode, mobileLogin ,GetSession } from '@/api/api'  
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
       //登录帐号
      mobile: "",
      Code: "",  //验证码
      codeMsg: "获取验证码",
      msg: '',
      isClick: false,
      disabled: true,
      dis: false,
      flag: false,
      err: 0,
      // canIUse: wx.canIUse('button.open-type.getUserInfo'),
      style: "btn",
      style2: "code_btn"
    };
  },
  onLoad() {
    
  },
  created() {
    
  },
  methods: {
    ...mapActions([
      'setToKen',
      'setCanIUse',
      'setUserId'
    ]),
    // 失去焦点提示
    verificationCode(){
      if (!utils.required(this.Code)) {
        utils.showDialog('请输入验证码')
        return
      }
    },
    verificationTel() {
      if (!utils.required(this.mobile)) {
        utils.showDialog('请填写手机号码')
        return
      }
      if (!utils.tel(this.mobile)) {
        utils.showDialog('您填写的手机号码不正确')
        return
      }
      
    },
    //点击获取短信验证码
    getCodes() {
      var that = this
      this.isClick = true
      
      console.log(this.codeMsg)
      // this.dis = true
      if (!utils.required(this.mobile)) {
        utils.showDialog('请填写手机号码')
        return
      }
      if (!utils.tel(this.mobile)) {
        utils.showDialog('您填写的手机号码不正确')
        return
      }
      var miao = 60;
      getPhoneCode({
        tel: this.mobile
      }).then(res => {
        console.log(res.data,23232323)
        if(res.data.code == 200){
          utils.showDialog("验证码已发送，请查收短信")
          console.log(res.data)
          var timehandler = setInterval(function() {
            that.codeMsg = miao + "秒后再获取";
            that.dis = true;
            miao--;
            if (timehandler != null && miao <= 0) {
              clearInterval(timehandler);
              that.dis = false;
              that.codeMsg = "获取短信验证码";
            }
          }, 1000);
        }else if(res.data.code == 10011){ //60s内重复发送
          utils.showDialog(res.data.message)
          // wx.showModal({
          //   title: '提示',
          //   content: res.data.message,
          //   confirmText: "确定",
          //   showCancel: false,
          //   success: function (res) {
          //     if (res.confirm) {
          //         console.log('用户点击主操作')
          //     }
          //   }
          // });
        }
      })
    },
    //提交登录
    submit(){
      if (!utils.required(this.mobile)) {
        utils.showDialog('请填写手机号码')
        return
      }
      if (!utils.tel(this.mobile)) {
        utils.showDialog('您填写的手机号码不正确')
        return
      }
      if(this.Code != '') {
        this.login()
      }
      if(this.Code == ''){ 
        utils.showDialog('请先获取验证码')
        return
      }
    },
    //登录
    login() {
      console.log(this.mobile,this.Code)
      // GetSession({
      //   tel: this.mobile
      // }).then(res=>{
      //   console.log(res)
      // })
      mobileLogin({
        Mobile: this.mobile,
        Code: this.Code, 
      }).then(res=> {
        console.log('登录验证',res.data)
        if(res.data.code == 200){
          //存储token
          utils.wxSetStorageSync("token",res.data.data.token)
          this.setToKen(res.data.data.token)
          this.setUserId(res.data.data.userId)
          utils.wxSetStorageSync('userInfo', res.data.data)
          var url = '/pages/login/loginSuccess/main'
          wx.reLaunch({
            url: url
          });
        }else{
          utils.showDialog(res.data.message)
          return
        }
      })
      // login({
      //   mobile: this.mobile,
      //   code: this.code
      // }).then(res => {
      //   if (res.data.code != 200) {
      //     utils.showDialog(res.data.message)
      //     return
      //   }
      //   this.initData()
      //   this.setToKen(res.data.data.token)
      //   this.setUserId(res.data.data.id)
      //   this.setJudgeUserType(res.data.data.userType)
      //   utils.wxSetStorageSync('students', res.data.data.students)
      //   wx.reLaunch({
      //     url: url
      //   })
      // })
    },
    getUserInfo() {
      console.log('getUserInfo事件首先触发')
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if(wx.canIUse('button.open-type.getUserInfo')){
        // 用户版本可用
        //获取code码
        wx.login({
          success: (res) => {
            this.code = res.code
            console.log("获得code码",res)
            wx.getUserInfo({
              success: (res) => {
                console.log("this.userInfo2",res.userInfo)
                utils.wxSetStorageSync('userInfo', res.userInfo)
                console.log("wxGetStorage(userInfo)",utils.wxGetStorage("userInfo"))
              },
              fail: (res) => {
                console.log("this.fail",res)
                
              }
            })
          }
        })
      }else{
          console.log('请升级微信版本')
      }
    },
    bindGetUserInfo(e) {
      var that = this
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData){
        //用户按了允许授权按钮
        var APPID = this.APPid
        var SECRET = this.AppSecret
        var IV = e.mp.detail.iv
        var encryptedData = e.mp.detail.encryptedData
        console.log(e.mp.detail)
        console.log('用户按了允许授权按钮')
        // 查看是否授权
        wx.getSetting({
          success(res) {
            console.log("查看是否授权",res)
            if (res.authSetting['scope.userInfo']) {
              console.log('用户已经授权过')
              console.log("this.code",that.code)
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              
              // 调用login请求api转换登录凭证
              login({
                code: that.code
              }).then(res =>{
                console.log('login data',res.data)
                if(res.data.code == 200){
                  console.log("login用户存在",res.data)
                }
                if( res.data.code == 403){
                  console.log("login不存在",res.data)
                  //调用register进行注册
                  register({
                    Type: 'USERINFO',
                    OpenId: res.data.data.openId,
                    SessionId: res.data.data.sessionId,
                    EncryptedData: encryptedData,
                    Iv: IV
                  }).then(res=>{
                    if(res.data.code == 200){
                      console.log("注册成功",res.data)
                      that.setToKen(res.data.data.token)
                      console.log(that.token)
                    }
                  })
                }
                that.setCanIUse(false)
              })
            }else{
              console.log('用户还未授权过') 
              
            }
          },
        })
      }else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
        console.log(e.mp.detail)
        wx.showToast({
          title: "请先同意授权才能进行登录",
          icon: 'none',
          duration: 2000
        });
      }
    },
    getPhoneNumber(e) { 
      console.log(e.mp) 
      var that = this
      var APPID = this.APPid
      var SECRET = this.AppSecret
      var IV = e.mp.detail.iv
      var encryptedData = e.mp.detail.encryptedData
      // 调用登录接口
      console.log("this.code",that.code)
      // 调用login请求api转换登录凭证
      login({
        code: that.code
      }).then(res =>{
        console.log('login data',res.data)
        if(res.data.code == 200){
          console.log("login用户存在",res.data)
        }
        if( res.data.code == 403){
          console.log("login不存在",res.data)
          //调用register进行注册
          register({
            OpenId: res.data.data.openId,
            SessionId: res.data.data.sessionId,
            EncryptedData: encryptedData,
            Iv: IV
          }).then(res=>{
            if(res.data.code == 200){
              console.log("注册成功",res.data)
              that.setToKen(res.data.data.token)
              that.setCanIUse(false)
              console.log(that.token)
            }
          })
        }
      })
      // 查看是否授权
      wx.getSetting({
        success(res) {
          console.log("查看是否授权",res)
          if (res.authSetting['scope.userInfo']) {
            console.log('用户已经授权过')
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            
          }else{
            console.log('用户还未授权过') 
            
          }
        },
      })
    },
    verify() {
      if(this.mobile != '' && this.Code != "" ){
        this.disabled = false;
      }else{
        this.disabled = true;
      }
    },
    
    // 弹出框
    dialog() {
      wx.showModal({
        title: '提示',
        content: this.msg,
        showCancel: false,
        confirmText: "确定",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击主操作')
          }
        }
      });
    }
  },
  computed: {
    ...mapState(['token','canIUse','APPid','AppSecret','userId'])
  },
  components: {
    
  },
  
  watch: {
    err(newV,v) {
      if(newV == 3){
        this.flag = true
      }
    }
  },

};
</script>

<style scoped lang="scss">
.content{
  width: 70%;
  margin: 0 auto;
}
.border_b{
  border-bottom: 1px solid #ccc; 
}
.login{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .title ,.subTitle{
    margin: 40rpx auto;
    text-align: center;
    font-size: 52rpx;
  }
  .title{
    width: 180rpx;
    height: 180rpx;
    // background: #D8D8D8;
    border-radius: 10rpx;
    overflow: hidden;
    .headImg{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .subTitle{
    background: none;
    font-size: 38rpx;
    border: none;
    color: #AAAAAA;
  }
}

.btn{
  width: 520rpx;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 90rpx;
  border: none;
  outline: none;
  background: linear-gradient(to right,#75D672,#14BF6D);
  color: #ffffff;
  margin-top: 80rpx;
}
.cancel{
  background: #fff;
  color: #14BF6D;
  border: 1px solid #14BF6D;
}
.disabled{
  color: rgba(255, 255, 255, 0.5) !important;
}
.dis{
  color: #ccc !important;
}
.weui-vcode-btn{
  border: none !important;
  background: transparent !important;
}
.context{
  width: 72%;
  height: 92rpx;
  display: flex;
  margin: 0 auto;
  position: relative;
  padding: 20rpx 50rpx 0 50rpx;
  align-items: center;
  // border: 1px solid #ccc;
  img{
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-top: 4rpx;
  }
  .m1{
    width: 40rpx;
    height: 54rpx;
    margin-left: 6rpx;
  }
  .m2{
    width: 66rpx;
    height: 50rpx;
  }
  .tel{
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    color: #333;
    margin-left: 26rpx; 
  }
  .margin26{
    margin-left: 26rpx; 
  }
  button::after{
    border: none;
    
  }
  .code_btn{
    width: 280rpx;
    padding: 0;
    font-size: 26rpx;
    color: #14BF6D;
    outline: none;
    background: transparent;
  }
}

.line{
  width: 460rpx;
  height: 1px;
  background: #D1D1D1;
  position: absolute;
  bottom: 0;
  right: 60rpx;
}

/*弹出层*/
.dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.7);
  background: #ffffff;
  z-index: 999;
  .dialog_warp{
    width: 100%;
    height: 60rpx;
    background:#fff;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin: auto;
    text-align: center;
  }
  .dialog_title{
    padding: 20rpx 0;
    // border-bottom: 1px solid #ccc;
  }
  .tip{
    width: 80%;
    padding: 20rpx 0 20rpx 0;
    white-space: normal;
    font-size: 30rpx;
    font-weight: 600;
    // font-family: "幼圆";
    margin: 0 auto;
  }
  .into{
    font-size: 44rpx;
    color: #1EC172;

    button{
      flex: 1;
      background: #fff;
      // border-radius: 0rpx;
    }
    button::after{ 
      // border: none; 

      // border-radius: 30rpx ;
      // border-bottom: none;
    }
  }
  
}
</style>
