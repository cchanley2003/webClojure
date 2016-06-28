// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
clj_forms.core.home_page = (function clj_forms$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to clj_forms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null)], null)], null);
});
clj_forms.core.about_page = (function clj_forms$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About clj_forms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
clj_forms.core.current_page = (function clj_forms$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__27267__auto___27376 = (function (params__27268__auto__){
if(cljs.core.map_QMARK_.call(null,params__27268__auto__)){
var map__27373 = params__27268__auto__;
var map__27373__$1 = ((((!((map__27373 == null)))?((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/clj_forms/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27268__auto__)){
var vec__27375 = params__27268__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.home_page;},new cljs.core.Symbol("clj-forms.core","home-page","clj-forms.core/home-page",1330646291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/clj_forms/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.home_page)?clj_forms.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27267__auto___27376);

var action__27267__auto___27380 = (function (params__27268__auto__){
if(cljs.core.map_QMARK_.call(null,params__27268__auto__)){
var map__27377 = params__27268__auto__;
var map__27377__$1 = ((((!((map__27377 == null)))?((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.about_page;},new cljs.core.Symbol("clj-forms.core","about-page","clj-forms.core/about-page",-534396665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/clj_forms/core.cljs",17,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.about_page)?clj_forms.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27268__auto__)){
var vec__27379 = params__27268__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return clj_forms.core.about_page;},new cljs.core.Symbol("clj-forms.core","about-page","clj-forms.core/about-page",-534396665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clj-forms.core","clj-forms.core",-989780127,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/clj_forms/core.cljs",17,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(clj_forms.core.about_page)?clj_forms.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27267__auto___27380);

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