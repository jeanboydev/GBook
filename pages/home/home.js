// pages/home/home.js
import config from '../../config/config.js';
Page({
  data: {
    tabList: [{
      "name": "Android"
    }, {
      "name": "iOS"
    }, {
      "name": "Web前端"
    }, {
      "name": "后端"
    }, {
      "name": "人工智能"
    }, {
      "name": "小说"
    }],
    currentTabIndex: 0,
    dataList: [
      [{
        "id": "android_0",
        "name": "Android 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_1",
        "name": "Android 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_2",
        "name": "Android 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_3",
        "name": "Android 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_4",
        "name": "Android 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_5",
        "name": "Android 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_6",
        "name": "Android 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_7",
        "name": "Android 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_8",
        "name": "Android 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_9",
        "name": "Android 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_10",
        "name": "Android 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_11",
        "name": "Android 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_12",
        "name": "Android 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_13",
        "name": "Android 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_14",
        "name": "Android 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_15",
        "name": "Android 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_16",
        "name": "Android 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_17",
        "name": "Android 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_18",
        "name": "Android 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_19",
        "name": "Android 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }, {
        "id": "android_20",
        "name": "Android 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/android.jpg"
      }],
      [{
        "id": "ios_0",
        "name": "iOS 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_1",
        "name": "iOS 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_2",
        "name": "iOS 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_3",
        "name": "iOS 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_4",
        "name": "iOS 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_5",
        "name": "iOS 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_6",
        "name": "iOS 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_7",
        "name": "iOS 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_8",
        "name": "iOS 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_9",
        "name": "iOS 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_10",
        "name": "iOS 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_11",
        "name": "iOS 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_12",
        "name": "iOS 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_13",
        "name": "iOS 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_14",
        "name": "iOS 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_15",
        "name": "iOS 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_16",
        "name": "iOS 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_17",
        "name": "iOS 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_18",
        "name": "iOS 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_19",
        "name": "iOS 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }, {
        "id": "ios_20",
        "name": "iOS 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ios.jpg"
      }],
      [{
        "id": "fe_0",
        "name": "Web前端 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_1",
        "name": "Web前端 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_2",
        "name": "Web前端 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_3",
        "name": "Web前端 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_4",
        "name": "Web前端 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_5",
        "name": "Web前端 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_6",
        "name": "Web前端 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_7",
        "name": "Web前端 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_8",
        "name": "Web前端 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_9",
        "name": "Web前端 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_10",
        "name": "Web前端 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_11",
        "name": "Web前端 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_12",
        "name": "Web前端 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_13",
        "name": "Web前端 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_14",
        "name": "Web前端 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_15",
        "name": "Web前端 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_16",
        "name": "Web前端 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_17",
        "name": "Web前端 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_18",
        "name": "Web前端 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_19",
        "name": "Web前端 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }, {
        "id": "fe_20",
        "name": "Web前端 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/fe.jpg"
      }],
      [{
        "id": "backend_0",
        "name": "后端 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_1",
        "name": "后端 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_2",
        "name": "后端 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_3",
        "name": "后端 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_4",
        "name": "后端 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_5",
        "name": "后端 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_6",
        "name": "后端 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_7",
        "name": "后端 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_8",
        "name": "后端 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_9",
        "name": "后端 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_10",
        "name": "后端 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_11",
        "name": "后端 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_12",
        "name": "后端 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_13",
        "name": "后端 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_14",
        "name": "后端 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_15",
        "name": "后端 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_16",
        "name": "后端 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_17",
        "name": "后端 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_18",
        "name": "后端 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_19",
        "name": "后端 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }, {
        "id": "backend_20",
        "name": "后端 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/backend.jpg"
      }],
      [{
        "id": "ai_0",
        "name": "人工智能 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_1",
        "name": "人工智能 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_2",
        "name": "人工智能 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_3",
        "name": "人工智能 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_4",
        "name": "人工智能 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_5",
        "name": "人工智能 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_6",
        "name": "人工智能 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_7",
        "name": "人工智能 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_8",
        "name": "人工智能 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_9",
        "name": "人工智能 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_10",
        "name": "人工智能 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_11",
        "name": "人工智能 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_12",
        "name": "人工智能 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_13",
        "name": "人工智能 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_14",
        "name": "人工智能 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_15",
        "name": "人工智能 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_16",
        "name": "人工智能 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_17",
        "name": "人工智能 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_18",
        "name": "人工智能 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_19",
        "name": "人工智能 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }, {
        "id": "ai_20",
        "name": "人工智能 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/ai.jpg"
      }],
      [{
        "id": "story_0",
        "name": "小说 0",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_1",
        "name": "小说 1",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_2",
        "name": "小说 2",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_3",
        "name": "小说 3",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_4",
        "name": "小说 4",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_5",
        "name": "小说 5",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_6",
        "name": "小说 6",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_7",
        "name": "小说 7",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_8",
        "name": "小说 8",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_9",
        "name": "小说 9",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_10",
        "name": "小说 10",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_11",
        "name": "小说 11",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_12",
        "name": "小说 12",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_13",
        "name": "小说 13",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_14",
        "name": "小说 14",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_15",
        "name": "小说 15",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_16",
        "name": "小说 16",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_17",
        "name": "小说 17",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_18",
        "name": "小说 18",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_19",
        "name": "小说 19",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }, {
        "id": "story_20",
        "name": "小说 20",
        "image": "http://renyugang.io/wp-content/uploads/2018/09/story.jpg"
      }]
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
  onTabItemClick: function (e) {
    console.error(e);
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    });
  },
  onItemClick: function (e) {
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({ //通过 url 传递参数，是不是跟 html 很像？
      url: "/pages/detail/detail?id=" + item.id + "&name=" + item.name
    });
  }
});