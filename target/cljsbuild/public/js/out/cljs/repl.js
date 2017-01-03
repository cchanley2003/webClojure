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
var seq__29719_29733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29720_29734 = null;
var count__29721_29735 = (0);
var i__29722_29736 = (0);
while(true){
if((i__29722_29736 < count__29721_29735)){
var f_29737 = cljs.core._nth.call(null,chunk__29720_29734,i__29722_29736);
cljs.core.println.call(null,"  ",f_29737);

var G__29738 = seq__29719_29733;
var G__29739 = chunk__29720_29734;
var G__29740 = count__29721_29735;
var G__29741 = (i__29722_29736 + (1));
seq__29719_29733 = G__29738;
chunk__29720_29734 = G__29739;
count__29721_29735 = G__29740;
i__29722_29736 = G__29741;
continue;
} else {
var temp__4657__auto___29742 = cljs.core.seq.call(null,seq__29719_29733);
if(temp__4657__auto___29742){
var seq__29719_29743__$1 = temp__4657__auto___29742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29719_29743__$1)){
var c__23050__auto___29744 = cljs.core.chunk_first.call(null,seq__29719_29743__$1);
var G__29745 = cljs.core.chunk_rest.call(null,seq__29719_29743__$1);
var G__29746 = c__23050__auto___29744;
var G__29747 = cljs.core.count.call(null,c__23050__auto___29744);
var G__29748 = (0);
seq__29719_29733 = G__29745;
chunk__29720_29734 = G__29746;
count__29721_29735 = G__29747;
i__29722_29736 = G__29748;
continue;
} else {
var f_29749 = cljs.core.first.call(null,seq__29719_29743__$1);
cljs.core.println.call(null,"  ",f_29749);

var G__29750 = cljs.core.next.call(null,seq__29719_29743__$1);
var G__29751 = null;
var G__29752 = (0);
var G__29753 = (0);
seq__29719_29733 = G__29750;
chunk__29720_29734 = G__29751;
count__29721_29735 = G__29752;
i__29722_29736 = G__29753;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29754 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22239__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29754);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29754)))?cljs.core.second.call(null,arglists_29754):arglists_29754));
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
var seq__29723 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29724 = null;
var count__29725 = (0);
var i__29726 = (0);
while(true){
if((i__29726 < count__29725)){
var vec__29727 = cljs.core._nth.call(null,chunk__29724,i__29726);
var name = cljs.core.nth.call(null,vec__29727,(0),null);
var map__29728 = cljs.core.nth.call(null,vec__29727,(1),null);
var map__29728__$1 = ((((!((map__29728 == null)))?((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var doc = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29755 = seq__29723;
var G__29756 = chunk__29724;
var G__29757 = count__29725;
var G__29758 = (i__29726 + (1));
seq__29723 = G__29755;
chunk__29724 = G__29756;
count__29725 = G__29757;
i__29726 = G__29758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29723);
if(temp__4657__auto__){
var seq__29723__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29723__$1)){
var c__23050__auto__ = cljs.core.chunk_first.call(null,seq__29723__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29723__$1);
var G__29760 = c__23050__auto__;
var G__29761 = cljs.core.count.call(null,c__23050__auto__);
var G__29762 = (0);
seq__29723 = G__29759;
chunk__29724 = G__29760;
count__29725 = G__29761;
i__29726 = G__29762;
continue;
} else {
var vec__29730 = cljs.core.first.call(null,seq__29723__$1);
var name = cljs.core.nth.call(null,vec__29730,(0),null);
var map__29731 = cljs.core.nth.call(null,vec__29730,(1),null);
var map__29731__$1 = ((((!((map__29731 == null)))?((((map__29731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731):map__29731);
var doc = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29763 = cljs.core.next.call(null,seq__29723__$1);
var G__29764 = null;
var G__29765 = (0);
var G__29766 = (0);
seq__29723 = G__29763;
chunk__29724 = G__29764;
count__29725 = G__29765;
i__29726 = G__29766;
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