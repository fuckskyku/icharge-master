import fly from './apiConfig'
import { Z_FULL_FLUSH } from 'zlib';

/* 充电桩小程序接口抛出 */ 

//测试接口
export const GetSession = param => {
    return fly.get('/api/charge/GetSession', param)
}

//获取电站列表
export const getStationtList = param => {
    return fly.get('/api/charge/getStationtList', param)
}

//获取电站信息
export const getStationtInfo = param => {
    return fly.get('/api/charge/getStationtInfo', param)
}

//获取电站终端列表
export const getClientList = param => {
    return fly.get('/api/charge/getClientList', param)
}

//验证用户
export const checkToken = param => {
    return fly.post('/api/charge/checkToken', param)
}

//注册
export const register = param => {
    return fly.post('/api/charge/register', param)
}

//登录
export const login = param => {
    return fly.post('/api/charge/login', param)
}

//发送手机验证码
export const getPhoneCode = param => {
    return fly.get('/api/charge/getPhoneCode', param)
}

//验证码登录
export const mobileLogin = param => {
    return fly.post('/api/charge/mobileLogin', param)
}

//获取个人中心
export const getUcCenter = param => {
    return fly.getHeader('/api/charge/getUcCenter', param)
}

//获取我的意见建议列表
export const getSuggestionList = param => {
    return fly.getHeader('/api/charge/getSuggestionList', param)
}

//提交意见建议
export const addSuggestion = param => {
    return fly.postHeader('/api/charge/addSuggestion', param)
}

//获取站内信列表
export const getNoticeList = param => {
    return fly.getHeader('/api/charge/getNoticeList', param)
}

//获取站内信详情
export const getnoticedetail = param => {
    return fly.getHeader('/api/charge/getnoticedetail', param)
}

//获取我的站内信未读总数
export const getnewnoticecount = param => {
    return fly.getHeader('/api/charge/getnewnoticecount', param)
}

//获取预充值列表
export const getprechargvaluelist = param => {
    return fly.get('/api/charge/getprechargvaluelist', param)
}

//获取优惠券列表
export const getcouponlist = param => {
    return fly.getHeader('/api/charge/getcouponlist', param)
}

//领取优惠券
export const receivecoupon = param => {
    return fly.getHeader('/api/charge/receivecoupon', param)
}

//获取我的优惠券列表
export const getcouponlistbyuser = param => {
    return fly.getHeader('/api/charge/getcouponlistbyuser', param)
}

//获取我的优惠券详情
export const getcoupondetail = param => {
    return fly.get('/api/charge/getcoupondetail', param)
}

//获取电站电价列表
export const getPriceList = param => {
    return fly.get('/api/charge/getPriceList', param)
}

//用户充值获取到的最大优惠券
export const getfavorablechargecouponbyuser = param => {
    return fly.postHeader('/api/charge/getfavorablechargecouponbyuser', param)
}

//支付下单
export const addpayorder = param => {
    return fly.postHeader('/api/charge/addpayorder', param)
}

//获取微信支付数据签名验证字段列表
export const getpaysign = param => {
    return fly.get('/api/wx/getpaysign', param)
}

//修改头像
export const editAvatar = param => {
    return fly.postHeader('/api/charge/editAvatar', param)
}

//修改性别
export const editGender = param => {
    return fly.postHeader('/api/charge/editGender', param)
}

//修改昵称
export const editNickName = param => {
    return fly.postHeader('/api/charge/editNickName', param)
}

//开始充电
export const chargeStart = param => {
    return fly.postHeader('/api/charge/chargeStart', param)
}

//结束充电
export const chargeStop = param => {
    return fly.postHeader('/api/charge/chargeStop', param)
}

//获取用户资金流水列表
export const getchargespendloglist = param => {
    return fly.getHeader('/api/charge/getchargespendloglist', param)
}

//获取资金流水详情
export const getchargespendlogdetail = param => {
    return fly.getHeader('/api/charge/getchargespendlogdetail', param)
}

//获取七牛token
export const GetQiniuToken = param => {
    return fly.get('/api/charge/GetQiniuToken', param)
}

//获取终端信息
export const getClientInfo = param => {
    return fly.getHeader('/api/charge/getClientInfo', param)
}

//获取意见反馈详情
export const getsuggestiondetail = param => {
    return fly.getHeader('/api/charge/getsuggestiondetail', param)
}

//获取用户余额
export const getBalance = param => {
    return fly.getHeader('/api/charge/getBalance', param)
}
