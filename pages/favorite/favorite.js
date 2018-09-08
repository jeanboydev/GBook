// pages/favorite/favorite.js
import config from '../../config/config.js';
Page({
  data: {
    dataList: []
  },
  onLoad: function (query) {
    //读取收藏的图书列表
    let favoriteBooks = wx.getStorageSync(config.cacheKey.favoriteBooks);
    this.setData({
      dataList: favoriteBooks
    });
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
})