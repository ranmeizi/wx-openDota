let openApi=require('/utils/openApi.js')

import ITEM_LIST from '/utils/wupin.js'

//app.js
App({
  onLaunch: function() {
    //别TM废话先给app赋值

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    apiCounter:new Map(),
    ITEM_LIST
  },

  //公共跳转写在APP里
  gotoMatch(matchId){
    wx.navigateTo({
      url:`/pages/Match/Match?matchid=${matchId}`
    })
  },

  //注意，因为API是免费的
  //所有接口使用openApi代理调取，计算每分钟次数
  openApiProxy:new Proxy(openApi,{
    apply(...arg){
      //计数
      
      return Reflect.apply(...arg)
    }
  })
})
