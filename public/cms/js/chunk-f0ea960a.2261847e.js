(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0ea960a"],{"44d2":function(t,e,i){},8525:function(t,e,i){"use strict";var n=i("44d2"),o=i.n(n);o.a},9863:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ad"}},[i("el-container",[i("el-aside",{attrs:{width:"200px"}},[i("NavTo")],1),i("el-container",[i("el-header",{staticStyle:{"border-bottom":"1px solid #d0d0d0"}},[i("Header")],1),i("el-main",{staticStyle:{"background-color":"#F3F3F3"}},[i("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[i("div",{staticClass:"list"},[i("div",{staticClass:"list-head"},[i("el-row",{staticStyle:{display:"flex"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.create_ad}},[t._v("添加广告")]),i("el-button",{attrs:{type:"warning",size:"small"},on:{click:t.sort_sub}},[t._v("更新排序")]),i("el-dialog",{attrs:{title:"",visible:t.dialogFormVisible,width:"45%",center:""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"广告位名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.key_word,callback:function(e){t.$set(t.form,"key_word",e)},expression:"form.key_word"}})],1),i("el-form-item",{attrs:{label:"选择广告位","label-width":t.formLabelWidth}},[i("el-select",{model:{value:t.form.banner_id,callback:function(e){t.$set(t.form,"banner_id",e)},expression:"form.banner_id"}},t._l(t.banners,(function(t){return i("el-option",{key:t.id,attrs:{value:t.id,label:t.description}})})),1)],1),i("el-form-item",{attrs:{label:"跳转到","label-width":t.formLabelWidth}},[i("el-select",{on:{change:t.is_change},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1),t._v("\n\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t"),i("el-select",{on:{change:t.choose},model:{value:t.form.jump_id,callback:function(e){t.$set(t.form,"jump_id",e)},expression:"form.jump_id"}},[t._l(t.type_list,(function(e,n){return[1==t.is_goods?i("el-option",{key:n,attrs:{value:e.goods_id,label:e.goods_name}}):t._e(),0==t.is_goods?i("el-option",{key:n,attrs:{value:e.id,label:e.title}}):t._e()]}))],2)],1),i("el-form-item",{attrs:{label:"广告图片","label-width":t.formLabelWidth}},[t.img_list.length>0?[i("div",{staticStyle:{display:"flex",width:"530px","flex-wrap":"wrap"}},[t._l(t.img_list,(function(e,n){return[i("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.delimg(n)}}}),t.img_list.length>0?i("div",{staticClass:"picA"},[i("img",{staticClass:"img",attrs:{src:t.getimg+e.url}})]):t._e()]}))],2)]:t._e(),t.img_list.length<1?i("div",{staticClass:"picA",staticStyle:{"margin-left":"19px"},on:{click:t.choose_pic}},[i("i",{staticClass:"el-icon-plus",staticStyle:{"margin-top":"45%",height:"28px",width:"28px"}})]):t._e()],2)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.eid<1?i("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("立即创建")]):i("el-button",{attrs:{type:"success"},on:{click:t.subEdit}},[t._v("提交修改")])],1)],1)],1)],1),[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{label:"排序",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{model:{value:e.row.sort,callback:function(i){t.$set(e.row,"sort",i)},expression:"scope.row.sort"}})]}}])}),i("el-table-column",{attrs:{prop:"key_word",label:"名称",width:"220"}}),i("el-table-column",{attrs:{prop:"banner.description",label:"所属广告位",width:"220"}}),i("el-table-column",{attrs:{prop:"imgs",label:"缩略图",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{attrs:{src:t.getimg+e.row.imgs,with:"140",height:"70"}})]}}])}),i("el-table-column",{attrs:{prop:"main.title",label:"跳转到",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return["goods"==e.row.type?i("p",[t._v("商品")]):"article"==e.row.type?i("p",[t._v("文章")]):i("p",[t._v("不跳转")])]}}])}),i("el-table-column",{attrs:{prop:"operation",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(i){return t.on_edit(e.row.id)}}},[t._v("编辑")]),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(i){return t.del(e.row.id,e.$index)}},slot:"reference"},[t._v("删除")])]}}])})],1)]],2)])],1)],1)],1),i("Pic",{attrs:{drawer:t.drawer,father_fun:t.get_img,length:t.length}})],1)},o=[],s=(i("6d57"),i("309f"),i("0b53"),i("06a2"),i("ec25"),i("cc57"),i("c904"),i("2b45"),i("ab56")),a=(i("b705"),i("a49b")),r=i("15fc"),l=i("71c2");function c(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=d(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){r=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(r)throw s}}}}function d(t,e){if(t){if("string"===typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={name:"Ad",data:function(){return{is_goods:"",eid:"",type_list:[],length:1,drawer:!1,getimg:this.$getimg,img_list:[],dialogFormVisible:!1,form:{key_word:"",img_id:"",banner_id:"",type:"",jump_id:""},formLabelWidth:"120px",input:"",banners:"",upfile_url:a["a"]+"admin/upload/img",upfile_data:{use:"AD"},options:[{value:"",label:"不跳转"},{value:"goods",label:"商品"},{value:"article",label:"文章"}],upfile_head:{token:localStorage.getItem("token")},upfile_list:[],list:[],article:"",goods:""}},components:{NavTo:r["a"],Header:l["a"],Pic:s["default"]},computed:{},methods:{choose:function(t){console.log(t)},is_change:function(t){console.log(t),"article"==t&&(this.type_list=this.article,this.is_goods=0),"goods"==t&&(this.type_list=this.goods,this.is_goods=1)},_load:function(){var t=this,e=this;this.http.get("banner/get_all_banner").then((function(t){console.log(t.data);var i=t.status.toString();2==i.charAt(0)&&(e.banners=t.data)})),this.http.get("product/admin/all_goods_name").then((function(e){t.goods=e.data})),this.http.get("article/admin/all_article_name").then((function(e){t.article=e.data}))},choose_pic:function(){this.length=6-this.img_list.length,this.drawer=!0},get_img:function(t){for(var e in this.drawer=!1,t){var i=t[e];this.img_list.push(i),this.form.img_id=i.id}this.length=6-this.img_list.length,console.log("get_img_end:",t,this.img_list)},is_show:function(){this.drawer=!this.drawer},delimg:function(t){this.img_list.splice(t,1)},_clsForm:function(){var t=this;for(var e in t.eid="",t.upfile_list=[],t.form)t.form[e]=""},subEdit:function(){var t=this;t.form["id"]=this.eid;var e={banner_id:this.form.banner_id,id:this.form.id,img_id:this.form.img_id,is_visible:this.form.is_visible,jump_id:this.form.jump_id,key_word:this.form.key_word,sort:this.form.sort,type:this.form.type};this.http.post_show("banner/admin/edit_banner",e).then((function(e){t.$message({showClose:!0,message:"更新成功",type:"success"}),t._clsForm(),t.dialogFormVisible=!1,t.getBannerItems()}))},on_edit:function(t){var e=this,i=this;this.dialogFormVisible=!0,this.eid=t,this.img_list=[];var n={id:"",url:""};this.http.get("banner/get_banner_content?id="+t).then((function(t){console.log(t),i.form=t.data,e.is_change(t.data.type),n.id=t.data.img_id,n.url=t.data.imgs,e.img_list.push(n),console.log(e.img_list)}))},sort_sub:function(){var t,e=this,i={},n=this,o=c(n.list);try{for(o.s();!(t=o.n()).done;){var s=t.value;i[s.id]=s.sort}}catch(a){o.e(a)}finally{o.f()}this.http.post_show("banner/admin/set_sort",i).then((function(t){e.$message({message:"操作成功",type:"success"})}))},create_ad:function(){this._clsForm(),this.dialogFormVisible=!0},sub:function(){var t=this;this.http.post_show("banner/admin/add_banner",{banner_id:t.form.banner_id,img_id:t.form.img_id,jump_id:t.form.jump_id,key_word:t.form.key_word,type:t.form.type}).then((function(){for(var e in t.$message({showClose:!0,message:"添加成功",type:"success"}),t.form)t.form[e]="";t.upfile_list=[],t.dialogFormVisible=!1,t.getBannerItems()}))},getBannerItems:function(){var t=this;this.http.get("banner/admin/banner_all_item").then((function(e){var i=e.status.toString();2==i.charAt(0)&&(t.list=e.data)}))},up_ok:function(t){this.form.img_id=t.id},del:function(t,e){var i=this,n=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.http.put_show("banner/admin/del_banner",{id:t}).then((function(t){n.$message({showClose:!0,message:"删除成功",type:"success"}),n.list.splice(e,1)}))}))}},mounted:function(){this._load(),this.getBannerItems()}},f=m,h=(i("8525"),i("9ca4")),p=Object(h["a"])(f,n,o,!1,null,null,null);e["default"]=p.exports}}]);