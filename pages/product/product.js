Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "../../images/hd/pro5.png",
      "../../images/hd/pro5.png",
      "../../images/hd/pro5.png",
      "../../images/hd/pro5.png",
      "../../images/hd/pro5.png"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_1.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_2.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_3.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_4.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_5.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_6.jpg",
    ],
    id0: true,
    id1: false,
    id2: false,
    id3: false,
    // tap切换
    selected: true,
    selected1: false,
    // 分享
    modalHidden2: true,
    // 保存图片
    poster: true,
    // 评论星星
    normalSrc: '/images/classify/normal.png',
    selectedSrc: '/images/classify/selected.png',
    halfSrc: '/images/classify/half.png',
    stars: [0, 1, 2, 3, 4]
  },
  
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  inden: function (e) {
    let index = e.target.dataset.index;
    var orders = this.data.orders;
    var order = [];
    if (index == 0) {
      this.setData({
        id0: true, id1: false, id2: false, id3: false
      })
    }
    if (index == 1) {
      console.log(order);
      this.setData({
        id0: false, id1: true, id2: false, id3: false
      })
    }
    if (index == 2) {
      this.setData({
        id0: false, id1: false, id2: true, id3: false
      })
    }
    if (index == 3) {
      this.setData({
        id0: false, id1: false, id2: false, id3: true
      })
    }
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/trolley/trolley'
    })
  },
  onReady: function () {
    this.spec = this.selectComponent("#spec");
    console.log(this.spec);
  },
  showShare() {
    this.spec.showShare();
  },
  hideShare() {
    this.spec.hideShare();
  },
  tosharing(){
    this.setData({
      modalHidden2: false
    });
  },
  toposter(){
    this.setData({
      poster: false,
      modalHidden2: true
    });
  },
  poster(){
    this.setData({
      poster: true
    });
  },
  modalChange2() {
    this.setData({
      modalHidden2: true
    });
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})