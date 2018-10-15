// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [
      { id: 1, name: "得得", phone: "15232046423", adress:"北京市门头沟区永定镇长安一号11小区3号楼1单元1201",staus:1},
      { id: 2, name: "得得", phone: "15232046423", adress: "北京市门头沟区永定镇长安一号11小区3号楼1单元1201",staus:0},
      { id: 3, name: "得得", phone: "15232046423", adress: "北京市门头沟区永定镇长安一号11小区3号楼1单元1201",staus:0}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.address[0].checked = true;
      this.setData({
        address: this.data.address,
      })//默认parameter数组的第一个对象是选中的
  },
  // 参数点击响应事件
  parameterTap: function (e) {//e是获取e.currentTarget.dataset.id所以是必备的，跟前端的data-id获取的方式差不多
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var addressList = this.data.address//获取Json数组
    for (var i = 0; i < addressList.length; i++) {
      if (addressList[i].id == this_checked) {
        addressList[i].checked = true;//当前点击的位置为true即选中
      }
      else {
        addressList[i].checked = false;//其他的位置为false
      }
    }
    that.setData({
      address: addressList
    })
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