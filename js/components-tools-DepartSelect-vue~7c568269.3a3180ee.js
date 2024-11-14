(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-tools-DepartSelect-vue~7c568269"],{"3f1f":function(t,e,r){},b0b5:function(t,e,r){"use strict";r("3f1f")},e2c7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{attrs:{title:t.currTitle,width:450,visible:t.visible,closable:!1,maskClosable:t.closable}},[r("template",{slot:"footer"},[t.closable?r("a-button",{on:{click:t.close}},[t._v("关闭")]):t._e(),r("a-button",{attrs:{type:"primary"},on:{click:t.departOk}},[t._v("确认")])],1),r("a-form",[r("a-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{labelCol:{span:4},wrapperCol:{span:20},"validate-status":t.validate_status}},[r("a-tooltip",{attrs:{placement:"topLeft"}},[r("template",{slot:"title"},[r("span",[t._v("您隶属于多部门，请选择当前所在部门")])]),r("a-avatar",{staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"gold"}})],2),r("a-select",{class:{"valid-error":"error"==t.validate_status},staticStyle:{"margin-left":"10px",width:"80%"},attrs:{placeholder:"请选择登录部门"},model:{value:t.departSelected,callback:function(e){t.departSelected=e},expression:"departSelected"}},[r("a-icon",{attrs:{slot:"suffixIcon",type:"gold"},slot:"suffixIcon"}),t._l(t.departList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.orgCode}},[t._v("\n          "+t._s(e.departName)+"\n        ")])}))],2)],1)],1)],2)},n=[],i=r("0fea"),o=r("2b0e"),s=r("4360"),l=r("9fb0");function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var f={name:"DepartSelect",props:{title:{type:String,default:"部门选择",required:!1},closable:{type:Boolean,default:!1,required:!1},username:{type:String,default:"",required:!1}},watch:{username:function(t){t&&this.loadDepartList()}},data:function(){return{currTitle:this.title,visible:!1,departList:[],departSelected:"",validate_status:"",currDepartName:""}},created:function(){},methods:{loadDepartList:function(){var t=this;return new Promise((function(e){var r="/sys/user/getCurrentUserDeparts";t.currDepartName="",Object(i["e"])(r).then((function(r){if(r.success){var a=r.result.list,n=r.result.orgCode;if(a&&a.length>0){var i,o=c(a);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(s.orgCode==n){t.currDepartName=s.departName;break}}}catch(l){o.e(l)}finally{o.f()}}t.departSelected=n,t.departList=a,t.currDepartName&&(t.currTitle="部门切换（当前部门 : "+t.currDepartName+"）")}e()}))}))},close:function(){this.departClear()},departOk:function(){var t=this;if(!this.departSelected)return this.validate_status="error",!1;var e={orgCode:this.departSelected,username:this.username};Object(i["l"])("/sys/selectDepart",e).then((function(e){if(e.success){var r=e.result.userInfo;o["default"].ls.set(l["J"],r,6048e5),s["a"].commit("SET_INFO",r),t.departClear()}}))},show:function(){var t=this;this.loadDepartList().then((function(){t.visible=!0,(!t.departList||t.departList.length<=0)&&(t.$message.warning("您尚未设置部门信息!"),t.departClear())}))},departClear:function(){this.departList=[],this.departSelected="",this.visible=!1,this.validate_status="",this.currDepartName=""}}},p=f,v=(r("b0b5"),r("2877")),m=Object(v["a"])(p,a,n,!1,null,"03e0e7aa",null);e["default"]=m.exports}}]);