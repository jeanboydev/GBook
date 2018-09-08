// pages/home/home.js
import config from '../../config/config.js';
Page({
  data: {
    dataList: [{
        id: 1,
        imageUrl: "/images/book.jpg",
        name: "Android",
        author: "任玉刚"
      },
      {
        id: 2,
        imageUrl: "/images/book.jpg",
        name: "iOS",
        author: "任玉刚"
      },
      {
        id: 3,
        imageUrl: "/images/book.jpg",
        name: "web前端",
        author: "任玉刚"
      },
      {
        id: 4,
        imageUrl: "/images/book.jpg",
        name: "后端",
        author: "任玉刚"
      },
      {
        id: 5,
        imageUrl: "/images/book.jpg",
        name: "深度学习",
        author: "任玉刚"
      },
      {
        id: 6,
        imageUrl: "/images/book.jpg",
        name: "经济学",
        author: "任玉刚"
      },
      {
        id: 7,
        imageUrl: "/images/book.jpg",
        name: "投资理财",
        author: "任玉刚"
      },
      {
        id: 8,
        imageUrl: "/images/book.jpg",
        name: "小说",
        author: "任玉刚"
      }
    ]
  },
  onLoad: function (options) {
    let userInfo = wx.getStorageSync(config.cacheKey.userInfo);
    if (!userInfo) {
      wx.navigateTo({
        url: "/pages/sign-in/sign-in"
      });
    }
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onItemClick: function (e) {
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + item.id + "&name=" + item.name
    });
  }
});