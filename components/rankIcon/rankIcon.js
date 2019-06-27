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
    rankIcon:"0",
    rankStar:"0"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached(){
    let rankIcon 
    let rankStar 
    try{
      rankIcon = this.data.rank_tier? this.data.rank_tier[0]+"":"0"
      rankStar = this.data.rank_tier? this.data.rank_tier[1]+"":"0"
    }
    catch(e){
      rankIcon = "0"
      rankStar = "0"
    }
    
    this.setData({
      rankIcon,
      rankStar
    })
  }
})
