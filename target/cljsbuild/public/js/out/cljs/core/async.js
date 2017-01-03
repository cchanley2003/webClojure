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
var args25623 = [];
var len__23309__auto___25629 = arguments.length;
var i__23310__auto___25630 = (0);
while(true){
if((i__23310__auto___25630 < len__23309__auto___25629)){
args25623.push((arguments[i__23310__auto___25630]));

var G__25631 = (i__23310__auto___25630 + (1));
i__23310__auto___25630 = G__25631;
continue;
} else {
}
break;
}

var G__25625 = args25623.length;
switch (G__25625) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25623.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25626 = (function (f,blockable,meta25627){
this.f = f;
this.blockable = blockable;
this.meta25627 = meta25627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25628,meta25627__$1){
var self__ = this;
var _25628__$1 = this;
return (new cljs.core.async.t_cljs$core$async25626(self__.f,self__.blockable,meta25627__$1));
});

cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25628){
var self__ = this;
var _25628__$1 = this;
return self__.meta25627;
});

cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25627","meta25627",-1869728254,null)], null);
});

cljs.core.async.t_cljs$core$async25626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25626";

cljs.core.async.t_cljs$core$async25626.cljs$lang$ctorPrWriter = (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async25626");
});

cljs.core.async.__GT_t_cljs$core$async25626 = (function cljs$core$async$__GT_t_cljs$core$async25626(f__$1,blockable__$1,meta25627){
return (new cljs.core.async.t_cljs$core$async25626(f__$1,blockable__$1,meta25627));
});

}

return (new cljs.core.async.t_cljs$core$async25626(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args25635 = [];
var len__23309__auto___25638 = arguments.length;
var i__23310__auto___25639 = (0);
while(true){
if((i__23310__auto___25639 < len__23309__auto___25638)){
args25635.push((arguments[i__23310__auto___25639]));

var G__25640 = (i__23310__auto___25639 + (1));
i__23310__auto___25639 = G__25640;
continue;
} else {
}
break;
}

var G__25637 = args25635.length;
switch (G__25637) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25635.length)].join('')));

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
var args25642 = [];
var len__23309__auto___25645 = arguments.length;
var i__23310__auto___25646 = (0);
while(true){
if((i__23310__auto___25646 < len__23309__auto___25645)){
args25642.push((arguments[i__23310__auto___25646]));

var G__25647 = (i__23310__auto___25646 + (1));
i__23310__auto___25646 = G__25647;
continue;
} else {
}
break;
}

var G__25644 = args25642.length;
switch (G__25644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25642.length)].join('')));

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
var args25649 = [];
var len__23309__auto___25652 = arguments.length;
var i__23310__auto___25653 = (0);
while(true){
if((i__23310__auto___25653 < len__23309__auto___25652)){
args25649.push((arguments[i__23310__auto___25653]));

var G__25654 = (i__23310__auto___25653 + (1));
i__23310__auto___25653 = G__25654;
continue;
} else {
}
break;
}

var G__25651 = args25649.length;
switch (G__25651) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25649.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25656 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25656);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25656,ret){
return (function (){
return fn1.call(null,val_25656);
});})(val_25656,ret))
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
var args25657 = [];
var len__23309__auto___25660 = arguments.length;
var i__23310__auto___25661 = (0);
while(true){
if((i__23310__auto___25661 < len__23309__auto___25660)){
args25657.push((arguments[i__23310__auto___25661]));

var G__25662 = (i__23310__auto___25661 + (1));
i__23310__auto___25661 = G__25662;
continue;
} else {
}
break;
}

var G__25659 = args25657.length;
switch (G__25659) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25657.length)].join('')));

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
var n__23154__auto___25664 = n;
var x_25665 = (0);
while(true){
if((x_25665 < n__23154__auto___25664)){
(a[x_25665] = (0));

var G__25666 = (x_25665 + (1));
x_25665 = G__25666;
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

var G__25667 = (i + (1));
i = G__25667;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25671 = (function (alt_flag,flag,meta25672){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25672 = meta25672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25673,meta25672__$1){
var self__ = this;
var _25673__$1 = this;
return (new cljs.core.async.t_cljs$core$async25671(self__.alt_flag,self__.flag,meta25672__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25673){
var self__ = this;
var _25673__$1 = this;
return self__.meta25672;
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25672","meta25672",-1756291704,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25671";

cljs.core.async.t_cljs$core$async25671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async25671");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25671 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25671(alt_flag__$1,flag__$1,meta25672){
return (new cljs.core.async.t_cljs$core$async25671(alt_flag__$1,flag__$1,meta25672));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25671(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25677 = (function (alt_handler,flag,cb,meta25678){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25678 = meta25678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25679,meta25678__$1){
var self__ = this;
var _25679__$1 = this;
return (new cljs.core.async.t_cljs$core$async25677(self__.alt_handler,self__.flag,self__.cb,meta25678__$1));
});

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25679){
var self__ = this;
var _25679__$1 = this;
return self__.meta25678;
});

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25678","meta25678",1496111840,null)], null);
});

cljs.core.async.t_cljs$core$async25677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25677";

cljs.core.async.t_cljs$core$async25677.cljs$lang$ctorPrWriter = (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async25677");
});

cljs.core.async.__GT_t_cljs$core$async25677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25677(alt_handler__$1,flag__$1,cb__$1,meta25678){
return (new cljs.core.async.t_cljs$core$async25677(alt_handler__$1,flag__$1,cb__$1,meta25678));
});

}

return (new cljs.core.async.t_cljs$core$async25677(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25681_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22239__auto__ = wport;
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25682 = (i + (1));
i = G__25682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22239__auto__ = ret;
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22227__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22227__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22227__auto__;
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
var args__23316__auto__ = [];
var len__23309__auto___25688 = arguments.length;
var i__23310__auto___25689 = (0);
while(true){
if((i__23310__auto___25689 < len__23309__auto___25688)){
args__23316__auto__.push((arguments[i__23310__auto___25689]));

var G__25690 = (i__23310__auto___25689 + (1));
i__23310__auto___25689 = G__25690;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((1) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23317__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25685){
var map__25686 = p__25685;
var map__25686__$1 = ((((!((map__25686 == null)))?((((map__25686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25686):map__25686);
var opts = map__25686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25683){
var G__25684 = cljs.core.first.call(null,seq25683);
var seq25683__$1 = cljs.core.next.call(null,seq25683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25684,seq25683__$1);
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
var args25691 = [];
var len__23309__auto___25741 = arguments.length;
var i__23310__auto___25742 = (0);
while(true){
if((i__23310__auto___25742 < len__23309__auto___25741)){
args25691.push((arguments[i__23310__auto___25742]));

var G__25743 = (i__23310__auto___25742 + (1));
i__23310__auto___25742 = G__25743;
continue;
} else {
}
break;
}

var G__25693 = args25691.length;
switch (G__25693) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25691.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25578__auto___25745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___25745){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___25745){
return (function (state_25717){
var state_val_25718 = (state_25717[(1)]);
if((state_val_25718 === (7))){
var inst_25713 = (state_25717[(2)]);
var state_25717__$1 = state_25717;
var statearr_25719_25746 = state_25717__$1;
(statearr_25719_25746[(2)] = inst_25713);

(statearr_25719_25746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (1))){
var state_25717__$1 = state_25717;
var statearr_25720_25747 = state_25717__$1;
(statearr_25720_25747[(2)] = null);

(statearr_25720_25747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (4))){
var inst_25696 = (state_25717[(7)]);
var inst_25696__$1 = (state_25717[(2)]);
var inst_25697 = (inst_25696__$1 == null);
var state_25717__$1 = (function (){var statearr_25721 = state_25717;
(statearr_25721[(7)] = inst_25696__$1);

return statearr_25721;
})();
if(cljs.core.truth_(inst_25697)){
var statearr_25722_25748 = state_25717__$1;
(statearr_25722_25748[(1)] = (5));

} else {
var statearr_25723_25749 = state_25717__$1;
(statearr_25723_25749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (13))){
var state_25717__$1 = state_25717;
var statearr_25724_25750 = state_25717__$1;
(statearr_25724_25750[(2)] = null);

(statearr_25724_25750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (6))){
var inst_25696 = (state_25717[(7)]);
var state_25717__$1 = state_25717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25717__$1,(11),to,inst_25696);
} else {
if((state_val_25718 === (3))){
var inst_25715 = (state_25717[(2)]);
var state_25717__$1 = state_25717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25717__$1,inst_25715);
} else {
if((state_val_25718 === (12))){
var state_25717__$1 = state_25717;
var statearr_25725_25751 = state_25717__$1;
(statearr_25725_25751[(2)] = null);

(statearr_25725_25751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (2))){
var state_25717__$1 = state_25717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25717__$1,(4),from);
} else {
if((state_val_25718 === (11))){
var inst_25706 = (state_25717[(2)]);
var state_25717__$1 = state_25717;
if(cljs.core.truth_(inst_25706)){
var statearr_25726_25752 = state_25717__$1;
(statearr_25726_25752[(1)] = (12));

} else {
var statearr_25727_25753 = state_25717__$1;
(statearr_25727_25753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (9))){
var state_25717__$1 = state_25717;
var statearr_25728_25754 = state_25717__$1;
(statearr_25728_25754[(2)] = null);

(statearr_25728_25754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (5))){
var state_25717__$1 = state_25717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25729_25755 = state_25717__$1;
(statearr_25729_25755[(1)] = (8));

} else {
var statearr_25730_25756 = state_25717__$1;
(statearr_25730_25756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (14))){
var inst_25711 = (state_25717[(2)]);
var state_25717__$1 = state_25717;
var statearr_25731_25757 = state_25717__$1;
(statearr_25731_25757[(2)] = inst_25711);

(statearr_25731_25757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (10))){
var inst_25703 = (state_25717[(2)]);
var state_25717__$1 = state_25717;
var statearr_25732_25758 = state_25717__$1;
(statearr_25732_25758[(2)] = inst_25703);

(statearr_25732_25758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25718 === (8))){
var inst_25700 = cljs.core.async.close_BANG_.call(null,to);
var state_25717__$1 = state_25717;
var statearr_25733_25759 = state_25717__$1;
(statearr_25733_25759[(2)] = inst_25700);

(statearr_25733_25759[(1)] = (10));


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
});})(c__25578__auto___25745))
;
return ((function (switch__25465__auto__,c__25578__auto___25745){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_25737 = [null,null,null,null,null,null,null,null];
(statearr_25737[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_25737[(1)] = (1));

return statearr_25737;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_25717){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_25717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e25738){if((e25738 instanceof Object)){
var ex__25469__auto__ = e25738;
var statearr_25739_25760 = state_25717;
(statearr_25739_25760[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25761 = state_25717;
state_25717 = G__25761;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_25717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_25717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___25745))
})();
var state__25580__auto__ = (function (){var statearr_25740 = f__25579__auto__.call(null);
(statearr_25740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___25745);

return statearr_25740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___25745))
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
return (function (p__25945){
var vec__25946 = p__25945;
var v = cljs.core.nth.call(null,vec__25946,(0),null);
var p = cljs.core.nth.call(null,vec__25946,(1),null);
var job = vec__25946;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25578__auto___26128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results){
return (function (state_25951){
var state_val_25952 = (state_25951[(1)]);
if((state_val_25952 === (1))){
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25951__$1,(2),res,v);
} else {
if((state_val_25952 === (2))){
var inst_25948 = (state_25951[(2)]);
var inst_25949 = cljs.core.async.close_BANG_.call(null,res);
var state_25951__$1 = (function (){var statearr_25953 = state_25951;
(statearr_25953[(7)] = inst_25948);

return statearr_25953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25951__$1,inst_25949);
} else {
return null;
}
}
});})(c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results))
;
return ((function (switch__25465__auto__,c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_25957 = [null,null,null,null,null,null,null,null];
(statearr_25957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__);

(statearr_25957[(1)] = (1));

return statearr_25957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1 = (function (state_25951){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_25951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e25958){if((e25958 instanceof Object)){
var ex__25469__auto__ = e25958;
var statearr_25959_26129 = state_25951;
(statearr_25959_26129[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26130 = state_25951;
state_25951 = G__26130;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = function(state_25951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1.call(this,state_25951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results))
})();
var state__25580__auto__ = (function (){var statearr_25960 = f__25579__auto__.call(null);
(statearr_25960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26128);

return statearr_25960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___26128,res,vec__25946,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25961){
var vec__25962 = p__25961;
var v = cljs.core.nth.call(null,vec__25962,(0),null);
var p = cljs.core.nth.call(null,vec__25962,(1),null);
var job = vec__25962;
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
var n__23154__auto___26131 = n;
var __26132 = (0);
while(true){
if((__26132 < n__23154__auto___26131)){
var G__25963_26133 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25963_26133) {
case "compute":
var c__25578__auto___26135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26132,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (__26132,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function (state_25976){
var state_val_25977 = (state_25976[(1)]);
if((state_val_25977 === (1))){
var state_25976__$1 = state_25976;
var statearr_25978_26136 = state_25976__$1;
(statearr_25978_26136[(2)] = null);

(statearr_25978_26136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (2))){
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25976__$1,(4),jobs);
} else {
if((state_val_25977 === (3))){
var inst_25974 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25976__$1,inst_25974);
} else {
if((state_val_25977 === (4))){
var inst_25966 = (state_25976[(2)]);
var inst_25967 = process.call(null,inst_25966);
var state_25976__$1 = state_25976;
if(cljs.core.truth_(inst_25967)){
var statearr_25979_26137 = state_25976__$1;
(statearr_25979_26137[(1)] = (5));

} else {
var statearr_25980_26138 = state_25976__$1;
(statearr_25980_26138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (5))){
var state_25976__$1 = state_25976;
var statearr_25981_26139 = state_25976__$1;
(statearr_25981_26139[(2)] = null);

(statearr_25981_26139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (6))){
var state_25976__$1 = state_25976;
var statearr_25982_26140 = state_25976__$1;
(statearr_25982_26140[(2)] = null);

(statearr_25982_26140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (7))){
var inst_25972 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
var statearr_25983_26141 = state_25976__$1;
(statearr_25983_26141[(2)] = inst_25972);

(statearr_25983_26141[(1)] = (3));


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
});})(__26132,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
;
return ((function (__26132,switch__25465__auto__,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_25987 = [null,null,null,null,null,null,null];
(statearr_25987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__);

(statearr_25987[(1)] = (1));

return statearr_25987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1 = (function (state_25976){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_25976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e25988){if((e25988 instanceof Object)){
var ex__25469__auto__ = e25988;
var statearr_25989_26142 = state_25976;
(statearr_25989_26142[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26143 = state_25976;
state_25976 = G__26143;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = function(state_25976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1.call(this,state_25976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__;
})()
;})(__26132,switch__25465__auto__,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
})();
var state__25580__auto__ = (function (){var statearr_25990 = f__25579__auto__.call(null);
(statearr_25990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26135);

return statearr_25990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(__26132,c__25578__auto___26135,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
);


break;
case "async":
var c__25578__auto___26144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26132,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (__26132,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function (state_26003){
var state_val_26004 = (state_26003[(1)]);
if((state_val_26004 === (1))){
var state_26003__$1 = state_26003;
var statearr_26005_26145 = state_26003__$1;
(statearr_26005_26145[(2)] = null);

(statearr_26005_26145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (2))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(4),jobs);
} else {
if((state_val_26004 === (3))){
var inst_26001 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26003__$1,inst_26001);
} else {
if((state_val_26004 === (4))){
var inst_25993 = (state_26003[(2)]);
var inst_25994 = async.call(null,inst_25993);
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25994)){
var statearr_26006_26146 = state_26003__$1;
(statearr_26006_26146[(1)] = (5));

} else {
var statearr_26007_26147 = state_26003__$1;
(statearr_26007_26147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (5))){
var state_26003__$1 = state_26003;
var statearr_26008_26148 = state_26003__$1;
(statearr_26008_26148[(2)] = null);

(statearr_26008_26148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (6))){
var state_26003__$1 = state_26003;
var statearr_26009_26149 = state_26003__$1;
(statearr_26009_26149[(2)] = null);

(statearr_26009_26149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (7))){
var inst_25999 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26010_26150 = state_26003__$1;
(statearr_26010_26150[(2)] = inst_25999);

(statearr_26010_26150[(1)] = (3));


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
});})(__26132,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
;
return ((function (__26132,switch__25465__auto__,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null];
(statearr_26014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1 = (function (state_26003){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__25469__auto__ = e26015;
var statearr_26016_26151 = state_26003;
(statearr_26016_26151[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26152 = state_26003;
state_26003 = G__26152;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__;
})()
;})(__26132,switch__25465__auto__,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
})();
var state__25580__auto__ = (function (){var statearr_26017 = f__25579__auto__.call(null);
(statearr_26017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26144);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(__26132,c__25578__auto___26144,G__25963_26133,n__23154__auto___26131,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26153 = (__26132 + (1));
__26132 = G__26153;
continue;
} else {
}
break;
}

var c__25578__auto___26154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___26154,jobs,results,process,async){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___26154,jobs,results,process,async){
return (function (state_26039){
var state_val_26040 = (state_26039[(1)]);
if((state_val_26040 === (1))){
var state_26039__$1 = state_26039;
var statearr_26041_26155 = state_26039__$1;
(statearr_26041_26155[(2)] = null);

(statearr_26041_26155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (2))){
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(4),from);
} else {
if((state_val_26040 === (3))){
var inst_26037 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26039__$1,inst_26037);
} else {
if((state_val_26040 === (4))){
var inst_26020 = (state_26039[(7)]);
var inst_26020__$1 = (state_26039[(2)]);
var inst_26021 = (inst_26020__$1 == null);
var state_26039__$1 = (function (){var statearr_26042 = state_26039;
(statearr_26042[(7)] = inst_26020__$1);

return statearr_26042;
})();
if(cljs.core.truth_(inst_26021)){
var statearr_26043_26156 = state_26039__$1;
(statearr_26043_26156[(1)] = (5));

} else {
var statearr_26044_26157 = state_26039__$1;
(statearr_26044_26157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (5))){
var inst_26023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26039__$1 = state_26039;
var statearr_26045_26158 = state_26039__$1;
(statearr_26045_26158[(2)] = inst_26023);

(statearr_26045_26158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (6))){
var inst_26025 = (state_26039[(8)]);
var inst_26020 = (state_26039[(7)]);
var inst_26025__$1 = cljs.core.async.chan.call(null,(1));
var inst_26026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26027 = [inst_26020,inst_26025__$1];
var inst_26028 = (new cljs.core.PersistentVector(null,2,(5),inst_26026,inst_26027,null));
var state_26039__$1 = (function (){var statearr_26046 = state_26039;
(statearr_26046[(8)] = inst_26025__$1);

return statearr_26046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26039__$1,(8),jobs,inst_26028);
} else {
if((state_val_26040 === (7))){
var inst_26035 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26047_26159 = state_26039__$1;
(statearr_26047_26159[(2)] = inst_26035);

(statearr_26047_26159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (8))){
var inst_26025 = (state_26039[(8)]);
var inst_26030 = (state_26039[(2)]);
var state_26039__$1 = (function (){var statearr_26048 = state_26039;
(statearr_26048[(9)] = inst_26030);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26039__$1,(9),results,inst_26025);
} else {
if((state_val_26040 === (9))){
var inst_26032 = (state_26039[(2)]);
var state_26039__$1 = (function (){var statearr_26049 = state_26039;
(statearr_26049[(10)] = inst_26032);

return statearr_26049;
})();
var statearr_26050_26160 = state_26039__$1;
(statearr_26050_26160[(2)] = null);

(statearr_26050_26160[(1)] = (2));


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
});})(c__25578__auto___26154,jobs,results,process,async))
;
return ((function (switch__25465__auto__,c__25578__auto___26154,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_26054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__);

(statearr_26054[(1)] = (1));

return statearr_26054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1 = (function (state_26039){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26055){if((e26055 instanceof Object)){
var ex__25469__auto__ = e26055;
var statearr_26056_26161 = state_26039;
(statearr_26056_26161[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26162 = state_26039;
state_26039 = G__26162;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___26154,jobs,results,process,async))
})();
var state__25580__auto__ = (function (){var statearr_26057 = f__25579__auto__.call(null);
(statearr_26057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26154);

return statearr_26057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___26154,jobs,results,process,async))
);


var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__,jobs,results,process,async){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__,jobs,results,process,async){
return (function (state_26095){
var state_val_26096 = (state_26095[(1)]);
if((state_val_26096 === (7))){
var inst_26091 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26097_26163 = state_26095__$1;
(statearr_26097_26163[(2)] = inst_26091);

(statearr_26097_26163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (20))){
var state_26095__$1 = state_26095;
var statearr_26098_26164 = state_26095__$1;
(statearr_26098_26164[(2)] = null);

(statearr_26098_26164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (1))){
var state_26095__$1 = state_26095;
var statearr_26099_26165 = state_26095__$1;
(statearr_26099_26165[(2)] = null);

(statearr_26099_26165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (4))){
var inst_26060 = (state_26095[(7)]);
var inst_26060__$1 = (state_26095[(2)]);
var inst_26061 = (inst_26060__$1 == null);
var state_26095__$1 = (function (){var statearr_26100 = state_26095;
(statearr_26100[(7)] = inst_26060__$1);

return statearr_26100;
})();
if(cljs.core.truth_(inst_26061)){
var statearr_26101_26166 = state_26095__$1;
(statearr_26101_26166[(1)] = (5));

} else {
var statearr_26102_26167 = state_26095__$1;
(statearr_26102_26167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (15))){
var inst_26073 = (state_26095[(8)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(18),to,inst_26073);
} else {
if((state_val_26096 === (21))){
var inst_26086 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26103_26168 = state_26095__$1;
(statearr_26103_26168[(2)] = inst_26086);

(statearr_26103_26168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (13))){
var inst_26088 = (state_26095[(2)]);
var state_26095__$1 = (function (){var statearr_26104 = state_26095;
(statearr_26104[(9)] = inst_26088);

return statearr_26104;
})();
var statearr_26105_26169 = state_26095__$1;
(statearr_26105_26169[(2)] = null);

(statearr_26105_26169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (6))){
var inst_26060 = (state_26095[(7)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(11),inst_26060);
} else {
if((state_val_26096 === (17))){
var inst_26081 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
if(cljs.core.truth_(inst_26081)){
var statearr_26106_26170 = state_26095__$1;
(statearr_26106_26170[(1)] = (19));

} else {
var statearr_26107_26171 = state_26095__$1;
(statearr_26107_26171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (3))){
var inst_26093 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else {
if((state_val_26096 === (12))){
var inst_26070 = (state_26095[(10)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(14),inst_26070);
} else {
if((state_val_26096 === (2))){
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(4),results);
} else {
if((state_val_26096 === (19))){
var state_26095__$1 = state_26095;
var statearr_26108_26172 = state_26095__$1;
(statearr_26108_26172[(2)] = null);

(statearr_26108_26172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (11))){
var inst_26070 = (state_26095[(2)]);
var state_26095__$1 = (function (){var statearr_26109 = state_26095;
(statearr_26109[(10)] = inst_26070);

return statearr_26109;
})();
var statearr_26110_26173 = state_26095__$1;
(statearr_26110_26173[(2)] = null);

(statearr_26110_26173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (9))){
var state_26095__$1 = state_26095;
var statearr_26111_26174 = state_26095__$1;
(statearr_26111_26174[(2)] = null);

(statearr_26111_26174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (5))){
var state_26095__$1 = state_26095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26112_26175 = state_26095__$1;
(statearr_26112_26175[(1)] = (8));

} else {
var statearr_26113_26176 = state_26095__$1;
(statearr_26113_26176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (14))){
var inst_26073 = (state_26095[(8)]);
var inst_26075 = (state_26095[(11)]);
var inst_26073__$1 = (state_26095[(2)]);
var inst_26074 = (inst_26073__$1 == null);
var inst_26075__$1 = cljs.core.not.call(null,inst_26074);
var state_26095__$1 = (function (){var statearr_26114 = state_26095;
(statearr_26114[(8)] = inst_26073__$1);

(statearr_26114[(11)] = inst_26075__$1);

return statearr_26114;
})();
if(inst_26075__$1){
var statearr_26115_26177 = state_26095__$1;
(statearr_26115_26177[(1)] = (15));

} else {
var statearr_26116_26178 = state_26095__$1;
(statearr_26116_26178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (16))){
var inst_26075 = (state_26095[(11)]);
var state_26095__$1 = state_26095;
var statearr_26117_26179 = state_26095__$1;
(statearr_26117_26179[(2)] = inst_26075);

(statearr_26117_26179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (10))){
var inst_26067 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26118_26180 = state_26095__$1;
(statearr_26118_26180[(2)] = inst_26067);

(statearr_26118_26180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (18))){
var inst_26078 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26119_26181 = state_26095__$1;
(statearr_26119_26181[(2)] = inst_26078);

(statearr_26119_26181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (8))){
var inst_26064 = cljs.core.async.close_BANG_.call(null,to);
var state_26095__$1 = state_26095;
var statearr_26120_26182 = state_26095__$1;
(statearr_26120_26182[(2)] = inst_26064);

(statearr_26120_26182[(1)] = (10));


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
});})(c__25578__auto__,jobs,results,process,async))
;
return ((function (switch__25465__auto__,c__25578__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1 = (function (state_26095){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__25469__auto__ = e26125;
var statearr_26126_26183 = state_26095;
(statearr_26126_26183[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26184 = state_26095;
state_26095 = G__26184;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__,jobs,results,process,async))
})();
var state__25580__auto__ = (function (){var statearr_26127 = f__25579__auto__.call(null);
(statearr_26127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__,jobs,results,process,async))
);

return c__25578__auto__;
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
var args26185 = [];
var len__23309__auto___26188 = arguments.length;
var i__23310__auto___26189 = (0);
while(true){
if((i__23310__auto___26189 < len__23309__auto___26188)){
args26185.push((arguments[i__23310__auto___26189]));

var G__26190 = (i__23310__auto___26189 + (1));
i__23310__auto___26189 = G__26190;
continue;
} else {
}
break;
}

var G__26187 = args26185.length;
switch (G__26187) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26185.length)].join('')));

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
var args26192 = [];
var len__23309__auto___26195 = arguments.length;
var i__23310__auto___26196 = (0);
while(true){
if((i__23310__auto___26196 < len__23309__auto___26195)){
args26192.push((arguments[i__23310__auto___26196]));

var G__26197 = (i__23310__auto___26196 + (1));
i__23310__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var G__26194 = args26192.length;
switch (G__26194) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26192.length)].join('')));

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
var args26199 = [];
var len__23309__auto___26252 = arguments.length;
var i__23310__auto___26253 = (0);
while(true){
if((i__23310__auto___26253 < len__23309__auto___26252)){
args26199.push((arguments[i__23310__auto___26253]));

var G__26254 = (i__23310__auto___26253 + (1));
i__23310__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var G__26201 = args26199.length;
switch (G__26201) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26199.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25578__auto___26256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___26256,tc,fc){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___26256,tc,fc){
return (function (state_26227){
var state_val_26228 = (state_26227[(1)]);
if((state_val_26228 === (7))){
var inst_26223 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26229_26257 = state_26227__$1;
(statearr_26229_26257[(2)] = inst_26223);

(statearr_26229_26257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (1))){
var state_26227__$1 = state_26227;
var statearr_26230_26258 = state_26227__$1;
(statearr_26230_26258[(2)] = null);

(statearr_26230_26258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (4))){
var inst_26204 = (state_26227[(7)]);
var inst_26204__$1 = (state_26227[(2)]);
var inst_26205 = (inst_26204__$1 == null);
var state_26227__$1 = (function (){var statearr_26231 = state_26227;
(statearr_26231[(7)] = inst_26204__$1);

return statearr_26231;
})();
if(cljs.core.truth_(inst_26205)){
var statearr_26232_26259 = state_26227__$1;
(statearr_26232_26259[(1)] = (5));

} else {
var statearr_26233_26260 = state_26227__$1;
(statearr_26233_26260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (13))){
var state_26227__$1 = state_26227;
var statearr_26234_26261 = state_26227__$1;
(statearr_26234_26261[(2)] = null);

(statearr_26234_26261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (6))){
var inst_26204 = (state_26227[(7)]);
var inst_26210 = p.call(null,inst_26204);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26210)){
var statearr_26235_26262 = state_26227__$1;
(statearr_26235_26262[(1)] = (9));

} else {
var statearr_26236_26263 = state_26227__$1;
(statearr_26236_26263[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (3))){
var inst_26225 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26227__$1,inst_26225);
} else {
if((state_val_26228 === (12))){
var state_26227__$1 = state_26227;
var statearr_26237_26264 = state_26227__$1;
(statearr_26237_26264[(2)] = null);

(statearr_26237_26264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (2))){
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(4),ch);
} else {
if((state_val_26228 === (11))){
var inst_26204 = (state_26227[(7)]);
var inst_26214 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26227__$1,(8),inst_26214,inst_26204);
} else {
if((state_val_26228 === (9))){
var state_26227__$1 = state_26227;
var statearr_26238_26265 = state_26227__$1;
(statearr_26238_26265[(2)] = tc);

(statearr_26238_26265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (5))){
var inst_26207 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26208 = cljs.core.async.close_BANG_.call(null,fc);
var state_26227__$1 = (function (){var statearr_26239 = state_26227;
(statearr_26239[(8)] = inst_26207);

return statearr_26239;
})();
var statearr_26240_26266 = state_26227__$1;
(statearr_26240_26266[(2)] = inst_26208);

(statearr_26240_26266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (14))){
var inst_26221 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26241_26267 = state_26227__$1;
(statearr_26241_26267[(2)] = inst_26221);

(statearr_26241_26267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (10))){
var state_26227__$1 = state_26227;
var statearr_26242_26268 = state_26227__$1;
(statearr_26242_26268[(2)] = fc);

(statearr_26242_26268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (8))){
var inst_26216 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26216)){
var statearr_26243_26269 = state_26227__$1;
(statearr_26243_26269[(1)] = (12));

} else {
var statearr_26244_26270 = state_26227__$1;
(statearr_26244_26270[(1)] = (13));

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
});})(c__25578__auto___26256,tc,fc))
;
return ((function (switch__25465__auto__,c__25578__auto___26256,tc,fc){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_26248 = [null,null,null,null,null,null,null,null,null];
(statearr_26248[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_26248[(1)] = (1));

return statearr_26248;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_26227){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26249){if((e26249 instanceof Object)){
var ex__25469__auto__ = e26249;
var statearr_26250_26271 = state_26227;
(statearr_26250_26271[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26272 = state_26227;
state_26227 = G__26272;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_26227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_26227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___26256,tc,fc))
})();
var state__25580__auto__ = (function (){var statearr_26251 = f__25579__auto__.call(null);
(statearr_26251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26256);

return statearr_26251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___26256,tc,fc))
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
var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__){
return (function (state_26336){
var state_val_26337 = (state_26336[(1)]);
if((state_val_26337 === (7))){
var inst_26332 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26338_26359 = state_26336__$1;
(statearr_26338_26359[(2)] = inst_26332);

(statearr_26338_26359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (1))){
var inst_26316 = init;
var state_26336__$1 = (function (){var statearr_26339 = state_26336;
(statearr_26339[(7)] = inst_26316);

return statearr_26339;
})();
var statearr_26340_26360 = state_26336__$1;
(statearr_26340_26360[(2)] = null);

(statearr_26340_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (4))){
var inst_26319 = (state_26336[(8)]);
var inst_26319__$1 = (state_26336[(2)]);
var inst_26320 = (inst_26319__$1 == null);
var state_26336__$1 = (function (){var statearr_26341 = state_26336;
(statearr_26341[(8)] = inst_26319__$1);

return statearr_26341;
})();
if(cljs.core.truth_(inst_26320)){
var statearr_26342_26361 = state_26336__$1;
(statearr_26342_26361[(1)] = (5));

} else {
var statearr_26343_26362 = state_26336__$1;
(statearr_26343_26362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (6))){
var inst_26323 = (state_26336[(9)]);
var inst_26319 = (state_26336[(8)]);
var inst_26316 = (state_26336[(7)]);
var inst_26323__$1 = f.call(null,inst_26316,inst_26319);
var inst_26324 = cljs.core.reduced_QMARK_.call(null,inst_26323__$1);
var state_26336__$1 = (function (){var statearr_26344 = state_26336;
(statearr_26344[(9)] = inst_26323__$1);

return statearr_26344;
})();
if(inst_26324){
var statearr_26345_26363 = state_26336__$1;
(statearr_26345_26363[(1)] = (8));

} else {
var statearr_26346_26364 = state_26336__$1;
(statearr_26346_26364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (3))){
var inst_26334 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26336__$1,inst_26334);
} else {
if((state_val_26337 === (2))){
var state_26336__$1 = state_26336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26336__$1,(4),ch);
} else {
if((state_val_26337 === (9))){
var inst_26323 = (state_26336[(9)]);
var inst_26316 = inst_26323;
var state_26336__$1 = (function (){var statearr_26347 = state_26336;
(statearr_26347[(7)] = inst_26316);

return statearr_26347;
})();
var statearr_26348_26365 = state_26336__$1;
(statearr_26348_26365[(2)] = null);

(statearr_26348_26365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (5))){
var inst_26316 = (state_26336[(7)]);
var state_26336__$1 = state_26336;
var statearr_26349_26366 = state_26336__$1;
(statearr_26349_26366[(2)] = inst_26316);

(statearr_26349_26366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (10))){
var inst_26330 = (state_26336[(2)]);
var state_26336__$1 = state_26336;
var statearr_26350_26367 = state_26336__$1;
(statearr_26350_26367[(2)] = inst_26330);

(statearr_26350_26367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26337 === (8))){
var inst_26323 = (state_26336[(9)]);
var inst_26326 = cljs.core.deref.call(null,inst_26323);
var state_26336__$1 = state_26336;
var statearr_26351_26368 = state_26336__$1;
(statearr_26351_26368[(2)] = inst_26326);

(statearr_26351_26368[(1)] = (10));


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
});})(c__25578__auto__))
;
return ((function (switch__25465__auto__,c__25578__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25466__auto____0 = (function (){
var statearr_26355 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26355[(0)] = cljs$core$async$reduce_$_state_machine__25466__auto__);

(statearr_26355[(1)] = (1));

return statearr_26355;
});
var cljs$core$async$reduce_$_state_machine__25466__auto____1 = (function (state_26336){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26356){if((e26356 instanceof Object)){
var ex__25469__auto__ = e26356;
var statearr_26357_26369 = state_26336;
(statearr_26357_26369[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26370 = state_26336;
state_26336 = G__26370;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25466__auto__ = function(state_26336){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25466__auto____1.call(this,state_26336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25466__auto____0;
cljs$core$async$reduce_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25466__auto____1;
return cljs$core$async$reduce_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__))
})();
var state__25580__auto__ = (function (){var statearr_26358 = f__25579__auto__.call(null);
(statearr_26358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__))
);

return c__25578__auto__;
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
var args26371 = [];
var len__23309__auto___26423 = arguments.length;
var i__23310__auto___26424 = (0);
while(true){
if((i__23310__auto___26424 < len__23309__auto___26423)){
args26371.push((arguments[i__23310__auto___26424]));

var G__26425 = (i__23310__auto___26424 + (1));
i__23310__auto___26424 = G__26425;
continue;
} else {
}
break;
}

var G__26373 = args26371.length;
switch (G__26373) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26371.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__){
return (function (state_26398){
var state_val_26399 = (state_26398[(1)]);
if((state_val_26399 === (7))){
var inst_26380 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26400_26427 = state_26398__$1;
(statearr_26400_26427[(2)] = inst_26380);

(statearr_26400_26427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (1))){
var inst_26374 = cljs.core.seq.call(null,coll);
var inst_26375 = inst_26374;
var state_26398__$1 = (function (){var statearr_26401 = state_26398;
(statearr_26401[(7)] = inst_26375);

return statearr_26401;
})();
var statearr_26402_26428 = state_26398__$1;
(statearr_26402_26428[(2)] = null);

(statearr_26402_26428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (4))){
var inst_26375 = (state_26398[(7)]);
var inst_26378 = cljs.core.first.call(null,inst_26375);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26398__$1,(7),ch,inst_26378);
} else {
if((state_val_26399 === (13))){
var inst_26392 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26403_26429 = state_26398__$1;
(statearr_26403_26429[(2)] = inst_26392);

(statearr_26403_26429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (6))){
var inst_26383 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
if(cljs.core.truth_(inst_26383)){
var statearr_26404_26430 = state_26398__$1;
(statearr_26404_26430[(1)] = (8));

} else {
var statearr_26405_26431 = state_26398__$1;
(statearr_26405_26431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (3))){
var inst_26396 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26398__$1,inst_26396);
} else {
if((state_val_26399 === (12))){
var state_26398__$1 = state_26398;
var statearr_26406_26432 = state_26398__$1;
(statearr_26406_26432[(2)] = null);

(statearr_26406_26432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (2))){
var inst_26375 = (state_26398[(7)]);
var state_26398__$1 = state_26398;
if(cljs.core.truth_(inst_26375)){
var statearr_26407_26433 = state_26398__$1;
(statearr_26407_26433[(1)] = (4));

} else {
var statearr_26408_26434 = state_26398__$1;
(statearr_26408_26434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (11))){
var inst_26389 = cljs.core.async.close_BANG_.call(null,ch);
var state_26398__$1 = state_26398;
var statearr_26409_26435 = state_26398__$1;
(statearr_26409_26435[(2)] = inst_26389);

(statearr_26409_26435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (9))){
var state_26398__$1 = state_26398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26410_26436 = state_26398__$1;
(statearr_26410_26436[(1)] = (11));

} else {
var statearr_26411_26437 = state_26398__$1;
(statearr_26411_26437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (5))){
var inst_26375 = (state_26398[(7)]);
var state_26398__$1 = state_26398;
var statearr_26412_26438 = state_26398__$1;
(statearr_26412_26438[(2)] = inst_26375);

(statearr_26412_26438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (10))){
var inst_26394 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26413_26439 = state_26398__$1;
(statearr_26413_26439[(2)] = inst_26394);

(statearr_26413_26439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (8))){
var inst_26375 = (state_26398[(7)]);
var inst_26385 = cljs.core.next.call(null,inst_26375);
var inst_26375__$1 = inst_26385;
var state_26398__$1 = (function (){var statearr_26414 = state_26398;
(statearr_26414[(7)] = inst_26375__$1);

return statearr_26414;
})();
var statearr_26415_26440 = state_26398__$1;
(statearr_26415_26440[(2)] = null);

(statearr_26415_26440[(1)] = (2));


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
});})(c__25578__auto__))
;
return ((function (switch__25465__auto__,c__25578__auto__){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_26419 = [null,null,null,null,null,null,null,null];
(statearr_26419[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_26419[(1)] = (1));

return statearr_26419;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_26398){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26420){if((e26420 instanceof Object)){
var ex__25469__auto__ = e26420;
var statearr_26421_26441 = state_26398;
(statearr_26421_26441[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26442 = state_26398;
state_26398 = G__26442;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_26398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_26398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__))
})();
var state__25580__auto__ = (function (){var statearr_26422 = f__25579__auto__.call(null);
(statearr_26422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_26422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__))
);

return c__25578__auto__;
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
var x__22902__auto__ = (((_ == null))?null:_);
var m__22903__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,_);
} else {
var m__22903__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,_);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22903__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,ch);
} else {
var m__22903__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,ch);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m);
} else {
var m__22903__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26664 = (function (mult,ch,cs,meta26665){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26665 = meta26665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26666,meta26665__$1){
var self__ = this;
var _26666__$1 = this;
return (new cljs.core.async.t_cljs$core$async26664(self__.mult,self__.ch,self__.cs,meta26665__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26666){
var self__ = this;
var _26666__$1 = this;
return self__.meta26665;
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26665","meta26665",-396144699,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26664";

cljs.core.async.t_cljs$core$async26664.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async26664");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26664 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26664(mult__$1,ch__$1,cs__$1,meta26665){
return (new cljs.core.async.t_cljs$core$async26664(mult__$1,ch__$1,cs__$1,meta26665));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26664(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25578__auto___26885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___26885,cs,m,dchan,dctr,done){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___26885,cs,m,dchan,dctr,done){
return (function (state_26797){
var state_val_26798 = (state_26797[(1)]);
if((state_val_26798 === (7))){
var inst_26793 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26799_26886 = state_26797__$1;
(statearr_26799_26886[(2)] = inst_26793);

(statearr_26799_26886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (20))){
var inst_26698 = (state_26797[(7)]);
var inst_26708 = cljs.core.first.call(null,inst_26698);
var inst_26709 = cljs.core.nth.call(null,inst_26708,(0),null);
var inst_26710 = cljs.core.nth.call(null,inst_26708,(1),null);
var state_26797__$1 = (function (){var statearr_26800 = state_26797;
(statearr_26800[(8)] = inst_26709);

return statearr_26800;
})();
if(cljs.core.truth_(inst_26710)){
var statearr_26801_26887 = state_26797__$1;
(statearr_26801_26887[(1)] = (22));

} else {
var statearr_26802_26888 = state_26797__$1;
(statearr_26802_26888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (27))){
var inst_26745 = (state_26797[(9)]);
var inst_26738 = (state_26797[(10)]);
var inst_26740 = (state_26797[(11)]);
var inst_26669 = (state_26797[(12)]);
var inst_26745__$1 = cljs.core._nth.call(null,inst_26738,inst_26740);
var inst_26746 = cljs.core.async.put_BANG_.call(null,inst_26745__$1,inst_26669,done);
var state_26797__$1 = (function (){var statearr_26803 = state_26797;
(statearr_26803[(9)] = inst_26745__$1);

return statearr_26803;
})();
if(cljs.core.truth_(inst_26746)){
var statearr_26804_26889 = state_26797__$1;
(statearr_26804_26889[(1)] = (30));

} else {
var statearr_26805_26890 = state_26797__$1;
(statearr_26805_26890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (1))){
var state_26797__$1 = state_26797;
var statearr_26806_26891 = state_26797__$1;
(statearr_26806_26891[(2)] = null);

(statearr_26806_26891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (24))){
var inst_26698 = (state_26797[(7)]);
var inst_26715 = (state_26797[(2)]);
var inst_26716 = cljs.core.next.call(null,inst_26698);
var inst_26678 = inst_26716;
var inst_26679 = null;
var inst_26680 = (0);
var inst_26681 = (0);
var state_26797__$1 = (function (){var statearr_26807 = state_26797;
(statearr_26807[(13)] = inst_26715);

(statearr_26807[(14)] = inst_26678);

(statearr_26807[(15)] = inst_26681);

(statearr_26807[(16)] = inst_26680);

(statearr_26807[(17)] = inst_26679);

return statearr_26807;
})();
var statearr_26808_26892 = state_26797__$1;
(statearr_26808_26892[(2)] = null);

(statearr_26808_26892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (39))){
var state_26797__$1 = state_26797;
var statearr_26812_26893 = state_26797__$1;
(statearr_26812_26893[(2)] = null);

(statearr_26812_26893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (4))){
var inst_26669 = (state_26797[(12)]);
var inst_26669__$1 = (state_26797[(2)]);
var inst_26670 = (inst_26669__$1 == null);
var state_26797__$1 = (function (){var statearr_26813 = state_26797;
(statearr_26813[(12)] = inst_26669__$1);

return statearr_26813;
})();
if(cljs.core.truth_(inst_26670)){
var statearr_26814_26894 = state_26797__$1;
(statearr_26814_26894[(1)] = (5));

} else {
var statearr_26815_26895 = state_26797__$1;
(statearr_26815_26895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (15))){
var inst_26678 = (state_26797[(14)]);
var inst_26681 = (state_26797[(15)]);
var inst_26680 = (state_26797[(16)]);
var inst_26679 = (state_26797[(17)]);
var inst_26694 = (state_26797[(2)]);
var inst_26695 = (inst_26681 + (1));
var tmp26809 = inst_26678;
var tmp26810 = inst_26680;
var tmp26811 = inst_26679;
var inst_26678__$1 = tmp26809;
var inst_26679__$1 = tmp26811;
var inst_26680__$1 = tmp26810;
var inst_26681__$1 = inst_26695;
var state_26797__$1 = (function (){var statearr_26816 = state_26797;
(statearr_26816[(14)] = inst_26678__$1);

(statearr_26816[(15)] = inst_26681__$1);

(statearr_26816[(16)] = inst_26680__$1);

(statearr_26816[(18)] = inst_26694);

(statearr_26816[(17)] = inst_26679__$1);

return statearr_26816;
})();
var statearr_26817_26896 = state_26797__$1;
(statearr_26817_26896[(2)] = null);

(statearr_26817_26896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (21))){
var inst_26719 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26821_26897 = state_26797__$1;
(statearr_26821_26897[(2)] = inst_26719);

(statearr_26821_26897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (31))){
var inst_26745 = (state_26797[(9)]);
var inst_26749 = done.call(null,null);
var inst_26750 = cljs.core.async.untap_STAR_.call(null,m,inst_26745);
var state_26797__$1 = (function (){var statearr_26822 = state_26797;
(statearr_26822[(19)] = inst_26749);

return statearr_26822;
})();
var statearr_26823_26898 = state_26797__$1;
(statearr_26823_26898[(2)] = inst_26750);

(statearr_26823_26898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (32))){
var inst_26737 = (state_26797[(20)]);
var inst_26738 = (state_26797[(10)]);
var inst_26740 = (state_26797[(11)]);
var inst_26739 = (state_26797[(21)]);
var inst_26752 = (state_26797[(2)]);
var inst_26753 = (inst_26740 + (1));
var tmp26818 = inst_26737;
var tmp26819 = inst_26738;
var tmp26820 = inst_26739;
var inst_26737__$1 = tmp26818;
var inst_26738__$1 = tmp26819;
var inst_26739__$1 = tmp26820;
var inst_26740__$1 = inst_26753;
var state_26797__$1 = (function (){var statearr_26824 = state_26797;
(statearr_26824[(20)] = inst_26737__$1);

(statearr_26824[(10)] = inst_26738__$1);

(statearr_26824[(22)] = inst_26752);

(statearr_26824[(11)] = inst_26740__$1);

(statearr_26824[(21)] = inst_26739__$1);

return statearr_26824;
})();
var statearr_26825_26899 = state_26797__$1;
(statearr_26825_26899[(2)] = null);

(statearr_26825_26899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (40))){
var inst_26765 = (state_26797[(23)]);
var inst_26769 = done.call(null,null);
var inst_26770 = cljs.core.async.untap_STAR_.call(null,m,inst_26765);
var state_26797__$1 = (function (){var statearr_26826 = state_26797;
(statearr_26826[(24)] = inst_26769);

return statearr_26826;
})();
var statearr_26827_26900 = state_26797__$1;
(statearr_26827_26900[(2)] = inst_26770);

(statearr_26827_26900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (33))){
var inst_26756 = (state_26797[(25)]);
var inst_26758 = cljs.core.chunked_seq_QMARK_.call(null,inst_26756);
var state_26797__$1 = state_26797;
if(inst_26758){
var statearr_26828_26901 = state_26797__$1;
(statearr_26828_26901[(1)] = (36));

} else {
var statearr_26829_26902 = state_26797__$1;
(statearr_26829_26902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (13))){
var inst_26688 = (state_26797[(26)]);
var inst_26691 = cljs.core.async.close_BANG_.call(null,inst_26688);
var state_26797__$1 = state_26797;
var statearr_26830_26903 = state_26797__$1;
(statearr_26830_26903[(2)] = inst_26691);

(statearr_26830_26903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (22))){
var inst_26709 = (state_26797[(8)]);
var inst_26712 = cljs.core.async.close_BANG_.call(null,inst_26709);
var state_26797__$1 = state_26797;
var statearr_26831_26904 = state_26797__$1;
(statearr_26831_26904[(2)] = inst_26712);

(statearr_26831_26904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (36))){
var inst_26756 = (state_26797[(25)]);
var inst_26760 = cljs.core.chunk_first.call(null,inst_26756);
var inst_26761 = cljs.core.chunk_rest.call(null,inst_26756);
var inst_26762 = cljs.core.count.call(null,inst_26760);
var inst_26737 = inst_26761;
var inst_26738 = inst_26760;
var inst_26739 = inst_26762;
var inst_26740 = (0);
var state_26797__$1 = (function (){var statearr_26832 = state_26797;
(statearr_26832[(20)] = inst_26737);

(statearr_26832[(10)] = inst_26738);

(statearr_26832[(11)] = inst_26740);

(statearr_26832[(21)] = inst_26739);

return statearr_26832;
})();
var statearr_26833_26905 = state_26797__$1;
(statearr_26833_26905[(2)] = null);

(statearr_26833_26905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (41))){
var inst_26756 = (state_26797[(25)]);
var inst_26772 = (state_26797[(2)]);
var inst_26773 = cljs.core.next.call(null,inst_26756);
var inst_26737 = inst_26773;
var inst_26738 = null;
var inst_26739 = (0);
var inst_26740 = (0);
var state_26797__$1 = (function (){var statearr_26834 = state_26797;
(statearr_26834[(20)] = inst_26737);

(statearr_26834[(10)] = inst_26738);

(statearr_26834[(27)] = inst_26772);

(statearr_26834[(11)] = inst_26740);

(statearr_26834[(21)] = inst_26739);

return statearr_26834;
})();
var statearr_26835_26906 = state_26797__$1;
(statearr_26835_26906[(2)] = null);

(statearr_26835_26906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (43))){
var state_26797__$1 = state_26797;
var statearr_26836_26907 = state_26797__$1;
(statearr_26836_26907[(2)] = null);

(statearr_26836_26907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (29))){
var inst_26781 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26837_26908 = state_26797__$1;
(statearr_26837_26908[(2)] = inst_26781);

(statearr_26837_26908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (44))){
var inst_26790 = (state_26797[(2)]);
var state_26797__$1 = (function (){var statearr_26838 = state_26797;
(statearr_26838[(28)] = inst_26790);

return statearr_26838;
})();
var statearr_26839_26909 = state_26797__$1;
(statearr_26839_26909[(2)] = null);

(statearr_26839_26909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (6))){
var inst_26729 = (state_26797[(29)]);
var inst_26728 = cljs.core.deref.call(null,cs);
var inst_26729__$1 = cljs.core.keys.call(null,inst_26728);
var inst_26730 = cljs.core.count.call(null,inst_26729__$1);
var inst_26731 = cljs.core.reset_BANG_.call(null,dctr,inst_26730);
var inst_26736 = cljs.core.seq.call(null,inst_26729__$1);
var inst_26737 = inst_26736;
var inst_26738 = null;
var inst_26739 = (0);
var inst_26740 = (0);
var state_26797__$1 = (function (){var statearr_26840 = state_26797;
(statearr_26840[(20)] = inst_26737);

(statearr_26840[(30)] = inst_26731);

(statearr_26840[(10)] = inst_26738);

(statearr_26840[(29)] = inst_26729__$1);

(statearr_26840[(11)] = inst_26740);

(statearr_26840[(21)] = inst_26739);

return statearr_26840;
})();
var statearr_26841_26910 = state_26797__$1;
(statearr_26841_26910[(2)] = null);

(statearr_26841_26910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (28))){
var inst_26737 = (state_26797[(20)]);
var inst_26756 = (state_26797[(25)]);
var inst_26756__$1 = cljs.core.seq.call(null,inst_26737);
var state_26797__$1 = (function (){var statearr_26842 = state_26797;
(statearr_26842[(25)] = inst_26756__$1);

return statearr_26842;
})();
if(inst_26756__$1){
var statearr_26843_26911 = state_26797__$1;
(statearr_26843_26911[(1)] = (33));

} else {
var statearr_26844_26912 = state_26797__$1;
(statearr_26844_26912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (25))){
var inst_26740 = (state_26797[(11)]);
var inst_26739 = (state_26797[(21)]);
var inst_26742 = (inst_26740 < inst_26739);
var inst_26743 = inst_26742;
var state_26797__$1 = state_26797;
if(cljs.core.truth_(inst_26743)){
var statearr_26845_26913 = state_26797__$1;
(statearr_26845_26913[(1)] = (27));

} else {
var statearr_26846_26914 = state_26797__$1;
(statearr_26846_26914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (34))){
var state_26797__$1 = state_26797;
var statearr_26847_26915 = state_26797__$1;
(statearr_26847_26915[(2)] = null);

(statearr_26847_26915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (17))){
var state_26797__$1 = state_26797;
var statearr_26848_26916 = state_26797__$1;
(statearr_26848_26916[(2)] = null);

(statearr_26848_26916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (3))){
var inst_26795 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26797__$1,inst_26795);
} else {
if((state_val_26798 === (12))){
var inst_26724 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26849_26917 = state_26797__$1;
(statearr_26849_26917[(2)] = inst_26724);

(statearr_26849_26917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (2))){
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26797__$1,(4),ch);
} else {
if((state_val_26798 === (23))){
var state_26797__$1 = state_26797;
var statearr_26850_26918 = state_26797__$1;
(statearr_26850_26918[(2)] = null);

(statearr_26850_26918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (35))){
var inst_26779 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26851_26919 = state_26797__$1;
(statearr_26851_26919[(2)] = inst_26779);

(statearr_26851_26919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (19))){
var inst_26698 = (state_26797[(7)]);
var inst_26702 = cljs.core.chunk_first.call(null,inst_26698);
var inst_26703 = cljs.core.chunk_rest.call(null,inst_26698);
var inst_26704 = cljs.core.count.call(null,inst_26702);
var inst_26678 = inst_26703;
var inst_26679 = inst_26702;
var inst_26680 = inst_26704;
var inst_26681 = (0);
var state_26797__$1 = (function (){var statearr_26852 = state_26797;
(statearr_26852[(14)] = inst_26678);

(statearr_26852[(15)] = inst_26681);

(statearr_26852[(16)] = inst_26680);

(statearr_26852[(17)] = inst_26679);

return statearr_26852;
})();
var statearr_26853_26920 = state_26797__$1;
(statearr_26853_26920[(2)] = null);

(statearr_26853_26920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (11))){
var inst_26678 = (state_26797[(14)]);
var inst_26698 = (state_26797[(7)]);
var inst_26698__$1 = cljs.core.seq.call(null,inst_26678);
var state_26797__$1 = (function (){var statearr_26854 = state_26797;
(statearr_26854[(7)] = inst_26698__$1);

return statearr_26854;
})();
if(inst_26698__$1){
var statearr_26855_26921 = state_26797__$1;
(statearr_26855_26921[(1)] = (16));

} else {
var statearr_26856_26922 = state_26797__$1;
(statearr_26856_26922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (9))){
var inst_26726 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26857_26923 = state_26797__$1;
(statearr_26857_26923[(2)] = inst_26726);

(statearr_26857_26923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (5))){
var inst_26676 = cljs.core.deref.call(null,cs);
var inst_26677 = cljs.core.seq.call(null,inst_26676);
var inst_26678 = inst_26677;
var inst_26679 = null;
var inst_26680 = (0);
var inst_26681 = (0);
var state_26797__$1 = (function (){var statearr_26858 = state_26797;
(statearr_26858[(14)] = inst_26678);

(statearr_26858[(15)] = inst_26681);

(statearr_26858[(16)] = inst_26680);

(statearr_26858[(17)] = inst_26679);

return statearr_26858;
})();
var statearr_26859_26924 = state_26797__$1;
(statearr_26859_26924[(2)] = null);

(statearr_26859_26924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (14))){
var state_26797__$1 = state_26797;
var statearr_26860_26925 = state_26797__$1;
(statearr_26860_26925[(2)] = null);

(statearr_26860_26925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (45))){
var inst_26787 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26861_26926 = state_26797__$1;
(statearr_26861_26926[(2)] = inst_26787);

(statearr_26861_26926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (26))){
var inst_26729 = (state_26797[(29)]);
var inst_26783 = (state_26797[(2)]);
var inst_26784 = cljs.core.seq.call(null,inst_26729);
var state_26797__$1 = (function (){var statearr_26862 = state_26797;
(statearr_26862[(31)] = inst_26783);

return statearr_26862;
})();
if(inst_26784){
var statearr_26863_26927 = state_26797__$1;
(statearr_26863_26927[(1)] = (42));

} else {
var statearr_26864_26928 = state_26797__$1;
(statearr_26864_26928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (16))){
var inst_26698 = (state_26797[(7)]);
var inst_26700 = cljs.core.chunked_seq_QMARK_.call(null,inst_26698);
var state_26797__$1 = state_26797;
if(inst_26700){
var statearr_26865_26929 = state_26797__$1;
(statearr_26865_26929[(1)] = (19));

} else {
var statearr_26866_26930 = state_26797__$1;
(statearr_26866_26930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (38))){
var inst_26776 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26867_26931 = state_26797__$1;
(statearr_26867_26931[(2)] = inst_26776);

(statearr_26867_26931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (30))){
var state_26797__$1 = state_26797;
var statearr_26868_26932 = state_26797__$1;
(statearr_26868_26932[(2)] = null);

(statearr_26868_26932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (10))){
var inst_26681 = (state_26797[(15)]);
var inst_26679 = (state_26797[(17)]);
var inst_26687 = cljs.core._nth.call(null,inst_26679,inst_26681);
var inst_26688 = cljs.core.nth.call(null,inst_26687,(0),null);
var inst_26689 = cljs.core.nth.call(null,inst_26687,(1),null);
var state_26797__$1 = (function (){var statearr_26869 = state_26797;
(statearr_26869[(26)] = inst_26688);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26689)){
var statearr_26870_26933 = state_26797__$1;
(statearr_26870_26933[(1)] = (13));

} else {
var statearr_26871_26934 = state_26797__$1;
(statearr_26871_26934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (18))){
var inst_26722 = (state_26797[(2)]);
var state_26797__$1 = state_26797;
var statearr_26872_26935 = state_26797__$1;
(statearr_26872_26935[(2)] = inst_26722);

(statearr_26872_26935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (42))){
var state_26797__$1 = state_26797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26797__$1,(45),dchan);
} else {
if((state_val_26798 === (37))){
var inst_26669 = (state_26797[(12)]);
var inst_26756 = (state_26797[(25)]);
var inst_26765 = (state_26797[(23)]);
var inst_26765__$1 = cljs.core.first.call(null,inst_26756);
var inst_26766 = cljs.core.async.put_BANG_.call(null,inst_26765__$1,inst_26669,done);
var state_26797__$1 = (function (){var statearr_26873 = state_26797;
(statearr_26873[(23)] = inst_26765__$1);

return statearr_26873;
})();
if(cljs.core.truth_(inst_26766)){
var statearr_26874_26936 = state_26797__$1;
(statearr_26874_26936[(1)] = (39));

} else {
var statearr_26875_26937 = state_26797__$1;
(statearr_26875_26937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26798 === (8))){
var inst_26681 = (state_26797[(15)]);
var inst_26680 = (state_26797[(16)]);
var inst_26683 = (inst_26681 < inst_26680);
var inst_26684 = inst_26683;
var state_26797__$1 = state_26797;
if(cljs.core.truth_(inst_26684)){
var statearr_26876_26938 = state_26797__$1;
(statearr_26876_26938[(1)] = (10));

} else {
var statearr_26877_26939 = state_26797__$1;
(statearr_26877_26939[(1)] = (11));

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
});})(c__25578__auto___26885,cs,m,dchan,dctr,done))
;
return ((function (switch__25465__auto__,c__25578__auto___26885,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25466__auto__ = null;
var cljs$core$async$mult_$_state_machine__25466__auto____0 = (function (){
var statearr_26881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26881[(0)] = cljs$core$async$mult_$_state_machine__25466__auto__);

(statearr_26881[(1)] = (1));

return statearr_26881;
});
var cljs$core$async$mult_$_state_machine__25466__auto____1 = (function (state_26797){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_26797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e26882){if((e26882 instanceof Object)){
var ex__25469__auto__ = e26882;
var statearr_26883_26940 = state_26797;
(statearr_26883_26940[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26941 = state_26797;
state_26797 = G__26941;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25466__auto__ = function(state_26797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25466__auto____1.call(this,state_26797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25466__auto____0;
cljs$core$async$mult_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25466__auto____1;
return cljs$core$async$mult_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___26885,cs,m,dchan,dctr,done))
})();
var state__25580__auto__ = (function (){var statearr_26884 = f__25579__auto__.call(null);
(statearr_26884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___26885);

return statearr_26884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___26885,cs,m,dchan,dctr,done))
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
var args26942 = [];
var len__23309__auto___26945 = arguments.length;
var i__23310__auto___26946 = (0);
while(true){
if((i__23310__auto___26946 < len__23309__auto___26945)){
args26942.push((arguments[i__23310__auto___26946]));

var G__26947 = (i__23310__auto___26946 + (1));
i__23310__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var G__26944 = args26942.length;
switch (G__26944) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26942.length)].join('')));

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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,ch);
} else {
var m__22903__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,ch);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,ch);
} else {
var m__22903__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,ch);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m);
} else {
var m__22903__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,state_map);
} else {
var m__22903__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,state_map);
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
var x__22902__auto__ = (((m == null))?null:m);
var m__22903__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,m,mode);
} else {
var m__22903__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23316__auto__ = [];
var len__23309__auto___26959 = arguments.length;
var i__23310__auto___26960 = (0);
while(true){
if((i__23310__auto___26960 < len__23309__auto___26959)){
args__23316__auto__.push((arguments[i__23310__auto___26960]));

var G__26961 = (i__23310__auto___26960 + (1));
i__23310__auto___26960 = G__26961;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((3) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23317__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26953){
var map__26954 = p__26953;
var map__26954__$1 = ((((!((map__26954 == null)))?((((map__26954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26954):map__26954);
var opts = map__26954__$1;
var statearr_26956_26962 = state;
(statearr_26956_26962[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26954,map__26954__$1,opts){
return (function (val){
var statearr_26957_26963 = state;
(statearr_26957_26963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26954,map__26954__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26958_26964 = state;
(statearr_26958_26964[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26949){
var G__26950 = cljs.core.first.call(null,seq26949);
var seq26949__$1 = cljs.core.next.call(null,seq26949);
var G__26951 = cljs.core.first.call(null,seq26949__$1);
var seq26949__$2 = cljs.core.next.call(null,seq26949__$1);
var G__26952 = cljs.core.first.call(null,seq26949__$2);
var seq26949__$3 = cljs.core.next.call(null,seq26949__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26950,G__26951,G__26952,seq26949__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27128 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27129){
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
this.meta27129 = meta27129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27130,meta27129__$1){
var self__ = this;
var _27130__$1 = this;
return (new cljs.core.async.t_cljs$core$async27128(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27129__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27130){
var self__ = this;
var _27130__$1 = this;
return self__.meta27129;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27128.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27129","meta27129",-1611733201,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27128";

cljs.core.async.t_cljs$core$async27128.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27128");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27128 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27129){
return (new cljs.core.async.t_cljs$core$async27128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27129));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27128(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25578__auto___27291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27228){
var state_val_27229 = (state_27228[(1)]);
if((state_val_27229 === (7))){
var inst_27146 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27230_27292 = state_27228__$1;
(statearr_27230_27292[(2)] = inst_27146);

(statearr_27230_27292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (20))){
var inst_27158 = (state_27228[(7)]);
var state_27228__$1 = state_27228;
var statearr_27231_27293 = state_27228__$1;
(statearr_27231_27293[(2)] = inst_27158);

(statearr_27231_27293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (27))){
var state_27228__$1 = state_27228;
var statearr_27232_27294 = state_27228__$1;
(statearr_27232_27294[(2)] = null);

(statearr_27232_27294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (1))){
var inst_27134 = (state_27228[(8)]);
var inst_27134__$1 = calc_state.call(null);
var inst_27136 = (inst_27134__$1 == null);
var inst_27137 = cljs.core.not.call(null,inst_27136);
var state_27228__$1 = (function (){var statearr_27233 = state_27228;
(statearr_27233[(8)] = inst_27134__$1);

return statearr_27233;
})();
if(inst_27137){
var statearr_27234_27295 = state_27228__$1;
(statearr_27234_27295[(1)] = (2));

} else {
var statearr_27235_27296 = state_27228__$1;
(statearr_27235_27296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (24))){
var inst_27202 = (state_27228[(9)]);
var inst_27188 = (state_27228[(10)]);
var inst_27181 = (state_27228[(11)]);
var inst_27202__$1 = inst_27181.call(null,inst_27188);
var state_27228__$1 = (function (){var statearr_27236 = state_27228;
(statearr_27236[(9)] = inst_27202__$1);

return statearr_27236;
})();
if(cljs.core.truth_(inst_27202__$1)){
var statearr_27237_27297 = state_27228__$1;
(statearr_27237_27297[(1)] = (29));

} else {
var statearr_27238_27298 = state_27228__$1;
(statearr_27238_27298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (4))){
var inst_27149 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27149)){
var statearr_27239_27299 = state_27228__$1;
(statearr_27239_27299[(1)] = (8));

} else {
var statearr_27240_27300 = state_27228__$1;
(statearr_27240_27300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (15))){
var inst_27175 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27175)){
var statearr_27241_27301 = state_27228__$1;
(statearr_27241_27301[(1)] = (19));

} else {
var statearr_27242_27302 = state_27228__$1;
(statearr_27242_27302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (21))){
var inst_27180 = (state_27228[(12)]);
var inst_27180__$1 = (state_27228[(2)]);
var inst_27181 = cljs.core.get.call(null,inst_27180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27182 = cljs.core.get.call(null,inst_27180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27183 = cljs.core.get.call(null,inst_27180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27228__$1 = (function (){var statearr_27243 = state_27228;
(statearr_27243[(13)] = inst_27182);

(statearr_27243[(12)] = inst_27180__$1);

(statearr_27243[(11)] = inst_27181);

return statearr_27243;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27228__$1,(22),inst_27183);
} else {
if((state_val_27229 === (31))){
var inst_27210 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27210)){
var statearr_27244_27303 = state_27228__$1;
(statearr_27244_27303[(1)] = (32));

} else {
var statearr_27245_27304 = state_27228__$1;
(statearr_27245_27304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (32))){
var inst_27187 = (state_27228[(14)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27228__$1,(35),out,inst_27187);
} else {
if((state_val_27229 === (33))){
var inst_27180 = (state_27228[(12)]);
var inst_27158 = inst_27180;
var state_27228__$1 = (function (){var statearr_27246 = state_27228;
(statearr_27246[(7)] = inst_27158);

return statearr_27246;
})();
var statearr_27247_27305 = state_27228__$1;
(statearr_27247_27305[(2)] = null);

(statearr_27247_27305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (13))){
var inst_27158 = (state_27228[(7)]);
var inst_27165 = inst_27158.cljs$lang$protocol_mask$partition0$;
var inst_27166 = (inst_27165 & (64));
var inst_27167 = inst_27158.cljs$core$ISeq$;
var inst_27168 = (inst_27166) || (inst_27167);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27168)){
var statearr_27248_27306 = state_27228__$1;
(statearr_27248_27306[(1)] = (16));

} else {
var statearr_27249_27307 = state_27228__$1;
(statearr_27249_27307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (22))){
var inst_27188 = (state_27228[(10)]);
var inst_27187 = (state_27228[(14)]);
var inst_27186 = (state_27228[(2)]);
var inst_27187__$1 = cljs.core.nth.call(null,inst_27186,(0),null);
var inst_27188__$1 = cljs.core.nth.call(null,inst_27186,(1),null);
var inst_27189 = (inst_27187__$1 == null);
var inst_27190 = cljs.core._EQ_.call(null,inst_27188__$1,change);
var inst_27191 = (inst_27189) || (inst_27190);
var state_27228__$1 = (function (){var statearr_27250 = state_27228;
(statearr_27250[(10)] = inst_27188__$1);

(statearr_27250[(14)] = inst_27187__$1);

return statearr_27250;
})();
if(cljs.core.truth_(inst_27191)){
var statearr_27251_27308 = state_27228__$1;
(statearr_27251_27308[(1)] = (23));

} else {
var statearr_27252_27309 = state_27228__$1;
(statearr_27252_27309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (36))){
var inst_27180 = (state_27228[(12)]);
var inst_27158 = inst_27180;
var state_27228__$1 = (function (){var statearr_27253 = state_27228;
(statearr_27253[(7)] = inst_27158);

return statearr_27253;
})();
var statearr_27254_27310 = state_27228__$1;
(statearr_27254_27310[(2)] = null);

(statearr_27254_27310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (29))){
var inst_27202 = (state_27228[(9)]);
var state_27228__$1 = state_27228;
var statearr_27255_27311 = state_27228__$1;
(statearr_27255_27311[(2)] = inst_27202);

(statearr_27255_27311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (6))){
var state_27228__$1 = state_27228;
var statearr_27256_27312 = state_27228__$1;
(statearr_27256_27312[(2)] = false);

(statearr_27256_27312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (28))){
var inst_27198 = (state_27228[(2)]);
var inst_27199 = calc_state.call(null);
var inst_27158 = inst_27199;
var state_27228__$1 = (function (){var statearr_27257 = state_27228;
(statearr_27257[(7)] = inst_27158);

(statearr_27257[(15)] = inst_27198);

return statearr_27257;
})();
var statearr_27258_27313 = state_27228__$1;
(statearr_27258_27313[(2)] = null);

(statearr_27258_27313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (25))){
var inst_27224 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27259_27314 = state_27228__$1;
(statearr_27259_27314[(2)] = inst_27224);

(statearr_27259_27314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (34))){
var inst_27222 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27260_27315 = state_27228__$1;
(statearr_27260_27315[(2)] = inst_27222);

(statearr_27260_27315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (17))){
var state_27228__$1 = state_27228;
var statearr_27261_27316 = state_27228__$1;
(statearr_27261_27316[(2)] = false);

(statearr_27261_27316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (3))){
var state_27228__$1 = state_27228;
var statearr_27262_27317 = state_27228__$1;
(statearr_27262_27317[(2)] = false);

(statearr_27262_27317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (12))){
var inst_27226 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27228__$1,inst_27226);
} else {
if((state_val_27229 === (2))){
var inst_27134 = (state_27228[(8)]);
var inst_27139 = inst_27134.cljs$lang$protocol_mask$partition0$;
var inst_27140 = (inst_27139 & (64));
var inst_27141 = inst_27134.cljs$core$ISeq$;
var inst_27142 = (inst_27140) || (inst_27141);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27142)){
var statearr_27263_27318 = state_27228__$1;
(statearr_27263_27318[(1)] = (5));

} else {
var statearr_27264_27319 = state_27228__$1;
(statearr_27264_27319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (23))){
var inst_27187 = (state_27228[(14)]);
var inst_27193 = (inst_27187 == null);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27193)){
var statearr_27265_27320 = state_27228__$1;
(statearr_27265_27320[(1)] = (26));

} else {
var statearr_27266_27321 = state_27228__$1;
(statearr_27266_27321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (35))){
var inst_27213 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27213)){
var statearr_27267_27322 = state_27228__$1;
(statearr_27267_27322[(1)] = (36));

} else {
var statearr_27268_27323 = state_27228__$1;
(statearr_27268_27323[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (19))){
var inst_27158 = (state_27228[(7)]);
var inst_27177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27158);
var state_27228__$1 = state_27228;
var statearr_27269_27324 = state_27228__$1;
(statearr_27269_27324[(2)] = inst_27177);

(statearr_27269_27324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (11))){
var inst_27158 = (state_27228[(7)]);
var inst_27162 = (inst_27158 == null);
var inst_27163 = cljs.core.not.call(null,inst_27162);
var state_27228__$1 = state_27228;
if(inst_27163){
var statearr_27270_27325 = state_27228__$1;
(statearr_27270_27325[(1)] = (13));

} else {
var statearr_27271_27326 = state_27228__$1;
(statearr_27271_27326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (9))){
var inst_27134 = (state_27228[(8)]);
var state_27228__$1 = state_27228;
var statearr_27272_27327 = state_27228__$1;
(statearr_27272_27327[(2)] = inst_27134);

(statearr_27272_27327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (5))){
var state_27228__$1 = state_27228;
var statearr_27273_27328 = state_27228__$1;
(statearr_27273_27328[(2)] = true);

(statearr_27273_27328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (14))){
var state_27228__$1 = state_27228;
var statearr_27274_27329 = state_27228__$1;
(statearr_27274_27329[(2)] = false);

(statearr_27274_27329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (26))){
var inst_27188 = (state_27228[(10)]);
var inst_27195 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27188);
var state_27228__$1 = state_27228;
var statearr_27275_27330 = state_27228__$1;
(statearr_27275_27330[(2)] = inst_27195);

(statearr_27275_27330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (16))){
var state_27228__$1 = state_27228;
var statearr_27276_27331 = state_27228__$1;
(statearr_27276_27331[(2)] = true);

(statearr_27276_27331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (38))){
var inst_27218 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27277_27332 = state_27228__$1;
(statearr_27277_27332[(2)] = inst_27218);

(statearr_27277_27332[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (30))){
var inst_27182 = (state_27228[(13)]);
var inst_27188 = (state_27228[(10)]);
var inst_27181 = (state_27228[(11)]);
var inst_27205 = cljs.core.empty_QMARK_.call(null,inst_27181);
var inst_27206 = inst_27182.call(null,inst_27188);
var inst_27207 = cljs.core.not.call(null,inst_27206);
var inst_27208 = (inst_27205) && (inst_27207);
var state_27228__$1 = state_27228;
var statearr_27278_27333 = state_27228__$1;
(statearr_27278_27333[(2)] = inst_27208);

(statearr_27278_27333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (10))){
var inst_27134 = (state_27228[(8)]);
var inst_27154 = (state_27228[(2)]);
var inst_27155 = cljs.core.get.call(null,inst_27154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27156 = cljs.core.get.call(null,inst_27154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27157 = cljs.core.get.call(null,inst_27154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27158 = inst_27134;
var state_27228__$1 = (function (){var statearr_27279 = state_27228;
(statearr_27279[(16)] = inst_27155);

(statearr_27279[(7)] = inst_27158);

(statearr_27279[(17)] = inst_27157);

(statearr_27279[(18)] = inst_27156);

return statearr_27279;
})();
var statearr_27280_27334 = state_27228__$1;
(statearr_27280_27334[(2)] = null);

(statearr_27280_27334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (18))){
var inst_27172 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27281_27335 = state_27228__$1;
(statearr_27281_27335[(2)] = inst_27172);

(statearr_27281_27335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (37))){
var state_27228__$1 = state_27228;
var statearr_27282_27336 = state_27228__$1;
(statearr_27282_27336[(2)] = null);

(statearr_27282_27336[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (8))){
var inst_27134 = (state_27228[(8)]);
var inst_27151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27134);
var state_27228__$1 = state_27228;
var statearr_27283_27337 = state_27228__$1;
(statearr_27283_27337[(2)] = inst_27151);

(statearr_27283_27337[(1)] = (10));


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
});})(c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25465__auto__,c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25466__auto__ = null;
var cljs$core$async$mix_$_state_machine__25466__auto____0 = (function (){
var statearr_27287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27287[(0)] = cljs$core$async$mix_$_state_machine__25466__auto__);

(statearr_27287[(1)] = (1));

return statearr_27287;
});
var cljs$core$async$mix_$_state_machine__25466__auto____1 = (function (state_27228){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27288){if((e27288 instanceof Object)){
var ex__25469__auto__ = e27288;
var statearr_27289_27338 = state_27228;
(statearr_27289_27338[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27339 = state_27228;
state_27228 = G__27339;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25466__auto__ = function(state_27228){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25466__auto____1.call(this,state_27228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25466__auto____0;
cljs$core$async$mix_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25466__auto____1;
return cljs$core$async$mix_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25580__auto__ = (function (){var statearr_27290 = f__25579__auto__.call(null);
(statearr_27290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27291);

return statearr_27290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22902__auto__ = (((p == null))?null:p);
var m__22903__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22903__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22902__auto__ = (((p == null))?null:p);
var m__22903__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,p,v,ch);
} else {
var m__22903__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27340 = [];
var len__23309__auto___27343 = arguments.length;
var i__23310__auto___27344 = (0);
while(true){
if((i__23310__auto___27344 < len__23309__auto___27343)){
args27340.push((arguments[i__23310__auto___27344]));

var G__27345 = (i__23310__auto___27344 + (1));
i__23310__auto___27344 = G__27345;
continue;
} else {
}
break;
}

var G__27342 = args27340.length;
switch (G__27342) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27340.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22902__auto__ = (((p == null))?null:p);
var m__22903__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,p);
} else {
var m__22903__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,p);
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
var x__22902__auto__ = (((p == null))?null:p);
var m__22903__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22902__auto__)]);
if(!((m__22903__auto__ == null))){
return m__22903__auto__.call(null,p,v);
} else {
var m__22903__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22903__auto____$1 == null))){
return m__22903__auto____$1.call(null,p,v);
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
var args27348 = [];
var len__23309__auto___27473 = arguments.length;
var i__23310__auto___27474 = (0);
while(true){
if((i__23310__auto___27474 < len__23309__auto___27473)){
args27348.push((arguments[i__23310__auto___27474]));

var G__27475 = (i__23310__auto___27474 + (1));
i__23310__auto___27474 = G__27475;
continue;
} else {
}
break;
}

var G__27350 = args27348.length;
switch (G__27350) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27348.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22239__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22239__auto__,mults){
return (function (p1__27347_SHARP_){
if(cljs.core.truth_(p1__27347_SHARP_.call(null,topic))){
return p1__27347_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27347_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22239__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27351 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27352){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27352 = meta27352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27353,meta27352__$1){
var self__ = this;
var _27353__$1 = this;
return (new cljs.core.async.t_cljs$core$async27351(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27352__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27353){
var self__ = this;
var _27353__$1 = this;
return self__.meta27352;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27352","meta27352",1493572470,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27351";

cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27351");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27351 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27352){
return (new cljs.core.async.t_cljs$core$async27351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27352));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27351(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25578__auto___27477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27477,mults,ensure_mult,p){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27477,mults,ensure_mult,p){
return (function (state_27425){
var state_val_27426 = (state_27425[(1)]);
if((state_val_27426 === (7))){
var inst_27421 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27427_27478 = state_27425__$1;
(statearr_27427_27478[(2)] = inst_27421);

(statearr_27427_27478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (20))){
var state_27425__$1 = state_27425;
var statearr_27428_27479 = state_27425__$1;
(statearr_27428_27479[(2)] = null);

(statearr_27428_27479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (1))){
var state_27425__$1 = state_27425;
var statearr_27429_27480 = state_27425__$1;
(statearr_27429_27480[(2)] = null);

(statearr_27429_27480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (24))){
var inst_27404 = (state_27425[(7)]);
var inst_27413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27404);
var state_27425__$1 = state_27425;
var statearr_27430_27481 = state_27425__$1;
(statearr_27430_27481[(2)] = inst_27413);

(statearr_27430_27481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (4))){
var inst_27356 = (state_27425[(8)]);
var inst_27356__$1 = (state_27425[(2)]);
var inst_27357 = (inst_27356__$1 == null);
var state_27425__$1 = (function (){var statearr_27431 = state_27425;
(statearr_27431[(8)] = inst_27356__$1);

return statearr_27431;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27432_27482 = state_27425__$1;
(statearr_27432_27482[(1)] = (5));

} else {
var statearr_27433_27483 = state_27425__$1;
(statearr_27433_27483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (15))){
var inst_27398 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27434_27484 = state_27425__$1;
(statearr_27434_27484[(2)] = inst_27398);

(statearr_27434_27484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (21))){
var inst_27418 = (state_27425[(2)]);
var state_27425__$1 = (function (){var statearr_27435 = state_27425;
(statearr_27435[(9)] = inst_27418);

return statearr_27435;
})();
var statearr_27436_27485 = state_27425__$1;
(statearr_27436_27485[(2)] = null);

(statearr_27436_27485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (13))){
var inst_27380 = (state_27425[(10)]);
var inst_27382 = cljs.core.chunked_seq_QMARK_.call(null,inst_27380);
var state_27425__$1 = state_27425;
if(inst_27382){
var statearr_27437_27486 = state_27425__$1;
(statearr_27437_27486[(1)] = (16));

} else {
var statearr_27438_27487 = state_27425__$1;
(statearr_27438_27487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (22))){
var inst_27410 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
if(cljs.core.truth_(inst_27410)){
var statearr_27439_27488 = state_27425__$1;
(statearr_27439_27488[(1)] = (23));

} else {
var statearr_27440_27489 = state_27425__$1;
(statearr_27440_27489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (6))){
var inst_27356 = (state_27425[(8)]);
var inst_27404 = (state_27425[(7)]);
var inst_27406 = (state_27425[(11)]);
var inst_27404__$1 = topic_fn.call(null,inst_27356);
var inst_27405 = cljs.core.deref.call(null,mults);
var inst_27406__$1 = cljs.core.get.call(null,inst_27405,inst_27404__$1);
var state_27425__$1 = (function (){var statearr_27441 = state_27425;
(statearr_27441[(7)] = inst_27404__$1);

(statearr_27441[(11)] = inst_27406__$1);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27406__$1)){
var statearr_27442_27490 = state_27425__$1;
(statearr_27442_27490[(1)] = (19));

} else {
var statearr_27443_27491 = state_27425__$1;
(statearr_27443_27491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (25))){
var inst_27415 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27444_27492 = state_27425__$1;
(statearr_27444_27492[(2)] = inst_27415);

(statearr_27444_27492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (17))){
var inst_27380 = (state_27425[(10)]);
var inst_27389 = cljs.core.first.call(null,inst_27380);
var inst_27390 = cljs.core.async.muxch_STAR_.call(null,inst_27389);
var inst_27391 = cljs.core.async.close_BANG_.call(null,inst_27390);
var inst_27392 = cljs.core.next.call(null,inst_27380);
var inst_27366 = inst_27392;
var inst_27367 = null;
var inst_27368 = (0);
var inst_27369 = (0);
var state_27425__$1 = (function (){var statearr_27445 = state_27425;
(statearr_27445[(12)] = inst_27391);

(statearr_27445[(13)] = inst_27367);

(statearr_27445[(14)] = inst_27368);

(statearr_27445[(15)] = inst_27366);

(statearr_27445[(16)] = inst_27369);

return statearr_27445;
})();
var statearr_27446_27493 = state_27425__$1;
(statearr_27446_27493[(2)] = null);

(statearr_27446_27493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (3))){
var inst_27423 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27425__$1,inst_27423);
} else {
if((state_val_27426 === (12))){
var inst_27400 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27447_27494 = state_27425__$1;
(statearr_27447_27494[(2)] = inst_27400);

(statearr_27447_27494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (2))){
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27425__$1,(4),ch);
} else {
if((state_val_27426 === (23))){
var state_27425__$1 = state_27425;
var statearr_27448_27495 = state_27425__$1;
(statearr_27448_27495[(2)] = null);

(statearr_27448_27495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (19))){
var inst_27356 = (state_27425[(8)]);
var inst_27406 = (state_27425[(11)]);
var inst_27408 = cljs.core.async.muxch_STAR_.call(null,inst_27406);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27425__$1,(22),inst_27408,inst_27356);
} else {
if((state_val_27426 === (11))){
var inst_27380 = (state_27425[(10)]);
var inst_27366 = (state_27425[(15)]);
var inst_27380__$1 = cljs.core.seq.call(null,inst_27366);
var state_27425__$1 = (function (){var statearr_27449 = state_27425;
(statearr_27449[(10)] = inst_27380__$1);

return statearr_27449;
})();
if(inst_27380__$1){
var statearr_27450_27496 = state_27425__$1;
(statearr_27450_27496[(1)] = (13));

} else {
var statearr_27451_27497 = state_27425__$1;
(statearr_27451_27497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (9))){
var inst_27402 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27452_27498 = state_27425__$1;
(statearr_27452_27498[(2)] = inst_27402);

(statearr_27452_27498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (5))){
var inst_27363 = cljs.core.deref.call(null,mults);
var inst_27364 = cljs.core.vals.call(null,inst_27363);
var inst_27365 = cljs.core.seq.call(null,inst_27364);
var inst_27366 = inst_27365;
var inst_27367 = null;
var inst_27368 = (0);
var inst_27369 = (0);
var state_27425__$1 = (function (){var statearr_27453 = state_27425;
(statearr_27453[(13)] = inst_27367);

(statearr_27453[(14)] = inst_27368);

(statearr_27453[(15)] = inst_27366);

(statearr_27453[(16)] = inst_27369);

return statearr_27453;
})();
var statearr_27454_27499 = state_27425__$1;
(statearr_27454_27499[(2)] = null);

(statearr_27454_27499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (14))){
var state_27425__$1 = state_27425;
var statearr_27458_27500 = state_27425__$1;
(statearr_27458_27500[(2)] = null);

(statearr_27458_27500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (16))){
var inst_27380 = (state_27425[(10)]);
var inst_27384 = cljs.core.chunk_first.call(null,inst_27380);
var inst_27385 = cljs.core.chunk_rest.call(null,inst_27380);
var inst_27386 = cljs.core.count.call(null,inst_27384);
var inst_27366 = inst_27385;
var inst_27367 = inst_27384;
var inst_27368 = inst_27386;
var inst_27369 = (0);
var state_27425__$1 = (function (){var statearr_27459 = state_27425;
(statearr_27459[(13)] = inst_27367);

(statearr_27459[(14)] = inst_27368);

(statearr_27459[(15)] = inst_27366);

(statearr_27459[(16)] = inst_27369);

return statearr_27459;
})();
var statearr_27460_27501 = state_27425__$1;
(statearr_27460_27501[(2)] = null);

(statearr_27460_27501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (10))){
var inst_27367 = (state_27425[(13)]);
var inst_27368 = (state_27425[(14)]);
var inst_27366 = (state_27425[(15)]);
var inst_27369 = (state_27425[(16)]);
var inst_27374 = cljs.core._nth.call(null,inst_27367,inst_27369);
var inst_27375 = cljs.core.async.muxch_STAR_.call(null,inst_27374);
var inst_27376 = cljs.core.async.close_BANG_.call(null,inst_27375);
var inst_27377 = (inst_27369 + (1));
var tmp27455 = inst_27367;
var tmp27456 = inst_27368;
var tmp27457 = inst_27366;
var inst_27366__$1 = tmp27457;
var inst_27367__$1 = tmp27455;
var inst_27368__$1 = tmp27456;
var inst_27369__$1 = inst_27377;
var state_27425__$1 = (function (){var statearr_27461 = state_27425;
(statearr_27461[(13)] = inst_27367__$1);

(statearr_27461[(17)] = inst_27376);

(statearr_27461[(14)] = inst_27368__$1);

(statearr_27461[(15)] = inst_27366__$1);

(statearr_27461[(16)] = inst_27369__$1);

return statearr_27461;
})();
var statearr_27462_27502 = state_27425__$1;
(statearr_27462_27502[(2)] = null);

(statearr_27462_27502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (18))){
var inst_27395 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27463_27503 = state_27425__$1;
(statearr_27463_27503[(2)] = inst_27395);

(statearr_27463_27503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (8))){
var inst_27368 = (state_27425[(14)]);
var inst_27369 = (state_27425[(16)]);
var inst_27371 = (inst_27369 < inst_27368);
var inst_27372 = inst_27371;
var state_27425__$1 = state_27425;
if(cljs.core.truth_(inst_27372)){
var statearr_27464_27504 = state_27425__$1;
(statearr_27464_27504[(1)] = (10));

} else {
var statearr_27465_27505 = state_27425__$1;
(statearr_27465_27505[(1)] = (11));

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
});})(c__25578__auto___27477,mults,ensure_mult,p))
;
return ((function (switch__25465__auto__,c__25578__auto___27477,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_27425){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__25469__auto__ = e27470;
var statearr_27471_27506 = state_27425;
(statearr_27471_27506[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27507 = state_27425;
state_27425 = G__27507;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_27425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_27425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27477,mults,ensure_mult,p))
})();
var state__25580__auto__ = (function (){var statearr_27472 = f__25579__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27477);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27477,mults,ensure_mult,p))
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
var args27508 = [];
var len__23309__auto___27511 = arguments.length;
var i__23310__auto___27512 = (0);
while(true){
if((i__23310__auto___27512 < len__23309__auto___27511)){
args27508.push((arguments[i__23310__auto___27512]));

var G__27513 = (i__23310__auto___27512 + (1));
i__23310__auto___27512 = G__27513;
continue;
} else {
}
break;
}

var G__27510 = args27508.length;
switch (G__27510) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27508.length)].join('')));

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
var args27515 = [];
var len__23309__auto___27518 = arguments.length;
var i__23310__auto___27519 = (0);
while(true){
if((i__23310__auto___27519 < len__23309__auto___27518)){
args27515.push((arguments[i__23310__auto___27519]));

var G__27520 = (i__23310__auto___27519 + (1));
i__23310__auto___27519 = G__27520;
continue;
} else {
}
break;
}

var G__27517 = args27515.length;
switch (G__27517) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27515.length)].join('')));

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
var args27522 = [];
var len__23309__auto___27593 = arguments.length;
var i__23310__auto___27594 = (0);
while(true){
if((i__23310__auto___27594 < len__23309__auto___27593)){
args27522.push((arguments[i__23310__auto___27594]));

var G__27595 = (i__23310__auto___27594 + (1));
i__23310__auto___27594 = G__27595;
continue;
} else {
}
break;
}

var G__27524 = args27522.length;
switch (G__27524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27522.length)].join('')));

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
var c__25578__auto___27597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27563){
var state_val_27564 = (state_27563[(1)]);
if((state_val_27564 === (7))){
var state_27563__$1 = state_27563;
var statearr_27565_27598 = state_27563__$1;
(statearr_27565_27598[(2)] = null);

(statearr_27565_27598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (1))){
var state_27563__$1 = state_27563;
var statearr_27566_27599 = state_27563__$1;
(statearr_27566_27599[(2)] = null);

(statearr_27566_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (4))){
var inst_27527 = (state_27563[(7)]);
var inst_27529 = (inst_27527 < cnt);
var state_27563__$1 = state_27563;
if(cljs.core.truth_(inst_27529)){
var statearr_27567_27600 = state_27563__$1;
(statearr_27567_27600[(1)] = (6));

} else {
var statearr_27568_27601 = state_27563__$1;
(statearr_27568_27601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (15))){
var inst_27559 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
var statearr_27569_27602 = state_27563__$1;
(statearr_27569_27602[(2)] = inst_27559);

(statearr_27569_27602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (13))){
var inst_27552 = cljs.core.async.close_BANG_.call(null,out);
var state_27563__$1 = state_27563;
var statearr_27570_27603 = state_27563__$1;
(statearr_27570_27603[(2)] = inst_27552);

(statearr_27570_27603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (6))){
var state_27563__$1 = state_27563;
var statearr_27571_27604 = state_27563__$1;
(statearr_27571_27604[(2)] = null);

(statearr_27571_27604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (3))){
var inst_27561 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27563__$1,inst_27561);
} else {
if((state_val_27564 === (12))){
var inst_27549 = (state_27563[(8)]);
var inst_27549__$1 = (state_27563[(2)]);
var inst_27550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27549__$1);
var state_27563__$1 = (function (){var statearr_27572 = state_27563;
(statearr_27572[(8)] = inst_27549__$1);

return statearr_27572;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27573_27605 = state_27563__$1;
(statearr_27573_27605[(1)] = (13));

} else {
var statearr_27574_27606 = state_27563__$1;
(statearr_27574_27606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (2))){
var inst_27526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27527 = (0);
var state_27563__$1 = (function (){var statearr_27575 = state_27563;
(statearr_27575[(7)] = inst_27527);

(statearr_27575[(9)] = inst_27526);

return statearr_27575;
})();
var statearr_27576_27607 = state_27563__$1;
(statearr_27576_27607[(2)] = null);

(statearr_27576_27607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (11))){
var inst_27527 = (state_27563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27563,(10),Object,null,(9));
var inst_27536 = chs__$1.call(null,inst_27527);
var inst_27537 = done.call(null,inst_27527);
var inst_27538 = cljs.core.async.take_BANG_.call(null,inst_27536,inst_27537);
var state_27563__$1 = state_27563;
var statearr_27577_27608 = state_27563__$1;
(statearr_27577_27608[(2)] = inst_27538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (9))){
var inst_27527 = (state_27563[(7)]);
var inst_27540 = (state_27563[(2)]);
var inst_27541 = (inst_27527 + (1));
var inst_27527__$1 = inst_27541;
var state_27563__$1 = (function (){var statearr_27578 = state_27563;
(statearr_27578[(10)] = inst_27540);

(statearr_27578[(7)] = inst_27527__$1);

return statearr_27578;
})();
var statearr_27579_27609 = state_27563__$1;
(statearr_27579_27609[(2)] = null);

(statearr_27579_27609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (5))){
var inst_27547 = (state_27563[(2)]);
var state_27563__$1 = (function (){var statearr_27580 = state_27563;
(statearr_27580[(11)] = inst_27547);

return statearr_27580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27563__$1,(12),dchan);
} else {
if((state_val_27564 === (14))){
var inst_27549 = (state_27563[(8)]);
var inst_27554 = cljs.core.apply.call(null,f,inst_27549);
var state_27563__$1 = state_27563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27563__$1,(16),out,inst_27554);
} else {
if((state_val_27564 === (16))){
var inst_27556 = (state_27563[(2)]);
var state_27563__$1 = (function (){var statearr_27581 = state_27563;
(statearr_27581[(12)] = inst_27556);

return statearr_27581;
})();
var statearr_27582_27610 = state_27563__$1;
(statearr_27582_27610[(2)] = null);

(statearr_27582_27610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (10))){
var inst_27531 = (state_27563[(2)]);
var inst_27532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27563__$1 = (function (){var statearr_27583 = state_27563;
(statearr_27583[(13)] = inst_27531);

return statearr_27583;
})();
var statearr_27584_27611 = state_27563__$1;
(statearr_27584_27611[(2)] = inst_27532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (8))){
var inst_27545 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
var statearr_27585_27612 = state_27563__$1;
(statearr_27585_27612[(2)] = inst_27545);

(statearr_27585_27612[(1)] = (5));


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
});})(c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25465__auto__,c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_27589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27589[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_27589[(1)] = (1));

return statearr_27589;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_27563){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27590){if((e27590 instanceof Object)){
var ex__25469__auto__ = e27590;
var statearr_27591_27613 = state_27563;
(statearr_27591_27613[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27614 = state_27563;
state_27563 = G__27614;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_27563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_27563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25580__auto__ = (function (){var statearr_27592 = f__25579__auto__.call(null);
(statearr_27592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27597);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27597,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27616 = [];
var len__23309__auto___27672 = arguments.length;
var i__23310__auto___27673 = (0);
while(true){
if((i__23310__auto___27673 < len__23309__auto___27672)){
args27616.push((arguments[i__23310__auto___27673]));

var G__27674 = (i__23310__auto___27673 + (1));
i__23310__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var G__27618 = args27616.length;
switch (G__27618) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27616.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___27676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27676,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27676,out){
return (function (state_27648){
var state_val_27649 = (state_27648[(1)]);
if((state_val_27649 === (7))){
var inst_27628 = (state_27648[(7)]);
var inst_27627 = (state_27648[(8)]);
var inst_27627__$1 = (state_27648[(2)]);
var inst_27628__$1 = cljs.core.nth.call(null,inst_27627__$1,(0),null);
var inst_27629 = cljs.core.nth.call(null,inst_27627__$1,(1),null);
var inst_27630 = (inst_27628__$1 == null);
var state_27648__$1 = (function (){var statearr_27650 = state_27648;
(statearr_27650[(7)] = inst_27628__$1);

(statearr_27650[(8)] = inst_27627__$1);

(statearr_27650[(9)] = inst_27629);

return statearr_27650;
})();
if(cljs.core.truth_(inst_27630)){
var statearr_27651_27677 = state_27648__$1;
(statearr_27651_27677[(1)] = (8));

} else {
var statearr_27652_27678 = state_27648__$1;
(statearr_27652_27678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (1))){
var inst_27619 = cljs.core.vec.call(null,chs);
var inst_27620 = inst_27619;
var state_27648__$1 = (function (){var statearr_27653 = state_27648;
(statearr_27653[(10)] = inst_27620);

return statearr_27653;
})();
var statearr_27654_27679 = state_27648__$1;
(statearr_27654_27679[(2)] = null);

(statearr_27654_27679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (4))){
var inst_27620 = (state_27648[(10)]);
var state_27648__$1 = state_27648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27648__$1,(7),inst_27620);
} else {
if((state_val_27649 === (6))){
var inst_27644 = (state_27648[(2)]);
var state_27648__$1 = state_27648;
var statearr_27655_27680 = state_27648__$1;
(statearr_27655_27680[(2)] = inst_27644);

(statearr_27655_27680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (3))){
var inst_27646 = (state_27648[(2)]);
var state_27648__$1 = state_27648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27648__$1,inst_27646);
} else {
if((state_val_27649 === (2))){
var inst_27620 = (state_27648[(10)]);
var inst_27622 = cljs.core.count.call(null,inst_27620);
var inst_27623 = (inst_27622 > (0));
var state_27648__$1 = state_27648;
if(cljs.core.truth_(inst_27623)){
var statearr_27657_27681 = state_27648__$1;
(statearr_27657_27681[(1)] = (4));

} else {
var statearr_27658_27682 = state_27648__$1;
(statearr_27658_27682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (11))){
var inst_27620 = (state_27648[(10)]);
var inst_27637 = (state_27648[(2)]);
var tmp27656 = inst_27620;
var inst_27620__$1 = tmp27656;
var state_27648__$1 = (function (){var statearr_27659 = state_27648;
(statearr_27659[(10)] = inst_27620__$1);

(statearr_27659[(11)] = inst_27637);

return statearr_27659;
})();
var statearr_27660_27683 = state_27648__$1;
(statearr_27660_27683[(2)] = null);

(statearr_27660_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (9))){
var inst_27628 = (state_27648[(7)]);
var state_27648__$1 = state_27648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27648__$1,(11),out,inst_27628);
} else {
if((state_val_27649 === (5))){
var inst_27642 = cljs.core.async.close_BANG_.call(null,out);
var state_27648__$1 = state_27648;
var statearr_27661_27684 = state_27648__$1;
(statearr_27661_27684[(2)] = inst_27642);

(statearr_27661_27684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (10))){
var inst_27640 = (state_27648[(2)]);
var state_27648__$1 = state_27648;
var statearr_27662_27685 = state_27648__$1;
(statearr_27662_27685[(2)] = inst_27640);

(statearr_27662_27685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27649 === (8))){
var inst_27628 = (state_27648[(7)]);
var inst_27620 = (state_27648[(10)]);
var inst_27627 = (state_27648[(8)]);
var inst_27629 = (state_27648[(9)]);
var inst_27632 = (function (){var cs = inst_27620;
var vec__27625 = inst_27627;
var v = inst_27628;
var c = inst_27629;
return ((function (cs,vec__27625,v,c,inst_27628,inst_27620,inst_27627,inst_27629,state_val_27649,c__25578__auto___27676,out){
return (function (p1__27615_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27615_SHARP_);
});
;})(cs,vec__27625,v,c,inst_27628,inst_27620,inst_27627,inst_27629,state_val_27649,c__25578__auto___27676,out))
})();
var inst_27633 = cljs.core.filterv.call(null,inst_27632,inst_27620);
var inst_27620__$1 = inst_27633;
var state_27648__$1 = (function (){var statearr_27663 = state_27648;
(statearr_27663[(10)] = inst_27620__$1);

return statearr_27663;
})();
var statearr_27664_27686 = state_27648__$1;
(statearr_27664_27686[(2)] = null);

(statearr_27664_27686[(1)] = (2));


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
});})(c__25578__auto___27676,out))
;
return ((function (switch__25465__auto__,c__25578__auto___27676,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_27668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27668[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_27668[(1)] = (1));

return statearr_27668;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_27648){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27669){if((e27669 instanceof Object)){
var ex__25469__auto__ = e27669;
var statearr_27670_27687 = state_27648;
(statearr_27670_27687[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27688 = state_27648;
state_27648 = G__27688;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_27648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_27648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27676,out))
})();
var state__25580__auto__ = (function (){var statearr_27671 = f__25579__auto__.call(null);
(statearr_27671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27676);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27676,out))
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
var args27689 = [];
var len__23309__auto___27738 = arguments.length;
var i__23310__auto___27739 = (0);
while(true){
if((i__23310__auto___27739 < len__23309__auto___27738)){
args27689.push((arguments[i__23310__auto___27739]));

var G__27740 = (i__23310__auto___27739 + (1));
i__23310__auto___27739 = G__27740;
continue;
} else {
}
break;
}

var G__27691 = args27689.length;
switch (G__27691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27689.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___27742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27742,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27742,out){
return (function (state_27715){
var state_val_27716 = (state_27715[(1)]);
if((state_val_27716 === (7))){
var inst_27697 = (state_27715[(7)]);
var inst_27697__$1 = (state_27715[(2)]);
var inst_27698 = (inst_27697__$1 == null);
var inst_27699 = cljs.core.not.call(null,inst_27698);
var state_27715__$1 = (function (){var statearr_27717 = state_27715;
(statearr_27717[(7)] = inst_27697__$1);

return statearr_27717;
})();
if(inst_27699){
var statearr_27718_27743 = state_27715__$1;
(statearr_27718_27743[(1)] = (8));

} else {
var statearr_27719_27744 = state_27715__$1;
(statearr_27719_27744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (1))){
var inst_27692 = (0);
var state_27715__$1 = (function (){var statearr_27720 = state_27715;
(statearr_27720[(8)] = inst_27692);

return statearr_27720;
})();
var statearr_27721_27745 = state_27715__$1;
(statearr_27721_27745[(2)] = null);

(statearr_27721_27745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (4))){
var state_27715__$1 = state_27715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27715__$1,(7),ch);
} else {
if((state_val_27716 === (6))){
var inst_27710 = (state_27715[(2)]);
var state_27715__$1 = state_27715;
var statearr_27722_27746 = state_27715__$1;
(statearr_27722_27746[(2)] = inst_27710);

(statearr_27722_27746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (3))){
var inst_27712 = (state_27715[(2)]);
var inst_27713 = cljs.core.async.close_BANG_.call(null,out);
var state_27715__$1 = (function (){var statearr_27723 = state_27715;
(statearr_27723[(9)] = inst_27712);

return statearr_27723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27715__$1,inst_27713);
} else {
if((state_val_27716 === (2))){
var inst_27692 = (state_27715[(8)]);
var inst_27694 = (inst_27692 < n);
var state_27715__$1 = state_27715;
if(cljs.core.truth_(inst_27694)){
var statearr_27724_27747 = state_27715__$1;
(statearr_27724_27747[(1)] = (4));

} else {
var statearr_27725_27748 = state_27715__$1;
(statearr_27725_27748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (11))){
var inst_27692 = (state_27715[(8)]);
var inst_27702 = (state_27715[(2)]);
var inst_27703 = (inst_27692 + (1));
var inst_27692__$1 = inst_27703;
var state_27715__$1 = (function (){var statearr_27726 = state_27715;
(statearr_27726[(10)] = inst_27702);

(statearr_27726[(8)] = inst_27692__$1);

return statearr_27726;
})();
var statearr_27727_27749 = state_27715__$1;
(statearr_27727_27749[(2)] = null);

(statearr_27727_27749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (9))){
var state_27715__$1 = state_27715;
var statearr_27728_27750 = state_27715__$1;
(statearr_27728_27750[(2)] = null);

(statearr_27728_27750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (5))){
var state_27715__$1 = state_27715;
var statearr_27729_27751 = state_27715__$1;
(statearr_27729_27751[(2)] = null);

(statearr_27729_27751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (10))){
var inst_27707 = (state_27715[(2)]);
var state_27715__$1 = state_27715;
var statearr_27730_27752 = state_27715__$1;
(statearr_27730_27752[(2)] = inst_27707);

(statearr_27730_27752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27716 === (8))){
var inst_27697 = (state_27715[(7)]);
var state_27715__$1 = state_27715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27715__$1,(11),out,inst_27697);
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
});})(c__25578__auto___27742,out))
;
return ((function (switch__25465__auto__,c__25578__auto___27742,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_27734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27734[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_27734[(1)] = (1));

return statearr_27734;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_27715){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27735){if((e27735 instanceof Object)){
var ex__25469__auto__ = e27735;
var statearr_27736_27753 = state_27715;
(statearr_27736_27753[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27715;
state_27715 = G__27754;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_27715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_27715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27742,out))
})();
var state__25580__auto__ = (function (){var statearr_27737 = f__25579__auto__.call(null);
(statearr_27737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27742);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27742,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27762 = (function (map_LT_,f,ch,meta27763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27763 = meta27763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27764,meta27763__$1){
var self__ = this;
var _27764__$1 = this;
return (new cljs.core.async.t_cljs$core$async27762(self__.map_LT_,self__.f,self__.ch,meta27763__$1));
});

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27764){
var self__ = this;
var _27764__$1 = this;
return self__.meta27763;
});

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27765 = (function (map_LT_,f,ch,meta27763,_,fn1,meta27766){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27763 = meta27763;
this._ = _;
this.fn1 = fn1;
this.meta27766 = meta27766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27767,meta27766__$1){
var self__ = this;
var _27767__$1 = this;
return (new cljs.core.async.t_cljs$core$async27765(self__.map_LT_,self__.f,self__.ch,self__.meta27763,self__._,self__.fn1,meta27766__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27767){
var self__ = this;
var _27767__$1 = this;
return self__.meta27766;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27755_SHARP_){
return f1.call(null,(((p1__27755_SHARP_ == null))?null:self__.f.call(null,p1__27755_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27763","meta27763",1713301038,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27762","cljs.core.async/t_cljs$core$async27762",623183656,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27766","meta27766",1676618358,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27765";

cljs.core.async.t_cljs$core$async27765.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27765");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27765 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27765(map_LT___$1,f__$1,ch__$1,meta27763__$1,___$2,fn1__$1,meta27766){
return (new cljs.core.async.t_cljs$core$async27765(map_LT___$1,f__$1,ch__$1,meta27763__$1,___$2,fn1__$1,meta27766));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27765(self__.map_LT_,self__.f,self__.ch,self__.meta27763,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22227__auto__ = ret;
if(cljs.core.truth_(and__22227__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22227__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27763","meta27763",1713301038,null)], null);
});

cljs.core.async.t_cljs$core$async27762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27762";

cljs.core.async.t_cljs$core$async27762.cljs$lang$ctorPrWriter = (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27762");
});

cljs.core.async.__GT_t_cljs$core$async27762 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27762(map_LT___$1,f__$1,ch__$1,meta27763){
return (new cljs.core.async.t_cljs$core$async27762(map_LT___$1,f__$1,ch__$1,meta27763));
});

}

return (new cljs.core.async.t_cljs$core$async27762(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27771 = (function (map_GT_,f,ch,meta27772){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27772 = meta27772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27773,meta27772__$1){
var self__ = this;
var _27773__$1 = this;
return (new cljs.core.async.t_cljs$core$async27771(self__.map_GT_,self__.f,self__.ch,meta27772__$1));
});

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27773){
var self__ = this;
var _27773__$1 = this;
return self__.meta27772;
});

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27772","meta27772",294669720,null)], null);
});

cljs.core.async.t_cljs$core$async27771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27771";

cljs.core.async.t_cljs$core$async27771.cljs$lang$ctorPrWriter = (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27771");
});

cljs.core.async.__GT_t_cljs$core$async27771 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27771(map_GT___$1,f__$1,ch__$1,meta27772){
return (new cljs.core.async.t_cljs$core$async27771(map_GT___$1,f__$1,ch__$1,meta27772));
});

}

return (new cljs.core.async.t_cljs$core$async27771(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27777 = (function (filter_GT_,p,ch,meta27778){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27778 = meta27778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27779,meta27778__$1){
var self__ = this;
var _27779__$1 = this;
return (new cljs.core.async.t_cljs$core$async27777(self__.filter_GT_,self__.p,self__.ch,meta27778__$1));
});

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27779){
var self__ = this;
var _27779__$1 = this;
return self__.meta27778;
});

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27778","meta27778",1047979420,null)], null);
});

cljs.core.async.t_cljs$core$async27777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27777";

cljs.core.async.t_cljs$core$async27777.cljs$lang$ctorPrWriter = (function (this__22845__auto__,writer__22846__auto__,opt__22847__auto__){
return cljs.core._write.call(null,writer__22846__auto__,"cljs.core.async/t_cljs$core$async27777");
});

cljs.core.async.__GT_t_cljs$core$async27777 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27777(filter_GT___$1,p__$1,ch__$1,meta27778){
return (new cljs.core.async.t_cljs$core$async27777(filter_GT___$1,p__$1,ch__$1,meta27778));
});

}

return (new cljs.core.async.t_cljs$core$async27777(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27780 = [];
var len__23309__auto___27824 = arguments.length;
var i__23310__auto___27825 = (0);
while(true){
if((i__23310__auto___27825 < len__23309__auto___27824)){
args27780.push((arguments[i__23310__auto___27825]));

var G__27826 = (i__23310__auto___27825 + (1));
i__23310__auto___27825 = G__27826;
continue;
} else {
}
break;
}

var G__27782 = args27780.length;
switch (G__27782) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27780.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___27828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___27828,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___27828,out){
return (function (state_27803){
var state_val_27804 = (state_27803[(1)]);
if((state_val_27804 === (7))){
var inst_27799 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27805_27829 = state_27803__$1;
(statearr_27805_27829[(2)] = inst_27799);

(statearr_27805_27829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (1))){
var state_27803__$1 = state_27803;
var statearr_27806_27830 = state_27803__$1;
(statearr_27806_27830[(2)] = null);

(statearr_27806_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (4))){
var inst_27785 = (state_27803[(7)]);
var inst_27785__$1 = (state_27803[(2)]);
var inst_27786 = (inst_27785__$1 == null);
var state_27803__$1 = (function (){var statearr_27807 = state_27803;
(statearr_27807[(7)] = inst_27785__$1);

return statearr_27807;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27808_27831 = state_27803__$1;
(statearr_27808_27831[(1)] = (5));

} else {
var statearr_27809_27832 = state_27803__$1;
(statearr_27809_27832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (6))){
var inst_27785 = (state_27803[(7)]);
var inst_27790 = p.call(null,inst_27785);
var state_27803__$1 = state_27803;
if(cljs.core.truth_(inst_27790)){
var statearr_27810_27833 = state_27803__$1;
(statearr_27810_27833[(1)] = (8));

} else {
var statearr_27811_27834 = state_27803__$1;
(statearr_27811_27834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (3))){
var inst_27801 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27803__$1,inst_27801);
} else {
if((state_val_27804 === (2))){
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27803__$1,(4),ch);
} else {
if((state_val_27804 === (11))){
var inst_27793 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27812_27835 = state_27803__$1;
(statearr_27812_27835[(2)] = inst_27793);

(statearr_27812_27835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (9))){
var state_27803__$1 = state_27803;
var statearr_27813_27836 = state_27803__$1;
(statearr_27813_27836[(2)] = null);

(statearr_27813_27836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (5))){
var inst_27788 = cljs.core.async.close_BANG_.call(null,out);
var state_27803__$1 = state_27803;
var statearr_27814_27837 = state_27803__$1;
(statearr_27814_27837[(2)] = inst_27788);

(statearr_27814_27837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (10))){
var inst_27796 = (state_27803[(2)]);
var state_27803__$1 = (function (){var statearr_27815 = state_27803;
(statearr_27815[(8)] = inst_27796);

return statearr_27815;
})();
var statearr_27816_27838 = state_27803__$1;
(statearr_27816_27838[(2)] = null);

(statearr_27816_27838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (8))){
var inst_27785 = (state_27803[(7)]);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27803__$1,(11),out,inst_27785);
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
});})(c__25578__auto___27828,out))
;
return ((function (switch__25465__auto__,c__25578__auto___27828,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_27820 = [null,null,null,null,null,null,null,null,null];
(statearr_27820[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_27820[(1)] = (1));

return statearr_27820;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_27803){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_27803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e27821){if((e27821 instanceof Object)){
var ex__25469__auto__ = e27821;
var statearr_27822_27839 = state_27803;
(statearr_27822_27839[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27840 = state_27803;
state_27803 = G__27840;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_27803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_27803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___27828,out))
})();
var state__25580__auto__ = (function (){var statearr_27823 = f__25579__auto__.call(null);
(statearr_27823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___27828);

return statearr_27823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___27828,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27841 = [];
var len__23309__auto___27844 = arguments.length;
var i__23310__auto___27845 = (0);
while(true){
if((i__23310__auto___27845 < len__23309__auto___27844)){
args27841.push((arguments[i__23310__auto___27845]));

var G__27846 = (i__23310__auto___27845 + (1));
i__23310__auto___27845 = G__27846;
continue;
} else {
}
break;
}

var G__27843 = args27841.length;
switch (G__27843) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27841.length)].join('')));

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
var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__){
return (function (state_28013){
var state_val_28014 = (state_28013[(1)]);
if((state_val_28014 === (7))){
var inst_28009 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28015_28056 = state_28013__$1;
(statearr_28015_28056[(2)] = inst_28009);

(statearr_28015_28056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (20))){
var inst_27979 = (state_28013[(7)]);
var inst_27990 = (state_28013[(2)]);
var inst_27991 = cljs.core.next.call(null,inst_27979);
var inst_27965 = inst_27991;
var inst_27966 = null;
var inst_27967 = (0);
var inst_27968 = (0);
var state_28013__$1 = (function (){var statearr_28016 = state_28013;
(statearr_28016[(8)] = inst_27966);

(statearr_28016[(9)] = inst_27965);

(statearr_28016[(10)] = inst_27990);

(statearr_28016[(11)] = inst_27968);

(statearr_28016[(12)] = inst_27967);

return statearr_28016;
})();
var statearr_28017_28057 = state_28013__$1;
(statearr_28017_28057[(2)] = null);

(statearr_28017_28057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (1))){
var state_28013__$1 = state_28013;
var statearr_28018_28058 = state_28013__$1;
(statearr_28018_28058[(2)] = null);

(statearr_28018_28058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (4))){
var inst_27954 = (state_28013[(13)]);
var inst_27954__$1 = (state_28013[(2)]);
var inst_27955 = (inst_27954__$1 == null);
var state_28013__$1 = (function (){var statearr_28019 = state_28013;
(statearr_28019[(13)] = inst_27954__$1);

return statearr_28019;
})();
if(cljs.core.truth_(inst_27955)){
var statearr_28020_28059 = state_28013__$1;
(statearr_28020_28059[(1)] = (5));

} else {
var statearr_28021_28060 = state_28013__$1;
(statearr_28021_28060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (15))){
var state_28013__$1 = state_28013;
var statearr_28025_28061 = state_28013__$1;
(statearr_28025_28061[(2)] = null);

(statearr_28025_28061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (21))){
var state_28013__$1 = state_28013;
var statearr_28026_28062 = state_28013__$1;
(statearr_28026_28062[(2)] = null);

(statearr_28026_28062[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (13))){
var inst_27966 = (state_28013[(8)]);
var inst_27965 = (state_28013[(9)]);
var inst_27968 = (state_28013[(11)]);
var inst_27967 = (state_28013[(12)]);
var inst_27975 = (state_28013[(2)]);
var inst_27976 = (inst_27968 + (1));
var tmp28022 = inst_27966;
var tmp28023 = inst_27965;
var tmp28024 = inst_27967;
var inst_27965__$1 = tmp28023;
var inst_27966__$1 = tmp28022;
var inst_27967__$1 = tmp28024;
var inst_27968__$1 = inst_27976;
var state_28013__$1 = (function (){var statearr_28027 = state_28013;
(statearr_28027[(8)] = inst_27966__$1);

(statearr_28027[(9)] = inst_27965__$1);

(statearr_28027[(11)] = inst_27968__$1);

(statearr_28027[(12)] = inst_27967__$1);

(statearr_28027[(14)] = inst_27975);

return statearr_28027;
})();
var statearr_28028_28063 = state_28013__$1;
(statearr_28028_28063[(2)] = null);

(statearr_28028_28063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (22))){
var state_28013__$1 = state_28013;
var statearr_28029_28064 = state_28013__$1;
(statearr_28029_28064[(2)] = null);

(statearr_28029_28064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (6))){
var inst_27954 = (state_28013[(13)]);
var inst_27963 = f.call(null,inst_27954);
var inst_27964 = cljs.core.seq.call(null,inst_27963);
var inst_27965 = inst_27964;
var inst_27966 = null;
var inst_27967 = (0);
var inst_27968 = (0);
var state_28013__$1 = (function (){var statearr_28030 = state_28013;
(statearr_28030[(8)] = inst_27966);

(statearr_28030[(9)] = inst_27965);

(statearr_28030[(11)] = inst_27968);

(statearr_28030[(12)] = inst_27967);

return statearr_28030;
})();
var statearr_28031_28065 = state_28013__$1;
(statearr_28031_28065[(2)] = null);

(statearr_28031_28065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (17))){
var inst_27979 = (state_28013[(7)]);
var inst_27983 = cljs.core.chunk_first.call(null,inst_27979);
var inst_27984 = cljs.core.chunk_rest.call(null,inst_27979);
var inst_27985 = cljs.core.count.call(null,inst_27983);
var inst_27965 = inst_27984;
var inst_27966 = inst_27983;
var inst_27967 = inst_27985;
var inst_27968 = (0);
var state_28013__$1 = (function (){var statearr_28032 = state_28013;
(statearr_28032[(8)] = inst_27966);

(statearr_28032[(9)] = inst_27965);

(statearr_28032[(11)] = inst_27968);

(statearr_28032[(12)] = inst_27967);

return statearr_28032;
})();
var statearr_28033_28066 = state_28013__$1;
(statearr_28033_28066[(2)] = null);

(statearr_28033_28066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (3))){
var inst_28011 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28013__$1,inst_28011);
} else {
if((state_val_28014 === (12))){
var inst_27999 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28034_28067 = state_28013__$1;
(statearr_28034_28067[(2)] = inst_27999);

(statearr_28034_28067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (2))){
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28013__$1,(4),in$);
} else {
if((state_val_28014 === (23))){
var inst_28007 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28035_28068 = state_28013__$1;
(statearr_28035_28068[(2)] = inst_28007);

(statearr_28035_28068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (19))){
var inst_27994 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28036_28069 = state_28013__$1;
(statearr_28036_28069[(2)] = inst_27994);

(statearr_28036_28069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (11))){
var inst_27965 = (state_28013[(9)]);
var inst_27979 = (state_28013[(7)]);
var inst_27979__$1 = cljs.core.seq.call(null,inst_27965);
var state_28013__$1 = (function (){var statearr_28037 = state_28013;
(statearr_28037[(7)] = inst_27979__$1);

return statearr_28037;
})();
if(inst_27979__$1){
var statearr_28038_28070 = state_28013__$1;
(statearr_28038_28070[(1)] = (14));

} else {
var statearr_28039_28071 = state_28013__$1;
(statearr_28039_28071[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (9))){
var inst_28001 = (state_28013[(2)]);
var inst_28002 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28013__$1 = (function (){var statearr_28040 = state_28013;
(statearr_28040[(15)] = inst_28001);

return statearr_28040;
})();
if(cljs.core.truth_(inst_28002)){
var statearr_28041_28072 = state_28013__$1;
(statearr_28041_28072[(1)] = (21));

} else {
var statearr_28042_28073 = state_28013__$1;
(statearr_28042_28073[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (5))){
var inst_27957 = cljs.core.async.close_BANG_.call(null,out);
var state_28013__$1 = state_28013;
var statearr_28043_28074 = state_28013__$1;
(statearr_28043_28074[(2)] = inst_27957);

(statearr_28043_28074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (14))){
var inst_27979 = (state_28013[(7)]);
var inst_27981 = cljs.core.chunked_seq_QMARK_.call(null,inst_27979);
var state_28013__$1 = state_28013;
if(inst_27981){
var statearr_28044_28075 = state_28013__$1;
(statearr_28044_28075[(1)] = (17));

} else {
var statearr_28045_28076 = state_28013__$1;
(statearr_28045_28076[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (16))){
var inst_27997 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28046_28077 = state_28013__$1;
(statearr_28046_28077[(2)] = inst_27997);

(statearr_28046_28077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (10))){
var inst_27966 = (state_28013[(8)]);
var inst_27968 = (state_28013[(11)]);
var inst_27973 = cljs.core._nth.call(null,inst_27966,inst_27968);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(13),out,inst_27973);
} else {
if((state_val_28014 === (18))){
var inst_27979 = (state_28013[(7)]);
var inst_27988 = cljs.core.first.call(null,inst_27979);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(20),out,inst_27988);
} else {
if((state_val_28014 === (8))){
var inst_27968 = (state_28013[(11)]);
var inst_27967 = (state_28013[(12)]);
var inst_27970 = (inst_27968 < inst_27967);
var inst_27971 = inst_27970;
var state_28013__$1 = state_28013;
if(cljs.core.truth_(inst_27971)){
var statearr_28047_28078 = state_28013__$1;
(statearr_28047_28078[(1)] = (10));

} else {
var statearr_28048_28079 = state_28013__$1;
(statearr_28048_28079[(1)] = (11));

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
});})(c__25578__auto__))
;
return ((function (switch__25465__auto__,c__25578__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____0 = (function (){
var statearr_28052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28052[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__);

(statearr_28052[(1)] = (1));

return statearr_28052;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____1 = (function (state_28013){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_28013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e28053){if((e28053 instanceof Object)){
var ex__25469__auto__ = e28053;
var statearr_28054_28080 = state_28013;
(statearr_28054_28080[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28081 = state_28013;
state_28013 = G__28081;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__ = function(state_28013){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____1.call(this,state_28013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__))
})();
var state__25580__auto__ = (function (){var statearr_28055 = f__25579__auto__.call(null);
(statearr_28055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_28055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__))
);

return c__25578__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28082 = [];
var len__23309__auto___28085 = arguments.length;
var i__23310__auto___28086 = (0);
while(true){
if((i__23310__auto___28086 < len__23309__auto___28085)){
args28082.push((arguments[i__23310__auto___28086]));

var G__28087 = (i__23310__auto___28086 + (1));
i__23310__auto___28086 = G__28087;
continue;
} else {
}
break;
}

var G__28084 = args28082.length;
switch (G__28084) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28082.length)].join('')));

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
var args28089 = [];
var len__23309__auto___28092 = arguments.length;
var i__23310__auto___28093 = (0);
while(true){
if((i__23310__auto___28093 < len__23309__auto___28092)){
args28089.push((arguments[i__23310__auto___28093]));

var G__28094 = (i__23310__auto___28093 + (1));
i__23310__auto___28093 = G__28094;
continue;
} else {
}
break;
}

var G__28091 = args28089.length;
switch (G__28091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28089.length)].join('')));

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
var args28096 = [];
var len__23309__auto___28147 = arguments.length;
var i__23310__auto___28148 = (0);
while(true){
if((i__23310__auto___28148 < len__23309__auto___28147)){
args28096.push((arguments[i__23310__auto___28148]));

var G__28149 = (i__23310__auto___28148 + (1));
i__23310__auto___28148 = G__28149;
continue;
} else {
}
break;
}

var G__28098 = args28096.length;
switch (G__28098) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28096.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___28151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___28151,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___28151,out){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28117 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28124_28152 = state_28122__$1;
(statearr_28124_28152[(2)] = inst_28117);

(statearr_28124_28152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var inst_28099 = null;
var state_28122__$1 = (function (){var statearr_28125 = state_28122;
(statearr_28125[(7)] = inst_28099);

return statearr_28125;
})();
var statearr_28126_28153 = state_28122__$1;
(statearr_28126_28153[(2)] = null);

(statearr_28126_28153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var inst_28102 = (state_28122[(8)]);
var inst_28102__$1 = (state_28122[(2)]);
var inst_28103 = (inst_28102__$1 == null);
var inst_28104 = cljs.core.not.call(null,inst_28103);
var state_28122__$1 = (function (){var statearr_28127 = state_28122;
(statearr_28127[(8)] = inst_28102__$1);

return statearr_28127;
})();
if(inst_28104){
var statearr_28128_28154 = state_28122__$1;
(statearr_28128_28154[(1)] = (5));

} else {
var statearr_28129_28155 = state_28122__$1;
(statearr_28129_28155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var state_28122__$1 = state_28122;
var statearr_28130_28156 = state_28122__$1;
(statearr_28130_28156[(2)] = null);

(statearr_28130_28156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28119 = (state_28122[(2)]);
var inst_28120 = cljs.core.async.close_BANG_.call(null,out);
var state_28122__$1 = (function (){var statearr_28131 = state_28122;
(statearr_28131[(9)] = inst_28119);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (2))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(4),ch);
} else {
if((state_val_28123 === (11))){
var inst_28102 = (state_28122[(8)]);
var inst_28111 = (state_28122[(2)]);
var inst_28099 = inst_28102;
var state_28122__$1 = (function (){var statearr_28132 = state_28122;
(statearr_28132[(10)] = inst_28111);

(statearr_28132[(7)] = inst_28099);

return statearr_28132;
})();
var statearr_28133_28157 = state_28122__$1;
(statearr_28133_28157[(2)] = null);

(statearr_28133_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (9))){
var inst_28102 = (state_28122[(8)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(11),out,inst_28102);
} else {
if((state_val_28123 === (5))){
var inst_28102 = (state_28122[(8)]);
var inst_28099 = (state_28122[(7)]);
var inst_28106 = cljs.core._EQ_.call(null,inst_28102,inst_28099);
var state_28122__$1 = state_28122;
if(inst_28106){
var statearr_28135_28158 = state_28122__$1;
(statearr_28135_28158[(1)] = (8));

} else {
var statearr_28136_28159 = state_28122__$1;
(statearr_28136_28159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (10))){
var inst_28114 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28137_28160 = state_28122__$1;
(statearr_28137_28160[(2)] = inst_28114);

(statearr_28137_28160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28099 = (state_28122[(7)]);
var tmp28134 = inst_28099;
var inst_28099__$1 = tmp28134;
var state_28122__$1 = (function (){var statearr_28138 = state_28122;
(statearr_28138[(7)] = inst_28099__$1);

return statearr_28138;
})();
var statearr_28139_28161 = state_28122__$1;
(statearr_28139_28161[(2)] = null);

(statearr_28139_28161[(1)] = (2));


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
});})(c__25578__auto___28151,out))
;
return ((function (switch__25465__auto__,c__25578__auto___28151,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_28143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28143[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_28143[(1)] = (1));

return statearr_28143;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_28122){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e28144){if((e28144 instanceof Object)){
var ex__25469__auto__ = e28144;
var statearr_28145_28162 = state_28122;
(statearr_28145_28162[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28163 = state_28122;
state_28122 = G__28163;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___28151,out))
})();
var state__25580__auto__ = (function (){var statearr_28146 = f__25579__auto__.call(null);
(statearr_28146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___28151);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___28151,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28164 = [];
var len__23309__auto___28234 = arguments.length;
var i__23310__auto___28235 = (0);
while(true){
if((i__23310__auto___28235 < len__23309__auto___28234)){
args28164.push((arguments[i__23310__auto___28235]));

var G__28236 = (i__23310__auto___28235 + (1));
i__23310__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var G__28166 = args28164.length;
switch (G__28166) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28164.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___28238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___28238,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___28238,out){
return (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (7))){
var inst_28200 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28206_28239 = state_28204__$1;
(statearr_28206_28239[(2)] = inst_28200);

(statearr_28206_28239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (1))){
var inst_28167 = (new Array(n));
var inst_28168 = inst_28167;
var inst_28169 = (0);
var state_28204__$1 = (function (){var statearr_28207 = state_28204;
(statearr_28207[(7)] = inst_28169);

(statearr_28207[(8)] = inst_28168);

return statearr_28207;
})();
var statearr_28208_28240 = state_28204__$1;
(statearr_28208_28240[(2)] = null);

(statearr_28208_28240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (4))){
var inst_28172 = (state_28204[(9)]);
var inst_28172__$1 = (state_28204[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var inst_28174 = cljs.core.not.call(null,inst_28173);
var state_28204__$1 = (function (){var statearr_28209 = state_28204;
(statearr_28209[(9)] = inst_28172__$1);

return statearr_28209;
})();
if(inst_28174){
var statearr_28210_28241 = state_28204__$1;
(statearr_28210_28241[(1)] = (5));

} else {
var statearr_28211_28242 = state_28204__$1;
(statearr_28211_28242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (15))){
var inst_28194 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28212_28243 = state_28204__$1;
(statearr_28212_28243[(2)] = inst_28194);

(statearr_28212_28243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (13))){
var state_28204__$1 = state_28204;
var statearr_28213_28244 = state_28204__$1;
(statearr_28213_28244[(2)] = null);

(statearr_28213_28244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (6))){
var inst_28169 = (state_28204[(7)]);
var inst_28190 = (inst_28169 > (0));
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28190)){
var statearr_28214_28245 = state_28204__$1;
(statearr_28214_28245[(1)] = (12));

} else {
var statearr_28215_28246 = state_28204__$1;
(statearr_28215_28246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (3))){
var inst_28202 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
if((state_val_28205 === (12))){
var inst_28168 = (state_28204[(8)]);
var inst_28192 = cljs.core.vec.call(null,inst_28168);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(15),out,inst_28192);
} else {
if((state_val_28205 === (2))){
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(4),ch);
} else {
if((state_val_28205 === (11))){
var inst_28184 = (state_28204[(2)]);
var inst_28185 = (new Array(n));
var inst_28168 = inst_28185;
var inst_28169 = (0);
var state_28204__$1 = (function (){var statearr_28216 = state_28204;
(statearr_28216[(7)] = inst_28169);

(statearr_28216[(10)] = inst_28184);

(statearr_28216[(8)] = inst_28168);

return statearr_28216;
})();
var statearr_28217_28247 = state_28204__$1;
(statearr_28217_28247[(2)] = null);

(statearr_28217_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (9))){
var inst_28168 = (state_28204[(8)]);
var inst_28182 = cljs.core.vec.call(null,inst_28168);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(11),out,inst_28182);
} else {
if((state_val_28205 === (5))){
var inst_28172 = (state_28204[(9)]);
var inst_28169 = (state_28204[(7)]);
var inst_28177 = (state_28204[(11)]);
var inst_28168 = (state_28204[(8)]);
var inst_28176 = (inst_28168[inst_28169] = inst_28172);
var inst_28177__$1 = (inst_28169 + (1));
var inst_28178 = (inst_28177__$1 < n);
var state_28204__$1 = (function (){var statearr_28218 = state_28204;
(statearr_28218[(12)] = inst_28176);

(statearr_28218[(11)] = inst_28177__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28178)){
var statearr_28219_28248 = state_28204__$1;
(statearr_28219_28248[(1)] = (8));

} else {
var statearr_28220_28249 = state_28204__$1;
(statearr_28220_28249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (14))){
var inst_28197 = (state_28204[(2)]);
var inst_28198 = cljs.core.async.close_BANG_.call(null,out);
var state_28204__$1 = (function (){var statearr_28222 = state_28204;
(statearr_28222[(13)] = inst_28197);

return statearr_28222;
})();
var statearr_28223_28250 = state_28204__$1;
(statearr_28223_28250[(2)] = inst_28198);

(statearr_28223_28250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (10))){
var inst_28188 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28224_28251 = state_28204__$1;
(statearr_28224_28251[(2)] = inst_28188);

(statearr_28224_28251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (8))){
var inst_28177 = (state_28204[(11)]);
var inst_28168 = (state_28204[(8)]);
var tmp28221 = inst_28168;
var inst_28168__$1 = tmp28221;
var inst_28169 = inst_28177;
var state_28204__$1 = (function (){var statearr_28225 = state_28204;
(statearr_28225[(7)] = inst_28169);

(statearr_28225[(8)] = inst_28168__$1);

return statearr_28225;
})();
var statearr_28226_28252 = state_28204__$1;
(statearr_28226_28252[(2)] = null);

(statearr_28226_28252[(1)] = (2));


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
});})(c__25578__auto___28238,out))
;
return ((function (switch__25465__auto__,c__25578__auto___28238,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_28230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28230[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_28230[(1)] = (1));

return statearr_28230;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_28204){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e28231){if((e28231 instanceof Object)){
var ex__25469__auto__ = e28231;
var statearr_28232_28253 = state_28204;
(statearr_28232_28253[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28254 = state_28204;
state_28204 = G__28254;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___28238,out))
})();
var state__25580__auto__ = (function (){var statearr_28233 = f__25579__auto__.call(null);
(statearr_28233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___28238);

return statearr_28233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___28238,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28255 = [];
var len__23309__auto___28329 = arguments.length;
var i__23310__auto___28330 = (0);
while(true){
if((i__23310__auto___28330 < len__23309__auto___28329)){
args28255.push((arguments[i__23310__auto___28330]));

var G__28331 = (i__23310__auto___28330 + (1));
i__23310__auto___28330 = G__28331;
continue;
} else {
}
break;
}

var G__28257 = args28255.length;
switch (G__28257) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28255.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25578__auto___28333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___28333,out){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___28333,out){
return (function (state_28299){
var state_val_28300 = (state_28299[(1)]);
if((state_val_28300 === (7))){
var inst_28295 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28301_28334 = state_28299__$1;
(statearr_28301_28334[(2)] = inst_28295);

(statearr_28301_28334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (1))){
var inst_28258 = [];
var inst_28259 = inst_28258;
var inst_28260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28299__$1 = (function (){var statearr_28302 = state_28299;
(statearr_28302[(7)] = inst_28259);

(statearr_28302[(8)] = inst_28260);

return statearr_28302;
})();
var statearr_28303_28335 = state_28299__$1;
(statearr_28303_28335[(2)] = null);

(statearr_28303_28335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (4))){
var inst_28263 = (state_28299[(9)]);
var inst_28263__$1 = (state_28299[(2)]);
var inst_28264 = (inst_28263__$1 == null);
var inst_28265 = cljs.core.not.call(null,inst_28264);
var state_28299__$1 = (function (){var statearr_28304 = state_28299;
(statearr_28304[(9)] = inst_28263__$1);

return statearr_28304;
})();
if(inst_28265){
var statearr_28305_28336 = state_28299__$1;
(statearr_28305_28336[(1)] = (5));

} else {
var statearr_28306_28337 = state_28299__$1;
(statearr_28306_28337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (15))){
var inst_28289 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28307_28338 = state_28299__$1;
(statearr_28307_28338[(2)] = inst_28289);

(statearr_28307_28338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (13))){
var state_28299__$1 = state_28299;
var statearr_28308_28339 = state_28299__$1;
(statearr_28308_28339[(2)] = null);

(statearr_28308_28339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (6))){
var inst_28259 = (state_28299[(7)]);
var inst_28284 = inst_28259.length;
var inst_28285 = (inst_28284 > (0));
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28285)){
var statearr_28309_28340 = state_28299__$1;
(statearr_28309_28340[(1)] = (12));

} else {
var statearr_28310_28341 = state_28299__$1;
(statearr_28310_28341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (3))){
var inst_28297 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28299__$1,inst_28297);
} else {
if((state_val_28300 === (12))){
var inst_28259 = (state_28299[(7)]);
var inst_28287 = cljs.core.vec.call(null,inst_28259);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28299__$1,(15),out,inst_28287);
} else {
if((state_val_28300 === (2))){
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28299__$1,(4),ch);
} else {
if((state_val_28300 === (11))){
var inst_28267 = (state_28299[(10)]);
var inst_28263 = (state_28299[(9)]);
var inst_28277 = (state_28299[(2)]);
var inst_28278 = [];
var inst_28279 = inst_28278.push(inst_28263);
var inst_28259 = inst_28278;
var inst_28260 = inst_28267;
var state_28299__$1 = (function (){var statearr_28311 = state_28299;
(statearr_28311[(11)] = inst_28279);

(statearr_28311[(7)] = inst_28259);

(statearr_28311[(8)] = inst_28260);

(statearr_28311[(12)] = inst_28277);

return statearr_28311;
})();
var statearr_28312_28342 = state_28299__$1;
(statearr_28312_28342[(2)] = null);

(statearr_28312_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (9))){
var inst_28259 = (state_28299[(7)]);
var inst_28275 = cljs.core.vec.call(null,inst_28259);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28299__$1,(11),out,inst_28275);
} else {
if((state_val_28300 === (5))){
var inst_28260 = (state_28299[(8)]);
var inst_28267 = (state_28299[(10)]);
var inst_28263 = (state_28299[(9)]);
var inst_28267__$1 = f.call(null,inst_28263);
var inst_28268 = cljs.core._EQ_.call(null,inst_28267__$1,inst_28260);
var inst_28269 = cljs.core.keyword_identical_QMARK_.call(null,inst_28260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28270 = (inst_28268) || (inst_28269);
var state_28299__$1 = (function (){var statearr_28313 = state_28299;
(statearr_28313[(10)] = inst_28267__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28314_28343 = state_28299__$1;
(statearr_28314_28343[(1)] = (8));

} else {
var statearr_28315_28344 = state_28299__$1;
(statearr_28315_28344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (14))){
var inst_28292 = (state_28299[(2)]);
var inst_28293 = cljs.core.async.close_BANG_.call(null,out);
var state_28299__$1 = (function (){var statearr_28317 = state_28299;
(statearr_28317[(13)] = inst_28292);

return statearr_28317;
})();
var statearr_28318_28345 = state_28299__$1;
(statearr_28318_28345[(2)] = inst_28293);

(statearr_28318_28345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (10))){
var inst_28282 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28319_28346 = state_28299__$1;
(statearr_28319_28346[(2)] = inst_28282);

(statearr_28319_28346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (8))){
var inst_28259 = (state_28299[(7)]);
var inst_28267 = (state_28299[(10)]);
var inst_28263 = (state_28299[(9)]);
var inst_28272 = inst_28259.push(inst_28263);
var tmp28316 = inst_28259;
var inst_28259__$1 = tmp28316;
var inst_28260 = inst_28267;
var state_28299__$1 = (function (){var statearr_28320 = state_28299;
(statearr_28320[(7)] = inst_28259__$1);

(statearr_28320[(8)] = inst_28260);

(statearr_28320[(14)] = inst_28272);

return statearr_28320;
})();
var statearr_28321_28347 = state_28299__$1;
(statearr_28321_28347[(2)] = null);

(statearr_28321_28347[(1)] = (2));


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
});})(c__25578__auto___28333,out))
;
return ((function (switch__25465__auto__,c__25578__auto___28333,out){
return (function() {
var cljs$core$async$state_machine__25466__auto__ = null;
var cljs$core$async$state_machine__25466__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$state_machine__25466__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$state_machine__25466__auto____1 = (function (state_28299){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_28299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__25469__auto__ = e28326;
var statearr_28327_28348 = state_28299;
(statearr_28327_28348[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28299;
state_28299 = G__28349;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
cljs$core$async$state_machine__25466__auto__ = function(state_28299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25466__auto____1.call(this,state_28299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25466__auto____0;
cljs$core$async$state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25466__auto____1;
return cljs$core$async$state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___28333,out))
})();
var state__25580__auto__ = (function (){var statearr_28328 = f__25579__auto__.call(null);
(statearr_28328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___28333);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___28333,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map