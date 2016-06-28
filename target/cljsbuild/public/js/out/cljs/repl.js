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
var seq__28466_28480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28467_28481 = null;
var count__28468_28482 = (0);
var i__28469_28483 = (0);
while(true){
if((i__28469_28483 < count__28468_28482)){
var f_28484 = cljs.core._nth.call(null,chunk__28467_28481,i__28469_28483);
cljs.core.println.call(null,"  ",f_28484);

var G__28485 = seq__28466_28480;
var G__28486 = chunk__28467_28481;
var G__28487 = count__28468_28482;
var G__28488 = (i__28469_28483 + (1));
seq__28466_28480 = G__28485;
chunk__28467_28481 = G__28486;
count__28468_28482 = G__28487;
i__28469_28483 = G__28488;
continue;
} else {
var temp__4657__auto___28489 = cljs.core.seq.call(null,seq__28466_28480);
if(temp__4657__auto___28489){
var seq__28466_28490__$1 = temp__4657__auto___28489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28466_28490__$1)){
var c__22462__auto___28491 = cljs.core.chunk_first.call(null,seq__28466_28490__$1);
var G__28492 = cljs.core.chunk_rest.call(null,seq__28466_28490__$1);
var G__28493 = c__22462__auto___28491;
var G__28494 = cljs.core.count.call(null,c__22462__auto___28491);
var G__28495 = (0);
seq__28466_28480 = G__28492;
chunk__28467_28481 = G__28493;
count__28468_28482 = G__28494;
i__28469_28483 = G__28495;
continue;
} else {
var f_28496 = cljs.core.first.call(null,seq__28466_28490__$1);
cljs.core.println.call(null,"  ",f_28496);

var G__28497 = cljs.core.next.call(null,seq__28466_28490__$1);
var G__28498 = null;
var G__28499 = (0);
var G__28500 = (0);
seq__28466_28480 = G__28497;
chunk__28467_28481 = G__28498;
count__28468_28482 = G__28499;
i__28469_28483 = G__28500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21651__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28501);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28501)))?cljs.core.second.call(null,arglists_28501):arglists_28501));
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
var seq__28470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28471 = null;
var count__28472 = (0);
var i__28473 = (0);
while(true){
if((i__28473 < count__28472)){
var vec__28474 = cljs.core._nth.call(null,chunk__28471,i__28473);
var name = cljs.core.nth.call(null,vec__28474,(0),null);
var map__28475 = cljs.core.nth.call(null,vec__28474,(1),null);
var map__28475__$1 = ((((!((map__28475 == null)))?((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var doc = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28502 = seq__28470;
var G__28503 = chunk__28471;
var G__28504 = count__28472;
var G__28505 = (i__28473 + (1));
seq__28470 = G__28502;
chunk__28471 = G__28503;
count__28472 = G__28504;
i__28473 = G__28505;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28470);
if(temp__4657__auto__){
var seq__28470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28470__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__28470__$1);
var G__28506 = cljs.core.chunk_rest.call(null,seq__28470__$1);
var G__28507 = c__22462__auto__;
var G__28508 = cljs.core.count.call(null,c__22462__auto__);
var G__28509 = (0);
seq__28470 = G__28506;
chunk__28471 = G__28507;
count__28472 = G__28508;
i__28473 = G__28509;
continue;
} else {
var vec__28477 = cljs.core.first.call(null,seq__28470__$1);
var name = cljs.core.nth.call(null,vec__28477,(0),null);
var map__28478 = cljs.core.nth.call(null,vec__28477,(1),null);
var map__28478__$1 = ((((!((map__28478 == null)))?((((map__28478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28478):map__28478);
var doc = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28510 = cljs.core.next.call(null,seq__28470__$1);
var G__28511 = null;
var G__28512 = (0);
var G__28513 = (0);
seq__28470 = G__28510;
chunk__28471 = G__28511;
count__28472 = G__28512;
i__28473 = G__28513;
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