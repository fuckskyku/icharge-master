import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()


export default {
    config: {
        navigationBarTitleText: '新活充电-桩站端',
        backgroundTextStyle: 'dark',
        "enablePullDownRefresh": true,
        "navigationBarBackgroundColor":'#14BF6D',
        "navigationBarTextStyle": 'white',
        // "disableScroll": true
    }
}