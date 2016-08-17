// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29049_29063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29050_29064 = null;
var count__29051_29065 = (0);
var i__29052_29066 = (0);
while(true){
if((i__29052_29066 < count__29051_29065)){
var f_29067 = cljs.core._nth.call(null,chunk__29050_29064,i__29052_29066);
cljs.core.println.call(null,"  ",f_29067);

var G__29068 = seq__29049_29063;
var G__29069 = chunk__29050_29064;
var G__29070 = count__29051_29065;
var G__29071 = (i__29052_29066 + (1));
seq__29049_29063 = G__29068;
chunk__29050_29064 = G__29069;
count__29051_29065 = G__29070;
i__29052_29066 = G__29071;
continue;
} else {
var temp__4657__auto___29072 = cljs.core.seq.call(null,seq__29049_29063);
if(temp__4657__auto___29072){
var seq__29049_29073__$1 = temp__4657__auto___29072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29049_29073__$1)){
var c__22599__auto___29074 = cljs.core.chunk_first.call(null,seq__29049_29073__$1);
var G__29075 = cljs.core.chunk_rest.call(null,seq__29049_29073__$1);
var G__29076 = c__22599__auto___29074;
var G__29077 = cljs.core.count.call(null,c__22599__auto___29074);
var G__29078 = (0);
seq__29049_29063 = G__29075;
chunk__29050_29064 = G__29076;
count__29051_29065 = G__29077;
i__29052_29066 = G__29078;
continue;
} else {
var f_29079 = cljs.core.first.call(null,seq__29049_29073__$1);
cljs.core.println.call(null,"  ",f_29079);

var G__29080 = cljs.core.next.call(null,seq__29049_29073__$1);
var G__29081 = null;
var G__29082 = (0);
var G__29083 = (0);
seq__29049_29063 = G__29080;
chunk__29050_29064 = G__29081;
count__29051_29065 = G__29082;
i__29052_29066 = G__29083;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29084 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21788__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29084);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29084)))?cljs.core.second.call(null,arglists_29084):arglists_29084));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29054 = null;
var count__29055 = (0);
var i__29056 = (0);
while(true){
if((i__29056 < count__29055)){
var vec__29057 = cljs.core._nth.call(null,chunk__29054,i__29056);
var name = cljs.core.nth.call(null,vec__29057,(0),null);
var map__29058 = cljs.core.nth.call(null,vec__29057,(1),null);
var map__29058__$1 = ((((!((map__29058 == null)))?((((map__29058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29058):map__29058);
var doc = cljs.core.get.call(null,map__29058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29058__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29085 = seq__29053;
var G__29086 = chunk__29054;
var G__29087 = count__29055;
var G__29088 = (i__29056 + (1));
seq__29053 = G__29085;
chunk__29054 = G__29086;
count__29055 = G__29087;
i__29056 = G__29088;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29053);
if(temp__4657__auto__){
var seq__29053__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29053__$1)){
var c__22599__auto__ = cljs.core.chunk_first.call(null,seq__29053__$1);
var G__29089 = cljs.core.chunk_rest.call(null,seq__29053__$1);
var G__29090 = c__22599__auto__;
var G__29091 = cljs.core.count.call(null,c__22599__auto__);
var G__29092 = (0);
seq__29053 = G__29089;
chunk__29054 = G__29090;
count__29055 = G__29091;
i__29056 = G__29092;
continue;
} else {
var vec__29060 = cljs.core.first.call(null,seq__29053__$1);
var name = cljs.core.nth.call(null,vec__29060,(0),null);
var map__29061 = cljs.core.nth.call(null,vec__29060,(1),null);
var map__29061__$1 = ((((!((map__29061 == null)))?((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);
var doc = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29093 = cljs.core.next.call(null,seq__29053__$1);
var G__29094 = null;
var G__29095 = (0);
var G__29096 = (0);
seq__29053 = G__29093;
chunk__29054 = G__29094;
count__29055 = G__29095;
i__29056 = G__29096;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map