// components/RadarChart/RadarChart.js
let wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
let radarChart = null;
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    categories:Array,
    series:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {
      console.log("attached")
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    touchHandler: function(e) {
      console.log(radarChart.getCurrentDataIndex(e));
    },
    draw(){
      var windowWidth = 320;
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }
      
      radarChart = new wxCharts({
        canvasId: 'radarCanvas',
        type: 'radar',
        categories: this.data.categories,
        series: this.data.series,
        width: windowWidth,
        height: 200,
        extra: {
          radar: {
            max: 100
          }
        },
        zcrthis:this
      });
    }
  }
})