const {http} = require('../../libs/_http.js');
Page({

  timer:null,
  data: {
    time:1500,
    clock:"",
    timerStauts:'stop',
    confirmVisible:false,
    anotherOne:false,
    finishVisible:false,
    tomato:{}
  },
  onShow: function () {
    this.changeTime()
    this.start()
    http.post('/tomatoes').then(response => {
      this.setData({ tomato: response.data.resource})
    })
   
    
  },
  start(){
    this.setData({timerStauts:'start'})
    this.timer=setInterval(()=>{
      this.data.time --
      this.changeTime()
      if(this.data.time === 0){
       this.pause()
       this.setData({anotherOne:true})
       this.setData({finishVisible:true})
        return
      }
    },1000)
  },
  pause(){
    clearInterval(this.timer)
    this.timer=null
    this.setData({timerStauts:"stop"})
  },
  changeTime(){
    let time = this.data.time
    let min=Math.floor( time/60)
    let sec=Math.floor(time%60)

    if(sec===0){
      sec="00"
    }
    if((sec+"").length===1){
      sec="0"+sec
    }
    if((min+"").length===1){
      min="0"+min
    }
    this.setData({clock:`${min}:${sec}`}) 
  },
  showConfirm(){
    this.setData({confirmVisible:true})
    this.pause()
  },
  abandon(event){
      let content=event.detail
      http.put(`/tomatoes/${this.data.tomato.id}`,{
        description:content,
        aborted:true
      })
      wx.navigateBack({
        to:-1
      })
  },
  cancel(){
   this.setData({confirmVisible:false})
   this.start()
  },
  againTimer(){
    this.setData({anotherOne:false})

    this.data.time = 1500
    this.changeTime()
    this.start()
  },
  confirmFinish(event){
    let content=event.detail

  },
  confirmCancel(){
    this.setData({finishVisible:false})
  },
  onHide(){
    this.clearTimer()
      http.put(`/tomatoes/${this.data.tomato.id}`,{
        description:"退出放弃",
        aborted:true
      })
  },
  onUnload(){
    this.clearTimer()
    http.put(`/tomatoes/${this.data.tomato.id}`,{
      description:"退出放弃",
      aborted:true
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})