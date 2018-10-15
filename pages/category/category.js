Page({
  data: {
    category: [{
        name: '地方特产',
        id: 'guowei'
      },
      {
        name: '乳品冲剂',
        id: 'shucai'
      },
      {
        name: '粮米米面',
        id: 'chaohuo'
      },
      {
        name: '水果蔬菜',
        id: 'dianxin'
      },
      {
        name: '滋补营养',
        id: 'cucha'
      },
      {
        name: '生鲜肉类',
        id: 'danfan'
      },
      {
        name: '休闲食品',
        id: 'xiuxian'
      },
      {
        name: '有机食品',
        id: 'youji'
      }
    ],
    detail: [{
        "id": "guowei",
        "banner": "../../images/hd/s1.png",
        "cate": "地方特产",
        "detail": [{
            "thumb": "../../images/hd/s1.png",
            "name": "梨花带雨 3个"
          },
          {
            "thumb": "../../images/hd/s1.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s1.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s1.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s1.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s1.png",
            "name": "梨花带雨 3个"
          }
        ]
      },
      {
        "id": "shucai",
        "banner": "../../images/hd/s2.png",
        "cate": "乳品冲剂",
        "detail": [{
            "thumb": "../../images/hd/s2.png",
            "name": "瓜子 3个"
          },
          {
            "thumb": "../../images/hd/s2.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s2.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s2.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s2.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s2.png",
            "name": "瓜子 4个"
          }
        ]
      },
      {
        "id": "chaohuo",
        "banner": "../../images/hd/s3.png",
        "cate": "粮米米面",
        "detail": [{
            "thumb": "../../images/hd/s3.png",
            "name": "梨花带雨 3个"
          },
          {
            "thumb": "../../images/hd/s3.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s3.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s3.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s3.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s3.png",
            "name": "梨花带雨 3个"
          }
        ]
      },
      {
        "id": "dianxin",
        "banner": "../../images/hd/s4.png",
        "cate": "水果蔬菜",
        "detail": [{
            "thumb": "../../images/hd/s4.png",
            "name": "瓜子 3个"
          },
          {
            "thumb": "../../images/hd/s4.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s4.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s4.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s4.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s4.png",
            "name": "瓜子 4个"
          }
        ]
      },
      {
        "id": "cucha",
        "banner": "../../images/hd/s5.png",
        "cate": "滋补营养",
        "detail": [{
            "thumb": "../../images/hd/s5.png",
            "name": "梨花带雨 3个"
          },
          {
            "thumb": "../../images/hd/s5.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s5.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s5.png",
            "name": "奇异果 2个"
          },
          {
            "thumb": "../../images/hd/s5.png",
            "name": "红枣 500g"
          },
          {
            "thumb": "../../images/hd/s5.png",
            "name": "梨花带雨 3个"
          }
        ]
      },
      {
        "id": "danfan",
        "banner": "../../images/hd/s6.png",
        "cate": "生鲜肉类",
        "detail": [{
            "thumb": "../../images/hd/s6.png",
            "name": "瓜子 3个"
          },
          {
            "thumb": "../../images/hd/s6.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s6.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s6.png",
            "name": "小米"
          },
          {
            "thumb": "../../images/hd/s6.png",
            "name": "芹菜 500g"
          },
          {
            "thumb": "../../images/hd/s6.png",
            "name": "瓜子 4个"
          }
        ]
      }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {
    var self = this;

    // wx.request({
    //     url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //     success(res){
    //         self.setData({
    //             detail : res.data
    //         })
    //     }
    // });

  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function() {
      console.log(e.target.dataset.id);
      console.log(e.target.dataset.index);
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function() {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})