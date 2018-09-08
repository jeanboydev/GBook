// pages/mine/mine.js
Page({

  data: {

  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  toFavorite: function () {
    wx.navigateTo({
      url: '/pages/favorite/favorite'
    });
  },
  toSettings: function () {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  }
})