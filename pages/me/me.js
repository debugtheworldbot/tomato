const {http} = require('../../libs/_http.js');
Page({
  data: {
    tab:"tomato",
    tomatoes:{},
    todos:{}
  },
  changeTab(event){
    this.setData({tab:event.target.dataset.name})
  },
  onShow(){ 
    this.fetchTomatoes()
    this.fetchTodos()
   this.setData({me:wx.setStorageSync('me')})

  },
  fetchTomatoes(){
    http.get('/tomatoes',{is_group: "yes"})
    .then(response=>{
      this.setData({tomatos:response.data.resources})
    })
  },
  fetchTodos(){
    http.get('/todos',{is_group:"yes"})
    .then(response=>{
      this.setData({todos:response.data.resources})
      console.log(response.data.resources);
    })
  }
})