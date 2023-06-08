"use strict";(self["webpackChunkmy_first_app"]=self["webpackChunkmy_first_app"]||[]).push([[449],{7965:function(t,e,r){r.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},i=[],a={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},n=a,o=r(1001),c=(0,o.Z)(n,s,i,!1,null,"d07ca56a",null),l=c.exports},2152:function(t,e,r){r.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-spacer"},[t._t("default")],2)},i=[],a={name:"SectionWithHeaderSpacer"},n=a,o=r(1001),c=(0,o.Z)(n,s,i,!1,null,"dc5892c8",null),l=c.exports},5449:function(t,e,r){r.r(e),r.d(e,{default:function(){return M}});var s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"my-orders-page"},[e("SectionWithHeaderSpacer",[e("ContainerMain",[e("section",{staticClass:"my-orders__content"},[e("MainTitle",[t._v("Orders")]),e("OrdersList",{attrs:{items:t.orders}})],1)])],1)],1)},i=[],a=r(2152),n=r(5015),o=r(7965),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders-list"},[t.items.length?t._l(t.items,(function(t){return e("OrdersItem",{key:t._id,attrs:{orderId:t._id,order:t.apartmentId}})})):e("p",[t._v("There is no orders yet:(")])],2)},l=[],d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders-items"},[e("img",{staticClass:"orders-items__photo",attrs:{src:t.order[0].photo,alt:"photo"}}),e("div",{staticClass:"orders-items__details"},[e("div",{staticClass:"orders-items__text"},[e("h2",{staticClass:"orders-items__title"},[t._v(t._s(t.order[0].title))]),e("p",{staticClass:"orders-items__location"},[t._v(" "+t._s(t.order[0].location.city))]),e("div",{staticClass:"orders-items__cost"},[e("span",{staticClass:"orders-items__price"},[t._v("UAH "+t._s(t.order[0].price))]),t._v(" per night ")])]),e("button",{staticClass:"orders-items__icon",on:{click:t.handleDelete}},[e("svg",{staticClass:"orders-items__icon--svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 32 32"}},[e("path",{attrs:{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"}})])])])])},u=[],p=r(4769),_={name:"OrdersItem",props:{order:{type:Array,required:!0},orderId:{type:String,required:!0}},methods:{async handleDelete(){try{await(0,p.wH)(this.orderId),this.$notify({type:"success",title:"Horaaay!",text:"The order deleted!"})}catch(t){this.$notify({type:"error",title:"Ooupss!",text:t.message})}}}},m=_,h=r(1001),f=(0,h.Z)(m,d,u,!1,null,"86793fc8",null),v=f.exports,y={name:"OrdersList",components:{OrdersItem:v},props:{items:{type:Array,required:!0}}},C=y,g=(0,h.Z)(C,c,l,!1,null,"7207cd0a",null),Z=g.exports,w={name:"MyOrdersPage",components:{SectionWithHeaderSpacer:a.Z,ContainerMain:n.Z,MainTitle:o.Z,OrdersList:Z},data(){return{orders:[]}},async created(){try{const{data:t}=await(0,p.AU)();this.orders=t.orders}catch(t){this.$notify({type:"error",title:"Ooouups:(",text:t.message})}}},x=w,O=(0,h.Z)(x,s,i,!1,null,"43fb8746",null),M=O.exports},4769:function(t,e,r){r.d(e,{AU:function(){return a},MQ:function(){return i},wH:function(){return n}});var s=r(8042);const i=t=>s.Z.post("/orders",t),a=()=>s.Z.get("/orders"),n=t=>s.Z["delete"](`/orders/${t}`)}}]);
//# sourceMappingURL=449.61c8efb4.js.map