// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('ajax.core');
clj_forms.core.chart_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Consumption",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(1)),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(2)),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(3)),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(4)),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Date.UTC((2017),(0),(5)),(3)], null)], null)], null)], null);
clj_forms.core.chart_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)],[clj_forms.core.chart_data,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"vertical",new cljs.core.Keyword(null,"align","align",1964212802),"right",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"top",new cljs.core.Keyword(null,"x","x",2099068185),(-40),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"floating","floating",-1978091029),true,new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1),new cljs.core.Keyword(null,"shadow","shadow",873231803),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataLabels","dataLabels",63731124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Consumption by Day"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"line"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Ounces",new cljs.core.Keyword(null,"align","align",1964212802),"high"], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"justify"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime",new cljs.core.Keyword(null,"title","title",636505583),"Date"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueSuffix","valueSuffix",844437722)," ounces"], null)]);
/**
 * An input element which updates its value on change
 */
clj_forms.core.input_element = (function clj_forms$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),name,cljs.core.deref.call(null,value),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__33227_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__33227_SHARP_.target.value);
}),""])], null);
});
clj_forms.core.chart_did_mount = (function clj_forms$core$chart_did_mount(this$){
return (new Highcharts.Chart(reagent.core.dom_node.call(null,this$),cljs.core.clj__GT_js.call(null,clj_forms.core.chart_config)));
});
clj_forms.core.chart_render = (function clj_forms$core$chart_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null);
});
clj_forms.core.chart = (function clj_forms$core$chart(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),clj_forms.core.chart_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),clj_forms.core.chart_did_mount], null));
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
clj_forms.core.ounces_form = (function clj_forms$core$ounces_form(ounces_atom){
return clj_forms.core.input.call(null,"Ounces:","ounces","number",ounces_atom);
});
clj_forms.core.abv_form = (function clj_forms$core$abv_form(abv_atom){
return clj_forms.core.input.call(null,"ABV:","abv","number",abv_atom);
});
clj_forms.core.brand_form = (function clj_forms$core$brand_form(brand_atom){
return clj_forms.core.input.call(null,"Brand:","brand","text",brand_atom);
});
clj_forms.core.name_form = (function clj_forms$core$name_form(brand_atom){
return clj_forms.core.input.call(null,"Name:","name","text",brand_atom);
});
clj_forms.core.handler = (function clj_forms$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
clj_forms.core.error_handler = (function clj_forms$core$error_handler(p__33228){
var map__33231 = p__33228;
var map__33231__$1 = ((((!((map__33231 == null)))?((((map__33231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33231):map__33231);
var status = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
clj_forms.core.submitDrink_BANG_ = (function clj_forms$core$submitDrink_BANG_(brand,name,ounces,abv){
return ajax.core.POST.call(null,"/addDrink",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ounces","ounces",-1082911040),ounces,new cljs.core.Keyword(null,"abv","abv",-867667025),abv,new cljs.core.Keyword(null,"brand","brand",557863343),brand,new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),clj_forms.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),clj_forms.core.error_handler], null));
});
clj_forms.core.home_page = (function clj_forms$core$home_page(){
var ounces = reagent.core.atom.call(null,null);
var abv = reagent.core.atom.call(null,null);
var brand = reagent.core.atom.call(null,null);
var name = reagent.core.atom.call(null,null);
return ((function (ounces,abv,brand,name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Chad's Beer Consumption App"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.brand_form,brand], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.name_form,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.ounces_form,ounces], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.abv_form,abv], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add Beer!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ounces,abv,brand,name){
return (function (){
return clj_forms.core.submitDrink_BANG_.call(null,cljs.core.deref.call(null,brand),cljs.core.deref.call(null,name),cljs.core.deref.call(null,ounces),cljs.core.deref.call(null,abv));
});})(ounces,abv,brand,name))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_forms.core.chart], null)], null);
});
;})(ounces,abv,brand,name))
});
clj_forms.core.current_page = (function clj_forms$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__28453__auto___33236 = (function (params__28454__auto__){
if(cljs.core.map_QMARK_.call(null,params__28454__auto__)){
var map__33233 = params__28454__auto__;
var map__33233__$1 = ((((!((map__33233 == null)))?((((map__33233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33233):map__33233);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28454__auto__)){
var vec__33235 = params__28454__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28453__auto___33236);

var action__28453__auto___33240 = (function (params__28454__auto__){
if(cljs.core.map_QMARK_.call(null,params__28454__auto__)){
var map__33237 = params__28454__auto__;
var map__33237__$1 = ((((!((map__33237 == null)))?((((map__33237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33237):map__33237);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28454__auto__)){
var vec__33239 = params__28454__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kelli/git/webClojure/src/cljs/clj_forms/core.cljs",16,1,112,112,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__28453__auto___33240);

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