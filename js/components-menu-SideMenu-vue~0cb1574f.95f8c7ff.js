(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-menu-SideMenu-vue~0cb1574f","components-tools-Logo-vue~d9747fcc"],{"300b":function(e,t,n){},"45e9":function(e,t,n){"use strict";n("300b")},"5eb1":function(e,t,n){},"955f":function(e,t,n){"use strict";var r=n("2638"),o=n.n(r),i=n("55f1"),u=n("0c63"),a=n("2f62");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function c(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=y(e,"string");return"symbol"==s(t)?t:t+""}function y(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var v=i["a"].Item,b=i["a"].SubMenu;t["a"]={name:"SMenu",props:{menu:{type:Array,required:!0},theme:{type:String,required:!1,default:"dark"},mode:{type:String,required:!1,default:"inline"},collapsed:{type:Boolean,required:!1,default:!1},inlineIndent:{type:Number,default:24}},inject:{pageList:{default:function(){return[]}}},data:function(){return{openKeys:[],selectedKeys:[],cachedOpenKeys:[]}},computed:p(p({},Object(a["c"])(["isKeepAlive"])),{},{rootSubmenuKeys:function(e){var t=[];return e.menu.forEach((function(e){return t.push(e.path)})),t}}),mounted:function(){this.updateMenu()},watch:{collapsed:function(e){e?(this.cachedOpenKeys=this.openKeys.concat(),this.openKeys=[]):this.openKeys=this.cachedOpenKeys},$route:function(){this.updateMenu()}},methods:{onOpenChange:function(e){var t=this;if("horizontal"!==this.mode){var n=e.find((function(e){return!t.openKeys.includes(e)}));this.rootSubmenuKeys.includes(n)?this.openKeys=n?[n]:[]:this.openKeys=e}else this.openKeys=e},updateMenu:function(){var e=this;setTimeout((function(){var t=e.$route.matched.concat(),n=e.$route.params._FromRoute,r=e.$route.meta,o=r.hidden,i=r.routePath;e.$route.meta.hideMenu&&n&&"首页"!==e.$route.meta.title?e.selectedKeys=[n.path]:t.length>=3&&o?(t.pop(),e.selectedKeys=[t[t.length-1].path]):e.selectedKeys=[t.pop().path];var u=[];if("inline"===e.mode){var a=[];e.$route.meta.hideMenu&&n?e.fullOpenKeys(e.menu,e.isKeepAlive&&n.meta.routePath||n.fullPath,a):e.fullOpenKeys(e.menu,e.isKeepAlive&&i||e.$route.fullPath,a),a.length>0&&(u=a.reverse())}if(e.selectedKeys[0].includes(":")){var s=e.isKeepAlive&&i||e.$route.fullPath;e.selectedKeys=[s];var l=[];e.fullOpenKeys(e.menu,s,l),l.length>0&&(u=l.reverse())}(!e.selectedKeys||e.selectedKeys[0].indexOf(":")<0)&&(e.collapsed?e.cachedOpenKeys=u:e.openKeys=u)}),60)},fullOpenKeys:function(e,t,n){var r,o=l(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.path===t)return n.push(i.path),this.$emit("updateMenuTitle",i),!0;if(Array.isArray(i.children)&&this.fullOpenKeys(i.children,t,n))return n.push(i.path),!0}}catch(u){o.e(u)}finally{o.f()}},renderItem:function(e){return e.hidden||"首页"===e.meta.title?null:e.children&&!e.alwaysShow?this.renderSubMenu(e):this.renderMenuItem(e)},renderMenuItem:function(e){var t=this.$createElement,n=e.meta.target||null,r=n?"a":"router-link",i={to:{name:e.name}};e.route&&"0"===e.route&&(i={to:{path:e.path}});var u={href:e.path,target:e.meta.target,style:"overflow: hidden;text-overflow: ellipsis",title:e.meta.title};return e.children&&e.alwaysShow&&e.children.forEach((function(e){e.meta=Object.assign(e.meta,{hidden:!0})})),t(v,o()([{},{key:e.path}]),[t(r,{props:p({},i),attrs:p({},u)},[this.renderIcon(e.meta.icon),t("span",[e.meta.title])])])},renderSubMenu:function(e){var t=this,n=this.$createElement,r=[];return e.alwaysShow||e.children.forEach((function(e){return r.push(t.renderItem(e))})),n(b,o()([{},{key:e.path}]),[n("span",{slot:"title"},[this.renderIcon(e.meta.icon),n("span",[e.meta.title])]),r])},renderIcon:function(e){var t=this.$createElement;if("none"===e||void 0===e)return null;var n={};return"object"===s(e)?n.component=e:n.type=e,t(u["a"],{props:p({},n)})}},render:function(){var e=this,t=arguments[0],n=this.mode,r=this.theme,o=this.menu,u={mode:n,theme:r,openKeys:this.openKeys,inlineIndent:this.inlineIndent,defaultSelectedKeys:this.selectedKeys},a={select:function(t){e.selectedKeys=t.selectedKeys,e.$emit("select",t)},openChange:this.onOpenChange},s=o.map((function(t){return t.hidden?null:e.renderItem(t)}));return t(i["a"],{props:p({},u),on:p({},a),model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t}}},[s])}}},a250:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("router-link",{staticStyle:{display:"flex","align-items":"center",height:"59px",gap:"6px"},attrs:{to:e.routerLinkTo}},[n("svg-icon",{staticClass:"logo_icon",attrs:{url:e.logo,size:"32",alt:e.logoText}}),e.hideTitle?e._e():n("h1",{staticClass:"logoTitle",style:"sidemenu"===e.layoutMode||"careMode"===e.layoutMode||"topLeftMenu"===e.layoutMode?"dark"===e.navTheme?"color:#333":"color: #fff":"dark"===e.navTheme?"color:#fff":"color: #333"},[n("span",[e._v(e._s(e.logoText))])])],1)],1)},o=[],i=n("2b0e"),u=n("ac0d"),a=n("0fea"),s=n("f337"),l=n("9fb0"),c={name:"Logo",components:{SvgIcon:s["default"]},mixins:[u["a"]],props:{title:{type:String,default:"Jeecg-Boot Pro",required:!1},showTitle:{type:Boolean,default:!0,required:!1},routerLinkTo:{type:Object,default:function(){return{name:"dashboard"}}}},computed:{hideTitle:function(){return"18"==this.font&&this.pageWidth<1600||!this.showTitle}},data:function(){return{logo:n("38f5"),logoText:window._H5_INFO.logoText,font:i["default"].ls.get(l["w"]),pageWidth:document.documentElement.clientWidth}},watch:{title:{handler:function(e){this.logoText=e},immediate:!0}},created:function(){this.logo=window._H5_INFO.logo},mounted:function(){var e=this;window.onresize=function(){return function(){e.pageWidth=document.documentElement.clientWidth}()},this.$bus.$on("loginConfigOk",(function(t){e.logoText=t.logoText}))},beforeDestroy:function(){this.$bus.$off("loginConfigOk",this)},methods:{getPictureInfo:function(){var e=this;Object(a["e"])("/base/pictureConfigInfo/pictureInit").then((function(t){t.success&&t.result&&t.result.logo&&(e.logo=t.result.logo)}))}}},h=c,f=(n("45e9"),n("2877")),p=Object(f["a"])(h,r,o,!1,null,"304943b4",null);t["default"]=p.exports},c4f8:function(e,t,n){},d418:function(e,t,n){"use strict";n("5eb1")},e5f9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout-sider",{class:["sider",e.isDesktop()?null:"shadow",e.theme,e.fixSiderbar?"ant-fixed-sidemenu":null],attrs:{width:"careMode"!==e.layoutMode?"200px":"240px",collapsible:e.collapsible,trigger:null},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[e.isDesktop()&&"topLeftMenu"!==e.layoutMode?r("div",{staticStyle:{height:"40px"}},[e.collapsed?r("div",{staticClass:"collapsedSearch"},[r("a-popover",{attrs:{getPopupContainer:function(e){return e.parentNode},overlayStyle:{width:"700px"},placement:"rightTop","arrow-point-at-center":""},scopedSlots:e._u([{key:"content",fn:function(){return[r("a-input",{staticClass:"inputSearch",attrs:{readOnly:"",placeholder:"搜索菜单"},on:{click:function(){return e.openMenuSearchModal(!0)}}})]},proxy:!0}],null,!1,3579251961)},[e.collapsed?r("a-icon",{staticClass:"searchIcon",attrs:{type:"search"},on:{mouseover:e.menusover}}):e._e()],1)],1):r("div",{staticClass:"notCollapsedSearch"},[r("a-input",{staticClass:"inputSearch",attrs:{placeholder:"搜索菜单",readOnly:""},on:{click:function(){return e.openMenuSearchModal(!0)}}})],1)]):e._e(),"topLeftMenu"===e.layoutMode?r("a-menu",{staticClass:"sideMenuList",style:e.smenuStyle,attrs:{openKeys:e.topLeftMenuOpenKeys,mode:e.mode},on:{select:e.noChildMenuSelect,"update:openKeys":function(t){e.topLeftMenuOpenKeys=t},"update:open-keys":function(t){e.topLeftMenuOpenKeys=t}},model:{value:e.noChildMenuSelectKeys,callback:function(t){e.noChildMenuSelectKeys=t},expression:"noChildMenuSelectKeys"}},e._l(e.topLeftMenuLayoutTopMenuSelect,(function(t){return r("a-sub-menu",{key:t.id},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))]),e._l(t.children,(function(t){return[t.children&&t.children.length>0?r("a-sub-menu",{key:t.id},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))]),e._l(t.children,(function(t){return[r("a-menu-item",{key:t.path},[r("router-link",{attrs:{to:{path:t.path}}},[e._v("\n                "+e._s(t.meta.title)+"\n              ")])],1)]}))],2):r("a-menu-item",{key:t.path},[r("router-link",{attrs:{to:{path:t.path}}},[e._v("\n            "+e._s(t.meta.title)+"\n          ")])],1)]}))],2)})),1):r("s-menu",{staticClass:"sideMenuList",staticStyle:{"margin-top":"6px"},style:e.smenuStyle,attrs:{collapsed:e.collapsed,menu:e.menus,inlineIndent:18,theme:e.theme,mode:e.mode},on:{select:e.onSelect,updateMenuTitle:e.onUpdateMenuTitle}}),"newSidemenu"!==e.layout?r("img",{class:{weitu:e.collapsed},staticStyle:{position:"fixed",bottom:"0","max-width":"200px","z-index":"1","pointer-events":"none"},attrs:{src:n("2a3a"),alt:"变更"}}):e._e(),r("a-modal",{attrs:{"body-style":{padding:"10px"},width:"800px",closable:!1},on:{close:function(){return e.openMenuSearchModal(!1)}},scopedSlots:e._u([{key:"footer",fn:function(){return[r("div",{staticClass:"menuSearchModalFooter"},[r("span",{staticClass:"keyboardBtn"},[r("a-icon",{attrs:{type:"enter"}})],1),e._v(" 确认\n          \n        "),r("span",{staticClass:"keyboardBtn"},[r("a-icon",{attrs:{type:"arrow-up"}})],1),e._v(" \n        "),r("span",{staticClass:"keyboardBtn"},[r("a-icon",{attrs:{type:"arrow-down"}})],1),e._v(" 切换\n          \n        "),r("span",{staticClass:"keyboardBtn"},[e._v("ESC")]),e._v(" 关闭\n      ")])]},proxy:!0}]),model:{value:e.menuSearchVisible,callback:function(t){e.menuSearchVisible=t},expression:"menuSearchVisible"}},[r("div",{staticClass:"menuSearchModalBody"},[r("a-input",{ref:"menuSearchInput",attrs:{placeholder:"搜索",allowClear:"",size:"large"},on:{change:e.menuSearch},model:{value:e.menuSearchValue,callback:function(t){e.menuSearchValue=t},expression:"menuSearchValue"}},[r("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1),r("div",{staticClass:"menuSearchResultList"},[e.menuSearchResult&&e.menuSearchResult.length>0?e._l(e.menuSearchResult,(function(t,n){return r("div",{key:"menuSearchResult-"+n,staticClass:"menuSearchResultItem",class:{active:e.activeSearchMenuIndex===n},on:{click:function(n){return e.gotoPage(t.path)},mouseenter:function(){return e.activeSearchMenuIndex=n}}},[r("a-icon",{attrs:{type:"container"}}),r("div",{staticClass:"menuSearchResultTitle"},[e._v("\n              "+e._s(t.routeList.map((function(e){return e.title})).join("  >  "))+"\n            ")]),r("a-icon",{attrs:{type:"enter"}})],1)})):[r("div",{staticClass:"menuSearchEmpty"},[e._v("\n            暂无搜索结果\n          ")])]],2)],1)])],1)},o=[],i=n("1fca"),u=n("a250"),a=n("955f"),s=n("ac0d"),l=n("0fea"),c=n("2f62");function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function p(e){return v(e)||y(e)||m(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function y(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function v(e){if(Array.isArray(e))return b(e)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=O(e,"string");return"symbol"==h(t)?t:t+""}function O(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var x={name:"SideMenu",components:{ALayoutSider:i["a"],Logo:u["default"],SMenu:a["a"]},mixins:[s["a"],s["b"]],props:{mode:{type:String,required:!1,default:"inline"},theme:{type:String,required:!1,default:"dark"},collapsible:{type:Boolean,required:!1,default:!1},collapsed:{type:Boolean,required:!1,default:!1},menus:{type:Array,required:!0},layout:{type:String,required:!1}},computed:S({smenuStyle:function(){var e={padding:"0"};return this.fixSiderbar&&(e["height"]="100%",e["overflow"]="auto",e["overflow-x"]="hidden"),"newSidemenu"===this.layoutMode?e["height"]="calc(100% - 60px)":e["height"]="calc(100% - 46px)",e}},Object(c["d"])({permissionMenuList:function(e){return e.user.permissionList}})),data:function(){return{showmenusdi:2,logoText:"",searchMenuOptions:[],topLeftMenuLayoutTopMenuSelect:[],topLeftMenuOpenKeys:[],noChildMenuSelectKeys:[],menuSearchVisible:!1,menuSearchResult:[],activeSearchMenuIndex:0,menuSearchValue:""}},mounted:function(){var e=this,t=this,n=this.getParentMenu();this.$store.commit("SET_PARENT_MENU",n),t.$bus.$off("topLeftMenuLayoutTopMenuSelect"),this.$nextTick((function(){n&&n.length>0&&(t.topLeftMenuLayoutTopMenuSelect=[n[0]],t.topLeftMenuOpenKeys=n.map((function(e){return e.id})),e.noChildMenuSelectKeys=[t.$route.path]),t.$bus.$on("topLeftMenuLayoutTopMenuSelect",(function(e){e&&0!==e.length?(t.topLeftMenuLayoutTopMenuSelect=e,t.topLeftMenuOpenKeys=e.map((function(e){return e.id}))):(t.topLeftMenuLayoutTopMenuSelect=[],t.topLeftMenuOpenKeys=[])}))}))},created:function(){var e=[];this.searchMenus(e,this.permissionMenuList),this.searchMenuOptions=[].concat(e),this.logoText=window._H5_INFO.logoText},watch:{immediate:!0,handler:function(){this.menuSearchVisible=!1,this.searchMenuComp=this.isMobile()?"a-modal":"span"},$route:function(){"topLeftMenu"===this.layoutMode&&this.updateMenu()}},methods:{openMenuSearchModal:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.activeSearchMenuIndex=0,this.menuSearchVisible=t,t?(window.addEventListener("keydown",this.searchMenuKeyDownFun),this.$nextTick((function(){e.$refs.menuSearchInput.focus()}))):(this.menuSearchValue="",this.menuSearchResult=[],window.removeEventListener("keydown",this.searchMenuKeyDownFun))},menuSearch:function(e){var t=this,n=e.target.value;if(this.menuSearchResult=[],n){var r=this.getMenuPathByMenus({value:n,parents:[],menuList:this.menus,result:[]});r.forEach((function(e){var n=e[e.length-1]["path"];t.menuSearchResult.push({routeList:e,path:n})}))}},getMenuPathByMenus:function(e){for(var t=e.value,n=e.parents,r=e.menuList,o=e.result,i=void 0===o?[]:o,u=0;u<r.length;u++){var a=r[u];if(a.meta&&!a.meta.hideMenu){var s=a.meta.title,l=a.path,c=a.children;s&&s.indexOf(t)>-1&&!c?i.push([].concat(p(n),[{title:s,path:l}])):this.getMenuPathByMenus({value:t,parents:[].concat(p(n),[{title:s,path:l}]),menuList:a.children||[],result:i})}}return i},searchMenuKeyDownFun:function(e){if(40===e.keyCode)this.activeSearchMenuIndex===this.menuSearchResult.length-1?this.activeSearchMenuIndex=0:this.activeSearchMenuIndex++;else if(38===e.keyCode)0===this.activeSearchMenuIndex?this.activeSearchMenuIndex=this.menuSearchResult.length-1:this.activeSearchMenuIndex--;else if(13===e.keyCode){var t=this.menuSearchResult[this.activeSearchMenuIndex];this.gotoPage(t.path)}},gotoPage:function(e){var t=this;this.openMenuSearchModal(!1),setTimeout((function(){t.$router.push(e)}),100)},updateMenu:function(){var e=this,t=this.$store.state.permission.parentMenuObj,n=t&&(t.children||[]).find((function(t){return t.path===e.$route.path}));if(!n){var r=this.getParentMenu();this.$store.commit("SET_PARENT_MENU",r),r&&0!==r.length?(this.topLeftMenuLayoutTopMenuSelect=[r[0]],this.topLeftMenuOpenKeys=r.map((function(e){return e.id}))):(this.topLeftMenuLayoutTopMenuSelect=[],this.topLeftMenuOpenKeys=[])}this.noChildMenuSelectKeys=[this.$route.path]},getParentMenu:function(){for(var e,t,n,r,o=this,i=0,u=function(){var r=o.menus[a];if(r&&r.children&&r.children.length>0){0===i&&(e=r),i++;var u=r.children.find((function(e){if(e.path===o.$route.path)return n=1,t=r,!0;try{if(e.children&&e.children.length>0)for(var i=0;i<e.children.length;i++)if(e.children[i].path===o.$route.path)return n=2,t=e,!0}catch(u){}}));if(u)return 1===n?{v:[r]}:{v:[r,t]}}},a=0;a<this.menus.length;a++)if(r=u(),r)return r.v;return[e]},noChildMenuSelect:function(e){this.noChildMenuSelectKeys=e.selectedKeys,this.onSelect(e)},menusover:function(){this.showmenusdi=1},menusout:function(){this.showmenusdi=2,this.$forceUpdate()},hiddenClick:function(){this.shows=!1},getPictureInfo:function(){var e=this;Object(l["e"])("/base/pictureConfigInfo/pictureInit").then((function(t){t.success&&t.result&&t.result.logoText&&(e.logoText=t.result.logoText)}))},searchMethods:function(e){var t=this.searchMenuOptions.filter((function(t){return t.id===e}))[0];!0===t.meta.internalOrExternal?window.open(t.meta.url,"_blank"):t.component.includes("layouts/IframePageView")?this.$router.push(t):this.$router.push({path:t.path}),this.searchMenuVisible=!1},searchMenus:function(e,t){var n,r=f(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.hidden||"layouts/RouteView"===o.component||e.push(o),o.children&&o.children.length>0&&this.searchMenus(e,o.children)}}catch(i){r.e(i)}finally{r.f()}},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},onSelect:function(e){this.$emit("menuSelect",e)},onUpdateMenuTitle:function(e){this.$emit("updateMenuTitle",e)},toggle:function(){this.$emit("toggle")}}},K=x,L=(n("d418"),n("f5ad"),n("2877")),T=Object(L["a"])(K,r,o,!1,null,"1e122928",null);t["default"]=T.exports},f5ad:function(e,t,n){"use strict";n("c4f8")}}]);