// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('ajax.core');
/**
 * A prompt that will animate to help the user with a given input
 */
clj_forms.core.prompt_message = (function clj_forms$core$prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idv","idv",-151298240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus.
 */
clj_forms.core.input = (function clj_forms$core$input(label_value,input_name,input_type,input_element_arg){
var input_focus = reagent.core.atom.call(null,false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
;})(input_focus))
});
clj_forms.core.weight_form = (function clj_forms$core$weight_form(weight_atom){
return clj_forms.core.input.call(null,"Weight (lbs):","weight","number",weight_atom);
});
clj_forms.core.handler = (function clj_forms$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
clj_forms.core.error_handler = (function clj_forms$core$error_handler(p__23824){
var map__23827 = p__23824;
var map__23827__$1 = ((((!((map__23827 == null)))?((((map__23827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
var status = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
clj_forms.core.submitWeight_BANG_ = (function clj_forms$core$submitWeight_BANG_(w){
console.log(w);

return ajax.core.POST.call(null,"/addWeight",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World!",new cljs.core.Keyword(null,"user","user",1532431356),"Bob",new cljs.core.Keyword(null,"weight","weight",-1262796205),w], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),clj_forms.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),clj_forms.core.error_handler], null));
});
clj_forms.core.home_page = (function clj_forms$core$home_page(){
var weight = reagent.core.atom.call(null,null);
return ((function (weight){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Chad's Weight Measurement App"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.weight_form,weight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weight){
return (function (){
return clj_forms.core.submitWeight_BANG_.call(null,cljs.core.deref.call(null,weight));
});})(weight))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight is: ",cljs.core.deref.call(null,weight)], null)], null);
});
;})(weight))
});
clj_forms.core.current_page = (function clj_forms$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
/**
 * An input element which updates its value on change
 */
clj_forms.core.input_element = (function clj_forms$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),name,cljs.core.deref.call(null,value),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__23829_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__23829_SHARP_.target.value);
}),""])], null);
});
var action__23566__auto___23833 = (function (params__23567__auto__){
if(cljs.core.map_QMARK_.call(null,params__23567__auto__)){
var map__23830 = params__23567__auto__;
var map__23830__$1 = ((((!((map__23830 == null)))?((((map__23830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23830):map__23830);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23567__auto__)){
var vec__23832 = params__23567__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23566__auto___23833);

var action__23566__auto___23837 = (function (params__23567__auto__){
if(cljs.core.map_QMARK_.call(null,params__23567__auto__)){
var map__23834 = params__23567__auto__;
var map__23834__$1 = ((((!((map__23834 == null)))?((((map__23834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23834):map__23834);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23567__auto__)){
var vec__23836 = params__23567__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__23566__auto___23837);

clj_forms.core.mount_root = (function clj_forms$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.current_page], null),document.getElementById("app"));
});
clj_forms.core.init_BANG_ = (function clj_forms$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return clj_forms.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map