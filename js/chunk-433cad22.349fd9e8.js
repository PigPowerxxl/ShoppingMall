(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-433cad22"],{"00fe":function(e,t,a){"use strict";var n=a("7a23"),o=Object(n["withScopeId"])("data-v-4ba92b4c");Object(n["pushScopeId"])("data-v-4ba92b4c");var r={class:"crumbs"},i=Object(n["createVNode"])("i",{class:"el-icon-lx-calendar"},null,-1);Object(n["popScopeId"])();var c=o((function(e,t,a,c,m,d){var l=Object(n["resolveComponent"])("el-breadcrumb-item"),s=Object(n["resolveComponent"])("el-breadcrumb");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(s,{separator:"/"},{default:o((function(){return[Object(n["createVNode"])(l,null,{default:o((function(){return[i,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(a.menu),1)]})),_:1}),Object(n["createVNode"])(l,null,{default:o((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.subMenu),1)]})),_:1})]})),_:1})])})),m={props:["menu","subMenu"],data:function(){return{}}};m.render=c,m.__scopeId="data-v-4ba92b4c";t["a"]=m},"0f72":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=Object(n["withScopeId"])("data-v-74554d63");Object(n["pushScopeId"])("data-v-74554d63");var r=Object(n["createTextVNode"])("指标选择:"),i=Object(n["createTextVNode"])("时间:"),c={class:"block",style:{width:"100%"}},m=Object(n["createTextVNode"])("查询"),d=Object(n["createTextVNode"])("重置"),l=Object(n["createVNode"])("span",null,"节假日分析",-1),s={ref:"holiday",style:{height:"390px",width:"100%"}};Object(n["popScopeId"])();var u=o((function(e,t,a,u,h,f){var Y=Object(n["resolveComponent"])("crumbs"),p=Object(n["resolveComponent"])("el-col"),b=Object(n["resolveComponent"])("market"),y=Object(n["resolveComponent"])("index-select"),g=Object(n["resolveComponent"])("el-row"),O=Object(n["resolveComponent"])("el-date-picker"),D=Object(n["resolveComponent"])("el-button"),x=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(Y,{menu:"商场流量",subMenu:"节假日分析"}),Object(n["createVNode"])(x,null,{default:o((function(){return[Object(n["createVNode"])(g,null,{default:o((function(){return[Object(n["createVNode"])(p,{span:2,class:"flexCenter fontSet"},{default:o((function(){return[r]})),_:1}),Object(n["createVNode"])(p,{span:8},{default:o((function(){return[Object(n["createVNode"])(g,null,{default:o((function(){return[Object(n["createVNode"])(p,{span:12},{default:o((function(){return[Object(n["createVNode"])(b,{onMarketGet:e.marketGetA,marketSet:h.marketName},null,8,["onMarketGet","marketSet"])]})),_:1}),Object(n["createVNode"])(p,{span:12},{default:o((function(){return[Object(n["createVNode"])(y,{onIndexGet:f.indexGet,indexSet:h.index},null,8,["onIndexGet","indexSet"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(p,{span:2,class:"flexCenter borderSet fontSet"},{default:o((function(){return[i]})),_:1}),Object(n["createVNode"])(p,{span:6},{default:o((function(){return[Object(n["createVNode"])(g,null,{default:o((function(){return[Object(n["createVNode"])("div",c,[Object(n["createVNode"])(O,{onChange:f.chartChange,style:{width:"100%"},disabled:h.datePickerAble,modelValue:h.timeRange,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.timeRange=e}),type:"daterange",shortcuts:h.shortcuts,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",align:"right"},null,8,["onChange","disabled","modelValue","shortcuts"])])]})),_:1})]})),_:1}),Object(n["createVNode"])(p,{span:4,offset:1},{default:o((function(){return[Object(n["createVNode"])(D,{type:"primary",icon:"el-icon-search",onClick:f.onQuery},{default:o((function(){return[m]})),_:1},8,["onClick"]),Object(n["createVNode"])(D,{type:"primary",icon:"el-icon-refresh-right",onClick:f.reSet},{default:o((function(){return[d]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(x,{header:"流量对比",style:{"font-weight":"bold","margin-top":"10px"}},{header:o((function(){return[Object(n["createVNode"])(g,null,{default:o((function(){return[Object(n["createVNode"])(p,{span:10,style:{"line-height":"40px"}},{default:o((function(){return[l]})),_:1})]})),_:1})]})),default:o((function(){return[Object(n["createVNode"])("div",s,null,512)]})),_:1})])})),h=(a("99af"),a("d81d"),a("00fe")),f=a("3660"),Y=a("9255"),p=a("313e"),b=a("bc3a"),y=a.n(b),g={data:function(){var e=this;return{indexName:"客流量",screenWidth:document.body.clientWidth,marketName:"万达",index:[{value:"客流量",label:"客流量"},{value:"集客力",label:"集客力"},{value:"提袋率",label:"提袋率"},{value:"游逛深度",label:"游逛深度"}],chart:{},chartData:[],holidayData:[],datePickerAble:!1,timeRange:"",time:"近7日",shortcuts:[{text:"最近一周",value:function(){var t=new Date,a=new Date;return a.setTime(a.getTime()-6048e5),[e.$moment().subtract(7,"days"),t]}()},{text:"最近一月",value:function(){var t=new Date,a=new Date;return a.setTime(a.getTime()-2592e6),[e.$moment().subtract(1,"months"),t]}()},{text:"最近一年",value:function(){var t=new Date,a=new Date;return a.setFullYear(a.getFullYear()-1),[e.$moment().subtract(1,"years"),t]}()}],holidayName:[]}},components:{crumbs:h["a"],market:f["a"],indexSelect:Y["a"]},methods:{marketGet:function(e){this.marketName=e},indexGet:function(e){this.indexName=e},timeIntval:function(e,t){var a=[],n=this.$moment;e=n(e).format("YYYY-MM-DD"),t=n(t).format("YYYY-MM-DD");while(n(e).isBefore(t))a.push(n(e).format("YYYY-MM-DD")),e=n(e).add(1,"days").format("YYYY-MM-DD");return a.push(n(t).format("YYYY-MM-DD")),a},initChart:function(e,t){var a=p["b"](e),n={title:{show:!0,text:this.$moment(this.timeRange[0]).format("YYYY-MM-DD")+"至"+this.$moment(this.timeRange[1]).format("YYYY-MM-DD")+" 节假日"+this.indexName,x:"center",y:"top",textStyle:{fontSize:"14",fontWeight:"bolder"}},tooltip:{position:"top",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["节假日"],top:"top",left:"left"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},dataZoom:[{type:"slider",xAxisIndex:[0]},{type:"slider",yAxisIndex:[0]},{type:"inside",xAxisIndex:[0]},{type:"inside",yAxisIndex:[0]}],calculable:!0,xAxis:[{type:"category",data:this.holidayName}],yAxis:[{type:"value"}],series:t};return console.log(n.legend.data),console.log(n.series),a.setOption(n),a},onQuery:function(){this.chartChange()},chartChange:function(){var e=this;this.chart.clear();var t=this.$moment(this.timeRange[0]).startOf("year").format("YYYY"),a=this.$moment(this.timeRange[1]).startOf("year").format("YYYY"),n=[];for(console.log(this.timeRange),y.a.all([]),t;t<=a;t++)n.push(y()("https://api.apihubs.cn/holiday/get?year=".concat(t,"&holiday=22,11,44,55,66,77,88,97&cn=1&size=33")));console.log(this.timeIntval(this.$moment(this.timeRange[0]).format("YYYY-MM-DD"),this.$moment(this.timeRange[1]).format("YYYY-MM-DD"))),n.push(y()("https://mock.mengxuegu.com/mock/6076fee5990ff82a18f95b5f/item/getHoliday?lg=".concat(this.timeIntval(this.$moment(this.timeRange[0]).format("YYYY-MM-DD"),this.$moment(this.timeRange[1]).format("YYYY-MM-DD")).length))),y.a.all(n).then(y.a.spread((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];console.log(a[1]);var o=a[[].concat(a).length-1].data.list,r=e.timeIntval(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD"));console.log(o),console.log(r);var i="";"客流量"==e.indexName?i="flow":"集客力"==e.indexName?i="getPower":"提袋率"==e.indexName?i="rate":"游逛深度"==e.indexName&&(i="deep");for(var c=[],m=[],d=0;d<[].concat(a).length-1;d++){console.log(d);var l=a[d].data.data.list;l.map((function(t){e.$moment(t.date,"YYYYMMDD").isBetween(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD"),"day","[]")&&(-1!=c.indexOf(t.holiday_cn)?m[c.indexOf(t.holiday_cn)]+=o[i][r.indexOf(e.$moment(t.date,"YYYYMMDD").format("YYYY-MM-DD"))]:(c.push(t.holiday_cn),m.push(o[i][r.indexOf(e.$moment(t.date,"YYYYMMDD").format("YYYY-MM-DD"))])))}))}for(var s=0,u=0;u<r.length;u++)6!=e.$moment(r[u]).isoWeekday()&&7!=e.$moment(r[u]).isoWeekday()||(s+=o[i][u]);0!=s&&(c.push("周末"),m.push(s));for(var h=e.$moment(e.timeRange[0]).startOf("year").format("YYYY"),f=e.$moment(e.timeRange[1]).startOf("year").format("YYYY"),Y=h;Y<=f;Y++)e.$moment(e.$moment(Y).year()+"-11-11").isBetween(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD"),"day","[]")&&(c.push("双十一"),m.push(o[i][r.indexOf(e.$moment(e.$moment(Y).year()+"-11-11").format("YYYY-MM-DD"))]));e.holidayName=c,e.chartData=[{name:"节假日",type:"bar",data:m,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}],e.chart=e.initChart(e.$refs.holiday,e.chartData)})))},reSet:function(){this.chartChange(),this.timeRange=[this.$moment().startOf("year"),this.$moment()],this.marketName="万达"}},mounted:function(){var e=this,t=this;window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,t.screenWidth=window.screenWidth}()},this.timeRange=[this.$moment().startOf("year"),this.$moment()];var a=this.$moment(this.timeRange[0]).startOf("year").format("YYYY"),n=this.$moment(this.timeRange[1]).startOf("year").format("YYYY"),o=[];for(y.a.all([]),a;a<=n;a++)o.push(y()("https://api.apihubs.cn/holiday/get?year=".concat(a,"&holiday=22,11,44,55,66,77,88,97&cn=1&size=33")));o.push(y()("https://mock.mengxuegu.com/mock/6076fee5990ff82a18f95b5f/item/getHoliday?lg=".concat(this.timeIntval(this.$moment(this.timeRange[0]).format("YYYY-MM-DD"),this.$moment(this.timeRange[1]).format("YYYY-MM-DD")).length))),y.a.all(o).then(y.a.spread((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var o=a[1].data.list,r=e.timeIntval(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD")),i="";"客流量"==e.indexName?i="flow":"集客力"==e.indexName?i="getPower":"提袋率"==e.indexName?i="rate":"游逛深度"==e.indexName&&(i="deep");var c=a[0].data.data.list,m=[],d=[];c.map((function(t){e.$moment(t.date,"YYYYMMDD").isBetween(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD"),"day","[]")&&(-1!=m.indexOf(t.holiday_cn)?d[m.indexOf(t.holiday_cn)]+=o[i][r.indexOf(e.$moment(t.date,"YYYYMMDD").format("YYYY-MM-DD"))]:(m.push(t.holiday_cn),d.push(o[i][r.indexOf(e.$moment(t.date,"YYYYMMDD").format("YYYY-MM-DD"))])))}));for(var l=0,s=0;s<r.length;s++)6!=e.$moment(r[s]).isoWeekday()&&7!=e.$moment(r[s]).isoWeekday()||(l+=o[i][s]);0!=l&&(m.push("周末"),d.push(l));for(var u=e.$moment(e.timeRange[0]).startOf("year").format("YYYY"),h=e.$moment(e.timeRange[1]).startOf("year").format("YYYY"),f=u;f<=h;f++)e.$moment(e.$moment(f).year()+"-11-11").isBetween(e.$moment(e.timeRange[0]).format("YYYY-MM-DD"),e.$moment(e.timeRange[1]).format("YYYY-MM-DD"),"day","[]")&&(m.push("双十一"),d.push(o[i][r.indexOf(e.$moment(e.$moment(f).year()+"-11-11").format("YYYY-MM-DD"))]));e.holidayName=m,e.chartData=[{name:"节假日",type:"bar",data:d,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}],e.chart=e.initChart(e.$refs.holiday,e.chartData)})))},watch:{screenWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){this.chart.resize(),t.timer=!1}),400)}},indexName:function(){this.chartChange()},marketName:function(){this.chartChange()}}};a("85ac");g.render=u,g.__scopeId="data-v-74554d63";t["default"]=g},"76c7":function(e,t,a){},"85ac":function(e,t,a){"use strict";a("76c7")},9255:function(e,t,a){"use strict";var n=a("7a23"),o=Object(n["withScopeId"])("data-v-3b9da70c");Object(n["pushScopeId"])("data-v-3b9da70c");var r=Object(n["createVNode"])("span",{id:"text"},"指标名称:",-1);Object(n["popScopeId"])();var i=o((function(e,t,a,i,c,m){var d=Object(n["resolveComponent"])("el-option"),l=Object(n["resolveComponent"])("el-select");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[r,Object(n["createVNode"])(l,{modelValue:c.indexValue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.indexValue=e}),placeholder:"请选择",style:m.widthSet,onChange:m.submitIndex,filterable:""},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.indexSet,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","style","onChange"])])})),c={props:["indexSet"],data:function(){return{indexValue:"客流量",indexList:[],textWidth:""}},components:{},mounted:function(){this.textWidth=document.getElementById("text").offsetWidth},methods:{submitIndex:function(e){this.$emit("indexGet",e)}},computed:{widthSet:function(){return"width:calc(90% - ".concat(this.textWidth,"px);")}},watch:{indexSet:function(e){this.indexValue=e}}};c.render=i,c.__scopeId="data-v-3b9da70c";t["a"]=c}}]);
//# sourceMappingURL=chunk-433cad22.349fd9e8.js.map