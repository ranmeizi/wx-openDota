// components/Player/Totals/Totals.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    playersTotalsAll:Object,
    playersTotals100:Object,
    playersTotals20:Object,
    playersRatings:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    radarCur:0,
    chartData:null
  },
  lifetimes: {
    attached() {
      this.radarTimer()
      this.lineTimer()
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
    },
    clip(e){
      this.setData({
        radarCur:parseInt(e.currentTarget.dataset.index)
      })
      this.callRadar()
    },
    radarTimer(){
      this.data.radarTimer=setInterval(()=>{
        //雷达图需要20 100 All三个接口的数据
        if (this.data.playersTotals20 && this.data.playersTotals100 && this.data.playersTotalsAll){
          //关闭定时器
          clearInterval(this.data.radarTimer)
          //call子组件
          this.callRadar()
        }   
      },50)
      this.setData({
        radarTimer: this.data.radarTimer
      })
    },
    callRadar(){
      switch (this.data.radarCur){
        case 0: this.data.chartData = this.data.playersTotals20;break;
        case 1: this.data.chartData = this.data.playersTotals100; break;
        case 2: this.data.chartData = this.data.playersTotalsAll; break;
      }
      this.setData({
        chartData: this.data.chartData
      })
      this.selectComponent('#radarCom').calc();
    },
    lineTimer(){
      this.data.lineTimer=setInterval(()=>{
        //折线图需要playersRatings接口数据
        if (this.data.playersRatings){
          //关闭定时器
          clearInterval(this.data.lineTimer)
          //call子组件
          this.callLine()
        }
      },50)
    },
    callLine(){
      this.selectComponent('#lineCom').draw();
    }
  },
})
