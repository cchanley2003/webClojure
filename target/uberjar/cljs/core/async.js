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
if(typeof cljs.core.async.t_cljs$core$async13271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13271 = (function (fn_handler,f,meta13272){
this.fn_handler = fn_handler;
this.f = f;
this.meta13272 = meta13272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13273,meta13272__$1){
var self__ = this;
var _13273__$1 = this;
return (new cljs.core.async.t_cljs$core$async13271(self__.fn_handler,self__.f,meta13272__$1));
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13273){
var self__ = this;
var _13273__$1 = this;
return self__.meta13272;
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta13272], null);
});

cljs.core.async.t_cljs$core$async13271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13271";

cljs.core.async.t_cljs$core$async13271.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13271");
});

cljs.core.async.__GT_t_cljs$core$async13271 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async13271(fn_handler__$1,f__$1,meta13272){
return (new cljs.core.async.t_cljs$core$async13271(fn_handler__$1,f__$1,meta13272));
});

}

return (new cljs.core.async.t_cljs$core$async13271(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args13276 = [];
var len__7277__auto___13279 = arguments.length;
var i__7278__auto___13280 = (0);
while(true){
if((i__7278__auto___13280 < len__7277__auto___13279)){
args13276.push((arguments[i__7278__auto___13280]));

var G__13281 = (i__7278__auto___13280 + (1));
i__7278__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var G__13278 = args13276.length;
switch (G__13278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13276.length)].join('')));

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
var args13283 = [];
var len__7277__auto___13286 = arguments.length;
var i__7278__auto___13287 = (0);
while(true){
if((i__7278__auto___13287 < len__7277__auto___13286)){
args13283.push((arguments[i__7278__auto___13287]));

var G__13288 = (i__7278__auto___13287 + (1));
i__7278__auto___13287 = G__13288;
continue;
} else {
}
break;
}

var G__13285 = args13283.length;
switch (G__13285) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13283.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_13290 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13290) : fn1.call(null,val_13290));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13290,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13290) : fn1.call(null,val_13290));
});})(val_13290,ret))
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
var args13291 = [];
var len__7277__auto___13294 = arguments.length;
var i__7278__auto___13295 = (0);
while(true){
if((i__7278__auto___13295 < len__7277__auto___13294)){
args13291.push((arguments[i__7278__auto___13295]));

var G__13296 = (i__7278__auto___13295 + (1));
i__7278__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var G__13293 = args13291.length;
switch (G__13293) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13291.length)].join('')));

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
var n__7122__auto___13298 = n;
var x_13299 = (0);
while(true){
if((x_13299 < n__7122__auto___13298)){
(a[x_13299] = (0));

var G__13300 = (x_13299 + (1));
x_13299 = G__13300;
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

var G__13301 = (i + (1));
i = G__13301;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13305 = (function (alt_flag,flag,meta13306){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13306 = meta13306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13307,meta13306__$1){
var self__ = this;
var _13307__$1 = this;
return (new cljs.core.async.t_cljs$core$async13305(self__.alt_flag,self__.flag,meta13306__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13307){
var self__ = this;
var _13307__$1 = this;
return self__.meta13306;
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13306], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13305";

cljs.core.async.t_cljs$core$async13305.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13305");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13305 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13305(alt_flag__$1,flag__$1,meta13306){
return (new cljs.core.async.t_cljs$core$async13305(alt_flag__$1,flag__$1,meta13306));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13305(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13311 = (function (alt_handler,flag,cb,meta13312){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13312 = meta13312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13313,meta13312__$1){
var self__ = this;
var _13313__$1 = this;
return (new cljs.core.async.t_cljs$core$async13311(self__.alt_handler,self__.flag,self__.cb,meta13312__$1));
});

cljs.core.async.t_cljs$core$async13311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13313){
var self__ = this;
var _13313__$1 = this;
return self__.meta13312;
});

cljs.core.async.t_cljs$core$async13311.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13312], null);
});

cljs.core.async.t_cljs$core$async13311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13311";

cljs.core.async.t_cljs$core$async13311.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13311");
});

cljs.core.async.__GT_t_cljs$core$async13311 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13311(alt_handler__$1,flag__$1,cb__$1,meta13312){
return (new cljs.core.async.t_cljs$core$async13311(alt_handler__$1,flag__$1,cb__$1,meta13312));
});

}

return (new cljs.core.async.t_cljs$core$async13311(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13314_SHARP_){
var G__13318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13314_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13318) : fret.call(null,G__13318));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13315_SHARP_){
var G__13319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13315_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13319) : fret.call(null,G__13319));
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
var G__13320 = (i + (1));
i = G__13320;
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
var len__7277__auto___13326 = arguments.length;
var i__7278__auto___13327 = (0);
while(true){
if((i__7278__auto___13327 < len__7277__auto___13326)){
args__7284__auto__.push((arguments[i__7278__auto___13327]));

var G__13328 = (i__7278__auto___13327 + (1));
i__7278__auto___13327 = G__13328;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13323){
var map__13324 = p__13323;
var map__13324__$1 = ((((!((map__13324 == null)))?((((map__13324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13324):map__13324);
var opts = map__13324__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13321){
var G__13322 = cljs.core.first(seq13321);
var seq13321__$1 = cljs.core.next(seq13321);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13322,seq13321__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13329 = [];
var len__7277__auto___13379 = arguments.length;
var i__7278__auto___13380 = (0);
while(true){
if((i__7278__auto___13380 < len__7277__auto___13379)){
args13329.push((arguments[i__7278__auto___13380]));

var G__13381 = (i__7278__auto___13380 + (1));
i__7278__auto___13380 = G__13381;
continue;
} else {
}
break;
}

var G__13331 = args13329.length;
switch (G__13331) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13329.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13223__auto___13383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13383){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13383){
return (function (state_13355){
var state_val_13356 = (state_13355[(1)]);
if((state_val_13356 === (7))){
var inst_13351 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13357_13384 = state_13355__$1;
(statearr_13357_13384[(2)] = inst_13351);

(statearr_13357_13384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (1))){
var state_13355__$1 = state_13355;
var statearr_13358_13385 = state_13355__$1;
(statearr_13358_13385[(2)] = null);

(statearr_13358_13385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (4))){
var inst_13334 = (state_13355[(7)]);
var inst_13334__$1 = (state_13355[(2)]);
var inst_13335 = (inst_13334__$1 == null);
var state_13355__$1 = (function (){var statearr_13359 = state_13355;
(statearr_13359[(7)] = inst_13334__$1);

return statearr_13359;
})();
if(cljs.core.truth_(inst_13335)){
var statearr_13360_13386 = state_13355__$1;
(statearr_13360_13386[(1)] = (5));

} else {
var statearr_13361_13387 = state_13355__$1;
(statearr_13361_13387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (13))){
var state_13355__$1 = state_13355;
var statearr_13362_13388 = state_13355__$1;
(statearr_13362_13388[(2)] = null);

(statearr_13362_13388[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (6))){
var inst_13334 = (state_13355[(7)]);
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13355__$1,(11),to,inst_13334);
} else {
if((state_val_13356 === (3))){
var inst_13353 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13355__$1,inst_13353);
} else {
if((state_val_13356 === (12))){
var state_13355__$1 = state_13355;
var statearr_13363_13389 = state_13355__$1;
(statearr_13363_13389[(2)] = null);

(statearr_13363_13389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (2))){
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13355__$1,(4),from);
} else {
if((state_val_13356 === (11))){
var inst_13344 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
if(cljs.core.truth_(inst_13344)){
var statearr_13364_13390 = state_13355__$1;
(statearr_13364_13390[(1)] = (12));

} else {
var statearr_13365_13391 = state_13355__$1;
(statearr_13365_13391[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (9))){
var state_13355__$1 = state_13355;
var statearr_13366_13392 = state_13355__$1;
(statearr_13366_13392[(2)] = null);

(statearr_13366_13392[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (5))){
var state_13355__$1 = state_13355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13367_13393 = state_13355__$1;
(statearr_13367_13393[(1)] = (8));

} else {
var statearr_13368_13394 = state_13355__$1;
(statearr_13368_13394[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (14))){
var inst_13349 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13369_13395 = state_13355__$1;
(statearr_13369_13395[(2)] = inst_13349);

(statearr_13369_13395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (10))){
var inst_13341 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13370_13396 = state_13355__$1;
(statearr_13370_13396[(2)] = inst_13341);

(statearr_13370_13396[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13356 === (8))){
var inst_13338 = cljs.core.async.close_BANG_(to);
var state_13355__$1 = state_13355;
var statearr_13371_13397 = state_13355__$1;
(statearr_13371_13397[(2)] = inst_13338);

(statearr_13371_13397[(1)] = (10));


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
});})(c__13223__auto___13383))
;
return ((function (switch__13109__auto__,c__13223__auto___13383){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_13375 = [null,null,null,null,null,null,null,null];
(statearr_13375[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_13375[(1)] = (1));

return statearr_13375;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_13355){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13355);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13376){if((e13376 instanceof Object)){
var ex__13113__auto__ = e13376;
var statearr_13377_13398 = state_13355;
(statearr_13377_13398[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13355);

return cljs.core.cst$kw$recur;
} else {
throw e13376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13399 = state_13355;
state_13355 = G__13399;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_13355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_13355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13383))
})();
var state__13225__auto__ = (function (){var statearr_13378 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13383);

return statearr_13378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13383))
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
return (function (p__13583){
var vec__13584 = p__13583;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13584,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13584,(1),null);
var job = vec__13584;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13223__auto___13766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results){
return (function (state_13589){
var state_val_13590 = (state_13589[(1)]);
if((state_val_13590 === (1))){
var state_13589__$1 = state_13589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13589__$1,(2),res,v);
} else {
if((state_val_13590 === (2))){
var inst_13586 = (state_13589[(2)]);
var inst_13587 = cljs.core.async.close_BANG_(res);
var state_13589__$1 = (function (){var statearr_13591 = state_13589;
(statearr_13591[(7)] = inst_13586);

return statearr_13591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13589__$1,inst_13587);
} else {
return null;
}
}
});})(c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results))
;
return ((function (switch__13109__auto__,c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13595 = [null,null,null,null,null,null,null,null];
(statearr_13595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13595[(1)] = (1));

return statearr_13595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13589){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13589);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13596){if((e13596 instanceof Object)){
var ex__13113__auto__ = e13596;
var statearr_13597_13767 = state_13589;
(statearr_13597_13767[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13589);

return cljs.core.cst$kw$recur;
} else {
throw e13596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13768 = state_13589;
state_13589 = G__13768;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results))
})();
var state__13225__auto__ = (function (){var statearr_13598 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13766);

return statearr_13598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13766,res,vec__13584,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13599){
var vec__13600 = p__13599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(1),null);
var job = vec__13600;
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
var n__7122__auto___13769 = n;
var __13770 = (0);
while(true){
if((__13770 < n__7122__auto___13769)){
var G__13601_13771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13601_13771) {
case "compute":
var c__13223__auto___13773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13770,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (__13770,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function (state_13614){
var state_val_13615 = (state_13614[(1)]);
if((state_val_13615 === (1))){
var state_13614__$1 = state_13614;
var statearr_13616_13774 = state_13614__$1;
(statearr_13616_13774[(2)] = null);

(statearr_13616_13774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13615 === (2))){
var state_13614__$1 = state_13614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13614__$1,(4),jobs);
} else {
if((state_val_13615 === (3))){
var inst_13612 = (state_13614[(2)]);
var state_13614__$1 = state_13614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13614__$1,inst_13612);
} else {
if((state_val_13615 === (4))){
var inst_13604 = (state_13614[(2)]);
var inst_13605 = process(inst_13604);
var state_13614__$1 = state_13614;
if(cljs.core.truth_(inst_13605)){
var statearr_13617_13775 = state_13614__$1;
(statearr_13617_13775[(1)] = (5));

} else {
var statearr_13618_13776 = state_13614__$1;
(statearr_13618_13776[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13615 === (5))){
var state_13614__$1 = state_13614;
var statearr_13619_13777 = state_13614__$1;
(statearr_13619_13777[(2)] = null);

(statearr_13619_13777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13615 === (6))){
var state_13614__$1 = state_13614;
var statearr_13620_13778 = state_13614__$1;
(statearr_13620_13778[(2)] = null);

(statearr_13620_13778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13615 === (7))){
var inst_13610 = (state_13614[(2)]);
var state_13614__$1 = state_13614;
var statearr_13621_13779 = state_13614__$1;
(statearr_13621_13779[(2)] = inst_13610);

(statearr_13621_13779[(1)] = (3));


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
});})(__13770,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
;
return ((function (__13770,switch__13109__auto__,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13625 = [null,null,null,null,null,null,null];
(statearr_13625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13625[(1)] = (1));

return statearr_13625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13614){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13614);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13626){if((e13626 instanceof Object)){
var ex__13113__auto__ = e13626;
var statearr_13627_13780 = state_13614;
(statearr_13627_13780[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13614);

return cljs.core.cst$kw$recur;
} else {
throw e13626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13781 = state_13614;
state_13614 = G__13781;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(__13770,switch__13109__auto__,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13628 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13773);

return statearr_13628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(__13770,c__13223__auto___13773,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
);


break;
case "async":
var c__13223__auto___13782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13770,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (__13770,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function (state_13641){
var state_val_13642 = (state_13641[(1)]);
if((state_val_13642 === (1))){
var state_13641__$1 = state_13641;
var statearr_13643_13783 = state_13641__$1;
(statearr_13643_13783[(2)] = null);

(statearr_13643_13783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13642 === (2))){
var state_13641__$1 = state_13641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13641__$1,(4),jobs);
} else {
if((state_val_13642 === (3))){
var inst_13639 = (state_13641[(2)]);
var state_13641__$1 = state_13641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13641__$1,inst_13639);
} else {
if((state_val_13642 === (4))){
var inst_13631 = (state_13641[(2)]);
var inst_13632 = async(inst_13631);
var state_13641__$1 = state_13641;
if(cljs.core.truth_(inst_13632)){
var statearr_13644_13784 = state_13641__$1;
(statearr_13644_13784[(1)] = (5));

} else {
var statearr_13645_13785 = state_13641__$1;
(statearr_13645_13785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13642 === (5))){
var state_13641__$1 = state_13641;
var statearr_13646_13786 = state_13641__$1;
(statearr_13646_13786[(2)] = null);

(statearr_13646_13786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13642 === (6))){
var state_13641__$1 = state_13641;
var statearr_13647_13787 = state_13641__$1;
(statearr_13647_13787[(2)] = null);

(statearr_13647_13787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13642 === (7))){
var inst_13637 = (state_13641[(2)]);
var state_13641__$1 = state_13641;
var statearr_13648_13788 = state_13641__$1;
(statearr_13648_13788[(2)] = inst_13637);

(statearr_13648_13788[(1)] = (3));


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
});})(__13770,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
;
return ((function (__13770,switch__13109__auto__,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13652 = [null,null,null,null,null,null,null];
(statearr_13652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13652[(1)] = (1));

return statearr_13652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13641){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13641);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13653){if((e13653 instanceof Object)){
var ex__13113__auto__ = e13653;
var statearr_13654_13789 = state_13641;
(statearr_13654_13789[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13641);

return cljs.core.cst$kw$recur;
} else {
throw e13653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13790 = state_13641;
state_13641 = G__13790;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(__13770,switch__13109__auto__,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13655 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13782);

return statearr_13655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(__13770,c__13223__auto___13782,G__13601_13771,n__7122__auto___13769,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13791 = (__13770 + (1));
__13770 = G__13791;
continue;
} else {
}
break;
}

var c__13223__auto___13792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13792,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13792,jobs,results,process,async){
return (function (state_13677){
var state_val_13678 = (state_13677[(1)]);
if((state_val_13678 === (1))){
var state_13677__$1 = state_13677;
var statearr_13679_13793 = state_13677__$1;
(statearr_13679_13793[(2)] = null);

(statearr_13679_13793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13678 === (2))){
var state_13677__$1 = state_13677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13677__$1,(4),from);
} else {
if((state_val_13678 === (3))){
var inst_13675 = (state_13677[(2)]);
var state_13677__$1 = state_13677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13677__$1,inst_13675);
} else {
if((state_val_13678 === (4))){
var inst_13658 = (state_13677[(7)]);
var inst_13658__$1 = (state_13677[(2)]);
var inst_13659 = (inst_13658__$1 == null);
var state_13677__$1 = (function (){var statearr_13680 = state_13677;
(statearr_13680[(7)] = inst_13658__$1);

return statearr_13680;
})();
if(cljs.core.truth_(inst_13659)){
var statearr_13681_13794 = state_13677__$1;
(statearr_13681_13794[(1)] = (5));

} else {
var statearr_13682_13795 = state_13677__$1;
(statearr_13682_13795[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13678 === (5))){
var inst_13661 = cljs.core.async.close_BANG_(jobs);
var state_13677__$1 = state_13677;
var statearr_13683_13796 = state_13677__$1;
(statearr_13683_13796[(2)] = inst_13661);

(statearr_13683_13796[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13678 === (6))){
var inst_13658 = (state_13677[(7)]);
var inst_13663 = (state_13677[(8)]);
var inst_13663__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13665 = [inst_13658,inst_13663__$1];
var inst_13666 = (new cljs.core.PersistentVector(null,2,(5),inst_13664,inst_13665,null));
var state_13677__$1 = (function (){var statearr_13684 = state_13677;
(statearr_13684[(8)] = inst_13663__$1);

return statearr_13684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13677__$1,(8),jobs,inst_13666);
} else {
if((state_val_13678 === (7))){
var inst_13673 = (state_13677[(2)]);
var state_13677__$1 = state_13677;
var statearr_13685_13797 = state_13677__$1;
(statearr_13685_13797[(2)] = inst_13673);

(statearr_13685_13797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13678 === (8))){
var inst_13663 = (state_13677[(8)]);
var inst_13668 = (state_13677[(2)]);
var state_13677__$1 = (function (){var statearr_13686 = state_13677;
(statearr_13686[(9)] = inst_13668);

return statearr_13686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13677__$1,(9),results,inst_13663);
} else {
if((state_val_13678 === (9))){
var inst_13670 = (state_13677[(2)]);
var state_13677__$1 = (function (){var statearr_13687 = state_13677;
(statearr_13687[(10)] = inst_13670);

return statearr_13687;
})();
var statearr_13688_13798 = state_13677__$1;
(statearr_13688_13798[(2)] = null);

(statearr_13688_13798[(1)] = (2));


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
});})(c__13223__auto___13792,jobs,results,process,async))
;
return ((function (switch__13109__auto__,c__13223__auto___13792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13692[(1)] = (1));

return statearr_13692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13677){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13677);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13693){if((e13693 instanceof Object)){
var ex__13113__auto__ = e13693;
var statearr_13694_13799 = state_13677;
(statearr_13694_13799[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13677);

return cljs.core.cst$kw$recur;
} else {
throw e13693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13800 = state_13677;
state_13677 = G__13800;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13792,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13695 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13792);

return statearr_13695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13792,jobs,results,process,async))
);


var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__,jobs,results,process,async){
return (function (state_13733){
var state_val_13734 = (state_13733[(1)]);
if((state_val_13734 === (7))){
var inst_13729 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13735_13801 = state_13733__$1;
(statearr_13735_13801[(2)] = inst_13729);

(statearr_13735_13801[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (20))){
var state_13733__$1 = state_13733;
var statearr_13736_13802 = state_13733__$1;
(statearr_13736_13802[(2)] = null);

(statearr_13736_13802[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (1))){
var state_13733__$1 = state_13733;
var statearr_13737_13803 = state_13733__$1;
(statearr_13737_13803[(2)] = null);

(statearr_13737_13803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (4))){
var inst_13698 = (state_13733[(7)]);
var inst_13698__$1 = (state_13733[(2)]);
var inst_13699 = (inst_13698__$1 == null);
var state_13733__$1 = (function (){var statearr_13738 = state_13733;
(statearr_13738[(7)] = inst_13698__$1);

return statearr_13738;
})();
if(cljs.core.truth_(inst_13699)){
var statearr_13739_13804 = state_13733__$1;
(statearr_13739_13804[(1)] = (5));

} else {
var statearr_13740_13805 = state_13733__$1;
(statearr_13740_13805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (15))){
var inst_13711 = (state_13733[(8)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13733__$1,(18),to,inst_13711);
} else {
if((state_val_13734 === (21))){
var inst_13724 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13741_13806 = state_13733__$1;
(statearr_13741_13806[(2)] = inst_13724);

(statearr_13741_13806[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (13))){
var inst_13726 = (state_13733[(2)]);
var state_13733__$1 = (function (){var statearr_13742 = state_13733;
(statearr_13742[(9)] = inst_13726);

return statearr_13742;
})();
var statearr_13743_13807 = state_13733__$1;
(statearr_13743_13807[(2)] = null);

(statearr_13743_13807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (6))){
var inst_13698 = (state_13733[(7)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13733__$1,(11),inst_13698);
} else {
if((state_val_13734 === (17))){
var inst_13719 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
if(cljs.core.truth_(inst_13719)){
var statearr_13744_13808 = state_13733__$1;
(statearr_13744_13808[(1)] = (19));

} else {
var statearr_13745_13809 = state_13733__$1;
(statearr_13745_13809[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (3))){
var inst_13731 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13733__$1,inst_13731);
} else {
if((state_val_13734 === (12))){
var inst_13708 = (state_13733[(10)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13733__$1,(14),inst_13708);
} else {
if((state_val_13734 === (2))){
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13733__$1,(4),results);
} else {
if((state_val_13734 === (19))){
var state_13733__$1 = state_13733;
var statearr_13746_13810 = state_13733__$1;
(statearr_13746_13810[(2)] = null);

(statearr_13746_13810[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (11))){
var inst_13708 = (state_13733[(2)]);
var state_13733__$1 = (function (){var statearr_13747 = state_13733;
(statearr_13747[(10)] = inst_13708);

return statearr_13747;
})();
var statearr_13748_13811 = state_13733__$1;
(statearr_13748_13811[(2)] = null);

(statearr_13748_13811[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (9))){
var state_13733__$1 = state_13733;
var statearr_13749_13812 = state_13733__$1;
(statearr_13749_13812[(2)] = null);

(statearr_13749_13812[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (5))){
var state_13733__$1 = state_13733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13750_13813 = state_13733__$1;
(statearr_13750_13813[(1)] = (8));

} else {
var statearr_13751_13814 = state_13733__$1;
(statearr_13751_13814[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (14))){
var inst_13713 = (state_13733[(11)]);
var inst_13711 = (state_13733[(8)]);
var inst_13711__$1 = (state_13733[(2)]);
var inst_13712 = (inst_13711__$1 == null);
var inst_13713__$1 = cljs.core.not(inst_13712);
var state_13733__$1 = (function (){var statearr_13752 = state_13733;
(statearr_13752[(11)] = inst_13713__$1);

(statearr_13752[(8)] = inst_13711__$1);

return statearr_13752;
})();
if(inst_13713__$1){
var statearr_13753_13815 = state_13733__$1;
(statearr_13753_13815[(1)] = (15));

} else {
var statearr_13754_13816 = state_13733__$1;
(statearr_13754_13816[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (16))){
var inst_13713 = (state_13733[(11)]);
var state_13733__$1 = state_13733;
var statearr_13755_13817 = state_13733__$1;
(statearr_13755_13817[(2)] = inst_13713);

(statearr_13755_13817[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (10))){
var inst_13705 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13756_13818 = state_13733__$1;
(statearr_13756_13818[(2)] = inst_13705);

(statearr_13756_13818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (18))){
var inst_13716 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13757_13819 = state_13733__$1;
(statearr_13757_13819[(2)] = inst_13716);

(statearr_13757_13819[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13734 === (8))){
var inst_13702 = cljs.core.async.close_BANG_(to);
var state_13733__$1 = state_13733;
var statearr_13758_13820 = state_13733__$1;
(statearr_13758_13820[(2)] = inst_13702);

(statearr_13758_13820[(1)] = (10));


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
});})(c__13223__auto__,jobs,results,process,async))
;
return ((function (switch__13109__auto__,c__13223__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13762[(1)] = (1));

return statearr_13762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13733){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13733);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13763){if((e13763 instanceof Object)){
var ex__13113__auto__ = e13763;
var statearr_13764_13821 = state_13733;
(statearr_13764_13821[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13733);

return cljs.core.cst$kw$recur;
} else {
throw e13763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13822 = state_13733;
state_13733 = G__13822;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13765 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_13765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__,jobs,results,process,async))
);

return c__13223__auto__;
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
var args13823 = [];
var len__7277__auto___13826 = arguments.length;
var i__7278__auto___13827 = (0);
while(true){
if((i__7278__auto___13827 < len__7277__auto___13826)){
args13823.push((arguments[i__7278__auto___13827]));

var G__13828 = (i__7278__auto___13827 + (1));
i__7278__auto___13827 = G__13828;
continue;
} else {
}
break;
}

var G__13825 = args13823.length;
switch (G__13825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13823.length)].join('')));

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
var args13830 = [];
var len__7277__auto___13833 = arguments.length;
var i__7278__auto___13834 = (0);
while(true){
if((i__7278__auto___13834 < len__7277__auto___13833)){
args13830.push((arguments[i__7278__auto___13834]));

var G__13835 = (i__7278__auto___13834 + (1));
i__7278__auto___13834 = G__13835;
continue;
} else {
}
break;
}

var G__13832 = args13830.length;
switch (G__13832) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13830.length)].join('')));

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
var args13837 = [];
var len__7277__auto___13890 = arguments.length;
var i__7278__auto___13891 = (0);
while(true){
if((i__7278__auto___13891 < len__7277__auto___13890)){
args13837.push((arguments[i__7278__auto___13891]));

var G__13892 = (i__7278__auto___13891 + (1));
i__7278__auto___13891 = G__13892;
continue;
} else {
}
break;
}

var G__13839 = args13837.length;
switch (G__13839) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13837.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13223__auto___13894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13894,tc,fc){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13894,tc,fc){
return (function (state_13865){
var state_val_13866 = (state_13865[(1)]);
if((state_val_13866 === (7))){
var inst_13861 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
var statearr_13867_13895 = state_13865__$1;
(statearr_13867_13895[(2)] = inst_13861);

(statearr_13867_13895[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (1))){
var state_13865__$1 = state_13865;
var statearr_13868_13896 = state_13865__$1;
(statearr_13868_13896[(2)] = null);

(statearr_13868_13896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (4))){
var inst_13842 = (state_13865[(7)]);
var inst_13842__$1 = (state_13865[(2)]);
var inst_13843 = (inst_13842__$1 == null);
var state_13865__$1 = (function (){var statearr_13869 = state_13865;
(statearr_13869[(7)] = inst_13842__$1);

return statearr_13869;
})();
if(cljs.core.truth_(inst_13843)){
var statearr_13870_13897 = state_13865__$1;
(statearr_13870_13897[(1)] = (5));

} else {
var statearr_13871_13898 = state_13865__$1;
(statearr_13871_13898[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (13))){
var state_13865__$1 = state_13865;
var statearr_13872_13899 = state_13865__$1;
(statearr_13872_13899[(2)] = null);

(statearr_13872_13899[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (6))){
var inst_13842 = (state_13865[(7)]);
var inst_13848 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13842) : p.call(null,inst_13842));
var state_13865__$1 = state_13865;
if(cljs.core.truth_(inst_13848)){
var statearr_13873_13900 = state_13865__$1;
(statearr_13873_13900[(1)] = (9));

} else {
var statearr_13874_13901 = state_13865__$1;
(statearr_13874_13901[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (3))){
var inst_13863 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13865__$1,inst_13863);
} else {
if((state_val_13866 === (12))){
var state_13865__$1 = state_13865;
var statearr_13875_13902 = state_13865__$1;
(statearr_13875_13902[(2)] = null);

(statearr_13875_13902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (2))){
var state_13865__$1 = state_13865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13865__$1,(4),ch);
} else {
if((state_val_13866 === (11))){
var inst_13842 = (state_13865[(7)]);
var inst_13852 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13865__$1,(8),inst_13852,inst_13842);
} else {
if((state_val_13866 === (9))){
var state_13865__$1 = state_13865;
var statearr_13876_13903 = state_13865__$1;
(statearr_13876_13903[(2)] = tc);

(statearr_13876_13903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (5))){
var inst_13845 = cljs.core.async.close_BANG_(tc);
var inst_13846 = cljs.core.async.close_BANG_(fc);
var state_13865__$1 = (function (){var statearr_13877 = state_13865;
(statearr_13877[(8)] = inst_13845);

return statearr_13877;
})();
var statearr_13878_13904 = state_13865__$1;
(statearr_13878_13904[(2)] = inst_13846);

(statearr_13878_13904[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (14))){
var inst_13859 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
var statearr_13879_13905 = state_13865__$1;
(statearr_13879_13905[(2)] = inst_13859);

(statearr_13879_13905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (10))){
var state_13865__$1 = state_13865;
var statearr_13880_13906 = state_13865__$1;
(statearr_13880_13906[(2)] = fc);

(statearr_13880_13906[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13866 === (8))){
var inst_13854 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
if(cljs.core.truth_(inst_13854)){
var statearr_13881_13907 = state_13865__$1;
(statearr_13881_13907[(1)] = (12));

} else {
var statearr_13882_13908 = state_13865__$1;
(statearr_13882_13908[(1)] = (13));

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
});})(c__13223__auto___13894,tc,fc))
;
return ((function (switch__13109__auto__,c__13223__auto___13894,tc,fc){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_13886 = [null,null,null,null,null,null,null,null,null];
(statearr_13886[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_13886[(1)] = (1));

return statearr_13886;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_13865){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13865);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13887){if((e13887 instanceof Object)){
var ex__13113__auto__ = e13887;
var statearr_13888_13909 = state_13865;
(statearr_13888_13909[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13865);

return cljs.core.cst$kw$recur;
} else {
throw e13887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13910 = state_13865;
state_13865 = G__13910;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_13865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_13865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13894,tc,fc))
})();
var state__13225__auto__ = (function (){var statearr_13889 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13894);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13894,tc,fc))
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
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_13957){
var state_val_13958 = (state_13957[(1)]);
if((state_val_13958 === (1))){
var inst_13943 = init;
var state_13957__$1 = (function (){var statearr_13959 = state_13957;
(statearr_13959[(7)] = inst_13943);

return statearr_13959;
})();
var statearr_13960_13975 = state_13957__$1;
(statearr_13960_13975[(2)] = null);

(statearr_13960_13975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13958 === (2))){
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13957__$1,(4),ch);
} else {
if((state_val_13958 === (3))){
var inst_13955 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13957__$1,inst_13955);
} else {
if((state_val_13958 === (4))){
var inst_13946 = (state_13957[(8)]);
var inst_13946__$1 = (state_13957[(2)]);
var inst_13947 = (inst_13946__$1 == null);
var state_13957__$1 = (function (){var statearr_13961 = state_13957;
(statearr_13961[(8)] = inst_13946__$1);

return statearr_13961;
})();
if(cljs.core.truth_(inst_13947)){
var statearr_13962_13976 = state_13957__$1;
(statearr_13962_13976[(1)] = (5));

} else {
var statearr_13963_13977 = state_13957__$1;
(statearr_13963_13977[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13958 === (5))){
var inst_13943 = (state_13957[(7)]);
var state_13957__$1 = state_13957;
var statearr_13964_13978 = state_13957__$1;
(statearr_13964_13978[(2)] = inst_13943);

(statearr_13964_13978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13958 === (6))){
var inst_13946 = (state_13957[(8)]);
var inst_13943 = (state_13957[(7)]);
var inst_13950 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13943,inst_13946) : f.call(null,inst_13943,inst_13946));
var inst_13943__$1 = inst_13950;
var state_13957__$1 = (function (){var statearr_13965 = state_13957;
(statearr_13965[(7)] = inst_13943__$1);

return statearr_13965;
})();
var statearr_13966_13979 = state_13957__$1;
(statearr_13966_13979[(2)] = null);

(statearr_13966_13979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13958 === (7))){
var inst_13953 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13967_13980 = state_13957__$1;
(statearr_13967_13980[(2)] = inst_13953);

(statearr_13967_13980[(1)] = (3));


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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13110__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13110__auto____0 = (function (){
var statearr_13971 = [null,null,null,null,null,null,null,null,null];
(statearr_13971[(0)] = cljs$core$async$reduce_$_state_machine__13110__auto__);

(statearr_13971[(1)] = (1));

return statearr_13971;
});
var cljs$core$async$reduce_$_state_machine__13110__auto____1 = (function (state_13957){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13957);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13972){if((e13972 instanceof Object)){
var ex__13113__auto__ = e13972;
var statearr_13973_13981 = state_13957;
(statearr_13973_13981[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13957);

return cljs.core.cst$kw$recur;
} else {
throw e13972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13982 = state_13957;
state_13957 = G__13982;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13110__auto__ = function(state_13957){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13110__auto____1.call(this,state_13957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13110__auto____0;
cljs$core$async$reduce_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13110__auto____1;
return cljs$core$async$reduce_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_13974 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_13974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
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
var args13983 = [];
var len__7277__auto___14035 = arguments.length;
var i__7278__auto___14036 = (0);
while(true){
if((i__7278__auto___14036 < len__7277__auto___14035)){
args13983.push((arguments[i__7278__auto___14036]));

var G__14037 = (i__7278__auto___14036 + (1));
i__7278__auto___14036 = G__14037;
continue;
} else {
}
break;
}

var G__13985 = args13983.length;
switch (G__13985) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13983.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_14010){
var state_val_14011 = (state_14010[(1)]);
if((state_val_14011 === (7))){
var inst_13992 = (state_14010[(2)]);
var state_14010__$1 = state_14010;
var statearr_14012_14039 = state_14010__$1;
(statearr_14012_14039[(2)] = inst_13992);

(statearr_14012_14039[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (1))){
var inst_13986 = cljs.core.seq(coll);
var inst_13987 = inst_13986;
var state_14010__$1 = (function (){var statearr_14013 = state_14010;
(statearr_14013[(7)] = inst_13987);

return statearr_14013;
})();
var statearr_14014_14040 = state_14010__$1;
(statearr_14014_14040[(2)] = null);

(statearr_14014_14040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (4))){
var inst_13987 = (state_14010[(7)]);
var inst_13990 = cljs.core.first(inst_13987);
var state_14010__$1 = state_14010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14010__$1,(7),ch,inst_13990);
} else {
if((state_val_14011 === (13))){
var inst_14004 = (state_14010[(2)]);
var state_14010__$1 = state_14010;
var statearr_14015_14041 = state_14010__$1;
(statearr_14015_14041[(2)] = inst_14004);

(statearr_14015_14041[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (6))){
var inst_13995 = (state_14010[(2)]);
var state_14010__$1 = state_14010;
if(cljs.core.truth_(inst_13995)){
var statearr_14016_14042 = state_14010__$1;
(statearr_14016_14042[(1)] = (8));

} else {
var statearr_14017_14043 = state_14010__$1;
(statearr_14017_14043[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (3))){
var inst_14008 = (state_14010[(2)]);
var state_14010__$1 = state_14010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14010__$1,inst_14008);
} else {
if((state_val_14011 === (12))){
var state_14010__$1 = state_14010;
var statearr_14018_14044 = state_14010__$1;
(statearr_14018_14044[(2)] = null);

(statearr_14018_14044[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (2))){
var inst_13987 = (state_14010[(7)]);
var state_14010__$1 = state_14010;
if(cljs.core.truth_(inst_13987)){
var statearr_14019_14045 = state_14010__$1;
(statearr_14019_14045[(1)] = (4));

} else {
var statearr_14020_14046 = state_14010__$1;
(statearr_14020_14046[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (11))){
var inst_14001 = cljs.core.async.close_BANG_(ch);
var state_14010__$1 = state_14010;
var statearr_14021_14047 = state_14010__$1;
(statearr_14021_14047[(2)] = inst_14001);

(statearr_14021_14047[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (9))){
var state_14010__$1 = state_14010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14022_14048 = state_14010__$1;
(statearr_14022_14048[(1)] = (11));

} else {
var statearr_14023_14049 = state_14010__$1;
(statearr_14023_14049[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (5))){
var inst_13987 = (state_14010[(7)]);
var state_14010__$1 = state_14010;
var statearr_14024_14050 = state_14010__$1;
(statearr_14024_14050[(2)] = inst_13987);

(statearr_14024_14050[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (10))){
var inst_14006 = (state_14010[(2)]);
var state_14010__$1 = state_14010;
var statearr_14025_14051 = state_14010__$1;
(statearr_14025_14051[(2)] = inst_14006);

(statearr_14025_14051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14011 === (8))){
var inst_13987 = (state_14010[(7)]);
var inst_13997 = cljs.core.next(inst_13987);
var inst_13987__$1 = inst_13997;
var state_14010__$1 = (function (){var statearr_14026 = state_14010;
(statearr_14026[(7)] = inst_13987__$1);

return statearr_14026;
})();
var statearr_14027_14052 = state_14010__$1;
(statearr_14027_14052[(2)] = null);

(statearr_14027_14052[(1)] = (2));


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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_14031 = [null,null,null,null,null,null,null,null];
(statearr_14031[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_14031[(1)] = (1));

return statearr_14031;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_14010){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14010);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14032){if((e14032 instanceof Object)){
var ex__13113__auto__ = e14032;
var statearr_14033_14053 = state_14010;
(statearr_14033_14053[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14010);

return cljs.core.cst$kw$recur;
} else {
throw e14032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14054 = state_14010;
state_14010 = G__14054;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_14010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_14010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_14034 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_14034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
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
var cs = (function (){var G__14279 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14279) : cljs.core.atom.call(null,G__14279));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14280 = (function (mult,ch,cs,meta14281){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14281 = meta14281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14282,meta14281__$1){
var self__ = this;
var _14282__$1 = this;
return (new cljs.core.async.t_cljs$core$async14280(self__.mult,self__.ch,self__.cs,meta14281__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14282){
var self__ = this;
var _14282__$1 = this;
return self__.meta14281;
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14283_14503 = self__.cs;
var G__14284_14504 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14283_14503,G__14284_14504) : cljs.core.reset_BANG_.call(null,G__14283_14503,G__14284_14504));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14281], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14280";

cljs.core.async.t_cljs$core$async14280.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14280");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14280 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14280(mult__$1,ch__$1,cs__$1,meta14281){
return (new cljs.core.async.t_cljs$core$async14280(mult__$1,ch__$1,cs__$1,meta14281));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14280(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13223__auto___14505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___14505,cs,m,dchan,dctr,done){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___14505,cs,m,dchan,dctr,done){
return (function (state_14415){
var state_val_14416 = (state_14415[(1)]);
if((state_val_14416 === (7))){
var inst_14411 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14417_14506 = state_14415__$1;
(statearr_14417_14506[(2)] = inst_14411);

(statearr_14417_14506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (20))){
var inst_14316 = (state_14415[(7)]);
var inst_14326 = cljs.core.first(inst_14316);
var inst_14327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14326,(0),null);
var inst_14328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14326,(1),null);
var state_14415__$1 = (function (){var statearr_14418 = state_14415;
(statearr_14418[(8)] = inst_14327);

return statearr_14418;
})();
if(cljs.core.truth_(inst_14328)){
var statearr_14419_14507 = state_14415__$1;
(statearr_14419_14507[(1)] = (22));

} else {
var statearr_14420_14508 = state_14415__$1;
(statearr_14420_14508[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (27))){
var inst_14363 = (state_14415[(9)]);
var inst_14287 = (state_14415[(10)]);
var inst_14356 = (state_14415[(11)]);
var inst_14358 = (state_14415[(12)]);
var inst_14363__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14356,inst_14358);
var inst_14364 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14363__$1,inst_14287,done);
var state_14415__$1 = (function (){var statearr_14421 = state_14415;
(statearr_14421[(9)] = inst_14363__$1);

return statearr_14421;
})();
if(cljs.core.truth_(inst_14364)){
var statearr_14422_14509 = state_14415__$1;
(statearr_14422_14509[(1)] = (30));

} else {
var statearr_14423_14510 = state_14415__$1;
(statearr_14423_14510[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (1))){
var state_14415__$1 = state_14415;
var statearr_14424_14511 = state_14415__$1;
(statearr_14424_14511[(2)] = null);

(statearr_14424_14511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (24))){
var inst_14316 = (state_14415[(7)]);
var inst_14333 = (state_14415[(2)]);
var inst_14334 = cljs.core.next(inst_14316);
var inst_14296 = inst_14334;
var inst_14297 = null;
var inst_14298 = (0);
var inst_14299 = (0);
var state_14415__$1 = (function (){var statearr_14425 = state_14415;
(statearr_14425[(13)] = inst_14333);

(statearr_14425[(14)] = inst_14298);

(statearr_14425[(15)] = inst_14296);

(statearr_14425[(16)] = inst_14297);

(statearr_14425[(17)] = inst_14299);

return statearr_14425;
})();
var statearr_14426_14512 = state_14415__$1;
(statearr_14426_14512[(2)] = null);

(statearr_14426_14512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (39))){
var state_14415__$1 = state_14415;
var statearr_14430_14513 = state_14415__$1;
(statearr_14430_14513[(2)] = null);

(statearr_14430_14513[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (4))){
var inst_14287 = (state_14415[(10)]);
var inst_14287__$1 = (state_14415[(2)]);
var inst_14288 = (inst_14287__$1 == null);
var state_14415__$1 = (function (){var statearr_14431 = state_14415;
(statearr_14431[(10)] = inst_14287__$1);

return statearr_14431;
})();
if(cljs.core.truth_(inst_14288)){
var statearr_14432_14514 = state_14415__$1;
(statearr_14432_14514[(1)] = (5));

} else {
var statearr_14433_14515 = state_14415__$1;
(statearr_14433_14515[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (15))){
var inst_14298 = (state_14415[(14)]);
var inst_14296 = (state_14415[(15)]);
var inst_14297 = (state_14415[(16)]);
var inst_14299 = (state_14415[(17)]);
var inst_14312 = (state_14415[(2)]);
var inst_14313 = (inst_14299 + (1));
var tmp14427 = inst_14298;
var tmp14428 = inst_14296;
var tmp14429 = inst_14297;
var inst_14296__$1 = tmp14428;
var inst_14297__$1 = tmp14429;
var inst_14298__$1 = tmp14427;
var inst_14299__$1 = inst_14313;
var state_14415__$1 = (function (){var statearr_14434 = state_14415;
(statearr_14434[(18)] = inst_14312);

(statearr_14434[(14)] = inst_14298__$1);

(statearr_14434[(15)] = inst_14296__$1);

(statearr_14434[(16)] = inst_14297__$1);

(statearr_14434[(17)] = inst_14299__$1);

return statearr_14434;
})();
var statearr_14435_14516 = state_14415__$1;
(statearr_14435_14516[(2)] = null);

(statearr_14435_14516[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (21))){
var inst_14337 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14439_14517 = state_14415__$1;
(statearr_14439_14517[(2)] = inst_14337);

(statearr_14439_14517[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (31))){
var inst_14363 = (state_14415[(9)]);
var inst_14367 = done(null);
var inst_14368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14363);
var state_14415__$1 = (function (){var statearr_14440 = state_14415;
(statearr_14440[(19)] = inst_14367);

return statearr_14440;
})();
var statearr_14441_14518 = state_14415__$1;
(statearr_14441_14518[(2)] = inst_14368);

(statearr_14441_14518[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (32))){
var inst_14355 = (state_14415[(20)]);
var inst_14356 = (state_14415[(11)]);
var inst_14357 = (state_14415[(21)]);
var inst_14358 = (state_14415[(12)]);
var inst_14370 = (state_14415[(2)]);
var inst_14371 = (inst_14358 + (1));
var tmp14436 = inst_14355;
var tmp14437 = inst_14356;
var tmp14438 = inst_14357;
var inst_14355__$1 = tmp14436;
var inst_14356__$1 = tmp14437;
var inst_14357__$1 = tmp14438;
var inst_14358__$1 = inst_14371;
var state_14415__$1 = (function (){var statearr_14442 = state_14415;
(statearr_14442[(20)] = inst_14355__$1);

(statearr_14442[(22)] = inst_14370);

(statearr_14442[(11)] = inst_14356__$1);

(statearr_14442[(21)] = inst_14357__$1);

(statearr_14442[(12)] = inst_14358__$1);

return statearr_14442;
})();
var statearr_14443_14519 = state_14415__$1;
(statearr_14443_14519[(2)] = null);

(statearr_14443_14519[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (40))){
var inst_14383 = (state_14415[(23)]);
var inst_14387 = done(null);
var inst_14388 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14383);
var state_14415__$1 = (function (){var statearr_14444 = state_14415;
(statearr_14444[(24)] = inst_14387);

return statearr_14444;
})();
var statearr_14445_14520 = state_14415__$1;
(statearr_14445_14520[(2)] = inst_14388);

(statearr_14445_14520[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (33))){
var inst_14374 = (state_14415[(25)]);
var inst_14376 = cljs.core.chunked_seq_QMARK_(inst_14374);
var state_14415__$1 = state_14415;
if(inst_14376){
var statearr_14446_14521 = state_14415__$1;
(statearr_14446_14521[(1)] = (36));

} else {
var statearr_14447_14522 = state_14415__$1;
(statearr_14447_14522[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (13))){
var inst_14306 = (state_14415[(26)]);
var inst_14309 = cljs.core.async.close_BANG_(inst_14306);
var state_14415__$1 = state_14415;
var statearr_14448_14523 = state_14415__$1;
(statearr_14448_14523[(2)] = inst_14309);

(statearr_14448_14523[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (22))){
var inst_14327 = (state_14415[(8)]);
var inst_14330 = cljs.core.async.close_BANG_(inst_14327);
var state_14415__$1 = state_14415;
var statearr_14449_14524 = state_14415__$1;
(statearr_14449_14524[(2)] = inst_14330);

(statearr_14449_14524[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (36))){
var inst_14374 = (state_14415[(25)]);
var inst_14378 = cljs.core.chunk_first(inst_14374);
var inst_14379 = cljs.core.chunk_rest(inst_14374);
var inst_14380 = cljs.core.count(inst_14378);
var inst_14355 = inst_14379;
var inst_14356 = inst_14378;
var inst_14357 = inst_14380;
var inst_14358 = (0);
var state_14415__$1 = (function (){var statearr_14450 = state_14415;
(statearr_14450[(20)] = inst_14355);

(statearr_14450[(11)] = inst_14356);

(statearr_14450[(21)] = inst_14357);

(statearr_14450[(12)] = inst_14358);

return statearr_14450;
})();
var statearr_14451_14525 = state_14415__$1;
(statearr_14451_14525[(2)] = null);

(statearr_14451_14525[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (41))){
var inst_14374 = (state_14415[(25)]);
var inst_14390 = (state_14415[(2)]);
var inst_14391 = cljs.core.next(inst_14374);
var inst_14355 = inst_14391;
var inst_14356 = null;
var inst_14357 = (0);
var inst_14358 = (0);
var state_14415__$1 = (function (){var statearr_14452 = state_14415;
(statearr_14452[(20)] = inst_14355);

(statearr_14452[(27)] = inst_14390);

(statearr_14452[(11)] = inst_14356);

(statearr_14452[(21)] = inst_14357);

(statearr_14452[(12)] = inst_14358);

return statearr_14452;
})();
var statearr_14453_14526 = state_14415__$1;
(statearr_14453_14526[(2)] = null);

(statearr_14453_14526[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (43))){
var state_14415__$1 = state_14415;
var statearr_14454_14527 = state_14415__$1;
(statearr_14454_14527[(2)] = null);

(statearr_14454_14527[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (29))){
var inst_14399 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14455_14528 = state_14415__$1;
(statearr_14455_14528[(2)] = inst_14399);

(statearr_14455_14528[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (44))){
var inst_14408 = (state_14415[(2)]);
var state_14415__$1 = (function (){var statearr_14456 = state_14415;
(statearr_14456[(28)] = inst_14408);

return statearr_14456;
})();
var statearr_14457_14529 = state_14415__$1;
(statearr_14457_14529[(2)] = null);

(statearr_14457_14529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (6))){
var inst_14347 = (state_14415[(29)]);
var inst_14346 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14347__$1 = cljs.core.keys(inst_14346);
var inst_14348 = cljs.core.count(inst_14347__$1);
var inst_14349 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14348) : cljs.core.reset_BANG_.call(null,dctr,inst_14348));
var inst_14354 = cljs.core.seq(inst_14347__$1);
var inst_14355 = inst_14354;
var inst_14356 = null;
var inst_14357 = (0);
var inst_14358 = (0);
var state_14415__$1 = (function (){var statearr_14458 = state_14415;
(statearr_14458[(20)] = inst_14355);

(statearr_14458[(30)] = inst_14349);

(statearr_14458[(11)] = inst_14356);

(statearr_14458[(29)] = inst_14347__$1);

(statearr_14458[(21)] = inst_14357);

(statearr_14458[(12)] = inst_14358);

return statearr_14458;
})();
var statearr_14459_14530 = state_14415__$1;
(statearr_14459_14530[(2)] = null);

(statearr_14459_14530[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (28))){
var inst_14355 = (state_14415[(20)]);
var inst_14374 = (state_14415[(25)]);
var inst_14374__$1 = cljs.core.seq(inst_14355);
var state_14415__$1 = (function (){var statearr_14460 = state_14415;
(statearr_14460[(25)] = inst_14374__$1);

return statearr_14460;
})();
if(inst_14374__$1){
var statearr_14461_14531 = state_14415__$1;
(statearr_14461_14531[(1)] = (33));

} else {
var statearr_14462_14532 = state_14415__$1;
(statearr_14462_14532[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (25))){
var inst_14357 = (state_14415[(21)]);
var inst_14358 = (state_14415[(12)]);
var inst_14360 = (inst_14358 < inst_14357);
var inst_14361 = inst_14360;
var state_14415__$1 = state_14415;
if(cljs.core.truth_(inst_14361)){
var statearr_14463_14533 = state_14415__$1;
(statearr_14463_14533[(1)] = (27));

} else {
var statearr_14464_14534 = state_14415__$1;
(statearr_14464_14534[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (34))){
var state_14415__$1 = state_14415;
var statearr_14465_14535 = state_14415__$1;
(statearr_14465_14535[(2)] = null);

(statearr_14465_14535[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (17))){
var state_14415__$1 = state_14415;
var statearr_14466_14536 = state_14415__$1;
(statearr_14466_14536[(2)] = null);

(statearr_14466_14536[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (3))){
var inst_14413 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14415__$1,inst_14413);
} else {
if((state_val_14416 === (12))){
var inst_14342 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14467_14537 = state_14415__$1;
(statearr_14467_14537[(2)] = inst_14342);

(statearr_14467_14537[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (2))){
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14415__$1,(4),ch);
} else {
if((state_val_14416 === (23))){
var state_14415__$1 = state_14415;
var statearr_14468_14538 = state_14415__$1;
(statearr_14468_14538[(2)] = null);

(statearr_14468_14538[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (35))){
var inst_14397 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14469_14539 = state_14415__$1;
(statearr_14469_14539[(2)] = inst_14397);

(statearr_14469_14539[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (19))){
var inst_14316 = (state_14415[(7)]);
var inst_14320 = cljs.core.chunk_first(inst_14316);
var inst_14321 = cljs.core.chunk_rest(inst_14316);
var inst_14322 = cljs.core.count(inst_14320);
var inst_14296 = inst_14321;
var inst_14297 = inst_14320;
var inst_14298 = inst_14322;
var inst_14299 = (0);
var state_14415__$1 = (function (){var statearr_14470 = state_14415;
(statearr_14470[(14)] = inst_14298);

(statearr_14470[(15)] = inst_14296);

(statearr_14470[(16)] = inst_14297);

(statearr_14470[(17)] = inst_14299);

return statearr_14470;
})();
var statearr_14471_14540 = state_14415__$1;
(statearr_14471_14540[(2)] = null);

(statearr_14471_14540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (11))){
var inst_14296 = (state_14415[(15)]);
var inst_14316 = (state_14415[(7)]);
var inst_14316__$1 = cljs.core.seq(inst_14296);
var state_14415__$1 = (function (){var statearr_14472 = state_14415;
(statearr_14472[(7)] = inst_14316__$1);

return statearr_14472;
})();
if(inst_14316__$1){
var statearr_14473_14541 = state_14415__$1;
(statearr_14473_14541[(1)] = (16));

} else {
var statearr_14474_14542 = state_14415__$1;
(statearr_14474_14542[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (9))){
var inst_14344 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14475_14543 = state_14415__$1;
(statearr_14475_14543[(2)] = inst_14344);

(statearr_14475_14543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (5))){
var inst_14294 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14295 = cljs.core.seq(inst_14294);
var inst_14296 = inst_14295;
var inst_14297 = null;
var inst_14298 = (0);
var inst_14299 = (0);
var state_14415__$1 = (function (){var statearr_14476 = state_14415;
(statearr_14476[(14)] = inst_14298);

(statearr_14476[(15)] = inst_14296);

(statearr_14476[(16)] = inst_14297);

(statearr_14476[(17)] = inst_14299);

return statearr_14476;
})();
var statearr_14477_14544 = state_14415__$1;
(statearr_14477_14544[(2)] = null);

(statearr_14477_14544[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (14))){
var state_14415__$1 = state_14415;
var statearr_14478_14545 = state_14415__$1;
(statearr_14478_14545[(2)] = null);

(statearr_14478_14545[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (45))){
var inst_14405 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14479_14546 = state_14415__$1;
(statearr_14479_14546[(2)] = inst_14405);

(statearr_14479_14546[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (26))){
var inst_14347 = (state_14415[(29)]);
var inst_14401 = (state_14415[(2)]);
var inst_14402 = cljs.core.seq(inst_14347);
var state_14415__$1 = (function (){var statearr_14480 = state_14415;
(statearr_14480[(31)] = inst_14401);

return statearr_14480;
})();
if(inst_14402){
var statearr_14481_14547 = state_14415__$1;
(statearr_14481_14547[(1)] = (42));

} else {
var statearr_14482_14548 = state_14415__$1;
(statearr_14482_14548[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (16))){
var inst_14316 = (state_14415[(7)]);
var inst_14318 = cljs.core.chunked_seq_QMARK_(inst_14316);
var state_14415__$1 = state_14415;
if(inst_14318){
var statearr_14483_14549 = state_14415__$1;
(statearr_14483_14549[(1)] = (19));

} else {
var statearr_14484_14550 = state_14415__$1;
(statearr_14484_14550[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (38))){
var inst_14394 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14485_14551 = state_14415__$1;
(statearr_14485_14551[(2)] = inst_14394);

(statearr_14485_14551[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (30))){
var state_14415__$1 = state_14415;
var statearr_14486_14552 = state_14415__$1;
(statearr_14486_14552[(2)] = null);

(statearr_14486_14552[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (10))){
var inst_14297 = (state_14415[(16)]);
var inst_14299 = (state_14415[(17)]);
var inst_14305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14297,inst_14299);
var inst_14306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14305,(0),null);
var inst_14307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14305,(1),null);
var state_14415__$1 = (function (){var statearr_14487 = state_14415;
(statearr_14487[(26)] = inst_14306);

return statearr_14487;
})();
if(cljs.core.truth_(inst_14307)){
var statearr_14488_14553 = state_14415__$1;
(statearr_14488_14553[(1)] = (13));

} else {
var statearr_14489_14554 = state_14415__$1;
(statearr_14489_14554[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (18))){
var inst_14340 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14490_14555 = state_14415__$1;
(statearr_14490_14555[(2)] = inst_14340);

(statearr_14490_14555[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (42))){
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14415__$1,(45),dchan);
} else {
if((state_val_14416 === (37))){
var inst_14374 = (state_14415[(25)]);
var inst_14287 = (state_14415[(10)]);
var inst_14383 = (state_14415[(23)]);
var inst_14383__$1 = cljs.core.first(inst_14374);
var inst_14384 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14383__$1,inst_14287,done);
var state_14415__$1 = (function (){var statearr_14491 = state_14415;
(statearr_14491[(23)] = inst_14383__$1);

return statearr_14491;
})();
if(cljs.core.truth_(inst_14384)){
var statearr_14492_14556 = state_14415__$1;
(statearr_14492_14556[(1)] = (39));

} else {
var statearr_14493_14557 = state_14415__$1;
(statearr_14493_14557[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14416 === (8))){
var inst_14298 = (state_14415[(14)]);
var inst_14299 = (state_14415[(17)]);
var inst_14301 = (inst_14299 < inst_14298);
var inst_14302 = inst_14301;
var state_14415__$1 = state_14415;
if(cljs.core.truth_(inst_14302)){
var statearr_14494_14558 = state_14415__$1;
(statearr_14494_14558[(1)] = (10));

} else {
var statearr_14495_14559 = state_14415__$1;
(statearr_14495_14559[(1)] = (11));

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
});})(c__13223__auto___14505,cs,m,dchan,dctr,done))
;
return ((function (switch__13109__auto__,c__13223__auto___14505,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13110__auto__ = null;
var cljs$core$async$mult_$_state_machine__13110__auto____0 = (function (){
var statearr_14499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14499[(0)] = cljs$core$async$mult_$_state_machine__13110__auto__);

(statearr_14499[(1)] = (1));

return statearr_14499;
});
var cljs$core$async$mult_$_state_machine__13110__auto____1 = (function (state_14415){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14415);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14500){if((e14500 instanceof Object)){
var ex__13113__auto__ = e14500;
var statearr_14501_14560 = state_14415;
(statearr_14501_14560[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14415);

return cljs.core.cst$kw$recur;
} else {
throw e14500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14561 = state_14415;
state_14415 = G__14561;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13110__auto__ = function(state_14415){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13110__auto____1.call(this,state_14415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13110__auto____0;
cljs$core$async$mult_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13110__auto____1;
return cljs$core$async$mult_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___14505,cs,m,dchan,dctr,done))
})();
var state__13225__auto__ = (function (){var statearr_14502 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___14505);

return statearr_14502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___14505,cs,m,dchan,dctr,done))
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
var args14562 = [];
var len__7277__auto___14565 = arguments.length;
var i__7278__auto___14566 = (0);
while(true){
if((i__7278__auto___14566 < len__7277__auto___14565)){
args14562.push((arguments[i__7278__auto___14566]));

var G__14567 = (i__7278__auto___14566 + (1));
i__7278__auto___14566 = G__14567;
continue;
} else {
}
break;
}

var G__14564 = args14562.length;
switch (G__14564) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14562.length)].join('')));

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
var len__7277__auto___14579 = arguments.length;
var i__7278__auto___14580 = (0);
while(true){
if((i__7278__auto___14580 < len__7277__auto___14579)){
args__7284__auto__.push((arguments[i__7278__auto___14580]));

var G__14581 = (i__7278__auto___14580 + (1));
i__7278__auto___14580 = G__14581;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((3) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7285__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14573){
var map__14574 = p__14573;
var map__14574__$1 = ((((!((map__14574 == null)))?((((map__14574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14574):map__14574);
var opts = map__14574__$1;
var statearr_14576_14582 = state;
(statearr_14576_14582[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__14574,map__14574__$1,opts){
return (function (val){
var statearr_14577_14583 = state;
(statearr_14577_14583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14574,map__14574__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14578_14584 = state;
(statearr_14578_14584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14569){
var G__14570 = cljs.core.first(seq14569);
var seq14569__$1 = cljs.core.next(seq14569);
var G__14571 = cljs.core.first(seq14569__$1);
var seq14569__$2 = cljs.core.next(seq14569__$1);
var G__14572 = cljs.core.first(seq14569__$2);
var seq14569__$3 = cljs.core.next(seq14569__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14570,G__14571,G__14572,seq14569__$3);
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
var cs = (function (){var G__14751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14751) : cljs.core.atom.call(null,G__14751));
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
if(typeof cljs.core.async.t_cljs$core$async14752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14752 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14753){
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
this.meta14753 = meta14753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14754,meta14753__$1){
var self__ = this;
var _14754__$1 = this;
return (new cljs.core.async.t_cljs$core$async14752(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14753__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14754){
var self__ = this;
var _14754__$1 = this;
return self__.meta14753;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14755_14917 = self__.cs;
var G__14756_14918 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14755_14917,G__14756_14918) : cljs.core.reset_BANG_.call(null,G__14755_14917,G__14756_14918));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14752.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14753], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14752";

cljs.core.async.t_cljs$core$async14752.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14752");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14752 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14752(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14753){
return (new cljs.core.async.t_cljs$core$async14752(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14753));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14752(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13223__auto___14919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14854){
var state_val_14855 = (state_14854[(1)]);
if((state_val_14855 === (7))){
var inst_14772 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14856_14920 = state_14854__$1;
(statearr_14856_14920[(2)] = inst_14772);

(statearr_14856_14920[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (20))){
var inst_14784 = (state_14854[(7)]);
var state_14854__$1 = state_14854;
var statearr_14857_14921 = state_14854__$1;
(statearr_14857_14921[(2)] = inst_14784);

(statearr_14857_14921[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (27))){
var state_14854__$1 = state_14854;
var statearr_14858_14922 = state_14854__$1;
(statearr_14858_14922[(2)] = null);

(statearr_14858_14922[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (1))){
var inst_14760 = (state_14854[(8)]);
var inst_14760__$1 = calc_state();
var inst_14762 = (inst_14760__$1 == null);
var inst_14763 = cljs.core.not(inst_14762);
var state_14854__$1 = (function (){var statearr_14859 = state_14854;
(statearr_14859[(8)] = inst_14760__$1);

return statearr_14859;
})();
if(inst_14763){
var statearr_14860_14923 = state_14854__$1;
(statearr_14860_14923[(1)] = (2));

} else {
var statearr_14861_14924 = state_14854__$1;
(statearr_14861_14924[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (24))){
var inst_14814 = (state_14854[(9)]);
var inst_14828 = (state_14854[(10)]);
var inst_14807 = (state_14854[(11)]);
var inst_14828__$1 = (inst_14807.cljs$core$IFn$_invoke$arity$1 ? inst_14807.cljs$core$IFn$_invoke$arity$1(inst_14814) : inst_14807.call(null,inst_14814));
var state_14854__$1 = (function (){var statearr_14862 = state_14854;
(statearr_14862[(10)] = inst_14828__$1);

return statearr_14862;
})();
if(cljs.core.truth_(inst_14828__$1)){
var statearr_14863_14925 = state_14854__$1;
(statearr_14863_14925[(1)] = (29));

} else {
var statearr_14864_14926 = state_14854__$1;
(statearr_14864_14926[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (4))){
var inst_14775 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14775)){
var statearr_14865_14927 = state_14854__$1;
(statearr_14865_14927[(1)] = (8));

} else {
var statearr_14866_14928 = state_14854__$1;
(statearr_14866_14928[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (15))){
var inst_14801 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14801)){
var statearr_14867_14929 = state_14854__$1;
(statearr_14867_14929[(1)] = (19));

} else {
var statearr_14868_14930 = state_14854__$1;
(statearr_14868_14930[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (21))){
var inst_14806 = (state_14854[(12)]);
var inst_14806__$1 = (state_14854[(2)]);
var inst_14807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14806__$1,cljs.core.cst$kw$solos);
var inst_14808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14806__$1,cljs.core.cst$kw$mutes);
var inst_14809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14806__$1,cljs.core.cst$kw$reads);
var state_14854__$1 = (function (){var statearr_14869 = state_14854;
(statearr_14869[(13)] = inst_14808);

(statearr_14869[(12)] = inst_14806__$1);

(statearr_14869[(11)] = inst_14807);

return statearr_14869;
})();
return cljs.core.async.ioc_alts_BANG_(state_14854__$1,(22),inst_14809);
} else {
if((state_val_14855 === (31))){
var inst_14836 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14836)){
var statearr_14870_14931 = state_14854__$1;
(statearr_14870_14931[(1)] = (32));

} else {
var statearr_14871_14932 = state_14854__$1;
(statearr_14871_14932[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (32))){
var inst_14813 = (state_14854[(14)]);
var state_14854__$1 = state_14854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14854__$1,(35),out,inst_14813);
} else {
if((state_val_14855 === (33))){
var inst_14806 = (state_14854[(12)]);
var inst_14784 = inst_14806;
var state_14854__$1 = (function (){var statearr_14872 = state_14854;
(statearr_14872[(7)] = inst_14784);

return statearr_14872;
})();
var statearr_14873_14933 = state_14854__$1;
(statearr_14873_14933[(2)] = null);

(statearr_14873_14933[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (13))){
var inst_14784 = (state_14854[(7)]);
var inst_14791 = inst_14784.cljs$lang$protocol_mask$partition0$;
var inst_14792 = (inst_14791 & (64));
var inst_14793 = inst_14784.cljs$core$ISeq$;
var inst_14794 = (inst_14792) || (inst_14793);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14794)){
var statearr_14874_14934 = state_14854__$1;
(statearr_14874_14934[(1)] = (16));

} else {
var statearr_14875_14935 = state_14854__$1;
(statearr_14875_14935[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (22))){
var inst_14813 = (state_14854[(14)]);
var inst_14814 = (state_14854[(9)]);
var inst_14812 = (state_14854[(2)]);
var inst_14813__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14812,(0),null);
var inst_14814__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14812,(1),null);
var inst_14815 = (inst_14813__$1 == null);
var inst_14816 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14814__$1,change);
var inst_14817 = (inst_14815) || (inst_14816);
var state_14854__$1 = (function (){var statearr_14876 = state_14854;
(statearr_14876[(14)] = inst_14813__$1);

(statearr_14876[(9)] = inst_14814__$1);

return statearr_14876;
})();
if(cljs.core.truth_(inst_14817)){
var statearr_14877_14936 = state_14854__$1;
(statearr_14877_14936[(1)] = (23));

} else {
var statearr_14878_14937 = state_14854__$1;
(statearr_14878_14937[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (36))){
var inst_14806 = (state_14854[(12)]);
var inst_14784 = inst_14806;
var state_14854__$1 = (function (){var statearr_14879 = state_14854;
(statearr_14879[(7)] = inst_14784);

return statearr_14879;
})();
var statearr_14880_14938 = state_14854__$1;
(statearr_14880_14938[(2)] = null);

(statearr_14880_14938[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (29))){
var inst_14828 = (state_14854[(10)]);
var state_14854__$1 = state_14854;
var statearr_14881_14939 = state_14854__$1;
(statearr_14881_14939[(2)] = inst_14828);

(statearr_14881_14939[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (6))){
var state_14854__$1 = state_14854;
var statearr_14882_14940 = state_14854__$1;
(statearr_14882_14940[(2)] = false);

(statearr_14882_14940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (28))){
var inst_14824 = (state_14854[(2)]);
var inst_14825 = calc_state();
var inst_14784 = inst_14825;
var state_14854__$1 = (function (){var statearr_14883 = state_14854;
(statearr_14883[(15)] = inst_14824);

(statearr_14883[(7)] = inst_14784);

return statearr_14883;
})();
var statearr_14884_14941 = state_14854__$1;
(statearr_14884_14941[(2)] = null);

(statearr_14884_14941[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (25))){
var inst_14850 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14885_14942 = state_14854__$1;
(statearr_14885_14942[(2)] = inst_14850);

(statearr_14885_14942[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (34))){
var inst_14848 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14886_14943 = state_14854__$1;
(statearr_14886_14943[(2)] = inst_14848);

(statearr_14886_14943[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (17))){
var state_14854__$1 = state_14854;
var statearr_14887_14944 = state_14854__$1;
(statearr_14887_14944[(2)] = false);

(statearr_14887_14944[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (3))){
var state_14854__$1 = state_14854;
var statearr_14888_14945 = state_14854__$1;
(statearr_14888_14945[(2)] = false);

(statearr_14888_14945[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (12))){
var inst_14852 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14854__$1,inst_14852);
} else {
if((state_val_14855 === (2))){
var inst_14760 = (state_14854[(8)]);
var inst_14765 = inst_14760.cljs$lang$protocol_mask$partition0$;
var inst_14766 = (inst_14765 & (64));
var inst_14767 = inst_14760.cljs$core$ISeq$;
var inst_14768 = (inst_14766) || (inst_14767);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14768)){
var statearr_14889_14946 = state_14854__$1;
(statearr_14889_14946[(1)] = (5));

} else {
var statearr_14890_14947 = state_14854__$1;
(statearr_14890_14947[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (23))){
var inst_14813 = (state_14854[(14)]);
var inst_14819 = (inst_14813 == null);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14819)){
var statearr_14891_14948 = state_14854__$1;
(statearr_14891_14948[(1)] = (26));

} else {
var statearr_14892_14949 = state_14854__$1;
(statearr_14892_14949[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (35))){
var inst_14839 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14839)){
var statearr_14893_14950 = state_14854__$1;
(statearr_14893_14950[(1)] = (36));

} else {
var statearr_14894_14951 = state_14854__$1;
(statearr_14894_14951[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (19))){
var inst_14784 = (state_14854[(7)]);
var inst_14803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14784);
var state_14854__$1 = state_14854;
var statearr_14895_14952 = state_14854__$1;
(statearr_14895_14952[(2)] = inst_14803);

(statearr_14895_14952[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (11))){
var inst_14784 = (state_14854[(7)]);
var inst_14788 = (inst_14784 == null);
var inst_14789 = cljs.core.not(inst_14788);
var state_14854__$1 = state_14854;
if(inst_14789){
var statearr_14896_14953 = state_14854__$1;
(statearr_14896_14953[(1)] = (13));

} else {
var statearr_14897_14954 = state_14854__$1;
(statearr_14897_14954[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (9))){
var inst_14760 = (state_14854[(8)]);
var state_14854__$1 = state_14854;
var statearr_14898_14955 = state_14854__$1;
(statearr_14898_14955[(2)] = inst_14760);

(statearr_14898_14955[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (5))){
var state_14854__$1 = state_14854;
var statearr_14899_14956 = state_14854__$1;
(statearr_14899_14956[(2)] = true);

(statearr_14899_14956[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (14))){
var state_14854__$1 = state_14854;
var statearr_14900_14957 = state_14854__$1;
(statearr_14900_14957[(2)] = false);

(statearr_14900_14957[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (26))){
var inst_14814 = (state_14854[(9)]);
var inst_14821 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14814);
var state_14854__$1 = state_14854;
var statearr_14901_14958 = state_14854__$1;
(statearr_14901_14958[(2)] = inst_14821);

(statearr_14901_14958[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (16))){
var state_14854__$1 = state_14854;
var statearr_14902_14959 = state_14854__$1;
(statearr_14902_14959[(2)] = true);

(statearr_14902_14959[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (38))){
var inst_14844 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14903_14960 = state_14854__$1;
(statearr_14903_14960[(2)] = inst_14844);

(statearr_14903_14960[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (30))){
var inst_14814 = (state_14854[(9)]);
var inst_14808 = (state_14854[(13)]);
var inst_14807 = (state_14854[(11)]);
var inst_14831 = cljs.core.empty_QMARK_(inst_14807);
var inst_14832 = (inst_14808.cljs$core$IFn$_invoke$arity$1 ? inst_14808.cljs$core$IFn$_invoke$arity$1(inst_14814) : inst_14808.call(null,inst_14814));
var inst_14833 = cljs.core.not(inst_14832);
var inst_14834 = (inst_14831) && (inst_14833);
var state_14854__$1 = state_14854;
var statearr_14904_14961 = state_14854__$1;
(statearr_14904_14961[(2)] = inst_14834);

(statearr_14904_14961[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (10))){
var inst_14760 = (state_14854[(8)]);
var inst_14780 = (state_14854[(2)]);
var inst_14781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14780,cljs.core.cst$kw$solos);
var inst_14782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14780,cljs.core.cst$kw$mutes);
var inst_14783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14780,cljs.core.cst$kw$reads);
var inst_14784 = inst_14760;
var state_14854__$1 = (function (){var statearr_14905 = state_14854;
(statearr_14905[(16)] = inst_14781);

(statearr_14905[(17)] = inst_14783);

(statearr_14905[(18)] = inst_14782);

(statearr_14905[(7)] = inst_14784);

return statearr_14905;
})();
var statearr_14906_14962 = state_14854__$1;
(statearr_14906_14962[(2)] = null);

(statearr_14906_14962[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (18))){
var inst_14798 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14907_14963 = state_14854__$1;
(statearr_14907_14963[(2)] = inst_14798);

(statearr_14907_14963[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (37))){
var state_14854__$1 = state_14854;
var statearr_14908_14964 = state_14854__$1;
(statearr_14908_14964[(2)] = null);

(statearr_14908_14964[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14855 === (8))){
var inst_14760 = (state_14854[(8)]);
var inst_14777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14760);
var state_14854__$1 = state_14854;
var statearr_14909_14965 = state_14854__$1;
(statearr_14909_14965[(2)] = inst_14777);

(statearr_14909_14965[(1)] = (10));


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
});})(c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13109__auto__,c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13110__auto__ = null;
var cljs$core$async$mix_$_state_machine__13110__auto____0 = (function (){
var statearr_14913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14913[(0)] = cljs$core$async$mix_$_state_machine__13110__auto__);

(statearr_14913[(1)] = (1));

return statearr_14913;
});
var cljs$core$async$mix_$_state_machine__13110__auto____1 = (function (state_14854){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14854);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14914){if((e14914 instanceof Object)){
var ex__13113__auto__ = e14914;
var statearr_14915_14966 = state_14854;
(statearr_14915_14966[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14854);

return cljs.core.cst$kw$recur;
} else {
throw e14914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14967 = state_14854;
state_14854 = G__14967;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13110__auto__ = function(state_14854){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13110__auto____1.call(this,state_14854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13110__auto____0;
cljs$core$async$mix_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13110__auto____1;
return cljs$core$async$mix_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13225__auto__ = (function (){var statearr_14916 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___14919);

return statearr_14916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___14919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args14968 = [];
var len__7277__auto___14971 = arguments.length;
var i__7278__auto___14972 = (0);
while(true){
if((i__7278__auto___14972 < len__7277__auto___14971)){
args14968.push((arguments[i__7278__auto___14972]));

var G__14973 = (i__7278__auto___14972 + (1));
i__7278__auto___14972 = G__14973;
continue;
} else {
}
break;
}

var G__14970 = args14968.length;
switch (G__14970) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14968.length)].join('')));

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
var args14976 = [];
var len__7277__auto___15104 = arguments.length;
var i__7278__auto___15105 = (0);
while(true){
if((i__7278__auto___15105 < len__7277__auto___15104)){
args14976.push((arguments[i__7278__auto___15105]));

var G__15106 = (i__7278__auto___15105 + (1));
i__7278__auto___15105 = G__15106;
continue;
} else {
}
break;
}

var G__14978 = args14976.length;
switch (G__14978) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14976.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__14979 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14979) : cljs.core.atom.call(null,G__14979));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6207__auto__,mults){
return (function (p1__14975_SHARP_){
if(cljs.core.truth_((p1__14975_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14975_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14975_SHARP_.call(null,topic)))){
return p1__14975_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14975_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6207__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14980 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14981){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14981 = meta14981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14982,meta14981__$1){
var self__ = this;
var _14982__$1 = this;
return (new cljs.core.async.t_cljs$core$async14980(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14981__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14982){
var self__ = this;
var _14982__$1 = this;
return self__.meta14981;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14983 = self__.mults;
var G__14984 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14983,G__14984) : cljs.core.reset_BANG_.call(null,G__14983,G__14984));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta14981], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14980";

cljs.core.async.t_cljs$core$async14980.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14980");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14980 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14980(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14981){
return (new cljs.core.async.t_cljs$core$async14980(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14981));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14980(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13223__auto___15108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15108,mults,ensure_mult,p){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15108,mults,ensure_mult,p){
return (function (state_15056){
var state_val_15057 = (state_15056[(1)]);
if((state_val_15057 === (7))){
var inst_15052 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15058_15109 = state_15056__$1;
(statearr_15058_15109[(2)] = inst_15052);

(statearr_15058_15109[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (20))){
var state_15056__$1 = state_15056;
var statearr_15059_15110 = state_15056__$1;
(statearr_15059_15110[(2)] = null);

(statearr_15059_15110[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (1))){
var state_15056__$1 = state_15056;
var statearr_15060_15111 = state_15056__$1;
(statearr_15060_15111[(2)] = null);

(statearr_15060_15111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (24))){
var inst_15035 = (state_15056[(7)]);
var inst_15044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15035);
var state_15056__$1 = state_15056;
var statearr_15061_15112 = state_15056__$1;
(statearr_15061_15112[(2)] = inst_15044);

(statearr_15061_15112[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (4))){
var inst_14987 = (state_15056[(8)]);
var inst_14987__$1 = (state_15056[(2)]);
var inst_14988 = (inst_14987__$1 == null);
var state_15056__$1 = (function (){var statearr_15062 = state_15056;
(statearr_15062[(8)] = inst_14987__$1);

return statearr_15062;
})();
if(cljs.core.truth_(inst_14988)){
var statearr_15063_15113 = state_15056__$1;
(statearr_15063_15113[(1)] = (5));

} else {
var statearr_15064_15114 = state_15056__$1;
(statearr_15064_15114[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (15))){
var inst_15029 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15065_15115 = state_15056__$1;
(statearr_15065_15115[(2)] = inst_15029);

(statearr_15065_15115[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (21))){
var inst_15049 = (state_15056[(2)]);
var state_15056__$1 = (function (){var statearr_15066 = state_15056;
(statearr_15066[(9)] = inst_15049);

return statearr_15066;
})();
var statearr_15067_15116 = state_15056__$1;
(statearr_15067_15116[(2)] = null);

(statearr_15067_15116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (13))){
var inst_15011 = (state_15056[(10)]);
var inst_15013 = cljs.core.chunked_seq_QMARK_(inst_15011);
var state_15056__$1 = state_15056;
if(inst_15013){
var statearr_15068_15117 = state_15056__$1;
(statearr_15068_15117[(1)] = (16));

} else {
var statearr_15069_15118 = state_15056__$1;
(statearr_15069_15118[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (22))){
var inst_15041 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
if(cljs.core.truth_(inst_15041)){
var statearr_15070_15119 = state_15056__$1;
(statearr_15070_15119[(1)] = (23));

} else {
var statearr_15071_15120 = state_15056__$1;
(statearr_15071_15120[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (6))){
var inst_14987 = (state_15056[(8)]);
var inst_15037 = (state_15056[(11)]);
var inst_15035 = (state_15056[(7)]);
var inst_15035__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14987) : topic_fn.call(null,inst_14987));
var inst_15036 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15037__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15036,inst_15035__$1);
var state_15056__$1 = (function (){var statearr_15072 = state_15056;
(statearr_15072[(11)] = inst_15037__$1);

(statearr_15072[(7)] = inst_15035__$1);

return statearr_15072;
})();
if(cljs.core.truth_(inst_15037__$1)){
var statearr_15073_15121 = state_15056__$1;
(statearr_15073_15121[(1)] = (19));

} else {
var statearr_15074_15122 = state_15056__$1;
(statearr_15074_15122[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (25))){
var inst_15046 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15075_15123 = state_15056__$1;
(statearr_15075_15123[(2)] = inst_15046);

(statearr_15075_15123[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (17))){
var inst_15011 = (state_15056[(10)]);
var inst_15020 = cljs.core.first(inst_15011);
var inst_15021 = cljs.core.async.muxch_STAR_(inst_15020);
var inst_15022 = cljs.core.async.close_BANG_(inst_15021);
var inst_15023 = cljs.core.next(inst_15011);
var inst_14997 = inst_15023;
var inst_14998 = null;
var inst_14999 = (0);
var inst_15000 = (0);
var state_15056__$1 = (function (){var statearr_15076 = state_15056;
(statearr_15076[(12)] = inst_15022);

(statearr_15076[(13)] = inst_14998);

(statearr_15076[(14)] = inst_14997);

(statearr_15076[(15)] = inst_15000);

(statearr_15076[(16)] = inst_14999);

return statearr_15076;
})();
var statearr_15077_15124 = state_15056__$1;
(statearr_15077_15124[(2)] = null);

(statearr_15077_15124[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (3))){
var inst_15054 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15056__$1,inst_15054);
} else {
if((state_val_15057 === (12))){
var inst_15031 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15078_15125 = state_15056__$1;
(statearr_15078_15125[(2)] = inst_15031);

(statearr_15078_15125[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (2))){
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15056__$1,(4),ch);
} else {
if((state_val_15057 === (23))){
var state_15056__$1 = state_15056;
var statearr_15079_15126 = state_15056__$1;
(statearr_15079_15126[(2)] = null);

(statearr_15079_15126[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (19))){
var inst_14987 = (state_15056[(8)]);
var inst_15037 = (state_15056[(11)]);
var inst_15039 = cljs.core.async.muxch_STAR_(inst_15037);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15056__$1,(22),inst_15039,inst_14987);
} else {
if((state_val_15057 === (11))){
var inst_15011 = (state_15056[(10)]);
var inst_14997 = (state_15056[(14)]);
var inst_15011__$1 = cljs.core.seq(inst_14997);
var state_15056__$1 = (function (){var statearr_15080 = state_15056;
(statearr_15080[(10)] = inst_15011__$1);

return statearr_15080;
})();
if(inst_15011__$1){
var statearr_15081_15127 = state_15056__$1;
(statearr_15081_15127[(1)] = (13));

} else {
var statearr_15082_15128 = state_15056__$1;
(statearr_15082_15128[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (9))){
var inst_15033 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15083_15129 = state_15056__$1;
(statearr_15083_15129[(2)] = inst_15033);

(statearr_15083_15129[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (5))){
var inst_14994 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14995 = cljs.core.vals(inst_14994);
var inst_14996 = cljs.core.seq(inst_14995);
var inst_14997 = inst_14996;
var inst_14998 = null;
var inst_14999 = (0);
var inst_15000 = (0);
var state_15056__$1 = (function (){var statearr_15084 = state_15056;
(statearr_15084[(13)] = inst_14998);

(statearr_15084[(14)] = inst_14997);

(statearr_15084[(15)] = inst_15000);

(statearr_15084[(16)] = inst_14999);

return statearr_15084;
})();
var statearr_15085_15130 = state_15056__$1;
(statearr_15085_15130[(2)] = null);

(statearr_15085_15130[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (14))){
var state_15056__$1 = state_15056;
var statearr_15089_15131 = state_15056__$1;
(statearr_15089_15131[(2)] = null);

(statearr_15089_15131[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (16))){
var inst_15011 = (state_15056[(10)]);
var inst_15015 = cljs.core.chunk_first(inst_15011);
var inst_15016 = cljs.core.chunk_rest(inst_15011);
var inst_15017 = cljs.core.count(inst_15015);
var inst_14997 = inst_15016;
var inst_14998 = inst_15015;
var inst_14999 = inst_15017;
var inst_15000 = (0);
var state_15056__$1 = (function (){var statearr_15090 = state_15056;
(statearr_15090[(13)] = inst_14998);

(statearr_15090[(14)] = inst_14997);

(statearr_15090[(15)] = inst_15000);

(statearr_15090[(16)] = inst_14999);

return statearr_15090;
})();
var statearr_15091_15132 = state_15056__$1;
(statearr_15091_15132[(2)] = null);

(statearr_15091_15132[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (10))){
var inst_14998 = (state_15056[(13)]);
var inst_14997 = (state_15056[(14)]);
var inst_15000 = (state_15056[(15)]);
var inst_14999 = (state_15056[(16)]);
var inst_15005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14998,inst_15000);
var inst_15006 = cljs.core.async.muxch_STAR_(inst_15005);
var inst_15007 = cljs.core.async.close_BANG_(inst_15006);
var inst_15008 = (inst_15000 + (1));
var tmp15086 = inst_14998;
var tmp15087 = inst_14997;
var tmp15088 = inst_14999;
var inst_14997__$1 = tmp15087;
var inst_14998__$1 = tmp15086;
var inst_14999__$1 = tmp15088;
var inst_15000__$1 = inst_15008;
var state_15056__$1 = (function (){var statearr_15092 = state_15056;
(statearr_15092[(13)] = inst_14998__$1);

(statearr_15092[(17)] = inst_15007);

(statearr_15092[(14)] = inst_14997__$1);

(statearr_15092[(15)] = inst_15000__$1);

(statearr_15092[(16)] = inst_14999__$1);

return statearr_15092;
})();
var statearr_15093_15133 = state_15056__$1;
(statearr_15093_15133[(2)] = null);

(statearr_15093_15133[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (18))){
var inst_15026 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15094_15134 = state_15056__$1;
(statearr_15094_15134[(2)] = inst_15026);

(statearr_15094_15134[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15057 === (8))){
var inst_15000 = (state_15056[(15)]);
var inst_14999 = (state_15056[(16)]);
var inst_15002 = (inst_15000 < inst_14999);
var inst_15003 = inst_15002;
var state_15056__$1 = state_15056;
if(cljs.core.truth_(inst_15003)){
var statearr_15095_15135 = state_15056__$1;
(statearr_15095_15135[(1)] = (10));

} else {
var statearr_15096_15136 = state_15056__$1;
(statearr_15096_15136[(1)] = (11));

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
});})(c__13223__auto___15108,mults,ensure_mult,p))
;
return ((function (switch__13109__auto__,c__13223__auto___15108,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15100[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15100[(1)] = (1));

return statearr_15100;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15056){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15056);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15101){if((e15101 instanceof Object)){
var ex__13113__auto__ = e15101;
var statearr_15102_15137 = state_15056;
(statearr_15102_15137[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15056);

return cljs.core.cst$kw$recur;
} else {
throw e15101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15138 = state_15056;
state_15056 = G__15138;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15108,mults,ensure_mult,p))
})();
var state__13225__auto__ = (function (){var statearr_15103 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15108);

return statearr_15103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15108,mults,ensure_mult,p))
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
var args15139 = [];
var len__7277__auto___15142 = arguments.length;
var i__7278__auto___15143 = (0);
while(true){
if((i__7278__auto___15143 < len__7277__auto___15142)){
args15139.push((arguments[i__7278__auto___15143]));

var G__15144 = (i__7278__auto___15143 + (1));
i__7278__auto___15143 = G__15144;
continue;
} else {
}
break;
}

var G__15141 = args15139.length;
switch (G__15141) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15139.length)].join('')));

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
var args15146 = [];
var len__7277__auto___15149 = arguments.length;
var i__7278__auto___15150 = (0);
while(true){
if((i__7278__auto___15150 < len__7277__auto___15149)){
args15146.push((arguments[i__7278__auto___15150]));

var G__15151 = (i__7278__auto___15150 + (1));
i__7278__auto___15150 = G__15151;
continue;
} else {
}
break;
}

var G__15148 = args15146.length;
switch (G__15148) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15146.length)].join('')));

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
var args15153 = [];
var len__7277__auto___15224 = arguments.length;
var i__7278__auto___15225 = (0);
while(true){
if((i__7278__auto___15225 < len__7277__auto___15224)){
args15153.push((arguments[i__7278__auto___15225]));

var G__15226 = (i__7278__auto___15225 + (1));
i__7278__auto___15225 = G__15226;
continue;
} else {
}
break;
}

var G__15155 = args15153.length;
switch (G__15155) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15153.length)].join('')));

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
var c__13223__auto___15228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15194){
var state_val_15195 = (state_15194[(1)]);
if((state_val_15195 === (7))){
var state_15194__$1 = state_15194;
var statearr_15196_15229 = state_15194__$1;
(statearr_15196_15229[(2)] = null);

(statearr_15196_15229[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (1))){
var state_15194__$1 = state_15194;
var statearr_15197_15230 = state_15194__$1;
(statearr_15197_15230[(2)] = null);

(statearr_15197_15230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (4))){
var inst_15158 = (state_15194[(7)]);
var inst_15160 = (inst_15158 < cnt);
var state_15194__$1 = state_15194;
if(cljs.core.truth_(inst_15160)){
var statearr_15198_15231 = state_15194__$1;
(statearr_15198_15231[(1)] = (6));

} else {
var statearr_15199_15232 = state_15194__$1;
(statearr_15199_15232[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (15))){
var inst_15190 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
var statearr_15200_15233 = state_15194__$1;
(statearr_15200_15233[(2)] = inst_15190);

(statearr_15200_15233[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (13))){
var inst_15183 = cljs.core.async.close_BANG_(out);
var state_15194__$1 = state_15194;
var statearr_15201_15234 = state_15194__$1;
(statearr_15201_15234[(2)] = inst_15183);

(statearr_15201_15234[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (6))){
var state_15194__$1 = state_15194;
var statearr_15202_15235 = state_15194__$1;
(statearr_15202_15235[(2)] = null);

(statearr_15202_15235[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (3))){
var inst_15192 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15194__$1,inst_15192);
} else {
if((state_val_15195 === (12))){
var inst_15180 = (state_15194[(8)]);
var inst_15180__$1 = (state_15194[(2)]);
var inst_15181 = cljs.core.some(cljs.core.nil_QMARK_,inst_15180__$1);
var state_15194__$1 = (function (){var statearr_15203 = state_15194;
(statearr_15203[(8)] = inst_15180__$1);

return statearr_15203;
})();
if(cljs.core.truth_(inst_15181)){
var statearr_15204_15236 = state_15194__$1;
(statearr_15204_15236[(1)] = (13));

} else {
var statearr_15205_15237 = state_15194__$1;
(statearr_15205_15237[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (2))){
var inst_15157 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15158 = (0);
var state_15194__$1 = (function (){var statearr_15206 = state_15194;
(statearr_15206[(9)] = inst_15157);

(statearr_15206[(7)] = inst_15158);

return statearr_15206;
})();
var statearr_15207_15238 = state_15194__$1;
(statearr_15207_15238[(2)] = null);

(statearr_15207_15238[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (11))){
var inst_15158 = (state_15194[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15194,(10),Object,null,(9));
var inst_15167 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15158) : chs__$1.call(null,inst_15158));
var inst_15168 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15158) : done.call(null,inst_15158));
var inst_15169 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15167,inst_15168);
var state_15194__$1 = state_15194;
var statearr_15208_15239 = state_15194__$1;
(statearr_15208_15239[(2)] = inst_15169);


cljs.core.async.impl.ioc_helpers.process_exception(state_15194__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (9))){
var inst_15158 = (state_15194[(7)]);
var inst_15171 = (state_15194[(2)]);
var inst_15172 = (inst_15158 + (1));
var inst_15158__$1 = inst_15172;
var state_15194__$1 = (function (){var statearr_15209 = state_15194;
(statearr_15209[(10)] = inst_15171);

(statearr_15209[(7)] = inst_15158__$1);

return statearr_15209;
})();
var statearr_15210_15240 = state_15194__$1;
(statearr_15210_15240[(2)] = null);

(statearr_15210_15240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (5))){
var inst_15178 = (state_15194[(2)]);
var state_15194__$1 = (function (){var statearr_15211 = state_15194;
(statearr_15211[(11)] = inst_15178);

return statearr_15211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15194__$1,(12),dchan);
} else {
if((state_val_15195 === (14))){
var inst_15180 = (state_15194[(8)]);
var inst_15185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15180);
var state_15194__$1 = state_15194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15194__$1,(16),out,inst_15185);
} else {
if((state_val_15195 === (16))){
var inst_15187 = (state_15194[(2)]);
var state_15194__$1 = (function (){var statearr_15212 = state_15194;
(statearr_15212[(12)] = inst_15187);

return statearr_15212;
})();
var statearr_15213_15241 = state_15194__$1;
(statearr_15213_15241[(2)] = null);

(statearr_15213_15241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (10))){
var inst_15162 = (state_15194[(2)]);
var inst_15163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15194__$1 = (function (){var statearr_15214 = state_15194;
(statearr_15214[(13)] = inst_15162);

return statearr_15214;
})();
var statearr_15215_15242 = state_15194__$1;
(statearr_15215_15242[(2)] = inst_15163);


cljs.core.async.impl.ioc_helpers.process_exception(state_15194__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15195 === (8))){
var inst_15176 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
var statearr_15216_15243 = state_15194__$1;
(statearr_15216_15243[(2)] = inst_15176);

(statearr_15216_15243[(1)] = (5));


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
});})(c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13109__auto__,c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15220[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15220[(1)] = (1));

return statearr_15220;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15194){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15194);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15221){if((e15221 instanceof Object)){
var ex__13113__auto__ = e15221;
var statearr_15222_15244 = state_15194;
(statearr_15222_15244[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15194);

return cljs.core.cst$kw$recur;
} else {
throw e15221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15245 = state_15194;
state_15194 = G__15245;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13225__auto__ = (function (){var statearr_15223 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15228);

return statearr_15223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15228,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15247 = [];
var len__7277__auto___15303 = arguments.length;
var i__7278__auto___15304 = (0);
while(true){
if((i__7278__auto___15304 < len__7277__auto___15303)){
args15247.push((arguments[i__7278__auto___15304]));

var G__15305 = (i__7278__auto___15304 + (1));
i__7278__auto___15304 = G__15305;
continue;
} else {
}
break;
}

var G__15249 = args15247.length;
switch (G__15249) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15247.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15307,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15307,out){
return (function (state_15279){
var state_val_15280 = (state_15279[(1)]);
if((state_val_15280 === (7))){
var inst_15259 = (state_15279[(7)]);
var inst_15258 = (state_15279[(8)]);
var inst_15258__$1 = (state_15279[(2)]);
var inst_15259__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15258__$1,(0),null);
var inst_15260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15258__$1,(1),null);
var inst_15261 = (inst_15259__$1 == null);
var state_15279__$1 = (function (){var statearr_15281 = state_15279;
(statearr_15281[(7)] = inst_15259__$1);

(statearr_15281[(8)] = inst_15258__$1);

(statearr_15281[(9)] = inst_15260);

return statearr_15281;
})();
if(cljs.core.truth_(inst_15261)){
var statearr_15282_15308 = state_15279__$1;
(statearr_15282_15308[(1)] = (8));

} else {
var statearr_15283_15309 = state_15279__$1;
(statearr_15283_15309[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (1))){
var inst_15250 = cljs.core.vec(chs);
var inst_15251 = inst_15250;
var state_15279__$1 = (function (){var statearr_15284 = state_15279;
(statearr_15284[(10)] = inst_15251);

return statearr_15284;
})();
var statearr_15285_15310 = state_15279__$1;
(statearr_15285_15310[(2)] = null);

(statearr_15285_15310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (4))){
var inst_15251 = (state_15279[(10)]);
var state_15279__$1 = state_15279;
return cljs.core.async.ioc_alts_BANG_(state_15279__$1,(7),inst_15251);
} else {
if((state_val_15280 === (6))){
var inst_15275 = (state_15279[(2)]);
var state_15279__$1 = state_15279;
var statearr_15286_15311 = state_15279__$1;
(statearr_15286_15311[(2)] = inst_15275);

(statearr_15286_15311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (3))){
var inst_15277 = (state_15279[(2)]);
var state_15279__$1 = state_15279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15279__$1,inst_15277);
} else {
if((state_val_15280 === (2))){
var inst_15251 = (state_15279[(10)]);
var inst_15253 = cljs.core.count(inst_15251);
var inst_15254 = (inst_15253 > (0));
var state_15279__$1 = state_15279;
if(cljs.core.truth_(inst_15254)){
var statearr_15288_15312 = state_15279__$1;
(statearr_15288_15312[(1)] = (4));

} else {
var statearr_15289_15313 = state_15279__$1;
(statearr_15289_15313[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (11))){
var inst_15251 = (state_15279[(10)]);
var inst_15268 = (state_15279[(2)]);
var tmp15287 = inst_15251;
var inst_15251__$1 = tmp15287;
var state_15279__$1 = (function (){var statearr_15290 = state_15279;
(statearr_15290[(11)] = inst_15268);

(statearr_15290[(10)] = inst_15251__$1);

return statearr_15290;
})();
var statearr_15291_15314 = state_15279__$1;
(statearr_15291_15314[(2)] = null);

(statearr_15291_15314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (9))){
var inst_15259 = (state_15279[(7)]);
var state_15279__$1 = state_15279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15279__$1,(11),out,inst_15259);
} else {
if((state_val_15280 === (5))){
var inst_15273 = cljs.core.async.close_BANG_(out);
var state_15279__$1 = state_15279;
var statearr_15292_15315 = state_15279__$1;
(statearr_15292_15315[(2)] = inst_15273);

(statearr_15292_15315[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (10))){
var inst_15271 = (state_15279[(2)]);
var state_15279__$1 = state_15279;
var statearr_15293_15316 = state_15279__$1;
(statearr_15293_15316[(2)] = inst_15271);

(statearr_15293_15316[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15280 === (8))){
var inst_15259 = (state_15279[(7)]);
var inst_15258 = (state_15279[(8)]);
var inst_15251 = (state_15279[(10)]);
var inst_15260 = (state_15279[(9)]);
var inst_15263 = (function (){var cs = inst_15251;
var vec__15256 = inst_15258;
var v = inst_15259;
var c = inst_15260;
return ((function (cs,vec__15256,v,c,inst_15259,inst_15258,inst_15251,inst_15260,state_val_15280,c__13223__auto___15307,out){
return (function (p1__15246_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15246_SHARP_);
});
;})(cs,vec__15256,v,c,inst_15259,inst_15258,inst_15251,inst_15260,state_val_15280,c__13223__auto___15307,out))
})();
var inst_15264 = cljs.core.filterv(inst_15263,inst_15251);
var inst_15251__$1 = inst_15264;
var state_15279__$1 = (function (){var statearr_15294 = state_15279;
(statearr_15294[(10)] = inst_15251__$1);

return statearr_15294;
})();
var statearr_15295_15317 = state_15279__$1;
(statearr_15295_15317[(2)] = null);

(statearr_15295_15317[(1)] = (2));


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
});})(c__13223__auto___15307,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15307,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15299[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15299[(1)] = (1));

return statearr_15299;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15279){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15279);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15300){if((e15300 instanceof Object)){
var ex__13113__auto__ = e15300;
var statearr_15301_15318 = state_15279;
(statearr_15301_15318[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15279);

return cljs.core.cst$kw$recur;
} else {
throw e15300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15319 = state_15279;
state_15279 = G__15319;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15307,out))
})();
var state__13225__auto__ = (function (){var statearr_15302 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15307);

return statearr_15302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15307,out))
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
var args15320 = [];
var len__7277__auto___15369 = arguments.length;
var i__7278__auto___15370 = (0);
while(true){
if((i__7278__auto___15370 < len__7277__auto___15369)){
args15320.push((arguments[i__7278__auto___15370]));

var G__15371 = (i__7278__auto___15370 + (1));
i__7278__auto___15370 = G__15371;
continue;
} else {
}
break;
}

var G__15322 = args15320.length;
switch (G__15322) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15320.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15373,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15373,out){
return (function (state_15346){
var state_val_15347 = (state_15346[(1)]);
if((state_val_15347 === (7))){
var inst_15328 = (state_15346[(7)]);
var inst_15328__$1 = (state_15346[(2)]);
var inst_15329 = (inst_15328__$1 == null);
var inst_15330 = cljs.core.not(inst_15329);
var state_15346__$1 = (function (){var statearr_15348 = state_15346;
(statearr_15348[(7)] = inst_15328__$1);

return statearr_15348;
})();
if(inst_15330){
var statearr_15349_15374 = state_15346__$1;
(statearr_15349_15374[(1)] = (8));

} else {
var statearr_15350_15375 = state_15346__$1;
(statearr_15350_15375[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (1))){
var inst_15323 = (0);
var state_15346__$1 = (function (){var statearr_15351 = state_15346;
(statearr_15351[(8)] = inst_15323);

return statearr_15351;
})();
var statearr_15352_15376 = state_15346__$1;
(statearr_15352_15376[(2)] = null);

(statearr_15352_15376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (4))){
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15346__$1,(7),ch);
} else {
if((state_val_15347 === (6))){
var inst_15341 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15353_15377 = state_15346__$1;
(statearr_15353_15377[(2)] = inst_15341);

(statearr_15353_15377[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (3))){
var inst_15343 = (state_15346[(2)]);
var inst_15344 = cljs.core.async.close_BANG_(out);
var state_15346__$1 = (function (){var statearr_15354 = state_15346;
(statearr_15354[(9)] = inst_15343);

return statearr_15354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15346__$1,inst_15344);
} else {
if((state_val_15347 === (2))){
var inst_15323 = (state_15346[(8)]);
var inst_15325 = (inst_15323 < n);
var state_15346__$1 = state_15346;
if(cljs.core.truth_(inst_15325)){
var statearr_15355_15378 = state_15346__$1;
(statearr_15355_15378[(1)] = (4));

} else {
var statearr_15356_15379 = state_15346__$1;
(statearr_15356_15379[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (11))){
var inst_15323 = (state_15346[(8)]);
var inst_15333 = (state_15346[(2)]);
var inst_15334 = (inst_15323 + (1));
var inst_15323__$1 = inst_15334;
var state_15346__$1 = (function (){var statearr_15357 = state_15346;
(statearr_15357[(10)] = inst_15333);

(statearr_15357[(8)] = inst_15323__$1);

return statearr_15357;
})();
var statearr_15358_15380 = state_15346__$1;
(statearr_15358_15380[(2)] = null);

(statearr_15358_15380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (9))){
var state_15346__$1 = state_15346;
var statearr_15359_15381 = state_15346__$1;
(statearr_15359_15381[(2)] = null);

(statearr_15359_15381[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (5))){
var state_15346__$1 = state_15346;
var statearr_15360_15382 = state_15346__$1;
(statearr_15360_15382[(2)] = null);

(statearr_15360_15382[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (10))){
var inst_15338 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15361_15383 = state_15346__$1;
(statearr_15361_15383[(2)] = inst_15338);

(statearr_15361_15383[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15347 === (8))){
var inst_15328 = (state_15346[(7)]);
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15346__$1,(11),out,inst_15328);
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
});})(c__13223__auto___15373,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15373,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15365[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15365[(1)] = (1));

return statearr_15365;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15346){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15346);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15366){if((e15366 instanceof Object)){
var ex__13113__auto__ = e15366;
var statearr_15367_15384 = state_15346;
(statearr_15367_15384[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15346);

return cljs.core.cst$kw$recur;
} else {
throw e15366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15385 = state_15346;
state_15346 = G__15385;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15373,out))
})();
var state__13225__auto__ = (function (){var statearr_15368 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15373);

return statearr_15368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15373,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15395 = (function (map_LT_,f,ch,meta15396){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15396 = meta15396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15397,meta15396__$1){
var self__ = this;
var _15397__$1 = this;
return (new cljs.core.async.t_cljs$core$async15395(self__.map_LT_,self__.f,self__.ch,meta15396__$1));
});

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15397){
var self__ = this;
var _15397__$1 = this;
return self__.meta15396;
});

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15398 = (function (map_LT_,f,ch,meta15396,_,fn1,meta15399){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15396 = meta15396;
this._ = _;
this.fn1 = fn1;
this.meta15399 = meta15399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15400,meta15399__$1){
var self__ = this;
var _15400__$1 = this;
return (new cljs.core.async.t_cljs$core$async15398(self__.map_LT_,self__.f,self__.ch,self__.meta15396,self__._,self__.fn1,meta15399__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15400){
var self__ = this;
var _15400__$1 = this;
return self__.meta15399;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15386_SHARP_){
var G__15401 = (((p1__15386_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15386_SHARP_) : self__.f.call(null,p1__15386_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15401) : f1.call(null,G__15401));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15398.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15396,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15395], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15399], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15398";

cljs.core.async.t_cljs$core$async15398.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15398");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15398 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15398(map_LT___$1,f__$1,ch__$1,meta15396__$1,___$2,fn1__$1,meta15399){
return (new cljs.core.async.t_cljs$core$async15398(map_LT___$1,f__$1,ch__$1,meta15396__$1,___$2,fn1__$1,meta15399));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15398(self__.map_LT_,self__.f,self__.ch,self__.meta15396,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6195__auto__ = ret;
if(cljs.core.truth_(and__6195__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6195__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15402 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15402) : self__.f.call(null,G__15402));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15396], null);
});

cljs.core.async.t_cljs$core$async15395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15395";

cljs.core.async.t_cljs$core$async15395.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15395");
});

cljs.core.async.__GT_t_cljs$core$async15395 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15395(map_LT___$1,f__$1,ch__$1,meta15396){
return (new cljs.core.async.t_cljs$core$async15395(map_LT___$1,f__$1,ch__$1,meta15396));
});

}

return (new cljs.core.async.t_cljs$core$async15395(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15406 = (function (map_GT_,f,ch,meta15407){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15407 = meta15407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15408,meta15407__$1){
var self__ = this;
var _15408__$1 = this;
return (new cljs.core.async.t_cljs$core$async15406(self__.map_GT_,self__.f,self__.ch,meta15407__$1));
});

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15408){
var self__ = this;
var _15408__$1 = this;
return self__.meta15407;
});

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15407], null);
});

cljs.core.async.t_cljs$core$async15406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15406";

cljs.core.async.t_cljs$core$async15406.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15406");
});

cljs.core.async.__GT_t_cljs$core$async15406 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15406(map_GT___$1,f__$1,ch__$1,meta15407){
return (new cljs.core.async.t_cljs$core$async15406(map_GT___$1,f__$1,ch__$1,meta15407));
});

}

return (new cljs.core.async.t_cljs$core$async15406(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15412 = (function (filter_GT_,p,ch,meta15413){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15413 = meta15413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15414,meta15413__$1){
var self__ = this;
var _15414__$1 = this;
return (new cljs.core.async.t_cljs$core$async15412(self__.filter_GT_,self__.p,self__.ch,meta15413__$1));
});

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15414){
var self__ = this;
var _15414__$1 = this;
return self__.meta15413;
});

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15413], null);
});

cljs.core.async.t_cljs$core$async15412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15412";

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15412");
});

cljs.core.async.__GT_t_cljs$core$async15412 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15412(filter_GT___$1,p__$1,ch__$1,meta15413){
return (new cljs.core.async.t_cljs$core$async15412(filter_GT___$1,p__$1,ch__$1,meta15413));
});

}

return (new cljs.core.async.t_cljs$core$async15412(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15415 = [];
var len__7277__auto___15459 = arguments.length;
var i__7278__auto___15460 = (0);
while(true){
if((i__7278__auto___15460 < len__7277__auto___15459)){
args15415.push((arguments[i__7278__auto___15460]));

var G__15461 = (i__7278__auto___15460 + (1));
i__7278__auto___15460 = G__15461;
continue;
} else {
}
break;
}

var G__15417 = args15415.length;
switch (G__15417) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15415.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15463,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15463,out){
return (function (state_15438){
var state_val_15439 = (state_15438[(1)]);
if((state_val_15439 === (7))){
var inst_15434 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
var statearr_15440_15464 = state_15438__$1;
(statearr_15440_15464[(2)] = inst_15434);

(statearr_15440_15464[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (1))){
var state_15438__$1 = state_15438;
var statearr_15441_15465 = state_15438__$1;
(statearr_15441_15465[(2)] = null);

(statearr_15441_15465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (4))){
var inst_15420 = (state_15438[(7)]);
var inst_15420__$1 = (state_15438[(2)]);
var inst_15421 = (inst_15420__$1 == null);
var state_15438__$1 = (function (){var statearr_15442 = state_15438;
(statearr_15442[(7)] = inst_15420__$1);

return statearr_15442;
})();
if(cljs.core.truth_(inst_15421)){
var statearr_15443_15466 = state_15438__$1;
(statearr_15443_15466[(1)] = (5));

} else {
var statearr_15444_15467 = state_15438__$1;
(statearr_15444_15467[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (6))){
var inst_15420 = (state_15438[(7)]);
var inst_15425 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15420) : p.call(null,inst_15420));
var state_15438__$1 = state_15438;
if(cljs.core.truth_(inst_15425)){
var statearr_15445_15468 = state_15438__$1;
(statearr_15445_15468[(1)] = (8));

} else {
var statearr_15446_15469 = state_15438__$1;
(statearr_15446_15469[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (3))){
var inst_15436 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15438__$1,inst_15436);
} else {
if((state_val_15439 === (2))){
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15438__$1,(4),ch);
} else {
if((state_val_15439 === (11))){
var inst_15428 = (state_15438[(2)]);
var state_15438__$1 = state_15438;
var statearr_15447_15470 = state_15438__$1;
(statearr_15447_15470[(2)] = inst_15428);

(statearr_15447_15470[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (9))){
var state_15438__$1 = state_15438;
var statearr_15448_15471 = state_15438__$1;
(statearr_15448_15471[(2)] = null);

(statearr_15448_15471[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (5))){
var inst_15423 = cljs.core.async.close_BANG_(out);
var state_15438__$1 = state_15438;
var statearr_15449_15472 = state_15438__$1;
(statearr_15449_15472[(2)] = inst_15423);

(statearr_15449_15472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (10))){
var inst_15431 = (state_15438[(2)]);
var state_15438__$1 = (function (){var statearr_15450 = state_15438;
(statearr_15450[(8)] = inst_15431);

return statearr_15450;
})();
var statearr_15451_15473 = state_15438__$1;
(statearr_15451_15473[(2)] = null);

(statearr_15451_15473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15439 === (8))){
var inst_15420 = (state_15438[(7)]);
var state_15438__$1 = state_15438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15438__$1,(11),out,inst_15420);
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
});})(c__13223__auto___15463,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15463,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15455 = [null,null,null,null,null,null,null,null,null];
(statearr_15455[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15455[(1)] = (1));

return statearr_15455;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15438){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15438);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15456){if((e15456 instanceof Object)){
var ex__13113__auto__ = e15456;
var statearr_15457_15474 = state_15438;
(statearr_15457_15474[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15438);

return cljs.core.cst$kw$recur;
} else {
throw e15456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15475 = state_15438;
state_15438 = G__15475;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15463,out))
})();
var state__13225__auto__ = (function (){var statearr_15458 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15463);

return statearr_15458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15463,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15476 = [];
var len__7277__auto___15479 = arguments.length;
var i__7278__auto___15480 = (0);
while(true){
if((i__7278__auto___15480 < len__7277__auto___15479)){
args15476.push((arguments[i__7278__auto___15480]));

var G__15481 = (i__7278__auto___15480 + (1));
i__7278__auto___15480 = G__15481;
continue;
} else {
}
break;
}

var G__15478 = args15476.length;
switch (G__15478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15476.length)].join('')));

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
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_15648){
var state_val_15649 = (state_15648[(1)]);
if((state_val_15649 === (7))){
var inst_15644 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15650_15691 = state_15648__$1;
(statearr_15650_15691[(2)] = inst_15644);

(statearr_15650_15691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (20))){
var inst_15614 = (state_15648[(7)]);
var inst_15625 = (state_15648[(2)]);
var inst_15626 = cljs.core.next(inst_15614);
var inst_15600 = inst_15626;
var inst_15601 = null;
var inst_15602 = (0);
var inst_15603 = (0);
var state_15648__$1 = (function (){var statearr_15651 = state_15648;
(statearr_15651[(8)] = inst_15600);

(statearr_15651[(9)] = inst_15625);

(statearr_15651[(10)] = inst_15603);

(statearr_15651[(11)] = inst_15602);

(statearr_15651[(12)] = inst_15601);

return statearr_15651;
})();
var statearr_15652_15692 = state_15648__$1;
(statearr_15652_15692[(2)] = null);

(statearr_15652_15692[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (1))){
var state_15648__$1 = state_15648;
var statearr_15653_15693 = state_15648__$1;
(statearr_15653_15693[(2)] = null);

(statearr_15653_15693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (4))){
var inst_15589 = (state_15648[(13)]);
var inst_15589__$1 = (state_15648[(2)]);
var inst_15590 = (inst_15589__$1 == null);
var state_15648__$1 = (function (){var statearr_15654 = state_15648;
(statearr_15654[(13)] = inst_15589__$1);

return statearr_15654;
})();
if(cljs.core.truth_(inst_15590)){
var statearr_15655_15694 = state_15648__$1;
(statearr_15655_15694[(1)] = (5));

} else {
var statearr_15656_15695 = state_15648__$1;
(statearr_15656_15695[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (15))){
var state_15648__$1 = state_15648;
var statearr_15660_15696 = state_15648__$1;
(statearr_15660_15696[(2)] = null);

(statearr_15660_15696[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (21))){
var state_15648__$1 = state_15648;
var statearr_15661_15697 = state_15648__$1;
(statearr_15661_15697[(2)] = null);

(statearr_15661_15697[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (13))){
var inst_15600 = (state_15648[(8)]);
var inst_15603 = (state_15648[(10)]);
var inst_15602 = (state_15648[(11)]);
var inst_15601 = (state_15648[(12)]);
var inst_15610 = (state_15648[(2)]);
var inst_15611 = (inst_15603 + (1));
var tmp15657 = inst_15600;
var tmp15658 = inst_15602;
var tmp15659 = inst_15601;
var inst_15600__$1 = tmp15657;
var inst_15601__$1 = tmp15659;
var inst_15602__$1 = tmp15658;
var inst_15603__$1 = inst_15611;
var state_15648__$1 = (function (){var statearr_15662 = state_15648;
(statearr_15662[(14)] = inst_15610);

(statearr_15662[(8)] = inst_15600__$1);

(statearr_15662[(10)] = inst_15603__$1);

(statearr_15662[(11)] = inst_15602__$1);

(statearr_15662[(12)] = inst_15601__$1);

return statearr_15662;
})();
var statearr_15663_15698 = state_15648__$1;
(statearr_15663_15698[(2)] = null);

(statearr_15663_15698[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (22))){
var state_15648__$1 = state_15648;
var statearr_15664_15699 = state_15648__$1;
(statearr_15664_15699[(2)] = null);

(statearr_15664_15699[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (6))){
var inst_15589 = (state_15648[(13)]);
var inst_15598 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15589) : f.call(null,inst_15589));
var inst_15599 = cljs.core.seq(inst_15598);
var inst_15600 = inst_15599;
var inst_15601 = null;
var inst_15602 = (0);
var inst_15603 = (0);
var state_15648__$1 = (function (){var statearr_15665 = state_15648;
(statearr_15665[(8)] = inst_15600);

(statearr_15665[(10)] = inst_15603);

(statearr_15665[(11)] = inst_15602);

(statearr_15665[(12)] = inst_15601);

return statearr_15665;
})();
var statearr_15666_15700 = state_15648__$1;
(statearr_15666_15700[(2)] = null);

(statearr_15666_15700[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (17))){
var inst_15614 = (state_15648[(7)]);
var inst_15618 = cljs.core.chunk_first(inst_15614);
var inst_15619 = cljs.core.chunk_rest(inst_15614);
var inst_15620 = cljs.core.count(inst_15618);
var inst_15600 = inst_15619;
var inst_15601 = inst_15618;
var inst_15602 = inst_15620;
var inst_15603 = (0);
var state_15648__$1 = (function (){var statearr_15667 = state_15648;
(statearr_15667[(8)] = inst_15600);

(statearr_15667[(10)] = inst_15603);

(statearr_15667[(11)] = inst_15602);

(statearr_15667[(12)] = inst_15601);

return statearr_15667;
})();
var statearr_15668_15701 = state_15648__$1;
(statearr_15668_15701[(2)] = null);

(statearr_15668_15701[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (3))){
var inst_15646 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15648__$1,inst_15646);
} else {
if((state_val_15649 === (12))){
var inst_15634 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15669_15702 = state_15648__$1;
(statearr_15669_15702[(2)] = inst_15634);

(statearr_15669_15702[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (2))){
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15648__$1,(4),in$);
} else {
if((state_val_15649 === (23))){
var inst_15642 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15670_15703 = state_15648__$1;
(statearr_15670_15703[(2)] = inst_15642);

(statearr_15670_15703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (19))){
var inst_15629 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15671_15704 = state_15648__$1;
(statearr_15671_15704[(2)] = inst_15629);

(statearr_15671_15704[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (11))){
var inst_15600 = (state_15648[(8)]);
var inst_15614 = (state_15648[(7)]);
var inst_15614__$1 = cljs.core.seq(inst_15600);
var state_15648__$1 = (function (){var statearr_15672 = state_15648;
(statearr_15672[(7)] = inst_15614__$1);

return statearr_15672;
})();
if(inst_15614__$1){
var statearr_15673_15705 = state_15648__$1;
(statearr_15673_15705[(1)] = (14));

} else {
var statearr_15674_15706 = state_15648__$1;
(statearr_15674_15706[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (9))){
var inst_15636 = (state_15648[(2)]);
var inst_15637 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15648__$1 = (function (){var statearr_15675 = state_15648;
(statearr_15675[(15)] = inst_15636);

return statearr_15675;
})();
if(cljs.core.truth_(inst_15637)){
var statearr_15676_15707 = state_15648__$1;
(statearr_15676_15707[(1)] = (21));

} else {
var statearr_15677_15708 = state_15648__$1;
(statearr_15677_15708[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (5))){
var inst_15592 = cljs.core.async.close_BANG_(out);
var state_15648__$1 = state_15648;
var statearr_15678_15709 = state_15648__$1;
(statearr_15678_15709[(2)] = inst_15592);

(statearr_15678_15709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (14))){
var inst_15614 = (state_15648[(7)]);
var inst_15616 = cljs.core.chunked_seq_QMARK_(inst_15614);
var state_15648__$1 = state_15648;
if(inst_15616){
var statearr_15679_15710 = state_15648__$1;
(statearr_15679_15710[(1)] = (17));

} else {
var statearr_15680_15711 = state_15648__$1;
(statearr_15680_15711[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (16))){
var inst_15632 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15681_15712 = state_15648__$1;
(statearr_15681_15712[(2)] = inst_15632);

(statearr_15681_15712[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15649 === (10))){
var inst_15603 = (state_15648[(10)]);
var inst_15601 = (state_15648[(12)]);
var inst_15608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15601,inst_15603);
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15648__$1,(13),out,inst_15608);
} else {
if((state_val_15649 === (18))){
var inst_15614 = (state_15648[(7)]);
var inst_15623 = cljs.core.first(inst_15614);
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15648__$1,(20),out,inst_15623);
} else {
if((state_val_15649 === (8))){
var inst_15603 = (state_15648[(10)]);
var inst_15602 = (state_15648[(11)]);
var inst_15605 = (inst_15603 < inst_15602);
var inst_15606 = inst_15605;
var state_15648__$1 = state_15648;
if(cljs.core.truth_(inst_15606)){
var statearr_15682_15713 = state_15648__$1;
(statearr_15682_15713[(1)] = (10));

} else {
var statearr_15683_15714 = state_15648__$1;
(statearr_15683_15714[(1)] = (11));

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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_15687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15687[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__);

(statearr_15687[(1)] = (1));

return statearr_15687;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1 = (function (state_15648){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15648);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15688){if((e15688 instanceof Object)){
var ex__13113__auto__ = e15688;
var statearr_15689_15715 = state_15648;
(statearr_15689_15715[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15648);

return cljs.core.cst$kw$recur;
} else {
throw e15688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15716 = state_15648;
state_15648 = G__15716;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__ = function(state_15648){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1.call(this,state_15648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_15690 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_15690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15717 = [];
var len__7277__auto___15720 = arguments.length;
var i__7278__auto___15721 = (0);
while(true){
if((i__7278__auto___15721 < len__7277__auto___15720)){
args15717.push((arguments[i__7278__auto___15721]));

var G__15722 = (i__7278__auto___15721 + (1));
i__7278__auto___15721 = G__15722;
continue;
} else {
}
break;
}

var G__15719 = args15717.length;
switch (G__15719) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15717.length)].join('')));

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
var args15724 = [];
var len__7277__auto___15727 = arguments.length;
var i__7278__auto___15728 = (0);
while(true){
if((i__7278__auto___15728 < len__7277__auto___15727)){
args15724.push((arguments[i__7278__auto___15728]));

var G__15729 = (i__7278__auto___15728 + (1));
i__7278__auto___15728 = G__15729;
continue;
} else {
}
break;
}

var G__15726 = args15724.length;
switch (G__15726) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15724.length)].join('')));

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
var args15731 = [];
var len__7277__auto___15782 = arguments.length;
var i__7278__auto___15783 = (0);
while(true){
if((i__7278__auto___15783 < len__7277__auto___15782)){
args15731.push((arguments[i__7278__auto___15783]));

var G__15784 = (i__7278__auto___15783 + (1));
i__7278__auto___15783 = G__15784;
continue;
} else {
}
break;
}

var G__15733 = args15731.length;
switch (G__15733) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15731.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15786,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15786,out){
return (function (state_15757){
var state_val_15758 = (state_15757[(1)]);
if((state_val_15758 === (7))){
var inst_15752 = (state_15757[(2)]);
var state_15757__$1 = state_15757;
var statearr_15759_15787 = state_15757__$1;
(statearr_15759_15787[(2)] = inst_15752);

(statearr_15759_15787[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (1))){
var inst_15734 = null;
var state_15757__$1 = (function (){var statearr_15760 = state_15757;
(statearr_15760[(7)] = inst_15734);

return statearr_15760;
})();
var statearr_15761_15788 = state_15757__$1;
(statearr_15761_15788[(2)] = null);

(statearr_15761_15788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (4))){
var inst_15737 = (state_15757[(8)]);
var inst_15737__$1 = (state_15757[(2)]);
var inst_15738 = (inst_15737__$1 == null);
var inst_15739 = cljs.core.not(inst_15738);
var state_15757__$1 = (function (){var statearr_15762 = state_15757;
(statearr_15762[(8)] = inst_15737__$1);

return statearr_15762;
})();
if(inst_15739){
var statearr_15763_15789 = state_15757__$1;
(statearr_15763_15789[(1)] = (5));

} else {
var statearr_15764_15790 = state_15757__$1;
(statearr_15764_15790[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (6))){
var state_15757__$1 = state_15757;
var statearr_15765_15791 = state_15757__$1;
(statearr_15765_15791[(2)] = null);

(statearr_15765_15791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (3))){
var inst_15754 = (state_15757[(2)]);
var inst_15755 = cljs.core.async.close_BANG_(out);
var state_15757__$1 = (function (){var statearr_15766 = state_15757;
(statearr_15766[(9)] = inst_15754);

return statearr_15766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15757__$1,inst_15755);
} else {
if((state_val_15758 === (2))){
var state_15757__$1 = state_15757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15757__$1,(4),ch);
} else {
if((state_val_15758 === (11))){
var inst_15737 = (state_15757[(8)]);
var inst_15746 = (state_15757[(2)]);
var inst_15734 = inst_15737;
var state_15757__$1 = (function (){var statearr_15767 = state_15757;
(statearr_15767[(7)] = inst_15734);

(statearr_15767[(10)] = inst_15746);

return statearr_15767;
})();
var statearr_15768_15792 = state_15757__$1;
(statearr_15768_15792[(2)] = null);

(statearr_15768_15792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (9))){
var inst_15737 = (state_15757[(8)]);
var state_15757__$1 = state_15757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15757__$1,(11),out,inst_15737);
} else {
if((state_val_15758 === (5))){
var inst_15734 = (state_15757[(7)]);
var inst_15737 = (state_15757[(8)]);
var inst_15741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15737,inst_15734);
var state_15757__$1 = state_15757;
if(inst_15741){
var statearr_15770_15793 = state_15757__$1;
(statearr_15770_15793[(1)] = (8));

} else {
var statearr_15771_15794 = state_15757__$1;
(statearr_15771_15794[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (10))){
var inst_15749 = (state_15757[(2)]);
var state_15757__$1 = state_15757;
var statearr_15772_15795 = state_15757__$1;
(statearr_15772_15795[(2)] = inst_15749);

(statearr_15772_15795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15758 === (8))){
var inst_15734 = (state_15757[(7)]);
var tmp15769 = inst_15734;
var inst_15734__$1 = tmp15769;
var state_15757__$1 = (function (){var statearr_15773 = state_15757;
(statearr_15773[(7)] = inst_15734__$1);

return statearr_15773;
})();
var statearr_15774_15796 = state_15757__$1;
(statearr_15774_15796[(2)] = null);

(statearr_15774_15796[(1)] = (2));


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
});})(c__13223__auto___15786,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15786,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15778[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15778[(1)] = (1));

return statearr_15778;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15757){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15757);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15779){if((e15779 instanceof Object)){
var ex__13113__auto__ = e15779;
var statearr_15780_15797 = state_15757;
(statearr_15780_15797[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15757);

return cljs.core.cst$kw$recur;
} else {
throw e15779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15798 = state_15757;
state_15757 = G__15798;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15786,out))
})();
var state__13225__auto__ = (function (){var statearr_15781 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15786);

return statearr_15781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15786,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15799 = [];
var len__7277__auto___15869 = arguments.length;
var i__7278__auto___15870 = (0);
while(true){
if((i__7278__auto___15870 < len__7277__auto___15869)){
args15799.push((arguments[i__7278__auto___15870]));

var G__15871 = (i__7278__auto___15870 + (1));
i__7278__auto___15870 = G__15871;
continue;
} else {
}
break;
}

var G__15801 = args15799.length;
switch (G__15801) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15799.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15873,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15873,out){
return (function (state_15839){
var state_val_15840 = (state_15839[(1)]);
if((state_val_15840 === (7))){
var inst_15835 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15841_15874 = state_15839__$1;
(statearr_15841_15874[(2)] = inst_15835);

(statearr_15841_15874[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (1))){
var inst_15802 = (new Array(n));
var inst_15803 = inst_15802;
var inst_15804 = (0);
var state_15839__$1 = (function (){var statearr_15842 = state_15839;
(statearr_15842[(7)] = inst_15804);

(statearr_15842[(8)] = inst_15803);

return statearr_15842;
})();
var statearr_15843_15875 = state_15839__$1;
(statearr_15843_15875[(2)] = null);

(statearr_15843_15875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (4))){
var inst_15807 = (state_15839[(9)]);
var inst_15807__$1 = (state_15839[(2)]);
var inst_15808 = (inst_15807__$1 == null);
var inst_15809 = cljs.core.not(inst_15808);
var state_15839__$1 = (function (){var statearr_15844 = state_15839;
(statearr_15844[(9)] = inst_15807__$1);

return statearr_15844;
})();
if(inst_15809){
var statearr_15845_15876 = state_15839__$1;
(statearr_15845_15876[(1)] = (5));

} else {
var statearr_15846_15877 = state_15839__$1;
(statearr_15846_15877[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (15))){
var inst_15829 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15847_15878 = state_15839__$1;
(statearr_15847_15878[(2)] = inst_15829);

(statearr_15847_15878[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (13))){
var state_15839__$1 = state_15839;
var statearr_15848_15879 = state_15839__$1;
(statearr_15848_15879[(2)] = null);

(statearr_15848_15879[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (6))){
var inst_15804 = (state_15839[(7)]);
var inst_15825 = (inst_15804 > (0));
var state_15839__$1 = state_15839;
if(cljs.core.truth_(inst_15825)){
var statearr_15849_15880 = state_15839__$1;
(statearr_15849_15880[(1)] = (12));

} else {
var statearr_15850_15881 = state_15839__$1;
(statearr_15850_15881[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (3))){
var inst_15837 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15839__$1,inst_15837);
} else {
if((state_val_15840 === (12))){
var inst_15803 = (state_15839[(8)]);
var inst_15827 = cljs.core.vec(inst_15803);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15839__$1,(15),out,inst_15827);
} else {
if((state_val_15840 === (2))){
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15839__$1,(4),ch);
} else {
if((state_val_15840 === (11))){
var inst_15819 = (state_15839[(2)]);
var inst_15820 = (new Array(n));
var inst_15803 = inst_15820;
var inst_15804 = (0);
var state_15839__$1 = (function (){var statearr_15851 = state_15839;
(statearr_15851[(7)] = inst_15804);

(statearr_15851[(8)] = inst_15803);

(statearr_15851[(10)] = inst_15819);

return statearr_15851;
})();
var statearr_15852_15882 = state_15839__$1;
(statearr_15852_15882[(2)] = null);

(statearr_15852_15882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (9))){
var inst_15803 = (state_15839[(8)]);
var inst_15817 = cljs.core.vec(inst_15803);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15839__$1,(11),out,inst_15817);
} else {
if((state_val_15840 === (5))){
var inst_15804 = (state_15839[(7)]);
var inst_15803 = (state_15839[(8)]);
var inst_15807 = (state_15839[(9)]);
var inst_15812 = (state_15839[(11)]);
var inst_15811 = (inst_15803[inst_15804] = inst_15807);
var inst_15812__$1 = (inst_15804 + (1));
var inst_15813 = (inst_15812__$1 < n);
var state_15839__$1 = (function (){var statearr_15853 = state_15839;
(statearr_15853[(12)] = inst_15811);

(statearr_15853[(11)] = inst_15812__$1);

return statearr_15853;
})();
if(cljs.core.truth_(inst_15813)){
var statearr_15854_15883 = state_15839__$1;
(statearr_15854_15883[(1)] = (8));

} else {
var statearr_15855_15884 = state_15839__$1;
(statearr_15855_15884[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (14))){
var inst_15832 = (state_15839[(2)]);
var inst_15833 = cljs.core.async.close_BANG_(out);
var state_15839__$1 = (function (){var statearr_15857 = state_15839;
(statearr_15857[(13)] = inst_15832);

return statearr_15857;
})();
var statearr_15858_15885 = state_15839__$1;
(statearr_15858_15885[(2)] = inst_15833);

(statearr_15858_15885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (10))){
var inst_15823 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15859_15886 = state_15839__$1;
(statearr_15859_15886[(2)] = inst_15823);

(statearr_15859_15886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15840 === (8))){
var inst_15803 = (state_15839[(8)]);
var inst_15812 = (state_15839[(11)]);
var tmp15856 = inst_15803;
var inst_15803__$1 = tmp15856;
var inst_15804 = inst_15812;
var state_15839__$1 = (function (){var statearr_15860 = state_15839;
(statearr_15860[(7)] = inst_15804);

(statearr_15860[(8)] = inst_15803__$1);

return statearr_15860;
})();
var statearr_15861_15887 = state_15839__$1;
(statearr_15861_15887[(2)] = null);

(statearr_15861_15887[(1)] = (2));


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
});})(c__13223__auto___15873,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15873,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15865[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15865[(1)] = (1));

return statearr_15865;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15839){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15839);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15866){if((e15866 instanceof Object)){
var ex__13113__auto__ = e15866;
var statearr_15867_15888 = state_15839;
(statearr_15867_15888[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15839);

return cljs.core.cst$kw$recur;
} else {
throw e15866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15889 = state_15839;
state_15839 = G__15889;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15873,out))
})();
var state__13225__auto__ = (function (){var statearr_15868 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15873);

return statearr_15868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15873,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15890 = [];
var len__7277__auto___15964 = arguments.length;
var i__7278__auto___15965 = (0);
while(true){
if((i__7278__auto___15965 < len__7277__auto___15964)){
args15890.push((arguments[i__7278__auto___15965]));

var G__15966 = (i__7278__auto___15965 + (1));
i__7278__auto___15965 = G__15966;
continue;
} else {
}
break;
}

var G__15892 = args15890.length;
switch (G__15892) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15890.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15968,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15968,out){
return (function (state_15934){
var state_val_15935 = (state_15934[(1)]);
if((state_val_15935 === (7))){
var inst_15930 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15936_15969 = state_15934__$1;
(statearr_15936_15969[(2)] = inst_15930);

(statearr_15936_15969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (1))){
var inst_15893 = [];
var inst_15894 = inst_15893;
var inst_15895 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15934__$1 = (function (){var statearr_15937 = state_15934;
(statearr_15937[(7)] = inst_15894);

(statearr_15937[(8)] = inst_15895);

return statearr_15937;
})();
var statearr_15938_15970 = state_15934__$1;
(statearr_15938_15970[(2)] = null);

(statearr_15938_15970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (4))){
var inst_15898 = (state_15934[(9)]);
var inst_15898__$1 = (state_15934[(2)]);
var inst_15899 = (inst_15898__$1 == null);
var inst_15900 = cljs.core.not(inst_15899);
var state_15934__$1 = (function (){var statearr_15939 = state_15934;
(statearr_15939[(9)] = inst_15898__$1);

return statearr_15939;
})();
if(inst_15900){
var statearr_15940_15971 = state_15934__$1;
(statearr_15940_15971[(1)] = (5));

} else {
var statearr_15941_15972 = state_15934__$1;
(statearr_15941_15972[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (15))){
var inst_15924 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15942_15973 = state_15934__$1;
(statearr_15942_15973[(2)] = inst_15924);

(statearr_15942_15973[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (13))){
var state_15934__$1 = state_15934;
var statearr_15943_15974 = state_15934__$1;
(statearr_15943_15974[(2)] = null);

(statearr_15943_15974[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (6))){
var inst_15894 = (state_15934[(7)]);
var inst_15919 = inst_15894.length;
var inst_15920 = (inst_15919 > (0));
var state_15934__$1 = state_15934;
if(cljs.core.truth_(inst_15920)){
var statearr_15944_15975 = state_15934__$1;
(statearr_15944_15975[(1)] = (12));

} else {
var statearr_15945_15976 = state_15934__$1;
(statearr_15945_15976[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (3))){
var inst_15932 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15934__$1,inst_15932);
} else {
if((state_val_15935 === (12))){
var inst_15894 = (state_15934[(7)]);
var inst_15922 = cljs.core.vec(inst_15894);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15934__$1,(15),out,inst_15922);
} else {
if((state_val_15935 === (2))){
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(4),ch);
} else {
if((state_val_15935 === (11))){
var inst_15898 = (state_15934[(9)]);
var inst_15902 = (state_15934[(10)]);
var inst_15912 = (state_15934[(2)]);
var inst_15913 = [];
var inst_15914 = inst_15913.push(inst_15898);
var inst_15894 = inst_15913;
var inst_15895 = inst_15902;
var state_15934__$1 = (function (){var statearr_15946 = state_15934;
(statearr_15946[(11)] = inst_15912);

(statearr_15946[(12)] = inst_15914);

(statearr_15946[(7)] = inst_15894);

(statearr_15946[(8)] = inst_15895);

return statearr_15946;
})();
var statearr_15947_15977 = state_15934__$1;
(statearr_15947_15977[(2)] = null);

(statearr_15947_15977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (9))){
var inst_15894 = (state_15934[(7)]);
var inst_15910 = cljs.core.vec(inst_15894);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15934__$1,(11),out,inst_15910);
} else {
if((state_val_15935 === (5))){
var inst_15895 = (state_15934[(8)]);
var inst_15898 = (state_15934[(9)]);
var inst_15902 = (state_15934[(10)]);
var inst_15902__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15898) : f.call(null,inst_15898));
var inst_15903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15902__$1,inst_15895);
var inst_15904 = cljs.core.keyword_identical_QMARK_(inst_15895,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15905 = (inst_15903) || (inst_15904);
var state_15934__$1 = (function (){var statearr_15948 = state_15934;
(statearr_15948[(10)] = inst_15902__$1);

return statearr_15948;
})();
if(cljs.core.truth_(inst_15905)){
var statearr_15949_15978 = state_15934__$1;
(statearr_15949_15978[(1)] = (8));

} else {
var statearr_15950_15979 = state_15934__$1;
(statearr_15950_15979[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (14))){
var inst_15927 = (state_15934[(2)]);
var inst_15928 = cljs.core.async.close_BANG_(out);
var state_15934__$1 = (function (){var statearr_15952 = state_15934;
(statearr_15952[(13)] = inst_15927);

return statearr_15952;
})();
var statearr_15953_15980 = state_15934__$1;
(statearr_15953_15980[(2)] = inst_15928);

(statearr_15953_15980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (10))){
var inst_15917 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15954_15981 = state_15934__$1;
(statearr_15954_15981[(2)] = inst_15917);

(statearr_15954_15981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (8))){
var inst_15894 = (state_15934[(7)]);
var inst_15898 = (state_15934[(9)]);
var inst_15902 = (state_15934[(10)]);
var inst_15907 = inst_15894.push(inst_15898);
var tmp15951 = inst_15894;
var inst_15894__$1 = tmp15951;
var inst_15895 = inst_15902;
var state_15934__$1 = (function (){var statearr_15955 = state_15934;
(statearr_15955[(14)] = inst_15907);

(statearr_15955[(7)] = inst_15894__$1);

(statearr_15955[(8)] = inst_15895);

return statearr_15955;
})();
var statearr_15956_15982 = state_15934__$1;
(statearr_15956_15982[(2)] = null);

(statearr_15956_15982[(1)] = (2));


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
});})(c__13223__auto___15968,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15968,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15960[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15960[(1)] = (1));

return statearr_15960;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15934){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15934);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15961){if((e15961 instanceof Object)){
var ex__13113__auto__ = e15961;
var statearr_15962_15983 = state_15934;
(statearr_15962_15983[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15934);

return cljs.core.cst$kw$recur;
} else {
throw e15961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15984 = state_15934;
state_15934 = G__15984;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15968,out))
})();
var state__13225__auto__ = (function (){var statearr_15963 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15968);

return statearr_15963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15968,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
