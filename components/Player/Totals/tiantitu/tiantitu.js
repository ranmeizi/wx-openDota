// components/Player/Totals/tiantitu/tiantitu.js
var wxCharts = require('../../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var startPos = null;
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    playersRatings: Array
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
    draw() {
      let arr = [...this.data.playersRatings]
      // 起始值
      let arr1 = arr.map(item => item.solo_competitive_rank)
      let min = Math.min(...arr1)-200
      //最大值
      let max = Math.max(...arr1)+200
      arr.sort((a, b) => {
        return Date(a.time) - Date(b.time)
      })
      console.log(arr)
      console.log(this.data.playersRatings)

      var windowWidth = 320;
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }

      lineChart = new wxCharts({
        canvasId: 'lineCanvas',
        type: 'line',
        categories: arr.map(item => {
          return item.time.substr(0, 10)
        }),
        animation: false,
        series: [{
          name: '单排分',
          data: arr.map(item => {
            return item.solo_competitive_rank
          }),
          format: function(val, name) {
            return val;
          }
        }],
        animation: true,
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          format: function(val) {
            return val.toFixed(0);
          },
          min,
          max
        },
        dataPointShape: false,
        width: windowWidth,
        height: 200,
        dataLabel: false,
        extra: {
          lineStyle: 'curve'
        },
        zcrthis: this
      });
    },
    touchHandler: function(e) {
      console.log(lineChart.getCurrentDataIndex(e));
      lineChart.showToolTip(e, {
        // background: '#7cb5ec',
        format: function(item, category) {
          return category + ' ' + item.name + ':' + item.data
        }
      });
    },
  }
})