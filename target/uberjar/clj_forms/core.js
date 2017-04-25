// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('clj_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('ajax.core');
clj_forms.core.chart_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Consumption",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(1)),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(2)),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(3)),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(4)),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(5)),(3)], null)], null)], null)], null);
clj_forms.core.chart_config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$series,cljs.core.cst$kw$legend,cljs.core.cst$kw$plotOptions,cljs.core.cst$kw$title,cljs.core.cst$kw$chart,cljs.core.cst$kw$yAxis,cljs.core.cst$kw$credits,cljs.core.cst$kw$xAxis,cljs.core.cst$kw$tooltip],[clj_forms.core.chart_data,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$layout,"vertical",cljs.core.cst$kw$align,"right",cljs.core.cst$kw$verticalAlign,"top",cljs.core.cst$kw$x,(-40),cljs.core.cst$kw$y,(100),cljs.core.cst$kw$floating,true,cljs.core.cst$kw$borderWidth,(1),cljs.core.cst$kw$shadow,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataLabels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Consumption by Day"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"line"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min,(0),cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Ounces",cljs.core.cst$kw$align,"high"], null),cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"justify"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,false], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"datetime",cljs.core.cst$kw$title,"Date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$valueSuffix," ounces"], null)]);
/**
 * An input element which updates its value on change
 */
clj_forms.core.input_element = (function clj_forms$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$name,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$id,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required],[(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__17530_SHARP_){
var G__17533 = value;
var G__17534 = p1__17530_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17533,G__17534) : cljs.core.reset_BANG_.call(null,G__17533,G__17534));
}),""])], null);
});
clj_forms.core.chart_did_mount = (function clj_forms$core$chart_did_mount(this$){
return (new Highcharts.Chart(reagent.core.dom_node(this$),cljs.core.clj__GT_js(clj_forms.core.chart_config)));
});
clj_forms.core.chart_render = (function clj_forms$core$chart_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$min_DASH_width,"310px",cljs.core.cst$kw$max_DASH_width,"800px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin,"0 auto"], null)], null)], null);
});
clj_forms.core.chart = (function clj_forms$core$chart(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,clj_forms.core.chart_render,cljs.core.cst$kw$component_DASH_did_DASH_mount,clj_forms.core.chart_did_mount], null));
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus.
 */
clj_forms.core.input = (function clj_forms$core$input(label_value,input_name,input_type,input_element_arg){
var input_focus = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label_value], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
;})(input_focus))
});
clj_forms.core.ounces_form = (function clj_forms$core$ounces_form(ounces_atom){
return clj_forms.core.input("Ounces:","ounces","number",ounces_atom);
});
clj_forms.core.abv_form = (function clj_forms$core$abv_form(abv_atom){
return clj_forms.core.input("ABV:","abv","number",abv_atom);
});
clj_forms.core.brand_form = (function clj_forms$core$brand_form(brand_atom){
return clj_forms.core.input("Brand:","brand","text",brand_atom);
});
clj_forms.core.name_form = (function clj_forms$core$name_form(brand_atom){
return clj_forms.core.input("Name:","name","text",brand_atom);
});
clj_forms.core.handler = (function clj_forms$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
clj_forms.core.error_handler = (function clj_forms$core$error_handler(p__17535){
var map__17538 = p__17535;
var map__17538__$1 = ((((!((map__17538 == null)))?((((map__17538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17538):map__17538);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17538__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17538__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
clj_forms.core.submitDrink_BANG_ = (function clj_forms$core$submitDrink_BANG_(brand,name,ounces,abv){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/addDrink",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ounces,ounces,cljs.core.cst$kw$abv,abv,cljs.core.cst$kw$brand,brand,cljs.core.cst$kw$name,name], null),cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$handler,clj_forms.core.handler,cljs.core.cst$kw$error_DASH_handler,clj_forms.core.error_handler], null)], 0));
});
clj_forms.core.home_page = (function clj_forms$core$home_page(){
var ounces = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var abv = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var brand = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (ounces,abv,brand,name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Chad's Beer Consumption App"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.brand_form,brand], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.name_form,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.ounces_form,ounces], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.abv_form,abv], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Add Beer!",cljs.core.cst$kw$on_DASH_click,((function (ounces,abv,brand,name){
return (function (){
return clj_forms.core.submitDrink_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(brand) : cljs.core.deref.call(null,brand)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name) : cljs.core.deref.call(null,name)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ounces) : cljs.core.deref.call(null,ounces)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(abv) : cljs.core.deref.call(null,abv)));
});})(ounces,abv,brand,name))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.chart], null)], null);
});
;})(ounces,abv,brand,name))
});
clj_forms.core.current_page = (function clj_forms$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
var action__17412__auto___17543 = (function (params__17413__auto__){
if(cljs.core.map_QMARK_(params__17413__auto__)){
var map__17540 = params__17413__auto__;
var map__17540__$1 = ((((!((map__17540 == null)))?((((map__17540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17540):map__17540);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/Users/chanley/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17413__auto__)){
var vec__17542 = params__17413__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/Users/chanley/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17412__auto___17543);

var action__17412__auto___17547 = (function (params__17413__auto__){
if(cljs.core.map_QMARK_(params__17413__auto__)){
var map__17544 = params__17413__auto__;
var map__17544__$1 = ((((!((map__17544 == null)))?((((map__17544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17544):map__17544);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/Users/chanley/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17413__auto__)){
var vec__17546 = params__17413__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return clj_forms.core.home_page;},cljs.core.cst$sym$clj_DASH_forms$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clj_DASH_forms$core,cljs.core.cst$sym$home_DASH_page,"/Users/chanley/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__17412__auto___17547);

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
