// pages/HeroData/HeroData.js
let wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
let radarChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad:"+this.data.num)
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      // categories: this.data.categories,
      // series: this.data.series,
      categories: ['1', '2', '3', '4', '5', '6'],
      series: [{
        name: '成交量1',
        data: [90, 110, 125, 95, 87, 122]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:" + this.data.num)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:" + this.data.num)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:" + this.data.num)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload:" + this.data.num)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})