// components/loading/loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "num": {
      type: Number,
      value: 3
    },
    "r": {
      type: String,
      value: "15px"
    },
    "color": {
      type: String,
      value: "gray"
    },
    "dur": {
      type: Number,
      value: 1.5
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
 
  ready(){
    this.setData({
      tbody:this.suanfa(parseInt(this.data.num)),
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    suanfa(num) {
      console.log(num)
      var rt = [];
      for (var i = 0; i < num; i++) {
        var row = []
        for (var j = 0; j < num; j++) {
          row[j] = num + j - i;

        }
        rt.push(row)
      }
      return rt;
    },
    
  }
})