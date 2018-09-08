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
    //query 是通过 url 传过来的参数的集合
    if (query.id) { //处理是否有 id
      this.setData({
        id: parseInt(query.id)
      });
    }
    if (query.name) { //处理是否有 name
      let bookInfo = this.data.bookInfo;
      bookInfo.id = this.data.id;
      bookInfo.name = query.name;
      this.setData({ //这里应该通过 api 获取数据，这里仅做模拟，以后修改
        bookInfo: bookInfo
      });
    }
    //读取已经收藏的图书列表
    let favoriteBooks = wx.getStorageSync(config.cacheKey.favoriteBooks);
    if (favoriteBooks) {
      this.setData({
        favoriteList: favoriteBooks
      });
      this.setData({ //更新收藏状态
        isMarked: this.isMarked()
      });
    }
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  toFavorite: function () { //收藏按钮点击
    if (this.isMarked()) { //图书已被收藏，则取消收藏
      let favoriteList = this.data.favoriteList;
      // indexOf 返回已经收藏的图书在 list 中的下标
      // splice(0,1); splice 函数有两个参数，第一个表示从哪个坐标开始删除，第二个表示删除多少个
      favoriteList.splice(favoriteList.indexOf(this.data.bookInfo), 1);
      // 更新收藏列表
      wx.setStorageSync(config.cacheKey.favoriteBooks, favoriteList);
      this.setData({
        favoriteList: favoriteList,
        isMarked: this.isMarked()
      });
    } else { // 图书未被收藏，则执行收藏
      let favoriteList = this.data.favoriteList;
      // push(); push 函数的作用是将元素追加到数组末尾
      favoriteList.push(this.data.bookInfo);
      // 更新收藏列表
      wx.setStorageSync(config.cacheKey.favoriteBooks, favoriteList);
      this.setData({
        favoriteList: favoriteList,
        isMarked: this.isMarked()
      });
    }
  },
  isMarked: function () { //判断当前图书有没有被收藏过
    for (let book of this.data.favoriteList) {
      if (book.id == this.data.id) {
        return true;
      }
    }
    return false;
  }
})