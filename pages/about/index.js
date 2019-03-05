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
    vc_code:"6789",
    user_phone_number: "",
    vercode:"",
    ver_width:"220px",
    effectEmail: [
      "gangzhouwei@gz.chinamobile.com",
      "dengqian1@gz.chinamobile.com",
      "dengqian@gz.chinamobile.com",
      "fengzezhong@gz.chinamobile.com",
      "chentianchuan1@gz.chinamobile.com",
      "leiyu1@gz.chinamobile.com",
      "zhongxun@gz.chinamobile.com",
      "guolin@gz.chinamobile.com",
      "sunligeng@gz.chinamobile.com",
      "suyuanhua@gz.chinamobile.com",
      "baijinrong@gz.chinamobile.com",
      "caigang@gz.chinamobile.com",
      "raoqianyin@gz.chinamobile.com",
      "yanghaixia@gz.chinamobile.com",
      "zhangcaiping@gz.chinamobile.com",
      "zhouwenjing@gz.chinamobile.com",
      "luochaokun@gz.chinamobile.com",
      "liuyuwen@gz.chinamobile.com",
      "huangxiaoyu@gz.chinamobile.com",
      "leigangyong@gz.chinamobile.com",
      "leisong@gz.chinamobile.com",
      "wangzhu1@gz.chinamobile.com",
      "wengxianzheng@gz.chinamobile.com",
      "yanghongqiang@gz.chinamobile.com",
      "zhangshengjun@gz.chinamobile.com",
      "zhangyu3@gz.chinamobile.com",
      "wudi@gz.chinamobile.com",
      "caiyong@gz.chinamobile.com",
      "zhengbin@gz.chinamobile.com",
      "gaoxin1@gz.chinamobile.com",
      "yangxuncheng@gz.chinamobile.com",
      "wangyang4@gz.chinamobile.com",
      "zhanggang@gz.chinamobile.com",
      "lijincheng@gz.chinamobile.com",
      "geqingqing@gz.chinamobile.com",
      "shejunjie@gz.chinamobile.com",
      "gaodi@gz.chinamobile.com",
      "liulan1@gz.chinamobile.com",
      "lichao3@gz.chinamobile.com",
      "longkecheng@gz.chinamobile.com",
      "liyanbing@gz.chinamobile.com",
      "huanglihua1@gz.chinamobile.com",
      "lixi@gz.chinamobile.com",
      "fanhongxi@gz.chinamobile.com",
      "lihaiyan3@gz.chinamobile.com",
      "shengmian@gz.chinamobile.com",
      "liujianfeng@gz.chinamobile.com",
      "liujin@gz.chinamobile.com",
      "panhongxi@gz.chinamobile.com",
      "shenxuelian@gz.chinamobile.com",
      "wanglin1@gz.chinamobile.com",
      "wuhanqiong@gz.chinamobile.com",
      "chenxin@gz.chinamobile.com",
      "chenyasu@gz.chinamobile.com",
      "chenzhuo@gz.chinamobile.com",
      "dengdaoyuan@gz.chinamobile.com",
      "guoguangjian@gz.chinamobile.com",
      "huangyumei@gz.chinamobile.com",
      "lanjing@gz.chinamobile.com",
      "lili2@gz.chinamobile.com",
      "liuchunhui@gz.chinamobile.com",
      "zhaolongfei@gz.chinamobile.com",
      "zhoujiabin@gz.chinamobile.com",
      "jiangjiyao@gz.chinamobile.com",
      "chenchangpeng@gz.chinamobile.com",
      "denghui@gz.chinamobile.com",
      "hechanglin@gz.chinamobile.com",
      "niexiaolin@gz.chinamobile.com",
      "hanjinhui@gz.chinamobile.com",
      "wangsheng1@gz.chinamobile.com",
      "yifei@gz.chinamobile.com",
      "zhangxin4@gz.chinamobile.com",
      "huzongyi@gz.chinamobile.com",
      "zhangyin@gz.chinamobile.com",
      "chenyun2@gz.chinamobile.com",
      "xuzhengqin@gz.chinamobile.com",
      "lini1@gz.chinamobile.com",
      "dengxianhui@gz.chinamobile.com",
      "tianxiaoli@gz.chinamobile.com",
      "shiyue@gz.chinamobile.com",
      "helijuan@gz.chinamobile.com",
      "duannian@gz.chinamobile.com",
      "zhaoshouyan@gz.chinamobile.com",
      "wangyuan2@gz.chinamobile.com",
      "yangtingting3@gz.chinamobile.com",
      "tujiali@gz.chinamobile.com",
      "matingting@gz.chinamobile.com",
      "guoxiaoling@gz.chinamobile.com",
      "maoyuheng@gz.chinamobile.com",
      "yudan@gz.chinamobile.com",
      "tangnuku@gz.chinamobile.com",
      "wuxinghua@gz.chinamobile.com",
      "wanghu@gz.chinamobile.com",
      "longxuan@gz.chinamobile.com",
      "liukuan@gz.chinamobile.com",
      "liuyanmei1@gz.chinamobile.com",
      "luoyi5@gz.chinamobile.com",
      "wangyiting@gz.chinamobile.com",
      "tangying3@gz.chinamobile.com",
      "zhuyali@gz.chinamobile.com",
      "sujuanling@gz.chinamobile.com",
      "yanchunlong@gz.chinamobile.com",
      "zhulingying@gz.chinamobile.com",
      "zhengzhikang@gz.chinamobile.com",
      "wangyu1@gz.chinamobile.com",
      "zhouliangchen@gz.chinamobile.com",
      "wanglulu@gz.chinamobile.com",
      "tengmingkai@gz.chinamobile.com",
      "liuyang2@gz.chinamobile.com",
      "xiayuwei2@gz.chinamobile.com",
      "chenjun12@gz.chinamobile.com",
      "liqing5@gz.chinamobile.com",
      "yingmei@gz.chinamobile.com",
      "zenggang@gz.chinamobile.com",
      "liyuan@gz.chinamobile.com",
      "xuteng@gz.chinamobile.com",
      "guantao@gz.chinamobile.com",
      "renliangliang@gz.chinamobile.com",
      "litingyu@gz.chinamobile.com",
      "chenping@gz.chinamobile.com",
      "wangjie6@gz.chinamobile.com",
      "chenbing@gz.chinamobile.com",
      "chenjun2@gz.chinamobile.com",
      "hekun@gz.chinamobile.com",
      "zhangji@gz.chinamobile.com",
      "lulie1@gz.chinamobile.com",
      "zhouyi1@gz.chinamobile.com",
      "liuyun3@gz.chinamobile.com",
      "nijiaxing@gz.chinamobile.com",
      "pengcheng@gz.chinamobile.com",
      "wanglu2@gz.chinamobile.com",
      "wanlei@gz.chinamobile.com",
      "yuanqing@gz.chinamobile.com",
      "liunili@gz.chinamobile.com",
      "maxue@gz.chinamobile.com",
      "herijiang1@gz.chinamobile.com",
      "chenqiyong@gz.chinamobile.com",
      "lili9@gz.chinamobile.com",
      "xuxiaolong@gz.chinamobile.com",
      "yaojinlian@gz.chinamobile.com",
      "youjia@gz.chinamobile.com",
      "zhangyan5@gz.chinamobile.com",
      "zhongwei@gz.chinamobile.com",
      "sunyi@gz.chinamobile.com",
      "wangenyan@gz.chinamobile.com",
      "wanglu@gz.chinamobile.com",
      "wangxiaojuan@gz.chinamobile.com",
      "weiwei4@gz.chinamobile.com",
      "xuchao1@gz.chinamobile.com",
      "pengxuan@gz.chinamobile.com",
      "songhao@gz.chinamobile.com",
      "heyuwu1@gz.chinamobile.com",
      "chenjie@gz.chinamobile.com",
      "shaokun@gz.chinamobile.com",
      "zhangtengyao@gz.chinamobile.com",
      "hezhi@gz.chinamobile.com",
      "wujihui@gz.chinamobile.com",
      "dupeng@gz.chinamobile.com",
      "wangjie5@gz.chinamobile.com",
      "zengjing2@gz.chinamobile.com",
      "cailin@gz.chinamobile.com",
      "dengchaogang@gz.chinamobile.com",
      "liangfuyuan@gz.chinamobile.com",
      "maxiaomang@gz.chinamobile.com",
      "zhangjifang@gz.chinamobile.com",
      "libaren@gz.chinamobile.com",
      "lutingxia@gz.chinamobile.com",
      "xiexiang@gz.chinamobile.com",
      "songjia@gz.chinamobile.com",
      "huhong@gz.chinamobile.com",
      "huyu@gz.chinamobile.com",
      "fuzhaoxia@gz.chinamobile.com",
      "changtianliang@gz.chinamobile.com",
      "yangjin@gz.chinamobile.com",
      "liyufang@gz.chinamobile.com",
      "yangling11@gz.chinamobile.com",
      "luan@gz.chinamobile.com",
      "hanfabing@gz.chinamobile.com",
      "jiangyueshan@gz.chinamobile.com",
      "laiyan@gz.chinamobile.com",
      "leigangshun@gz.chinamobile.com",
      "mengzhi@gz.chinamobile.com",
      "aiwei1@gz.chinamobile.com",
      "chenbingxu@gz.chinamobile.com",
      "panguangzhen@gz.chinamobile.com",
      "yangchen@gz.chinamobile.com",
      "zhangzhu@gz.chinamobile.com",
      "chenchao@gz.chinamobile.com",
      "heming@gz.chinamobile.com",
      "xujianlin@gz.chinamobile.com",
      "lijing15@gz.chinamobile.com",
      "chenyouwei@gz.chinamobile.com",
      "zhanghongqiang@gz.chinamobile.com",
      "wangkaigui@gz.chinamobile.com",
      "yangchanglu@gz.chinamobile.com",
      "hechenchen@gz.chinamobile.com",
      "jiangjing@gz.chinamobile.com",
      "zengpengjia@gz.chinamobile.com",
      "fenghui1@gz.chinamobile.com",
      "herenjian@gz.chinamobile.com",
      "xiongzehui1@gz.chinamobile.com",
      "yangruofan@gz.chinamobile.com",
      "fengxin@gz.chinamobile.com",
      "liuyunxiao@gz.chinamobile.com",
      "zhengting@gz.chinamobile.com",
      "shenyingying@gz.chinamobile.com",
      "liqianqian@gz.chinamobile.com",
      "luzhixiong@gz.chinamobile.com",
      "mushaofeng@gz.chinamobile.com",
      "fengxianqing@gz.chinamobile.com",
      "renxiaobo@gz.chinamobile.com",
      "liqinghui@gz.chinamobile.com",
      "hepang@gz.chinamobile.com",
      "liuxuefeng@gz.chinamobile.com",
      "sunzhiqin@gz.chinamobile.com",
      "zhangli2@gz.chinamobile.com",
      "hanlu@gz.chinamobile.com",
      "yuanping@gz.chinamobile.com",
      "linmingqiu@gz.chinamobile.com",
      "lvzhenyi@gz.chinamobile.com",
      "zengxiangsheng@gz.chinamobile.com",
      "lijun@gz.chinamobile.com",
      "shenlinyan@gz.chinamobile.com",
      "xuhaimei1@gz.chinamobile.com",
      "zhouwenxing1@gz.chinamobile.com",
      "heqingzhu@gz.chinamobile.com",
      "xiayuxi1@gz.chinamobile.com",
      "liukaixin@gz.chinamobile.com",
      "chenxuelu@gz.chinamobile.com",
      "fuchunxia@gz.chinamobile.com",
      "wangyawei@gz.chinamobile.com",
      "songjiajun@gz.chinamobile.com",
      "luenbo@gz.chinamobile.com",
      "wangjie1@gz.chinamobile.com",
      "zhangxiaofang@gz.chinamobile.com",
      "wuweixin@gz.chinamobile.com",
      "mahongyan@gz.chinamobile.com",
      "xiaozhengbo@gz.chinamobile.com",
      "jiaoyang2@gz.chinamobile.com",
      "limeng1@gz.chinamobile.com",
      "liuyazhong@gz.chinamobile.com"
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var query = wx.createSelectorQuery();
    var that=this;
    query.select(".weui-label").boundingClientRect(function (rect) {
      that.setData({
        ver_width: wx.getSystemInfoSync().windowWidth-rect.width-29 + 'px'
      })
    }).exec();


    if (wx.getStorageSync("userinfo") && wx.getStorageSync("userphone")) {
      app.globalData.userInfo = wx.getStorageSync("userinfo");
      app.globalData.phonenumber = wx.getStorageSync("userphone");


      this.setData({
        userInfo: wx.getStorageSync("userinfo"),
        user_phone_number: wx.getStorageSync("userphone"),
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
  openAlert: function (alertMess) {
    wx.showModal({
      content: alertMess,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  getUserInfozd: function(e) {
    /* 引入加密包 */
    var Dec = require('../../utils/cryptojs/cryptojs.js');
    if (this.data.vercode&&this.data.vc_code && Dec.Decrypt(this.data.vc_code) == this.data.vercode){
      app.globalData.userInfo = e.detail.userInfo;
      app.globalData.userphonenumber=this.data.user_phone_number;
      wx.setStorageSync("userinfo", e.detail.userInfo)
      wx.setStorageSync("userphone", this.data.user_phone_number)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      if (wx.getStorageSync("userphone") && wx.getStorageSync("userphone")){
       wx.navigateTo({
         url: '../home/index'
       });
     }
    }else{
      this.openAlert("验证信息错误！");
    }
  },
  checkPhoneNumber: function(email_add) { 

    var allEmail = this.data.effectEmail;
    var flag=false;
    for (var i in allEmail){
      if (email_add == allEmail[i]){
        flag=true;
      }
    }
    return flag;
  },
  getVerCode: function(e) {
    var email=this.data.user_phone_number;
    email = email.replace(/\s+/g, "");
    email=email+"@gz.chinamobile.com";
    /* 引入加密包 */
    var Dec = require('../../utils/cryptojs/cryptojs.js');
    /* 引入token生成器 */
    var getTimeToken = require("../../utils/cryptojs/cryptojs.js").getTimeToken;
   console.log(email);
    /* 判断手机合法性与安全性  */
    if (this.checkPhoneNumber(email)) {
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
            that.setData({
              vc_code: ""
            })
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
        var postData={
          email_address: Dec.Encrypt(email),
          auth_token: Dec.Encrypt(getTimeToken())
        }

        var url = "http://10.196.135.137:18081/sendEmail"
        wx.request({
          url: url,
          dataType: "json",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: postData,
          success(res) {
            if (res.data.result == 1) {
              that.setData({
                vc_code: res.data.vc
              })
              
              wx.showToast({
                title: '发送成功',
                icon: 'succes',
                duration: 500,
                mask: true
              });
            } else {
              wx.showToast({
                title: '发送失败',
                icon: 'none',
                duration: 500,
                mask: true
              });
            }
          }
        });


      } else { 
          /*重复获取的分支进入*/
      }
    }else{
      this.openAlert("邮箱不合法或不在允许的通讯录中,请联系管理员处理。");
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