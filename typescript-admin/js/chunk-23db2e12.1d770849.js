(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23db2e12"],{4937:function(a,t,e){},"8a19":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main-box"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData,border:""}},[e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),e("div",{staticClass:"pagination"},[e("el-pagination",{staticStyle:{"text-align":"right"},attrs:{background:"",layout:"prev, pager, next",total:1e3},on:{"current-change":a.changePageHandler}})],1)],1)},l=[],i=e("9f12"),c=e("53fe"),r=e("8b83"),o=e("c65a"),s=e("c03e"),u=e("9ab4"),d=e("60a3"),b=e("79f6"),g=function(a){function t(){var a;return Object(i["a"])(this,t),a=Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments)),a.tableData=[],a.loading=!1,a}return Object(s["a"])(t,a),Object(c["a"])(t,[{key:"mounted",value:function(){this.getPageData()}},{key:"getPageData",value:function(){var a=this;this.loading=!0,b["a"].simple().then((function(t){a.tableData=t.data.list,a.loading=!1}))}},{key:"changePageHandler",value:function(a){this.getPageData()}}]),t}(d["c"]);g=u["a"]([d["a"]],g);var p=g,h=p,f=(e("f341"),e("2877")),v=Object(f["a"])(h,n,l,!1,null,null,null);t["default"]=v.exports},f341:function(a,t,e){"use strict";var n=e("4937"),l=e.n(n);l.a}}]);
//# sourceMappingURL=chunk-23db2e12.1d770849.js.map