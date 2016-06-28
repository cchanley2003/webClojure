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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27442_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27442_SHARP_));
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
var seq__27447 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27448 = null;
var count__27449 = (0);
var i__27450 = (0);
while(true){
if((i__27450 < count__27449)){
var n = cljs.core._nth.call(null,chunk__27448,i__27450);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27451 = seq__27447;
var G__27452 = chunk__27448;
var G__27453 = count__27449;
var G__27454 = (i__27450 + (1));
seq__27447 = G__27451;
chunk__27448 = G__27452;
count__27449 = G__27453;
i__27450 = G__27454;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27447);
if(temp__4657__auto__){
var seq__27447__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27447__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__27447__$1);
var G__27455 = cljs.core.chunk_rest.call(null,seq__27447__$1);
var G__27456 = c__22462__auto__;
var G__27457 = cljs.core.count.call(null,c__22462__auto__);
var G__27458 = (0);
seq__27447 = G__27455;
chunk__27448 = G__27456;
count__27449 = G__27457;
i__27450 = G__27458;
continue;
} else {
var n = cljs.core.first.call(null,seq__27447__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27459 = cljs.core.next.call(null,seq__27447__$1);
var G__27460 = null;
var G__27461 = (0);
var G__27462 = (0);
seq__27447 = G__27459;
chunk__27448 = G__27460;
count__27449 = G__27461;
i__27450 = G__27462;
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

var seq__27501_27508 = cljs.core.seq.call(null,deps);
var chunk__27502_27509 = null;
var count__27503_27510 = (0);
var i__27504_27511 = (0);
while(true){
if((i__27504_27511 < count__27503_27510)){
var dep_27512 = cljs.core._nth.call(null,chunk__27502_27509,i__27504_27511);
topo_sort_helper_STAR_.call(null,dep_27512,(depth + (1)),state);

var G__27513 = seq__27501_27508;
var G__27514 = chunk__27502_27509;
var G__27515 = count__27503_27510;
var G__27516 = (i__27504_27511 + (1));
seq__27501_27508 = G__27513;
chunk__27502_27509 = G__27514;
count__27503_27510 = G__27515;
i__27504_27511 = G__27516;
continue;
} else {
var temp__4657__auto___27517 = cljs.core.seq.call(null,seq__27501_27508);
if(temp__4657__auto___27517){
var seq__27501_27518__$1 = temp__4657__auto___27517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27501_27518__$1)){
var c__22462__auto___27519 = cljs.core.chunk_first.call(null,seq__27501_27518__$1);
var G__27520 = cljs.core.chunk_rest.call(null,seq__27501_27518__$1);
var G__27521 = c__22462__auto___27519;
var G__27522 = cljs.core.count.call(null,c__22462__auto___27519);
var G__27523 = (0);
seq__27501_27508 = G__27520;
chunk__27502_27509 = G__27521;
count__27503_27510 = G__27522;
i__27504_27511 = G__27523;
continue;
} else {
var dep_27524 = cljs.core.first.call(null,seq__27501_27518__$1);
topo_sort_helper_STAR_.call(null,dep_27524,(depth + (1)),state);

var G__27525 = cljs.core.next.call(null,seq__27501_27518__$1);
var G__27526 = null;
var G__27527 = (0);
var G__27528 = (0);
seq__27501_27508 = G__27525;
chunk__27502_27509 = G__27526;
count__27503_27510 = G__27527;
i__27504_27511 = G__27528;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27505){
var vec__27507 = p__27505;
var x = cljs.core.nth.call(null,vec__27507,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27507,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27507,x,xs,get_deps__$1){
return (function (p1__27463_SHARP_){
return clojure.set.difference.call(null,p1__27463_SHARP_,x);
});})(vec__27507,x,xs,get_deps__$1))
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
var seq__27541 = cljs.core.seq.call(null,provides);
var chunk__27542 = null;
var count__27543 = (0);
var i__27544 = (0);
while(true){
if((i__27544 < count__27543)){
var prov = cljs.core._nth.call(null,chunk__27542,i__27544);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27545_27553 = cljs.core.seq.call(null,requires);
var chunk__27546_27554 = null;
var count__27547_27555 = (0);
var i__27548_27556 = (0);
while(true){
if((i__27548_27556 < count__27547_27555)){
var req_27557 = cljs.core._nth.call(null,chunk__27546_27554,i__27548_27556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27557,prov);

var G__27558 = seq__27545_27553;
var G__27559 = chunk__27546_27554;
var G__27560 = count__27547_27555;
var G__27561 = (i__27548_27556 + (1));
seq__27545_27553 = G__27558;
chunk__27546_27554 = G__27559;
count__27547_27555 = G__27560;
i__27548_27556 = G__27561;
continue;
} else {
var temp__4657__auto___27562 = cljs.core.seq.call(null,seq__27545_27553);
if(temp__4657__auto___27562){
var seq__27545_27563__$1 = temp__4657__auto___27562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27545_27563__$1)){
var c__22462__auto___27564 = cljs.core.chunk_first.call(null,seq__27545_27563__$1);
var G__27565 = cljs.core.chunk_rest.call(null,seq__27545_27563__$1);
var G__27566 = c__22462__auto___27564;
var G__27567 = cljs.core.count.call(null,c__22462__auto___27564);
var G__27568 = (0);
seq__27545_27553 = G__27565;
chunk__27546_27554 = G__27566;
count__27547_27555 = G__27567;
i__27548_27556 = G__27568;
continue;
} else {
var req_27569 = cljs.core.first.call(null,seq__27545_27563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27569,prov);

var G__27570 = cljs.core.next.call(null,seq__27545_27563__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27545_27553 = G__27570;
chunk__27546_27554 = G__27571;
count__27547_27555 = G__27572;
i__27548_27556 = G__27573;
continue;
}
} else {
}
}
break;
}

var G__27574 = seq__27541;
var G__27575 = chunk__27542;
var G__27576 = count__27543;
var G__27577 = (i__27544 + (1));
seq__27541 = G__27574;
chunk__27542 = G__27575;
count__27543 = G__27576;
i__27544 = G__27577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27541);
if(temp__4657__auto__){
var seq__27541__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27541__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__27541__$1);
var G__27578 = cljs.core.chunk_rest.call(null,seq__27541__$1);
var G__27579 = c__22462__auto__;
var G__27580 = cljs.core.count.call(null,c__22462__auto__);
var G__27581 = (0);
seq__27541 = G__27578;
chunk__27542 = G__27579;
count__27543 = G__27580;
i__27544 = G__27581;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27541__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27549_27582 = cljs.core.seq.call(null,requires);
var chunk__27550_27583 = null;
var count__27551_27584 = (0);
var i__27552_27585 = (0);
while(true){
if((i__27552_27585 < count__27551_27584)){
var req_27586 = cljs.core._nth.call(null,chunk__27550_27583,i__27552_27585);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27586,prov);

var G__27587 = seq__27549_27582;
var G__27588 = chunk__27550_27583;
var G__27589 = count__27551_27584;
var G__27590 = (i__27552_27585 + (1));
seq__27549_27582 = G__27587;
chunk__27550_27583 = G__27588;
count__27551_27584 = G__27589;
i__27552_27585 = G__27590;
continue;
} else {
var temp__4657__auto___27591__$1 = cljs.core.seq.call(null,seq__27549_27582);
if(temp__4657__auto___27591__$1){
var seq__27549_27592__$1 = temp__4657__auto___27591__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27549_27592__$1)){
var c__22462__auto___27593 = cljs.core.chunk_first.call(null,seq__27549_27592__$1);
var G__27594 = cljs.core.chunk_rest.call(null,seq__27549_27592__$1);
var G__27595 = c__22462__auto___27593;
var G__27596 = cljs.core.count.call(null,c__22462__auto___27593);
var G__27597 = (0);
seq__27549_27582 = G__27594;
chunk__27550_27583 = G__27595;
count__27551_27584 = G__27596;
i__27552_27585 = G__27597;
continue;
} else {
var req_27598 = cljs.core.first.call(null,seq__27549_27592__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27598,prov);

var G__27599 = cljs.core.next.call(null,seq__27549_27592__$1);
var G__27600 = null;
var G__27601 = (0);
var G__27602 = (0);
seq__27549_27582 = G__27599;
chunk__27550_27583 = G__27600;
count__27551_27584 = G__27601;
i__27552_27585 = G__27602;
continue;
}
} else {
}
}
break;
}

var G__27603 = cljs.core.next.call(null,seq__27541__$1);
var G__27604 = null;
var G__27605 = (0);
var G__27606 = (0);
seq__27541 = G__27603;
chunk__27542 = G__27604;
count__27543 = G__27605;
i__27544 = G__27606;
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
var seq__27611_27615 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27612_27616 = null;
var count__27613_27617 = (0);
var i__27614_27618 = (0);
while(true){
if((i__27614_27618 < count__27613_27617)){
var ns_27619 = cljs.core._nth.call(null,chunk__27612_27616,i__27614_27618);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27619);

var G__27620 = seq__27611_27615;
var G__27621 = chunk__27612_27616;
var G__27622 = count__27613_27617;
var G__27623 = (i__27614_27618 + (1));
seq__27611_27615 = G__27620;
chunk__27612_27616 = G__27621;
count__27613_27617 = G__27622;
i__27614_27618 = G__27623;
continue;
} else {
var temp__4657__auto___27624 = cljs.core.seq.call(null,seq__27611_27615);
if(temp__4657__auto___27624){
var seq__27611_27625__$1 = temp__4657__auto___27624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27611_27625__$1)){
var c__22462__auto___27626 = cljs.core.chunk_first.call(null,seq__27611_27625__$1);
var G__27627 = cljs.core.chunk_rest.call(null,seq__27611_27625__$1);
var G__27628 = c__22462__auto___27626;
var G__27629 = cljs.core.count.call(null,c__22462__auto___27626);
var G__27630 = (0);
seq__27611_27615 = G__27627;
chunk__27612_27616 = G__27628;
count__27613_27617 = G__27629;
i__27614_27618 = G__27630;
continue;
} else {
var ns_27631 = cljs.core.first.call(null,seq__27611_27625__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27631);

var G__27632 = cljs.core.next.call(null,seq__27611_27625__$1);
var G__27633 = null;
var G__27634 = (0);
var G__27635 = (0);
seq__27611_27615 = G__27632;
chunk__27612_27616 = G__27633;
count__27613_27617 = G__27634;
i__27614_27618 = G__27635;
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
var G__27636__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27637__i = 0, G__27637__a = new Array(arguments.length -  0);
while (G__27637__i < G__27637__a.length) {G__27637__a[G__27637__i] = arguments[G__27637__i + 0]; ++G__27637__i;}
  args = new cljs.core.IndexedSeq(G__27637__a,0);
} 
return G__27636__delegate.call(this,args);};
G__27636.cljs$lang$maxFixedArity = 0;
G__27636.cljs$lang$applyTo = (function (arglist__27638){
var args = cljs.core.seq(arglist__27638);
return G__27636__delegate(args);
});
G__27636.cljs$core$IFn$_invoke$arity$variadic = G__27636__delegate;
return G__27636;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27640 = cljs.core._EQ_;
var expr__27641 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27640.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27641))){
var path_parts = ((function (pred__27640,expr__27641){
return (function (p1__27639_SHARP_){
return clojure.string.split.call(null,p1__27639_SHARP_,/[\/\\]/);
});})(pred__27640,expr__27641))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27640,expr__27641){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27643){if((e27643 instanceof Error)){
var e = e27643;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27643;

}
}})());
});
;})(path_parts,sep,root,pred__27640,expr__27641))
} else {
if(cljs.core.truth_(pred__27640.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27641))){
return ((function (pred__27640,expr__27641){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27640,expr__27641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27640,expr__27641))
);

return deferred.addErrback(((function (deferred,pred__27640,expr__27641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27640,expr__27641))
);
});
;})(pred__27640,expr__27641))
} else {
return ((function (pred__27640,expr__27641){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27640,expr__27641))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27644,callback){
var map__27647 = p__27644;
var map__27647__$1 = ((((!((map__27647 == null)))?((((map__27647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var file_msg = map__27647__$1;
var request_url = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27647,map__27647__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27647,map__27647__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_27671){
var state_val_27672 = (state_27671[(1)]);
if((state_val_27672 === (7))){
var inst_27667 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27673_27693 = state_27671__$1;
(statearr_27673_27693[(2)] = inst_27667);

(statearr_27673_27693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (1))){
var state_27671__$1 = state_27671;
var statearr_27674_27694 = state_27671__$1;
(statearr_27674_27694[(2)] = null);

(statearr_27674_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (4))){
var inst_27651 = (state_27671[(7)]);
var inst_27651__$1 = (state_27671[(2)]);
var state_27671__$1 = (function (){var statearr_27675 = state_27671;
(statearr_27675[(7)] = inst_27651__$1);

return statearr_27675;
})();
if(cljs.core.truth_(inst_27651__$1)){
var statearr_27676_27695 = state_27671__$1;
(statearr_27676_27695[(1)] = (5));

} else {
var statearr_27677_27696 = state_27671__$1;
(statearr_27677_27696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (6))){
var state_27671__$1 = state_27671;
var statearr_27678_27697 = state_27671__$1;
(statearr_27678_27697[(2)] = null);

(statearr_27678_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (3))){
var inst_27669 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27671__$1,inst_27669);
} else {
if((state_val_27672 === (2))){
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27672 === (11))){
var inst_27663 = (state_27671[(2)]);
var state_27671__$1 = (function (){var statearr_27679 = state_27671;
(statearr_27679[(8)] = inst_27663);

return statearr_27679;
})();
var statearr_27680_27698 = state_27671__$1;
(statearr_27680_27698[(2)] = null);

(statearr_27680_27698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (9))){
var inst_27657 = (state_27671[(9)]);
var inst_27655 = (state_27671[(10)]);
var inst_27659 = inst_27657.call(null,inst_27655);
var state_27671__$1 = state_27671;
var statearr_27681_27699 = state_27671__$1;
(statearr_27681_27699[(2)] = inst_27659);

(statearr_27681_27699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (5))){
var inst_27651 = (state_27671[(7)]);
var inst_27653 = figwheel.client.file_reloading.blocking_load.call(null,inst_27651);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(8),inst_27653);
} else {
if((state_val_27672 === (10))){
var inst_27655 = (state_27671[(10)]);
var inst_27661 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27655);
var state_27671__$1 = state_27671;
var statearr_27682_27700 = state_27671__$1;
(statearr_27682_27700[(2)] = inst_27661);

(statearr_27682_27700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (8))){
var inst_27651 = (state_27671[(7)]);
var inst_27657 = (state_27671[(9)]);
var inst_27655 = (state_27671[(2)]);
var inst_27656 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27657__$1 = cljs.core.get.call(null,inst_27656,inst_27651);
var state_27671__$1 = (function (){var statearr_27683 = state_27671;
(statearr_27683[(9)] = inst_27657__$1);

(statearr_27683[(10)] = inst_27655);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27657__$1)){
var statearr_27684_27701 = state_27671__$1;
(statearr_27684_27701[(1)] = (9));

} else {
var statearr_27685_27702 = state_27671__$1;
(statearr_27685_27702[(1)] = (10));

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
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24281__auto__ = null;
var figwheel$client$file_reloading$state_machine__24281__auto____0 = (function (){
var statearr_27689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27689[(0)] = figwheel$client$file_reloading$state_machine__24281__auto__);

(statearr_27689[(1)] = (1));

return statearr_27689;
});
var figwheel$client$file_reloading$state_machine__24281__auto____1 = (function (state_27671){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_27671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e27690){if((e27690 instanceof Object)){
var ex__24284__auto__ = e27690;
var statearr_27691_27703 = state_27671;
(statearr_27691_27703[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27704 = state_27671;
state_27671 = G__27704;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24281__auto__ = function(state_27671){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24281__auto____1.call(this,state_27671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24281__auto____0;
figwheel$client$file_reloading$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24281__auto____1;
return figwheel$client$file_reloading$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_27692 = f__24393__auto__.call(null);
(statearr_27692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27705,callback){
var map__27708 = p__27705;
var map__27708__$1 = ((((!((map__27708 == null)))?((((map__27708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var file_msg = map__27708__$1;
var namespace = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27708,map__27708__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27708,map__27708__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27710){
var map__27713 = p__27710;
var map__27713__$1 = ((((!((map__27713 == null)))?((((map__27713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27713):map__27713);
var file_msg = map__27713__$1;
var namespace = cljs.core.get.call(null,map__27713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27715,callback){
var map__27718 = p__27715;
var map__27718__$1 = ((((!((map__27718 == null)))?((((map__27718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);
var file_msg = map__27718__$1;
var request_url = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24392__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___27806,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___27806,out){
return (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (1))){
var inst_27766 = cljs.core.nth.call(null,files,(0),null);
var inst_27767 = cljs.core.nthnext.call(null,files,(1));
var inst_27768 = files;
var state_27788__$1 = (function (){var statearr_27790 = state_27788;
(statearr_27790[(7)] = inst_27767);

(statearr_27790[(8)] = inst_27768);

(statearr_27790[(9)] = inst_27766);

return statearr_27790;
})();
var statearr_27791_27807 = state_27788__$1;
(statearr_27791_27807[(2)] = null);

(statearr_27791_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var inst_27771 = (state_27788[(10)]);
var inst_27768 = (state_27788[(8)]);
var inst_27771__$1 = cljs.core.nth.call(null,inst_27768,(0),null);
var inst_27772 = cljs.core.nthnext.call(null,inst_27768,(1));
var inst_27773 = (inst_27771__$1 == null);
var inst_27774 = cljs.core.not.call(null,inst_27773);
var state_27788__$1 = (function (){var statearr_27792 = state_27788;
(statearr_27792[(10)] = inst_27771__$1);

(statearr_27792[(11)] = inst_27772);

return statearr_27792;
})();
if(inst_27774){
var statearr_27793_27808 = state_27788__$1;
(statearr_27793_27808[(1)] = (4));

} else {
var statearr_27794_27809 = state_27788__$1;
(statearr_27794_27809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (4))){
var inst_27771 = (state_27788[(10)]);
var inst_27776 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27771);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(7),inst_27776);
} else {
if((state_val_27789 === (5))){
var inst_27782 = cljs.core.async.close_BANG_.call(null,out);
var state_27788__$1 = state_27788;
var statearr_27795_27810 = state_27788__$1;
(statearr_27795_27810[(2)] = inst_27782);

(statearr_27795_27810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27796_27811 = state_27788__$1;
(statearr_27796_27811[(2)] = inst_27784);

(statearr_27796_27811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (7))){
var inst_27772 = (state_27788[(11)]);
var inst_27778 = (state_27788[(2)]);
var inst_27779 = cljs.core.async.put_BANG_.call(null,out,inst_27778);
var inst_27768 = inst_27772;
var state_27788__$1 = (function (){var statearr_27797 = state_27788;
(statearr_27797[(8)] = inst_27768);

(statearr_27797[(12)] = inst_27779);

return statearr_27797;
})();
var statearr_27798_27812 = state_27788__$1;
(statearr_27798_27812[(2)] = null);

(statearr_27798_27812[(1)] = (2));


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
});})(c__24392__auto___27806,out))
;
return ((function (switch__24280__auto__,c__24392__auto___27806,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____0 = (function (){
var statearr_27802 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27802[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__);

(statearr_27802[(1)] = (1));

return statearr_27802;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____1 = (function (state_27788){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e27803){if((e27803 instanceof Object)){
var ex__24284__auto__ = e27803;
var statearr_27804_27813 = state_27788;
(statearr_27804_27813[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27814 = state_27788;
state_27788 = G__27814;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___27806,out))
})();
var state__24394__auto__ = (function (){var statearr_27805 = f__24393__auto__.call(null);
(statearr_27805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___27806);

return statearr_27805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___27806,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27815,opts){
var map__27819 = p__27815;
var map__27819__$1 = ((((!((map__27819 == null)))?((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27819):map__27819);
var eval_body__$1 = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27821){var e = e27821;
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
return (function (p1__27822_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27822_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27827){
var vec__27828 = p__27827;
var k = cljs.core.nth.call(null,vec__27828,(0),null);
var v = cljs.core.nth.call(null,vec__27828,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27829){
var vec__27830 = p__27829;
var k = cljs.core.nth.call(null,vec__27830,(0),null);
var v = cljs.core.nth.call(null,vec__27830,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27834,p__27835){
var map__28082 = p__27834;
var map__28082__$1 = ((((!((map__28082 == null)))?((((map__28082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);
var opts = map__28082__$1;
var before_jsload = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28083 = p__27835;
var map__28083__$1 = ((((!((map__28083 == null)))?((((map__28083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28083):map__28083);
var msg = map__28083__$1;
var files = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28236){
var state_val_28237 = (state_28236[(1)]);
if((state_val_28237 === (7))){
var inst_28099 = (state_28236[(7)]);
var inst_28097 = (state_28236[(8)]);
var inst_28098 = (state_28236[(9)]);
var inst_28100 = (state_28236[(10)]);
var inst_28105 = cljs.core._nth.call(null,inst_28098,inst_28100);
var inst_28106 = figwheel.client.file_reloading.eval_body.call(null,inst_28105,opts);
var inst_28107 = (inst_28100 + (1));
var tmp28238 = inst_28099;
var tmp28239 = inst_28097;
var tmp28240 = inst_28098;
var inst_28097__$1 = tmp28239;
var inst_28098__$1 = tmp28240;
var inst_28099__$1 = tmp28238;
var inst_28100__$1 = inst_28107;
var state_28236__$1 = (function (){var statearr_28241 = state_28236;
(statearr_28241[(7)] = inst_28099__$1);

(statearr_28241[(8)] = inst_28097__$1);

(statearr_28241[(11)] = inst_28106);

(statearr_28241[(9)] = inst_28098__$1);

(statearr_28241[(10)] = inst_28100__$1);

return statearr_28241;
})();
var statearr_28242_28328 = state_28236__$1;
(statearr_28242_28328[(2)] = null);

(statearr_28242_28328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (20))){
var inst_28140 = (state_28236[(12)]);
var inst_28148 = figwheel.client.file_reloading.sort_files.call(null,inst_28140);
var state_28236__$1 = state_28236;
var statearr_28243_28329 = state_28236__$1;
(statearr_28243_28329[(2)] = inst_28148);

(statearr_28243_28329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (27))){
var state_28236__$1 = state_28236;
var statearr_28244_28330 = state_28236__$1;
(statearr_28244_28330[(2)] = null);

(statearr_28244_28330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (1))){
var inst_28089 = (state_28236[(13)]);
var inst_28086 = before_jsload.call(null,files);
var inst_28087 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28088 = (function (){return ((function (inst_28089,inst_28086,inst_28087,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27831_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27831_SHARP_);
});
;})(inst_28089,inst_28086,inst_28087,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28089__$1 = cljs.core.filter.call(null,inst_28088,files);
var inst_28090 = cljs.core.not_empty.call(null,inst_28089__$1);
var state_28236__$1 = (function (){var statearr_28245 = state_28236;
(statearr_28245[(13)] = inst_28089__$1);

(statearr_28245[(14)] = inst_28086);

(statearr_28245[(15)] = inst_28087);

return statearr_28245;
})();
if(cljs.core.truth_(inst_28090)){
var statearr_28246_28331 = state_28236__$1;
(statearr_28246_28331[(1)] = (2));

} else {
var statearr_28247_28332 = state_28236__$1;
(statearr_28247_28332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (24))){
var state_28236__$1 = state_28236;
var statearr_28248_28333 = state_28236__$1;
(statearr_28248_28333[(2)] = null);

(statearr_28248_28333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (39))){
var inst_28190 = (state_28236[(16)]);
var state_28236__$1 = state_28236;
var statearr_28249_28334 = state_28236__$1;
(statearr_28249_28334[(2)] = inst_28190);

(statearr_28249_28334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (46))){
var inst_28231 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28250_28335 = state_28236__$1;
(statearr_28250_28335[(2)] = inst_28231);

(statearr_28250_28335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (4))){
var inst_28134 = (state_28236[(2)]);
var inst_28135 = cljs.core.List.EMPTY;
var inst_28136 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28135);
var inst_28137 = (function (){return ((function (inst_28134,inst_28135,inst_28136,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27832_SHARP_){
var and__21639__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27832_SHARP_);
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27832_SHARP_));
} else {
return and__21639__auto__;
}
});
;})(inst_28134,inst_28135,inst_28136,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28138 = cljs.core.filter.call(null,inst_28137,files);
var inst_28139 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28140 = cljs.core.concat.call(null,inst_28138,inst_28139);
var state_28236__$1 = (function (){var statearr_28251 = state_28236;
(statearr_28251[(17)] = inst_28136);

(statearr_28251[(18)] = inst_28134);

(statearr_28251[(12)] = inst_28140);

return statearr_28251;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28252_28336 = state_28236__$1;
(statearr_28252_28336[(1)] = (16));

} else {
var statearr_28253_28337 = state_28236__$1;
(statearr_28253_28337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (15))){
var inst_28124 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28254_28338 = state_28236__$1;
(statearr_28254_28338[(2)] = inst_28124);

(statearr_28254_28338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (21))){
var inst_28150 = (state_28236[(19)]);
var inst_28150__$1 = (state_28236[(2)]);
var inst_28151 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28150__$1);
var state_28236__$1 = (function (){var statearr_28255 = state_28236;
(statearr_28255[(19)] = inst_28150__$1);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28236__$1,(22),inst_28151);
} else {
if((state_val_28237 === (31))){
var inst_28234 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28236__$1,inst_28234);
} else {
if((state_val_28237 === (32))){
var inst_28190 = (state_28236[(16)]);
var inst_28195 = inst_28190.cljs$lang$protocol_mask$partition0$;
var inst_28196 = (inst_28195 & (64));
var inst_28197 = inst_28190.cljs$core$ISeq$;
var inst_28198 = (inst_28196) || (inst_28197);
var state_28236__$1 = state_28236;
if(cljs.core.truth_(inst_28198)){
var statearr_28256_28339 = state_28236__$1;
(statearr_28256_28339[(1)] = (35));

} else {
var statearr_28257_28340 = state_28236__$1;
(statearr_28257_28340[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (40))){
var inst_28211 = (state_28236[(20)]);
var inst_28210 = (state_28236[(2)]);
var inst_28211__$1 = cljs.core.get.call(null,inst_28210,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28212 = cljs.core.get.call(null,inst_28210,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28213 = cljs.core.not_empty.call(null,inst_28211__$1);
var state_28236__$1 = (function (){var statearr_28258 = state_28236;
(statearr_28258[(21)] = inst_28212);

(statearr_28258[(20)] = inst_28211__$1);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28213)){
var statearr_28259_28341 = state_28236__$1;
(statearr_28259_28341[(1)] = (41));

} else {
var statearr_28260_28342 = state_28236__$1;
(statearr_28260_28342[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (33))){
var state_28236__$1 = state_28236;
var statearr_28261_28343 = state_28236__$1;
(statearr_28261_28343[(2)] = false);

(statearr_28261_28343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (13))){
var inst_28110 = (state_28236[(22)]);
var inst_28114 = cljs.core.chunk_first.call(null,inst_28110);
var inst_28115 = cljs.core.chunk_rest.call(null,inst_28110);
var inst_28116 = cljs.core.count.call(null,inst_28114);
var inst_28097 = inst_28115;
var inst_28098 = inst_28114;
var inst_28099 = inst_28116;
var inst_28100 = (0);
var state_28236__$1 = (function (){var statearr_28262 = state_28236;
(statearr_28262[(7)] = inst_28099);

(statearr_28262[(8)] = inst_28097);

(statearr_28262[(9)] = inst_28098);

(statearr_28262[(10)] = inst_28100);

return statearr_28262;
})();
var statearr_28263_28344 = state_28236__$1;
(statearr_28263_28344[(2)] = null);

(statearr_28263_28344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (22))){
var inst_28154 = (state_28236[(23)]);
var inst_28150 = (state_28236[(19)]);
var inst_28153 = (state_28236[(24)]);
var inst_28158 = (state_28236[(25)]);
var inst_28153__$1 = (state_28236[(2)]);
var inst_28154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28153__$1);
var inst_28155 = (function (){var all_files = inst_28150;
var res_SINGLEQUOTE_ = inst_28153__$1;
var res = inst_28154__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28154,inst_28150,inst_28153,inst_28158,inst_28153__$1,inst_28154__$1,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27833_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27833_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28154,inst_28150,inst_28153,inst_28158,inst_28153__$1,inst_28154__$1,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28156 = cljs.core.filter.call(null,inst_28155,inst_28153__$1);
var inst_28157 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28158__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28157);
var inst_28159 = cljs.core.not_empty.call(null,inst_28158__$1);
var state_28236__$1 = (function (){var statearr_28264 = state_28236;
(statearr_28264[(23)] = inst_28154__$1);

(statearr_28264[(24)] = inst_28153__$1);

(statearr_28264[(25)] = inst_28158__$1);

(statearr_28264[(26)] = inst_28156);

return statearr_28264;
})();
if(cljs.core.truth_(inst_28159)){
var statearr_28265_28345 = state_28236__$1;
(statearr_28265_28345[(1)] = (23));

} else {
var statearr_28266_28346 = state_28236__$1;
(statearr_28266_28346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (36))){
var state_28236__$1 = state_28236;
var statearr_28267_28347 = state_28236__$1;
(statearr_28267_28347[(2)] = false);

(statearr_28267_28347[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (41))){
var inst_28211 = (state_28236[(20)]);
var inst_28215 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28216 = cljs.core.map.call(null,inst_28215,inst_28211);
var inst_28217 = cljs.core.pr_str.call(null,inst_28216);
var inst_28218 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28217)].join('');
var inst_28219 = figwheel.client.utils.log.call(null,inst_28218);
var state_28236__$1 = state_28236;
var statearr_28268_28348 = state_28236__$1;
(statearr_28268_28348[(2)] = inst_28219);

(statearr_28268_28348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (43))){
var inst_28212 = (state_28236[(21)]);
var inst_28222 = (state_28236[(2)]);
var inst_28223 = cljs.core.not_empty.call(null,inst_28212);
var state_28236__$1 = (function (){var statearr_28269 = state_28236;
(statearr_28269[(27)] = inst_28222);

return statearr_28269;
})();
if(cljs.core.truth_(inst_28223)){
var statearr_28270_28349 = state_28236__$1;
(statearr_28270_28349[(1)] = (44));

} else {
var statearr_28271_28350 = state_28236__$1;
(statearr_28271_28350[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (29))){
var inst_28154 = (state_28236[(23)]);
var inst_28150 = (state_28236[(19)]);
var inst_28153 = (state_28236[(24)]);
var inst_28190 = (state_28236[(16)]);
var inst_28158 = (state_28236[(25)]);
var inst_28156 = (state_28236[(26)]);
var inst_28186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28189 = (function (){var all_files = inst_28150;
var res_SINGLEQUOTE_ = inst_28153;
var res = inst_28154;
var files_not_loaded = inst_28156;
var dependencies_that_loaded = inst_28158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28190,inst_28158,inst_28156,inst_28186,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28188){
var map__28272 = p__28188;
var map__28272__$1 = ((((!((map__28272 == null)))?((((map__28272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28272):map__28272);
var namespace = cljs.core.get.call(null,map__28272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28190,inst_28158,inst_28156,inst_28186,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28190__$1 = cljs.core.group_by.call(null,inst_28189,inst_28156);
var inst_28192 = (inst_28190__$1 == null);
var inst_28193 = cljs.core.not.call(null,inst_28192);
var state_28236__$1 = (function (){var statearr_28274 = state_28236;
(statearr_28274[(28)] = inst_28186);

(statearr_28274[(16)] = inst_28190__$1);

return statearr_28274;
})();
if(inst_28193){
var statearr_28275_28351 = state_28236__$1;
(statearr_28275_28351[(1)] = (32));

} else {
var statearr_28276_28352 = state_28236__$1;
(statearr_28276_28352[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (44))){
var inst_28212 = (state_28236[(21)]);
var inst_28225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28212);
var inst_28226 = cljs.core.pr_str.call(null,inst_28225);
var inst_28227 = [cljs.core.str("not required: "),cljs.core.str(inst_28226)].join('');
var inst_28228 = figwheel.client.utils.log.call(null,inst_28227);
var state_28236__$1 = state_28236;
var statearr_28277_28353 = state_28236__$1;
(statearr_28277_28353[(2)] = inst_28228);

(statearr_28277_28353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (6))){
var inst_28131 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28278_28354 = state_28236__$1;
(statearr_28278_28354[(2)] = inst_28131);

(statearr_28278_28354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (28))){
var inst_28156 = (state_28236[(26)]);
var inst_28183 = (state_28236[(2)]);
var inst_28184 = cljs.core.not_empty.call(null,inst_28156);
var state_28236__$1 = (function (){var statearr_28279 = state_28236;
(statearr_28279[(29)] = inst_28183);

return statearr_28279;
})();
if(cljs.core.truth_(inst_28184)){
var statearr_28280_28355 = state_28236__$1;
(statearr_28280_28355[(1)] = (29));

} else {
var statearr_28281_28356 = state_28236__$1;
(statearr_28281_28356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (25))){
var inst_28154 = (state_28236[(23)]);
var inst_28170 = (state_28236[(2)]);
var inst_28171 = cljs.core.not_empty.call(null,inst_28154);
var state_28236__$1 = (function (){var statearr_28282 = state_28236;
(statearr_28282[(30)] = inst_28170);

return statearr_28282;
})();
if(cljs.core.truth_(inst_28171)){
var statearr_28283_28357 = state_28236__$1;
(statearr_28283_28357[(1)] = (26));

} else {
var statearr_28284_28358 = state_28236__$1;
(statearr_28284_28358[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (34))){
var inst_28205 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
if(cljs.core.truth_(inst_28205)){
var statearr_28285_28359 = state_28236__$1;
(statearr_28285_28359[(1)] = (38));

} else {
var statearr_28286_28360 = state_28236__$1;
(statearr_28286_28360[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (17))){
var state_28236__$1 = state_28236;
var statearr_28287_28361 = state_28236__$1;
(statearr_28287_28361[(2)] = recompile_dependents);

(statearr_28287_28361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (3))){
var state_28236__$1 = state_28236;
var statearr_28288_28362 = state_28236__$1;
(statearr_28288_28362[(2)] = null);

(statearr_28288_28362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (12))){
var inst_28127 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28289_28363 = state_28236__$1;
(statearr_28289_28363[(2)] = inst_28127);

(statearr_28289_28363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (2))){
var inst_28089 = (state_28236[(13)]);
var inst_28096 = cljs.core.seq.call(null,inst_28089);
var inst_28097 = inst_28096;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28236__$1 = (function (){var statearr_28290 = state_28236;
(statearr_28290[(7)] = inst_28099);

(statearr_28290[(8)] = inst_28097);

(statearr_28290[(9)] = inst_28098);

(statearr_28290[(10)] = inst_28100);

return statearr_28290;
})();
var statearr_28291_28364 = state_28236__$1;
(statearr_28291_28364[(2)] = null);

(statearr_28291_28364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (23))){
var inst_28154 = (state_28236[(23)]);
var inst_28150 = (state_28236[(19)]);
var inst_28153 = (state_28236[(24)]);
var inst_28158 = (state_28236[(25)]);
var inst_28156 = (state_28236[(26)]);
var inst_28161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28163 = (function (){var all_files = inst_28150;
var res_SINGLEQUOTE_ = inst_28153;
var res = inst_28154;
var files_not_loaded = inst_28156;
var dependencies_that_loaded = inst_28158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28161,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28162){
var map__28292 = p__28162;
var map__28292__$1 = ((((!((map__28292 == null)))?((((map__28292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292):map__28292);
var request_url = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28161,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28164 = cljs.core.reverse.call(null,inst_28158);
var inst_28165 = cljs.core.map.call(null,inst_28163,inst_28164);
var inst_28166 = cljs.core.pr_str.call(null,inst_28165);
var inst_28167 = figwheel.client.utils.log.call(null,inst_28166);
var state_28236__$1 = (function (){var statearr_28294 = state_28236;
(statearr_28294[(31)] = inst_28161);

return statearr_28294;
})();
var statearr_28295_28365 = state_28236__$1;
(statearr_28295_28365[(2)] = inst_28167);

(statearr_28295_28365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (35))){
var state_28236__$1 = state_28236;
var statearr_28296_28366 = state_28236__$1;
(statearr_28296_28366[(2)] = true);

(statearr_28296_28366[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (19))){
var inst_28140 = (state_28236[(12)]);
var inst_28146 = figwheel.client.file_reloading.expand_files.call(null,inst_28140);
var state_28236__$1 = state_28236;
var statearr_28297_28367 = state_28236__$1;
(statearr_28297_28367[(2)] = inst_28146);

(statearr_28297_28367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (11))){
var state_28236__$1 = state_28236;
var statearr_28298_28368 = state_28236__$1;
(statearr_28298_28368[(2)] = null);

(statearr_28298_28368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (9))){
var inst_28129 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28299_28369 = state_28236__$1;
(statearr_28299_28369[(2)] = inst_28129);

(statearr_28299_28369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (5))){
var inst_28099 = (state_28236[(7)]);
var inst_28100 = (state_28236[(10)]);
var inst_28102 = (inst_28100 < inst_28099);
var inst_28103 = inst_28102;
var state_28236__$1 = state_28236;
if(cljs.core.truth_(inst_28103)){
var statearr_28300_28370 = state_28236__$1;
(statearr_28300_28370[(1)] = (7));

} else {
var statearr_28301_28371 = state_28236__$1;
(statearr_28301_28371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (14))){
var inst_28110 = (state_28236[(22)]);
var inst_28119 = cljs.core.first.call(null,inst_28110);
var inst_28120 = figwheel.client.file_reloading.eval_body.call(null,inst_28119,opts);
var inst_28121 = cljs.core.next.call(null,inst_28110);
var inst_28097 = inst_28121;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28236__$1 = (function (){var statearr_28302 = state_28236;
(statearr_28302[(7)] = inst_28099);

(statearr_28302[(32)] = inst_28120);

(statearr_28302[(8)] = inst_28097);

(statearr_28302[(9)] = inst_28098);

(statearr_28302[(10)] = inst_28100);

return statearr_28302;
})();
var statearr_28303_28372 = state_28236__$1;
(statearr_28303_28372[(2)] = null);

(statearr_28303_28372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (45))){
var state_28236__$1 = state_28236;
var statearr_28304_28373 = state_28236__$1;
(statearr_28304_28373[(2)] = null);

(statearr_28304_28373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (26))){
var inst_28154 = (state_28236[(23)]);
var inst_28150 = (state_28236[(19)]);
var inst_28153 = (state_28236[(24)]);
var inst_28158 = (state_28236[(25)]);
var inst_28156 = (state_28236[(26)]);
var inst_28173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28175 = (function (){var all_files = inst_28150;
var res_SINGLEQUOTE_ = inst_28153;
var res = inst_28154;
var files_not_loaded = inst_28156;
var dependencies_that_loaded = inst_28158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28173,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28174){
var map__28305 = p__28174;
var map__28305__$1 = ((((!((map__28305 == null)))?((((map__28305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28305):map__28305);
var namespace = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28173,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28176 = cljs.core.map.call(null,inst_28175,inst_28154);
var inst_28177 = cljs.core.pr_str.call(null,inst_28176);
var inst_28178 = figwheel.client.utils.log.call(null,inst_28177);
var inst_28179 = (function (){var all_files = inst_28150;
var res_SINGLEQUOTE_ = inst_28153;
var res = inst_28154;
var files_not_loaded = inst_28156;
var dependencies_that_loaded = inst_28158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28173,inst_28175,inst_28176,inst_28177,inst_28178,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28154,inst_28150,inst_28153,inst_28158,inst_28156,inst_28173,inst_28175,inst_28176,inst_28177,inst_28178,state_val_28237,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28180 = setTimeout(inst_28179,(10));
var state_28236__$1 = (function (){var statearr_28307 = state_28236;
(statearr_28307[(33)] = inst_28178);

(statearr_28307[(34)] = inst_28173);

return statearr_28307;
})();
var statearr_28308_28374 = state_28236__$1;
(statearr_28308_28374[(2)] = inst_28180);

(statearr_28308_28374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (16))){
var state_28236__$1 = state_28236;
var statearr_28309_28375 = state_28236__$1;
(statearr_28309_28375[(2)] = reload_dependents);

(statearr_28309_28375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (38))){
var inst_28190 = (state_28236[(16)]);
var inst_28207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28190);
var state_28236__$1 = state_28236;
var statearr_28310_28376 = state_28236__$1;
(statearr_28310_28376[(2)] = inst_28207);

(statearr_28310_28376[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (30))){
var state_28236__$1 = state_28236;
var statearr_28311_28377 = state_28236__$1;
(statearr_28311_28377[(2)] = null);

(statearr_28311_28377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (10))){
var inst_28110 = (state_28236[(22)]);
var inst_28112 = cljs.core.chunked_seq_QMARK_.call(null,inst_28110);
var state_28236__$1 = state_28236;
if(inst_28112){
var statearr_28312_28378 = state_28236__$1;
(statearr_28312_28378[(1)] = (13));

} else {
var statearr_28313_28379 = state_28236__$1;
(statearr_28313_28379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (18))){
var inst_28144 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
if(cljs.core.truth_(inst_28144)){
var statearr_28314_28380 = state_28236__$1;
(statearr_28314_28380[(1)] = (19));

} else {
var statearr_28315_28381 = state_28236__$1;
(statearr_28315_28381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (42))){
var state_28236__$1 = state_28236;
var statearr_28316_28382 = state_28236__$1;
(statearr_28316_28382[(2)] = null);

(statearr_28316_28382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (37))){
var inst_28202 = (state_28236[(2)]);
var state_28236__$1 = state_28236;
var statearr_28317_28383 = state_28236__$1;
(statearr_28317_28383[(2)] = inst_28202);

(statearr_28317_28383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28237 === (8))){
var inst_28110 = (state_28236[(22)]);
var inst_28097 = (state_28236[(8)]);
var inst_28110__$1 = cljs.core.seq.call(null,inst_28097);
var state_28236__$1 = (function (){var statearr_28318 = state_28236;
(statearr_28318[(22)] = inst_28110__$1);

return statearr_28318;
})();
if(inst_28110__$1){
var statearr_28319_28384 = state_28236__$1;
(statearr_28319_28384[(1)] = (10));

} else {
var statearr_28320_28385 = state_28236__$1;
(statearr_28320_28385[(1)] = (11));

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
});})(c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24280__auto__,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____0 = (function (){
var statearr_28324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28324[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__);

(statearr_28324[(1)] = (1));

return statearr_28324;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____1 = (function (state_28236){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_28236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e28325){if((e28325 instanceof Object)){
var ex__24284__auto__ = e28325;
var statearr_28326_28386 = state_28236;
(statearr_28326_28386[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28236;
state_28236 = G__28387;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__ = function(state_28236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____1.call(this,state_28236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24394__auto__ = (function (){var statearr_28327 = f__24393__auto__.call(null);
(statearr_28327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_28327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__,map__28082,map__28082__$1,opts,before_jsload,on_jsload,reload_dependents,map__28083,map__28083__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24392__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28390,link){
var map__28393 = p__28390;
var map__28393__$1 = ((((!((map__28393 == null)))?((((map__28393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var file = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28393,map__28393__$1,file){
return (function (p1__28388_SHARP_,p2__28389_SHARP_){
if(cljs.core._EQ_.call(null,p1__28388_SHARP_,p2__28389_SHARP_)){
return p1__28388_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28393,map__28393__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28399){
var map__28400 = p__28399;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var match_length = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28395_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28395_SHARP_);
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
var args28402 = [];
var len__22721__auto___28405 = arguments.length;
var i__22722__auto___28406 = (0);
while(true){
if((i__22722__auto___28406 < len__22721__auto___28405)){
args28402.push((arguments[i__22722__auto___28406]));

var G__28407 = (i__22722__auto___28406 + (1));
i__22722__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var G__28404 = args28402.length;
switch (G__28404) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28402.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28409_SHARP_,p2__28410_SHARP_){
return cljs.core.assoc.call(null,p1__28409_SHARP_,cljs.core.get.call(null,p2__28410_SHARP_,key),p2__28410_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28411){
var map__28414 = p__28411;
var map__28414__$1 = ((((!((map__28414 == null)))?((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);
var f_data = map__28414__$1;
var file = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28416,files_msg){
var map__28423 = p__28416;
var map__28423__$1 = ((((!((map__28423 == null)))?((((map__28423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28423):map__28423);
var opts = map__28423__$1;
var on_cssload = cljs.core.get.call(null,map__28423__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28425_28429 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28426_28430 = null;
var count__28427_28431 = (0);
var i__28428_28432 = (0);
while(true){
if((i__28428_28432 < count__28427_28431)){
var f_28433 = cljs.core._nth.call(null,chunk__28426_28430,i__28428_28432);
figwheel.client.file_reloading.reload_css_file.call(null,f_28433);

var G__28434 = seq__28425_28429;
var G__28435 = chunk__28426_28430;
var G__28436 = count__28427_28431;
var G__28437 = (i__28428_28432 + (1));
seq__28425_28429 = G__28434;
chunk__28426_28430 = G__28435;
count__28427_28431 = G__28436;
i__28428_28432 = G__28437;
continue;
} else {
var temp__4657__auto___28438 = cljs.core.seq.call(null,seq__28425_28429);
if(temp__4657__auto___28438){
var seq__28425_28439__$1 = temp__4657__auto___28438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28425_28439__$1)){
var c__22462__auto___28440 = cljs.core.chunk_first.call(null,seq__28425_28439__$1);
var G__28441 = cljs.core.chunk_rest.call(null,seq__28425_28439__$1);
var G__28442 = c__22462__auto___28440;
var G__28443 = cljs.core.count.call(null,c__22462__auto___28440);
var G__28444 = (0);
seq__28425_28429 = G__28441;
chunk__28426_28430 = G__28442;
count__28427_28431 = G__28443;
i__28428_28432 = G__28444;
continue;
} else {
var f_28445 = cljs.core.first.call(null,seq__28425_28439__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28445);

var G__28446 = cljs.core.next.call(null,seq__28425_28439__$1);
var G__28447 = null;
var G__28448 = (0);
var G__28449 = (0);
seq__28425_28429 = G__28446;
chunk__28426_28430 = G__28447;
count__28427_28431 = G__28448;
i__28428_28432 = G__28449;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28423,map__28423__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28423,map__28423__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map