// pages/Player/Player.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    playersTotalAll: null,
    playersTotal100: null,
    playersTotal20: null,
    playersWl: null,
    playersRankings: null,
    playersRecentMatches: null,
    playersPeers: null,
    playersPros: null,
    playersRatings:null,
    player:null,
    playersHeroes:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      account_id
    } = options
    this.setData({
      account_id,
    })
    wx.showLoading({
      title: '加载中...',
    })
    //获取player接口数据
    app.openApiProxy({
      aName: "players",
      args: {
        account_id
      }
    }).then(res => {
      wx.hideLoading()
      this.setData({
        player: res,
      })
    })
    this.callComponent()
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
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  },
  change(e) {
    this.callComponent()
  },
  callComponent() {
    let cur = this.data.TabCur
    if (cur == 0) {
      if(!this.data.playersWl){
        this.getData('playersWl')
      }
      if (!this.data.playersTotalsAll) {
        this.getData('playersTotalsAll')
      }
      if (!this.data.playersRecentMatches) {
        this.getData('playersRecentMatches')
      }
    } else if (cur == 1) {
      if (!this.data.playersRankings) {
        this.getData('playersRankings')
      }
      if (!this.data.playersHeroes) {
        this.getData('playersHeroes')
      }
    } else if (cur == 2) {
      if (!this.data.playersTotals100) {
        this.getData('playersTotals100')
      }
      if (!this.data.playersTotals20) {
        this.getData('playersTotals20')
      }
      if (!this.data.playersRatings) {
        this.getData('playersRatings')
      }
    } else if (cur == 3) {
      if (!this.data.playersPeers) {
        this.getData('playersPeers')
      }
      if (!this.data.playersPros) {
        this.getData('playersPros')
      }
    }
  },
  getData(cmd) {
    let account_id = this.data.account_id
    if (cmd == "playersWl") {
      app.openApiProxy({
        aName: "playersWl",
        args: {
          account_id
        }
      }).then(res => {
        this.setData({
          playersWl: res
        })
      })
    } else if (cmd == "playersRankings") {
      app.openApiProxy({
        aName: "playersRankings",
        args: {
          account_id
        }
      }).then(res => {
        this.setData({
          playersRankings: res
        })
      })
    } else if (cmd == "playersHeroes") {
      app.openApiProxy({
        aName: "playersHeroes",
        args: {
          account_id
        }
      }).then(res => {
        let obj={}
        res.forEach(item=>{
          obj[item.hero_id]=item
        })
        this.setData({
          playersHeroes: obj
        })
      })
    } else if (cmd == "playersTotalsAll") {
      app.openApiProxy({
        aName: "playersTotals",
        args: {
          account_id
        }
      }).then(res => {
        this.setData({
          playersTotalsAll: res
        })
      })
    } else if (cmd == "playersTotals100") {
      app.openApiProxy({
        aName: "playersTotals",
        args: {
          account_id,
          limit: 100
        }
      }).then(res => {
        this.setData({
          playersTotals100: res
        })
      })
    } else if (cmd == "playersTotals20") {
      app.openApiProxy({
        aName: "playersTotals",
        args: {
          account_id,
          limit: 20
        }
      }).then(res => {
        this.setData({
          playersTotals20: res
        })
      })
    } else if (cmd == "playersRecentMatches") {
      app.openApiProxy({
        aName: "playersRecentMatches",
        args: {
          account_id,
        }
      }).then(res => {
        this.setData({
          playersRecentMatches: res
        })
      })
    } else if (cmd == "playersPeers") {
      app.openApiProxy({
        aName: "playersPeers",
        args: {
          account_id,
        }
      }).then(res => {
        this.setData({
          playersPeers: res
        })
      })
    } else if (cmd == "playersPros") {
      app.openApiProxy({
        aName: "playersPros",
        args: {
          account_id,
        }
      }).then(res => {
        this.setData({
          playersPros: res
        })
      })
    } else if (cmd == "playersRatings") {
      app.openApiProxy({
        aName: "playersRatings",
        args: {
          account_id,
        }
      }).then(res => {
        this.setData({
          playersRatings: res
        })
      })
    }
    
  }


})