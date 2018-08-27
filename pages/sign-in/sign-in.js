// pages/sign-in/sign-in.js
Page({

  data: {

  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  toSignIn: function () {
    wx.navigateTo({
      url: '/pages/home/home'
    });
  },
  toSignUp: function () {
    wx.navigateTo({
      url: '/pages/sign-up/sign-up'
    });
  }
})