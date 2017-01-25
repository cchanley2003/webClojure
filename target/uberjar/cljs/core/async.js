// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async14570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14570 = (function (fn_handler,f,meta14571){
this.fn_handler = fn_handler;
this.f = f;
this.meta14571 = meta14571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14572,meta14571__$1){
var self__ = this;
var _14572__$1 = this;
return (new cljs.core.async.t_cljs$core$async14570(self__.fn_handler,self__.f,meta14571__$1));
});

cljs.core.async.t_cljs$core$async14570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14572){
var self__ = this;
var _14572__$1 = this;
return self__.meta14571;
});

cljs.core.async.t_cljs$core$async14570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta14571], null);
});

cljs.core.async.t_cljs$core$async14570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14570";

cljs.core.async.t_cljs$core$async14570.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14570");
});

cljs.core.async.__GT_t_cljs$core$async14570 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async14570(fn_handler__$1,f__$1,meta14571){
return (new cljs.core.async.t_cljs$core$async14570(fn_handler__$1,f__$1,meta14571));
});

}

return (new cljs.core.async.t_cljs$core$async14570(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14575 = [];
var len__7277__auto___14578 = arguments.length;
var i__7278__auto___14579 = (0);
while(true){
if((i__7278__auto___14579 < len__7277__auto___14578)){
args14575.push((arguments[i__7278__auto___14579]));

var G__14580 = (i__7278__auto___14579 + (1));
i__7278__auto___14579 = G__14580;
continue;
} else {
}
break;
}

var G__14577 = args14575.length;
switch (G__14577) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14575.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14582 = [];
var len__7277__auto___14585 = arguments.length;
var i__7278__auto___14586 = (0);
while(true){
if((i__7278__auto___14586 < len__7277__auto___14585)){
args14582.push((arguments[i__7278__auto___14586]));

var G__14587 = (i__7278__auto___14586 + (1));
i__7278__auto___14586 = G__14587;
continue;
} else {
}
break;
}

var G__14584 = args14582.length;
switch (G__14584) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14582.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_14589 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14589) : fn1.call(null,val_14589));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14589,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14589) : fn1.call(null,val_14589));
});})(val_14589,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14590 = [];
var len__7277__auto___14593 = arguments.length;
var i__7278__auto___14594 = (0);
while(true){
if((i__7278__auto___14594 < len__7277__auto___14593)){
args14590.push((arguments[i__7278__auto___14594]));

var G__14595 = (i__7278__auto___14594 + (1));
i__7278__auto___14594 = G__14595;
continue;
} else {
}
break;
}

var G__14592 = args14590.length;
switch (G__14592) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14590.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7122__auto___14597 = n;
var x_14598 = (0);
while(true){
if((x_14598 < n__7122__auto___14597)){
(a[x_14598] = (0));

var G__14599 = (x_14598 + (1));
x_14598 = G__14599;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14600 = (i + (1));
i = G__14600;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14604 = (function (alt_flag,flag,meta14605){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14605 = meta14605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14606,meta14605__$1){
var self__ = this;
var _14606__$1 = this;
return (new cljs.core.async.t_cljs$core$async14604(self__.alt_flag,self__.flag,meta14605__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14606){
var self__ = this;
var _14606__$1 = this;
return self__.meta14605;
});})(flag))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14604.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14605], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14604";

cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14604");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14604 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14604(alt_flag__$1,flag__$1,meta14605){
return (new cljs.core.async.t_cljs$core$async14604(alt_flag__$1,flag__$1,meta14605));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14604(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14610 = (function (alt_handler,flag,cb,meta14611){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14611 = meta14611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14612,meta14611__$1){
var self__ = this;
var _14612__$1 = this;
return (new cljs.core.async.t_cljs$core$async14610(self__.alt_handler,self__.flag,self__.cb,meta14611__$1));
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14612){
var self__ = this;
var _14612__$1 = this;
return self__.meta14611;
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14611], null);
});

cljs.core.async.t_cljs$core$async14610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14610";

cljs.core.async.t_cljs$core$async14610.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14610");
});

cljs.core.async.__GT_t_cljs$core$async14610 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14610(alt_handler__$1,flag__$1,cb__$1,meta14611){
return (new cljs.core.async.t_cljs$core$async14610(alt_handler__$1,flag__$1,cb__$1,meta14611));
});

}

return (new cljs.core.async.t_cljs$core$async14610(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14613_SHARP_){
var G__14617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14613_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14617) : fret.call(null,G__14617));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14614_SHARP_){
var G__14618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14614_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14618) : fret.call(null,G__14618));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6207__auto__ = wport;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14619 = (i + (1));
i = G__14619;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6207__auto__ = ret;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6195__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6195__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___14625 = arguments.length;
var i__7278__auto___14626 = (0);
while(true){
if((i__7278__auto___14626 < len__7277__auto___14625)){
args__7284__auto__.push((arguments[i__7278__auto___14626]));

var G__14627 = (i__7278__auto___14626 + (1));
i__7278__auto___14626 = G__14627;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14622){
var map__14623 = p__14622;
var map__14623__$1 = ((((!((map__14623 == null)))?((((map__14623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14623):map__14623);
var opts = map__14623__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14620){
var G__14621 = cljs.core.first(seq14620);
var seq14620__$1 = cljs.core.next(seq14620);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14621,seq14620__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14628 = [];
var len__7277__auto___14678 = arguments.length;
var i__7278__auto___14679 = (0);
while(true){
if((i__7278__auto___14679 < len__7277__auto___14678)){
args14628.push((arguments[i__7278__auto___14679]));

var G__14680 = (i__7278__auto___14679 + (1));
i__7278__auto___14679 = G__14680;
continue;
} else {
}
break;
}

var G__14630 = args14628.length;
switch (G__14630) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14628.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14522__auto___14682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___14682){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___14682){
return (function (state_14654){
var state_val_14655 = (state_14654[(1)]);
if((state_val_14655 === (7))){
var inst_14650 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
var statearr_14656_14683 = state_14654__$1;
(statearr_14656_14683[(2)] = inst_14650);

(statearr_14656_14683[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (1))){
var state_14654__$1 = state_14654;
var statearr_14657_14684 = state_14654__$1;
(statearr_14657_14684[(2)] = null);

(statearr_14657_14684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (4))){
var inst_14633 = (state_14654[(7)]);
var inst_14633__$1 = (state_14654[(2)]);
var inst_14634 = (inst_14633__$1 == null);
var state_14654__$1 = (function (){var statearr_14658 = state_14654;
(statearr_14658[(7)] = inst_14633__$1);

return statearr_14658;
})();
if(cljs.core.truth_(inst_14634)){
var statearr_14659_14685 = state_14654__$1;
(statearr_14659_14685[(1)] = (5));

} else {
var statearr_14660_14686 = state_14654__$1;
(statearr_14660_14686[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (13))){
var state_14654__$1 = state_14654;
var statearr_14661_14687 = state_14654__$1;
(statearr_14661_14687[(2)] = null);

(statearr_14661_14687[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (6))){
var inst_14633 = (state_14654[(7)]);
var state_14654__$1 = state_14654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14654__$1,(11),to,inst_14633);
} else {
if((state_val_14655 === (3))){
var inst_14652 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14654__$1,inst_14652);
} else {
if((state_val_14655 === (12))){
var state_14654__$1 = state_14654;
var statearr_14662_14688 = state_14654__$1;
(statearr_14662_14688[(2)] = null);

(statearr_14662_14688[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (2))){
var state_14654__$1 = state_14654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14654__$1,(4),from);
} else {
if((state_val_14655 === (11))){
var inst_14643 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
if(cljs.core.truth_(inst_14643)){
var statearr_14663_14689 = state_14654__$1;
(statearr_14663_14689[(1)] = (12));

} else {
var statearr_14664_14690 = state_14654__$1;
(statearr_14664_14690[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (9))){
var state_14654__$1 = state_14654;
var statearr_14665_14691 = state_14654__$1;
(statearr_14665_14691[(2)] = null);

(statearr_14665_14691[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (5))){
var state_14654__$1 = state_14654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14666_14692 = state_14654__$1;
(statearr_14666_14692[(1)] = (8));

} else {
var statearr_14667_14693 = state_14654__$1;
(statearr_14667_14693[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (14))){
var inst_14648 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
var statearr_14668_14694 = state_14654__$1;
(statearr_14668_14694[(2)] = inst_14648);

(statearr_14668_14694[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (10))){
var inst_14640 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
var statearr_14669_14695 = state_14654__$1;
(statearr_14669_14695[(2)] = inst_14640);

(statearr_14669_14695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14655 === (8))){
var inst_14637 = cljs.core.async.close_BANG_(to);
var state_14654__$1 = state_14654;
var statearr_14670_14696 = state_14654__$1;
(statearr_14670_14696[(2)] = inst_14637);

(statearr_14670_14696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___14682))
;
return ((function (switch__14408__auto__,c__14522__auto___14682){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_14674 = [null,null,null,null,null,null,null,null];
(statearr_14674[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_14674[(1)] = (1));

return statearr_14674;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_14654){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_14654);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e14675){if((e14675 instanceof Object)){
var ex__14412__auto__ = e14675;
var statearr_14676_14697 = state_14654;
(statearr_14676_14697[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14654);

return cljs.core.cst$kw$recur;
} else {
throw e14675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__14698 = state_14654;
state_14654 = G__14698;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_14654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_14654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___14682))
})();
var state__14524__auto__ = (function (){var statearr_14677 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_14677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___14682);

return statearr_14677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___14682))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14882){
var vec__14883 = p__14882;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(1),null);
var job = vec__14883;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14522__auto___15065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results){
return (function (state_14888){
var state_val_14889 = (state_14888[(1)]);
if((state_val_14889 === (1))){
var state_14888__$1 = state_14888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14888__$1,(2),res,v);
} else {
if((state_val_14889 === (2))){
var inst_14885 = (state_14888[(2)]);
var inst_14886 = cljs.core.async.close_BANG_(res);
var state_14888__$1 = (function (){var statearr_14890 = state_14888;
(statearr_14890[(7)] = inst_14885);

return statearr_14890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14888__$1,inst_14886);
} else {
return null;
}
}
});})(c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results))
;
return ((function (switch__14408__auto__,c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_14894 = [null,null,null,null,null,null,null,null];
(statearr_14894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__);

(statearr_14894[(1)] = (1));

return statearr_14894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1 = (function (state_14888){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_14888);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e14895){if((e14895 instanceof Object)){
var ex__14412__auto__ = e14895;
var statearr_14896_15066 = state_14888;
(statearr_14896_15066[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14888);

return cljs.core.cst$kw$recur;
} else {
throw e14895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15067 = state_14888;
state_14888 = G__15067;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = function(state_14888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1.call(this,state_14888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results))
})();
var state__14524__auto__ = (function (){var statearr_14897 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_14897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15065);

return statearr_14897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___15065,res,vec__14883,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14898){
var vec__14899 = p__14898;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(1),null);
var job = vec__14899;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7122__auto___15068 = n;
var __15069 = (0);
while(true){
if((__15069 < n__7122__auto___15068)){
var G__14900_15070 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14900_15070) {
case "compute":
var c__14522__auto___15072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15069,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (__15069,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function (state_14913){
var state_val_14914 = (state_14913[(1)]);
if((state_val_14914 === (1))){
var state_14913__$1 = state_14913;
var statearr_14915_15073 = state_14913__$1;
(statearr_14915_15073[(2)] = null);

(statearr_14915_15073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14914 === (2))){
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14913__$1,(4),jobs);
} else {
if((state_val_14914 === (3))){
var inst_14911 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14913__$1,inst_14911);
} else {
if((state_val_14914 === (4))){
var inst_14903 = (state_14913[(2)]);
var inst_14904 = process(inst_14903);
var state_14913__$1 = state_14913;
if(cljs.core.truth_(inst_14904)){
var statearr_14916_15074 = state_14913__$1;
(statearr_14916_15074[(1)] = (5));

} else {
var statearr_14917_15075 = state_14913__$1;
(statearr_14917_15075[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14914 === (5))){
var state_14913__$1 = state_14913;
var statearr_14918_15076 = state_14913__$1;
(statearr_14918_15076[(2)] = null);

(statearr_14918_15076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14914 === (6))){
var state_14913__$1 = state_14913;
var statearr_14919_15077 = state_14913__$1;
(statearr_14919_15077[(2)] = null);

(statearr_14919_15077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14914 === (7))){
var inst_14909 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
var statearr_14920_15078 = state_14913__$1;
(statearr_14920_15078[(2)] = inst_14909);

(statearr_14920_15078[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15069,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
;
return ((function (__15069,switch__14408__auto__,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1 = (function (state_14913){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_14913);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e14925){if((e14925 instanceof Object)){
var ex__14412__auto__ = e14925;
var statearr_14926_15079 = state_14913;
(statearr_14926_15079[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14913);

return cljs.core.cst$kw$recur;
} else {
throw e14925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15080 = state_14913;
state_14913 = G__15080;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = function(state_14913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1.call(this,state_14913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__;
})()
;})(__15069,switch__14408__auto__,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
})();
var state__14524__auto__ = (function (){var statearr_14927 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_14927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15072);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(__15069,c__14522__auto___15072,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
);


break;
case "async":
var c__14522__auto___15081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15069,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (__15069,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function (state_14940){
var state_val_14941 = (state_14940[(1)]);
if((state_val_14941 === (1))){
var state_14940__$1 = state_14940;
var statearr_14942_15082 = state_14940__$1;
(statearr_14942_15082[(2)] = null);

(statearr_14942_15082[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14941 === (2))){
var state_14940__$1 = state_14940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14940__$1,(4),jobs);
} else {
if((state_val_14941 === (3))){
var inst_14938 = (state_14940[(2)]);
var state_14940__$1 = state_14940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14940__$1,inst_14938);
} else {
if((state_val_14941 === (4))){
var inst_14930 = (state_14940[(2)]);
var inst_14931 = async(inst_14930);
var state_14940__$1 = state_14940;
if(cljs.core.truth_(inst_14931)){
var statearr_14943_15083 = state_14940__$1;
(statearr_14943_15083[(1)] = (5));

} else {
var statearr_14944_15084 = state_14940__$1;
(statearr_14944_15084[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14941 === (5))){
var state_14940__$1 = state_14940;
var statearr_14945_15085 = state_14940__$1;
(statearr_14945_15085[(2)] = null);

(statearr_14945_15085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14941 === (6))){
var state_14940__$1 = state_14940;
var statearr_14946_15086 = state_14940__$1;
(statearr_14946_15086[(2)] = null);

(statearr_14946_15086[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14941 === (7))){
var inst_14936 = (state_14940[(2)]);
var state_14940__$1 = state_14940;
var statearr_14947_15087 = state_14940__$1;
(statearr_14947_15087[(2)] = inst_14936);

(statearr_14947_15087[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15069,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
;
return ((function (__15069,switch__14408__auto__,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_14951 = [null,null,null,null,null,null,null];
(statearr_14951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__);

(statearr_14951[(1)] = (1));

return statearr_14951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1 = (function (state_14940){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_14940);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e14952){if((e14952 instanceof Object)){
var ex__14412__auto__ = e14952;
var statearr_14953_15088 = state_14940;
(statearr_14953_15088[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14940);

return cljs.core.cst$kw$recur;
} else {
throw e14952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15089 = state_14940;
state_14940 = G__15089;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = function(state_14940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1.call(this,state_14940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__;
})()
;})(__15069,switch__14408__auto__,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
})();
var state__14524__auto__ = (function (){var statearr_14954 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_14954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15081);

return statearr_14954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(__15069,c__14522__auto___15081,G__14900_15070,n__7122__auto___15068,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15090 = (__15069 + (1));
__15069 = G__15090;
continue;
} else {
}
break;
}

var c__14522__auto___15091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___15091,jobs,results,process,async){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___15091,jobs,results,process,async){
return (function (state_14976){
var state_val_14977 = (state_14976[(1)]);
if((state_val_14977 === (1))){
var state_14976__$1 = state_14976;
var statearr_14978_15092 = state_14976__$1;
(statearr_14978_15092[(2)] = null);

(statearr_14978_15092[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (2))){
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14976__$1,(4),from);
} else {
if((state_val_14977 === (3))){
var inst_14974 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14976__$1,inst_14974);
} else {
if((state_val_14977 === (4))){
var inst_14957 = (state_14976[(7)]);
var inst_14957__$1 = (state_14976[(2)]);
var inst_14958 = (inst_14957__$1 == null);
var state_14976__$1 = (function (){var statearr_14979 = state_14976;
(statearr_14979[(7)] = inst_14957__$1);

return statearr_14979;
})();
if(cljs.core.truth_(inst_14958)){
var statearr_14980_15093 = state_14976__$1;
(statearr_14980_15093[(1)] = (5));

} else {
var statearr_14981_15094 = state_14976__$1;
(statearr_14981_15094[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (5))){
var inst_14960 = cljs.core.async.close_BANG_(jobs);
var state_14976__$1 = state_14976;
var statearr_14982_15095 = state_14976__$1;
(statearr_14982_15095[(2)] = inst_14960);

(statearr_14982_15095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (6))){
var inst_14962 = (state_14976[(8)]);
var inst_14957 = (state_14976[(7)]);
var inst_14962__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14964 = [inst_14957,inst_14962__$1];
var inst_14965 = (new cljs.core.PersistentVector(null,2,(5),inst_14963,inst_14964,null));
var state_14976__$1 = (function (){var statearr_14983 = state_14976;
(statearr_14983[(8)] = inst_14962__$1);

return statearr_14983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14976__$1,(8),jobs,inst_14965);
} else {
if((state_val_14977 === (7))){
var inst_14972 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14984_15096 = state_14976__$1;
(statearr_14984_15096[(2)] = inst_14972);

(statearr_14984_15096[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (8))){
var inst_14962 = (state_14976[(8)]);
var inst_14967 = (state_14976[(2)]);
var state_14976__$1 = (function (){var statearr_14985 = state_14976;
(statearr_14985[(9)] = inst_14967);

return statearr_14985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14976__$1,(9),results,inst_14962);
} else {
if((state_val_14977 === (9))){
var inst_14969 = (state_14976[(2)]);
var state_14976__$1 = (function (){var statearr_14986 = state_14976;
(statearr_14986[(10)] = inst_14969);

return statearr_14986;
})();
var statearr_14987_15097 = state_14976__$1;
(statearr_14987_15097[(2)] = null);

(statearr_14987_15097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___15091,jobs,results,process,async))
;
return ((function (switch__14408__auto__,c__14522__auto___15091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_14991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__);

(statearr_14991[(1)] = (1));

return statearr_14991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1 = (function (state_14976){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_14976);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e14992){if((e14992 instanceof Object)){
var ex__14412__auto__ = e14992;
var statearr_14993_15098 = state_14976;
(statearr_14993_15098[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14976);

return cljs.core.cst$kw$recur;
} else {
throw e14992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15099 = state_14976;
state_14976 = G__15099;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = function(state_14976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1.call(this,state_14976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___15091,jobs,results,process,async))
})();
var state__14524__auto__ = (function (){var statearr_14994 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_14994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15091);

return statearr_14994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___15091,jobs,results,process,async))
);


var c__14522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto__,jobs,results,process,async){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto__,jobs,results,process,async){
return (function (state_15032){
var state_val_15033 = (state_15032[(1)]);
if((state_val_15033 === (7))){
var inst_15028 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15034_15100 = state_15032__$1;
(statearr_15034_15100[(2)] = inst_15028);

(statearr_15034_15100[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (20))){
var state_15032__$1 = state_15032;
var statearr_15035_15101 = state_15032__$1;
(statearr_15035_15101[(2)] = null);

(statearr_15035_15101[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (1))){
var state_15032__$1 = state_15032;
var statearr_15036_15102 = state_15032__$1;
(statearr_15036_15102[(2)] = null);

(statearr_15036_15102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (4))){
var inst_14997 = (state_15032[(7)]);
var inst_14997__$1 = (state_15032[(2)]);
var inst_14998 = (inst_14997__$1 == null);
var state_15032__$1 = (function (){var statearr_15037 = state_15032;
(statearr_15037[(7)] = inst_14997__$1);

return statearr_15037;
})();
if(cljs.core.truth_(inst_14998)){
var statearr_15038_15103 = state_15032__$1;
(statearr_15038_15103[(1)] = (5));

} else {
var statearr_15039_15104 = state_15032__$1;
(statearr_15039_15104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (15))){
var inst_15010 = (state_15032[(8)]);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15032__$1,(18),to,inst_15010);
} else {
if((state_val_15033 === (21))){
var inst_15023 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15040_15105 = state_15032__$1;
(statearr_15040_15105[(2)] = inst_15023);

(statearr_15040_15105[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (13))){
var inst_15025 = (state_15032[(2)]);
var state_15032__$1 = (function (){var statearr_15041 = state_15032;
(statearr_15041[(9)] = inst_15025);

return statearr_15041;
})();
var statearr_15042_15106 = state_15032__$1;
(statearr_15042_15106[(2)] = null);

(statearr_15042_15106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (6))){
var inst_14997 = (state_15032[(7)]);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15032__$1,(11),inst_14997);
} else {
if((state_val_15033 === (17))){
var inst_15018 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
if(cljs.core.truth_(inst_15018)){
var statearr_15043_15107 = state_15032__$1;
(statearr_15043_15107[(1)] = (19));

} else {
var statearr_15044_15108 = state_15032__$1;
(statearr_15044_15108[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (3))){
var inst_15030 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15032__$1,inst_15030);
} else {
if((state_val_15033 === (12))){
var inst_15007 = (state_15032[(10)]);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15032__$1,(14),inst_15007);
} else {
if((state_val_15033 === (2))){
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15032__$1,(4),results);
} else {
if((state_val_15033 === (19))){
var state_15032__$1 = state_15032;
var statearr_15045_15109 = state_15032__$1;
(statearr_15045_15109[(2)] = null);

(statearr_15045_15109[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (11))){
var inst_15007 = (state_15032[(2)]);
var state_15032__$1 = (function (){var statearr_15046 = state_15032;
(statearr_15046[(10)] = inst_15007);

return statearr_15046;
})();
var statearr_15047_15110 = state_15032__$1;
(statearr_15047_15110[(2)] = null);

(statearr_15047_15110[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (9))){
var state_15032__$1 = state_15032;
var statearr_15048_15111 = state_15032__$1;
(statearr_15048_15111[(2)] = null);

(statearr_15048_15111[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (5))){
var state_15032__$1 = state_15032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15049_15112 = state_15032__$1;
(statearr_15049_15112[(1)] = (8));

} else {
var statearr_15050_15113 = state_15032__$1;
(statearr_15050_15113[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (14))){
var inst_15012 = (state_15032[(11)]);
var inst_15010 = (state_15032[(8)]);
var inst_15010__$1 = (state_15032[(2)]);
var inst_15011 = (inst_15010__$1 == null);
var inst_15012__$1 = cljs.core.not(inst_15011);
var state_15032__$1 = (function (){var statearr_15051 = state_15032;
(statearr_15051[(11)] = inst_15012__$1);

(statearr_15051[(8)] = inst_15010__$1);

return statearr_15051;
})();
if(inst_15012__$1){
var statearr_15052_15114 = state_15032__$1;
(statearr_15052_15114[(1)] = (15));

} else {
var statearr_15053_15115 = state_15032__$1;
(statearr_15053_15115[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (16))){
var inst_15012 = (state_15032[(11)]);
var state_15032__$1 = state_15032;
var statearr_15054_15116 = state_15032__$1;
(statearr_15054_15116[(2)] = inst_15012);

(statearr_15054_15116[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (10))){
var inst_15004 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15055_15117 = state_15032__$1;
(statearr_15055_15117[(2)] = inst_15004);

(statearr_15055_15117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (18))){
var inst_15015 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15056_15118 = state_15032__$1;
(statearr_15056_15118[(2)] = inst_15015);

(statearr_15056_15118[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15033 === (8))){
var inst_15001 = cljs.core.async.close_BANG_(to);
var state_15032__$1 = state_15032;
var statearr_15057_15119 = state_15032__$1;
(statearr_15057_15119[(2)] = inst_15001);

(statearr_15057_15119[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto__,jobs,results,process,async))
;
return ((function (switch__14408__auto__,c__14522__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1 = (function (state_15032){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_15032);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e15062){if((e15062 instanceof Object)){
var ex__14412__auto__ = e15062;
var statearr_15063_15120 = state_15032;
(statearr_15063_15120[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15032);

return cljs.core.cst$kw$recur;
} else {
throw e15062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15121 = state_15032;
state_15032 = G__15121;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__ = function(state_15032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1.call(this,state_15032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto__,jobs,results,process,async))
})();
var state__14524__auto__ = (function (){var statearr_15064 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_15064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto__);

return statearr_15064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto__,jobs,results,process,async))
);

return c__14522__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15122 = [];
var len__7277__auto___15125 = arguments.length;
var i__7278__auto___15126 = (0);
while(true){
if((i__7278__auto___15126 < len__7277__auto___15125)){
args15122.push((arguments[i__7278__auto___15126]));

var G__15127 = (i__7278__auto___15126 + (1));
i__7278__auto___15126 = G__15127;
continue;
} else {
}
break;
}

var G__15124 = args15122.length;
switch (G__15124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15122.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15129 = [];
var len__7277__auto___15132 = arguments.length;
var i__7278__auto___15133 = (0);
while(true){
if((i__7278__auto___15133 < len__7277__auto___15132)){
args15129.push((arguments[i__7278__auto___15133]));

var G__15134 = (i__7278__auto___15133 + (1));
i__7278__auto___15133 = G__15134;
continue;
} else {
}
break;
}

var G__15131 = args15129.length;
switch (G__15131) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15129.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15136 = [];
var len__7277__auto___15189 = arguments.length;
var i__7278__auto___15190 = (0);
while(true){
if((i__7278__auto___15190 < len__7277__auto___15189)){
args15136.push((arguments[i__7278__auto___15190]));

var G__15191 = (i__7278__auto___15190 + (1));
i__7278__auto___15190 = G__15191;
continue;
} else {
}
break;
}

var G__15138 = args15136.length;
switch (G__15138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15136.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14522__auto___15193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___15193,tc,fc){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___15193,tc,fc){
return (function (state_15164){
var state_val_15165 = (state_15164[(1)]);
if((state_val_15165 === (7))){
var inst_15160 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15166_15194 = state_15164__$1;
(statearr_15166_15194[(2)] = inst_15160);

(statearr_15166_15194[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (1))){
var state_15164__$1 = state_15164;
var statearr_15167_15195 = state_15164__$1;
(statearr_15167_15195[(2)] = null);

(statearr_15167_15195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (4))){
var inst_15141 = (state_15164[(7)]);
var inst_15141__$1 = (state_15164[(2)]);
var inst_15142 = (inst_15141__$1 == null);
var state_15164__$1 = (function (){var statearr_15168 = state_15164;
(statearr_15168[(7)] = inst_15141__$1);

return statearr_15168;
})();
if(cljs.core.truth_(inst_15142)){
var statearr_15169_15196 = state_15164__$1;
(statearr_15169_15196[(1)] = (5));

} else {
var statearr_15170_15197 = state_15164__$1;
(statearr_15170_15197[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (13))){
var state_15164__$1 = state_15164;
var statearr_15171_15198 = state_15164__$1;
(statearr_15171_15198[(2)] = null);

(statearr_15171_15198[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (6))){
var inst_15141 = (state_15164[(7)]);
var inst_15147 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15141) : p.call(null,inst_15141));
var state_15164__$1 = state_15164;
if(cljs.core.truth_(inst_15147)){
var statearr_15172_15199 = state_15164__$1;
(statearr_15172_15199[(1)] = (9));

} else {
var statearr_15173_15200 = state_15164__$1;
(statearr_15173_15200[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (3))){
var inst_15162 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15164__$1,inst_15162);
} else {
if((state_val_15165 === (12))){
var state_15164__$1 = state_15164;
var statearr_15174_15201 = state_15164__$1;
(statearr_15174_15201[(2)] = null);

(statearr_15174_15201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (2))){
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15164__$1,(4),ch);
} else {
if((state_val_15165 === (11))){
var inst_15141 = (state_15164[(7)]);
var inst_15151 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15164__$1,(8),inst_15151,inst_15141);
} else {
if((state_val_15165 === (9))){
var state_15164__$1 = state_15164;
var statearr_15175_15202 = state_15164__$1;
(statearr_15175_15202[(2)] = tc);

(statearr_15175_15202[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (5))){
var inst_15144 = cljs.core.async.close_BANG_(tc);
var inst_15145 = cljs.core.async.close_BANG_(fc);
var state_15164__$1 = (function (){var statearr_15176 = state_15164;
(statearr_15176[(8)] = inst_15144);

return statearr_15176;
})();
var statearr_15177_15203 = state_15164__$1;
(statearr_15177_15203[(2)] = inst_15145);

(statearr_15177_15203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (14))){
var inst_15158 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15178_15204 = state_15164__$1;
(statearr_15178_15204[(2)] = inst_15158);

(statearr_15178_15204[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (10))){
var state_15164__$1 = state_15164;
var statearr_15179_15205 = state_15164__$1;
(statearr_15179_15205[(2)] = fc);

(statearr_15179_15205[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (8))){
var inst_15153 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
if(cljs.core.truth_(inst_15153)){
var statearr_15180_15206 = state_15164__$1;
(statearr_15180_15206[(1)] = (12));

} else {
var statearr_15181_15207 = state_15164__$1;
(statearr_15181_15207[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___15193,tc,fc))
;
return ((function (switch__14408__auto__,c__14522__auto___15193,tc,fc){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_15185 = [null,null,null,null,null,null,null,null,null];
(statearr_15185[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_15185[(1)] = (1));

return statearr_15185;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_15164){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_15164);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e15186){if((e15186 instanceof Object)){
var ex__14412__auto__ = e15186;
var statearr_15187_15208 = state_15164;
(statearr_15187_15208[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15164);

return cljs.core.cst$kw$recur;
} else {
throw e15186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15209 = state_15164;
state_15164 = G__15209;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_15164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_15164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___15193,tc,fc))
})();
var state__14524__auto__ = (function (){var statearr_15188 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_15188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15193);

return statearr_15188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___15193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto__){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto__){
return (function (state_15256){
var state_val_15257 = (state_15256[(1)]);
if((state_val_15257 === (1))){
var inst_15242 = init;
var state_15256__$1 = (function (){var statearr_15258 = state_15256;
(statearr_15258[(7)] = inst_15242);

return statearr_15258;
})();
var statearr_15259_15274 = state_15256__$1;
(statearr_15259_15274[(2)] = null);

(statearr_15259_15274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (2))){
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15256__$1,(4),ch);
} else {
if((state_val_15257 === (3))){
var inst_15254 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15256__$1,inst_15254);
} else {
if((state_val_15257 === (4))){
var inst_15245 = (state_15256[(8)]);
var inst_15245__$1 = (state_15256[(2)]);
var inst_15246 = (inst_15245__$1 == null);
var state_15256__$1 = (function (){var statearr_15260 = state_15256;
(statearr_15260[(8)] = inst_15245__$1);

return statearr_15260;
})();
if(cljs.core.truth_(inst_15246)){
var statearr_15261_15275 = state_15256__$1;
(statearr_15261_15275[(1)] = (5));

} else {
var statearr_15262_15276 = state_15256__$1;
(statearr_15262_15276[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (5))){
var inst_15242 = (state_15256[(7)]);
var state_15256__$1 = state_15256;
var statearr_15263_15277 = state_15256__$1;
(statearr_15263_15277[(2)] = inst_15242);

(statearr_15263_15277[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (6))){
var inst_15245 = (state_15256[(8)]);
var inst_15242 = (state_15256[(7)]);
var inst_15249 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15242,inst_15245) : f.call(null,inst_15242,inst_15245));
var inst_15242__$1 = inst_15249;
var state_15256__$1 = (function (){var statearr_15264 = state_15256;
(statearr_15264[(7)] = inst_15242__$1);

return statearr_15264;
})();
var statearr_15265_15278 = state_15256__$1;
(statearr_15265_15278[(2)] = null);

(statearr_15265_15278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (7))){
var inst_15252 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15266_15279 = state_15256__$1;
(statearr_15266_15279[(2)] = inst_15252);

(statearr_15266_15279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__14522__auto__))
;
return ((function (switch__14408__auto__,c__14522__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14409__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14409__auto____0 = (function (){
var statearr_15270 = [null,null,null,null,null,null,null,null,null];
(statearr_15270[(0)] = cljs$core$async$reduce_$_state_machine__14409__auto__);

(statearr_15270[(1)] = (1));

return statearr_15270;
});
var cljs$core$async$reduce_$_state_machine__14409__auto____1 = (function (state_15256){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_15256);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e15271){if((e15271 instanceof Object)){
var ex__14412__auto__ = e15271;
var statearr_15272_15280 = state_15256;
(statearr_15272_15280[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15256);

return cljs.core.cst$kw$recur;
} else {
throw e15271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15281 = state_15256;
state_15256 = G__15281;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14409__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14409__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14409__auto____0;
cljs$core$async$reduce_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14409__auto____1;
return cljs$core$async$reduce_$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto__))
})();
var state__14524__auto__ = (function (){var statearr_15273 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_15273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto__);

return statearr_15273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto__))
);

return c__14522__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15282 = [];
var len__7277__auto___15334 = arguments.length;
var i__7278__auto___15335 = (0);
while(true){
if((i__7278__auto___15335 < len__7277__auto___15334)){
args15282.push((arguments[i__7278__auto___15335]));

var G__15336 = (i__7278__auto___15335 + (1));
i__7278__auto___15335 = G__15336;
continue;
} else {
}
break;
}

var G__15284 = args15282.length;
switch (G__15284) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15282.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto__){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto__){
return (function (state_15309){
var state_val_15310 = (state_15309[(1)]);
if((state_val_15310 === (7))){
var inst_15291 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15311_15338 = state_15309__$1;
(statearr_15311_15338[(2)] = inst_15291);

(statearr_15311_15338[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (1))){
var inst_15285 = cljs.core.seq(coll);
var inst_15286 = inst_15285;
var state_15309__$1 = (function (){var statearr_15312 = state_15309;
(statearr_15312[(7)] = inst_15286);

return statearr_15312;
})();
var statearr_15313_15339 = state_15309__$1;
(statearr_15313_15339[(2)] = null);

(statearr_15313_15339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (4))){
var inst_15286 = (state_15309[(7)]);
var inst_15289 = cljs.core.first(inst_15286);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15309__$1,(7),ch,inst_15289);
} else {
if((state_val_15310 === (13))){
var inst_15303 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15314_15340 = state_15309__$1;
(statearr_15314_15340[(2)] = inst_15303);

(statearr_15314_15340[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (6))){
var inst_15294 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15294)){
var statearr_15315_15341 = state_15309__$1;
(statearr_15315_15341[(1)] = (8));

} else {
var statearr_15316_15342 = state_15309__$1;
(statearr_15316_15342[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (3))){
var inst_15307 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15309__$1,inst_15307);
} else {
if((state_val_15310 === (12))){
var state_15309__$1 = state_15309;
var statearr_15317_15343 = state_15309__$1;
(statearr_15317_15343[(2)] = null);

(statearr_15317_15343[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (2))){
var inst_15286 = (state_15309[(7)]);
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15286)){
var statearr_15318_15344 = state_15309__$1;
(statearr_15318_15344[(1)] = (4));

} else {
var statearr_15319_15345 = state_15309__$1;
(statearr_15319_15345[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (11))){
var inst_15300 = cljs.core.async.close_BANG_(ch);
var state_15309__$1 = state_15309;
var statearr_15320_15346 = state_15309__$1;
(statearr_15320_15346[(2)] = inst_15300);

(statearr_15320_15346[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (9))){
var state_15309__$1 = state_15309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15321_15347 = state_15309__$1;
(statearr_15321_15347[(1)] = (11));

} else {
var statearr_15322_15348 = state_15309__$1;
(statearr_15322_15348[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (5))){
var inst_15286 = (state_15309[(7)]);
var state_15309__$1 = state_15309;
var statearr_15323_15349 = state_15309__$1;
(statearr_15323_15349[(2)] = inst_15286);

(statearr_15323_15349[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (10))){
var inst_15305 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15324_15350 = state_15309__$1;
(statearr_15324_15350[(2)] = inst_15305);

(statearr_15324_15350[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15310 === (8))){
var inst_15286 = (state_15309[(7)]);
var inst_15296 = cljs.core.next(inst_15286);
var inst_15286__$1 = inst_15296;
var state_15309__$1 = (function (){var statearr_15325 = state_15309;
(statearr_15325[(7)] = inst_15286__$1);

return statearr_15325;
})();
var statearr_15326_15351 = state_15309__$1;
(statearr_15326_15351[(2)] = null);

(statearr_15326_15351[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto__))
;
return ((function (switch__14408__auto__,c__14522__auto__){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_15330 = [null,null,null,null,null,null,null,null];
(statearr_15330[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_15330[(1)] = (1));

return statearr_15330;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_15309){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_15309);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object)){
var ex__14412__auto__ = e15331;
var statearr_15332_15352 = state_15309;
(statearr_15332_15352[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15309);

return cljs.core.cst$kw$recur;
} else {
throw e15331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15353 = state_15309;
state_15309 = G__15353;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_15309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_15309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto__))
})();
var state__14524__auto__ = (function (){var statearr_15333 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto__);

return statearr_15333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto__))
);

return c__14522__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6870__auto__ = (((_ == null))?null:_);
var m__6871__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6871__auto__.call(null,_));
} else {
var m__6871__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6871__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6871__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6871__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6871__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto__.call(null,m));
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15578 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15578) : cljs.core.atom.call(null,G__15578));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15579 = (function (mult,ch,cs,meta15580){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15580 = meta15580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15581,meta15580__$1){
var self__ = this;
var _15581__$1 = this;
return (new cljs.core.async.t_cljs$core$async15579(self__.mult,self__.ch,self__.cs,meta15580__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15581){
var self__ = this;
var _15581__$1 = this;
return self__.meta15580;
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15582_15802 = self__.cs;
var G__15583_15803 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15582_15802,G__15583_15803) : cljs.core.reset_BANG_.call(null,G__15582_15802,G__15583_15803));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15580], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15579";

cljs.core.async.t_cljs$core$async15579.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15579");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15579 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15579(mult__$1,ch__$1,cs__$1,meta15580){
return (new cljs.core.async.t_cljs$core$async15579(mult__$1,ch__$1,cs__$1,meta15580));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15579(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14522__auto___15804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___15804,cs,m,dchan,dctr,done){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___15804,cs,m,dchan,dctr,done){
return (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_15805 = state_15714__$1;
(statearr_15716_15805[(2)] = inst_15710);

(statearr_15716_15805[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (20))){
var inst_15615 = (state_15714[(7)]);
var inst_15625 = cljs.core.first(inst_15615);
var inst_15626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15625,(0),null);
var inst_15627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15625,(1),null);
var state_15714__$1 = (function (){var statearr_15717 = state_15714;
(statearr_15717[(8)] = inst_15626);

return statearr_15717;
})();
if(cljs.core.truth_(inst_15627)){
var statearr_15718_15806 = state_15714__$1;
(statearr_15718_15806[(1)] = (22));

} else {
var statearr_15719_15807 = state_15714__$1;
(statearr_15719_15807[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (27))){
var inst_15662 = (state_15714[(9)]);
var inst_15655 = (state_15714[(10)]);
var inst_15586 = (state_15714[(11)]);
var inst_15657 = (state_15714[(12)]);
var inst_15662__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15655,inst_15657);
var inst_15663 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15662__$1,inst_15586,done);
var state_15714__$1 = (function (){var statearr_15720 = state_15714;
(statearr_15720[(9)] = inst_15662__$1);

return statearr_15720;
})();
if(cljs.core.truth_(inst_15663)){
var statearr_15721_15808 = state_15714__$1;
(statearr_15721_15808[(1)] = (30));

} else {
var statearr_15722_15809 = state_15714__$1;
(statearr_15722_15809[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15723_15810 = state_15714__$1;
(statearr_15723_15810[(2)] = null);

(statearr_15723_15810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (24))){
var inst_15615 = (state_15714[(7)]);
var inst_15632 = (state_15714[(2)]);
var inst_15633 = cljs.core.next(inst_15615);
var inst_15595 = inst_15633;
var inst_15596 = null;
var inst_15597 = (0);
var inst_15598 = (0);
var state_15714__$1 = (function (){var statearr_15724 = state_15714;
(statearr_15724[(13)] = inst_15597);

(statearr_15724[(14)] = inst_15632);

(statearr_15724[(15)] = inst_15595);

(statearr_15724[(16)] = inst_15598);

(statearr_15724[(17)] = inst_15596);

return statearr_15724;
})();
var statearr_15725_15811 = state_15714__$1;
(statearr_15725_15811[(2)] = null);

(statearr_15725_15811[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (39))){
var state_15714__$1 = state_15714;
var statearr_15729_15812 = state_15714__$1;
(statearr_15729_15812[(2)] = null);

(statearr_15729_15812[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (4))){
var inst_15586 = (state_15714[(11)]);
var inst_15586__$1 = (state_15714[(2)]);
var inst_15587 = (inst_15586__$1 == null);
var state_15714__$1 = (function (){var statearr_15730 = state_15714;
(statearr_15730[(11)] = inst_15586__$1);

return statearr_15730;
})();
if(cljs.core.truth_(inst_15587)){
var statearr_15731_15813 = state_15714__$1;
(statearr_15731_15813[(1)] = (5));

} else {
var statearr_15732_15814 = state_15714__$1;
(statearr_15732_15814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (15))){
var inst_15597 = (state_15714[(13)]);
var inst_15595 = (state_15714[(15)]);
var inst_15598 = (state_15714[(16)]);
var inst_15596 = (state_15714[(17)]);
var inst_15611 = (state_15714[(2)]);
var inst_15612 = (inst_15598 + (1));
var tmp15726 = inst_15597;
var tmp15727 = inst_15595;
var tmp15728 = inst_15596;
var inst_15595__$1 = tmp15727;
var inst_15596__$1 = tmp15728;
var inst_15597__$1 = tmp15726;
var inst_15598__$1 = inst_15612;
var state_15714__$1 = (function (){var statearr_15733 = state_15714;
(statearr_15733[(13)] = inst_15597__$1);

(statearr_15733[(15)] = inst_15595__$1);

(statearr_15733[(16)] = inst_15598__$1);

(statearr_15733[(17)] = inst_15596__$1);

(statearr_15733[(18)] = inst_15611);

return statearr_15733;
})();
var statearr_15734_15815 = state_15714__$1;
(statearr_15734_15815[(2)] = null);

(statearr_15734_15815[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (21))){
var inst_15636 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15738_15816 = state_15714__$1;
(statearr_15738_15816[(2)] = inst_15636);

(statearr_15738_15816[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (31))){
var inst_15662 = (state_15714[(9)]);
var inst_15666 = done(null);
var inst_15667 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15662);
var state_15714__$1 = (function (){var statearr_15739 = state_15714;
(statearr_15739[(19)] = inst_15666);

return statearr_15739;
})();
var statearr_15740_15817 = state_15714__$1;
(statearr_15740_15817[(2)] = inst_15667);

(statearr_15740_15817[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (32))){
var inst_15656 = (state_15714[(20)]);
var inst_15654 = (state_15714[(21)]);
var inst_15655 = (state_15714[(10)]);
var inst_15657 = (state_15714[(12)]);
var inst_15669 = (state_15714[(2)]);
var inst_15670 = (inst_15657 + (1));
var tmp15735 = inst_15656;
var tmp15736 = inst_15654;
var tmp15737 = inst_15655;
var inst_15654__$1 = tmp15736;
var inst_15655__$1 = tmp15737;
var inst_15656__$1 = tmp15735;
var inst_15657__$1 = inst_15670;
var state_15714__$1 = (function (){var statearr_15741 = state_15714;
(statearr_15741[(20)] = inst_15656__$1);

(statearr_15741[(21)] = inst_15654__$1);

(statearr_15741[(10)] = inst_15655__$1);

(statearr_15741[(22)] = inst_15669);

(statearr_15741[(12)] = inst_15657__$1);

return statearr_15741;
})();
var statearr_15742_15818 = state_15714__$1;
(statearr_15742_15818[(2)] = null);

(statearr_15742_15818[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (40))){
var inst_15682 = (state_15714[(23)]);
var inst_15686 = done(null);
var inst_15687 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15682);
var state_15714__$1 = (function (){var statearr_15743 = state_15714;
(statearr_15743[(24)] = inst_15686);

return statearr_15743;
})();
var statearr_15744_15819 = state_15714__$1;
(statearr_15744_15819[(2)] = inst_15687);

(statearr_15744_15819[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (33))){
var inst_15673 = (state_15714[(25)]);
var inst_15675 = cljs.core.chunked_seq_QMARK_(inst_15673);
var state_15714__$1 = state_15714;
if(inst_15675){
var statearr_15745_15820 = state_15714__$1;
(statearr_15745_15820[(1)] = (36));

} else {
var statearr_15746_15821 = state_15714__$1;
(statearr_15746_15821[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (13))){
var inst_15605 = (state_15714[(26)]);
var inst_15608 = cljs.core.async.close_BANG_(inst_15605);
var state_15714__$1 = state_15714;
var statearr_15747_15822 = state_15714__$1;
(statearr_15747_15822[(2)] = inst_15608);

(statearr_15747_15822[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (22))){
var inst_15626 = (state_15714[(8)]);
var inst_15629 = cljs.core.async.close_BANG_(inst_15626);
var state_15714__$1 = state_15714;
var statearr_15748_15823 = state_15714__$1;
(statearr_15748_15823[(2)] = inst_15629);

(statearr_15748_15823[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (36))){
var inst_15673 = (state_15714[(25)]);
var inst_15677 = cljs.core.chunk_first(inst_15673);
var inst_15678 = cljs.core.chunk_rest(inst_15673);
var inst_15679 = cljs.core.count(inst_15677);
var inst_15654 = inst_15678;
var inst_15655 = inst_15677;
var inst_15656 = inst_15679;
var inst_15657 = (0);
var state_15714__$1 = (function (){var statearr_15749 = state_15714;
(statearr_15749[(20)] = inst_15656);

(statearr_15749[(21)] = inst_15654);

(statearr_15749[(10)] = inst_15655);

(statearr_15749[(12)] = inst_15657);

return statearr_15749;
})();
var statearr_15750_15824 = state_15714__$1;
(statearr_15750_15824[(2)] = null);

(statearr_15750_15824[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (41))){
var inst_15673 = (state_15714[(25)]);
var inst_15689 = (state_15714[(2)]);
var inst_15690 = cljs.core.next(inst_15673);
var inst_15654 = inst_15690;
var inst_15655 = null;
var inst_15656 = (0);
var inst_15657 = (0);
var state_15714__$1 = (function (){var statearr_15751 = state_15714;
(statearr_15751[(20)] = inst_15656);

(statearr_15751[(21)] = inst_15654);

(statearr_15751[(10)] = inst_15655);

(statearr_15751[(27)] = inst_15689);

(statearr_15751[(12)] = inst_15657);

return statearr_15751;
})();
var statearr_15752_15825 = state_15714__$1;
(statearr_15752_15825[(2)] = null);

(statearr_15752_15825[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (43))){
var state_15714__$1 = state_15714;
var statearr_15753_15826 = state_15714__$1;
(statearr_15753_15826[(2)] = null);

(statearr_15753_15826[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (29))){
var inst_15698 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15754_15827 = state_15714__$1;
(statearr_15754_15827[(2)] = inst_15698);

(statearr_15754_15827[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (44))){
var inst_15707 = (state_15714[(2)]);
var state_15714__$1 = (function (){var statearr_15755 = state_15714;
(statearr_15755[(28)] = inst_15707);

return statearr_15755;
})();
var statearr_15756_15828 = state_15714__$1;
(statearr_15756_15828[(2)] = null);

(statearr_15756_15828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (6))){
var inst_15646 = (state_15714[(29)]);
var inst_15645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15646__$1 = cljs.core.keys(inst_15645);
var inst_15647 = cljs.core.count(inst_15646__$1);
var inst_15648 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15647) : cljs.core.reset_BANG_.call(null,dctr,inst_15647));
var inst_15653 = cljs.core.seq(inst_15646__$1);
var inst_15654 = inst_15653;
var inst_15655 = null;
var inst_15656 = (0);
var inst_15657 = (0);
var state_15714__$1 = (function (){var statearr_15757 = state_15714;
(statearr_15757[(20)] = inst_15656);

(statearr_15757[(21)] = inst_15654);

(statearr_15757[(29)] = inst_15646__$1);

(statearr_15757[(10)] = inst_15655);

(statearr_15757[(30)] = inst_15648);

(statearr_15757[(12)] = inst_15657);

return statearr_15757;
})();
var statearr_15758_15829 = state_15714__$1;
(statearr_15758_15829[(2)] = null);

(statearr_15758_15829[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (28))){
var inst_15654 = (state_15714[(21)]);
var inst_15673 = (state_15714[(25)]);
var inst_15673__$1 = cljs.core.seq(inst_15654);
var state_15714__$1 = (function (){var statearr_15759 = state_15714;
(statearr_15759[(25)] = inst_15673__$1);

return statearr_15759;
})();
if(inst_15673__$1){
var statearr_15760_15830 = state_15714__$1;
(statearr_15760_15830[(1)] = (33));

} else {
var statearr_15761_15831 = state_15714__$1;
(statearr_15761_15831[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (25))){
var inst_15656 = (state_15714[(20)]);
var inst_15657 = (state_15714[(12)]);
var inst_15659 = (inst_15657 < inst_15656);
var inst_15660 = inst_15659;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15660)){
var statearr_15762_15832 = state_15714__$1;
(statearr_15762_15832[(1)] = (27));

} else {
var statearr_15763_15833 = state_15714__$1;
(statearr_15763_15833[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (34))){
var state_15714__$1 = state_15714;
var statearr_15764_15834 = state_15714__$1;
(statearr_15764_15834[(2)] = null);

(statearr_15764_15834[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (17))){
var state_15714__$1 = state_15714;
var statearr_15765_15835 = state_15714__$1;
(statearr_15765_15835[(2)] = null);

(statearr_15765_15835[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (12))){
var inst_15641 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15766_15836 = state_15714__$1;
(statearr_15766_15836[(2)] = inst_15641);

(statearr_15766_15836[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(4),ch);
} else {
if((state_val_15715 === (23))){
var state_15714__$1 = state_15714;
var statearr_15767_15837 = state_15714__$1;
(statearr_15767_15837[(2)] = null);

(statearr_15767_15837[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (35))){
var inst_15696 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15768_15838 = state_15714__$1;
(statearr_15768_15838[(2)] = inst_15696);

(statearr_15768_15838[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (19))){
var inst_15615 = (state_15714[(7)]);
var inst_15619 = cljs.core.chunk_first(inst_15615);
var inst_15620 = cljs.core.chunk_rest(inst_15615);
var inst_15621 = cljs.core.count(inst_15619);
var inst_15595 = inst_15620;
var inst_15596 = inst_15619;
var inst_15597 = inst_15621;
var inst_15598 = (0);
var state_15714__$1 = (function (){var statearr_15769 = state_15714;
(statearr_15769[(13)] = inst_15597);

(statearr_15769[(15)] = inst_15595);

(statearr_15769[(16)] = inst_15598);

(statearr_15769[(17)] = inst_15596);

return statearr_15769;
})();
var statearr_15770_15839 = state_15714__$1;
(statearr_15770_15839[(2)] = null);

(statearr_15770_15839[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (11))){
var inst_15615 = (state_15714[(7)]);
var inst_15595 = (state_15714[(15)]);
var inst_15615__$1 = cljs.core.seq(inst_15595);
var state_15714__$1 = (function (){var statearr_15771 = state_15714;
(statearr_15771[(7)] = inst_15615__$1);

return statearr_15771;
})();
if(inst_15615__$1){
var statearr_15772_15840 = state_15714__$1;
(statearr_15772_15840[(1)] = (16));

} else {
var statearr_15773_15841 = state_15714__$1;
(statearr_15773_15841[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (9))){
var inst_15643 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15774_15842 = state_15714__$1;
(statearr_15774_15842[(2)] = inst_15643);

(statearr_15774_15842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (5))){
var inst_15593 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15594 = cljs.core.seq(inst_15593);
var inst_15595 = inst_15594;
var inst_15596 = null;
var inst_15597 = (0);
var inst_15598 = (0);
var state_15714__$1 = (function (){var statearr_15775 = state_15714;
(statearr_15775[(13)] = inst_15597);

(statearr_15775[(15)] = inst_15595);

(statearr_15775[(16)] = inst_15598);

(statearr_15775[(17)] = inst_15596);

return statearr_15775;
})();
var statearr_15776_15843 = state_15714__$1;
(statearr_15776_15843[(2)] = null);

(statearr_15776_15843[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (14))){
var state_15714__$1 = state_15714;
var statearr_15777_15844 = state_15714__$1;
(statearr_15777_15844[(2)] = null);

(statearr_15777_15844[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (45))){
var inst_15704 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15778_15845 = state_15714__$1;
(statearr_15778_15845[(2)] = inst_15704);

(statearr_15778_15845[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (26))){
var inst_15646 = (state_15714[(29)]);
var inst_15700 = (state_15714[(2)]);
var inst_15701 = cljs.core.seq(inst_15646);
var state_15714__$1 = (function (){var statearr_15779 = state_15714;
(statearr_15779[(31)] = inst_15700);

return statearr_15779;
})();
if(inst_15701){
var statearr_15780_15846 = state_15714__$1;
(statearr_15780_15846[(1)] = (42));

} else {
var statearr_15781_15847 = state_15714__$1;
(statearr_15781_15847[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (16))){
var inst_15615 = (state_15714[(7)]);
var inst_15617 = cljs.core.chunked_seq_QMARK_(inst_15615);
var state_15714__$1 = state_15714;
if(inst_15617){
var statearr_15782_15848 = state_15714__$1;
(statearr_15782_15848[(1)] = (19));

} else {
var statearr_15783_15849 = state_15714__$1;
(statearr_15783_15849[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (38))){
var inst_15693 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15784_15850 = state_15714__$1;
(statearr_15784_15850[(2)] = inst_15693);

(statearr_15784_15850[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (30))){
var state_15714__$1 = state_15714;
var statearr_15785_15851 = state_15714__$1;
(statearr_15785_15851[(2)] = null);

(statearr_15785_15851[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (10))){
var inst_15598 = (state_15714[(16)]);
var inst_15596 = (state_15714[(17)]);
var inst_15604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15596,inst_15598);
var inst_15605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15604,(0),null);
var inst_15606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15604,(1),null);
var state_15714__$1 = (function (){var statearr_15786 = state_15714;
(statearr_15786[(26)] = inst_15605);

return statearr_15786;
})();
if(cljs.core.truth_(inst_15606)){
var statearr_15787_15852 = state_15714__$1;
(statearr_15787_15852[(1)] = (13));

} else {
var statearr_15788_15853 = state_15714__$1;
(statearr_15788_15853[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (18))){
var inst_15639 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15789_15854 = state_15714__$1;
(statearr_15789_15854[(2)] = inst_15639);

(statearr_15789_15854[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (42))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(45),dchan);
} else {
if((state_val_15715 === (37))){
var inst_15673 = (state_15714[(25)]);
var inst_15586 = (state_15714[(11)]);
var inst_15682 = (state_15714[(23)]);
var inst_15682__$1 = cljs.core.first(inst_15673);
var inst_15683 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15682__$1,inst_15586,done);
var state_15714__$1 = (function (){var statearr_15790 = state_15714;
(statearr_15790[(23)] = inst_15682__$1);

return statearr_15790;
})();
if(cljs.core.truth_(inst_15683)){
var statearr_15791_15855 = state_15714__$1;
(statearr_15791_15855[(1)] = (39));

} else {
var statearr_15792_15856 = state_15714__$1;
(statearr_15792_15856[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15715 === (8))){
var inst_15597 = (state_15714[(13)]);
var inst_15598 = (state_15714[(16)]);
var inst_15600 = (inst_15598 < inst_15597);
var inst_15601 = inst_15600;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15601)){
var statearr_15793_15857 = state_15714__$1;
(statearr_15793_15857[(1)] = (10));

} else {
var statearr_15794_15858 = state_15714__$1;
(statearr_15794_15858[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___15804,cs,m,dchan,dctr,done))
;
return ((function (switch__14408__auto__,c__14522__auto___15804,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14409__auto__ = null;
var cljs$core$async$mult_$_state_machine__14409__auto____0 = (function (){
var statearr_15798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15798[(0)] = cljs$core$async$mult_$_state_machine__14409__auto__);

(statearr_15798[(1)] = (1));

return statearr_15798;
});
var cljs$core$async$mult_$_state_machine__14409__auto____1 = (function (state_15714){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e15799){if((e15799 instanceof Object)){
var ex__14412__auto__ = e15799;
var statearr_15800_15859 = state_15714;
(statearr_15800_15859[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15714);

return cljs.core.cst$kw$recur;
} else {
throw e15799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__15860 = state_15714;
state_15714 = G__15860;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14409__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14409__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14409__auto____0;
cljs$core$async$mult_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14409__auto____1;
return cljs$core$async$mult_$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___15804,cs,m,dchan,dctr,done))
})();
var state__14524__auto__ = (function (){var statearr_15801 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_15801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___15804);

return statearr_15801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___15804,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15861 = [];
var len__7277__auto___15864 = arguments.length;
var i__7278__auto___15865 = (0);
while(true){
if((i__7278__auto___15865 < len__7277__auto___15864)){
args15861.push((arguments[i__7278__auto___15865]));

var G__15866 = (i__7278__auto___15865 + (1));
i__7278__auto___15865 = G__15866;
continue;
} else {
}
break;
}

var G__15863 = args15861.length;
switch (G__15863) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15861.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto__.call(null,m));
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6871__auto__.call(null,m,state_map));
} else {
var m__6871__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6871__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6871__auto__.call(null,m,mode));
} else {
var m__6871__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6871__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7284__auto__ = [];
var len__7277__auto___15878 = arguments.length;
var i__7278__auto___15879 = (0);
while(true){
if((i__7278__auto___15879 < len__7277__auto___15878)){
args__7284__auto__.push((arguments[i__7278__auto___15879]));

var G__15880 = (i__7278__auto___15879 + (1));
i__7278__auto___15879 = G__15880;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((3) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7285__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15872){
var map__15873 = p__15872;
var map__15873__$1 = ((((!((map__15873 == null)))?((((map__15873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15873):map__15873);
var opts = map__15873__$1;
var statearr_15875_15881 = state;
(statearr_15875_15881[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15873,map__15873__$1,opts){
return (function (val){
var statearr_15876_15882 = state;
(statearr_15876_15882[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15873,map__15873__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15877_15883 = state;
(statearr_15877_15883[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15868){
var G__15869 = cljs.core.first(seq15868);
var seq15868__$1 = cljs.core.next(seq15868);
var G__15870 = cljs.core.first(seq15868__$1);
var seq15868__$2 = cljs.core.next(seq15868__$1);
var G__15871 = cljs.core.first(seq15868__$2);
var seq15868__$3 = cljs.core.next(seq15868__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15869,G__15870,G__15871,seq15868__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16050) : cljs.core.atom.call(null,G__16050));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16051 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16052){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16052 = meta16052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16053,meta16052__$1){
var self__ = this;
var _16053__$1 = this;
return (new cljs.core.async.t_cljs$core$async16051(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16052__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16053){
var self__ = this;
var _16053__$1 = this;
return self__.meta16052;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16054_16216 = self__.cs;
var G__16055_16217 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16054_16216,G__16055_16217) : cljs.core.reset_BANG_.call(null,G__16054_16216,G__16055_16217));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16052], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16051";

cljs.core.async.t_cljs$core$async16051.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16051");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16051 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16051(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16052){
return (new cljs.core.async.t_cljs$core$async16051(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16052));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16051(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14522__auto___16218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16153){
var state_val_16154 = (state_16153[(1)]);
if((state_val_16154 === (7))){
var inst_16071 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16155_16219 = state_16153__$1;
(statearr_16155_16219[(2)] = inst_16071);

(statearr_16155_16219[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (20))){
var inst_16083 = (state_16153[(7)]);
var state_16153__$1 = state_16153;
var statearr_16156_16220 = state_16153__$1;
(statearr_16156_16220[(2)] = inst_16083);

(statearr_16156_16220[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (27))){
var state_16153__$1 = state_16153;
var statearr_16157_16221 = state_16153__$1;
(statearr_16157_16221[(2)] = null);

(statearr_16157_16221[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (1))){
var inst_16059 = (state_16153[(8)]);
var inst_16059__$1 = calc_state();
var inst_16061 = (inst_16059__$1 == null);
var inst_16062 = cljs.core.not(inst_16061);
var state_16153__$1 = (function (){var statearr_16158 = state_16153;
(statearr_16158[(8)] = inst_16059__$1);

return statearr_16158;
})();
if(inst_16062){
var statearr_16159_16222 = state_16153__$1;
(statearr_16159_16222[(1)] = (2));

} else {
var statearr_16160_16223 = state_16153__$1;
(statearr_16160_16223[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (24))){
var inst_16106 = (state_16153[(9)]);
var inst_16113 = (state_16153[(10)]);
var inst_16127 = (state_16153[(11)]);
var inst_16127__$1 = (inst_16106.cljs$core$IFn$_invoke$arity$1 ? inst_16106.cljs$core$IFn$_invoke$arity$1(inst_16113) : inst_16106.call(null,inst_16113));
var state_16153__$1 = (function (){var statearr_16161 = state_16153;
(statearr_16161[(11)] = inst_16127__$1);

return statearr_16161;
})();
if(cljs.core.truth_(inst_16127__$1)){
var statearr_16162_16224 = state_16153__$1;
(statearr_16162_16224[(1)] = (29));

} else {
var statearr_16163_16225 = state_16153__$1;
(statearr_16163_16225[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (4))){
var inst_16074 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16074)){
var statearr_16164_16226 = state_16153__$1;
(statearr_16164_16226[(1)] = (8));

} else {
var statearr_16165_16227 = state_16153__$1;
(statearr_16165_16227[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (15))){
var inst_16100 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16100)){
var statearr_16166_16228 = state_16153__$1;
(statearr_16166_16228[(1)] = (19));

} else {
var statearr_16167_16229 = state_16153__$1;
(statearr_16167_16229[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (21))){
var inst_16105 = (state_16153[(12)]);
var inst_16105__$1 = (state_16153[(2)]);
var inst_16106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105__$1,cljs.core.cst$kw$solos);
var inst_16107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105__$1,cljs.core.cst$kw$mutes);
var inst_16108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105__$1,cljs.core.cst$kw$reads);
var state_16153__$1 = (function (){var statearr_16168 = state_16153;
(statearr_16168[(9)] = inst_16106);

(statearr_16168[(12)] = inst_16105__$1);

(statearr_16168[(13)] = inst_16107);

return statearr_16168;
})();
return cljs.core.async.ioc_alts_BANG_(state_16153__$1,(22),inst_16108);
} else {
if((state_val_16154 === (31))){
var inst_16135 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16135)){
var statearr_16169_16230 = state_16153__$1;
(statearr_16169_16230[(1)] = (32));

} else {
var statearr_16170_16231 = state_16153__$1;
(statearr_16170_16231[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (32))){
var inst_16112 = (state_16153[(14)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16153__$1,(35),out,inst_16112);
} else {
if((state_val_16154 === (33))){
var inst_16105 = (state_16153[(12)]);
var inst_16083 = inst_16105;
var state_16153__$1 = (function (){var statearr_16171 = state_16153;
(statearr_16171[(7)] = inst_16083);

return statearr_16171;
})();
var statearr_16172_16232 = state_16153__$1;
(statearr_16172_16232[(2)] = null);

(statearr_16172_16232[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (13))){
var inst_16083 = (state_16153[(7)]);
var inst_16090 = inst_16083.cljs$lang$protocol_mask$partition0$;
var inst_16091 = (inst_16090 & (64));
var inst_16092 = inst_16083.cljs$core$ISeq$;
var inst_16093 = (inst_16091) || (inst_16092);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16093)){
var statearr_16173_16233 = state_16153__$1;
(statearr_16173_16233[(1)] = (16));

} else {
var statearr_16174_16234 = state_16153__$1;
(statearr_16174_16234[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (22))){
var inst_16112 = (state_16153[(14)]);
var inst_16113 = (state_16153[(10)]);
var inst_16111 = (state_16153[(2)]);
var inst_16112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16111,(0),null);
var inst_16113__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16111,(1),null);
var inst_16114 = (inst_16112__$1 == null);
var inst_16115 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16113__$1,change);
var inst_16116 = (inst_16114) || (inst_16115);
var state_16153__$1 = (function (){var statearr_16175 = state_16153;
(statearr_16175[(14)] = inst_16112__$1);

(statearr_16175[(10)] = inst_16113__$1);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16116)){
var statearr_16176_16235 = state_16153__$1;
(statearr_16176_16235[(1)] = (23));

} else {
var statearr_16177_16236 = state_16153__$1;
(statearr_16177_16236[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (36))){
var inst_16105 = (state_16153[(12)]);
var inst_16083 = inst_16105;
var state_16153__$1 = (function (){var statearr_16178 = state_16153;
(statearr_16178[(7)] = inst_16083);

return statearr_16178;
})();
var statearr_16179_16237 = state_16153__$1;
(statearr_16179_16237[(2)] = null);

(statearr_16179_16237[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (29))){
var inst_16127 = (state_16153[(11)]);
var state_16153__$1 = state_16153;
var statearr_16180_16238 = state_16153__$1;
(statearr_16180_16238[(2)] = inst_16127);

(statearr_16180_16238[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (6))){
var state_16153__$1 = state_16153;
var statearr_16181_16239 = state_16153__$1;
(statearr_16181_16239[(2)] = false);

(statearr_16181_16239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (28))){
var inst_16123 = (state_16153[(2)]);
var inst_16124 = calc_state();
var inst_16083 = inst_16124;
var state_16153__$1 = (function (){var statearr_16182 = state_16153;
(statearr_16182[(15)] = inst_16123);

(statearr_16182[(7)] = inst_16083);

return statearr_16182;
})();
var statearr_16183_16240 = state_16153__$1;
(statearr_16183_16240[(2)] = null);

(statearr_16183_16240[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (25))){
var inst_16149 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16184_16241 = state_16153__$1;
(statearr_16184_16241[(2)] = inst_16149);

(statearr_16184_16241[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (34))){
var inst_16147 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16185_16242 = state_16153__$1;
(statearr_16185_16242[(2)] = inst_16147);

(statearr_16185_16242[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (17))){
var state_16153__$1 = state_16153;
var statearr_16186_16243 = state_16153__$1;
(statearr_16186_16243[(2)] = false);

(statearr_16186_16243[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (3))){
var state_16153__$1 = state_16153;
var statearr_16187_16244 = state_16153__$1;
(statearr_16187_16244[(2)] = false);

(statearr_16187_16244[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (12))){
var inst_16151 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16153__$1,inst_16151);
} else {
if((state_val_16154 === (2))){
var inst_16059 = (state_16153[(8)]);
var inst_16064 = inst_16059.cljs$lang$protocol_mask$partition0$;
var inst_16065 = (inst_16064 & (64));
var inst_16066 = inst_16059.cljs$core$ISeq$;
var inst_16067 = (inst_16065) || (inst_16066);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16067)){
var statearr_16188_16245 = state_16153__$1;
(statearr_16188_16245[(1)] = (5));

} else {
var statearr_16189_16246 = state_16153__$1;
(statearr_16189_16246[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (23))){
var inst_16112 = (state_16153[(14)]);
var inst_16118 = (inst_16112 == null);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16118)){
var statearr_16190_16247 = state_16153__$1;
(statearr_16190_16247[(1)] = (26));

} else {
var statearr_16191_16248 = state_16153__$1;
(statearr_16191_16248[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (35))){
var inst_16138 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16138)){
var statearr_16192_16249 = state_16153__$1;
(statearr_16192_16249[(1)] = (36));

} else {
var statearr_16193_16250 = state_16153__$1;
(statearr_16193_16250[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (19))){
var inst_16083 = (state_16153[(7)]);
var inst_16102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16083);
var state_16153__$1 = state_16153;
var statearr_16194_16251 = state_16153__$1;
(statearr_16194_16251[(2)] = inst_16102);

(statearr_16194_16251[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (11))){
var inst_16083 = (state_16153[(7)]);
var inst_16087 = (inst_16083 == null);
var inst_16088 = cljs.core.not(inst_16087);
var state_16153__$1 = state_16153;
if(inst_16088){
var statearr_16195_16252 = state_16153__$1;
(statearr_16195_16252[(1)] = (13));

} else {
var statearr_16196_16253 = state_16153__$1;
(statearr_16196_16253[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (9))){
var inst_16059 = (state_16153[(8)]);
var state_16153__$1 = state_16153;
var statearr_16197_16254 = state_16153__$1;
(statearr_16197_16254[(2)] = inst_16059);

(statearr_16197_16254[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (5))){
var state_16153__$1 = state_16153;
var statearr_16198_16255 = state_16153__$1;
(statearr_16198_16255[(2)] = true);

(statearr_16198_16255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (14))){
var state_16153__$1 = state_16153;
var statearr_16199_16256 = state_16153__$1;
(statearr_16199_16256[(2)] = false);

(statearr_16199_16256[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (26))){
var inst_16113 = (state_16153[(10)]);
var inst_16120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16113);
var state_16153__$1 = state_16153;
var statearr_16200_16257 = state_16153__$1;
(statearr_16200_16257[(2)] = inst_16120);

(statearr_16200_16257[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (16))){
var state_16153__$1 = state_16153;
var statearr_16201_16258 = state_16153__$1;
(statearr_16201_16258[(2)] = true);

(statearr_16201_16258[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (38))){
var inst_16143 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16202_16259 = state_16153__$1;
(statearr_16202_16259[(2)] = inst_16143);

(statearr_16202_16259[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (30))){
var inst_16106 = (state_16153[(9)]);
var inst_16113 = (state_16153[(10)]);
var inst_16107 = (state_16153[(13)]);
var inst_16130 = cljs.core.empty_QMARK_(inst_16106);
var inst_16131 = (inst_16107.cljs$core$IFn$_invoke$arity$1 ? inst_16107.cljs$core$IFn$_invoke$arity$1(inst_16113) : inst_16107.call(null,inst_16113));
var inst_16132 = cljs.core.not(inst_16131);
var inst_16133 = (inst_16130) && (inst_16132);
var state_16153__$1 = state_16153;
var statearr_16203_16260 = state_16153__$1;
(statearr_16203_16260[(2)] = inst_16133);

(statearr_16203_16260[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (10))){
var inst_16059 = (state_16153[(8)]);
var inst_16079 = (state_16153[(2)]);
var inst_16080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16079,cljs.core.cst$kw$solos);
var inst_16081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16079,cljs.core.cst$kw$mutes);
var inst_16082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16079,cljs.core.cst$kw$reads);
var inst_16083 = inst_16059;
var state_16153__$1 = (function (){var statearr_16204 = state_16153;
(statearr_16204[(7)] = inst_16083);

(statearr_16204[(16)] = inst_16080);

(statearr_16204[(17)] = inst_16081);

(statearr_16204[(18)] = inst_16082);

return statearr_16204;
})();
var statearr_16205_16261 = state_16153__$1;
(statearr_16205_16261[(2)] = null);

(statearr_16205_16261[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (18))){
var inst_16097 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16206_16262 = state_16153__$1;
(statearr_16206_16262[(2)] = inst_16097);

(statearr_16206_16262[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (37))){
var state_16153__$1 = state_16153;
var statearr_16207_16263 = state_16153__$1;
(statearr_16207_16263[(2)] = null);

(statearr_16207_16263[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (8))){
var inst_16059 = (state_16153[(8)]);
var inst_16076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16059);
var state_16153__$1 = state_16153;
var statearr_16208_16264 = state_16153__$1;
(statearr_16208_16264[(2)] = inst_16076);

(statearr_16208_16264[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14408__auto__,c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14409__auto__ = null;
var cljs$core$async$mix_$_state_machine__14409__auto____0 = (function (){
var statearr_16212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16212[(0)] = cljs$core$async$mix_$_state_machine__14409__auto__);

(statearr_16212[(1)] = (1));

return statearr_16212;
});
var cljs$core$async$mix_$_state_machine__14409__auto____1 = (function (state_16153){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16153);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16213){if((e16213 instanceof Object)){
var ex__14412__auto__ = e16213;
var statearr_16214_16265 = state_16153;
(statearr_16214_16265[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16153);

return cljs.core.cst$kw$recur;
} else {
throw e16213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16266 = state_16153;
state_16153 = G__16266;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14409__auto__ = function(state_16153){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14409__auto____1.call(this,state_16153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14409__auto____0;
cljs$core$async$mix_$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14409__auto____1;
return cljs$core$async$mix_$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14524__auto__ = (function (){var statearr_16215 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16218);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6871__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6871__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6871__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6871__auto__.call(null,p,v,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6871__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16267 = [];
var len__7277__auto___16270 = arguments.length;
var i__7278__auto___16271 = (0);
while(true){
if((i__7278__auto___16271 < len__7277__auto___16270)){
args16267.push((arguments[i__7278__auto___16271]));

var G__16272 = (i__7278__auto___16271 + (1));
i__7278__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var G__16269 = args16267.length;
switch (G__16269) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16267.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6871__auto__.call(null,p));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6871__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6871__auto__.call(null,p,v));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6871__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16275 = [];
var len__7277__auto___16403 = arguments.length;
var i__7278__auto___16404 = (0);
while(true){
if((i__7278__auto___16404 < len__7277__auto___16403)){
args16275.push((arguments[i__7278__auto___16404]));

var G__16405 = (i__7278__auto___16404 + (1));
i__7278__auto___16404 = G__16405;
continue;
} else {
}
break;
}

var G__16277 = args16275.length;
switch (G__16277) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16275.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16278 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16278) : cljs.core.atom.call(null,G__16278));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6207__auto__,mults){
return (function (p1__16274_SHARP_){
if(cljs.core.truth_((p1__16274_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16274_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16274_SHARP_.call(null,topic)))){
return p1__16274_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16274_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6207__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16279 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16280){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16280 = meta16280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16281,meta16280__$1){
var self__ = this;
var _16281__$1 = this;
return (new cljs.core.async.t_cljs$core$async16279(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16280__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16281){
var self__ = this;
var _16281__$1 = this;
return self__.meta16280;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16282 = self__.mults;
var G__16283 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16282,G__16283) : cljs.core.reset_BANG_.call(null,G__16282,G__16283));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16280], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16279";

cljs.core.async.t_cljs$core$async16279.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16279");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16279 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16280){
return (new cljs.core.async.t_cljs$core$async16279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16280));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16279(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14522__auto___16407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16407,mults,ensure_mult,p){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16407,mults,ensure_mult,p){
return (function (state_16355){
var state_val_16356 = (state_16355[(1)]);
if((state_val_16356 === (7))){
var inst_16351 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16357_16408 = state_16355__$1;
(statearr_16357_16408[(2)] = inst_16351);

(statearr_16357_16408[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (20))){
var state_16355__$1 = state_16355;
var statearr_16358_16409 = state_16355__$1;
(statearr_16358_16409[(2)] = null);

(statearr_16358_16409[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (1))){
var state_16355__$1 = state_16355;
var statearr_16359_16410 = state_16355__$1;
(statearr_16359_16410[(2)] = null);

(statearr_16359_16410[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (24))){
var inst_16334 = (state_16355[(7)]);
var inst_16343 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16334);
var state_16355__$1 = state_16355;
var statearr_16360_16411 = state_16355__$1;
(statearr_16360_16411[(2)] = inst_16343);

(statearr_16360_16411[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (4))){
var inst_16286 = (state_16355[(8)]);
var inst_16286__$1 = (state_16355[(2)]);
var inst_16287 = (inst_16286__$1 == null);
var state_16355__$1 = (function (){var statearr_16361 = state_16355;
(statearr_16361[(8)] = inst_16286__$1);

return statearr_16361;
})();
if(cljs.core.truth_(inst_16287)){
var statearr_16362_16412 = state_16355__$1;
(statearr_16362_16412[(1)] = (5));

} else {
var statearr_16363_16413 = state_16355__$1;
(statearr_16363_16413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (15))){
var inst_16328 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16364_16414 = state_16355__$1;
(statearr_16364_16414[(2)] = inst_16328);

(statearr_16364_16414[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (21))){
var inst_16348 = (state_16355[(2)]);
var state_16355__$1 = (function (){var statearr_16365 = state_16355;
(statearr_16365[(9)] = inst_16348);

return statearr_16365;
})();
var statearr_16366_16415 = state_16355__$1;
(statearr_16366_16415[(2)] = null);

(statearr_16366_16415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (13))){
var inst_16310 = (state_16355[(10)]);
var inst_16312 = cljs.core.chunked_seq_QMARK_(inst_16310);
var state_16355__$1 = state_16355;
if(inst_16312){
var statearr_16367_16416 = state_16355__$1;
(statearr_16367_16416[(1)] = (16));

} else {
var statearr_16368_16417 = state_16355__$1;
(statearr_16368_16417[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (22))){
var inst_16340 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
if(cljs.core.truth_(inst_16340)){
var statearr_16369_16418 = state_16355__$1;
(statearr_16369_16418[(1)] = (23));

} else {
var statearr_16370_16419 = state_16355__$1;
(statearr_16370_16419[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (6))){
var inst_16286 = (state_16355[(8)]);
var inst_16336 = (state_16355[(11)]);
var inst_16334 = (state_16355[(7)]);
var inst_16334__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16286) : topic_fn.call(null,inst_16286));
var inst_16335 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16336__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16335,inst_16334__$1);
var state_16355__$1 = (function (){var statearr_16371 = state_16355;
(statearr_16371[(11)] = inst_16336__$1);

(statearr_16371[(7)] = inst_16334__$1);

return statearr_16371;
})();
if(cljs.core.truth_(inst_16336__$1)){
var statearr_16372_16420 = state_16355__$1;
(statearr_16372_16420[(1)] = (19));

} else {
var statearr_16373_16421 = state_16355__$1;
(statearr_16373_16421[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (25))){
var inst_16345 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16374_16422 = state_16355__$1;
(statearr_16374_16422[(2)] = inst_16345);

(statearr_16374_16422[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (17))){
var inst_16310 = (state_16355[(10)]);
var inst_16319 = cljs.core.first(inst_16310);
var inst_16320 = cljs.core.async.muxch_STAR_(inst_16319);
var inst_16321 = cljs.core.async.close_BANG_(inst_16320);
var inst_16322 = cljs.core.next(inst_16310);
var inst_16296 = inst_16322;
var inst_16297 = null;
var inst_16298 = (0);
var inst_16299 = (0);
var state_16355__$1 = (function (){var statearr_16375 = state_16355;
(statearr_16375[(12)] = inst_16297);

(statearr_16375[(13)] = inst_16321);

(statearr_16375[(14)] = inst_16298);

(statearr_16375[(15)] = inst_16299);

(statearr_16375[(16)] = inst_16296);

return statearr_16375;
})();
var statearr_16376_16423 = state_16355__$1;
(statearr_16376_16423[(2)] = null);

(statearr_16376_16423[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (3))){
var inst_16353 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16355__$1,inst_16353);
} else {
if((state_val_16356 === (12))){
var inst_16330 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16377_16424 = state_16355__$1;
(statearr_16377_16424[(2)] = inst_16330);

(statearr_16377_16424[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (2))){
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16355__$1,(4),ch);
} else {
if((state_val_16356 === (23))){
var state_16355__$1 = state_16355;
var statearr_16378_16425 = state_16355__$1;
(statearr_16378_16425[(2)] = null);

(statearr_16378_16425[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (19))){
var inst_16286 = (state_16355[(8)]);
var inst_16336 = (state_16355[(11)]);
var inst_16338 = cljs.core.async.muxch_STAR_(inst_16336);
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16355__$1,(22),inst_16338,inst_16286);
} else {
if((state_val_16356 === (11))){
var inst_16310 = (state_16355[(10)]);
var inst_16296 = (state_16355[(16)]);
var inst_16310__$1 = cljs.core.seq(inst_16296);
var state_16355__$1 = (function (){var statearr_16379 = state_16355;
(statearr_16379[(10)] = inst_16310__$1);

return statearr_16379;
})();
if(inst_16310__$1){
var statearr_16380_16426 = state_16355__$1;
(statearr_16380_16426[(1)] = (13));

} else {
var statearr_16381_16427 = state_16355__$1;
(statearr_16381_16427[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (9))){
var inst_16332 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16382_16428 = state_16355__$1;
(statearr_16382_16428[(2)] = inst_16332);

(statearr_16382_16428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (5))){
var inst_16293 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16294 = cljs.core.vals(inst_16293);
var inst_16295 = cljs.core.seq(inst_16294);
var inst_16296 = inst_16295;
var inst_16297 = null;
var inst_16298 = (0);
var inst_16299 = (0);
var state_16355__$1 = (function (){var statearr_16383 = state_16355;
(statearr_16383[(12)] = inst_16297);

(statearr_16383[(14)] = inst_16298);

(statearr_16383[(15)] = inst_16299);

(statearr_16383[(16)] = inst_16296);

return statearr_16383;
})();
var statearr_16384_16429 = state_16355__$1;
(statearr_16384_16429[(2)] = null);

(statearr_16384_16429[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (14))){
var state_16355__$1 = state_16355;
var statearr_16388_16430 = state_16355__$1;
(statearr_16388_16430[(2)] = null);

(statearr_16388_16430[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (16))){
var inst_16310 = (state_16355[(10)]);
var inst_16314 = cljs.core.chunk_first(inst_16310);
var inst_16315 = cljs.core.chunk_rest(inst_16310);
var inst_16316 = cljs.core.count(inst_16314);
var inst_16296 = inst_16315;
var inst_16297 = inst_16314;
var inst_16298 = inst_16316;
var inst_16299 = (0);
var state_16355__$1 = (function (){var statearr_16389 = state_16355;
(statearr_16389[(12)] = inst_16297);

(statearr_16389[(14)] = inst_16298);

(statearr_16389[(15)] = inst_16299);

(statearr_16389[(16)] = inst_16296);

return statearr_16389;
})();
var statearr_16390_16431 = state_16355__$1;
(statearr_16390_16431[(2)] = null);

(statearr_16390_16431[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (10))){
var inst_16297 = (state_16355[(12)]);
var inst_16298 = (state_16355[(14)]);
var inst_16299 = (state_16355[(15)]);
var inst_16296 = (state_16355[(16)]);
var inst_16304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16297,inst_16299);
var inst_16305 = cljs.core.async.muxch_STAR_(inst_16304);
var inst_16306 = cljs.core.async.close_BANG_(inst_16305);
var inst_16307 = (inst_16299 + (1));
var tmp16385 = inst_16297;
var tmp16386 = inst_16298;
var tmp16387 = inst_16296;
var inst_16296__$1 = tmp16387;
var inst_16297__$1 = tmp16385;
var inst_16298__$1 = tmp16386;
var inst_16299__$1 = inst_16307;
var state_16355__$1 = (function (){var statearr_16391 = state_16355;
(statearr_16391[(12)] = inst_16297__$1);

(statearr_16391[(17)] = inst_16306);

(statearr_16391[(14)] = inst_16298__$1);

(statearr_16391[(15)] = inst_16299__$1);

(statearr_16391[(16)] = inst_16296__$1);

return statearr_16391;
})();
var statearr_16392_16432 = state_16355__$1;
(statearr_16392_16432[(2)] = null);

(statearr_16392_16432[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (18))){
var inst_16325 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16393_16433 = state_16355__$1;
(statearr_16393_16433[(2)] = inst_16325);

(statearr_16393_16433[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16356 === (8))){
var inst_16298 = (state_16355[(14)]);
var inst_16299 = (state_16355[(15)]);
var inst_16301 = (inst_16299 < inst_16298);
var inst_16302 = inst_16301;
var state_16355__$1 = state_16355;
if(cljs.core.truth_(inst_16302)){
var statearr_16394_16434 = state_16355__$1;
(statearr_16394_16434[(1)] = (10));

} else {
var statearr_16395_16435 = state_16355__$1;
(statearr_16395_16435[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16407,mults,ensure_mult,p))
;
return ((function (switch__14408__auto__,c__14522__auto___16407,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_16399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16399[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_16399[(1)] = (1));

return statearr_16399;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_16355){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16355);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16400){if((e16400 instanceof Object)){
var ex__14412__auto__ = e16400;
var statearr_16401_16436 = state_16355;
(statearr_16401_16436[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16355);

return cljs.core.cst$kw$recur;
} else {
throw e16400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16437 = state_16355;
state_16355 = G__16437;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_16355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_16355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16407,mults,ensure_mult,p))
})();
var state__14524__auto__ = (function (){var statearr_16402 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16407);

return statearr_16402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16407,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16438 = [];
var len__7277__auto___16441 = arguments.length;
var i__7278__auto___16442 = (0);
while(true){
if((i__7278__auto___16442 < len__7277__auto___16441)){
args16438.push((arguments[i__7278__auto___16442]));

var G__16443 = (i__7278__auto___16442 + (1));
i__7278__auto___16442 = G__16443;
continue;
} else {
}
break;
}

var G__16440 = args16438.length;
switch (G__16440) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16438.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16445 = [];
var len__7277__auto___16448 = arguments.length;
var i__7278__auto___16449 = (0);
while(true){
if((i__7278__auto___16449 < len__7277__auto___16448)){
args16445.push((arguments[i__7278__auto___16449]));

var G__16450 = (i__7278__auto___16449 + (1));
i__7278__auto___16449 = G__16450;
continue;
} else {
}
break;
}

var G__16447 = args16445.length;
switch (G__16447) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16445.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16452 = [];
var len__7277__auto___16523 = arguments.length;
var i__7278__auto___16524 = (0);
while(true){
if((i__7278__auto___16524 < len__7277__auto___16523)){
args16452.push((arguments[i__7278__auto___16524]));

var G__16525 = (i__7278__auto___16524 + (1));
i__7278__auto___16524 = G__16525;
continue;
} else {
}
break;
}

var G__16454 = args16452.length;
switch (G__16454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16452.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14522__auto___16527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16493){
var state_val_16494 = (state_16493[(1)]);
if((state_val_16494 === (7))){
var state_16493__$1 = state_16493;
var statearr_16495_16528 = state_16493__$1;
(statearr_16495_16528[(2)] = null);

(statearr_16495_16528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (1))){
var state_16493__$1 = state_16493;
var statearr_16496_16529 = state_16493__$1;
(statearr_16496_16529[(2)] = null);

(statearr_16496_16529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (4))){
var inst_16457 = (state_16493[(7)]);
var inst_16459 = (inst_16457 < cnt);
var state_16493__$1 = state_16493;
if(cljs.core.truth_(inst_16459)){
var statearr_16497_16530 = state_16493__$1;
(statearr_16497_16530[(1)] = (6));

} else {
var statearr_16498_16531 = state_16493__$1;
(statearr_16498_16531[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (15))){
var inst_16489 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
var statearr_16499_16532 = state_16493__$1;
(statearr_16499_16532[(2)] = inst_16489);

(statearr_16499_16532[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (13))){
var inst_16482 = cljs.core.async.close_BANG_(out);
var state_16493__$1 = state_16493;
var statearr_16500_16533 = state_16493__$1;
(statearr_16500_16533[(2)] = inst_16482);

(statearr_16500_16533[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (6))){
var state_16493__$1 = state_16493;
var statearr_16501_16534 = state_16493__$1;
(statearr_16501_16534[(2)] = null);

(statearr_16501_16534[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (3))){
var inst_16491 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16493__$1,inst_16491);
} else {
if((state_val_16494 === (12))){
var inst_16479 = (state_16493[(8)]);
var inst_16479__$1 = (state_16493[(2)]);
var inst_16480 = cljs.core.some(cljs.core.nil_QMARK_,inst_16479__$1);
var state_16493__$1 = (function (){var statearr_16502 = state_16493;
(statearr_16502[(8)] = inst_16479__$1);

return statearr_16502;
})();
if(cljs.core.truth_(inst_16480)){
var statearr_16503_16535 = state_16493__$1;
(statearr_16503_16535[(1)] = (13));

} else {
var statearr_16504_16536 = state_16493__$1;
(statearr_16504_16536[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (2))){
var inst_16456 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16457 = (0);
var state_16493__$1 = (function (){var statearr_16505 = state_16493;
(statearr_16505[(7)] = inst_16457);

(statearr_16505[(9)] = inst_16456);

return statearr_16505;
})();
var statearr_16506_16537 = state_16493__$1;
(statearr_16506_16537[(2)] = null);

(statearr_16506_16537[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (11))){
var inst_16457 = (state_16493[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16493,(10),Object,null,(9));
var inst_16466 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16457) : chs__$1.call(null,inst_16457));
var inst_16467 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16457) : done.call(null,inst_16457));
var inst_16468 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16466,inst_16467);
var state_16493__$1 = state_16493;
var statearr_16507_16538 = state_16493__$1;
(statearr_16507_16538[(2)] = inst_16468);


cljs.core.async.impl.ioc_helpers.process_exception(state_16493__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (9))){
var inst_16457 = (state_16493[(7)]);
var inst_16470 = (state_16493[(2)]);
var inst_16471 = (inst_16457 + (1));
var inst_16457__$1 = inst_16471;
var state_16493__$1 = (function (){var statearr_16508 = state_16493;
(statearr_16508[(10)] = inst_16470);

(statearr_16508[(7)] = inst_16457__$1);

return statearr_16508;
})();
var statearr_16509_16539 = state_16493__$1;
(statearr_16509_16539[(2)] = null);

(statearr_16509_16539[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (5))){
var inst_16477 = (state_16493[(2)]);
var state_16493__$1 = (function (){var statearr_16510 = state_16493;
(statearr_16510[(11)] = inst_16477);

return statearr_16510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16493__$1,(12),dchan);
} else {
if((state_val_16494 === (14))){
var inst_16479 = (state_16493[(8)]);
var inst_16484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16479);
var state_16493__$1 = state_16493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16493__$1,(16),out,inst_16484);
} else {
if((state_val_16494 === (16))){
var inst_16486 = (state_16493[(2)]);
var state_16493__$1 = (function (){var statearr_16511 = state_16493;
(statearr_16511[(12)] = inst_16486);

return statearr_16511;
})();
var statearr_16512_16540 = state_16493__$1;
(statearr_16512_16540[(2)] = null);

(statearr_16512_16540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (10))){
var inst_16461 = (state_16493[(2)]);
var inst_16462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16493__$1 = (function (){var statearr_16513 = state_16493;
(statearr_16513[(13)] = inst_16461);

return statearr_16513;
})();
var statearr_16514_16541 = state_16493__$1;
(statearr_16514_16541[(2)] = inst_16462);


cljs.core.async.impl.ioc_helpers.process_exception(state_16493__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16494 === (8))){
var inst_16475 = (state_16493[(2)]);
var state_16493__$1 = state_16493;
var statearr_16515_16542 = state_16493__$1;
(statearr_16515_16542[(2)] = inst_16475);

(statearr_16515_16542[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14408__auto__,c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_16519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16519[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_16519[(1)] = (1));

return statearr_16519;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_16493){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16493);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16520){if((e16520 instanceof Object)){
var ex__14412__auto__ = e16520;
var statearr_16521_16543 = state_16493;
(statearr_16521_16543[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16493);

return cljs.core.cst$kw$recur;
} else {
throw e16520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16544 = state_16493;
state_16493 = G__16544;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_16493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_16493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14524__auto__ = (function (){var statearr_16522 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16527);

return statearr_16522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16527,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16546 = [];
var len__7277__auto___16602 = arguments.length;
var i__7278__auto___16603 = (0);
while(true){
if((i__7278__auto___16603 < len__7277__auto___16602)){
args16546.push((arguments[i__7278__auto___16603]));

var G__16604 = (i__7278__auto___16603 + (1));
i__7278__auto___16603 = G__16604;
continue;
} else {
}
break;
}

var G__16548 = args16546.length;
switch (G__16548) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16546.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___16606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16606,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16606,out){
return (function (state_16578){
var state_val_16579 = (state_16578[(1)]);
if((state_val_16579 === (7))){
var inst_16558 = (state_16578[(7)]);
var inst_16557 = (state_16578[(8)]);
var inst_16557__$1 = (state_16578[(2)]);
var inst_16558__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16557__$1,(0),null);
var inst_16559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16557__$1,(1),null);
var inst_16560 = (inst_16558__$1 == null);
var state_16578__$1 = (function (){var statearr_16580 = state_16578;
(statearr_16580[(7)] = inst_16558__$1);

(statearr_16580[(8)] = inst_16557__$1);

(statearr_16580[(9)] = inst_16559);

return statearr_16580;
})();
if(cljs.core.truth_(inst_16560)){
var statearr_16581_16607 = state_16578__$1;
(statearr_16581_16607[(1)] = (8));

} else {
var statearr_16582_16608 = state_16578__$1;
(statearr_16582_16608[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (1))){
var inst_16549 = cljs.core.vec(chs);
var inst_16550 = inst_16549;
var state_16578__$1 = (function (){var statearr_16583 = state_16578;
(statearr_16583[(10)] = inst_16550);

return statearr_16583;
})();
var statearr_16584_16609 = state_16578__$1;
(statearr_16584_16609[(2)] = null);

(statearr_16584_16609[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (4))){
var inst_16550 = (state_16578[(10)]);
var state_16578__$1 = state_16578;
return cljs.core.async.ioc_alts_BANG_(state_16578__$1,(7),inst_16550);
} else {
if((state_val_16579 === (6))){
var inst_16574 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
var statearr_16585_16610 = state_16578__$1;
(statearr_16585_16610[(2)] = inst_16574);

(statearr_16585_16610[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (3))){
var inst_16576 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16578__$1,inst_16576);
} else {
if((state_val_16579 === (2))){
var inst_16550 = (state_16578[(10)]);
var inst_16552 = cljs.core.count(inst_16550);
var inst_16553 = (inst_16552 > (0));
var state_16578__$1 = state_16578;
if(cljs.core.truth_(inst_16553)){
var statearr_16587_16611 = state_16578__$1;
(statearr_16587_16611[(1)] = (4));

} else {
var statearr_16588_16612 = state_16578__$1;
(statearr_16588_16612[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (11))){
var inst_16550 = (state_16578[(10)]);
var inst_16567 = (state_16578[(2)]);
var tmp16586 = inst_16550;
var inst_16550__$1 = tmp16586;
var state_16578__$1 = (function (){var statearr_16589 = state_16578;
(statearr_16589[(10)] = inst_16550__$1);

(statearr_16589[(11)] = inst_16567);

return statearr_16589;
})();
var statearr_16590_16613 = state_16578__$1;
(statearr_16590_16613[(2)] = null);

(statearr_16590_16613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (9))){
var inst_16558 = (state_16578[(7)]);
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16578__$1,(11),out,inst_16558);
} else {
if((state_val_16579 === (5))){
var inst_16572 = cljs.core.async.close_BANG_(out);
var state_16578__$1 = state_16578;
var statearr_16591_16614 = state_16578__$1;
(statearr_16591_16614[(2)] = inst_16572);

(statearr_16591_16614[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (10))){
var inst_16570 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
var statearr_16592_16615 = state_16578__$1;
(statearr_16592_16615[(2)] = inst_16570);

(statearr_16592_16615[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16579 === (8))){
var inst_16550 = (state_16578[(10)]);
var inst_16558 = (state_16578[(7)]);
var inst_16557 = (state_16578[(8)]);
var inst_16559 = (state_16578[(9)]);
var inst_16562 = (function (){var cs = inst_16550;
var vec__16555 = inst_16557;
var v = inst_16558;
var c = inst_16559;
return ((function (cs,vec__16555,v,c,inst_16550,inst_16558,inst_16557,inst_16559,state_val_16579,c__14522__auto___16606,out){
return (function (p1__16545_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16545_SHARP_);
});
;})(cs,vec__16555,v,c,inst_16550,inst_16558,inst_16557,inst_16559,state_val_16579,c__14522__auto___16606,out))
})();
var inst_16563 = cljs.core.filterv(inst_16562,inst_16550);
var inst_16550__$1 = inst_16563;
var state_16578__$1 = (function (){var statearr_16593 = state_16578;
(statearr_16593[(10)] = inst_16550__$1);

return statearr_16593;
})();
var statearr_16594_16616 = state_16578__$1;
(statearr_16594_16616[(2)] = null);

(statearr_16594_16616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16606,out))
;
return ((function (switch__14408__auto__,c__14522__auto___16606,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_16598 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16598[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_16598[(1)] = (1));

return statearr_16598;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_16578){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16578);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16599){if((e16599 instanceof Object)){
var ex__14412__auto__ = e16599;
var statearr_16600_16617 = state_16578;
(statearr_16600_16617[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16578);

return cljs.core.cst$kw$recur;
} else {
throw e16599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16618 = state_16578;
state_16578 = G__16618;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_16578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_16578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16606,out))
})();
var state__14524__auto__ = (function (){var statearr_16601 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16606);

return statearr_16601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16606,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16619 = [];
var len__7277__auto___16668 = arguments.length;
var i__7278__auto___16669 = (0);
while(true){
if((i__7278__auto___16669 < len__7277__auto___16668)){
args16619.push((arguments[i__7278__auto___16669]));

var G__16670 = (i__7278__auto___16669 + (1));
i__7278__auto___16669 = G__16670;
continue;
} else {
}
break;
}

var G__16621 = args16619.length;
switch (G__16621) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16619.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___16672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16672,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16672,out){
return (function (state_16645){
var state_val_16646 = (state_16645[(1)]);
if((state_val_16646 === (7))){
var inst_16627 = (state_16645[(7)]);
var inst_16627__$1 = (state_16645[(2)]);
var inst_16628 = (inst_16627__$1 == null);
var inst_16629 = cljs.core.not(inst_16628);
var state_16645__$1 = (function (){var statearr_16647 = state_16645;
(statearr_16647[(7)] = inst_16627__$1);

return statearr_16647;
})();
if(inst_16629){
var statearr_16648_16673 = state_16645__$1;
(statearr_16648_16673[(1)] = (8));

} else {
var statearr_16649_16674 = state_16645__$1;
(statearr_16649_16674[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (1))){
var inst_16622 = (0);
var state_16645__$1 = (function (){var statearr_16650 = state_16645;
(statearr_16650[(8)] = inst_16622);

return statearr_16650;
})();
var statearr_16651_16675 = state_16645__$1;
(statearr_16651_16675[(2)] = null);

(statearr_16651_16675[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (4))){
var state_16645__$1 = state_16645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16645__$1,(7),ch);
} else {
if((state_val_16646 === (6))){
var inst_16640 = (state_16645[(2)]);
var state_16645__$1 = state_16645;
var statearr_16652_16676 = state_16645__$1;
(statearr_16652_16676[(2)] = inst_16640);

(statearr_16652_16676[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (3))){
var inst_16642 = (state_16645[(2)]);
var inst_16643 = cljs.core.async.close_BANG_(out);
var state_16645__$1 = (function (){var statearr_16653 = state_16645;
(statearr_16653[(9)] = inst_16642);

return statearr_16653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16645__$1,inst_16643);
} else {
if((state_val_16646 === (2))){
var inst_16622 = (state_16645[(8)]);
var inst_16624 = (inst_16622 < n);
var state_16645__$1 = state_16645;
if(cljs.core.truth_(inst_16624)){
var statearr_16654_16677 = state_16645__$1;
(statearr_16654_16677[(1)] = (4));

} else {
var statearr_16655_16678 = state_16645__$1;
(statearr_16655_16678[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (11))){
var inst_16622 = (state_16645[(8)]);
var inst_16632 = (state_16645[(2)]);
var inst_16633 = (inst_16622 + (1));
var inst_16622__$1 = inst_16633;
var state_16645__$1 = (function (){var statearr_16656 = state_16645;
(statearr_16656[(8)] = inst_16622__$1);

(statearr_16656[(10)] = inst_16632);

return statearr_16656;
})();
var statearr_16657_16679 = state_16645__$1;
(statearr_16657_16679[(2)] = null);

(statearr_16657_16679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (9))){
var state_16645__$1 = state_16645;
var statearr_16658_16680 = state_16645__$1;
(statearr_16658_16680[(2)] = null);

(statearr_16658_16680[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (5))){
var state_16645__$1 = state_16645;
var statearr_16659_16681 = state_16645__$1;
(statearr_16659_16681[(2)] = null);

(statearr_16659_16681[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (10))){
var inst_16637 = (state_16645[(2)]);
var state_16645__$1 = state_16645;
var statearr_16660_16682 = state_16645__$1;
(statearr_16660_16682[(2)] = inst_16637);

(statearr_16660_16682[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16646 === (8))){
var inst_16627 = (state_16645[(7)]);
var state_16645__$1 = state_16645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16645__$1,(11),out,inst_16627);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16672,out))
;
return ((function (switch__14408__auto__,c__14522__auto___16672,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_16664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16664[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_16664[(1)] = (1));

return statearr_16664;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_16645){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16645);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16665){if((e16665 instanceof Object)){
var ex__14412__auto__ = e16665;
var statearr_16666_16683 = state_16645;
(statearr_16666_16683[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16645);

return cljs.core.cst$kw$recur;
} else {
throw e16665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16684 = state_16645;
state_16645 = G__16684;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_16645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_16645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16672,out))
})();
var state__14524__auto__ = (function (){var statearr_16667 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16672);

return statearr_16667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16672,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16694 = (function (map_LT_,f,ch,meta16695){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16695 = meta16695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16696,meta16695__$1){
var self__ = this;
var _16696__$1 = this;
return (new cljs.core.async.t_cljs$core$async16694(self__.map_LT_,self__.f,self__.ch,meta16695__$1));
});

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16696){
var self__ = this;
var _16696__$1 = this;
return self__.meta16695;
});

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16697 = (function (map_LT_,f,ch,meta16695,_,fn1,meta16698){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16695 = meta16695;
this._ = _;
this.fn1 = fn1;
this.meta16698 = meta16698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16699,meta16698__$1){
var self__ = this;
var _16699__$1 = this;
return (new cljs.core.async.t_cljs$core$async16697(self__.map_LT_,self__.f,self__.ch,self__.meta16695,self__._,self__.fn1,meta16698__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16699){
var self__ = this;
var _16699__$1 = this;
return self__.meta16698;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16685_SHARP_){
var G__16700 = (((p1__16685_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16685_SHARP_) : self__.f.call(null,p1__16685_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16700) : f1.call(null,G__16700));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16697.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16695,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16694], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16698], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16697";

cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16697");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16697 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16697(map_LT___$1,f__$1,ch__$1,meta16695__$1,___$2,fn1__$1,meta16698){
return (new cljs.core.async.t_cljs$core$async16697(map_LT___$1,f__$1,ch__$1,meta16695__$1,___$2,fn1__$1,meta16698));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16697(self__.map_LT_,self__.f,self__.ch,self__.meta16695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6195__auto__ = ret;
if(cljs.core.truth_(and__6195__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6195__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16701 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16701) : self__.f.call(null,G__16701));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16695], null);
});

cljs.core.async.t_cljs$core$async16694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16694";

cljs.core.async.t_cljs$core$async16694.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16694");
});

cljs.core.async.__GT_t_cljs$core$async16694 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16694(map_LT___$1,f__$1,ch__$1,meta16695){
return (new cljs.core.async.t_cljs$core$async16694(map_LT___$1,f__$1,ch__$1,meta16695));
});

}

return (new cljs.core.async.t_cljs$core$async16694(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16705 = (function (map_GT_,f,ch,meta16706){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16706 = meta16706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16707,meta16706__$1){
var self__ = this;
var _16707__$1 = this;
return (new cljs.core.async.t_cljs$core$async16705(self__.map_GT_,self__.f,self__.ch,meta16706__$1));
});

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16707){
var self__ = this;
var _16707__$1 = this;
return self__.meta16706;
});

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16706], null);
});

cljs.core.async.t_cljs$core$async16705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16705";

cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16705");
});

cljs.core.async.__GT_t_cljs$core$async16705 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16705(map_GT___$1,f__$1,ch__$1,meta16706){
return (new cljs.core.async.t_cljs$core$async16705(map_GT___$1,f__$1,ch__$1,meta16706));
});

}

return (new cljs.core.async.t_cljs$core$async16705(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16711 = (function (filter_GT_,p,ch,meta16712){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16712 = meta16712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16713,meta16712__$1){
var self__ = this;
var _16713__$1 = this;
return (new cljs.core.async.t_cljs$core$async16711(self__.filter_GT_,self__.p,self__.ch,meta16712__$1));
});

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16713){
var self__ = this;
var _16713__$1 = this;
return self__.meta16712;
});

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16712], null);
});

cljs.core.async.t_cljs$core$async16711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16711";

cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16711");
});

cljs.core.async.__GT_t_cljs$core$async16711 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16711(filter_GT___$1,p__$1,ch__$1,meta16712){
return (new cljs.core.async.t_cljs$core$async16711(filter_GT___$1,p__$1,ch__$1,meta16712));
});

}

return (new cljs.core.async.t_cljs$core$async16711(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16714 = [];
var len__7277__auto___16758 = arguments.length;
var i__7278__auto___16759 = (0);
while(true){
if((i__7278__auto___16759 < len__7277__auto___16758)){
args16714.push((arguments[i__7278__auto___16759]));

var G__16760 = (i__7278__auto___16759 + (1));
i__7278__auto___16759 = G__16760;
continue;
} else {
}
break;
}

var G__16716 = args16714.length;
switch (G__16716) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16714.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___16762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___16762,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___16762,out){
return (function (state_16737){
var state_val_16738 = (state_16737[(1)]);
if((state_val_16738 === (7))){
var inst_16733 = (state_16737[(2)]);
var state_16737__$1 = state_16737;
var statearr_16739_16763 = state_16737__$1;
(statearr_16739_16763[(2)] = inst_16733);

(statearr_16739_16763[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (1))){
var state_16737__$1 = state_16737;
var statearr_16740_16764 = state_16737__$1;
(statearr_16740_16764[(2)] = null);

(statearr_16740_16764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (4))){
var inst_16719 = (state_16737[(7)]);
var inst_16719__$1 = (state_16737[(2)]);
var inst_16720 = (inst_16719__$1 == null);
var state_16737__$1 = (function (){var statearr_16741 = state_16737;
(statearr_16741[(7)] = inst_16719__$1);

return statearr_16741;
})();
if(cljs.core.truth_(inst_16720)){
var statearr_16742_16765 = state_16737__$1;
(statearr_16742_16765[(1)] = (5));

} else {
var statearr_16743_16766 = state_16737__$1;
(statearr_16743_16766[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (6))){
var inst_16719 = (state_16737[(7)]);
var inst_16724 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16719) : p.call(null,inst_16719));
var state_16737__$1 = state_16737;
if(cljs.core.truth_(inst_16724)){
var statearr_16744_16767 = state_16737__$1;
(statearr_16744_16767[(1)] = (8));

} else {
var statearr_16745_16768 = state_16737__$1;
(statearr_16745_16768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (3))){
var inst_16735 = (state_16737[(2)]);
var state_16737__$1 = state_16737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16737__$1,inst_16735);
} else {
if((state_val_16738 === (2))){
var state_16737__$1 = state_16737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16737__$1,(4),ch);
} else {
if((state_val_16738 === (11))){
var inst_16727 = (state_16737[(2)]);
var state_16737__$1 = state_16737;
var statearr_16746_16769 = state_16737__$1;
(statearr_16746_16769[(2)] = inst_16727);

(statearr_16746_16769[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (9))){
var state_16737__$1 = state_16737;
var statearr_16747_16770 = state_16737__$1;
(statearr_16747_16770[(2)] = null);

(statearr_16747_16770[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (5))){
var inst_16722 = cljs.core.async.close_BANG_(out);
var state_16737__$1 = state_16737;
var statearr_16748_16771 = state_16737__$1;
(statearr_16748_16771[(2)] = inst_16722);

(statearr_16748_16771[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (10))){
var inst_16730 = (state_16737[(2)]);
var state_16737__$1 = (function (){var statearr_16749 = state_16737;
(statearr_16749[(8)] = inst_16730);

return statearr_16749;
})();
var statearr_16750_16772 = state_16737__$1;
(statearr_16750_16772[(2)] = null);

(statearr_16750_16772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16738 === (8))){
var inst_16719 = (state_16737[(7)]);
var state_16737__$1 = state_16737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16737__$1,(11),out,inst_16719);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___16762,out))
;
return ((function (switch__14408__auto__,c__14522__auto___16762,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_16754 = [null,null,null,null,null,null,null,null,null];
(statearr_16754[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_16754[(1)] = (1));

return statearr_16754;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_16737){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16737);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16755){if((e16755 instanceof Object)){
var ex__14412__auto__ = e16755;
var statearr_16756_16773 = state_16737;
(statearr_16756_16773[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16737);

return cljs.core.cst$kw$recur;
} else {
throw e16755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__16774 = state_16737;
state_16737 = G__16774;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_16737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_16737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___16762,out))
})();
var state__14524__auto__ = (function (){var statearr_16757 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___16762);

return statearr_16757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___16762,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16775 = [];
var len__7277__auto___16778 = arguments.length;
var i__7278__auto___16779 = (0);
while(true){
if((i__7278__auto___16779 < len__7277__auto___16778)){
args16775.push((arguments[i__7278__auto___16779]));

var G__16780 = (i__7278__auto___16779 + (1));
i__7278__auto___16779 = G__16780;
continue;
} else {
}
break;
}

var G__16777 = args16775.length;
switch (G__16777) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16775.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto__){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto__){
return (function (state_16947){
var state_val_16948 = (state_16947[(1)]);
if((state_val_16948 === (7))){
var inst_16943 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16949_16990 = state_16947__$1;
(statearr_16949_16990[(2)] = inst_16943);

(statearr_16949_16990[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (20))){
var inst_16913 = (state_16947[(7)]);
var inst_16924 = (state_16947[(2)]);
var inst_16925 = cljs.core.next(inst_16913);
var inst_16899 = inst_16925;
var inst_16900 = null;
var inst_16901 = (0);
var inst_16902 = (0);
var state_16947__$1 = (function (){var statearr_16950 = state_16947;
(statearr_16950[(8)] = inst_16900);

(statearr_16950[(9)] = inst_16901);

(statearr_16950[(10)] = inst_16924);

(statearr_16950[(11)] = inst_16902);

(statearr_16950[(12)] = inst_16899);

return statearr_16950;
})();
var statearr_16951_16991 = state_16947__$1;
(statearr_16951_16991[(2)] = null);

(statearr_16951_16991[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (1))){
var state_16947__$1 = state_16947;
var statearr_16952_16992 = state_16947__$1;
(statearr_16952_16992[(2)] = null);

(statearr_16952_16992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (4))){
var inst_16888 = (state_16947[(13)]);
var inst_16888__$1 = (state_16947[(2)]);
var inst_16889 = (inst_16888__$1 == null);
var state_16947__$1 = (function (){var statearr_16953 = state_16947;
(statearr_16953[(13)] = inst_16888__$1);

return statearr_16953;
})();
if(cljs.core.truth_(inst_16889)){
var statearr_16954_16993 = state_16947__$1;
(statearr_16954_16993[(1)] = (5));

} else {
var statearr_16955_16994 = state_16947__$1;
(statearr_16955_16994[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (15))){
var state_16947__$1 = state_16947;
var statearr_16959_16995 = state_16947__$1;
(statearr_16959_16995[(2)] = null);

(statearr_16959_16995[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (21))){
var state_16947__$1 = state_16947;
var statearr_16960_16996 = state_16947__$1;
(statearr_16960_16996[(2)] = null);

(statearr_16960_16996[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (13))){
var inst_16900 = (state_16947[(8)]);
var inst_16901 = (state_16947[(9)]);
var inst_16902 = (state_16947[(11)]);
var inst_16899 = (state_16947[(12)]);
var inst_16909 = (state_16947[(2)]);
var inst_16910 = (inst_16902 + (1));
var tmp16956 = inst_16900;
var tmp16957 = inst_16901;
var tmp16958 = inst_16899;
var inst_16899__$1 = tmp16958;
var inst_16900__$1 = tmp16956;
var inst_16901__$1 = tmp16957;
var inst_16902__$1 = inst_16910;
var state_16947__$1 = (function (){var statearr_16961 = state_16947;
(statearr_16961[(8)] = inst_16900__$1);

(statearr_16961[(9)] = inst_16901__$1);

(statearr_16961[(14)] = inst_16909);

(statearr_16961[(11)] = inst_16902__$1);

(statearr_16961[(12)] = inst_16899__$1);

return statearr_16961;
})();
var statearr_16962_16997 = state_16947__$1;
(statearr_16962_16997[(2)] = null);

(statearr_16962_16997[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (22))){
var state_16947__$1 = state_16947;
var statearr_16963_16998 = state_16947__$1;
(statearr_16963_16998[(2)] = null);

(statearr_16963_16998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (6))){
var inst_16888 = (state_16947[(13)]);
var inst_16897 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16888) : f.call(null,inst_16888));
var inst_16898 = cljs.core.seq(inst_16897);
var inst_16899 = inst_16898;
var inst_16900 = null;
var inst_16901 = (0);
var inst_16902 = (0);
var state_16947__$1 = (function (){var statearr_16964 = state_16947;
(statearr_16964[(8)] = inst_16900);

(statearr_16964[(9)] = inst_16901);

(statearr_16964[(11)] = inst_16902);

(statearr_16964[(12)] = inst_16899);

return statearr_16964;
})();
var statearr_16965_16999 = state_16947__$1;
(statearr_16965_16999[(2)] = null);

(statearr_16965_16999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (17))){
var inst_16913 = (state_16947[(7)]);
var inst_16917 = cljs.core.chunk_first(inst_16913);
var inst_16918 = cljs.core.chunk_rest(inst_16913);
var inst_16919 = cljs.core.count(inst_16917);
var inst_16899 = inst_16918;
var inst_16900 = inst_16917;
var inst_16901 = inst_16919;
var inst_16902 = (0);
var state_16947__$1 = (function (){var statearr_16966 = state_16947;
(statearr_16966[(8)] = inst_16900);

(statearr_16966[(9)] = inst_16901);

(statearr_16966[(11)] = inst_16902);

(statearr_16966[(12)] = inst_16899);

return statearr_16966;
})();
var statearr_16967_17000 = state_16947__$1;
(statearr_16967_17000[(2)] = null);

(statearr_16967_17000[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (3))){
var inst_16945 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16947__$1,inst_16945);
} else {
if((state_val_16948 === (12))){
var inst_16933 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16968_17001 = state_16947__$1;
(statearr_16968_17001[(2)] = inst_16933);

(statearr_16968_17001[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (2))){
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16947__$1,(4),in$);
} else {
if((state_val_16948 === (23))){
var inst_16941 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16969_17002 = state_16947__$1;
(statearr_16969_17002[(2)] = inst_16941);

(statearr_16969_17002[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (19))){
var inst_16928 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16970_17003 = state_16947__$1;
(statearr_16970_17003[(2)] = inst_16928);

(statearr_16970_17003[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (11))){
var inst_16913 = (state_16947[(7)]);
var inst_16899 = (state_16947[(12)]);
var inst_16913__$1 = cljs.core.seq(inst_16899);
var state_16947__$1 = (function (){var statearr_16971 = state_16947;
(statearr_16971[(7)] = inst_16913__$1);

return statearr_16971;
})();
if(inst_16913__$1){
var statearr_16972_17004 = state_16947__$1;
(statearr_16972_17004[(1)] = (14));

} else {
var statearr_16973_17005 = state_16947__$1;
(statearr_16973_17005[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (9))){
var inst_16935 = (state_16947[(2)]);
var inst_16936 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16947__$1 = (function (){var statearr_16974 = state_16947;
(statearr_16974[(15)] = inst_16935);

return statearr_16974;
})();
if(cljs.core.truth_(inst_16936)){
var statearr_16975_17006 = state_16947__$1;
(statearr_16975_17006[(1)] = (21));

} else {
var statearr_16976_17007 = state_16947__$1;
(statearr_16976_17007[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (5))){
var inst_16891 = cljs.core.async.close_BANG_(out);
var state_16947__$1 = state_16947;
var statearr_16977_17008 = state_16947__$1;
(statearr_16977_17008[(2)] = inst_16891);

(statearr_16977_17008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (14))){
var inst_16913 = (state_16947[(7)]);
var inst_16915 = cljs.core.chunked_seq_QMARK_(inst_16913);
var state_16947__$1 = state_16947;
if(inst_16915){
var statearr_16978_17009 = state_16947__$1;
(statearr_16978_17009[(1)] = (17));

} else {
var statearr_16979_17010 = state_16947__$1;
(statearr_16979_17010[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (16))){
var inst_16931 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16980_17011 = state_16947__$1;
(statearr_16980_17011[(2)] = inst_16931);

(statearr_16980_17011[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (10))){
var inst_16900 = (state_16947[(8)]);
var inst_16902 = (state_16947[(11)]);
var inst_16907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16900,inst_16902);
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16947__$1,(13),out,inst_16907);
} else {
if((state_val_16948 === (18))){
var inst_16913 = (state_16947[(7)]);
var inst_16922 = cljs.core.first(inst_16913);
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16947__$1,(20),out,inst_16922);
} else {
if((state_val_16948 === (8))){
var inst_16901 = (state_16947[(9)]);
var inst_16902 = (state_16947[(11)]);
var inst_16904 = (inst_16902 < inst_16901);
var inst_16905 = inst_16904;
var state_16947__$1 = state_16947;
if(cljs.core.truth_(inst_16905)){
var statearr_16981_17012 = state_16947__$1;
(statearr_16981_17012[(1)] = (10));

} else {
var statearr_16982_17013 = state_16947__$1;
(statearr_16982_17013[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto__))
;
return ((function (switch__14408__auto__,c__14522__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____0 = (function (){
var statearr_16986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16986[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__);

(statearr_16986[(1)] = (1));

return statearr_16986;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____1 = (function (state_16947){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_16947);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e16987){if((e16987 instanceof Object)){
var ex__14412__auto__ = e16987;
var statearr_16988_17014 = state_16947;
(statearr_16988_17014[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16947);

return cljs.core.cst$kw$recur;
} else {
throw e16987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__17015 = state_16947;
state_16947 = G__17015;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__ = function(state_16947){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____1.call(this,state_16947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14409__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto__))
})();
var state__14524__auto__ = (function (){var statearr_16989 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_16989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto__);

return statearr_16989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto__))
);

return c__14522__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17016 = [];
var len__7277__auto___17019 = arguments.length;
var i__7278__auto___17020 = (0);
while(true){
if((i__7278__auto___17020 < len__7277__auto___17019)){
args17016.push((arguments[i__7278__auto___17020]));

var G__17021 = (i__7278__auto___17020 + (1));
i__7278__auto___17020 = G__17021;
continue;
} else {
}
break;
}

var G__17018 = args17016.length;
switch (G__17018) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17016.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17023 = [];
var len__7277__auto___17026 = arguments.length;
var i__7278__auto___17027 = (0);
while(true){
if((i__7278__auto___17027 < len__7277__auto___17026)){
args17023.push((arguments[i__7278__auto___17027]));

var G__17028 = (i__7278__auto___17027 + (1));
i__7278__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var G__17025 = args17023.length;
switch (G__17025) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17023.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17030 = [];
var len__7277__auto___17081 = arguments.length;
var i__7278__auto___17082 = (0);
while(true){
if((i__7278__auto___17082 < len__7277__auto___17081)){
args17030.push((arguments[i__7278__auto___17082]));

var G__17083 = (i__7278__auto___17082 + (1));
i__7278__auto___17082 = G__17083;
continue;
} else {
}
break;
}

var G__17032 = args17030.length;
switch (G__17032) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17030.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___17085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___17085,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___17085,out){
return (function (state_17056){
var state_val_17057 = (state_17056[(1)]);
if((state_val_17057 === (7))){
var inst_17051 = (state_17056[(2)]);
var state_17056__$1 = state_17056;
var statearr_17058_17086 = state_17056__$1;
(statearr_17058_17086[(2)] = inst_17051);

(statearr_17058_17086[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (1))){
var inst_17033 = null;
var state_17056__$1 = (function (){var statearr_17059 = state_17056;
(statearr_17059[(7)] = inst_17033);

return statearr_17059;
})();
var statearr_17060_17087 = state_17056__$1;
(statearr_17060_17087[(2)] = null);

(statearr_17060_17087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (4))){
var inst_17036 = (state_17056[(8)]);
var inst_17036__$1 = (state_17056[(2)]);
var inst_17037 = (inst_17036__$1 == null);
var inst_17038 = cljs.core.not(inst_17037);
var state_17056__$1 = (function (){var statearr_17061 = state_17056;
(statearr_17061[(8)] = inst_17036__$1);

return statearr_17061;
})();
if(inst_17038){
var statearr_17062_17088 = state_17056__$1;
(statearr_17062_17088[(1)] = (5));

} else {
var statearr_17063_17089 = state_17056__$1;
(statearr_17063_17089[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (6))){
var state_17056__$1 = state_17056;
var statearr_17064_17090 = state_17056__$1;
(statearr_17064_17090[(2)] = null);

(statearr_17064_17090[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (3))){
var inst_17053 = (state_17056[(2)]);
var inst_17054 = cljs.core.async.close_BANG_(out);
var state_17056__$1 = (function (){var statearr_17065 = state_17056;
(statearr_17065[(9)] = inst_17053);

return statearr_17065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17056__$1,inst_17054);
} else {
if((state_val_17057 === (2))){
var state_17056__$1 = state_17056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17056__$1,(4),ch);
} else {
if((state_val_17057 === (11))){
var inst_17036 = (state_17056[(8)]);
var inst_17045 = (state_17056[(2)]);
var inst_17033 = inst_17036;
var state_17056__$1 = (function (){var statearr_17066 = state_17056;
(statearr_17066[(10)] = inst_17045);

(statearr_17066[(7)] = inst_17033);

return statearr_17066;
})();
var statearr_17067_17091 = state_17056__$1;
(statearr_17067_17091[(2)] = null);

(statearr_17067_17091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (9))){
var inst_17036 = (state_17056[(8)]);
var state_17056__$1 = state_17056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17056__$1,(11),out,inst_17036);
} else {
if((state_val_17057 === (5))){
var inst_17036 = (state_17056[(8)]);
var inst_17033 = (state_17056[(7)]);
var inst_17040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17036,inst_17033);
var state_17056__$1 = state_17056;
if(inst_17040){
var statearr_17069_17092 = state_17056__$1;
(statearr_17069_17092[(1)] = (8));

} else {
var statearr_17070_17093 = state_17056__$1;
(statearr_17070_17093[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (10))){
var inst_17048 = (state_17056[(2)]);
var state_17056__$1 = state_17056;
var statearr_17071_17094 = state_17056__$1;
(statearr_17071_17094[(2)] = inst_17048);

(statearr_17071_17094[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17057 === (8))){
var inst_17033 = (state_17056[(7)]);
var tmp17068 = inst_17033;
var inst_17033__$1 = tmp17068;
var state_17056__$1 = (function (){var statearr_17072 = state_17056;
(statearr_17072[(7)] = inst_17033__$1);

return statearr_17072;
})();
var statearr_17073_17095 = state_17056__$1;
(statearr_17073_17095[(2)] = null);

(statearr_17073_17095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___17085,out))
;
return ((function (switch__14408__auto__,c__14522__auto___17085,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_17077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17077[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_17077[(1)] = (1));

return statearr_17077;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_17056){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_17056);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e17078){if((e17078 instanceof Object)){
var ex__14412__auto__ = e17078;
var statearr_17079_17096 = state_17056;
(statearr_17079_17096[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17056);

return cljs.core.cst$kw$recur;
} else {
throw e17078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__17097 = state_17056;
state_17056 = G__17097;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_17056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_17056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___17085,out))
})();
var state__14524__auto__ = (function (){var statearr_17080 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_17080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___17085);

return statearr_17080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___17085,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17098 = [];
var len__7277__auto___17168 = arguments.length;
var i__7278__auto___17169 = (0);
while(true){
if((i__7278__auto___17169 < len__7277__auto___17168)){
args17098.push((arguments[i__7278__auto___17169]));

var G__17170 = (i__7278__auto___17169 + (1));
i__7278__auto___17169 = G__17170;
continue;
} else {
}
break;
}

var G__17100 = args17098.length;
switch (G__17100) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17098.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___17172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___17172,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___17172,out){
return (function (state_17138){
var state_val_17139 = (state_17138[(1)]);
if((state_val_17139 === (7))){
var inst_17134 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
var statearr_17140_17173 = state_17138__$1;
(statearr_17140_17173[(2)] = inst_17134);

(statearr_17140_17173[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (1))){
var inst_17101 = (new Array(n));
var inst_17102 = inst_17101;
var inst_17103 = (0);
var state_17138__$1 = (function (){var statearr_17141 = state_17138;
(statearr_17141[(7)] = inst_17102);

(statearr_17141[(8)] = inst_17103);

return statearr_17141;
})();
var statearr_17142_17174 = state_17138__$1;
(statearr_17142_17174[(2)] = null);

(statearr_17142_17174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (4))){
var inst_17106 = (state_17138[(9)]);
var inst_17106__$1 = (state_17138[(2)]);
var inst_17107 = (inst_17106__$1 == null);
var inst_17108 = cljs.core.not(inst_17107);
var state_17138__$1 = (function (){var statearr_17143 = state_17138;
(statearr_17143[(9)] = inst_17106__$1);

return statearr_17143;
})();
if(inst_17108){
var statearr_17144_17175 = state_17138__$1;
(statearr_17144_17175[(1)] = (5));

} else {
var statearr_17145_17176 = state_17138__$1;
(statearr_17145_17176[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (15))){
var inst_17128 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
var statearr_17146_17177 = state_17138__$1;
(statearr_17146_17177[(2)] = inst_17128);

(statearr_17146_17177[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (13))){
var state_17138__$1 = state_17138;
var statearr_17147_17178 = state_17138__$1;
(statearr_17147_17178[(2)] = null);

(statearr_17147_17178[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (6))){
var inst_17103 = (state_17138[(8)]);
var inst_17124 = (inst_17103 > (0));
var state_17138__$1 = state_17138;
if(cljs.core.truth_(inst_17124)){
var statearr_17148_17179 = state_17138__$1;
(statearr_17148_17179[(1)] = (12));

} else {
var statearr_17149_17180 = state_17138__$1;
(statearr_17149_17180[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (3))){
var inst_17136 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17138__$1,inst_17136);
} else {
if((state_val_17139 === (12))){
var inst_17102 = (state_17138[(7)]);
var inst_17126 = cljs.core.vec(inst_17102);
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17138__$1,(15),out,inst_17126);
} else {
if((state_val_17139 === (2))){
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17138__$1,(4),ch);
} else {
if((state_val_17139 === (11))){
var inst_17118 = (state_17138[(2)]);
var inst_17119 = (new Array(n));
var inst_17102 = inst_17119;
var inst_17103 = (0);
var state_17138__$1 = (function (){var statearr_17150 = state_17138;
(statearr_17150[(7)] = inst_17102);

(statearr_17150[(10)] = inst_17118);

(statearr_17150[(8)] = inst_17103);

return statearr_17150;
})();
var statearr_17151_17181 = state_17138__$1;
(statearr_17151_17181[(2)] = null);

(statearr_17151_17181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (9))){
var inst_17102 = (state_17138[(7)]);
var inst_17116 = cljs.core.vec(inst_17102);
var state_17138__$1 = state_17138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17138__$1,(11),out,inst_17116);
} else {
if((state_val_17139 === (5))){
var inst_17111 = (state_17138[(11)]);
var inst_17102 = (state_17138[(7)]);
var inst_17103 = (state_17138[(8)]);
var inst_17106 = (state_17138[(9)]);
var inst_17110 = (inst_17102[inst_17103] = inst_17106);
var inst_17111__$1 = (inst_17103 + (1));
var inst_17112 = (inst_17111__$1 < n);
var state_17138__$1 = (function (){var statearr_17152 = state_17138;
(statearr_17152[(11)] = inst_17111__$1);

(statearr_17152[(12)] = inst_17110);

return statearr_17152;
})();
if(cljs.core.truth_(inst_17112)){
var statearr_17153_17182 = state_17138__$1;
(statearr_17153_17182[(1)] = (8));

} else {
var statearr_17154_17183 = state_17138__$1;
(statearr_17154_17183[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (14))){
var inst_17131 = (state_17138[(2)]);
var inst_17132 = cljs.core.async.close_BANG_(out);
var state_17138__$1 = (function (){var statearr_17156 = state_17138;
(statearr_17156[(13)] = inst_17131);

return statearr_17156;
})();
var statearr_17157_17184 = state_17138__$1;
(statearr_17157_17184[(2)] = inst_17132);

(statearr_17157_17184[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (10))){
var inst_17122 = (state_17138[(2)]);
var state_17138__$1 = state_17138;
var statearr_17158_17185 = state_17138__$1;
(statearr_17158_17185[(2)] = inst_17122);

(statearr_17158_17185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17139 === (8))){
var inst_17111 = (state_17138[(11)]);
var inst_17102 = (state_17138[(7)]);
var tmp17155 = inst_17102;
var inst_17102__$1 = tmp17155;
var inst_17103 = inst_17111;
var state_17138__$1 = (function (){var statearr_17159 = state_17138;
(statearr_17159[(7)] = inst_17102__$1);

(statearr_17159[(8)] = inst_17103);

return statearr_17159;
})();
var statearr_17160_17186 = state_17138__$1;
(statearr_17160_17186[(2)] = null);

(statearr_17160_17186[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___17172,out))
;
return ((function (switch__14408__auto__,c__14522__auto___17172,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_17164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17164[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_17164[(1)] = (1));

return statearr_17164;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_17138){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_17138);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e17165){if((e17165 instanceof Object)){
var ex__14412__auto__ = e17165;
var statearr_17166_17187 = state_17138;
(statearr_17166_17187[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17138);

return cljs.core.cst$kw$recur;
} else {
throw e17165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__17188 = state_17138;
state_17138 = G__17188;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_17138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_17138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___17172,out))
})();
var state__14524__auto__ = (function (){var statearr_17167 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_17167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___17172);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___17172,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17189 = [];
var len__7277__auto___17263 = arguments.length;
var i__7278__auto___17264 = (0);
while(true){
if((i__7278__auto___17264 < len__7277__auto___17263)){
args17189.push((arguments[i__7278__auto___17264]));

var G__17265 = (i__7278__auto___17264 + (1));
i__7278__auto___17264 = G__17265;
continue;
} else {
}
break;
}

var G__17191 = args17189.length;
switch (G__17191) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17189.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14522__auto___17267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14522__auto___17267,out){
return (function (){
var f__14523__auto__ = (function (){var switch__14408__auto__ = ((function (c__14522__auto___17267,out){
return (function (state_17233){
var state_val_17234 = (state_17233[(1)]);
if((state_val_17234 === (7))){
var inst_17229 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17235_17268 = state_17233__$1;
(statearr_17235_17268[(2)] = inst_17229);

(statearr_17235_17268[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (1))){
var inst_17192 = [];
var inst_17193 = inst_17192;
var inst_17194 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17233__$1 = (function (){var statearr_17236 = state_17233;
(statearr_17236[(7)] = inst_17193);

(statearr_17236[(8)] = inst_17194);

return statearr_17236;
})();
var statearr_17237_17269 = state_17233__$1;
(statearr_17237_17269[(2)] = null);

(statearr_17237_17269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (4))){
var inst_17197 = (state_17233[(9)]);
var inst_17197__$1 = (state_17233[(2)]);
var inst_17198 = (inst_17197__$1 == null);
var inst_17199 = cljs.core.not(inst_17198);
var state_17233__$1 = (function (){var statearr_17238 = state_17233;
(statearr_17238[(9)] = inst_17197__$1);

return statearr_17238;
})();
if(inst_17199){
var statearr_17239_17270 = state_17233__$1;
(statearr_17239_17270[(1)] = (5));

} else {
var statearr_17240_17271 = state_17233__$1;
(statearr_17240_17271[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (15))){
var inst_17223 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17241_17272 = state_17233__$1;
(statearr_17241_17272[(2)] = inst_17223);

(statearr_17241_17272[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (13))){
var state_17233__$1 = state_17233;
var statearr_17242_17273 = state_17233__$1;
(statearr_17242_17273[(2)] = null);

(statearr_17242_17273[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (6))){
var inst_17193 = (state_17233[(7)]);
var inst_17218 = inst_17193.length;
var inst_17219 = (inst_17218 > (0));
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17219)){
var statearr_17243_17274 = state_17233__$1;
(statearr_17243_17274[(1)] = (12));

} else {
var statearr_17244_17275 = state_17233__$1;
(statearr_17244_17275[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (3))){
var inst_17231 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17233__$1,inst_17231);
} else {
if((state_val_17234 === (12))){
var inst_17193 = (state_17233[(7)]);
var inst_17221 = cljs.core.vec(inst_17193);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17233__$1,(15),out,inst_17221);
} else {
if((state_val_17234 === (2))){
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17233__$1,(4),ch);
} else {
if((state_val_17234 === (11))){
var inst_17197 = (state_17233[(9)]);
var inst_17201 = (state_17233[(10)]);
var inst_17211 = (state_17233[(2)]);
var inst_17212 = [];
var inst_17213 = inst_17212.push(inst_17197);
var inst_17193 = inst_17212;
var inst_17194 = inst_17201;
var state_17233__$1 = (function (){var statearr_17245 = state_17233;
(statearr_17245[(7)] = inst_17193);

(statearr_17245[(11)] = inst_17213);

(statearr_17245[(8)] = inst_17194);

(statearr_17245[(12)] = inst_17211);

return statearr_17245;
})();
var statearr_17246_17276 = state_17233__$1;
(statearr_17246_17276[(2)] = null);

(statearr_17246_17276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (9))){
var inst_17193 = (state_17233[(7)]);
var inst_17209 = cljs.core.vec(inst_17193);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17233__$1,(11),out,inst_17209);
} else {
if((state_val_17234 === (5))){
var inst_17197 = (state_17233[(9)]);
var inst_17201 = (state_17233[(10)]);
var inst_17194 = (state_17233[(8)]);
var inst_17201__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17197) : f.call(null,inst_17197));
var inst_17202 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17201__$1,inst_17194);
var inst_17203 = cljs.core.keyword_identical_QMARK_(inst_17194,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17204 = (inst_17202) || (inst_17203);
var state_17233__$1 = (function (){var statearr_17247 = state_17233;
(statearr_17247[(10)] = inst_17201__$1);

return statearr_17247;
})();
if(cljs.core.truth_(inst_17204)){
var statearr_17248_17277 = state_17233__$1;
(statearr_17248_17277[(1)] = (8));

} else {
var statearr_17249_17278 = state_17233__$1;
(statearr_17249_17278[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (14))){
var inst_17226 = (state_17233[(2)]);
var inst_17227 = cljs.core.async.close_BANG_(out);
var state_17233__$1 = (function (){var statearr_17251 = state_17233;
(statearr_17251[(13)] = inst_17226);

return statearr_17251;
})();
var statearr_17252_17279 = state_17233__$1;
(statearr_17252_17279[(2)] = inst_17227);

(statearr_17252_17279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (10))){
var inst_17216 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17253_17280 = state_17233__$1;
(statearr_17253_17280[(2)] = inst_17216);

(statearr_17253_17280[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17234 === (8))){
var inst_17197 = (state_17233[(9)]);
var inst_17201 = (state_17233[(10)]);
var inst_17193 = (state_17233[(7)]);
var inst_17206 = inst_17193.push(inst_17197);
var tmp17250 = inst_17193;
var inst_17193__$1 = tmp17250;
var inst_17194 = inst_17201;
var state_17233__$1 = (function (){var statearr_17254 = state_17233;
(statearr_17254[(14)] = inst_17206);

(statearr_17254[(7)] = inst_17193__$1);

(statearr_17254[(8)] = inst_17194);

return statearr_17254;
})();
var statearr_17255_17281 = state_17233__$1;
(statearr_17255_17281[(2)] = null);

(statearr_17255_17281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14522__auto___17267,out))
;
return ((function (switch__14408__auto__,c__14522__auto___17267,out){
return (function() {
var cljs$core$async$state_machine__14409__auto__ = null;
var cljs$core$async$state_machine__14409__auto____0 = (function (){
var statearr_17259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17259[(0)] = cljs$core$async$state_machine__14409__auto__);

(statearr_17259[(1)] = (1));

return statearr_17259;
});
var cljs$core$async$state_machine__14409__auto____1 = (function (state_17233){
while(true){
var ret_value__14410__auto__ = (function (){try{while(true){
var result__14411__auto__ = switch__14408__auto__(state_17233);
if(cljs.core.keyword_identical_QMARK_(result__14411__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14411__auto__;
}
break;
}
}catch (e17260){if((e17260 instanceof Object)){
var ex__14412__auto__ = e17260;
var statearr_17261_17282 = state_17233;
(statearr_17261_17282[(5)] = ex__14412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17233);

return cljs.core.cst$kw$recur;
} else {
throw e17260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14410__auto__,cljs.core.cst$kw$recur)){
var G__17283 = state_17233;
state_17233 = G__17283;
continue;
} else {
return ret_value__14410__auto__;
}
break;
}
});
cljs$core$async$state_machine__14409__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14409__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14409__auto____0;
cljs$core$async$state_machine__14409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14409__auto____1;
return cljs$core$async$state_machine__14409__auto__;
})()
;})(switch__14408__auto__,c__14522__auto___17267,out))
})();
var state__14524__auto__ = (function (){var statearr_17262 = (f__14523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14523__auto__.cljs$core$IFn$_invoke$arity$0() : f__14523__auto__.call(null));
(statearr_17262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14522__auto___17267);

return statearr_17262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14524__auto__);
});})(c__14522__auto___17267,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
