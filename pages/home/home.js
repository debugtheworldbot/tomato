// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[

    ],
    visible:true
  },
  confirm(event){
    console.log(event.detail);
  },
  cancel(event){
   this.setData({ visible : false } ) 
   
  }
})