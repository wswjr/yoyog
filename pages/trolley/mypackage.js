// pages/trolley/mypackage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [
      { id: 1, price: 300, mprice: 1000, creattime: "2017.12.12", endtime: "2018.10.01", type: 1 },
      { id: 2, price:5,mprice:59,  creattime:"2017.12.12",endtime:"2018.10.01",   type: 1 },
      { id: 3, price:300, mprice:1000, creattime: "2017.12.12", endtime: "2018.10.01", type: 2},
      { id: 4, price: 300, mprice:1000, creattime: "2017.12.12", endtime: "2018.10.01", type: 3}
    ],
    id0: true,
    id1: false,
    id2: false,
    id3: false,
    id4: false
  },
  inden: function (e) {
    let index = e.target.dataset.index;
    var orders = this.data.orders;
    var order = [];
    if (index == 0) {
      this.setData({
        id0: true, id1: false, id2: false
      })
    }
    // 待付款
    if (index == 1) {
      console.log(order);
      this.setData({
        id0: false, id1: true, id2: false
      })
    }
    // 待发货
    if (index == 2) {
      this.setData({
        id0: false, id1: false, id2: true
      })
    }
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