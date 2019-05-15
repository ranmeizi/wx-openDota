const apis={
  search:{
    search:"https://api.opendota.com/api/search"
  }
}


//openApi免费接口
module.exports=function({aType,aName,args}){
  let url
  try{
    url = apis[aType][aName]
  }catch(e){
    //不要你了
    return
  }

  return new Promise((resove,reject)=>{
    wx.request({
      url:url,
      data: args,
      method: "get",
      success(res){
        resolve(value);
      },
      fail(res){
        reject(res)
      }
    })
  })
}