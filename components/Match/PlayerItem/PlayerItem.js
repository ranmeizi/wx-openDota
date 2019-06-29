// components/Match/PlayerItem/PlayerItem.js
const app = getApp()
const {itemList,itemObj}=require('../../../utils/wupin.js')
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    playerData: Object,
    campTotal:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemList,
    itemObj, 
    hideHeight:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    naviPlayer(e){
      console.log(e)
      let account_id  = e.target.dataset.accountid
      wx.navigateTo({
        url: `/pages/Player/Player?account_id=${account_id}`,
      })
    },
    show(){
      let hideHeight=0
      if (this.data.hideHeight===0){
        hideHeight='150rpx'
      }
      this.setData({
        hideHeight
      })
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
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
          heroPic: heroStats[this.data.playerData.hero_id].img
        })
      }

      let account_id = this.data.playerData.account_id
      //获取player接口数据给个头像
      //获取matches接口数据
      app.openApiProxy({
        aName: "players",
        args: {
          account_id
        }
      }).then(res => {
        wx.hideLoading()
        this.setData({
          playerImg: res.profile.avatarmedium,
          personaname: res.profile.personaname
        })
      })
      this.setData({
        benchmarks: Object.values(this.data.playerData.benchmarks)
      })
      console.log(this.data.benchmarks)
    },
    moved: function() {},
    detached: function() {},
  }
})