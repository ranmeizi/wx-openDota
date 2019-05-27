// pages/AutoChess/AutoChess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chece: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ],
    waitList: [null, null, null, null, null, null, null, null],
    zhuan:false,
    position:{
      y:{
        "0":-7.5,
        "1":1,
        "2":9,
        "3":17.5,
        "4":26,
        "5":34,
        "6":42,
        "7":51
      }
    },
    row:0,
    col:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

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
  zhuan(){
    this.setData({
      zhuan:true
    })
  },
  buzhuan(){
    this.setData({
      zhuan: false
    })
  },
  zou(e){
    this.setData({
      row:e.target.dataset.row
    })
  },
  zou1(e) {
    this.setData({
      col: e.target.dataset.row
    })
  },
  te(e){
    this.setData({
      col: e.currentTarget.dataset.col,
      row: e.currentTarget.dataset.row
    })
    
  }
})