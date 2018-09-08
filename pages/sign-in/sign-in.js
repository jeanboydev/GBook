// pages/sign-in/sign-in.js
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
  toSignIn: function () {
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
    let authUsername = wx.getStorageSync(config.cacheKey.username);
    let authPassword = wx.getStorageSync(config.cacheKey.password);
    if (this.data.username != authUsername) {
      wx.showToast({
        title: "用户名不正确！",
        icon: "none",
        mask: true
      });
      return;
    }
    if (this.data.password != authPassword) {
      wx.showToast({
        title: "密码不正确！",
        icon: "none",
        mask: true
      });
      return;
    }

    wx.setStorageSync(config.cacheKey.userInfo, {
      username: this.data.username
    });
    wx.reLaunch({
      url: '/pages/home/home'
    });
  },
  toSignUp: function () {
    wx.navigateTo({
      url: '/pages/sign-up/sign-up'
    });
  }
})