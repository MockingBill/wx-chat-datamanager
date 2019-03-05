'use strict';
const app = getApp();
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    '__code__': {
      readme: ''
    },
    A_portrait: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550561131957&di=5b92dc5d0696a2731b545268303e1535&imgtype=0&src=http%3A%2F%2Fpic167.nipic.com%2Ffile%2F20180601%2F27078272_163135838000_2.jpg",
    B_portrait: "https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg",
    messArray: [],
    isgood: [{
      name: "no",
      value: "回答不满意"
    }],
    boxHeight: 900
  },
  onLoad: function() {
    /*加载页面执行*/
    this.setData({
      boxHeight: wx.getSystemInfoSync().windowHeight - 40
    });
    if (app.globalData.userInfo.avatarUrl) {
      this.setData({
        B_portrait: app.globalData.userInfo.avatarUrl
      });
    }

  },
  genuuid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  sendMess: function(e) {
    /* 局部化this变量 */
    var that = this;
    /* 获取输入内容 */
    var fromMessage = this.data.inputValue;
    /* 获取消息列表 */
    var chatMess = this.data.messArray;
    /* 引入加密包 */
    var Dec = require('../../utils/cryptojs/cryptojs.js');
    /* 引入token生成器 */
    var getTimeToken = require("../../utils/cryptojs/cryptojs.js").getTimeToken;
    /* 清屏 */
    if (fromMessage == "clc") {
      this.setData({
        messArray: [],
        inputValue: ""
      });
    } else {
      /* 验证合法的输入 */
      if (fromMessage != "" && fromMessage != undefined && fromMessage != null) {
        var uuid = this.genuuid();
        chatMess.push({
          QorA: "Q",
          message: fromMessage,
          mess_id: uuid + "-Q"
        });
        this.setData({
          messArray: chatMess,
          inputValue: ""
        });
        /* 声明请求包 */
        var postData = {
          from_mess: Dec.Encrypt(fromMessage),
          auth_token: Dec.Encrypt(getTimeToken())
        }
        /* 请求数据接口 */
        var url = "http://10.196.135.137:18081/answer"
        wx.request({
          url: url,
          dataType: "json",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: postData,
          success(res) {
            /* 响应码正常 */
            if (res.statusCode == 200) {
              var respmess = Dec.Decrypt(res.data.respMessage);
              var auth_token = Dec.Decrypt(res.data.auth_token);
              /* 令牌与回复消息正常 */
              if (auth_token == getTimeToken() && respmess != "" && respmess != undefined && respmess != null) {
                chatMess.push({
                  QorA: "A",
                  message: respmess,
                  mess_id: uuid + "-A"
                });
                that.setData({
                  messArray: chatMess
                });
              } else {
                that.tulingReq(fromMessage,uuid);
              }
            } else {
              that.tulingReq(fromMessage,uuid);
            }
          }
        })
      }
      else{
        this.openAlert("输入不合法");
      }
    }
  },
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  tulingReq: function(fromMessage,uuid) {
    var chatMess = this.data.messArray;
    var urltuling = "https://www.tuling123.com/openapi/api?key=7b2bc86486694cadba936235daa047f7&info=";
    urltuling = urltuling + fromMessage;
    var that=this;
    wx.request({
      url: urltuling,
      success(res) {
        chatMess.push({
          QorA: "A",
          message: res.data.text,
          mess_id: uuid + "-A"
        });
        that.setData({
          messArray: chatMess
        });
      }
    })
  },
  radioChange(e) {
    /* 引入加密包 */
    var Dec = require('../../utils/cryptojs/cryptojs.js');
    /* 引入token生成器 */
    var getTimeToken = require("../../utils/cryptojs/cryptojs.js").getTimeToken;


    /* 发送一个存储请求问答的 */
    var messArray = this.data.messArray;
    var postData={};
    var that = this;
    var key = e.detail.value;
    key = key.substr(0, key.length - 1);
    for(var i=0;i<messArray.length;i++){
      var cumess=messArray[i]['mess_id'];
      if (cumess.substr(0, cumess.length-1) ==key){
        postData["QorA-"+messArray[i]["QorA"]] = Dec.Encrypt(messArray[i]["message"]);
        postData['messid-' + messArray[i]["QorA"]] = Dec.Encrypt(messArray[i]["mess_id"]);
        postData['auth_token'] = Dec.Encrypt(getTimeToken());
      }
    }  
    console.log(postData);
    var url = "http://10.196.135.137:18081/writeEvaluate"
    wx.request({
      url: url,
      dataType: "json",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: postData,
      success(res) {
        if (res.statusCode==200){
          wx.showToast({
            title: '反馈成功',
            icon: 'succes',
            duration: 500,
            mask: true
          });
        }else{
          wx.showToast({
            title: '反馈失败',
            icon: 'fail',
            duration: 500,
            mask: true
          });
        }
      }
      });


  }

});