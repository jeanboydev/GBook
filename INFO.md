## 第7章：微信小程序实战

本章我们将进入微信小程序实战的部分，下面我们将开发一个图书商城的小例子来介绍微信小程序的开发流程。

### 7.1 项目结构介绍

首先我们使用微信开发者工具创建一个项目，并选中左上角编辑器的按钮。我们会在右边看到下图的内容：

![7-1-1](/Users/next/Desktop/GBook/images/7-1-1.png)

图 7-1-1 微信开发者工具中的编辑器

上图内容就是我们创建好的项目的目录，其中：

- `pages` 目录中用于存放的是我们的 App 页面，比如：index，logs。
- `utils` 目录中用于存放的是工具类。
- `app.js` 文件是小程序的全局环境，在小程序初始化完成时触发，全局只触发一次。
- `app.json` 文件用来对小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。
- `app.wxss` 文件用来定义小程序的全局样式，作用于每一个页面。
- `project.config.json` 文件是项目的配置文件，存放开发小程序的环境版本，appid，项目名称等。

仅仅只有上面的两个目录是不够用的，我们可以多创建几个目录来方便管理我们的代码：

![7-1-2](/Users/next/Desktop/GBook/images/7-1-2.png)

图 7-1-2 项目目录

- `component` 目录用于存放我们自定义的组件。
- `config` 目录中用于存放项目的各种配置。
- `images` 目录中用于存放图片资源。

### 7.2 项目实战

接下来我们进入项目实战部分，我们的图书商城需求主要分为以下几个部分。

![7-2-1](/Users/next/Desktop/GBook/images/7-2-1.png)

图 7-2-1 项目框架

- 7.2.1 登录与注册页面

  首先我们先实现登录与注册页面，由于登录与注册页面很相似，这里仅展示注册页面，页面效果如下图：

![7-2-2](/Users/next/Desktop/GBook/images/7-2-2.png)

图 7-2-2 注册页面

页面结构代码如下：

```html
<!-- pages/sign-in/sign-in.wxml -->
<view>
    <view class="container">
        <view class="logo-container">
            <image class="logo" src="/images/logo.png" aspectFill />
        </view>
        <!-- bindinput 键盘输入时触发，用于接收键盘输入的值 -->
        <input class="input-username" placeholder="请输入用户名" auto-focus confirm-type="next" bindinput="onUsernameInput" />
        <input class="input-password" placeholder="请输入密码" password confirm-type="done" bindinput="onPasswordInput" />
        <view class="sign-up-container">
            <button class="btn-sign-up" bindtap="toSignUp">注册</button>
        </view>
        <!-- bindtap 当用户点击时触发绑定的函数 -->
        <button class="btn-sign-in" type="primary" bindtap="toSignIn">登录</button>
    </view>
</view>
```

页面样式代码如下：

```css
/* pages/sign-in/sign-in.wxss */
.container {
    /* 组合使用开始，使用绝对定位 */
    position: absolute;
    top: 50%;
    left: 50%;
    /* 使用 transform 将 view 在屏幕上垂直水平居中*/
    transform: translate(-50%, -50%);
    /* 组合使用结束 */
    width: 100%;
    padding: 0 80rpx;
}

.logo-container {
    text-align: center;
}

.logo {
    width: 200rpx;
    height: 200rpx;
}

.input-username,
.input-password {
    width: 100%;
    height: 80rpx;
    border: 1rpx solid silver;
}

.input-password {
    margin-top: 20rpx;
}

.sign-up-container {
    width: 100%;
    height: 80rpx;
    margin-top: 20rpx;
    position: relative;
}

.sign-up-container .btn-sign-up {
    width: 180rpx;
    height: 80rpx;
    position: absolute;
    right: 0;
    line-height: 80rpx;
}

.btn-sign-in {
    margin-top: 20rpx;
}
```

业务逻辑代码如下：

```javascript
// pages/sign-in/sign-in.js
import config from '../../config/config.js';
Page({
  data: {
    username: "",
    password: ""
  },
  onLoad: function (options) {}, //生命周期回调函数
  onReady: function () {}, //生命周期回调函数
  onShow: function () {}, //生命周期回调函数
  onHide: function () {}, //生命周期回调函数
  onUnload: function () {}, //生命周期回调函数
  onUsernameInput: function (e) { //上面为输入框绑定的键盘事件监听回调函数
    // e.detail.value 是取到键盘输入的值
    this.setData({
      username: e.detail.value
    });
  },
  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  toSignIn: function () { //上面为按钮绑定的点击事件回调函数
    if (!this.data.username) { //用户名为空
      wx.showToast({ //吐司一下提示用户输入用户名
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
    //读取本地已经存入的用户注册的信息
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
    //将用户登录的信息记录下
    wx.setStorageSync(config.cacheKey.userInfo, {
      username: this.data.username
    });
    //跳转到首页，并关闭当前以及其他页面
    wx.reLaunch({
      url: '/pages/home/home'
    });
  },
  toSignUp: function () {
    //跳转到注册页面，不关闭当前页面
    wx.navigateTo({
      url: '/pages/sign-up/sign-up'
    });
  }
})
```

```javascript
// pages/config/config.js

module.exports = {
    cacheKey: { //配置缓存中的key，方便统一管理
        userInfo: "userInfo",
        username: "username",
        password: "password",
        favoriteBooks: "favoriteBooks",
    }
};
```

由于注册页面与登录页面比较相似，这里不再赘述。

- 7.2.2 首页

  接下来我们来实现首页页面，效果图如下：

![7-2-3](/Users/next/Desktop/GBook/images/7-2-3.png)

图 7-2-3 首页页面

页面结构代码如下：

```html
<!-- pages/home/home.wxml -->
<view>
    <!-- 使用 scroll-view 实现 x 轴滑动 -->
    <scroll-view scroll-x="{{true}}">
        <view class="tab-menu" style="width:{{tabList.length*150}}rpx;">
            <!-- 使用 for 循环便利生成 item 的 view -->
            <view class="item {{currentTabIndex==index?'active':''}}" wx:for="{{tabList}}" data-item="{{item}}" data-index="{{index}}" wx:key="index" bindtap="onTabItemClick">
                {{item.name}}
            </view>
        </view>
    </scroll-view>
    <view class="list-container">
        <!-- 使用 for 循环便利生成 item 的 view -->
        <view class="item" wx:for="{{dataList[currentTabIndex]}}" data-item="{{item}}" wx:key="index" bindtap="onItemClick">
            <view class="cover">
                <image src="{{item.image}}" scaleToFill />
            </view>
            <view class="name">{{item.name}}</view>
        </view>
    </view>
</view>
```

页面样式代码如下：

```css
/* pages/home/home.wxss */
page {
    background-color: #F4F4F4;
}

.tab-menu {
    min-width: 750rpx;
    height: 104rpx;
    background-color: #EAE9E7;
    /* 使用 flex 布局 */
    display: flex;
    /* 方向为纵向 */
    flex-direction: row;
    /* 设置为不可换行 */
    flex-wrap: nowrap;
    /* 从左边开始布局 */
    justify-content: flex-start;
    /* 垂直居中 */
    align-content: center;
    align-items: center;
    padding: 0 34rpx;
}

.tab-menu .item {
    height: 74rpx;
    line-height: 74rpx;
    padding: 0 10rpx;
    margin-right: 34rpx;
    font-size: 28rpx;
    font-family: SourceHanSansCN-Medium;
    font-weight: bold;
    color: rgba(99, 99, 98, 1);
}

.tab-menu .active {
    border-bottom: #636362 solid 4rpx;
}

.list-container {
    width: 100%;
    padding: 60rpx 0 60rpx 60rpx;
    /* 使用 flex 布局 */
    display: flex;
    /* 方向为纵向 */
    flex-direction: row;
    /* 设置为可换行 */
    flex-wrap: wrap;
    /* 从左边开始布局 */
    justify-content: flex-start;
    /* 垂直居中 */
    align-content: center;
    align-items: center;
}

.list-container .item {
    /* 这里使用到了 css 中的 calc 计算函数，详见下面介绍 */
    width: calc((100% - 180rpx) / 3);
    margin-right: 60rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    padding: 5rpx;
}

.list-container .item .cover {
    width: 100%;
    height: 240rpx;
    border: 2rpx solid #B9B9BB;
    background-color: #ffffff;
    border-radius: 6rpx;
}

.list-container .item .cover image {
    width: 100%;
    height: 100%;
}

.list-container .item .name {
    text-align: center;
    height: 70rpx;
    font-size: 24rpx;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: rgba(52, 52, 52, 1);
    line-height: 70rpx;
}
```

> 注：**calc()** = calc(四则运算)，用于动态计算长度值。
>
> - 需要注意的是，运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px)；`
> - 任何长度值都可以使用 calc() 函数进行计算；
> - calc() 函数支持 "+", "-", "*", "/" 运算；
> - calc() 函数使用标准的数学运算优先级规则。

业务逻辑代码如下：

```javascript
// pages/home/home.js
import config from '../../config/config.js';
Page({
  data: {
    tabList: [],//模拟数据
    currentTabIndex: 0, //当前选择的 tab
    dataList: []//模拟数据
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
```

首页底部有一条 tabbar，tabbar 需要在 `app.json` 中配置：

```json
{
  "...":"省略非主要部分",
  "tabBar": {
    "color": "#989898",
    "selectedColor": "#2F96F9",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/home/home",
        "iconPath": "images/tabbar/ic_home_normal_2x.png",
        "selectedIconPath": "images/tabbar/ic_home_selected_2x.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/mine/mine",
        "iconPath": "images/tabbar/ic_mine_normal_2x.png",
        "selectedIconPath": "images/tabbar/ic_mine_selected_2x.png",
        "text": "我的"
      }
    ]
  }
}
```

- 7.2.3 个人中心页面

  接下来我们来实现个人中心页面，效果图如下：

  ![7-2-4](/Users/next/Desktop/GBook/images/7-2-4.png)

  图 7-2-4 我的页面

  页面结构代码如下：

  ```html
  <!-- pages/mine/mine.wxml -->
  <view>
      <view class="info-container">
          <image class="avatar" src="/images/logo.png" aspectFill />
          <view class="username">{{userInfo.username}}</view>
      </view>
      <view class="list-container">
          <view class="item" bindtap="toFavorite">收藏</view>
          <view class="item" bindtap="toSettings">设置</view>
      </view>
  </view>
  ```

  页面样式代码如下：

  ```css
  /* pages/mine/mine.wxss */
  .info-container {
      width: 100%;
      height: 200rpx;
      /* 使用 flex 布局 */
      display: flex;
      /* 方向为纵向 */
      flex-direction: row;
      /* 设置为不可换行 */
      flex-wrap: nowrap;
      /* 从左边开始布局 */
      justify-content: flex-start;
      /* 垂直居中 */
      align-content: center;
      align-items: center;
      padding: 0 80rpx;
      background-color: #f2f2f2;
  }
  
  .info-container .avatar {
      width: 120rpx;
      height: 120rpx;
  }
  
  .info-container .username {
      margin-left: 80rpx;
      line-height: 200rpx;
  }
  
  .list-container {
      width: 100%;
      margin-top: 80rpx;
  }
  
  .list-container .item {
      width: 100%;
      height: 120rpx;
      padding: 0 80rpx;
      line-height: 120rpx;
      margin-top: 10rpx;
      background-color: #f2f2f2;
  }
  ```

  业务逻辑代码如下：

  ```javascript
  // pages/mine/mine.js
  Page({
    data: {
      userInfo: null
    },
    onLoad: function (options) {
      this.setData({//读取全局数据保存到当前页面中
        userInfo: getApp().globalData.userInfo
      });
    },
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
  ```

- 7.2.4 图书详情页面

  接下来我们来实现图书详情页面，效果图如下：

![7-2-5](/Users/next/Desktop/GBook/images/7-2-5.png)

图 7-2-5 图书详情页面

页面结构代码如下：

  ```html
<!-- pages/detail/detail.wxml -->
<view>
    <view class="cover">
        <image src="{{bookInfo.image}}" aspectFill />
    </view>
    <view class="title-container">
        <view class="title">{{bookInfo.name}}</view>
        <view class="favorite" bindtap="toFavorite">{{isMarked?'已收藏':'收藏'}}</view>
    </view>
    <view class="introduce">{{bookInfo.introduce}}</view>
    <view class="comment-title-container">评论</view>
    <view class="comment-info-container">
        <block wx:if="{{commentList.length>0}}">
            <view class="item" wx:for="{{commentList}}" data-item="{{item}}" wx:key="index" bindtap="onItemClick">
                {{item.username}} : {{item.content}}
            </view>
        </block>
        <view wx:else>暂无评论</view>
    </view>
</view>
<!-- 底部评论框 -->
<view class="comment-container">
    <input class="input-comment" placeholder="请输入评论信息" confirm-type="done" bindinput="onCommentInput" value="{{currentComment}}" />
    <button class="btn-submit" bindtap="toSubmitComment">完成</button>
</view>
  ```

  页面样式代码如下：

  ```css
 /* pages/detail/detail.wxss */
.cover {
    width: 100%;
    height: 800rpx;
    padding: 20rpx 40rpx;
}

.cover image {
    width: 100%;
    height: 100%;
}

.title-container {
    /* 使用 flex 布局 */
    display: flex;
    /* 方向为纵向 */
    flex-direction: row;
    /* 设置为不可换行 */
    flex-wrap: nowrap;
    /* 从左右两端开始布局，中间留间隙 */
    justify-content: space-between;
    /* 垂直居中 */
    align-content: center;
    align-items: center;
    padding: 0 40rpx;
    height: 120rpx;
    background-color: #f2f2f2;
}

.title-container .title {
    font-weight: bold;
}

.title-container .favorite {
    color: #808080;
}

.introduce {
    padding: 40rpx;
}

.comment-container {
    width: 100%;
    height: 160rpx;
    background-color: #EAE9E7;
    /* 使用 fixed 定位使 view 固定在底部 */
    position: fixed;
    left: 0;
    bottom: 0;
    /* 使用 flex 布局 */
    display: flex;
    /* 方向为纵向 */
    flex-direction: row;
    /* 设置为不可换行 */
    flex-wrap: nowrap;
    /* 从左右两端开始布局，中间留间隙 */
    justify-content: space-between;
    /* 垂直居中 */
    align-content: center;
    align-items: center;
}

.comment-container .input-comment {
    flex-grow: 1;
    height: 100rpx;
    border: 1rpx solid silver;
    margin-left: 20rpx;
}

.comment-container .btn-submit {
    width: 180rpx;
    height: 100rpx;
    margin: 0 20rpx;
}

.comment-title-container {
    font-weight: bold;
    padding: 0 40rpx;
    height: 120rpx;
    background-color: #f2f2f2;
    line-height: 120rpx;
}

.comment-info-container {
    padding: 40rpx 40rpx 200rpx 40rpx;
}
  ```

  业务逻辑代码如下：

  ```javascript
 // pages/detail/detail.js
import config from '../../config/config.js';
Page({
  data: {
    id: 0,
    bookInfo: {},
    androidBookInfo: {}, // 模拟数据
    iosBookInfo: {}, // 模拟数据
    feBookInfo: {}, // 模拟数据
    backendBookInfo: {}, // 模拟数据
    aiBookInfo: {}, // 模拟数据
    favoriteList: [],
    isMarked: false,
    commentList: [],
    currentComment: '',
    userInfo: null,
  },
  onLoad: function (query) {
    //query 是通过 url 传过来的参数的集合
    if (query.id && query.name) { //处理是否有 id 和 name
      //匹配模拟数据
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
    //读取评论列表
    let commentList = wx.getStorageSync(this.data.id);
    if (commentList) {
      this.setData({
        commentList: commentList
      });
    }
    let userInfo = wx.getStorageSync(config.cacheKey.userInfo);
    if (userInfo) {
      this.setData({
        userInfo: userInfo
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
  },
  onCommentInput: function (e) { //当评论输入框输入内容时回调
    this.setData({
      currentComment: e.detail.value
    });
  },
  toSubmitComment: function () { //保存评论
    if (!this.data.currentComment) return;
    let comment = {
      username: this.data.userInfo.username,
      content: this.data.currentComment
    };
    let commentList = wx.getStorageSync(this.data.id);
    if (!commentList) {
      commentList = [];
    }
    commentList.push(comment);
    this.setData({
      commentList: commentList
    });
    wx.setStorageSync(this.data.id, commentList);
    this.setData({
      currentComment: ''
    });
  }
})
  ```

- 7.2.5 收藏页面

  最后来我们来实现收藏页面，效果图如下：

![7-2-6](/Users/next/Desktop/GBook/images/7-2-6.png)

图 7-2-6 收藏页面

页面结构代码如下：

  ```html
<!-- pages/favorite/favorite.wxml -->
<view>
    <view class="list-container">
        <!-- 使用 for 循环便利生成 item 的 view -->
        <view class="item" wx:for="{{dataList}}" data-item="{{item}}" wx:key="index" bindtap="onItemClick">
            <image class="cover" src="{{item.image}}" aspectFill />
            <view class="title">{{item.name}}</view>
        </view>
    </view>
</view>
  ```

  页面样式代码如下：

  ```css
 /* pages/favorite/favorite.wxss */
.list-container {
    width: 100%;
    padding: 40rpx 0;
}

.list-container .item {
    width: 100%;
    height: 200rpx;
    padding: 0 80rpx;
    line-height: 200rpx;
    margin-top: 10rpx;
    background-color: #f2f2f2;
    /* 使用 flex 布局 */
    display: flex;
    /* 方向为纵向 */
    flex-direction: row;
    /* 设置为不可换行 */
    flex-wrap: nowrap;
    /* 从左边开始布局 */
    justify-content: flex-start;
    /* 垂直居中 */
    align-content: center;
    align-items: center;
}

.list-container .item .cover {
    width: 160rpx;
    height: 160rpx;
}

.list-container .item .title {
    margin-left: 20rpx;
}
  ```

  业务逻辑代码如下：

  ```javascript
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
  onItemClick: function (e) {
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + item.id + "&name=" + item.name
    });
  }
})
  ```

### 7.3 打包上线

- 上传代码

  项目开发完成后就可以上传代码了，在微信开发者工具右上角可以找到 `上传` 按钮，点击上传然后再点击确定。

  ![7-3-1](/Users/next/Desktop/GBook/images/7-3-1.png)

  图 7-3-1 微信开发者工具中的上传

  下面需要填写上传的版本信息，填写完成后点击上传即可。

  ![7-3-2](/Users/next/Desktop/GBook/images/7-3-2.png)

  图 7-3-2 填写上传信息

- 提交审核

  代码上传后，我们需要登录到微信公众平台。在微信公众平台的左侧找到 `开发管理`。

  ![7-3-3](/Users/next/Desktop/GBook/images/7-3-3.png)

  图 7-3-3 开发管理

  点击开发管理之后，我们在底部可以看到刚才上传的代码。

  ![7-3-4](/Users/next/Desktop/GBook/images/7-3-4.png)

  图 7-3-4 提交审核

  点击提交审核，然后会看到一些条款不管他打赏对勾点击下一步。

![7-3-5](/Users/next/Desktop/GBook/images/7-3-5.png)

到这里需要我们填写一些信息，首先需要选中首页页面路径，也就是 `app.json` 中 `pages` 下的第一个路径。

然后填写完信息点击提交审核。

![7-3-6](/Users/next/Desktop/GBook/images/7-3-6.png)

提交审核之后会在 `开发管理` 下看到小程序已经处于审核中的状态了。

![7-3-7](/Users/next/Desktop/GBook/images/7-3-7.png)

一般 2-3 小时就会审核通过了，审核通过后需要我们点击进行公测。最后是上线，上线之后就能在微信中搜索到我们的小程序了。

