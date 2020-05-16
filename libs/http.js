
const {host ,t_app_id,t_app_secret} = getApp().globalData


const _http = (method,url,data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${host}${url}`,
      data:data,
      header:{  
        Authorization:`Bearer ${wx.getStorageSync('X-token')}`,
        "t_app_id":t_app_id,
        "t_app_secret":t_app_secret 
      },
      method:method,
      dataType:'json',
      success:(response)=>{
        let statusCode=response.statusCode
        if(statusCode>=400){
          reject({statusCode,response})
        }else{
          resolve({statusCode,response})
        }
      },
      fail:(errors)=>{
        wx.showToast({
          title: '请求失败',
          icon:'none'
        })
        reject(errors)
      }
    })
  })
}

const http ={
  get : (url,params)=>{_http("GET",url,params)}, // params用于get ，data用于post
  post : (url,data)=>{_http("POST",url,data)},
  delete : (url,data)=>{_http("POST",url,data)},
  put : (url,data)=>{_http("POST",url,data)},

}

module.exports={
  http
}