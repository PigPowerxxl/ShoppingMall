(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b204015"],{2532:function(e,t,a){"use strict";var n=a("23e7"),o=a("5a34"),r=a("1d80"),l=a("ab13");n({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~String(r(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,a){var n=a("861d"),o=a("c6b6"),r=a("b622"),l=r("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==o(e))}},4907:function(e,t,a){"use strict";a("bde8")},"5a34":function(e,t,a){var n=a("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"63e7":function(e,t,a){"use strict";a.r(t);a("d81d"),a("fb6a"),a("4de4"),a("caad"),a("2532");var n=a("7a23"),o=Object(n["withScopeId"])("data-v-284a0ae0");Object(n["pushScopeId"])("data-v-284a0ae0");var r=Object(n["createVNode"])("span",{style:{"line-height":"40px"}},"商场名称:",-1),l=Object(n["createTextVNode"])("添加数据"),c=Object(n["createTextVNode"])("查询"),u=Object(n["createTextVNode"])("重置"),i=Object(n["createTextVNode"])("导出"),d=Object(n["createTextVNode"])("编辑"),m=Object(n["createTextVNode"])("删除"),s={class:"pagination"},f={class:"dialog-footer"},b=Object(n["createTextVNode"])("确 定"),p=Object(n["createTextVNode"])("取 消"),h={class:"dialog-footer"},O=Object(n["createTextVNode"])("确 定"),j=Object(n["createTextVNode"])("取 消");Object(n["popScopeId"])();var k=o((function(e,t,a,k,V,g){var N=Object(n["resolveComponent"])("crumbs"),v=Object(n["resolveComponent"])("el-col"),C=Object(n["resolveComponent"])("el-option"),y=Object(n["resolveComponent"])("el-select"),_=Object(n["resolveComponent"])("el-button"),w=Object(n["resolveComponent"])("export-excel"),B=Object(n["resolveComponent"])("el-button-group"),x=Object(n["resolveComponent"])("el-row"),L=Object(n["resolveComponent"])("el-table-column"),S=Object(n["resolveComponent"])("el-table"),F=Object(n["resolveComponent"])("el-pagination"),z=Object(n["resolveComponent"])("el-card"),D=Object(n["resolveComponent"])("el-input"),T=Object(n["resolveComponent"])("el-form-item"),U=Object(n["resolveComponent"])("el-form"),E=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(N,{menu:"商场管理",subMenu:"场所信息"}),Object(n["createVNode"])(z,null,{header:o((function(){return[Object(n["createVNode"])(x,null,{default:o((function(){return[Object(n["createVNode"])(v,{span:2},{default:o((function(){return[r]})),_:1}),Object(n["createVNode"])(v,{span:12},{default:o((function(){return[Object(n["createVNode"])(v,{span:12},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.marketName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return V.marketName=e}),placeholder:"请选择",clearable:""},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.marketList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(v,{span:12,offset:1},{default:o((function(){return[Object(n["createVNode"])(_,{onClick:t[2]||(t[2]=function(e){return V.editVisible2=!0})},{default:o((function(){return[l]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(v,{span:9,style:{display:"flex","justify-content":"flex-end"}},{default:o((function(){return[Object(n["createVNode"])(B,null,{default:o((function(){return[Object(n["createVNode"])(_,{type:"primary",icon:"el-icon-search",onClick:g.onQuery},{default:o((function(){return[c]})),_:1},8,["onClick"]),Object(n["createVNode"])(_,{type:"primary",icon:"el-icon-refresh-right",onClick:g.reSet},{default:o((function(){return[u]})),_:1},8,["onClick"]),Object(n["createVNode"])(w,{"file-name":"场所信息",header:V.tableSet.map((function(e){return e.label})),"filter-filed":V.tableSet.map((function(e){return e.value})),data:g.exportTable},{default:o((function(){return[i]})),_:1},8,["header","filter-filed","data"])]})),_:1})]})),_:1})]})),_:1})]})),default:o((function(){return[Object(n["createVNode"])(S,{data:V.tableData.filter((function(e){return!V.marketName||e.marketName.toLowerCase().includes(V.marketName.toLowerCase())})).slice((V.currentPage-1)*V.pagesize,V.currentPage*V.pagesize),border:"",class:"table","row-key":"id",ref:"multipleTable","header-cell-class-name":"table-header",onSelectionChange:e.handleSelectionChange,onSortChange:g.sortChange,"current-page":V.currentPage,stripe:""},{default:o((function(){return[Object(n["createVNode"])(L,{type:"index",label:"序号",width:"100",align:"center"}),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.tableSet,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(L,{key:e,prop:e.value,label:e.label,align:"center",sortable:"总流量"==e.label},null,8,["prop","label","sortable"])})),128)),Object(n["createVNode"])(L,{label:"操作",width:"200",align:"center"},{default:o((function(e){return[Object(n["createVNode"])(_,{onClick:function(t){return g.handleEdit(e.$index,e.row)},size:"mini"},{default:o((function(){return[d]})),_:2},1032,["onClick"]),Object(n["createVNode"])(_,{type:"danger",size:"mini",onClick:function(t){return g.handleDelete(e.$index,e.row)}},{default:o((function(){return[m]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","onSelectionChange","onSortChange","current-page"]),Object(n["createVNode"])("div",s,[Object(n["createVNode"])(F,{onSizeChange:g.handleSizeChange,onCurrentChange:g.handleCurrentChange,"page-sizes":[2,5,10],"page-size":V.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:V.tableData.filter((function(e){return!V.marketName||e.marketName.toLowerCase().includes(V.marketName.toLowerCase())})).length},null,8,["onSizeChange","onCurrentChange","page-size","total"])])]})),_:1}),Object(n["createVNode"])(E,{title:"编辑",modelValue:V.editVisible,"onUpdate:modelValue":t[10]||(t[10]=function(e){return V.editVisible=e}),width:"30%"},{footer:o((function(){return[Object(n["createVNode"])("span",f,[Object(n["createVNode"])(_,{type:"primary",onClick:g.saveEdit},{default:o((function(){return[b]})),_:1},8,["onClick"]),Object(n["createVNode"])(_,{onClick:g.cancelEdit},{default:o((function(){return[p]})),_:1},8,["onClick"])])]})),default:o((function(){return[Object(n["createVNode"])(U,{ref:"form",model:V.form,"label-width":"130px"},{default:o((function(){return[Object(n["createVNode"])(T,{label:"场所名称："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.form.areaName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.form.areaName=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"场所面积："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.form.areaSize,"onUpdate:modelValue":t[4]||(t[4]=function(e){return V.form.areaSize=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"店铺名称："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.form.shop,"onUpdate:modelValue":t[5]||(t[5]=function(e){return V.form.shop=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"店铺类型:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.form.type,"onUpdate:modelValue":t[6]||(t[6]=function(e){return V.form.type=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.typeList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"商场名称:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.form.marketName,"onUpdate:modelValue":t[7]||(t[7]=function(e){return V.form.marketName=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.marketList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"商场所属集团:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.form.marketGroup,"onUpdate:modelValue":t[8]||(t[8]=function(e){return V.form.marketGroup=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.groupList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"所属大区:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.form.regionalinfo,"onUpdate:modelValue":t[9]||(t[9]=function(e){return V.form.regionalinfo=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.regionalinfoList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"]),Object(n["createVNode"])(E,{title:"编辑",modelValue:V.editVisible2,"onUpdate:modelValue":t[18]||(t[18]=function(e){return V.editVisible2=e}),width:"30%",style:{"padding-left":"30px"}},{footer:o((function(){return[Object(n["createVNode"])("span",h,[Object(n["createVNode"])(_,{type:"primary",onClick:g.addData},{default:o((function(){return[O]})),_:1},8,["onClick"]),Object(n["createVNode"])(_,{onClick:g.cancelAdd},{default:o((function(){return[j]})),_:1},8,["onClick"])])]})),default:o((function(){return[Object(n["createVNode"])(U,{ref:"form",model:V.addForm,"label-width":"130px"},{default:o((function(){return[Object(n["createVNode"])(T,{label:"场所名称："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.addForm.areaName,"onUpdate:modelValue":t[11]||(t[11]=function(e){return V.addForm.areaName=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"场所面积："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.addForm.areaSize,"onUpdate:modelValue":t[12]||(t[12]=function(e){return V.addForm.areaSize=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"店铺名称："},{default:o((function(){return[Object(n["createVNode"])(D,{modelValue:V.addForm.shop,"onUpdate:modelValue":t[13]||(t[13]=function(e){return V.addForm.shop=e}),style:{width:"53%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"店铺类型:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.addForm.type,"onUpdate:modelValue":t[14]||(t[14]=function(e){return V.addForm.type=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.typeList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"商场名称:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.addForm.marketName,"onUpdate:modelValue":t[15]||(t[15]=function(e){return V.addForm.marketName=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.marketList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"商场所属集团:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.addForm.marketGroup,"onUpdate:modelValue":t[16]||(t[16]=function(e){return V.addForm.marketGroup=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.groupList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(T,{label:"所属大区:"},{default:o((function(){return[Object(n["createVNode"])(y,{modelValue:V.addForm.regionalinfo,"onUpdate:modelValue":t[17]||(t[17]=function(e){return V.addForm.regionalinfo=e}),placeholder:"请选择"},{default:o((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(V.regionalinfoList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"])])})),V=(a("a434"),a("a7c0")),g=a("00fe"),N=a("bc3a"),v=a.n(N),C={name:"marketInfo",data:function(){return{timeRange:[],marketName:"",marketList:[],groupList:[],regionalinfoList:[],typeList:[],queryMarket:"",tableData:[],tableSet:[{value:"areaName",label:"场所名称"},{value:"areaSize",label:"场所面积"},{value:"shop",label:"入驻店铺"},{value:"type",label:"店铺类型"},{value:"marketName",label:"商场名称"},{value:"marketGroup",label:"商场所属集团"},{value:"regionalinfo",label:"所属大区信息"}],marketData:[{value:"qggc",marketname:"群光广场",marketgroup:"蓝天集团",regionalinfo:"华中大区",businesshours:"14",totalflow:123,date:"2020-1-1"},{value:"M+",marketname:"M+购物广场",marketgroup:"长江实业",regionalinfo:"华中大区",businesshours:"15",totalflow:221,date:"2020-1-1"},{value:"ytcyc",marketname:"银泰创意城",marketgroup:"ali",regionalinfo:"华中大区",businesshours:"11",totalflow:255,date:"2020-1-1"},{value:"sdgc",marketname:"时代商场",marketgroup:"汉龙实业",regionalinfo:"华中大区",businesshours:"12",totalflow:87,date:"2020-1-1"},{value:"zbcc",marketname:"中百仓储",marketgroup:"中百集团",regionalinfo:"华中大区",businesshours:"15",totalflow:231,date:"2020-1-1"},{value:"zsbh",marketname:"中商百货",marketgroup:"中商集团",regionalinfo:"华中大区",businesshours:"16",totalflow:222,date:"2020-1-1"}],marketDataCache:"",searchTableData:[],multipleSelection:[],delList:[],editVisible:!1,editVisible2:!1,form:{},idx:-1,currentPage:1,pagesize:5,total:0,addForm:{marketName:"",marketGroup:"",regionalinfo:"",areaName:"",areaSize:"",shop:"",type:""}}},mounted:function(){var e=this;v()("https://mock.mengxuegu.com/mock/6076fee5990ff82a18f95b5f/item/getLocalInfo").then((function(t){console.log(t.data.list),e.tableData=t.data.list,e.marketList=t.data.marketName,e.regionalinfoList=t.data.regionalinfo,e.groupList=t.data.marketGroup,e.typeList=t.data.type}))},methods:{handleDelete:function(e){var t=this;this.$confirm("确定要删除这条记录吗？","提示",{type:"warning"}).then((function(){t.tableData.splice(e+(t.currentPage-1)*t.pagesize,1),t.total=t.tableData.filter((function(e){return!t.marketName||e.marketName.toLowerCase().includes(t.marketName.toLowerCase())})).length})).catch((function(){}))},handleEdit:function(e,t){console.log(t),console.log(this.timeRange),this.idx=e,this.marketDataCache=JSON.stringify(t),this.form=t,this.editVisible=!0},addData:function(){this.tableData.unshift(this.addForm),this.addForm={marketName:"",marketGroup:"",regionalinfo:"",areaName:"",areaSize:"",shop:"",type:""},this.editVisible2=!1,this.$message.success("添加成功")},cancelAdd:function(){this.addForm={marketName:"",marketGroup:"",regionalinfo:"",areaName:"",areaSize:"",shop:"",type:""},this.editVisible2=!1},cancelEdit:function(){console.log(this.marketDataCache),this.editVisible=!1,this.tableData[this.idx]=JSON.parse(this.marketDataCache),this.marketDataCache=""},saveEdit:function(){this.editVisible=!1,this.form.businessTime=this.$moment(this.timeRange[0]).format("HH:mm")+"-"+this.$moment(this.timeRange[1]).format("HH:mm"),this.$message.success("修改第 ".concat(this.idx+1," 行成功")),this.tableData[this.idx]=this.form,this.marketDataCache=""},sortChange:function(e){"ascending"==e.order?this.tableData.sort((function(t,a){return t[e.prop]-a[e.prop]})):"descending"==e.order?this.tableData.sort((function(t,a){return a[e.prop]-t[e.prop]})):this.tableData.sort((function(e,t){return e.flowRank-t.flowRank}))},onQuery:function(){var e=this;v()("https://mock.mengxuegu.com/mock/6076fee5990ff82a18f95b5f/item/getLocalInfo").then((function(t){console.log(t.data.list),e.tableData=t.data.list,e.marketList=t.data.marketName}))},reSet:function(){this.marketName="",this.onQuery()},handleSizeChange:function(e){this.pagesize=e,console.log(this.pagesize)},handleCurrentChange:function(e){this.currentPage=e}},components:{crumbs:g["a"],ExportExcel:V["a"]},computed:{exportTable:function(){var e=this;return this.tableData.filter((function(t){return!e.marketName||t.marketName.toLowerCase().includes(e.marketName.toLowerCase())}))}}};a("4907");C.render=k,C.__scopeId="data-v-284a0ae0";t["default"]=C},ab13:function(e,t,a){var n=a("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}},bde8:function(e,t,a){},caad:function(e,t,a){"use strict";var n=a("23e7"),o=a("4d64").includes,r=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},fb6a:function(e,t,a){"use strict";var n=a("23e7"),o=a("861d"),r=a("e8b5"),l=a("23cb"),c=a("50c4"),u=a("fc6a"),i=a("8418"),d=a("b622"),m=a("1dde"),s=m("slice"),f=d("species"),b=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!s},{slice:function(e,t){var a,n,d,m=u(this),s=c(m.length),h=l(e,s),O=l(void 0===t?s:t,s);if(r(m)&&(a=m.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?o(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(m,h,O);for(n=new(void 0===a?Array:a)(p(O-h,0)),d=0;h<O;h++,d++)h in m&&i(n,d,m[h]);return n.length=d,n}})}}]);
//# sourceMappingURL=chunk-6b204015.16708dd6.js.map