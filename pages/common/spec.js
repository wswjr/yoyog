var API_URL = "https://youge.jarmr.cn/index.php/Home/Shop/kiui/id/";

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    image: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '' // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    content: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    shopid:{
      type: Number,
      value:  ''
    },
    url: {
      type: String,
      value: ''
    }
  },
  data: {
    // 弹窗显示控制
    isShow: false,
    path: '',
    style_title: '',
    style_frame: ''
  },
  ready() {},
  methods: {
    onShow() {},
    toShare() {
      let button = this.selectComponent("#share", this)
      // this.onShareAppMessage();
    },
    hideShare() {
      this.setData({
        style_title: '',
        style_frame: '',
        isShow: !this.data.isShow
      })
      wx.hideToast();
    },
    toPhoto(param) {
    
      let that = this;
      wx.saveImageToPhotosAlbum({
        filePath: this.data.path,
        success: function(data) {
          that.setData({
            style_title: '',
            style_frame: '',
          });
          wx.hideToast();
          param == 2 ? wx.showModal({
            title: '保存成功',
            content: '请本地操作转发朋友圈...',
            showCancel: false
          }) : wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function(err) {
          wx.hideToast();
          if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
            console.log("用户一开始拒绝了，我们想再次发起授权")
            console.log('打开设置窗口')
            wx.openSetting({
              success(settingdata) {
                // console.log(settingdata)
                if (settingdata.authSetting['scope.writePhotosAlbum']) {
                  console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                } else {
                  console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                }
              }
            })
          }
        }
      })
    },
    toLocal(e) {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      });
      this.setData({
        style_title: 'opacity:0;',
        style_frame: 'position:absolute; left:-1000px;'
      });
      let that = this;
      var images='';
     
      wx.request({
        url: API_URL + that.data.shopid,
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          var data12 = res.data.msg;
          data12=  data12.substr(1);
          console.log(data12);
          wx.getImageInfo({
            src: that.data.image,
            success: function (res) {
              let ctx = wx.createCanvasContext("share", that);
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, 320, 400);
              ctx.drawImage(res.path, 0, 0, 320, 200);
              ctx.drawImage('../../images/ugo.png', 0, 255, 200, 105);
              ctx.drawImage('https://youge.jarmr.cn'+data12, 190, 255, 100, 100);
              ctx.setFontSize(18);
              ctx.fillStyle = "#111";
              ctx.fillText(that.data.text, (310 - ctx.measureText(that.data.text).width) / 2, 230)
              ctx.draw(setTimeout(() => {
                wx.canvasToTempFilePath({
                  canvasId: 'share',
                  x: 0,
                  y: 0,
                  width: 320,
                  height: 400,
                  success: function (res) {
                    that.data.path = res.tempFilePath;
                    
                    that.toPhoto(e.currentTarget.dataset.param);
                  },
                  fail: function (err) {
                    console.log(err);
                  }
                }, that)
              }, 500));
            }
          });
        }
      })
      // console.log('https://youge.jarmr.cn' + data12); 
      
    },
    //展示弹框
    showShare() {
      let that = this;
    
      wx.getImageInfo({
        src: this.data.image,
        success: function(res) {
          let ctx = wx.createCanvasContext("share", that);
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, 320, 300);
          ctx.drawImage(res.path, 0, 0, 320, 200);
          ctx.setFontSize(18);
          ctx.fillStyle = "#111";
          ctx.fillText(that.data.text, (310 - ctx.measureText(that.data.text).width) / 2, 240)
          ctx.draw();
          wx.canvasToTempFilePath({
            canvasId: 'share',
            x: 0,
            y: 0,
            width: 320,
            height: 900,
            success: function(res) {
              that.data.path = res.tempFilePath;
            },
            fail: function(err) {
              console.log(err);
            }
          }, that)
        }
      });
      this.setData({
        isShow: !this.data.isShow
      });
    }
  }
})