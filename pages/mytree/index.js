// pages/mytree/index.js
Page({
      /**
       * 页面的初始数据
       */
      data: {
        major: [{
          index_name: '核心网能力数据-电路域',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'MSC数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'MSC话务承载能力'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VLR数据库容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '三融合HSS/HLR数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '三融合HSS/HLR基础容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：三融合HSS/HLR 4G容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '三融合HSS/HLR VoLTE容量'
            }]
          }]
        }, {
          index_name: '核心网能力数据-分组域',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'MME/SGSN数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'MME/SGSN基础容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'MME/SGSN 4G容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'SAE-GW/GGSN数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'SAE-GW/GGSN基础容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'SAE-GW/GGSN 4G容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'PCRF/SPR数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'PCRF/SPR容量'
            }]
          },]
        }, {
          index_name: '核心网能力数据-IMS域',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'CM-IMS会话控制功能实体I/S/E-CSCF/BGCF数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'CM-IMS会话控制功能实体I/S/E-CSCF/BGCF容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '固网IMS HSS数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '固网IMS HSS容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '统一Centrex业务平台数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '统一Centrex业务平台容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'CM-IMS多媒体电话业务平台数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'CM-IMS多媒体电话业务平台容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'IMS/TD多媒体彩铃业务平台数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'IMS/TD多媒体彩铃业务平台容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE AS数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE AS容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE SBC数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE SBC用户容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE SBC话务承载能力'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GMSC和GMSC/MGCF/IM-MGW数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GMSC和GMSC/MGCF/IM-MGW 基础容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GMSC和GMSC/MGCF/IM-MGW IP化容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GMSC/MGCF/IM-MGW MGCF容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '独立设置的MGCF/IM-MGW数量 '
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '独立设置的MGCF/IM-MGW容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '固网 SBC数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '固网 SBC用户容量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'VoLTE网络日均忙时话务量'
            }]
          },]
        }, {
          index_name: '无线网能力数据-接入网设备',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM网BSC数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM逻辑基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM900逻辑基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM1800逻辑基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM逻辑室外宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM逻辑室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM物理基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM物理宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM900物理宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM1800物理宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM900与GSM1800共站址物理宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM物理室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM900室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM1800室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM900与GSM1800共站址室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM1800小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM1800载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM话音信道数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GSM1800话音信道数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '2、TD无线接入网'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA RNC数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA 基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA载频数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-WLAN',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WLAN AC数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WLAN AP数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '完成覆盖的WLAN热点数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-TD-LTE',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室外微基站'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '传统室分基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '分布式皮飞基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE一体化皮飞基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：F频段载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'D频段载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'E频段载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'A频段载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE 3D-MIMO载扇数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE物理小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：TD-LTE室外宏基站物理小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE室外微基站物理小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-LTE室内分布基站物理小区数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-LTE FDD',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD逻辑基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：单LTE FDD900基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：单LTE FDD900室外宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '单LTE FDD900室外微基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：单LTE FDD900传统室分基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '单LTE FDD900分布式皮飞基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '单LTE FDD1800基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：单LTE FDD1800室外宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '单LTE FDD1800室外微基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内分布基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：单LTE FDD1800传统室分基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '单LTE FDD1800分布式皮飞基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD900与LTE FDD1800共站址的基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中： LTE FDD900与LTE FDD1800共站址室外宏基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD900与LTE FDD1800共站址室外微基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中： LTE FDD900与LTE FDD1800共站址传统室分基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD900与LTE FDD1800共站址分布式皮飞基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：LTE FDD1800载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD 3D-MIMO载扇数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：LTE FDD900室外宏基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD900室外微基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD900室内分布基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD1800室外宏基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD1800室外微基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE FDD1800室内分布基站小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '开通eMTC小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：开通eMTC的900M室外小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '开通eMTC的900M室内小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '开通eMTC的1800M室外小区数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '开通eMTC的1800M室内小区数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-NB-IoT',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '开通NB-IoT基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'NB-IoT载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'NB-IoT小区数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-5G',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '5G物理基站数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '5G载频数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '5G小区数'
            }]
          },]
        }, {
          index_name: '无线网能力数据-物理站址资源',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '总物理站址数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：室外覆盖物理站址数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '室内覆盖物理站址数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：自有物理站址数'
            }]
          },]
        }, {
          index_name: '宽带能力指标-PON端口',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：EPON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GPON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'XG(S)-PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家庭宽带业务接入的PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：采用FTTH模式开通的PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：采用1:64/2:64总分光的PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '采用1:32/2:32总分光的PON端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '采用FTTB模式开通的PON端口数量'
            }]
          },]
        }, {
          index_name: '宽带能力指标-ONU设备',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：GPON/EPON ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：FTTB场景ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的FTTB场景ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'SFU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的SFU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'HGU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的HGU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '智能家庭网关设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的智能家庭网关设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'XG(S)-PON ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：FTTB场景ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的FTTB场景ONU设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '智能家庭网关设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：用于家宽接入的智能家庭网关设备数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'OLT设备数量'
            }]
          },]
        }, {
          index_name: '宽带能力指标-宽带接入端口',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '有线宽带接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：xDSL端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTB端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTH/O端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WBS端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：城市地区接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：xDSL端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTB端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTH/O端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WBS端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：50M以上城市宽带接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：100M以上城市宽带接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：农村地区接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：xDSL端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTB端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTH/O端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WBS端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：20M以上农村宽带接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：100M以上农村宽带接入端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '家庭宽带接入端口数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：xDSL端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTB端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：已开通家庭宽带业务的FTTB ONU端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：使用XG(S)-PON技术的FTTB端口数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：已开通家庭宽带业务的XG(S)-PON技术的FTTB端口数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'FTTH/O端口'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：已开通家庭宽带业务的FTTH光分路器端口数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：使用XG(S)-PON技术的FTTH光分路器端口数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：已开通家庭宽带业务的 XG(S)-PON技术的FTTH光分路器端口数'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WBS端口'
            }]
          },]
        }, {
          index_name: '宽带能力指标-分纤点',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '光纤分纤点数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其他：城区一级分纤点数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '城区二级分纤点数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '非城区一级分纤点数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '非城区二级分纤点数量'
            }]
          },]
        }, {
          index_name: '传输网能力指标-汇聚机房',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '普通及重要汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：城区普通及重要汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：城区自有普通及重要汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '非城区普通及重要汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：非城区自有普通及重要汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '业务汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：城区业务汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：城区自有业务汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '非城区业务汇聚机房数量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: '其中：非城区自有业务汇聚机房数量'
            }]
          },]
        }, {
          index_name: '流量数据',
          flodFlag: true,
          nodes: [{
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM网语音日均话务量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'GSM日均网络数据流量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA网语音日均话务量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'TD-SCDMA日均网数据流量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'WLAN日均数据流量'
            }]
          }, {
            name: 'ul',
            attrs: {
              class: 'nodes_ul',
            },
            children: [{
              type: 'text',
              text: 'LTE日均数据流量'
            }]
          }]
        }]
          },
          /**
           * 生命周期函数--监听页面加载
           */
          onLoad: function(options) {

          },
          /**
           * 生命周期函数--监听页面初次渲染完成
           */
          onReady: function() {

          },
          /**
           * 生命周期函数--监听页面显示
           */
          onShow: function() {
            wx.showToast({
              title: '点击蓝字查看',
              icon: 'none',
              duration: 2000,
              mask: true
            });

          },
          /**
           * 生命周期函数--监听页面隐藏
           */
          onHide: function() {

          },
          /**
           * 生命周期函数--监听页面卸载
           */
          onUnload: function() {

          },
          /**
           * 页面相关事件处理函数--监听用户下拉动作
           */
          onPullDownRefresh: function() {

          },
          /**
           * 页面上拉触底事件的处理函数
           */
          onReachBottom: function() {

          },
          /**
           * 用户点击右上角分享
           */
          onShareAppMessage: function() {

          },
          flod: function(e) {
            var num = e.currentTarget.dataset.id
            var majordata=this.data.major;
            majordata[num].flodFlag = !majordata[num].flodFlag;

            this.setData({
              major: majordata
            })
          }
 
        })