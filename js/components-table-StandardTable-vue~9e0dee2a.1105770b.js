(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-table-StandardTable-vue~9e0dee2a"],{"257e":function(e,t,a){"use strict";a("b40e")},3521:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"standard-table"},[a("div",{staticClass:"alert"},[a("a-alert",{attrs:{type:"info","show-icon":!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[e._v("\n        已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRows.length))]),e._v("  \n        "),e._l(e.needTotalList,(function(t,n){return t.needTotal?[e._v("\n          "+e._s(t.title)+" 总计 \n          "),a("a",{key:n,staticStyle:{"font-weight":"600"}},[e._v("\n            "+e._s(t.customRender?t.customRender(t.total):t.total)+"\n          ")]),e._v("  \n        ")]:e._e()})),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])],2)])],1),a("a-table",{attrs:{size:e.size,bordered:e.bordered,loading:e.loading,columns:e.columns,dataSource:e.current,rowKey:e.rowKey,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.updateSelect}}})],1)},r=[];function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return(t=l(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){var t=c(e,"string");return"symbol"==o(t)?t:t+""}function c(e,t){if("object"!=o(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var p={name:"StandardTable",props:{data:{type:Function,required:!0},dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,required:!0},pageSize:{type:Number,default:10},pageNum:{type:Number,default:1},pageSizeOptions:{type:Array,default:function(){return["10","20","30","40","50"]}},responseParamsName:{type:Object,default:function(){return{}}},bordered:{type:Boolean,default:!1},size:{type:String,default:"default"},rowKey:{type:String,default:""},selectedRows:{type:Array,default:null}},data:function(){return{needTotalList:[],selectedRowKeys:[],loading:!0,total:0,pageNumber:this.pageNum,currentPageSize:this.pageSize,defaultCurrent:1,sortParams:{},current:[],pagination:{},paramsName:{}}},created:function(){this.paramsName=Object.assign({},{pageNumber:"pageNo",pageSize:"pageSize",total:"totalCount",results:"data",sortColumns:"sortColumns"},this.responseParamsName),this.needTotalList=this.initTotalList(this.columns),this.loadData({pageNum:this.pageNumber})},methods:{updateSelect:function(e,t){this.selectedRowKeys=e;var a=this.needTotalList;this.needTotalList=a.map((function(e){return s(s({},e),{},{total:t.reduce((function(t,a){return t+a[e.dataIndex]}),0)})})),this.$emit("change",e,t)},initTotalList:function(e){var t=[];return e.forEach((function(e){e.needTotal&&t.push(s(s({},e),{},{total:0}))})),t},loadData:function(e){var t=this;t.loading=!0,e=Object.assign({},e);var a=Object.assign({},t.sortParams);a[t.paramsName.pageNumber]=e.pageNum||t.pageNumber,a[t.paramsName.pageSize]=e.pageSize||t.currentPageSize,e.pageNum&&(t.pageNumber=e.pageNum),e.pageSize&&(t.currentPageSize=e.pageSize);var n=t.data(a);n.then((function(e){if(e){var a=e[t.paramsName.results];a=a instanceof Array&&a||[],t.current=a,t.$emit("update:currentData",t.current.slice()),t.$emit("dataloaded",t.current.slice()),t.total=1*e[t.paramsName.total],t.pagination=t.pager(),t.loading=!1}else t.loading=!1}),(function(){t.loading=!1}))},onPagerChange:function(e,t){this.pageNumber=e,this.loadData({pageNum:e})},onPagerSizeChange:function(e,t){this.currentPageSize=t},onClearSelected:function(){this.selectedRowKeys=[],this.updateSelect([],[])},pager:function(){return{total:this.total,showTotal:function(e){return"共有 ".concat(e," 条")},showSizeChanger:!0,pageSizeOptions:this.pageSizeOptions,pageSize:this.pageSize,defaultCurrent:this.defaultCurrent,onChange:this.onPagerChange,onShowSizeChange:this.onPagerSizeChange}}},watch:{selectedRows:function(e){this.needTotalList=this.needTotalList.map((function(t){return s(s({},t),{},{total:e.reduce((function(e,a){return e+a[t.dataIndex]}),0)})}))}}},d=p,f=(a("257e"),a("2877")),g=Object(f["a"])(d,n,r,!1,null,"74feb5ff",null);t["default"]=g.exports},b40e:function(e,t,a){}}]);