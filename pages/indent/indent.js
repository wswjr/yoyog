// pages/indent/indent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [
      { id: 1, title: '新鲜芹菜 半斤', dh: 123132111,time:"2018-07-12",yfprice:0.00, image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01,type:1 },
      { id: 2, title: '新鲜芹菜 半斤', dh: 123132112, time: "2018-07-12", yfprice: 0.00,image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01, type: 2 },
      { id: 3, title: '新鲜芹菜 半斤', dh: 123132113, time: "2018-07-12", yfprice: 0.00, image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01, type: 3 },
      { id: 4, title: '新鲜芹菜 半斤', dh: 123132114, time: "2018-07-12", yfprice: 0.00, image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01, type: 4 }

    ],
    id0: true,
    id1: false,
    id2: false,
    id3: false,
    id4: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 遍历订单，订单类型相同时添加到数组
  sd:function(a,b){
    let order = []; 
    for (var i = 0; i < a.length; i++) {
      if (a[i].type == b) {
        order.push(a[i]);
        return order;
        console.log(order);
      }
    }
  },
  inden:function(e){
    let index = e.target.dataset.index;
    var orders = this.data.orders;
    var order=[];
    if(index==0){
      this.setData({
        id0: true,id1: false,id2: false,id3: false,id4: false
      })
    }
    // 待付款
    if(index==1){
     order= this.sd(orders,1);
     console.log(order);
     this.setData({
       id0: false,id1: true,id2: false,id3: false,id4: false,
       orders:order
      })
    }
    // 待发货
    if (index == 2){
      order = this.sd(orders,2);
      console.log(order);
      this.setData({
        id0: false,id1: false,id2: true,id3: false,id4: false,
        orders: order
      })
    }
    if (index == 3) {
      this.setData({
        id0: false,
        id1: false,
        id2: false,
        id3: true,
        id4: false
      })
    }
    if (index == 4) {
      this.setData({
        id0: false,
        id1: false,
        id2: false,
        id3: false,
        id4: true
      })
    }
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