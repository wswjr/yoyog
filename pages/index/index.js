//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classify: [{
        "id": 1,
        "classify_name": "全部商品",
        "src":"/pages/category/category",
        "classify_img": "../../images/classify/t1.png"
      },
      {
        "id": 2,
        "classify_name": "地方特产",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t2.png"
      },
      {
        "id": 3,
        "classify_name": "乳品冲剂",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t3.png"
      },
      {
        "id": 4,
        "classify_name": "粮米米面",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t4.png"
      },
      {
        "id": 5,
        "classify_name": "水果蔬菜",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t5.png"
      },
      {
        "id": 6,
        "classify_name": "滋补营养",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t6.png"
      },
      {
        "id": 7,
        "classify_name": "生鲜肉类",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t7.png"
      },
      {
        "id": 8,
        "classify_name": "休闲食品",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t8.png"
      },
      {
        "id": 9,
        "classify_name": "有机食品",
        "src": "/pages/category/childcate",
        "classify_img": "../../images/classify/t9.png"
      },
      { 
         "id": 10, 
         "classify_name": "更多", 
        "src": "/pages/category/childcate",
         "classify_img": "../../images/classify/t10.png" 
      }
    ],
    seckill:[
      {
        "id": 1,
        "seckill_name": "百草味 鱿鱼足片百草味 片百草味",
        "seckill_img": "../../images/hd/seckill.png",
        "seckill_price": "200"
      },
      {
        "id": 1,
        "seckill_name": "百草味 鱿鱼足片百草味 片百草味",
        "seckill_img": "../../images/hd/seckill.png",
        "seckill_price": "200"
      },
      {
        "id": 1,
        "seckill_name": "百草味 鱿鱼足片百草味 片百草味",
        "seckill_img": "../../images/hd/seckill.png",
        "seckill_price": "200"
      },
      {
        "id": 1,
        "seckill_name": "百草味 鱿鱼足片百草味 片百草味",
        "seckill_img": "../../images/hd/seckill.png",
        "seckill_price": "200"
      },
      {
        "id": 1,
        "seckill_name": "百草味 鱿鱼足片百草味 片百草味",
        "seckill_img": "../../images/hd/seckill.png",
        "seckill_price": "200"
      }
     
    ],
    lb: [
      {
        "id": 1,
        "name": "千丝绿豆饼",
        "detail": ["天然", "健康","新鲜","美味"],
        "img": "../../images/hd/pro4.png",
        "price": "200",
        "gg":"瓶",
        "content":"源于自然醇正甘甜·原滋原味多重营"
      },
      {
        "id": 2,
        "name": "千丝绿豆饼",
        "detail": ["天然", "健康", "新鲜", "美味"],
        "img": "../../images/hd/pro4.png",
        "price": "200",
        "gg": "瓶",
        "content": "源于自然醇正甘甜·原滋原味多重营"
      },
      {
        "id": 3,
        "name": "千丝绿豆饼",
        "detail": ["天然", "健康", "新鲜", "美味"],
        "img": "../../images/hd/pro4.png",
        "price": "200",
        "gg": "瓶",
        "content": "源于自然醇正甘甜·原滋原味多重营"
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})