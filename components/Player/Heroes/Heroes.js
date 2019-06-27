// components/Player/Heros/Heroes.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    playersHeroes:Object,
    playersRankings:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

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
  /**
   * 组件的方法列表
   */
  methods: {
    checkData() {
      console.log("hero看到啦")
    }
  },
  
})
