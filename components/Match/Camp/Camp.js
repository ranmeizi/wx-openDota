// components/Match/Camp/Camp.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    playerArr: Array,
    radiant_win: Boolean
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

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      //获取阵营数据 杀敌/经验/金钱
      let Radiant = {
        kills: 0,
        exp: 0,
        gold: 0,
        damage:0
      }
      let Dire = {
        kills: 0,
        exp: 0,
        gold: 0,
        damage: 0
      }
      this.data.playerArr.forEach(item => {
        if (item.isRadiant) {
          Radiant.kills += item.kills
          Radiant.exp += item.xp_per_min
          Radiant.gold += item.gold_per_min
          Radiant.damage += item.hero_damage
        }
        else{
          Dire.kills += item.kills
          Dire.exp += item.xp_per_min
          Dire.gold += item.gold_per_min
          Dire.damage += item.hero_damage
        }
      })
      this.setData({Radiant, Dire})
    },
    moved: function() {},
    detached: function() {},
  }
})