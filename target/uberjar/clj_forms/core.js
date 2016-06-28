// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('clj_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
/**
 * A prompt that will animate to help the user with a given input
 */
clj_forms.core.prompt_message = (function clj_forms$core$prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idv,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"my-messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,message], null)], null)], null);
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus.
 */
clj_forms.core.input_and_prompt = (function clj_forms$core$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element){
var input_focus = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label_value], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_focus) : cljs.core.deref.call(null,input_focus)))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
;})(input_focus))
});
clj_forms.core.weight_form = (function clj_forms$core$weight_form(weight_atom){
return clj_forms.core.input_and_prompt("Weight:","weight","number",weight_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.prompt_message,"What's your weight?"], null));
});
clj_forms.core.home_page = (function clj_forms$core$home_page(){
var weight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (weight){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Chad's Weight App"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.weight_form,weight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,"Submit"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Weight is: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weight) : cljs.core.deref.call(null,weight))], null)], null);
});
;})(weight))
});
clj_forms.core.current_page = (function clj_forms$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
/**
 * An input element which updates its value on change
 */
clj_forms.core.input_element = (function clj_forms$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$name,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$id,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required],[(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__13010_SHARP_){
var G__13013 = value;
var G__13014 = p1__13010_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13013,G__13014) : cljs.core.reset_BANG_.call(null,G__13013,G__13014));
}),""])], null);
});
var action__12909__auto___13018 = (function (params__12910__auto__){
if(cljs.core.map_QMARK_(params__12910__auto__)){
var map__13015 = params__12910__auto__;
var map__13015__$1 = ((((!((map__13015 == null)))?((((map__13015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13015):map__13015);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/home/ec2-user/clojure/clj_forms/src/cljs/clj_forms/core.cljs",16,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__12910__auto__)){
var vec__13017 = params__12910__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/home/ec2-user/clojure/clj_forms/src/cljs/clj_forms/core.cljs",16,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12909__auto___13018);

clj_forms.core.mount_root = (function clj_forms$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.current_page], null),document.getElementById("app"));
});
clj_forms.core.init_BANG_ = (function clj_forms$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return clj_forms.core.mount_root();
});
