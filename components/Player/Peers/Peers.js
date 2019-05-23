// components/Player/Peers/Peers.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  lifetimes: {
    attached() {
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
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  properties: {
    playersPeers:Object,
    playersPros:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkData() {
      console.log("peer看到啦")
    }, 
    navigatePeer(e) {
      let account_id = this.data.playersPeers[e.currentTarget.dataset.index].account_id
      wx.navigateTo({
        url: `/pages/Player/Player?account_id=${account_id}`
      })
    },
    navigatePro(e) {
      let account_id = this.data.playersPros[e.currentTarget.dataset.index].account_id
      wx.navigateTo({
        url: `/pages/Player/Player?account_id=${account_id}`
      })
    }
  },
 
})
