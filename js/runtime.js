//页脚倒计时js
var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var grr = new Date("01/01/2023 00:00:00");	// 恋爱时间
  var days = (now - grr) / 1e3 / 60 / 60 / 24,
    dnm = Math.floor(days),
    hours = (now - grr) / 1e3 / 60 / 60 - 24 * dnm,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grr) / 1e3 / 60 - 1440 * dnm - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grr) / 1e3 - 86400 * dnm - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  
  var grt = new Date("11/20/2023 00:00:00");	// 网站诞生时间
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = ""; 
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
    ? `<img class='boardsign' src='/svg/桂工-上课摸鱼啦.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold"> <br>🚀本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 🚀 <div style="font-size:13px;font-weight:bold"> </div><i id="heartbeat" class='fas fa-heartbeat'></i> 和周宝在一起已经${dnm} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i>`
    : `<img class='boardsign' src='/svg/桂工-下课休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold"> <br>🚀本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 🚀 <div style="font-size:13px;font-weight:bold"> </div><i id="heartbeat" class='fas fa-heartbeat'></i> 和周宝在一起已经${dnm} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);