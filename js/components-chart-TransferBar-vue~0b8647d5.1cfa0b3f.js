(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-chart-TransferBar-vue~0b8647d5"],{"1cf5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{height:t.height,data:t.data,scale:t.scale,forceFit:!0,padding:["auto","auto","40","50"]}},[a("v-tooltip"),a("v-axis"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},n=[],r={name:"Bar",props:{title:{type:String,default:""},x:{type:String,default:"x"},y:{type:String,default:"y"},data:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){},methods:{}},s=r,o=a("2877"),l=Object(o["a"])(s,i,n,!1,null,null,null);e["default"]=l.exports}}]);