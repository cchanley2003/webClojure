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
var seq__28463_28477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28464_28478 = null;
var count__28465_28479 = (0);
var i__28466_28480 = (0);
while(true){
if((i__28466_28480 < count__28465_28479)){
var f_28481 = cljs.core._nth.call(null,chunk__28464_28478,i__28466_28480);
cljs.core.println.call(null,"  ",f_28481);

var G__28482 = seq__28463_28477;
var G__28483 = chunk__28464_28478;
var G__28484 = count__28465_28479;
var G__28485 = (i__28466_28480 + (1));
seq__28463_28477 = G__28482;
chunk__28464_28478 = G__28483;
count__28465_28479 = G__28484;
i__28466_28480 = G__28485;
continue;
} else {
var temp__4657__auto___28486 = cljs.core.seq.call(null,seq__28463_28477);
if(temp__4657__auto___28486){
var seq__28463_28487__$1 = temp__4657__auto___28486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28463_28487__$1)){
var c__22462__auto___28488 = cljs.core.chunk_first.call(null,seq__28463_28487__$1);
var G__28489 = cljs.core.chunk_rest.call(null,seq__28463_28487__$1);
var G__28490 = c__22462__auto___28488;
var G__28491 = cljs.core.count.call(null,c__22462__auto___28488);
var G__28492 = (0);
seq__28463_28477 = G__28489;
chunk__28464_28478 = G__28490;
count__28465_28479 = G__28491;
i__28466_28480 = G__28492;
continue;
} else {
var f_28493 = cljs.core.first.call(null,seq__28463_28487__$1);
cljs.core.println.call(null,"  ",f_28493);

var G__28494 = cljs.core.next.call(null,seq__28463_28487__$1);
var G__28495 = null;
var G__28496 = (0);
var G__28497 = (0);
seq__28463_28477 = G__28494;
chunk__28464_28478 = G__28495;
count__28465_28479 = G__28496;
i__28466_28480 = G__28497;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28498 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21651__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28498);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28498)))?cljs.core.second.call(null,arglists_28498):arglists_28498));
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
var seq__28467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28468 = null;
var count__28469 = (0);
var i__28470 = (0);
while(true){
if((i__28470 < count__28469)){
var vec__28471 = cljs.core._nth.call(null,chunk__28468,i__28470);
var name = cljs.core.nth.call(null,vec__28471,(0),null);
var map__28472 = cljs.core.nth.call(null,vec__28471,(1),null);
var map__28472__$1 = ((((!((map__28472 == null)))?((((map__28472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);
var doc = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28499 = seq__28467;
var G__28500 = chunk__28468;
var G__28501 = count__28469;
var G__28502 = (i__28470 + (1));
seq__28467 = G__28499;
chunk__28468 = G__28500;
count__28469 = G__28501;
i__28470 = G__28502;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28467);
if(temp__4657__auto__){
var seq__28467__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28467__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__28467__$1);
var G__28503 = cljs.core.chunk_rest.call(null,seq__28467__$1);
var G__28504 = c__22462__auto__;
var G__28505 = cljs.core.count.call(null,c__22462__auto__);
var G__28506 = (0);
seq__28467 = G__28503;
chunk__28468 = G__28504;
count__28469 = G__28505;
i__28470 = G__28506;
continue;
} else {
var vec__28474 = cljs.core.first.call(null,seq__28467__$1);
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

var G__28507 = cljs.core.next.call(null,seq__28467__$1);
var G__28508 = null;
var G__28509 = (0);
var G__28510 = (0);
seq__28467 = G__28507;
chunk__28468 = G__28508;
count__28469 = G__28509;
i__28470 = G__28510;
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