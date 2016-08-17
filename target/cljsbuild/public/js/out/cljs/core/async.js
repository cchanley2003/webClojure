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
var args24953 = [];
var len__22859__auto___24959 = arguments.length;
var i__22860__auto___24960 = (0);
while(true){
if((i__22860__auto___24960 < len__22859__auto___24959)){
args24953.push((arguments[i__22860__auto___24960]));

var G__24961 = (i__22860__auto___24960 + (1));
i__22860__auto___24960 = G__24961;
continue;
} else {
}
break;
}

var G__24955 = args24953.length;
switch (G__24955) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24953.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24956 = (function (f,blockable,meta24957){
this.f = f;
this.blockable = blockable;
this.meta24957 = meta24957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24958,meta24957__$1){
var self__ = this;
var _24958__$1 = this;
return (new cljs.core.async.t_cljs$core$async24956(self__.f,self__.blockable,meta24957__$1));
});

cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24958){
var self__ = this;
var _24958__$1 = this;
return self__.meta24957;
});

cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24957","meta24957",-1255387454,null)], null);
});

cljs.core.async.t_cljs$core$async24956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24956";

cljs.core.async.t_cljs$core$async24956.cljs$lang$ctorPrWriter = (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async24956");
});

cljs.core.async.__GT_t_cljs$core$async24956 = (function cljs$core$async$__GT_t_cljs$core$async24956(f__$1,blockable__$1,meta24957){
return (new cljs.core.async.t_cljs$core$async24956(f__$1,blockable__$1,meta24957));
});

}

return (new cljs.core.async.t_cljs$core$async24956(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24965 = [];
var len__22859__auto___24968 = arguments.length;
var i__22860__auto___24969 = (0);
while(true){
if((i__22860__auto___24969 < len__22859__auto___24968)){
args24965.push((arguments[i__22860__auto___24969]));

var G__24970 = (i__22860__auto___24969 + (1));
i__22860__auto___24969 = G__24970;
continue;
} else {
}
break;
}

var G__24967 = args24965.length;
switch (G__24967) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24965.length)].join('')));

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
var args24972 = [];
var len__22859__auto___24975 = arguments.length;
var i__22860__auto___24976 = (0);
while(true){
if((i__22860__auto___24976 < len__22859__auto___24975)){
args24972.push((arguments[i__22860__auto___24976]));

var G__24977 = (i__22860__auto___24976 + (1));
i__22860__auto___24976 = G__24977;
continue;
} else {
}
break;
}

var G__24974 = args24972.length;
switch (G__24974) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24972.length)].join('')));

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
var args24979 = [];
var len__22859__auto___24982 = arguments.length;
var i__22860__auto___24983 = (0);
while(true){
if((i__22860__auto___24983 < len__22859__auto___24982)){
args24979.push((arguments[i__22860__auto___24983]));

var G__24984 = (i__22860__auto___24983 + (1));
i__22860__auto___24983 = G__24984;
continue;
} else {
}
break;
}

var G__24981 = args24979.length;
switch (G__24981) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24979.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24986 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24986);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24986,ret){
return (function (){
return fn1.call(null,val_24986);
});})(val_24986,ret))
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
var args24987 = [];
var len__22859__auto___24990 = arguments.length;
var i__22860__auto___24991 = (0);
while(true){
if((i__22860__auto___24991 < len__22859__auto___24990)){
args24987.push((arguments[i__22860__auto___24991]));

var G__24992 = (i__22860__auto___24991 + (1));
i__22860__auto___24991 = G__24992;
continue;
} else {
}
break;
}

var G__24989 = args24987.length;
switch (G__24989) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24987.length)].join('')));

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
var n__22703__auto___24994 = n;
var x_24995 = (0);
while(true){
if((x_24995 < n__22703__auto___24994)){
(a[x_24995] = (0));

var G__24996 = (x_24995 + (1));
x_24995 = G__24996;
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

var G__24997 = (i + (1));
i = G__24997;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25001 = (function (alt_flag,flag,meta25002){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25002 = meta25002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25003,meta25002__$1){
var self__ = this;
var _25003__$1 = this;
return (new cljs.core.async.t_cljs$core$async25001(self__.alt_flag,self__.flag,meta25002__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25003){
var self__ = this;
var _25003__$1 = this;
return self__.meta25002;
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25002","meta25002",-1238445674,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25001";

cljs.core.async.t_cljs$core$async25001.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async25001");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25001 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25001(alt_flag__$1,flag__$1,meta25002){
return (new cljs.core.async.t_cljs$core$async25001(alt_flag__$1,flag__$1,meta25002));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25001(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25007 = (function (alt_handler,flag,cb,meta25008){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25008 = meta25008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25009,meta25008__$1){
var self__ = this;
var _25009__$1 = this;
return (new cljs.core.async.t_cljs$core$async25007(self__.alt_handler,self__.flag,self__.cb,meta25008__$1));
});

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25009){
var self__ = this;
var _25009__$1 = this;
return self__.meta25008;
});

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25008","meta25008",808194449,null)], null);
});

cljs.core.async.t_cljs$core$async25007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25007";

cljs.core.async.t_cljs$core$async25007.cljs$lang$ctorPrWriter = (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async25007");
});

cljs.core.async.__GT_t_cljs$core$async25007 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25007(alt_handler__$1,flag__$1,cb__$1,meta25008){
return (new cljs.core.async.t_cljs$core$async25007(alt_handler__$1,flag__$1,cb__$1,meta25008));
});

}

return (new cljs.core.async.t_cljs$core$async25007(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25010_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25011_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25011_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21788__auto__ = wport;
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25012 = (i + (1));
i = G__25012;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21788__auto__ = ret;
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21776__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21776__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21776__auto__;
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
var args__22866__auto__ = [];
var len__22859__auto___25018 = arguments.length;
var i__22860__auto___25019 = (0);
while(true){
if((i__22860__auto___25019 < len__22859__auto___25018)){
args__22866__auto__.push((arguments[i__22860__auto___25019]));

var G__25020 = (i__22860__auto___25019 + (1));
i__22860__auto___25019 = G__25020;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((1) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22867__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25015){
var map__25016 = p__25015;
var map__25016__$1 = ((((!((map__25016 == null)))?((((map__25016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25016):map__25016);
var opts = map__25016__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25013){
var G__25014 = cljs.core.first.call(null,seq25013);
var seq25013__$1 = cljs.core.next.call(null,seq25013);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25014,seq25013__$1);
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
var args25021 = [];
var len__22859__auto___25071 = arguments.length;
var i__22860__auto___25072 = (0);
while(true){
if((i__22860__auto___25072 < len__22859__auto___25071)){
args25021.push((arguments[i__22860__auto___25072]));

var G__25073 = (i__22860__auto___25072 + (1));
i__22860__auto___25072 = G__25073;
continue;
} else {
}
break;
}

var G__25023 = args25021.length;
switch (G__25023) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25021.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24908__auto___25075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___25075){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___25075){
return (function (state_25047){
var state_val_25048 = (state_25047[(1)]);
if((state_val_25048 === (7))){
var inst_25043 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25049_25076 = state_25047__$1;
(statearr_25049_25076[(2)] = inst_25043);

(statearr_25049_25076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (1))){
var state_25047__$1 = state_25047;
var statearr_25050_25077 = state_25047__$1;
(statearr_25050_25077[(2)] = null);

(statearr_25050_25077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (4))){
var inst_25026 = (state_25047[(7)]);
var inst_25026__$1 = (state_25047[(2)]);
var inst_25027 = (inst_25026__$1 == null);
var state_25047__$1 = (function (){var statearr_25051 = state_25047;
(statearr_25051[(7)] = inst_25026__$1);

return statearr_25051;
})();
if(cljs.core.truth_(inst_25027)){
var statearr_25052_25078 = state_25047__$1;
(statearr_25052_25078[(1)] = (5));

} else {
var statearr_25053_25079 = state_25047__$1;
(statearr_25053_25079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (13))){
var state_25047__$1 = state_25047;
var statearr_25054_25080 = state_25047__$1;
(statearr_25054_25080[(2)] = null);

(statearr_25054_25080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (6))){
var inst_25026 = (state_25047[(7)]);
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25047__$1,(11),to,inst_25026);
} else {
if((state_val_25048 === (3))){
var inst_25045 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25047__$1,inst_25045);
} else {
if((state_val_25048 === (12))){
var state_25047__$1 = state_25047;
var statearr_25055_25081 = state_25047__$1;
(statearr_25055_25081[(2)] = null);

(statearr_25055_25081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (2))){
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25047__$1,(4),from);
} else {
if((state_val_25048 === (11))){
var inst_25036 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
if(cljs.core.truth_(inst_25036)){
var statearr_25056_25082 = state_25047__$1;
(statearr_25056_25082[(1)] = (12));

} else {
var statearr_25057_25083 = state_25047__$1;
(statearr_25057_25083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (9))){
var state_25047__$1 = state_25047;
var statearr_25058_25084 = state_25047__$1;
(statearr_25058_25084[(2)] = null);

(statearr_25058_25084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (5))){
var state_25047__$1 = state_25047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25059_25085 = state_25047__$1;
(statearr_25059_25085[(1)] = (8));

} else {
var statearr_25060_25086 = state_25047__$1;
(statearr_25060_25086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (14))){
var inst_25041 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25061_25087 = state_25047__$1;
(statearr_25061_25087[(2)] = inst_25041);

(statearr_25061_25087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (10))){
var inst_25033 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25062_25088 = state_25047__$1;
(statearr_25062_25088[(2)] = inst_25033);

(statearr_25062_25088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (8))){
var inst_25030 = cljs.core.async.close_BANG_.call(null,to);
var state_25047__$1 = state_25047;
var statearr_25063_25089 = state_25047__$1;
(statearr_25063_25089[(2)] = inst_25030);

(statearr_25063_25089[(1)] = (10));


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
});})(c__24908__auto___25075))
;
return ((function (switch__24796__auto__,c__24908__auto___25075){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_25067 = [null,null,null,null,null,null,null,null];
(statearr_25067[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_25067[(1)] = (1));

return statearr_25067;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_25047){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object)){
var ex__24800__auto__ = e25068;
var statearr_25069_25090 = state_25047;
(statearr_25069_25090[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25091 = state_25047;
state_25047 = G__25091;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_25047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_25047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___25075))
})();
var state__24910__auto__ = (function (){var statearr_25070 = f__24909__auto__.call(null);
(statearr_25070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25075);

return statearr_25070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___25075))
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
return (function (p__25275){
var vec__25276 = p__25275;
var v = cljs.core.nth.call(null,vec__25276,(0),null);
var p = cljs.core.nth.call(null,vec__25276,(1),null);
var job = vec__25276;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24908__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results){
return (function (state_25281){
var state_val_25282 = (state_25281[(1)]);
if((state_val_25282 === (1))){
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25281__$1,(2),res,v);
} else {
if((state_val_25282 === (2))){
var inst_25278 = (state_25281[(2)]);
var inst_25279 = cljs.core.async.close_BANG_.call(null,res);
var state_25281__$1 = (function (){var statearr_25283 = state_25281;
(statearr_25283[(7)] = inst_25278);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25281__$1,inst_25279);
} else {
return null;
}
}
});})(c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results))
;
return ((function (switch__24796__auto__,c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1 = (function (state_25281){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__24800__auto__ = e25288;
var statearr_25289_25459 = state_25281;
(statearr_25289_25459[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25460 = state_25281;
state_25281 = G__25460;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = function(state_25281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1.call(this,state_25281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results))
})();
var state__24910__auto__ = (function (){var statearr_25290 = f__24909__auto__.call(null);
(statearr_25290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25458);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___25458,res,vec__25276,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25291){
var vec__25292 = p__25291;
var v = cljs.core.nth.call(null,vec__25292,(0),null);
var p = cljs.core.nth.call(null,vec__25292,(1),null);
var job = vec__25292;
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
var n__22703__auto___25461 = n;
var __25462 = (0);
while(true){
if((__25462 < n__22703__auto___25461)){
var G__25293_25463 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25293_25463) {
case "compute":
var c__24908__auto___25465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25462,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (__25462,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (1))){
var state_25306__$1 = state_25306;
var statearr_25308_25466 = state_25306__$1;
(statearr_25308_25466[(2)] = null);

(statearr_25308_25466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (2))){
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25306__$1,(4),jobs);
} else {
if((state_val_25307 === (3))){
var inst_25304 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,inst_25304);
} else {
if((state_val_25307 === (4))){
var inst_25296 = (state_25306[(2)]);
var inst_25297 = process.call(null,inst_25296);
var state_25306__$1 = state_25306;
if(cljs.core.truth_(inst_25297)){
var statearr_25309_25467 = state_25306__$1;
(statearr_25309_25467[(1)] = (5));

} else {
var statearr_25310_25468 = state_25306__$1;
(statearr_25310_25468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (5))){
var state_25306__$1 = state_25306;
var statearr_25311_25469 = state_25306__$1;
(statearr_25311_25469[(2)] = null);

(statearr_25311_25469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (6))){
var state_25306__$1 = state_25306;
var statearr_25312_25470 = state_25306__$1;
(statearr_25312_25470[(2)] = null);

(statearr_25312_25470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (7))){
var inst_25302 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25313_25471 = state_25306__$1;
(statearr_25313_25471[(2)] = inst_25302);

(statearr_25313_25471[(1)] = (3));


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
});})(__25462,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
;
return ((function (__25462,switch__24796__auto__,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1 = (function (state_25306){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__24800__auto__ = e25318;
var statearr_25319_25472 = state_25306;
(statearr_25319_25472[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25473 = state_25306;
state_25306 = G__25473;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__;
})()
;})(__25462,switch__24796__auto__,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
})();
var state__24910__auto__ = (function (){var statearr_25320 = f__24909__auto__.call(null);
(statearr_25320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25465);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(__25462,c__24908__auto___25465,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
);


break;
case "async":
var c__24908__auto___25474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25462,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (__25462,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function (state_25333){
var state_val_25334 = (state_25333[(1)]);
if((state_val_25334 === (1))){
var state_25333__$1 = state_25333;
var statearr_25335_25475 = state_25333__$1;
(statearr_25335_25475[(2)] = null);

(statearr_25335_25475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (2))){
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,(4),jobs);
} else {
if((state_val_25334 === (3))){
var inst_25331 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else {
if((state_val_25334 === (4))){
var inst_25323 = (state_25333[(2)]);
var inst_25324 = async.call(null,inst_25323);
var state_25333__$1 = state_25333;
if(cljs.core.truth_(inst_25324)){
var statearr_25336_25476 = state_25333__$1;
(statearr_25336_25476[(1)] = (5));

} else {
var statearr_25337_25477 = state_25333__$1;
(statearr_25337_25477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (5))){
var state_25333__$1 = state_25333;
var statearr_25338_25478 = state_25333__$1;
(statearr_25338_25478[(2)] = null);

(statearr_25338_25478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (6))){
var state_25333__$1 = state_25333;
var statearr_25339_25479 = state_25333__$1;
(statearr_25339_25479[(2)] = null);

(statearr_25339_25479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (7))){
var inst_25329 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25340_25480 = state_25333__$1;
(statearr_25340_25480[(2)] = inst_25329);

(statearr_25340_25480[(1)] = (3));


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
});})(__25462,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
;
return ((function (__25462,switch__24796__auto__,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_25344 = [null,null,null,null,null,null,null];
(statearr_25344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__);

(statearr_25344[(1)] = (1));

return statearr_25344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1 = (function (state_25333){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25345){if((e25345 instanceof Object)){
var ex__24800__auto__ = e25345;
var statearr_25346_25481 = state_25333;
(statearr_25346_25481[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25482 = state_25333;
state_25333 = G__25482;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__;
})()
;})(__25462,switch__24796__auto__,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
})();
var state__24910__auto__ = (function (){var statearr_25347 = f__24909__auto__.call(null);
(statearr_25347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25474);

return statearr_25347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(__25462,c__24908__auto___25474,G__25293_25463,n__22703__auto___25461,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25483 = (__25462 + (1));
__25462 = G__25483;
continue;
} else {
}
break;
}

var c__24908__auto___25484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___25484,jobs,results,process,async){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___25484,jobs,results,process,async){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (1))){
var state_25369__$1 = state_25369;
var statearr_25371_25485 = state_25369__$1;
(statearr_25371_25485[(2)] = null);

(statearr_25371_25485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (2))){
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(4),from);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (4))){
var inst_25350 = (state_25369[(7)]);
var inst_25350__$1 = (state_25369[(2)]);
var inst_25351 = (inst_25350__$1 == null);
var state_25369__$1 = (function (){var statearr_25372 = state_25369;
(statearr_25372[(7)] = inst_25350__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25373_25486 = state_25369__$1;
(statearr_25373_25486[(1)] = (5));

} else {
var statearr_25374_25487 = state_25369__$1;
(statearr_25374_25487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (5))){
var inst_25353 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25369__$1 = state_25369;
var statearr_25375_25488 = state_25369__$1;
(statearr_25375_25488[(2)] = inst_25353);

(statearr_25375_25488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (6))){
var inst_25350 = (state_25369[(7)]);
var inst_25355 = (state_25369[(8)]);
var inst_25355__$1 = cljs.core.async.chan.call(null,(1));
var inst_25356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25357 = [inst_25350,inst_25355__$1];
var inst_25358 = (new cljs.core.PersistentVector(null,2,(5),inst_25356,inst_25357,null));
var state_25369__$1 = (function (){var statearr_25376 = state_25369;
(statearr_25376[(8)] = inst_25355__$1);

return statearr_25376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(8),jobs,inst_25358);
} else {
if((state_val_25370 === (7))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25377_25489 = state_25369__$1;
(statearr_25377_25489[(2)] = inst_25365);

(statearr_25377_25489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (8))){
var inst_25355 = (state_25369[(8)]);
var inst_25360 = (state_25369[(2)]);
var state_25369__$1 = (function (){var statearr_25378 = state_25369;
(statearr_25378[(9)] = inst_25360);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(9),results,inst_25355);
} else {
if((state_val_25370 === (9))){
var inst_25362 = (state_25369[(2)]);
var state_25369__$1 = (function (){var statearr_25379 = state_25369;
(statearr_25379[(10)] = inst_25362);

return statearr_25379;
})();
var statearr_25380_25490 = state_25369__$1;
(statearr_25380_25490[(2)] = null);

(statearr_25380_25490[(1)] = (2));


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
});})(c__24908__auto___25484,jobs,results,process,async))
;
return ((function (switch__24796__auto__,c__24908__auto___25484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_25384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__);

(statearr_25384[(1)] = (1));

return statearr_25384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1 = (function (state_25369){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25385){if((e25385 instanceof Object)){
var ex__24800__auto__ = e25385;
var statearr_25386_25491 = state_25369;
(statearr_25386_25491[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25492 = state_25369;
state_25369 = G__25492;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___25484,jobs,results,process,async))
})();
var state__24910__auto__ = (function (){var statearr_25387 = f__24909__auto__.call(null);
(statearr_25387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25484);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___25484,jobs,results,process,async))
);


var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__,jobs,results,process,async){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__,jobs,results,process,async){
return (function (state_25425){
var state_val_25426 = (state_25425[(1)]);
if((state_val_25426 === (7))){
var inst_25421 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
var statearr_25427_25493 = state_25425__$1;
(statearr_25427_25493[(2)] = inst_25421);

(statearr_25427_25493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (20))){
var state_25425__$1 = state_25425;
var statearr_25428_25494 = state_25425__$1;
(statearr_25428_25494[(2)] = null);

(statearr_25428_25494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (1))){
var state_25425__$1 = state_25425;
var statearr_25429_25495 = state_25425__$1;
(statearr_25429_25495[(2)] = null);

(statearr_25429_25495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (4))){
var inst_25390 = (state_25425[(7)]);
var inst_25390__$1 = (state_25425[(2)]);
var inst_25391 = (inst_25390__$1 == null);
var state_25425__$1 = (function (){var statearr_25430 = state_25425;
(statearr_25430[(7)] = inst_25390__$1);

return statearr_25430;
})();
if(cljs.core.truth_(inst_25391)){
var statearr_25431_25496 = state_25425__$1;
(statearr_25431_25496[(1)] = (5));

} else {
var statearr_25432_25497 = state_25425__$1;
(statearr_25432_25497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (15))){
var inst_25403 = (state_25425[(8)]);
var state_25425__$1 = state_25425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25425__$1,(18),to,inst_25403);
} else {
if((state_val_25426 === (21))){
var inst_25416 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
var statearr_25433_25498 = state_25425__$1;
(statearr_25433_25498[(2)] = inst_25416);

(statearr_25433_25498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (13))){
var inst_25418 = (state_25425[(2)]);
var state_25425__$1 = (function (){var statearr_25434 = state_25425;
(statearr_25434[(9)] = inst_25418);

return statearr_25434;
})();
var statearr_25435_25499 = state_25425__$1;
(statearr_25435_25499[(2)] = null);

(statearr_25435_25499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (6))){
var inst_25390 = (state_25425[(7)]);
var state_25425__$1 = state_25425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25425__$1,(11),inst_25390);
} else {
if((state_val_25426 === (17))){
var inst_25411 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
if(cljs.core.truth_(inst_25411)){
var statearr_25436_25500 = state_25425__$1;
(statearr_25436_25500[(1)] = (19));

} else {
var statearr_25437_25501 = state_25425__$1;
(statearr_25437_25501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (3))){
var inst_25423 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25425__$1,inst_25423);
} else {
if((state_val_25426 === (12))){
var inst_25400 = (state_25425[(10)]);
var state_25425__$1 = state_25425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25425__$1,(14),inst_25400);
} else {
if((state_val_25426 === (2))){
var state_25425__$1 = state_25425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25425__$1,(4),results);
} else {
if((state_val_25426 === (19))){
var state_25425__$1 = state_25425;
var statearr_25438_25502 = state_25425__$1;
(statearr_25438_25502[(2)] = null);

(statearr_25438_25502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (11))){
var inst_25400 = (state_25425[(2)]);
var state_25425__$1 = (function (){var statearr_25439 = state_25425;
(statearr_25439[(10)] = inst_25400);

return statearr_25439;
})();
var statearr_25440_25503 = state_25425__$1;
(statearr_25440_25503[(2)] = null);

(statearr_25440_25503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (9))){
var state_25425__$1 = state_25425;
var statearr_25441_25504 = state_25425__$1;
(statearr_25441_25504[(2)] = null);

(statearr_25441_25504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (5))){
var state_25425__$1 = state_25425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25442_25505 = state_25425__$1;
(statearr_25442_25505[(1)] = (8));

} else {
var statearr_25443_25506 = state_25425__$1;
(statearr_25443_25506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (14))){
var inst_25405 = (state_25425[(11)]);
var inst_25403 = (state_25425[(8)]);
var inst_25403__$1 = (state_25425[(2)]);
var inst_25404 = (inst_25403__$1 == null);
var inst_25405__$1 = cljs.core.not.call(null,inst_25404);
var state_25425__$1 = (function (){var statearr_25444 = state_25425;
(statearr_25444[(11)] = inst_25405__$1);

(statearr_25444[(8)] = inst_25403__$1);

return statearr_25444;
})();
if(inst_25405__$1){
var statearr_25445_25507 = state_25425__$1;
(statearr_25445_25507[(1)] = (15));

} else {
var statearr_25446_25508 = state_25425__$1;
(statearr_25446_25508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (16))){
var inst_25405 = (state_25425[(11)]);
var state_25425__$1 = state_25425;
var statearr_25447_25509 = state_25425__$1;
(statearr_25447_25509[(2)] = inst_25405);

(statearr_25447_25509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (10))){
var inst_25397 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
var statearr_25448_25510 = state_25425__$1;
(statearr_25448_25510[(2)] = inst_25397);

(statearr_25448_25510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (18))){
var inst_25408 = (state_25425[(2)]);
var state_25425__$1 = state_25425;
var statearr_25449_25511 = state_25425__$1;
(statearr_25449_25511[(2)] = inst_25408);

(statearr_25449_25511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25426 === (8))){
var inst_25394 = cljs.core.async.close_BANG_.call(null,to);
var state_25425__$1 = state_25425;
var statearr_25450_25512 = state_25425__$1;
(statearr_25450_25512[(2)] = inst_25394);

(statearr_25450_25512[(1)] = (10));


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
});})(c__24908__auto__,jobs,results,process,async))
;
return ((function (switch__24796__auto__,c__24908__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1 = (function (state_25425){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__24800__auto__ = e25455;
var statearr_25456_25513 = state_25425;
(statearr_25456_25513[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25514 = state_25425;
state_25425 = G__25514;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__ = function(state_25425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1.call(this,state_25425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__,jobs,results,process,async))
})();
var state__24910__auto__ = (function (){var statearr_25457 = f__24909__auto__.call(null);
(statearr_25457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__,jobs,results,process,async))
);

return c__24908__auto__;
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
var args25515 = [];
var len__22859__auto___25518 = arguments.length;
var i__22860__auto___25519 = (0);
while(true){
if((i__22860__auto___25519 < len__22859__auto___25518)){
args25515.push((arguments[i__22860__auto___25519]));

var G__25520 = (i__22860__auto___25519 + (1));
i__22860__auto___25519 = G__25520;
continue;
} else {
}
break;
}

var G__25517 = args25515.length;
switch (G__25517) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25515.length)].join('')));

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
var args25522 = [];
var len__22859__auto___25525 = arguments.length;
var i__22860__auto___25526 = (0);
while(true){
if((i__22860__auto___25526 < len__22859__auto___25525)){
args25522.push((arguments[i__22860__auto___25526]));

var G__25527 = (i__22860__auto___25526 + (1));
i__22860__auto___25526 = G__25527;
continue;
} else {
}
break;
}

var G__25524 = args25522.length;
switch (G__25524) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25522.length)].join('')));

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
var args25529 = [];
var len__22859__auto___25582 = arguments.length;
var i__22860__auto___25583 = (0);
while(true){
if((i__22860__auto___25583 < len__22859__auto___25582)){
args25529.push((arguments[i__22860__auto___25583]));

var G__25584 = (i__22860__auto___25583 + (1));
i__22860__auto___25583 = G__25584;
continue;
} else {
}
break;
}

var G__25531 = args25529.length;
switch (G__25531) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25529.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24908__auto___25586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___25586,tc,fc){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___25586,tc,fc){
return (function (state_25557){
var state_val_25558 = (state_25557[(1)]);
if((state_val_25558 === (7))){
var inst_25553 = (state_25557[(2)]);
var state_25557__$1 = state_25557;
var statearr_25559_25587 = state_25557__$1;
(statearr_25559_25587[(2)] = inst_25553);

(statearr_25559_25587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (1))){
var state_25557__$1 = state_25557;
var statearr_25560_25588 = state_25557__$1;
(statearr_25560_25588[(2)] = null);

(statearr_25560_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (4))){
var inst_25534 = (state_25557[(7)]);
var inst_25534__$1 = (state_25557[(2)]);
var inst_25535 = (inst_25534__$1 == null);
var state_25557__$1 = (function (){var statearr_25561 = state_25557;
(statearr_25561[(7)] = inst_25534__$1);

return statearr_25561;
})();
if(cljs.core.truth_(inst_25535)){
var statearr_25562_25589 = state_25557__$1;
(statearr_25562_25589[(1)] = (5));

} else {
var statearr_25563_25590 = state_25557__$1;
(statearr_25563_25590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (13))){
var state_25557__$1 = state_25557;
var statearr_25564_25591 = state_25557__$1;
(statearr_25564_25591[(2)] = null);

(statearr_25564_25591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (6))){
var inst_25534 = (state_25557[(7)]);
var inst_25540 = p.call(null,inst_25534);
var state_25557__$1 = state_25557;
if(cljs.core.truth_(inst_25540)){
var statearr_25565_25592 = state_25557__$1;
(statearr_25565_25592[(1)] = (9));

} else {
var statearr_25566_25593 = state_25557__$1;
(statearr_25566_25593[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (3))){
var inst_25555 = (state_25557[(2)]);
var state_25557__$1 = state_25557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25557__$1,inst_25555);
} else {
if((state_val_25558 === (12))){
var state_25557__$1 = state_25557;
var statearr_25567_25594 = state_25557__$1;
(statearr_25567_25594[(2)] = null);

(statearr_25567_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (2))){
var state_25557__$1 = state_25557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25557__$1,(4),ch);
} else {
if((state_val_25558 === (11))){
var inst_25534 = (state_25557[(7)]);
var inst_25544 = (state_25557[(2)]);
var state_25557__$1 = state_25557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25557__$1,(8),inst_25544,inst_25534);
} else {
if((state_val_25558 === (9))){
var state_25557__$1 = state_25557;
var statearr_25568_25595 = state_25557__$1;
(statearr_25568_25595[(2)] = tc);

(statearr_25568_25595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (5))){
var inst_25537 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25538 = cljs.core.async.close_BANG_.call(null,fc);
var state_25557__$1 = (function (){var statearr_25569 = state_25557;
(statearr_25569[(8)] = inst_25537);

return statearr_25569;
})();
var statearr_25570_25596 = state_25557__$1;
(statearr_25570_25596[(2)] = inst_25538);

(statearr_25570_25596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (14))){
var inst_25551 = (state_25557[(2)]);
var state_25557__$1 = state_25557;
var statearr_25571_25597 = state_25557__$1;
(statearr_25571_25597[(2)] = inst_25551);

(statearr_25571_25597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (10))){
var state_25557__$1 = state_25557;
var statearr_25572_25598 = state_25557__$1;
(statearr_25572_25598[(2)] = fc);

(statearr_25572_25598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25558 === (8))){
var inst_25546 = (state_25557[(2)]);
var state_25557__$1 = state_25557;
if(cljs.core.truth_(inst_25546)){
var statearr_25573_25599 = state_25557__$1;
(statearr_25573_25599[(1)] = (12));

} else {
var statearr_25574_25600 = state_25557__$1;
(statearr_25574_25600[(1)] = (13));

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
});})(c__24908__auto___25586,tc,fc))
;
return ((function (switch__24796__auto__,c__24908__auto___25586,tc,fc){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_25578 = [null,null,null,null,null,null,null,null,null];
(statearr_25578[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_25578[(1)] = (1));

return statearr_25578;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_25557){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25579){if((e25579 instanceof Object)){
var ex__24800__auto__ = e25579;
var statearr_25580_25601 = state_25557;
(statearr_25580_25601[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25602 = state_25557;
state_25557 = G__25602;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_25557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_25557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___25586,tc,fc))
})();
var state__24910__auto__ = (function (){var statearr_25581 = f__24909__auto__.call(null);
(statearr_25581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___25586);

return statearr_25581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___25586,tc,fc))
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
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_25666){
var state_val_25667 = (state_25666[(1)]);
if((state_val_25667 === (7))){
var inst_25662 = (state_25666[(2)]);
var state_25666__$1 = state_25666;
var statearr_25668_25689 = state_25666__$1;
(statearr_25668_25689[(2)] = inst_25662);

(statearr_25668_25689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (1))){
var inst_25646 = init;
var state_25666__$1 = (function (){var statearr_25669 = state_25666;
(statearr_25669[(7)] = inst_25646);

return statearr_25669;
})();
var statearr_25670_25690 = state_25666__$1;
(statearr_25670_25690[(2)] = null);

(statearr_25670_25690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (4))){
var inst_25649 = (state_25666[(8)]);
var inst_25649__$1 = (state_25666[(2)]);
var inst_25650 = (inst_25649__$1 == null);
var state_25666__$1 = (function (){var statearr_25671 = state_25666;
(statearr_25671[(8)] = inst_25649__$1);

return statearr_25671;
})();
if(cljs.core.truth_(inst_25650)){
var statearr_25672_25691 = state_25666__$1;
(statearr_25672_25691[(1)] = (5));

} else {
var statearr_25673_25692 = state_25666__$1;
(statearr_25673_25692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (6))){
var inst_25649 = (state_25666[(8)]);
var inst_25653 = (state_25666[(9)]);
var inst_25646 = (state_25666[(7)]);
var inst_25653__$1 = f.call(null,inst_25646,inst_25649);
var inst_25654 = cljs.core.reduced_QMARK_.call(null,inst_25653__$1);
var state_25666__$1 = (function (){var statearr_25674 = state_25666;
(statearr_25674[(9)] = inst_25653__$1);

return statearr_25674;
})();
if(inst_25654){
var statearr_25675_25693 = state_25666__$1;
(statearr_25675_25693[(1)] = (8));

} else {
var statearr_25676_25694 = state_25666__$1;
(statearr_25676_25694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (3))){
var inst_25664 = (state_25666[(2)]);
var state_25666__$1 = state_25666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25666__$1,inst_25664);
} else {
if((state_val_25667 === (2))){
var state_25666__$1 = state_25666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25666__$1,(4),ch);
} else {
if((state_val_25667 === (9))){
var inst_25653 = (state_25666[(9)]);
var inst_25646 = inst_25653;
var state_25666__$1 = (function (){var statearr_25677 = state_25666;
(statearr_25677[(7)] = inst_25646);

return statearr_25677;
})();
var statearr_25678_25695 = state_25666__$1;
(statearr_25678_25695[(2)] = null);

(statearr_25678_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (5))){
var inst_25646 = (state_25666[(7)]);
var state_25666__$1 = state_25666;
var statearr_25679_25696 = state_25666__$1;
(statearr_25679_25696[(2)] = inst_25646);

(statearr_25679_25696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (10))){
var inst_25660 = (state_25666[(2)]);
var state_25666__$1 = state_25666;
var statearr_25680_25697 = state_25666__$1;
(statearr_25680_25697[(2)] = inst_25660);

(statearr_25680_25697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25667 === (8))){
var inst_25653 = (state_25666[(9)]);
var inst_25656 = cljs.core.deref.call(null,inst_25653);
var state_25666__$1 = state_25666;
var statearr_25681_25698 = state_25666__$1;
(statearr_25681_25698[(2)] = inst_25656);

(statearr_25681_25698[(1)] = (10));


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
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24797__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24797__auto____0 = (function (){
var statearr_25685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25685[(0)] = cljs$core$async$reduce_$_state_machine__24797__auto__);

(statearr_25685[(1)] = (1));

return statearr_25685;
});
var cljs$core$async$reduce_$_state_machine__24797__auto____1 = (function (state_25666){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25686){if((e25686 instanceof Object)){
var ex__24800__auto__ = e25686;
var statearr_25687_25699 = state_25666;
(statearr_25687_25699[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25700 = state_25666;
state_25666 = G__25700;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24797__auto__ = function(state_25666){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24797__auto____1.call(this,state_25666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24797__auto____0;
cljs$core$async$reduce_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24797__auto____1;
return cljs$core$async$reduce_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_25688 = f__24909__auto__.call(null);
(statearr_25688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_25688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
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
var args25701 = [];
var len__22859__auto___25753 = arguments.length;
var i__22860__auto___25754 = (0);
while(true){
if((i__22860__auto___25754 < len__22859__auto___25753)){
args25701.push((arguments[i__22860__auto___25754]));

var G__25755 = (i__22860__auto___25754 + (1));
i__22860__auto___25754 = G__25755;
continue;
} else {
}
break;
}

var G__25703 = args25701.length;
switch (G__25703) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25701.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_25728){
var state_val_25729 = (state_25728[(1)]);
if((state_val_25729 === (7))){
var inst_25710 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25730_25757 = state_25728__$1;
(statearr_25730_25757[(2)] = inst_25710);

(statearr_25730_25757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (1))){
var inst_25704 = cljs.core.seq.call(null,coll);
var inst_25705 = inst_25704;
var state_25728__$1 = (function (){var statearr_25731 = state_25728;
(statearr_25731[(7)] = inst_25705);

return statearr_25731;
})();
var statearr_25732_25758 = state_25728__$1;
(statearr_25732_25758[(2)] = null);

(statearr_25732_25758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (4))){
var inst_25705 = (state_25728[(7)]);
var inst_25708 = cljs.core.first.call(null,inst_25705);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25728__$1,(7),ch,inst_25708);
} else {
if((state_val_25729 === (13))){
var inst_25722 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25733_25759 = state_25728__$1;
(statearr_25733_25759[(2)] = inst_25722);

(statearr_25733_25759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (6))){
var inst_25713 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
if(cljs.core.truth_(inst_25713)){
var statearr_25734_25760 = state_25728__$1;
(statearr_25734_25760[(1)] = (8));

} else {
var statearr_25735_25761 = state_25728__$1;
(statearr_25735_25761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (3))){
var inst_25726 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25728__$1,inst_25726);
} else {
if((state_val_25729 === (12))){
var state_25728__$1 = state_25728;
var statearr_25736_25762 = state_25728__$1;
(statearr_25736_25762[(2)] = null);

(statearr_25736_25762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (2))){
var inst_25705 = (state_25728[(7)]);
var state_25728__$1 = state_25728;
if(cljs.core.truth_(inst_25705)){
var statearr_25737_25763 = state_25728__$1;
(statearr_25737_25763[(1)] = (4));

} else {
var statearr_25738_25764 = state_25728__$1;
(statearr_25738_25764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (11))){
var inst_25719 = cljs.core.async.close_BANG_.call(null,ch);
var state_25728__$1 = state_25728;
var statearr_25739_25765 = state_25728__$1;
(statearr_25739_25765[(2)] = inst_25719);

(statearr_25739_25765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (9))){
var state_25728__$1 = state_25728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25740_25766 = state_25728__$1;
(statearr_25740_25766[(1)] = (11));

} else {
var statearr_25741_25767 = state_25728__$1;
(statearr_25741_25767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (5))){
var inst_25705 = (state_25728[(7)]);
var state_25728__$1 = state_25728;
var statearr_25742_25768 = state_25728__$1;
(statearr_25742_25768[(2)] = inst_25705);

(statearr_25742_25768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (10))){
var inst_25724 = (state_25728[(2)]);
var state_25728__$1 = state_25728;
var statearr_25743_25769 = state_25728__$1;
(statearr_25743_25769[(2)] = inst_25724);

(statearr_25743_25769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25729 === (8))){
var inst_25705 = (state_25728[(7)]);
var inst_25715 = cljs.core.next.call(null,inst_25705);
var inst_25705__$1 = inst_25715;
var state_25728__$1 = (function (){var statearr_25744 = state_25728;
(statearr_25744[(7)] = inst_25705__$1);

return statearr_25744;
})();
var statearr_25745_25770 = state_25728__$1;
(statearr_25745_25770[(2)] = null);

(statearr_25745_25770[(1)] = (2));


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
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_25749 = [null,null,null,null,null,null,null,null];
(statearr_25749[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_25749[(1)] = (1));

return statearr_25749;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_25728){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_25728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e25750){if((e25750 instanceof Object)){
var ex__24800__auto__ = e25750;
var statearr_25751_25771 = state_25728;
(statearr_25751_25771[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25772 = state_25728;
state_25728 = G__25772;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_25728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_25728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_25752 = f__24909__auto__.call(null);
(statearr_25752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_25752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
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
var x__22451__auto__ = (((_ == null))?null:_);
var m__22452__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,_);
} else {
var m__22452__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,_);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22452__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,ch);
} else {
var m__22452__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,ch);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m);
} else {
var m__22452__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25994 = (function (mult,ch,cs,meta25995){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25995 = meta25995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25996,meta25995__$1){
var self__ = this;
var _25996__$1 = this;
return (new cljs.core.async.t_cljs$core$async25994(self__.mult,self__.ch,self__.cs,meta25995__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25996){
var self__ = this;
var _25996__$1 = this;
return self__.meta25995;
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25995","meta25995",535631574,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25994";

cljs.core.async.t_cljs$core$async25994.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async25994");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25994 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25994(mult__$1,ch__$1,cs__$1,meta25995){
return (new cljs.core.async.t_cljs$core$async25994(mult__$1,ch__$1,cs__$1,meta25995));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25994(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24908__auto___26215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___26215,cs,m,dchan,dctr,done){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___26215,cs,m,dchan,dctr,done){
return (function (state_26127){
var state_val_26128 = (state_26127[(1)]);
if((state_val_26128 === (7))){
var inst_26123 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26129_26216 = state_26127__$1;
(statearr_26129_26216[(2)] = inst_26123);

(statearr_26129_26216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (20))){
var inst_26028 = (state_26127[(7)]);
var inst_26038 = cljs.core.first.call(null,inst_26028);
var inst_26039 = cljs.core.nth.call(null,inst_26038,(0),null);
var inst_26040 = cljs.core.nth.call(null,inst_26038,(1),null);
var state_26127__$1 = (function (){var statearr_26130 = state_26127;
(statearr_26130[(8)] = inst_26039);

return statearr_26130;
})();
if(cljs.core.truth_(inst_26040)){
var statearr_26131_26217 = state_26127__$1;
(statearr_26131_26217[(1)] = (22));

} else {
var statearr_26132_26218 = state_26127__$1;
(statearr_26132_26218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (27))){
var inst_25999 = (state_26127[(9)]);
var inst_26068 = (state_26127[(10)]);
var inst_26070 = (state_26127[(11)]);
var inst_26075 = (state_26127[(12)]);
var inst_26075__$1 = cljs.core._nth.call(null,inst_26068,inst_26070);
var inst_26076 = cljs.core.async.put_BANG_.call(null,inst_26075__$1,inst_25999,done);
var state_26127__$1 = (function (){var statearr_26133 = state_26127;
(statearr_26133[(12)] = inst_26075__$1);

return statearr_26133;
})();
if(cljs.core.truth_(inst_26076)){
var statearr_26134_26219 = state_26127__$1;
(statearr_26134_26219[(1)] = (30));

} else {
var statearr_26135_26220 = state_26127__$1;
(statearr_26135_26220[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (1))){
var state_26127__$1 = state_26127;
var statearr_26136_26221 = state_26127__$1;
(statearr_26136_26221[(2)] = null);

(statearr_26136_26221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (24))){
var inst_26028 = (state_26127[(7)]);
var inst_26045 = (state_26127[(2)]);
var inst_26046 = cljs.core.next.call(null,inst_26028);
var inst_26008 = inst_26046;
var inst_26009 = null;
var inst_26010 = (0);
var inst_26011 = (0);
var state_26127__$1 = (function (){var statearr_26137 = state_26127;
(statearr_26137[(13)] = inst_26045);

(statearr_26137[(14)] = inst_26010);

(statearr_26137[(15)] = inst_26009);

(statearr_26137[(16)] = inst_26008);

(statearr_26137[(17)] = inst_26011);

return statearr_26137;
})();
var statearr_26138_26222 = state_26127__$1;
(statearr_26138_26222[(2)] = null);

(statearr_26138_26222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (39))){
var state_26127__$1 = state_26127;
var statearr_26142_26223 = state_26127__$1;
(statearr_26142_26223[(2)] = null);

(statearr_26142_26223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (4))){
var inst_25999 = (state_26127[(9)]);
var inst_25999__$1 = (state_26127[(2)]);
var inst_26000 = (inst_25999__$1 == null);
var state_26127__$1 = (function (){var statearr_26143 = state_26127;
(statearr_26143[(9)] = inst_25999__$1);

return statearr_26143;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26144_26224 = state_26127__$1;
(statearr_26144_26224[(1)] = (5));

} else {
var statearr_26145_26225 = state_26127__$1;
(statearr_26145_26225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (15))){
var inst_26010 = (state_26127[(14)]);
var inst_26009 = (state_26127[(15)]);
var inst_26008 = (state_26127[(16)]);
var inst_26011 = (state_26127[(17)]);
var inst_26024 = (state_26127[(2)]);
var inst_26025 = (inst_26011 + (1));
var tmp26139 = inst_26010;
var tmp26140 = inst_26009;
var tmp26141 = inst_26008;
var inst_26008__$1 = tmp26141;
var inst_26009__$1 = tmp26140;
var inst_26010__$1 = tmp26139;
var inst_26011__$1 = inst_26025;
var state_26127__$1 = (function (){var statearr_26146 = state_26127;
(statearr_26146[(18)] = inst_26024);

(statearr_26146[(14)] = inst_26010__$1);

(statearr_26146[(15)] = inst_26009__$1);

(statearr_26146[(16)] = inst_26008__$1);

(statearr_26146[(17)] = inst_26011__$1);

return statearr_26146;
})();
var statearr_26147_26226 = state_26127__$1;
(statearr_26147_26226[(2)] = null);

(statearr_26147_26226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (21))){
var inst_26049 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26151_26227 = state_26127__$1;
(statearr_26151_26227[(2)] = inst_26049);

(statearr_26151_26227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (31))){
var inst_26075 = (state_26127[(12)]);
var inst_26079 = done.call(null,null);
var inst_26080 = cljs.core.async.untap_STAR_.call(null,m,inst_26075);
var state_26127__$1 = (function (){var statearr_26152 = state_26127;
(statearr_26152[(19)] = inst_26079);

return statearr_26152;
})();
var statearr_26153_26228 = state_26127__$1;
(statearr_26153_26228[(2)] = inst_26080);

(statearr_26153_26228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (32))){
var inst_26067 = (state_26127[(20)]);
var inst_26068 = (state_26127[(10)]);
var inst_26070 = (state_26127[(11)]);
var inst_26069 = (state_26127[(21)]);
var inst_26082 = (state_26127[(2)]);
var inst_26083 = (inst_26070 + (1));
var tmp26148 = inst_26067;
var tmp26149 = inst_26068;
var tmp26150 = inst_26069;
var inst_26067__$1 = tmp26148;
var inst_26068__$1 = tmp26149;
var inst_26069__$1 = tmp26150;
var inst_26070__$1 = inst_26083;
var state_26127__$1 = (function (){var statearr_26154 = state_26127;
(statearr_26154[(20)] = inst_26067__$1);

(statearr_26154[(10)] = inst_26068__$1);

(statearr_26154[(22)] = inst_26082);

(statearr_26154[(11)] = inst_26070__$1);

(statearr_26154[(21)] = inst_26069__$1);

return statearr_26154;
})();
var statearr_26155_26229 = state_26127__$1;
(statearr_26155_26229[(2)] = null);

(statearr_26155_26229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (40))){
var inst_26095 = (state_26127[(23)]);
var inst_26099 = done.call(null,null);
var inst_26100 = cljs.core.async.untap_STAR_.call(null,m,inst_26095);
var state_26127__$1 = (function (){var statearr_26156 = state_26127;
(statearr_26156[(24)] = inst_26099);

return statearr_26156;
})();
var statearr_26157_26230 = state_26127__$1;
(statearr_26157_26230[(2)] = inst_26100);

(statearr_26157_26230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (33))){
var inst_26086 = (state_26127[(25)]);
var inst_26088 = cljs.core.chunked_seq_QMARK_.call(null,inst_26086);
var state_26127__$1 = state_26127;
if(inst_26088){
var statearr_26158_26231 = state_26127__$1;
(statearr_26158_26231[(1)] = (36));

} else {
var statearr_26159_26232 = state_26127__$1;
(statearr_26159_26232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (13))){
var inst_26018 = (state_26127[(26)]);
var inst_26021 = cljs.core.async.close_BANG_.call(null,inst_26018);
var state_26127__$1 = state_26127;
var statearr_26160_26233 = state_26127__$1;
(statearr_26160_26233[(2)] = inst_26021);

(statearr_26160_26233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (22))){
var inst_26039 = (state_26127[(8)]);
var inst_26042 = cljs.core.async.close_BANG_.call(null,inst_26039);
var state_26127__$1 = state_26127;
var statearr_26161_26234 = state_26127__$1;
(statearr_26161_26234[(2)] = inst_26042);

(statearr_26161_26234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (36))){
var inst_26086 = (state_26127[(25)]);
var inst_26090 = cljs.core.chunk_first.call(null,inst_26086);
var inst_26091 = cljs.core.chunk_rest.call(null,inst_26086);
var inst_26092 = cljs.core.count.call(null,inst_26090);
var inst_26067 = inst_26091;
var inst_26068 = inst_26090;
var inst_26069 = inst_26092;
var inst_26070 = (0);
var state_26127__$1 = (function (){var statearr_26162 = state_26127;
(statearr_26162[(20)] = inst_26067);

(statearr_26162[(10)] = inst_26068);

(statearr_26162[(11)] = inst_26070);

(statearr_26162[(21)] = inst_26069);

return statearr_26162;
})();
var statearr_26163_26235 = state_26127__$1;
(statearr_26163_26235[(2)] = null);

(statearr_26163_26235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (41))){
var inst_26086 = (state_26127[(25)]);
var inst_26102 = (state_26127[(2)]);
var inst_26103 = cljs.core.next.call(null,inst_26086);
var inst_26067 = inst_26103;
var inst_26068 = null;
var inst_26069 = (0);
var inst_26070 = (0);
var state_26127__$1 = (function (){var statearr_26164 = state_26127;
(statearr_26164[(20)] = inst_26067);

(statearr_26164[(10)] = inst_26068);

(statearr_26164[(11)] = inst_26070);

(statearr_26164[(27)] = inst_26102);

(statearr_26164[(21)] = inst_26069);

return statearr_26164;
})();
var statearr_26165_26236 = state_26127__$1;
(statearr_26165_26236[(2)] = null);

(statearr_26165_26236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (43))){
var state_26127__$1 = state_26127;
var statearr_26166_26237 = state_26127__$1;
(statearr_26166_26237[(2)] = null);

(statearr_26166_26237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (29))){
var inst_26111 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26167_26238 = state_26127__$1;
(statearr_26167_26238[(2)] = inst_26111);

(statearr_26167_26238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (44))){
var inst_26120 = (state_26127[(2)]);
var state_26127__$1 = (function (){var statearr_26168 = state_26127;
(statearr_26168[(28)] = inst_26120);

return statearr_26168;
})();
var statearr_26169_26239 = state_26127__$1;
(statearr_26169_26239[(2)] = null);

(statearr_26169_26239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (6))){
var inst_26059 = (state_26127[(29)]);
var inst_26058 = cljs.core.deref.call(null,cs);
var inst_26059__$1 = cljs.core.keys.call(null,inst_26058);
var inst_26060 = cljs.core.count.call(null,inst_26059__$1);
var inst_26061 = cljs.core.reset_BANG_.call(null,dctr,inst_26060);
var inst_26066 = cljs.core.seq.call(null,inst_26059__$1);
var inst_26067 = inst_26066;
var inst_26068 = null;
var inst_26069 = (0);
var inst_26070 = (0);
var state_26127__$1 = (function (){var statearr_26170 = state_26127;
(statearr_26170[(20)] = inst_26067);

(statearr_26170[(30)] = inst_26061);

(statearr_26170[(10)] = inst_26068);

(statearr_26170[(11)] = inst_26070);

(statearr_26170[(29)] = inst_26059__$1);

(statearr_26170[(21)] = inst_26069);

return statearr_26170;
})();
var statearr_26171_26240 = state_26127__$1;
(statearr_26171_26240[(2)] = null);

(statearr_26171_26240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (28))){
var inst_26067 = (state_26127[(20)]);
var inst_26086 = (state_26127[(25)]);
var inst_26086__$1 = cljs.core.seq.call(null,inst_26067);
var state_26127__$1 = (function (){var statearr_26172 = state_26127;
(statearr_26172[(25)] = inst_26086__$1);

return statearr_26172;
})();
if(inst_26086__$1){
var statearr_26173_26241 = state_26127__$1;
(statearr_26173_26241[(1)] = (33));

} else {
var statearr_26174_26242 = state_26127__$1;
(statearr_26174_26242[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (25))){
var inst_26070 = (state_26127[(11)]);
var inst_26069 = (state_26127[(21)]);
var inst_26072 = (inst_26070 < inst_26069);
var inst_26073 = inst_26072;
var state_26127__$1 = state_26127;
if(cljs.core.truth_(inst_26073)){
var statearr_26175_26243 = state_26127__$1;
(statearr_26175_26243[(1)] = (27));

} else {
var statearr_26176_26244 = state_26127__$1;
(statearr_26176_26244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (34))){
var state_26127__$1 = state_26127;
var statearr_26177_26245 = state_26127__$1;
(statearr_26177_26245[(2)] = null);

(statearr_26177_26245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (17))){
var state_26127__$1 = state_26127;
var statearr_26178_26246 = state_26127__$1;
(statearr_26178_26246[(2)] = null);

(statearr_26178_26246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (3))){
var inst_26125 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26127__$1,inst_26125);
} else {
if((state_val_26128 === (12))){
var inst_26054 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26179_26247 = state_26127__$1;
(statearr_26179_26247[(2)] = inst_26054);

(statearr_26179_26247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (2))){
var state_26127__$1 = state_26127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26127__$1,(4),ch);
} else {
if((state_val_26128 === (23))){
var state_26127__$1 = state_26127;
var statearr_26180_26248 = state_26127__$1;
(statearr_26180_26248[(2)] = null);

(statearr_26180_26248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (35))){
var inst_26109 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26181_26249 = state_26127__$1;
(statearr_26181_26249[(2)] = inst_26109);

(statearr_26181_26249[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (19))){
var inst_26028 = (state_26127[(7)]);
var inst_26032 = cljs.core.chunk_first.call(null,inst_26028);
var inst_26033 = cljs.core.chunk_rest.call(null,inst_26028);
var inst_26034 = cljs.core.count.call(null,inst_26032);
var inst_26008 = inst_26033;
var inst_26009 = inst_26032;
var inst_26010 = inst_26034;
var inst_26011 = (0);
var state_26127__$1 = (function (){var statearr_26182 = state_26127;
(statearr_26182[(14)] = inst_26010);

(statearr_26182[(15)] = inst_26009);

(statearr_26182[(16)] = inst_26008);

(statearr_26182[(17)] = inst_26011);

return statearr_26182;
})();
var statearr_26183_26250 = state_26127__$1;
(statearr_26183_26250[(2)] = null);

(statearr_26183_26250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (11))){
var inst_26008 = (state_26127[(16)]);
var inst_26028 = (state_26127[(7)]);
var inst_26028__$1 = cljs.core.seq.call(null,inst_26008);
var state_26127__$1 = (function (){var statearr_26184 = state_26127;
(statearr_26184[(7)] = inst_26028__$1);

return statearr_26184;
})();
if(inst_26028__$1){
var statearr_26185_26251 = state_26127__$1;
(statearr_26185_26251[(1)] = (16));

} else {
var statearr_26186_26252 = state_26127__$1;
(statearr_26186_26252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (9))){
var inst_26056 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26187_26253 = state_26127__$1;
(statearr_26187_26253[(2)] = inst_26056);

(statearr_26187_26253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (5))){
var inst_26006 = cljs.core.deref.call(null,cs);
var inst_26007 = cljs.core.seq.call(null,inst_26006);
var inst_26008 = inst_26007;
var inst_26009 = null;
var inst_26010 = (0);
var inst_26011 = (0);
var state_26127__$1 = (function (){var statearr_26188 = state_26127;
(statearr_26188[(14)] = inst_26010);

(statearr_26188[(15)] = inst_26009);

(statearr_26188[(16)] = inst_26008);

(statearr_26188[(17)] = inst_26011);

return statearr_26188;
})();
var statearr_26189_26254 = state_26127__$1;
(statearr_26189_26254[(2)] = null);

(statearr_26189_26254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (14))){
var state_26127__$1 = state_26127;
var statearr_26190_26255 = state_26127__$1;
(statearr_26190_26255[(2)] = null);

(statearr_26190_26255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (45))){
var inst_26117 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26191_26256 = state_26127__$1;
(statearr_26191_26256[(2)] = inst_26117);

(statearr_26191_26256[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (26))){
var inst_26059 = (state_26127[(29)]);
var inst_26113 = (state_26127[(2)]);
var inst_26114 = cljs.core.seq.call(null,inst_26059);
var state_26127__$1 = (function (){var statearr_26192 = state_26127;
(statearr_26192[(31)] = inst_26113);

return statearr_26192;
})();
if(inst_26114){
var statearr_26193_26257 = state_26127__$1;
(statearr_26193_26257[(1)] = (42));

} else {
var statearr_26194_26258 = state_26127__$1;
(statearr_26194_26258[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (16))){
var inst_26028 = (state_26127[(7)]);
var inst_26030 = cljs.core.chunked_seq_QMARK_.call(null,inst_26028);
var state_26127__$1 = state_26127;
if(inst_26030){
var statearr_26195_26259 = state_26127__$1;
(statearr_26195_26259[(1)] = (19));

} else {
var statearr_26196_26260 = state_26127__$1;
(statearr_26196_26260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (38))){
var inst_26106 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26197_26261 = state_26127__$1;
(statearr_26197_26261[(2)] = inst_26106);

(statearr_26197_26261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (30))){
var state_26127__$1 = state_26127;
var statearr_26198_26262 = state_26127__$1;
(statearr_26198_26262[(2)] = null);

(statearr_26198_26262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (10))){
var inst_26009 = (state_26127[(15)]);
var inst_26011 = (state_26127[(17)]);
var inst_26017 = cljs.core._nth.call(null,inst_26009,inst_26011);
var inst_26018 = cljs.core.nth.call(null,inst_26017,(0),null);
var inst_26019 = cljs.core.nth.call(null,inst_26017,(1),null);
var state_26127__$1 = (function (){var statearr_26199 = state_26127;
(statearr_26199[(26)] = inst_26018);

return statearr_26199;
})();
if(cljs.core.truth_(inst_26019)){
var statearr_26200_26263 = state_26127__$1;
(statearr_26200_26263[(1)] = (13));

} else {
var statearr_26201_26264 = state_26127__$1;
(statearr_26201_26264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (18))){
var inst_26052 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26202_26265 = state_26127__$1;
(statearr_26202_26265[(2)] = inst_26052);

(statearr_26202_26265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (42))){
var state_26127__$1 = state_26127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26127__$1,(45),dchan);
} else {
if((state_val_26128 === (37))){
var inst_25999 = (state_26127[(9)]);
var inst_26095 = (state_26127[(23)]);
var inst_26086 = (state_26127[(25)]);
var inst_26095__$1 = cljs.core.first.call(null,inst_26086);
var inst_26096 = cljs.core.async.put_BANG_.call(null,inst_26095__$1,inst_25999,done);
var state_26127__$1 = (function (){var statearr_26203 = state_26127;
(statearr_26203[(23)] = inst_26095__$1);

return statearr_26203;
})();
if(cljs.core.truth_(inst_26096)){
var statearr_26204_26266 = state_26127__$1;
(statearr_26204_26266[(1)] = (39));

} else {
var statearr_26205_26267 = state_26127__$1;
(statearr_26205_26267[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (8))){
var inst_26010 = (state_26127[(14)]);
var inst_26011 = (state_26127[(17)]);
var inst_26013 = (inst_26011 < inst_26010);
var inst_26014 = inst_26013;
var state_26127__$1 = state_26127;
if(cljs.core.truth_(inst_26014)){
var statearr_26206_26268 = state_26127__$1;
(statearr_26206_26268[(1)] = (10));

} else {
var statearr_26207_26269 = state_26127__$1;
(statearr_26207_26269[(1)] = (11));

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
});})(c__24908__auto___26215,cs,m,dchan,dctr,done))
;
return ((function (switch__24796__auto__,c__24908__auto___26215,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24797__auto__ = null;
var cljs$core$async$mult_$_state_machine__24797__auto____0 = (function (){
var statearr_26211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26211[(0)] = cljs$core$async$mult_$_state_machine__24797__auto__);

(statearr_26211[(1)] = (1));

return statearr_26211;
});
var cljs$core$async$mult_$_state_machine__24797__auto____1 = (function (state_26127){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_26127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e26212){if((e26212 instanceof Object)){
var ex__24800__auto__ = e26212;
var statearr_26213_26270 = state_26127;
(statearr_26213_26270[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26271 = state_26127;
state_26127 = G__26271;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24797__auto__ = function(state_26127){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24797__auto____1.call(this,state_26127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24797__auto____0;
cljs$core$async$mult_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24797__auto____1;
return cljs$core$async$mult_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___26215,cs,m,dchan,dctr,done))
})();
var state__24910__auto__ = (function (){var statearr_26214 = f__24909__auto__.call(null);
(statearr_26214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___26215);

return statearr_26214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___26215,cs,m,dchan,dctr,done))
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
var args26272 = [];
var len__22859__auto___26275 = arguments.length;
var i__22860__auto___26276 = (0);
while(true){
if((i__22860__auto___26276 < len__22859__auto___26275)){
args26272.push((arguments[i__22860__auto___26276]));

var G__26277 = (i__22860__auto___26276 + (1));
i__22860__auto___26276 = G__26277;
continue;
} else {
}
break;
}

var G__26274 = args26272.length;
switch (G__26274) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26272.length)].join('')));

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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,ch);
} else {
var m__22452__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,ch);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,ch);
} else {
var m__22452__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,ch);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m);
} else {
var m__22452__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,state_map);
} else {
var m__22452__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,state_map);
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
var x__22451__auto__ = (((m == null))?null:m);
var m__22452__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,m,mode);
} else {
var m__22452__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22866__auto__ = [];
var len__22859__auto___26289 = arguments.length;
var i__22860__auto___26290 = (0);
while(true){
if((i__22860__auto___26290 < len__22859__auto___26289)){
args__22866__auto__.push((arguments[i__22860__auto___26290]));

var G__26291 = (i__22860__auto___26290 + (1));
i__22860__auto___26290 = G__26291;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((3) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22867__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26283){
var map__26284 = p__26283;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26284):map__26284);
var opts = map__26284__$1;
var statearr_26286_26292 = state;
(statearr_26286_26292[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26284,map__26284__$1,opts){
return (function (val){
var statearr_26287_26293 = state;
(statearr_26287_26293[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26284,map__26284__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26288_26294 = state;
(statearr_26288_26294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26279){
var G__26280 = cljs.core.first.call(null,seq26279);
var seq26279__$1 = cljs.core.next.call(null,seq26279);
var G__26281 = cljs.core.first.call(null,seq26279__$1);
var seq26279__$2 = cljs.core.next.call(null,seq26279__$1);
var G__26282 = cljs.core.first.call(null,seq26279__$2);
var seq26279__$3 = cljs.core.next.call(null,seq26279__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26280,G__26281,G__26282,seq26279__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26458 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26459){
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
this.meta26459 = meta26459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26460,meta26459__$1){
var self__ = this;
var _26460__$1 = this;
return (new cljs.core.async.t_cljs$core$async26458(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26459__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26460){
var self__ = this;
var _26460__$1 = this;
return self__.meta26459;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26458.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26459","meta26459",-718476638,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26458";

cljs.core.async.t_cljs$core$async26458.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async26458");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26458 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26458(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26459){
return (new cljs.core.async.t_cljs$core$async26458(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26459));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26458(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24908__auto___26621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26558){
var state_val_26559 = (state_26558[(1)]);
if((state_val_26559 === (7))){
var inst_26476 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26560_26622 = state_26558__$1;
(statearr_26560_26622[(2)] = inst_26476);

(statearr_26560_26622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (20))){
var inst_26488 = (state_26558[(7)]);
var state_26558__$1 = state_26558;
var statearr_26561_26623 = state_26558__$1;
(statearr_26561_26623[(2)] = inst_26488);

(statearr_26561_26623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (27))){
var state_26558__$1 = state_26558;
var statearr_26562_26624 = state_26558__$1;
(statearr_26562_26624[(2)] = null);

(statearr_26562_26624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (1))){
var inst_26464 = (state_26558[(8)]);
var inst_26464__$1 = calc_state.call(null);
var inst_26466 = (inst_26464__$1 == null);
var inst_26467 = cljs.core.not.call(null,inst_26466);
var state_26558__$1 = (function (){var statearr_26563 = state_26558;
(statearr_26563[(8)] = inst_26464__$1);

return statearr_26563;
})();
if(inst_26467){
var statearr_26564_26625 = state_26558__$1;
(statearr_26564_26625[(1)] = (2));

} else {
var statearr_26565_26626 = state_26558__$1;
(statearr_26565_26626[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (24))){
var inst_26511 = (state_26558[(9)]);
var inst_26518 = (state_26558[(10)]);
var inst_26532 = (state_26558[(11)]);
var inst_26532__$1 = inst_26511.call(null,inst_26518);
var state_26558__$1 = (function (){var statearr_26566 = state_26558;
(statearr_26566[(11)] = inst_26532__$1);

return statearr_26566;
})();
if(cljs.core.truth_(inst_26532__$1)){
var statearr_26567_26627 = state_26558__$1;
(statearr_26567_26627[(1)] = (29));

} else {
var statearr_26568_26628 = state_26558__$1;
(statearr_26568_26628[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (4))){
var inst_26479 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26479)){
var statearr_26569_26629 = state_26558__$1;
(statearr_26569_26629[(1)] = (8));

} else {
var statearr_26570_26630 = state_26558__$1;
(statearr_26570_26630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (15))){
var inst_26505 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26505)){
var statearr_26571_26631 = state_26558__$1;
(statearr_26571_26631[(1)] = (19));

} else {
var statearr_26572_26632 = state_26558__$1;
(statearr_26572_26632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (21))){
var inst_26510 = (state_26558[(12)]);
var inst_26510__$1 = (state_26558[(2)]);
var inst_26511 = cljs.core.get.call(null,inst_26510__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26512 = cljs.core.get.call(null,inst_26510__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26513 = cljs.core.get.call(null,inst_26510__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26558__$1 = (function (){var statearr_26573 = state_26558;
(statearr_26573[(12)] = inst_26510__$1);

(statearr_26573[(9)] = inst_26511);

(statearr_26573[(13)] = inst_26512);

return statearr_26573;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26558__$1,(22),inst_26513);
} else {
if((state_val_26559 === (31))){
var inst_26540 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26540)){
var statearr_26574_26633 = state_26558__$1;
(statearr_26574_26633[(1)] = (32));

} else {
var statearr_26575_26634 = state_26558__$1;
(statearr_26575_26634[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (32))){
var inst_26517 = (state_26558[(14)]);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26558__$1,(35),out,inst_26517);
} else {
if((state_val_26559 === (33))){
var inst_26510 = (state_26558[(12)]);
var inst_26488 = inst_26510;
var state_26558__$1 = (function (){var statearr_26576 = state_26558;
(statearr_26576[(7)] = inst_26488);

return statearr_26576;
})();
var statearr_26577_26635 = state_26558__$1;
(statearr_26577_26635[(2)] = null);

(statearr_26577_26635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (13))){
var inst_26488 = (state_26558[(7)]);
var inst_26495 = inst_26488.cljs$lang$protocol_mask$partition0$;
var inst_26496 = (inst_26495 & (64));
var inst_26497 = inst_26488.cljs$core$ISeq$;
var inst_26498 = (inst_26496) || (inst_26497);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26498)){
var statearr_26578_26636 = state_26558__$1;
(statearr_26578_26636[(1)] = (16));

} else {
var statearr_26579_26637 = state_26558__$1;
(statearr_26579_26637[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (22))){
var inst_26517 = (state_26558[(14)]);
var inst_26518 = (state_26558[(10)]);
var inst_26516 = (state_26558[(2)]);
var inst_26517__$1 = cljs.core.nth.call(null,inst_26516,(0),null);
var inst_26518__$1 = cljs.core.nth.call(null,inst_26516,(1),null);
var inst_26519 = (inst_26517__$1 == null);
var inst_26520 = cljs.core._EQ_.call(null,inst_26518__$1,change);
var inst_26521 = (inst_26519) || (inst_26520);
var state_26558__$1 = (function (){var statearr_26580 = state_26558;
(statearr_26580[(14)] = inst_26517__$1);

(statearr_26580[(10)] = inst_26518__$1);

return statearr_26580;
})();
if(cljs.core.truth_(inst_26521)){
var statearr_26581_26638 = state_26558__$1;
(statearr_26581_26638[(1)] = (23));

} else {
var statearr_26582_26639 = state_26558__$1;
(statearr_26582_26639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (36))){
var inst_26510 = (state_26558[(12)]);
var inst_26488 = inst_26510;
var state_26558__$1 = (function (){var statearr_26583 = state_26558;
(statearr_26583[(7)] = inst_26488);

return statearr_26583;
})();
var statearr_26584_26640 = state_26558__$1;
(statearr_26584_26640[(2)] = null);

(statearr_26584_26640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (29))){
var inst_26532 = (state_26558[(11)]);
var state_26558__$1 = state_26558;
var statearr_26585_26641 = state_26558__$1;
(statearr_26585_26641[(2)] = inst_26532);

(statearr_26585_26641[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (6))){
var state_26558__$1 = state_26558;
var statearr_26586_26642 = state_26558__$1;
(statearr_26586_26642[(2)] = false);

(statearr_26586_26642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (28))){
var inst_26528 = (state_26558[(2)]);
var inst_26529 = calc_state.call(null);
var inst_26488 = inst_26529;
var state_26558__$1 = (function (){var statearr_26587 = state_26558;
(statearr_26587[(15)] = inst_26528);

(statearr_26587[(7)] = inst_26488);

return statearr_26587;
})();
var statearr_26588_26643 = state_26558__$1;
(statearr_26588_26643[(2)] = null);

(statearr_26588_26643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (25))){
var inst_26554 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26589_26644 = state_26558__$1;
(statearr_26589_26644[(2)] = inst_26554);

(statearr_26589_26644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (34))){
var inst_26552 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26590_26645 = state_26558__$1;
(statearr_26590_26645[(2)] = inst_26552);

(statearr_26590_26645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (17))){
var state_26558__$1 = state_26558;
var statearr_26591_26646 = state_26558__$1;
(statearr_26591_26646[(2)] = false);

(statearr_26591_26646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (3))){
var state_26558__$1 = state_26558;
var statearr_26592_26647 = state_26558__$1;
(statearr_26592_26647[(2)] = false);

(statearr_26592_26647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (12))){
var inst_26556 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26558__$1,inst_26556);
} else {
if((state_val_26559 === (2))){
var inst_26464 = (state_26558[(8)]);
var inst_26469 = inst_26464.cljs$lang$protocol_mask$partition0$;
var inst_26470 = (inst_26469 & (64));
var inst_26471 = inst_26464.cljs$core$ISeq$;
var inst_26472 = (inst_26470) || (inst_26471);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26472)){
var statearr_26593_26648 = state_26558__$1;
(statearr_26593_26648[(1)] = (5));

} else {
var statearr_26594_26649 = state_26558__$1;
(statearr_26594_26649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (23))){
var inst_26517 = (state_26558[(14)]);
var inst_26523 = (inst_26517 == null);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26523)){
var statearr_26595_26650 = state_26558__$1;
(statearr_26595_26650[(1)] = (26));

} else {
var statearr_26596_26651 = state_26558__$1;
(statearr_26596_26651[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (35))){
var inst_26543 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26543)){
var statearr_26597_26652 = state_26558__$1;
(statearr_26597_26652[(1)] = (36));

} else {
var statearr_26598_26653 = state_26558__$1;
(statearr_26598_26653[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (19))){
var inst_26488 = (state_26558[(7)]);
var inst_26507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26488);
var state_26558__$1 = state_26558;
var statearr_26599_26654 = state_26558__$1;
(statearr_26599_26654[(2)] = inst_26507);

(statearr_26599_26654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (11))){
var inst_26488 = (state_26558[(7)]);
var inst_26492 = (inst_26488 == null);
var inst_26493 = cljs.core.not.call(null,inst_26492);
var state_26558__$1 = state_26558;
if(inst_26493){
var statearr_26600_26655 = state_26558__$1;
(statearr_26600_26655[(1)] = (13));

} else {
var statearr_26601_26656 = state_26558__$1;
(statearr_26601_26656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (9))){
var inst_26464 = (state_26558[(8)]);
var state_26558__$1 = state_26558;
var statearr_26602_26657 = state_26558__$1;
(statearr_26602_26657[(2)] = inst_26464);

(statearr_26602_26657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (5))){
var state_26558__$1 = state_26558;
var statearr_26603_26658 = state_26558__$1;
(statearr_26603_26658[(2)] = true);

(statearr_26603_26658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (14))){
var state_26558__$1 = state_26558;
var statearr_26604_26659 = state_26558__$1;
(statearr_26604_26659[(2)] = false);

(statearr_26604_26659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (26))){
var inst_26518 = (state_26558[(10)]);
var inst_26525 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26518);
var state_26558__$1 = state_26558;
var statearr_26605_26660 = state_26558__$1;
(statearr_26605_26660[(2)] = inst_26525);

(statearr_26605_26660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (16))){
var state_26558__$1 = state_26558;
var statearr_26606_26661 = state_26558__$1;
(statearr_26606_26661[(2)] = true);

(statearr_26606_26661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (38))){
var inst_26548 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26607_26662 = state_26558__$1;
(statearr_26607_26662[(2)] = inst_26548);

(statearr_26607_26662[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (30))){
var inst_26511 = (state_26558[(9)]);
var inst_26512 = (state_26558[(13)]);
var inst_26518 = (state_26558[(10)]);
var inst_26535 = cljs.core.empty_QMARK_.call(null,inst_26511);
var inst_26536 = inst_26512.call(null,inst_26518);
var inst_26537 = cljs.core.not.call(null,inst_26536);
var inst_26538 = (inst_26535) && (inst_26537);
var state_26558__$1 = state_26558;
var statearr_26608_26663 = state_26558__$1;
(statearr_26608_26663[(2)] = inst_26538);

(statearr_26608_26663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (10))){
var inst_26464 = (state_26558[(8)]);
var inst_26484 = (state_26558[(2)]);
var inst_26485 = cljs.core.get.call(null,inst_26484,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26486 = cljs.core.get.call(null,inst_26484,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26487 = cljs.core.get.call(null,inst_26484,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26488 = inst_26464;
var state_26558__$1 = (function (){var statearr_26609 = state_26558;
(statearr_26609[(16)] = inst_26487);

(statearr_26609[(17)] = inst_26485);

(statearr_26609[(18)] = inst_26486);

(statearr_26609[(7)] = inst_26488);

return statearr_26609;
})();
var statearr_26610_26664 = state_26558__$1;
(statearr_26610_26664[(2)] = null);

(statearr_26610_26664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (18))){
var inst_26502 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26611_26665 = state_26558__$1;
(statearr_26611_26665[(2)] = inst_26502);

(statearr_26611_26665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (37))){
var state_26558__$1 = state_26558;
var statearr_26612_26666 = state_26558__$1;
(statearr_26612_26666[(2)] = null);

(statearr_26612_26666[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (8))){
var inst_26464 = (state_26558[(8)]);
var inst_26481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26464);
var state_26558__$1 = state_26558;
var statearr_26613_26667 = state_26558__$1;
(statearr_26613_26667[(2)] = inst_26481);

(statearr_26613_26667[(1)] = (10));


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
});})(c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24796__auto__,c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24797__auto__ = null;
var cljs$core$async$mix_$_state_machine__24797__auto____0 = (function (){
var statearr_26617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26617[(0)] = cljs$core$async$mix_$_state_machine__24797__auto__);

(statearr_26617[(1)] = (1));

return statearr_26617;
});
var cljs$core$async$mix_$_state_machine__24797__auto____1 = (function (state_26558){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_26558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e26618){if((e26618 instanceof Object)){
var ex__24800__auto__ = e26618;
var statearr_26619_26668 = state_26558;
(statearr_26619_26668[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26669 = state_26558;
state_26558 = G__26669;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24797__auto__ = function(state_26558){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24797__auto____1.call(this,state_26558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24797__auto____0;
cljs$core$async$mix_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24797__auto____1;
return cljs$core$async$mix_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24910__auto__ = (function (){var statearr_26620 = f__24909__auto__.call(null);
(statearr_26620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___26621);

return statearr_26620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___26621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22451__auto__ = (((p == null))?null:p);
var m__22452__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22452__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22451__auto__ = (((p == null))?null:p);
var m__22452__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,p,v,ch);
} else {
var m__22452__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26670 = [];
var len__22859__auto___26673 = arguments.length;
var i__22860__auto___26674 = (0);
while(true){
if((i__22860__auto___26674 < len__22859__auto___26673)){
args26670.push((arguments[i__22860__auto___26674]));

var G__26675 = (i__22860__auto___26674 + (1));
i__22860__auto___26674 = G__26675;
continue;
} else {
}
break;
}

var G__26672 = args26670.length;
switch (G__26672) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26670.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22451__auto__ = (((p == null))?null:p);
var m__22452__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,p);
} else {
var m__22452__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,p);
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
var x__22451__auto__ = (((p == null))?null:p);
var m__22452__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22451__auto__)]);
if(!((m__22452__auto__ == null))){
return m__22452__auto__.call(null,p,v);
} else {
var m__22452__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22452__auto____$1 == null))){
return m__22452__auto____$1.call(null,p,v);
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
var args26678 = [];
var len__22859__auto___26803 = arguments.length;
var i__22860__auto___26804 = (0);
while(true){
if((i__22860__auto___26804 < len__22859__auto___26803)){
args26678.push((arguments[i__22860__auto___26804]));

var G__26805 = (i__22860__auto___26804 + (1));
i__22860__auto___26804 = G__26805;
continue;
} else {
}
break;
}

var G__26680 = args26678.length;
switch (G__26680) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26678.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21788__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21788__auto__,mults){
return (function (p1__26677_SHARP_){
if(cljs.core.truth_(p1__26677_SHARP_.call(null,topic))){
return p1__26677_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26677_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21788__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26681 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26682){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26682 = meta26682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26683,meta26682__$1){
var self__ = this;
var _26683__$1 = this;
return (new cljs.core.async.t_cljs$core$async26681(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26682__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26683){
var self__ = this;
var _26683__$1 = this;
return self__.meta26682;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26682","meta26682",-1188581740,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26681";

cljs.core.async.t_cljs$core$async26681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async26681");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26681 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26682){
return (new cljs.core.async.t_cljs$core$async26681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26682));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26681(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24908__auto___26807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___26807,mults,ensure_mult,p){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___26807,mults,ensure_mult,p){
return (function (state_26755){
var state_val_26756 = (state_26755[(1)]);
if((state_val_26756 === (7))){
var inst_26751 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26757_26808 = state_26755__$1;
(statearr_26757_26808[(2)] = inst_26751);

(statearr_26757_26808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (20))){
var state_26755__$1 = state_26755;
var statearr_26758_26809 = state_26755__$1;
(statearr_26758_26809[(2)] = null);

(statearr_26758_26809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (1))){
var state_26755__$1 = state_26755;
var statearr_26759_26810 = state_26755__$1;
(statearr_26759_26810[(2)] = null);

(statearr_26759_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (24))){
var inst_26734 = (state_26755[(7)]);
var inst_26743 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26734);
var state_26755__$1 = state_26755;
var statearr_26760_26811 = state_26755__$1;
(statearr_26760_26811[(2)] = inst_26743);

(statearr_26760_26811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (4))){
var inst_26686 = (state_26755[(8)]);
var inst_26686__$1 = (state_26755[(2)]);
var inst_26687 = (inst_26686__$1 == null);
var state_26755__$1 = (function (){var statearr_26761 = state_26755;
(statearr_26761[(8)] = inst_26686__$1);

return statearr_26761;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26762_26812 = state_26755__$1;
(statearr_26762_26812[(1)] = (5));

} else {
var statearr_26763_26813 = state_26755__$1;
(statearr_26763_26813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (15))){
var inst_26728 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26764_26814 = state_26755__$1;
(statearr_26764_26814[(2)] = inst_26728);

(statearr_26764_26814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (21))){
var inst_26748 = (state_26755[(2)]);
var state_26755__$1 = (function (){var statearr_26765 = state_26755;
(statearr_26765[(9)] = inst_26748);

return statearr_26765;
})();
var statearr_26766_26815 = state_26755__$1;
(statearr_26766_26815[(2)] = null);

(statearr_26766_26815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (13))){
var inst_26710 = (state_26755[(10)]);
var inst_26712 = cljs.core.chunked_seq_QMARK_.call(null,inst_26710);
var state_26755__$1 = state_26755;
if(inst_26712){
var statearr_26767_26816 = state_26755__$1;
(statearr_26767_26816[(1)] = (16));

} else {
var statearr_26768_26817 = state_26755__$1;
(statearr_26768_26817[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (22))){
var inst_26740 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
if(cljs.core.truth_(inst_26740)){
var statearr_26769_26818 = state_26755__$1;
(statearr_26769_26818[(1)] = (23));

} else {
var statearr_26770_26819 = state_26755__$1;
(statearr_26770_26819[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (6))){
var inst_26686 = (state_26755[(8)]);
var inst_26734 = (state_26755[(7)]);
var inst_26736 = (state_26755[(11)]);
var inst_26734__$1 = topic_fn.call(null,inst_26686);
var inst_26735 = cljs.core.deref.call(null,mults);
var inst_26736__$1 = cljs.core.get.call(null,inst_26735,inst_26734__$1);
var state_26755__$1 = (function (){var statearr_26771 = state_26755;
(statearr_26771[(7)] = inst_26734__$1);

(statearr_26771[(11)] = inst_26736__$1);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26736__$1)){
var statearr_26772_26820 = state_26755__$1;
(statearr_26772_26820[(1)] = (19));

} else {
var statearr_26773_26821 = state_26755__$1;
(statearr_26773_26821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (25))){
var inst_26745 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26774_26822 = state_26755__$1;
(statearr_26774_26822[(2)] = inst_26745);

(statearr_26774_26822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (17))){
var inst_26710 = (state_26755[(10)]);
var inst_26719 = cljs.core.first.call(null,inst_26710);
var inst_26720 = cljs.core.async.muxch_STAR_.call(null,inst_26719);
var inst_26721 = cljs.core.async.close_BANG_.call(null,inst_26720);
var inst_26722 = cljs.core.next.call(null,inst_26710);
var inst_26696 = inst_26722;
var inst_26697 = null;
var inst_26698 = (0);
var inst_26699 = (0);
var state_26755__$1 = (function (){var statearr_26775 = state_26755;
(statearr_26775[(12)] = inst_26698);

(statearr_26775[(13)] = inst_26696);

(statearr_26775[(14)] = inst_26699);

(statearr_26775[(15)] = inst_26721);

(statearr_26775[(16)] = inst_26697);

return statearr_26775;
})();
var statearr_26776_26823 = state_26755__$1;
(statearr_26776_26823[(2)] = null);

(statearr_26776_26823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (3))){
var inst_26753 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26755__$1,inst_26753);
} else {
if((state_val_26756 === (12))){
var inst_26730 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26777_26824 = state_26755__$1;
(statearr_26777_26824[(2)] = inst_26730);

(statearr_26777_26824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (2))){
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(4),ch);
} else {
if((state_val_26756 === (23))){
var state_26755__$1 = state_26755;
var statearr_26778_26825 = state_26755__$1;
(statearr_26778_26825[(2)] = null);

(statearr_26778_26825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (19))){
var inst_26686 = (state_26755[(8)]);
var inst_26736 = (state_26755[(11)]);
var inst_26738 = cljs.core.async.muxch_STAR_.call(null,inst_26736);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26755__$1,(22),inst_26738,inst_26686);
} else {
if((state_val_26756 === (11))){
var inst_26710 = (state_26755[(10)]);
var inst_26696 = (state_26755[(13)]);
var inst_26710__$1 = cljs.core.seq.call(null,inst_26696);
var state_26755__$1 = (function (){var statearr_26779 = state_26755;
(statearr_26779[(10)] = inst_26710__$1);

return statearr_26779;
})();
if(inst_26710__$1){
var statearr_26780_26826 = state_26755__$1;
(statearr_26780_26826[(1)] = (13));

} else {
var statearr_26781_26827 = state_26755__$1;
(statearr_26781_26827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (9))){
var inst_26732 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26782_26828 = state_26755__$1;
(statearr_26782_26828[(2)] = inst_26732);

(statearr_26782_26828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (5))){
var inst_26693 = cljs.core.deref.call(null,mults);
var inst_26694 = cljs.core.vals.call(null,inst_26693);
var inst_26695 = cljs.core.seq.call(null,inst_26694);
var inst_26696 = inst_26695;
var inst_26697 = null;
var inst_26698 = (0);
var inst_26699 = (0);
var state_26755__$1 = (function (){var statearr_26783 = state_26755;
(statearr_26783[(12)] = inst_26698);

(statearr_26783[(13)] = inst_26696);

(statearr_26783[(14)] = inst_26699);

(statearr_26783[(16)] = inst_26697);

return statearr_26783;
})();
var statearr_26784_26829 = state_26755__$1;
(statearr_26784_26829[(2)] = null);

(statearr_26784_26829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (14))){
var state_26755__$1 = state_26755;
var statearr_26788_26830 = state_26755__$1;
(statearr_26788_26830[(2)] = null);

(statearr_26788_26830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (16))){
var inst_26710 = (state_26755[(10)]);
var inst_26714 = cljs.core.chunk_first.call(null,inst_26710);
var inst_26715 = cljs.core.chunk_rest.call(null,inst_26710);
var inst_26716 = cljs.core.count.call(null,inst_26714);
var inst_26696 = inst_26715;
var inst_26697 = inst_26714;
var inst_26698 = inst_26716;
var inst_26699 = (0);
var state_26755__$1 = (function (){var statearr_26789 = state_26755;
(statearr_26789[(12)] = inst_26698);

(statearr_26789[(13)] = inst_26696);

(statearr_26789[(14)] = inst_26699);

(statearr_26789[(16)] = inst_26697);

return statearr_26789;
})();
var statearr_26790_26831 = state_26755__$1;
(statearr_26790_26831[(2)] = null);

(statearr_26790_26831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (10))){
var inst_26698 = (state_26755[(12)]);
var inst_26696 = (state_26755[(13)]);
var inst_26699 = (state_26755[(14)]);
var inst_26697 = (state_26755[(16)]);
var inst_26704 = cljs.core._nth.call(null,inst_26697,inst_26699);
var inst_26705 = cljs.core.async.muxch_STAR_.call(null,inst_26704);
var inst_26706 = cljs.core.async.close_BANG_.call(null,inst_26705);
var inst_26707 = (inst_26699 + (1));
var tmp26785 = inst_26698;
var tmp26786 = inst_26696;
var tmp26787 = inst_26697;
var inst_26696__$1 = tmp26786;
var inst_26697__$1 = tmp26787;
var inst_26698__$1 = tmp26785;
var inst_26699__$1 = inst_26707;
var state_26755__$1 = (function (){var statearr_26791 = state_26755;
(statearr_26791[(12)] = inst_26698__$1);

(statearr_26791[(13)] = inst_26696__$1);

(statearr_26791[(14)] = inst_26699__$1);

(statearr_26791[(16)] = inst_26697__$1);

(statearr_26791[(17)] = inst_26706);

return statearr_26791;
})();
var statearr_26792_26832 = state_26755__$1;
(statearr_26792_26832[(2)] = null);

(statearr_26792_26832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (18))){
var inst_26725 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26793_26833 = state_26755__$1;
(statearr_26793_26833[(2)] = inst_26725);

(statearr_26793_26833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (8))){
var inst_26698 = (state_26755[(12)]);
var inst_26699 = (state_26755[(14)]);
var inst_26701 = (inst_26699 < inst_26698);
var inst_26702 = inst_26701;
var state_26755__$1 = state_26755;
if(cljs.core.truth_(inst_26702)){
var statearr_26794_26834 = state_26755__$1;
(statearr_26794_26834[(1)] = (10));

} else {
var statearr_26795_26835 = state_26755__$1;
(statearr_26795_26835[(1)] = (11));

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
});})(c__24908__auto___26807,mults,ensure_mult,p))
;
return ((function (switch__24796__auto__,c__24908__auto___26807,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_26799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26799[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_26799[(1)] = (1));

return statearr_26799;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_26755){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_26755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e26800){if((e26800 instanceof Object)){
var ex__24800__auto__ = e26800;
var statearr_26801_26836 = state_26755;
(statearr_26801_26836[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26837 = state_26755;
state_26755 = G__26837;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_26755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_26755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___26807,mults,ensure_mult,p))
})();
var state__24910__auto__ = (function (){var statearr_26802 = f__24909__auto__.call(null);
(statearr_26802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___26807);

return statearr_26802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___26807,mults,ensure_mult,p))
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
var args26838 = [];
var len__22859__auto___26841 = arguments.length;
var i__22860__auto___26842 = (0);
while(true){
if((i__22860__auto___26842 < len__22859__auto___26841)){
args26838.push((arguments[i__22860__auto___26842]));

var G__26843 = (i__22860__auto___26842 + (1));
i__22860__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var G__26840 = args26838.length;
switch (G__26840) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26838.length)].join('')));

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
var args26845 = [];
var len__22859__auto___26848 = arguments.length;
var i__22860__auto___26849 = (0);
while(true){
if((i__22860__auto___26849 < len__22859__auto___26848)){
args26845.push((arguments[i__22860__auto___26849]));

var G__26850 = (i__22860__auto___26849 + (1));
i__22860__auto___26849 = G__26850;
continue;
} else {
}
break;
}

var G__26847 = args26845.length;
switch (G__26847) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26845.length)].join('')));

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
var args26852 = [];
var len__22859__auto___26923 = arguments.length;
var i__22860__auto___26924 = (0);
while(true){
if((i__22860__auto___26924 < len__22859__auto___26923)){
args26852.push((arguments[i__22860__auto___26924]));

var G__26925 = (i__22860__auto___26924 + (1));
i__22860__auto___26924 = G__26925;
continue;
} else {
}
break;
}

var G__26854 = args26852.length;
switch (G__26854) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26852.length)].join('')));

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
var c__24908__auto___26927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26893){
var state_val_26894 = (state_26893[(1)]);
if((state_val_26894 === (7))){
var state_26893__$1 = state_26893;
var statearr_26895_26928 = state_26893__$1;
(statearr_26895_26928[(2)] = null);

(statearr_26895_26928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (1))){
var state_26893__$1 = state_26893;
var statearr_26896_26929 = state_26893__$1;
(statearr_26896_26929[(2)] = null);

(statearr_26896_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (4))){
var inst_26857 = (state_26893[(7)]);
var inst_26859 = (inst_26857 < cnt);
var state_26893__$1 = state_26893;
if(cljs.core.truth_(inst_26859)){
var statearr_26897_26930 = state_26893__$1;
(statearr_26897_26930[(1)] = (6));

} else {
var statearr_26898_26931 = state_26893__$1;
(statearr_26898_26931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (15))){
var inst_26889 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26899_26932 = state_26893__$1;
(statearr_26899_26932[(2)] = inst_26889);

(statearr_26899_26932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (13))){
var inst_26882 = cljs.core.async.close_BANG_.call(null,out);
var state_26893__$1 = state_26893;
var statearr_26900_26933 = state_26893__$1;
(statearr_26900_26933[(2)] = inst_26882);

(statearr_26900_26933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (6))){
var state_26893__$1 = state_26893;
var statearr_26901_26934 = state_26893__$1;
(statearr_26901_26934[(2)] = null);

(statearr_26901_26934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (3))){
var inst_26891 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26893__$1,inst_26891);
} else {
if((state_val_26894 === (12))){
var inst_26879 = (state_26893[(8)]);
var inst_26879__$1 = (state_26893[(2)]);
var inst_26880 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26879__$1);
var state_26893__$1 = (function (){var statearr_26902 = state_26893;
(statearr_26902[(8)] = inst_26879__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26880)){
var statearr_26903_26935 = state_26893__$1;
(statearr_26903_26935[(1)] = (13));

} else {
var statearr_26904_26936 = state_26893__$1;
(statearr_26904_26936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (2))){
var inst_26856 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26857 = (0);
var state_26893__$1 = (function (){var statearr_26905 = state_26893;
(statearr_26905[(9)] = inst_26856);

(statearr_26905[(7)] = inst_26857);

return statearr_26905;
})();
var statearr_26906_26937 = state_26893__$1;
(statearr_26906_26937[(2)] = null);

(statearr_26906_26937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (11))){
var inst_26857 = (state_26893[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26893,(10),Object,null,(9));
var inst_26866 = chs__$1.call(null,inst_26857);
var inst_26867 = done.call(null,inst_26857);
var inst_26868 = cljs.core.async.take_BANG_.call(null,inst_26866,inst_26867);
var state_26893__$1 = state_26893;
var statearr_26907_26938 = state_26893__$1;
(statearr_26907_26938[(2)] = inst_26868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (9))){
var inst_26857 = (state_26893[(7)]);
var inst_26870 = (state_26893[(2)]);
var inst_26871 = (inst_26857 + (1));
var inst_26857__$1 = inst_26871;
var state_26893__$1 = (function (){var statearr_26908 = state_26893;
(statearr_26908[(7)] = inst_26857__$1);

(statearr_26908[(10)] = inst_26870);

return statearr_26908;
})();
var statearr_26909_26939 = state_26893__$1;
(statearr_26909_26939[(2)] = null);

(statearr_26909_26939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (5))){
var inst_26877 = (state_26893[(2)]);
var state_26893__$1 = (function (){var statearr_26910 = state_26893;
(statearr_26910[(11)] = inst_26877);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26893__$1,(12),dchan);
} else {
if((state_val_26894 === (14))){
var inst_26879 = (state_26893[(8)]);
var inst_26884 = cljs.core.apply.call(null,f,inst_26879);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26893__$1,(16),out,inst_26884);
} else {
if((state_val_26894 === (16))){
var inst_26886 = (state_26893[(2)]);
var state_26893__$1 = (function (){var statearr_26911 = state_26893;
(statearr_26911[(12)] = inst_26886);

return statearr_26911;
})();
var statearr_26912_26940 = state_26893__$1;
(statearr_26912_26940[(2)] = null);

(statearr_26912_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (10))){
var inst_26861 = (state_26893[(2)]);
var inst_26862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26893__$1 = (function (){var statearr_26913 = state_26893;
(statearr_26913[(13)] = inst_26861);

return statearr_26913;
})();
var statearr_26914_26941 = state_26893__$1;
(statearr_26914_26941[(2)] = inst_26862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (8))){
var inst_26875 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26915_26942 = state_26893__$1;
(statearr_26915_26942[(2)] = inst_26875);

(statearr_26915_26942[(1)] = (5));


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
});})(c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24796__auto__,c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_26893){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_26893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__24800__auto__ = e26920;
var statearr_26921_26943 = state_26893;
(statearr_26921_26943[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26944 = state_26893;
state_26893 = G__26944;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_26893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_26893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24910__auto__ = (function (){var statearr_26922 = f__24909__auto__.call(null);
(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___26927);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___26927,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26946 = [];
var len__22859__auto___27002 = arguments.length;
var i__22860__auto___27003 = (0);
while(true){
if((i__22860__auto___27003 < len__22859__auto___27002)){
args26946.push((arguments[i__22860__auto___27003]));

var G__27004 = (i__22860__auto___27003 + (1));
i__22860__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var G__26948 = args26946.length;
switch (G__26948) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26946.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27006,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27006,out){
return (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (7))){
var inst_26958 = (state_26978[(7)]);
var inst_26957 = (state_26978[(8)]);
var inst_26957__$1 = (state_26978[(2)]);
var inst_26958__$1 = cljs.core.nth.call(null,inst_26957__$1,(0),null);
var inst_26959 = cljs.core.nth.call(null,inst_26957__$1,(1),null);
var inst_26960 = (inst_26958__$1 == null);
var state_26978__$1 = (function (){var statearr_26980 = state_26978;
(statearr_26980[(7)] = inst_26958__$1);

(statearr_26980[(9)] = inst_26959);

(statearr_26980[(8)] = inst_26957__$1);

return statearr_26980;
})();
if(cljs.core.truth_(inst_26960)){
var statearr_26981_27007 = state_26978__$1;
(statearr_26981_27007[(1)] = (8));

} else {
var statearr_26982_27008 = state_26978__$1;
(statearr_26982_27008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (1))){
var inst_26949 = cljs.core.vec.call(null,chs);
var inst_26950 = inst_26949;
var state_26978__$1 = (function (){var statearr_26983 = state_26978;
(statearr_26983[(10)] = inst_26950);

return statearr_26983;
})();
var statearr_26984_27009 = state_26978__$1;
(statearr_26984_27009[(2)] = null);

(statearr_26984_27009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (4))){
var inst_26950 = (state_26978[(10)]);
var state_26978__$1 = state_26978;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26978__$1,(7),inst_26950);
} else {
if((state_val_26979 === (6))){
var inst_26974 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26985_27010 = state_26978__$1;
(statearr_26985_27010[(2)] = inst_26974);

(statearr_26985_27010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (3))){
var inst_26976 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26978__$1,inst_26976);
} else {
if((state_val_26979 === (2))){
var inst_26950 = (state_26978[(10)]);
var inst_26952 = cljs.core.count.call(null,inst_26950);
var inst_26953 = (inst_26952 > (0));
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26953)){
var statearr_26987_27011 = state_26978__$1;
(statearr_26987_27011[(1)] = (4));

} else {
var statearr_26988_27012 = state_26978__$1;
(statearr_26988_27012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (11))){
var inst_26950 = (state_26978[(10)]);
var inst_26967 = (state_26978[(2)]);
var tmp26986 = inst_26950;
var inst_26950__$1 = tmp26986;
var state_26978__$1 = (function (){var statearr_26989 = state_26978;
(statearr_26989[(11)] = inst_26967);

(statearr_26989[(10)] = inst_26950__$1);

return statearr_26989;
})();
var statearr_26990_27013 = state_26978__$1;
(statearr_26990_27013[(2)] = null);

(statearr_26990_27013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (9))){
var inst_26958 = (state_26978[(7)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26978__$1,(11),out,inst_26958);
} else {
if((state_val_26979 === (5))){
var inst_26972 = cljs.core.async.close_BANG_.call(null,out);
var state_26978__$1 = state_26978;
var statearr_26991_27014 = state_26978__$1;
(statearr_26991_27014[(2)] = inst_26972);

(statearr_26991_27014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (10))){
var inst_26970 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26992_27015 = state_26978__$1;
(statearr_26992_27015[(2)] = inst_26970);

(statearr_26992_27015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (8))){
var inst_26958 = (state_26978[(7)]);
var inst_26959 = (state_26978[(9)]);
var inst_26950 = (state_26978[(10)]);
var inst_26957 = (state_26978[(8)]);
var inst_26962 = (function (){var cs = inst_26950;
var vec__26955 = inst_26957;
var v = inst_26958;
var c = inst_26959;
return ((function (cs,vec__26955,v,c,inst_26958,inst_26959,inst_26950,inst_26957,state_val_26979,c__24908__auto___27006,out){
return (function (p1__26945_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26945_SHARP_);
});
;})(cs,vec__26955,v,c,inst_26958,inst_26959,inst_26950,inst_26957,state_val_26979,c__24908__auto___27006,out))
})();
var inst_26963 = cljs.core.filterv.call(null,inst_26962,inst_26950);
var inst_26950__$1 = inst_26963;
var state_26978__$1 = (function (){var statearr_26993 = state_26978;
(statearr_26993[(10)] = inst_26950__$1);

return statearr_26993;
})();
var statearr_26994_27016 = state_26978__$1;
(statearr_26994_27016[(2)] = null);

(statearr_26994_27016[(1)] = (2));


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
});})(c__24908__auto___27006,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27006,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_26998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26998[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_26998[(1)] = (1));

return statearr_26998;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_26978){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_26978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e26999){if((e26999 instanceof Object)){
var ex__24800__auto__ = e26999;
var statearr_27000_27017 = state_26978;
(statearr_27000_27017[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27018 = state_26978;
state_26978 = G__27018;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27006,out))
})();
var state__24910__auto__ = (function (){var statearr_27001 = f__24909__auto__.call(null);
(statearr_27001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27006);

return statearr_27001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27006,out))
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
var args27019 = [];
var len__22859__auto___27068 = arguments.length;
var i__22860__auto___27069 = (0);
while(true){
if((i__22860__auto___27069 < len__22859__auto___27068)){
args27019.push((arguments[i__22860__auto___27069]));

var G__27070 = (i__22860__auto___27069 + (1));
i__22860__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27021 = args27019.length;
switch (G__27021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27019.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27072,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27072,out){
return (function (state_27045){
var state_val_27046 = (state_27045[(1)]);
if((state_val_27046 === (7))){
var inst_27027 = (state_27045[(7)]);
var inst_27027__$1 = (state_27045[(2)]);
var inst_27028 = (inst_27027__$1 == null);
var inst_27029 = cljs.core.not.call(null,inst_27028);
var state_27045__$1 = (function (){var statearr_27047 = state_27045;
(statearr_27047[(7)] = inst_27027__$1);

return statearr_27047;
})();
if(inst_27029){
var statearr_27048_27073 = state_27045__$1;
(statearr_27048_27073[(1)] = (8));

} else {
var statearr_27049_27074 = state_27045__$1;
(statearr_27049_27074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (1))){
var inst_27022 = (0);
var state_27045__$1 = (function (){var statearr_27050 = state_27045;
(statearr_27050[(8)] = inst_27022);

return statearr_27050;
})();
var statearr_27051_27075 = state_27045__$1;
(statearr_27051_27075[(2)] = null);

(statearr_27051_27075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (4))){
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(7),ch);
} else {
if((state_val_27046 === (6))){
var inst_27040 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27052_27076 = state_27045__$1;
(statearr_27052_27076[(2)] = inst_27040);

(statearr_27052_27076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (3))){
var inst_27042 = (state_27045[(2)]);
var inst_27043 = cljs.core.async.close_BANG_.call(null,out);
var state_27045__$1 = (function (){var statearr_27053 = state_27045;
(statearr_27053[(9)] = inst_27042);

return statearr_27053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27045__$1,inst_27043);
} else {
if((state_val_27046 === (2))){
var inst_27022 = (state_27045[(8)]);
var inst_27024 = (inst_27022 < n);
var state_27045__$1 = state_27045;
if(cljs.core.truth_(inst_27024)){
var statearr_27054_27077 = state_27045__$1;
(statearr_27054_27077[(1)] = (4));

} else {
var statearr_27055_27078 = state_27045__$1;
(statearr_27055_27078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (11))){
var inst_27022 = (state_27045[(8)]);
var inst_27032 = (state_27045[(2)]);
var inst_27033 = (inst_27022 + (1));
var inst_27022__$1 = inst_27033;
var state_27045__$1 = (function (){var statearr_27056 = state_27045;
(statearr_27056[(10)] = inst_27032);

(statearr_27056[(8)] = inst_27022__$1);

return statearr_27056;
})();
var statearr_27057_27079 = state_27045__$1;
(statearr_27057_27079[(2)] = null);

(statearr_27057_27079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (9))){
var state_27045__$1 = state_27045;
var statearr_27058_27080 = state_27045__$1;
(statearr_27058_27080[(2)] = null);

(statearr_27058_27080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (5))){
var state_27045__$1 = state_27045;
var statearr_27059_27081 = state_27045__$1;
(statearr_27059_27081[(2)] = null);

(statearr_27059_27081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (10))){
var inst_27037 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27060_27082 = state_27045__$1;
(statearr_27060_27082[(2)] = inst_27037);

(statearr_27060_27082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (8))){
var inst_27027 = (state_27045[(7)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27045__$1,(11),out,inst_27027);
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
});})(c__24908__auto___27072,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27072,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_27064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27064[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_27064[(1)] = (1));

return statearr_27064;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_27045){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27065){if((e27065 instanceof Object)){
var ex__24800__auto__ = e27065;
var statearr_27066_27083 = state_27045;
(statearr_27066_27083[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27084 = state_27045;
state_27045 = G__27084;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_27045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_27045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27072,out))
})();
var state__24910__auto__ = (function (){var statearr_27067 = f__24909__auto__.call(null);
(statearr_27067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27072);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27072,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27092 = (function (map_LT_,f,ch,meta27093){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27093 = meta27093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27094,meta27093__$1){
var self__ = this;
var _27094__$1 = this;
return (new cljs.core.async.t_cljs$core$async27092(self__.map_LT_,self__.f,self__.ch,meta27093__$1));
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27094){
var self__ = this;
var _27094__$1 = this;
return self__.meta27093;
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27095 = (function (map_LT_,f,ch,meta27093,_,fn1,meta27096){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27093 = meta27093;
this._ = _;
this.fn1 = fn1;
this.meta27096 = meta27096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27097,meta27096__$1){
var self__ = this;
var _27097__$1 = this;
return (new cljs.core.async.t_cljs$core$async27095(self__.map_LT_,self__.f,self__.ch,self__.meta27093,self__._,self__.fn1,meta27096__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27097){
var self__ = this;
var _27097__$1 = this;
return self__.meta27096;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27085_SHARP_){
return f1.call(null,(((p1__27085_SHARP_ == null))?null:self__.f.call(null,p1__27085_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27093","meta27093",815578720,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27092","cljs.core.async/t_cljs$core$async27092",481189921,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27096","meta27096",-1283599147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27095";

cljs.core.async.t_cljs$core$async27095.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async27095");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27095 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27095(map_LT___$1,f__$1,ch__$1,meta27093__$1,___$2,fn1__$1,meta27096){
return (new cljs.core.async.t_cljs$core$async27095(map_LT___$1,f__$1,ch__$1,meta27093__$1,___$2,fn1__$1,meta27096));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27095(self__.map_LT_,self__.f,self__.ch,self__.meta27093,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21776__auto__ = ret;
if(cljs.core.truth_(and__21776__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21776__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27093","meta27093",815578720,null)], null);
});

cljs.core.async.t_cljs$core$async27092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27092";

cljs.core.async.t_cljs$core$async27092.cljs$lang$ctorPrWriter = (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async27092");
});

cljs.core.async.__GT_t_cljs$core$async27092 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27092(map_LT___$1,f__$1,ch__$1,meta27093){
return (new cljs.core.async.t_cljs$core$async27092(map_LT___$1,f__$1,ch__$1,meta27093));
});

}

return (new cljs.core.async.t_cljs$core$async27092(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27101 = (function (map_GT_,f,ch,meta27102){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27102 = meta27102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27103,meta27102__$1){
var self__ = this;
var _27103__$1 = this;
return (new cljs.core.async.t_cljs$core$async27101(self__.map_GT_,self__.f,self__.ch,meta27102__$1));
});

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27103){
var self__ = this;
var _27103__$1 = this;
return self__.meta27102;
});

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27102","meta27102",-483276356,null)], null);
});

cljs.core.async.t_cljs$core$async27101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27101";

cljs.core.async.t_cljs$core$async27101.cljs$lang$ctorPrWriter = (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async27101");
});

cljs.core.async.__GT_t_cljs$core$async27101 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27101(map_GT___$1,f__$1,ch__$1,meta27102){
return (new cljs.core.async.t_cljs$core$async27101(map_GT___$1,f__$1,ch__$1,meta27102));
});

}

return (new cljs.core.async.t_cljs$core$async27101(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27107 = (function (filter_GT_,p,ch,meta27108){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27108 = meta27108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27109,meta27108__$1){
var self__ = this;
var _27109__$1 = this;
return (new cljs.core.async.t_cljs$core$async27107(self__.filter_GT_,self__.p,self__.ch,meta27108__$1));
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27109){
var self__ = this;
var _27109__$1 = this;
return self__.meta27108;
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27108","meta27108",-1112890230,null)], null);
});

cljs.core.async.t_cljs$core$async27107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27107";

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorPrWriter = (function (this__22394__auto__,writer__22395__auto__,opt__22396__auto__){
return cljs.core._write.call(null,writer__22395__auto__,"cljs.core.async/t_cljs$core$async27107");
});

cljs.core.async.__GT_t_cljs$core$async27107 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27107(filter_GT___$1,p__$1,ch__$1,meta27108){
return (new cljs.core.async.t_cljs$core$async27107(filter_GT___$1,p__$1,ch__$1,meta27108));
});

}

return (new cljs.core.async.t_cljs$core$async27107(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27110 = [];
var len__22859__auto___27154 = arguments.length;
var i__22860__auto___27155 = (0);
while(true){
if((i__22860__auto___27155 < len__22859__auto___27154)){
args27110.push((arguments[i__22860__auto___27155]));

var G__27156 = (i__22860__auto___27155 + (1));
i__22860__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var G__27112 = args27110.length;
switch (G__27112) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27110.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27158,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27158,out){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (7))){
var inst_27129 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27135_27159 = state_27133__$1;
(statearr_27135_27159[(2)] = inst_27129);

(statearr_27135_27159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (1))){
var state_27133__$1 = state_27133;
var statearr_27136_27160 = state_27133__$1;
(statearr_27136_27160[(2)] = null);

(statearr_27136_27160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (4))){
var inst_27115 = (state_27133[(7)]);
var inst_27115__$1 = (state_27133[(2)]);
var inst_27116 = (inst_27115__$1 == null);
var state_27133__$1 = (function (){var statearr_27137 = state_27133;
(statearr_27137[(7)] = inst_27115__$1);

return statearr_27137;
})();
if(cljs.core.truth_(inst_27116)){
var statearr_27138_27161 = state_27133__$1;
(statearr_27138_27161[(1)] = (5));

} else {
var statearr_27139_27162 = state_27133__$1;
(statearr_27139_27162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (6))){
var inst_27115 = (state_27133[(7)]);
var inst_27120 = p.call(null,inst_27115);
var state_27133__$1 = state_27133;
if(cljs.core.truth_(inst_27120)){
var statearr_27140_27163 = state_27133__$1;
(statearr_27140_27163[(1)] = (8));

} else {
var statearr_27141_27164 = state_27133__$1;
(statearr_27141_27164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (3))){
var inst_27131 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
if((state_val_27134 === (2))){
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(4),ch);
} else {
if((state_val_27134 === (11))){
var inst_27123 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27142_27165 = state_27133__$1;
(statearr_27142_27165[(2)] = inst_27123);

(statearr_27142_27165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (9))){
var state_27133__$1 = state_27133;
var statearr_27143_27166 = state_27133__$1;
(statearr_27143_27166[(2)] = null);

(statearr_27143_27166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (5))){
var inst_27118 = cljs.core.async.close_BANG_.call(null,out);
var state_27133__$1 = state_27133;
var statearr_27144_27167 = state_27133__$1;
(statearr_27144_27167[(2)] = inst_27118);

(statearr_27144_27167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (10))){
var inst_27126 = (state_27133[(2)]);
var state_27133__$1 = (function (){var statearr_27145 = state_27133;
(statearr_27145[(8)] = inst_27126);

return statearr_27145;
})();
var statearr_27146_27168 = state_27133__$1;
(statearr_27146_27168[(2)] = null);

(statearr_27146_27168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (8))){
var inst_27115 = (state_27133[(7)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27133__$1,(11),out,inst_27115);
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
});})(c__24908__auto___27158,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27158,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_27150 = [null,null,null,null,null,null,null,null,null];
(statearr_27150[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_27150[(1)] = (1));

return statearr_27150;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_27133){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27151){if((e27151 instanceof Object)){
var ex__24800__auto__ = e27151;
var statearr_27152_27169 = state_27133;
(statearr_27152_27169[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27170 = state_27133;
state_27133 = G__27170;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27158,out))
})();
var state__24910__auto__ = (function (){var statearr_27153 = f__24909__auto__.call(null);
(statearr_27153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27158);

return statearr_27153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27158,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27171 = [];
var len__22859__auto___27174 = arguments.length;
var i__22860__auto___27175 = (0);
while(true){
if((i__22860__auto___27175 < len__22859__auto___27174)){
args27171.push((arguments[i__22860__auto___27175]));

var G__27176 = (i__22860__auto___27175 + (1));
i__22860__auto___27175 = G__27176;
continue;
} else {
}
break;
}

var G__27173 = args27171.length;
switch (G__27173) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27171.length)].join('')));

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
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (7))){
var inst_27339 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27345_27386 = state_27343__$1;
(statearr_27345_27386[(2)] = inst_27339);

(statearr_27345_27386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (20))){
var inst_27309 = (state_27343[(7)]);
var inst_27320 = (state_27343[(2)]);
var inst_27321 = cljs.core.next.call(null,inst_27309);
var inst_27295 = inst_27321;
var inst_27296 = null;
var inst_27297 = (0);
var inst_27298 = (0);
var state_27343__$1 = (function (){var statearr_27346 = state_27343;
(statearr_27346[(8)] = inst_27320);

(statearr_27346[(9)] = inst_27298);

(statearr_27346[(10)] = inst_27295);

(statearr_27346[(11)] = inst_27297);

(statearr_27346[(12)] = inst_27296);

return statearr_27346;
})();
var statearr_27347_27387 = state_27343__$1;
(statearr_27347_27387[(2)] = null);

(statearr_27347_27387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
var statearr_27348_27388 = state_27343__$1;
(statearr_27348_27388[(2)] = null);

(statearr_27348_27388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (4))){
var inst_27284 = (state_27343[(13)]);
var inst_27284__$1 = (state_27343[(2)]);
var inst_27285 = (inst_27284__$1 == null);
var state_27343__$1 = (function (){var statearr_27349 = state_27343;
(statearr_27349[(13)] = inst_27284__$1);

return statearr_27349;
})();
if(cljs.core.truth_(inst_27285)){
var statearr_27350_27389 = state_27343__$1;
(statearr_27350_27389[(1)] = (5));

} else {
var statearr_27351_27390 = state_27343__$1;
(statearr_27351_27390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (15))){
var state_27343__$1 = state_27343;
var statearr_27355_27391 = state_27343__$1;
(statearr_27355_27391[(2)] = null);

(statearr_27355_27391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (21))){
var state_27343__$1 = state_27343;
var statearr_27356_27392 = state_27343__$1;
(statearr_27356_27392[(2)] = null);

(statearr_27356_27392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (13))){
var inst_27298 = (state_27343[(9)]);
var inst_27295 = (state_27343[(10)]);
var inst_27297 = (state_27343[(11)]);
var inst_27296 = (state_27343[(12)]);
var inst_27305 = (state_27343[(2)]);
var inst_27306 = (inst_27298 + (1));
var tmp27352 = inst_27295;
var tmp27353 = inst_27297;
var tmp27354 = inst_27296;
var inst_27295__$1 = tmp27352;
var inst_27296__$1 = tmp27354;
var inst_27297__$1 = tmp27353;
var inst_27298__$1 = inst_27306;
var state_27343__$1 = (function (){var statearr_27357 = state_27343;
(statearr_27357[(9)] = inst_27298__$1);

(statearr_27357[(10)] = inst_27295__$1);

(statearr_27357[(11)] = inst_27297__$1);

(statearr_27357[(14)] = inst_27305);

(statearr_27357[(12)] = inst_27296__$1);

return statearr_27357;
})();
var statearr_27358_27393 = state_27343__$1;
(statearr_27358_27393[(2)] = null);

(statearr_27358_27393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (22))){
var state_27343__$1 = state_27343;
var statearr_27359_27394 = state_27343__$1;
(statearr_27359_27394[(2)] = null);

(statearr_27359_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (6))){
var inst_27284 = (state_27343[(13)]);
var inst_27293 = f.call(null,inst_27284);
var inst_27294 = cljs.core.seq.call(null,inst_27293);
var inst_27295 = inst_27294;
var inst_27296 = null;
var inst_27297 = (0);
var inst_27298 = (0);
var state_27343__$1 = (function (){var statearr_27360 = state_27343;
(statearr_27360[(9)] = inst_27298);

(statearr_27360[(10)] = inst_27295);

(statearr_27360[(11)] = inst_27297);

(statearr_27360[(12)] = inst_27296);

return statearr_27360;
})();
var statearr_27361_27395 = state_27343__$1;
(statearr_27361_27395[(2)] = null);

(statearr_27361_27395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (17))){
var inst_27309 = (state_27343[(7)]);
var inst_27313 = cljs.core.chunk_first.call(null,inst_27309);
var inst_27314 = cljs.core.chunk_rest.call(null,inst_27309);
var inst_27315 = cljs.core.count.call(null,inst_27313);
var inst_27295 = inst_27314;
var inst_27296 = inst_27313;
var inst_27297 = inst_27315;
var inst_27298 = (0);
var state_27343__$1 = (function (){var statearr_27362 = state_27343;
(statearr_27362[(9)] = inst_27298);

(statearr_27362[(10)] = inst_27295);

(statearr_27362[(11)] = inst_27297);

(statearr_27362[(12)] = inst_27296);

return statearr_27362;
})();
var statearr_27363_27396 = state_27343__$1;
(statearr_27363_27396[(2)] = null);

(statearr_27363_27396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (3))){
var inst_27341 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
if((state_val_27344 === (12))){
var inst_27329 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27364_27397 = state_27343__$1;
(statearr_27364_27397[(2)] = inst_27329);

(statearr_27364_27397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (2))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(4),in$);
} else {
if((state_val_27344 === (23))){
var inst_27337 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27365_27398 = state_27343__$1;
(statearr_27365_27398[(2)] = inst_27337);

(statearr_27365_27398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (19))){
var inst_27324 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27366_27399 = state_27343__$1;
(statearr_27366_27399[(2)] = inst_27324);

(statearr_27366_27399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (11))){
var inst_27295 = (state_27343[(10)]);
var inst_27309 = (state_27343[(7)]);
var inst_27309__$1 = cljs.core.seq.call(null,inst_27295);
var state_27343__$1 = (function (){var statearr_27367 = state_27343;
(statearr_27367[(7)] = inst_27309__$1);

return statearr_27367;
})();
if(inst_27309__$1){
var statearr_27368_27400 = state_27343__$1;
(statearr_27368_27400[(1)] = (14));

} else {
var statearr_27369_27401 = state_27343__$1;
(statearr_27369_27401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (9))){
var inst_27331 = (state_27343[(2)]);
var inst_27332 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27343__$1 = (function (){var statearr_27370 = state_27343;
(statearr_27370[(15)] = inst_27331);

return statearr_27370;
})();
if(cljs.core.truth_(inst_27332)){
var statearr_27371_27402 = state_27343__$1;
(statearr_27371_27402[(1)] = (21));

} else {
var statearr_27372_27403 = state_27343__$1;
(statearr_27372_27403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (5))){
var inst_27287 = cljs.core.async.close_BANG_.call(null,out);
var state_27343__$1 = state_27343;
var statearr_27373_27404 = state_27343__$1;
(statearr_27373_27404[(2)] = inst_27287);

(statearr_27373_27404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (14))){
var inst_27309 = (state_27343[(7)]);
var inst_27311 = cljs.core.chunked_seq_QMARK_.call(null,inst_27309);
var state_27343__$1 = state_27343;
if(inst_27311){
var statearr_27374_27405 = state_27343__$1;
(statearr_27374_27405[(1)] = (17));

} else {
var statearr_27375_27406 = state_27343__$1;
(statearr_27375_27406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (16))){
var inst_27327 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27376_27407 = state_27343__$1;
(statearr_27376_27407[(2)] = inst_27327);

(statearr_27376_27407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (10))){
var inst_27298 = (state_27343[(9)]);
var inst_27296 = (state_27343[(12)]);
var inst_27303 = cljs.core._nth.call(null,inst_27296,inst_27298);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27343__$1,(13),out,inst_27303);
} else {
if((state_val_27344 === (18))){
var inst_27309 = (state_27343[(7)]);
var inst_27318 = cljs.core.first.call(null,inst_27309);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27343__$1,(20),out,inst_27318);
} else {
if((state_val_27344 === (8))){
var inst_27298 = (state_27343[(9)]);
var inst_27297 = (state_27343[(11)]);
var inst_27300 = (inst_27298 < inst_27297);
var inst_27301 = inst_27300;
var state_27343__$1 = state_27343;
if(cljs.core.truth_(inst_27301)){
var statearr_27377_27408 = state_27343__$1;
(statearr_27377_27408[(1)] = (10));

} else {
var statearr_27378_27409 = state_27343__$1;
(statearr_27378_27409[(1)] = (11));

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
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____0 = (function (){
var statearr_27382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27382[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__);

(statearr_27382[(1)] = (1));

return statearr_27382;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____1 = (function (state_27343){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27383){if((e27383 instanceof Object)){
var ex__24800__auto__ = e27383;
var statearr_27384_27410 = state_27343;
(statearr_27384_27410[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27411 = state_27343;
state_27343 = G__27411;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24797__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_27385 = f__24909__auto__.call(null);
(statearr_27385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_27385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27412 = [];
var len__22859__auto___27415 = arguments.length;
var i__22860__auto___27416 = (0);
while(true){
if((i__22860__auto___27416 < len__22859__auto___27415)){
args27412.push((arguments[i__22860__auto___27416]));

var G__27417 = (i__22860__auto___27416 + (1));
i__22860__auto___27416 = G__27417;
continue;
} else {
}
break;
}

var G__27414 = args27412.length;
switch (G__27414) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27412.length)].join('')));

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
var args27419 = [];
var len__22859__auto___27422 = arguments.length;
var i__22860__auto___27423 = (0);
while(true){
if((i__22860__auto___27423 < len__22859__auto___27422)){
args27419.push((arguments[i__22860__auto___27423]));

var G__27424 = (i__22860__auto___27423 + (1));
i__22860__auto___27423 = G__27424;
continue;
} else {
}
break;
}

var G__27421 = args27419.length;
switch (G__27421) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27419.length)].join('')));

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
var args27426 = [];
var len__22859__auto___27477 = arguments.length;
var i__22860__auto___27478 = (0);
while(true){
if((i__22860__auto___27478 < len__22859__auto___27477)){
args27426.push((arguments[i__22860__auto___27478]));

var G__27479 = (i__22860__auto___27478 + (1));
i__22860__auto___27478 = G__27479;
continue;
} else {
}
break;
}

var G__27428 = args27426.length;
switch (G__27428) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27426.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27481,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27481,out){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27447 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27482 = state_27452__$1;
(statearr_27454_27482[(2)] = inst_27447);

(statearr_27454_27482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (1))){
var inst_27429 = null;
var state_27452__$1 = (function (){var statearr_27455 = state_27452;
(statearr_27455[(7)] = inst_27429);

return statearr_27455;
})();
var statearr_27456_27483 = state_27452__$1;
(statearr_27456_27483[(2)] = null);

(statearr_27456_27483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27432 = (state_27452[(8)]);
var inst_27432__$1 = (state_27452[(2)]);
var inst_27433 = (inst_27432__$1 == null);
var inst_27434 = cljs.core.not.call(null,inst_27433);
var state_27452__$1 = (function (){var statearr_27457 = state_27452;
(statearr_27457[(8)] = inst_27432__$1);

return statearr_27457;
})();
if(inst_27434){
var statearr_27458_27484 = state_27452__$1;
(statearr_27458_27484[(1)] = (5));

} else {
var statearr_27459_27485 = state_27452__$1;
(statearr_27459_27485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var state_27452__$1 = state_27452;
var statearr_27460_27486 = state_27452__$1;
(statearr_27460_27486[(2)] = null);

(statearr_27460_27486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27449 = (state_27452[(2)]);
var inst_27450 = cljs.core.async.close_BANG_.call(null,out);
var state_27452__$1 = (function (){var statearr_27461 = state_27452;
(statearr_27461[(9)] = inst_27449);

return statearr_27461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),ch);
} else {
if((state_val_27453 === (11))){
var inst_27432 = (state_27452[(8)]);
var inst_27441 = (state_27452[(2)]);
var inst_27429 = inst_27432;
var state_27452__$1 = (function (){var statearr_27462 = state_27452;
(statearr_27462[(7)] = inst_27429);

(statearr_27462[(10)] = inst_27441);

return statearr_27462;
})();
var statearr_27463_27487 = state_27452__$1;
(statearr_27463_27487[(2)] = null);

(statearr_27463_27487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (9))){
var inst_27432 = (state_27452[(8)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,(11),out,inst_27432);
} else {
if((state_val_27453 === (5))){
var inst_27432 = (state_27452[(8)]);
var inst_27429 = (state_27452[(7)]);
var inst_27436 = cljs.core._EQ_.call(null,inst_27432,inst_27429);
var state_27452__$1 = state_27452;
if(inst_27436){
var statearr_27465_27488 = state_27452__$1;
(statearr_27465_27488[(1)] = (8));

} else {
var statearr_27466_27489 = state_27452__$1;
(statearr_27466_27489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (10))){
var inst_27444 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27467_27490 = state_27452__$1;
(statearr_27467_27490[(2)] = inst_27444);

(statearr_27467_27490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (8))){
var inst_27429 = (state_27452[(7)]);
var tmp27464 = inst_27429;
var inst_27429__$1 = tmp27464;
var state_27452__$1 = (function (){var statearr_27468 = state_27452;
(statearr_27468[(7)] = inst_27429__$1);

return statearr_27468;
})();
var statearr_27469_27491 = state_27452__$1;
(statearr_27469_27491[(2)] = null);

(statearr_27469_27491[(1)] = (2));


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
});})(c__24908__auto___27481,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27481,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_27473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27473[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_27473[(1)] = (1));

return statearr_27473;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_27452){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27474){if((e27474 instanceof Object)){
var ex__24800__auto__ = e27474;
var statearr_27475_27492 = state_27452;
(statearr_27475_27492[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27493 = state_27452;
state_27452 = G__27493;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27481,out))
})();
var state__24910__auto__ = (function (){var statearr_27476 = f__24909__auto__.call(null);
(statearr_27476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27481);

return statearr_27476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27481,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27494 = [];
var len__22859__auto___27564 = arguments.length;
var i__22860__auto___27565 = (0);
while(true){
if((i__22860__auto___27565 < len__22859__auto___27564)){
args27494.push((arguments[i__22860__auto___27565]));

var G__27566 = (i__22860__auto___27565 + (1));
i__22860__auto___27565 = G__27566;
continue;
} else {
}
break;
}

var G__27496 = args27494.length;
switch (G__27496) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27494.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27568,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27568,out){
return (function (state_27534){
var state_val_27535 = (state_27534[(1)]);
if((state_val_27535 === (7))){
var inst_27530 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
var statearr_27536_27569 = state_27534__$1;
(statearr_27536_27569[(2)] = inst_27530);

(statearr_27536_27569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (1))){
var inst_27497 = (new Array(n));
var inst_27498 = inst_27497;
var inst_27499 = (0);
var state_27534__$1 = (function (){var statearr_27537 = state_27534;
(statearr_27537[(7)] = inst_27498);

(statearr_27537[(8)] = inst_27499);

return statearr_27537;
})();
var statearr_27538_27570 = state_27534__$1;
(statearr_27538_27570[(2)] = null);

(statearr_27538_27570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (4))){
var inst_27502 = (state_27534[(9)]);
var inst_27502__$1 = (state_27534[(2)]);
var inst_27503 = (inst_27502__$1 == null);
var inst_27504 = cljs.core.not.call(null,inst_27503);
var state_27534__$1 = (function (){var statearr_27539 = state_27534;
(statearr_27539[(9)] = inst_27502__$1);

return statearr_27539;
})();
if(inst_27504){
var statearr_27540_27571 = state_27534__$1;
(statearr_27540_27571[(1)] = (5));

} else {
var statearr_27541_27572 = state_27534__$1;
(statearr_27541_27572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (15))){
var inst_27524 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
var statearr_27542_27573 = state_27534__$1;
(statearr_27542_27573[(2)] = inst_27524);

(statearr_27542_27573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (13))){
var state_27534__$1 = state_27534;
var statearr_27543_27574 = state_27534__$1;
(statearr_27543_27574[(2)] = null);

(statearr_27543_27574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (6))){
var inst_27499 = (state_27534[(8)]);
var inst_27520 = (inst_27499 > (0));
var state_27534__$1 = state_27534;
if(cljs.core.truth_(inst_27520)){
var statearr_27544_27575 = state_27534__$1;
(statearr_27544_27575[(1)] = (12));

} else {
var statearr_27545_27576 = state_27534__$1;
(statearr_27545_27576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (3))){
var inst_27532 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27534__$1,inst_27532);
} else {
if((state_val_27535 === (12))){
var inst_27498 = (state_27534[(7)]);
var inst_27522 = cljs.core.vec.call(null,inst_27498);
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27534__$1,(15),out,inst_27522);
} else {
if((state_val_27535 === (2))){
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27534__$1,(4),ch);
} else {
if((state_val_27535 === (11))){
var inst_27514 = (state_27534[(2)]);
var inst_27515 = (new Array(n));
var inst_27498 = inst_27515;
var inst_27499 = (0);
var state_27534__$1 = (function (){var statearr_27546 = state_27534;
(statearr_27546[(7)] = inst_27498);

(statearr_27546[(8)] = inst_27499);

(statearr_27546[(10)] = inst_27514);

return statearr_27546;
})();
var statearr_27547_27577 = state_27534__$1;
(statearr_27547_27577[(2)] = null);

(statearr_27547_27577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (9))){
var inst_27498 = (state_27534[(7)]);
var inst_27512 = cljs.core.vec.call(null,inst_27498);
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27534__$1,(11),out,inst_27512);
} else {
if((state_val_27535 === (5))){
var inst_27498 = (state_27534[(7)]);
var inst_27499 = (state_27534[(8)]);
var inst_27507 = (state_27534[(11)]);
var inst_27502 = (state_27534[(9)]);
var inst_27506 = (inst_27498[inst_27499] = inst_27502);
var inst_27507__$1 = (inst_27499 + (1));
var inst_27508 = (inst_27507__$1 < n);
var state_27534__$1 = (function (){var statearr_27548 = state_27534;
(statearr_27548[(12)] = inst_27506);

(statearr_27548[(11)] = inst_27507__$1);

return statearr_27548;
})();
if(cljs.core.truth_(inst_27508)){
var statearr_27549_27578 = state_27534__$1;
(statearr_27549_27578[(1)] = (8));

} else {
var statearr_27550_27579 = state_27534__$1;
(statearr_27550_27579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (14))){
var inst_27527 = (state_27534[(2)]);
var inst_27528 = cljs.core.async.close_BANG_.call(null,out);
var state_27534__$1 = (function (){var statearr_27552 = state_27534;
(statearr_27552[(13)] = inst_27527);

return statearr_27552;
})();
var statearr_27553_27580 = state_27534__$1;
(statearr_27553_27580[(2)] = inst_27528);

(statearr_27553_27580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (10))){
var inst_27518 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
var statearr_27554_27581 = state_27534__$1;
(statearr_27554_27581[(2)] = inst_27518);

(statearr_27554_27581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (8))){
var inst_27498 = (state_27534[(7)]);
var inst_27507 = (state_27534[(11)]);
var tmp27551 = inst_27498;
var inst_27498__$1 = tmp27551;
var inst_27499 = inst_27507;
var state_27534__$1 = (function (){var statearr_27555 = state_27534;
(statearr_27555[(7)] = inst_27498__$1);

(statearr_27555[(8)] = inst_27499);

return statearr_27555;
})();
var statearr_27556_27582 = state_27534__$1;
(statearr_27556_27582[(2)] = null);

(statearr_27556_27582[(1)] = (2));


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
});})(c__24908__auto___27568,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27568,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_27560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27560[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_27534){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27561){if((e27561 instanceof Object)){
var ex__24800__auto__ = e27561;
var statearr_27562_27583 = state_27534;
(statearr_27562_27583[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27584 = state_27534;
state_27534 = G__27584;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_27534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_27534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27568,out))
})();
var state__24910__auto__ = (function (){var statearr_27563 = f__24909__auto__.call(null);
(statearr_27563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27568);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27568,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27585 = [];
var len__22859__auto___27659 = arguments.length;
var i__22860__auto___27660 = (0);
while(true){
if((i__22860__auto___27660 < len__22859__auto___27659)){
args27585.push((arguments[i__22860__auto___27660]));

var G__27661 = (i__22860__auto___27660 + (1));
i__22860__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var G__27587 = args27585.length;
switch (G__27587) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27585.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24908__auto___27663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___27663,out){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___27663,out){
return (function (state_27629){
var state_val_27630 = (state_27629[(1)]);
if((state_val_27630 === (7))){
var inst_27625 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27631_27664 = state_27629__$1;
(statearr_27631_27664[(2)] = inst_27625);

(statearr_27631_27664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (1))){
var inst_27588 = [];
var inst_27589 = inst_27588;
var inst_27590 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27629__$1 = (function (){var statearr_27632 = state_27629;
(statearr_27632[(7)] = inst_27590);

(statearr_27632[(8)] = inst_27589);

return statearr_27632;
})();
var statearr_27633_27665 = state_27629__$1;
(statearr_27633_27665[(2)] = null);

(statearr_27633_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (4))){
var inst_27593 = (state_27629[(9)]);
var inst_27593__$1 = (state_27629[(2)]);
var inst_27594 = (inst_27593__$1 == null);
var inst_27595 = cljs.core.not.call(null,inst_27594);
var state_27629__$1 = (function (){var statearr_27634 = state_27629;
(statearr_27634[(9)] = inst_27593__$1);

return statearr_27634;
})();
if(inst_27595){
var statearr_27635_27666 = state_27629__$1;
(statearr_27635_27666[(1)] = (5));

} else {
var statearr_27636_27667 = state_27629__$1;
(statearr_27636_27667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (15))){
var inst_27619 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27637_27668 = state_27629__$1;
(statearr_27637_27668[(2)] = inst_27619);

(statearr_27637_27668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (13))){
var state_27629__$1 = state_27629;
var statearr_27638_27669 = state_27629__$1;
(statearr_27638_27669[(2)] = null);

(statearr_27638_27669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (6))){
var inst_27589 = (state_27629[(8)]);
var inst_27614 = inst_27589.length;
var inst_27615 = (inst_27614 > (0));
var state_27629__$1 = state_27629;
if(cljs.core.truth_(inst_27615)){
var statearr_27639_27670 = state_27629__$1;
(statearr_27639_27670[(1)] = (12));

} else {
var statearr_27640_27671 = state_27629__$1;
(statearr_27640_27671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (3))){
var inst_27627 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27629__$1,inst_27627);
} else {
if((state_val_27630 === (12))){
var inst_27589 = (state_27629[(8)]);
var inst_27617 = cljs.core.vec.call(null,inst_27589);
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27629__$1,(15),out,inst_27617);
} else {
if((state_val_27630 === (2))){
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27629__$1,(4),ch);
} else {
if((state_val_27630 === (11))){
var inst_27593 = (state_27629[(9)]);
var inst_27597 = (state_27629[(10)]);
var inst_27607 = (state_27629[(2)]);
var inst_27608 = [];
var inst_27609 = inst_27608.push(inst_27593);
var inst_27589 = inst_27608;
var inst_27590 = inst_27597;
var state_27629__$1 = (function (){var statearr_27641 = state_27629;
(statearr_27641[(7)] = inst_27590);

(statearr_27641[(11)] = inst_27607);

(statearr_27641[(12)] = inst_27609);

(statearr_27641[(8)] = inst_27589);

return statearr_27641;
})();
var statearr_27642_27672 = state_27629__$1;
(statearr_27642_27672[(2)] = null);

(statearr_27642_27672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (9))){
var inst_27589 = (state_27629[(8)]);
var inst_27605 = cljs.core.vec.call(null,inst_27589);
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27629__$1,(11),out,inst_27605);
} else {
if((state_val_27630 === (5))){
var inst_27590 = (state_27629[(7)]);
var inst_27593 = (state_27629[(9)]);
var inst_27597 = (state_27629[(10)]);
var inst_27597__$1 = f.call(null,inst_27593);
var inst_27598 = cljs.core._EQ_.call(null,inst_27597__$1,inst_27590);
var inst_27599 = cljs.core.keyword_identical_QMARK_.call(null,inst_27590,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27600 = (inst_27598) || (inst_27599);
var state_27629__$1 = (function (){var statearr_27643 = state_27629;
(statearr_27643[(10)] = inst_27597__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27600)){
var statearr_27644_27673 = state_27629__$1;
(statearr_27644_27673[(1)] = (8));

} else {
var statearr_27645_27674 = state_27629__$1;
(statearr_27645_27674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (14))){
var inst_27622 = (state_27629[(2)]);
var inst_27623 = cljs.core.async.close_BANG_.call(null,out);
var state_27629__$1 = (function (){var statearr_27647 = state_27629;
(statearr_27647[(13)] = inst_27622);

return statearr_27647;
})();
var statearr_27648_27675 = state_27629__$1;
(statearr_27648_27675[(2)] = inst_27623);

(statearr_27648_27675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (10))){
var inst_27612 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27649_27676 = state_27629__$1;
(statearr_27649_27676[(2)] = inst_27612);

(statearr_27649_27676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (8))){
var inst_27589 = (state_27629[(8)]);
var inst_27593 = (state_27629[(9)]);
var inst_27597 = (state_27629[(10)]);
var inst_27602 = inst_27589.push(inst_27593);
var tmp27646 = inst_27589;
var inst_27589__$1 = tmp27646;
var inst_27590 = inst_27597;
var state_27629__$1 = (function (){var statearr_27650 = state_27629;
(statearr_27650[(7)] = inst_27590);

(statearr_27650[(8)] = inst_27589__$1);

(statearr_27650[(14)] = inst_27602);

return statearr_27650;
})();
var statearr_27651_27677 = state_27629__$1;
(statearr_27651_27677[(2)] = null);

(statearr_27651_27677[(1)] = (2));


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
});})(c__24908__auto___27663,out))
;
return ((function (switch__24796__auto__,c__24908__auto___27663,out){
return (function() {
var cljs$core$async$state_machine__24797__auto__ = null;
var cljs$core$async$state_machine__24797__auto____0 = (function (){
var statearr_27655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27655[(0)] = cljs$core$async$state_machine__24797__auto__);

(statearr_27655[(1)] = (1));

return statearr_27655;
});
var cljs$core$async$state_machine__24797__auto____1 = (function (state_27629){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_27629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e27656){if((e27656 instanceof Object)){
var ex__24800__auto__ = e27656;
var statearr_27657_27678 = state_27629;
(statearr_27657_27678[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27679 = state_27629;
state_27629 = G__27679;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
cljs$core$async$state_machine__24797__auto__ = function(state_27629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24797__auto____1.call(this,state_27629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24797__auto____0;
cljs$core$async$state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24797__auto____1;
return cljs$core$async$state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___27663,out))
})();
var state__24910__auto__ = (function (){var statearr_27658 = f__24909__auto__.call(null);
(statearr_27658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___27663);

return statearr_27658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___27663,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map