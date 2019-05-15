// components/rankIcon/rankIcon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "rank_tier":{
      type:String,
      value:"00"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rankIcon:0,
    rankStar:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached(){
    this.setData({
      rankIcon: this.data.rank_tier[0],
      rankStar: this.data.rank_tier[1]
    })
  }
})
