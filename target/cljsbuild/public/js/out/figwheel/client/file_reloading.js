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
var or__22239__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22239__auto__){
return or__22239__auto__;
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
var or__22239__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28695_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28695_SHARP_));
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
var seq__28700 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28701 = null;
var count__28702 = (0);
var i__28703 = (0);
while(true){
if((i__28703 < count__28702)){
var n = cljs.core._nth.call(null,chunk__28701,i__28703);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28704 = seq__28700;
var G__28705 = chunk__28701;
var G__28706 = count__28702;
var G__28707 = (i__28703 + (1));
seq__28700 = G__28704;
chunk__28701 = G__28705;
count__28702 = G__28706;
i__28703 = G__28707;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28700);
if(temp__4657__auto__){
var seq__28700__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28700__$1)){
var c__23050__auto__ = cljs.core.chunk_first.call(null,seq__28700__$1);
var G__28708 = cljs.core.chunk_rest.call(null,seq__28700__$1);
var G__28709 = c__23050__auto__;
var G__28710 = cljs.core.count.call(null,c__23050__auto__);
var G__28711 = (0);
seq__28700 = G__28708;
chunk__28701 = G__28709;
count__28702 = G__28710;
i__28703 = G__28711;
continue;
} else {
var n = cljs.core.first.call(null,seq__28700__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28712 = cljs.core.next.call(null,seq__28700__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28700 = G__28712;
chunk__28701 = G__28713;
count__28702 = G__28714;
i__28703 = G__28715;
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

var seq__28754_28761 = cljs.core.seq.call(null,deps);
var chunk__28755_28762 = null;
var count__28756_28763 = (0);
var i__28757_28764 = (0);
while(true){
if((i__28757_28764 < count__28756_28763)){
var dep_28765 = cljs.core._nth.call(null,chunk__28755_28762,i__28757_28764);
topo_sort_helper_STAR_.call(null,dep_28765,(depth + (1)),state);

var G__28766 = seq__28754_28761;
var G__28767 = chunk__28755_28762;
var G__28768 = count__28756_28763;
var G__28769 = (i__28757_28764 + (1));
seq__28754_28761 = G__28766;
chunk__28755_28762 = G__28767;
count__28756_28763 = G__28768;
i__28757_28764 = G__28769;
continue;
} else {
var temp__4657__auto___28770 = cljs.core.seq.call(null,seq__28754_28761);
if(temp__4657__auto___28770){
var seq__28754_28771__$1 = temp__4657__auto___28770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28754_28771__$1)){
var c__23050__auto___28772 = cljs.core.chunk_first.call(null,seq__28754_28771__$1);
var G__28773 = cljs.core.chunk_rest.call(null,seq__28754_28771__$1);
var G__28774 = c__23050__auto___28772;
var G__28775 = cljs.core.count.call(null,c__23050__auto___28772);
var G__28776 = (0);
seq__28754_28761 = G__28773;
chunk__28755_28762 = G__28774;
count__28756_28763 = G__28775;
i__28757_28764 = G__28776;
continue;
} else {
var dep_28777 = cljs.core.first.call(null,seq__28754_28771__$1);
topo_sort_helper_STAR_.call(null,dep_28777,(depth + (1)),state);

var G__28778 = cljs.core.next.call(null,seq__28754_28771__$1);
var G__28779 = null;
var G__28780 = (0);
var G__28781 = (0);
seq__28754_28761 = G__28778;
chunk__28755_28762 = G__28779;
count__28756_28763 = G__28780;
i__28757_28764 = G__28781;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28758){
var vec__28760 = p__28758;
var x = cljs.core.nth.call(null,vec__28760,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28760,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28760,x,xs,get_deps__$1){
return (function (p1__28716_SHARP_){
return clojure.set.difference.call(null,p1__28716_SHARP_,x);
});})(vec__28760,x,xs,get_deps__$1))
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
var seq__28794 = cljs.core.seq.call(null,provides);
var chunk__28795 = null;
var count__28796 = (0);
var i__28797 = (0);
while(true){
if((i__28797 < count__28796)){
var prov = cljs.core._nth.call(null,chunk__28795,i__28797);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28798_28806 = cljs.core.seq.call(null,requires);
var chunk__28799_28807 = null;
var count__28800_28808 = (0);
var i__28801_28809 = (0);
while(true){
if((i__28801_28809 < count__28800_28808)){
var req_28810 = cljs.core._nth.call(null,chunk__28799_28807,i__28801_28809);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28810,prov);

var G__28811 = seq__28798_28806;
var G__28812 = chunk__28799_28807;
var G__28813 = count__28800_28808;
var G__28814 = (i__28801_28809 + (1));
seq__28798_28806 = G__28811;
chunk__28799_28807 = G__28812;
count__28800_28808 = G__28813;
i__28801_28809 = G__28814;
continue;
} else {
var temp__4657__auto___28815 = cljs.core.seq.call(null,seq__28798_28806);
if(temp__4657__auto___28815){
var seq__28798_28816__$1 = temp__4657__auto___28815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28798_28816__$1)){
var c__23050__auto___28817 = cljs.core.chunk_first.call(null,seq__28798_28816__$1);
var G__28818 = cljs.core.chunk_rest.call(null,seq__28798_28816__$1);
var G__28819 = c__23050__auto___28817;
var G__28820 = cljs.core.count.call(null,c__23050__auto___28817);
var G__28821 = (0);
seq__28798_28806 = G__28818;
chunk__28799_28807 = G__28819;
count__28800_28808 = G__28820;
i__28801_28809 = G__28821;
continue;
} else {
var req_28822 = cljs.core.first.call(null,seq__28798_28816__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28822,prov);

var G__28823 = cljs.core.next.call(null,seq__28798_28816__$1);
var G__28824 = null;
var G__28825 = (0);
var G__28826 = (0);
seq__28798_28806 = G__28823;
chunk__28799_28807 = G__28824;
count__28800_28808 = G__28825;
i__28801_28809 = G__28826;
continue;
}
} else {
}
}
break;
}

var G__28827 = seq__28794;
var G__28828 = chunk__28795;
var G__28829 = count__28796;
var G__28830 = (i__28797 + (1));
seq__28794 = G__28827;
chunk__28795 = G__28828;
count__28796 = G__28829;
i__28797 = G__28830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28794);
if(temp__4657__auto__){
var seq__28794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794__$1)){
var c__23050__auto__ = cljs.core.chunk_first.call(null,seq__28794__$1);
var G__28831 = cljs.core.chunk_rest.call(null,seq__28794__$1);
var G__28832 = c__23050__auto__;
var G__28833 = cljs.core.count.call(null,c__23050__auto__);
var G__28834 = (0);
seq__28794 = G__28831;
chunk__28795 = G__28832;
count__28796 = G__28833;
i__28797 = G__28834;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28794__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28802_28835 = cljs.core.seq.call(null,requires);
var chunk__28803_28836 = null;
var count__28804_28837 = (0);
var i__28805_28838 = (0);
while(true){
if((i__28805_28838 < count__28804_28837)){
var req_28839 = cljs.core._nth.call(null,chunk__28803_28836,i__28805_28838);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28839,prov);

var G__28840 = seq__28802_28835;
var G__28841 = chunk__28803_28836;
var G__28842 = count__28804_28837;
var G__28843 = (i__28805_28838 + (1));
seq__28802_28835 = G__28840;
chunk__28803_28836 = G__28841;
count__28804_28837 = G__28842;
i__28805_28838 = G__28843;
continue;
} else {
var temp__4657__auto___28844__$1 = cljs.core.seq.call(null,seq__28802_28835);
if(temp__4657__auto___28844__$1){
var seq__28802_28845__$1 = temp__4657__auto___28844__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28802_28845__$1)){
var c__23050__auto___28846 = cljs.core.chunk_first.call(null,seq__28802_28845__$1);
var G__28847 = cljs.core.chunk_rest.call(null,seq__28802_28845__$1);
var G__28848 = c__23050__auto___28846;
var G__28849 = cljs.core.count.call(null,c__23050__auto___28846);
var G__28850 = (0);
seq__28802_28835 = G__28847;
chunk__28803_28836 = G__28848;
count__28804_28837 = G__28849;
i__28805_28838 = G__28850;
continue;
} else {
var req_28851 = cljs.core.first.call(null,seq__28802_28845__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28851,prov);

var G__28852 = cljs.core.next.call(null,seq__28802_28845__$1);
var G__28853 = null;
var G__28854 = (0);
var G__28855 = (0);
seq__28802_28835 = G__28852;
chunk__28803_28836 = G__28853;
count__28804_28837 = G__28854;
i__28805_28838 = G__28855;
continue;
}
} else {
}
}
break;
}

var G__28856 = cljs.core.next.call(null,seq__28794__$1);
var G__28857 = null;
var G__28858 = (0);
var G__28859 = (0);
seq__28794 = G__28856;
chunk__28795 = G__28857;
count__28796 = G__28858;
i__28797 = G__28859;
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
var seq__28864_28868 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28865_28869 = null;
var count__28866_28870 = (0);
var i__28867_28871 = (0);
while(true){
if((i__28867_28871 < count__28866_28870)){
var ns_28872 = cljs.core._nth.call(null,chunk__28865_28869,i__28867_28871);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28872);

var G__28873 = seq__28864_28868;
var G__28874 = chunk__28865_28869;
var G__28875 = count__28866_28870;
var G__28876 = (i__28867_28871 + (1));
seq__28864_28868 = G__28873;
chunk__28865_28869 = G__28874;
count__28866_28870 = G__28875;
i__28867_28871 = G__28876;
continue;
} else {
var temp__4657__auto___28877 = cljs.core.seq.call(null,seq__28864_28868);
if(temp__4657__auto___28877){
var seq__28864_28878__$1 = temp__4657__auto___28877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28864_28878__$1)){
var c__23050__auto___28879 = cljs.core.chunk_first.call(null,seq__28864_28878__$1);
var G__28880 = cljs.core.chunk_rest.call(null,seq__28864_28878__$1);
var G__28881 = c__23050__auto___28879;
var G__28882 = cljs.core.count.call(null,c__23050__auto___28879);
var G__28883 = (0);
seq__28864_28868 = G__28880;
chunk__28865_28869 = G__28881;
count__28866_28870 = G__28882;
i__28867_28871 = G__28883;
continue;
} else {
var ns_28884 = cljs.core.first.call(null,seq__28864_28878__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28884);

var G__28885 = cljs.core.next.call(null,seq__28864_28878__$1);
var G__28886 = null;
var G__28887 = (0);
var G__28888 = (0);
seq__28864_28868 = G__28885;
chunk__28865_28869 = G__28886;
count__28866_28870 = G__28887;
i__28867_28871 = G__28888;
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
goog.require_figwheel_backup_ = (function (){var or__22239__auto__ = goog.require__;
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
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
var G__28889__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28890__i = 0, G__28890__a = new Array(arguments.length -  0);
while (G__28890__i < G__28890__a.length) {G__28890__a[G__28890__i] = arguments[G__28890__i + 0]; ++G__28890__i;}
  args = new cljs.core.IndexedSeq(G__28890__a,0);
} 
return G__28889__delegate.call(this,args);};
G__28889.cljs$lang$maxFixedArity = 0;
G__28889.cljs$lang$applyTo = (function (arglist__28891){
var args = cljs.core.seq(arglist__28891);
return G__28889__delegate(args);
});
G__28889.cljs$core$IFn$_invoke$arity$variadic = G__28889__delegate;
return G__28889;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28893 = cljs.core._EQ_;
var expr__28894 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28894))){
var path_parts = ((function (pred__28893,expr__28894){
return (function (p1__28892_SHARP_){
return clojure.string.split.call(null,p1__28892_SHARP_,/[\/\\]/);
});})(pred__28893,expr__28894))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28893,expr__28894){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28896){if((e28896 instanceof Error)){
var e = e28896;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28896;

}
}})());
});
;})(path_parts,sep,root,pred__28893,expr__28894))
} else {
if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28894))){
return ((function (pred__28893,expr__28894){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28893,expr__28894){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28893,expr__28894))
);

return deferred.addErrback(((function (deferred,pred__28893,expr__28894){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28893,expr__28894))
);
});
;})(pred__28893,expr__28894))
} else {
return ((function (pred__28893,expr__28894){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28893,expr__28894))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28897,callback){
var map__28900 = p__28897;
var map__28900__$1 = ((((!((map__28900 == null)))?((((map__28900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28900):map__28900);
var file_msg = map__28900__$1;
var request_url = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28900,map__28900__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28900,map__28900__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__){
return (function (state_28924){
var state_val_28925 = (state_28924[(1)]);
if((state_val_28925 === (7))){
var inst_28920 = (state_28924[(2)]);
var state_28924__$1 = state_28924;
var statearr_28926_28946 = state_28924__$1;
(statearr_28926_28946[(2)] = inst_28920);

(statearr_28926_28946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (1))){
var state_28924__$1 = state_28924;
var statearr_28927_28947 = state_28924__$1;
(statearr_28927_28947[(2)] = null);

(statearr_28927_28947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (4))){
var inst_28904 = (state_28924[(7)]);
var inst_28904__$1 = (state_28924[(2)]);
var state_28924__$1 = (function (){var statearr_28928 = state_28924;
(statearr_28928[(7)] = inst_28904__$1);

return statearr_28928;
})();
if(cljs.core.truth_(inst_28904__$1)){
var statearr_28929_28948 = state_28924__$1;
(statearr_28929_28948[(1)] = (5));

} else {
var statearr_28930_28949 = state_28924__$1;
(statearr_28930_28949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (6))){
var state_28924__$1 = state_28924;
var statearr_28931_28950 = state_28924__$1;
(statearr_28931_28950[(2)] = null);

(statearr_28931_28950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (3))){
var inst_28922 = (state_28924[(2)]);
var state_28924__$1 = state_28924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28924__$1,inst_28922);
} else {
if((state_val_28925 === (2))){
var state_28924__$1 = state_28924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28924__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28925 === (11))){
var inst_28916 = (state_28924[(2)]);
var state_28924__$1 = (function (){var statearr_28932 = state_28924;
(statearr_28932[(8)] = inst_28916);

return statearr_28932;
})();
var statearr_28933_28951 = state_28924__$1;
(statearr_28933_28951[(2)] = null);

(statearr_28933_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (9))){
var inst_28908 = (state_28924[(9)]);
var inst_28910 = (state_28924[(10)]);
var inst_28912 = inst_28910.call(null,inst_28908);
var state_28924__$1 = state_28924;
var statearr_28934_28952 = state_28924__$1;
(statearr_28934_28952[(2)] = inst_28912);

(statearr_28934_28952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (5))){
var inst_28904 = (state_28924[(7)]);
var inst_28906 = figwheel.client.file_reloading.blocking_load.call(null,inst_28904);
var state_28924__$1 = state_28924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28924__$1,(8),inst_28906);
} else {
if((state_val_28925 === (10))){
var inst_28908 = (state_28924[(9)]);
var inst_28914 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28908);
var state_28924__$1 = state_28924;
var statearr_28935_28953 = state_28924__$1;
(statearr_28935_28953[(2)] = inst_28914);

(statearr_28935_28953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28925 === (8))){
var inst_28904 = (state_28924[(7)]);
var inst_28910 = (state_28924[(10)]);
var inst_28908 = (state_28924[(2)]);
var inst_28909 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28910__$1 = cljs.core.get.call(null,inst_28909,inst_28904);
var state_28924__$1 = (function (){var statearr_28936 = state_28924;
(statearr_28936[(9)] = inst_28908);

(statearr_28936[(10)] = inst_28910__$1);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28910__$1)){
var statearr_28937_28954 = state_28924__$1;
(statearr_28937_28954[(1)] = (9));

} else {
var statearr_28938_28955 = state_28924__$1;
(statearr_28938_28955[(1)] = (10));

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
});})(c__25578__auto__))
;
return ((function (switch__25465__auto__,c__25578__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25466__auto__ = null;
var figwheel$client$file_reloading$state_machine__25466__auto____0 = (function (){
var statearr_28942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28942[(0)] = figwheel$client$file_reloading$state_machine__25466__auto__);

(statearr_28942[(1)] = (1));

return statearr_28942;
});
var figwheel$client$file_reloading$state_machine__25466__auto____1 = (function (state_28924){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_28924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e28943){if((e28943 instanceof Object)){
var ex__25469__auto__ = e28943;
var statearr_28944_28956 = state_28924;
(statearr_28944_28956[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28957 = state_28924;
state_28924 = G__28957;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25466__auto__ = function(state_28924){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25466__auto____1.call(this,state_28924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25466__auto____0;
figwheel$client$file_reloading$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25466__auto____1;
return figwheel$client$file_reloading$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__))
})();
var state__25580__auto__ = (function (){var statearr_28945 = f__25579__auto__.call(null);
(statearr_28945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__))
);

return c__25578__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28958,callback){
var map__28961 = p__28958;
var map__28961__$1 = ((((!((map__28961 == null)))?((((map__28961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28961):map__28961);
var file_msg = map__28961__$1;
var namespace = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28961,map__28961__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28961,map__28961__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28963){
var map__28966 = p__28963;
var map__28966__$1 = ((((!((map__28966 == null)))?((((map__28966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28966):map__28966);
var file_msg = map__28966__$1;
var namespace = cljs.core.get.call(null,map__28966__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22227__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22227__auto__){
var or__22239__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
var or__22239__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22239__auto____$1)){
return or__22239__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22227__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28968,callback){
var map__28971 = p__28968;
var map__28971__$1 = ((((!((map__28971 == null)))?((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971):map__28971);
var file_msg = map__28971__$1;
var request_url = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25578__auto___29059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___29059,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___29059,out){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (1))){
var inst_29019 = cljs.core.nth.call(null,files,(0),null);
var inst_29020 = cljs.core.nthnext.call(null,files,(1));
var inst_29021 = files;
var state_29041__$1 = (function (){var statearr_29043 = state_29041;
(statearr_29043[(7)] = inst_29021);

(statearr_29043[(8)] = inst_29019);

(statearr_29043[(9)] = inst_29020);

return statearr_29043;
})();
var statearr_29044_29060 = state_29041__$1;
(statearr_29044_29060[(2)] = null);

(statearr_29044_29060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var inst_29024 = (state_29041[(10)]);
var inst_29021 = (state_29041[(7)]);
var inst_29024__$1 = cljs.core.nth.call(null,inst_29021,(0),null);
var inst_29025 = cljs.core.nthnext.call(null,inst_29021,(1));
var inst_29026 = (inst_29024__$1 == null);
var inst_29027 = cljs.core.not.call(null,inst_29026);
var state_29041__$1 = (function (){var statearr_29045 = state_29041;
(statearr_29045[(10)] = inst_29024__$1);

(statearr_29045[(11)] = inst_29025);

return statearr_29045;
})();
if(inst_29027){
var statearr_29046_29061 = state_29041__$1;
(statearr_29046_29061[(1)] = (4));

} else {
var statearr_29047_29062 = state_29041__$1;
(statearr_29047_29062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (4))){
var inst_29024 = (state_29041[(10)]);
var inst_29029 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29024);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(7),inst_29029);
} else {
if((state_val_29042 === (5))){
var inst_29035 = cljs.core.async.close_BANG_.call(null,out);
var state_29041__$1 = state_29041;
var statearr_29048_29063 = state_29041__$1;
(statearr_29048_29063[(2)] = inst_29035);

(statearr_29048_29063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29049_29064 = state_29041__$1;
(statearr_29049_29064[(2)] = inst_29037);

(statearr_29049_29064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (7))){
var inst_29025 = (state_29041[(11)]);
var inst_29031 = (state_29041[(2)]);
var inst_29032 = cljs.core.async.put_BANG_.call(null,out,inst_29031);
var inst_29021 = inst_29025;
var state_29041__$1 = (function (){var statearr_29050 = state_29041;
(statearr_29050[(7)] = inst_29021);

(statearr_29050[(12)] = inst_29032);

return statearr_29050;
})();
var statearr_29051_29065 = state_29041__$1;
(statearr_29051_29065[(2)] = null);

(statearr_29051_29065[(1)] = (2));


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
});})(c__25578__auto___29059,out))
;
return ((function (switch__25465__auto__,c__25578__auto___29059,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____1 = (function (state_29041){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e29056){if((e29056 instanceof Object)){
var ex__25469__auto__ = e29056;
var statearr_29057_29066 = state_29041;
(statearr_29057_29066[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29067 = state_29041;
state_29041 = G__29067;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___29059,out))
})();
var state__25580__auto__ = (function (){var statearr_29058 = f__25579__auto__.call(null);
(statearr_29058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___29059);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___29059,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29068,opts){
var map__29072 = p__29068;
var map__29072__$1 = ((((!((map__29072 == null)))?((((map__29072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29072):map__29072);
var eval_body__$1 = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22227__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22227__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22227__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29074){var e = e29074;
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
return (function (p1__29075_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29075_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29080){
var vec__29081 = p__29080;
var k = cljs.core.nth.call(null,vec__29081,(0),null);
var v = cljs.core.nth.call(null,vec__29081,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29082){
var vec__29083 = p__29082;
var k = cljs.core.nth.call(null,vec__29083,(0),null);
var v = cljs.core.nth.call(null,vec__29083,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29087,p__29088){
var map__29335 = p__29087;
var map__29335__$1 = ((((!((map__29335 == null)))?((((map__29335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29335):map__29335);
var opts = map__29335__$1;
var before_jsload = cljs.core.get.call(null,map__29335__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29335__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29335__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29336 = p__29088;
var map__29336__$1 = ((((!((map__29336 == null)))?((((map__29336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29336):map__29336);
var msg = map__29336__$1;
var files = cljs.core.get.call(null,map__29336__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29336__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29336__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (7))){
var inst_29351 = (state_29489[(7)]);
var inst_29350 = (state_29489[(8)]);
var inst_29352 = (state_29489[(9)]);
var inst_29353 = (state_29489[(10)]);
var inst_29358 = cljs.core._nth.call(null,inst_29351,inst_29353);
var inst_29359 = figwheel.client.file_reloading.eval_body.call(null,inst_29358,opts);
var inst_29360 = (inst_29353 + (1));
var tmp29491 = inst_29351;
var tmp29492 = inst_29350;
var tmp29493 = inst_29352;
var inst_29350__$1 = tmp29492;
var inst_29351__$1 = tmp29491;
var inst_29352__$1 = tmp29493;
var inst_29353__$1 = inst_29360;
var state_29489__$1 = (function (){var statearr_29494 = state_29489;
(statearr_29494[(7)] = inst_29351__$1);

(statearr_29494[(8)] = inst_29350__$1);

(statearr_29494[(11)] = inst_29359);

(statearr_29494[(9)] = inst_29352__$1);

(statearr_29494[(10)] = inst_29353__$1);

return statearr_29494;
})();
var statearr_29495_29581 = state_29489__$1;
(statearr_29495_29581[(2)] = null);

(statearr_29495_29581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (20))){
var inst_29393 = (state_29489[(12)]);
var inst_29401 = figwheel.client.file_reloading.sort_files.call(null,inst_29393);
var state_29489__$1 = state_29489;
var statearr_29496_29582 = state_29489__$1;
(statearr_29496_29582[(2)] = inst_29401);

(statearr_29496_29582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (27))){
var state_29489__$1 = state_29489;
var statearr_29497_29583 = state_29489__$1;
(statearr_29497_29583[(2)] = null);

(statearr_29497_29583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (1))){
var inst_29342 = (state_29489[(13)]);
var inst_29339 = before_jsload.call(null,files);
var inst_29340 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29341 = (function (){return ((function (inst_29342,inst_29339,inst_29340,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29084_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29084_SHARP_);
});
;})(inst_29342,inst_29339,inst_29340,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29342__$1 = cljs.core.filter.call(null,inst_29341,files);
var inst_29343 = cljs.core.not_empty.call(null,inst_29342__$1);
var state_29489__$1 = (function (){var statearr_29498 = state_29489;
(statearr_29498[(14)] = inst_29340);

(statearr_29498[(15)] = inst_29339);

(statearr_29498[(13)] = inst_29342__$1);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29343)){
var statearr_29499_29584 = state_29489__$1;
(statearr_29499_29584[(1)] = (2));

} else {
var statearr_29500_29585 = state_29489__$1;
(statearr_29500_29585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (24))){
var state_29489__$1 = state_29489;
var statearr_29501_29586 = state_29489__$1;
(statearr_29501_29586[(2)] = null);

(statearr_29501_29586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (39))){
var inst_29443 = (state_29489[(16)]);
var state_29489__$1 = state_29489;
var statearr_29502_29587 = state_29489__$1;
(statearr_29502_29587[(2)] = inst_29443);

(statearr_29502_29587[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (46))){
var inst_29484 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29503_29588 = state_29489__$1;
(statearr_29503_29588[(2)] = inst_29484);

(statearr_29503_29588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (4))){
var inst_29387 = (state_29489[(2)]);
var inst_29388 = cljs.core.List.EMPTY;
var inst_29389 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29388);
var inst_29390 = (function (){return ((function (inst_29387,inst_29388,inst_29389,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29085_SHARP_){
var and__22227__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29085_SHARP_);
if(cljs.core.truth_(and__22227__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29085_SHARP_));
} else {
return and__22227__auto__;
}
});
;})(inst_29387,inst_29388,inst_29389,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29391 = cljs.core.filter.call(null,inst_29390,files);
var inst_29392 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29393 = cljs.core.concat.call(null,inst_29391,inst_29392);
var state_29489__$1 = (function (){var statearr_29504 = state_29489;
(statearr_29504[(12)] = inst_29393);

(statearr_29504[(17)] = inst_29387);

(statearr_29504[(18)] = inst_29389);

return statearr_29504;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29505_29589 = state_29489__$1;
(statearr_29505_29589[(1)] = (16));

} else {
var statearr_29506_29590 = state_29489__$1;
(statearr_29506_29590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (15))){
var inst_29377 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29507_29591 = state_29489__$1;
(statearr_29507_29591[(2)] = inst_29377);

(statearr_29507_29591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (21))){
var inst_29403 = (state_29489[(19)]);
var inst_29403__$1 = (state_29489[(2)]);
var inst_29404 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29403__$1);
var state_29489__$1 = (function (){var statearr_29508 = state_29489;
(statearr_29508[(19)] = inst_29403__$1);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(22),inst_29404);
} else {
if((state_val_29490 === (31))){
var inst_29487 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29489__$1,inst_29487);
} else {
if((state_val_29490 === (32))){
var inst_29443 = (state_29489[(16)]);
var inst_29448 = inst_29443.cljs$lang$protocol_mask$partition0$;
var inst_29449 = (inst_29448 & (64));
var inst_29450 = inst_29443.cljs$core$ISeq$;
var inst_29451 = (inst_29449) || (inst_29450);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29451)){
var statearr_29509_29592 = state_29489__$1;
(statearr_29509_29592[(1)] = (35));

} else {
var statearr_29510_29593 = state_29489__$1;
(statearr_29510_29593[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (40))){
var inst_29464 = (state_29489[(20)]);
var inst_29463 = (state_29489[(2)]);
var inst_29464__$1 = cljs.core.get.call(null,inst_29463,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29465 = cljs.core.get.call(null,inst_29463,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29466 = cljs.core.not_empty.call(null,inst_29464__$1);
var state_29489__$1 = (function (){var statearr_29511 = state_29489;
(statearr_29511[(21)] = inst_29465);

(statearr_29511[(20)] = inst_29464__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29466)){
var statearr_29512_29594 = state_29489__$1;
(statearr_29512_29594[(1)] = (41));

} else {
var statearr_29513_29595 = state_29489__$1;
(statearr_29513_29595[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (33))){
var state_29489__$1 = state_29489;
var statearr_29514_29596 = state_29489__$1;
(statearr_29514_29596[(2)] = false);

(statearr_29514_29596[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (13))){
var inst_29363 = (state_29489[(22)]);
var inst_29367 = cljs.core.chunk_first.call(null,inst_29363);
var inst_29368 = cljs.core.chunk_rest.call(null,inst_29363);
var inst_29369 = cljs.core.count.call(null,inst_29367);
var inst_29350 = inst_29368;
var inst_29351 = inst_29367;
var inst_29352 = inst_29369;
var inst_29353 = (0);
var state_29489__$1 = (function (){var statearr_29515 = state_29489;
(statearr_29515[(7)] = inst_29351);

(statearr_29515[(8)] = inst_29350);

(statearr_29515[(9)] = inst_29352);

(statearr_29515[(10)] = inst_29353);

return statearr_29515;
})();
var statearr_29516_29597 = state_29489__$1;
(statearr_29516_29597[(2)] = null);

(statearr_29516_29597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (22))){
var inst_29407 = (state_29489[(23)]);
var inst_29411 = (state_29489[(24)]);
var inst_29406 = (state_29489[(25)]);
var inst_29403 = (state_29489[(19)]);
var inst_29406__$1 = (state_29489[(2)]);
var inst_29407__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29406__$1);
var inst_29408 = (function (){var all_files = inst_29403;
var res_SINGLEQUOTE_ = inst_29406__$1;
var res = inst_29407__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29407,inst_29411,inst_29406,inst_29403,inst_29406__$1,inst_29407__$1,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29086_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29086_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29407,inst_29411,inst_29406,inst_29403,inst_29406__$1,inst_29407__$1,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29409 = cljs.core.filter.call(null,inst_29408,inst_29406__$1);
var inst_29410 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29411__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29410);
var inst_29412 = cljs.core.not_empty.call(null,inst_29411__$1);
var state_29489__$1 = (function (){var statearr_29517 = state_29489;
(statearr_29517[(23)] = inst_29407__$1);

(statearr_29517[(24)] = inst_29411__$1);

(statearr_29517[(25)] = inst_29406__$1);

(statearr_29517[(26)] = inst_29409);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29412)){
var statearr_29518_29598 = state_29489__$1;
(statearr_29518_29598[(1)] = (23));

} else {
var statearr_29519_29599 = state_29489__$1;
(statearr_29519_29599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (36))){
var state_29489__$1 = state_29489;
var statearr_29520_29600 = state_29489__$1;
(statearr_29520_29600[(2)] = false);

(statearr_29520_29600[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (41))){
var inst_29464 = (state_29489[(20)]);
var inst_29468 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29469 = cljs.core.map.call(null,inst_29468,inst_29464);
var inst_29470 = cljs.core.pr_str.call(null,inst_29469);
var inst_29471 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29470)].join('');
var inst_29472 = figwheel.client.utils.log.call(null,inst_29471);
var state_29489__$1 = state_29489;
var statearr_29521_29601 = state_29489__$1;
(statearr_29521_29601[(2)] = inst_29472);

(statearr_29521_29601[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (43))){
var inst_29465 = (state_29489[(21)]);
var inst_29475 = (state_29489[(2)]);
var inst_29476 = cljs.core.not_empty.call(null,inst_29465);
var state_29489__$1 = (function (){var statearr_29522 = state_29489;
(statearr_29522[(27)] = inst_29475);

return statearr_29522;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29523_29602 = state_29489__$1;
(statearr_29523_29602[(1)] = (44));

} else {
var statearr_29524_29603 = state_29489__$1;
(statearr_29524_29603[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (29))){
var inst_29407 = (state_29489[(23)]);
var inst_29411 = (state_29489[(24)]);
var inst_29406 = (state_29489[(25)]);
var inst_29403 = (state_29489[(19)]);
var inst_29443 = (state_29489[(16)]);
var inst_29409 = (state_29489[(26)]);
var inst_29439 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29442 = (function (){var all_files = inst_29403;
var res_SINGLEQUOTE_ = inst_29406;
var res = inst_29407;
var files_not_loaded = inst_29409;
var dependencies_that_loaded = inst_29411;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29443,inst_29409,inst_29439,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29441){
var map__29525 = p__29441;
var map__29525__$1 = ((((!((map__29525 == null)))?((((map__29525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29525):map__29525);
var namespace = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29443,inst_29409,inst_29439,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29443__$1 = cljs.core.group_by.call(null,inst_29442,inst_29409);
var inst_29445 = (inst_29443__$1 == null);
var inst_29446 = cljs.core.not.call(null,inst_29445);
var state_29489__$1 = (function (){var statearr_29527 = state_29489;
(statearr_29527[(28)] = inst_29439);

(statearr_29527[(16)] = inst_29443__$1);

return statearr_29527;
})();
if(inst_29446){
var statearr_29528_29604 = state_29489__$1;
(statearr_29528_29604[(1)] = (32));

} else {
var statearr_29529_29605 = state_29489__$1;
(statearr_29529_29605[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (44))){
var inst_29465 = (state_29489[(21)]);
var inst_29478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29465);
var inst_29479 = cljs.core.pr_str.call(null,inst_29478);
var inst_29480 = [cljs.core.str("not required: "),cljs.core.str(inst_29479)].join('');
var inst_29481 = figwheel.client.utils.log.call(null,inst_29480);
var state_29489__$1 = state_29489;
var statearr_29530_29606 = state_29489__$1;
(statearr_29530_29606[(2)] = inst_29481);

(statearr_29530_29606[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (6))){
var inst_29384 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29531_29607 = state_29489__$1;
(statearr_29531_29607[(2)] = inst_29384);

(statearr_29531_29607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (28))){
var inst_29409 = (state_29489[(26)]);
var inst_29436 = (state_29489[(2)]);
var inst_29437 = cljs.core.not_empty.call(null,inst_29409);
var state_29489__$1 = (function (){var statearr_29532 = state_29489;
(statearr_29532[(29)] = inst_29436);

return statearr_29532;
})();
if(cljs.core.truth_(inst_29437)){
var statearr_29533_29608 = state_29489__$1;
(statearr_29533_29608[(1)] = (29));

} else {
var statearr_29534_29609 = state_29489__$1;
(statearr_29534_29609[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (25))){
var inst_29407 = (state_29489[(23)]);
var inst_29423 = (state_29489[(2)]);
var inst_29424 = cljs.core.not_empty.call(null,inst_29407);
var state_29489__$1 = (function (){var statearr_29535 = state_29489;
(statearr_29535[(30)] = inst_29423);

return statearr_29535;
})();
if(cljs.core.truth_(inst_29424)){
var statearr_29536_29610 = state_29489__$1;
(statearr_29536_29610[(1)] = (26));

} else {
var statearr_29537_29611 = state_29489__$1;
(statearr_29537_29611[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (34))){
var inst_29458 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29458)){
var statearr_29538_29612 = state_29489__$1;
(statearr_29538_29612[(1)] = (38));

} else {
var statearr_29539_29613 = state_29489__$1;
(statearr_29539_29613[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (17))){
var state_29489__$1 = state_29489;
var statearr_29540_29614 = state_29489__$1;
(statearr_29540_29614[(2)] = recompile_dependents);

(statearr_29540_29614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (3))){
var state_29489__$1 = state_29489;
var statearr_29541_29615 = state_29489__$1;
(statearr_29541_29615[(2)] = null);

(statearr_29541_29615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (12))){
var inst_29380 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29542_29616 = state_29489__$1;
(statearr_29542_29616[(2)] = inst_29380);

(statearr_29542_29616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (2))){
var inst_29342 = (state_29489[(13)]);
var inst_29349 = cljs.core.seq.call(null,inst_29342);
var inst_29350 = inst_29349;
var inst_29351 = null;
var inst_29352 = (0);
var inst_29353 = (0);
var state_29489__$1 = (function (){var statearr_29543 = state_29489;
(statearr_29543[(7)] = inst_29351);

(statearr_29543[(8)] = inst_29350);

(statearr_29543[(9)] = inst_29352);

(statearr_29543[(10)] = inst_29353);

return statearr_29543;
})();
var statearr_29544_29617 = state_29489__$1;
(statearr_29544_29617[(2)] = null);

(statearr_29544_29617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (23))){
var inst_29407 = (state_29489[(23)]);
var inst_29411 = (state_29489[(24)]);
var inst_29406 = (state_29489[(25)]);
var inst_29403 = (state_29489[(19)]);
var inst_29409 = (state_29489[(26)]);
var inst_29414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29416 = (function (){var all_files = inst_29403;
var res_SINGLEQUOTE_ = inst_29406;
var res = inst_29407;
var files_not_loaded = inst_29409;
var dependencies_that_loaded = inst_29411;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29414,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29415){
var map__29545 = p__29415;
var map__29545__$1 = ((((!((map__29545 == null)))?((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29545):map__29545);
var request_url = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29414,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29417 = cljs.core.reverse.call(null,inst_29411);
var inst_29418 = cljs.core.map.call(null,inst_29416,inst_29417);
var inst_29419 = cljs.core.pr_str.call(null,inst_29418);
var inst_29420 = figwheel.client.utils.log.call(null,inst_29419);
var state_29489__$1 = (function (){var statearr_29547 = state_29489;
(statearr_29547[(31)] = inst_29414);

return statearr_29547;
})();
var statearr_29548_29618 = state_29489__$1;
(statearr_29548_29618[(2)] = inst_29420);

(statearr_29548_29618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (35))){
var state_29489__$1 = state_29489;
var statearr_29549_29619 = state_29489__$1;
(statearr_29549_29619[(2)] = true);

(statearr_29549_29619[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (19))){
var inst_29393 = (state_29489[(12)]);
var inst_29399 = figwheel.client.file_reloading.expand_files.call(null,inst_29393);
var state_29489__$1 = state_29489;
var statearr_29550_29620 = state_29489__$1;
(statearr_29550_29620[(2)] = inst_29399);

(statearr_29550_29620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (11))){
var state_29489__$1 = state_29489;
var statearr_29551_29621 = state_29489__$1;
(statearr_29551_29621[(2)] = null);

(statearr_29551_29621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (9))){
var inst_29382 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29552_29622 = state_29489__$1;
(statearr_29552_29622[(2)] = inst_29382);

(statearr_29552_29622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (5))){
var inst_29352 = (state_29489[(9)]);
var inst_29353 = (state_29489[(10)]);
var inst_29355 = (inst_29353 < inst_29352);
var inst_29356 = inst_29355;
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29356)){
var statearr_29553_29623 = state_29489__$1;
(statearr_29553_29623[(1)] = (7));

} else {
var statearr_29554_29624 = state_29489__$1;
(statearr_29554_29624[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (14))){
var inst_29363 = (state_29489[(22)]);
var inst_29372 = cljs.core.first.call(null,inst_29363);
var inst_29373 = figwheel.client.file_reloading.eval_body.call(null,inst_29372,opts);
var inst_29374 = cljs.core.next.call(null,inst_29363);
var inst_29350 = inst_29374;
var inst_29351 = null;
var inst_29352 = (0);
var inst_29353 = (0);
var state_29489__$1 = (function (){var statearr_29555 = state_29489;
(statearr_29555[(7)] = inst_29351);

(statearr_29555[(8)] = inst_29350);

(statearr_29555[(9)] = inst_29352);

(statearr_29555[(10)] = inst_29353);

(statearr_29555[(32)] = inst_29373);

return statearr_29555;
})();
var statearr_29556_29625 = state_29489__$1;
(statearr_29556_29625[(2)] = null);

(statearr_29556_29625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (45))){
var state_29489__$1 = state_29489;
var statearr_29557_29626 = state_29489__$1;
(statearr_29557_29626[(2)] = null);

(statearr_29557_29626[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (26))){
var inst_29407 = (state_29489[(23)]);
var inst_29411 = (state_29489[(24)]);
var inst_29406 = (state_29489[(25)]);
var inst_29403 = (state_29489[(19)]);
var inst_29409 = (state_29489[(26)]);
var inst_29426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29428 = (function (){var all_files = inst_29403;
var res_SINGLEQUOTE_ = inst_29406;
var res = inst_29407;
var files_not_loaded = inst_29409;
var dependencies_that_loaded = inst_29411;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29426,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29427){
var map__29558 = p__29427;
var map__29558__$1 = ((((!((map__29558 == null)))?((((map__29558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29558):map__29558);
var namespace = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29426,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29429 = cljs.core.map.call(null,inst_29428,inst_29407);
var inst_29430 = cljs.core.pr_str.call(null,inst_29429);
var inst_29431 = figwheel.client.utils.log.call(null,inst_29430);
var inst_29432 = (function (){var all_files = inst_29403;
var res_SINGLEQUOTE_ = inst_29406;
var res = inst_29407;
var files_not_loaded = inst_29409;
var dependencies_that_loaded = inst_29411;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29426,inst_29428,inst_29429,inst_29430,inst_29431,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29407,inst_29411,inst_29406,inst_29403,inst_29409,inst_29426,inst_29428,inst_29429,inst_29430,inst_29431,state_val_29490,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29433 = setTimeout(inst_29432,(10));
var state_29489__$1 = (function (){var statearr_29560 = state_29489;
(statearr_29560[(33)] = inst_29426);

(statearr_29560[(34)] = inst_29431);

return statearr_29560;
})();
var statearr_29561_29627 = state_29489__$1;
(statearr_29561_29627[(2)] = inst_29433);

(statearr_29561_29627[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (16))){
var state_29489__$1 = state_29489;
var statearr_29562_29628 = state_29489__$1;
(statearr_29562_29628[(2)] = reload_dependents);

(statearr_29562_29628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (38))){
var inst_29443 = (state_29489[(16)]);
var inst_29460 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29443);
var state_29489__$1 = state_29489;
var statearr_29563_29629 = state_29489__$1;
(statearr_29563_29629[(2)] = inst_29460);

(statearr_29563_29629[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (30))){
var state_29489__$1 = state_29489;
var statearr_29564_29630 = state_29489__$1;
(statearr_29564_29630[(2)] = null);

(statearr_29564_29630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (10))){
var inst_29363 = (state_29489[(22)]);
var inst_29365 = cljs.core.chunked_seq_QMARK_.call(null,inst_29363);
var state_29489__$1 = state_29489;
if(inst_29365){
var statearr_29565_29631 = state_29489__$1;
(statearr_29565_29631[(1)] = (13));

} else {
var statearr_29566_29632 = state_29489__$1;
(statearr_29566_29632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (18))){
var inst_29397 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29397)){
var statearr_29567_29633 = state_29489__$1;
(statearr_29567_29633[(1)] = (19));

} else {
var statearr_29568_29634 = state_29489__$1;
(statearr_29568_29634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (42))){
var state_29489__$1 = state_29489;
var statearr_29569_29635 = state_29489__$1;
(statearr_29569_29635[(2)] = null);

(statearr_29569_29635[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (37))){
var inst_29455 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29570_29636 = state_29489__$1;
(statearr_29570_29636[(2)] = inst_29455);

(statearr_29570_29636[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (8))){
var inst_29350 = (state_29489[(8)]);
var inst_29363 = (state_29489[(22)]);
var inst_29363__$1 = cljs.core.seq.call(null,inst_29350);
var state_29489__$1 = (function (){var statearr_29571 = state_29489;
(statearr_29571[(22)] = inst_29363__$1);

return statearr_29571;
})();
if(inst_29363__$1){
var statearr_29572_29637 = state_29489__$1;
(statearr_29572_29637[(1)] = (10));

} else {
var statearr_29573_29638 = state_29489__$1;
(statearr_29573_29638[(1)] = (11));

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
});})(c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25465__auto__,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____0 = (function (){
var statearr_29577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29577[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__);

(statearr_29577[(1)] = (1));

return statearr_29577;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____1 = (function (state_29489){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_29489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e29578){if((e29578 instanceof Object)){
var ex__25469__auto__ = e29578;
var statearr_29579_29639 = state_29489;
(statearr_29579_29639[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29640 = state_29489;
state_29489 = G__29640;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25580__auto__ = (function (){var statearr_29580 = f__25579__auto__.call(null);
(statearr_29580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_29580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__,map__29335,map__29335__$1,opts,before_jsload,on_jsload,reload_dependents,map__29336,map__29336__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25578__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29643,link){
var map__29646 = p__29643;
var map__29646__$1 = ((((!((map__29646 == null)))?((((map__29646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29646):map__29646);
var file = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29646,map__29646__$1,file){
return (function (p1__29641_SHARP_,p2__29642_SHARP_){
if(cljs.core._EQ_.call(null,p1__29641_SHARP_,p2__29642_SHARP_)){
return p1__29641_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29646,map__29646__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29652){
var map__29653 = p__29652;
var map__29653__$1 = ((((!((map__29653 == null)))?((((map__29653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29653):map__29653);
var match_length = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29648_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29648_SHARP_);
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
var args29655 = [];
var len__23309__auto___29658 = arguments.length;
var i__23310__auto___29659 = (0);
while(true){
if((i__23310__auto___29659 < len__23309__auto___29658)){
args29655.push((arguments[i__23310__auto___29659]));

var G__29660 = (i__23310__auto___29659 + (1));
i__23310__auto___29659 = G__29660;
continue;
} else {
}
break;
}

var G__29657 = args29655.length;
switch (G__29657) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29655.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29662_SHARP_,p2__29663_SHARP_){
return cljs.core.assoc.call(null,p1__29662_SHARP_,cljs.core.get.call(null,p2__29663_SHARP_,key),p2__29663_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29664){
var map__29667 = p__29664;
var map__29667__$1 = ((((!((map__29667 == null)))?((((map__29667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29667):map__29667);
var f_data = map__29667__$1;
var file = cljs.core.get.call(null,map__29667__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29669,files_msg){
var map__29676 = p__29669;
var map__29676__$1 = ((((!((map__29676 == null)))?((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var opts = map__29676__$1;
var on_cssload = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29678_29682 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29679_29683 = null;
var count__29680_29684 = (0);
var i__29681_29685 = (0);
while(true){
if((i__29681_29685 < count__29680_29684)){
var f_29686 = cljs.core._nth.call(null,chunk__29679_29683,i__29681_29685);
figwheel.client.file_reloading.reload_css_file.call(null,f_29686);

var G__29687 = seq__29678_29682;
var G__29688 = chunk__29679_29683;
var G__29689 = count__29680_29684;
var G__29690 = (i__29681_29685 + (1));
seq__29678_29682 = G__29687;
chunk__29679_29683 = G__29688;
count__29680_29684 = G__29689;
i__29681_29685 = G__29690;
continue;
} else {
var temp__4657__auto___29691 = cljs.core.seq.call(null,seq__29678_29682);
if(temp__4657__auto___29691){
var seq__29678_29692__$1 = temp__4657__auto___29691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29678_29692__$1)){
var c__23050__auto___29693 = cljs.core.chunk_first.call(null,seq__29678_29692__$1);
var G__29694 = cljs.core.chunk_rest.call(null,seq__29678_29692__$1);
var G__29695 = c__23050__auto___29693;
var G__29696 = cljs.core.count.call(null,c__23050__auto___29693);
var G__29697 = (0);
seq__29678_29682 = G__29694;
chunk__29679_29683 = G__29695;
count__29680_29684 = G__29696;
i__29681_29685 = G__29697;
continue;
} else {
var f_29698 = cljs.core.first.call(null,seq__29678_29692__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29698);

var G__29699 = cljs.core.next.call(null,seq__29678_29692__$1);
var G__29700 = null;
var G__29701 = (0);
var G__29702 = (0);
seq__29678_29682 = G__29699;
chunk__29679_29683 = G__29700;
count__29680_29684 = G__29701;
i__29681_29685 = G__29702;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29676,map__29676__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29676,map__29676__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map