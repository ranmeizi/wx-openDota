// components/queryInput/queryInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "cooldown":{
      type:Number,
      value:20
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:"",
    cd:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputChange(e){
      this.setData({
        inputValue:e.detail.value
      })
    },
    query(){
      //点击查询时，触发自己的query事件
      this.triggerEvent('myQuery', {q:this.data.inputValue}, {})
    },
    focus(){
      this.triggerEvent('myQueryFocus', {}, {})
    }
  }
})
