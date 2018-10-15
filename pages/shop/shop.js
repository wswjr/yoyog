// pages/shop/shop.js
var app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    seckill: [
      {
        "id": 1,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 10,
        "seckill_cs":12
      },
      {
        "id": 2,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 90,
        "seckill_cs": 10
      },
      {
        "id": 3,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 40,
        "seckill_cs": 16
      },
      {
        "id": 4,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 50,
        "seckill_cs": 9
      },
      {
        "id": 5,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 30,
        "seckill_cs": 3
      },
      {
        "id": 6,
        "seckill_name": "百草味-华夫饼1kg",
        "seckill_img": "../../images/hd/pro5.png",
        "seckill_price": 60,
        "seckill_cs": 5
      }
    ],
    imageurl1: "../../images/classify/sort01.png",
    daindex1: 0,
    imageurl2: "../../images/classify/sort01.png",
    daindex2: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
 * 兑换次数/积分排序
 */
  choosesort1: function (e) {
    let typ = e.currentTarget.dataset.th;
    let seckill = this.data.seckill; 
    
    // 1为兑换次数，2为积分
    if(typ==1)
    {
      if (this.data.daindex1 == 0) {
        seckill.sort(app.jxl("seckill_cs"));
        this.setData({
          imageurl1: "../../images/classify/sort02.png",
          daindex1: 1,
          seckill: seckill
        })
      } else if (this.data.daindex1 == 1) {
        seckill.sort(app.sxl("seckill_cs"));
        this.setData({
          imageurl1: "../../images/classify/sort03.png",
          daindex1: 2,
          seckill: seckill
        })
      }
      else {
        seckill.sort(app.sxl("id"));
        this.setData({
          imageurl1: "../../images/classify/sort01.png",
          daindex1: 0,
          seckill: seckill
        })
      }
    }else{
      if (this.data.daindex2 == 0) {
        seckill.sort(app.jxl("seckill_price"));
        this.setData({
          imageurl2: "../../images/classify/sort02.png",
          daindex2: 1,
          seckill: seckill
        })
      } else if (this.data.daindex2 == 1) {
        seckill.sort(app.sxl("seckill_price"));
        this.setData({
          imageurl2: "../../images/classify/sort03.png",
          daindex2: 2,
          seckill: seckill
        })
      }
      else {
        seckill.sort(app.sxl("id"));
        this.setData({
          imageurl2: "../../images/classify/sort01.png",
          daindex2: 0,
          seckill: seckill
        })
      }
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