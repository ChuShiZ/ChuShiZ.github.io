(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-tools-HeaderNotice-vue~3b526a17"],{1488:function(t,e,n){"use strict";n("be90")},"1e26":function(t,e,n){},a4b0:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-popover",{staticClass:"header-notice-popover",attrs:{arrowPointAtCenter:!0,autoAdjustOverflow:!1,overlayStyle:{width:"300px",top:"50px",padding:"0"},overlayClassName:"header-notice-wrapper",placement:"bottomRight",trigger:"click"},model:{value:t.popoverVisible,callback:function(e){t.popoverVisible=e},expression:"popoverVisible"}},[n("template",{slot:"content"},[n("a-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.loadding,expression:"loadding"}],staticClass:"infoListTab",attrs:{size:"small"}},[n("a-tab-pane",{key:"1",attrs:{tab:t.msgTitle}},[n("a-list",{staticClass:"noticeList",attrs:{"data-source":t.announcement},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return[n("a-list-item",[n("div",{staticClass:"noticeItem",on:{click:function(n){return t.showAnnouncement(e)}}},[n("div",{staticClass:"noticeItemLeft"},[n("p",{staticClass:"noticeItemTitle"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.titile)+"\n                      ")]),n("div",{staticClass:"noticeItemFooter"},[n("span",[t._v(t._s(e.createTime)+" 发布")]),n("div",{staticClass:"noticeItemRight"},["L"===e.priority?n("a-tag",{attrs:{color:"blue"}},[t._v("一般消息")]):"M"===e.priority?n("a-tag",{attrs:{color:"orange"}},[t._v("重要消息 ")]):"H"===e.priority?n("a-tag",{attrs:{color:"red"}},[t._v("紧急消息")]):t._e()],1)])])])])]}}])})],1)],1),n("div",{staticStyle:{"margin-top":"5px","text-align":"center"}},[n("a-button",{attrs:{block:"",type:"dashed"},on:{click:function(e){return t.toMyAnnouncement()}}},[t._v("查看更多")])],1)],1),n("span",{staticClass:"header-notice",on:{click:t.fetchNotice}},[n("a-badge",{attrs:{count:t.msgTotal}},[n("a-icon",{staticStyle:{"font-size":"20px",padding:"4px"},attrs:{type:"bell"}})],1)],1)],2),n("show-announcement",{ref:"ShowAnnouncement"}),n("dynamic-notice",{ref:"showDynamNotice",attrs:{formData:t.formData,path:t.openPath}}),n("sys-search-modal",{ref:"sysSearchModal"})],1)},o=[],i=n("c4f2"),a=i["a"],c=(n("ab24"),n("1488"),n("2877")),_=Object(c["a"])(a,s,o,!1,null,"46ac9b5b",null);e["default"]=_.exports},ab24:function(t,e,n){"use strict";n("1e26")},be90:function(t,e,n){},c4f2:function(module,__webpack_exports__,__webpack_require__){"use strict";var _api_manage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("0fea"),_ShowAnnouncement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2bd9"),_store___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4360"),_DynamicNotice__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4eaf"),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("2b0e"),_store_mutation_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("9fb0"),_views_sysSearchPermissions_modules_SysSearchModal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("58d7");__webpack_exports__["a"]={name:"HeaderNotice",components:{DynamicNotice:_DynamicNotice__WEBPACK_IMPORTED_MODULE_3__["default"],ShowAnnouncement:_ShowAnnouncement__WEBPACK_IMPORTED_MODULE_1__["default"],SysSearchModal:_views_sysSearchPermissions_modules_SysSearchModal__WEBPACK_IMPORTED_MODULE_6__["default"]},data:function(){return{loadding:!1,url:{listCementByUser:"/sys/annountCement/listByUser",editCementSend:"/sys/sysAnnouncementSend/editByAnntIdAndUserId",queryById:"/sys/annountCement/queryById"},announcement:[],msgCount:"0",msgTitle:"消息(0)",stopTimer:!1,websock:null,lockReconnect:!1,heartCheck:null,formData:{},openPath:"",doingFlag:0,popoverVisible:!1}},computed:{msgTotal:function(){return parseInt(this.msgCount)}},mounted:function(){var t=this;this.$bus.$on("showPermission",(function(e){t.$refs.sysSearchModal.visible=!0,t.$refs.sysSearchModal.permissionId=e})),this.loadData(),this.$bus.$on("updateHeaderNotice",this.loadData)},destroyed:function(){this.websock.close(),this.$bus.$off("updateHeaderNotice",this.loadData)},methods:{timerFun:function(){var t=this;this.stopTimer=!1;var e=setInterval((function(){t.stopTimer?clearInterval(e):t.loadData()}),6e3)},loadData:function(){var t=this;try{Object(_api_manage__WEBPACK_IMPORTED_MODULE_0__["e"])(this.url.listCementByUser).then((function(e){e.success&&(t.announcement=e.result.anntMsgList,t.msgCount=e.result.anntMsgTotal,t.msgTitle="消息("+e.result.anntMsgTotal+")")})).catch((function(e){t.stopTimer=!0}))}catch(e){this.stopTimer=!0}},fetchNotice:function(){var t=this;this.loadding?this.loadding=!1:(this.loadding=!0,setTimeout((function(){t.loadding=!1}),200))},showAnnouncement:function(t){var e=this;Object(_api_manage__WEBPACK_IMPORTED_MODULE_0__["l"])(this.url.editCementSend,{anntId:t.id}).then((function(t){t.success&&(e.loadData(),e.$bus.$emit("AnalysisGetList"),e.$store.dispatch("setTodoNum"))})),this.popoverVisible=!1,"component"===t.openType?(this.openPath=t.openPage,this.formData={id:t.busId},this.$refs.showDynamNotice.detail(t.openPage)):this.$refs.ShowAnnouncement.detail(t)},toMyAnnouncement:function(){this.popoverVisible=!1,this.$router.push({path:"/isps/userAnnouncement"})},initWebSocket:function(){var t=_store___WEBPACK_IMPORTED_MODULE_2__["a"].getters.userInfo.id,e=window._CONFIG["domianURL"].replace("https://","wss://").replace("http://","ws://")+"/websocket/"+t;this.websock=new WebSocket(e),this.websock.onopen=this.websocketOnopen,this.websock.onerror=this.websocketOnerror,this.websock.onmessage=this.websocketOnmessage,this.websock.onclose=this.websocketOnclose},websocketOnopen:function(){},websocketOnerror:function(t){this.reconnect()},websocketOnmessage:function websocketOnmessage(e){var _this6=this,data=eval("("+e.data+")");"topic"===data.cmd?this.loadData():"user"===data.cmd?(this.doingFlag++,setTimeout((function(){_this6.doingFlag--,0===_this6.doingFlag&&vue__WEBPACK_IMPORTED_MODULE_4__["default"].ls.get(_store_mutation_types__WEBPACK_IMPORTED_MODULE_5__["a"])&&(_this6.loadData(),_this6.$store.dispatch("setTodoNum"),_this6.$bus.$emit("AnalysisGetList"),_this6.doingFlag=0)}),2e3)):"more"===data.cmd&&this.$bus.$emit("refreshDataFiling")},websocketOnclose:function(){},websocketSend:function(t){try{this.websock.send(t)}catch(e){}},reconnect:function(){var t=this;t.lockReconnect||(t.lockReconnect=!0,setTimeout((function(){t.initWebSocket(),t.lockReconnect=!1}),5e3))},heartCheckFun:function(){var t=this;t.heartCheck={timeout:2e4,timeoutObj:null,serverTimeoutObj:null,reset:function(){return clearTimeout(this.timeoutObj),this},start:function(){this.timeoutObj=setTimeout((function(){t.websocketSend("HeartBeat")}),this.timeout)}}},showDetail:function(t,e){var n=this;this.$notification.close(t);var s=e.msgId;Object(_api_manage__WEBPACK_IMPORTED_MODULE_0__["e"])(this.url.queryById,{id:s}).then((function(t){if(t.success){var e=t.result;n.showAnnouncement(e)}}))}}}}}]);