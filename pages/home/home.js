// pages/home/home.js
Page({
  data: {
    dataList: [{
      id: 1,
      imageUrl: "/images/book.jpg",
      name: "Android 开发艺术探索",
      author: "任玉刚"
    }, {
      id: 2,
      imageUrl: "/images/book.jpg",
      name: "Android 开发艺术探索",
      author: "任玉刚"
    }, {
      id: 3,
      imageUrl: "/images/book.jpg",
      name: "Android 开发艺术探索",
      author: "任玉刚"
    }, {
      id: 4,
      imageUrl: "/images/book.jpg",
      name: "Android 开发艺术探索",
      author: "任玉刚"
    }, {
      id: 5,
      imageUrl: "/images/book.jpg",
      name: "Android 开发艺术探索",
      author: "任玉刚"
    }]
  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onItemClick: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail'
    });
  }
})