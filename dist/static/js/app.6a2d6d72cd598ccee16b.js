webpackJsonp([19],{"0n20":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isTab,expression:"isTab"}]})],1)},a=[],c={render:i,staticRenderFns:a};n.a=c},"34KM":function(t,n){},"5OHe":function(t,n){},"Du/2":function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return c}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return r}),e.d(n,"a",function(){return s}),e.d(n,"b",function(){return u});var i="ADDACTIVITY",a="ADDGOODS",c="TABHIDDEN",o="PRODUCTINFO",r="SELECTTAB",s="ADD_TO_CART",u="UPDATE_THIS_PRODUCT"},IcnI:function(t,n,e){"use strict";var i=e("IvJb"),a=e("HVJf"),c=e("mUbh"),o=e("ukYY"),r=e("TBfp"),s=e("Plm7");i.default.use(a.a);var u={navState:0,activityList:[],goodsList:[],tabHidden:!0,productInfo:{},selectTab:"首页"};n.a=new a.a.Store({state:u,mutations:o.a,actions:c.a,getter:r.a,modules:{cart:s.a}})},M93x:function(t,n,e){"use strict";function i(t){e("wRoC")}var a=e("sEFh"),c=e("0n20"),o=e("C7Lr"),r=i,s=o(a.a,c.a,!1,r,null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){var n=e("IvJb"),i=e("M93x"),a=e("YaEn"),c=e("wSez"),o=e.n(c),r=e("IcnI"),s=e("BMa3"),u=e.n(s),d=e("5OHe"),p=(e.n(d),e("34KM")),l=(e.n(p),e("GTOL")),h=e.n(l);t.storage=window.localStorage,u.a.defaults.withCredentials=!0,t.axios=u.a,n.default.config.productionTip=!1,n.default.use(o.a),n.default.use(h.a,{name:"v-touch"}),new n.default({el:"#app",router:a.a,store:r.a,template:"<App/>",components:{App:i.a}})}.call(n,e("QYmj"))},Plm7:function(t,n,e){"use strict";var i,a=e("a3Yh"),c=e.n(a),o=e("3cXf"),r=e.n(o),s=e("Du/2"),u=window.localStorage,d={added:[],checkoutStatus:null},p={checkoutStatus:function(t){return t.checkoutStatus},cartLists:function(t){return t.added}},l={},h=(i={},c()(i,s.a,function(t,n){var e=n.id,i=t.added.find(function(t){return t.id===e&&t.type===n.type});i?i.quantity+=n.quantity:t.added.push(n),u.setItem("cart",r()(t.added))}),c()(i,s.b,function(t,n){var e=n.id,i=n.type,a=n.quantity,c=t.added.find(function(t){return t.id===e&&t.type===i});if(a>0)c&&(c.quantity=a);else{var o=t.added.indexOf(c);t.added.splice(o,1)}u.setItem("cart",r()(t.added))}),i);n.a={state:d,getters:p,actions:l,mutations:h}},RJci:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("mt-tabbar",{staticClass:"border-1px-top",attrs:{fixed:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"首页"}},[e("img",{attrs:{slot:"icon",src:t.img1},slot:"icon"}),t._v("首页\n    ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"发现",to:"/brandSale"}},[e("img",{attrs:{slot:"icon",src:t.img2},slot:"icon"}),t._v("发现\n      ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"分享"}},[e("img",{attrs:{slot:"icon",src:t.img3},slot:"icon"}),t._v("分享\n    ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"购物车"}},[e("img",{attrs:{slot:"icon",src:t.img4},slot:"icon"}),t._v("购物车\n    ")]),t._v(" "),e("mt-tab-item",{attrs:{id:"我的"}},[e("img",{attrs:{slot:"icon",src:t.img5},slot:"icon"}),t._v("我的\n    ")])],1)],1)},a=[],c={render:i,staticRenderFns:a};n.a=c},TBfp:function(t,n,e){"use strict";n.a={}},YaEn:function(t,n,e){"use strict";var i=e("IvJb"),a=e("cigS");i.default.use(a.a),n.a=new a.a({routes:[{path:"/",name:"index",component:function(t){return e.e(0).then(function(){var n=[e("Qt9A")];t.apply(null,n)}.bind(this)).catch(e.oe)},redirect:"/index/page1"},{path:"/index",component:function(t){return e.e(0).then(function(){var n=[e("Qt9A")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{keepAlive:!0},children:[{path:"",component:function(t){return e.e(0).then(function(){var n=[e("Qt9A")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page1",name:"page1",component:function(t){return e.e(2).then(function(){var n=[e("mKCX")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page2",name:"page2",component:function(t){return e.e(9).then(function(){var n=[e("QpxS")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page3",name:"page3",component:function(t){return e.e(15).then(function(){var n=[e("yu55")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page4",name:"page4",component:function(t){return e.e(14).then(function(){var n=[e("m8ps")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page5",name:"page5",component:function(t){return e.e(13).then(function(){var n=[e("ZqW3")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page6",name:"page6",component:function(t){return e.e(12).then(function(){var n=[e("ioOb")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"page7",component:function(t){return e.e(16).then(function(){var n=[e("w7HH")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/brandsale",name:"brandSale",component:function(t){return e.e(17).then(function(){var n=[e("1HCd")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/livecommunity",name:"liveCommunity",component:function(t){return e.e(4).then(function(){var n=[e("0bbc")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shopcart",name:"shopCart",component:function(t){return e.e(3).then(function(){var n=[e("nq7e")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/myself",name:"mySelf",component:function(t){return e.e(8).then(function(){var n=[e("mvm3")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/setter",name:"setter",component:function(t){return e.e(11).then(function(){var n=[e("rdZq")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/login",name:"login",component:function(t){return e.e(7).then(function(){var n=[e("grsR")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/product",name:"product",component:function(t){return e.e(1).then(function(){var n=[e("taF9")];t.apply(null,n)}.bind(this)).catch(e.oe)},redirect:"/product/info",children:[{path:"info",name:"productInfo",component:function(t){return e.e(5).then(function(){var n=[e("KmCl")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"detail",name:"productDetail",component:function(t){return e.e(10).then(function(){var n=[e("+SJX")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"comment",name:"productComment",component:function(t){return e.e(6).then(function(){var n=[e("mheQ")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}]})},mUbh:function(t,n,e){"use strict";var i=e("Du/2");n.a={addActivity:function(t,n){(0,t.commit)(i.c,n)},addGoods:function(t,n){(0,t.commit)(i.d,n)},tabHidden:function(t){(0,t.commit)(i.e)},productInfo:function(t,n){(0,t.commit)(i.f,n)},selectTab:function(t,n){(0,t.commit)(i.g,n)},addToCart:function(t,n){var e=t.commit;n.inventory>0&&e(i.a,n)},updateThisCart:function(t,n){(0,t.commit)(i.b,n)}}},rewP:function(t,n,e){"use strict";n.a={data:function(){return{selected:"首页",img1:"static/icon/indexchoose.png",img2:"static/icon/brand.png",img3:"static/icon/live.png",img4:"static/icon/cart.png",img5:"static/icon/me.png"}},computed:{otherSelect:function(){return this.$store.state.selectTab}},watch:{otherSelect:function(){this.selected=this.otherSelect},selected:{handler:function(t,n){"首页"==this.selected?(this.$router.push("/"),this.img1="static/icon/indexchoose.png"):this.img1="static/icon/index.png","发现"==this.selected?(this.$router.push("/brandsale"),this.img2="static/icon/brandchoose.png"):this.img2="static/icon/brand.png","分享"==this.selected?(this.$router.push("/livecommunity"),this.img3="static/icon/livechoose.png"):this.img3="static/icon/live.png","购物车"==this.selected?(this.$router.push("/shopcart"),this.img4="static/icon/cartchoose.png"):this.img4="static/icon/cart.png","我的"==this.selected?(this.$router.push("/myself"),this.img5="static/icon/mechoose.png"):this.img5="static/icon/me.png"}}}}},sEFh:function(t,n,e){"use strict";var i=e("y7b9");n.a={name:"app",components:{tabbar:i.a},created:function(){this.$router.push("/index/page1"),storage.cart?this.$store.state.cart.added=JSON.parse(storage.cart):storage.setItem("cart","[]")},computed:{isTab:function(){return this.$store.state.tabHidden}},watch:{$route:function(){this.$store.state.tabHidden||this.$store.dispatch("tabHidden")}}}},ukYY:function(t,n,e){"use strict";var i,a=e("a3Yh"),c=e.n(a),o=e("Du/2");n.a=(i={},c()(i,o.c,function(t,n){t.activityList=n}),c()(i,o.d,function(t,n){t.goodsList=n}),c()(i,o.e,function(t){t.tabHidden=!t.tabHidden}),c()(i,o.f,function(t,n){t.productInfo=n}),c()(i,o.g,function(t,n){t.selectTab=n}),i)},wRoC:function(t,n){},y7b9:function(t,n,e){"use strict";function i(t){e("yVx3")}var a=e("rewP"),c=e("RJci"),o=e("C7Lr"),r=i,s=o(a.a,c.a,!1,r,"data-v-4db55120",null);n.a=s.exports},yVx3:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.6a2d6d72cd598ccee16b.js.map