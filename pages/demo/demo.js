// pages/demo/demo.js
var util = require('../../utils/util.js');

Page({
  data: {
    date: {}
  },
  onLoad: function (options) {

    var date = util.formatDate(new Date());
    this.setData({
      date: date,
    });
  },
  bindDateChange: function (e) {
    var date_pick = e.detail.value;
    var timestamp = Date.parse(date_pick);
    var year = date_pick.split('-')[0];
    var month = parseInt(date_pick.split('-')[1]);
    var day = parseInt(date_pick.split('-')[2]);
    var week = util.formatDate(new Date(timestamp)).week;
    var color = util.formatDate(new Date(timestamp)).color;
    console.log(color);
    var date = {
      year: year + '年',
      month: month + '月',
      day: day,
      week: week,
      color:color
    }
    this.setData({
      date: date
    });
  },
  onTap:function(){
    wx.navigateTo({
      url: '../huangli/huangli'
    })
  }

})