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
var len__7277__auto___16526 = arguments.length;
var i__7278__auto___16527 = (0);
while(true){
if((i__7278__auto___16527 < len__7277__auto___16526)){
args__7284__auto__.push((arguments[i__7278__auto___16527]));

var G__16528 = (i__7278__auto___16527 + (1));
i__7278__auto___16527 = G__16528;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__16524){
var vec__16525 = p__16524;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16525,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__6207__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq16522){
var G__16523 = cljs.core.first(seq16522);
var seq16522__$1 = cljs.core.next(seq16522);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__16523,seq16522__$1);
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
var len__7277__auto___16535 = arguments.length;
var i__7278__auto___16536 = (0);
while(true){
if((i__7278__auto___16536 < len__7277__auto___16535)){
args__7284__auto__.push((arguments[i__7278__auto___16536]));

var G__16537 = (i__7278__auto___16536 + (1));
i__7278__auto___16536 = G__16537;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__16531){
var vec__16532 = p__16531;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532,(0),null);
var or__6207__auto__ = (function (){var G__16534 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16534) : cljs.core.deref.call(null,G__16534));
})();
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq16529){
var G__16530 = cljs.core.first(seq16529);
var seq16529__$1 = cljs.core.next(seq16529);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__16530,seq16529__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___16540 = arguments.length;
var i__7278__auto___16541 = (0);
while(true){
if((i__7278__auto___16541 < len__7277__auto___16540)){
args__7284__auto__.push((arguments[i__7278__auto___16541]));

var G__16542 = (i__7278__auto___16541 + (1));
i__7278__auto___16541 = G__16542;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq16538){
var G__16539 = cljs.core.first(seq16538);
var seq16538__$1 = cljs.core.next(seq16538);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16539,seq16538__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__16545 = reagent.session.state;
var G__16546 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16545,G__16546) : cljs.core.reset_BANG_.call(null,G__16545,G__16546));
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
var len__7277__auto___16551 = arguments.length;
var i__7278__auto___16552 = (0);
while(true){
if((i__7278__auto___16552 < len__7277__auto___16551)){
args__7284__auto__.push((arguments[i__7278__auto___16552]));

var G__16553 = (i__7278__auto___16552 + (1));
i__7278__auto___16552 = G__16553;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__16549){
var vec__16550 = p__16549;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16550,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq16547){
var G__16548 = cljs.core.first(seq16547);
var seq16547__$1 = cljs.core.next(seq16547);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16548,seq16547__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___16558 = arguments.length;
var i__7278__auto___16559 = (0);
while(true){
if((i__7278__auto___16559 < len__7277__auto___16558)){
args__7284__auto__.push((arguments[i__7278__auto___16559]));

var G__16560 = (i__7278__auto___16559 + (1));
i__7278__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__16556){
var vec__16557 = p__16556;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq16554){
var G__16555 = cljs.core.first(seq16554);
var seq16554__$1 = cljs.core.next(seq16554);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16555,seq16554__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___16565 = arguments.length;
var i__7278__auto___16566 = (0);
while(true){
if((i__7278__auto___16566 < len__7277__auto___16565)){
args__7284__auto__.push((arguments[i__7278__auto___16566]));

var G__16567 = (i__7278__auto___16566 + (1));
i__7278__auto___16566 = G__16567;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__16561_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__16561_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq16562){
var G__16563 = cljs.core.first(seq16562);
var seq16562__$1 = cljs.core.next(seq16562);
var G__16564 = cljs.core.first(seq16562__$1);
var seq16562__$2 = cljs.core.next(seq16562__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16563,G__16564,seq16562__$2);
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
var len__7277__auto___16572 = arguments.length;
var i__7278__auto___16573 = (0);
while(true){
if((i__7278__auto___16573 < len__7277__auto___16572)){
args__7284__auto__.push((arguments[i__7278__auto___16573]));

var G__16574 = (i__7278__auto___16573 + (1));
i__7278__auto___16573 = G__16574;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__16568_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__16568_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq16569){
var G__16570 = cljs.core.first(seq16569);
var seq16569__$1 = cljs.core.next(seq16569);
var G__16571 = cljs.core.first(seq16569__$1);
var seq16569__$2 = cljs.core.next(seq16569__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16570,G__16571,seq16569__$2);
});
