(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-tools-FormUploadItem-vue~f71cff67"],{"73e7":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"FormUploadItem uploadFormModelItem"},[e.disabled||e.getItemByName("上传组件").fileList&&0!==e.getItemByName("上传组件").fileList.length&&!e.getItemByName("上传组件").loading?e._e():[i("a-upload",{attrs:{disabled:e.disabled,showUploadList:!1,customRequest:function(t){return e.uploadFile(e.action,t,e.getItemByName("上传组件"))}},on:{change:function(t){return e.uploadChange(t,e.getItemByName("上传组件"))}}},[e._t("button",(function(){return[i("a-button",{attrs:{icon:"upload"}},[e._v(e._s(e.buttonText))])]}))],2),!e.getItemByName("上传组件").loading&&e.description?i("span",{staticClass:"placeholder"},[e._v(e._s(e.description))]):e._e()],e.getItemByName("上传组件").loading?i("a-progress",{attrs:{width:32,type:"circle",percent:e.getItemByName("上传组件").percent}}):e._e(),e.getItemByName("上传组件").fileList&&e.getItemByName("上传组件").fileList.length>0&&!e.getItemByName("上传组件").loading?i("div",{staticClass:"div_upload_show"},[i("a",{staticClass:"a_upload_fileName",staticStyle:{"line-height":"32px","pointer-events":"auto"},attrs:{allowClick:"",href:e.getFirstFileByName("上传组件").filePath,title:e.getFirstFileByName("上传组件").originalName}},[e._v(e._s(e.getFirstFileByName("上传组件").originalName))]),e.disabled?e._e():i("a-button",{staticClass:"button_upload_delete",attrs:{shape:"circle",icon:"close"},on:{click:function(t){e.clearFileItem(e.getItemByName("上传组件"))}}})],1):e._e()],2)},n=[],l=i("eb36"),o=["jpg","JPG","jpeg","gif","GIF","JPEG","png","PNG","bmp","BMP","pdf","doc","docx","xls","xlsx","mp4"],s={name:"FormUploadItem",mixins:[l["a"]],props:{action:{type:String,default:""},description:{type:String,default:"支持格式：.rar .zip .doc .docx .pdf"},fileList:{type:Array,default:function(){return[]}},buttonText:{type:String,default:"上传附件"},disabled:{type:Boolean,default:!1}},model:{prop:"fileList",event:"changeFile"},computed:{compFileList:{get:function(){return this.fileList},set:function(e){this.$emit("changeFile",e)}}},mounted:function(){},data:function(){return{}},methods:{init:function(e){var t=e.defaultFileList,i=void 0===t?[]:t,a=e.fileType,n=void 0===a?o:a,l=[{name:"上传组件",fileList:i,fileType:n}];this.initUploadFile(l)},onFileChange:function(e,t,i){var a=t?t.fileList:[],n=this.getFirstFileByName("上传组件");this.compFileList=t?t.fileList:[],this.$emit("change",{fileList:a,file:n&&Object.keys(n).length>0?n:void 0})}}},c=s,d=(i("7790"),i("2877")),r=Object(d["a"])(c,a,n,!1,null,"c6cb2246",null);t["default"]=r.exports},7790:function(e,t,i){"use strict";i("8275")},8275:function(e,t,i){}}]);