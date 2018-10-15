// pages/indent/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    lb:
      [
        {
          id: 1, name: "描述相符"
        },
        {
          id: 2, name: "物流服务"
        },
        {
          id: 3, name: "服务态度"
        }
      ],
    normalSrc: '/images/classify/normal.png',
    selectedSrc: '/images/classify/selected.png',
    halfSrc: '/images/classify/half.png',
    evalList: [{ tempFilePaths: [], imgList: [] }],//上传图片
    id0: false,
    id1: false,
    id2: false
  },
  inden: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        id0: true, id1: false, id2: false, id3: false
      })
    }
    if (index == 1) {
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
  //点击左边,半颗星
  selectLeft: function (e) {
    var lb = this.data.lb;
    var describekey = e.currentTarget.dataset.describekey;
    var index = e.currentTarget.dataset.index;
    for (var i = 0; i < lb.length; i++) {
      if (lb[i].id == index) {
        lb[i].count = describekey;
        if (lb[i].count == 0.5) {
          //只有一颗星的时候,再次点击,变为0颗
          this.data.lb[i].count = 0;
        }
      }
    }
    this.setData({
      lb: lb
    })
  },
  //点击右边,一颗星
  selectRight: function (e) {
    var lb = this.data.lb;
    var describekey = e.currentTarget.dataset.describekey;
    var index = e.currentTarget.dataset.index;
    for (var i = 0; i < lb.length; i++) {
      if (lb[i].id == index) {
        lb[i].count = describekey;
      }
    }
    this.setData({
      lb: lb
    })
  },
  //添加图片
  joinPicture: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var that = this;
    var imgNumber = evalList[index].tempFilePaths;
    if (imgNumber.length >= 3) {
      wx.showModal({
        title: '',
        content: '最多上传三张图片',
        showCancel: false,
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage("album", imgNumber);
          } else if (res.tapIndex == 1) {
            that.chooseWxImage("camera", imgNumber);
          }
        }
      }
    })
  },
  chooseWxImage: function (type, list) {
    var img = list;
    var len = img.length;
    var that = this;
    var evalList = this.data.evalList;
    wx.chooseImage({
      count: 3,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function (res) {
        var addImg = res.tempFilePaths;
        var addLen = addImg.length;
        if ((len + addLen) > 3) {
          for (var i = 0; i < (addLen - len); i++) {
            var str = {};
            str.pic = addImg[i];
            img.push(str);
          }
        } else {
          for (var j = 0; j < addLen; j++) {
            var str = {};
            str.pic = addImg[j];
            img.push(str);
          }
        }
        that.setData({
          evalList: evalList
        })
        that.upLoadImg(img);
      },
    })
  },
  upLoadImg: function (list) {
    var that = this;
    this.upload(that, list);
  },
  //多张图片上传
  upload: function (page, path) {
    var that = this;
    var curImgList = [];
    for (var i = 0; i < path.length; i++) {
      wx.showToast({
        icon: "loading",
        title: "正在上传"
      })
      // wx.uploadFile({
      //     // 接口处理在下面有写
      //     url: app.globalData.subDomain + '/API/AppletApi.aspx',
      //     filePath: path[i].pic,
      //     name: 'file',
      //     header: { "Content-Type": "multipart/form-data" },
      //     formData: {
      //       douploadpic: '1'
      //     },
      //     success: function (res) {
      //       curImgList.push(res.data);
      //       var evalList = that.data.evalList;
      //       evalList[0].imgList = curImgList;
      //       that.setData({
      //         evalList: evalList
      //       })
      //       if (res.statusCode != 200) {
      //         wx.showModal({
      //           title: '提示',
      //           content: '上传失败',
      //           showCancel: false
      //         })
      //         return;
      //       }
      //       var data = res.data
      //       page.setData({  //上传成功修改显示头像
      //         src: path[0]
      //       })
      //     },
      //     fail: function (e) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       })
      //     },
      //     complete: function () {
      //       wx.hideToast();  //隐藏Toast
      //     }
      //   })
    }
  },
  //删除图片
  clearImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var img = evalList[0].tempFilePaths;
    img.splice(index, 1);
    this.setData({
      evalList: evalList
    })
    this.upLoadImg(img);
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