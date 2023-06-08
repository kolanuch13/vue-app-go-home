"use strict";(self["webpackChunkmy_first_app"]=self["webpackChunkmy_first_app"]||[]).push([[70],{4449:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"star-rating"},[t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--outlined"})})),e("div",{staticClass:"star-rating__colored",style:t.ratingWidthStyle},t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--colored"})})),0)],2)},r=[],a={name:"StarRating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return this.rating/this.starLimit*100},ratingWidthStyle(){return`width: ${this.ratingWidth}%;`}}},n=a,l=s(1001),o=(0,l.Z)(n,i,r,!1,null,"bcb3cf50",null),u=o.exports},2719:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-input"},[e("input",t._g(t._b({staticClass:"custom-input",class:!t.isValid&&"custom-input--error",domProps:{value:t.value},on:{blur:t.blurHandler}},"input",t.$attrs,!1),t.listeners)),t.isValid?t._e():e("span",{staticClass:"custom-input__error"},[t._v(t._s(t.error))])])},r=[],a={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{value:{type:String,default:""},errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}},watch:{value(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{validate(){return this.isValid=this.rules.every((t=>{const{hasPassed:e,message:s}=t(this.value);return e||(this.error=s||this.errorMessage),e})),this.isValid},blurHandler(){this.isFirstInput&&this.validate(),this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("input","")}}},n=a,l=s(1001),o=(0,l.Z)(n,i,r,!1,null,"0c310450",null),u=o.exports},2152:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-spacer"},[t._t("default")],2)},r=[],a={name:"SectionWithHeaderSpacer"},n=a,l=s(1001),o=(0,l.Z)(n,i,r,!1,null,"dc5892c8",null),u=o.exports},306:function(t,e,s){s.d(e,{Z:function(){return f}});var i=function(){var t=this,e=t._self._c;return e("button",t._g({class:{button:!0,"button--outlined":t.outlined},attrs:{type:t.type}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"button__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"button__content",class:t.contentStyle},[t._t("default")],2)],1)},r=[],a=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},n=[],l={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},o=l,u=s(1001),c=(0,u.Z)(o,a,n,!1,null,"4e8dcacd",null),p=c.exports,m={name:"SubmitButton",components:{CircleLoader:p},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyle(){return{"button__content--hidden":this.loading}}}},d=m,h=(0,u.Z)(d,i,r,!1,null,"435db1b2",null),f=h.exports},70:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});var i=function(){var t=this,e=t._self._c;return e("SectionWithHeaderSpacer",[e("main",{staticClass:"home-page"},[e("ContainerMain",[e("ApartmentsFilterForm",{staticClass:"apartments-filter",on:{submit:t.filter}})],1),e("ContainerMain",[t.filteredApartments.length?t._e():e("p",[t._v(" There is no apartment with that options ")]),e("ApartmentsList",{attrs:{items:t.filteredApartments},scopedSlots:t._u([{key:"apartment",fn:function({apartment:t}){return[e("ApartmentsItem",{key:t._id,staticClass:"apartments-list__item",attrs:{id:t._id,descr:t.descr,rating:t.rating,imgSrc:t.photo,price:t.price}})]}}])}),e("div",{staticClass:"pagination-wrapper"},[e("paginate",{attrs:{value:t.page,"page-count":t.maxPage,clickHandler:t.onPaginationClick,"container-class":"pagination"}})],1)],1)],1)])},r=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"apartments-list"},[t._l(t.items,(function(e){return[t._t("apartment",null,{apartment:e})]}))],2)},n=[],l={name:"ApartmentsList",props:{items:{type:Array,default:()=>[]}}},o=l,u=s(1001),c=(0,u.Z)(o,a,n,!1,null,"4369a872",null),p=c.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"apartments-item"},[e("div",{staticClass:"apartments-item__inner"},[e("img",{staticClass:"apartments-item__photo",attrs:{src:t.imgSrc,alt:""}}),e("div",{staticClass:"apartments-item__content"},[e("p",{staticClass:"apartments-item__description"},[t._v(" "+t._s(t.descr)+" ")]),e("div",{staticClass:"apartments-item__rating"},[e("StarRating",{attrs:{rating:t.rating}})],1),e("div",{staticClass:"apartments-item__price"},[t._v("UAH "+t._s(t.price))]),e("router-link",{staticClass:"apartments-item__link",attrs:{to:{name:"apartment",params:{id:t.id}}}})],1)])])},d=[],h=s(4449),f={name:"AppartmentItem",components:{StarRating:h.Z},props:{id:{type:String,required:!0},descr:{type:String,default:""},rating:{type:Number,default:0},price:{type:Number,required:!0},imgSrc:{type:String,default:""}},methods:{log(t,e){console.log(t),console.log(e)},handleLinkClick(){console.log("facebook link clicked")}}},g=f,_=(0,u.Z)(g,m,d,!1,null,"810ee66e",null),y=_.exports,v=function(){var t=this,e=t._self._c;return e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("CustomSelect",{staticClass:"form__select",attrs:{items:t.cities},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),e("CustomInput",{staticClass:"form__input",attrs:{type:"number",placeholder:"Price","error-message":"Can`t be empty",rules:t.rules},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),e("SubmitButton",{staticClass:"form__submit",attrs:{type:"submit"}},[t._v("Chose Apartment")])],1)},C=[],b=function(){var t=this,e=t._self._c;return e("select",t._g({staticClass:"custom-select"},t.listeners),t._l(t.formatedItems,(function(s){return e("option",{key:s.value,domProps:{value:s.value,selected:s.selected}},[t._v(" "+t._s(s.label)+" ")])})),0)},S=[],k={name:"CustomSelect",props:{items:{type:Array,required:!0}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}},formatedItems(){return this.items.map((t=>"object"===typeof t?t:{value:t,label:t}))}}},Z=k,x=(0,u.Z)(Z,b,S,!1,null,"62665284",null),A=x.exports,w=s(2719),I=s(306),P=s(4034),$={name:"ApartmentsFilterForm",components:{CustomSelect:A,CustomInput:w.Z,SubmitButton:I.Z},data(){return{price:"",city:""}},computed:{rules(){return[P.q9,(0,P.DD)(10)]},cities(){return[{value:"",label:"City",selected:!0},"New York City","Miami","Los Angeles","Seattle","Chicago","San Francisco","Boston","Denver"]}},methods:{handleSubmit(){this.$emit("submit",{city:this.city,price:this.price})}}},F=$,L=(0,u.Z)(F,v,C,!1,null,"24637109",null),B=L.exports,W=s(5015),N=s(2152),D=s(1438),H={name:"HomePage",components:{ApartmentsList:p,ApartmentsItem:y,ApartmentsFilterForm:B,ContainerMain:W.Z,SectionWithHeaderSpacer:N.Z},data(){return{text:"",apartment:[],page:0,maxPage:0,filters:{city:"",price:0}}},computed:{filteredApartments(){return this.filterByCityName(this.filterByPrice(this.apartment))}},async created(){try{const{data:t}=await(0,D.U)(this.page,9);this.apartment=t.result,this.maxPage=t.allItems+1}catch(t){console.log(t)}},methods:{filter({city:t,price:e}){this.filters.city=t,this.filters.price=e},filterByCityName(t){return this.filters.city?t.filter((t=>t.location.city===this.filters.city)):t},filterByPrice(t){return this.filters.price?t.filter((t=>t.price<=this.filters.price)):t},async onPaginationClick(t){this.page=t-1;try{const{data:t}=await(0,D.U)(this.page,9);this.apartment=t.result,this.maxPage=t.allItems+1}catch(e){console.log(e)}}}},z=H,M=(0,u.Z)(z,i,r,!1,null,"464df88c",null),R=M.exports},1438:function(t,e,s){s.d(e,{I:function(){return a},U:function(){return r}});var i=s(8042);const r=(t,e)=>i.Z.get(`/apartments?page=${t}&size=${e}`),a=t=>i.Z.get(`/apartments/${t}`)},4034:function(t,e,s){s.d(e,{D6:function(){return l},DD:function(){return n},aO:function(){return o},q9:function(){return a}});const i=new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),r=new RegExp(/^(?=.*[A-Za-z])(?=.*[\d])(?=.*[\W_])[a-zA-Z0-9\W_]{7,256}$/),a=t=>({hasPassed:!!t,message:"Please compilare this field."}),n=t=>e=>({hasPassed:e.length<=t,message:"You exceed the limit."}),l=t=>({hasPassed:i.test(t),message:"Wrong email"}),o=t=>({hasPassed:r.test(t),message:"The password must have at least one big letter and one sym"})}}]);
//# sourceMappingURL=70.d826b88a.js.map