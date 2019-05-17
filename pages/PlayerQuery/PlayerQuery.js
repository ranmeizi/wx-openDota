// pages/playerQuery/playerQuery.js
const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myQueryTop: 300,
    iPanelTop: 100,
    searchList: [],
    touchLine:0
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
    }
    else{
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let heroStatsArr = wx.getStorageSync('pHeroStats')
      let heroStats={}
      heroStatsArr.forEach(item=>{
        heroStats[item.id]=item
      })
      this.setData({
        heroStats
      })
    }
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
  onQuery(e) {
    if (e.detail.q.length == 0) {
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
        q: e.detail.q
      }
    }).then(res => {
      res.forEach(item => {
        //格式化时间
        let date = new Date(item.last_match_time)
        item.last_match_time = formatTime(date)
        //增加配置项
        item.options = {
          showPlayers: false,
          showPlayersHeros: false,
          showRecentMatches: false,
        }
      })
      this.setData({
        searchList: res,
        myQueryTop: -250,
        iPanelTop: 15
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
  onQueryFocus(e) {
    this.setData({
      myQueryTop: 300,
      iPanelTop: 100,
    })
  },
  showPlayers(e) {
    
    let index = e.currentTarget.dataset.index
    this.data.searchList[index].options.showPlayers = !this.data.searchList[index].options.showPlayers
    this.setData({
      searchList: this.data.searchList
    })
    //看看有没有数据
    if (this.data.searchList[index].players){
      return
    }

    
   
    //请求数据
    app.openApiProxy({
      aName: "players",
      args: {
        account_id: this.data.searchList[index].account_id
      }
    }).then(res => {
      this.data.searchList[index].players = res
      //再获取wl/heroes/ranking
      let pmsList = []
      //1 wl输赢胜率
      pmsList.push(app.openApiProxy({
        aName: "playersWl",
        args: {
          account_id: this.data.searchList[index].account_id
        }
      }))
      //2 heroes场次最多英雄
      pmsList.push(app.openApiProxy({
        aName: "playersHeroes",
        args: {
          account_id: this.data.searchList[index].account_id
        }
      }))
      //3 rankings分数最高英雄
      pmsList.push(app.openApiProxy({
        aName: "playersRankings",
        args: {
          account_id: this.data.searchList[index].account_id
        }
      }))
      return Promise.all(pmsList)
    }).then(res => {
      console.log(res)
      this.data.searchList[index].players.exData = {}
      this.data.searchList[index].players.exData.wl = res[0]
      //按照games排序,取前十
      this.data.searchList[index].players.exData.heroes = res[1].sort((a, b) => b.games - a.games).slice(0, 10)
      //按照score排序，取前十
      this.data.searchList[index].players.exData.rankings = res[2].sort((a, b) => b.score - a.score).slice(0, 10)
      this.data.searchList[index].players.exData.TabCur = "heroes"
      this.setData({
        searchList: this.data.searchList
      })
    })
  },
  tabChange(e) {
    let {
      index,
      tab
    } = e.currentTarget.dataset
    this.data.searchList[index].players.exData.TabCur = tab
    this.setData({
      searchList: this.data.searchList
    })
  },
  touchstart(e) {
    let y=e.touches[0].clientY
    console.log(y)
    this.setData({
      touchLine:y
    })
  },
  touchend(e){
    let y = e.changedTouches[0].clientY
    if(y-this.data.touchLine>100){
      this.setData({
        myQueryTop: 300,
        iPanelTop: 100,
      })
    }
    else if (y - this.data.touchLine < -100){
      this.setData({
        myQueryTop: -250,
        iPanelTop: 15,
      })
    }
  }
})