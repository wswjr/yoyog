// pages/goodscategory/goodscategory.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scategory: [
      {
        "id": 1,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "200",
        "scategory_gg":"g"
      },
      {
        "id": 2,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "100",
        "scategory_gg": "g"
      },
      {
        "id": 3,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "700",
        "scategory_gg": "g"
      },
      {
        "id": 4,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "300",
        "scategory_gg": "g"
      },
      {
        "id": 5,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "600",
        "scategory_gg": "g"
      },
      {
        "id": 6,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "800",
        "scategory_gg": "g"
      },
      {
        "id": 7,
        "scategory_name": "路易威登台湾官网直邮进口LV?新款子母带NEVERFULL",
        "scategory_img": "../../images/hd/goods.jpg",
        "scategory_price": "300",
        "scategory_gg": "g"
      }
    ],
    imageurl1: "../../images/classify/sort01.png",
    daindex1: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 价格排序
   */
  choosesort1: function (e) {
    var that = this;
    let scategory = that.data.scategory; 
    if (this.data.daindex1 == 0) {
      scategory.sort(app.jxl("scategory_price"));
      this.setData({
        imageurl1: "../../images/classify/sort02.png",
        daindex1: 1,
        scategory: scategory
      })
    } else if (this.data.daindex1 == 1) {
      scategory.sort(app.sxl("scategory_price"));
      this.setData({
        imageurl1: "../../images/classify/sort03.png",
        daindex1: 2,
        scategory: scategory
      })
    }
    else {
      scategory.sort(app.sxl("id"));
      this.setData({
        imageurl1: "../../images/classify/sort01.png",
        daindex1: 0,
        scategory: scategory
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
  
  },
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch(event) {
    if (event.detail) {
      wx.showToast({
        title: '搜索：' + event.detail,
        icon: 'none'
      });
    }
  }
})