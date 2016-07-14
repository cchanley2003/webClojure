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
var len__22721__auto___23294 = arguments.length;
var i__22722__auto___23295 = (0);
while(true){
if((i__22722__auto___23295 < len__22721__auto___23294)){
args__22728__auto__.push((arguments[i__22722__auto___23295]));

var G__23296 = (i__22722__auto___23295 + (1));
i__22722__auto___23295 = G__23296;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23292){
var vec__23293 = p__23292;
var default$ = cljs.core.nth.call(null,vec__23293,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__21651__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq23290){
var G__23291 = cljs.core.first.call(null,seq23290);
var seq23290__$1 = cljs.core.next.call(null,seq23290);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__23291,seq23290__$1);
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
var len__22721__auto___23301 = arguments.length;
var i__22722__auto___23302 = (0);
while(true){
if((i__22722__auto___23302 < len__22721__auto___23301)){
args__22728__auto__.push((arguments[i__22722__auto___23302]));

var G__23303 = (i__22722__auto___23302 + (1));
i__22722__auto___23302 = G__23303;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23299){
var vec__23300 = p__23299;
var default$ = cljs.core.nth.call(null,vec__23300,(0),null);
var or__21651__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq23297){
var G__23298 = cljs.core.first.call(null,seq23297);
var seq23297__$1 = cljs.core.next.call(null,seq23297);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__23298,seq23297__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23306 = arguments.length;
var i__22722__auto___23307 = (0);
while(true){
if((i__22722__auto___23307 < len__22721__auto___23306)){
args__22728__auto__.push((arguments[i__22722__auto___23307]));

var G__23308 = (i__22722__auto___23307 + (1));
i__22722__auto___23307 = G__23308;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq23304){
var G__23305 = cljs.core.first.call(null,seq23304);
var seq23304__$1 = cljs.core.next.call(null,seq23304);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23305,seq23304__$1);
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
var len__22721__auto___23313 = arguments.length;
var i__22722__auto___23314 = (0);
while(true){
if((i__22722__auto___23314 < len__22721__auto___23313)){
args__22728__auto__.push((arguments[i__22722__auto___23314]));

var G__23315 = (i__22722__auto___23314 + (1));
i__22722__auto___23314 = G__23315;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23311){
var vec__23312 = p__23311;
var default$ = cljs.core.nth.call(null,vec__23312,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq23309){
var G__23310 = cljs.core.first.call(null,seq23309);
var seq23309__$1 = cljs.core.next.call(null,seq23309);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23310,seq23309__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23320 = arguments.length;
var i__22722__auto___23321 = (0);
while(true){
if((i__22722__auto___23321 < len__22721__auto___23320)){
args__22728__auto__.push((arguments[i__22722__auto___23321]));

var G__23322 = (i__22722__auto___23321 + (1));
i__22722__auto___23321 = G__23322;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23318){
var vec__23319 = p__23318;
var default$ = cljs.core.nth.call(null,vec__23319,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq23316){
var G__23317 = cljs.core.first.call(null,seq23316);
var seq23316__$1 = cljs.core.next.call(null,seq23316);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23317,seq23316__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___23327 = arguments.length;
var i__22722__auto___23328 = (0);
while(true){
if((i__22722__auto___23328 < len__22721__auto___23327)){
args__22728__auto__.push((arguments[i__22722__auto___23328]));

var G__23329 = (i__22722__auto___23328 + (1));
i__22722__auto___23328 = G__23329;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((2) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22729__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23323_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__23323_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq23324){
var G__23325 = cljs.core.first.call(null,seq23324);
var seq23324__$1 = cljs.core.next.call(null,seq23324);
var G__23326 = cljs.core.first.call(null,seq23324__$1);
var seq23324__$2 = cljs.core.next.call(null,seq23324__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23325,G__23326,seq23324__$2);
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
var len__22721__auto___23334 = arguments.length;
var i__22722__auto___23335 = (0);
while(true){
if((i__22722__auto___23335 < len__22721__auto___23334)){
args__22728__auto__.push((arguments[i__22722__auto___23335]));

var G__23336 = (i__22722__auto___23335 + (1));
i__22722__auto___23335 = G__23336;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((2) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22729__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23330_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23330_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq23331){
var G__23332 = cljs.core.first.call(null,seq23331);
var seq23331__$1 = cljs.core.next.call(null,seq23331);
var G__23333 = cljs.core.first.call(null,seq23331__$1);
var seq23331__$2 = cljs.core.next.call(null,seq23331__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23332,G__23333,seq23331__$2);
});

//# sourceMappingURL=session.js.map