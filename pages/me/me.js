// pages/me/me.js
Page({
  data: {
    tab:"tomato",
    lists:{
      "本周四":[
        {time:"14:00", text:"哈萨克浪肯定" ,id:1},
        {time:"14:00", text:"哈萨克浪肯定" ,id:4}

      ],

      "本周5":[{time:"14:00", text:"哈萨克浪肯定" ,id:2}],
      "本周6":[{time:"14:00", text:"哈萨克浪肯定" ,id:3}],
      "本周7":[{time:"14:00", text:"哈萨克浪肯定" ,id:3}],
      "本周8":[{time:"14:00", text:"哈萨克浪肯定" ,id:3}],
      "本周9":[{time:"14:00", text:"哈萨克浪肯定" ,id:3}],
      "本周10":[{time:"14:00", text:"哈萨克浪肯定" ,id:3}],


    }
  },
  changeTab(event){
    this.setData({tab:event.target.dataset.name})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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