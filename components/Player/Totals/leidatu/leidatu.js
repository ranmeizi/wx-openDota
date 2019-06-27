// components/Player/Totals/leidatu/leidatu.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    chartData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    kda: {
      kda: {
        value: 2.8,
        Weight: 1
      },
    },
    fayu: {
      last_hits: {
        value: 166,
        Weight: 0.3
      },
      gold_per_min: {
        value: 550,
        Weight: 0.5
      },
      xp_per_min: {
        value: 530,
        Weight: 0.2
      },
    },
    tuijin: {
      tower_damage: {
        value: 2500,
        Weight: 1
      },
    },
    shengcun: {
      deaths: {
        value: 7,
        Weight: 0.5
      },
      kda: {
        value: 2.8,
        Weight: 0.5
      },
    },
    shuchu: {
      hero_damage: {
        value: 500,
        Weight: 1
      }
    },
    series:null,
    categories: null,
    dataList: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calc(){
      //操作数组
      let obj={}
      this.data.chartData.forEach(item=>{
        obj[item.field]=item
      })
      //标题
      let categories = ['KDA', '发育', '推进', '生存', '输出', '综合']
      //卡片
      let dataList = []
      dataList.push({
        title: '比赛场次',
        value: this.data.chartData[0].n
      })
      //计算
      //KDA
      let KDA = (obj.kda.sum / obj.kda.n).toFixed(1)
      dataList.push({
        title:'KDA',
        value: KDA
      })
      //gold_per_min
      let gold_per_min = (obj.gold_per_min.sum / obj.gold_per_min.n).toFixed(0)
      dataList.push({
        title: '金钱/分钟',
        value: gold_per_min
      })
      //last_hits
      let last_hits = (obj.last_hits.sum / obj.last_hits.n).toFixed(0)
      dataList.push({
        title: '正补',
        value: last_hits
      })
      //hero_damage
      let hero_damage = (obj.hero_damage.sum*60 / obj.duration.sum).toFixed(0)
      dataList.push({
        title: '伤害/分钟',
        value: hero_damage
      })
      //xp_per_min
      let xp_per_min = (obj.xp_per_min.sum / obj.xp_per_min.n).toFixed(0)
      dataList.push({
        title: '经验/分钟',
        value: xp_per_min
      })
      //tower_damage
      let tower_damage = (obj.tower_damage.sum / obj.tower_damage.n).toFixed(0)
      //deaths
      let deaths = (obj.deaths.sum / obj.deaths.n).toFixed(0)

      //这块只有一个
      let seriesItem={
        name: '我的数据',
        data: [],
        color:"#aaa"
      }
      //计算权值
      //40*log(1+x)/log(15)
      //kda
      seriesItem.data.push(this.calcuLog('kda', { kda: KDA }))
      //发育
      seriesItem.data.push(this.calcuLog('fayu', { last_hits, gold_per_min, xp_per_min }))
      //推进
      seriesItem.data.push(this.calcuLog('tuijin', { tower_damage }))
      //生存
      seriesItem.data.push(this.calcuLog('shengcun', { deaths, kda: KDA }))
      //输出
      seriesItem.data.push(this.calcuLog('shuchu', { hero_damage }))
      //综合
      let sum=0
      seriesItem.data.forEach(item=>{
        sum+=item
      })
      seriesItem.data.push(parseInt(sum / 5))
      let series=[]
      series.push(seriesItem)
      //保存数据
      this.setData({
        series,
        categories,
        dataList
      })
      console.log(dataList)
      console.log(series)

      // callChart
      setTimeout(()=>{
        this.selectComponent('#leidatutu').draw()
      },1000)
    },
    calcuLog(cmd,obj){
      let rc=0;
      let count=0;
      for(let key in obj){
        count++
        rc += obj[key]*100 / this.data[cmd][key].value * this.data[cmd][key].Weight
      }
      rc = rc/count
      rc = 40 * Math.log(1 + rc) / Math.log(15)
      rc=parseInt(rc)
      return rc
    }
  }

})
