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
    boxHeight:900
  },
  onLoad:function(){
    this.setData({
      boxHeight: wx.getSystemInfoSync().windowHeight - 40
    });
    if (app.globalData.userInfo.avatarUrl){
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
    var that=this;
    var fromMessage = this.data.inputValue;
    var chatMess = this.data.messArray;
    if (fromMessage=="clc"){
      this.setData({
        messArray:[],
        inputValue: ""
      });

    }else{
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

        var url = "https://www.tuling123.com/openapi/api?key=7b2bc86486694cadba936235daa047f7&info=";
        url = url + fromMessage;
        wx.request({
          url: url,
          success(res){
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

        
      }
    }
    
  },
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  radioChange(e) {
    /* 发送一个存储请求问答的 */
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwic2VuZE1lc3MiLCJlIiwiZnJvbU1lc3NhZ2UiLCJpbnB1dFZhbHVlIiwiY29uc29sZSIsImxvZyIsImJpbmRLZXlJbnB1dCIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV1FBLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxLO0FBR05DLFksb0JBQVNDLEMsRUFBRTtBQUNQLFlBQUlDLGNBQVksS0FBS0gsSUFBTCxDQUFVSSxVQUExQjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSCxXQUFaO0FBRUgsSztBQUNESSxnQix3QkFBYUwsQyxFQUFHO0FBQ1osYUFBS00sT0FBTCxDQUFhO0FBQ1RKLHdCQUFZRixFQUFFTyxNQUFGLENBQVNDO0FBRFosU0FBYjtBQUdIIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnd3hjLWF2YXRhcic6ICdAbWludWkvd3hjLWF2YXRhcicsXG4gICAgICAgICAgICAgICAgJ3d4Yy1sYWJlbCc6ICdAbWludWkvd3hjLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAnd3hjLWljb24nOiAnQG1pbnVpL3d4Yy1pY29uJyxcbiAgICAgICAgICAgICAgICAnd3hjLWZsZXgnOiAnQG1pbnVpL3d4Yy1mbGV4JyxcbiAgICAgICAgICAgICAgICAnd3hjLWlucHV0JzogJ0BtaW51aS93eGMtaW5wdXQnLFxuICAgICAgICAgICAgICAgICd3eGMtYnV0dG9uJzogJ0BtaW51aS93eGMtYnV0dG9uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmRNZXNzKGUpe1xuICAgICAgICAgICAgbGV0IGZyb21NZXNzYWdlPXRoaXMuZGF0YS5pbnB1dFZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnJvbU1lc3NhZ2UpXG5cbiAgICAgICAgfSxcbiAgICAgICAgYmluZEtleUlucHV0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICB9Il19