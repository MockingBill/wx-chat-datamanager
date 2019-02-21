//index.js
//获取应用实例
const app = getApp()
var interval = null;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    count_down: "获取验证码",
    sign: "",
    disabled: true,
    user_phone_number: "",
    vercode:"",
    relvercode: "123456",
    effectNumber: [
      "18785185684",
      "13595101082",
      "18908513613"
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log(app.globalData.userInfo);
    console.log(app.globalData.userphonenumber);
    if (app.globalData.userInfo && app.globalData.userphonenumber) {
      this.setData({
        userInfo: app.globalData.userInfo,
        user_phone_number: app.globalData.userphonenumber,
        hasUserInfo: true
      })
      wx.navigateTo({
        url: '../home/index'
      });

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    if(this.data.relvercode==this.data.vercode){
      app.globalData.userInfo = e.detail.userInfo;
      app.globalData.userphonenumber=this.user_phone_number;
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      wx.navigateTo({
        url: '../home/index'
      });
    }else{
      /*验证码输入错误*/
    }
  },
  checkPhoneNumber: function(number) {
    var flag = false;
    for (var i in this.data.effectNumber) {
      if (this.data.effectNumber[i] == number) {
        flag = true;
        break;
      }
    }
    return flag;
  },
  getVerCode: function(e) {
    var number=this.data.user_phone_number;
    number = number.replace(/\s+/g, "");
    var re = /^1\d{10}$/;
    /* 判断手机合法性与安全性  */
    if (re.test(number) && this.checkPhoneNumber(number)) {
      /*防止重复发送验证码 */
      if (this.data.count_down == "获取验证码" || this.data.count_down == "重新获取") {
        var cuTime = 60;
        var that = this;
        interval = setInterval(function () {
          if (cuTime <= 0) {
            that.setData({
              count_down: "重新获取",
              disabled: true,
              sign: ""
            });
            clearInterval(interval);
          } else {
            cuTime--;
            that.setData({
              count_down: cuTime,
              disabled: false,
              sign: " s"
            });
          }
        }, 1000);
      } else { }
    }else{
      /*弹窗不合法手机号 */
    }
  },
  bindKeyInput: function(e) {
    this.setData({
      user_phone_number: e.detail.value
    });
  },
  bindVarInput: function (e) {
    this.setData({
      vercode: e.detail.value
    });
  }
})