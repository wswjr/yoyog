
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scategory: [
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc":1231
      },
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc": 1231
      },
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc": 1231
      },
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc": 1231
      },
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc": 1231
      },
      {
        "id": 1,
        "scategory_name": "百草味 鱿鱼足片百草味 片百草味",
        "scategory_img": "../../images/hd/seckill.png",
        "scategory_price": "￥200",
        "scategory_sc": 1231
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.share = this.selectComponent("#share");
    console.log(this.share);
  },
  showShare() {
    this.share.showShare();
  },
  hideShare() {
    this.share.hideShare();
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
  /**
 * 当前商品收藏事件
 */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let scategory = this.data.scategory;
    const selected = scategory[index].selected;
    scategory[index].selected = !selected;
    this.setData({
      scategory: scategory
    });
  },
  // xz:function(a,b){
  //   const c = a[b].selected;
  //   a[a].c = !c;
  // },
  onSearch(event) {
    if (event.detail) {
      wx.showToast({
        title: '搜索：' + event.detail,
        icon: 'none'
      });
    }
  }
})