(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["af09"],{af09:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px",background:"#fff",margin:"10px"}},[a("Row",[a("Col",{attrs:{span:"8"}},[t._v("\n      账期:\n      "),a("Select",{staticStyle:{width:"200px",margin:"0 30px"},on:{"on-change":t.getFactorList},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},t._l(t.monthList,function(e,o){return a("Option",{key:o,attrs:{value:e.value}},[t._v(t._s(e.value))])}))],1),a("Col",{attrs:{span:"8"}},[a("Button",{staticStyle:{"margin-right":"30px"},attrs:{type:t.buttonType},on:{click:function(e){t.copy=!0}}},[t._v("复制参数")]),a("Button",{staticStyle:{"margin-rignt":"30px"},attrs:{type:t.buttonType},on:{click:t.closeAccountClick}},[t._v(t._s(t.closeAccount))])],1)],1),a("Row",{staticStyle:{"margin-top":"10px"}},[a("div",{staticStyle:{float:"left"}},[a("Card",{staticStyle:{width:"350px","margin-bottom":"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-film-outline"}}),t._v("基础系数\n        ")],1),a("a",{attrs:{slot:"extra",href:"#"},on:{click:function(e){return e.preventDefault(),t.saveFactor(e)}},slot:"extra"},[a("Icon",{attrs:{type:"ios-loop-strong"}}),t._v("保存\n        ")],1),a("Row",[a("Col",{attrs:{span:"8"}},[t._v("业务员")]),a("Col",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],attrs:{span:"6"}},[t._v("系数")]),a("Col",{attrs:{span:"6"}},[t._v("目标业绩(万元)")]),a("Col",{attrs:{span:"4"}},[t._v("组长")])],1),t._l(t.factorList,function(e){return a("Card",{key:e.dept,staticStyle:{"margin-top":"5px"},attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.dept))]),t._l(e.list,function(o){return a("Row",{key:o.managerCode,staticStyle:{"margin-top":"5px"}},[a("Col",{attrs:{span:"8"}},[t._v(t._s(o.name))]),a("Col",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],attrs:{span:"6"}},[a("InputNumber",{staticStyle:{width:"50px"},attrs:{size:"small"},model:{value:o.factor,callback:function(e){t.$set(o,"factor",e)},expression:"item1.factor"}})],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:"销售经理"!=e.dept&&"审核员"!=e.dept,expression:"item.dept!='销售经理'&&item.dept!='审核员'"}],attrs:{span:"6"}},[a("InputNumber",{staticStyle:{width:"60px"},attrs:{size:"small"},model:{value:o.target,callback:function(e){t.$set(o,"target",e)},expression:"item1.target"}})],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:"销售经理"!=e.dept&&"审核员"!=e.dept,expression:"item.dept!='销售经理'&&item.dept!='审核员'"}],attrs:{span:"4"}},[a("i-switch",{model:{value:o.leader,callback:function(e){t.$set(o,"leader",e)},expression:"item1.leader"}})],1)],1)})],2)})],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],staticStyle:{float:"left","margin-left":"20px"}},[a("Card",{staticStyle:{width:"550px","margin-bottom":"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-film-outline"}}),t._v("增长系数分档\n        ")],1),a("h4",[t._v("公司系数分档设置")]),a("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addCompanyFactor}},[t._v("新增")]),a("Table",{attrs:{columns:t.columns1,data:t.companyFactorList}}),a("h4",{staticStyle:{"margin-top":"20px"}},[t._v("小组系数分档设置")]),a("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addGroupFactor}},[t._v("新增")]),a("Table",{attrs:{columns:t.columns1,data:t.groupFactorList}}),a("h4",{staticStyle:{"margin-top":"20px"}},[t._v("经理和审核员系数分档")]),a("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addManagerFactor}},[t._v("新增")]),a("Table",{attrs:{columns:t.columns2,data:t.managerFactorList}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],staticStyle:{float:"left","margin-left":"20px"}},[a("Card",{staticStyle:{width:"550px","margin-bottom":"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-film-outline"}}),t._v("参数设置\n        ")],1),a("a",{attrs:{slot:"extra",href:"#"},on:{click:function(e){return e.preventDefault(),t.saveArgu(e)}},slot:"extra"},[a("Icon",{attrs:{type:"ios-loop-strong"}}),t._v("保存\n        ")],1),a("Form",{attrs:{model:t.argu,"label-width":180}},[a("FormItem",{attrs:{label:"业绩第一名的小组先得:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.firstGroup,callback:function(e){t.$set(t.argu,"firstGroup",e)},expression:"argu.firstGroup"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"业绩第二名的小组得:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.secondGroup,callback:function(e){t.$set(t.argu,"secondGroup",e)},expression:"argu.secondGroup"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"组长先得小组系数的:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.leader,callback:function(e){t.$set(t.argu,"leader",e)},expression:"argu.leader"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"小组系数计算基础:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.groupBase,callback:function(e){t.$set(t.argu,"groupBase",e)},expression:"argu.groupBase"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"业绩最低完成率:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.minComplete,callback:function(e){t.$set(t.argu,"minComplete",e)},expression:"argu.minComplete"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"达不到业绩最低完成率扣:"}},[a("InputNumber",{attrs:{max:100,min:0},model:{value:t.argu.deduct,callback:function(e){t.$set(t.argu,"deduct",e)},expression:"argu.deduct"}}),t._v("%\n          ")],1),a("FormItem",{attrs:{label:"工资基准:"}},[a("InputNumber",{attrs:{min:0},model:{value:t.argu.salary,callback:function(e){t.$set(t.argu,"salary",e)},expression:"argu.salary"}})],1)],1)],1)],1)]),a("Modal",{attrs:{title:t.state,footerHide:!0,width:"400"},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[a("Form",{ref:"formItem",attrs:{rules:t.ruleValidate,model:t.formItem,"label-width":120}},[a("FormItem",{attrs:{label:t.performanceLabel,prop:"performance"}},[a("InputNumber",{model:{value:t.formItem.performance,callback:function(e){t.$set(t.formItem,"performance",e)},expression:"formItem.performance"}})],1),a("FormItem",{attrs:{label:t.label1,prop:"factor"}},[a("InputNumber",{attrs:{placeholder:""},model:{value:t.formItem.factor,callback:function(e){t.$set(t.formItem,"factor",e)},expression:"formItem.factor"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.label2,expression:"label2"}],attrs:{label:t.label2,prop:"factor"}},[a("InputNumber",{attrs:{placeholder:""},model:{value:t.formItem.factor_1,callback:function(e){t.$set(t.formItem,"factor_1",e)},expression:"formItem.factor_1"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.ok("formItem")}}},[t._v("确定")]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(e){t.showImg=!1}}},[t._v("取消")])],1)],1)],1),a("Modal",{attrs:{title:"复制参数",width:"400"},on:{"on-ok":t.copyClick},model:{value:t.copy,callback:function(e){t.copy=e},expression:"copy"}},[t._v("\n    账期:\n    "),a("Select",{staticStyle:{width:"200px",margin:"0 30px"},model:{value:t.copyMonth,callback:function(e){t.copyMonth=e},expression:"copyMonth"}},t._l(t.copyList,function(e,o){return a("Option",{key:o,attrs:{value:e.period}},[t._v(t._s(e.period))])}))],1)],1)},r=[],s=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("66df")),n=a("c276"),i={data:function(){var t=this;return{closeAccount:"关帐",buttonType:"error",state:"",copy:!1,admin:Object(n["d"])(),showImg:!1,type:0,oldId:0,label1:"系数",label2:"",month:"",argu:{},copyList:[],copyMonth:"",monthList:[{value:"2019-02"},{value:"2019-03"},{value:"2019-04"},{value:"2019-05"},{value:"2019-06"},{value:"2019-07"},{value:"2019-08"},{value:"2019-09"},{value:"2019-10"},{value:"2019-11"},{value:"2019-12"}],oldPerfor:"",performanceLabel:"",formItem:{performance:"",factor:"",factor_1:""},ruleValidate:{performance:[{required:!0,message:"公司业绩不能为空",trigger:"blur",type:"number"}],factor:[{required:!0,message:"系数不能为空",type:"number",trigger:"blur"}]},factorList:[],managerFactorList:[],columns1:[{title:"业绩",key:"performance"},{title:"系数",key:"factor"},{title:"操作",width:150,render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.modify(a)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(a)}}},"删除")])}}],columns2:[{title:"业绩",key:"performance"},{title:"经理系数",key:"factor"},{title:"审核系数",key:"factor_1"},{title:"操作",width:150,render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.modify1(a)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(a)}}},"删除")])}}],companyFactorList:[],groupFactorList:[]}},mounted:function(){var t=new Date;this.month=t.getFullYear()+"-"+(t.getMonth()+1>10?t.getMonth()+1:"0"+(t.getMonth()+1)),this.getFactorList();var e=Object(n["k"])();console.log(e)},methods:{copyClick:function(){var t=this;""!=this.copyMonth?this.month!=this.copyMonth?s["a"].request({url:"manager/saveCopyFactor",params:{period:this.month,sourcePeriod:this.copyMonth},method:"post"}).then(function(e){e.data>0?(t.$Message.info("复制成功"),t.getFactorList()):t.$Message.info("复制失败")}):this.$Message.info("不能复制自己"):this.$Message.info("复制的账期不能为空")},ok:function(t){var e=this;this.$refs[t].validate(function(t){var a=e;if(!t)return e.showImg=!0,!1;var o=e.formItem;o.oldId=e.oldId,o.type=e.type,o.oldPerfor=e.oldPerfor,o.period=e.month;e.state;s["a"].request({url:"manager/addPerformanceFactor",params:o,method:"post"}).then(function(t){t.data.returnCode>0?(a.$Message.info("保存成功"),a.showImg=!1,a.getFactorList()):0==t.data.returnCode&&a.$Message.info("该分档已存在")})})},closeAccountClick:function(){var t=this,e=this;this.$Modal.confirm({title:"提示",content:"<p>是否确认要进行"+this.closeAccount+"</p>",onOk:function(){s["a"].request({url:"manager/saveMemValue",params:{memName:"closeAccount",memValue:"关帐"==t.closeAccount?"true":"false"},method:"post"}).then(function(t){t.data>0&&(e.$Message.info(e.closeAccount+"成功"),e.closeAccount="关帐"==e.closeAccount?"开帐":"关帐",e.buttonType="关帐"==e.closeAccount?"error":"primary")})},onCancel:function(){}})},addCompanyFactor:function(){this.showImg=!0,this.state="新增公司系数分档设置",this.label1="系数",this.label2="",this.type=0,this.oldId=0,this.formItem.performance="",this.formItem.factor="",this.performanceLabel="公司业绩(万元)"},addGroupFactor:function(){this.showImg=!0,this.state="新增小组系数分档设置",this.label1="系数",this.label2="",this.type=1,this.oldId=0,this.formItem.performance="",this.formItem.factor="",this.performanceLabel="小组业绩(万元)"},addManagerFactor:function(){this.showImg=!0,this.state="新增经理和审核员系数分档",this.label1="经理系数",this.label2="审核系数",this.type=2,this.oldId=0,this.formItem.performance="",this.formItem.factor="",this.formItem.factor_1="",this.performanceLabel="公司业绩(万元)"},modify:function(t){this.performanceLabel="公司业绩(万元)",console.log(t.row.id),this.oldId=t.row.id,this.showImg=!0,this.label1="系数",this.label2="",this.state="修改公司系数分档设置",this.formItem.performance=t.row.performance,this.formItem.factor=t.row.factor,this.oldPerfor=t.row.performance},modify1:function(t){this.performanceLabel="公司业绩(万元)",console.log(t.row.id),this.oldId=t.row.id,this.label1="经理系数",this.label2="审核系数",this.showImg=!0,this.state="修改经理和审核员系数分档",this.formItem.performance=t.row.performance,this.formItem.factor=t.row.factor,this.formItem.factor_1=t.row.factor_1,this.oldPerfor=t.row.performance},remove:function(t){var e=this;s["a"].request({url:"manager/delPerformanceFactor",params:{oldId:t.row.id},method:"get"}).then(function(t){t.data.returnCode>0?(e.$Message.info("删除成功"),e.getFactorList()):e.$Message.info("删除失败")})},getFactorList:function(){console.log(123);var t=this;s["a"].request({url:"manager/getManagerFactorList",params:{period:this.month},method:"get"}).then(function(e){t.factorList=e.data}),s["a"].request({url:"manager/getPerformanceFactorList",params:{type:0,period:this.month},method:"get"}).then(function(e){t.companyFactorList=e.data}),s["a"].request({url:"manager/getPerformanceFactorList",params:{type:1,period:this.month},method:"get"}).then(function(e){t.groupFactorList=e.data}),s["a"].request({url:"manager/getPerformanceFactorList",params:{type:2,period:this.month},method:"get"}).then(function(e){t.managerFactorList=e.data}),s["a"].request({url:"manager/getMemValueByName",params:{memName:"closeAccount"},method:"get"}).then(function(e){"true"==e.data.memValue&&(t.closeAccount="开帐",t.buttonType="primary")}),s["a"].request({url:"manager/getCopyPeroidList",params:{},method:"get"}).then(function(e){t.copyList=e.data}),s["a"].request({url:"manager/getArguByPeriod",params:{period:this.month},method:"get"}).then(function(e){t.argu=e.data})},saveArgu:function(){this.argu.period=this.month;var t=this;s["a"].request({url:"manager/saveArgu",params:{json:this.argu},method:"post"}).then(function(e){t.$Message.info("保存成功"),console.log(e)})},saveFactor:function(){console.log(this.factorList);for(var t=0;t<this.factorList.length-2;t++){for(var e=0,a=0;a<this.factorList[t].list.length;a++){if(this.factorList[t].list[a].target>0&&this.factorList[t].list[a].target<30)return void this.$Message.info(this.factorList[t].list[a].name+"的任务目标不能小于30w");this.factorList[t].list[a].leader&&e++}if(0==e)return void this.$Message.info(this.factorList[t].dept+"没有选择组长");if(e>1)return void this.$Message.info(this.factorList[t].dept+"只能有一个组长")}var o={factorList:encodeURI(JSON.stringify(this.factorList)),period:this.month},r=this;s["a"].request({url:"manager/saveFactorList",params:o,method:"get"}).then(function(t){r.$Message.info("保存成功"),console.log(t)})}}},l=i,c=a("2877"),m=Object(c["a"])(l,o,r,!1,null,null,null);m.options.__file="setting.vue";e["default"]=m.exports}}]);