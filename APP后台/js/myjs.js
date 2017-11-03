/**
 * Created by �� on 2017/9/21.
 */

var width=$(window).width();
console.log(width)
var height=$(window).height();
var width1=$("body").width();
var height1=$("body").height();

$(".time_select1 ul li").click(function(){
    $(this).addClass('curr').siblings().removeClass('curr')
})

$(".ua_option li").click(function(){
    $(this).addClass('curr_sel').siblings().removeClass('curr_sel')
})

function todate(inputstr, showsplit) {
    //Wed Nov 01 2017 13:37:51 GMT+0800 (中国标准时间)
    inputstr = inputstr + ""; //末尾加一个空格
    var date = "";
    var month = new Array();
    var week = new Array();

    month["Jan"] = 01; month["Feb"] = 02; month["Mar"] = 03; month["Apr"] = 04; month["May"] = 05; month["Jan"] = 06;
    month["Jul"] = 07; month["Aug"] = 08; month["Sep"] = 09; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
//            week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";

    str = inputstr.split(" ");

    date = str[3];
    date += showsplit + month[str[1]] + showsplit + str[2];
//            if(showweek){
//                date += "    " + " 星期" + week[str[0]];
//            }
    return date;
}
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}











//日期插件
$.fn.datetimepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今天",
    suffix: [],
    meridiem: ["上午", "下午"]
};

$(".form_datetime").datetimepicker({
    format: 'yyyy-mm-dd',
    minView: "month",
    language:'zh-CN',
    pickerPosition: "bottom-left",
    autoclose: true,
    todayBtn: true
});
