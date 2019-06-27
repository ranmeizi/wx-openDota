//openApi免费接口
module.exports = function({
  aName,
  args
}) {
  let {
    url,
    data
  } = getReq(aName, args)

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: "get",
      success(res) {
        resolve(res.data);
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

function getReq(aName, args) {
  let url = "";
  let data = {};
  //关键字查询
  if (aName == "search") {
    url = 'https://api.opendota.com/api/search'
    data = args
  }
  //玩家
  else if (aName == "players") {
    url = `https://api.opendota.com/api/players/${args.account_id}`
  } 
  //胜负场
  else if (aName == "playersWl") {
    url = `https://api.opendota.com/api/players/${args.account_id}/wl`
  } 
  //英雄场次
  else if (aName == "playersHeroes") {
    url = `https://api.opendota.com/api/players/${args.account_id}/heroes`
  }
  //英雄积分 
  else if (aName == "playersRankings") {
    url = `https://api.opendota.com/api/players/${args.account_id}/rankings`
  } 
  //玩家数据统计
  else if (aName == "playersTotals") {
    url = `https://api.opendota.com/api/players/${args.account_id}/totals`
    data = args
  }
  //玩家最近比赛
  else if (aName == "playersRecentMatches") {
    url = `https://api.opendota.com/api/players/${args.account_id}/recentMatches`
  }
  //队友对手
  else if (aName == "playersPeers") {
    url = `https://api.opendota.com/api/players/${args.account_id}/peers`
  }
  //职业选手
  else if (aName == "playersPros") {
    url = `https://api.opendota.com/api/players/${args.account_id}/pros`
  }
  //天梯分趋势
  else if (aName == "playersRatings") {
    url = `https://api.opendota.com/api/players/${args.account_id}/ratings`
  }
  else if (aName =="matches"){
    url = `https://api.opendota.com/api/matches/${args.match_id}`
  }
  //英雄信息：英雄属性/英雄头像。。。
  else if (aName == "heroStats") {
    url = 'https://api.opendota.com/api/heroStats'
  }
  return {
    url,
    data
  }
}