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
var args24437 = [];
var len__22721__auto___24443 = arguments.length;
var i__22722__auto___24444 = (0);
while(true){
if((i__22722__auto___24444 < len__22721__auto___24443)){
args24437.push((arguments[i__22722__auto___24444]));

var G__24445 = (i__22722__auto___24444 + (1));
i__22722__auto___24444 = G__24445;
continue;
} else {
}
break;
}

var G__24439 = args24437.length;
switch (G__24439) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24437.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24440 = (function (f,blockable,meta24441){
this.f = f;
this.blockable = blockable;
this.meta24441 = meta24441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24442,meta24441__$1){
var self__ = this;
var _24442__$1 = this;
return (new cljs.core.async.t_cljs$core$async24440(self__.f,self__.blockable,meta24441__$1));
});

cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24442){
var self__ = this;
var _24442__$1 = this;
return self__.meta24441;
});

cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24441","meta24441",194978614,null)], null);
});

cljs.core.async.t_cljs$core$async24440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24440";

cljs.core.async.t_cljs$core$async24440.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24440");
});

cljs.core.async.__GT_t_cljs$core$async24440 = (function cljs$core$async$__GT_t_cljs$core$async24440(f__$1,blockable__$1,meta24441){
return (new cljs.core.async.t_cljs$core$async24440(f__$1,blockable__$1,meta24441));
});

}

return (new cljs.core.async.t_cljs$core$async24440(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24449 = [];
var len__22721__auto___24452 = arguments.length;
var i__22722__auto___24453 = (0);
while(true){
if((i__22722__auto___24453 < len__22721__auto___24452)){
args24449.push((arguments[i__22722__auto___24453]));

var G__24454 = (i__22722__auto___24453 + (1));
i__22722__auto___24453 = G__24454;
continue;
} else {
}
break;
}

var G__24451 = args24449.length;
switch (G__24451) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24449.length)].join('')));

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
var args24456 = [];
var len__22721__auto___24459 = arguments.length;
var i__22722__auto___24460 = (0);
while(true){
if((i__22722__auto___24460 < len__22721__auto___24459)){
args24456.push((arguments[i__22722__auto___24460]));

var G__24461 = (i__22722__auto___24460 + (1));
i__22722__auto___24460 = G__24461;
continue;
} else {
}
break;
}

var G__24458 = args24456.length;
switch (G__24458) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24456.length)].join('')));

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
var args24463 = [];
var len__22721__auto___24466 = arguments.length;
var i__22722__auto___24467 = (0);
while(true){
if((i__22722__auto___24467 < len__22721__auto___24466)){
args24463.push((arguments[i__22722__auto___24467]));

var G__24468 = (i__22722__auto___24467 + (1));
i__22722__auto___24467 = G__24468;
continue;
} else {
}
break;
}

var G__24465 = args24463.length;
switch (G__24465) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24463.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24470 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24470);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24470,ret){
return (function (){
return fn1.call(null,val_24470);
});})(val_24470,ret))
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
var args24471 = [];
var len__22721__auto___24474 = arguments.length;
var i__22722__auto___24475 = (0);
while(true){
if((i__22722__auto___24475 < len__22721__auto___24474)){
args24471.push((arguments[i__22722__auto___24475]));

var G__24476 = (i__22722__auto___24475 + (1));
i__22722__auto___24475 = G__24476;
continue;
} else {
}
break;
}

var G__24473 = args24471.length;
switch (G__24473) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24471.length)].join('')));

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
var n__22566__auto___24478 = n;
var x_24479 = (0);
while(true){
if((x_24479 < n__22566__auto___24478)){
(a[x_24479] = (0));

var G__24480 = (x_24479 + (1));
x_24479 = G__24480;
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

var G__24481 = (i + (1));
i = G__24481;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24485 = (function (alt_flag,flag,meta24486){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24486 = meta24486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24487,meta24486__$1){
var self__ = this;
var _24487__$1 = this;
return (new cljs.core.async.t_cljs$core$async24485(self__.alt_flag,self__.flag,meta24486__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24487){
var self__ = this;
var _24487__$1 = this;
return self__.meta24486;
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24486","meta24486",608635133,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24485";

cljs.core.async.t_cljs$core$async24485.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24485");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24485 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24485(alt_flag__$1,flag__$1,meta24486){
return (new cljs.core.async.t_cljs$core$async24485(alt_flag__$1,flag__$1,meta24486));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24485(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24491 = (function (alt_handler,flag,cb,meta24492){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24492 = meta24492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24493,meta24492__$1){
var self__ = this;
var _24493__$1 = this;
return (new cljs.core.async.t_cljs$core$async24491(self__.alt_handler,self__.flag,self__.cb,meta24492__$1));
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24493){
var self__ = this;
var _24493__$1 = this;
return self__.meta24492;
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24492","meta24492",-1082040108,null)], null);
});

cljs.core.async.t_cljs$core$async24491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24491";

cljs.core.async.t_cljs$core$async24491.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async24491");
});

cljs.core.async.__GT_t_cljs$core$async24491 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24491(alt_handler__$1,flag__$1,cb__$1,meta24492){
return (new cljs.core.async.t_cljs$core$async24491(alt_handler__$1,flag__$1,cb__$1,meta24492));
});

}

return (new cljs.core.async.t_cljs$core$async24491(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24494_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24494_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24495_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24495_SHARP_,port], null));
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
var G__24496 = (i + (1));
i = G__24496;
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
var len__22721__auto___24502 = arguments.length;
var i__22722__auto___24503 = (0);
while(true){
if((i__22722__auto___24503 < len__22721__auto___24502)){
args__22728__auto__.push((arguments[i__22722__auto___24503]));

var G__24504 = (i__22722__auto___24503 + (1));
i__22722__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((1) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22729__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24499){
var map__24500 = p__24499;
var map__24500__$1 = ((((!((map__24500 == null)))?((((map__24500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24500):map__24500);
var opts = map__24500__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24497){
var G__24498 = cljs.core.first.call(null,seq24497);
var seq24497__$1 = cljs.core.next.call(null,seq24497);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24498,seq24497__$1);
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
var args24505 = [];
var len__22721__auto___24555 = arguments.length;
var i__22722__auto___24556 = (0);
while(true){
if((i__22722__auto___24556 < len__22721__auto___24555)){
args24505.push((arguments[i__22722__auto___24556]));

var G__24557 = (i__22722__auto___24556 + (1));
i__22722__auto___24556 = G__24557;
continue;
} else {
}
break;
}

var G__24507 = args24505.length;
switch (G__24507) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24505.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24392__auto___24559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___24559){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___24559){
return (function (state_24531){
var state_val_24532 = (state_24531[(1)]);
if((state_val_24532 === (7))){
var inst_24527 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
var statearr_24533_24560 = state_24531__$1;
(statearr_24533_24560[(2)] = inst_24527);

(statearr_24533_24560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (1))){
var state_24531__$1 = state_24531;
var statearr_24534_24561 = state_24531__$1;
(statearr_24534_24561[(2)] = null);

(statearr_24534_24561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (4))){
var inst_24510 = (state_24531[(7)]);
var inst_24510__$1 = (state_24531[(2)]);
var inst_24511 = (inst_24510__$1 == null);
var state_24531__$1 = (function (){var statearr_24535 = state_24531;
(statearr_24535[(7)] = inst_24510__$1);

return statearr_24535;
})();
if(cljs.core.truth_(inst_24511)){
var statearr_24536_24562 = state_24531__$1;
(statearr_24536_24562[(1)] = (5));

} else {
var statearr_24537_24563 = state_24531__$1;
(statearr_24537_24563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (13))){
var state_24531__$1 = state_24531;
var statearr_24538_24564 = state_24531__$1;
(statearr_24538_24564[(2)] = null);

(statearr_24538_24564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (6))){
var inst_24510 = (state_24531[(7)]);
var state_24531__$1 = state_24531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24531__$1,(11),to,inst_24510);
} else {
if((state_val_24532 === (3))){
var inst_24529 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24531__$1,inst_24529);
} else {
if((state_val_24532 === (12))){
var state_24531__$1 = state_24531;
var statearr_24539_24565 = state_24531__$1;
(statearr_24539_24565[(2)] = null);

(statearr_24539_24565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (2))){
var state_24531__$1 = state_24531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24531__$1,(4),from);
} else {
if((state_val_24532 === (11))){
var inst_24520 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
if(cljs.core.truth_(inst_24520)){
var statearr_24540_24566 = state_24531__$1;
(statearr_24540_24566[(1)] = (12));

} else {
var statearr_24541_24567 = state_24531__$1;
(statearr_24541_24567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (9))){
var state_24531__$1 = state_24531;
var statearr_24542_24568 = state_24531__$1;
(statearr_24542_24568[(2)] = null);

(statearr_24542_24568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (5))){
var state_24531__$1 = state_24531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24543_24569 = state_24531__$1;
(statearr_24543_24569[(1)] = (8));

} else {
var statearr_24544_24570 = state_24531__$1;
(statearr_24544_24570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (14))){
var inst_24525 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
var statearr_24545_24571 = state_24531__$1;
(statearr_24545_24571[(2)] = inst_24525);

(statearr_24545_24571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (10))){
var inst_24517 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
var statearr_24546_24572 = state_24531__$1;
(statearr_24546_24572[(2)] = inst_24517);

(statearr_24546_24572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (8))){
var inst_24514 = cljs.core.async.close_BANG_.call(null,to);
var state_24531__$1 = state_24531;
var statearr_24547_24573 = state_24531__$1;
(statearr_24547_24573[(2)] = inst_24514);

(statearr_24547_24573[(1)] = (10));


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
});})(c__24392__auto___24559))
;
return ((function (switch__24280__auto__,c__24392__auto___24559){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_24551 = [null,null,null,null,null,null,null,null];
(statearr_24551[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_24551[(1)] = (1));

return statearr_24551;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_24531){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24552){if((e24552 instanceof Object)){
var ex__24284__auto__ = e24552;
var statearr_24553_24574 = state_24531;
(statearr_24553_24574[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24575 = state_24531;
state_24531 = G__24575;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_24531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_24531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___24559))
})();
var state__24394__auto__ = (function (){var statearr_24554 = f__24393__auto__.call(null);
(statearr_24554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___24559);

return statearr_24554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___24559))
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
return (function (p__24759){
var vec__24760 = p__24759;
var v = cljs.core.nth.call(null,vec__24760,(0),null);
var p = cljs.core.nth.call(null,vec__24760,(1),null);
var job = vec__24760;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24392__auto___24942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (1))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24765__$1,(2),res,v);
} else {
if((state_val_24766 === (2))){
var inst_24762 = (state_24765[(2)]);
var inst_24763 = cljs.core.async.close_BANG_.call(null,res);
var state_24765__$1 = (function (){var statearr_24767 = state_24765;
(statearr_24767[(7)] = inst_24762);

return statearr_24767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
return null;
}
}
});})(c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results))
;
return ((function (switch__24280__auto__,c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_24771 = [null,null,null,null,null,null,null,null];
(statearr_24771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__);

(statearr_24771[(1)] = (1));

return statearr_24771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1 = (function (state_24765){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24772){if((e24772 instanceof Object)){
var ex__24284__auto__ = e24772;
var statearr_24773_24943 = state_24765;
(statearr_24773_24943[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24944 = state_24765;
state_24765 = G__24944;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results))
})();
var state__24394__auto__ = (function (){var statearr_24774 = f__24393__auto__.call(null);
(statearr_24774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___24942);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___24942,res,vec__24760,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24775){
var vec__24776 = p__24775;
var v = cljs.core.nth.call(null,vec__24776,(0),null);
var p = cljs.core.nth.call(null,vec__24776,(1),null);
var job = vec__24776;
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
var n__22566__auto___24945 = n;
var __24946 = (0);
while(true){
if((__24946 < n__22566__auto___24945)){
var G__24777_24947 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24777_24947) {
case "compute":
var c__24392__auto___24949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24946,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (__24946,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function (state_24790){
var state_val_24791 = (state_24790[(1)]);
if((state_val_24791 === (1))){
var state_24790__$1 = state_24790;
var statearr_24792_24950 = state_24790__$1;
(statearr_24792_24950[(2)] = null);

(statearr_24792_24950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (2))){
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24790__$1,(4),jobs);
} else {
if((state_val_24791 === (3))){
var inst_24788 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24790__$1,inst_24788);
} else {
if((state_val_24791 === (4))){
var inst_24780 = (state_24790[(2)]);
var inst_24781 = process.call(null,inst_24780);
var state_24790__$1 = state_24790;
if(cljs.core.truth_(inst_24781)){
var statearr_24793_24951 = state_24790__$1;
(statearr_24793_24951[(1)] = (5));

} else {
var statearr_24794_24952 = state_24790__$1;
(statearr_24794_24952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (5))){
var state_24790__$1 = state_24790;
var statearr_24795_24953 = state_24790__$1;
(statearr_24795_24953[(2)] = null);

(statearr_24795_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (6))){
var state_24790__$1 = state_24790;
var statearr_24796_24954 = state_24790__$1;
(statearr_24796_24954[(2)] = null);

(statearr_24796_24954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (7))){
var inst_24786 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
var statearr_24797_24955 = state_24790__$1;
(statearr_24797_24955[(2)] = inst_24786);

(statearr_24797_24955[(1)] = (3));


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
});})(__24946,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
;
return ((function (__24946,switch__24280__auto__,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_24801 = [null,null,null,null,null,null,null];
(statearr_24801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__);

(statearr_24801[(1)] = (1));

return statearr_24801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1 = (function (state_24790){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24802){if((e24802 instanceof Object)){
var ex__24284__auto__ = e24802;
var statearr_24803_24956 = state_24790;
(statearr_24803_24956[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24957 = state_24790;
state_24790 = G__24957;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = function(state_24790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1.call(this,state_24790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__;
})()
;})(__24946,switch__24280__auto__,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
})();
var state__24394__auto__ = (function (){var statearr_24804 = f__24393__auto__.call(null);
(statearr_24804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___24949);

return statearr_24804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(__24946,c__24392__auto___24949,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
);


break;
case "async":
var c__24392__auto___24958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24946,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (__24946,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function (state_24817){
var state_val_24818 = (state_24817[(1)]);
if((state_val_24818 === (1))){
var state_24817__$1 = state_24817;
var statearr_24819_24959 = state_24817__$1;
(statearr_24819_24959[(2)] = null);

(statearr_24819_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24818 === (2))){
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24817__$1,(4),jobs);
} else {
if((state_val_24818 === (3))){
var inst_24815 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24817__$1,inst_24815);
} else {
if((state_val_24818 === (4))){
var inst_24807 = (state_24817[(2)]);
var inst_24808 = async.call(null,inst_24807);
var state_24817__$1 = state_24817;
if(cljs.core.truth_(inst_24808)){
var statearr_24820_24960 = state_24817__$1;
(statearr_24820_24960[(1)] = (5));

} else {
var statearr_24821_24961 = state_24817__$1;
(statearr_24821_24961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24818 === (5))){
var state_24817__$1 = state_24817;
var statearr_24822_24962 = state_24817__$1;
(statearr_24822_24962[(2)] = null);

(statearr_24822_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24818 === (6))){
var state_24817__$1 = state_24817;
var statearr_24823_24963 = state_24817__$1;
(statearr_24823_24963[(2)] = null);

(statearr_24823_24963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24818 === (7))){
var inst_24813 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
var statearr_24824_24964 = state_24817__$1;
(statearr_24824_24964[(2)] = inst_24813);

(statearr_24824_24964[(1)] = (3));


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
});})(__24946,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
;
return ((function (__24946,switch__24280__auto__,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null];
(statearr_24828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1 = (function (state_24817){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__24284__auto__ = e24829;
var statearr_24830_24965 = state_24817;
(statearr_24830_24965[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24966 = state_24817;
state_24817 = G__24966;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = function(state_24817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1.call(this,state_24817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__;
})()
;})(__24946,switch__24280__auto__,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
})();
var state__24394__auto__ = (function (){var statearr_24831 = f__24393__auto__.call(null);
(statearr_24831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___24958);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(__24946,c__24392__auto___24958,G__24777_24947,n__22566__auto___24945,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24967 = (__24946 + (1));
__24946 = G__24967;
continue;
} else {
}
break;
}

var c__24392__auto___24968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___24968,jobs,results,process,async){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___24968,jobs,results,process,async){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24855_24969 = state_24853__$1;
(statearr_24855_24969[(2)] = null);

(statearr_24855_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),from);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (4))){
var inst_24834 = (state_24853[(7)]);
var inst_24834__$1 = (state_24853[(2)]);
var inst_24835 = (inst_24834__$1 == null);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(7)] = inst_24834__$1);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24835)){
var statearr_24857_24970 = state_24853__$1;
(statearr_24857_24970[(1)] = (5));

} else {
var statearr_24858_24971 = state_24853__$1;
(statearr_24858_24971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24837 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24853__$1 = state_24853;
var statearr_24859_24972 = state_24853__$1;
(statearr_24859_24972[(2)] = inst_24837);

(statearr_24859_24972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24839 = (state_24853[(8)]);
var inst_24834 = (state_24853[(7)]);
var inst_24839__$1 = cljs.core.async.chan.call(null,(1));
var inst_24840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24841 = [inst_24834,inst_24839__$1];
var inst_24842 = (new cljs.core.PersistentVector(null,2,(5),inst_24840,inst_24841,null));
var state_24853__$1 = (function (){var statearr_24860 = state_24853;
(statearr_24860[(8)] = inst_24839__$1);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(8),jobs,inst_24842);
} else {
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24861_24973 = state_24853__$1;
(statearr_24861_24973[(2)] = inst_24849);

(statearr_24861_24973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24839 = (state_24853[(8)]);
var inst_24844 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24862 = state_24853;
(statearr_24862[(9)] = inst_24844);

return statearr_24862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(9),results,inst_24839);
} else {
if((state_val_24854 === (9))){
var inst_24846 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24863 = state_24853;
(statearr_24863[(10)] = inst_24846);

return statearr_24863;
})();
var statearr_24864_24974 = state_24853__$1;
(statearr_24864_24974[(2)] = null);

(statearr_24864_24974[(1)] = (2));


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
});})(c__24392__auto___24968,jobs,results,process,async))
;
return ((function (switch__24280__auto__,c__24392__auto___24968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_24868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__);

(statearr_24868[(1)] = (1));

return statearr_24868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1 = (function (state_24853){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24869){if((e24869 instanceof Object)){
var ex__24284__auto__ = e24869;
var statearr_24870_24975 = state_24853;
(statearr_24870_24975[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24976 = state_24853;
state_24853 = G__24976;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___24968,jobs,results,process,async))
})();
var state__24394__auto__ = (function (){var statearr_24871 = f__24393__auto__.call(null);
(statearr_24871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___24968);

return statearr_24871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___24968,jobs,results,process,async))
);


var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__,jobs,results,process,async){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__,jobs,results,process,async){
return (function (state_24909){
var state_val_24910 = (state_24909[(1)]);
if((state_val_24910 === (7))){
var inst_24905 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24911_24977 = state_24909__$1;
(statearr_24911_24977[(2)] = inst_24905);

(statearr_24911_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (20))){
var state_24909__$1 = state_24909;
var statearr_24912_24978 = state_24909__$1;
(statearr_24912_24978[(2)] = null);

(statearr_24912_24978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (1))){
var state_24909__$1 = state_24909;
var statearr_24913_24979 = state_24909__$1;
(statearr_24913_24979[(2)] = null);

(statearr_24913_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (4))){
var inst_24874 = (state_24909[(7)]);
var inst_24874__$1 = (state_24909[(2)]);
var inst_24875 = (inst_24874__$1 == null);
var state_24909__$1 = (function (){var statearr_24914 = state_24909;
(statearr_24914[(7)] = inst_24874__$1);

return statearr_24914;
})();
if(cljs.core.truth_(inst_24875)){
var statearr_24915_24980 = state_24909__$1;
(statearr_24915_24980[(1)] = (5));

} else {
var statearr_24916_24981 = state_24909__$1;
(statearr_24916_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (15))){
var inst_24887 = (state_24909[(8)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24909__$1,(18),to,inst_24887);
} else {
if((state_val_24910 === (21))){
var inst_24900 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24917_24982 = state_24909__$1;
(statearr_24917_24982[(2)] = inst_24900);

(statearr_24917_24982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (13))){
var inst_24902 = (state_24909[(2)]);
var state_24909__$1 = (function (){var statearr_24918 = state_24909;
(statearr_24918[(9)] = inst_24902);

return statearr_24918;
})();
var statearr_24919_24983 = state_24909__$1;
(statearr_24919_24983[(2)] = null);

(statearr_24919_24983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (6))){
var inst_24874 = (state_24909[(7)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(11),inst_24874);
} else {
if((state_val_24910 === (17))){
var inst_24895 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
if(cljs.core.truth_(inst_24895)){
var statearr_24920_24984 = state_24909__$1;
(statearr_24920_24984[(1)] = (19));

} else {
var statearr_24921_24985 = state_24909__$1;
(statearr_24921_24985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (3))){
var inst_24907 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24909__$1,inst_24907);
} else {
if((state_val_24910 === (12))){
var inst_24884 = (state_24909[(10)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(14),inst_24884);
} else {
if((state_val_24910 === (2))){
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(4),results);
} else {
if((state_val_24910 === (19))){
var state_24909__$1 = state_24909;
var statearr_24922_24986 = state_24909__$1;
(statearr_24922_24986[(2)] = null);

(statearr_24922_24986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (11))){
var inst_24884 = (state_24909[(2)]);
var state_24909__$1 = (function (){var statearr_24923 = state_24909;
(statearr_24923[(10)] = inst_24884);

return statearr_24923;
})();
var statearr_24924_24987 = state_24909__$1;
(statearr_24924_24987[(2)] = null);

(statearr_24924_24987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (9))){
var state_24909__$1 = state_24909;
var statearr_24925_24988 = state_24909__$1;
(statearr_24925_24988[(2)] = null);

(statearr_24925_24988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (5))){
var state_24909__$1 = state_24909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24926_24989 = state_24909__$1;
(statearr_24926_24989[(1)] = (8));

} else {
var statearr_24927_24990 = state_24909__$1;
(statearr_24927_24990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (14))){
var inst_24887 = (state_24909[(8)]);
var inst_24889 = (state_24909[(11)]);
var inst_24887__$1 = (state_24909[(2)]);
var inst_24888 = (inst_24887__$1 == null);
var inst_24889__$1 = cljs.core.not.call(null,inst_24888);
var state_24909__$1 = (function (){var statearr_24928 = state_24909;
(statearr_24928[(8)] = inst_24887__$1);

(statearr_24928[(11)] = inst_24889__$1);

return statearr_24928;
})();
if(inst_24889__$1){
var statearr_24929_24991 = state_24909__$1;
(statearr_24929_24991[(1)] = (15));

} else {
var statearr_24930_24992 = state_24909__$1;
(statearr_24930_24992[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (16))){
var inst_24889 = (state_24909[(11)]);
var state_24909__$1 = state_24909;
var statearr_24931_24993 = state_24909__$1;
(statearr_24931_24993[(2)] = inst_24889);

(statearr_24931_24993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (10))){
var inst_24881 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24932_24994 = state_24909__$1;
(statearr_24932_24994[(2)] = inst_24881);

(statearr_24932_24994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (18))){
var inst_24892 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24933_24995 = state_24909__$1;
(statearr_24933_24995[(2)] = inst_24892);

(statearr_24933_24995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (8))){
var inst_24878 = cljs.core.async.close_BANG_.call(null,to);
var state_24909__$1 = state_24909;
var statearr_24934_24996 = state_24909__$1;
(statearr_24934_24996[(2)] = inst_24878);

(statearr_24934_24996[(1)] = (10));


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
});})(c__24392__auto__,jobs,results,process,async))
;
return ((function (switch__24280__auto__,c__24392__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_24938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__);

(statearr_24938[(1)] = (1));

return statearr_24938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1 = (function (state_24909){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_24909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e24939){if((e24939 instanceof Object)){
var ex__24284__auto__ = e24939;
var statearr_24940_24997 = state_24909;
(statearr_24940_24997[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24909;
state_24909 = G__24998;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__ = function(state_24909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1.call(this,state_24909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__,jobs,results,process,async))
})();
var state__24394__auto__ = (function (){var statearr_24941 = f__24393__auto__.call(null);
(statearr_24941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_24941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__,jobs,results,process,async))
);

return c__24392__auto__;
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
var args24999 = [];
var len__22721__auto___25002 = arguments.length;
var i__22722__auto___25003 = (0);
while(true){
if((i__22722__auto___25003 < len__22721__auto___25002)){
args24999.push((arguments[i__22722__auto___25003]));

var G__25004 = (i__22722__auto___25003 + (1));
i__22722__auto___25003 = G__25004;
continue;
} else {
}
break;
}

var G__25001 = args24999.length;
switch (G__25001) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24999.length)].join('')));

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
var args25006 = [];
var len__22721__auto___25009 = arguments.length;
var i__22722__auto___25010 = (0);
while(true){
if((i__22722__auto___25010 < len__22721__auto___25009)){
args25006.push((arguments[i__22722__auto___25010]));

var G__25011 = (i__22722__auto___25010 + (1));
i__22722__auto___25010 = G__25011;
continue;
} else {
}
break;
}

var G__25008 = args25006.length;
switch (G__25008) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25006.length)].join('')));

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
var args25013 = [];
var len__22721__auto___25066 = arguments.length;
var i__22722__auto___25067 = (0);
while(true){
if((i__22722__auto___25067 < len__22721__auto___25066)){
args25013.push((arguments[i__22722__auto___25067]));

var G__25068 = (i__22722__auto___25067 + (1));
i__22722__auto___25067 = G__25068;
continue;
} else {
}
break;
}

var G__25015 = args25013.length;
switch (G__25015) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25013.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24392__auto___25070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___25070,tc,fc){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___25070,tc,fc){
return (function (state_25041){
var state_val_25042 = (state_25041[(1)]);
if((state_val_25042 === (7))){
var inst_25037 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
var statearr_25043_25071 = state_25041__$1;
(statearr_25043_25071[(2)] = inst_25037);

(statearr_25043_25071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (1))){
var state_25041__$1 = state_25041;
var statearr_25044_25072 = state_25041__$1;
(statearr_25044_25072[(2)] = null);

(statearr_25044_25072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (4))){
var inst_25018 = (state_25041[(7)]);
var inst_25018__$1 = (state_25041[(2)]);
var inst_25019 = (inst_25018__$1 == null);
var state_25041__$1 = (function (){var statearr_25045 = state_25041;
(statearr_25045[(7)] = inst_25018__$1);

return statearr_25045;
})();
if(cljs.core.truth_(inst_25019)){
var statearr_25046_25073 = state_25041__$1;
(statearr_25046_25073[(1)] = (5));

} else {
var statearr_25047_25074 = state_25041__$1;
(statearr_25047_25074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (13))){
var state_25041__$1 = state_25041;
var statearr_25048_25075 = state_25041__$1;
(statearr_25048_25075[(2)] = null);

(statearr_25048_25075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (6))){
var inst_25018 = (state_25041[(7)]);
var inst_25024 = p.call(null,inst_25018);
var state_25041__$1 = state_25041;
if(cljs.core.truth_(inst_25024)){
var statearr_25049_25076 = state_25041__$1;
(statearr_25049_25076[(1)] = (9));

} else {
var statearr_25050_25077 = state_25041__$1;
(statearr_25050_25077[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (3))){
var inst_25039 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25041__$1,inst_25039);
} else {
if((state_val_25042 === (12))){
var state_25041__$1 = state_25041;
var statearr_25051_25078 = state_25041__$1;
(statearr_25051_25078[(2)] = null);

(statearr_25051_25078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (2))){
var state_25041__$1 = state_25041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25041__$1,(4),ch);
} else {
if((state_val_25042 === (11))){
var inst_25018 = (state_25041[(7)]);
var inst_25028 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25041__$1,(8),inst_25028,inst_25018);
} else {
if((state_val_25042 === (9))){
var state_25041__$1 = state_25041;
var statearr_25052_25079 = state_25041__$1;
(statearr_25052_25079[(2)] = tc);

(statearr_25052_25079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (5))){
var inst_25021 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25022 = cljs.core.async.close_BANG_.call(null,fc);
var state_25041__$1 = (function (){var statearr_25053 = state_25041;
(statearr_25053[(8)] = inst_25021);

return statearr_25053;
})();
var statearr_25054_25080 = state_25041__$1;
(statearr_25054_25080[(2)] = inst_25022);

(statearr_25054_25080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (14))){
var inst_25035 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
var statearr_25055_25081 = state_25041__$1;
(statearr_25055_25081[(2)] = inst_25035);

(statearr_25055_25081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (10))){
var state_25041__$1 = state_25041;
var statearr_25056_25082 = state_25041__$1;
(statearr_25056_25082[(2)] = fc);

(statearr_25056_25082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (8))){
var inst_25030 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
if(cljs.core.truth_(inst_25030)){
var statearr_25057_25083 = state_25041__$1;
(statearr_25057_25083[(1)] = (12));

} else {
var statearr_25058_25084 = state_25041__$1;
(statearr_25058_25084[(1)] = (13));

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
});})(c__24392__auto___25070,tc,fc))
;
return ((function (switch__24280__auto__,c__24392__auto___25070,tc,fc){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_25062 = [null,null,null,null,null,null,null,null,null];
(statearr_25062[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_25062[(1)] = (1));

return statearr_25062;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_25041){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_25041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e25063){if((e25063 instanceof Object)){
var ex__24284__auto__ = e25063;
var statearr_25064_25085 = state_25041;
(statearr_25064_25085[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25086 = state_25041;
state_25041 = G__25086;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_25041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_25041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___25070,tc,fc))
})();
var state__24394__auto__ = (function (){var statearr_25065 = f__24393__auto__.call(null);
(statearr_25065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___25070);

return statearr_25065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___25070,tc,fc))
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
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_25150){
var state_val_25151 = (state_25150[(1)]);
if((state_val_25151 === (7))){
var inst_25146 = (state_25150[(2)]);
var state_25150__$1 = state_25150;
var statearr_25152_25173 = state_25150__$1;
(statearr_25152_25173[(2)] = inst_25146);

(statearr_25152_25173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (1))){
var inst_25130 = init;
var state_25150__$1 = (function (){var statearr_25153 = state_25150;
(statearr_25153[(7)] = inst_25130);

return statearr_25153;
})();
var statearr_25154_25174 = state_25150__$1;
(statearr_25154_25174[(2)] = null);

(statearr_25154_25174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (4))){
var inst_25133 = (state_25150[(8)]);
var inst_25133__$1 = (state_25150[(2)]);
var inst_25134 = (inst_25133__$1 == null);
var state_25150__$1 = (function (){var statearr_25155 = state_25150;
(statearr_25155[(8)] = inst_25133__$1);

return statearr_25155;
})();
if(cljs.core.truth_(inst_25134)){
var statearr_25156_25175 = state_25150__$1;
(statearr_25156_25175[(1)] = (5));

} else {
var statearr_25157_25176 = state_25150__$1;
(statearr_25157_25176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (6))){
var inst_25133 = (state_25150[(8)]);
var inst_25137 = (state_25150[(9)]);
var inst_25130 = (state_25150[(7)]);
var inst_25137__$1 = f.call(null,inst_25130,inst_25133);
var inst_25138 = cljs.core.reduced_QMARK_.call(null,inst_25137__$1);
var state_25150__$1 = (function (){var statearr_25158 = state_25150;
(statearr_25158[(9)] = inst_25137__$1);

return statearr_25158;
})();
if(inst_25138){
var statearr_25159_25177 = state_25150__$1;
(statearr_25159_25177[(1)] = (8));

} else {
var statearr_25160_25178 = state_25150__$1;
(statearr_25160_25178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (3))){
var inst_25148 = (state_25150[(2)]);
var state_25150__$1 = state_25150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25150__$1,inst_25148);
} else {
if((state_val_25151 === (2))){
var state_25150__$1 = state_25150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25150__$1,(4),ch);
} else {
if((state_val_25151 === (9))){
var inst_25137 = (state_25150[(9)]);
var inst_25130 = inst_25137;
var state_25150__$1 = (function (){var statearr_25161 = state_25150;
(statearr_25161[(7)] = inst_25130);

return statearr_25161;
})();
var statearr_25162_25179 = state_25150__$1;
(statearr_25162_25179[(2)] = null);

(statearr_25162_25179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (5))){
var inst_25130 = (state_25150[(7)]);
var state_25150__$1 = state_25150;
var statearr_25163_25180 = state_25150__$1;
(statearr_25163_25180[(2)] = inst_25130);

(statearr_25163_25180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (10))){
var inst_25144 = (state_25150[(2)]);
var state_25150__$1 = state_25150;
var statearr_25164_25181 = state_25150__$1;
(statearr_25164_25181[(2)] = inst_25144);

(statearr_25164_25181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25151 === (8))){
var inst_25137 = (state_25150[(9)]);
var inst_25140 = cljs.core.deref.call(null,inst_25137);
var state_25150__$1 = state_25150;
var statearr_25165_25182 = state_25150__$1;
(statearr_25165_25182[(2)] = inst_25140);

(statearr_25165_25182[(1)] = (10));


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
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24281__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24281__auto____0 = (function (){
var statearr_25169 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25169[(0)] = cljs$core$async$reduce_$_state_machine__24281__auto__);

(statearr_25169[(1)] = (1));

return statearr_25169;
});
var cljs$core$async$reduce_$_state_machine__24281__auto____1 = (function (state_25150){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_25150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e25170){if((e25170 instanceof Object)){
var ex__24284__auto__ = e25170;
var statearr_25171_25183 = state_25150;
(statearr_25171_25183[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25184 = state_25150;
state_25150 = G__25184;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24281__auto__ = function(state_25150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24281__auto____1.call(this,state_25150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24281__auto____0;
cljs$core$async$reduce_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24281__auto____1;
return cljs$core$async$reduce_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_25172 = f__24393__auto__.call(null);
(statearr_25172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_25172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
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
var args25185 = [];
var len__22721__auto___25237 = arguments.length;
var i__22722__auto___25238 = (0);
while(true){
if((i__22722__auto___25238 < len__22721__auto___25237)){
args25185.push((arguments[i__22722__auto___25238]));

var G__25239 = (i__22722__auto___25238 + (1));
i__22722__auto___25238 = G__25239;
continue;
} else {
}
break;
}

var G__25187 = args25185.length;
switch (G__25187) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25185.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (7))){
var inst_25194 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25214_25241 = state_25212__$1;
(statearr_25214_25241[(2)] = inst_25194);

(statearr_25214_25241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (1))){
var inst_25188 = cljs.core.seq.call(null,coll);
var inst_25189 = inst_25188;
var state_25212__$1 = (function (){var statearr_25215 = state_25212;
(statearr_25215[(7)] = inst_25189);

return statearr_25215;
})();
var statearr_25216_25242 = state_25212__$1;
(statearr_25216_25242[(2)] = null);

(statearr_25216_25242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25189 = (state_25212[(7)]);
var inst_25192 = cljs.core.first.call(null,inst_25189);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(7),ch,inst_25192);
} else {
if((state_val_25213 === (13))){
var inst_25206 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25217_25243 = state_25212__$1;
(statearr_25217_25243[(2)] = inst_25206);

(statearr_25217_25243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25197 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25197)){
var statearr_25218_25244 = state_25212__$1;
(statearr_25218_25244[(1)] = (8));

} else {
var statearr_25219_25245 = state_25212__$1;
(statearr_25219_25245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (3))){
var inst_25210 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (12))){
var state_25212__$1 = state_25212;
var statearr_25220_25246 = state_25212__$1;
(statearr_25220_25246[(2)] = null);

(statearr_25220_25246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (2))){
var inst_25189 = (state_25212[(7)]);
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25189)){
var statearr_25221_25247 = state_25212__$1;
(statearr_25221_25247[(1)] = (4));

} else {
var statearr_25222_25248 = state_25212__$1;
(statearr_25222_25248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (11))){
var inst_25203 = cljs.core.async.close_BANG_.call(null,ch);
var state_25212__$1 = state_25212;
var statearr_25223_25249 = state_25212__$1;
(statearr_25223_25249[(2)] = inst_25203);

(statearr_25223_25249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (9))){
var state_25212__$1 = state_25212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25224_25250 = state_25212__$1;
(statearr_25224_25250[(1)] = (11));

} else {
var statearr_25225_25251 = state_25212__$1;
(statearr_25225_25251[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (5))){
var inst_25189 = (state_25212[(7)]);
var state_25212__$1 = state_25212;
var statearr_25226_25252 = state_25212__$1;
(statearr_25226_25252[(2)] = inst_25189);

(statearr_25226_25252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (10))){
var inst_25208 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25227_25253 = state_25212__$1;
(statearr_25227_25253[(2)] = inst_25208);

(statearr_25227_25253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25189 = (state_25212[(7)]);
var inst_25199 = cljs.core.next.call(null,inst_25189);
var inst_25189__$1 = inst_25199;
var state_25212__$1 = (function (){var statearr_25228 = state_25212;
(statearr_25228[(7)] = inst_25189__$1);

return statearr_25228;
})();
var statearr_25229_25254 = state_25212__$1;
(statearr_25229_25254[(2)] = null);

(statearr_25229_25254[(1)] = (2));


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
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_25212){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__24284__auto__ = e25234;
var statearr_25235_25255 = state_25212;
(statearr_25235_25255[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25256 = state_25212;
state_25212 = G__25256;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_25236 = f__24393__auto__.call(null);
(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25478 = (function (mult,ch,cs,meta25479){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25479 = meta25479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25480,meta25479__$1){
var self__ = this;
var _25480__$1 = this;
return (new cljs.core.async.t_cljs$core$async25478(self__.mult,self__.ch,self__.cs,meta25479__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25480){
var self__ = this;
var _25480__$1 = this;
return self__.meta25479;
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25479","meta25479",-1976419059,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25478";

cljs.core.async.t_cljs$core$async25478.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async25478");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25478 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25478(mult__$1,ch__$1,cs__$1,meta25479){
return (new cljs.core.async.t_cljs$core$async25478(mult__$1,ch__$1,cs__$1,meta25479));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25478(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24392__auto___25699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___25699,cs,m,dchan,dctr,done){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___25699,cs,m,dchan,dctr,done){
return (function (state_25611){
var state_val_25612 = (state_25611[(1)]);
if((state_val_25612 === (7))){
var inst_25607 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25613_25700 = state_25611__$1;
(statearr_25613_25700[(2)] = inst_25607);

(statearr_25613_25700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (20))){
var inst_25512 = (state_25611[(7)]);
var inst_25522 = cljs.core.first.call(null,inst_25512);
var inst_25523 = cljs.core.nth.call(null,inst_25522,(0),null);
var inst_25524 = cljs.core.nth.call(null,inst_25522,(1),null);
var state_25611__$1 = (function (){var statearr_25614 = state_25611;
(statearr_25614[(8)] = inst_25523);

return statearr_25614;
})();
if(cljs.core.truth_(inst_25524)){
var statearr_25615_25701 = state_25611__$1;
(statearr_25615_25701[(1)] = (22));

} else {
var statearr_25616_25702 = state_25611__$1;
(statearr_25616_25702[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (27))){
var inst_25554 = (state_25611[(9)]);
var inst_25483 = (state_25611[(10)]);
var inst_25559 = (state_25611[(11)]);
var inst_25552 = (state_25611[(12)]);
var inst_25559__$1 = cljs.core._nth.call(null,inst_25552,inst_25554);
var inst_25560 = cljs.core.async.put_BANG_.call(null,inst_25559__$1,inst_25483,done);
var state_25611__$1 = (function (){var statearr_25617 = state_25611;
(statearr_25617[(11)] = inst_25559__$1);

return statearr_25617;
})();
if(cljs.core.truth_(inst_25560)){
var statearr_25618_25703 = state_25611__$1;
(statearr_25618_25703[(1)] = (30));

} else {
var statearr_25619_25704 = state_25611__$1;
(statearr_25619_25704[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (1))){
var state_25611__$1 = state_25611;
var statearr_25620_25705 = state_25611__$1;
(statearr_25620_25705[(2)] = null);

(statearr_25620_25705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (24))){
var inst_25512 = (state_25611[(7)]);
var inst_25529 = (state_25611[(2)]);
var inst_25530 = cljs.core.next.call(null,inst_25512);
var inst_25492 = inst_25530;
var inst_25493 = null;
var inst_25494 = (0);
var inst_25495 = (0);
var state_25611__$1 = (function (){var statearr_25621 = state_25611;
(statearr_25621[(13)] = inst_25494);

(statearr_25621[(14)] = inst_25493);

(statearr_25621[(15)] = inst_25495);

(statearr_25621[(16)] = inst_25492);

(statearr_25621[(17)] = inst_25529);

return statearr_25621;
})();
var statearr_25622_25706 = state_25611__$1;
(statearr_25622_25706[(2)] = null);

(statearr_25622_25706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (39))){
var state_25611__$1 = state_25611;
var statearr_25626_25707 = state_25611__$1;
(statearr_25626_25707[(2)] = null);

(statearr_25626_25707[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (4))){
var inst_25483 = (state_25611[(10)]);
var inst_25483__$1 = (state_25611[(2)]);
var inst_25484 = (inst_25483__$1 == null);
var state_25611__$1 = (function (){var statearr_25627 = state_25611;
(statearr_25627[(10)] = inst_25483__$1);

return statearr_25627;
})();
if(cljs.core.truth_(inst_25484)){
var statearr_25628_25708 = state_25611__$1;
(statearr_25628_25708[(1)] = (5));

} else {
var statearr_25629_25709 = state_25611__$1;
(statearr_25629_25709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (15))){
var inst_25494 = (state_25611[(13)]);
var inst_25493 = (state_25611[(14)]);
var inst_25495 = (state_25611[(15)]);
var inst_25492 = (state_25611[(16)]);
var inst_25508 = (state_25611[(2)]);
var inst_25509 = (inst_25495 + (1));
var tmp25623 = inst_25494;
var tmp25624 = inst_25493;
var tmp25625 = inst_25492;
var inst_25492__$1 = tmp25625;
var inst_25493__$1 = tmp25624;
var inst_25494__$1 = tmp25623;
var inst_25495__$1 = inst_25509;
var state_25611__$1 = (function (){var statearr_25630 = state_25611;
(statearr_25630[(13)] = inst_25494__$1);

(statearr_25630[(14)] = inst_25493__$1);

(statearr_25630[(15)] = inst_25495__$1);

(statearr_25630[(18)] = inst_25508);

(statearr_25630[(16)] = inst_25492__$1);

return statearr_25630;
})();
var statearr_25631_25710 = state_25611__$1;
(statearr_25631_25710[(2)] = null);

(statearr_25631_25710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (21))){
var inst_25533 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25635_25711 = state_25611__$1;
(statearr_25635_25711[(2)] = inst_25533);

(statearr_25635_25711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (31))){
var inst_25559 = (state_25611[(11)]);
var inst_25563 = done.call(null,null);
var inst_25564 = cljs.core.async.untap_STAR_.call(null,m,inst_25559);
var state_25611__$1 = (function (){var statearr_25636 = state_25611;
(statearr_25636[(19)] = inst_25563);

return statearr_25636;
})();
var statearr_25637_25712 = state_25611__$1;
(statearr_25637_25712[(2)] = inst_25564);

(statearr_25637_25712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (32))){
var inst_25551 = (state_25611[(20)]);
var inst_25554 = (state_25611[(9)]);
var inst_25553 = (state_25611[(21)]);
var inst_25552 = (state_25611[(12)]);
var inst_25566 = (state_25611[(2)]);
var inst_25567 = (inst_25554 + (1));
var tmp25632 = inst_25551;
var tmp25633 = inst_25553;
var tmp25634 = inst_25552;
var inst_25551__$1 = tmp25632;
var inst_25552__$1 = tmp25634;
var inst_25553__$1 = tmp25633;
var inst_25554__$1 = inst_25567;
var state_25611__$1 = (function (){var statearr_25638 = state_25611;
(statearr_25638[(20)] = inst_25551__$1);

(statearr_25638[(9)] = inst_25554__$1);

(statearr_25638[(21)] = inst_25553__$1);

(statearr_25638[(22)] = inst_25566);

(statearr_25638[(12)] = inst_25552__$1);

return statearr_25638;
})();
var statearr_25639_25713 = state_25611__$1;
(statearr_25639_25713[(2)] = null);

(statearr_25639_25713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (40))){
var inst_25579 = (state_25611[(23)]);
var inst_25583 = done.call(null,null);
var inst_25584 = cljs.core.async.untap_STAR_.call(null,m,inst_25579);
var state_25611__$1 = (function (){var statearr_25640 = state_25611;
(statearr_25640[(24)] = inst_25583);

return statearr_25640;
})();
var statearr_25641_25714 = state_25611__$1;
(statearr_25641_25714[(2)] = inst_25584);

(statearr_25641_25714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (33))){
var inst_25570 = (state_25611[(25)]);
var inst_25572 = cljs.core.chunked_seq_QMARK_.call(null,inst_25570);
var state_25611__$1 = state_25611;
if(inst_25572){
var statearr_25642_25715 = state_25611__$1;
(statearr_25642_25715[(1)] = (36));

} else {
var statearr_25643_25716 = state_25611__$1;
(statearr_25643_25716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (13))){
var inst_25502 = (state_25611[(26)]);
var inst_25505 = cljs.core.async.close_BANG_.call(null,inst_25502);
var state_25611__$1 = state_25611;
var statearr_25644_25717 = state_25611__$1;
(statearr_25644_25717[(2)] = inst_25505);

(statearr_25644_25717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (22))){
var inst_25523 = (state_25611[(8)]);
var inst_25526 = cljs.core.async.close_BANG_.call(null,inst_25523);
var state_25611__$1 = state_25611;
var statearr_25645_25718 = state_25611__$1;
(statearr_25645_25718[(2)] = inst_25526);

(statearr_25645_25718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (36))){
var inst_25570 = (state_25611[(25)]);
var inst_25574 = cljs.core.chunk_first.call(null,inst_25570);
var inst_25575 = cljs.core.chunk_rest.call(null,inst_25570);
var inst_25576 = cljs.core.count.call(null,inst_25574);
var inst_25551 = inst_25575;
var inst_25552 = inst_25574;
var inst_25553 = inst_25576;
var inst_25554 = (0);
var state_25611__$1 = (function (){var statearr_25646 = state_25611;
(statearr_25646[(20)] = inst_25551);

(statearr_25646[(9)] = inst_25554);

(statearr_25646[(21)] = inst_25553);

(statearr_25646[(12)] = inst_25552);

return statearr_25646;
})();
var statearr_25647_25719 = state_25611__$1;
(statearr_25647_25719[(2)] = null);

(statearr_25647_25719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (41))){
var inst_25570 = (state_25611[(25)]);
var inst_25586 = (state_25611[(2)]);
var inst_25587 = cljs.core.next.call(null,inst_25570);
var inst_25551 = inst_25587;
var inst_25552 = null;
var inst_25553 = (0);
var inst_25554 = (0);
var state_25611__$1 = (function (){var statearr_25648 = state_25611;
(statearr_25648[(20)] = inst_25551);

(statearr_25648[(27)] = inst_25586);

(statearr_25648[(9)] = inst_25554);

(statearr_25648[(21)] = inst_25553);

(statearr_25648[(12)] = inst_25552);

return statearr_25648;
})();
var statearr_25649_25720 = state_25611__$1;
(statearr_25649_25720[(2)] = null);

(statearr_25649_25720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (43))){
var state_25611__$1 = state_25611;
var statearr_25650_25721 = state_25611__$1;
(statearr_25650_25721[(2)] = null);

(statearr_25650_25721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (29))){
var inst_25595 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25651_25722 = state_25611__$1;
(statearr_25651_25722[(2)] = inst_25595);

(statearr_25651_25722[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (44))){
var inst_25604 = (state_25611[(2)]);
var state_25611__$1 = (function (){var statearr_25652 = state_25611;
(statearr_25652[(28)] = inst_25604);

return statearr_25652;
})();
var statearr_25653_25723 = state_25611__$1;
(statearr_25653_25723[(2)] = null);

(statearr_25653_25723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (6))){
var inst_25543 = (state_25611[(29)]);
var inst_25542 = cljs.core.deref.call(null,cs);
var inst_25543__$1 = cljs.core.keys.call(null,inst_25542);
var inst_25544 = cljs.core.count.call(null,inst_25543__$1);
var inst_25545 = cljs.core.reset_BANG_.call(null,dctr,inst_25544);
var inst_25550 = cljs.core.seq.call(null,inst_25543__$1);
var inst_25551 = inst_25550;
var inst_25552 = null;
var inst_25553 = (0);
var inst_25554 = (0);
var state_25611__$1 = (function (){var statearr_25654 = state_25611;
(statearr_25654[(30)] = inst_25545);

(statearr_25654[(29)] = inst_25543__$1);

(statearr_25654[(20)] = inst_25551);

(statearr_25654[(9)] = inst_25554);

(statearr_25654[(21)] = inst_25553);

(statearr_25654[(12)] = inst_25552);

return statearr_25654;
})();
var statearr_25655_25724 = state_25611__$1;
(statearr_25655_25724[(2)] = null);

(statearr_25655_25724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (28))){
var inst_25551 = (state_25611[(20)]);
var inst_25570 = (state_25611[(25)]);
var inst_25570__$1 = cljs.core.seq.call(null,inst_25551);
var state_25611__$1 = (function (){var statearr_25656 = state_25611;
(statearr_25656[(25)] = inst_25570__$1);

return statearr_25656;
})();
if(inst_25570__$1){
var statearr_25657_25725 = state_25611__$1;
(statearr_25657_25725[(1)] = (33));

} else {
var statearr_25658_25726 = state_25611__$1;
(statearr_25658_25726[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (25))){
var inst_25554 = (state_25611[(9)]);
var inst_25553 = (state_25611[(21)]);
var inst_25556 = (inst_25554 < inst_25553);
var inst_25557 = inst_25556;
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25557)){
var statearr_25659_25727 = state_25611__$1;
(statearr_25659_25727[(1)] = (27));

} else {
var statearr_25660_25728 = state_25611__$1;
(statearr_25660_25728[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (34))){
var state_25611__$1 = state_25611;
var statearr_25661_25729 = state_25611__$1;
(statearr_25661_25729[(2)] = null);

(statearr_25661_25729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (17))){
var state_25611__$1 = state_25611;
var statearr_25662_25730 = state_25611__$1;
(statearr_25662_25730[(2)] = null);

(statearr_25662_25730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (3))){
var inst_25609 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25611__$1,inst_25609);
} else {
if((state_val_25612 === (12))){
var inst_25538 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25663_25731 = state_25611__$1;
(statearr_25663_25731[(2)] = inst_25538);

(statearr_25663_25731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (2))){
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(4),ch);
} else {
if((state_val_25612 === (23))){
var state_25611__$1 = state_25611;
var statearr_25664_25732 = state_25611__$1;
(statearr_25664_25732[(2)] = null);

(statearr_25664_25732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (35))){
var inst_25593 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25665_25733 = state_25611__$1;
(statearr_25665_25733[(2)] = inst_25593);

(statearr_25665_25733[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (19))){
var inst_25512 = (state_25611[(7)]);
var inst_25516 = cljs.core.chunk_first.call(null,inst_25512);
var inst_25517 = cljs.core.chunk_rest.call(null,inst_25512);
var inst_25518 = cljs.core.count.call(null,inst_25516);
var inst_25492 = inst_25517;
var inst_25493 = inst_25516;
var inst_25494 = inst_25518;
var inst_25495 = (0);
var state_25611__$1 = (function (){var statearr_25666 = state_25611;
(statearr_25666[(13)] = inst_25494);

(statearr_25666[(14)] = inst_25493);

(statearr_25666[(15)] = inst_25495);

(statearr_25666[(16)] = inst_25492);

return statearr_25666;
})();
var statearr_25667_25734 = state_25611__$1;
(statearr_25667_25734[(2)] = null);

(statearr_25667_25734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (11))){
var inst_25512 = (state_25611[(7)]);
var inst_25492 = (state_25611[(16)]);
var inst_25512__$1 = cljs.core.seq.call(null,inst_25492);
var state_25611__$1 = (function (){var statearr_25668 = state_25611;
(statearr_25668[(7)] = inst_25512__$1);

return statearr_25668;
})();
if(inst_25512__$1){
var statearr_25669_25735 = state_25611__$1;
(statearr_25669_25735[(1)] = (16));

} else {
var statearr_25670_25736 = state_25611__$1;
(statearr_25670_25736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (9))){
var inst_25540 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25671_25737 = state_25611__$1;
(statearr_25671_25737[(2)] = inst_25540);

(statearr_25671_25737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (5))){
var inst_25490 = cljs.core.deref.call(null,cs);
var inst_25491 = cljs.core.seq.call(null,inst_25490);
var inst_25492 = inst_25491;
var inst_25493 = null;
var inst_25494 = (0);
var inst_25495 = (0);
var state_25611__$1 = (function (){var statearr_25672 = state_25611;
(statearr_25672[(13)] = inst_25494);

(statearr_25672[(14)] = inst_25493);

(statearr_25672[(15)] = inst_25495);

(statearr_25672[(16)] = inst_25492);

return statearr_25672;
})();
var statearr_25673_25738 = state_25611__$1;
(statearr_25673_25738[(2)] = null);

(statearr_25673_25738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (14))){
var state_25611__$1 = state_25611;
var statearr_25674_25739 = state_25611__$1;
(statearr_25674_25739[(2)] = null);

(statearr_25674_25739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (45))){
var inst_25601 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25675_25740 = state_25611__$1;
(statearr_25675_25740[(2)] = inst_25601);

(statearr_25675_25740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (26))){
var inst_25543 = (state_25611[(29)]);
var inst_25597 = (state_25611[(2)]);
var inst_25598 = cljs.core.seq.call(null,inst_25543);
var state_25611__$1 = (function (){var statearr_25676 = state_25611;
(statearr_25676[(31)] = inst_25597);

return statearr_25676;
})();
if(inst_25598){
var statearr_25677_25741 = state_25611__$1;
(statearr_25677_25741[(1)] = (42));

} else {
var statearr_25678_25742 = state_25611__$1;
(statearr_25678_25742[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (16))){
var inst_25512 = (state_25611[(7)]);
var inst_25514 = cljs.core.chunked_seq_QMARK_.call(null,inst_25512);
var state_25611__$1 = state_25611;
if(inst_25514){
var statearr_25679_25743 = state_25611__$1;
(statearr_25679_25743[(1)] = (19));

} else {
var statearr_25680_25744 = state_25611__$1;
(statearr_25680_25744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (38))){
var inst_25590 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25681_25745 = state_25611__$1;
(statearr_25681_25745[(2)] = inst_25590);

(statearr_25681_25745[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (30))){
var state_25611__$1 = state_25611;
var statearr_25682_25746 = state_25611__$1;
(statearr_25682_25746[(2)] = null);

(statearr_25682_25746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (10))){
var inst_25493 = (state_25611[(14)]);
var inst_25495 = (state_25611[(15)]);
var inst_25501 = cljs.core._nth.call(null,inst_25493,inst_25495);
var inst_25502 = cljs.core.nth.call(null,inst_25501,(0),null);
var inst_25503 = cljs.core.nth.call(null,inst_25501,(1),null);
var state_25611__$1 = (function (){var statearr_25683 = state_25611;
(statearr_25683[(26)] = inst_25502);

return statearr_25683;
})();
if(cljs.core.truth_(inst_25503)){
var statearr_25684_25747 = state_25611__$1;
(statearr_25684_25747[(1)] = (13));

} else {
var statearr_25685_25748 = state_25611__$1;
(statearr_25685_25748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (18))){
var inst_25536 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25686_25749 = state_25611__$1;
(statearr_25686_25749[(2)] = inst_25536);

(statearr_25686_25749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (42))){
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(45),dchan);
} else {
if((state_val_25612 === (37))){
var inst_25579 = (state_25611[(23)]);
var inst_25483 = (state_25611[(10)]);
var inst_25570 = (state_25611[(25)]);
var inst_25579__$1 = cljs.core.first.call(null,inst_25570);
var inst_25580 = cljs.core.async.put_BANG_.call(null,inst_25579__$1,inst_25483,done);
var state_25611__$1 = (function (){var statearr_25687 = state_25611;
(statearr_25687[(23)] = inst_25579__$1);

return statearr_25687;
})();
if(cljs.core.truth_(inst_25580)){
var statearr_25688_25750 = state_25611__$1;
(statearr_25688_25750[(1)] = (39));

} else {
var statearr_25689_25751 = state_25611__$1;
(statearr_25689_25751[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (8))){
var inst_25494 = (state_25611[(13)]);
var inst_25495 = (state_25611[(15)]);
var inst_25497 = (inst_25495 < inst_25494);
var inst_25498 = inst_25497;
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25498)){
var statearr_25690_25752 = state_25611__$1;
(statearr_25690_25752[(1)] = (10));

} else {
var statearr_25691_25753 = state_25611__$1;
(statearr_25691_25753[(1)] = (11));

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
});})(c__24392__auto___25699,cs,m,dchan,dctr,done))
;
return ((function (switch__24280__auto__,c__24392__auto___25699,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24281__auto__ = null;
var cljs$core$async$mult_$_state_machine__24281__auto____0 = (function (){
var statearr_25695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25695[(0)] = cljs$core$async$mult_$_state_machine__24281__auto__);

(statearr_25695[(1)] = (1));

return statearr_25695;
});
var cljs$core$async$mult_$_state_machine__24281__auto____1 = (function (state_25611){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_25611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e25696){if((e25696 instanceof Object)){
var ex__24284__auto__ = e25696;
var statearr_25697_25754 = state_25611;
(statearr_25697_25754[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25755 = state_25611;
state_25611 = G__25755;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24281__auto__ = function(state_25611){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24281__auto____1.call(this,state_25611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24281__auto____0;
cljs$core$async$mult_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24281__auto____1;
return cljs$core$async$mult_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___25699,cs,m,dchan,dctr,done))
})();
var state__24394__auto__ = (function (){var statearr_25698 = f__24393__auto__.call(null);
(statearr_25698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___25699);

return statearr_25698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___25699,cs,m,dchan,dctr,done))
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
var args25756 = [];
var len__22721__auto___25759 = arguments.length;
var i__22722__auto___25760 = (0);
while(true){
if((i__22722__auto___25760 < len__22721__auto___25759)){
args25756.push((arguments[i__22722__auto___25760]));

var G__25761 = (i__22722__auto___25760 + (1));
i__22722__auto___25760 = G__25761;
continue;
} else {
}
break;
}

var G__25758 = args25756.length;
switch (G__25758) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25756.length)].join('')));

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
var len__22721__auto___25773 = arguments.length;
var i__22722__auto___25774 = (0);
while(true){
if((i__22722__auto___25774 < len__22721__auto___25773)){
args__22728__auto__.push((arguments[i__22722__auto___25774]));

var G__25775 = (i__22722__auto___25774 + (1));
i__22722__auto___25774 = G__25775;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((3) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22729__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25767){
var map__25768 = p__25767;
var map__25768__$1 = ((((!((map__25768 == null)))?((((map__25768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25768):map__25768);
var opts = map__25768__$1;
var statearr_25770_25776 = state;
(statearr_25770_25776[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25768,map__25768__$1,opts){
return (function (val){
var statearr_25771_25777 = state;
(statearr_25771_25777[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25768,map__25768__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25772_25778 = state;
(statearr_25772_25778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25763){
var G__25764 = cljs.core.first.call(null,seq25763);
var seq25763__$1 = cljs.core.next.call(null,seq25763);
var G__25765 = cljs.core.first.call(null,seq25763__$1);
var seq25763__$2 = cljs.core.next.call(null,seq25763__$1);
var G__25766 = cljs.core.first.call(null,seq25763__$2);
var seq25763__$3 = cljs.core.next.call(null,seq25763__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25764,G__25765,G__25766,seq25763__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25942 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25943){
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
this.meta25943 = meta25943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25944,meta25943__$1){
var self__ = this;
var _25944__$1 = this;
return (new cljs.core.async.t_cljs$core$async25942(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25943__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25944){
var self__ = this;
var _25944__$1 = this;
return self__.meta25943;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25942.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25943","meta25943",-1342407584,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25942";

cljs.core.async.t_cljs$core$async25942.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async25942");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25942 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25943){
return (new cljs.core.async.t_cljs$core$async25942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25943));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25942(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24392__auto___26105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26042){
var state_val_26043 = (state_26042[(1)]);
if((state_val_26043 === (7))){
var inst_25960 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26044_26106 = state_26042__$1;
(statearr_26044_26106[(2)] = inst_25960);

(statearr_26044_26106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (20))){
var inst_25972 = (state_26042[(7)]);
var state_26042__$1 = state_26042;
var statearr_26045_26107 = state_26042__$1;
(statearr_26045_26107[(2)] = inst_25972);

(statearr_26045_26107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (27))){
var state_26042__$1 = state_26042;
var statearr_26046_26108 = state_26042__$1;
(statearr_26046_26108[(2)] = null);

(statearr_26046_26108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (1))){
var inst_25948 = (state_26042[(8)]);
var inst_25948__$1 = calc_state.call(null);
var inst_25950 = (inst_25948__$1 == null);
var inst_25951 = cljs.core.not.call(null,inst_25950);
var state_26042__$1 = (function (){var statearr_26047 = state_26042;
(statearr_26047[(8)] = inst_25948__$1);

return statearr_26047;
})();
if(inst_25951){
var statearr_26048_26109 = state_26042__$1;
(statearr_26048_26109[(1)] = (2));

} else {
var statearr_26049_26110 = state_26042__$1;
(statearr_26049_26110[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (24))){
var inst_25995 = (state_26042[(9)]);
var inst_26002 = (state_26042[(10)]);
var inst_26016 = (state_26042[(11)]);
var inst_26016__$1 = inst_25995.call(null,inst_26002);
var state_26042__$1 = (function (){var statearr_26050 = state_26042;
(statearr_26050[(11)] = inst_26016__$1);

return statearr_26050;
})();
if(cljs.core.truth_(inst_26016__$1)){
var statearr_26051_26111 = state_26042__$1;
(statearr_26051_26111[(1)] = (29));

} else {
var statearr_26052_26112 = state_26042__$1;
(statearr_26052_26112[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (4))){
var inst_25963 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25963)){
var statearr_26053_26113 = state_26042__$1;
(statearr_26053_26113[(1)] = (8));

} else {
var statearr_26054_26114 = state_26042__$1;
(statearr_26054_26114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (15))){
var inst_25989 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25989)){
var statearr_26055_26115 = state_26042__$1;
(statearr_26055_26115[(1)] = (19));

} else {
var statearr_26056_26116 = state_26042__$1;
(statearr_26056_26116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (21))){
var inst_25994 = (state_26042[(12)]);
var inst_25994__$1 = (state_26042[(2)]);
var inst_25995 = cljs.core.get.call(null,inst_25994__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25996 = cljs.core.get.call(null,inst_25994__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25997 = cljs.core.get.call(null,inst_25994__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26042__$1 = (function (){var statearr_26057 = state_26042;
(statearr_26057[(9)] = inst_25995);

(statearr_26057[(12)] = inst_25994__$1);

(statearr_26057[(13)] = inst_25996);

return statearr_26057;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26042__$1,(22),inst_25997);
} else {
if((state_val_26043 === (31))){
var inst_26024 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_26024)){
var statearr_26058_26117 = state_26042__$1;
(statearr_26058_26117[(1)] = (32));

} else {
var statearr_26059_26118 = state_26042__$1;
(statearr_26059_26118[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (32))){
var inst_26001 = (state_26042[(14)]);
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26042__$1,(35),out,inst_26001);
} else {
if((state_val_26043 === (33))){
var inst_25994 = (state_26042[(12)]);
var inst_25972 = inst_25994;
var state_26042__$1 = (function (){var statearr_26060 = state_26042;
(statearr_26060[(7)] = inst_25972);

return statearr_26060;
})();
var statearr_26061_26119 = state_26042__$1;
(statearr_26061_26119[(2)] = null);

(statearr_26061_26119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (13))){
var inst_25972 = (state_26042[(7)]);
var inst_25979 = inst_25972.cljs$lang$protocol_mask$partition0$;
var inst_25980 = (inst_25979 & (64));
var inst_25981 = inst_25972.cljs$core$ISeq$;
var inst_25982 = (inst_25980) || (inst_25981);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25982)){
var statearr_26062_26120 = state_26042__$1;
(statearr_26062_26120[(1)] = (16));

} else {
var statearr_26063_26121 = state_26042__$1;
(statearr_26063_26121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (22))){
var inst_26001 = (state_26042[(14)]);
var inst_26002 = (state_26042[(10)]);
var inst_26000 = (state_26042[(2)]);
var inst_26001__$1 = cljs.core.nth.call(null,inst_26000,(0),null);
var inst_26002__$1 = cljs.core.nth.call(null,inst_26000,(1),null);
var inst_26003 = (inst_26001__$1 == null);
var inst_26004 = cljs.core._EQ_.call(null,inst_26002__$1,change);
var inst_26005 = (inst_26003) || (inst_26004);
var state_26042__$1 = (function (){var statearr_26064 = state_26042;
(statearr_26064[(14)] = inst_26001__$1);

(statearr_26064[(10)] = inst_26002__$1);

return statearr_26064;
})();
if(cljs.core.truth_(inst_26005)){
var statearr_26065_26122 = state_26042__$1;
(statearr_26065_26122[(1)] = (23));

} else {
var statearr_26066_26123 = state_26042__$1;
(statearr_26066_26123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (36))){
var inst_25994 = (state_26042[(12)]);
var inst_25972 = inst_25994;
var state_26042__$1 = (function (){var statearr_26067 = state_26042;
(statearr_26067[(7)] = inst_25972);

return statearr_26067;
})();
var statearr_26068_26124 = state_26042__$1;
(statearr_26068_26124[(2)] = null);

(statearr_26068_26124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (29))){
var inst_26016 = (state_26042[(11)]);
var state_26042__$1 = state_26042;
var statearr_26069_26125 = state_26042__$1;
(statearr_26069_26125[(2)] = inst_26016);

(statearr_26069_26125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (6))){
var state_26042__$1 = state_26042;
var statearr_26070_26126 = state_26042__$1;
(statearr_26070_26126[(2)] = false);

(statearr_26070_26126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (28))){
var inst_26012 = (state_26042[(2)]);
var inst_26013 = calc_state.call(null);
var inst_25972 = inst_26013;
var state_26042__$1 = (function (){var statearr_26071 = state_26042;
(statearr_26071[(7)] = inst_25972);

(statearr_26071[(15)] = inst_26012);

return statearr_26071;
})();
var statearr_26072_26127 = state_26042__$1;
(statearr_26072_26127[(2)] = null);

(statearr_26072_26127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (25))){
var inst_26038 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26073_26128 = state_26042__$1;
(statearr_26073_26128[(2)] = inst_26038);

(statearr_26073_26128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (34))){
var inst_26036 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26074_26129 = state_26042__$1;
(statearr_26074_26129[(2)] = inst_26036);

(statearr_26074_26129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (17))){
var state_26042__$1 = state_26042;
var statearr_26075_26130 = state_26042__$1;
(statearr_26075_26130[(2)] = false);

(statearr_26075_26130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (3))){
var state_26042__$1 = state_26042;
var statearr_26076_26131 = state_26042__$1;
(statearr_26076_26131[(2)] = false);

(statearr_26076_26131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (12))){
var inst_26040 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26042__$1,inst_26040);
} else {
if((state_val_26043 === (2))){
var inst_25948 = (state_26042[(8)]);
var inst_25953 = inst_25948.cljs$lang$protocol_mask$partition0$;
var inst_25954 = (inst_25953 & (64));
var inst_25955 = inst_25948.cljs$core$ISeq$;
var inst_25956 = (inst_25954) || (inst_25955);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25956)){
var statearr_26077_26132 = state_26042__$1;
(statearr_26077_26132[(1)] = (5));

} else {
var statearr_26078_26133 = state_26042__$1;
(statearr_26078_26133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (23))){
var inst_26001 = (state_26042[(14)]);
var inst_26007 = (inst_26001 == null);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_26007)){
var statearr_26079_26134 = state_26042__$1;
(statearr_26079_26134[(1)] = (26));

} else {
var statearr_26080_26135 = state_26042__$1;
(statearr_26080_26135[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (35))){
var inst_26027 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_26027)){
var statearr_26081_26136 = state_26042__$1;
(statearr_26081_26136[(1)] = (36));

} else {
var statearr_26082_26137 = state_26042__$1;
(statearr_26082_26137[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (19))){
var inst_25972 = (state_26042[(7)]);
var inst_25991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25972);
var state_26042__$1 = state_26042;
var statearr_26083_26138 = state_26042__$1;
(statearr_26083_26138[(2)] = inst_25991);

(statearr_26083_26138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (11))){
var inst_25972 = (state_26042[(7)]);
var inst_25976 = (inst_25972 == null);
var inst_25977 = cljs.core.not.call(null,inst_25976);
var state_26042__$1 = state_26042;
if(inst_25977){
var statearr_26084_26139 = state_26042__$1;
(statearr_26084_26139[(1)] = (13));

} else {
var statearr_26085_26140 = state_26042__$1;
(statearr_26085_26140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (9))){
var inst_25948 = (state_26042[(8)]);
var state_26042__$1 = state_26042;
var statearr_26086_26141 = state_26042__$1;
(statearr_26086_26141[(2)] = inst_25948);

(statearr_26086_26141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (5))){
var state_26042__$1 = state_26042;
var statearr_26087_26142 = state_26042__$1;
(statearr_26087_26142[(2)] = true);

(statearr_26087_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (14))){
var state_26042__$1 = state_26042;
var statearr_26088_26143 = state_26042__$1;
(statearr_26088_26143[(2)] = false);

(statearr_26088_26143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (26))){
var inst_26002 = (state_26042[(10)]);
var inst_26009 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26002);
var state_26042__$1 = state_26042;
var statearr_26089_26144 = state_26042__$1;
(statearr_26089_26144[(2)] = inst_26009);

(statearr_26089_26144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (16))){
var state_26042__$1 = state_26042;
var statearr_26090_26145 = state_26042__$1;
(statearr_26090_26145[(2)] = true);

(statearr_26090_26145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (38))){
var inst_26032 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26091_26146 = state_26042__$1;
(statearr_26091_26146[(2)] = inst_26032);

(statearr_26091_26146[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (30))){
var inst_25995 = (state_26042[(9)]);
var inst_26002 = (state_26042[(10)]);
var inst_25996 = (state_26042[(13)]);
var inst_26019 = cljs.core.empty_QMARK_.call(null,inst_25995);
var inst_26020 = inst_25996.call(null,inst_26002);
var inst_26021 = cljs.core.not.call(null,inst_26020);
var inst_26022 = (inst_26019) && (inst_26021);
var state_26042__$1 = state_26042;
var statearr_26092_26147 = state_26042__$1;
(statearr_26092_26147[(2)] = inst_26022);

(statearr_26092_26147[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (10))){
var inst_25948 = (state_26042[(8)]);
var inst_25968 = (state_26042[(2)]);
var inst_25969 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25970 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25971 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25972 = inst_25948;
var state_26042__$1 = (function (){var statearr_26093 = state_26042;
(statearr_26093[(16)] = inst_25969);

(statearr_26093[(17)] = inst_25970);

(statearr_26093[(7)] = inst_25972);

(statearr_26093[(18)] = inst_25971);

return statearr_26093;
})();
var statearr_26094_26148 = state_26042__$1;
(statearr_26094_26148[(2)] = null);

(statearr_26094_26148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (18))){
var inst_25986 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26095_26149 = state_26042__$1;
(statearr_26095_26149[(2)] = inst_25986);

(statearr_26095_26149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (37))){
var state_26042__$1 = state_26042;
var statearr_26096_26150 = state_26042__$1;
(statearr_26096_26150[(2)] = null);

(statearr_26096_26150[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (8))){
var inst_25948 = (state_26042[(8)]);
var inst_25965 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25948);
var state_26042__$1 = state_26042;
var statearr_26097_26151 = state_26042__$1;
(statearr_26097_26151[(2)] = inst_25965);

(statearr_26097_26151[(1)] = (10));


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
});})(c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24280__auto__,c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24281__auto__ = null;
var cljs$core$async$mix_$_state_machine__24281__auto____0 = (function (){
var statearr_26101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26101[(0)] = cljs$core$async$mix_$_state_machine__24281__auto__);

(statearr_26101[(1)] = (1));

return statearr_26101;
});
var cljs$core$async$mix_$_state_machine__24281__auto____1 = (function (state_26042){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26102){if((e26102 instanceof Object)){
var ex__24284__auto__ = e26102;
var statearr_26103_26152 = state_26042;
(statearr_26103_26152[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26153 = state_26042;
state_26042 = G__26153;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24281__auto__ = function(state_26042){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24281__auto____1.call(this,state_26042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24281__auto____0;
cljs$core$async$mix_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24281__auto____1;
return cljs$core$async$mix_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24394__auto__ = (function (){var statearr_26104 = f__24393__auto__.call(null);
(statearr_26104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26105);

return statearr_26104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26154 = [];
var len__22721__auto___26157 = arguments.length;
var i__22722__auto___26158 = (0);
while(true){
if((i__22722__auto___26158 < len__22721__auto___26157)){
args26154.push((arguments[i__22722__auto___26158]));

var G__26159 = (i__22722__auto___26158 + (1));
i__22722__auto___26158 = G__26159;
continue;
} else {
}
break;
}

var G__26156 = args26154.length;
switch (G__26156) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26154.length)].join('')));

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
var args26162 = [];
var len__22721__auto___26287 = arguments.length;
var i__22722__auto___26288 = (0);
while(true){
if((i__22722__auto___26288 < len__22721__auto___26287)){
args26162.push((arguments[i__22722__auto___26288]));

var G__26289 = (i__22722__auto___26288 + (1));
i__22722__auto___26288 = G__26289;
continue;
} else {
}
break;
}

var G__26164 = args26162.length;
switch (G__26164) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26162.length)].join('')));

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
return (function (p1__26161_SHARP_){
if(cljs.core.truth_(p1__26161_SHARP_.call(null,topic))){
return p1__26161_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26161_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21651__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26165 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26166){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26166 = meta26166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26167,meta26166__$1){
var self__ = this;
var _26167__$1 = this;
return (new cljs.core.async.t_cljs$core$async26165(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26166__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26167){
var self__ = this;
var _26167__$1 = this;
return self__.meta26166;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26166","meta26166",-842177715,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26165";

cljs.core.async.t_cljs$core$async26165.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26165");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26165 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26166){
return (new cljs.core.async.t_cljs$core$async26165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26166));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26165(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24392__auto___26291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26291,mults,ensure_mult,p){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26291,mults,ensure_mult,p){
return (function (state_26239){
var state_val_26240 = (state_26239[(1)]);
if((state_val_26240 === (7))){
var inst_26235 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26241_26292 = state_26239__$1;
(statearr_26241_26292[(2)] = inst_26235);

(statearr_26241_26292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (20))){
var state_26239__$1 = state_26239;
var statearr_26242_26293 = state_26239__$1;
(statearr_26242_26293[(2)] = null);

(statearr_26242_26293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (1))){
var state_26239__$1 = state_26239;
var statearr_26243_26294 = state_26239__$1;
(statearr_26243_26294[(2)] = null);

(statearr_26243_26294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (24))){
var inst_26218 = (state_26239[(7)]);
var inst_26227 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26218);
var state_26239__$1 = state_26239;
var statearr_26244_26295 = state_26239__$1;
(statearr_26244_26295[(2)] = inst_26227);

(statearr_26244_26295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (4))){
var inst_26170 = (state_26239[(8)]);
var inst_26170__$1 = (state_26239[(2)]);
var inst_26171 = (inst_26170__$1 == null);
var state_26239__$1 = (function (){var statearr_26245 = state_26239;
(statearr_26245[(8)] = inst_26170__$1);

return statearr_26245;
})();
if(cljs.core.truth_(inst_26171)){
var statearr_26246_26296 = state_26239__$1;
(statearr_26246_26296[(1)] = (5));

} else {
var statearr_26247_26297 = state_26239__$1;
(statearr_26247_26297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (15))){
var inst_26212 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26248_26298 = state_26239__$1;
(statearr_26248_26298[(2)] = inst_26212);

(statearr_26248_26298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (21))){
var inst_26232 = (state_26239[(2)]);
var state_26239__$1 = (function (){var statearr_26249 = state_26239;
(statearr_26249[(9)] = inst_26232);

return statearr_26249;
})();
var statearr_26250_26299 = state_26239__$1;
(statearr_26250_26299[(2)] = null);

(statearr_26250_26299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (13))){
var inst_26194 = (state_26239[(10)]);
var inst_26196 = cljs.core.chunked_seq_QMARK_.call(null,inst_26194);
var state_26239__$1 = state_26239;
if(inst_26196){
var statearr_26251_26300 = state_26239__$1;
(statearr_26251_26300[(1)] = (16));

} else {
var statearr_26252_26301 = state_26239__$1;
(statearr_26252_26301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (22))){
var inst_26224 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
if(cljs.core.truth_(inst_26224)){
var statearr_26253_26302 = state_26239__$1;
(statearr_26253_26302[(1)] = (23));

} else {
var statearr_26254_26303 = state_26239__$1;
(statearr_26254_26303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (6))){
var inst_26218 = (state_26239[(7)]);
var inst_26170 = (state_26239[(8)]);
var inst_26220 = (state_26239[(11)]);
var inst_26218__$1 = topic_fn.call(null,inst_26170);
var inst_26219 = cljs.core.deref.call(null,mults);
var inst_26220__$1 = cljs.core.get.call(null,inst_26219,inst_26218__$1);
var state_26239__$1 = (function (){var statearr_26255 = state_26239;
(statearr_26255[(7)] = inst_26218__$1);

(statearr_26255[(11)] = inst_26220__$1);

return statearr_26255;
})();
if(cljs.core.truth_(inst_26220__$1)){
var statearr_26256_26304 = state_26239__$1;
(statearr_26256_26304[(1)] = (19));

} else {
var statearr_26257_26305 = state_26239__$1;
(statearr_26257_26305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (25))){
var inst_26229 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26258_26306 = state_26239__$1;
(statearr_26258_26306[(2)] = inst_26229);

(statearr_26258_26306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (17))){
var inst_26194 = (state_26239[(10)]);
var inst_26203 = cljs.core.first.call(null,inst_26194);
var inst_26204 = cljs.core.async.muxch_STAR_.call(null,inst_26203);
var inst_26205 = cljs.core.async.close_BANG_.call(null,inst_26204);
var inst_26206 = cljs.core.next.call(null,inst_26194);
var inst_26180 = inst_26206;
var inst_26181 = null;
var inst_26182 = (0);
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26259 = state_26239;
(statearr_26259[(12)] = inst_26180);

(statearr_26259[(13)] = inst_26183);

(statearr_26259[(14)] = inst_26205);

(statearr_26259[(15)] = inst_26182);

(statearr_26259[(16)] = inst_26181);

return statearr_26259;
})();
var statearr_26260_26307 = state_26239__$1;
(statearr_26260_26307[(2)] = null);

(statearr_26260_26307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (3))){
var inst_26237 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else {
if((state_val_26240 === (12))){
var inst_26214 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26261_26308 = state_26239__$1;
(statearr_26261_26308[(2)] = inst_26214);

(statearr_26261_26308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (2))){
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(4),ch);
} else {
if((state_val_26240 === (23))){
var state_26239__$1 = state_26239;
var statearr_26262_26309 = state_26239__$1;
(statearr_26262_26309[(2)] = null);

(statearr_26262_26309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (19))){
var inst_26170 = (state_26239[(8)]);
var inst_26220 = (state_26239[(11)]);
var inst_26222 = cljs.core.async.muxch_STAR_.call(null,inst_26220);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26239__$1,(22),inst_26222,inst_26170);
} else {
if((state_val_26240 === (11))){
var inst_26180 = (state_26239[(12)]);
var inst_26194 = (state_26239[(10)]);
var inst_26194__$1 = cljs.core.seq.call(null,inst_26180);
var state_26239__$1 = (function (){var statearr_26263 = state_26239;
(statearr_26263[(10)] = inst_26194__$1);

return statearr_26263;
})();
if(inst_26194__$1){
var statearr_26264_26310 = state_26239__$1;
(statearr_26264_26310[(1)] = (13));

} else {
var statearr_26265_26311 = state_26239__$1;
(statearr_26265_26311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (9))){
var inst_26216 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26266_26312 = state_26239__$1;
(statearr_26266_26312[(2)] = inst_26216);

(statearr_26266_26312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (5))){
var inst_26177 = cljs.core.deref.call(null,mults);
var inst_26178 = cljs.core.vals.call(null,inst_26177);
var inst_26179 = cljs.core.seq.call(null,inst_26178);
var inst_26180 = inst_26179;
var inst_26181 = null;
var inst_26182 = (0);
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26267 = state_26239;
(statearr_26267[(12)] = inst_26180);

(statearr_26267[(13)] = inst_26183);

(statearr_26267[(15)] = inst_26182);

(statearr_26267[(16)] = inst_26181);

return statearr_26267;
})();
var statearr_26268_26313 = state_26239__$1;
(statearr_26268_26313[(2)] = null);

(statearr_26268_26313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (14))){
var state_26239__$1 = state_26239;
var statearr_26272_26314 = state_26239__$1;
(statearr_26272_26314[(2)] = null);

(statearr_26272_26314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (16))){
var inst_26194 = (state_26239[(10)]);
var inst_26198 = cljs.core.chunk_first.call(null,inst_26194);
var inst_26199 = cljs.core.chunk_rest.call(null,inst_26194);
var inst_26200 = cljs.core.count.call(null,inst_26198);
var inst_26180 = inst_26199;
var inst_26181 = inst_26198;
var inst_26182 = inst_26200;
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26273 = state_26239;
(statearr_26273[(12)] = inst_26180);

(statearr_26273[(13)] = inst_26183);

(statearr_26273[(15)] = inst_26182);

(statearr_26273[(16)] = inst_26181);

return statearr_26273;
})();
var statearr_26274_26315 = state_26239__$1;
(statearr_26274_26315[(2)] = null);

(statearr_26274_26315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (10))){
var inst_26180 = (state_26239[(12)]);
var inst_26183 = (state_26239[(13)]);
var inst_26182 = (state_26239[(15)]);
var inst_26181 = (state_26239[(16)]);
var inst_26188 = cljs.core._nth.call(null,inst_26181,inst_26183);
var inst_26189 = cljs.core.async.muxch_STAR_.call(null,inst_26188);
var inst_26190 = cljs.core.async.close_BANG_.call(null,inst_26189);
var inst_26191 = (inst_26183 + (1));
var tmp26269 = inst_26180;
var tmp26270 = inst_26182;
var tmp26271 = inst_26181;
var inst_26180__$1 = tmp26269;
var inst_26181__$1 = tmp26271;
var inst_26182__$1 = tmp26270;
var inst_26183__$1 = inst_26191;
var state_26239__$1 = (function (){var statearr_26275 = state_26239;
(statearr_26275[(12)] = inst_26180__$1);

(statearr_26275[(17)] = inst_26190);

(statearr_26275[(13)] = inst_26183__$1);

(statearr_26275[(15)] = inst_26182__$1);

(statearr_26275[(16)] = inst_26181__$1);

return statearr_26275;
})();
var statearr_26276_26316 = state_26239__$1;
(statearr_26276_26316[(2)] = null);

(statearr_26276_26316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (18))){
var inst_26209 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26277_26317 = state_26239__$1;
(statearr_26277_26317[(2)] = inst_26209);

(statearr_26277_26317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (8))){
var inst_26183 = (state_26239[(13)]);
var inst_26182 = (state_26239[(15)]);
var inst_26185 = (inst_26183 < inst_26182);
var inst_26186 = inst_26185;
var state_26239__$1 = state_26239;
if(cljs.core.truth_(inst_26186)){
var statearr_26278_26318 = state_26239__$1;
(statearr_26278_26318[(1)] = (10));

} else {
var statearr_26279_26319 = state_26239__$1;
(statearr_26279_26319[(1)] = (11));

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
});})(c__24392__auto___26291,mults,ensure_mult,p))
;
return ((function (switch__24280__auto__,c__24392__auto___26291,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26283[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26283[(1)] = (1));

return statearr_26283;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26239){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26284){if((e26284 instanceof Object)){
var ex__24284__auto__ = e26284;
var statearr_26285_26320 = state_26239;
(statearr_26285_26320[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26321 = state_26239;
state_26239 = G__26321;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26291,mults,ensure_mult,p))
})();
var state__24394__auto__ = (function (){var statearr_26286 = f__24393__auto__.call(null);
(statearr_26286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26291);

return statearr_26286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26291,mults,ensure_mult,p))
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
var args26322 = [];
var len__22721__auto___26325 = arguments.length;
var i__22722__auto___26326 = (0);
while(true){
if((i__22722__auto___26326 < len__22721__auto___26325)){
args26322.push((arguments[i__22722__auto___26326]));

var G__26327 = (i__22722__auto___26326 + (1));
i__22722__auto___26326 = G__26327;
continue;
} else {
}
break;
}

var G__26324 = args26322.length;
switch (G__26324) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26322.length)].join('')));

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
var args26329 = [];
var len__22721__auto___26332 = arguments.length;
var i__22722__auto___26333 = (0);
while(true){
if((i__22722__auto___26333 < len__22721__auto___26332)){
args26329.push((arguments[i__22722__auto___26333]));

var G__26334 = (i__22722__auto___26333 + (1));
i__22722__auto___26333 = G__26334;
continue;
} else {
}
break;
}

var G__26331 = args26329.length;
switch (G__26331) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26329.length)].join('')));

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
var args26336 = [];
var len__22721__auto___26407 = arguments.length;
var i__22722__auto___26408 = (0);
while(true){
if((i__22722__auto___26408 < len__22721__auto___26407)){
args26336.push((arguments[i__22722__auto___26408]));

var G__26409 = (i__22722__auto___26408 + (1));
i__22722__auto___26408 = G__26409;
continue;
} else {
}
break;
}

var G__26338 = args26336.length;
switch (G__26338) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26336.length)].join('')));

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
var c__24392__auto___26411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26377){
var state_val_26378 = (state_26377[(1)]);
if((state_val_26378 === (7))){
var state_26377__$1 = state_26377;
var statearr_26379_26412 = state_26377__$1;
(statearr_26379_26412[(2)] = null);

(statearr_26379_26412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (1))){
var state_26377__$1 = state_26377;
var statearr_26380_26413 = state_26377__$1;
(statearr_26380_26413[(2)] = null);

(statearr_26380_26413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (4))){
var inst_26341 = (state_26377[(7)]);
var inst_26343 = (inst_26341 < cnt);
var state_26377__$1 = state_26377;
if(cljs.core.truth_(inst_26343)){
var statearr_26381_26414 = state_26377__$1;
(statearr_26381_26414[(1)] = (6));

} else {
var statearr_26382_26415 = state_26377__$1;
(statearr_26382_26415[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (15))){
var inst_26373 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26383_26416 = state_26377__$1;
(statearr_26383_26416[(2)] = inst_26373);

(statearr_26383_26416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (13))){
var inst_26366 = cljs.core.async.close_BANG_.call(null,out);
var state_26377__$1 = state_26377;
var statearr_26384_26417 = state_26377__$1;
(statearr_26384_26417[(2)] = inst_26366);

(statearr_26384_26417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (6))){
var state_26377__$1 = state_26377;
var statearr_26385_26418 = state_26377__$1;
(statearr_26385_26418[(2)] = null);

(statearr_26385_26418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (3))){
var inst_26375 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26377__$1,inst_26375);
} else {
if((state_val_26378 === (12))){
var inst_26363 = (state_26377[(8)]);
var inst_26363__$1 = (state_26377[(2)]);
var inst_26364 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26363__$1);
var state_26377__$1 = (function (){var statearr_26386 = state_26377;
(statearr_26386[(8)] = inst_26363__$1);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26364)){
var statearr_26387_26419 = state_26377__$1;
(statearr_26387_26419[(1)] = (13));

} else {
var statearr_26388_26420 = state_26377__$1;
(statearr_26388_26420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (2))){
var inst_26340 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26341 = (0);
var state_26377__$1 = (function (){var statearr_26389 = state_26377;
(statearr_26389[(7)] = inst_26341);

(statearr_26389[(9)] = inst_26340);

return statearr_26389;
})();
var statearr_26390_26421 = state_26377__$1;
(statearr_26390_26421[(2)] = null);

(statearr_26390_26421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (11))){
var inst_26341 = (state_26377[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26377,(10),Object,null,(9));
var inst_26350 = chs__$1.call(null,inst_26341);
var inst_26351 = done.call(null,inst_26341);
var inst_26352 = cljs.core.async.take_BANG_.call(null,inst_26350,inst_26351);
var state_26377__$1 = state_26377;
var statearr_26391_26422 = state_26377__$1;
(statearr_26391_26422[(2)] = inst_26352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (9))){
var inst_26341 = (state_26377[(7)]);
var inst_26354 = (state_26377[(2)]);
var inst_26355 = (inst_26341 + (1));
var inst_26341__$1 = inst_26355;
var state_26377__$1 = (function (){var statearr_26392 = state_26377;
(statearr_26392[(10)] = inst_26354);

(statearr_26392[(7)] = inst_26341__$1);

return statearr_26392;
})();
var statearr_26393_26423 = state_26377__$1;
(statearr_26393_26423[(2)] = null);

(statearr_26393_26423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (5))){
var inst_26361 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26394 = state_26377;
(statearr_26394[(11)] = inst_26361);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(12),dchan);
} else {
if((state_val_26378 === (14))){
var inst_26363 = (state_26377[(8)]);
var inst_26368 = cljs.core.apply.call(null,f,inst_26363);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(16),out,inst_26368);
} else {
if((state_val_26378 === (16))){
var inst_26370 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26395 = state_26377;
(statearr_26395[(12)] = inst_26370);

return statearr_26395;
})();
var statearr_26396_26424 = state_26377__$1;
(statearr_26396_26424[(2)] = null);

(statearr_26396_26424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (10))){
var inst_26345 = (state_26377[(2)]);
var inst_26346 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26377__$1 = (function (){var statearr_26397 = state_26377;
(statearr_26397[(13)] = inst_26345);

return statearr_26397;
})();
var statearr_26398_26425 = state_26377__$1;
(statearr_26398_26425[(2)] = inst_26346);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (8))){
var inst_26359 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26399_26426 = state_26377__$1;
(statearr_26399_26426[(2)] = inst_26359);

(statearr_26399_26426[(1)] = (5));


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
});})(c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24280__auto__,c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26403[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26403[(1)] = (1));

return statearr_26403;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26377){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26404){if((e26404 instanceof Object)){
var ex__24284__auto__ = e26404;
var statearr_26405_26427 = state_26377;
(statearr_26405_26427[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26428 = state_26377;
state_26377 = G__26428;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24394__auto__ = (function (){var statearr_26406 = f__24393__auto__.call(null);
(statearr_26406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26411);

return statearr_26406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26411,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26430 = [];
var len__22721__auto___26486 = arguments.length;
var i__22722__auto___26487 = (0);
while(true){
if((i__22722__auto___26487 < len__22721__auto___26486)){
args26430.push((arguments[i__22722__auto___26487]));

var G__26488 = (i__22722__auto___26487 + (1));
i__22722__auto___26487 = G__26488;
continue;
} else {
}
break;
}

var G__26432 = args26430.length;
switch (G__26432) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26430.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___26490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26490,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26490,out){
return (function (state_26462){
var state_val_26463 = (state_26462[(1)]);
if((state_val_26463 === (7))){
var inst_26441 = (state_26462[(7)]);
var inst_26442 = (state_26462[(8)]);
var inst_26441__$1 = (state_26462[(2)]);
var inst_26442__$1 = cljs.core.nth.call(null,inst_26441__$1,(0),null);
var inst_26443 = cljs.core.nth.call(null,inst_26441__$1,(1),null);
var inst_26444 = (inst_26442__$1 == null);
var state_26462__$1 = (function (){var statearr_26464 = state_26462;
(statearr_26464[(7)] = inst_26441__$1);

(statearr_26464[(8)] = inst_26442__$1);

(statearr_26464[(9)] = inst_26443);

return statearr_26464;
})();
if(cljs.core.truth_(inst_26444)){
var statearr_26465_26491 = state_26462__$1;
(statearr_26465_26491[(1)] = (8));

} else {
var statearr_26466_26492 = state_26462__$1;
(statearr_26466_26492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (1))){
var inst_26433 = cljs.core.vec.call(null,chs);
var inst_26434 = inst_26433;
var state_26462__$1 = (function (){var statearr_26467 = state_26462;
(statearr_26467[(10)] = inst_26434);

return statearr_26467;
})();
var statearr_26468_26493 = state_26462__$1;
(statearr_26468_26493[(2)] = null);

(statearr_26468_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (4))){
var inst_26434 = (state_26462[(10)]);
var state_26462__$1 = state_26462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26462__$1,(7),inst_26434);
} else {
if((state_val_26463 === (6))){
var inst_26458 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
var statearr_26469_26494 = state_26462__$1;
(statearr_26469_26494[(2)] = inst_26458);

(statearr_26469_26494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (3))){
var inst_26460 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26462__$1,inst_26460);
} else {
if((state_val_26463 === (2))){
var inst_26434 = (state_26462[(10)]);
var inst_26436 = cljs.core.count.call(null,inst_26434);
var inst_26437 = (inst_26436 > (0));
var state_26462__$1 = state_26462;
if(cljs.core.truth_(inst_26437)){
var statearr_26471_26495 = state_26462__$1;
(statearr_26471_26495[(1)] = (4));

} else {
var statearr_26472_26496 = state_26462__$1;
(statearr_26472_26496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (11))){
var inst_26434 = (state_26462[(10)]);
var inst_26451 = (state_26462[(2)]);
var tmp26470 = inst_26434;
var inst_26434__$1 = tmp26470;
var state_26462__$1 = (function (){var statearr_26473 = state_26462;
(statearr_26473[(10)] = inst_26434__$1);

(statearr_26473[(11)] = inst_26451);

return statearr_26473;
})();
var statearr_26474_26497 = state_26462__$1;
(statearr_26474_26497[(2)] = null);

(statearr_26474_26497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (9))){
var inst_26442 = (state_26462[(8)]);
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26462__$1,(11),out,inst_26442);
} else {
if((state_val_26463 === (5))){
var inst_26456 = cljs.core.async.close_BANG_.call(null,out);
var state_26462__$1 = state_26462;
var statearr_26475_26498 = state_26462__$1;
(statearr_26475_26498[(2)] = inst_26456);

(statearr_26475_26498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (10))){
var inst_26454 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
var statearr_26476_26499 = state_26462__$1;
(statearr_26476_26499[(2)] = inst_26454);

(statearr_26476_26499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26463 === (8))){
var inst_26441 = (state_26462[(7)]);
var inst_26442 = (state_26462[(8)]);
var inst_26443 = (state_26462[(9)]);
var inst_26434 = (state_26462[(10)]);
var inst_26446 = (function (){var cs = inst_26434;
var vec__26439 = inst_26441;
var v = inst_26442;
var c = inst_26443;
return ((function (cs,vec__26439,v,c,inst_26441,inst_26442,inst_26443,inst_26434,state_val_26463,c__24392__auto___26490,out){
return (function (p1__26429_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26429_SHARP_);
});
;})(cs,vec__26439,v,c,inst_26441,inst_26442,inst_26443,inst_26434,state_val_26463,c__24392__auto___26490,out))
})();
var inst_26447 = cljs.core.filterv.call(null,inst_26446,inst_26434);
var inst_26434__$1 = inst_26447;
var state_26462__$1 = (function (){var statearr_26477 = state_26462;
(statearr_26477[(10)] = inst_26434__$1);

return statearr_26477;
})();
var statearr_26478_26500 = state_26462__$1;
(statearr_26478_26500[(2)] = null);

(statearr_26478_26500[(1)] = (2));


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
});})(c__24392__auto___26490,out))
;
return ((function (switch__24280__auto__,c__24392__auto___26490,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26482[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26482[(1)] = (1));

return statearr_26482;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26462){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26483){if((e26483 instanceof Object)){
var ex__24284__auto__ = e26483;
var statearr_26484_26501 = state_26462;
(statearr_26484_26501[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26502 = state_26462;
state_26462 = G__26502;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26490,out))
})();
var state__24394__auto__ = (function (){var statearr_26485 = f__24393__auto__.call(null);
(statearr_26485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26490);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26490,out))
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
var args26503 = [];
var len__22721__auto___26552 = arguments.length;
var i__22722__auto___26553 = (0);
while(true){
if((i__22722__auto___26553 < len__22721__auto___26552)){
args26503.push((arguments[i__22722__auto___26553]));

var G__26554 = (i__22722__auto___26553 + (1));
i__22722__auto___26553 = G__26554;
continue;
} else {
}
break;
}

var G__26505 = args26503.length;
switch (G__26505) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26503.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___26556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26556,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26556,out){
return (function (state_26529){
var state_val_26530 = (state_26529[(1)]);
if((state_val_26530 === (7))){
var inst_26511 = (state_26529[(7)]);
var inst_26511__$1 = (state_26529[(2)]);
var inst_26512 = (inst_26511__$1 == null);
var inst_26513 = cljs.core.not.call(null,inst_26512);
var state_26529__$1 = (function (){var statearr_26531 = state_26529;
(statearr_26531[(7)] = inst_26511__$1);

return statearr_26531;
})();
if(inst_26513){
var statearr_26532_26557 = state_26529__$1;
(statearr_26532_26557[(1)] = (8));

} else {
var statearr_26533_26558 = state_26529__$1;
(statearr_26533_26558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (1))){
var inst_26506 = (0);
var state_26529__$1 = (function (){var statearr_26534 = state_26529;
(statearr_26534[(8)] = inst_26506);

return statearr_26534;
})();
var statearr_26535_26559 = state_26529__$1;
(statearr_26535_26559[(2)] = null);

(statearr_26535_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (4))){
var state_26529__$1 = state_26529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26529__$1,(7),ch);
} else {
if((state_val_26530 === (6))){
var inst_26524 = (state_26529[(2)]);
var state_26529__$1 = state_26529;
var statearr_26536_26560 = state_26529__$1;
(statearr_26536_26560[(2)] = inst_26524);

(statearr_26536_26560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (3))){
var inst_26526 = (state_26529[(2)]);
var inst_26527 = cljs.core.async.close_BANG_.call(null,out);
var state_26529__$1 = (function (){var statearr_26537 = state_26529;
(statearr_26537[(9)] = inst_26526);

return statearr_26537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26529__$1,inst_26527);
} else {
if((state_val_26530 === (2))){
var inst_26506 = (state_26529[(8)]);
var inst_26508 = (inst_26506 < n);
var state_26529__$1 = state_26529;
if(cljs.core.truth_(inst_26508)){
var statearr_26538_26561 = state_26529__$1;
(statearr_26538_26561[(1)] = (4));

} else {
var statearr_26539_26562 = state_26529__$1;
(statearr_26539_26562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (11))){
var inst_26506 = (state_26529[(8)]);
var inst_26516 = (state_26529[(2)]);
var inst_26517 = (inst_26506 + (1));
var inst_26506__$1 = inst_26517;
var state_26529__$1 = (function (){var statearr_26540 = state_26529;
(statearr_26540[(8)] = inst_26506__$1);

(statearr_26540[(10)] = inst_26516);

return statearr_26540;
})();
var statearr_26541_26563 = state_26529__$1;
(statearr_26541_26563[(2)] = null);

(statearr_26541_26563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (9))){
var state_26529__$1 = state_26529;
var statearr_26542_26564 = state_26529__$1;
(statearr_26542_26564[(2)] = null);

(statearr_26542_26564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (5))){
var state_26529__$1 = state_26529;
var statearr_26543_26565 = state_26529__$1;
(statearr_26543_26565[(2)] = null);

(statearr_26543_26565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (10))){
var inst_26521 = (state_26529[(2)]);
var state_26529__$1 = state_26529;
var statearr_26544_26566 = state_26529__$1;
(statearr_26544_26566[(2)] = inst_26521);

(statearr_26544_26566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (8))){
var inst_26511 = (state_26529[(7)]);
var state_26529__$1 = state_26529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26529__$1,(11),out,inst_26511);
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
});})(c__24392__auto___26556,out))
;
return ((function (switch__24280__auto__,c__24392__auto___26556,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26548[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26548[(1)] = (1));

return statearr_26548;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26529){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26549){if((e26549 instanceof Object)){
var ex__24284__auto__ = e26549;
var statearr_26550_26567 = state_26529;
(statearr_26550_26567[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26568 = state_26529;
state_26529 = G__26568;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26556,out))
})();
var state__24394__auto__ = (function (){var statearr_26551 = f__24393__auto__.call(null);
(statearr_26551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26556);

return statearr_26551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26556,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26576 = (function (map_LT_,f,ch,meta26577){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26577 = meta26577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26578,meta26577__$1){
var self__ = this;
var _26578__$1 = this;
return (new cljs.core.async.t_cljs$core$async26576(self__.map_LT_,self__.f,self__.ch,meta26577__$1));
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26578){
var self__ = this;
var _26578__$1 = this;
return self__.meta26577;
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26579 = (function (map_LT_,f,ch,meta26577,_,fn1,meta26580){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26577 = meta26577;
this._ = _;
this.fn1 = fn1;
this.meta26580 = meta26580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26581,meta26580__$1){
var self__ = this;
var _26581__$1 = this;
return (new cljs.core.async.t_cljs$core$async26579(self__.map_LT_,self__.f,self__.ch,self__.meta26577,self__._,self__.fn1,meta26580__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26581){
var self__ = this;
var _26581__$1 = this;
return self__.meta26580;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26569_SHARP_){
return f1.call(null,(((p1__26569_SHARP_ == null))?null:self__.f.call(null,p1__26569_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26577","meta26577",1575442916,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26576","cljs.core.async/t_cljs$core$async26576",14348072,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26580","meta26580",-2021145787,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26579";

cljs.core.async.t_cljs$core$async26579.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26579");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26579 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26579(map_LT___$1,f__$1,ch__$1,meta26577__$1,___$2,fn1__$1,meta26580){
return (new cljs.core.async.t_cljs$core$async26579(map_LT___$1,f__$1,ch__$1,meta26577__$1,___$2,fn1__$1,meta26580));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26579(self__.map_LT_,self__.f,self__.ch,self__.meta26577,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26577","meta26577",1575442916,null)], null);
});

cljs.core.async.t_cljs$core$async26576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26576";

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26576");
});

cljs.core.async.__GT_t_cljs$core$async26576 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26576(map_LT___$1,f__$1,ch__$1,meta26577){
return (new cljs.core.async.t_cljs$core$async26576(map_LT___$1,f__$1,ch__$1,meta26577));
});

}

return (new cljs.core.async.t_cljs$core$async26576(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26585 = (function (map_GT_,f,ch,meta26586){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26586 = meta26586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26587,meta26586__$1){
var self__ = this;
var _26587__$1 = this;
return (new cljs.core.async.t_cljs$core$async26585(self__.map_GT_,self__.f,self__.ch,meta26586__$1));
});

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26587){
var self__ = this;
var _26587__$1 = this;
return self__.meta26586;
});

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26586","meta26586",1762343955,null)], null);
});

cljs.core.async.t_cljs$core$async26585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26585";

cljs.core.async.t_cljs$core$async26585.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26585");
});

cljs.core.async.__GT_t_cljs$core$async26585 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26585(map_GT___$1,f__$1,ch__$1,meta26586){
return (new cljs.core.async.t_cljs$core$async26585(map_GT___$1,f__$1,ch__$1,meta26586));
});

}

return (new cljs.core.async.t_cljs$core$async26585(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26591 = (function (filter_GT_,p,ch,meta26592){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26592 = meta26592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26593,meta26592__$1){
var self__ = this;
var _26593__$1 = this;
return (new cljs.core.async.t_cljs$core$async26591(self__.filter_GT_,self__.p,self__.ch,meta26592__$1));
});

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26593){
var self__ = this;
var _26593__$1 = this;
return self__.meta26592;
});

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26592","meta26592",968639285,null)], null);
});

cljs.core.async.t_cljs$core$async26591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26591";

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorPrWriter = (function (this__22257__auto__,writer__22258__auto__,opt__22259__auto__){
return cljs.core._write.call(null,writer__22258__auto__,"cljs.core.async/t_cljs$core$async26591");
});

cljs.core.async.__GT_t_cljs$core$async26591 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26591(filter_GT___$1,p__$1,ch__$1,meta26592){
return (new cljs.core.async.t_cljs$core$async26591(filter_GT___$1,p__$1,ch__$1,meta26592));
});

}

return (new cljs.core.async.t_cljs$core$async26591(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26594 = [];
var len__22721__auto___26638 = arguments.length;
var i__22722__auto___26639 = (0);
while(true){
if((i__22722__auto___26639 < len__22721__auto___26638)){
args26594.push((arguments[i__22722__auto___26639]));

var G__26640 = (i__22722__auto___26639 + (1));
i__22722__auto___26639 = G__26640;
continue;
} else {
}
break;
}

var G__26596 = args26594.length;
switch (G__26596) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26594.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___26642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26642,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26642,out){
return (function (state_26617){
var state_val_26618 = (state_26617[(1)]);
if((state_val_26618 === (7))){
var inst_26613 = (state_26617[(2)]);
var state_26617__$1 = state_26617;
var statearr_26619_26643 = state_26617__$1;
(statearr_26619_26643[(2)] = inst_26613);

(statearr_26619_26643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (1))){
var state_26617__$1 = state_26617;
var statearr_26620_26644 = state_26617__$1;
(statearr_26620_26644[(2)] = null);

(statearr_26620_26644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (4))){
var inst_26599 = (state_26617[(7)]);
var inst_26599__$1 = (state_26617[(2)]);
var inst_26600 = (inst_26599__$1 == null);
var state_26617__$1 = (function (){var statearr_26621 = state_26617;
(statearr_26621[(7)] = inst_26599__$1);

return statearr_26621;
})();
if(cljs.core.truth_(inst_26600)){
var statearr_26622_26645 = state_26617__$1;
(statearr_26622_26645[(1)] = (5));

} else {
var statearr_26623_26646 = state_26617__$1;
(statearr_26623_26646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (6))){
var inst_26599 = (state_26617[(7)]);
var inst_26604 = p.call(null,inst_26599);
var state_26617__$1 = state_26617;
if(cljs.core.truth_(inst_26604)){
var statearr_26624_26647 = state_26617__$1;
(statearr_26624_26647[(1)] = (8));

} else {
var statearr_26625_26648 = state_26617__$1;
(statearr_26625_26648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (3))){
var inst_26615 = (state_26617[(2)]);
var state_26617__$1 = state_26617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26617__$1,inst_26615);
} else {
if((state_val_26618 === (2))){
var state_26617__$1 = state_26617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26617__$1,(4),ch);
} else {
if((state_val_26618 === (11))){
var inst_26607 = (state_26617[(2)]);
var state_26617__$1 = state_26617;
var statearr_26626_26649 = state_26617__$1;
(statearr_26626_26649[(2)] = inst_26607);

(statearr_26626_26649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (9))){
var state_26617__$1 = state_26617;
var statearr_26627_26650 = state_26617__$1;
(statearr_26627_26650[(2)] = null);

(statearr_26627_26650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (5))){
var inst_26602 = cljs.core.async.close_BANG_.call(null,out);
var state_26617__$1 = state_26617;
var statearr_26628_26651 = state_26617__$1;
(statearr_26628_26651[(2)] = inst_26602);

(statearr_26628_26651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (10))){
var inst_26610 = (state_26617[(2)]);
var state_26617__$1 = (function (){var statearr_26629 = state_26617;
(statearr_26629[(8)] = inst_26610);

return statearr_26629;
})();
var statearr_26630_26652 = state_26617__$1;
(statearr_26630_26652[(2)] = null);

(statearr_26630_26652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (8))){
var inst_26599 = (state_26617[(7)]);
var state_26617__$1 = state_26617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26617__$1,(11),out,inst_26599);
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
});})(c__24392__auto___26642,out))
;
return ((function (switch__24280__auto__,c__24392__auto___26642,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26634 = [null,null,null,null,null,null,null,null,null];
(statearr_26634[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26634[(1)] = (1));

return statearr_26634;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26617){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26635){if((e26635 instanceof Object)){
var ex__24284__auto__ = e26635;
var statearr_26636_26653 = state_26617;
(statearr_26636_26653[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26654 = state_26617;
state_26617 = G__26654;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26642,out))
})();
var state__24394__auto__ = (function (){var statearr_26637 = f__24393__auto__.call(null);
(statearr_26637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26642);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26642,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26655 = [];
var len__22721__auto___26658 = arguments.length;
var i__22722__auto___26659 = (0);
while(true){
if((i__22722__auto___26659 < len__22721__auto___26658)){
args26655.push((arguments[i__22722__auto___26659]));

var G__26660 = (i__22722__auto___26659 + (1));
i__22722__auto___26659 = G__26660;
continue;
} else {
}
break;
}

var G__26657 = args26655.length;
switch (G__26657) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26655.length)].join('')));

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
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_26827){
var state_val_26828 = (state_26827[(1)]);
if((state_val_26828 === (7))){
var inst_26823 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26829_26870 = state_26827__$1;
(statearr_26829_26870[(2)] = inst_26823);

(statearr_26829_26870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (20))){
var inst_26793 = (state_26827[(7)]);
var inst_26804 = (state_26827[(2)]);
var inst_26805 = cljs.core.next.call(null,inst_26793);
var inst_26779 = inst_26805;
var inst_26780 = null;
var inst_26781 = (0);
var inst_26782 = (0);
var state_26827__$1 = (function (){var statearr_26830 = state_26827;
(statearr_26830[(8)] = inst_26780);

(statearr_26830[(9)] = inst_26804);

(statearr_26830[(10)] = inst_26782);

(statearr_26830[(11)] = inst_26781);

(statearr_26830[(12)] = inst_26779);

return statearr_26830;
})();
var statearr_26831_26871 = state_26827__$1;
(statearr_26831_26871[(2)] = null);

(statearr_26831_26871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (1))){
var state_26827__$1 = state_26827;
var statearr_26832_26872 = state_26827__$1;
(statearr_26832_26872[(2)] = null);

(statearr_26832_26872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (4))){
var inst_26768 = (state_26827[(13)]);
var inst_26768__$1 = (state_26827[(2)]);
var inst_26769 = (inst_26768__$1 == null);
var state_26827__$1 = (function (){var statearr_26833 = state_26827;
(statearr_26833[(13)] = inst_26768__$1);

return statearr_26833;
})();
if(cljs.core.truth_(inst_26769)){
var statearr_26834_26873 = state_26827__$1;
(statearr_26834_26873[(1)] = (5));

} else {
var statearr_26835_26874 = state_26827__$1;
(statearr_26835_26874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (15))){
var state_26827__$1 = state_26827;
var statearr_26839_26875 = state_26827__$1;
(statearr_26839_26875[(2)] = null);

(statearr_26839_26875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (21))){
var state_26827__$1 = state_26827;
var statearr_26840_26876 = state_26827__$1;
(statearr_26840_26876[(2)] = null);

(statearr_26840_26876[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (13))){
var inst_26780 = (state_26827[(8)]);
var inst_26782 = (state_26827[(10)]);
var inst_26781 = (state_26827[(11)]);
var inst_26779 = (state_26827[(12)]);
var inst_26789 = (state_26827[(2)]);
var inst_26790 = (inst_26782 + (1));
var tmp26836 = inst_26780;
var tmp26837 = inst_26781;
var tmp26838 = inst_26779;
var inst_26779__$1 = tmp26838;
var inst_26780__$1 = tmp26836;
var inst_26781__$1 = tmp26837;
var inst_26782__$1 = inst_26790;
var state_26827__$1 = (function (){var statearr_26841 = state_26827;
(statearr_26841[(8)] = inst_26780__$1);

(statearr_26841[(14)] = inst_26789);

(statearr_26841[(10)] = inst_26782__$1);

(statearr_26841[(11)] = inst_26781__$1);

(statearr_26841[(12)] = inst_26779__$1);

return statearr_26841;
})();
var statearr_26842_26877 = state_26827__$1;
(statearr_26842_26877[(2)] = null);

(statearr_26842_26877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (22))){
var state_26827__$1 = state_26827;
var statearr_26843_26878 = state_26827__$1;
(statearr_26843_26878[(2)] = null);

(statearr_26843_26878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (6))){
var inst_26768 = (state_26827[(13)]);
var inst_26777 = f.call(null,inst_26768);
var inst_26778 = cljs.core.seq.call(null,inst_26777);
var inst_26779 = inst_26778;
var inst_26780 = null;
var inst_26781 = (0);
var inst_26782 = (0);
var state_26827__$1 = (function (){var statearr_26844 = state_26827;
(statearr_26844[(8)] = inst_26780);

(statearr_26844[(10)] = inst_26782);

(statearr_26844[(11)] = inst_26781);

(statearr_26844[(12)] = inst_26779);

return statearr_26844;
})();
var statearr_26845_26879 = state_26827__$1;
(statearr_26845_26879[(2)] = null);

(statearr_26845_26879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (17))){
var inst_26793 = (state_26827[(7)]);
var inst_26797 = cljs.core.chunk_first.call(null,inst_26793);
var inst_26798 = cljs.core.chunk_rest.call(null,inst_26793);
var inst_26799 = cljs.core.count.call(null,inst_26797);
var inst_26779 = inst_26798;
var inst_26780 = inst_26797;
var inst_26781 = inst_26799;
var inst_26782 = (0);
var state_26827__$1 = (function (){var statearr_26846 = state_26827;
(statearr_26846[(8)] = inst_26780);

(statearr_26846[(10)] = inst_26782);

(statearr_26846[(11)] = inst_26781);

(statearr_26846[(12)] = inst_26779);

return statearr_26846;
})();
var statearr_26847_26880 = state_26827__$1;
(statearr_26847_26880[(2)] = null);

(statearr_26847_26880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (3))){
var inst_26825 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26827__$1,inst_26825);
} else {
if((state_val_26828 === (12))){
var inst_26813 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26848_26881 = state_26827__$1;
(statearr_26848_26881[(2)] = inst_26813);

(statearr_26848_26881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (2))){
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(4),in$);
} else {
if((state_val_26828 === (23))){
var inst_26821 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26849_26882 = state_26827__$1;
(statearr_26849_26882[(2)] = inst_26821);

(statearr_26849_26882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (19))){
var inst_26808 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26850_26883 = state_26827__$1;
(statearr_26850_26883[(2)] = inst_26808);

(statearr_26850_26883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (11))){
var inst_26793 = (state_26827[(7)]);
var inst_26779 = (state_26827[(12)]);
var inst_26793__$1 = cljs.core.seq.call(null,inst_26779);
var state_26827__$1 = (function (){var statearr_26851 = state_26827;
(statearr_26851[(7)] = inst_26793__$1);

return statearr_26851;
})();
if(inst_26793__$1){
var statearr_26852_26884 = state_26827__$1;
(statearr_26852_26884[(1)] = (14));

} else {
var statearr_26853_26885 = state_26827__$1;
(statearr_26853_26885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (9))){
var inst_26815 = (state_26827[(2)]);
var inst_26816 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26827__$1 = (function (){var statearr_26854 = state_26827;
(statearr_26854[(15)] = inst_26815);

return statearr_26854;
})();
if(cljs.core.truth_(inst_26816)){
var statearr_26855_26886 = state_26827__$1;
(statearr_26855_26886[(1)] = (21));

} else {
var statearr_26856_26887 = state_26827__$1;
(statearr_26856_26887[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (5))){
var inst_26771 = cljs.core.async.close_BANG_.call(null,out);
var state_26827__$1 = state_26827;
var statearr_26857_26888 = state_26827__$1;
(statearr_26857_26888[(2)] = inst_26771);

(statearr_26857_26888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (14))){
var inst_26793 = (state_26827[(7)]);
var inst_26795 = cljs.core.chunked_seq_QMARK_.call(null,inst_26793);
var state_26827__$1 = state_26827;
if(inst_26795){
var statearr_26858_26889 = state_26827__$1;
(statearr_26858_26889[(1)] = (17));

} else {
var statearr_26859_26890 = state_26827__$1;
(statearr_26859_26890[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (16))){
var inst_26811 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26860_26891 = state_26827__$1;
(statearr_26860_26891[(2)] = inst_26811);

(statearr_26860_26891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (10))){
var inst_26780 = (state_26827[(8)]);
var inst_26782 = (state_26827[(10)]);
var inst_26787 = cljs.core._nth.call(null,inst_26780,inst_26782);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26827__$1,(13),out,inst_26787);
} else {
if((state_val_26828 === (18))){
var inst_26793 = (state_26827[(7)]);
var inst_26802 = cljs.core.first.call(null,inst_26793);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26827__$1,(20),out,inst_26802);
} else {
if((state_val_26828 === (8))){
var inst_26782 = (state_26827[(10)]);
var inst_26781 = (state_26827[(11)]);
var inst_26784 = (inst_26782 < inst_26781);
var inst_26785 = inst_26784;
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26785)){
var statearr_26861_26892 = state_26827__$1;
(statearr_26861_26892[(1)] = (10));

} else {
var statearr_26862_26893 = state_26827__$1;
(statearr_26862_26893[(1)] = (11));

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
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____1 = (function (state_26827){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__24284__auto__ = e26867;
var statearr_26868_26894 = state_26827;
(statearr_26868_26894[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26895 = state_26827;
state_26827 = G__26895;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__ = function(state_26827){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____1.call(this,state_26827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24281__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_26869 = f__24393__auto__.call(null);
(statearr_26869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26896 = [];
var len__22721__auto___26899 = arguments.length;
var i__22722__auto___26900 = (0);
while(true){
if((i__22722__auto___26900 < len__22721__auto___26899)){
args26896.push((arguments[i__22722__auto___26900]));

var G__26901 = (i__22722__auto___26900 + (1));
i__22722__auto___26900 = G__26901;
continue;
} else {
}
break;
}

var G__26898 = args26896.length;
switch (G__26898) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26896.length)].join('')));

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
var args26903 = [];
var len__22721__auto___26906 = arguments.length;
var i__22722__auto___26907 = (0);
while(true){
if((i__22722__auto___26907 < len__22721__auto___26906)){
args26903.push((arguments[i__22722__auto___26907]));

var G__26908 = (i__22722__auto___26907 + (1));
i__22722__auto___26907 = G__26908;
continue;
} else {
}
break;
}

var G__26905 = args26903.length;
switch (G__26905) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26903.length)].join('')));

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
var args26910 = [];
var len__22721__auto___26961 = arguments.length;
var i__22722__auto___26962 = (0);
while(true){
if((i__22722__auto___26962 < len__22721__auto___26961)){
args26910.push((arguments[i__22722__auto___26962]));

var G__26963 = (i__22722__auto___26962 + (1));
i__22722__auto___26962 = G__26963;
continue;
} else {
}
break;
}

var G__26912 = args26910.length;
switch (G__26912) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26910.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___26965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___26965,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___26965,out){
return (function (state_26936){
var state_val_26937 = (state_26936[(1)]);
if((state_val_26937 === (7))){
var inst_26931 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
var statearr_26938_26966 = state_26936__$1;
(statearr_26938_26966[(2)] = inst_26931);

(statearr_26938_26966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (1))){
var inst_26913 = null;
var state_26936__$1 = (function (){var statearr_26939 = state_26936;
(statearr_26939[(7)] = inst_26913);

return statearr_26939;
})();
var statearr_26940_26967 = state_26936__$1;
(statearr_26940_26967[(2)] = null);

(statearr_26940_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (4))){
var inst_26916 = (state_26936[(8)]);
var inst_26916__$1 = (state_26936[(2)]);
var inst_26917 = (inst_26916__$1 == null);
var inst_26918 = cljs.core.not.call(null,inst_26917);
var state_26936__$1 = (function (){var statearr_26941 = state_26936;
(statearr_26941[(8)] = inst_26916__$1);

return statearr_26941;
})();
if(inst_26918){
var statearr_26942_26968 = state_26936__$1;
(statearr_26942_26968[(1)] = (5));

} else {
var statearr_26943_26969 = state_26936__$1;
(statearr_26943_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (6))){
var state_26936__$1 = state_26936;
var statearr_26944_26970 = state_26936__$1;
(statearr_26944_26970[(2)] = null);

(statearr_26944_26970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (3))){
var inst_26933 = (state_26936[(2)]);
var inst_26934 = cljs.core.async.close_BANG_.call(null,out);
var state_26936__$1 = (function (){var statearr_26945 = state_26936;
(statearr_26945[(9)] = inst_26933);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26936__$1,inst_26934);
} else {
if((state_val_26937 === (2))){
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26936__$1,(4),ch);
} else {
if((state_val_26937 === (11))){
var inst_26916 = (state_26936[(8)]);
var inst_26925 = (state_26936[(2)]);
var inst_26913 = inst_26916;
var state_26936__$1 = (function (){var statearr_26946 = state_26936;
(statearr_26946[(10)] = inst_26925);

(statearr_26946[(7)] = inst_26913);

return statearr_26946;
})();
var statearr_26947_26971 = state_26936__$1;
(statearr_26947_26971[(2)] = null);

(statearr_26947_26971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (9))){
var inst_26916 = (state_26936[(8)]);
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26936__$1,(11),out,inst_26916);
} else {
if((state_val_26937 === (5))){
var inst_26916 = (state_26936[(8)]);
var inst_26913 = (state_26936[(7)]);
var inst_26920 = cljs.core._EQ_.call(null,inst_26916,inst_26913);
var state_26936__$1 = state_26936;
if(inst_26920){
var statearr_26949_26972 = state_26936__$1;
(statearr_26949_26972[(1)] = (8));

} else {
var statearr_26950_26973 = state_26936__$1;
(statearr_26950_26973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (10))){
var inst_26928 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
var statearr_26951_26974 = state_26936__$1;
(statearr_26951_26974[(2)] = inst_26928);

(statearr_26951_26974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (8))){
var inst_26913 = (state_26936[(7)]);
var tmp26948 = inst_26913;
var inst_26913__$1 = tmp26948;
var state_26936__$1 = (function (){var statearr_26952 = state_26936;
(statearr_26952[(7)] = inst_26913__$1);

return statearr_26952;
})();
var statearr_26953_26975 = state_26936__$1;
(statearr_26953_26975[(2)] = null);

(statearr_26953_26975[(1)] = (2));


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
});})(c__24392__auto___26965,out))
;
return ((function (switch__24280__auto__,c__24392__auto___26965,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_26957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26957[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_26957[(1)] = (1));

return statearr_26957;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_26936){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_26936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object)){
var ex__24284__auto__ = e26958;
var statearr_26959_26976 = state_26936;
(statearr_26959_26976[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26977 = state_26936;
state_26936 = G__26977;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___26965,out))
})();
var state__24394__auto__ = (function (){var statearr_26960 = f__24393__auto__.call(null);
(statearr_26960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___26965);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___26965,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26978 = [];
var len__22721__auto___27048 = arguments.length;
var i__22722__auto___27049 = (0);
while(true){
if((i__22722__auto___27049 < len__22721__auto___27048)){
args26978.push((arguments[i__22722__auto___27049]));

var G__27050 = (i__22722__auto___27049 + (1));
i__22722__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var G__26980 = args26978.length;
switch (G__26980) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26978.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___27052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___27052,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___27052,out){
return (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (7))){
var inst_27014 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27020_27053 = state_27018__$1;
(statearr_27020_27053[(2)] = inst_27014);

(statearr_27020_27053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (1))){
var inst_26981 = (new Array(n));
var inst_26982 = inst_26981;
var inst_26983 = (0);
var state_27018__$1 = (function (){var statearr_27021 = state_27018;
(statearr_27021[(7)] = inst_26982);

(statearr_27021[(8)] = inst_26983);

return statearr_27021;
})();
var statearr_27022_27054 = state_27018__$1;
(statearr_27022_27054[(2)] = null);

(statearr_27022_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (4))){
var inst_26986 = (state_27018[(9)]);
var inst_26986__$1 = (state_27018[(2)]);
var inst_26987 = (inst_26986__$1 == null);
var inst_26988 = cljs.core.not.call(null,inst_26987);
var state_27018__$1 = (function (){var statearr_27023 = state_27018;
(statearr_27023[(9)] = inst_26986__$1);

return statearr_27023;
})();
if(inst_26988){
var statearr_27024_27055 = state_27018__$1;
(statearr_27024_27055[(1)] = (5));

} else {
var statearr_27025_27056 = state_27018__$1;
(statearr_27025_27056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (15))){
var inst_27008 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27026_27057 = state_27018__$1;
(statearr_27026_27057[(2)] = inst_27008);

(statearr_27026_27057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (13))){
var state_27018__$1 = state_27018;
var statearr_27027_27058 = state_27018__$1;
(statearr_27027_27058[(2)] = null);

(statearr_27027_27058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (6))){
var inst_26983 = (state_27018[(8)]);
var inst_27004 = (inst_26983 > (0));
var state_27018__$1 = state_27018;
if(cljs.core.truth_(inst_27004)){
var statearr_27028_27059 = state_27018__$1;
(statearr_27028_27059[(1)] = (12));

} else {
var statearr_27029_27060 = state_27018__$1;
(statearr_27029_27060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (3))){
var inst_27016 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
if((state_val_27019 === (12))){
var inst_26982 = (state_27018[(7)]);
var inst_27006 = cljs.core.vec.call(null,inst_26982);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(15),out,inst_27006);
} else {
if((state_val_27019 === (2))){
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27018__$1,(4),ch);
} else {
if((state_val_27019 === (11))){
var inst_26998 = (state_27018[(2)]);
var inst_26999 = (new Array(n));
var inst_26982 = inst_26999;
var inst_26983 = (0);
var state_27018__$1 = (function (){var statearr_27030 = state_27018;
(statearr_27030[(10)] = inst_26998);

(statearr_27030[(7)] = inst_26982);

(statearr_27030[(8)] = inst_26983);

return statearr_27030;
})();
var statearr_27031_27061 = state_27018__$1;
(statearr_27031_27061[(2)] = null);

(statearr_27031_27061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (9))){
var inst_26982 = (state_27018[(7)]);
var inst_26996 = cljs.core.vec.call(null,inst_26982);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(11),out,inst_26996);
} else {
if((state_val_27019 === (5))){
var inst_26991 = (state_27018[(11)]);
var inst_26982 = (state_27018[(7)]);
var inst_26983 = (state_27018[(8)]);
var inst_26986 = (state_27018[(9)]);
var inst_26990 = (inst_26982[inst_26983] = inst_26986);
var inst_26991__$1 = (inst_26983 + (1));
var inst_26992 = (inst_26991__$1 < n);
var state_27018__$1 = (function (){var statearr_27032 = state_27018;
(statearr_27032[(11)] = inst_26991__$1);

(statearr_27032[(12)] = inst_26990);

return statearr_27032;
})();
if(cljs.core.truth_(inst_26992)){
var statearr_27033_27062 = state_27018__$1;
(statearr_27033_27062[(1)] = (8));

} else {
var statearr_27034_27063 = state_27018__$1;
(statearr_27034_27063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (14))){
var inst_27011 = (state_27018[(2)]);
var inst_27012 = cljs.core.async.close_BANG_.call(null,out);
var state_27018__$1 = (function (){var statearr_27036 = state_27018;
(statearr_27036[(13)] = inst_27011);

return statearr_27036;
})();
var statearr_27037_27064 = state_27018__$1;
(statearr_27037_27064[(2)] = inst_27012);

(statearr_27037_27064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (10))){
var inst_27002 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27038_27065 = state_27018__$1;
(statearr_27038_27065[(2)] = inst_27002);

(statearr_27038_27065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (8))){
var inst_26991 = (state_27018[(11)]);
var inst_26982 = (state_27018[(7)]);
var tmp27035 = inst_26982;
var inst_26982__$1 = tmp27035;
var inst_26983 = inst_26991;
var state_27018__$1 = (function (){var statearr_27039 = state_27018;
(statearr_27039[(7)] = inst_26982__$1);

(statearr_27039[(8)] = inst_26983);

return statearr_27039;
})();
var statearr_27040_27066 = state_27018__$1;
(statearr_27040_27066[(2)] = null);

(statearr_27040_27066[(1)] = (2));


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
});})(c__24392__auto___27052,out))
;
return ((function (switch__24280__auto__,c__24392__auto___27052,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_27018){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__24284__auto__ = e27045;
var statearr_27046_27067 = state_27018;
(statearr_27046_27067[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27068 = state_27018;
state_27018 = G__27068;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___27052,out))
})();
var state__24394__auto__ = (function (){var statearr_27047 = f__24393__auto__.call(null);
(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___27052);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___27052,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27069 = [];
var len__22721__auto___27143 = arguments.length;
var i__22722__auto___27144 = (0);
while(true){
if((i__22722__auto___27144 < len__22721__auto___27143)){
args27069.push((arguments[i__22722__auto___27144]));

var G__27145 = (i__22722__auto___27144 + (1));
i__22722__auto___27144 = G__27145;
continue;
} else {
}
break;
}

var G__27071 = args27069.length;
switch (G__27071) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27069.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24392__auto___27147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___27147,out){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___27147,out){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (7))){
var inst_27109 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27115_27148 = state_27113__$1;
(statearr_27115_27148[(2)] = inst_27109);

(statearr_27115_27148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (1))){
var inst_27072 = [];
var inst_27073 = inst_27072;
var inst_27074 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27113__$1 = (function (){var statearr_27116 = state_27113;
(statearr_27116[(7)] = inst_27073);

(statearr_27116[(8)] = inst_27074);

return statearr_27116;
})();
var statearr_27117_27149 = state_27113__$1;
(statearr_27117_27149[(2)] = null);

(statearr_27117_27149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (4))){
var inst_27077 = (state_27113[(9)]);
var inst_27077__$1 = (state_27113[(2)]);
var inst_27078 = (inst_27077__$1 == null);
var inst_27079 = cljs.core.not.call(null,inst_27078);
var state_27113__$1 = (function (){var statearr_27118 = state_27113;
(statearr_27118[(9)] = inst_27077__$1);

return statearr_27118;
})();
if(inst_27079){
var statearr_27119_27150 = state_27113__$1;
(statearr_27119_27150[(1)] = (5));

} else {
var statearr_27120_27151 = state_27113__$1;
(statearr_27120_27151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (15))){
var inst_27103 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27121_27152 = state_27113__$1;
(statearr_27121_27152[(2)] = inst_27103);

(statearr_27121_27152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (13))){
var state_27113__$1 = state_27113;
var statearr_27122_27153 = state_27113__$1;
(statearr_27122_27153[(2)] = null);

(statearr_27122_27153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (6))){
var inst_27073 = (state_27113[(7)]);
var inst_27098 = inst_27073.length;
var inst_27099 = (inst_27098 > (0));
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27099)){
var statearr_27123_27154 = state_27113__$1;
(statearr_27123_27154[(1)] = (12));

} else {
var statearr_27124_27155 = state_27113__$1;
(statearr_27124_27155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (3))){
var inst_27111 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
if((state_val_27114 === (12))){
var inst_27073 = (state_27113[(7)]);
var inst_27101 = cljs.core.vec.call(null,inst_27073);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(15),out,inst_27101);
} else {
if((state_val_27114 === (2))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(4),ch);
} else {
if((state_val_27114 === (11))){
var inst_27081 = (state_27113[(10)]);
var inst_27077 = (state_27113[(9)]);
var inst_27091 = (state_27113[(2)]);
var inst_27092 = [];
var inst_27093 = inst_27092.push(inst_27077);
var inst_27073 = inst_27092;
var inst_27074 = inst_27081;
var state_27113__$1 = (function (){var statearr_27125 = state_27113;
(statearr_27125[(7)] = inst_27073);

(statearr_27125[(8)] = inst_27074);

(statearr_27125[(11)] = inst_27091);

(statearr_27125[(12)] = inst_27093);

return statearr_27125;
})();
var statearr_27126_27156 = state_27113__$1;
(statearr_27126_27156[(2)] = null);

(statearr_27126_27156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (9))){
var inst_27073 = (state_27113[(7)]);
var inst_27089 = cljs.core.vec.call(null,inst_27073);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(11),out,inst_27089);
} else {
if((state_val_27114 === (5))){
var inst_27074 = (state_27113[(8)]);
var inst_27081 = (state_27113[(10)]);
var inst_27077 = (state_27113[(9)]);
var inst_27081__$1 = f.call(null,inst_27077);
var inst_27082 = cljs.core._EQ_.call(null,inst_27081__$1,inst_27074);
var inst_27083 = cljs.core.keyword_identical_QMARK_.call(null,inst_27074,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27084 = (inst_27082) || (inst_27083);
var state_27113__$1 = (function (){var statearr_27127 = state_27113;
(statearr_27127[(10)] = inst_27081__$1);

return statearr_27127;
})();
if(cljs.core.truth_(inst_27084)){
var statearr_27128_27157 = state_27113__$1;
(statearr_27128_27157[(1)] = (8));

} else {
var statearr_27129_27158 = state_27113__$1;
(statearr_27129_27158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (14))){
var inst_27106 = (state_27113[(2)]);
var inst_27107 = cljs.core.async.close_BANG_.call(null,out);
var state_27113__$1 = (function (){var statearr_27131 = state_27113;
(statearr_27131[(13)] = inst_27106);

return statearr_27131;
})();
var statearr_27132_27159 = state_27113__$1;
(statearr_27132_27159[(2)] = inst_27107);

(statearr_27132_27159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (10))){
var inst_27096 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27133_27160 = state_27113__$1;
(statearr_27133_27160[(2)] = inst_27096);

(statearr_27133_27160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (8))){
var inst_27073 = (state_27113[(7)]);
var inst_27081 = (state_27113[(10)]);
var inst_27077 = (state_27113[(9)]);
var inst_27086 = inst_27073.push(inst_27077);
var tmp27130 = inst_27073;
var inst_27073__$1 = tmp27130;
var inst_27074 = inst_27081;
var state_27113__$1 = (function (){var statearr_27134 = state_27113;
(statearr_27134[(7)] = inst_27073__$1);

(statearr_27134[(14)] = inst_27086);

(statearr_27134[(8)] = inst_27074);

return statearr_27134;
})();
var statearr_27135_27161 = state_27113__$1;
(statearr_27135_27161[(2)] = null);

(statearr_27135_27161[(1)] = (2));


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
});})(c__24392__auto___27147,out))
;
return ((function (switch__24280__auto__,c__24392__auto___27147,out){
return (function() {
var cljs$core$async$state_machine__24281__auto__ = null;
var cljs$core$async$state_machine__24281__auto____0 = (function (){
var statearr_27139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27139[(0)] = cljs$core$async$state_machine__24281__auto__);

(statearr_27139[(1)] = (1));

return statearr_27139;
});
var cljs$core$async$state_machine__24281__auto____1 = (function (state_27113){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e27140){if((e27140 instanceof Object)){
var ex__24284__auto__ = e27140;
var statearr_27141_27162 = state_27113;
(statearr_27141_27162[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27163 = state_27113;
state_27113 = G__27163;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
cljs$core$async$state_machine__24281__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24281__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24281__auto____0;
cljs$core$async$state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24281__auto____1;
return cljs$core$async$state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___27147,out))
})();
var state__24394__auto__ = (function (){var statearr_27142 = f__24393__auto__.call(null);
(statearr_27142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___27147);

return statearr_27142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___27147,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map