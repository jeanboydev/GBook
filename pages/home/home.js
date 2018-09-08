// pages/home/home.js
import config from '../../config/config.js';
Page({
  data: {
    dataList: [{ //这里应该是从服务期获取数据，暂时为模拟数据。后面再修改
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
    //读取用户登录信息
    let userInfo = wx.getStorageSync(config.cacheKey.userInfo);
    if (userInfo) { //用户已登录，则直将用户信息保存到全局变量中
      getApp().globalData.userInfo = userInfo;
    } else {
      wx.navigateTo({ //用户未登录，则直接跳转至登录页面
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
    wx.navigateTo({ //通过 url 传递参数，是不是跟 html 很像？
      url: "/pages/detail/detail?id=" + item.id + "&name=" + item.name
    });
  }
});