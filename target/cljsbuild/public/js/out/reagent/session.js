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
var args__23316__auto__ = [];
var len__23309__auto___24540 = arguments.length;
var i__23310__auto___24541 = (0);
while(true){
if((i__23310__auto___24541 < len__23309__auto___24540)){
args__23316__auto__.push((arguments[i__23310__auto___24541]));

var G__24542 = (i__23310__auto___24541 + (1));
i__23310__auto___24541 = G__24542;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24538){
var vec__24539 = p__24538;
var default$ = cljs.core.nth.call(null,vec__24539,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__22239__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq24536){
var G__24537 = cljs.core.first.call(null,seq24536);
var seq24536__$1 = cljs.core.next.call(null,seq24536);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__24537,seq24536__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__23316__auto__ = [];
var len__23309__auto___24547 = arguments.length;
var i__23310__auto___24548 = (0);
while(true){
if((i__23310__auto___24548 < len__23309__auto___24547)){
args__23316__auto__.push((arguments[i__23310__auto___24548]));

var G__24549 = (i__23310__auto___24548 + (1));
i__23310__auto___24548 = G__24549;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24545){
var vec__24546 = p__24545;
var default$ = cljs.core.nth.call(null,vec__24546,(0),null);
var or__22239__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq24543){
var G__24544 = cljs.core.first.call(null,seq24543);
var seq24543__$1 = cljs.core.next.call(null,seq24543);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__24544,seq24543__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__23316__auto__ = [];
var len__23309__auto___24552 = arguments.length;
var i__23310__auto___24553 = (0);
while(true){
if((i__23310__auto___24553 < len__23309__auto___24552)){
args__23316__auto__.push((arguments[i__23310__auto___24553]));

var G__24554 = (i__23310__auto___24553 + (1));
i__23310__auto___24553 = G__24554;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq24550){
var G__24551 = cljs.core.first.call(null,seq24550);
var seq24550__$1 = cljs.core.next.call(null,seq24550);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24551,seq24550__$1);
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
var args__23316__auto__ = [];
var len__23309__auto___24559 = arguments.length;
var i__23310__auto___24560 = (0);
while(true){
if((i__23310__auto___24560 < len__23309__auto___24559)){
args__23316__auto__.push((arguments[i__23310__auto___24560]));

var G__24561 = (i__23310__auto___24560 + (1));
i__23310__auto___24560 = G__24561;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24557){
var vec__24558 = p__24557;
var default$ = cljs.core.nth.call(null,vec__24558,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq24555){
var G__24556 = cljs.core.first.call(null,seq24555);
var seq24555__$1 = cljs.core.next.call(null,seq24555);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24556,seq24555__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__23316__auto__ = [];
var len__23309__auto___24566 = arguments.length;
var i__23310__auto___24567 = (0);
while(true){
if((i__23310__auto___24567 < len__23309__auto___24566)){
args__23316__auto__.push((arguments[i__23310__auto___24567]));

var G__24568 = (i__23310__auto___24567 + (1));
i__23310__auto___24567 = G__24568;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24564){
var vec__24565 = p__24564;
var default$ = cljs.core.nth.call(null,vec__24565,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq24562){
var G__24563 = cljs.core.first.call(null,seq24562);
var seq24562__$1 = cljs.core.next.call(null,seq24562);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24563,seq24562__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__23316__auto__ = [];
var len__23309__auto___24573 = arguments.length;
var i__23310__auto___24574 = (0);
while(true){
if((i__23310__auto___24574 < len__23309__auto___24573)){
args__23316__auto__.push((arguments[i__23310__auto___24574]));

var G__24575 = (i__23310__auto___24574 + (1));
i__23310__auto___24574 = G__24575;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((2) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23317__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24569_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__24569_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq24570){
var G__24571 = cljs.core.first.call(null,seq24570);
var seq24570__$1 = cljs.core.next.call(null,seq24570);
var G__24572 = cljs.core.first.call(null,seq24570__$1);
var seq24570__$2 = cljs.core.next.call(null,seq24570__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24571,G__24572,seq24570__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__23316__auto__ = [];
var len__23309__auto___24580 = arguments.length;
var i__23310__auto___24581 = (0);
while(true){
if((i__23310__auto___24581 < len__23309__auto___24580)){
args__23316__auto__.push((arguments[i__23310__auto___24581]));

var G__24582 = (i__23310__auto___24581 + (1));
i__23310__auto___24581 = G__24582;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((2) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23317__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24576_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__24576_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq24577){
var G__24578 = cljs.core.first.call(null,seq24577);
var seq24577__$1 = cljs.core.next.call(null,seq24577);
var G__24579 = cljs.core.first.call(null,seq24577__$1);
var seq24577__$2 = cljs.core.next.call(null,seq24577__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24578,G__24579,seq24577__$2);
});

//# sourceMappingURL=session.js.map