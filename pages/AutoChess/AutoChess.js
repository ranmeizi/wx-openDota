// pages/AutoChess/AutoChess.js
const cheseData = require('../../utils/AutoChess.js')
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
    wait: [null, null, null, null, null, null, null, null],
    myChess: [],
    touched: false,
    battleList: () => {
      this.myChess.filter(item => {
        return item.status == 1
      })
    },
    waitList: () => {
      this.myChess.filter(item => {
        return item.status == 0
      })
    },
    zhuan: false,
    clickxuanzhong: {
      row: null,
      col: null
    },
    movexuanzhong: {
      row: null,
      col: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //先去看看有没有英雄数据
    if (!wx.getStorageSync('pHeroStats')) {
      //跳转loading页
      wx.navigateTo({
        url: '/pages/loading/loading'
      })
    } else {
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let heroStatsArr = wx.getStorageSync('pHeroStats')
      let heroStats = {}
      heroStatsArr.forEach(item => {
        heroStats[item.id] = item
      })
      this.setData({
        heroStats
      })
    }
    //初始化棋盘 8*8
    for (let i = 0; i < this.data.chece.length; i++) {
      for (let j = 0; j < this.data.chece.length; j++) {
        this.data.chece[i][j] = new cheseData.CheceItem(i, j)
      }
    }
    console.log(this.data.chece)
    //初始化等候区1*8
    for (let i = 0; i < this.data.wait.length; i++) {
      this.data.wait[i] = new cheseData.CheceItem(9.4, i)
    }
    this.setData({
      chece: this.data.chece,
      wait: this.data.wait,
    })

    //初始化棋子数据
    cheseData.getPrototype(this.data.heroStats)
    console.log(cheseData)

    //计算
    let vw = wx.getSystemInfoSync().windowWidth / 100
    let checeTop = (47 - ((47 * 0.8) * Math.sqrt(3) / 2 / ((125 + 18.8) / 125))) * vw
    let zhongdian = 47 * vw - checeTop
    let checeLeft = 10 * vw;
    let xzhongdian = 40 * vw
    this.setData({
      vw,
      checeTop,
      zhongdian,
      checeLeft,
      xzhongdian
    })
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
  zhuan() {
    this.setData({
      zhuan: true
    })
  },
  buzhuan() {
    this.setData({
      zhuan: false
    })
  },
  zou(e) {
    this.setData({
      row: e.target.dataset.row
    })
  },
  zou1(e) {
    this.setData({
      col: e.target.dataset.row
    })
  },
  te(e) {
    this.setData({
      clickxuanzhong: {
        col: e.currentTarget.dataset.col,
        row: e.currentTarget.dataset.row
      }
    })
  },
  difashi() {
    for (let i = 0; i < this.data.wait.length; i++) {
      if (this.data.wait == null) {
        //买一个敌法师
        this.data.myChess.push(new cheseData.Chess(new cheseData.chessClass.npc_dota_hero_antimage()))
      }
    }
    this.setData({
      myChess: this.data.myChess
    })
  },
  touchstart(e) {
    console.log(e)
    // if (e.target.id == "difashi") {
    this.setData({
      touched: true
    })
    // }
  },
  touchend() {
    this.setData({
      touched: false,
      movexuanzhong: {
        row: null,
        col: null
      }
    })
  },
  touchmove(e) {
    let x = e.touches[0].pageX - this.data.checeLeft
    let y = e.touches[0].pageY - this.data.checeTop
    let top;
    let left;
    if (y < this.data.zhongdian)
      top = 47 * 0.8 - this.shangtouying(this.data.zhongdian - y)
    else
      top = 47 * 0.8 + this.xiatouying(y - this.data.zhongdian)
    top = top / 0.8

    let row = parseFloat((top / 10).toFixed(1))

    if (x < this.data.xzhongdian)
      left = 40 - this.zuotouying(this.data.xzhongdian - x, row)
    else
      left = 40 + this.zuotouying(x - this.data.xzhongdian, row)
    console.log(left)
    console.log(Math.floor(left / 10))
    if (row < 8)
      row = parseInt(row)
    else if (row > 8 && row < 9.4)
      row = 9.4
    else
      row = null;


    this.setData({
      movexuanzhong: {
        row,
        col: Math.floor(left / 10)
      }
    })
  },
  initChece() {

  },
  shangtouying(c) {
    c = c / this.data.vw
    return (250 * c) / (125 * Math.sqrt(3) - c)
  },
  xiatouying(c) {
    c = c / this.data.vw
    return (250 * c) / (125 * Math.sqrt(3) + c)
  },
  zuotouying(c, row) {
    c = c / this.data.vw
    return (23.5 * c * (1 - row / 4.7) + 125 * c)/125
  },
  youtouying(c,row) {
    c = c / this.data.vw
    return (125 * c-23.5 * c * ((row-4.7) / 4.7))/125
  }
})