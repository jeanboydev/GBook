// pages/detail/detail.js
import config from '../../config/config.js';
Page({
  data: {
    id: 0,
    bookInfo: {},
    androidBookInfo: {
      "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg",
      "introduce": "《Android开发艺术探索》是一本Android进阶类书籍，采用理论、源码和实践相结合的方式来阐述高水准的Android应用开发要点。《Android开发艺术探索》从三个方面来组织内容。第一，介绍Android开发者不容易掌握的一些知识点；第二，结合Android源代码和应用层开发过程，融会贯通，介绍一些比较深入的知识点；第三，介绍一些核心技术和Android的性能优化思想。"
    },
    iosBookInfo: {
      "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg",
      "introduce": "畅销书全新升级，Swift和Objective-C双语讲解，累计印数6万多册，新增手势识别、Quartz 2D绘图技术、动画技术、用户扩展、用户通知、Core Data等内容。"
    },
    feBookInfo: {
      "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg",
      "introduce": "拒绝长篇累牍的纸上谈兵！拒绝拿打印文档来糊弄事儿！这是第1本详尽介绍Vue.js实际项目开发的Vue.js指南书！即学即用！"
    },
    backendBookInfo: {
      "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg",
      "introduce": "1.阐述实施微服务架构的方法论和工程实践 2.解密微服务Spring Boot Spring Cloud 技术实践 3.基于Docker部署微服务 4.给出从现有系统向微服务架构转型的思路、过程和案例分析。"
    },
    aiBookInfo: {
      "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg",
      "introduce": "机器学习深度学习领域参考书，包揽TensorFlow1.1的新特性，人脸识别、语音识别、图像和语音相结合等热点一应俱全，李航、余凯等人工智能领域专家倾力推荐。"
    },
    favoriteList: [],
    isMarked: false,
  },
  onLoad: function (query) {
    //query 是通过 url 传过来的参数的集合
    if (query.id) { //处理是否有 id
      let bookInfo = {};
      if (query.id.indexOf('android_') != -1) {
        bookInfo = this.data.androidBookInfo;
      } else if (query.id.indexOf('ios_') != -1) {
        bookInfo = this.data.iosBookInfo;
      } else if (query.id.indexOf('fe_') != -1) {
        bookInfo = this.data.feBookInfo;
      } else if (query.id.indexOf('backend_') != -1) {
        bookInfo = this.data.backendBookInfo;
      } else if (query.id.indexOf('ai_') != -1) {
        bookInfo = this.data.aiBookInfo;
      }
      bookInfo.id = query.id;
      bookInfo.name = query.name;
      this.setData({
        id: query.id,
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