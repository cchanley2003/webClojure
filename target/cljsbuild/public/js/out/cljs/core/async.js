// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24376 = [];
var len__22721__auto___24382 = arguments.length;
var i__22722__auto___24383 = (0);
while(true){
if((i__22722__auto___24383 < len__22721__auto___24382)){
args24376.push((arguments[i__22722__auto___24383]));

var G__24384 = (i__22722__auto___24383 + (1));
i__22722__auto___24383 = G__24384;
continue;
} else {
}
break;
}

var G__24378 = args24376.length;
switch (G__24378) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24376.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24379 = (function (f,blockable,meta24380){
this.f = f;
this.blockable = blockable;
this.meta24380 = meta24380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24381,meta24380__$1){
var self__ = this;
var _24381__$1 = this;
return (new cljs.core.async.t_cljs$core$async24379(self__.f,self__.blockable,meta24380__$1));
});

cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24381){
var self__ = this;
var _24381__$1 = this;
return self__.meta24380;
});

cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24380","meta24380",465842816,null)], null);
});

cljs.core.async.t_cljs$core$async24379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24379";

cljs.core.async.t_cljs$core$async24379.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24379");
});

cljs.core.async.__GT_t_cljs$core$async24379 = (function cljs$core$async$__GT_t_cljs$core$async24379(f__$1,blockable__$1,meta24380){
return (new cljs.core.async.t_cljs$core$async24379(f__$1,blockable__$1,meta24380));
});

}

return (new cljs.core.async.t_cljs$core$async24379(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args24388 = [];
var len__22721__auto___24391 = arguments.length;
var i__22722__auto___24392 = (0);
while(true){
if((i__22722__auto___24392 < len__22721__auto___24391)){
args24388.push((arguments[i__22722__auto___24392]));

var G__24393 = (i__22722__auto___24392 + (1));
i__22722__auto___24392 = G__24393;
continue;
} else {
}
break;
}

var G__24390 = args24388.length;
switch (G__24390) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24388.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24395 = [];
var len__22721__auto___24398 = arguments.length;
var i__22722__auto___24399 = (0);
while(true){
if((i__22722__auto___24399 < len__22721__auto___24398)){
args24395.push((arguments[i__22722__auto___24399]));

var G__24400 = (i__22722__auto___24399 + (1));
i__22722__auto___24399 = G__24400;
continue;
} else {
}
break;
}

var G__24397 = args24395.length;
switch (G__24397) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24395.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args24402 = [];
var len__22721__auto___24405 = arguments.length;
var i__22722__auto___24406 = (0);
while(true){
if((i__22722__auto___24406 < len__22721__auto___24405)){
args24402.push((arguments[i__22722__auto___24406]));

var G__24407 = (i__22722__auto___24406 + (1));
i__22722__auto___24406 = G__24407;
continue;
} else {
}
break;
}

var G__24404 = args24402.length;
switch (G__24404) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24402.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24409 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24409);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24409,ret){
return (function (){
return fn1.call(null,val_24409);
});})(val_24409,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args24410 = [];
var len__22721__auto___24413 = arguments.length;
var i__22722__auto___24414 = (0);
while(true){
if((i__22722__auto___24414 < len__22721__auto___24413)){
args24410.push((arguments[i__22722__auto___24414]));

var G__24415 = (i__22722__auto___24414 + (1));
i__22722__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var G__24412 = args24410.length;
switch (G__24412) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24410.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22566__auto___24417 = n;
var x_24418 = (0);
while(true){
if((x_24418 < n__22566__auto___24417)){
(a[x_24418] = (0));

var G__24419 = (x_24418 + (1));
x_24418 = G__24419;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24420 = (i + (1));
i = G__24420;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24424 = (function (alt_flag,flag,meta24425){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24425 = meta24425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24426,meta24425__$1){
var self__ = this;
var _24426__$1 = this;
return (new cljs.core.async.t_cljs$core$async24424(self__.alt_flag,self__.flag,meta24425__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24426){
var self__ = this;
var _24426__$1 = this;
return self__.meta24425;
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24425","meta24425",-925102660,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24424";

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24424");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24424 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24424(alt_flag__$1,flag__$1,meta24425){
return (new cljs.core.async.t_cljs$core$async24424(alt_flag__$1,flag__$1,meta24425));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24424(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24430 = (function (alt_handler,flag,cb,meta24431){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24431 = meta24431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24432,meta24431__$1){
var self__ = this;
var _24432__$1 = this;
return (new cljs.core.async.t_cljs$core$async24430(self__.alt_handler,self__.flag,self__.cb,meta24431__$1));
});

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24432){
var self__ = this;
var _24432__$1 = this;
return self__.meta24431;
});

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24431","meta24431",881012514,null)], null);
});

cljs.core.async.t_cljs$core$async24430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24430";

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24430");
});

cljs.core.async.__GT_t_cljs$core$async24430 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24430(alt_handler__$1,flag__$1,cb__$1,meta24431){
return (new cljs.core.async.t_cljs$core$async24430(alt_handler__$1,flag__$1,cb__$1,meta24431));
});

}

return (new cljs.core.async.t_cljs$core$async24430(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24433_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24433_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24434_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24434_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21651__auto__ = wport;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24435 = (i + (1));
i = G__24435;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21651__auto__ = ret;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21639__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21639__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__22728__auto__ = [];
var len__22721__auto___24441 = arguments.length;
var i__22722__auto___24442 = (0);
while(true){
if((i__22722__auto___24442 < len__22721__auto___24441)){
args__22728__auto__.push((arguments[i__22722__auto___24442]));

var G__24443 = (i__22722__auto___24442 + (1));
i__22722__auto___24442 = G__24443;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24438){
var map__24439 = p__24438;
var map__24439__$1 = ((((!((map__24439 == null)))?((((map__24439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24439):map__24439);
var opts = map__24439__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24436){
var G__24437 = cljs.core.first.call(null,seq24436);
var seq24436__$1 = cljs.core.next.call(null,seq24436);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24437,seq24436__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24444 = [];
var len__22721__auto___24494 = arguments.length;
var i__22722__auto___24495 = (0);
while(true){
if((i__22722__auto___24495 < len__22721__auto___24494)){
args24444.push((arguments[i__22722__auto___24495]));

var G__24496 = (i__22722__auto___24495 + (1));
i__22722__auto___24495 = G__24496;
continue;
} else {
}
break;
}

var G__24446 = args24444.length;
switch (G__24446) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24444.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24331__auto___24498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___24498){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___24498){
return (function (state_24470){
var state_val_24471 = (state_24470[(1)]);
if((state_val_24471 === (7))){
var inst_24466 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24472_24499 = state_24470__$1;
(statearr_24472_24499[(2)] = inst_24466);

(statearr_24472_24499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (1))){
var state_24470__$1 = state_24470;
var statearr_24473_24500 = state_24470__$1;
(statearr_24473_24500[(2)] = null);

(statearr_24473_24500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (4))){
var inst_24449 = (state_24470[(7)]);
var inst_24449__$1 = (state_24470[(2)]);
var inst_24450 = (inst_24449__$1 == null);
var state_24470__$1 = (function (){var statearr_24474 = state_24470;
(statearr_24474[(7)] = inst_24449__$1);

return statearr_24474;
})();
if(cljs.core.truth_(inst_24450)){
var statearr_24475_24501 = state_24470__$1;
(statearr_24475_24501[(1)] = (5));

} else {
var statearr_24476_24502 = state_24470__$1;
(statearr_24476_24502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (13))){
var state_24470__$1 = state_24470;
var statearr_24477_24503 = state_24470__$1;
(statearr_24477_24503[(2)] = null);

(statearr_24477_24503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (6))){
var inst_24449 = (state_24470[(7)]);
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24470__$1,(11),to,inst_24449);
} else {
if((state_val_24471 === (3))){
var inst_24468 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24470__$1,inst_24468);
} else {
if((state_val_24471 === (12))){
var state_24470__$1 = state_24470;
var statearr_24478_24504 = state_24470__$1;
(statearr_24478_24504[(2)] = null);

(statearr_24478_24504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (2))){
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24470__$1,(4),from);
} else {
if((state_val_24471 === (11))){
var inst_24459 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
if(cljs.core.truth_(inst_24459)){
var statearr_24479_24505 = state_24470__$1;
(statearr_24479_24505[(1)] = (12));

} else {
var statearr_24480_24506 = state_24470__$1;
(statearr_24480_24506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (9))){
var state_24470__$1 = state_24470;
var statearr_24481_24507 = state_24470__$1;
(statearr_24481_24507[(2)] = null);

(statearr_24481_24507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (5))){
var state_24470__$1 = state_24470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24482_24508 = state_24470__$1;
(statearr_24482_24508[(1)] = (8));

} else {
var statearr_24483_24509 = state_24470__$1;
(statearr_24483_24509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (14))){
var inst_24464 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24484_24510 = state_24470__$1;
(statearr_24484_24510[(2)] = inst_24464);

(statearr_24484_24510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (10))){
var inst_24456 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24485_24511 = state_24470__$1;
(statearr_24485_24511[(2)] = inst_24456);

(statearr_24485_24511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (8))){
var inst_24453 = cljs.core.async.close_BANG_.call(null,to);
var state_24470__$1 = state_24470;
var statearr_24486_24512 = state_24470__$1;
(statearr_24486_24512[(2)] = inst_24453);

(statearr_24486_24512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___24498))
;
return ((function (switch__24219__auto__,c__24331__auto___24498){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_24490 = [null,null,null,null,null,null,null,null];
(statearr_24490[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_24490[(1)] = (1));

return statearr_24490;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_24470){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24491){if((e24491 instanceof Object)){
var ex__24223__auto__ = e24491;
var statearr_24492_24513 = state_24470;
(statearr_24492_24513[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24514 = state_24470;
state_24470 = G__24514;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_24470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_24470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___24498))
})();
var state__24333__auto__ = (function (){var statearr_24493 = f__24332__auto__.call(null);
(statearr_24493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___24498);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___24498))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24698){
var vec__24699 = p__24698;
var v = cljs.core.nth.call(null,vec__24699,(0),null);
var p = cljs.core.nth.call(null,vec__24699,(1),null);
var job = vec__24699;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24331__auto___24881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results){
return (function (state_24704){
var state_val_24705 = (state_24704[(1)]);
if((state_val_24705 === (1))){
var state_24704__$1 = state_24704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24704__$1,(2),res,v);
} else {
if((state_val_24705 === (2))){
var inst_24701 = (state_24704[(2)]);
var inst_24702 = cljs.core.async.close_BANG_.call(null,res);
var state_24704__$1 = (function (){var statearr_24706 = state_24704;
(statearr_24706[(7)] = inst_24701);

return statearr_24706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24704__$1,inst_24702);
} else {
return null;
}
}
});})(c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results))
;
return ((function (switch__24219__auto__,c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_24710 = [null,null,null,null,null,null,null,null];
(statearr_24710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__);

(statearr_24710[(1)] = (1));

return statearr_24710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1 = (function (state_24704){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24711){if((e24711 instanceof Object)){
var ex__24223__auto__ = e24711;
var statearr_24712_24882 = state_24704;
(statearr_24712_24882[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24883 = state_24704;
state_24704 = G__24883;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = function(state_24704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1.call(this,state_24704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results))
})();
var state__24333__auto__ = (function (){var statearr_24713 = f__24332__auto__.call(null);
(statearr_24713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___24881);

return statearr_24713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___24881,res,vec__24699,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24714){
var vec__24715 = p__24714;
var v = cljs.core.nth.call(null,vec__24715,(0),null);
var p = cljs.core.nth.call(null,vec__24715,(1),null);
var job = vec__24715;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22566__auto___24884 = n;
var __24885 = (0);
while(true){
if((__24885 < n__22566__auto___24884)){
var G__24716_24886 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24716_24886) {
case "compute":
var c__24331__auto___24888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24885,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (__24885,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function (state_24729){
var state_val_24730 = (state_24729[(1)]);
if((state_val_24730 === (1))){
var state_24729__$1 = state_24729;
var statearr_24731_24889 = state_24729__$1;
(statearr_24731_24889[(2)] = null);

(statearr_24731_24889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (2))){
var state_24729__$1 = state_24729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(4),jobs);
} else {
if((state_val_24730 === (3))){
var inst_24727 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24729__$1,inst_24727);
} else {
if((state_val_24730 === (4))){
var inst_24719 = (state_24729[(2)]);
var inst_24720 = process.call(null,inst_24719);
var state_24729__$1 = state_24729;
if(cljs.core.truth_(inst_24720)){
var statearr_24732_24890 = state_24729__$1;
(statearr_24732_24890[(1)] = (5));

} else {
var statearr_24733_24891 = state_24729__$1;
(statearr_24733_24891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (5))){
var state_24729__$1 = state_24729;
var statearr_24734_24892 = state_24729__$1;
(statearr_24734_24892[(2)] = null);

(statearr_24734_24892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (6))){
var state_24729__$1 = state_24729;
var statearr_24735_24893 = state_24729__$1;
(statearr_24735_24893[(2)] = null);

(statearr_24735_24893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (7))){
var inst_24725 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24736_24894 = state_24729__$1;
(statearr_24736_24894[(2)] = inst_24725);

(statearr_24736_24894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24885,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
;
return ((function (__24885,switch__24219__auto__,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_24740 = [null,null,null,null,null,null,null];
(statearr_24740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__);

(statearr_24740[(1)] = (1));

return statearr_24740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1 = (function (state_24729){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24741){if((e24741 instanceof Object)){
var ex__24223__auto__ = e24741;
var statearr_24742_24895 = state_24729;
(statearr_24742_24895[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24896 = state_24729;
state_24729 = G__24896;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = function(state_24729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1.call(this,state_24729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__;
})()
;})(__24885,switch__24219__auto__,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
})();
var state__24333__auto__ = (function (){var statearr_24743 = f__24332__auto__.call(null);
(statearr_24743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___24888);

return statearr_24743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(__24885,c__24331__auto___24888,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
);


break;
case "async":
var c__24331__auto___24897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24885,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (__24885,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function (state_24756){
var state_val_24757 = (state_24756[(1)]);
if((state_val_24757 === (1))){
var state_24756__$1 = state_24756;
var statearr_24758_24898 = state_24756__$1;
(statearr_24758_24898[(2)] = null);

(statearr_24758_24898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (2))){
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24756__$1,(4),jobs);
} else {
if((state_val_24757 === (3))){
var inst_24754 = (state_24756[(2)]);
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24756__$1,inst_24754);
} else {
if((state_val_24757 === (4))){
var inst_24746 = (state_24756[(2)]);
var inst_24747 = async.call(null,inst_24746);
var state_24756__$1 = state_24756;
if(cljs.core.truth_(inst_24747)){
var statearr_24759_24899 = state_24756__$1;
(statearr_24759_24899[(1)] = (5));

} else {
var statearr_24760_24900 = state_24756__$1;
(statearr_24760_24900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (5))){
var state_24756__$1 = state_24756;
var statearr_24761_24901 = state_24756__$1;
(statearr_24761_24901[(2)] = null);

(statearr_24761_24901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (6))){
var state_24756__$1 = state_24756;
var statearr_24762_24902 = state_24756__$1;
(statearr_24762_24902[(2)] = null);

(statearr_24762_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (7))){
var inst_24752 = (state_24756[(2)]);
var state_24756__$1 = state_24756;
var statearr_24763_24903 = state_24756__$1;
(statearr_24763_24903[(2)] = inst_24752);

(statearr_24763_24903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24885,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
;
return ((function (__24885,switch__24219__auto__,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_24767 = [null,null,null,null,null,null,null];
(statearr_24767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__);

(statearr_24767[(1)] = (1));

return statearr_24767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1 = (function (state_24756){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24768){if((e24768 instanceof Object)){
var ex__24223__auto__ = e24768;
var statearr_24769_24904 = state_24756;
(statearr_24769_24904[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24905 = state_24756;
state_24756 = G__24905;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = function(state_24756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1.call(this,state_24756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__;
})()
;})(__24885,switch__24219__auto__,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
})();
var state__24333__auto__ = (function (){var statearr_24770 = f__24332__auto__.call(null);
(statearr_24770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___24897);

return statearr_24770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(__24885,c__24331__auto___24897,G__24716_24886,n__22566__auto___24884,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24906 = (__24885 + (1));
__24885 = G__24906;
continue;
} else {
}
break;
}

var c__24331__auto___24907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___24907,jobs,results,process,async){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___24907,jobs,results,process,async){
return (function (state_24792){
var state_val_24793 = (state_24792[(1)]);
if((state_val_24793 === (1))){
var state_24792__$1 = state_24792;
var statearr_24794_24908 = state_24792__$1;
(statearr_24794_24908[(2)] = null);

(statearr_24794_24908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (2))){
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24792__$1,(4),from);
} else {
if((state_val_24793 === (3))){
var inst_24790 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24792__$1,inst_24790);
} else {
if((state_val_24793 === (4))){
var inst_24773 = (state_24792[(7)]);
var inst_24773__$1 = (state_24792[(2)]);
var inst_24774 = (inst_24773__$1 == null);
var state_24792__$1 = (function (){var statearr_24795 = state_24792;
(statearr_24795[(7)] = inst_24773__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24774)){
var statearr_24796_24909 = state_24792__$1;
(statearr_24796_24909[(1)] = (5));

} else {
var statearr_24797_24910 = state_24792__$1;
(statearr_24797_24910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (5))){
var inst_24776 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24792__$1 = state_24792;
var statearr_24798_24911 = state_24792__$1;
(statearr_24798_24911[(2)] = inst_24776);

(statearr_24798_24911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (6))){
var inst_24778 = (state_24792[(8)]);
var inst_24773 = (state_24792[(7)]);
var inst_24778__$1 = cljs.core.async.chan.call(null,(1));
var inst_24779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24780 = [inst_24773,inst_24778__$1];
var inst_24781 = (new cljs.core.PersistentVector(null,2,(5),inst_24779,inst_24780,null));
var state_24792__$1 = (function (){var statearr_24799 = state_24792;
(statearr_24799[(8)] = inst_24778__$1);

return statearr_24799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24792__$1,(8),jobs,inst_24781);
} else {
if((state_val_24793 === (7))){
var inst_24788 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
var statearr_24800_24912 = state_24792__$1;
(statearr_24800_24912[(2)] = inst_24788);

(statearr_24800_24912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (8))){
var inst_24778 = (state_24792[(8)]);
var inst_24783 = (state_24792[(2)]);
var state_24792__$1 = (function (){var statearr_24801 = state_24792;
(statearr_24801[(9)] = inst_24783);

return statearr_24801;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24792__$1,(9),results,inst_24778);
} else {
if((state_val_24793 === (9))){
var inst_24785 = (state_24792[(2)]);
var state_24792__$1 = (function (){var statearr_24802 = state_24792;
(statearr_24802[(10)] = inst_24785);

return statearr_24802;
})();
var statearr_24803_24913 = state_24792__$1;
(statearr_24803_24913[(2)] = null);

(statearr_24803_24913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___24907,jobs,results,process,async))
;
return ((function (switch__24219__auto__,c__24331__auto___24907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1 = (function (state_24792){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__24223__auto__ = e24808;
var statearr_24809_24914 = state_24792;
(statearr_24809_24914[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24915 = state_24792;
state_24792 = G__24915;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = function(state_24792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1.call(this,state_24792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___24907,jobs,results,process,async))
})();
var state__24333__auto__ = (function (){var statearr_24810 = f__24332__auto__.call(null);
(statearr_24810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___24907);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___24907,jobs,results,process,async))
);


var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__,jobs,results,process,async){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__,jobs,results,process,async){
return (function (state_24848){
var state_val_24849 = (state_24848[(1)]);
if((state_val_24849 === (7))){
var inst_24844 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24850_24916 = state_24848__$1;
(statearr_24850_24916[(2)] = inst_24844);

(statearr_24850_24916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (20))){
var state_24848__$1 = state_24848;
var statearr_24851_24917 = state_24848__$1;
(statearr_24851_24917[(2)] = null);

(statearr_24851_24917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (1))){
var state_24848__$1 = state_24848;
var statearr_24852_24918 = state_24848__$1;
(statearr_24852_24918[(2)] = null);

(statearr_24852_24918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (4))){
var inst_24813 = (state_24848[(7)]);
var inst_24813__$1 = (state_24848[(2)]);
var inst_24814 = (inst_24813__$1 == null);
var state_24848__$1 = (function (){var statearr_24853 = state_24848;
(statearr_24853[(7)] = inst_24813__$1);

return statearr_24853;
})();
if(cljs.core.truth_(inst_24814)){
var statearr_24854_24919 = state_24848__$1;
(statearr_24854_24919[(1)] = (5));

} else {
var statearr_24855_24920 = state_24848__$1;
(statearr_24855_24920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (15))){
var inst_24826 = (state_24848[(8)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24848__$1,(18),to,inst_24826);
} else {
if((state_val_24849 === (21))){
var inst_24839 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24856_24921 = state_24848__$1;
(statearr_24856_24921[(2)] = inst_24839);

(statearr_24856_24921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (13))){
var inst_24841 = (state_24848[(2)]);
var state_24848__$1 = (function (){var statearr_24857 = state_24848;
(statearr_24857[(9)] = inst_24841);

return statearr_24857;
})();
var statearr_24858_24922 = state_24848__$1;
(statearr_24858_24922[(2)] = null);

(statearr_24858_24922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (6))){
var inst_24813 = (state_24848[(7)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24848__$1,(11),inst_24813);
} else {
if((state_val_24849 === (17))){
var inst_24834 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
if(cljs.core.truth_(inst_24834)){
var statearr_24859_24923 = state_24848__$1;
(statearr_24859_24923[(1)] = (19));

} else {
var statearr_24860_24924 = state_24848__$1;
(statearr_24860_24924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (3))){
var inst_24846 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24848__$1,inst_24846);
} else {
if((state_val_24849 === (12))){
var inst_24823 = (state_24848[(10)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24848__$1,(14),inst_24823);
} else {
if((state_val_24849 === (2))){
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24848__$1,(4),results);
} else {
if((state_val_24849 === (19))){
var state_24848__$1 = state_24848;
var statearr_24861_24925 = state_24848__$1;
(statearr_24861_24925[(2)] = null);

(statearr_24861_24925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (11))){
var inst_24823 = (state_24848[(2)]);
var state_24848__$1 = (function (){var statearr_24862 = state_24848;
(statearr_24862[(10)] = inst_24823);

return statearr_24862;
})();
var statearr_24863_24926 = state_24848__$1;
(statearr_24863_24926[(2)] = null);

(statearr_24863_24926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (9))){
var state_24848__$1 = state_24848;
var statearr_24864_24927 = state_24848__$1;
(statearr_24864_24927[(2)] = null);

(statearr_24864_24927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (5))){
var state_24848__$1 = state_24848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24865_24928 = state_24848__$1;
(statearr_24865_24928[(1)] = (8));

} else {
var statearr_24866_24929 = state_24848__$1;
(statearr_24866_24929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (14))){
var inst_24826 = (state_24848[(8)]);
var inst_24828 = (state_24848[(11)]);
var inst_24826__$1 = (state_24848[(2)]);
var inst_24827 = (inst_24826__$1 == null);
var inst_24828__$1 = cljs.core.not.call(null,inst_24827);
var state_24848__$1 = (function (){var statearr_24867 = state_24848;
(statearr_24867[(8)] = inst_24826__$1);

(statearr_24867[(11)] = inst_24828__$1);

return statearr_24867;
})();
if(inst_24828__$1){
var statearr_24868_24930 = state_24848__$1;
(statearr_24868_24930[(1)] = (15));

} else {
var statearr_24869_24931 = state_24848__$1;
(statearr_24869_24931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (16))){
var inst_24828 = (state_24848[(11)]);
var state_24848__$1 = state_24848;
var statearr_24870_24932 = state_24848__$1;
(statearr_24870_24932[(2)] = inst_24828);

(statearr_24870_24932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (10))){
var inst_24820 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24871_24933 = state_24848__$1;
(statearr_24871_24933[(2)] = inst_24820);

(statearr_24871_24933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (18))){
var inst_24831 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24872_24934 = state_24848__$1;
(statearr_24872_24934[(2)] = inst_24831);

(statearr_24872_24934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (8))){
var inst_24817 = cljs.core.async.close_BANG_.call(null,to);
var state_24848__$1 = state_24848;
var statearr_24873_24935 = state_24848__$1;
(statearr_24873_24935[(2)] = inst_24817);

(statearr_24873_24935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto__,jobs,results,process,async))
;
return ((function (switch__24219__auto__,c__24331__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_24877 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__);

(statearr_24877[(1)] = (1));

return statearr_24877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1 = (function (state_24848){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e24878){if((e24878 instanceof Object)){
var ex__24223__auto__ = e24878;
var statearr_24879_24936 = state_24848;
(statearr_24879_24936[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24937 = state_24848;
state_24848 = G__24937;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__ = function(state_24848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1.call(this,state_24848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__,jobs,results,process,async))
})();
var state__24333__auto__ = (function (){var statearr_24880 = f__24332__auto__.call(null);
(statearr_24880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_24880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__,jobs,results,process,async))
);

return c__24331__auto__;
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
var args24938 = [];
var len__22721__auto___24941 = arguments.length;
var i__22722__auto___24942 = (0);
while(true){
if((i__22722__auto___24942 < len__22721__auto___24941)){
args24938.push((arguments[i__22722__auto___24942]));

var G__24943 = (i__22722__auto___24942 + (1));
i__22722__auto___24942 = G__24943;
continue;
} else {
}
break;
}

var G__24940 = args24938.length;
switch (G__24940) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24938.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args24945 = [];
var len__22721__auto___24948 = arguments.length;
var i__22722__auto___24949 = (0);
while(true){
if((i__22722__auto___24949 < len__22721__auto___24948)){
args24945.push((arguments[i__22722__auto___24949]));

var G__24950 = (i__22722__auto___24949 + (1));
i__22722__auto___24949 = G__24950;
continue;
} else {
}
break;
}

var G__24947 = args24945.length;
switch (G__24947) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24945.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args24952 = [];
var len__22721__auto___25005 = arguments.length;
var i__22722__auto___25006 = (0);
while(true){
if((i__22722__auto___25006 < len__22721__auto___25005)){
args24952.push((arguments[i__22722__auto___25006]));

var G__25007 = (i__22722__auto___25006 + (1));
i__22722__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var G__24954 = args24952.length;
switch (G__24954) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24952.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24331__auto___25009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___25009,tc,fc){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___25009,tc,fc){
return (function (state_24980){
var state_val_24981 = (state_24980[(1)]);
if((state_val_24981 === (7))){
var inst_24976 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_24982_25010 = state_24980__$1;
(statearr_24982_25010[(2)] = inst_24976);

(statearr_24982_25010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (1))){
var state_24980__$1 = state_24980;
var statearr_24983_25011 = state_24980__$1;
(statearr_24983_25011[(2)] = null);

(statearr_24983_25011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (4))){
var inst_24957 = (state_24980[(7)]);
var inst_24957__$1 = (state_24980[(2)]);
var inst_24958 = (inst_24957__$1 == null);
var state_24980__$1 = (function (){var statearr_24984 = state_24980;
(statearr_24984[(7)] = inst_24957__$1);

return statearr_24984;
})();
if(cljs.core.truth_(inst_24958)){
var statearr_24985_25012 = state_24980__$1;
(statearr_24985_25012[(1)] = (5));

} else {
var statearr_24986_25013 = state_24980__$1;
(statearr_24986_25013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (13))){
var state_24980__$1 = state_24980;
var statearr_24987_25014 = state_24980__$1;
(statearr_24987_25014[(2)] = null);

(statearr_24987_25014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (6))){
var inst_24957 = (state_24980[(7)]);
var inst_24963 = p.call(null,inst_24957);
var state_24980__$1 = state_24980;
if(cljs.core.truth_(inst_24963)){
var statearr_24988_25015 = state_24980__$1;
(statearr_24988_25015[(1)] = (9));

} else {
var statearr_24989_25016 = state_24980__$1;
(statearr_24989_25016[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (3))){
var inst_24978 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24980__$1,inst_24978);
} else {
if((state_val_24981 === (12))){
var state_24980__$1 = state_24980;
var statearr_24990_25017 = state_24980__$1;
(statearr_24990_25017[(2)] = null);

(statearr_24990_25017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (2))){
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24980__$1,(4),ch);
} else {
if((state_val_24981 === (11))){
var inst_24957 = (state_24980[(7)]);
var inst_24967 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24980__$1,(8),inst_24967,inst_24957);
} else {
if((state_val_24981 === (9))){
var state_24980__$1 = state_24980;
var statearr_24991_25018 = state_24980__$1;
(statearr_24991_25018[(2)] = tc);

(statearr_24991_25018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (5))){
var inst_24960 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24961 = cljs.core.async.close_BANG_.call(null,fc);
var state_24980__$1 = (function (){var statearr_24992 = state_24980;
(statearr_24992[(8)] = inst_24960);

return statearr_24992;
})();
var statearr_24993_25019 = state_24980__$1;
(statearr_24993_25019[(2)] = inst_24961);

(statearr_24993_25019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (14))){
var inst_24974 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_24994_25020 = state_24980__$1;
(statearr_24994_25020[(2)] = inst_24974);

(statearr_24994_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (10))){
var state_24980__$1 = state_24980;
var statearr_24995_25021 = state_24980__$1;
(statearr_24995_25021[(2)] = fc);

(statearr_24995_25021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (8))){
var inst_24969 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
if(cljs.core.truth_(inst_24969)){
var statearr_24996_25022 = state_24980__$1;
(statearr_24996_25022[(1)] = (12));

} else {
var statearr_24997_25023 = state_24980__$1;
(statearr_24997_25023[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___25009,tc,fc))
;
return ((function (switch__24219__auto__,c__24331__auto___25009,tc,fc){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_25001 = [null,null,null,null,null,null,null,null,null];
(statearr_25001[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_25001[(1)] = (1));

return statearr_25001;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_24980){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_24980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e25002){if((e25002 instanceof Object)){
var ex__24223__auto__ = e25002;
var statearr_25003_25024 = state_24980;
(statearr_25003_25024[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25025 = state_24980;
state_24980 = G__25025;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_24980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_24980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___25009,tc,fc))
})();
var state__24333__auto__ = (function (){var statearr_25004 = f__24332__auto__.call(null);
(statearr_25004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___25009);

return statearr_25004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___25009,tc,fc))
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
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25091_25112 = state_25089__$1;
(statearr_25091_25112[(2)] = inst_25085);

(statearr_25091_25112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (1))){
var inst_25069 = init;
var state_25089__$1 = (function (){var statearr_25092 = state_25089;
(statearr_25092[(7)] = inst_25069);

return statearr_25092;
})();
var statearr_25093_25113 = state_25089__$1;
(statearr_25093_25113[(2)] = null);

(statearr_25093_25113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25072 = (state_25089[(8)]);
var inst_25072__$1 = (state_25089[(2)]);
var inst_25073 = (inst_25072__$1 == null);
var state_25089__$1 = (function (){var statearr_25094 = state_25089;
(statearr_25094[(8)] = inst_25072__$1);

return statearr_25094;
})();
if(cljs.core.truth_(inst_25073)){
var statearr_25095_25114 = state_25089__$1;
(statearr_25095_25114[(1)] = (5));

} else {
var statearr_25096_25115 = state_25089__$1;
(statearr_25096_25115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var inst_25069 = (state_25089[(7)]);
var inst_25076 = (state_25089[(9)]);
var inst_25072 = (state_25089[(8)]);
var inst_25076__$1 = f.call(null,inst_25069,inst_25072);
var inst_25077 = cljs.core.reduced_QMARK_.call(null,inst_25076__$1);
var state_25089__$1 = (function (){var statearr_25097 = state_25089;
(statearr_25097[(9)] = inst_25076__$1);

return statearr_25097;
})();
if(inst_25077){
var statearr_25098_25116 = state_25089__$1;
(statearr_25098_25116[(1)] = (8));

} else {
var statearr_25099_25117 = state_25089__$1;
(statearr_25099_25117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),ch);
} else {
if((state_val_25090 === (9))){
var inst_25076 = (state_25089[(9)]);
var inst_25069 = inst_25076;
var state_25089__$1 = (function (){var statearr_25100 = state_25089;
(statearr_25100[(7)] = inst_25069);

return statearr_25100;
})();
var statearr_25101_25118 = state_25089__$1;
(statearr_25101_25118[(2)] = null);

(statearr_25101_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var inst_25069 = (state_25089[(7)]);
var state_25089__$1 = state_25089;
var statearr_25102_25119 = state_25089__$1;
(statearr_25102_25119[(2)] = inst_25069);

(statearr_25102_25119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (10))){
var inst_25083 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25103_25120 = state_25089__$1;
(statearr_25103_25120[(2)] = inst_25083);

(statearr_25103_25120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (8))){
var inst_25076 = (state_25089[(9)]);
var inst_25079 = cljs.core.deref.call(null,inst_25076);
var state_25089__$1 = state_25089;
var statearr_25104_25121 = state_25089__$1;
(statearr_25104_25121[(2)] = inst_25079);

(statearr_25104_25121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto__))
;
return ((function (switch__24219__auto__,c__24331__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24220__auto____0 = (function (){
var statearr_25108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25108[(0)] = cljs$core$async$reduce_$_state_machine__24220__auto__);

(statearr_25108[(1)] = (1));

return statearr_25108;
});
var cljs$core$async$reduce_$_state_machine__24220__auto____1 = (function (state_25089){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e25109){if((e25109 instanceof Object)){
var ex__24223__auto__ = e25109;
var statearr_25110_25122 = state_25089;
(statearr_25110_25122[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25123 = state_25089;
state_25089 = G__25123;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24220__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24220__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24220__auto____0;
cljs$core$async$reduce_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24220__auto____1;
return cljs$core$async$reduce_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__))
})();
var state__24333__auto__ = (function (){var statearr_25111 = f__24332__auto__.call(null);
(statearr_25111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_25111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__))
);

return c__24331__auto__;
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
var args25124 = [];
var len__22721__auto___25176 = arguments.length;
var i__22722__auto___25177 = (0);
while(true){
if((i__22722__auto___25177 < len__22721__auto___25176)){
args25124.push((arguments[i__22722__auto___25177]));

var G__25178 = (i__22722__auto___25177 + (1));
i__22722__auto___25177 = G__25178;
continue;
} else {
}
break;
}

var G__25126 = args25124.length;
switch (G__25126) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25124.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__){
return (function (state_25151){
var state_val_25152 = (state_25151[(1)]);
if((state_val_25152 === (7))){
var inst_25133 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25153_25180 = state_25151__$1;
(statearr_25153_25180[(2)] = inst_25133);

(statearr_25153_25180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (1))){
var inst_25127 = cljs.core.seq.call(null,coll);
var inst_25128 = inst_25127;
var state_25151__$1 = (function (){var statearr_25154 = state_25151;
(statearr_25154[(7)] = inst_25128);

return statearr_25154;
})();
var statearr_25155_25181 = state_25151__$1;
(statearr_25155_25181[(2)] = null);

(statearr_25155_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (4))){
var inst_25128 = (state_25151[(7)]);
var inst_25131 = cljs.core.first.call(null,inst_25128);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25151__$1,(7),ch,inst_25131);
} else {
if((state_val_25152 === (13))){
var inst_25145 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25156_25182 = state_25151__$1;
(statearr_25156_25182[(2)] = inst_25145);

(statearr_25156_25182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (6))){
var inst_25136 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25136)){
var statearr_25157_25183 = state_25151__$1;
(statearr_25157_25183[(1)] = (8));

} else {
var statearr_25158_25184 = state_25151__$1;
(statearr_25158_25184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (3))){
var inst_25149 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25151__$1,inst_25149);
} else {
if((state_val_25152 === (12))){
var state_25151__$1 = state_25151;
var statearr_25159_25185 = state_25151__$1;
(statearr_25159_25185[(2)] = null);

(statearr_25159_25185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (2))){
var inst_25128 = (state_25151[(7)]);
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25128)){
var statearr_25160_25186 = state_25151__$1;
(statearr_25160_25186[(1)] = (4));

} else {
var statearr_25161_25187 = state_25151__$1;
(statearr_25161_25187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (11))){
var inst_25142 = cljs.core.async.close_BANG_.call(null,ch);
var state_25151__$1 = state_25151;
var statearr_25162_25188 = state_25151__$1;
(statearr_25162_25188[(2)] = inst_25142);

(statearr_25162_25188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (9))){
var state_25151__$1 = state_25151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25163_25189 = state_25151__$1;
(statearr_25163_25189[(1)] = (11));

} else {
var statearr_25164_25190 = state_25151__$1;
(statearr_25164_25190[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (5))){
var inst_25128 = (state_25151[(7)]);
var state_25151__$1 = state_25151;
var statearr_25165_25191 = state_25151__$1;
(statearr_25165_25191[(2)] = inst_25128);

(statearr_25165_25191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (10))){
var inst_25147 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25166_25192 = state_25151__$1;
(statearr_25166_25192[(2)] = inst_25147);

(statearr_25166_25192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (8))){
var inst_25128 = (state_25151[(7)]);
var inst_25138 = cljs.core.next.call(null,inst_25128);
var inst_25128__$1 = inst_25138;
var state_25151__$1 = (function (){var statearr_25167 = state_25151;
(statearr_25167[(7)] = inst_25128__$1);

return statearr_25167;
})();
var statearr_25168_25193 = state_25151__$1;
(statearr_25168_25193[(2)] = null);

(statearr_25168_25193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto__))
;
return ((function (switch__24219__auto__,c__24331__auto__){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_25172 = [null,null,null,null,null,null,null,null];
(statearr_25172[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_25172[(1)] = (1));

return statearr_25172;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_25151){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_25151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e25173){if((e25173 instanceof Object)){
var ex__24223__auto__ = e25173;
var statearr_25174_25194 = state_25151;
(statearr_25174_25194[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25195 = state_25151;
state_25151 = G__25195;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_25151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_25151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__))
})();
var state__24333__auto__ = (function (){var statearr_25175 = f__24332__auto__.call(null);
(statearr_25175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_25175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__))
);

return c__24331__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__22314__auto__ = (((_ == null))?null:_);
var m__22315__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,_);
} else {
var m__22315__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22315__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,ch);
} else {
var m__22315__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m);
} else {
var m__22315__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25417 = (function (mult,ch,cs,meta25418){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25418 = meta25418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25419,meta25418__$1){
var self__ = this;
var _25419__$1 = this;
return (new cljs.core.async.t_cljs$core$async25417(self__.mult,self__.ch,self__.cs,meta25418__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25419){
var self__ = this;
var _25419__$1 = this;
return self__.meta25418;
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25418","meta25418",-1343647571,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25417";

cljs.core.async.t_cljs$core$async25417.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async25417");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25417 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25417(mult__$1,ch__$1,cs__$1,meta25418){
return (new cljs.core.async.t_cljs$core$async25417(mult__$1,ch__$1,cs__$1,meta25418));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25417(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24331__auto___25638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___25638,cs,m,dchan,dctr,done){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___25638,cs,m,dchan,dctr,done){
return (function (state_25550){
var state_val_25551 = (state_25550[(1)]);
if((state_val_25551 === (7))){
var inst_25546 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25552_25639 = state_25550__$1;
(statearr_25552_25639[(2)] = inst_25546);

(statearr_25552_25639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (20))){
var inst_25451 = (state_25550[(7)]);
var inst_25461 = cljs.core.first.call(null,inst_25451);
var inst_25462 = cljs.core.nth.call(null,inst_25461,(0),null);
var inst_25463 = cljs.core.nth.call(null,inst_25461,(1),null);
var state_25550__$1 = (function (){var statearr_25553 = state_25550;
(statearr_25553[(8)] = inst_25462);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25463)){
var statearr_25554_25640 = state_25550__$1;
(statearr_25554_25640[(1)] = (22));

} else {
var statearr_25555_25641 = state_25550__$1;
(statearr_25555_25641[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (27))){
var inst_25422 = (state_25550[(9)]);
var inst_25493 = (state_25550[(10)]);
var inst_25491 = (state_25550[(11)]);
var inst_25498 = (state_25550[(12)]);
var inst_25498__$1 = cljs.core._nth.call(null,inst_25491,inst_25493);
var inst_25499 = cljs.core.async.put_BANG_.call(null,inst_25498__$1,inst_25422,done);
var state_25550__$1 = (function (){var statearr_25556 = state_25550;
(statearr_25556[(12)] = inst_25498__$1);

return statearr_25556;
})();
if(cljs.core.truth_(inst_25499)){
var statearr_25557_25642 = state_25550__$1;
(statearr_25557_25642[(1)] = (30));

} else {
var statearr_25558_25643 = state_25550__$1;
(statearr_25558_25643[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (1))){
var state_25550__$1 = state_25550;
var statearr_25559_25644 = state_25550__$1;
(statearr_25559_25644[(2)] = null);

(statearr_25559_25644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (24))){
var inst_25451 = (state_25550[(7)]);
var inst_25468 = (state_25550[(2)]);
var inst_25469 = cljs.core.next.call(null,inst_25451);
var inst_25431 = inst_25469;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25560 = state_25550;
(statearr_25560[(13)] = inst_25433);

(statearr_25560[(14)] = inst_25432);

(statearr_25560[(15)] = inst_25431);

(statearr_25560[(16)] = inst_25434);

(statearr_25560[(17)] = inst_25468);

return statearr_25560;
})();
var statearr_25561_25645 = state_25550__$1;
(statearr_25561_25645[(2)] = null);

(statearr_25561_25645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (39))){
var state_25550__$1 = state_25550;
var statearr_25565_25646 = state_25550__$1;
(statearr_25565_25646[(2)] = null);

(statearr_25565_25646[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (4))){
var inst_25422 = (state_25550[(9)]);
var inst_25422__$1 = (state_25550[(2)]);
var inst_25423 = (inst_25422__$1 == null);
var state_25550__$1 = (function (){var statearr_25566 = state_25550;
(statearr_25566[(9)] = inst_25422__$1);

return statearr_25566;
})();
if(cljs.core.truth_(inst_25423)){
var statearr_25567_25647 = state_25550__$1;
(statearr_25567_25647[(1)] = (5));

} else {
var statearr_25568_25648 = state_25550__$1;
(statearr_25568_25648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (15))){
var inst_25433 = (state_25550[(13)]);
var inst_25432 = (state_25550[(14)]);
var inst_25431 = (state_25550[(15)]);
var inst_25434 = (state_25550[(16)]);
var inst_25447 = (state_25550[(2)]);
var inst_25448 = (inst_25434 + (1));
var tmp25562 = inst_25433;
var tmp25563 = inst_25432;
var tmp25564 = inst_25431;
var inst_25431__$1 = tmp25564;
var inst_25432__$1 = tmp25563;
var inst_25433__$1 = tmp25562;
var inst_25434__$1 = inst_25448;
var state_25550__$1 = (function (){var statearr_25569 = state_25550;
(statearr_25569[(13)] = inst_25433__$1);

(statearr_25569[(14)] = inst_25432__$1);

(statearr_25569[(15)] = inst_25431__$1);

(statearr_25569[(18)] = inst_25447);

(statearr_25569[(16)] = inst_25434__$1);

return statearr_25569;
})();
var statearr_25570_25649 = state_25550__$1;
(statearr_25570_25649[(2)] = null);

(statearr_25570_25649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (21))){
var inst_25472 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25574_25650 = state_25550__$1;
(statearr_25574_25650[(2)] = inst_25472);

(statearr_25574_25650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (31))){
var inst_25498 = (state_25550[(12)]);
var inst_25502 = done.call(null,null);
var inst_25503 = cljs.core.async.untap_STAR_.call(null,m,inst_25498);
var state_25550__$1 = (function (){var statearr_25575 = state_25550;
(statearr_25575[(19)] = inst_25502);

return statearr_25575;
})();
var statearr_25576_25651 = state_25550__$1;
(statearr_25576_25651[(2)] = inst_25503);

(statearr_25576_25651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (32))){
var inst_25493 = (state_25550[(10)]);
var inst_25491 = (state_25550[(11)]);
var inst_25490 = (state_25550[(20)]);
var inst_25492 = (state_25550[(21)]);
var inst_25505 = (state_25550[(2)]);
var inst_25506 = (inst_25493 + (1));
var tmp25571 = inst_25491;
var tmp25572 = inst_25490;
var tmp25573 = inst_25492;
var inst_25490__$1 = tmp25572;
var inst_25491__$1 = tmp25571;
var inst_25492__$1 = tmp25573;
var inst_25493__$1 = inst_25506;
var state_25550__$1 = (function (){var statearr_25577 = state_25550;
(statearr_25577[(10)] = inst_25493__$1);

(statearr_25577[(11)] = inst_25491__$1);

(statearr_25577[(20)] = inst_25490__$1);

(statearr_25577[(22)] = inst_25505);

(statearr_25577[(21)] = inst_25492__$1);

return statearr_25577;
})();
var statearr_25578_25652 = state_25550__$1;
(statearr_25578_25652[(2)] = null);

(statearr_25578_25652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (40))){
var inst_25518 = (state_25550[(23)]);
var inst_25522 = done.call(null,null);
var inst_25523 = cljs.core.async.untap_STAR_.call(null,m,inst_25518);
var state_25550__$1 = (function (){var statearr_25579 = state_25550;
(statearr_25579[(24)] = inst_25522);

return statearr_25579;
})();
var statearr_25580_25653 = state_25550__$1;
(statearr_25580_25653[(2)] = inst_25523);

(statearr_25580_25653[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (33))){
var inst_25509 = (state_25550[(25)]);
var inst_25511 = cljs.core.chunked_seq_QMARK_.call(null,inst_25509);
var state_25550__$1 = state_25550;
if(inst_25511){
var statearr_25581_25654 = state_25550__$1;
(statearr_25581_25654[(1)] = (36));

} else {
var statearr_25582_25655 = state_25550__$1;
(statearr_25582_25655[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (13))){
var inst_25441 = (state_25550[(26)]);
var inst_25444 = cljs.core.async.close_BANG_.call(null,inst_25441);
var state_25550__$1 = state_25550;
var statearr_25583_25656 = state_25550__$1;
(statearr_25583_25656[(2)] = inst_25444);

(statearr_25583_25656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (22))){
var inst_25462 = (state_25550[(8)]);
var inst_25465 = cljs.core.async.close_BANG_.call(null,inst_25462);
var state_25550__$1 = state_25550;
var statearr_25584_25657 = state_25550__$1;
(statearr_25584_25657[(2)] = inst_25465);

(statearr_25584_25657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (36))){
var inst_25509 = (state_25550[(25)]);
var inst_25513 = cljs.core.chunk_first.call(null,inst_25509);
var inst_25514 = cljs.core.chunk_rest.call(null,inst_25509);
var inst_25515 = cljs.core.count.call(null,inst_25513);
var inst_25490 = inst_25514;
var inst_25491 = inst_25513;
var inst_25492 = inst_25515;
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25585 = state_25550;
(statearr_25585[(10)] = inst_25493);

(statearr_25585[(11)] = inst_25491);

(statearr_25585[(20)] = inst_25490);

(statearr_25585[(21)] = inst_25492);

return statearr_25585;
})();
var statearr_25586_25658 = state_25550__$1;
(statearr_25586_25658[(2)] = null);

(statearr_25586_25658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (41))){
var inst_25509 = (state_25550[(25)]);
var inst_25525 = (state_25550[(2)]);
var inst_25526 = cljs.core.next.call(null,inst_25509);
var inst_25490 = inst_25526;
var inst_25491 = null;
var inst_25492 = (0);
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25587 = state_25550;
(statearr_25587[(10)] = inst_25493);

(statearr_25587[(11)] = inst_25491);

(statearr_25587[(27)] = inst_25525);

(statearr_25587[(20)] = inst_25490);

(statearr_25587[(21)] = inst_25492);

return statearr_25587;
})();
var statearr_25588_25659 = state_25550__$1;
(statearr_25588_25659[(2)] = null);

(statearr_25588_25659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (43))){
var state_25550__$1 = state_25550;
var statearr_25589_25660 = state_25550__$1;
(statearr_25589_25660[(2)] = null);

(statearr_25589_25660[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (29))){
var inst_25534 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25590_25661 = state_25550__$1;
(statearr_25590_25661[(2)] = inst_25534);

(statearr_25590_25661[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (44))){
var inst_25543 = (state_25550[(2)]);
var state_25550__$1 = (function (){var statearr_25591 = state_25550;
(statearr_25591[(28)] = inst_25543);

return statearr_25591;
})();
var statearr_25592_25662 = state_25550__$1;
(statearr_25592_25662[(2)] = null);

(statearr_25592_25662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (6))){
var inst_25482 = (state_25550[(29)]);
var inst_25481 = cljs.core.deref.call(null,cs);
var inst_25482__$1 = cljs.core.keys.call(null,inst_25481);
var inst_25483 = cljs.core.count.call(null,inst_25482__$1);
var inst_25484 = cljs.core.reset_BANG_.call(null,dctr,inst_25483);
var inst_25489 = cljs.core.seq.call(null,inst_25482__$1);
var inst_25490 = inst_25489;
var inst_25491 = null;
var inst_25492 = (0);
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25593 = state_25550;
(statearr_25593[(10)] = inst_25493);

(statearr_25593[(11)] = inst_25491);

(statearr_25593[(29)] = inst_25482__$1);

(statearr_25593[(20)] = inst_25490);

(statearr_25593[(21)] = inst_25492);

(statearr_25593[(30)] = inst_25484);

return statearr_25593;
})();
var statearr_25594_25663 = state_25550__$1;
(statearr_25594_25663[(2)] = null);

(statearr_25594_25663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (28))){
var inst_25509 = (state_25550[(25)]);
var inst_25490 = (state_25550[(20)]);
var inst_25509__$1 = cljs.core.seq.call(null,inst_25490);
var state_25550__$1 = (function (){var statearr_25595 = state_25550;
(statearr_25595[(25)] = inst_25509__$1);

return statearr_25595;
})();
if(inst_25509__$1){
var statearr_25596_25664 = state_25550__$1;
(statearr_25596_25664[(1)] = (33));

} else {
var statearr_25597_25665 = state_25550__$1;
(statearr_25597_25665[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (25))){
var inst_25493 = (state_25550[(10)]);
var inst_25492 = (state_25550[(21)]);
var inst_25495 = (inst_25493 < inst_25492);
var inst_25496 = inst_25495;
var state_25550__$1 = state_25550;
if(cljs.core.truth_(inst_25496)){
var statearr_25598_25666 = state_25550__$1;
(statearr_25598_25666[(1)] = (27));

} else {
var statearr_25599_25667 = state_25550__$1;
(statearr_25599_25667[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (34))){
var state_25550__$1 = state_25550;
var statearr_25600_25668 = state_25550__$1;
(statearr_25600_25668[(2)] = null);

(statearr_25600_25668[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (17))){
var state_25550__$1 = state_25550;
var statearr_25601_25669 = state_25550__$1;
(statearr_25601_25669[(2)] = null);

(statearr_25601_25669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (3))){
var inst_25548 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25550__$1,inst_25548);
} else {
if((state_val_25551 === (12))){
var inst_25477 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25602_25670 = state_25550__$1;
(statearr_25602_25670[(2)] = inst_25477);

(statearr_25602_25670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (2))){
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25550__$1,(4),ch);
} else {
if((state_val_25551 === (23))){
var state_25550__$1 = state_25550;
var statearr_25603_25671 = state_25550__$1;
(statearr_25603_25671[(2)] = null);

(statearr_25603_25671[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (35))){
var inst_25532 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25604_25672 = state_25550__$1;
(statearr_25604_25672[(2)] = inst_25532);

(statearr_25604_25672[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (19))){
var inst_25451 = (state_25550[(7)]);
var inst_25455 = cljs.core.chunk_first.call(null,inst_25451);
var inst_25456 = cljs.core.chunk_rest.call(null,inst_25451);
var inst_25457 = cljs.core.count.call(null,inst_25455);
var inst_25431 = inst_25456;
var inst_25432 = inst_25455;
var inst_25433 = inst_25457;
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25605 = state_25550;
(statearr_25605[(13)] = inst_25433);

(statearr_25605[(14)] = inst_25432);

(statearr_25605[(15)] = inst_25431);

(statearr_25605[(16)] = inst_25434);

return statearr_25605;
})();
var statearr_25606_25673 = state_25550__$1;
(statearr_25606_25673[(2)] = null);

(statearr_25606_25673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (11))){
var inst_25431 = (state_25550[(15)]);
var inst_25451 = (state_25550[(7)]);
var inst_25451__$1 = cljs.core.seq.call(null,inst_25431);
var state_25550__$1 = (function (){var statearr_25607 = state_25550;
(statearr_25607[(7)] = inst_25451__$1);

return statearr_25607;
})();
if(inst_25451__$1){
var statearr_25608_25674 = state_25550__$1;
(statearr_25608_25674[(1)] = (16));

} else {
var statearr_25609_25675 = state_25550__$1;
(statearr_25609_25675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (9))){
var inst_25479 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25610_25676 = state_25550__$1;
(statearr_25610_25676[(2)] = inst_25479);

(statearr_25610_25676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (5))){
var inst_25429 = cljs.core.deref.call(null,cs);
var inst_25430 = cljs.core.seq.call(null,inst_25429);
var inst_25431 = inst_25430;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25611 = state_25550;
(statearr_25611[(13)] = inst_25433);

(statearr_25611[(14)] = inst_25432);

(statearr_25611[(15)] = inst_25431);

(statearr_25611[(16)] = inst_25434);

return statearr_25611;
})();
var statearr_25612_25677 = state_25550__$1;
(statearr_25612_25677[(2)] = null);

(statearr_25612_25677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (14))){
var state_25550__$1 = state_25550;
var statearr_25613_25678 = state_25550__$1;
(statearr_25613_25678[(2)] = null);

(statearr_25613_25678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (45))){
var inst_25540 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25614_25679 = state_25550__$1;
(statearr_25614_25679[(2)] = inst_25540);

(statearr_25614_25679[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (26))){
var inst_25482 = (state_25550[(29)]);
var inst_25536 = (state_25550[(2)]);
var inst_25537 = cljs.core.seq.call(null,inst_25482);
var state_25550__$1 = (function (){var statearr_25615 = state_25550;
(statearr_25615[(31)] = inst_25536);

return statearr_25615;
})();
if(inst_25537){
var statearr_25616_25680 = state_25550__$1;
(statearr_25616_25680[(1)] = (42));

} else {
var statearr_25617_25681 = state_25550__$1;
(statearr_25617_25681[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (16))){
var inst_25451 = (state_25550[(7)]);
var inst_25453 = cljs.core.chunked_seq_QMARK_.call(null,inst_25451);
var state_25550__$1 = state_25550;
if(inst_25453){
var statearr_25618_25682 = state_25550__$1;
(statearr_25618_25682[(1)] = (19));

} else {
var statearr_25619_25683 = state_25550__$1;
(statearr_25619_25683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (38))){
var inst_25529 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25620_25684 = state_25550__$1;
(statearr_25620_25684[(2)] = inst_25529);

(statearr_25620_25684[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (30))){
var state_25550__$1 = state_25550;
var statearr_25621_25685 = state_25550__$1;
(statearr_25621_25685[(2)] = null);

(statearr_25621_25685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (10))){
var inst_25432 = (state_25550[(14)]);
var inst_25434 = (state_25550[(16)]);
var inst_25440 = cljs.core._nth.call(null,inst_25432,inst_25434);
var inst_25441 = cljs.core.nth.call(null,inst_25440,(0),null);
var inst_25442 = cljs.core.nth.call(null,inst_25440,(1),null);
var state_25550__$1 = (function (){var statearr_25622 = state_25550;
(statearr_25622[(26)] = inst_25441);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25442)){
var statearr_25623_25686 = state_25550__$1;
(statearr_25623_25686[(1)] = (13));

} else {
var statearr_25624_25687 = state_25550__$1;
(statearr_25624_25687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (18))){
var inst_25475 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25625_25688 = state_25550__$1;
(statearr_25625_25688[(2)] = inst_25475);

(statearr_25625_25688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (42))){
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25550__$1,(45),dchan);
} else {
if((state_val_25551 === (37))){
var inst_25422 = (state_25550[(9)]);
var inst_25509 = (state_25550[(25)]);
var inst_25518 = (state_25550[(23)]);
var inst_25518__$1 = cljs.core.first.call(null,inst_25509);
var inst_25519 = cljs.core.async.put_BANG_.call(null,inst_25518__$1,inst_25422,done);
var state_25550__$1 = (function (){var statearr_25626 = state_25550;
(statearr_25626[(23)] = inst_25518__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25519)){
var statearr_25627_25689 = state_25550__$1;
(statearr_25627_25689[(1)] = (39));

} else {
var statearr_25628_25690 = state_25550__$1;
(statearr_25628_25690[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (8))){
var inst_25433 = (state_25550[(13)]);
var inst_25434 = (state_25550[(16)]);
var inst_25436 = (inst_25434 < inst_25433);
var inst_25437 = inst_25436;
var state_25550__$1 = state_25550;
if(cljs.core.truth_(inst_25437)){
var statearr_25629_25691 = state_25550__$1;
(statearr_25629_25691[(1)] = (10));

} else {
var statearr_25630_25692 = state_25550__$1;
(statearr_25630_25692[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___25638,cs,m,dchan,dctr,done))
;
return ((function (switch__24219__auto__,c__24331__auto___25638,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24220__auto__ = null;
var cljs$core$async$mult_$_state_machine__24220__auto____0 = (function (){
var statearr_25634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25634[(0)] = cljs$core$async$mult_$_state_machine__24220__auto__);

(statearr_25634[(1)] = (1));

return statearr_25634;
});
var cljs$core$async$mult_$_state_machine__24220__auto____1 = (function (state_25550){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_25550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e25635){if((e25635 instanceof Object)){
var ex__24223__auto__ = e25635;
var statearr_25636_25693 = state_25550;
(statearr_25636_25693[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25694 = state_25550;
state_25550 = G__25694;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24220__auto__ = function(state_25550){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24220__auto____1.call(this,state_25550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24220__auto____0;
cljs$core$async$mult_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24220__auto____1;
return cljs$core$async$mult_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___25638,cs,m,dchan,dctr,done))
})();
var state__24333__auto__ = (function (){var statearr_25637 = f__24332__auto__.call(null);
(statearr_25637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___25638);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___25638,cs,m,dchan,dctr,done))
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
var args25695 = [];
var len__22721__auto___25698 = arguments.length;
var i__22722__auto___25699 = (0);
while(true){
if((i__22722__auto___25699 < len__22721__auto___25698)){
args25695.push((arguments[i__22722__auto___25699]));

var G__25700 = (i__22722__auto___25699 + (1));
i__22722__auto___25699 = G__25700;
continue;
} else {
}
break;
}

var G__25697 = args25695.length;
switch (G__25697) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25695.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,ch);
} else {
var m__22315__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,ch);
} else {
var m__22315__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m);
} else {
var m__22315__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,state_map);
} else {
var m__22315__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22314__auto__ = (((m == null))?null:m);
var m__22315__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,m,mode);
} else {
var m__22315__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22728__auto__ = [];
var len__22721__auto___25712 = arguments.length;
var i__22722__auto___25713 = (0);
while(true){
if((i__22722__auto___25713 < len__22721__auto___25712)){
args__22728__auto__.push((arguments[i__22722__auto___25713]));

var G__25714 = (i__22722__auto___25713 + (1));
i__22722__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((3) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22729__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25706){
var map__25707 = p__25706;
var map__25707__$1 = ((((!((map__25707 == null)))?((((map__25707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25707):map__25707);
var opts = map__25707__$1;
var statearr_25709_25715 = state;
(statearr_25709_25715[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25707,map__25707__$1,opts){
return (function (val){
var statearr_25710_25716 = state;
(statearr_25710_25716[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25707,map__25707__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25711_25717 = state;
(statearr_25711_25717[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25702){
var G__25703 = cljs.core.first.call(null,seq25702);
var seq25702__$1 = cljs.core.next.call(null,seq25702);
var G__25704 = cljs.core.first.call(null,seq25702__$1);
var seq25702__$2 = cljs.core.next.call(null,seq25702__$1);
var G__25705 = cljs.core.first.call(null,seq25702__$2);
var seq25702__$3 = cljs.core.next.call(null,seq25702__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25703,G__25704,G__25705,seq25702__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25881 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25882){
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
this.meta25882 = meta25882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25883,meta25882__$1){
var self__ = this;
var _25883__$1 = this;
return (new cljs.core.async.t_cljs$core$async25881(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25882__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25883){
var self__ = this;
var _25883__$1 = this;
return self__.meta25882;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25882","meta25882",-1411646807,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25881";

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async25881");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25881 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25881(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25882){
return (new cljs.core.async.t_cljs$core$async25881(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25882));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25881(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24331__auto___26044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25981){
var state_val_25982 = (state_25981[(1)]);
if((state_val_25982 === (7))){
var inst_25899 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_25983_26045 = state_25981__$1;
(statearr_25983_26045[(2)] = inst_25899);

(statearr_25983_26045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (20))){
var inst_25911 = (state_25981[(7)]);
var state_25981__$1 = state_25981;
var statearr_25984_26046 = state_25981__$1;
(statearr_25984_26046[(2)] = inst_25911);

(statearr_25984_26046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (27))){
var state_25981__$1 = state_25981;
var statearr_25985_26047 = state_25981__$1;
(statearr_25985_26047[(2)] = null);

(statearr_25985_26047[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (1))){
var inst_25887 = (state_25981[(8)]);
var inst_25887__$1 = calc_state.call(null);
var inst_25889 = (inst_25887__$1 == null);
var inst_25890 = cljs.core.not.call(null,inst_25889);
var state_25981__$1 = (function (){var statearr_25986 = state_25981;
(statearr_25986[(8)] = inst_25887__$1);

return statearr_25986;
})();
if(inst_25890){
var statearr_25987_26048 = state_25981__$1;
(statearr_25987_26048[(1)] = (2));

} else {
var statearr_25988_26049 = state_25981__$1;
(statearr_25988_26049[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (24))){
var inst_25941 = (state_25981[(9)]);
var inst_25934 = (state_25981[(10)]);
var inst_25955 = (state_25981[(11)]);
var inst_25955__$1 = inst_25934.call(null,inst_25941);
var state_25981__$1 = (function (){var statearr_25989 = state_25981;
(statearr_25989[(11)] = inst_25955__$1);

return statearr_25989;
})();
if(cljs.core.truth_(inst_25955__$1)){
var statearr_25990_26050 = state_25981__$1;
(statearr_25990_26050[(1)] = (29));

} else {
var statearr_25991_26051 = state_25981__$1;
(statearr_25991_26051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (4))){
var inst_25902 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25902)){
var statearr_25992_26052 = state_25981__$1;
(statearr_25992_26052[(1)] = (8));

} else {
var statearr_25993_26053 = state_25981__$1;
(statearr_25993_26053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (15))){
var inst_25928 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25928)){
var statearr_25994_26054 = state_25981__$1;
(statearr_25994_26054[(1)] = (19));

} else {
var statearr_25995_26055 = state_25981__$1;
(statearr_25995_26055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (21))){
var inst_25933 = (state_25981[(12)]);
var inst_25933__$1 = (state_25981[(2)]);
var inst_25934 = cljs.core.get.call(null,inst_25933__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25935 = cljs.core.get.call(null,inst_25933__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25936 = cljs.core.get.call(null,inst_25933__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25981__$1 = (function (){var statearr_25996 = state_25981;
(statearr_25996[(10)] = inst_25934);

(statearr_25996[(12)] = inst_25933__$1);

(statearr_25996[(13)] = inst_25935);

return statearr_25996;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25981__$1,(22),inst_25936);
} else {
if((state_val_25982 === (31))){
var inst_25963 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25963)){
var statearr_25997_26056 = state_25981__$1;
(statearr_25997_26056[(1)] = (32));

} else {
var statearr_25998_26057 = state_25981__$1;
(statearr_25998_26057[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (32))){
var inst_25940 = (state_25981[(14)]);
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25981__$1,(35),out,inst_25940);
} else {
if((state_val_25982 === (33))){
var inst_25933 = (state_25981[(12)]);
var inst_25911 = inst_25933;
var state_25981__$1 = (function (){var statearr_25999 = state_25981;
(statearr_25999[(7)] = inst_25911);

return statearr_25999;
})();
var statearr_26000_26058 = state_25981__$1;
(statearr_26000_26058[(2)] = null);

(statearr_26000_26058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (13))){
var inst_25911 = (state_25981[(7)]);
var inst_25918 = inst_25911.cljs$lang$protocol_mask$partition0$;
var inst_25919 = (inst_25918 & (64));
var inst_25920 = inst_25911.cljs$core$ISeq$;
var inst_25921 = (inst_25919) || (inst_25920);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25921)){
var statearr_26001_26059 = state_25981__$1;
(statearr_26001_26059[(1)] = (16));

} else {
var statearr_26002_26060 = state_25981__$1;
(statearr_26002_26060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (22))){
var inst_25941 = (state_25981[(9)]);
var inst_25940 = (state_25981[(14)]);
var inst_25939 = (state_25981[(2)]);
var inst_25940__$1 = cljs.core.nth.call(null,inst_25939,(0),null);
var inst_25941__$1 = cljs.core.nth.call(null,inst_25939,(1),null);
var inst_25942 = (inst_25940__$1 == null);
var inst_25943 = cljs.core._EQ_.call(null,inst_25941__$1,change);
var inst_25944 = (inst_25942) || (inst_25943);
var state_25981__$1 = (function (){var statearr_26003 = state_25981;
(statearr_26003[(9)] = inst_25941__$1);

(statearr_26003[(14)] = inst_25940__$1);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25944)){
var statearr_26004_26061 = state_25981__$1;
(statearr_26004_26061[(1)] = (23));

} else {
var statearr_26005_26062 = state_25981__$1;
(statearr_26005_26062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (36))){
var inst_25933 = (state_25981[(12)]);
var inst_25911 = inst_25933;
var state_25981__$1 = (function (){var statearr_26006 = state_25981;
(statearr_26006[(7)] = inst_25911);

return statearr_26006;
})();
var statearr_26007_26063 = state_25981__$1;
(statearr_26007_26063[(2)] = null);

(statearr_26007_26063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (29))){
var inst_25955 = (state_25981[(11)]);
var state_25981__$1 = state_25981;
var statearr_26008_26064 = state_25981__$1;
(statearr_26008_26064[(2)] = inst_25955);

(statearr_26008_26064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (6))){
var state_25981__$1 = state_25981;
var statearr_26009_26065 = state_25981__$1;
(statearr_26009_26065[(2)] = false);

(statearr_26009_26065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (28))){
var inst_25951 = (state_25981[(2)]);
var inst_25952 = calc_state.call(null);
var inst_25911 = inst_25952;
var state_25981__$1 = (function (){var statearr_26010 = state_25981;
(statearr_26010[(15)] = inst_25951);

(statearr_26010[(7)] = inst_25911);

return statearr_26010;
})();
var statearr_26011_26066 = state_25981__$1;
(statearr_26011_26066[(2)] = null);

(statearr_26011_26066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (25))){
var inst_25977 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_26012_26067 = state_25981__$1;
(statearr_26012_26067[(2)] = inst_25977);

(statearr_26012_26067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (34))){
var inst_25975 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_26013_26068 = state_25981__$1;
(statearr_26013_26068[(2)] = inst_25975);

(statearr_26013_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (17))){
var state_25981__$1 = state_25981;
var statearr_26014_26069 = state_25981__$1;
(statearr_26014_26069[(2)] = false);

(statearr_26014_26069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (3))){
var state_25981__$1 = state_25981;
var statearr_26015_26070 = state_25981__$1;
(statearr_26015_26070[(2)] = false);

(statearr_26015_26070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (12))){
var inst_25979 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25981__$1,inst_25979);
} else {
if((state_val_25982 === (2))){
var inst_25887 = (state_25981[(8)]);
var inst_25892 = inst_25887.cljs$lang$protocol_mask$partition0$;
var inst_25893 = (inst_25892 & (64));
var inst_25894 = inst_25887.cljs$core$ISeq$;
var inst_25895 = (inst_25893) || (inst_25894);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25895)){
var statearr_26016_26071 = state_25981__$1;
(statearr_26016_26071[(1)] = (5));

} else {
var statearr_26017_26072 = state_25981__$1;
(statearr_26017_26072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (23))){
var inst_25940 = (state_25981[(14)]);
var inst_25946 = (inst_25940 == null);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25946)){
var statearr_26018_26073 = state_25981__$1;
(statearr_26018_26073[(1)] = (26));

} else {
var statearr_26019_26074 = state_25981__$1;
(statearr_26019_26074[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (35))){
var inst_25966 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25966)){
var statearr_26020_26075 = state_25981__$1;
(statearr_26020_26075[(1)] = (36));

} else {
var statearr_26021_26076 = state_25981__$1;
(statearr_26021_26076[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (19))){
var inst_25911 = (state_25981[(7)]);
var inst_25930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25911);
var state_25981__$1 = state_25981;
var statearr_26022_26077 = state_25981__$1;
(statearr_26022_26077[(2)] = inst_25930);

(statearr_26022_26077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (11))){
var inst_25911 = (state_25981[(7)]);
var inst_25915 = (inst_25911 == null);
var inst_25916 = cljs.core.not.call(null,inst_25915);
var state_25981__$1 = state_25981;
if(inst_25916){
var statearr_26023_26078 = state_25981__$1;
(statearr_26023_26078[(1)] = (13));

} else {
var statearr_26024_26079 = state_25981__$1;
(statearr_26024_26079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (9))){
var inst_25887 = (state_25981[(8)]);
var state_25981__$1 = state_25981;
var statearr_26025_26080 = state_25981__$1;
(statearr_26025_26080[(2)] = inst_25887);

(statearr_26025_26080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (5))){
var state_25981__$1 = state_25981;
var statearr_26026_26081 = state_25981__$1;
(statearr_26026_26081[(2)] = true);

(statearr_26026_26081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (14))){
var state_25981__$1 = state_25981;
var statearr_26027_26082 = state_25981__$1;
(statearr_26027_26082[(2)] = false);

(statearr_26027_26082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (26))){
var inst_25941 = (state_25981[(9)]);
var inst_25948 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25941);
var state_25981__$1 = state_25981;
var statearr_26028_26083 = state_25981__$1;
(statearr_26028_26083[(2)] = inst_25948);

(statearr_26028_26083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (16))){
var state_25981__$1 = state_25981;
var statearr_26029_26084 = state_25981__$1;
(statearr_26029_26084[(2)] = true);

(statearr_26029_26084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (38))){
var inst_25971 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_26030_26085 = state_25981__$1;
(statearr_26030_26085[(2)] = inst_25971);

(statearr_26030_26085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (30))){
var inst_25941 = (state_25981[(9)]);
var inst_25934 = (state_25981[(10)]);
var inst_25935 = (state_25981[(13)]);
var inst_25958 = cljs.core.empty_QMARK_.call(null,inst_25934);
var inst_25959 = inst_25935.call(null,inst_25941);
var inst_25960 = cljs.core.not.call(null,inst_25959);
var inst_25961 = (inst_25958) && (inst_25960);
var state_25981__$1 = state_25981;
var statearr_26031_26086 = state_25981__$1;
(statearr_26031_26086[(2)] = inst_25961);

(statearr_26031_26086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (10))){
var inst_25887 = (state_25981[(8)]);
var inst_25907 = (state_25981[(2)]);
var inst_25908 = cljs.core.get.call(null,inst_25907,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25909 = cljs.core.get.call(null,inst_25907,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25910 = cljs.core.get.call(null,inst_25907,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25911 = inst_25887;
var state_25981__$1 = (function (){var statearr_26032 = state_25981;
(statearr_26032[(16)] = inst_25908);

(statearr_26032[(17)] = inst_25910);

(statearr_26032[(18)] = inst_25909);

(statearr_26032[(7)] = inst_25911);

return statearr_26032;
})();
var statearr_26033_26087 = state_25981__$1;
(statearr_26033_26087[(2)] = null);

(statearr_26033_26087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (18))){
var inst_25925 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_26034_26088 = state_25981__$1;
(statearr_26034_26088[(2)] = inst_25925);

(statearr_26034_26088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (37))){
var state_25981__$1 = state_25981;
var statearr_26035_26089 = state_25981__$1;
(statearr_26035_26089[(2)] = null);

(statearr_26035_26089[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (8))){
var inst_25887 = (state_25981[(8)]);
var inst_25904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25887);
var state_25981__$1 = state_25981;
var statearr_26036_26090 = state_25981__$1;
(statearr_26036_26090[(2)] = inst_25904);

(statearr_26036_26090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24219__auto__,c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24220__auto__ = null;
var cljs$core$async$mix_$_state_machine__24220__auto____0 = (function (){
var statearr_26040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26040[(0)] = cljs$core$async$mix_$_state_machine__24220__auto__);

(statearr_26040[(1)] = (1));

return statearr_26040;
});
var cljs$core$async$mix_$_state_machine__24220__auto____1 = (function (state_25981){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_25981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26041){if((e26041 instanceof Object)){
var ex__24223__auto__ = e26041;
var statearr_26042_26091 = state_25981;
(statearr_26042_26091[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26092 = state_25981;
state_25981 = G__26092;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24220__auto__ = function(state_25981){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24220__auto____1.call(this,state_25981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24220__auto____0;
cljs$core$async$mix_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24220__auto____1;
return cljs$core$async$mix_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24333__auto__ = (function (){var statearr_26043 = f__24332__auto__.call(null);
(statearr_26043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26044);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22314__auto__ = (((p == null))?null:p);
var m__22315__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22315__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22314__auto__ = (((p == null))?null:p);
var m__22315__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,p,v,ch);
} else {
var m__22315__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26093 = [];
var len__22721__auto___26096 = arguments.length;
var i__22722__auto___26097 = (0);
while(true){
if((i__22722__auto___26097 < len__22721__auto___26096)){
args26093.push((arguments[i__22722__auto___26097]));

var G__26098 = (i__22722__auto___26097 + (1));
i__22722__auto___26097 = G__26098;
continue;
} else {
}
break;
}

var G__26095 = args26093.length;
switch (G__26095) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26093.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22314__auto__ = (((p == null))?null:p);
var m__22315__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,p);
} else {
var m__22315__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22314__auto__ = (((p == null))?null:p);
var m__22315__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22314__auto__)]);
if(!((m__22315__auto__ == null))){
return m__22315__auto__.call(null,p,v);
} else {
var m__22315__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22315__auto____$1 == null))){
return m__22315__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args26101 = [];
var len__22721__auto___26226 = arguments.length;
var i__22722__auto___26227 = (0);
while(true){
if((i__22722__auto___26227 < len__22721__auto___26226)){
args26101.push((arguments[i__22722__auto___26227]));

var G__26228 = (i__22722__auto___26227 + (1));
i__22722__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var G__26103 = args26101.length;
switch (G__26103) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26101.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21651__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21651__auto__,mults){
return (function (p1__26100_SHARP_){
if(cljs.core.truth_(p1__26100_SHARP_.call(null,topic))){
return p1__26100_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26100_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21651__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26104 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26105){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26105 = meta26105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26106,meta26105__$1){
var self__ = this;
var _26106__$1 = this;
return (new cljs.core.async.t_cljs$core$async26104(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26105__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26106){
var self__ = this;
var _26106__$1 = this;
return self__.meta26105;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26105","meta26105",1385472036,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26104";

cljs.core.async.t_cljs$core$async26104.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26104");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26104 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26105){
return (new cljs.core.async.t_cljs$core$async26104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26105));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26104(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24331__auto___26230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26230,mults,ensure_mult,p){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26230,mults,ensure_mult,p){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26180_26231 = state_26178__$1;
(statearr_26180_26231[(2)] = inst_26174);

(statearr_26180_26231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (20))){
var state_26178__$1 = state_26178;
var statearr_26181_26232 = state_26178__$1;
(statearr_26181_26232[(2)] = null);

(statearr_26181_26232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (1))){
var state_26178__$1 = state_26178;
var statearr_26182_26233 = state_26178__$1;
(statearr_26182_26233[(2)] = null);

(statearr_26182_26233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (24))){
var inst_26157 = (state_26178[(7)]);
var inst_26166 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26157);
var state_26178__$1 = state_26178;
var statearr_26183_26234 = state_26178__$1;
(statearr_26183_26234[(2)] = inst_26166);

(statearr_26183_26234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (4))){
var inst_26109 = (state_26178[(8)]);
var inst_26109__$1 = (state_26178[(2)]);
var inst_26110 = (inst_26109__$1 == null);
var state_26178__$1 = (function (){var statearr_26184 = state_26178;
(statearr_26184[(8)] = inst_26109__$1);

return statearr_26184;
})();
if(cljs.core.truth_(inst_26110)){
var statearr_26185_26235 = state_26178__$1;
(statearr_26185_26235[(1)] = (5));

} else {
var statearr_26186_26236 = state_26178__$1;
(statearr_26186_26236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (15))){
var inst_26151 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26187_26237 = state_26178__$1;
(statearr_26187_26237[(2)] = inst_26151);

(statearr_26187_26237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (21))){
var inst_26171 = (state_26178[(2)]);
var state_26178__$1 = (function (){var statearr_26188 = state_26178;
(statearr_26188[(9)] = inst_26171);

return statearr_26188;
})();
var statearr_26189_26238 = state_26178__$1;
(statearr_26189_26238[(2)] = null);

(statearr_26189_26238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (13))){
var inst_26133 = (state_26178[(10)]);
var inst_26135 = cljs.core.chunked_seq_QMARK_.call(null,inst_26133);
var state_26178__$1 = state_26178;
if(inst_26135){
var statearr_26190_26239 = state_26178__$1;
(statearr_26190_26239[(1)] = (16));

} else {
var statearr_26191_26240 = state_26178__$1;
(statearr_26191_26240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (22))){
var inst_26163 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26163)){
var statearr_26192_26241 = state_26178__$1;
(statearr_26192_26241[(1)] = (23));

} else {
var statearr_26193_26242 = state_26178__$1;
(statearr_26193_26242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var inst_26157 = (state_26178[(7)]);
var inst_26159 = (state_26178[(11)]);
var inst_26109 = (state_26178[(8)]);
var inst_26157__$1 = topic_fn.call(null,inst_26109);
var inst_26158 = cljs.core.deref.call(null,mults);
var inst_26159__$1 = cljs.core.get.call(null,inst_26158,inst_26157__$1);
var state_26178__$1 = (function (){var statearr_26194 = state_26178;
(statearr_26194[(7)] = inst_26157__$1);

(statearr_26194[(11)] = inst_26159__$1);

return statearr_26194;
})();
if(cljs.core.truth_(inst_26159__$1)){
var statearr_26195_26243 = state_26178__$1;
(statearr_26195_26243[(1)] = (19));

} else {
var statearr_26196_26244 = state_26178__$1;
(statearr_26196_26244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (25))){
var inst_26168 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26197_26245 = state_26178__$1;
(statearr_26197_26245[(2)] = inst_26168);

(statearr_26197_26245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (17))){
var inst_26133 = (state_26178[(10)]);
var inst_26142 = cljs.core.first.call(null,inst_26133);
var inst_26143 = cljs.core.async.muxch_STAR_.call(null,inst_26142);
var inst_26144 = cljs.core.async.close_BANG_.call(null,inst_26143);
var inst_26145 = cljs.core.next.call(null,inst_26133);
var inst_26119 = inst_26145;
var inst_26120 = null;
var inst_26121 = (0);
var inst_26122 = (0);
var state_26178__$1 = (function (){var statearr_26198 = state_26178;
(statearr_26198[(12)] = inst_26122);

(statearr_26198[(13)] = inst_26120);

(statearr_26198[(14)] = inst_26121);

(statearr_26198[(15)] = inst_26119);

(statearr_26198[(16)] = inst_26144);

return statearr_26198;
})();
var statearr_26199_26246 = state_26178__$1;
(statearr_26199_26246[(2)] = null);

(statearr_26199_26246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (12))){
var inst_26153 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26200_26247 = state_26178__$1;
(statearr_26200_26247[(2)] = inst_26153);

(statearr_26200_26247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),ch);
} else {
if((state_val_26179 === (23))){
var state_26178__$1 = state_26178;
var statearr_26201_26248 = state_26178__$1;
(statearr_26201_26248[(2)] = null);

(statearr_26201_26248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (19))){
var inst_26159 = (state_26178[(11)]);
var inst_26109 = (state_26178[(8)]);
var inst_26161 = cljs.core.async.muxch_STAR_.call(null,inst_26159);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26178__$1,(22),inst_26161,inst_26109);
} else {
if((state_val_26179 === (11))){
var inst_26133 = (state_26178[(10)]);
var inst_26119 = (state_26178[(15)]);
var inst_26133__$1 = cljs.core.seq.call(null,inst_26119);
var state_26178__$1 = (function (){var statearr_26202 = state_26178;
(statearr_26202[(10)] = inst_26133__$1);

return statearr_26202;
})();
if(inst_26133__$1){
var statearr_26203_26249 = state_26178__$1;
(statearr_26203_26249[(1)] = (13));

} else {
var statearr_26204_26250 = state_26178__$1;
(statearr_26204_26250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (9))){
var inst_26155 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26205_26251 = state_26178__$1;
(statearr_26205_26251[(2)] = inst_26155);

(statearr_26205_26251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (5))){
var inst_26116 = cljs.core.deref.call(null,mults);
var inst_26117 = cljs.core.vals.call(null,inst_26116);
var inst_26118 = cljs.core.seq.call(null,inst_26117);
var inst_26119 = inst_26118;
var inst_26120 = null;
var inst_26121 = (0);
var inst_26122 = (0);
var state_26178__$1 = (function (){var statearr_26206 = state_26178;
(statearr_26206[(12)] = inst_26122);

(statearr_26206[(13)] = inst_26120);

(statearr_26206[(14)] = inst_26121);

(statearr_26206[(15)] = inst_26119);

return statearr_26206;
})();
var statearr_26207_26252 = state_26178__$1;
(statearr_26207_26252[(2)] = null);

(statearr_26207_26252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (14))){
var state_26178__$1 = state_26178;
var statearr_26211_26253 = state_26178__$1;
(statearr_26211_26253[(2)] = null);

(statearr_26211_26253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (16))){
var inst_26133 = (state_26178[(10)]);
var inst_26137 = cljs.core.chunk_first.call(null,inst_26133);
var inst_26138 = cljs.core.chunk_rest.call(null,inst_26133);
var inst_26139 = cljs.core.count.call(null,inst_26137);
var inst_26119 = inst_26138;
var inst_26120 = inst_26137;
var inst_26121 = inst_26139;
var inst_26122 = (0);
var state_26178__$1 = (function (){var statearr_26212 = state_26178;
(statearr_26212[(12)] = inst_26122);

(statearr_26212[(13)] = inst_26120);

(statearr_26212[(14)] = inst_26121);

(statearr_26212[(15)] = inst_26119);

return statearr_26212;
})();
var statearr_26213_26254 = state_26178__$1;
(statearr_26213_26254[(2)] = null);

(statearr_26213_26254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (10))){
var inst_26122 = (state_26178[(12)]);
var inst_26120 = (state_26178[(13)]);
var inst_26121 = (state_26178[(14)]);
var inst_26119 = (state_26178[(15)]);
var inst_26127 = cljs.core._nth.call(null,inst_26120,inst_26122);
var inst_26128 = cljs.core.async.muxch_STAR_.call(null,inst_26127);
var inst_26129 = cljs.core.async.close_BANG_.call(null,inst_26128);
var inst_26130 = (inst_26122 + (1));
var tmp26208 = inst_26120;
var tmp26209 = inst_26121;
var tmp26210 = inst_26119;
var inst_26119__$1 = tmp26210;
var inst_26120__$1 = tmp26208;
var inst_26121__$1 = tmp26209;
var inst_26122__$1 = inst_26130;
var state_26178__$1 = (function (){var statearr_26214 = state_26178;
(statearr_26214[(12)] = inst_26122__$1);

(statearr_26214[(17)] = inst_26129);

(statearr_26214[(13)] = inst_26120__$1);

(statearr_26214[(14)] = inst_26121__$1);

(statearr_26214[(15)] = inst_26119__$1);

return statearr_26214;
})();
var statearr_26215_26255 = state_26178__$1;
(statearr_26215_26255[(2)] = null);

(statearr_26215_26255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (18))){
var inst_26148 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26216_26256 = state_26178__$1;
(statearr_26216_26256[(2)] = inst_26148);

(statearr_26216_26256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (8))){
var inst_26122 = (state_26178[(12)]);
var inst_26121 = (state_26178[(14)]);
var inst_26124 = (inst_26122 < inst_26121);
var inst_26125 = inst_26124;
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26125)){
var statearr_26217_26257 = state_26178__$1;
(statearr_26217_26257[(1)] = (10));

} else {
var statearr_26218_26258 = state_26178__$1;
(statearr_26218_26258[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26230,mults,ensure_mult,p))
;
return ((function (switch__24219__auto__,c__24331__auto___26230,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26222[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26222[(1)] = (1));

return statearr_26222;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26178){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26223){if((e26223 instanceof Object)){
var ex__24223__auto__ = e26223;
var statearr_26224_26259 = state_26178;
(statearr_26224_26259[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26260 = state_26178;
state_26178 = G__26260;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26230,mults,ensure_mult,p))
})();
var state__24333__auto__ = (function (){var statearr_26225 = f__24332__auto__.call(null);
(statearr_26225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26230);

return statearr_26225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26230,mults,ensure_mult,p))
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
var args26261 = [];
var len__22721__auto___26264 = arguments.length;
var i__22722__auto___26265 = (0);
while(true){
if((i__22722__auto___26265 < len__22721__auto___26264)){
args26261.push((arguments[i__22722__auto___26265]));

var G__26266 = (i__22722__auto___26265 + (1));
i__22722__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var G__26263 = args26261.length;
switch (G__26263) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26261.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26268 = [];
var len__22721__auto___26271 = arguments.length;
var i__22722__auto___26272 = (0);
while(true){
if((i__22722__auto___26272 < len__22721__auto___26271)){
args26268.push((arguments[i__22722__auto___26272]));

var G__26273 = (i__22722__auto___26272 + (1));
i__22722__auto___26272 = G__26273;
continue;
} else {
}
break;
}

var G__26270 = args26268.length;
switch (G__26270) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26268.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args26275 = [];
var len__22721__auto___26346 = arguments.length;
var i__22722__auto___26347 = (0);
while(true){
if((i__22722__auto___26347 < len__22721__auto___26346)){
args26275.push((arguments[i__22722__auto___26347]));

var G__26348 = (i__22722__auto___26347 + (1));
i__22722__auto___26347 = G__26348;
continue;
} else {
}
break;
}

var G__26277 = args26275.length;
switch (G__26277) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26275.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24331__auto___26350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26316){
var state_val_26317 = (state_26316[(1)]);
if((state_val_26317 === (7))){
var state_26316__$1 = state_26316;
var statearr_26318_26351 = state_26316__$1;
(statearr_26318_26351[(2)] = null);

(statearr_26318_26351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (1))){
var state_26316__$1 = state_26316;
var statearr_26319_26352 = state_26316__$1;
(statearr_26319_26352[(2)] = null);

(statearr_26319_26352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (4))){
var inst_26280 = (state_26316[(7)]);
var inst_26282 = (inst_26280 < cnt);
var state_26316__$1 = state_26316;
if(cljs.core.truth_(inst_26282)){
var statearr_26320_26353 = state_26316__$1;
(statearr_26320_26353[(1)] = (6));

} else {
var statearr_26321_26354 = state_26316__$1;
(statearr_26321_26354[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (15))){
var inst_26312 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26322_26355 = state_26316__$1;
(statearr_26322_26355[(2)] = inst_26312);

(statearr_26322_26355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (13))){
var inst_26305 = cljs.core.async.close_BANG_.call(null,out);
var state_26316__$1 = state_26316;
var statearr_26323_26356 = state_26316__$1;
(statearr_26323_26356[(2)] = inst_26305);

(statearr_26323_26356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (6))){
var state_26316__$1 = state_26316;
var statearr_26324_26357 = state_26316__$1;
(statearr_26324_26357[(2)] = null);

(statearr_26324_26357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (3))){
var inst_26314 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26316__$1,inst_26314);
} else {
if((state_val_26317 === (12))){
var inst_26302 = (state_26316[(8)]);
var inst_26302__$1 = (state_26316[(2)]);
var inst_26303 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26302__$1);
var state_26316__$1 = (function (){var statearr_26325 = state_26316;
(statearr_26325[(8)] = inst_26302__$1);

return statearr_26325;
})();
if(cljs.core.truth_(inst_26303)){
var statearr_26326_26358 = state_26316__$1;
(statearr_26326_26358[(1)] = (13));

} else {
var statearr_26327_26359 = state_26316__$1;
(statearr_26327_26359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (2))){
var inst_26279 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26280 = (0);
var state_26316__$1 = (function (){var statearr_26328 = state_26316;
(statearr_26328[(9)] = inst_26279);

(statearr_26328[(7)] = inst_26280);

return statearr_26328;
})();
var statearr_26329_26360 = state_26316__$1;
(statearr_26329_26360[(2)] = null);

(statearr_26329_26360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (11))){
var inst_26280 = (state_26316[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26316,(10),Object,null,(9));
var inst_26289 = chs__$1.call(null,inst_26280);
var inst_26290 = done.call(null,inst_26280);
var inst_26291 = cljs.core.async.take_BANG_.call(null,inst_26289,inst_26290);
var state_26316__$1 = state_26316;
var statearr_26330_26361 = state_26316__$1;
(statearr_26330_26361[(2)] = inst_26291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (9))){
var inst_26280 = (state_26316[(7)]);
var inst_26293 = (state_26316[(2)]);
var inst_26294 = (inst_26280 + (1));
var inst_26280__$1 = inst_26294;
var state_26316__$1 = (function (){var statearr_26331 = state_26316;
(statearr_26331[(10)] = inst_26293);

(statearr_26331[(7)] = inst_26280__$1);

return statearr_26331;
})();
var statearr_26332_26362 = state_26316__$1;
(statearr_26332_26362[(2)] = null);

(statearr_26332_26362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (5))){
var inst_26300 = (state_26316[(2)]);
var state_26316__$1 = (function (){var statearr_26333 = state_26316;
(statearr_26333[(11)] = inst_26300);

return statearr_26333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26316__$1,(12),dchan);
} else {
if((state_val_26317 === (14))){
var inst_26302 = (state_26316[(8)]);
var inst_26307 = cljs.core.apply.call(null,f,inst_26302);
var state_26316__$1 = state_26316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26316__$1,(16),out,inst_26307);
} else {
if((state_val_26317 === (16))){
var inst_26309 = (state_26316[(2)]);
var state_26316__$1 = (function (){var statearr_26334 = state_26316;
(statearr_26334[(12)] = inst_26309);

return statearr_26334;
})();
var statearr_26335_26363 = state_26316__$1;
(statearr_26335_26363[(2)] = null);

(statearr_26335_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (10))){
var inst_26284 = (state_26316[(2)]);
var inst_26285 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26316__$1 = (function (){var statearr_26336 = state_26316;
(statearr_26336[(13)] = inst_26284);

return statearr_26336;
})();
var statearr_26337_26364 = state_26316__$1;
(statearr_26337_26364[(2)] = inst_26285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26317 === (8))){
var inst_26298 = (state_26316[(2)]);
var state_26316__$1 = state_26316;
var statearr_26338_26365 = state_26316__$1;
(statearr_26338_26365[(2)] = inst_26298);

(statearr_26338_26365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24219__auto__,c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26342[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26342[(1)] = (1));

return statearr_26342;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26316){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26343){if((e26343 instanceof Object)){
var ex__24223__auto__ = e26343;
var statearr_26344_26366 = state_26316;
(statearr_26344_26366[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26367 = state_26316;
state_26316 = G__26367;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24333__auto__ = (function (){var statearr_26345 = f__24332__auto__.call(null);
(statearr_26345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26350);

return statearr_26345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26350,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26369 = [];
var len__22721__auto___26425 = arguments.length;
var i__22722__auto___26426 = (0);
while(true){
if((i__22722__auto___26426 < len__22721__auto___26425)){
args26369.push((arguments[i__22722__auto___26426]));

var G__26427 = (i__22722__auto___26426 + (1));
i__22722__auto___26426 = G__26427;
continue;
} else {
}
break;
}

var G__26371 = args26369.length;
switch (G__26371) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26369.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___26429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26429,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26429,out){
return (function (state_26401){
var state_val_26402 = (state_26401[(1)]);
if((state_val_26402 === (7))){
var inst_26381 = (state_26401[(7)]);
var inst_26380 = (state_26401[(8)]);
var inst_26380__$1 = (state_26401[(2)]);
var inst_26381__$1 = cljs.core.nth.call(null,inst_26380__$1,(0),null);
var inst_26382 = cljs.core.nth.call(null,inst_26380__$1,(1),null);
var inst_26383 = (inst_26381__$1 == null);
var state_26401__$1 = (function (){var statearr_26403 = state_26401;
(statearr_26403[(9)] = inst_26382);

(statearr_26403[(7)] = inst_26381__$1);

(statearr_26403[(8)] = inst_26380__$1);

return statearr_26403;
})();
if(cljs.core.truth_(inst_26383)){
var statearr_26404_26430 = state_26401__$1;
(statearr_26404_26430[(1)] = (8));

} else {
var statearr_26405_26431 = state_26401__$1;
(statearr_26405_26431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (1))){
var inst_26372 = cljs.core.vec.call(null,chs);
var inst_26373 = inst_26372;
var state_26401__$1 = (function (){var statearr_26406 = state_26401;
(statearr_26406[(10)] = inst_26373);

return statearr_26406;
})();
var statearr_26407_26432 = state_26401__$1;
(statearr_26407_26432[(2)] = null);

(statearr_26407_26432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (4))){
var inst_26373 = (state_26401[(10)]);
var state_26401__$1 = state_26401;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26401__$1,(7),inst_26373);
} else {
if((state_val_26402 === (6))){
var inst_26397 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26408_26433 = state_26401__$1;
(statearr_26408_26433[(2)] = inst_26397);

(statearr_26408_26433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (3))){
var inst_26399 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26401__$1,inst_26399);
} else {
if((state_val_26402 === (2))){
var inst_26373 = (state_26401[(10)]);
var inst_26375 = cljs.core.count.call(null,inst_26373);
var inst_26376 = (inst_26375 > (0));
var state_26401__$1 = state_26401;
if(cljs.core.truth_(inst_26376)){
var statearr_26410_26434 = state_26401__$1;
(statearr_26410_26434[(1)] = (4));

} else {
var statearr_26411_26435 = state_26401__$1;
(statearr_26411_26435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (11))){
var inst_26373 = (state_26401[(10)]);
var inst_26390 = (state_26401[(2)]);
var tmp26409 = inst_26373;
var inst_26373__$1 = tmp26409;
var state_26401__$1 = (function (){var statearr_26412 = state_26401;
(statearr_26412[(11)] = inst_26390);

(statearr_26412[(10)] = inst_26373__$1);

return statearr_26412;
})();
var statearr_26413_26436 = state_26401__$1;
(statearr_26413_26436[(2)] = null);

(statearr_26413_26436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (9))){
var inst_26381 = (state_26401[(7)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(11),out,inst_26381);
} else {
if((state_val_26402 === (5))){
var inst_26395 = cljs.core.async.close_BANG_.call(null,out);
var state_26401__$1 = state_26401;
var statearr_26414_26437 = state_26401__$1;
(statearr_26414_26437[(2)] = inst_26395);

(statearr_26414_26437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (10))){
var inst_26393 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26415_26438 = state_26401__$1;
(statearr_26415_26438[(2)] = inst_26393);

(statearr_26415_26438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (8))){
var inst_26373 = (state_26401[(10)]);
var inst_26382 = (state_26401[(9)]);
var inst_26381 = (state_26401[(7)]);
var inst_26380 = (state_26401[(8)]);
var inst_26385 = (function (){var cs = inst_26373;
var vec__26378 = inst_26380;
var v = inst_26381;
var c = inst_26382;
return ((function (cs,vec__26378,v,c,inst_26373,inst_26382,inst_26381,inst_26380,state_val_26402,c__24331__auto___26429,out){
return (function (p1__26368_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26368_SHARP_);
});
;})(cs,vec__26378,v,c,inst_26373,inst_26382,inst_26381,inst_26380,state_val_26402,c__24331__auto___26429,out))
})();
var inst_26386 = cljs.core.filterv.call(null,inst_26385,inst_26373);
var inst_26373__$1 = inst_26386;
var state_26401__$1 = (function (){var statearr_26416 = state_26401;
(statearr_26416[(10)] = inst_26373__$1);

return statearr_26416;
})();
var statearr_26417_26439 = state_26401__$1;
(statearr_26417_26439[(2)] = null);

(statearr_26417_26439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26429,out))
;
return ((function (switch__24219__auto__,c__24331__auto___26429,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26421[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26421[(1)] = (1));

return statearr_26421;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26401){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26422){if((e26422 instanceof Object)){
var ex__24223__auto__ = e26422;
var statearr_26423_26440 = state_26401;
(statearr_26423_26440[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26441 = state_26401;
state_26401 = G__26441;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26429,out))
})();
var state__24333__auto__ = (function (){var statearr_26424 = f__24332__auto__.call(null);
(statearr_26424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26429);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26429,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26442 = [];
var len__22721__auto___26491 = arguments.length;
var i__22722__auto___26492 = (0);
while(true){
if((i__22722__auto___26492 < len__22721__auto___26491)){
args26442.push((arguments[i__22722__auto___26492]));

var G__26493 = (i__22722__auto___26492 + (1));
i__22722__auto___26492 = G__26493;
continue;
} else {
}
break;
}

var G__26444 = args26442.length;
switch (G__26444) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26442.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___26495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26495,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26495,out){
return (function (state_26468){
var state_val_26469 = (state_26468[(1)]);
if((state_val_26469 === (7))){
var inst_26450 = (state_26468[(7)]);
var inst_26450__$1 = (state_26468[(2)]);
var inst_26451 = (inst_26450__$1 == null);
var inst_26452 = cljs.core.not.call(null,inst_26451);
var state_26468__$1 = (function (){var statearr_26470 = state_26468;
(statearr_26470[(7)] = inst_26450__$1);

return statearr_26470;
})();
if(inst_26452){
var statearr_26471_26496 = state_26468__$1;
(statearr_26471_26496[(1)] = (8));

} else {
var statearr_26472_26497 = state_26468__$1;
(statearr_26472_26497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (1))){
var inst_26445 = (0);
var state_26468__$1 = (function (){var statearr_26473 = state_26468;
(statearr_26473[(8)] = inst_26445);

return statearr_26473;
})();
var statearr_26474_26498 = state_26468__$1;
(statearr_26474_26498[(2)] = null);

(statearr_26474_26498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (4))){
var state_26468__$1 = state_26468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26468__$1,(7),ch);
} else {
if((state_val_26469 === (6))){
var inst_26463 = (state_26468[(2)]);
var state_26468__$1 = state_26468;
var statearr_26475_26499 = state_26468__$1;
(statearr_26475_26499[(2)] = inst_26463);

(statearr_26475_26499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (3))){
var inst_26465 = (state_26468[(2)]);
var inst_26466 = cljs.core.async.close_BANG_.call(null,out);
var state_26468__$1 = (function (){var statearr_26476 = state_26468;
(statearr_26476[(9)] = inst_26465);

return statearr_26476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26468__$1,inst_26466);
} else {
if((state_val_26469 === (2))){
var inst_26445 = (state_26468[(8)]);
var inst_26447 = (inst_26445 < n);
var state_26468__$1 = state_26468;
if(cljs.core.truth_(inst_26447)){
var statearr_26477_26500 = state_26468__$1;
(statearr_26477_26500[(1)] = (4));

} else {
var statearr_26478_26501 = state_26468__$1;
(statearr_26478_26501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (11))){
var inst_26445 = (state_26468[(8)]);
var inst_26455 = (state_26468[(2)]);
var inst_26456 = (inst_26445 + (1));
var inst_26445__$1 = inst_26456;
var state_26468__$1 = (function (){var statearr_26479 = state_26468;
(statearr_26479[(8)] = inst_26445__$1);

(statearr_26479[(10)] = inst_26455);

return statearr_26479;
})();
var statearr_26480_26502 = state_26468__$1;
(statearr_26480_26502[(2)] = null);

(statearr_26480_26502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (9))){
var state_26468__$1 = state_26468;
var statearr_26481_26503 = state_26468__$1;
(statearr_26481_26503[(2)] = null);

(statearr_26481_26503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (5))){
var state_26468__$1 = state_26468;
var statearr_26482_26504 = state_26468__$1;
(statearr_26482_26504[(2)] = null);

(statearr_26482_26504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (10))){
var inst_26460 = (state_26468[(2)]);
var state_26468__$1 = state_26468;
var statearr_26483_26505 = state_26468__$1;
(statearr_26483_26505[(2)] = inst_26460);

(statearr_26483_26505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26469 === (8))){
var inst_26450 = (state_26468[(7)]);
var state_26468__$1 = state_26468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26468__$1,(11),out,inst_26450);
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
});})(c__24331__auto___26495,out))
;
return ((function (switch__24219__auto__,c__24331__auto___26495,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26487[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26487[(1)] = (1));

return statearr_26487;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26468){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26488){if((e26488 instanceof Object)){
var ex__24223__auto__ = e26488;
var statearr_26489_26506 = state_26468;
(statearr_26489_26506[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26507 = state_26468;
state_26468 = G__26507;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26495,out))
})();
var state__24333__auto__ = (function (){var statearr_26490 = f__24332__auto__.call(null);
(statearr_26490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26495);

return statearr_26490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26495,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26515 = (function (map_LT_,f,ch,meta26516){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26516 = meta26516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26517,meta26516__$1){
var self__ = this;
var _26517__$1 = this;
return (new cljs.core.async.t_cljs$core$async26515(self__.map_LT_,self__.f,self__.ch,meta26516__$1));
});

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26517){
var self__ = this;
var _26517__$1 = this;
return self__.meta26516;
});

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26518 = (function (map_LT_,f,ch,meta26516,_,fn1,meta26519){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26516 = meta26516;
this._ = _;
this.fn1 = fn1;
this.meta26519 = meta26519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26520,meta26519__$1){
var self__ = this;
var _26520__$1 = this;
return (new cljs.core.async.t_cljs$core$async26518(self__.map_LT_,self__.f,self__.ch,self__.meta26516,self__._,self__.fn1,meta26519__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26520){
var self__ = this;
var _26520__$1 = this;
return self__.meta26519;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26508_SHARP_){
return f1.call(null,(((p1__26508_SHARP_ == null))?null:self__.f.call(null,p1__26508_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26516","meta26516",-1715784209,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26515","cljs.core.async/t_cljs$core$async26515",-634312829,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26519","meta26519",-178203326,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26518";

cljs.core.async.t_cljs$core$async26518.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26518");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26518 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26518(map_LT___$1,f__$1,ch__$1,meta26516__$1,___$2,fn1__$1,meta26519){
return (new cljs.core.async.t_cljs$core$async26518(map_LT___$1,f__$1,ch__$1,meta26516__$1,___$2,fn1__$1,meta26519));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26518(self__.map_LT_,self__.f,self__.ch,self__.meta26516,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21639__auto__ = ret;
if(cljs.core.truth_(and__21639__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21639__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26516","meta26516",-1715784209,null)], null);
});

cljs.core.async.t_cljs$core$async26515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26515";

cljs.core.async.t_cljs$core$async26515.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26515");
});

cljs.core.async.__GT_t_cljs$core$async26515 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26515(map_LT___$1,f__$1,ch__$1,meta26516){
return (new cljs.core.async.t_cljs$core$async26515(map_LT___$1,f__$1,ch__$1,meta26516));
});

}

return (new cljs.core.async.t_cljs$core$async26515(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26524 = (function (map_GT_,f,ch,meta26525){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26525 = meta26525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26526,meta26525__$1){
var self__ = this;
var _26526__$1 = this;
return (new cljs.core.async.t_cljs$core$async26524(self__.map_GT_,self__.f,self__.ch,meta26525__$1));
});

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26526){
var self__ = this;
var _26526__$1 = this;
return self__.meta26525;
});

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26525","meta26525",-1869065488,null)], null);
});

cljs.core.async.t_cljs$core$async26524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26524";

cljs.core.async.t_cljs$core$async26524.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26524");
});

cljs.core.async.__GT_t_cljs$core$async26524 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26524(map_GT___$1,f__$1,ch__$1,meta26525){
return (new cljs.core.async.t_cljs$core$async26524(map_GT___$1,f__$1,ch__$1,meta26525));
});

}

return (new cljs.core.async.t_cljs$core$async26524(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26530 = (function (filter_GT_,p,ch,meta26531){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26531 = meta26531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26532,meta26531__$1){
var self__ = this;
var _26532__$1 = this;
return (new cljs.core.async.t_cljs$core$async26530(self__.filter_GT_,self__.p,self__.ch,meta26531__$1));
});

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26532){
var self__ = this;
var _26532__$1 = this;
return self__.meta26531;
});

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26531","meta26531",1762015926,null)], null);
});

cljs.core.async.t_cljs$core$async26530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26530";

cljs.core.async.t_cljs$core$async26530.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26530");
});

cljs.core.async.__GT_t_cljs$core$async26530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26530(filter_GT___$1,p__$1,ch__$1,meta26531){
return (new cljs.core.async.t_cljs$core$async26530(filter_GT___$1,p__$1,ch__$1,meta26531));
});

}

return (new cljs.core.async.t_cljs$core$async26530(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26533 = [];
var len__22721__auto___26577 = arguments.length;
var i__22722__auto___26578 = (0);
while(true){
if((i__22722__auto___26578 < len__22721__auto___26577)){
args26533.push((arguments[i__22722__auto___26578]));

var G__26579 = (i__22722__auto___26578 + (1));
i__22722__auto___26578 = G__26579;
continue;
} else {
}
break;
}

var G__26535 = args26533.length;
switch (G__26535) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26533.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___26581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26581,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26581,out){
return (function (state_26556){
var state_val_26557 = (state_26556[(1)]);
if((state_val_26557 === (7))){
var inst_26552 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26558_26582 = state_26556__$1;
(statearr_26558_26582[(2)] = inst_26552);

(statearr_26558_26582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (1))){
var state_26556__$1 = state_26556;
var statearr_26559_26583 = state_26556__$1;
(statearr_26559_26583[(2)] = null);

(statearr_26559_26583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (4))){
var inst_26538 = (state_26556[(7)]);
var inst_26538__$1 = (state_26556[(2)]);
var inst_26539 = (inst_26538__$1 == null);
var state_26556__$1 = (function (){var statearr_26560 = state_26556;
(statearr_26560[(7)] = inst_26538__$1);

return statearr_26560;
})();
if(cljs.core.truth_(inst_26539)){
var statearr_26561_26584 = state_26556__$1;
(statearr_26561_26584[(1)] = (5));

} else {
var statearr_26562_26585 = state_26556__$1;
(statearr_26562_26585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (6))){
var inst_26538 = (state_26556[(7)]);
var inst_26543 = p.call(null,inst_26538);
var state_26556__$1 = state_26556;
if(cljs.core.truth_(inst_26543)){
var statearr_26563_26586 = state_26556__$1;
(statearr_26563_26586[(1)] = (8));

} else {
var statearr_26564_26587 = state_26556__$1;
(statearr_26564_26587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (3))){
var inst_26554 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26556__$1,inst_26554);
} else {
if((state_val_26557 === (2))){
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26556__$1,(4),ch);
} else {
if((state_val_26557 === (11))){
var inst_26546 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26565_26588 = state_26556__$1;
(statearr_26565_26588[(2)] = inst_26546);

(statearr_26565_26588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (9))){
var state_26556__$1 = state_26556;
var statearr_26566_26589 = state_26556__$1;
(statearr_26566_26589[(2)] = null);

(statearr_26566_26589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (5))){
var inst_26541 = cljs.core.async.close_BANG_.call(null,out);
var state_26556__$1 = state_26556;
var statearr_26567_26590 = state_26556__$1;
(statearr_26567_26590[(2)] = inst_26541);

(statearr_26567_26590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (10))){
var inst_26549 = (state_26556[(2)]);
var state_26556__$1 = (function (){var statearr_26568 = state_26556;
(statearr_26568[(8)] = inst_26549);

return statearr_26568;
})();
var statearr_26569_26591 = state_26556__$1;
(statearr_26569_26591[(2)] = null);

(statearr_26569_26591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (8))){
var inst_26538 = (state_26556[(7)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26556__$1,(11),out,inst_26538);
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
});})(c__24331__auto___26581,out))
;
return ((function (switch__24219__auto__,c__24331__auto___26581,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26573 = [null,null,null,null,null,null,null,null,null];
(statearr_26573[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26573[(1)] = (1));

return statearr_26573;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26556){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26574){if((e26574 instanceof Object)){
var ex__24223__auto__ = e26574;
var statearr_26575_26592 = state_26556;
(statearr_26575_26592[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26593 = state_26556;
state_26556 = G__26593;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26581,out))
})();
var state__24333__auto__ = (function (){var statearr_26576 = f__24332__auto__.call(null);
(statearr_26576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26581);

return statearr_26576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26581,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26594 = [];
var len__22721__auto___26597 = arguments.length;
var i__22722__auto___26598 = (0);
while(true){
if((i__22722__auto___26598 < len__22721__auto___26597)){
args26594.push((arguments[i__22722__auto___26598]));

var G__26599 = (i__22722__auto___26598 + (1));
i__22722__auto___26598 = G__26599;
continue;
} else {
}
break;
}

var G__26596 = args26594.length;
switch (G__26596) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26594.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__){
return (function (state_26766){
var state_val_26767 = (state_26766[(1)]);
if((state_val_26767 === (7))){
var inst_26762 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26768_26809 = state_26766__$1;
(statearr_26768_26809[(2)] = inst_26762);

(statearr_26768_26809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (20))){
var inst_26732 = (state_26766[(7)]);
var inst_26743 = (state_26766[(2)]);
var inst_26744 = cljs.core.next.call(null,inst_26732);
var inst_26718 = inst_26744;
var inst_26719 = null;
var inst_26720 = (0);
var inst_26721 = (0);
var state_26766__$1 = (function (){var statearr_26769 = state_26766;
(statearr_26769[(8)] = inst_26743);

(statearr_26769[(9)] = inst_26719);

(statearr_26769[(10)] = inst_26721);

(statearr_26769[(11)] = inst_26720);

(statearr_26769[(12)] = inst_26718);

return statearr_26769;
})();
var statearr_26770_26810 = state_26766__$1;
(statearr_26770_26810[(2)] = null);

(statearr_26770_26810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (1))){
var state_26766__$1 = state_26766;
var statearr_26771_26811 = state_26766__$1;
(statearr_26771_26811[(2)] = null);

(statearr_26771_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (4))){
var inst_26707 = (state_26766[(13)]);
var inst_26707__$1 = (state_26766[(2)]);
var inst_26708 = (inst_26707__$1 == null);
var state_26766__$1 = (function (){var statearr_26772 = state_26766;
(statearr_26772[(13)] = inst_26707__$1);

return statearr_26772;
})();
if(cljs.core.truth_(inst_26708)){
var statearr_26773_26812 = state_26766__$1;
(statearr_26773_26812[(1)] = (5));

} else {
var statearr_26774_26813 = state_26766__$1;
(statearr_26774_26813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (15))){
var state_26766__$1 = state_26766;
var statearr_26778_26814 = state_26766__$1;
(statearr_26778_26814[(2)] = null);

(statearr_26778_26814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (21))){
var state_26766__$1 = state_26766;
var statearr_26779_26815 = state_26766__$1;
(statearr_26779_26815[(2)] = null);

(statearr_26779_26815[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (13))){
var inst_26719 = (state_26766[(9)]);
var inst_26721 = (state_26766[(10)]);
var inst_26720 = (state_26766[(11)]);
var inst_26718 = (state_26766[(12)]);
var inst_26728 = (state_26766[(2)]);
var inst_26729 = (inst_26721 + (1));
var tmp26775 = inst_26719;
var tmp26776 = inst_26720;
var tmp26777 = inst_26718;
var inst_26718__$1 = tmp26777;
var inst_26719__$1 = tmp26775;
var inst_26720__$1 = tmp26776;
var inst_26721__$1 = inst_26729;
var state_26766__$1 = (function (){var statearr_26780 = state_26766;
(statearr_26780[(14)] = inst_26728);

(statearr_26780[(9)] = inst_26719__$1);

(statearr_26780[(10)] = inst_26721__$1);

(statearr_26780[(11)] = inst_26720__$1);

(statearr_26780[(12)] = inst_26718__$1);

return statearr_26780;
})();
var statearr_26781_26816 = state_26766__$1;
(statearr_26781_26816[(2)] = null);

(statearr_26781_26816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (22))){
var state_26766__$1 = state_26766;
var statearr_26782_26817 = state_26766__$1;
(statearr_26782_26817[(2)] = null);

(statearr_26782_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (6))){
var inst_26707 = (state_26766[(13)]);
var inst_26716 = f.call(null,inst_26707);
var inst_26717 = cljs.core.seq.call(null,inst_26716);
var inst_26718 = inst_26717;
var inst_26719 = null;
var inst_26720 = (0);
var inst_26721 = (0);
var state_26766__$1 = (function (){var statearr_26783 = state_26766;
(statearr_26783[(9)] = inst_26719);

(statearr_26783[(10)] = inst_26721);

(statearr_26783[(11)] = inst_26720);

(statearr_26783[(12)] = inst_26718);

return statearr_26783;
})();
var statearr_26784_26818 = state_26766__$1;
(statearr_26784_26818[(2)] = null);

(statearr_26784_26818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (17))){
var inst_26732 = (state_26766[(7)]);
var inst_26736 = cljs.core.chunk_first.call(null,inst_26732);
var inst_26737 = cljs.core.chunk_rest.call(null,inst_26732);
var inst_26738 = cljs.core.count.call(null,inst_26736);
var inst_26718 = inst_26737;
var inst_26719 = inst_26736;
var inst_26720 = inst_26738;
var inst_26721 = (0);
var state_26766__$1 = (function (){var statearr_26785 = state_26766;
(statearr_26785[(9)] = inst_26719);

(statearr_26785[(10)] = inst_26721);

(statearr_26785[(11)] = inst_26720);

(statearr_26785[(12)] = inst_26718);

return statearr_26785;
})();
var statearr_26786_26819 = state_26766__$1;
(statearr_26786_26819[(2)] = null);

(statearr_26786_26819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (3))){
var inst_26764 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26766__$1,inst_26764);
} else {
if((state_val_26767 === (12))){
var inst_26752 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26787_26820 = state_26766__$1;
(statearr_26787_26820[(2)] = inst_26752);

(statearr_26787_26820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (2))){
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26766__$1,(4),in$);
} else {
if((state_val_26767 === (23))){
var inst_26760 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26788_26821 = state_26766__$1;
(statearr_26788_26821[(2)] = inst_26760);

(statearr_26788_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (19))){
var inst_26747 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26789_26822 = state_26766__$1;
(statearr_26789_26822[(2)] = inst_26747);

(statearr_26789_26822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (11))){
var inst_26732 = (state_26766[(7)]);
var inst_26718 = (state_26766[(12)]);
var inst_26732__$1 = cljs.core.seq.call(null,inst_26718);
var state_26766__$1 = (function (){var statearr_26790 = state_26766;
(statearr_26790[(7)] = inst_26732__$1);

return statearr_26790;
})();
if(inst_26732__$1){
var statearr_26791_26823 = state_26766__$1;
(statearr_26791_26823[(1)] = (14));

} else {
var statearr_26792_26824 = state_26766__$1;
(statearr_26792_26824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (9))){
var inst_26754 = (state_26766[(2)]);
var inst_26755 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26766__$1 = (function (){var statearr_26793 = state_26766;
(statearr_26793[(15)] = inst_26754);

return statearr_26793;
})();
if(cljs.core.truth_(inst_26755)){
var statearr_26794_26825 = state_26766__$1;
(statearr_26794_26825[(1)] = (21));

} else {
var statearr_26795_26826 = state_26766__$1;
(statearr_26795_26826[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (5))){
var inst_26710 = cljs.core.async.close_BANG_.call(null,out);
var state_26766__$1 = state_26766;
var statearr_26796_26827 = state_26766__$1;
(statearr_26796_26827[(2)] = inst_26710);

(statearr_26796_26827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (14))){
var inst_26732 = (state_26766[(7)]);
var inst_26734 = cljs.core.chunked_seq_QMARK_.call(null,inst_26732);
var state_26766__$1 = state_26766;
if(inst_26734){
var statearr_26797_26828 = state_26766__$1;
(statearr_26797_26828[(1)] = (17));

} else {
var statearr_26798_26829 = state_26766__$1;
(statearr_26798_26829[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (16))){
var inst_26750 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26799_26830 = state_26766__$1;
(statearr_26799_26830[(2)] = inst_26750);

(statearr_26799_26830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (10))){
var inst_26719 = (state_26766[(9)]);
var inst_26721 = (state_26766[(10)]);
var inst_26726 = cljs.core._nth.call(null,inst_26719,inst_26721);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26766__$1,(13),out,inst_26726);
} else {
if((state_val_26767 === (18))){
var inst_26732 = (state_26766[(7)]);
var inst_26741 = cljs.core.first.call(null,inst_26732);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26766__$1,(20),out,inst_26741);
} else {
if((state_val_26767 === (8))){
var inst_26721 = (state_26766[(10)]);
var inst_26720 = (state_26766[(11)]);
var inst_26723 = (inst_26721 < inst_26720);
var inst_26724 = inst_26723;
var state_26766__$1 = state_26766;
if(cljs.core.truth_(inst_26724)){
var statearr_26800_26831 = state_26766__$1;
(statearr_26800_26831[(1)] = (10));

} else {
var statearr_26801_26832 = state_26766__$1;
(statearr_26801_26832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto__))
;
return ((function (switch__24219__auto__,c__24331__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____1 = (function (state_26766){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__24223__auto__ = e26806;
var statearr_26807_26833 = state_26766;
(statearr_26807_26833[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26834 = state_26766;
state_26766 = G__26834;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__ = function(state_26766){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____1.call(this,state_26766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__))
})();
var state__24333__auto__ = (function (){var statearr_26808 = f__24332__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__))
);

return c__24331__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26835 = [];
var len__22721__auto___26838 = arguments.length;
var i__22722__auto___26839 = (0);
while(true){
if((i__22722__auto___26839 < len__22721__auto___26838)){
args26835.push((arguments[i__22722__auto___26839]));

var G__26840 = (i__22722__auto___26839 + (1));
i__22722__auto___26839 = G__26840;
continue;
} else {
}
break;
}

var G__26837 = args26835.length;
switch (G__26837) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26835.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26842 = [];
var len__22721__auto___26845 = arguments.length;
var i__22722__auto___26846 = (0);
while(true){
if((i__22722__auto___26846 < len__22721__auto___26845)){
args26842.push((arguments[i__22722__auto___26846]));

var G__26847 = (i__22722__auto___26846 + (1));
i__22722__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var G__26844 = args26842.length;
switch (G__26844) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26842.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26849 = [];
var len__22721__auto___26900 = arguments.length;
var i__22722__auto___26901 = (0);
while(true){
if((i__22722__auto___26901 < len__22721__auto___26900)){
args26849.push((arguments[i__22722__auto___26901]));

var G__26902 = (i__22722__auto___26901 + (1));
i__22722__auto___26901 = G__26902;
continue;
} else {
}
break;
}

var G__26851 = args26849.length;
switch (G__26851) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26849.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___26904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26904,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26904,out){
return (function (state_26875){
var state_val_26876 = (state_26875[(1)]);
if((state_val_26876 === (7))){
var inst_26870 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
var statearr_26877_26905 = state_26875__$1;
(statearr_26877_26905[(2)] = inst_26870);

(statearr_26877_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (1))){
var inst_26852 = null;
var state_26875__$1 = (function (){var statearr_26878 = state_26875;
(statearr_26878[(7)] = inst_26852);

return statearr_26878;
})();
var statearr_26879_26906 = state_26875__$1;
(statearr_26879_26906[(2)] = null);

(statearr_26879_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (4))){
var inst_26855 = (state_26875[(8)]);
var inst_26855__$1 = (state_26875[(2)]);
var inst_26856 = (inst_26855__$1 == null);
var inst_26857 = cljs.core.not.call(null,inst_26856);
var state_26875__$1 = (function (){var statearr_26880 = state_26875;
(statearr_26880[(8)] = inst_26855__$1);

return statearr_26880;
})();
if(inst_26857){
var statearr_26881_26907 = state_26875__$1;
(statearr_26881_26907[(1)] = (5));

} else {
var statearr_26882_26908 = state_26875__$1;
(statearr_26882_26908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (6))){
var state_26875__$1 = state_26875;
var statearr_26883_26909 = state_26875__$1;
(statearr_26883_26909[(2)] = null);

(statearr_26883_26909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (3))){
var inst_26872 = (state_26875[(2)]);
var inst_26873 = cljs.core.async.close_BANG_.call(null,out);
var state_26875__$1 = (function (){var statearr_26884 = state_26875;
(statearr_26884[(9)] = inst_26872);

return statearr_26884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26875__$1,inst_26873);
} else {
if((state_val_26876 === (2))){
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26875__$1,(4),ch);
} else {
if((state_val_26876 === (11))){
var inst_26855 = (state_26875[(8)]);
var inst_26864 = (state_26875[(2)]);
var inst_26852 = inst_26855;
var state_26875__$1 = (function (){var statearr_26885 = state_26875;
(statearr_26885[(7)] = inst_26852);

(statearr_26885[(10)] = inst_26864);

return statearr_26885;
})();
var statearr_26886_26910 = state_26875__$1;
(statearr_26886_26910[(2)] = null);

(statearr_26886_26910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (9))){
var inst_26855 = (state_26875[(8)]);
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26875__$1,(11),out,inst_26855);
} else {
if((state_val_26876 === (5))){
var inst_26855 = (state_26875[(8)]);
var inst_26852 = (state_26875[(7)]);
var inst_26859 = cljs.core._EQ_.call(null,inst_26855,inst_26852);
var state_26875__$1 = state_26875;
if(inst_26859){
var statearr_26888_26911 = state_26875__$1;
(statearr_26888_26911[(1)] = (8));

} else {
var statearr_26889_26912 = state_26875__$1;
(statearr_26889_26912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (10))){
var inst_26867 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
var statearr_26890_26913 = state_26875__$1;
(statearr_26890_26913[(2)] = inst_26867);

(statearr_26890_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (8))){
var inst_26852 = (state_26875[(7)]);
var tmp26887 = inst_26852;
var inst_26852__$1 = tmp26887;
var state_26875__$1 = (function (){var statearr_26891 = state_26875;
(statearr_26891[(7)] = inst_26852__$1);

return statearr_26891;
})();
var statearr_26892_26914 = state_26875__$1;
(statearr_26892_26914[(2)] = null);

(statearr_26892_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26904,out))
;
return ((function (switch__24219__auto__,c__24331__auto___26904,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26896[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26896[(1)] = (1));

return statearr_26896;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26875){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object)){
var ex__24223__auto__ = e26897;
var statearr_26898_26915 = state_26875;
(statearr_26898_26915[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26916 = state_26875;
state_26875 = G__26916;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26904,out))
})();
var state__24333__auto__ = (function (){var statearr_26899 = f__24332__auto__.call(null);
(statearr_26899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26904);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26904,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26917 = [];
var len__22721__auto___26987 = arguments.length;
var i__22722__auto___26988 = (0);
while(true){
if((i__22722__auto___26988 < len__22721__auto___26987)){
args26917.push((arguments[i__22722__auto___26988]));

var G__26989 = (i__22722__auto___26988 + (1));
i__22722__auto___26988 = G__26989;
continue;
} else {
}
break;
}

var G__26919 = args26917.length;
switch (G__26919) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26917.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___26991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___26991,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___26991,out){
return (function (state_26957){
var state_val_26958 = (state_26957[(1)]);
if((state_val_26958 === (7))){
var inst_26953 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26959_26992 = state_26957__$1;
(statearr_26959_26992[(2)] = inst_26953);

(statearr_26959_26992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (1))){
var inst_26920 = (new Array(n));
var inst_26921 = inst_26920;
var inst_26922 = (0);
var state_26957__$1 = (function (){var statearr_26960 = state_26957;
(statearr_26960[(7)] = inst_26922);

(statearr_26960[(8)] = inst_26921);

return statearr_26960;
})();
var statearr_26961_26993 = state_26957__$1;
(statearr_26961_26993[(2)] = null);

(statearr_26961_26993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (4))){
var inst_26925 = (state_26957[(9)]);
var inst_26925__$1 = (state_26957[(2)]);
var inst_26926 = (inst_26925__$1 == null);
var inst_26927 = cljs.core.not.call(null,inst_26926);
var state_26957__$1 = (function (){var statearr_26962 = state_26957;
(statearr_26962[(9)] = inst_26925__$1);

return statearr_26962;
})();
if(inst_26927){
var statearr_26963_26994 = state_26957__$1;
(statearr_26963_26994[(1)] = (5));

} else {
var statearr_26964_26995 = state_26957__$1;
(statearr_26964_26995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (15))){
var inst_26947 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26965_26996 = state_26957__$1;
(statearr_26965_26996[(2)] = inst_26947);

(statearr_26965_26996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (13))){
var state_26957__$1 = state_26957;
var statearr_26966_26997 = state_26957__$1;
(statearr_26966_26997[(2)] = null);

(statearr_26966_26997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (6))){
var inst_26922 = (state_26957[(7)]);
var inst_26943 = (inst_26922 > (0));
var state_26957__$1 = state_26957;
if(cljs.core.truth_(inst_26943)){
var statearr_26967_26998 = state_26957__$1;
(statearr_26967_26998[(1)] = (12));

} else {
var statearr_26968_26999 = state_26957__$1;
(statearr_26968_26999[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (3))){
var inst_26955 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26957__$1,inst_26955);
} else {
if((state_val_26958 === (12))){
var inst_26921 = (state_26957[(8)]);
var inst_26945 = cljs.core.vec.call(null,inst_26921);
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26957__$1,(15),out,inst_26945);
} else {
if((state_val_26958 === (2))){
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26957__$1,(4),ch);
} else {
if((state_val_26958 === (11))){
var inst_26937 = (state_26957[(2)]);
var inst_26938 = (new Array(n));
var inst_26921 = inst_26938;
var inst_26922 = (0);
var state_26957__$1 = (function (){var statearr_26969 = state_26957;
(statearr_26969[(10)] = inst_26937);

(statearr_26969[(7)] = inst_26922);

(statearr_26969[(8)] = inst_26921);

return statearr_26969;
})();
var statearr_26970_27000 = state_26957__$1;
(statearr_26970_27000[(2)] = null);

(statearr_26970_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (9))){
var inst_26921 = (state_26957[(8)]);
var inst_26935 = cljs.core.vec.call(null,inst_26921);
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26957__$1,(11),out,inst_26935);
} else {
if((state_val_26958 === (5))){
var inst_26925 = (state_26957[(9)]);
var inst_26922 = (state_26957[(7)]);
var inst_26930 = (state_26957[(11)]);
var inst_26921 = (state_26957[(8)]);
var inst_26929 = (inst_26921[inst_26922] = inst_26925);
var inst_26930__$1 = (inst_26922 + (1));
var inst_26931 = (inst_26930__$1 < n);
var state_26957__$1 = (function (){var statearr_26971 = state_26957;
(statearr_26971[(12)] = inst_26929);

(statearr_26971[(11)] = inst_26930__$1);

return statearr_26971;
})();
if(cljs.core.truth_(inst_26931)){
var statearr_26972_27001 = state_26957__$1;
(statearr_26972_27001[(1)] = (8));

} else {
var statearr_26973_27002 = state_26957__$1;
(statearr_26973_27002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (14))){
var inst_26950 = (state_26957[(2)]);
var inst_26951 = cljs.core.async.close_BANG_.call(null,out);
var state_26957__$1 = (function (){var statearr_26975 = state_26957;
(statearr_26975[(13)] = inst_26950);

return statearr_26975;
})();
var statearr_26976_27003 = state_26957__$1;
(statearr_26976_27003[(2)] = inst_26951);

(statearr_26976_27003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (10))){
var inst_26941 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26977_27004 = state_26957__$1;
(statearr_26977_27004[(2)] = inst_26941);

(statearr_26977_27004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (8))){
var inst_26930 = (state_26957[(11)]);
var inst_26921 = (state_26957[(8)]);
var tmp26974 = inst_26921;
var inst_26921__$1 = tmp26974;
var inst_26922 = inst_26930;
var state_26957__$1 = (function (){var statearr_26978 = state_26957;
(statearr_26978[(7)] = inst_26922);

(statearr_26978[(8)] = inst_26921__$1);

return statearr_26978;
})();
var statearr_26979_27005 = state_26957__$1;
(statearr_26979_27005[(2)] = null);

(statearr_26979_27005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___26991,out))
;
return ((function (switch__24219__auto__,c__24331__auto___26991,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26983[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_26957){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_26957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__24223__auto__ = e26984;
var statearr_26985_27006 = state_26957;
(statearr_26985_27006[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27007 = state_26957;
state_26957 = G__27007;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_26957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_26957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___26991,out))
})();
var state__24333__auto__ = (function (){var statearr_26986 = f__24332__auto__.call(null);
(statearr_26986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___26991);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___26991,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27008 = [];
var len__22721__auto___27082 = arguments.length;
var i__22722__auto___27083 = (0);
while(true){
if((i__22722__auto___27083 < len__22721__auto___27082)){
args27008.push((arguments[i__22722__auto___27083]));

var G__27084 = (i__22722__auto___27083 + (1));
i__22722__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var G__27010 = args27008.length;
switch (G__27010) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27008.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24331__auto___27086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___27086,out){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___27086,out){
return (function (state_27052){
var state_val_27053 = (state_27052[(1)]);
if((state_val_27053 === (7))){
var inst_27048 = (state_27052[(2)]);
var state_27052__$1 = state_27052;
var statearr_27054_27087 = state_27052__$1;
(statearr_27054_27087[(2)] = inst_27048);

(statearr_27054_27087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (1))){
var inst_27011 = [];
var inst_27012 = inst_27011;
var inst_27013 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27052__$1 = (function (){var statearr_27055 = state_27052;
(statearr_27055[(7)] = inst_27012);

(statearr_27055[(8)] = inst_27013);

return statearr_27055;
})();
var statearr_27056_27088 = state_27052__$1;
(statearr_27056_27088[(2)] = null);

(statearr_27056_27088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (4))){
var inst_27016 = (state_27052[(9)]);
var inst_27016__$1 = (state_27052[(2)]);
var inst_27017 = (inst_27016__$1 == null);
var inst_27018 = cljs.core.not.call(null,inst_27017);
var state_27052__$1 = (function (){var statearr_27057 = state_27052;
(statearr_27057[(9)] = inst_27016__$1);

return statearr_27057;
})();
if(inst_27018){
var statearr_27058_27089 = state_27052__$1;
(statearr_27058_27089[(1)] = (5));

} else {
var statearr_27059_27090 = state_27052__$1;
(statearr_27059_27090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (15))){
var inst_27042 = (state_27052[(2)]);
var state_27052__$1 = state_27052;
var statearr_27060_27091 = state_27052__$1;
(statearr_27060_27091[(2)] = inst_27042);

(statearr_27060_27091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (13))){
var state_27052__$1 = state_27052;
var statearr_27061_27092 = state_27052__$1;
(statearr_27061_27092[(2)] = null);

(statearr_27061_27092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (6))){
var inst_27012 = (state_27052[(7)]);
var inst_27037 = inst_27012.length;
var inst_27038 = (inst_27037 > (0));
var state_27052__$1 = state_27052;
if(cljs.core.truth_(inst_27038)){
var statearr_27062_27093 = state_27052__$1;
(statearr_27062_27093[(1)] = (12));

} else {
var statearr_27063_27094 = state_27052__$1;
(statearr_27063_27094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (3))){
var inst_27050 = (state_27052[(2)]);
var state_27052__$1 = state_27052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27052__$1,inst_27050);
} else {
if((state_val_27053 === (12))){
var inst_27012 = (state_27052[(7)]);
var inst_27040 = cljs.core.vec.call(null,inst_27012);
var state_27052__$1 = state_27052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27052__$1,(15),out,inst_27040);
} else {
if((state_val_27053 === (2))){
var state_27052__$1 = state_27052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27052__$1,(4),ch);
} else {
if((state_val_27053 === (11))){
var inst_27016 = (state_27052[(9)]);
var inst_27020 = (state_27052[(10)]);
var inst_27030 = (state_27052[(2)]);
var inst_27031 = [];
var inst_27032 = inst_27031.push(inst_27016);
var inst_27012 = inst_27031;
var inst_27013 = inst_27020;
var state_27052__$1 = (function (){var statearr_27064 = state_27052;
(statearr_27064[(7)] = inst_27012);

(statearr_27064[(11)] = inst_27032);

(statearr_27064[(12)] = inst_27030);

(statearr_27064[(8)] = inst_27013);

return statearr_27064;
})();
var statearr_27065_27095 = state_27052__$1;
(statearr_27065_27095[(2)] = null);

(statearr_27065_27095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (9))){
var inst_27012 = (state_27052[(7)]);
var inst_27028 = cljs.core.vec.call(null,inst_27012);
var state_27052__$1 = state_27052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27052__$1,(11),out,inst_27028);
} else {
if((state_val_27053 === (5))){
var inst_27013 = (state_27052[(8)]);
var inst_27016 = (state_27052[(9)]);
var inst_27020 = (state_27052[(10)]);
var inst_27020__$1 = f.call(null,inst_27016);
var inst_27021 = cljs.core._EQ_.call(null,inst_27020__$1,inst_27013);
var inst_27022 = cljs.core.keyword_identical_QMARK_.call(null,inst_27013,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27023 = (inst_27021) || (inst_27022);
var state_27052__$1 = (function (){var statearr_27066 = state_27052;
(statearr_27066[(10)] = inst_27020__$1);

return statearr_27066;
})();
if(cljs.core.truth_(inst_27023)){
var statearr_27067_27096 = state_27052__$1;
(statearr_27067_27096[(1)] = (8));

} else {
var statearr_27068_27097 = state_27052__$1;
(statearr_27068_27097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (14))){
var inst_27045 = (state_27052[(2)]);
var inst_27046 = cljs.core.async.close_BANG_.call(null,out);
var state_27052__$1 = (function (){var statearr_27070 = state_27052;
(statearr_27070[(13)] = inst_27045);

return statearr_27070;
})();
var statearr_27071_27098 = state_27052__$1;
(statearr_27071_27098[(2)] = inst_27046);

(statearr_27071_27098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (10))){
var inst_27035 = (state_27052[(2)]);
var state_27052__$1 = state_27052;
var statearr_27072_27099 = state_27052__$1;
(statearr_27072_27099[(2)] = inst_27035);

(statearr_27072_27099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27053 === (8))){
var inst_27012 = (state_27052[(7)]);
var inst_27016 = (state_27052[(9)]);
var inst_27020 = (state_27052[(10)]);
var inst_27025 = inst_27012.push(inst_27016);
var tmp27069 = inst_27012;
var inst_27012__$1 = tmp27069;
var inst_27013 = inst_27020;
var state_27052__$1 = (function (){var statearr_27073 = state_27052;
(statearr_27073[(7)] = inst_27012__$1);

(statearr_27073[(8)] = inst_27013);

(statearr_27073[(14)] = inst_27025);

return statearr_27073;
})();
var statearr_27074_27100 = state_27052__$1;
(statearr_27074_27100[(2)] = null);

(statearr_27074_27100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__24331__auto___27086,out))
;
return ((function (switch__24219__auto__,c__24331__auto___27086,out){
return (function() {
var cljs$core$async$state_machine__24220__auto__ = null;
var cljs$core$async$state_machine__24220__auto____0 = (function (){
var statearr_27078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27078[(0)] = cljs$core$async$state_machine__24220__auto__);

(statearr_27078[(1)] = (1));

return statearr_27078;
});
var cljs$core$async$state_machine__24220__auto____1 = (function (state_27052){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_27052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e27079){if((e27079 instanceof Object)){
var ex__24223__auto__ = e27079;
var statearr_27080_27101 = state_27052;
(statearr_27080_27101[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27102 = state_27052;
state_27052 = G__27102;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
cljs$core$async$state_machine__24220__auto__ = function(state_27052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24220__auto____1.call(this,state_27052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24220__auto____0;
cljs$core$async$state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24220__auto____1;
return cljs$core$async$state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___27086,out))
})();
var state__24333__auto__ = (function (){var statearr_27081 = f__24332__auto__.call(null);
(statearr_27081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___27086);

return statearr_27081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___27086,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map