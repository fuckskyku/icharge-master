import './utils/ald-stat'
import './utils/ald-stat-conf'
import '../static/weui/weui.wxss'

import Vue from 'vue'
import App from './App'

import store from './Store/store'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/welcome/main',                           
      'pages/tabBar/home/main',                       //首页
      'pages/tabBar/electricitySet/main',             //电费设置
      'pages/tabBar/mine/main',                       //我的
      'pages/home/electricityBills/main',             //用电记录
      'pages/home/electricityBillsDetails/main',      //用电记录详情
      'pages/home/moneyBills/main',                   //资金记录        
      'pages/home/withdrawalApply/main',              //提现申请
      'pages/home/useCondition/main',                //桩站使用情况
      'pages/electricitySet/coupons/main',            //优惠券
      '^pages/electricitySet/couponsDetails/main',     //优惠券详情
      'pages/electricitySet/periodElectricity/main', //时段电价
      'pages/qualification/quality/main',             //桩站资质认证
      'pages/qualification/submitSuccess/main',       //桩站资质认证提交成功
      'pages/electricitySet/coupons/main',            //优惠券  
      'pages/login/main',                             //登录
      'pages/login/loginSuccess/main',                //登录成功
      'pages/useAgreement/main'                       //协议
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
      }
    },
    tabBar: {
      'backgroundColor': "#ffffff",
      "selectedColor": '#14BF6D',
      "color": '#999999',
      "borderStyle": 'black',
      "list": [{
        "pagePath": "pages/tabBar/home/main",
        "text": "首页",
        "iconPath": '/static/img/tab/tab_home_n.png',
        "selectedIconPath": '/static/img/tab/tab_home_s.png',
      },{
        "pagePath": "pages/tabBar/electricitySet/main",
        "text": "电费设置",
        "iconPath": '/static/img/tab/tab_electric_n.png',
        "selectedIconPath": '/static/img/tab/tab_electric_s.png',
      },{
        "pagePath": "pages/tabBar/mine/main",
        "text": "我的",
        "iconPath": '/static/img/tab/tab_me_n.png',
        "selectedIconPath": '/static/img/tab/tab_me_s.png',
        
      }]
    },
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#14BF6D',
      navigationBarTitleText: '特电',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true,  
      // disableScroll: true
    }
    , networkTimeout: {
      request: 10000,
      downloadFile: 10000
    },
    debug: false
  }
}
