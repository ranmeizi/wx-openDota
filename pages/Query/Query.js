// pages/Query/Query.js
const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: "",
    historyQuery: [],
    showHistory:true,
    searchList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow: function() {
    // 页面显示从storage取历史搜索
    let historyQuery=wx.getStorageSync('historyQuery')
    this.setData({
      searchList:new Array(),
      historyQuery: historyQuery ? historyQuery : this.data.historyQuery
    })
  },
  onHide: function() {
    //页面隐藏，保存到storage
    wx.setStorageSync('historyQuery', this.data.historyQuery)

  },
  onUnload: function () {
    //页面隐藏，保存到storage
    wx.setStorageSync('historyQuery', this.data.historyQuery)

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  query() {
    //记录查询条件到storage里
    let {q,historyQuery} = this.data
    if (q.length > 0) { //有值吗
      //重复吗？重复删掉原来的
      if (historyQuery.indexOf(q) >= 0) {
        historyQuery.splice(historyQuery.indexOf(q), 1)
      }
      // 这个unshift到第一个
      historyQuery.unshift(q)
    }
    this.setData({
      historyQuery: this.data.historyQuery
    })
    //获取接口数据
    if (this.data.q == 0) {
      wx.showToast({
        title: '查询条件为空',
        icon: "none",
        duration: 2000
      })
      return
    }

    //提示加载中
    wx.showLoading({
      title: '加载中',
    })
    app.openApiProxy({
      aName: "search",
      args: {
        q: this.data.q
      }
    }).then(res => {
      res.forEach(item => {
        //格式化时间
        let date = new Date(item.last_match_time)
        item.last_match_time = formatTime(date)
      })
      this.setData({
        q:"",
        searchList: res,
        showHistory: false
      })
      wx.hideLoading()
    }).catch(e => {
      wx.hideLoading()
      wx.showToast({
        title: '获取失败',
        icon: "none",
        duration: 2000
      })
    })
  },
  inputChange(e) {
    this.setData({
      q: e.detail.value
    })
  },
  delHistory(e){
    this.data.historyQuery.splice(e.currentTarget.dataset.index,1)
    this.setData({
      historyQuery: this.data.historyQuery
    })
  },
  delAllHistory(){
    this.setData({
      historyQuery: new Array()
    })
  },
  iptFcs(){
    this.setData({
      searchList:new Array(),
      showHistory: true
    })
  },
  hisQuery(e){
    this.setData({
      q:e.currentTarget.dataset.q
    })
    this.query()
  },
  navigate(e){
    let account_id=this.data.searchList[e.currentTarget.dataset.index].account_id
    wx.navigateTo({
      url: `/pages/Player/Player?account_id=${account_id}`
    })
  }
})