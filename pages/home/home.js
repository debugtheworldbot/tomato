// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {id:1,text:"萨达所",finished:true},
      {id:2,text:"2222",finished:true},
      {id:3,text:"133",finished:false},
      {id:4,text:"144",finished:true},

    ],
    visible:false
  },
  showConfirm(event){
    this.setData({visible:true})
  },
  confirm(event){
    let content=event.detail
    if(content){  
      let todo=[{id:this.data.lists.length + 1,text:content,finished:false}]
    this.data.lists= todo.concat(this.data.lists)  
     this.setData({lists:this.data.lists})
     this.cancel()
    }
  },
  destoryTodo(event){
    let index=event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists:this.data.lists})
  },
  cancel(event){
   this.setData({ visible : false } ) 
   
  }
})