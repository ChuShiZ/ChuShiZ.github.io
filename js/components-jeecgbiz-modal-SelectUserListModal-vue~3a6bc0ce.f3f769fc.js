(window["webpackJsonp_joinsoft-v9"]=window["webpackJsonp_joinsoft-v9"]||[]).push([["components-jeecgbiz-modal-SelectUserListModal-vue~3a6bc0ce"],{"9caf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"用户列表",width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[n("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}}})],1)},s=[],a=n("4ec3"),l=n("b65a"),o={name:"SelectUserListModal",mixins:[l["a"]],data:function(){return{title:"操作",visible:!1,model:{},confirmLoading:!1,url:{add:"/act/model/create",list:"/sys/user/list"},columns:[{title:"用户账号",align:"center",dataIndex:"username",fixed:"left",width:200},{title:"用户姓名",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex_dictText"},{title:"手机号码",align:"center",dataIndex:"phone"},{title:"邮箱",align:"center",dataIndex:"email"},{title:"状态",align:"center",dataIndex:"status_dictText"}]}},created:function(){var e=this;Object(a["L"])().then((function(t){t.success&&(e.dataSource=t.result.records,e.ipagination.total=t.result.total)}))},methods:{open:function(){this.visible=!0,this.selectedRowKeys=[],this.selectedRows=[]},close:function(){this.$emit("close"),this.visible=!1},handleChange:function(e){var t=e.file;t.response.success?(this.$message.success(t.response.message),this.$emit("ok"),this.close()):(this.$message.warn(t.response.message),this.close())},handleCancel:function(){this.close()},handleSubmit:function(){this.$emit("ok",this.selectionRows),this.close()}}},c=o,d=n("2877"),r=Object(d["a"])(c,i,s,!1,null,null,null);t["default"]=r.exports}}]);