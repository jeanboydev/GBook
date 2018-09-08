// pages/sign-up/sign-up.js
import config from '../../config/config.js';
Page({
  data: {
    username: "",
    password: ""
  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onUsernameInput: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  toSignUp: function () {
    if (!this.data.username) {
      wx.showToast({
        title: "请输入用户名！",
        icon: "none",
        mask: true
      });
      return;
    }
    if (!this.data.password) {
      wx.showToast({
        title: "请输入密码！",
        icon: "none",
        mask: true
      });
      return;
    }
    wx.setStorageSync(config.cacheKey.username, this.data.username);
    wx.setStorageSync(config.cacheKey.password, this.data.password);
    wx.showToast({
      title: "注册成功请登录",
      icon: "success",
      mask: true
    });
    wx.reLaunch({
      url: '/pages/sign-in/sign-in'
    });
  }
})