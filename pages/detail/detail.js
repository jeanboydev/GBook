// pages/detail/detail.js
import config from '../../config/config.js';
Page({
  data: {
    id: 0,
    bookInfo: {
      "name": "Android开发艺术探索",
      "image": "http://t.im/36pa",
      "url": "https://book.douban.com/subject/26599538/",
      "introduce": "《Android开发艺术探索》是一本Android进阶类书籍，采用理论、源码和实践相结合的方式来阐述高水准的Android应用开发要点。《Android开发艺术探索》从三个方面来组织内容。第一，介绍Android开发者不容易掌握的一些知识点；第二，结合Android源代码和应用层开发过程，融会贯通，介绍一些比较深入的知识点；第三，介绍一些核心技术和Android的性能优化思想。"
    },
    favoriteList: [],
    isMarked: false,
  },
  onLoad: function (query) {
    if (query.id) {
      this.setData({
        id: parseInt(query.id)
      });
    }
    if (query.name) {
      let bookInfo = this.data.bookInfo;
      bookInfo.id = this.data.id;
      bookInfo.name = query.name;
      this.setData({
        bookInfo: bookInfo
      });
    }
    let favoriteBooks = wx.getStorageSync(config.cacheKey.favoriteBooks);
    if (favoriteBooks) {
      this.setData({
        favoriteList: favoriteBooks
      });
      this.setData({
        isMarked: this.isMarked()
      });
    }
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  toFavorite: function () {
    if (this.isMarked()) {
      let favoriteList = this.data.favoriteList;
      favoriteList.splice(favoriteList.indexOf(this.data.bookInfo), 1);
      wx.setStorageSync(config.cacheKey.favoriteBooks, favoriteList);
      this.setData({
        favoriteList: favoriteList,
        isMarked: this.isMarked()
      });
    } else {
      let favoriteList = this.data.favoriteList;
      favoriteList.push(this.data.bookInfo);
      wx.setStorageSync(config.cacheKey.favoriteBooks, favoriteList);
      this.setData({
        favoriteList: favoriteList,
        isMarked: this.isMarked()
      });
    }
  },
  isMarked: function () {
    for (let book of this.data.favoriteList) {
      if (book.id == this.data.id) {
        return true;
      }
    }
    return false;
  }
})