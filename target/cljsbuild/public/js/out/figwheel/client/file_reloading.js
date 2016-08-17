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
var or__21788__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21788__auto__){
return or__21788__auto__;
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
var or__21788__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28025_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28025_SHARP_));
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
var seq__28030 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28031 = null;
var count__28032 = (0);
var i__28033 = (0);
while(true){
if((i__28033 < count__28032)){
var n = cljs.core._nth.call(null,chunk__28031,i__28033);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28034 = seq__28030;
var G__28035 = chunk__28031;
var G__28036 = count__28032;
var G__28037 = (i__28033 + (1));
seq__28030 = G__28034;
chunk__28031 = G__28035;
count__28032 = G__28036;
i__28033 = G__28037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28030);
if(temp__4657__auto__){
var seq__28030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28030__$1)){
var c__22599__auto__ = cljs.core.chunk_first.call(null,seq__28030__$1);
var G__28038 = cljs.core.chunk_rest.call(null,seq__28030__$1);
var G__28039 = c__22599__auto__;
var G__28040 = cljs.core.count.call(null,c__22599__auto__);
var G__28041 = (0);
seq__28030 = G__28038;
chunk__28031 = G__28039;
count__28032 = G__28040;
i__28033 = G__28041;
continue;
} else {
var n = cljs.core.first.call(null,seq__28030__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28042 = cljs.core.next.call(null,seq__28030__$1);
var G__28043 = null;
var G__28044 = (0);
var G__28045 = (0);
seq__28030 = G__28042;
chunk__28031 = G__28043;
count__28032 = G__28044;
i__28033 = G__28045;
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

var seq__28084_28091 = cljs.core.seq.call(null,deps);
var chunk__28085_28092 = null;
var count__28086_28093 = (0);
var i__28087_28094 = (0);
while(true){
if((i__28087_28094 < count__28086_28093)){
var dep_28095 = cljs.core._nth.call(null,chunk__28085_28092,i__28087_28094);
topo_sort_helper_STAR_.call(null,dep_28095,(depth + (1)),state);

var G__28096 = seq__28084_28091;
var G__28097 = chunk__28085_28092;
var G__28098 = count__28086_28093;
var G__28099 = (i__28087_28094 + (1));
seq__28084_28091 = G__28096;
chunk__28085_28092 = G__28097;
count__28086_28093 = G__28098;
i__28087_28094 = G__28099;
continue;
} else {
var temp__4657__auto___28100 = cljs.core.seq.call(null,seq__28084_28091);
if(temp__4657__auto___28100){
var seq__28084_28101__$1 = temp__4657__auto___28100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28084_28101__$1)){
var c__22599__auto___28102 = cljs.core.chunk_first.call(null,seq__28084_28101__$1);
var G__28103 = cljs.core.chunk_rest.call(null,seq__28084_28101__$1);
var G__28104 = c__22599__auto___28102;
var G__28105 = cljs.core.count.call(null,c__22599__auto___28102);
var G__28106 = (0);
seq__28084_28091 = G__28103;
chunk__28085_28092 = G__28104;
count__28086_28093 = G__28105;
i__28087_28094 = G__28106;
continue;
} else {
var dep_28107 = cljs.core.first.call(null,seq__28084_28101__$1);
topo_sort_helper_STAR_.call(null,dep_28107,(depth + (1)),state);

var G__28108 = cljs.core.next.call(null,seq__28084_28101__$1);
var G__28109 = null;
var G__28110 = (0);
var G__28111 = (0);
seq__28084_28091 = G__28108;
chunk__28085_28092 = G__28109;
count__28086_28093 = G__28110;
i__28087_28094 = G__28111;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28088){
var vec__28090 = p__28088;
var x = cljs.core.nth.call(null,vec__28090,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28090,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28090,x,xs,get_deps__$1){
return (function (p1__28046_SHARP_){
return clojure.set.difference.call(null,p1__28046_SHARP_,x);
});})(vec__28090,x,xs,get_deps__$1))
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
var seq__28124 = cljs.core.seq.call(null,provides);
var chunk__28125 = null;
var count__28126 = (0);
var i__28127 = (0);
while(true){
if((i__28127 < count__28126)){
var prov = cljs.core._nth.call(null,chunk__28125,i__28127);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28128_28136 = cljs.core.seq.call(null,requires);
var chunk__28129_28137 = null;
var count__28130_28138 = (0);
var i__28131_28139 = (0);
while(true){
if((i__28131_28139 < count__28130_28138)){
var req_28140 = cljs.core._nth.call(null,chunk__28129_28137,i__28131_28139);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28140,prov);

var G__28141 = seq__28128_28136;
var G__28142 = chunk__28129_28137;
var G__28143 = count__28130_28138;
var G__28144 = (i__28131_28139 + (1));
seq__28128_28136 = G__28141;
chunk__28129_28137 = G__28142;
count__28130_28138 = G__28143;
i__28131_28139 = G__28144;
continue;
} else {
var temp__4657__auto___28145 = cljs.core.seq.call(null,seq__28128_28136);
if(temp__4657__auto___28145){
var seq__28128_28146__$1 = temp__4657__auto___28145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28128_28146__$1)){
var c__22599__auto___28147 = cljs.core.chunk_first.call(null,seq__28128_28146__$1);
var G__28148 = cljs.core.chunk_rest.call(null,seq__28128_28146__$1);
var G__28149 = c__22599__auto___28147;
var G__28150 = cljs.core.count.call(null,c__22599__auto___28147);
var G__28151 = (0);
seq__28128_28136 = G__28148;
chunk__28129_28137 = G__28149;
count__28130_28138 = G__28150;
i__28131_28139 = G__28151;
continue;
} else {
var req_28152 = cljs.core.first.call(null,seq__28128_28146__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28152,prov);

var G__28153 = cljs.core.next.call(null,seq__28128_28146__$1);
var G__28154 = null;
var G__28155 = (0);
var G__28156 = (0);
seq__28128_28136 = G__28153;
chunk__28129_28137 = G__28154;
count__28130_28138 = G__28155;
i__28131_28139 = G__28156;
continue;
}
} else {
}
}
break;
}

var G__28157 = seq__28124;
var G__28158 = chunk__28125;
var G__28159 = count__28126;
var G__28160 = (i__28127 + (1));
seq__28124 = G__28157;
chunk__28125 = G__28158;
count__28126 = G__28159;
i__28127 = G__28160;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28124);
if(temp__4657__auto__){
var seq__28124__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28124__$1)){
var c__22599__auto__ = cljs.core.chunk_first.call(null,seq__28124__$1);
var G__28161 = cljs.core.chunk_rest.call(null,seq__28124__$1);
var G__28162 = c__22599__auto__;
var G__28163 = cljs.core.count.call(null,c__22599__auto__);
var G__28164 = (0);
seq__28124 = G__28161;
chunk__28125 = G__28162;
count__28126 = G__28163;
i__28127 = G__28164;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28124__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28132_28165 = cljs.core.seq.call(null,requires);
var chunk__28133_28166 = null;
var count__28134_28167 = (0);
var i__28135_28168 = (0);
while(true){
if((i__28135_28168 < count__28134_28167)){
var req_28169 = cljs.core._nth.call(null,chunk__28133_28166,i__28135_28168);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28169,prov);

var G__28170 = seq__28132_28165;
var G__28171 = chunk__28133_28166;
var G__28172 = count__28134_28167;
var G__28173 = (i__28135_28168 + (1));
seq__28132_28165 = G__28170;
chunk__28133_28166 = G__28171;
count__28134_28167 = G__28172;
i__28135_28168 = G__28173;
continue;
} else {
var temp__4657__auto___28174__$1 = cljs.core.seq.call(null,seq__28132_28165);
if(temp__4657__auto___28174__$1){
var seq__28132_28175__$1 = temp__4657__auto___28174__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28132_28175__$1)){
var c__22599__auto___28176 = cljs.core.chunk_first.call(null,seq__28132_28175__$1);
var G__28177 = cljs.core.chunk_rest.call(null,seq__28132_28175__$1);
var G__28178 = c__22599__auto___28176;
var G__28179 = cljs.core.count.call(null,c__22599__auto___28176);
var G__28180 = (0);
seq__28132_28165 = G__28177;
chunk__28133_28166 = G__28178;
count__28134_28167 = G__28179;
i__28135_28168 = G__28180;
continue;
} else {
var req_28181 = cljs.core.first.call(null,seq__28132_28175__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28181,prov);

var G__28182 = cljs.core.next.call(null,seq__28132_28175__$1);
var G__28183 = null;
var G__28184 = (0);
var G__28185 = (0);
seq__28132_28165 = G__28182;
chunk__28133_28166 = G__28183;
count__28134_28167 = G__28184;
i__28135_28168 = G__28185;
continue;
}
} else {
}
}
break;
}

var G__28186 = cljs.core.next.call(null,seq__28124__$1);
var G__28187 = null;
var G__28188 = (0);
var G__28189 = (0);
seq__28124 = G__28186;
chunk__28125 = G__28187;
count__28126 = G__28188;
i__28127 = G__28189;
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
var seq__28194_28198 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28195_28199 = null;
var count__28196_28200 = (0);
var i__28197_28201 = (0);
while(true){
if((i__28197_28201 < count__28196_28200)){
var ns_28202 = cljs.core._nth.call(null,chunk__28195_28199,i__28197_28201);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28202);

var G__28203 = seq__28194_28198;
var G__28204 = chunk__28195_28199;
var G__28205 = count__28196_28200;
var G__28206 = (i__28197_28201 + (1));
seq__28194_28198 = G__28203;
chunk__28195_28199 = G__28204;
count__28196_28200 = G__28205;
i__28197_28201 = G__28206;
continue;
} else {
var temp__4657__auto___28207 = cljs.core.seq.call(null,seq__28194_28198);
if(temp__4657__auto___28207){
var seq__28194_28208__$1 = temp__4657__auto___28207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28194_28208__$1)){
var c__22599__auto___28209 = cljs.core.chunk_first.call(null,seq__28194_28208__$1);
var G__28210 = cljs.core.chunk_rest.call(null,seq__28194_28208__$1);
var G__28211 = c__22599__auto___28209;
var G__28212 = cljs.core.count.call(null,c__22599__auto___28209);
var G__28213 = (0);
seq__28194_28198 = G__28210;
chunk__28195_28199 = G__28211;
count__28196_28200 = G__28212;
i__28197_28201 = G__28213;
continue;
} else {
var ns_28214 = cljs.core.first.call(null,seq__28194_28208__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28214);

var G__28215 = cljs.core.next.call(null,seq__28194_28208__$1);
var G__28216 = null;
var G__28217 = (0);
var G__28218 = (0);
seq__28194_28198 = G__28215;
chunk__28195_28199 = G__28216;
count__28196_28200 = G__28217;
i__28197_28201 = G__28218;
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
goog.require_figwheel_backup_ = (function (){var or__21788__auto__ = goog.require__;
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
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
var G__28219__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28220__i = 0, G__28220__a = new Array(arguments.length -  0);
while (G__28220__i < G__28220__a.length) {G__28220__a[G__28220__i] = arguments[G__28220__i + 0]; ++G__28220__i;}
  args = new cljs.core.IndexedSeq(G__28220__a,0);
} 
return G__28219__delegate.call(this,args);};
G__28219.cljs$lang$maxFixedArity = 0;
G__28219.cljs$lang$applyTo = (function (arglist__28221){
var args = cljs.core.seq(arglist__28221);
return G__28219__delegate(args);
});
G__28219.cljs$core$IFn$_invoke$arity$variadic = G__28219__delegate;
return G__28219;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28223 = cljs.core._EQ_;
var expr__28224 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28223.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28224))){
var path_parts = ((function (pred__28223,expr__28224){
return (function (p1__28222_SHARP_){
return clojure.string.split.call(null,p1__28222_SHARP_,/[\/\\]/);
});})(pred__28223,expr__28224))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28223,expr__28224){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28226){if((e28226 instanceof Error)){
var e = e28226;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28226;

}
}})());
});
;})(path_parts,sep,root,pred__28223,expr__28224))
} else {
if(cljs.core.truth_(pred__28223.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28224))){
return ((function (pred__28223,expr__28224){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28223,expr__28224){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28223,expr__28224))
);

return deferred.addErrback(((function (deferred,pred__28223,expr__28224){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28223,expr__28224))
);
});
;})(pred__28223,expr__28224))
} else {
return ((function (pred__28223,expr__28224){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28223,expr__28224))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28227,callback){
var map__28230 = p__28227;
var map__28230__$1 = ((((!((map__28230 == null)))?((((map__28230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28230):map__28230);
var file_msg = map__28230__$1;
var request_url = cljs.core.get.call(null,map__28230__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28230,map__28230__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28230,map__28230__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_28254){
var state_val_28255 = (state_28254[(1)]);
if((state_val_28255 === (7))){
var inst_28250 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
var statearr_28256_28276 = state_28254__$1;
(statearr_28256_28276[(2)] = inst_28250);

(statearr_28256_28276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (1))){
var state_28254__$1 = state_28254;
var statearr_28257_28277 = state_28254__$1;
(statearr_28257_28277[(2)] = null);

(statearr_28257_28277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (4))){
var inst_28234 = (state_28254[(7)]);
var inst_28234__$1 = (state_28254[(2)]);
var state_28254__$1 = (function (){var statearr_28258 = state_28254;
(statearr_28258[(7)] = inst_28234__$1);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28234__$1)){
var statearr_28259_28278 = state_28254__$1;
(statearr_28259_28278[(1)] = (5));

} else {
var statearr_28260_28279 = state_28254__$1;
(statearr_28260_28279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (6))){
var state_28254__$1 = state_28254;
var statearr_28261_28280 = state_28254__$1;
(statearr_28261_28280[(2)] = null);

(statearr_28261_28280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (3))){
var inst_28252 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else {
if((state_val_28255 === (2))){
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28255 === (11))){
var inst_28246 = (state_28254[(2)]);
var state_28254__$1 = (function (){var statearr_28262 = state_28254;
(statearr_28262[(8)] = inst_28246);

return statearr_28262;
})();
var statearr_28263_28281 = state_28254__$1;
(statearr_28263_28281[(2)] = null);

(statearr_28263_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (9))){
var inst_28238 = (state_28254[(9)]);
var inst_28240 = (state_28254[(10)]);
var inst_28242 = inst_28240.call(null,inst_28238);
var state_28254__$1 = state_28254;
var statearr_28264_28282 = state_28254__$1;
(statearr_28264_28282[(2)] = inst_28242);

(statearr_28264_28282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (5))){
var inst_28234 = (state_28254[(7)]);
var inst_28236 = figwheel.client.file_reloading.blocking_load.call(null,inst_28234);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(8),inst_28236);
} else {
if((state_val_28255 === (10))){
var inst_28238 = (state_28254[(9)]);
var inst_28244 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28238);
var state_28254__$1 = state_28254;
var statearr_28265_28283 = state_28254__$1;
(statearr_28265_28283[(2)] = inst_28244);

(statearr_28265_28283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (8))){
var inst_28234 = (state_28254[(7)]);
var inst_28240 = (state_28254[(10)]);
var inst_28238 = (state_28254[(2)]);
var inst_28239 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28240__$1 = cljs.core.get.call(null,inst_28239,inst_28234);
var state_28254__$1 = (function (){var statearr_28266 = state_28254;
(statearr_28266[(9)] = inst_28238);

(statearr_28266[(10)] = inst_28240__$1);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28240__$1)){
var statearr_28267_28284 = state_28254__$1;
(statearr_28267_28284[(1)] = (9));

} else {
var statearr_28268_28285 = state_28254__$1;
(statearr_28268_28285[(1)] = (10));

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
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24797__auto__ = null;
var figwheel$client$file_reloading$state_machine__24797__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = figwheel$client$file_reloading$state_machine__24797__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var figwheel$client$file_reloading$state_machine__24797__auto____1 = (function (state_28254){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_28254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__24800__auto__ = e28273;
var statearr_28274_28286 = state_28254;
(statearr_28274_28286[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28287 = state_28254;
state_28254 = G__28287;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24797__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24797__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24797__auto____0;
figwheel$client$file_reloading$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24797__auto____1;
return figwheel$client$file_reloading$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_28275 = f__24909__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28288,callback){
var map__28291 = p__28288;
var map__28291__$1 = ((((!((map__28291 == null)))?((((map__28291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28291):map__28291);
var file_msg = map__28291__$1;
var namespace = cljs.core.get.call(null,map__28291__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28291,map__28291__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28291,map__28291__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28293){
var map__28296 = p__28293;
var map__28296__$1 = ((((!((map__28296 == null)))?((((map__28296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28296):map__28296);
var file_msg = map__28296__$1;
var namespace = cljs.core.get.call(null,map__28296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21776__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21776__auto__){
var or__21788__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
var or__21788__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21788__auto____$1)){
return or__21788__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21776__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28298,callback){
var map__28301 = p__28298;
var map__28301__$1 = ((((!((map__28301 == null)))?((((map__28301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301):map__28301);
var file_msg = map__28301__$1;
var request_url = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24908__auto___28389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___28389,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___28389,out){
return (function (state_28371){
var state_val_28372 = (state_28371[(1)]);
if((state_val_28372 === (1))){
var inst_28349 = cljs.core.nth.call(null,files,(0),null);
var inst_28350 = cljs.core.nthnext.call(null,files,(1));
var inst_28351 = files;
var state_28371__$1 = (function (){var statearr_28373 = state_28371;
(statearr_28373[(7)] = inst_28350);

(statearr_28373[(8)] = inst_28351);

(statearr_28373[(9)] = inst_28349);

return statearr_28373;
})();
var statearr_28374_28390 = state_28371__$1;
(statearr_28374_28390[(2)] = null);

(statearr_28374_28390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (2))){
var inst_28351 = (state_28371[(8)]);
var inst_28354 = (state_28371[(10)]);
var inst_28354__$1 = cljs.core.nth.call(null,inst_28351,(0),null);
var inst_28355 = cljs.core.nthnext.call(null,inst_28351,(1));
var inst_28356 = (inst_28354__$1 == null);
var inst_28357 = cljs.core.not.call(null,inst_28356);
var state_28371__$1 = (function (){var statearr_28375 = state_28371;
(statearr_28375[(11)] = inst_28355);

(statearr_28375[(10)] = inst_28354__$1);

return statearr_28375;
})();
if(inst_28357){
var statearr_28376_28391 = state_28371__$1;
(statearr_28376_28391[(1)] = (4));

} else {
var statearr_28377_28392 = state_28371__$1;
(statearr_28377_28392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (3))){
var inst_28369 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28371__$1,inst_28369);
} else {
if((state_val_28372 === (4))){
var inst_28354 = (state_28371[(10)]);
var inst_28359 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28354);
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28371__$1,(7),inst_28359);
} else {
if((state_val_28372 === (5))){
var inst_28365 = cljs.core.async.close_BANG_.call(null,out);
var state_28371__$1 = state_28371;
var statearr_28378_28393 = state_28371__$1;
(statearr_28378_28393[(2)] = inst_28365);

(statearr_28378_28393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (6))){
var inst_28367 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
var statearr_28379_28394 = state_28371__$1;
(statearr_28379_28394[(2)] = inst_28367);

(statearr_28379_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (7))){
var inst_28355 = (state_28371[(11)]);
var inst_28361 = (state_28371[(2)]);
var inst_28362 = cljs.core.async.put_BANG_.call(null,out,inst_28361);
var inst_28351 = inst_28355;
var state_28371__$1 = (function (){var statearr_28380 = state_28371;
(statearr_28380[(8)] = inst_28351);

(statearr_28380[(12)] = inst_28362);

return statearr_28380;
})();
var statearr_28381_28395 = state_28371__$1;
(statearr_28381_28395[(2)] = null);

(statearr_28381_28395[(1)] = (2));


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
});})(c__24908__auto___28389,out))
;
return ((function (switch__24796__auto__,c__24908__auto___28389,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____0 = (function (){
var statearr_28385 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28385[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__);

(statearr_28385[(1)] = (1));

return statearr_28385;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____1 = (function (state_28371){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_28371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e28386){if((e28386 instanceof Object)){
var ex__24800__auto__ = e28386;
var statearr_28387_28396 = state_28371;
(statearr_28387_28396[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28397 = state_28371;
state_28371 = G__28397;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__ = function(state_28371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____1.call(this,state_28371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___28389,out))
})();
var state__24910__auto__ = (function (){var statearr_28388 = f__24909__auto__.call(null);
(statearr_28388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___28389);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___28389,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28398,opts){
var map__28402 = p__28398;
var map__28402__$1 = ((((!((map__28402 == null)))?((((map__28402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402):map__28402);
var eval_body__$1 = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21776__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21776__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21776__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28404){var e = e28404;
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
return (function (p1__28405_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28405_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28410){
var vec__28411 = p__28410;
var k = cljs.core.nth.call(null,vec__28411,(0),null);
var v = cljs.core.nth.call(null,vec__28411,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28412){
var vec__28413 = p__28412;
var k = cljs.core.nth.call(null,vec__28413,(0),null);
var v = cljs.core.nth.call(null,vec__28413,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28417,p__28418){
var map__28665 = p__28417;
var map__28665__$1 = ((((!((map__28665 == null)))?((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var opts = map__28665__$1;
var before_jsload = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28666 = p__28418;
var map__28666__$1 = ((((!((map__28666 == null)))?((((map__28666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28666):map__28666);
var msg = map__28666__$1;
var files = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28819){
var state_val_28820 = (state_28819[(1)]);
if((state_val_28820 === (7))){
var inst_28680 = (state_28819[(7)]);
var inst_28681 = (state_28819[(8)]);
var inst_28682 = (state_28819[(9)]);
var inst_28683 = (state_28819[(10)]);
var inst_28688 = cljs.core._nth.call(null,inst_28681,inst_28683);
var inst_28689 = figwheel.client.file_reloading.eval_body.call(null,inst_28688,opts);
var inst_28690 = (inst_28683 + (1));
var tmp28821 = inst_28680;
var tmp28822 = inst_28681;
var tmp28823 = inst_28682;
var inst_28680__$1 = tmp28821;
var inst_28681__$1 = tmp28822;
var inst_28682__$1 = tmp28823;
var inst_28683__$1 = inst_28690;
var state_28819__$1 = (function (){var statearr_28824 = state_28819;
(statearr_28824[(7)] = inst_28680__$1);

(statearr_28824[(11)] = inst_28689);

(statearr_28824[(8)] = inst_28681__$1);

(statearr_28824[(9)] = inst_28682__$1);

(statearr_28824[(10)] = inst_28683__$1);

return statearr_28824;
})();
var statearr_28825_28911 = state_28819__$1;
(statearr_28825_28911[(2)] = null);

(statearr_28825_28911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (20))){
var inst_28723 = (state_28819[(12)]);
var inst_28731 = figwheel.client.file_reloading.sort_files.call(null,inst_28723);
var state_28819__$1 = state_28819;
var statearr_28826_28912 = state_28819__$1;
(statearr_28826_28912[(2)] = inst_28731);

(statearr_28826_28912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (27))){
var state_28819__$1 = state_28819;
var statearr_28827_28913 = state_28819__$1;
(statearr_28827_28913[(2)] = null);

(statearr_28827_28913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (1))){
var inst_28672 = (state_28819[(13)]);
var inst_28669 = before_jsload.call(null,files);
var inst_28670 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28671 = (function (){return ((function (inst_28672,inst_28669,inst_28670,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28414_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28414_SHARP_);
});
;})(inst_28672,inst_28669,inst_28670,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28672__$1 = cljs.core.filter.call(null,inst_28671,files);
var inst_28673 = cljs.core.not_empty.call(null,inst_28672__$1);
var state_28819__$1 = (function (){var statearr_28828 = state_28819;
(statearr_28828[(14)] = inst_28670);

(statearr_28828[(15)] = inst_28669);

(statearr_28828[(13)] = inst_28672__$1);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28673)){
var statearr_28829_28914 = state_28819__$1;
(statearr_28829_28914[(1)] = (2));

} else {
var statearr_28830_28915 = state_28819__$1;
(statearr_28830_28915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (24))){
var state_28819__$1 = state_28819;
var statearr_28831_28916 = state_28819__$1;
(statearr_28831_28916[(2)] = null);

(statearr_28831_28916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (39))){
var inst_28773 = (state_28819[(16)]);
var state_28819__$1 = state_28819;
var statearr_28832_28917 = state_28819__$1;
(statearr_28832_28917[(2)] = inst_28773);

(statearr_28832_28917[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (46))){
var inst_28814 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28833_28918 = state_28819__$1;
(statearr_28833_28918[(2)] = inst_28814);

(statearr_28833_28918[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (4))){
var inst_28717 = (state_28819[(2)]);
var inst_28718 = cljs.core.List.EMPTY;
var inst_28719 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28718);
var inst_28720 = (function (){return ((function (inst_28717,inst_28718,inst_28719,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28415_SHARP_){
var and__21776__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28415_SHARP_);
if(cljs.core.truth_(and__21776__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28415_SHARP_));
} else {
return and__21776__auto__;
}
});
;})(inst_28717,inst_28718,inst_28719,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28721 = cljs.core.filter.call(null,inst_28720,files);
var inst_28722 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28723 = cljs.core.concat.call(null,inst_28721,inst_28722);
var state_28819__$1 = (function (){var statearr_28834 = state_28819;
(statearr_28834[(12)] = inst_28723);

(statearr_28834[(17)] = inst_28717);

(statearr_28834[(18)] = inst_28719);

return statearr_28834;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28835_28919 = state_28819__$1;
(statearr_28835_28919[(1)] = (16));

} else {
var statearr_28836_28920 = state_28819__$1;
(statearr_28836_28920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (15))){
var inst_28707 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28837_28921 = state_28819__$1;
(statearr_28837_28921[(2)] = inst_28707);

(statearr_28837_28921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (21))){
var inst_28733 = (state_28819[(19)]);
var inst_28733__$1 = (state_28819[(2)]);
var inst_28734 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28733__$1);
var state_28819__$1 = (function (){var statearr_28838 = state_28819;
(statearr_28838[(19)] = inst_28733__$1);

return statearr_28838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28819__$1,(22),inst_28734);
} else {
if((state_val_28820 === (31))){
var inst_28817 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28819__$1,inst_28817);
} else {
if((state_val_28820 === (32))){
var inst_28773 = (state_28819[(16)]);
var inst_28778 = inst_28773.cljs$lang$protocol_mask$partition0$;
var inst_28779 = (inst_28778 & (64));
var inst_28780 = inst_28773.cljs$core$ISeq$;
var inst_28781 = (inst_28779) || (inst_28780);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28781)){
var statearr_28839_28922 = state_28819__$1;
(statearr_28839_28922[(1)] = (35));

} else {
var statearr_28840_28923 = state_28819__$1;
(statearr_28840_28923[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (40))){
var inst_28794 = (state_28819[(20)]);
var inst_28793 = (state_28819[(2)]);
var inst_28794__$1 = cljs.core.get.call(null,inst_28793,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28795 = cljs.core.get.call(null,inst_28793,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28796 = cljs.core.not_empty.call(null,inst_28794__$1);
var state_28819__$1 = (function (){var statearr_28841 = state_28819;
(statearr_28841[(21)] = inst_28795);

(statearr_28841[(20)] = inst_28794__$1);

return statearr_28841;
})();
if(cljs.core.truth_(inst_28796)){
var statearr_28842_28924 = state_28819__$1;
(statearr_28842_28924[(1)] = (41));

} else {
var statearr_28843_28925 = state_28819__$1;
(statearr_28843_28925[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (33))){
var state_28819__$1 = state_28819;
var statearr_28844_28926 = state_28819__$1;
(statearr_28844_28926[(2)] = false);

(statearr_28844_28926[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (13))){
var inst_28693 = (state_28819[(22)]);
var inst_28697 = cljs.core.chunk_first.call(null,inst_28693);
var inst_28698 = cljs.core.chunk_rest.call(null,inst_28693);
var inst_28699 = cljs.core.count.call(null,inst_28697);
var inst_28680 = inst_28698;
var inst_28681 = inst_28697;
var inst_28682 = inst_28699;
var inst_28683 = (0);
var state_28819__$1 = (function (){var statearr_28845 = state_28819;
(statearr_28845[(7)] = inst_28680);

(statearr_28845[(8)] = inst_28681);

(statearr_28845[(9)] = inst_28682);

(statearr_28845[(10)] = inst_28683);

return statearr_28845;
})();
var statearr_28846_28927 = state_28819__$1;
(statearr_28846_28927[(2)] = null);

(statearr_28846_28927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (22))){
var inst_28733 = (state_28819[(19)]);
var inst_28741 = (state_28819[(23)]);
var inst_28736 = (state_28819[(24)]);
var inst_28737 = (state_28819[(25)]);
var inst_28736__$1 = (state_28819[(2)]);
var inst_28737__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28736__$1);
var inst_28738 = (function (){var all_files = inst_28733;
var res_SINGLEQUOTE_ = inst_28736__$1;
var res = inst_28737__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28733,inst_28741,inst_28736,inst_28737,inst_28736__$1,inst_28737__$1,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28416_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28416_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28733,inst_28741,inst_28736,inst_28737,inst_28736__$1,inst_28737__$1,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28739 = cljs.core.filter.call(null,inst_28738,inst_28736__$1);
var inst_28740 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28740);
var inst_28742 = cljs.core.not_empty.call(null,inst_28741__$1);
var state_28819__$1 = (function (){var statearr_28847 = state_28819;
(statearr_28847[(26)] = inst_28739);

(statearr_28847[(23)] = inst_28741__$1);

(statearr_28847[(24)] = inst_28736__$1);

(statearr_28847[(25)] = inst_28737__$1);

return statearr_28847;
})();
if(cljs.core.truth_(inst_28742)){
var statearr_28848_28928 = state_28819__$1;
(statearr_28848_28928[(1)] = (23));

} else {
var statearr_28849_28929 = state_28819__$1;
(statearr_28849_28929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (36))){
var state_28819__$1 = state_28819;
var statearr_28850_28930 = state_28819__$1;
(statearr_28850_28930[(2)] = false);

(statearr_28850_28930[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (41))){
var inst_28794 = (state_28819[(20)]);
var inst_28798 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28799 = cljs.core.map.call(null,inst_28798,inst_28794);
var inst_28800 = cljs.core.pr_str.call(null,inst_28799);
var inst_28801 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28800)].join('');
var inst_28802 = figwheel.client.utils.log.call(null,inst_28801);
var state_28819__$1 = state_28819;
var statearr_28851_28931 = state_28819__$1;
(statearr_28851_28931[(2)] = inst_28802);

(statearr_28851_28931[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (43))){
var inst_28795 = (state_28819[(21)]);
var inst_28805 = (state_28819[(2)]);
var inst_28806 = cljs.core.not_empty.call(null,inst_28795);
var state_28819__$1 = (function (){var statearr_28852 = state_28819;
(statearr_28852[(27)] = inst_28805);

return statearr_28852;
})();
if(cljs.core.truth_(inst_28806)){
var statearr_28853_28932 = state_28819__$1;
(statearr_28853_28932[(1)] = (44));

} else {
var statearr_28854_28933 = state_28819__$1;
(statearr_28854_28933[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (29))){
var inst_28773 = (state_28819[(16)]);
var inst_28739 = (state_28819[(26)]);
var inst_28733 = (state_28819[(19)]);
var inst_28741 = (state_28819[(23)]);
var inst_28736 = (state_28819[(24)]);
var inst_28737 = (state_28819[(25)]);
var inst_28769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28772 = (function (){var all_files = inst_28733;
var res_SINGLEQUOTE_ = inst_28736;
var res = inst_28737;
var files_not_loaded = inst_28739;
var dependencies_that_loaded = inst_28741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28773,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28769,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28771){
var map__28855 = p__28771;
var map__28855__$1 = ((((!((map__28855 == null)))?((((map__28855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);
var namespace = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28773,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28769,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28773__$1 = cljs.core.group_by.call(null,inst_28772,inst_28739);
var inst_28775 = (inst_28773__$1 == null);
var inst_28776 = cljs.core.not.call(null,inst_28775);
var state_28819__$1 = (function (){var statearr_28857 = state_28819;
(statearr_28857[(16)] = inst_28773__$1);

(statearr_28857[(28)] = inst_28769);

return statearr_28857;
})();
if(inst_28776){
var statearr_28858_28934 = state_28819__$1;
(statearr_28858_28934[(1)] = (32));

} else {
var statearr_28859_28935 = state_28819__$1;
(statearr_28859_28935[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (44))){
var inst_28795 = (state_28819[(21)]);
var inst_28808 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28795);
var inst_28809 = cljs.core.pr_str.call(null,inst_28808);
var inst_28810 = [cljs.core.str("not required: "),cljs.core.str(inst_28809)].join('');
var inst_28811 = figwheel.client.utils.log.call(null,inst_28810);
var state_28819__$1 = state_28819;
var statearr_28860_28936 = state_28819__$1;
(statearr_28860_28936[(2)] = inst_28811);

(statearr_28860_28936[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (6))){
var inst_28714 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28861_28937 = state_28819__$1;
(statearr_28861_28937[(2)] = inst_28714);

(statearr_28861_28937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (28))){
var inst_28739 = (state_28819[(26)]);
var inst_28766 = (state_28819[(2)]);
var inst_28767 = cljs.core.not_empty.call(null,inst_28739);
var state_28819__$1 = (function (){var statearr_28862 = state_28819;
(statearr_28862[(29)] = inst_28766);

return statearr_28862;
})();
if(cljs.core.truth_(inst_28767)){
var statearr_28863_28938 = state_28819__$1;
(statearr_28863_28938[(1)] = (29));

} else {
var statearr_28864_28939 = state_28819__$1;
(statearr_28864_28939[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (25))){
var inst_28737 = (state_28819[(25)]);
var inst_28753 = (state_28819[(2)]);
var inst_28754 = cljs.core.not_empty.call(null,inst_28737);
var state_28819__$1 = (function (){var statearr_28865 = state_28819;
(statearr_28865[(30)] = inst_28753);

return statearr_28865;
})();
if(cljs.core.truth_(inst_28754)){
var statearr_28866_28940 = state_28819__$1;
(statearr_28866_28940[(1)] = (26));

} else {
var statearr_28867_28941 = state_28819__$1;
(statearr_28867_28941[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (34))){
var inst_28788 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28788)){
var statearr_28868_28942 = state_28819__$1;
(statearr_28868_28942[(1)] = (38));

} else {
var statearr_28869_28943 = state_28819__$1;
(statearr_28869_28943[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (17))){
var state_28819__$1 = state_28819;
var statearr_28870_28944 = state_28819__$1;
(statearr_28870_28944[(2)] = recompile_dependents);

(statearr_28870_28944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (3))){
var state_28819__$1 = state_28819;
var statearr_28871_28945 = state_28819__$1;
(statearr_28871_28945[(2)] = null);

(statearr_28871_28945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (12))){
var inst_28710 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28872_28946 = state_28819__$1;
(statearr_28872_28946[(2)] = inst_28710);

(statearr_28872_28946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (2))){
var inst_28672 = (state_28819[(13)]);
var inst_28679 = cljs.core.seq.call(null,inst_28672);
var inst_28680 = inst_28679;
var inst_28681 = null;
var inst_28682 = (0);
var inst_28683 = (0);
var state_28819__$1 = (function (){var statearr_28873 = state_28819;
(statearr_28873[(7)] = inst_28680);

(statearr_28873[(8)] = inst_28681);

(statearr_28873[(9)] = inst_28682);

(statearr_28873[(10)] = inst_28683);

return statearr_28873;
})();
var statearr_28874_28947 = state_28819__$1;
(statearr_28874_28947[(2)] = null);

(statearr_28874_28947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (23))){
var inst_28739 = (state_28819[(26)]);
var inst_28733 = (state_28819[(19)]);
var inst_28741 = (state_28819[(23)]);
var inst_28736 = (state_28819[(24)]);
var inst_28737 = (state_28819[(25)]);
var inst_28744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28746 = (function (){var all_files = inst_28733;
var res_SINGLEQUOTE_ = inst_28736;
var res = inst_28737;
var files_not_loaded = inst_28739;
var dependencies_that_loaded = inst_28741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28744,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28745){
var map__28875 = p__28745;
var map__28875__$1 = ((((!((map__28875 == null)))?((((map__28875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28875):map__28875);
var request_url = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28744,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28747 = cljs.core.reverse.call(null,inst_28741);
var inst_28748 = cljs.core.map.call(null,inst_28746,inst_28747);
var inst_28749 = cljs.core.pr_str.call(null,inst_28748);
var inst_28750 = figwheel.client.utils.log.call(null,inst_28749);
var state_28819__$1 = (function (){var statearr_28877 = state_28819;
(statearr_28877[(31)] = inst_28744);

return statearr_28877;
})();
var statearr_28878_28948 = state_28819__$1;
(statearr_28878_28948[(2)] = inst_28750);

(statearr_28878_28948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (35))){
var state_28819__$1 = state_28819;
var statearr_28879_28949 = state_28819__$1;
(statearr_28879_28949[(2)] = true);

(statearr_28879_28949[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (19))){
var inst_28723 = (state_28819[(12)]);
var inst_28729 = figwheel.client.file_reloading.expand_files.call(null,inst_28723);
var state_28819__$1 = state_28819;
var statearr_28880_28950 = state_28819__$1;
(statearr_28880_28950[(2)] = inst_28729);

(statearr_28880_28950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (11))){
var state_28819__$1 = state_28819;
var statearr_28881_28951 = state_28819__$1;
(statearr_28881_28951[(2)] = null);

(statearr_28881_28951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (9))){
var inst_28712 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28882_28952 = state_28819__$1;
(statearr_28882_28952[(2)] = inst_28712);

(statearr_28882_28952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (5))){
var inst_28682 = (state_28819[(9)]);
var inst_28683 = (state_28819[(10)]);
var inst_28685 = (inst_28683 < inst_28682);
var inst_28686 = inst_28685;
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28686)){
var statearr_28883_28953 = state_28819__$1;
(statearr_28883_28953[(1)] = (7));

} else {
var statearr_28884_28954 = state_28819__$1;
(statearr_28884_28954[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (14))){
var inst_28693 = (state_28819[(22)]);
var inst_28702 = cljs.core.first.call(null,inst_28693);
var inst_28703 = figwheel.client.file_reloading.eval_body.call(null,inst_28702,opts);
var inst_28704 = cljs.core.next.call(null,inst_28693);
var inst_28680 = inst_28704;
var inst_28681 = null;
var inst_28682 = (0);
var inst_28683 = (0);
var state_28819__$1 = (function (){var statearr_28885 = state_28819;
(statearr_28885[(7)] = inst_28680);

(statearr_28885[(8)] = inst_28681);

(statearr_28885[(32)] = inst_28703);

(statearr_28885[(9)] = inst_28682);

(statearr_28885[(10)] = inst_28683);

return statearr_28885;
})();
var statearr_28886_28955 = state_28819__$1;
(statearr_28886_28955[(2)] = null);

(statearr_28886_28955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (45))){
var state_28819__$1 = state_28819;
var statearr_28887_28956 = state_28819__$1;
(statearr_28887_28956[(2)] = null);

(statearr_28887_28956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (26))){
var inst_28739 = (state_28819[(26)]);
var inst_28733 = (state_28819[(19)]);
var inst_28741 = (state_28819[(23)]);
var inst_28736 = (state_28819[(24)]);
var inst_28737 = (state_28819[(25)]);
var inst_28756 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28758 = (function (){var all_files = inst_28733;
var res_SINGLEQUOTE_ = inst_28736;
var res = inst_28737;
var files_not_loaded = inst_28739;
var dependencies_that_loaded = inst_28741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28756,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28757){
var map__28888 = p__28757;
var map__28888__$1 = ((((!((map__28888 == null)))?((((map__28888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28888):map__28888);
var namespace = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28756,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28759 = cljs.core.map.call(null,inst_28758,inst_28737);
var inst_28760 = cljs.core.pr_str.call(null,inst_28759);
var inst_28761 = figwheel.client.utils.log.call(null,inst_28760);
var inst_28762 = (function (){var all_files = inst_28733;
var res_SINGLEQUOTE_ = inst_28736;
var res = inst_28737;
var files_not_loaded = inst_28739;
var dependencies_that_loaded = inst_28741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28756,inst_28758,inst_28759,inst_28760,inst_28761,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28733,inst_28741,inst_28736,inst_28737,inst_28756,inst_28758,inst_28759,inst_28760,inst_28761,state_val_28820,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28763 = setTimeout(inst_28762,(10));
var state_28819__$1 = (function (){var statearr_28890 = state_28819;
(statearr_28890[(33)] = inst_28756);

(statearr_28890[(34)] = inst_28761);

return statearr_28890;
})();
var statearr_28891_28957 = state_28819__$1;
(statearr_28891_28957[(2)] = inst_28763);

(statearr_28891_28957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (16))){
var state_28819__$1 = state_28819;
var statearr_28892_28958 = state_28819__$1;
(statearr_28892_28958[(2)] = reload_dependents);

(statearr_28892_28958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (38))){
var inst_28773 = (state_28819[(16)]);
var inst_28790 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28773);
var state_28819__$1 = state_28819;
var statearr_28893_28959 = state_28819__$1;
(statearr_28893_28959[(2)] = inst_28790);

(statearr_28893_28959[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (30))){
var state_28819__$1 = state_28819;
var statearr_28894_28960 = state_28819__$1;
(statearr_28894_28960[(2)] = null);

(statearr_28894_28960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (10))){
var inst_28693 = (state_28819[(22)]);
var inst_28695 = cljs.core.chunked_seq_QMARK_.call(null,inst_28693);
var state_28819__$1 = state_28819;
if(inst_28695){
var statearr_28895_28961 = state_28819__$1;
(statearr_28895_28961[(1)] = (13));

} else {
var statearr_28896_28962 = state_28819__$1;
(statearr_28896_28962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (18))){
var inst_28727 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28727)){
var statearr_28897_28963 = state_28819__$1;
(statearr_28897_28963[(1)] = (19));

} else {
var statearr_28898_28964 = state_28819__$1;
(statearr_28898_28964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (42))){
var state_28819__$1 = state_28819;
var statearr_28899_28965 = state_28819__$1;
(statearr_28899_28965[(2)] = null);

(statearr_28899_28965[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (37))){
var inst_28785 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28900_28966 = state_28819__$1;
(statearr_28900_28966[(2)] = inst_28785);

(statearr_28900_28966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (8))){
var inst_28680 = (state_28819[(7)]);
var inst_28693 = (state_28819[(22)]);
var inst_28693__$1 = cljs.core.seq.call(null,inst_28680);
var state_28819__$1 = (function (){var statearr_28901 = state_28819;
(statearr_28901[(22)] = inst_28693__$1);

return statearr_28901;
})();
if(inst_28693__$1){
var statearr_28902_28967 = state_28819__$1;
(statearr_28902_28967[(1)] = (10));

} else {
var statearr_28903_28968 = state_28819__$1;
(statearr_28903_28968[(1)] = (11));

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
});})(c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24796__auto__,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28907[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____1 = (function (state_28819){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_28819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__24800__auto__ = e28908;
var statearr_28909_28969 = state_28819;
(statearr_28909_28969[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28970 = state_28819;
state_28819 = G__28970;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__ = function(state_28819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____1.call(this,state_28819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24910__auto__ = (function (){var statearr_28910 = f__24909__auto__.call(null);
(statearr_28910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__,map__28665,map__28665__$1,opts,before_jsload,on_jsload,reload_dependents,map__28666,map__28666__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24908__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28973,link){
var map__28976 = p__28973;
var map__28976__$1 = ((((!((map__28976 == null)))?((((map__28976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28976):map__28976);
var file = cljs.core.get.call(null,map__28976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28976,map__28976__$1,file){
return (function (p1__28971_SHARP_,p2__28972_SHARP_){
if(cljs.core._EQ_.call(null,p1__28971_SHARP_,p2__28972_SHARP_)){
return p1__28971_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28976,map__28976__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28982){
var map__28983 = p__28982;
var map__28983__$1 = ((((!((map__28983 == null)))?((((map__28983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28983):map__28983);
var match_length = cljs.core.get.call(null,map__28983__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28983__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28978_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28978_SHARP_);
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
var args28985 = [];
var len__22859__auto___28988 = arguments.length;
var i__22860__auto___28989 = (0);
while(true){
if((i__22860__auto___28989 < len__22859__auto___28988)){
args28985.push((arguments[i__22860__auto___28989]));

var G__28990 = (i__22860__auto___28989 + (1));
i__22860__auto___28989 = G__28990;
continue;
} else {
}
break;
}

var G__28987 = args28985.length;
switch (G__28987) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28985.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28992_SHARP_,p2__28993_SHARP_){
return cljs.core.assoc.call(null,p1__28992_SHARP_,cljs.core.get.call(null,p2__28993_SHARP_,key),p2__28993_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28994){
var map__28997 = p__28994;
var map__28997__$1 = ((((!((map__28997 == null)))?((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);
var f_data = map__28997__$1;
var file = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28999,files_msg){
var map__29006 = p__28999;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var opts = map__29006__$1;
var on_cssload = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29008_29012 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29009_29013 = null;
var count__29010_29014 = (0);
var i__29011_29015 = (0);
while(true){
if((i__29011_29015 < count__29010_29014)){
var f_29016 = cljs.core._nth.call(null,chunk__29009_29013,i__29011_29015);
figwheel.client.file_reloading.reload_css_file.call(null,f_29016);

var G__29017 = seq__29008_29012;
var G__29018 = chunk__29009_29013;
var G__29019 = count__29010_29014;
var G__29020 = (i__29011_29015 + (1));
seq__29008_29012 = G__29017;
chunk__29009_29013 = G__29018;
count__29010_29014 = G__29019;
i__29011_29015 = G__29020;
continue;
} else {
var temp__4657__auto___29021 = cljs.core.seq.call(null,seq__29008_29012);
if(temp__4657__auto___29021){
var seq__29008_29022__$1 = temp__4657__auto___29021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29008_29022__$1)){
var c__22599__auto___29023 = cljs.core.chunk_first.call(null,seq__29008_29022__$1);
var G__29024 = cljs.core.chunk_rest.call(null,seq__29008_29022__$1);
var G__29025 = c__22599__auto___29023;
var G__29026 = cljs.core.count.call(null,c__22599__auto___29023);
var G__29027 = (0);
seq__29008_29012 = G__29024;
chunk__29009_29013 = G__29025;
count__29010_29014 = G__29026;
i__29011_29015 = G__29027;
continue;
} else {
var f_29028 = cljs.core.first.call(null,seq__29008_29022__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29028);

var G__29029 = cljs.core.next.call(null,seq__29008_29022__$1);
var G__29030 = null;
var G__29031 = (0);
var G__29032 = (0);
seq__29008_29012 = G__29029;
chunk__29009_29013 = G__29030;
count__29010_29014 = G__29031;
i__29011_29015 = G__29032;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29006,map__29006__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29006,map__29006__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map