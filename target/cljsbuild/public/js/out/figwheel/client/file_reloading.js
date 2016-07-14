// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21651__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21651__auto__){
return or__21651__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21651__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27439_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27439_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27444 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27445 = null;
var count__27446 = (0);
var i__27447 = (0);
while(true){
if((i__27447 < count__27446)){
var n = cljs.core._nth.call(null,chunk__27445,i__27447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27448 = seq__27444;
var G__27449 = chunk__27445;
var G__27450 = count__27446;
var G__27451 = (i__27447 + (1));
seq__27444 = G__27448;
chunk__27445 = G__27449;
count__27446 = G__27450;
i__27447 = G__27451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27444);
if(temp__4657__auto__){
var seq__27444__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27444__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__27444__$1);
var G__27452 = cljs.core.chunk_rest.call(null,seq__27444__$1);
var G__27453 = c__22462__auto__;
var G__27454 = cljs.core.count.call(null,c__22462__auto__);
var G__27455 = (0);
seq__27444 = G__27452;
chunk__27445 = G__27453;
count__27446 = G__27454;
i__27447 = G__27455;
continue;
} else {
var n = cljs.core.first.call(null,seq__27444__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27456 = cljs.core.next.call(null,seq__27444__$1);
var G__27457 = null;
var G__27458 = (0);
var G__27459 = (0);
seq__27444 = G__27456;
chunk__27445 = G__27457;
count__27446 = G__27458;
i__27447 = G__27459;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27498_27505 = cljs.core.seq.call(null,deps);
var chunk__27499_27506 = null;
var count__27500_27507 = (0);
var i__27501_27508 = (0);
while(true){
if((i__27501_27508 < count__27500_27507)){
var dep_27509 = cljs.core._nth.call(null,chunk__27499_27506,i__27501_27508);
topo_sort_helper_STAR_.call(null,dep_27509,(depth + (1)),state);

var G__27510 = seq__27498_27505;
var G__27511 = chunk__27499_27506;
var G__27512 = count__27500_27507;
var G__27513 = (i__27501_27508 + (1));
seq__27498_27505 = G__27510;
chunk__27499_27506 = G__27511;
count__27500_27507 = G__27512;
i__27501_27508 = G__27513;
continue;
} else {
var temp__4657__auto___27514 = cljs.core.seq.call(null,seq__27498_27505);
if(temp__4657__auto___27514){
var seq__27498_27515__$1 = temp__4657__auto___27514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27498_27515__$1)){
var c__22462__auto___27516 = cljs.core.chunk_first.call(null,seq__27498_27515__$1);
var G__27517 = cljs.core.chunk_rest.call(null,seq__27498_27515__$1);
var G__27518 = c__22462__auto___27516;
var G__27519 = cljs.core.count.call(null,c__22462__auto___27516);
var G__27520 = (0);
seq__27498_27505 = G__27517;
chunk__27499_27506 = G__27518;
count__27500_27507 = G__27519;
i__27501_27508 = G__27520;
continue;
} else {
var dep_27521 = cljs.core.first.call(null,seq__27498_27515__$1);
topo_sort_helper_STAR_.call(null,dep_27521,(depth + (1)),state);

var G__27522 = cljs.core.next.call(null,seq__27498_27515__$1);
var G__27523 = null;
var G__27524 = (0);
var G__27525 = (0);
seq__27498_27505 = G__27522;
chunk__27499_27506 = G__27523;
count__27500_27507 = G__27524;
i__27501_27508 = G__27525;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27502){
var vec__27504 = p__27502;
var x = cljs.core.nth.call(null,vec__27504,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27504,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27504,x,xs,get_deps__$1){
return (function (p1__27460_SHARP_){
return clojure.set.difference.call(null,p1__27460_SHARP_,x);
});})(vec__27504,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27538 = cljs.core.seq.call(null,provides);
var chunk__27539 = null;
var count__27540 = (0);
var i__27541 = (0);
while(true){
if((i__27541 < count__27540)){
var prov = cljs.core._nth.call(null,chunk__27539,i__27541);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27542_27550 = cljs.core.seq.call(null,requires);
var chunk__27543_27551 = null;
var count__27544_27552 = (0);
var i__27545_27553 = (0);
while(true){
if((i__27545_27553 < count__27544_27552)){
var req_27554 = cljs.core._nth.call(null,chunk__27543_27551,i__27545_27553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27554,prov);

var G__27555 = seq__27542_27550;
var G__27556 = chunk__27543_27551;
var G__27557 = count__27544_27552;
var G__27558 = (i__27545_27553 + (1));
seq__27542_27550 = G__27555;
chunk__27543_27551 = G__27556;
count__27544_27552 = G__27557;
i__27545_27553 = G__27558;
continue;
} else {
var temp__4657__auto___27559 = cljs.core.seq.call(null,seq__27542_27550);
if(temp__4657__auto___27559){
var seq__27542_27560__$1 = temp__4657__auto___27559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27542_27560__$1)){
var c__22462__auto___27561 = cljs.core.chunk_first.call(null,seq__27542_27560__$1);
var G__27562 = cljs.core.chunk_rest.call(null,seq__27542_27560__$1);
var G__27563 = c__22462__auto___27561;
var G__27564 = cljs.core.count.call(null,c__22462__auto___27561);
var G__27565 = (0);
seq__27542_27550 = G__27562;
chunk__27543_27551 = G__27563;
count__27544_27552 = G__27564;
i__27545_27553 = G__27565;
continue;
} else {
var req_27566 = cljs.core.first.call(null,seq__27542_27560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27566,prov);

var G__27567 = cljs.core.next.call(null,seq__27542_27560__$1);
var G__27568 = null;
var G__27569 = (0);
var G__27570 = (0);
seq__27542_27550 = G__27567;
chunk__27543_27551 = G__27568;
count__27544_27552 = G__27569;
i__27545_27553 = G__27570;
continue;
}
} else {
}
}
break;
}

var G__27571 = seq__27538;
var G__27572 = chunk__27539;
var G__27573 = count__27540;
var G__27574 = (i__27541 + (1));
seq__27538 = G__27571;
chunk__27539 = G__27572;
count__27540 = G__27573;
i__27541 = G__27574;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27538);
if(temp__4657__auto__){
var seq__27538__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27538__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__27538__$1);
var G__27575 = cljs.core.chunk_rest.call(null,seq__27538__$1);
var G__27576 = c__22462__auto__;
var G__27577 = cljs.core.count.call(null,c__22462__auto__);
var G__27578 = (0);
seq__27538 = G__27575;
chunk__27539 = G__27576;
count__27540 = G__27577;
i__27541 = G__27578;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27538__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27546_27579 = cljs.core.seq.call(null,requires);
var chunk__27547_27580 = null;
var count__27548_27581 = (0);
var i__27549_27582 = (0);
while(true){
if((i__27549_27582 < count__27548_27581)){
var req_27583 = cljs.core._nth.call(null,chunk__27547_27580,i__27549_27582);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27583,prov);

var G__27584 = seq__27546_27579;
var G__27585 = chunk__27547_27580;
var G__27586 = count__27548_27581;
var G__27587 = (i__27549_27582 + (1));
seq__27546_27579 = G__27584;
chunk__27547_27580 = G__27585;
count__27548_27581 = G__27586;
i__27549_27582 = G__27587;
continue;
} else {
var temp__4657__auto___27588__$1 = cljs.core.seq.call(null,seq__27546_27579);
if(temp__4657__auto___27588__$1){
var seq__27546_27589__$1 = temp__4657__auto___27588__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27546_27589__$1)){
var c__22462__auto___27590 = cljs.core.chunk_first.call(null,seq__27546_27589__$1);
var G__27591 = cljs.core.chunk_rest.call(null,seq__27546_27589__$1);
var G__27592 = c__22462__auto___27590;
var G__27593 = cljs.core.count.call(null,c__22462__auto___27590);
var G__27594 = (0);
seq__27546_27579 = G__27591;
chunk__27547_27580 = G__27592;
count__27548_27581 = G__27593;
i__27549_27582 = G__27594;
continue;
} else {
var req_27595 = cljs.core.first.call(null,seq__27546_27589__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27595,prov);

var G__27596 = cljs.core.next.call(null,seq__27546_27589__$1);
var G__27597 = null;
var G__27598 = (0);
var G__27599 = (0);
seq__27546_27579 = G__27596;
chunk__27547_27580 = G__27597;
count__27548_27581 = G__27598;
i__27549_27582 = G__27599;
continue;
}
} else {
}
}
break;
}

var G__27600 = cljs.core.next.call(null,seq__27538__$1);
var G__27601 = null;
var G__27602 = (0);
var G__27603 = (0);
seq__27538 = G__27600;
chunk__27539 = G__27601;
count__27540 = G__27602;
i__27541 = G__27603;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27608_27612 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27609_27613 = null;
var count__27610_27614 = (0);
var i__27611_27615 = (0);
while(true){
if((i__27611_27615 < count__27610_27614)){
var ns_27616 = cljs.core._nth.call(null,chunk__27609_27613,i__27611_27615);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27616);

var G__27617 = seq__27608_27612;
var G__27618 = chunk__27609_27613;
var G__27619 = count__27610_27614;
var G__27620 = (i__27611_27615 + (1));
seq__27608_27612 = G__27617;
chunk__27609_27613 = G__27618;
count__27610_27614 = G__27619;
i__27611_27615 = G__27620;
continue;
} else {
var temp__4657__auto___27621 = cljs.core.seq.call(null,seq__27608_27612);
if(temp__4657__auto___27621){
var seq__27608_27622__$1 = temp__4657__auto___27621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27608_27622__$1)){
var c__22462__auto___27623 = cljs.core.chunk_first.call(null,seq__27608_27622__$1);
var G__27624 = cljs.core.chunk_rest.call(null,seq__27608_27622__$1);
var G__27625 = c__22462__auto___27623;
var G__27626 = cljs.core.count.call(null,c__22462__auto___27623);
var G__27627 = (0);
seq__27608_27612 = G__27624;
chunk__27609_27613 = G__27625;
count__27610_27614 = G__27626;
i__27611_27615 = G__27627;
continue;
} else {
var ns_27628 = cljs.core.first.call(null,seq__27608_27622__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27628);

var G__27629 = cljs.core.next.call(null,seq__27608_27622__$1);
var G__27630 = null;
var G__27631 = (0);
var G__27632 = (0);
seq__27608_27612 = G__27629;
chunk__27609_27613 = G__27630;
count__27610_27614 = G__27631;
i__27611_27615 = G__27632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21651__auto__ = goog.require__;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27633__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27634__i = 0, G__27634__a = new Array(arguments.length -  0);
while (G__27634__i < G__27634__a.length) {G__27634__a[G__27634__i] = arguments[G__27634__i + 0]; ++G__27634__i;}
  args = new cljs.core.IndexedSeq(G__27634__a,0);
} 
return G__27633__delegate.call(this,args);};
G__27633.cljs$lang$maxFixedArity = 0;
G__27633.cljs$lang$applyTo = (function (arglist__27635){
var args = cljs.core.seq(arglist__27635);
return G__27633__delegate(args);
});
G__27633.cljs$core$IFn$_invoke$arity$variadic = G__27633__delegate;
return G__27633;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27637 = cljs.core._EQ_;
var expr__27638 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27637.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27638))){
var path_parts = ((function (pred__27637,expr__27638){
return (function (p1__27636_SHARP_){
return clojure.string.split.call(null,p1__27636_SHARP_,/[\/\\]/);
});})(pred__27637,expr__27638))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27637,expr__27638){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27640){if((e27640 instanceof Error)){
var e = e27640;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27640;

}
}})());
});
;})(path_parts,sep,root,pred__27637,expr__27638))
} else {
if(cljs.core.truth_(pred__27637.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27638))){
return ((function (pred__27637,expr__27638){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27637,expr__27638){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27637,expr__27638))
);

return deferred.addErrback(((function (deferred,pred__27637,expr__27638){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27637,expr__27638))
);
});
;})(pred__27637,expr__27638))
} else {
return ((function (pred__27637,expr__27638){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27637,expr__27638))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27641,callback){
var map__27644 = p__27641;
var map__27644__$1 = ((((!((map__27644 == null)))?((((map__27644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var file_msg = map__27644__$1;
var request_url = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27644,map__27644__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27644,map__27644__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27670_27690 = state_27668__$1;
(statearr_27670_27690[(2)] = inst_27664);

(statearr_27670_27690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (1))){
var state_27668__$1 = state_27668;
var statearr_27671_27691 = state_27668__$1;
(statearr_27671_27691[(2)] = null);

(statearr_27671_27691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (4))){
var inst_27648 = (state_27668[(7)]);
var inst_27648__$1 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27672 = state_27668;
(statearr_27672[(7)] = inst_27648__$1);

return statearr_27672;
})();
if(cljs.core.truth_(inst_27648__$1)){
var statearr_27673_27692 = state_27668__$1;
(statearr_27673_27692[(1)] = (5));

} else {
var statearr_27674_27693 = state_27668__$1;
(statearr_27674_27693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var state_27668__$1 = state_27668;
var statearr_27675_27694 = state_27668__$1;
(statearr_27675_27694[(2)] = null);

(statearr_27675_27694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27669 === (11))){
var inst_27660 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27676 = state_27668;
(statearr_27676[(8)] = inst_27660);

return statearr_27676;
})();
var statearr_27677_27695 = state_27668__$1;
(statearr_27677_27695[(2)] = null);

(statearr_27677_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (9))){
var inst_27652 = (state_27668[(9)]);
var inst_27654 = (state_27668[(10)]);
var inst_27656 = inst_27654.call(null,inst_27652);
var state_27668__$1 = state_27668;
var statearr_27678_27696 = state_27668__$1;
(statearr_27678_27696[(2)] = inst_27656);

(statearr_27678_27696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27648 = (state_27668[(7)]);
var inst_27650 = figwheel.client.file_reloading.blocking_load.call(null,inst_27648);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(8),inst_27650);
} else {
if((state_val_27669 === (10))){
var inst_27652 = (state_27668[(9)]);
var inst_27658 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27652);
var state_27668__$1 = state_27668;
var statearr_27679_27697 = state_27668__$1;
(statearr_27679_27697[(2)] = inst_27658);

(statearr_27679_27697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (8))){
var inst_27648 = (state_27668[(7)]);
var inst_27654 = (state_27668[(10)]);
var inst_27652 = (state_27668[(2)]);
var inst_27653 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27654__$1 = cljs.core.get.call(null,inst_27653,inst_27648);
var state_27668__$1 = (function (){var statearr_27680 = state_27668;
(statearr_27680[(9)] = inst_27652);

(statearr_27680[(10)] = inst_27654__$1);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27654__$1)){
var statearr_27681_27698 = state_27668__$1;
(statearr_27681_27698[(1)] = (9));

} else {
var statearr_27682_27699 = state_27668__$1;
(statearr_27682_27699[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24331__auto__))
;
return ((function (switch__24219__auto__,c__24331__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24220__auto__ = null;
var figwheel$client$file_reloading$state_machine__24220__auto____0 = (function (){
var statearr_27686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27686[(0)] = figwheel$client$file_reloading$state_machine__24220__auto__);

(statearr_27686[(1)] = (1));

return statearr_27686;
});
var figwheel$client$file_reloading$state_machine__24220__auto____1 = (function (state_27668){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e27687){if((e27687 instanceof Object)){
var ex__24223__auto__ = e27687;
var statearr_27688_27700 = state_27668;
(statearr_27688_27700[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27668;
state_27668 = G__27701;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24220__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24220__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24220__auto____0;
figwheel$client$file_reloading$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24220__auto____1;
return figwheel$client$file_reloading$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__))
})();
var state__24333__auto__ = (function (){var statearr_27689 = f__24332__auto__.call(null);
(statearr_27689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__))
);

return c__24331__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27702,callback){
var map__27705 = p__27702;
var map__27705__$1 = ((((!((map__27705 == null)))?((((map__27705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);
var file_msg = map__27705__$1;
var namespace = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27705,map__27705__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27705,map__27705__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27707){
var map__27710 = p__27707;
var map__27710__$1 = ((((!((map__27710 == null)))?((((map__27710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);
var file_msg = map__27710__$1;
var namespace = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21639__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21639__auto__){
var or__21651__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
var or__21651__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21651__auto____$1)){
return or__21651__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21639__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27712,callback){
var map__27715 = p__27712;
var map__27715__$1 = ((((!((map__27715 == null)))?((((map__27715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27715):map__27715);
var file_msg = map__27715__$1;
var request_url = cljs.core.get.call(null,map__27715__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24331__auto___27803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___27803,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___27803,out){
return (function (state_27785){
var state_val_27786 = (state_27785[(1)]);
if((state_val_27786 === (1))){
var inst_27763 = cljs.core.nth.call(null,files,(0),null);
var inst_27764 = cljs.core.nthnext.call(null,files,(1));
var inst_27765 = files;
var state_27785__$1 = (function (){var statearr_27787 = state_27785;
(statearr_27787[(7)] = inst_27764);

(statearr_27787[(8)] = inst_27763);

(statearr_27787[(9)] = inst_27765);

return statearr_27787;
})();
var statearr_27788_27804 = state_27785__$1;
(statearr_27788_27804[(2)] = null);

(statearr_27788_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (2))){
var inst_27768 = (state_27785[(10)]);
var inst_27765 = (state_27785[(9)]);
var inst_27768__$1 = cljs.core.nth.call(null,inst_27765,(0),null);
var inst_27769 = cljs.core.nthnext.call(null,inst_27765,(1));
var inst_27770 = (inst_27768__$1 == null);
var inst_27771 = cljs.core.not.call(null,inst_27770);
var state_27785__$1 = (function (){var statearr_27789 = state_27785;
(statearr_27789[(11)] = inst_27769);

(statearr_27789[(10)] = inst_27768__$1);

return statearr_27789;
})();
if(inst_27771){
var statearr_27790_27805 = state_27785__$1;
(statearr_27790_27805[(1)] = (4));

} else {
var statearr_27791_27806 = state_27785__$1;
(statearr_27791_27806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (3))){
var inst_27783 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27785__$1,inst_27783);
} else {
if((state_val_27786 === (4))){
var inst_27768 = (state_27785[(10)]);
var inst_27773 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27768);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27785__$1,(7),inst_27773);
} else {
if((state_val_27786 === (5))){
var inst_27779 = cljs.core.async.close_BANG_.call(null,out);
var state_27785__$1 = state_27785;
var statearr_27792_27807 = state_27785__$1;
(statearr_27792_27807[(2)] = inst_27779);

(statearr_27792_27807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (6))){
var inst_27781 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27793_27808 = state_27785__$1;
(statearr_27793_27808[(2)] = inst_27781);

(statearr_27793_27808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (7))){
var inst_27769 = (state_27785[(11)]);
var inst_27775 = (state_27785[(2)]);
var inst_27776 = cljs.core.async.put_BANG_.call(null,out,inst_27775);
var inst_27765 = inst_27769;
var state_27785__$1 = (function (){var statearr_27794 = state_27785;
(statearr_27794[(12)] = inst_27776);

(statearr_27794[(9)] = inst_27765);

return statearr_27794;
})();
var statearr_27795_27809 = state_27785__$1;
(statearr_27795_27809[(2)] = null);

(statearr_27795_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24331__auto___27803,out))
;
return ((function (switch__24219__auto__,c__24331__auto___27803,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____0 = (function (){
var statearr_27799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27799[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__);

(statearr_27799[(1)] = (1));

return statearr_27799;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____1 = (function (state_27785){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_27785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e27800){if((e27800 instanceof Object)){
var ex__24223__auto__ = e27800;
var statearr_27801_27810 = state_27785;
(statearr_27801_27810[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27811 = state_27785;
state_27785 = G__27811;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__ = function(state_27785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____1.call(this,state_27785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___27803,out))
})();
var state__24333__auto__ = (function (){var statearr_27802 = f__24332__auto__.call(null);
(statearr_27802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___27803);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___27803,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27812,opts){
var map__27816 = p__27812;
var map__27816__$1 = ((((!((map__27816 == null)))?((((map__27816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27816):map__27816);
var eval_body__$1 = cljs.core.get.call(null,map__27816__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21639__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21639__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21639__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27818){var e = e27818;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27819_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27824){
var vec__27825 = p__27824;
var k = cljs.core.nth.call(null,vec__27825,(0),null);
var v = cljs.core.nth.call(null,vec__27825,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27826){
var vec__27827 = p__27826;
var k = cljs.core.nth.call(null,vec__27827,(0),null);
var v = cljs.core.nth.call(null,vec__27827,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27831,p__27832){
var map__28079 = p__27831;
var map__28079__$1 = ((((!((map__28079 == null)))?((((map__28079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28079):map__28079);
var opts = map__28079__$1;
var before_jsload = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28080 = p__27832;
var map__28080__$1 = ((((!((map__28080 == null)))?((((map__28080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28080):map__28080);
var msg = map__28080__$1;
var files = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28233){
var state_val_28234 = (state_28233[(1)]);
if((state_val_28234 === (7))){
var inst_28097 = (state_28233[(7)]);
var inst_28094 = (state_28233[(8)]);
var inst_28095 = (state_28233[(9)]);
var inst_28096 = (state_28233[(10)]);
var inst_28102 = cljs.core._nth.call(null,inst_28095,inst_28097);
var inst_28103 = figwheel.client.file_reloading.eval_body.call(null,inst_28102,opts);
var inst_28104 = (inst_28097 + (1));
var tmp28235 = inst_28094;
var tmp28236 = inst_28095;
var tmp28237 = inst_28096;
var inst_28094__$1 = tmp28235;
var inst_28095__$1 = tmp28236;
var inst_28096__$1 = tmp28237;
var inst_28097__$1 = inst_28104;
var state_28233__$1 = (function (){var statearr_28238 = state_28233;
(statearr_28238[(7)] = inst_28097__$1);

(statearr_28238[(8)] = inst_28094__$1);

(statearr_28238[(9)] = inst_28095__$1);

(statearr_28238[(11)] = inst_28103);

(statearr_28238[(10)] = inst_28096__$1);

return statearr_28238;
})();
var statearr_28239_28325 = state_28233__$1;
(statearr_28239_28325[(2)] = null);

(statearr_28239_28325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (20))){
var inst_28137 = (state_28233[(12)]);
var inst_28145 = figwheel.client.file_reloading.sort_files.call(null,inst_28137);
var state_28233__$1 = state_28233;
var statearr_28240_28326 = state_28233__$1;
(statearr_28240_28326[(2)] = inst_28145);

(statearr_28240_28326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (27))){
var state_28233__$1 = state_28233;
var statearr_28241_28327 = state_28233__$1;
(statearr_28241_28327[(2)] = null);

(statearr_28241_28327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (1))){
var inst_28086 = (state_28233[(13)]);
var inst_28083 = before_jsload.call(null,files);
var inst_28084 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28085 = (function (){return ((function (inst_28086,inst_28083,inst_28084,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27828_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27828_SHARP_);
});
;})(inst_28086,inst_28083,inst_28084,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28086__$1 = cljs.core.filter.call(null,inst_28085,files);
var inst_28087 = cljs.core.not_empty.call(null,inst_28086__$1);
var state_28233__$1 = (function (){var statearr_28242 = state_28233;
(statearr_28242[(14)] = inst_28084);

(statearr_28242[(13)] = inst_28086__$1);

(statearr_28242[(15)] = inst_28083);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28243_28328 = state_28233__$1;
(statearr_28243_28328[(1)] = (2));

} else {
var statearr_28244_28329 = state_28233__$1;
(statearr_28244_28329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (24))){
var state_28233__$1 = state_28233;
var statearr_28245_28330 = state_28233__$1;
(statearr_28245_28330[(2)] = null);

(statearr_28245_28330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (39))){
var inst_28187 = (state_28233[(16)]);
var state_28233__$1 = state_28233;
var statearr_28246_28331 = state_28233__$1;
(statearr_28246_28331[(2)] = inst_28187);

(statearr_28246_28331[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (46))){
var inst_28228 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28247_28332 = state_28233__$1;
(statearr_28247_28332[(2)] = inst_28228);

(statearr_28247_28332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (4))){
var inst_28131 = (state_28233[(2)]);
var inst_28132 = cljs.core.List.EMPTY;
var inst_28133 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28132);
var inst_28134 = (function (){return ((function (inst_28131,inst_28132,inst_28133,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27829_SHARP_){
var and__21639__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27829_SHARP_);
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27829_SHARP_));
} else {
return and__21639__auto__;
}
});
;})(inst_28131,inst_28132,inst_28133,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28135 = cljs.core.filter.call(null,inst_28134,files);
var inst_28136 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28137 = cljs.core.concat.call(null,inst_28135,inst_28136);
var state_28233__$1 = (function (){var statearr_28248 = state_28233;
(statearr_28248[(17)] = inst_28131);

(statearr_28248[(18)] = inst_28133);

(statearr_28248[(12)] = inst_28137);

return statearr_28248;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28249_28333 = state_28233__$1;
(statearr_28249_28333[(1)] = (16));

} else {
var statearr_28250_28334 = state_28233__$1;
(statearr_28250_28334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (15))){
var inst_28121 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28251_28335 = state_28233__$1;
(statearr_28251_28335[(2)] = inst_28121);

(statearr_28251_28335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (21))){
var inst_28147 = (state_28233[(19)]);
var inst_28147__$1 = (state_28233[(2)]);
var inst_28148 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28147__$1);
var state_28233__$1 = (function (){var statearr_28252 = state_28233;
(statearr_28252[(19)] = inst_28147__$1);

return statearr_28252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28233__$1,(22),inst_28148);
} else {
if((state_val_28234 === (31))){
var inst_28231 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28233__$1,inst_28231);
} else {
if((state_val_28234 === (32))){
var inst_28187 = (state_28233[(16)]);
var inst_28192 = inst_28187.cljs$lang$protocol_mask$partition0$;
var inst_28193 = (inst_28192 & (64));
var inst_28194 = inst_28187.cljs$core$ISeq$;
var inst_28195 = (inst_28193) || (inst_28194);
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28195)){
var statearr_28253_28336 = state_28233__$1;
(statearr_28253_28336[(1)] = (35));

} else {
var statearr_28254_28337 = state_28233__$1;
(statearr_28254_28337[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (40))){
var inst_28208 = (state_28233[(20)]);
var inst_28207 = (state_28233[(2)]);
var inst_28208__$1 = cljs.core.get.call(null,inst_28207,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28209 = cljs.core.get.call(null,inst_28207,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28210 = cljs.core.not_empty.call(null,inst_28208__$1);
var state_28233__$1 = (function (){var statearr_28255 = state_28233;
(statearr_28255[(21)] = inst_28209);

(statearr_28255[(20)] = inst_28208__$1);

return statearr_28255;
})();
if(cljs.core.truth_(inst_28210)){
var statearr_28256_28338 = state_28233__$1;
(statearr_28256_28338[(1)] = (41));

} else {
var statearr_28257_28339 = state_28233__$1;
(statearr_28257_28339[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (33))){
var state_28233__$1 = state_28233;
var statearr_28258_28340 = state_28233__$1;
(statearr_28258_28340[(2)] = false);

(statearr_28258_28340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (13))){
var inst_28107 = (state_28233[(22)]);
var inst_28111 = cljs.core.chunk_first.call(null,inst_28107);
var inst_28112 = cljs.core.chunk_rest.call(null,inst_28107);
var inst_28113 = cljs.core.count.call(null,inst_28111);
var inst_28094 = inst_28112;
var inst_28095 = inst_28111;
var inst_28096 = inst_28113;
var inst_28097 = (0);
var state_28233__$1 = (function (){var statearr_28259 = state_28233;
(statearr_28259[(7)] = inst_28097);

(statearr_28259[(8)] = inst_28094);

(statearr_28259[(9)] = inst_28095);

(statearr_28259[(10)] = inst_28096);

return statearr_28259;
})();
var statearr_28260_28341 = state_28233__$1;
(statearr_28260_28341[(2)] = null);

(statearr_28260_28341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (22))){
var inst_28147 = (state_28233[(19)]);
var inst_28151 = (state_28233[(23)]);
var inst_28150 = (state_28233[(24)]);
var inst_28155 = (state_28233[(25)]);
var inst_28150__$1 = (state_28233[(2)]);
var inst_28151__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28150__$1);
var inst_28152 = (function (){var all_files = inst_28147;
var res_SINGLEQUOTE_ = inst_28150__$1;
var res = inst_28151__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28147,inst_28151,inst_28150,inst_28155,inst_28150__$1,inst_28151__$1,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27830_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28147,inst_28151,inst_28150,inst_28155,inst_28150__$1,inst_28151__$1,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28153 = cljs.core.filter.call(null,inst_28152,inst_28150__$1);
var inst_28154 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28154);
var inst_28156 = cljs.core.not_empty.call(null,inst_28155__$1);
var state_28233__$1 = (function (){var statearr_28261 = state_28233;
(statearr_28261[(23)] = inst_28151__$1);

(statearr_28261[(24)] = inst_28150__$1);

(statearr_28261[(26)] = inst_28153);

(statearr_28261[(25)] = inst_28155__$1);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28156)){
var statearr_28262_28342 = state_28233__$1;
(statearr_28262_28342[(1)] = (23));

} else {
var statearr_28263_28343 = state_28233__$1;
(statearr_28263_28343[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (36))){
var state_28233__$1 = state_28233;
var statearr_28264_28344 = state_28233__$1;
(statearr_28264_28344[(2)] = false);

(statearr_28264_28344[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (41))){
var inst_28208 = (state_28233[(20)]);
var inst_28212 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28213 = cljs.core.map.call(null,inst_28212,inst_28208);
var inst_28214 = cljs.core.pr_str.call(null,inst_28213);
var inst_28215 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28214)].join('');
var inst_28216 = figwheel.client.utils.log.call(null,inst_28215);
var state_28233__$1 = state_28233;
var statearr_28265_28345 = state_28233__$1;
(statearr_28265_28345[(2)] = inst_28216);

(statearr_28265_28345[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (43))){
var inst_28209 = (state_28233[(21)]);
var inst_28219 = (state_28233[(2)]);
var inst_28220 = cljs.core.not_empty.call(null,inst_28209);
var state_28233__$1 = (function (){var statearr_28266 = state_28233;
(statearr_28266[(27)] = inst_28219);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28220)){
var statearr_28267_28346 = state_28233__$1;
(statearr_28267_28346[(1)] = (44));

} else {
var statearr_28268_28347 = state_28233__$1;
(statearr_28268_28347[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (29))){
var inst_28147 = (state_28233[(19)]);
var inst_28151 = (state_28233[(23)]);
var inst_28150 = (state_28233[(24)]);
var inst_28153 = (state_28233[(26)]);
var inst_28155 = (state_28233[(25)]);
var inst_28187 = (state_28233[(16)]);
var inst_28183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28186 = (function (){var all_files = inst_28147;
var res_SINGLEQUOTE_ = inst_28150;
var res = inst_28151;
var files_not_loaded = inst_28153;
var dependencies_that_loaded = inst_28155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28187,inst_28183,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28185){
var map__28269 = p__28185;
var map__28269__$1 = ((((!((map__28269 == null)))?((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var namespace = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28187,inst_28183,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28187__$1 = cljs.core.group_by.call(null,inst_28186,inst_28153);
var inst_28189 = (inst_28187__$1 == null);
var inst_28190 = cljs.core.not.call(null,inst_28189);
var state_28233__$1 = (function (){var statearr_28271 = state_28233;
(statearr_28271[(28)] = inst_28183);

(statearr_28271[(16)] = inst_28187__$1);

return statearr_28271;
})();
if(inst_28190){
var statearr_28272_28348 = state_28233__$1;
(statearr_28272_28348[(1)] = (32));

} else {
var statearr_28273_28349 = state_28233__$1;
(statearr_28273_28349[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (44))){
var inst_28209 = (state_28233[(21)]);
var inst_28222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28209);
var inst_28223 = cljs.core.pr_str.call(null,inst_28222);
var inst_28224 = [cljs.core.str("not required: "),cljs.core.str(inst_28223)].join('');
var inst_28225 = figwheel.client.utils.log.call(null,inst_28224);
var state_28233__$1 = state_28233;
var statearr_28274_28350 = state_28233__$1;
(statearr_28274_28350[(2)] = inst_28225);

(statearr_28274_28350[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (6))){
var inst_28128 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28275_28351 = state_28233__$1;
(statearr_28275_28351[(2)] = inst_28128);

(statearr_28275_28351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (28))){
var inst_28153 = (state_28233[(26)]);
var inst_28180 = (state_28233[(2)]);
var inst_28181 = cljs.core.not_empty.call(null,inst_28153);
var state_28233__$1 = (function (){var statearr_28276 = state_28233;
(statearr_28276[(29)] = inst_28180);

return statearr_28276;
})();
if(cljs.core.truth_(inst_28181)){
var statearr_28277_28352 = state_28233__$1;
(statearr_28277_28352[(1)] = (29));

} else {
var statearr_28278_28353 = state_28233__$1;
(statearr_28278_28353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (25))){
var inst_28151 = (state_28233[(23)]);
var inst_28167 = (state_28233[(2)]);
var inst_28168 = cljs.core.not_empty.call(null,inst_28151);
var state_28233__$1 = (function (){var statearr_28279 = state_28233;
(statearr_28279[(30)] = inst_28167);

return statearr_28279;
})();
if(cljs.core.truth_(inst_28168)){
var statearr_28280_28354 = state_28233__$1;
(statearr_28280_28354[(1)] = (26));

} else {
var statearr_28281_28355 = state_28233__$1;
(statearr_28281_28355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (34))){
var inst_28202 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28202)){
var statearr_28282_28356 = state_28233__$1;
(statearr_28282_28356[(1)] = (38));

} else {
var statearr_28283_28357 = state_28233__$1;
(statearr_28283_28357[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (17))){
var state_28233__$1 = state_28233;
var statearr_28284_28358 = state_28233__$1;
(statearr_28284_28358[(2)] = recompile_dependents);

(statearr_28284_28358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (3))){
var state_28233__$1 = state_28233;
var statearr_28285_28359 = state_28233__$1;
(statearr_28285_28359[(2)] = null);

(statearr_28285_28359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (12))){
var inst_28124 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28286_28360 = state_28233__$1;
(statearr_28286_28360[(2)] = inst_28124);

(statearr_28286_28360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (2))){
var inst_28086 = (state_28233[(13)]);
var inst_28093 = cljs.core.seq.call(null,inst_28086);
var inst_28094 = inst_28093;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28233__$1 = (function (){var statearr_28287 = state_28233;
(statearr_28287[(7)] = inst_28097);

(statearr_28287[(8)] = inst_28094);

(statearr_28287[(9)] = inst_28095);

(statearr_28287[(10)] = inst_28096);

return statearr_28287;
})();
var statearr_28288_28361 = state_28233__$1;
(statearr_28288_28361[(2)] = null);

(statearr_28288_28361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (23))){
var inst_28147 = (state_28233[(19)]);
var inst_28151 = (state_28233[(23)]);
var inst_28150 = (state_28233[(24)]);
var inst_28153 = (state_28233[(26)]);
var inst_28155 = (state_28233[(25)]);
var inst_28158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28160 = (function (){var all_files = inst_28147;
var res_SINGLEQUOTE_ = inst_28150;
var res = inst_28151;
var files_not_loaded = inst_28153;
var dependencies_that_loaded = inst_28155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28158,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28159){
var map__28289 = p__28159;
var map__28289__$1 = ((((!((map__28289 == null)))?((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var request_url = cljs.core.get.call(null,map__28289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28158,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28161 = cljs.core.reverse.call(null,inst_28155);
var inst_28162 = cljs.core.map.call(null,inst_28160,inst_28161);
var inst_28163 = cljs.core.pr_str.call(null,inst_28162);
var inst_28164 = figwheel.client.utils.log.call(null,inst_28163);
var state_28233__$1 = (function (){var statearr_28291 = state_28233;
(statearr_28291[(31)] = inst_28158);

return statearr_28291;
})();
var statearr_28292_28362 = state_28233__$1;
(statearr_28292_28362[(2)] = inst_28164);

(statearr_28292_28362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (35))){
var state_28233__$1 = state_28233;
var statearr_28293_28363 = state_28233__$1;
(statearr_28293_28363[(2)] = true);

(statearr_28293_28363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (19))){
var inst_28137 = (state_28233[(12)]);
var inst_28143 = figwheel.client.file_reloading.expand_files.call(null,inst_28137);
var state_28233__$1 = state_28233;
var statearr_28294_28364 = state_28233__$1;
(statearr_28294_28364[(2)] = inst_28143);

(statearr_28294_28364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (11))){
var state_28233__$1 = state_28233;
var statearr_28295_28365 = state_28233__$1;
(statearr_28295_28365[(2)] = null);

(statearr_28295_28365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (9))){
var inst_28126 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28296_28366 = state_28233__$1;
(statearr_28296_28366[(2)] = inst_28126);

(statearr_28296_28366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (5))){
var inst_28097 = (state_28233[(7)]);
var inst_28096 = (state_28233[(10)]);
var inst_28099 = (inst_28097 < inst_28096);
var inst_28100 = inst_28099;
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28100)){
var statearr_28297_28367 = state_28233__$1;
(statearr_28297_28367[(1)] = (7));

} else {
var statearr_28298_28368 = state_28233__$1;
(statearr_28298_28368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (14))){
var inst_28107 = (state_28233[(22)]);
var inst_28116 = cljs.core.first.call(null,inst_28107);
var inst_28117 = figwheel.client.file_reloading.eval_body.call(null,inst_28116,opts);
var inst_28118 = cljs.core.next.call(null,inst_28107);
var inst_28094 = inst_28118;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28233__$1 = (function (){var statearr_28299 = state_28233;
(statearr_28299[(7)] = inst_28097);

(statearr_28299[(8)] = inst_28094);

(statearr_28299[(9)] = inst_28095);

(statearr_28299[(32)] = inst_28117);

(statearr_28299[(10)] = inst_28096);

return statearr_28299;
})();
var statearr_28300_28369 = state_28233__$1;
(statearr_28300_28369[(2)] = null);

(statearr_28300_28369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (45))){
var state_28233__$1 = state_28233;
var statearr_28301_28370 = state_28233__$1;
(statearr_28301_28370[(2)] = null);

(statearr_28301_28370[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (26))){
var inst_28147 = (state_28233[(19)]);
var inst_28151 = (state_28233[(23)]);
var inst_28150 = (state_28233[(24)]);
var inst_28153 = (state_28233[(26)]);
var inst_28155 = (state_28233[(25)]);
var inst_28170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28172 = (function (){var all_files = inst_28147;
var res_SINGLEQUOTE_ = inst_28150;
var res = inst_28151;
var files_not_loaded = inst_28153;
var dependencies_that_loaded = inst_28155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28170,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28171){
var map__28302 = p__28171;
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var namespace = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28170,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28173 = cljs.core.map.call(null,inst_28172,inst_28151);
var inst_28174 = cljs.core.pr_str.call(null,inst_28173);
var inst_28175 = figwheel.client.utils.log.call(null,inst_28174);
var inst_28176 = (function (){var all_files = inst_28147;
var res_SINGLEQUOTE_ = inst_28150;
var res = inst_28151;
var files_not_loaded = inst_28153;
var dependencies_that_loaded = inst_28155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28170,inst_28172,inst_28173,inst_28174,inst_28175,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28147,inst_28151,inst_28150,inst_28153,inst_28155,inst_28170,inst_28172,inst_28173,inst_28174,inst_28175,state_val_28234,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28177 = setTimeout(inst_28176,(10));
var state_28233__$1 = (function (){var statearr_28304 = state_28233;
(statearr_28304[(33)] = inst_28170);

(statearr_28304[(34)] = inst_28175);

return statearr_28304;
})();
var statearr_28305_28371 = state_28233__$1;
(statearr_28305_28371[(2)] = inst_28177);

(statearr_28305_28371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (16))){
var state_28233__$1 = state_28233;
var statearr_28306_28372 = state_28233__$1;
(statearr_28306_28372[(2)] = reload_dependents);

(statearr_28306_28372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (38))){
var inst_28187 = (state_28233[(16)]);
var inst_28204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28187);
var state_28233__$1 = state_28233;
var statearr_28307_28373 = state_28233__$1;
(statearr_28307_28373[(2)] = inst_28204);

(statearr_28307_28373[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (30))){
var state_28233__$1 = state_28233;
var statearr_28308_28374 = state_28233__$1;
(statearr_28308_28374[(2)] = null);

(statearr_28308_28374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (10))){
var inst_28107 = (state_28233[(22)]);
var inst_28109 = cljs.core.chunked_seq_QMARK_.call(null,inst_28107);
var state_28233__$1 = state_28233;
if(inst_28109){
var statearr_28309_28375 = state_28233__$1;
(statearr_28309_28375[(1)] = (13));

} else {
var statearr_28310_28376 = state_28233__$1;
(statearr_28310_28376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (18))){
var inst_28141 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28141)){
var statearr_28311_28377 = state_28233__$1;
(statearr_28311_28377[(1)] = (19));

} else {
var statearr_28312_28378 = state_28233__$1;
(statearr_28312_28378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (42))){
var state_28233__$1 = state_28233;
var statearr_28313_28379 = state_28233__$1;
(statearr_28313_28379[(2)] = null);

(statearr_28313_28379[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (37))){
var inst_28199 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28314_28380 = state_28233__$1;
(statearr_28314_28380[(2)] = inst_28199);

(statearr_28314_28380[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (8))){
var inst_28094 = (state_28233[(8)]);
var inst_28107 = (state_28233[(22)]);
var inst_28107__$1 = cljs.core.seq.call(null,inst_28094);
var state_28233__$1 = (function (){var statearr_28315 = state_28233;
(statearr_28315[(22)] = inst_28107__$1);

return statearr_28315;
})();
if(inst_28107__$1){
var statearr_28316_28381 = state_28233__$1;
(statearr_28316_28381[(1)] = (10));

} else {
var statearr_28317_28382 = state_28233__$1;
(statearr_28317_28382[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24219__auto__,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____0 = (function (){
var statearr_28321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28321[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__);

(statearr_28321[(1)] = (1));

return statearr_28321;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____1 = (function (state_28233){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_28233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e28322){if((e28322 instanceof Object)){
var ex__24223__auto__ = e28322;
var statearr_28323_28383 = state_28233;
(statearr_28323_28383[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28384 = state_28233;
state_28233 = G__28384;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__ = function(state_28233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____1.call(this,state_28233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24333__auto__ = (function (){var statearr_28324 = f__24332__auto__.call(null);
(statearr_28324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__,map__28079,map__28079__$1,opts,before_jsload,on_jsload,reload_dependents,map__28080,map__28080__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24331__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28387,link){
var map__28390 = p__28387;
var map__28390__$1 = ((((!((map__28390 == null)))?((((map__28390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28390):map__28390);
var file = cljs.core.get.call(null,map__28390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28390,map__28390__$1,file){
return (function (p1__28385_SHARP_,p2__28386_SHARP_){
if(cljs.core._EQ_.call(null,p1__28385_SHARP_,p2__28386_SHARP_)){
return p1__28385_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28390,map__28390__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28396){
var map__28397 = p__28396;
var map__28397__$1 = ((((!((map__28397 == null)))?((((map__28397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28397):map__28397);
var match_length = cljs.core.get.call(null,map__28397__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28397__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28392_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28392_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28399 = [];
var len__22721__auto___28402 = arguments.length;
var i__22722__auto___28403 = (0);
while(true){
if((i__22722__auto___28403 < len__22721__auto___28402)){
args28399.push((arguments[i__22722__auto___28403]));

var G__28404 = (i__22722__auto___28403 + (1));
i__22722__auto___28403 = G__28404;
continue;
} else {
}
break;
}

var G__28401 = args28399.length;
switch (G__28401) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28399.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28406_SHARP_,p2__28407_SHARP_){
return cljs.core.assoc.call(null,p1__28406_SHARP_,cljs.core.get.call(null,p2__28407_SHARP_,key),p2__28407_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28408){
var map__28411 = p__28408;
var map__28411__$1 = ((((!((map__28411 == null)))?((((map__28411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var f_data = map__28411__$1;
var file = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28413,files_msg){
var map__28420 = p__28413;
var map__28420__$1 = ((((!((map__28420 == null)))?((((map__28420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28420):map__28420);
var opts = map__28420__$1;
var on_cssload = cljs.core.get.call(null,map__28420__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28422_28426 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28423_28427 = null;
var count__28424_28428 = (0);
var i__28425_28429 = (0);
while(true){
if((i__28425_28429 < count__28424_28428)){
var f_28430 = cljs.core._nth.call(null,chunk__28423_28427,i__28425_28429);
figwheel.client.file_reloading.reload_css_file.call(null,f_28430);

var G__28431 = seq__28422_28426;
var G__28432 = chunk__28423_28427;
var G__28433 = count__28424_28428;
var G__28434 = (i__28425_28429 + (1));
seq__28422_28426 = G__28431;
chunk__28423_28427 = G__28432;
count__28424_28428 = G__28433;
i__28425_28429 = G__28434;
continue;
} else {
var temp__4657__auto___28435 = cljs.core.seq.call(null,seq__28422_28426);
if(temp__4657__auto___28435){
var seq__28422_28436__$1 = temp__4657__auto___28435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28422_28436__$1)){
var c__22462__auto___28437 = cljs.core.chunk_first.call(null,seq__28422_28436__$1);
var G__28438 = cljs.core.chunk_rest.call(null,seq__28422_28436__$1);
var G__28439 = c__22462__auto___28437;
var G__28440 = cljs.core.count.call(null,c__22462__auto___28437);
var G__28441 = (0);
seq__28422_28426 = G__28438;
chunk__28423_28427 = G__28439;
count__28424_28428 = G__28440;
i__28425_28429 = G__28441;
continue;
} else {
var f_28442 = cljs.core.first.call(null,seq__28422_28436__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28442);

var G__28443 = cljs.core.next.call(null,seq__28422_28436__$1);
var G__28444 = null;
var G__28445 = (0);
var G__28446 = (0);
seq__28422_28426 = G__28443;
chunk__28423_28427 = G__28444;
count__28424_28428 = G__28445;
i__28425_28429 = G__28446;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28420,map__28420__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28420,map__28420__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map