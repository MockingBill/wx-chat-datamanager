const app = getApp();
/* 引入加密包 */
const Dec = require('../../utils/cryptojs/cryptojs.js');
/* 引入token生成器 */
const getTimeToken = require("../../utils/cryptojs/cryptojs.js").getTimeToken;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    //默认头像
    A_portrait: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550561131957&di=5b92dc5d0696a2731b545268303e1535&imgtype=0&src=http%3A%2F%2Fpic167.nipic.com%2Ffile%2F20180601%2F27078272_163135838000_2.jpg",
    B_portrait: "/utils/images/persion.jpg",
    //反馈建议框绑定值
    textareaValue: "",
    //当前聊天内容
    messArray: [],
    //反馈可见按钮
    radioHidden: false,
    //建议弹窗不可见
    onoff: true,
    //反馈数据结构
    isgood: [{
      name: "no",
      value: "回答不满意"
    }],
    //总体高度
    boxHeight: 900
  },
  onLoad: function() {
    /*加载页面执行*/
    //适配手机高度
    this.setData({
      boxHeight: wx.getSystemInfoSync().windowHeight - 40
    });
    //设置用户头像
    if (app.globalData.userInfo && app.globalData.userInfo.avatarUrl) {
      this.setData({
        B_portrait: app.globalData.userInfo.avatarUrl
      });
    }
  },
  //生成消息ID
  genuuid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  //发送消息
  sendMess: function(e) {
    /* 局部化this变量 */
    var that = this;
    /* 获取输入内容 */
    var fromMessage = this.data.inputValue;
    /* 获取消息列表 */
    var chatMess = this.data.messArray;
    /* 清屏 */
    if (fromMessage == "clc") {
      this.setData({
        messArray: [],
        inputValue: ""
      });
    }
    /* 获取帮助信息 */
    else if (fromMessage == "帮助") {
      chatMess.push({
        QorA: "Q",
        message: fromMessage,
        mess_id: uuid + "-Q"
      });
      chatMess.push({
        QorA: "A",
        message: "1、可输入[指标查询]，来获取目前已经接入可供查询的指标名称。\n2、可输入[上个月4G基站数量的环比]这样的问题来获取数据，对数据结果不满意可点击单选框\n3、可输入[clc]来清除屏幕的回答。\n4、输入[建议]可为本小程序提出您的意见。",
        mess_id: uuid + "-A"
      });
      that.setData({
        messArray: chatMess,
        radioHidden: true,
        inputValue: ""
      });
    }
    /* 指标信息查询 */
    else if (fromMessage == "指标查询") {
      this.setData({
        inputValue: ""
      })
      wx.navigateTo({
        url: '../mytree/index'
      });
    }
    /* 投诉与建议 */
    else if (fromMessage == "建议") {
      this.setData({
        onoff: false,
        inputValue: ""
      })
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
        var app = getApp();
        var url = app.globalData.remoteUrl + "answer"
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
                var respMessArray = respmess.split('\n')

                for (var i in respMessArray) {
                  if (respMessArray[i] != "" && respMessArray[i] != null && respMessArray[i] != undefined) {
                    chatMess.push({
                      QorA: "A",
                      message: respMessArray[i].substring(0, respMessArray[i].length - 37),
                      mess_id: respMessArray[i].substring(respMessArray[i].length - 36, respMessArray[i].length) + "-A"
                    });
                  }
                }

                that.setData({
                  messArray: chatMess,
                  radioHidden: false
                });
              } else {
                that.tulingReq(fromMessage, uuid);
              }
            } else {
              that.tulingReq(fromMessage, uuid);
            }
          }
        })
      } else {
        this.openAlert("输入不合法");
      }
    }
  },
  //问题输入框双向绑定
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  //后台处理为空，交与图灵机器人处理
  tulingReq: function(fromMessage, uuid) {
    var chatMess = this.data.messArray;
    var urltuling = "https://www.tuling123.com/openapi/api?key=7b2bc86486694cadba936235daa047f7&info=";
    urltuling = urltuling + fromMessage;
    var that = this;
    wx.request({
      url: urltuling,
      success(res) {
        chatMess.push({
          QorA: "A",
          message: res.data.text,
          mess_id: uuid + "-A"
        });
        that.setData({
          messArray: chatMess,
          radioHidden: true
        });
      }
    })
  },
  radioChange(e) {
    /* 发送一个该回答的满意 */
    var messArray = this.data.messArray;
    var postData = {};
    var that = this;
    var key = e.detail.value;
    key = key.substr(0, key.length - 1);
    console.log(messArray);
    for (var i = 0; i < messArray.length; i++) {
      var cumess = messArray[i]['mess_id'];
      //根据所点击对话框的uuid来判断是否post到后端
      if (cumess.substr(0, cumess.length - 1) == key) {
        postData["QorA-" + messArray[i]["QorA"]] = Dec.Encrypt(messArray[i]["message"]);
        postData['messid-' + messArray[i]["QorA"]] = Dec.Encrypt(messArray[i]["mess_id"]);
        postData['auth_token'] = Dec.Encrypt(getTimeToken());
      }
    }
    var app = getApp();
    var url = app.globalData.remoteUrl + "writeEvaluate"
    wx.request({
      url: url,
      dataType: "json",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: postData,
      success(res) {
        if (res.statusCode == 200) {
          wx.showToast({
            title: '反馈成功',
            icon: 'succes',
            duration: 800,
            mask: true
          });
        } else {
          wx.showToast({
            title: '反馈失败',
            icon: 'fail',
            duration: 800,
            mask: true
          });
        }
      }
    });
  },
  /**
   * 投诉建议
   */
  modalConfirm: function(e) {
    var postData = {
      advise: Dec.Encrypt(this.data.textareaValue),
      useremail: Dec.Encrypt(app.globalData.userEmail)
    }
    var that = this;
    var url = app.globalData.remoteUrl + "advise"
    wx.request({
      url: url,
      dataType: "json",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: postData,
      success(res) {
        if (res.data.row == "1") {
          wx.showToast({
            title: '感谢反馈',
            icon: 'succes',
            duration: 800,
            mask: true
          });
          that.setData({
            onoff: true
          });
        } else {
          wx.showToast({
            title: '反馈失败',
            icon: 'none',
            duration: 800,
            mask: true
          });
        }
      }
    });
  },
  //反馈窗口取消按钮监听
  modalCancel: function(e) {
    this.setData({
      onoff: true
    })
  },
  //反馈窗口输入绑定
  bindTextAreaBlur: function(e) {
    this.setData({
      textareaValue: e.detail.value
    });
  }
});