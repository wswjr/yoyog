// pages/promotional/promotional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
    },
    seckilling: [{
            'id': 1,
            'images': '../../images/hd/s6.png',
            'name': '百草味 鱿鱼足片',
            'gg': '干果180克1袋',
            'price': 306,
            'progress': 36
          },
          {
            'id': 2,
            'images': '../../images/hd/s6.png',
            'name': '百草味 鱿鱼足片',
            'gg': '干果180克1袋',
            'price': 306,
            'progress': 36
          },
          {
            'id': 3,
            'images': '../../images/hd/s6.png',
            'name': '百草味 鱿鱼足片',
            'gg': '干果180克1袋',
            'price': 306,
            'progress': 36
          },
          {
            'id': 4,
            'images': '../../images/hd/s6.png',
            'name': '百草味 鱿鱼足片',
            'gg': '干果180克1袋',
            'price': 306,
            'progress': 36
          },
          {
            'id': 5,
            'images': '../../images/hd/s6.png',
            'name': '百草味 鱿鱼足片',
            'gg': '干果180克1袋',
            'price': 306,
            'progress': 36
          }
    ]
  },
  //tab切换
  tab: function(e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    console.log(dataId);
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})