(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3b43"],{"3b43":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{padding:"20px",background:"#fff",margin:"10px"}},[o("Row",[o("Col",{attrs:{span:"8"}},[t._v("\n      账期:\n      "),o("Select",{staticStyle:{width:"200px",margin:"0 30px"},on:{"on-change":t.getFactorList},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},t._l(t.monthList,function(e,a){return o("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.value))])}))],1),o("Col",{attrs:{span:"8"}},[o("Button",{staticStyle:{"margin-right":"30px"},attrs:{type:t.buttonType},on:{click:function(e){t.copy=!0}}},[t._v("复制参数")])],1)],1),o("Row",{staticStyle:{"margin-top":"10px"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],staticStyle:{float:"left","margin-left":"20px"}},[o("Card",{staticStyle:{width:"550px","margin-bottom":"10px"}},[o("p",{attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-film-outline"}}),t._v("分组分档设置\n        ")],1),o("Card",[o("h4",[t._v("分组分档设置")]),o("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addGroupDeduct}},[t._v("新增")]),o("Table",{attrs:{columns:t.columns1,data:t.groupDeductList}})],1),o("Card",{staticStyle:{"margin-top":"10px"}},[o("h4",{staticStyle:{"margin-top":"20px"}},[t._v("分组基准毛利率")]),o("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addGroupFactor}},[t._v("新增")]),o("Table",{attrs:{columns:t.columns3,data:t.groupFactorList}})],1),o("Card",{staticStyle:{"margin-top":"10px"}},[o("h4",{staticStyle:{"margin-top":"20px"}},[t._v("特定人员管理的部门")]),o("Button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"md-add"},on:{click:t.addManagerFactor}},[t._v("新增")]),o("Table",{attrs:{columns:t.columns2,data:t.managerFactorList}})],1)],1)],1)]),o("Modal",{attrs:{title:t.state,footerHide:!0,width:"400"},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[o("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":120}},[o("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.label3,expression:"label3"}],attrs:{label:t.label3,prop:"performance"}},[o("Select",{model:{value:t.formItem.handler,callback:function(e){t.$set(t.formItem,"handler",e)},expression:"formItem.handler"}},t._l(t.handlerList,function(e,a){return o("Option",{key:a,attrs:{value:e.name}},[t._v(t._s(e.name))])}))],1),o("FormItem",{attrs:{label:t.performanceLabel,prop:"performance"}},[o("Select",{model:{value:t.formItem.groupname,callback:function(e){t.$set(t.formItem,"groupname",e)},expression:"formItem.groupname"}},t._l(t.groupList,function(e,a){return o("Option",{key:a,attrs:{value:e}},[t._v(t._s(e))])}))],1),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.label1,expression:"label1"}],attrs:{label:t.label1,prop:"factor"}},[o("InputNumber",{attrs:{placeholder:""},model:{value:t.formItem.sale,callback:function(e){t.$set(t.formItem,"sale",e)},expression:"formItem.sale"}})],1),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.label2,expression:"label2"}],attrs:{label:t.label2,prop:"factor"}},[o("InputNumber",{attrs:{placeholder:""},model:{value:t.formItem.deduct,callback:function(e){t.$set(t.formItem,"deduct",e)},expression:"formItem.deduct"}})],1),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.ok("formItem")}}},[t._v("确定")]),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(e){t.showImg=!1}}},[t._v("取消")])],1)],1)],1),o("Modal",{attrs:{title:"复制参数",width:"400"},on:{"on-ok":t.copyClick},model:{value:t.copy,callback:function(e){t.copy=e},expression:"copy"}},[t._v("\n    账期:\n    "),o("Select",{staticStyle:{width:"200px",margin:"0 30px"},model:{value:t.copyMonth,callback:function(e){t.copyMonth=e},expression:"copyMonth"}},t._l(t.copyList,function(e,a){return o("Option",{key:a,attrs:{value:e.period}},[t._v(t._s(e.period))])}))],1)],1)},r=[],s=(o("7f7f"),o("66df")),i=o("c276"),n={data:function(){var t=this;return{closeAccount:"关帐",buttonType:"error",state:"",copy:!1,admin:Object(i["d"])(),showImg:!1,type:0,oldId:0,label1:"系数",label2:"",month:"",argu:{},copyList:[],copyMonth:"",label3:"",monthList:[],handlerList:[],groupList:[],oldPerfor:"",performanceLabel:"",formItem:{groupname:"",sale:"",deduct:"",period:"",handler:""},groupDeductList:[],managerFactorList:[],columns1:[{title:"小组",key:"groupname"},{title:"业绩(万元)",key:"sale"},{title:"提成(%)",key:"deduct"},{title:"操作",width:150,render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.modify(o)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(o)}}},"删除")])}}],columns3:[{title:"小组",key:"groupname"},{title:"基准毛利率(%)",key:"standard"},{title:"操作",width:150,render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.modify3(o)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove3(o)}}},"删除")])}}],columns2:[{title:"业务员",key:"handler"},{title:"小组",key:"groupname"},{title:"操作",width:150,render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.modify1(o)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove1(o)}}},"删除")])}}],companyFactorList:[],groupFactorList:[]}},mounted:function(){for(var t=2019;t<2025;t++)for(var e=1;e<13;e++)this.monthList.push({value:t+"-"+(e<10?"0"+e:e)});var o=new Date;this.month=o.getFullYear()+"-"+(o.getMonth()+1>9?o.getMonth()+1:"0"+(o.getMonth()+1)),console.log(o.getMonth()+1),this.getFactorList();var a=Object(i["k"])();console.log(a)},methods:{copyClick:function(){var t=this;""!=this.copyMonth?this.month!=this.copyMonth?s["a"].request({url:"manager/saveCopyFactor",params:{period:this.month,sourcePeriod:this.copyMonth},method:"post"}).then(function(e){e.data>0?(t.$Message.info("复制成功"),t.getFactorList()):t.$Message.info("复制失败")}):this.$Message.info("不能复制自己"):this.$Message.info("复制的账期不能为空")},ok:function(t){if(0==this.type){var e=this,o=this.formItem;o.id=this.oldId,o.type=this.type,o.oldPerfor=this.oldPerfor,o.period=this.month;var a={groupDeduceStr:JSON.stringify(o),state:"新增抵扣券"==this.state?"add":"update"};s["a"].request({url:"default/addGroupDudect",params:a,method:"post"}).then(function(t){t.data.returnCode>0?(e.$Message.info("保存成功"),e.showImg=!1,e.getFactorList()):0==t.data.returnCode&&e.$Message.info("该分档已存在")})}else if(1==this.type){var r=this,i={};i.standard=this.formItem.sale,i.groupname=this.formItem.groupname,i.id=this.oldId,i.type=this.type,i.oldPerfor=this.oldPerfor,i.period=this.month;var n={groupDeduceStr:JSON.stringify(i),state:"新增抵扣券"==this.state?"add":"update"};s["a"].request({url:"default/addGroupStand",params:n,method:"post"}).then(function(t){t.data.returnCode>0?(r.$Message.info("保存成功"),r.showImg=!1,r.getFactorList()):0==t.data.returnCode&&r.$Message.info("该分档已存在")})}else if(2==this.type){var l=this,c=this.formItem;c.id=this.oldId,c.type=this.type,c.oldPerfor=this.oldPerfor,c.period=this.month;var m={groupDeduceStr:JSON.stringify(c),state:"新增抵扣券"==this.state?"add":"update"};s["a"].request({url:"default/addHandlerGroup",params:m,method:"post"}).then(function(t){t.data.returnCode>0?(l.$Message.info("保存成功"),l.showImg=!1,l.getFactorList()):0==t.data.returnCode&&l.$Message.info("该分档已存在")})}},closeAccountClick:function(){var t=this,e=this;this.$Modal.confirm({title:"提示",content:"<p>是否确认要进行"+this.closeAccount+"</p>",onOk:function(){s["a"].request({url:"manager/saveMemValue",params:{memName:"closeAccount",memValue:"关帐"==t.closeAccount?"true":"false"},method:"post"}).then(function(t){t.data>0&&(e.$Message.info(e.closeAccount+"成功"),e.closeAccount="关帐"==e.closeAccount?"开帐":"关帐",e.buttonType="关帐"==e.closeAccount?"error":"primary")})},onCancel:function(){}})},addGroupDeduct:function(){this.showImg=!0,this.state="新增分组分档提成",this.label1="业绩(万元)",this.label2="提成(%)",this.label3="",this.type=0,this.oldId=0,this.formItem.groupname="",this.formItem.sale="",this.formItem.deduct="",this.performanceLabel="小组"},addGroupFactor:function(){this.showImg=!0,this.state="新增分组基准毛利率",this.label1="毛利率",this.label3="",this.label2="",this.type=1,this.oldId=0,this.formItem.performance="",this.formItem.factor="",this.performanceLabel="小组"},addManagerFactor:function(){this.showImg=!0,this.state="新增特定人员管理部门",this.label1="",this.label2="",this.label3="业务员",this.type=2,this.oldId=0,this.formItem.performance="",this.formItem.factor="",this.formItem.factor_1="",this.performanceLabel="小组"},modify:function(t){this.performanceLabel="小组",this.type=0,console.log(t.row.id),this.oldId=t.row.id,this.showImg=!0,this.label1="业绩(万元)",this.label2="提成(%)",this.state="修改分组分档提成",this.formItem.groupname=t.row.groupname,this.formItem.sale=t.row.sale,this.formItem.deduct=t.row.deduct},modify3:function(t){this.type=1,this.performanceLabel="小组",console.log(t.row.id),this.oldId=t.row.id,this.showImg=!0,this.label1="毛利率",this.label2="",this.state="修改分组基准毛利率",this.formItem.groupname=t.row.groupname,this.formItem.sale=t.row.standard,this.formItem.deduct=t.row.deduct},modify1:function(t){this.performanceLabel="小组",console.log(t.row.id),this.oldId=t.row.id,this.label1="",this.label2="",this.label3="业务员",this.showImg=!0,this.state="修改特定人员管理部门",this.type=2,this.formItem.groupname=t.row.groupname,this.formItem.handler=t.row.handler},remove:function(t){var e=this;s["a"].request({url:"default/delGroupDudect",params:{id:t.row.id},method:"get"}).then(function(t){t.data.returnCode>0?(e.$Message.info("删除成功"),e.getFactorList()):e.$Message.info("删除失败")})},remove3:function(t){var e=this;s["a"].request({url:"default/delGroupStand",params:{id:t.row.id},method:"get"}).then(function(t){t.data.returnCode>0?(e.$Message.info("删除成功"),e.getFactorList()):e.$Message.info("删除失败")})},getFactorList:function(){console.log(123);var t=this;s["a"].request({url:"default/getGroupDeductList",params:{period:this.month},method:"get"}).then(function(e){t.groupDeductList=e.data}),s["a"].request({url:"default/getGroupList",params:{},method:"get"}).then(function(e){t.groupList=e.data}),s["a"].request({url:"default/getHandlerList",params:{},method:"get"}).then(function(e){t.handlerList=e.data}),s["a"].request({url:"manager/getPerformanceFactorList",params:{type:0,period:this.month},method:"get"}).then(function(e){t.companyFactorList=e.data}),s["a"].request({url:"default/getGroupStandList",params:{period:this.month},method:"get"}).then(function(e){t.groupFactorList=e.data}),s["a"].request({url:"default/getHandlerGroupList",params:{period:this.month},method:"get"}).then(function(e){t.managerFactorList=e.data}),s["a"].request({url:"manager/getMemValueByName",params:{memName:"closeAccount"},method:"get"}).then(function(e){"true"==e.data.memValue&&(t.closeAccount="开帐",t.buttonType="primary")}),s["a"].request({url:"manager/getCopyPeroidList",params:{},method:"get"}).then(function(e){t.copyList=e.data}),s["a"].request({url:"manager/getArguByPeriod",params:{period:this.month},method:"get"}).then(function(e){t.argu=e.data})},saveArgu:function(){this.argu.period=this.month;var t=this;s["a"].request({url:"manager/saveArgu",params:{json:this.argu},method:"post"}).then(function(e){t.$Message.info("保存成功"),console.log(e)})},saveFactor:function(){console.log(this.factorList);for(var t=0;t<this.factorList.length-2;t++){for(var e=0,o=0;o<this.factorList[t].list.length;o++){if(this.factorList[t].list[o].target>0&&this.factorList[t].list[o].target<30)return void this.$Message.info(this.factorList[t].list[o].name+"的任务目标不能小于30w");this.factorList[t].list[o].leader&&e++}if(0==e)return void this.$Message.info(this.factorList[t].dept+"没有选择组长");if(e>1)return void this.$Message.info(this.factorList[t].dept+"只能有一个组长")}var a={factorList:encodeURI(JSON.stringify(this.factorList)),period:this.month},r=this;s["a"].request({url:"manager/saveFactorList",params:a,method:"get"}).then(function(t){r.$Message.info("保存成功"),console.log(t)})}}},l=n,c=o("2877"),m=Object(c["a"])(l,a,r,!1,null,null,null);m.options.__file="defaultSetting.vue";e["default"]=m.exports}}]);