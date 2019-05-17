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
  let url="";
  let data={};
  if (aName == "search") {
    url = 'https://api.opendota.com/api/search'
    data=args
  } else if (aName == "players") {
    url = `https://api.opendota.com/api/players/${args.account_id}`
  }
  else if(aName=="playersWl"){
    url = `https://api.opendota.com/api/players/${args.account_id}/wl`
  }
  else if (aName == "playersHeroes") {
    url = `https://api.opendota.com/api/players/${args.account_id}/heroes`
  }
  else if (aName == "playersRankings") {
    url = `https://api.opendota.com/api/players/${args.account_id}/rankings`
  }
  else if (aName =="heroStats"){
    url ='https://api.opendota.com/api/heroStats'
  }
  return {
    url,
    data
  }
}