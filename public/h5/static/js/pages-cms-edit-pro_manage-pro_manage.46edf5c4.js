(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-edit-pro_manage-pro_manage"],{3942:function(t,e,n){"use strict";n.r(e);var i=n("554b"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"41b3":function(t,e,n){"use strict";n.r(e);var i=n("c96a"),o=n("a70a");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("c56e");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"253bada4",null,!1,i["a"],a);e["default"]=u.exports},"554b":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},"68b0":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("b333")),r=i(n("b7aa")),a={components:{uniSegmentedControl:r.default},data:function(){return{getimg:this.$getimg,list:[],items:["上架商品","下架商品"],current:0}},onLoad:function(){this.get_pro()},onShow:function(){this.get_pro()},methods:{get_pro:function(){var t=this;o.default.postProductAllInfo().then((function(e){t.list=e.data}))},_request:function(){this.list=this.$api.json_cms.my_product},pull:function(t){var e=this;uni.showModal({title:"确定下架？",success:function(n){1==n.confirm&&o.default.putProductUpdate(t).then((function(t){e.$api.msg("下架成功"),e.get_pro()}))}})},del:function(t){var e=this;uni.showModal({title:"确定删除？",success:function(n){1==n.confirm&&o.default.putProductDel(t).then((function(t){e.$api.msg("删除成功"),e.get_pro()}))}})},push:function(t){var e=this;uni.showModal({title:"确定上架？",success:function(n){1==n.confirm&&o.default.putProductUpdate(t).then((function(t){e.$api.msg("上架成功"),e.get_pro()}))}})},jump_edit:function(t){console.log(t),uni.navigateTo({url:"/pages/cms/edit/product/product?id="+t})},onClickItem:function(t){this.current!==t&&(this.current=t)}},onPullDownRefresh:function(){this.get_pro(),setTimeout((function(){uni.stopPullDownRefresh()}),2e3)}};e.default=a},9736:function(t,e,n){"use strict";var i=n("da47"),o=n.n(i);o.a},"98c6":function(t,e,n){var i=n("f148");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7ae9ac6d",i,!0,{sourceMap:!1,shadowMode:!1})},a70a:function(t,e,n){"use strict";n.r(e);var i=n("68b0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},b333:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9378"));function r(){var t="product/get_recent";return o.default.get(t).then((function(t){return t}))}function a(t){var e="product/get_cate_pros?id=";return o.default.get(e,{id:t}).then((function(t){return t}))}function c(t){var e="product/search?name=";return o.default.get(e+t).then((function(t){return t}))}function u(){var t="/fx/get_goods";return o.default.get(t).then((function(t){return t}))}function d(t){var e="product/mcms/edit_product";return o.default.post(e,t).then((function(t){return t}))}function s(t){var e="product/get_product?id=";return o.default.get(e,{id:t}).then((function(t){return t}))}function l(t){var e="pt/get_item";return o.default.get(e,{id:t}).then((function(t){return t}))}function f(){var t="product/get_recent";return o.default.get(t,{type:"hot"}).then((function(t){return t}))}function p(){var t="product/get_recent";return o.default.get(t,{type:"new"}).then((function(t){return t}))}function v(){var t="product/mcms/all_goods_info";return o.default.post(t).then((function(t){return t}))}function b(t){var e="/mcms/update";return o.default.put(e,{id:t,db:"goods",field:"state"}).then((function(t){return t}))}function g(t){var e="product/mcms/del_product";return o.default.put(e,{id:t}).then((function(t){return t}))}function x(t){var e="product/get_shipment_price";return o.default.psot(e,t).then((function(t){return t}))}function w(t){var e="user/get_xcx_code";return o.default.post(e,{path:"pages/extend-view/productDetail/productDetail",scene:t}).then((function(t){return t}))}function h(t){var e="user/get_web_code";return o.default.post(e,{path:"pages/extend-view/productDetail/productDetail?id="+t}).then((function(t){return t}))}function m(t){var e="product/get_evaluate?id=";return o.default.get(e,{id:t}).then((function(t){return t}))}function _(){var t="coupon/get_coupon";return o.default.get(t).then((function(t){return t}))}function k(t){var e="favorite/get_one_fav";return o.default.post(e,{id:t}).then((function(t){return t}))}function y(t){var e="coupon/add_coupon";return o.default.get(e,{id:t}).then((function(t){return t}))}function C(t){var e="favorite/del_fav";return o.default.put(e,{id:t}).then((function(t){return t}))}function j(t){var e="favorite/add_fav";return o.default.post(e,t).then((function(t){return t}))}var P={getProduct:s,getPtItem:l,postWxCode:w,postH5Code:h,getEvalutes:m,getCoupons:_,postIsLike:k,getAddCoupons:y,putDelFavorite:C,postAddFavorite:j,getProList:r,getProductCate:a,getProductSearch:c,getProductFx:u,getProductHotRecent:f,getProductNewRecent:p,postProductEdit:d,postProductAllInfo:v,putProductUpdate:b,putProductDel:g,postProductSimPrice:x};e.default=P},b35c:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:i===t.currentIndex}],style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(i)}}},[t._v(t._s(e))])})),1)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},b7aa:function(t,e,n){"use strict";n.r(e);var i=n("b35c"),o=n("3942");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9736");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"6825a149",null,!1,i["a"],a);e["default"]=u.exports},c052:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".segmented-control[data-v-6825a149]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:75%;font-size:%?28?%;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-6825a149]{border:0;border-radius:0}.segmented-control-item[data-v-6825a149]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?60?%;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-6825a149]{color:#fff}.segmented-control-item.text[data-v-6825a149]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-6825a149]{border-bottom-style:solid}.segmented-control-item[data-v-6825a149]:first-child{border-left-width:0}",""]),t.exports=e},c56e:function(t,e,n){"use strict";var i=n("98c6"),o=n.n(i);o.a},c96a:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"manage"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#F65256"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"one"},[t._l(t.list,(function(e,i){return[e.state!=t.current?n("v-uni-view",{key:i+"_0",staticClass:"container"},[n("v-uni-view",{staticClass:"pic"},[n("img",{attrs:{src:t.getimg+e.imgs}})]),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"title_l"},[t._v(t._s(e.goods_name))])],1),n("v-uni-view",{staticClass:"price"},[t._v("¥ "+t._s(e.price))]),n("v-uni-view",{staticClass:"kc"},[n("v-uni-view",[t._v("库存："+t._s(e.stock))]),n("v-uni-view",{staticClass:"xiaol"},[t._v("销量："+t._s(e.sales))])],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"btn_01",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump_edit(e.goods_id)}}},[t._v("编辑")]),1==e.state?n("v-uni-view",{staticClass:"btn_01",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.pull(e.goods_id)}}},[t._v("下架")]):t._e(),0==e.state?n("v-uni-view",{staticClass:"btn_01",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.push(e.goods_id)}}},[t._v("上架")]):t._e(),0==e.state?n("v-uni-view",{staticClass:"btn_01",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del(e.goods_id)}}},[t._v("删除")]):t._e()],1)],1)],1):t._e()]})),n("v-uni-view",{staticClass:"tjsp"},[n("v-uni-navigator",{attrs:{url:"/pages/cms/edit/product/product"}},[n("v-uni-view",{staticClass:"flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg"},[t._v("添加商品")])],1)],1)],1)],2)],1)],1),n("v-uni-view",{staticStyle:{height:"100px"}})],1)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},da47:function(t,e,n){var i=n("c052");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("25ebc39c",i,!0,{sourceMap:!1,shadowMode:!1})},f148:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".manage[data-v-253bada4]{font-size:14px}.manage .one .container[data-v-253bada4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-bottom:1px solid #f2f2f2;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?240?%;padding:5px 11px;margin:0 0 10px;background:#fff}.manage .one .container .pic[data-v-253bada4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:25%;height:100%;vertical-align:middle}.manage .one .container .pic img[data-v-253bada4]{width:100%;height:80%;border-radius:%?10?%}.manage .one .container .desc[data-v-253bada4]{color:#8b8b8b;width:70%;padding:%?20?%;text-align:left;font-size:12px}.manage .one .container .desc .title[data-v-253bada4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.manage .one .container .desc .title_l[data-v-253bada4]{font-weight:700;color:#333;height:36px;overflow:hidden;font-size:14px;line-height:18px}.manage .one .container .desc .price[data-v-253bada4]{color:red;font-size:16px;font-weight:900}.manage .one .container .desc .kc[data-v-253bada4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:18px}.manage .one .container .desc .kc .xiaol[data-v-253bada4]{color:#8b8b8b}.manage .one .container .desc .btn[data-v-253bada4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.manage .one .container .desc .btn .btn_01[data-v-253bada4]{border:1px solid #8b8b8b;border-radius:3px;text-align:center;margin-left:10px;padding:1px 8px}.manage .one .tjsp[data-v-253bada4]{padding:0 10px 10px;position:fixed;bottom:0;left:0;width:100%;box-sizing:border-box;z-index:99;background-color:#fff}.manage .one .tjsp .tjsp_btn[data-v-253bada4]{background-color:#e5e5e5;padding:10px;text-align:center;border-radius:20px;background-color:#df421d;color:#fff;width:100%}.manage .one .bg-red[data-v-253bada4]{background-color:#e54d42;color:#fff}",""]),t.exports=e}}]);