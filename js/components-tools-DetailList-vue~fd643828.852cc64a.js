(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-tools-DetailList-vue~fd643828"],{"8ebf":function(t,e,r){"use strict";r("a36c")},a36c:function(t,e,r){},c16f:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["detail-list",t.size,"vertical"===t.layout?"vertical":"horizontal"]},[t.title?r("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),r("a-row",[t._t("default")],2)],1)},n=[],i=r("da05");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=f(t,"string");return"symbol"==l(e)?e:e+""}function f(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p={name:"DetailListItem",props:{term:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var t=arguments[0];return t(i["b"],{props:u({},b[this.col])},[t("div",{class:"term"},[this.$props.term]),t("div",{class:"content"},[this.$slots.default])])}},b={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}},y={name:"DetailList",Item:p,components:{Col:i["b"]},props:{title:{type:String,default:"",required:!1},col:{type:Number,required:!1,default:3},size:{type:String,required:!1,default:"large"},layout:{type:String,required:!1,default:"horizontal"}},provide:function(){return{col:this.col>4?4:this.col}}},m=y,d=(r("8ebf"),r("2877")),v=Object(d["a"])(m,o,n,!1,null,null,null);e["default"]=v.exports}}]);