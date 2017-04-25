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
var len__7277__auto___13166 = arguments.length;
var i__7278__auto___13167 = (0);
while(true){
if((i__7278__auto___13167 < len__7277__auto___13166)){
args__7284__auto__.push((arguments[i__7278__auto___13167]));

var G__13168 = (i__7278__auto___13167 + (1));
i__7278__auto___13167 = G__13168;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13164){
var vec__13165 = p__13164;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13165,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__6207__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13162){
var G__13163 = cljs.core.first(seq13162);
var seq13162__$1 = cljs.core.next(seq13162);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13163,seq13162__$1);
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
var len__7277__auto___13175 = arguments.length;
var i__7278__auto___13176 = (0);
while(true){
if((i__7278__auto___13176 < len__7277__auto___13175)){
args__7284__auto__.push((arguments[i__7278__auto___13176]));

var G__13177 = (i__7278__auto___13176 + (1));
i__7278__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13171){
var vec__13172 = p__13171;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(0),null);
var or__6207__auto__ = (function (){var G__13174 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13174) : cljs.core.deref.call(null,G__13174));
})();
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13169){
var G__13170 = cljs.core.first(seq13169);
var seq13169__$1 = cljs.core.next(seq13169);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13170,seq13169__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13180 = arguments.length;
var i__7278__auto___13181 = (0);
while(true){
if((i__7278__auto___13181 < len__7277__auto___13180)){
args__7284__auto__.push((arguments[i__7278__auto___13181]));

var G__13182 = (i__7278__auto___13181 + (1));
i__7278__auto___13181 = G__13182;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13178){
var G__13179 = cljs.core.first(seq13178);
var seq13178__$1 = cljs.core.next(seq13178);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13179,seq13178__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__13185 = reagent.session.state;
var G__13186 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13185,G__13186) : cljs.core.reset_BANG_.call(null,G__13185,G__13186));
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
var len__7277__auto___13191 = arguments.length;
var i__7278__auto___13192 = (0);
while(true){
if((i__7278__auto___13192 < len__7277__auto___13191)){
args__7284__auto__.push((arguments[i__7278__auto___13192]));

var G__13193 = (i__7278__auto___13192 + (1));
i__7278__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13189){
var vec__13190 = p__13189;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13187){
var G__13188 = cljs.core.first(seq13187);
var seq13187__$1 = cljs.core.next(seq13187);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13188,seq13187__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13198 = arguments.length;
var i__7278__auto___13199 = (0);
while(true){
if((i__7278__auto___13199 < len__7277__auto___13198)){
args__7284__auto__.push((arguments[i__7278__auto___13199]));

var G__13200 = (i__7278__auto___13199 + (1));
i__7278__auto___13199 = G__13200;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13196){
var vec__13197 = p__13196;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13197,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13194){
var G__13195 = cljs.core.first(seq13194);
var seq13194__$1 = cljs.core.next(seq13194);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13195,seq13194__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___13205 = arguments.length;
var i__7278__auto___13206 = (0);
while(true){
if((i__7278__auto___13206 < len__7277__auto___13205)){
args__7284__auto__.push((arguments[i__7278__auto___13206]));

var G__13207 = (i__7278__auto___13206 + (1));
i__7278__auto___13206 = G__13207;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13201_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__13201_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq13202){
var G__13203 = cljs.core.first(seq13202);
var seq13202__$1 = cljs.core.next(seq13202);
var G__13204 = cljs.core.first(seq13202__$1);
var seq13202__$2 = cljs.core.next(seq13202__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13203,G__13204,seq13202__$2);
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
var len__7277__auto___13212 = arguments.length;
var i__7278__auto___13213 = (0);
while(true){
if((i__7278__auto___13213 < len__7277__auto___13212)){
args__7284__auto__.push((arguments[i__7278__auto___13213]));

var G__13214 = (i__7278__auto___13213 + (1));
i__7278__auto___13213 = G__13214;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((2) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7285__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13208_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__13208_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13209){
var G__13210 = cljs.core.first(seq13209);
var seq13209__$1 = cljs.core.next(seq13209);
var G__13211 = cljs.core.first(seq13209__$1);
var seq13209__$2 = cljs.core.next(seq13209__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13210,G__13211,seq13209__$2);
});
