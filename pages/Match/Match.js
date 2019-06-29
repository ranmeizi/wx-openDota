// pages/Match/Match.js
const app = getApp()
Page({

  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 页面的初始数据
   */
  data: {
    match:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      matchid
    } = options
    //获取比赛信息
    this.getMatch(matchid)
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
  getMatch(match_id) {
    //展示加载中
    wx.showLoading({
      title: '加载中'
    })
    //获取matches接口数据
    app.openApiProxy({
      aName: "matches",
      args: {
        match_id
      }
    }).then(res => {
      wx.hideLoading()
      let small = { ...res }
      small.players = small.players.map(item => {
        delete item.ability_upgrades_arr
        // delete item.benchmarks
        delete item.connection_log
        delete item.creeps_stacked
        delete item.damage
        delete item.damage_inflictor
        delete item.damage_inflictor_received
        delete item.damage_taken
        delete item.damage_targets
        delete item.gold_reasons
        delete item.additional_units
        delete item.buyback_log
        delete item.camps_stacked
        delete item.dn_t
        delete item.gold_reasons
        delete item.gold_t
        delete item.hero_hits
        delete item.kill_streaks
        delete item.killed
        delete item.killed_by
        delete item.kills_log
        delete item.kills_per_min
        delete item.lane_pos
        delete item.last_login
        delete item.lh_t
        delete item.life_state
        delete item.max_hero_hit
        delete item.multi_kills
        delete item.name
        delete item.obs
        delete item.obs_left_log
        delete item.obs_log
        delete item.obs_placed
        delete item.party_id
        delete item.party_size
        delete item.performance_others
        delete item.permanent_buffs
        delete item.pings
        delete item.pred_vict
        delete item.purchase
        delete item.purchase_log
        delete item.sen
        delete item.sen_left_log
        delete item.sen_log
        delete item.sen_placed
        delete item.teamfight_participation
        delete item.xp_reasons
        delete item.xp_t
        return item
      })
      console.log(small)
      // 太长了，剪一剪没用的数据
      this.setData({
        match: small
      })
    })
  }
})