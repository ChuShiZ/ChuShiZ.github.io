(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-page-GlobalHeader-vue~0cb1574f","components-tools-Logo-vue~d9747fcc"],{"08f0":function(e,t,n){},"300b":function(e,t,n){},"45e9":function(e,t,n){"use strict";n("300b")},"45fe":function(e,t,n){"use strict";n("08f0")},"630d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.headerBarFixed?e._e():n("a-layout-header",{class:[e.fixedHeader&&"ant-header-fixedHeader",e.sidebarOpened?"ant-header-side-opened":"ant-header-side-closed"],style:{padding:"0"}},["sidemenu"===e.mode||"careMode"===e.mode?n("div",{staticClass:"header childShrink",class:e.theme},[n("a-space",{staticClass:"childShrink headerLeft"},[n("logo",{attrs:{title:e.logoText?e.logoText:"维修资金平台"}}),n("div",{staticClass:"headerLeftAction childShrink"},["mobile"===e.device?n("a-icon",{staticClass:"trigger",attrs:{title:"左侧菜单",type:e.collapsed?"menu-fold":"menu-unfold"},on:{click:e.toggle}}):n("a-icon",{staticClass:"trigger",attrs:{title:"左侧菜单",type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.toggle}}),e.is_wuye_system?e._e():n("a-badge",{attrs:{"show-zero":!1,count:e.todoTotal,offset:[14,2]},on:{click:e.goToTodoList}},[n("span",{staticClass:"cursorPointer"},[e._v("待办事项")])])],1)],1),e.searchVisible&&!e.is_wuye_system?n("shortcut-operation",{ref:"shortcutOperation",on:{showSearch:e.showSearch}}):e._e(),n("user-menu",{attrs:{theme:e.theme,showIcon:e.searchVisible},on:{showSearch:e.showSearch}})],1):"topLeftMenu"===e.mode?n("div",{class:["top-nav-header-index",e.layoutMode,e.theme]},[n("div",{staticClass:"header-index-wide"},[n("div",{staticClass:"header-index-left childShrink",style:e.topMenuStyle.headerIndexLeft},[n("logo",{staticStyle:{"flex-shrink":"0"},attrs:{title:e.logoText?e.logoText:"维修资金平台","show-title":"mobile"!==e.device}}),"mobile"!==e.device?n("div",{staticStyle:{flex:"1",width:"0",display:"flex","align-items":"center"}},[n("div",{staticStyle:{overflow:"hidden",width:"0"},style:{flex:e.searchVisible?0:1}},[n("a-menu",{staticClass:"topLeftMenuLayoutTopMenu",attrs:{mode:"horizontal"},on:{click:e.noChildMenuSelect}},e._l(e.noChildMenus,(function(t){return n("a-menu-item",{key:t.id,class:{currentMenu:e.parentMenuObj&&e.parentMenuObj.id===t.id}},[e._v("\n                  "+e._s(t.meta.title)+"\n                ")])})),1)],1),e.is_wuye_system?e._e():n("shortcut-operation",{ref:"shortcutOperation",staticStyle:{flex:"0",overflow:"hidden",transition:"0.3s"},style:{flex:e.searchVisible?1:0},on:{showSearch:e.showSearch}})],1):n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-fold":"menu-unfold"},on:{click:e.toggle}})],1),n("user-menu",{staticClass:"header-index-right",style:e.topMenuStyle.headerIndexRight,attrs:{theme:e.theme},on:{showSearch:e.showSearch}})],1)]):"newSidemenu"===e.mode?n("div",{class:["header","header-"+e.mode,e.theme]},[n("div",{staticClass:"headerLeft headerLeft_newLayout"},["mobile"===e.device?n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-fold":"menu-unfold"},on:{click:e.toggle}}):n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.toggle}}),e.is_wuye_system?e._e():n("a-badge",{attrs:{"show-zero":!1,count:e.todoTotal,offset:[14,2]},on:{click:e.goToTodoList}},[n("span",{staticClass:"cursorPointer"},[e._v("待办事项")])])],1),e.searchVisible&&!e.is_wuye_system?n("shortcut-operation",{ref:"shortcutOperation",on:{showSearch:e.showSearch}}):e._e(),n("user-menu",{attrs:{theme:e.theme,mode:"newSidemenu",showIcon:e.searchVisible},on:{showSearch:e.showSearch}})],1):n("div",{class:["top-nav-header-index",e.theme]},[n("div",{staticClass:"header-index-wide"},[n("div",{staticClass:"header-index-left childShrink",style:e.topMenuStyle.headerIndexLeft},[n("logo",{staticStyle:{"flex-shrink":"0"},attrs:{title:e.logoText?e.logoText:"维修资金平台","show-title":"mobile"!==e.device}}),"mobile"!==e.device?n("div",{staticStyle:{flex:"auto",width:"0"}},[n("s-menu",{attrs:{mode:"horizontal",menu:e.menus,theme:e.theme},on:{updateMenuTitle:e.handleUpdateMenuTitle}})],1):n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-fold":"menu-unfold"},on:{click:e.toggle}})],1),n("user-menu",{staticClass:"header-index-right",style:e.topMenuStyle.headerIndexRight,attrs:{theme:e.theme}})],1)]),e.showGuideButton?n("div",{ref:"guidance",staticClass:"guide-wrapper",style:e.getGuideStyle,on:{mousedown:e.guideMouseDown}},[n("a-tooltip",{attrs:{placement:"left"}},[n("template",{slot:"title"},[e._v("\n          功能引导\n        ")]),n("a-button",{attrs:{type:"primary",shape:"circle",icon:"question-circle"},on:{click:function(t){return t.stopPropagation(),e.onGuideButtonClick.apply(null,arguments)}}})],2)],1):e._e()])},i=[],r=n("8d4db"),s=n("955f"),a=n("a250"),l=n("5719"),u=n("ac0d"),d=n("0fea"),c=n("2b0e"),h={name:"GlobalHeader",components:{UserMenu:r["default"],SMenu:s["a"],Logo:a["default"],ShortcutOperation:l["default"]},mixins:[u["a"]],props:{mode:{type:String,default:"sidemenu"},menus:{type:Array,required:!0},theme:{type:String,required:!1,default:"dark"},collapsed:{type:Boolean,required:!1,default:!1},device:{type:String,required:!1,default:"desktop"}},computed:{parentMenuObj:function(){return this.$store.state.permission.parentMenuObj},is_wuye_system:function(){return this.$store.state.app.is_wuye_system}},data:function(){return{headerBarFixed:!1,topMenuStyle:{headerIndexLeft:{},topNavHeader:{},headerIndexRight:{},topSmenuStyle:{}},chatStatus:"",todoCount:0,url:{todoList:"/act/task/todo"},searchVisible:"topLeftMenu"===this.mode,logoText:"",noChildMenus:[]}},watch:{device:function(){"topmenu"===this.mode&&this.buildTopMenuStyle()},mode:function(e){"topmenu"===e&&this.buildTopMenuStyle()},layoutMode:{immediate:!0,handler:function(e){"topLeftMenu"===e&&this.initNoChildMenu()}}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"topmenu"===this.mode&&this.buildTopMenuStyle(),this.initTodo(),window._H5_INFO.systemVersion?this.logoText=window._H5_INFO.logoText+window._H5_INFO.systemVersion:this.logoText=window._H5_INFO.logoText},methods:{initNoChildMenu:function(){var e=this;this.noChildMenus=[],this.menus.forEach((function(t){t.hidden||e.noChildMenus.push(t)}))},noChildMenuSelect:function(e){var t=e.key;if(this.parentMenuObj&&this.parentMenuObj.length>0&&this.parentMenuObj[0].id===t)this.$bus.$emit("topLeftMenuLayoutTopMenuSelect",[this.noChildMenus[0]]),this.$store.commit("SET_PARENT_MENU",[this.noChildMenus[0]]);else{var n=this.noChildMenus.find((function(e){return e.id===t}));n&&(this.$bus.$emit("topLeftMenuLayoutTopMenuSelect",[n]),this.$store.commit("SET_PARENT_MENU",[n]))}},onGuideButtonClick:function(){var e=this;setTimeout((function(){var t=(c["default"].ls.get("guideSteps")||{})[e.$route.path];if(t){var n=new Driver;n.defineSteps(JSON.parse(t)),n.start()}}),10)},getPictureInfo:function(){var e=this;Object(d["e"])("/base/pictureConfigInfo/pictureInit").then((function(t){t.success&&t.result&&t.result.logoText&&(t.result.systemVersion?e.logoText=t.result.logoText+t.result.systemVersion:e.logoText=t.result.logoText+"V9.0")}))},initTodo:function(){this.$store.dispatch("setTodoNum")},handleScroll:function(){if(this.autoHideHeader){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.headerBarFixed=e>100}else this.headerBarFixed=!1},toggle:function(){this.$emit("toggle")},buildTopMenuStyle:function(){if("topmenu"===this.mode)if("mobile"===this.device)this.topMenuStyle.topNavHeader={},this.topMenuStyle.topSmenuStyle={},this.topMenuStyle.headerIndexRight={},this.topMenuStyle.headerIndexLeft={};else{var e="360px";this.topMenuStyle.topNavHeader={"min-width":"200px"},this.topMenuStyle.topSmenuStyle={width:"calc(100% - 200px)"},this.topMenuStyle.headerIndexRight={"min-width":e},this.topMenuStyle.headerIndexLeft={width:"calc(100% - ".concat(e,")")}}},handleUpdateMenuTitle:function(e){this.$emit("updateMenuTitle",e)},showSearch:function(){this.searchVisible=!this.searchVisible},goToTodoList:function(){this.$router.push("/activiti/TodoList")},guideMouseDown:function(e){var t,n=this.$refs.guidance;n.classList.add("mouseDownGuide"),n.style.left="calc(100% - 10px)",n.style.borderRadius="50%";var o=e||window.event,i=o.clientY-n.offsetTop;"undefined"!==typeof n.setCapture&&n.setCapture(),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),document.onmousemove=function(e){var t=e||window.event,o=t.clientY-i;o<0?o=0:o>window.innerHeight-n.offsetHeight&&(o=window.innerHeight-n.offsetHeight),n.style.top=o+"px",c["default"].ls.set("guideYSite",{x:o+"px",y:"right"})},document.onmouseup=function(){"left"===t?(n.style.transform="translateY(-50%) translateX(0)",n.style.left="0px",n.style.borderRadius="0 18px 18px 0"):(n.style.transform="translateY(-50%) translateX(-100%)",n.style.left="100%",n.style.borderRadius="18px 0 0 18px"),document.onmousemove=void 0,"undefined"!==typeof n.releaseCapture&&n.releaseCapture()}},getGuideStyle:function(){var e,t=c["default"].ls.get("guideYSite")?c["default"].ls.get("guideYSite").x:"80%",n=c["default"].ls.get("guideYSite")?c["default"].ls.get("guideYSite").direction:"right";return e="right"===n?{top:t,left:"100%",transform:"translateY(-50%) translateX(-100%)"}:{top:t,left:"0",transform:"translateY(-50%) translateX(0)"},e}}},f=h,p=(n("45fe"),n("2877")),m=Object(p["a"])(f,o,i,!1,null,"4f3b2488",null);t["default"]=m.exports},"955f":function(e,t,n){"use strict";var o=n("2638"),i=n.n(o),r=n("55f1"),s=n("0c63"),a=n("2f62");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}function d(e,t){if(e){if("string"==typeof e)return c(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=y(e,"string");return"symbol"==l(t)?t:t+""}function y(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var g=r["a"].Item,v=r["a"].SubMenu;t["a"]={name:"SMenu",props:{menu:{type:Array,required:!0},theme:{type:String,required:!1,default:"dark"},mode:{type:String,required:!1,default:"inline"},collapsed:{type:Boolean,required:!1,default:!1},inlineIndent:{type:Number,default:24}},inject:{pageList:{default:function(){return[]}}},data:function(){return{openKeys:[],selectedKeys:[],cachedOpenKeys:[]}},computed:f(f({},Object(a["c"])(["isKeepAlive"])),{},{rootSubmenuKeys:function(e){var t=[];return e.menu.forEach((function(e){return t.push(e.path)})),t}}),mounted:function(){this.updateMenu()},watch:{collapsed:function(e){e?(this.cachedOpenKeys=this.openKeys.concat(),this.openKeys=[]):this.openKeys=this.cachedOpenKeys},$route:function(){this.updateMenu()}},methods:{onOpenChange:function(e){var t=this;if("horizontal"!==this.mode){var n=e.find((function(e){return!t.openKeys.includes(e)}));this.rootSubmenuKeys.includes(n)?this.openKeys=n?[n]:[]:this.openKeys=e}else this.openKeys=e},updateMenu:function(){var e=this;setTimeout((function(){var t=e.$route.matched.concat(),n=e.$route.params._FromRoute,o=e.$route.meta,i=o.hidden,r=o.routePath;e.$route.meta.hideMenu&&n&&"首页"!==e.$route.meta.title?e.selectedKeys=[n.path]:t.length>=3&&i?(t.pop(),e.selectedKeys=[t[t.length-1].path]):e.selectedKeys=[t.pop().path];var s=[];if("inline"===e.mode){var a=[];e.$route.meta.hideMenu&&n?e.fullOpenKeys(e.menu,e.isKeepAlive&&n.meta.routePath||n.fullPath,a):e.fullOpenKeys(e.menu,e.isKeepAlive&&r||e.$route.fullPath,a),a.length>0&&(s=a.reverse())}if(e.selectedKeys[0].includes(":")){var l=e.isKeepAlive&&r||e.$route.fullPath;e.selectedKeys=[l];var u=[];e.fullOpenKeys(e.menu,l,u),u.length>0&&(s=u.reverse())}(!e.selectedKeys||e.selectedKeys[0].indexOf(":")<0)&&(e.collapsed?e.cachedOpenKeys=s:e.openKeys=s)}),60)},fullOpenKeys:function(e,t,n){var o,i=u(e);try{for(i.s();!(o=i.n()).done;){var r=o.value;if(r.path===t)return n.push(r.path),this.$emit("updateMenuTitle",r),!0;if(Array.isArray(r.children)&&this.fullOpenKeys(r.children,t,n))return n.push(r.path),!0}}catch(s){i.e(s)}finally{i.f()}},renderItem:function(e){return e.hidden||"首页"===e.meta.title?null:e.children&&!e.alwaysShow?this.renderSubMenu(e):this.renderMenuItem(e)},renderMenuItem:function(e){var t=this.$createElement,n=e.meta.target||null,o=n?"a":"router-link",r={to:{name:e.name}};e.route&&"0"===e.route&&(r={to:{path:e.path}});var s={href:e.path,target:e.meta.target,style:"overflow: hidden;text-overflow: ellipsis",title:e.meta.title};return e.children&&e.alwaysShow&&e.children.forEach((function(e){e.meta=Object.assign(e.meta,{hidden:!0})})),t(g,i()([{},{key:e.path}]),[t(o,{props:f({},r),attrs:f({},s)},[this.renderIcon(e.meta.icon),t("span",[e.meta.title])])])},renderSubMenu:function(e){var t=this,n=this.$createElement,o=[];return e.alwaysShow||e.children.forEach((function(e){return o.push(t.renderItem(e))})),n(v,i()([{},{key:e.path}]),[n("span",{slot:"title"},[this.renderIcon(e.meta.icon),n("span",[e.meta.title])]),o])},renderIcon:function(e){var t=this.$createElement;if("none"===e||void 0===e)return null;var n={};return"object"===l(e)?n.component=e:n.type=e,t(s["a"],{props:f({},n)})}},render:function(){var e=this,t=arguments[0],n=this.mode,o=this.theme,i=this.menu,s={mode:n,theme:o,openKeys:this.openKeys,inlineIndent:this.inlineIndent,defaultSelectedKeys:this.selectedKeys},a={select:function(t){e.selectedKeys=t.selectedKeys,e.$emit("select",t)},openChange:this.onOpenChange},l=i.map((function(t){return t.hidden?null:e.renderItem(t)}));return t(r["a"],{props:f({},s),on:f({},a),model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t}}},[l])}}},a250:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("router-link",{staticStyle:{display:"flex","align-items":"center",height:"59px",gap:"6px"},attrs:{to:e.routerLinkTo}},[n("svg-icon",{staticClass:"logo_icon",attrs:{url:e.logo,size:"32",alt:e.logoText}}),e.hideTitle?e._e():n("h1",{staticClass:"logoTitle",style:"sidemenu"===e.layoutMode||"careMode"===e.layoutMode||"topLeftMenu"===e.layoutMode?"dark"===e.navTheme?"color:#333":"color: #fff":"dark"===e.navTheme?"color:#fff":"color: #333"},[n("span",[e._v(e._s(e.logoText))])])],1)],1)},i=[],r=n("2b0e"),s=n("ac0d"),a=n("0fea"),l=n("f337"),u=n("9fb0"),d={name:"Logo",components:{SvgIcon:l["default"]},mixins:[s["a"]],props:{title:{type:String,default:"Jeecg-Boot Pro",required:!1},showTitle:{type:Boolean,default:!0,required:!1},routerLinkTo:{type:Object,default:function(){return{name:"dashboard"}}}},computed:{hideTitle:function(){return"18"==this.font&&this.pageWidth<1600||!this.showTitle}},data:function(){return{logo:n("38f5"),logoText:window._H5_INFO.logoText,font:r["default"].ls.get(u["w"]),pageWidth:document.documentElement.clientWidth}},watch:{title:{handler:function(e){this.logoText=e},immediate:!0}},created:function(){this.logo=window._H5_INFO.logo},mounted:function(){var e=this;window.onresize=function(){return function(){e.pageWidth=document.documentElement.clientWidth}()},this.$bus.$on("loginConfigOk",(function(t){e.logoText=t.logoText}))},beforeDestroy:function(){this.$bus.$off("loginConfigOk",this)},methods:{getPictureInfo:function(){var e=this;Object(a["e"])("/base/pictureConfigInfo/pictureInit").then((function(t){t.success&&t.result&&t.result.logo&&(e.logo=t.result.logo)}))}}},c=d,h=(n("45e9"),n("2877")),f=Object(h["a"])(c,o,i,!1,null,"304943b4",null);t["default"]=f.exports}}]);