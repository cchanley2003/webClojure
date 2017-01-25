// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13115 = arguments.length;
var i__7278__auto___13116 = (0);
while(true){
if((i__7278__auto___13116 < len__7277__auto___13115)){
args__7284__auto__.push((arguments[i__7278__auto___13116]));

var G__13117 = (i__7278__auto___13116 + (1));
i__7278__auto___13116 = G__13117;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13113){
var vec__13114 = p__13113;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__6207__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13111){
var G__13112 = cljs.core.first(seq13111);
var seq13111__$1 = cljs.core.next(seq13111);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13112,seq13111__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13124 = arguments.length;
var i__7278__auto___13125 = (0);
while(true){
if((i__7278__auto___13125 < len__7277__auto___13124)){
args__7284__auto__.push((arguments[i__7278__auto___13125]));

var G__13126 = (i__7278__auto___13125 + (1));
i__7278__auto___13125 = G__13126;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13120){
var vec__13121 = p__13120;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(0),null);
var or__6207__auto__ = (function (){var G__13123 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13123) : cljs.core.deref.call(null,G__13123));
})();
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13118){
var G__13119 = cljs.core.first(seq13118);
var seq13118__$1 = cljs.core.next(seq13118);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13119,seq13118__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13129 = arguments.length;
var i__7278__auto___13130 = (0);
while(true){
if((i__7278__auto___13130 < len__7277__auto___13129)){
args__7284__auto__.push((arguments[i__7278__auto___13130]));

var G__13131 = (i__7278__auto___13130 + (1));
i__7278__auto___13130 = G__13131;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13127){
var G__13128 = cljs.core.first(seq13127);
var seq13127__$1 = cljs.core.next(seq13127);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13128,seq13127__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__13134 = reagent.session.state;
var G__13135 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13134,G__13135) : cljs.core.reset_BANG_.call(null,G__13134,G__13135));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13140 = arguments.length;
var i__7278__auto___13141 = (0);
while(true){
if((i__7278__auto___13141 < len__7277__auto___13140)){
args__7284__auto__.push((arguments[i__7278__auto___13141]));

var G__13142 = (i__7278__auto___13141 + (1));
i__7278__auto___13141 = G__13142;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13138){
var vec__13139 = p__13138;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13136){
var G__13137 = cljs.core.first(seq13136);
var seq13136__$1 = cljs.core.next(seq13136);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13137,seq13136__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13147 = arguments.length;
var i__7278__auto___13148 = (0);
while(true){
if((i__7278__auto___13148 < len__7277__auto___13147)){
args__7284__auto__.push((arguments[i__7278__auto___13148]));

var G__13149 = (i__7278__auto___13148 + (1));
i__7278__auto___13148 = G__13149;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13145){
var vec__13146 = p__13145;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13143){
var G__13144 = cljs.core.first(seq13143);
var seq13143__$1 = cljs.core.next(seq13143);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13144,seq13143__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13154 = arguments.length;
var i__7278__auto___13155 = (0);
while(true){
if((i__7278__auto___13155 < len__7277__auto___13154)){
args__7284__auto__.push((arguments[i__7278__auto___13155]));

var G__13156 = (i__7278__auto___13155 + (1));
i__7278__auto___13155 = G__13156;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13150_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__13150_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq13151){
var G__13152 = cljs.core.first(seq13151);
var seq13151__$1 = cljs.core.next(seq13151);
var G__13153 = cljs.core.first(seq13151__$1);
var seq13151__$2 = cljs.core.next(seq13151__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13152,G__13153,seq13151__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13161 = arguments.length;
var i__7278__auto___13162 = (0);
while(true){
if((i__7278__auto___13162 < len__7277__auto___13161)){
args__7284__auto__.push((arguments[i__7278__auto___13162]));

var G__13163 = (i__7278__auto___13162 + (1));
i__7278__auto___13162 = G__13163;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13157_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__13157_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13158){
var G__13159 = cljs.core.first(seq13158);
var seq13158__$1 = cljs.core.next(seq13158);
var G__13160 = cljs.core.first(seq13158__$1);
var seq13158__$2 = cljs.core.next(seq13158__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13159,G__13160,seq13158__$2);
});
