// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  timer:null,
  data: {
    time:2,
    clock:"",
    timerStauts:'stop',
    confirmVisible:false,
    anotherOne:false
  },
  onShow: function () {
    this.changeTime()
    this.start()
  },
  start(){
    this.setData({timerStauts:'start'})
    this.timer=setInterval(()=>{
      if(this.data.time === 0){
       this.pause()
       this.setData({anotherOne:true})
        return
      }
      this.data.time --
      this.changeTime()
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
      wx.navigateTo({
        url: '../home/home',
      })
  },
  cancel(){
   this.setData({confirmVisible:false})
   this.start()
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