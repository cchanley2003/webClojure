// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23355 = arguments.length;
var i__22722__auto___23356 = (0);
while(true){
if((i__22722__auto___23356 < len__22721__auto___23355)){
args__22728__auto__.push((arguments[i__22722__auto___23356]));

var G__23357 = (i__22722__auto___23356 + (1));
i__22722__auto___23356 = G__23357;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23353){
var vec__23354 = p__23353;
var default$ = cljs.core.nth.call(null,vec__23354,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__21651__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq23351){
var G__23352 = cljs.core.first.call(null,seq23351);
var seq23351__$1 = cljs.core.next.call(null,seq23351);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__23352,seq23351__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23362 = arguments.length;
var i__22722__auto___23363 = (0);
while(true){
if((i__22722__auto___23363 < len__22721__auto___23362)){
args__22728__auto__.push((arguments[i__22722__auto___23363]));

var G__23364 = (i__22722__auto___23363 + (1));
i__22722__auto___23363 = G__23364;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23360){
var vec__23361 = p__23360;
var default$ = cljs.core.nth.call(null,vec__23361,(0),null);
var or__21651__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq23358){
var G__23359 = cljs.core.first.call(null,seq23358);
var seq23358__$1 = cljs.core.next.call(null,seq23358);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__23359,seq23358__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23367 = arguments.length;
var i__22722__auto___23368 = (0);
while(true){
if((i__22722__auto___23368 < len__22721__auto___23367)){
args__22728__auto__.push((arguments[i__22722__auto___23368]));

var G__23369 = (i__22722__auto___23368 + (1));
i__22722__auto___23368 = G__23369;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq23365){
var G__23366 = cljs.core.first.call(null,seq23365);
var seq23365__$1 = cljs.core.next.call(null,seq23365);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23366,seq23365__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23374 = arguments.length;
var i__22722__auto___23375 = (0);
while(true){
if((i__22722__auto___23375 < len__22721__auto___23374)){
args__22728__auto__.push((arguments[i__22722__auto___23375]));

var G__23376 = (i__22722__auto___23375 + (1));
i__22722__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23372){
var vec__23373 = p__23372;
var default$ = cljs.core.nth.call(null,vec__23373,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq23370){
var G__23371 = cljs.core.first.call(null,seq23370);
var seq23370__$1 = cljs.core.next.call(null,seq23370);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23371,seq23370__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23381 = arguments.length;
var i__22722__auto___23382 = (0);
while(true){
if((i__22722__auto___23382 < len__22721__auto___23381)){
args__22728__auto__.push((arguments[i__22722__auto___23382]));

var G__23383 = (i__22722__auto___23382 + (1));
i__22722__auto___23382 = G__23383;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23379){
var vec__23380 = p__23379;
var default$ = cljs.core.nth.call(null,vec__23380,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq23377){
var G__23378 = cljs.core.first.call(null,seq23377);
var seq23377__$1 = cljs.core.next.call(null,seq23377);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23378,seq23377__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23388 = arguments.length;
var i__22722__auto___23389 = (0);
while(true){
if((i__22722__auto___23389 < len__22721__auto___23388)){
args__22728__auto__.push((arguments[i__22722__auto___23389]));

var G__23390 = (i__22722__auto___23389 + (1));
i__22722__auto___23389 = G__23390;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((2) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22729__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23384_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__23384_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq23385){
var G__23386 = cljs.core.first.call(null,seq23385);
var seq23385__$1 = cljs.core.next.call(null,seq23385);
var G__23387 = cljs.core.first.call(null,seq23385__$1);
var seq23385__$2 = cljs.core.next.call(null,seq23385__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23386,G__23387,seq23385__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23395 = arguments.length;
var i__22722__auto___23396 = (0);
while(true){
if((i__22722__auto___23396 < len__22721__auto___23395)){
args__22728__auto__.push((arguments[i__22722__auto___23396]));

var G__23397 = (i__22722__auto___23396 + (1));
i__22722__auto___23396 = G__23397;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((2) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22729__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23391_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23391_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq23392){
var G__23393 = cljs.core.first.call(null,seq23392);
var seq23392__$1 = cljs.core.next.call(null,seq23392);
var G__23394 = cljs.core.first.call(null,seq23392__$1);
var seq23392__$2 = cljs.core.next.call(null,seq23392__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23393,G__23394,seq23392__$2);
});

//# sourceMappingURL=session.js.map