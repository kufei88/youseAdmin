(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7310"],{2938:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"8"}},[t._v("\n      账期:\n      "),a("Select",{staticStyle:{width:"200px",margin:"0 30px"},on:{"on-change":t.getFactorList},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},t._l(t.monthList,function(e,n){return a("Option",{key:n,attrs:{value:e.value}},[t._v(t._s(e.value))])}))],1),a("Col",{attrs:{span:"8"}},[a("Button",{staticStyle:{"margin-right":"30px"},attrs:{type:t.buttonType},on:{click:function(e){t.copy=!0}}},[t._v("复制参数")])],1)],1),a("Table",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"row-class-name":t.rowClassName,loading:t.loading,columns:t.goodsColumns,data:t.factorList}}),a("Page",{attrs:{total:t.totalRecord,pageSize:t.pageSize,current:t.current,"show-sizer":""}})],1)},r=[],i=a("66df"),s=(a("b9b9"),{data:function(){var t=this;return{monthList:[],month:"",beginDate:"",endDate:"",totalRecord:0,pageSize:10,loading:!1,current:1,handler:"",handlerList:[],factorList:[],goodsColumns:[{title:"业务员",key:"handler"},{title:"部门",key:"dept"},{title:"工资",key:"salary",render:function(t,e){return e.row.$isEdit?t("input",{domProps:{value:e.row.salary},on:{input:function(t){e.row.salary=t.target.value}}}):t("div",e.row.salary)}},{title:"操作",key:"action",render:function(e,a){return e("Button",{props:{type:"text",size:"small"},on:{click:function(){a.row.$isEdit?t.handleSave(a.row):t.handleEdit(a.row)}}},a.row.$isEdit?"保存":"编辑")}}]}},mounted:function(){for(var t=2019;t<2025;t++)for(var e=1;e<13;e++)this.monthList.push({value:t+"-"+(e<10?"0"+e:e)});var a=new Date;this.month=a.getFullYear()+"-"+(a.getMonth()+1>9?a.getMonth()+1:"0"+(a.getMonth()+1)),this.getFactorList(),this.getHandlerList()},methods:{handleEdit:function(t){this.$set(t,"$isEdit",!0)},handleSave:function(t){this.$set(t,"$isEdit",!1);var e={period:this.month,handler:t.handler,salary:t.salary};i["a"].request({url:"default/updateHandlerSalary",params:e,method:"post"}).then(function(t){})},getFactorList:function(){var t=this,e={period:this.month};this.loading=!0,i["a"].request({url:"default/getHandlerSalary",params:e,method:"get"}).then(function(e){t.factorList=e.data,t.loading=!1})},getHandlerList:function(){var t=this;i["a"].request({url:"manager/getHandlerList",params:{},method:"get"}).then(function(e){t.handlerList=e.data})}}}),o=s,d=(a("e9a4"),a("2877")),l=Object(d["a"])(o,n,r,!1,null,null,null);l.options.__file="handlerSalary.vue";e["default"]=l.exports},b9b9:function(t,e,a){var n;(function(r){"use strict";var i=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,a=/[^-+\dA-Z]/g;return function(n,r,m,u){if(1!==arguments.length||"string"!==l(n)||/\d/.test(n)||(r=n,n=void 0),n=n||new Date,n instanceof Date||(n=new Date(n)),isNaN(n))throw TypeError("Invalid date");r=String(i.masks[r]||r||i.masks["default"]);var y=r.slice(0,4);"UTC:"!==y&&"GMT:"!==y||(r=r.slice(4),m=!0,"GMT:"===y&&(u=!0));var c=m?"getUTC":"get",h=n[c+"Date"](),g=n[c+"Day"](),f=n[c+"Month"](),p=n[c+"FullYear"](),M=n[c+"Hours"](),v=n[c+"Minutes"](),T=n[c+"Seconds"](),D=n[c+"Milliseconds"](),S=m?0:n.getTimezoneOffset(),w=o(n),b=d(n),H={d:h,dd:s(h),ddd:i.i18n.dayNames[g],dddd:i.i18n.dayNames[g+7],m:f+1,mm:s(f+1),mmm:i.i18n.monthNames[f],mmmm:i.i18n.monthNames[f+12],yy:String(p).slice(2),yyyy:p,h:M%12||12,hh:s(M%12||12),H:M,HH:s(M),M:v,MM:s(v),s:T,ss:s(T),l:s(D,3),L:s(Math.round(D/10)),t:M<12?i.i18n.timeNames[0]:i.i18n.timeNames[1],tt:M<12?i.i18n.timeNames[2]:i.i18n.timeNames[3],T:M<12?i.i18n.timeNames[4]:i.i18n.timeNames[5],TT:M<12?i.i18n.timeNames[6]:i.i18n.timeNames[7],Z:u?"GMT":m?"UTC":(String(n).match(e)||[""]).pop().replace(a,""),o:(S>0?"-":"+")+s(100*Math.floor(Math.abs(S)/60)+Math.abs(S)%60,4),S:["th","st","nd","rd"][h%10>3?0:(h%100-h%10!=10)*h%10],W:w,N:b};return r.replace(t,function(t){return t in H?H[t]:t.slice(1,t.length-1)})}}();function s(t,e){t=String(t),e=e||2;while(t.length<e)t="0"+t;return t}function o(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var a=new Date(e.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=e.getTimezoneOffset()-a.getTimezoneOffset();e.setHours(e.getHours()-n);var r=(e-a)/6048e5;return 1+Math.floor(r)}function d(t){var e=t.getDay();return 0===e&&(e=7),e}function l(t){return null===t?"null":void 0===t?"undefined":"object"!==typeof t?typeof t:Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},n=function(){return i}.call(e,a,e,t),void 0===n||(t.exports=n)})()},e5b2:function(t,e,a){},e9a4:function(t,e,a){"use strict";var n=a("e5b2"),r=a.n(n);r.a}}]);