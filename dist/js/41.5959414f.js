"use strict";(self["webpackChunkmy_first_app"]=self["webpackChunkmy_first_app"]||[]).push([[41],{4439:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-container"},[t._t("default")],2)},i=[],a={name:"AuthContainer"},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"779bf5ba",null),o=u.exports},2714:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"auth-section"},[t._t("default")],2)},i=[],a={name:"AuthSection"},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"495ac500",null),o=u.exports},2719:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-input"},[e("input",t._g(t._b({staticClass:"custom-input",class:!t.isValid&&"custom-input--error",domProps:{value:t.value},on:{blur:t.blurHandler}},"input",t.$attrs,!1),t.listeners)),t.isValid?t._e():e("span",{staticClass:"custom-input__error"},[t._v(t._s(t.error))])])},i=[],a={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{value:{type:String,default:""},errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}},watch:{value(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{validate(){return this.isValid=this.rules.every((t=>{const{hasPassed:e,message:s}=t(this.value);return e||(this.error=s||this.errorMessage),e})),this.isValid},blurHandler(){this.isFirstInput&&this.validate(),this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("input","")}}},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"0c310450",null),o=u.exports},7965:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},i=[],a={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"d07ca56a",null),o=u.exports},306:function(t,e,s){s.d(e,{Z:function(){return f}});var n=function(){var t=this,e=t._self._c;return e("button",t._g({class:{button:!0,"button--outlined":t.outlined},attrs:{type:t.type}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"button__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"button__content",class:t.contentStyle},[t._t("default")],2)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},r=[],l={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},u=l,o=s(1001),c=(0,o.Z)(u,a,r,!1,null,"4e8dcacd",null),d=c.exports,p={name:"SubmitButton",components:{CircleLoader:d},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyle(){return{"button__content--hidden":this.loading}}}},m=p,h=(0,o.Z)(m,n,i,!1,null,"435db1b2",null),f=h.exports},5569:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("form",t._g({staticClass:"form"},t.$listeners),[t._t("default")],2)},i=[],a=(s(7658),{name:"FormComponent",provide(){return{form:this}},data(){return{inputs:[]}},methods:{registerInput(t){this.inputs.push(t)},unRegisterInput(t){this.inputs.filter((e=>e!==t))},validate(){const t=this.inputs.reduce(((t,e)=>{const s=e.validate();return t&&s}),!0);return t},reset(){this.inputs.forEach((t=>t.reset()))}}}),r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"348c09cc",null),o=u.exports},6041:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var n=function(){var t=this,e=t._self._c;return e("main",{staticClass:"login"},[e("AuthSection",[e("LoginForm")],1)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("AuthContainer",{staticClass:"login"},[e("MainTitle",{staticClass:"login__title"},[t._v(" Log in ")]),e("FormComponent",{ref:"form",staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("CustomInput",{staticClass:"login__input",attrs:{name:"email",type:"email",placeholder:"Email",rules:t.emailRules,autocomplete:"email"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),e("CustomInput",{staticClass:"login__input",attrs:{name:"password",type:"password",placeholder:"Password",rules:t.passwordRules,autocomplete:"current-password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),e("Button",{staticClass:"login__button",attrs:{type:"submit",loading:t.loading}},[t._v("Submit")])],1)],1)},r=[],l=(s(7658),s(5569)),u=s(2719),o=s(306),c=s(4439),d=s(7965),p=s(4034),m=s(3368),h={name:"LoginForm",components:{FormComponent:l.Z,CustomInput:u.Z,Button:o.Z,AuthContainer:c.Z,MainTitle:d.Z},data(){return{loading:!1,formData:{email:"",password:""}}},computed:{rules(){return{emailValidation:p.D6,passwordValidation:p.aO,isRequired:p.q9}},emailRules(){return[this.rules.emailValidation,this.rules.isRequired]},passwordRules(){return[this.rules.isRequired]}},methods:{...(0,m.nv)("auth",["login"]),async handleSubmit(){const{form:t}=this.$refs,e=t.validate();if(e)try{this.loading=!0,await this.login(this.formData),this.$router.push({name:"home"}),t.reset()}catch(s){this.$notify({type:"error",title:"Ouups!",text:s.message})}finally{this.loading=!1}}}},f=h,g=s(1001),_=(0,g.Z)(f,a,r,!1,null,"8bda5b80",null),v=_.exports,y=s(2714),b={name:"LoginPage",components:{LoginForm:v,AuthSection:y.Z}},C=b,w=(0,g.Z)(C,n,i,!1,null,"5f629860",null),Z=w.exports},4034:function(t,e,s){s.d(e,{D6:function(){return l},DD:function(){return r},aO:function(){return u},q9:function(){return a}});const n=new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),i=new RegExp(/^(?=.*[A-Za-z])(?=.*[\d])(?=.*[\W_])[a-zA-Z0-9\W_]{7,256}$/),a=t=>({hasPassed:!!t,message:"Please compilare this field."}),r=t=>e=>({hasPassed:e.length<=t,message:"You exceed the limit."}),l=t=>({hasPassed:n.test(t),message:"Wrong email"}),u=t=>({hasPassed:i.test(t),message:"The password must have at least one big letter and one sym"})}}]);
//# sourceMappingURL=41.5959414f.js.map