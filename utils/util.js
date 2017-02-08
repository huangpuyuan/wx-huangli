function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatDate(d) {

  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  var week = dayNames[d.getDay()];
  var weeknum = parseInt(d.getDay());
  var color;
  if (weeknum > 0 && weeknum < 6) {
      color = "color-green"; 
  }else{
      color = "color-red";
  }
  var date = {
    year: year + '年',
    month: month + '月',
    day: day,
    week: week,
    color: color
  };
  return date;
}

module.exports = {
  formatDate: formatDate,
  formatTime: formatTime
}
