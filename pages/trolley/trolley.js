// page/component/new-pages/cart/cart.js
Page({
  data: {
    carts: [
      { id: 1, title: '新鲜芹菜 半斤', image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01, selected: true },
      { id: 2, title: '素米 500g', image: '../../images/hd/s6.png', xq: '规格：A套餐', num: 1, price: 3, selected: true },
      { id: 3, title: '新鲜芹菜 半斤', image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 0.01, selected: true },
      { id: 4, title: '素米 500g', image: '../../images/hd/s6.png', xq: '规格：A套餐', num: 1, price: 0.03, selected: true },
      { id: 5, title: '新鲜芹菜 半斤', image: '../../images/hd/s5.png', xq: '规格：A套餐', num: 4, price: 1, selected: true },
      { id: 6, title: '素米 500g', image: '../../images/hd/s6.png', xq: '规格：A套餐', num: 1, price: 0.03, selected: true }
    ],
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true,    // 全选状态，默认全选
    startX: 0, //开始坐标
    startY: 0,
    showView: false
  },
  onShow() {
   
    this.setData({
      hasList: true,
      carts: this.data.carts
    });

    this.getTotalPrice();
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  // 编辑选中删除
  delete:function(e){
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中进行删除
        console.log(carts[i]);
        // carts.pop(carts[i]);
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
    });
  },


  //手指触摸动作开始 记录起点X坐标

  touchstart: function (e) {

    //开始触摸时 重置所有删除

    this.data.carts.forEach(function (v, i) {

      if (v.isTouchMove)//只操作为true的

        v.isTouchMove = false;

    })

    this.setData({

      startX: e.changedTouches[0].clientX,

      startY: e.changedTouches[0].clientY,

      carts: this.data.carts

    })
  },

  //滑动事件处理

  touchmove: function (e) {

    var that = this,

      index = e.currentTarget.dataset.index,//当前索引

      startX = that.data.startX,//开始X坐标

      startY = that.data.startY,//开始Y坐标

      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标

      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标

      //获取滑动角度

      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    that.data.carts.forEach(function (v, i) {

      v.isTouchMove = false

      //滑动超过30度角 return

      if (Math.abs(angle) > 30) return;

      if (i == index) {

        if (touchMoveX > startX) //右滑

          v.isTouchMove = false

        else //左滑

          v.isTouchMove = true

      }

    })

    //更新数据

    that.setData({

      carts: that.data.carts

    })

  },

  /**
 
 * 计算滑动角度
 
 * @param {Object} start 起点坐标
 
 * @param {Object} end 终点坐标
 
 */

  angle: function (start, end) {

    var _X = end.X - start.X,

      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);

  },
  //删除事件

  del: function (e) {

    this.data.carts.splice(e.currentTarget.dataset.index, 1)

    this.setData({

      carts: this.data.carts

    })

  },

  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    let tota=0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        tota += carts[i].selected;
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    console.log(tota);
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
      tota: tota
    });
  }

})