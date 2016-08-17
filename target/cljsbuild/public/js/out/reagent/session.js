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
var args__22866__auto__ = [];
var len__22859__auto___23871 = arguments.length;
var i__22860__auto___23872 = (0);
while(true){
if((i__22860__auto___23872 < len__22859__auto___23871)){
args__22866__auto__.push((arguments[i__22860__auto___23872]));

var G__23873 = (i__22860__auto___23872 + (1));
i__22860__auto___23872 = G__23873;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23869){
var vec__23870 = p__23869;
var default$ = cljs.core.nth.call(null,vec__23870,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__21788__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq23867){
var G__23868 = cljs.core.first.call(null,seq23867);
var seq23867__$1 = cljs.core.next.call(null,seq23867);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__23868,seq23867__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__22866__auto__ = [];
var len__22859__auto___23878 = arguments.length;
var i__22860__auto___23879 = (0);
while(true){
if((i__22860__auto___23879 < len__22859__auto___23878)){
args__22866__auto__.push((arguments[i__22860__auto___23879]));

var G__23880 = (i__22860__auto___23879 + (1));
i__22860__auto___23879 = G__23880;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23876){
var vec__23877 = p__23876;
var default$ = cljs.core.nth.call(null,vec__23877,(0),null);
var or__21788__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq23874){
var G__23875 = cljs.core.first.call(null,seq23874);
var seq23874__$1 = cljs.core.next.call(null,seq23874);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__23875,seq23874__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__22866__auto__ = [];
var len__22859__auto___23883 = arguments.length;
var i__22860__auto___23884 = (0);
while(true){
if((i__22860__auto___23884 < len__22859__auto___23883)){
args__22866__auto__.push((arguments[i__22860__auto___23884]));

var G__23885 = (i__22860__auto___23884 + (1));
i__22860__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq23881){
var G__23882 = cljs.core.first.call(null,seq23881);
var seq23881__$1 = cljs.core.next.call(null,seq23881);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23882,seq23881__$1);
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
var args__22866__auto__ = [];
var len__22859__auto___23890 = arguments.length;
var i__22860__auto___23891 = (0);
while(true){
if((i__22860__auto___23891 < len__22859__auto___23890)){
args__22866__auto__.push((arguments[i__22860__auto___23891]));

var G__23892 = (i__22860__auto___23891 + (1));
i__22860__auto___23891 = G__23892;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__23888){
var vec__23889 = p__23888;
var default$ = cljs.core.nth.call(null,vec__23889,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq23886){
var G__23887 = cljs.core.first.call(null,seq23886);
var seq23886__$1 = cljs.core.next.call(null,seq23886);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23887,seq23886__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__22866__auto__ = [];
var len__22859__auto___23897 = arguments.length;
var i__22860__auto___23898 = (0);
while(true){
if((i__22860__auto___23898 < len__22859__auto___23897)){
args__22866__auto__.push((arguments[i__22860__auto___23898]));

var G__23899 = (i__22860__auto___23898 + (1));
i__22860__auto___23898 = G__23899;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23895){
var vec__23896 = p__23895;
var default$ = cljs.core.nth.call(null,vec__23896,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq23893){
var G__23894 = cljs.core.first.call(null,seq23893);
var seq23893__$1 = cljs.core.next.call(null,seq23893);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23894,seq23893__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__22866__auto__ = [];
var len__22859__auto___23904 = arguments.length;
var i__22860__auto___23905 = (0);
while(true){
if((i__22860__auto___23905 < len__22859__auto___23904)){
args__22866__auto__.push((arguments[i__22860__auto___23905]));

var G__23906 = (i__22860__auto___23905 + (1));
i__22860__auto___23905 = G__23906;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((2) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22867__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23900_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__23900_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq23901){
var G__23902 = cljs.core.first.call(null,seq23901);
var seq23901__$1 = cljs.core.next.call(null,seq23901);
var G__23903 = cljs.core.first.call(null,seq23901__$1);
var seq23901__$2 = cljs.core.next.call(null,seq23901__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23902,G__23903,seq23901__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__22866__auto__ = [];
var len__22859__auto___23911 = arguments.length;
var i__22860__auto___23912 = (0);
while(true){
if((i__22860__auto___23912 < len__22859__auto___23911)){
args__22866__auto__.push((arguments[i__22860__auto___23912]));

var G__23913 = (i__22860__auto___23912 + (1));
i__22860__auto___23912 = G__23913;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((2) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22867__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23907_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23907_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq23908){
var G__23909 = cljs.core.first.call(null,seq23908);
var seq23908__$1 = cljs.core.next.call(null,seq23908);
var G__23910 = cljs.core.first.call(null,seq23908__$1);
var seq23908__$2 = cljs.core.next.call(null,seq23908__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23909,G__23910,seq23908__$2);
});

//# sourceMappingURL=session.js.map