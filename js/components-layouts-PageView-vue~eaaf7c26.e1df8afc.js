(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-layouts-PageView-vue~eaaf7c26"],{"06c9":function(t,e,a){},"345a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{desc:t.description,title:t.getTitle,"link-list":t.linkList,search:t.search,tabs:t.tabs}},[a("div",{staticClass:"extra-img",attrs:{slot:"extra"},slot:"extra"},[a("img",{attrs:{src:t.extraImage}})]),a("route-view",{ref:"content"})],1)},s=[],n=a("b445"),o=a("501f"),r={name:"PageContent",components:{RouteView:o["default"],PageLayout:n["default"]},data:function(){return{title:"",description:"",linkList:[],extraImage:"",search:!1,tabs:{}}},mounted:function(){this.getPageHeaderInfo()},updated:function(){this.getPageHeaderInfo()},computed:{getTitle:function(){return this.$route.meta.title}},methods:{getPageHeaderInfo:function(){this.title=this.$route.meta.title;var t=this.$refs.content&&this.$refs.content.$children[0];t&&(this.description=t.description,this.linkList=t.linkList,this.extraImage=t.extraImage,this.search=1==t.search,this.tabs=t.tabs)}}},c=r,u=(a("f44ab"),a("2877")),l=Object(u["a"])(c,i,s,!1,null,"79e995a5",null);e["default"]=l.exports},f44ab:function(t,e,a){"use strict";a("06c9")}}]);