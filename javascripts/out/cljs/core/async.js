// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21632 = (function (f,fn_handler,meta21633){
this.f = f;
this.fn_handler = fn_handler;
this.meta21633 = meta21633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21632.cljs$lang$type = true;
cljs.core.async.t21632.cljs$lang$ctorStr = "cljs.core.async/t21632";
cljs.core.async.t21632.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21632");
});
cljs.core.async.t21632.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21634){var self__ = this;
var _21634__$1 = this;return self__.meta21633;
});
cljs.core.async.t21632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21634,meta21633__$1){var self__ = this;
var _21634__$1 = this;return (new cljs.core.async.t21632(self__.f,self__.fn_handler,meta21633__$1));
});
cljs.core.async.__GT_t21632 = (function __GT_t21632(f__$1,fn_handler__$1,meta21633){return (new cljs.core.async.t21632(f__$1,fn_handler__$1,meta21633));
});
}
return (new cljs.core.async.t21632(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21636 = buff;if(G__21636)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__21636.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21636.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21636);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_21653 = (function (){var G__21650 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21650) : cljs.core.deref.call(null,G__21650));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__21651_21654 = val_21653;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21651_21654) : fn1.call(null,G__21651_21654));
} else
{cljs.core.async.impl.dispatch.run(((function (val_21653,ret){
return (function (){var G__21652 = val_21653;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21652) : fn1.call(null,G__21652));
});})(val_21653,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4217__auto__))
{var ret = temp__4217__auto__;var G__21663 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21663) : cljs.core.deref.call(null,G__21663));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4217__auto__))
{var retb = temp__4217__auto__;var ret = (function (){var G__21664 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21664) : cljs.core.deref.call(null,G__21664));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__21665_21667 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21665_21667) : fn1.call(null,G__21665_21667));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4217__auto__){
return (function (){var G__21666 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21666) : fn1.call(null,G__21666));
});})(ret,retb,temp__4217__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___21668 = n;var x_21669 = (0);while(true){
if((x_21669 < n__4510__auto___21668))
{(a[x_21669] = (0));
{
var G__21670 = (x_21669 + (1));
x_21669 = G__21670;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21671 = (i + (1));
i = G__21671;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__21679 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21679) : cljs.core.atom.call(null,G__21679));
})();if(typeof cljs.core.async.t21680 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21680 = (function (flag,alt_flag,meta21681){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21681 = meta21681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21680.cljs$lang$type = true;
cljs.core.async.t21680.cljs$lang$ctorStr = "cljs.core.async/t21680";
cljs.core.async.t21680.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21680");
});})(flag))
;
cljs.core.async.t21680.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__21683 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21683) : cljs.core.deref.call(null,G__21683));
});})(flag))
;
cljs.core.async.t21680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__21684_21686 = self__.flag;var G__21685_21687 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21684_21686,G__21685_21687) : cljs.core.reset_BANG_.call(null,G__21684_21686,G__21685_21687));
return true;
});})(flag))
;
cljs.core.async.t21680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21682){var self__ = this;
var _21682__$1 = this;return self__.meta21681;
});})(flag))
;
cljs.core.async.t21680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21682,meta21681__$1){var self__ = this;
var _21682__$1 = this;return (new cljs.core.async.t21680(self__.flag,self__.alt_flag,meta21681__$1));
});})(flag))
;
cljs.core.async.__GT_t21680 = ((function (flag){
return (function __GT_t21680(flag__$1,alt_flag__$1,meta21681){return (new cljs.core.async.t21680(flag__$1,alt_flag__$1,meta21681));
});})(flag))
;
}
return (new cljs.core.async.t21680(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21691 = (function (cb,flag,alt_handler,meta21692){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21692 = meta21692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21691.cljs$lang$type = true;
cljs.core.async.t21691.cljs$lang$ctorStr = "cljs.core.async/t21691";
cljs.core.async.t21691.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21691");
});
cljs.core.async.t21691.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t21691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t21691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21693){var self__ = this;
var _21693__$1 = this;return self__.meta21692;
});
cljs.core.async.t21691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21693,meta21692__$1){var self__ = this;
var _21693__$1 = this;return (new cljs.core.async.t21691(self__.cb,self__.flag,self__.alt_handler,meta21692__$1));
});
cljs.core.async.__GT_t21691 = (function __GT_t21691(cb__$1,flag__$1,alt_handler__$1,meta21692){return (new cljs.core.async.t21691(cb__$1,flag__$1,alt_handler__$1,meta21692));
});
}
return (new cljs.core.async.t21691(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__21701 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21701) : port.call(null,G__21701));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__21702 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21702) : port.call(null,G__21702));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21694_SHARP_){var G__21703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21694_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21703) : fret.call(null,G__21703));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21695_SHARP_){var G__21704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21695_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21704) : fret.call(null,G__21704));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21705 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21705) : cljs.core.deref.call(null,G__21705));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21706 = (i + (1));
i = G__21706;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4219__auto__ = (function (){var and__3628__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3628__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4219__auto__))
{var got = temp__4219__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21707){var map__21709 = p__21707;var map__21709__$1 = ((cljs.core.seq_QMARK_(map__21709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21709):map__21709);var opts = map__21709__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21707 = null;if (arguments.length > 1) {
  p__21707 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21707);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21710){
var ports = cljs.core.first(arglist__21710);
var p__21707 = cljs.core.rest(arglist__21710);
return alts_BANG___delegate(ports,p__21707);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6495__auto___21808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___21808){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___21808){
return (function (state_21784){var state_val_21785 = (state_21784[(1)]);if((state_val_21785 === (7)))
{var inst_21780 = (state_21784[(2)]);var state_21784__$1 = state_21784;var statearr_21786_21809 = state_21784__$1;(statearr_21786_21809[(2)] = inst_21780);
(statearr_21786_21809[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (1)))
{var state_21784__$1 = state_21784;var statearr_21787_21810 = state_21784__$1;(statearr_21787_21810[(2)] = null);
(statearr_21787_21810[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (4)))
{var inst_21763 = (state_21784[(7)]);var inst_21763__$1 = (state_21784[(2)]);var inst_21764 = (inst_21763__$1 == null);var state_21784__$1 = (function (){var statearr_21788 = state_21784;(statearr_21788[(7)] = inst_21763__$1);
return statearr_21788;
})();if(cljs.core.truth_(inst_21764))
{var statearr_21789_21811 = state_21784__$1;(statearr_21789_21811[(1)] = (5));
} else
{var statearr_21790_21812 = state_21784__$1;(statearr_21790_21812[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (13)))
{var state_21784__$1 = state_21784;var statearr_21791_21813 = state_21784__$1;(statearr_21791_21813[(2)] = null);
(statearr_21791_21813[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (6)))
{var inst_21763 = (state_21784[(7)]);var state_21784__$1 = state_21784;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21784__$1,(11),to,inst_21763);
} else
{if((state_val_21785 === (3)))
{var inst_21782 = (state_21784[(2)]);var state_21784__$1 = state_21784;return cljs.core.async.impl.ioc_helpers.return_chan(state_21784__$1,inst_21782);
} else
{if((state_val_21785 === (12)))
{var state_21784__$1 = state_21784;var statearr_21792_21814 = state_21784__$1;(statearr_21792_21814[(2)] = null);
(statearr_21792_21814[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (2)))
{var state_21784__$1 = state_21784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21784__$1,(4),from);
} else
{if((state_val_21785 === (11)))
{var inst_21773 = (state_21784[(2)]);var state_21784__$1 = state_21784;if(cljs.core.truth_(inst_21773))
{var statearr_21793_21815 = state_21784__$1;(statearr_21793_21815[(1)] = (12));
} else
{var statearr_21794_21816 = state_21784__$1;(statearr_21794_21816[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (9)))
{var state_21784__$1 = state_21784;var statearr_21795_21817 = state_21784__$1;(statearr_21795_21817[(2)] = null);
(statearr_21795_21817[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (5)))
{var state_21784__$1 = state_21784;if(cljs.core.truth_(close_QMARK_))
{var statearr_21796_21818 = state_21784__$1;(statearr_21796_21818[(1)] = (8));
} else
{var statearr_21797_21819 = state_21784__$1;(statearr_21797_21819[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (14)))
{var inst_21778 = (state_21784[(2)]);var state_21784__$1 = state_21784;var statearr_21798_21820 = state_21784__$1;(statearr_21798_21820[(2)] = inst_21778);
(statearr_21798_21820[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (10)))
{var inst_21770 = (state_21784[(2)]);var state_21784__$1 = state_21784;var statearr_21799_21821 = state_21784__$1;(statearr_21799_21821[(2)] = inst_21770);
(statearr_21799_21821[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21785 === (8)))
{var inst_21767 = cljs.core.async.close_BANG_(to);var state_21784__$1 = state_21784;var statearr_21800_21822 = state_21784__$1;(statearr_21800_21822[(2)] = inst_21767);
(statearr_21800_21822[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___21808))
;return ((function (switch__6480__auto__,c__6495__auto___21808){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_21804 = [null,null,null,null,null,null,null,null];(statearr_21804[(0)] = state_machine__6481__auto__);
(statearr_21804[(1)] = (1));
return statearr_21804;
});
var state_machine__6481__auto____1 = (function (state_21784){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_21784);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e21805){if((e21805 instanceof Object))
{var ex__6484__auto__ = e21805;var statearr_21806_21823 = state_21784;(statearr_21806_21823[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21784);
return cljs.core.constant$keyword$16;
} else
{throw e21805;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__21824 = state_21784;
state_21784 = G__21824;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_21784){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_21784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___21808))
})();var state__6497__auto__ = (function (){var statearr_21807 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_21807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___21808);
return statearr_21807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___21808))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__22010){var vec__22011 = p__22010;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(1),null);var job = vec__22011;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__6495__auto___22195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results){
return (function (state_22016){var state_val_22017 = (state_22016[(1)]);if((state_val_22017 === (2)))
{var inst_22013 = (state_22016[(2)]);var inst_22014 = cljs.core.async.close_BANG_(res);var state_22016__$1 = (function (){var statearr_22018 = state_22016;(statearr_22018[(7)] = inst_22013);
return statearr_22018;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22016__$1,inst_22014);
} else
{if((state_val_22017 === (1)))
{var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22016__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results))
;return ((function (switch__6480__auto__,c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22022 = [null,null,null,null,null,null,null,null];(statearr_22022[(0)] = state_machine__6481__auto__);
(statearr_22022[(1)] = (1));
return statearr_22022;
});
var state_machine__6481__auto____1 = (function (state_22016){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22016);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22023){if((e22023 instanceof Object))
{var ex__6484__auto__ = e22023;var statearr_22024_22196 = state_22016;(statearr_22024_22196[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22016);
return cljs.core.constant$keyword$16;
} else
{throw e22023;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22197 = state_22016;
state_22016 = G__22197;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results))
})();var state__6497__auto__ = (function (){var statearr_22025 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22195);
return statearr_22025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22195,res,vec__22011,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22026){var vec__22027 = p__22026;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,(1),null);var job = vec__22027;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__22028_22198 = v;var G__22029_22199 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22028_22198,G__22029_22199) : xf.call(null,G__22028_22198,G__22029_22199));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___22200 = n;var __22201 = (0);while(true){
if((__22201 < n__4510__auto___22200))
{var G__22030_22202 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22030_22202) {
case "async":
var c__6495__auto___22204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22201,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (__22201,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function (state_22043){var state_val_22044 = (state_22043[(1)]);if((state_val_22044 === (7)))
{var inst_22039 = (state_22043[(2)]);var state_22043__$1 = state_22043;var statearr_22045_22205 = state_22043__$1;(statearr_22045_22205[(2)] = inst_22039);
(statearr_22045_22205[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22044 === (6)))
{var state_22043__$1 = state_22043;var statearr_22046_22206 = state_22043__$1;(statearr_22046_22206[(2)] = null);
(statearr_22046_22206[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22044 === (5)))
{var state_22043__$1 = state_22043;var statearr_22047_22207 = state_22043__$1;(statearr_22047_22207[(2)] = null);
(statearr_22047_22207[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22044 === (4)))
{var inst_22033 = (state_22043[(2)]);var inst_22034 = async(inst_22033);var state_22043__$1 = state_22043;if(cljs.core.truth_(inst_22034))
{var statearr_22048_22208 = state_22043__$1;(statearr_22048_22208[(1)] = (5));
} else
{var statearr_22049_22209 = state_22043__$1;(statearr_22049_22209[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22044 === (3)))
{var inst_22041 = (state_22043[(2)]);var state_22043__$1 = state_22043;return cljs.core.async.impl.ioc_helpers.return_chan(state_22043__$1,inst_22041);
} else
{if((state_val_22044 === (2)))
{var state_22043__$1 = state_22043;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22043__$1,(4),jobs);
} else
{if((state_val_22044 === (1)))
{var state_22043__$1 = state_22043;var statearr_22050_22210 = state_22043__$1;(statearr_22050_22210[(2)] = null);
(statearr_22050_22210[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__22201,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
;return ((function (__22201,switch__6480__auto__,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22054 = [null,null,null,null,null,null,null];(statearr_22054[(0)] = state_machine__6481__auto__);
(statearr_22054[(1)] = (1));
return statearr_22054;
});
var state_machine__6481__auto____1 = (function (state_22043){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22043);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object))
{var ex__6484__auto__ = e22055;var statearr_22056_22211 = state_22043;(statearr_22056_22211[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22043);
return cljs.core.constant$keyword$16;
} else
{throw e22055;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22212 = state_22043;
state_22043 = G__22212;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22043){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(__22201,switch__6480__auto__,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22057 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22204);
return statearr_22057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(__22201,c__6495__auto___22204,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
);

break;
case "compute":
var c__6495__auto___22213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22201,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (__22201,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function (state_22070){var state_val_22071 = (state_22070[(1)]);if((state_val_22071 === (7)))
{var inst_22066 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22072_22214 = state_22070__$1;(statearr_22072_22214[(2)] = inst_22066);
(statearr_22072_22214[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22071 === (6)))
{var state_22070__$1 = state_22070;var statearr_22073_22215 = state_22070__$1;(statearr_22073_22215[(2)] = null);
(statearr_22073_22215[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22071 === (5)))
{var state_22070__$1 = state_22070;var statearr_22074_22216 = state_22070__$1;(statearr_22074_22216[(2)] = null);
(statearr_22074_22216[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22071 === (4)))
{var inst_22060 = (state_22070[(2)]);var inst_22061 = process(inst_22060);var state_22070__$1 = state_22070;if(cljs.core.truth_(inst_22061))
{var statearr_22075_22217 = state_22070__$1;(statearr_22075_22217[(1)] = (5));
} else
{var statearr_22076_22218 = state_22070__$1;(statearr_22076_22218[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22071 === (3)))
{var inst_22068 = (state_22070[(2)]);var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.return_chan(state_22070__$1,inst_22068);
} else
{if((state_val_22071 === (2)))
{var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22070__$1,(4),jobs);
} else
{if((state_val_22071 === (1)))
{var state_22070__$1 = state_22070;var statearr_22077_22219 = state_22070__$1;(statearr_22077_22219[(2)] = null);
(statearr_22077_22219[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__22201,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
;return ((function (__22201,switch__6480__auto__,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22081 = [null,null,null,null,null,null,null];(statearr_22081[(0)] = state_machine__6481__auto__);
(statearr_22081[(1)] = (1));
return statearr_22081;
});
var state_machine__6481__auto____1 = (function (state_22070){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22070);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object))
{var ex__6484__auto__ = e22082;var statearr_22083_22220 = state_22070;(statearr_22083_22220[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22070);
return cljs.core.constant$keyword$16;
} else
{throw e22082;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22221 = state_22070;
state_22070 = G__22221;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22070){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(__22201,switch__6480__auto__,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22084 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22213);
return statearr_22084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(__22201,c__6495__auto___22213,G__22030_22202,n__4510__auto___22200,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22222 = (__22201 + (1));
__22201 = G__22222;
continue;
}
} else
{}
break;
}
var c__6495__auto___22223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22223,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22223,jobs,results,process,async){
return (function (state_22106){var state_val_22107 = (state_22106[(1)]);if((state_val_22107 === (9)))
{var inst_22099 = (state_22106[(2)]);var state_22106__$1 = (function (){var statearr_22108 = state_22106;(statearr_22108[(7)] = inst_22099);
return statearr_22108;
})();var statearr_22109_22224 = state_22106__$1;(statearr_22109_22224[(2)] = null);
(statearr_22109_22224[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22107 === (8)))
{var inst_22092 = (state_22106[(8)]);var inst_22097 = (state_22106[(2)]);var state_22106__$1 = (function (){var statearr_22110 = state_22106;(statearr_22110[(9)] = inst_22097);
return statearr_22110;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22106__$1,(9),results,inst_22092);
} else
{if((state_val_22107 === (7)))
{var inst_22102 = (state_22106[(2)]);var state_22106__$1 = state_22106;var statearr_22111_22225 = state_22106__$1;(statearr_22111_22225[(2)] = inst_22102);
(statearr_22111_22225[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22107 === (6)))
{var inst_22092 = (state_22106[(8)]);var inst_22087 = (state_22106[(10)]);var inst_22092__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_22093 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22094 = [inst_22087,inst_22092__$1];var inst_22095 = (new cljs.core.PersistentVector(null,2,(5),inst_22093,inst_22094,null));var state_22106__$1 = (function (){var statearr_22112 = state_22106;(statearr_22112[(8)] = inst_22092__$1);
return statearr_22112;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22106__$1,(8),jobs,inst_22095);
} else
{if((state_val_22107 === (5)))
{var inst_22090 = cljs.core.async.close_BANG_(jobs);var state_22106__$1 = state_22106;var statearr_22113_22226 = state_22106__$1;(statearr_22113_22226[(2)] = inst_22090);
(statearr_22113_22226[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22107 === (4)))
{var inst_22087 = (state_22106[(10)]);var inst_22087__$1 = (state_22106[(2)]);var inst_22088 = (inst_22087__$1 == null);var state_22106__$1 = (function (){var statearr_22114 = state_22106;(statearr_22114[(10)] = inst_22087__$1);
return statearr_22114;
})();if(cljs.core.truth_(inst_22088))
{var statearr_22115_22227 = state_22106__$1;(statearr_22115_22227[(1)] = (5));
} else
{var statearr_22116_22228 = state_22106__$1;(statearr_22116_22228[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22107 === (3)))
{var inst_22104 = (state_22106[(2)]);var state_22106__$1 = state_22106;return cljs.core.async.impl.ioc_helpers.return_chan(state_22106__$1,inst_22104);
} else
{if((state_val_22107 === (2)))
{var state_22106__$1 = state_22106;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22106__$1,(4),from);
} else
{if((state_val_22107 === (1)))
{var state_22106__$1 = state_22106;var statearr_22117_22229 = state_22106__$1;(statearr_22117_22229[(2)] = null);
(statearr_22117_22229[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___22223,jobs,results,process,async))
;return ((function (switch__6480__auto__,c__6495__auto___22223,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22121 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22121[(0)] = state_machine__6481__auto__);
(statearr_22121[(1)] = (1));
return statearr_22121;
});
var state_machine__6481__auto____1 = (function (state_22106){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22106);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22122){if((e22122 instanceof Object))
{var ex__6484__auto__ = e22122;var statearr_22123_22230 = state_22106;(statearr_22123_22230[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22106);
return cljs.core.constant$keyword$16;
} else
{throw e22122;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22231 = state_22106;
state_22106 = G__22231;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22106){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22223,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22124 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22223);
return statearr_22124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22223,jobs,results,process,async))
);
var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__,jobs,results,process,async){
return (function (state_22162){var state_val_22163 = (state_22162[(1)]);if((state_val_22163 === (7)))
{var inst_22158 = (state_22162[(2)]);var state_22162__$1 = state_22162;var statearr_22164_22232 = state_22162__$1;(statearr_22164_22232[(2)] = inst_22158);
(statearr_22164_22232[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (20)))
{var state_22162__$1 = state_22162;var statearr_22165_22233 = state_22162__$1;(statearr_22165_22233[(2)] = null);
(statearr_22165_22233[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (1)))
{var state_22162__$1 = state_22162;var statearr_22166_22234 = state_22162__$1;(statearr_22166_22234[(2)] = null);
(statearr_22166_22234[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (4)))
{var inst_22127 = (state_22162[(7)]);var inst_22127__$1 = (state_22162[(2)]);var inst_22128 = (inst_22127__$1 == null);var state_22162__$1 = (function (){var statearr_22167 = state_22162;(statearr_22167[(7)] = inst_22127__$1);
return statearr_22167;
})();if(cljs.core.truth_(inst_22128))
{var statearr_22168_22235 = state_22162__$1;(statearr_22168_22235[(1)] = (5));
} else
{var statearr_22169_22236 = state_22162__$1;(statearr_22169_22236[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (15)))
{var inst_22140 = (state_22162[(8)]);var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22162__$1,(18),to,inst_22140);
} else
{if((state_val_22163 === (21)))
{var inst_22153 = (state_22162[(2)]);var state_22162__$1 = state_22162;var statearr_22170_22237 = state_22162__$1;(statearr_22170_22237[(2)] = inst_22153);
(statearr_22170_22237[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (13)))
{var inst_22155 = (state_22162[(2)]);var state_22162__$1 = (function (){var statearr_22171 = state_22162;(statearr_22171[(9)] = inst_22155);
return statearr_22171;
})();var statearr_22172_22238 = state_22162__$1;(statearr_22172_22238[(2)] = null);
(statearr_22172_22238[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (6)))
{var inst_22127 = (state_22162[(7)]);var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22162__$1,(11),inst_22127);
} else
{if((state_val_22163 === (17)))
{var inst_22148 = (state_22162[(2)]);var state_22162__$1 = state_22162;if(cljs.core.truth_(inst_22148))
{var statearr_22173_22239 = state_22162__$1;(statearr_22173_22239[(1)] = (19));
} else
{var statearr_22174_22240 = state_22162__$1;(statearr_22174_22240[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (3)))
{var inst_22160 = (state_22162[(2)]);var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.return_chan(state_22162__$1,inst_22160);
} else
{if((state_val_22163 === (12)))
{var inst_22137 = (state_22162[(10)]);var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22162__$1,(14),inst_22137);
} else
{if((state_val_22163 === (2)))
{var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22162__$1,(4),results);
} else
{if((state_val_22163 === (19)))
{var state_22162__$1 = state_22162;var statearr_22175_22241 = state_22162__$1;(statearr_22175_22241[(2)] = null);
(statearr_22175_22241[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (11)))
{var inst_22137 = (state_22162[(2)]);var state_22162__$1 = (function (){var statearr_22176 = state_22162;(statearr_22176[(10)] = inst_22137);
return statearr_22176;
})();var statearr_22177_22242 = state_22162__$1;(statearr_22177_22242[(2)] = null);
(statearr_22177_22242[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (9)))
{var state_22162__$1 = state_22162;var statearr_22178_22243 = state_22162__$1;(statearr_22178_22243[(2)] = null);
(statearr_22178_22243[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (5)))
{var state_22162__$1 = state_22162;if(cljs.core.truth_(close_QMARK_))
{var statearr_22179_22244 = state_22162__$1;(statearr_22179_22244[(1)] = (8));
} else
{var statearr_22180_22245 = state_22162__$1;(statearr_22180_22245[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (14)))
{var inst_22140 = (state_22162[(8)]);var inst_22142 = (state_22162[(11)]);var inst_22140__$1 = (state_22162[(2)]);var inst_22141 = (inst_22140__$1 == null);var inst_22142__$1 = cljs.core.not(inst_22141);var state_22162__$1 = (function (){var statearr_22181 = state_22162;(statearr_22181[(8)] = inst_22140__$1);
(statearr_22181[(11)] = inst_22142__$1);
return statearr_22181;
})();if(inst_22142__$1)
{var statearr_22182_22246 = state_22162__$1;(statearr_22182_22246[(1)] = (15));
} else
{var statearr_22183_22247 = state_22162__$1;(statearr_22183_22247[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (16)))
{var inst_22142 = (state_22162[(11)]);var state_22162__$1 = state_22162;var statearr_22184_22248 = state_22162__$1;(statearr_22184_22248[(2)] = inst_22142);
(statearr_22184_22248[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (10)))
{var inst_22134 = (state_22162[(2)]);var state_22162__$1 = state_22162;var statearr_22185_22249 = state_22162__$1;(statearr_22185_22249[(2)] = inst_22134);
(statearr_22185_22249[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (18)))
{var inst_22145 = (state_22162[(2)]);var state_22162__$1 = state_22162;var statearr_22186_22250 = state_22162__$1;(statearr_22186_22250[(2)] = inst_22145);
(statearr_22186_22250[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22163 === (8)))
{var inst_22131 = cljs.core.async.close_BANG_(to);var state_22162__$1 = state_22162;var statearr_22187_22251 = state_22162__$1;(statearr_22187_22251[(2)] = inst_22131);
(statearr_22187_22251[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto__,jobs,results,process,async))
;return ((function (switch__6480__auto__,c__6495__auto__,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22191 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22191[(0)] = state_machine__6481__auto__);
(statearr_22191[(1)] = (1));
return statearr_22191;
});
var state_machine__6481__auto____1 = (function (state_22162){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22162);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22192){if((e22192 instanceof Object))
{var ex__6484__auto__ = e22192;var statearr_22193_22252 = state_22162;(statearr_22193_22252[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22162);
return cljs.core.constant$keyword$16;
} else
{throw e22192;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22253 = state_22162;
state_22162 = G__22253;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22162){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22194 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__,jobs,results,process,async))
);
return c__6495__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$23);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$24);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6495__auto___22376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22376,tc,fc){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22376,tc,fc){
return (function (state_22350){var state_val_22351 = (state_22350[(1)]);if((state_val_22351 === (7)))
{var inst_22346 = (state_22350[(2)]);var state_22350__$1 = state_22350;var statearr_22352_22377 = state_22350__$1;(statearr_22352_22377[(2)] = inst_22346);
(statearr_22352_22377[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (1)))
{var state_22350__$1 = state_22350;var statearr_22353_22378 = state_22350__$1;(statearr_22353_22378[(2)] = null);
(statearr_22353_22378[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (4)))
{var inst_22327 = (state_22350[(7)]);var inst_22327__$1 = (state_22350[(2)]);var inst_22328 = (inst_22327__$1 == null);var state_22350__$1 = (function (){var statearr_22354 = state_22350;(statearr_22354[(7)] = inst_22327__$1);
return statearr_22354;
})();if(cljs.core.truth_(inst_22328))
{var statearr_22355_22379 = state_22350__$1;(statearr_22355_22379[(1)] = (5));
} else
{var statearr_22356_22380 = state_22350__$1;(statearr_22356_22380[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (13)))
{var state_22350__$1 = state_22350;var statearr_22357_22381 = state_22350__$1;(statearr_22357_22381[(2)] = null);
(statearr_22357_22381[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (6)))
{var inst_22327 = (state_22350[(7)]);var inst_22333 = (function (){var G__22358 = inst_22327;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22358) : p.call(null,G__22358));
})();var state_22350__$1 = state_22350;if(cljs.core.truth_(inst_22333))
{var statearr_22359_22382 = state_22350__$1;(statearr_22359_22382[(1)] = (9));
} else
{var statearr_22360_22383 = state_22350__$1;(statearr_22360_22383[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (3)))
{var inst_22348 = (state_22350[(2)]);var state_22350__$1 = state_22350;return cljs.core.async.impl.ioc_helpers.return_chan(state_22350__$1,inst_22348);
} else
{if((state_val_22351 === (12)))
{var state_22350__$1 = state_22350;var statearr_22361_22384 = state_22350__$1;(statearr_22361_22384[(2)] = null);
(statearr_22361_22384[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (2)))
{var state_22350__$1 = state_22350;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22350__$1,(4),ch);
} else
{if((state_val_22351 === (11)))
{var inst_22327 = (state_22350[(7)]);var inst_22337 = (state_22350[(2)]);var state_22350__$1 = state_22350;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22350__$1,(8),inst_22337,inst_22327);
} else
{if((state_val_22351 === (9)))
{var state_22350__$1 = state_22350;var statearr_22362_22385 = state_22350__$1;(statearr_22362_22385[(2)] = tc);
(statearr_22362_22385[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (5)))
{var inst_22330 = cljs.core.async.close_BANG_(tc);var inst_22331 = cljs.core.async.close_BANG_(fc);var state_22350__$1 = (function (){var statearr_22363 = state_22350;(statearr_22363[(8)] = inst_22330);
return statearr_22363;
})();var statearr_22364_22386 = state_22350__$1;(statearr_22364_22386[(2)] = inst_22331);
(statearr_22364_22386[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (14)))
{var inst_22344 = (state_22350[(2)]);var state_22350__$1 = state_22350;var statearr_22365_22387 = state_22350__$1;(statearr_22365_22387[(2)] = inst_22344);
(statearr_22365_22387[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (10)))
{var state_22350__$1 = state_22350;var statearr_22366_22388 = state_22350__$1;(statearr_22366_22388[(2)] = fc);
(statearr_22366_22388[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22351 === (8)))
{var inst_22339 = (state_22350[(2)]);var state_22350__$1 = state_22350;if(cljs.core.truth_(inst_22339))
{var statearr_22367_22389 = state_22350__$1;(statearr_22367_22389[(1)] = (12));
} else
{var statearr_22368_22390 = state_22350__$1;(statearr_22368_22390[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___22376,tc,fc))
;return ((function (switch__6480__auto__,c__6495__auto___22376,tc,fc){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22372 = [null,null,null,null,null,null,null,null,null];(statearr_22372[(0)] = state_machine__6481__auto__);
(statearr_22372[(1)] = (1));
return statearr_22372;
});
var state_machine__6481__auto____1 = (function (state_22350){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22350);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22373){if((e22373 instanceof Object))
{var ex__6484__auto__ = e22373;var statearr_22374_22391 = state_22350;(statearr_22374_22391[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22350);
return cljs.core.constant$keyword$16;
} else
{throw e22373;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22392 = state_22350;
state_22350 = G__22392;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22350){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22376,tc,fc))
})();var state__6497__auto__ = (function (){var statearr_22375 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22376);
return statearr_22375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22376,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__){
return (function (state_22441){var state_val_22442 = (state_22441[(1)]);if((state_val_22442 === (7)))
{var inst_22437 = (state_22441[(2)]);var state_22441__$1 = state_22441;var statearr_22443_22461 = state_22441__$1;(statearr_22443_22461[(2)] = inst_22437);
(statearr_22443_22461[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22442 === (6)))
{var inst_22430 = (state_22441[(7)]);var inst_22427 = (state_22441[(8)]);var inst_22434 = (function (){var G__22444 = inst_22427;var G__22445 = inst_22430;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22444,G__22445) : f.call(null,G__22444,G__22445));
})();var inst_22427__$1 = inst_22434;var state_22441__$1 = (function (){var statearr_22446 = state_22441;(statearr_22446[(8)] = inst_22427__$1);
return statearr_22446;
})();var statearr_22447_22462 = state_22441__$1;(statearr_22447_22462[(2)] = null);
(statearr_22447_22462[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22442 === (5)))
{var inst_22427 = (state_22441[(8)]);var state_22441__$1 = state_22441;var statearr_22448_22463 = state_22441__$1;(statearr_22448_22463[(2)] = inst_22427);
(statearr_22448_22463[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22442 === (4)))
{var inst_22430 = (state_22441[(7)]);var inst_22430__$1 = (state_22441[(2)]);var inst_22431 = (inst_22430__$1 == null);var state_22441__$1 = (function (){var statearr_22449 = state_22441;(statearr_22449[(7)] = inst_22430__$1);
return statearr_22449;
})();if(cljs.core.truth_(inst_22431))
{var statearr_22450_22464 = state_22441__$1;(statearr_22450_22464[(1)] = (5));
} else
{var statearr_22451_22465 = state_22441__$1;(statearr_22451_22465[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22442 === (3)))
{var inst_22439 = (state_22441[(2)]);var state_22441__$1 = state_22441;return cljs.core.async.impl.ioc_helpers.return_chan(state_22441__$1,inst_22439);
} else
{if((state_val_22442 === (2)))
{var state_22441__$1 = state_22441;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22441__$1,(4),ch);
} else
{if((state_val_22442 === (1)))
{var inst_22427 = init;var state_22441__$1 = (function (){var statearr_22452 = state_22441;(statearr_22452[(8)] = inst_22427);
return statearr_22452;
})();var statearr_22453_22466 = state_22441__$1;(statearr_22453_22466[(2)] = null);
(statearr_22453_22466[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6495__auto__))
;return ((function (switch__6480__auto__,c__6495__auto__){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22457 = [null,null,null,null,null,null,null,null,null];(statearr_22457[(0)] = state_machine__6481__auto__);
(statearr_22457[(1)] = (1));
return statearr_22457;
});
var state_machine__6481__auto____1 = (function (state_22441){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22441);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22458){if((e22458 instanceof Object))
{var ex__6484__auto__ = e22458;var statearr_22459_22467 = state_22441;(statearr_22459_22467[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22441);
return cljs.core.constant$keyword$16;
} else
{throw e22458;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22468 = state_22441;
state_22441 = G__22468;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22441){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_22460 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__))
);
return c__6495__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__){
return (function (state_22545){var state_val_22546 = (state_22545[(1)]);if((state_val_22546 === (7)))
{var inst_22527 = (state_22545[(2)]);var state_22545__$1 = state_22545;var statearr_22547_22570 = state_22545__$1;(statearr_22547_22570[(2)] = inst_22527);
(statearr_22547_22570[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (1)))
{var inst_22521 = cljs.core.seq(coll);var inst_22522 = inst_22521;var state_22545__$1 = (function (){var statearr_22548 = state_22545;(statearr_22548[(7)] = inst_22522);
return statearr_22548;
})();var statearr_22549_22571 = state_22545__$1;(statearr_22549_22571[(2)] = null);
(statearr_22549_22571[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (4)))
{var inst_22522 = (state_22545[(7)]);var inst_22525 = cljs.core.first(inst_22522);var state_22545__$1 = state_22545;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22545__$1,(7),ch,inst_22525);
} else
{if((state_val_22546 === (13)))
{var inst_22539 = (state_22545[(2)]);var state_22545__$1 = state_22545;var statearr_22550_22572 = state_22545__$1;(statearr_22550_22572[(2)] = inst_22539);
(statearr_22550_22572[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (6)))
{var inst_22530 = (state_22545[(2)]);var state_22545__$1 = state_22545;if(cljs.core.truth_(inst_22530))
{var statearr_22551_22573 = state_22545__$1;(statearr_22551_22573[(1)] = (8));
} else
{var statearr_22552_22574 = state_22545__$1;(statearr_22552_22574[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (3)))
{var inst_22543 = (state_22545[(2)]);var state_22545__$1 = state_22545;return cljs.core.async.impl.ioc_helpers.return_chan(state_22545__$1,inst_22543);
} else
{if((state_val_22546 === (12)))
{var state_22545__$1 = state_22545;var statearr_22553_22575 = state_22545__$1;(statearr_22553_22575[(2)] = null);
(statearr_22553_22575[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (2)))
{var inst_22522 = (state_22545[(7)]);var state_22545__$1 = state_22545;if(cljs.core.truth_(inst_22522))
{var statearr_22554_22576 = state_22545__$1;(statearr_22554_22576[(1)] = (4));
} else
{var statearr_22555_22577 = state_22545__$1;(statearr_22555_22577[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (11)))
{var inst_22536 = cljs.core.async.close_BANG_(ch);var state_22545__$1 = state_22545;var statearr_22556_22578 = state_22545__$1;(statearr_22556_22578[(2)] = inst_22536);
(statearr_22556_22578[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (9)))
{var state_22545__$1 = state_22545;if(cljs.core.truth_(close_QMARK_))
{var statearr_22557_22579 = state_22545__$1;(statearr_22557_22579[(1)] = (11));
} else
{var statearr_22558_22580 = state_22545__$1;(statearr_22558_22580[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (5)))
{var inst_22522 = (state_22545[(7)]);var state_22545__$1 = state_22545;var statearr_22559_22581 = state_22545__$1;(statearr_22559_22581[(2)] = inst_22522);
(statearr_22559_22581[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (10)))
{var inst_22541 = (state_22545[(2)]);var state_22545__$1 = state_22545;var statearr_22560_22582 = state_22545__$1;(statearr_22560_22582[(2)] = inst_22541);
(statearr_22560_22582[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22546 === (8)))
{var inst_22522 = (state_22545[(7)]);var inst_22532 = cljs.core.next(inst_22522);var inst_22522__$1 = inst_22532;var state_22545__$1 = (function (){var statearr_22561 = state_22545;(statearr_22561[(7)] = inst_22522__$1);
return statearr_22561;
})();var statearr_22562_22583 = state_22545__$1;(statearr_22562_22583[(2)] = null);
(statearr_22562_22583[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto__))
;return ((function (switch__6480__auto__,c__6495__auto__){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22566 = [null,null,null,null,null,null,null,null];(statearr_22566[(0)] = state_machine__6481__auto__);
(statearr_22566[(1)] = (1));
return statearr_22566;
});
var state_machine__6481__auto____1 = (function (state_22545){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22545);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22567){if((e22567 instanceof Object))
{var ex__6484__auto__ = e22567;var statearr_22568_22584 = state_22545;(statearr_22568_22584[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22545);
return cljs.core.constant$keyword$16;
} else
{throw e22567;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22585 = state_22545;
state_22545 = G__22585;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22545){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_22569 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__))
);
return c__6495__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj22587 = {};return obj22587;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__22591 = x__4277__auto__;return goog.typeOf(G__22591);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22593 = {};return obj22593;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__22597 = x__4277__auto__;return goog.typeOf(G__22597);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__22601 = x__4277__auto__;return goog.typeOf(G__22601);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__22605 = x__4277__auto__;return goog.typeOf(G__22605);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__22835 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22835) : cljs.core.atom.call(null,G__22835));
})();var m = (function (){if(typeof cljs.core.async.t22836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22836 = (function (cs,ch,mult,meta22837){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22837 = meta22837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22836.cljs$lang$type = true;
cljs.core.async.t22836.cljs$lang$ctorStr = "cljs.core.async/t22836";
cljs.core.async.t22836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22836");
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__22839_23064 = self__.cs;var G__22840_23065 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22839_23064,G__22840_23065) : cljs.core.reset_BANG_.call(null,G__22839_23064,G__22840_23065));
return null;
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22838){var self__ = this;
var _22838__$1 = this;return self__.meta22837;
});})(cs))
;
cljs.core.async.t22836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22838,meta22837__$1){var self__ = this;
var _22838__$1 = this;return (new cljs.core.async.t22836(self__.cs,self__.ch,self__.mult,meta22837__$1));
});})(cs))
;
cljs.core.async.__GT_t22836 = ((function (cs){
return (function __GT_t22836(cs__$1,ch__$1,mult__$1,meta22837){return (new cljs.core.async.t22836(cs__$1,ch__$1,mult__$1,meta22837));
});})(cs))
;
}
return (new cljs.core.async.t22836(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__22841 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22841) : cljs.core.atom.call(null,G__22841));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6495__auto___23066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23066,cs,m,dchan,dctr,done){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23066,cs,m,dchan,dctr,done){
return (function (state_22972){var state_val_22973 = (state_22972[(1)]);if((state_val_22973 === (7)))
{var inst_22968 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_22974_23067 = state_22972__$1;(statearr_22974_23067[(2)] = inst_22968);
(statearr_22974_23067[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (20)))
{var inst_22873 = (state_22972[(7)]);var inst_22883 = cljs.core.first(inst_22873);var inst_22884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22883,(0),null);var inst_22885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22883,(1),null);var state_22972__$1 = (function (){var statearr_22975 = state_22972;(statearr_22975[(8)] = inst_22884);
return statearr_22975;
})();if(cljs.core.truth_(inst_22885))
{var statearr_22976_23068 = state_22972__$1;(statearr_22976_23068[(1)] = (22));
} else
{var statearr_22977_23069 = state_22972__$1;(statearr_22977_23069[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (27)))
{var inst_22915 = (state_22972[(9)]);var inst_22913 = (state_22972[(10)]);var inst_22844 = (state_22972[(11)]);var inst_22920 = (state_22972[(12)]);var inst_22920__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22913,inst_22915);var inst_22921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22920__$1,inst_22844,done);var state_22972__$1 = (function (){var statearr_22978 = state_22972;(statearr_22978[(12)] = inst_22920__$1);
return statearr_22978;
})();if(cljs.core.truth_(inst_22921))
{var statearr_22979_23070 = state_22972__$1;(statearr_22979_23070[(1)] = (30));
} else
{var statearr_22980_23071 = state_22972__$1;(statearr_22980_23071[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (1)))
{var state_22972__$1 = state_22972;var statearr_22981_23072 = state_22972__$1;(statearr_22981_23072[(2)] = null);
(statearr_22981_23072[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (24)))
{var inst_22873 = (state_22972[(7)]);var inst_22890 = (state_22972[(2)]);var inst_22891 = cljs.core.next(inst_22873);var inst_22853 = inst_22891;var inst_22854 = null;var inst_22855 = (0);var inst_22856 = (0);var state_22972__$1 = (function (){var statearr_22982 = state_22972;(statearr_22982[(13)] = inst_22853);
(statearr_22982[(14)] = inst_22856);
(statearr_22982[(15)] = inst_22855);
(statearr_22982[(16)] = inst_22890);
(statearr_22982[(17)] = inst_22854);
return statearr_22982;
})();var statearr_22983_23073 = state_22972__$1;(statearr_22983_23073[(2)] = null);
(statearr_22983_23073[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (39)))
{var state_22972__$1 = state_22972;var statearr_22987_23074 = state_22972__$1;(statearr_22987_23074[(2)] = null);
(statearr_22987_23074[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (4)))
{var inst_22844 = (state_22972[(11)]);var inst_22844__$1 = (state_22972[(2)]);var inst_22845 = (inst_22844__$1 == null);var state_22972__$1 = (function (){var statearr_22988 = state_22972;(statearr_22988[(11)] = inst_22844__$1);
return statearr_22988;
})();if(cljs.core.truth_(inst_22845))
{var statearr_22989_23075 = state_22972__$1;(statearr_22989_23075[(1)] = (5));
} else
{var statearr_22990_23076 = state_22972__$1;(statearr_22990_23076[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (15)))
{var inst_22853 = (state_22972[(13)]);var inst_22856 = (state_22972[(14)]);var inst_22855 = (state_22972[(15)]);var inst_22854 = (state_22972[(17)]);var inst_22869 = (state_22972[(2)]);var inst_22870 = (inst_22856 + (1));var tmp22984 = inst_22853;var tmp22985 = inst_22855;var tmp22986 = inst_22854;var inst_22853__$1 = tmp22984;var inst_22854__$1 = tmp22986;var inst_22855__$1 = tmp22985;var inst_22856__$1 = inst_22870;var state_22972__$1 = (function (){var statearr_22991 = state_22972;(statearr_22991[(13)] = inst_22853__$1);
(statearr_22991[(18)] = inst_22869);
(statearr_22991[(14)] = inst_22856__$1);
(statearr_22991[(15)] = inst_22855__$1);
(statearr_22991[(17)] = inst_22854__$1);
return statearr_22991;
})();var statearr_22992_23077 = state_22972__$1;(statearr_22992_23077[(2)] = null);
(statearr_22992_23077[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (21)))
{var inst_22894 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_22996_23078 = state_22972__$1;(statearr_22996_23078[(2)] = inst_22894);
(statearr_22996_23078[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (31)))
{var inst_22920 = (state_22972[(12)]);var inst_22924 = done(null);var inst_22925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22920);var state_22972__$1 = (function (){var statearr_22997 = state_22972;(statearr_22997[(19)] = inst_22924);
return statearr_22997;
})();var statearr_22998_23079 = state_22972__$1;(statearr_22998_23079[(2)] = inst_22925);
(statearr_22998_23079[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (32)))
{var inst_22912 = (state_22972[(20)]);var inst_22915 = (state_22972[(9)]);var inst_22913 = (state_22972[(10)]);var inst_22914 = (state_22972[(21)]);var inst_22927 = (state_22972[(2)]);var inst_22928 = (inst_22915 + (1));var tmp22993 = inst_22912;var tmp22994 = inst_22913;var tmp22995 = inst_22914;var inst_22912__$1 = tmp22993;var inst_22913__$1 = tmp22994;var inst_22914__$1 = tmp22995;var inst_22915__$1 = inst_22928;var state_22972__$1 = (function (){var statearr_22999 = state_22972;(statearr_22999[(20)] = inst_22912__$1);
(statearr_22999[(22)] = inst_22927);
(statearr_22999[(9)] = inst_22915__$1);
(statearr_22999[(10)] = inst_22913__$1);
(statearr_22999[(21)] = inst_22914__$1);
return statearr_22999;
})();var statearr_23000_23080 = state_22972__$1;(statearr_23000_23080[(2)] = null);
(statearr_23000_23080[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (40)))
{var inst_22940 = (state_22972[(23)]);var inst_22944 = done(null);var inst_22945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22940);var state_22972__$1 = (function (){var statearr_23001 = state_22972;(statearr_23001[(24)] = inst_22944);
return statearr_23001;
})();var statearr_23002_23081 = state_22972__$1;(statearr_23002_23081[(2)] = inst_22945);
(statearr_23002_23081[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (33)))
{var inst_22931 = (state_22972[(25)]);var inst_22933 = cljs.core.chunked_seq_QMARK_(inst_22931);var state_22972__$1 = state_22972;if(inst_22933)
{var statearr_23003_23082 = state_22972__$1;(statearr_23003_23082[(1)] = (36));
} else
{var statearr_23004_23083 = state_22972__$1;(statearr_23004_23083[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (13)))
{var inst_22863 = (state_22972[(26)]);var inst_22866 = cljs.core.async.close_BANG_(inst_22863);var state_22972__$1 = state_22972;var statearr_23005_23084 = state_22972__$1;(statearr_23005_23084[(2)] = inst_22866);
(statearr_23005_23084[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (22)))
{var inst_22884 = (state_22972[(8)]);var inst_22887 = cljs.core.async.close_BANG_(inst_22884);var state_22972__$1 = state_22972;var statearr_23006_23085 = state_22972__$1;(statearr_23006_23085[(2)] = inst_22887);
(statearr_23006_23085[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (36)))
{var inst_22931 = (state_22972[(25)]);var inst_22935 = cljs.core.chunk_first(inst_22931);var inst_22936 = cljs.core.chunk_rest(inst_22931);var inst_22937 = cljs.core.count(inst_22935);var inst_22912 = inst_22936;var inst_22913 = inst_22935;var inst_22914 = inst_22937;var inst_22915 = (0);var state_22972__$1 = (function (){var statearr_23007 = state_22972;(statearr_23007[(20)] = inst_22912);
(statearr_23007[(9)] = inst_22915);
(statearr_23007[(10)] = inst_22913);
(statearr_23007[(21)] = inst_22914);
return statearr_23007;
})();var statearr_23008_23086 = state_22972__$1;(statearr_23008_23086[(2)] = null);
(statearr_23008_23086[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (41)))
{var inst_22931 = (state_22972[(25)]);var inst_22947 = (state_22972[(2)]);var inst_22948 = cljs.core.next(inst_22931);var inst_22912 = inst_22948;var inst_22913 = null;var inst_22914 = (0);var inst_22915 = (0);var state_22972__$1 = (function (){var statearr_23009 = state_22972;(statearr_23009[(20)] = inst_22912);
(statearr_23009[(9)] = inst_22915);
(statearr_23009[(10)] = inst_22913);
(statearr_23009[(21)] = inst_22914);
(statearr_23009[(27)] = inst_22947);
return statearr_23009;
})();var statearr_23010_23087 = state_22972__$1;(statearr_23010_23087[(2)] = null);
(statearr_23010_23087[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (43)))
{var state_22972__$1 = state_22972;var statearr_23011_23088 = state_22972__$1;(statearr_23011_23088[(2)] = null);
(statearr_23011_23088[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (29)))
{var inst_22956 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23012_23089 = state_22972__$1;(statearr_23012_23089[(2)] = inst_22956);
(statearr_23012_23089[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (44)))
{var inst_22965 = (state_22972[(2)]);var state_22972__$1 = (function (){var statearr_23013 = state_22972;(statearr_23013[(28)] = inst_22965);
return statearr_23013;
})();var statearr_23014_23090 = state_22972__$1;(statearr_23014_23090[(2)] = null);
(statearr_23014_23090[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (6)))
{var inst_22904 = (state_22972[(29)]);var inst_22903 = (function (){var G__23015 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23015) : cljs.core.deref.call(null,G__23015));
})();var inst_22904__$1 = cljs.core.keys(inst_22903);var inst_22905 = cljs.core.count(inst_22904__$1);var inst_22906 = (function (){var G__23016 = dctr;var G__23017 = inst_22905;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23016,G__23017) : cljs.core.reset_BANG_.call(null,G__23016,G__23017));
})();var inst_22911 = cljs.core.seq(inst_22904__$1);var inst_22912 = inst_22911;var inst_22913 = null;var inst_22914 = (0);var inst_22915 = (0);var state_22972__$1 = (function (){var statearr_23018 = state_22972;(statearr_23018[(20)] = inst_22912);
(statearr_23018[(9)] = inst_22915);
(statearr_23018[(10)] = inst_22913);
(statearr_23018[(21)] = inst_22914);
(statearr_23018[(29)] = inst_22904__$1);
(statearr_23018[(30)] = inst_22906);
return statearr_23018;
})();var statearr_23019_23091 = state_22972__$1;(statearr_23019_23091[(2)] = null);
(statearr_23019_23091[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (28)))
{var inst_22912 = (state_22972[(20)]);var inst_22931 = (state_22972[(25)]);var inst_22931__$1 = cljs.core.seq(inst_22912);var state_22972__$1 = (function (){var statearr_23020 = state_22972;(statearr_23020[(25)] = inst_22931__$1);
return statearr_23020;
})();if(inst_22931__$1)
{var statearr_23021_23092 = state_22972__$1;(statearr_23021_23092[(1)] = (33));
} else
{var statearr_23022_23093 = state_22972__$1;(statearr_23022_23093[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (25)))
{var inst_22915 = (state_22972[(9)]);var inst_22914 = (state_22972[(21)]);var inst_22917 = (inst_22915 < inst_22914);var inst_22918 = inst_22917;var state_22972__$1 = state_22972;if(cljs.core.truth_(inst_22918))
{var statearr_23023_23094 = state_22972__$1;(statearr_23023_23094[(1)] = (27));
} else
{var statearr_23024_23095 = state_22972__$1;(statearr_23024_23095[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (34)))
{var state_22972__$1 = state_22972;var statearr_23025_23096 = state_22972__$1;(statearr_23025_23096[(2)] = null);
(statearr_23025_23096[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (17)))
{var state_22972__$1 = state_22972;var statearr_23026_23097 = state_22972__$1;(statearr_23026_23097[(2)] = null);
(statearr_23026_23097[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (3)))
{var inst_22970 = (state_22972[(2)]);var state_22972__$1 = state_22972;return cljs.core.async.impl.ioc_helpers.return_chan(state_22972__$1,inst_22970);
} else
{if((state_val_22973 === (12)))
{var inst_22899 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23027_23098 = state_22972__$1;(statearr_23027_23098[(2)] = inst_22899);
(statearr_23027_23098[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (2)))
{var state_22972__$1 = state_22972;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22972__$1,(4),ch);
} else
{if((state_val_22973 === (23)))
{var state_22972__$1 = state_22972;var statearr_23028_23099 = state_22972__$1;(statearr_23028_23099[(2)] = null);
(statearr_23028_23099[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (35)))
{var inst_22954 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23029_23100 = state_22972__$1;(statearr_23029_23100[(2)] = inst_22954);
(statearr_23029_23100[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (19)))
{var inst_22873 = (state_22972[(7)]);var inst_22877 = cljs.core.chunk_first(inst_22873);var inst_22878 = cljs.core.chunk_rest(inst_22873);var inst_22879 = cljs.core.count(inst_22877);var inst_22853 = inst_22878;var inst_22854 = inst_22877;var inst_22855 = inst_22879;var inst_22856 = (0);var state_22972__$1 = (function (){var statearr_23030 = state_22972;(statearr_23030[(13)] = inst_22853);
(statearr_23030[(14)] = inst_22856);
(statearr_23030[(15)] = inst_22855);
(statearr_23030[(17)] = inst_22854);
return statearr_23030;
})();var statearr_23031_23101 = state_22972__$1;(statearr_23031_23101[(2)] = null);
(statearr_23031_23101[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (11)))
{var inst_22853 = (state_22972[(13)]);var inst_22873 = (state_22972[(7)]);var inst_22873__$1 = cljs.core.seq(inst_22853);var state_22972__$1 = (function (){var statearr_23032 = state_22972;(statearr_23032[(7)] = inst_22873__$1);
return statearr_23032;
})();if(inst_22873__$1)
{var statearr_23033_23102 = state_22972__$1;(statearr_23033_23102[(1)] = (16));
} else
{var statearr_23034_23103 = state_22972__$1;(statearr_23034_23103[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (9)))
{var inst_22901 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23035_23104 = state_22972__$1;(statearr_23035_23104[(2)] = inst_22901);
(statearr_23035_23104[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (5)))
{var inst_22851 = (function (){var G__23036 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23036) : cljs.core.deref.call(null,G__23036));
})();var inst_22852 = cljs.core.seq(inst_22851);var inst_22853 = inst_22852;var inst_22854 = null;var inst_22855 = (0);var inst_22856 = (0);var state_22972__$1 = (function (){var statearr_23037 = state_22972;(statearr_23037[(13)] = inst_22853);
(statearr_23037[(14)] = inst_22856);
(statearr_23037[(15)] = inst_22855);
(statearr_23037[(17)] = inst_22854);
return statearr_23037;
})();var statearr_23038_23105 = state_22972__$1;(statearr_23038_23105[(2)] = null);
(statearr_23038_23105[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (14)))
{var state_22972__$1 = state_22972;var statearr_23039_23106 = state_22972__$1;(statearr_23039_23106[(2)] = null);
(statearr_23039_23106[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (45)))
{var inst_22962 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23040_23107 = state_22972__$1;(statearr_23040_23107[(2)] = inst_22962);
(statearr_23040_23107[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (26)))
{var inst_22904 = (state_22972[(29)]);var inst_22958 = (state_22972[(2)]);var inst_22959 = cljs.core.seq(inst_22904);var state_22972__$1 = (function (){var statearr_23041 = state_22972;(statearr_23041[(31)] = inst_22958);
return statearr_23041;
})();if(inst_22959)
{var statearr_23042_23108 = state_22972__$1;(statearr_23042_23108[(1)] = (42));
} else
{var statearr_23043_23109 = state_22972__$1;(statearr_23043_23109[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (16)))
{var inst_22873 = (state_22972[(7)]);var inst_22875 = cljs.core.chunked_seq_QMARK_(inst_22873);var state_22972__$1 = state_22972;if(inst_22875)
{var statearr_23044_23110 = state_22972__$1;(statearr_23044_23110[(1)] = (19));
} else
{var statearr_23045_23111 = state_22972__$1;(statearr_23045_23111[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (38)))
{var inst_22951 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23046_23112 = state_22972__$1;(statearr_23046_23112[(2)] = inst_22951);
(statearr_23046_23112[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (30)))
{var state_22972__$1 = state_22972;var statearr_23047_23113 = state_22972__$1;(statearr_23047_23113[(2)] = null);
(statearr_23047_23113[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (10)))
{var inst_22856 = (state_22972[(14)]);var inst_22854 = (state_22972[(17)]);var inst_22862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22854,inst_22856);var inst_22863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22862,(0),null);var inst_22864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22862,(1),null);var state_22972__$1 = (function (){var statearr_23048 = state_22972;(statearr_23048[(26)] = inst_22863);
return statearr_23048;
})();if(cljs.core.truth_(inst_22864))
{var statearr_23049_23114 = state_22972__$1;(statearr_23049_23114[(1)] = (13));
} else
{var statearr_23050_23115 = state_22972__$1;(statearr_23050_23115[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (18)))
{var inst_22897 = (state_22972[(2)]);var state_22972__$1 = state_22972;var statearr_23051_23116 = state_22972__$1;(statearr_23051_23116[(2)] = inst_22897);
(statearr_23051_23116[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (42)))
{var state_22972__$1 = state_22972;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22972__$1,(45),dchan);
} else
{if((state_val_22973 === (37)))
{var inst_22931 = (state_22972[(25)]);var inst_22940 = (state_22972[(23)]);var inst_22844 = (state_22972[(11)]);var inst_22940__$1 = cljs.core.first(inst_22931);var inst_22941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22940__$1,inst_22844,done);var state_22972__$1 = (function (){var statearr_23052 = state_22972;(statearr_23052[(23)] = inst_22940__$1);
return statearr_23052;
})();if(cljs.core.truth_(inst_22941))
{var statearr_23053_23117 = state_22972__$1;(statearr_23053_23117[(1)] = (39));
} else
{var statearr_23054_23118 = state_22972__$1;(statearr_23054_23118[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22973 === (8)))
{var inst_22856 = (state_22972[(14)]);var inst_22855 = (state_22972[(15)]);var inst_22858 = (inst_22856 < inst_22855);var inst_22859 = inst_22858;var state_22972__$1 = state_22972;if(cljs.core.truth_(inst_22859))
{var statearr_23055_23119 = state_22972__$1;(statearr_23055_23119[(1)] = (10));
} else
{var statearr_23056_23120 = state_22972__$1;(statearr_23056_23120[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___23066,cs,m,dchan,dctr,done))
;return ((function (switch__6480__auto__,c__6495__auto___23066,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23060[(0)] = state_machine__6481__auto__);
(statearr_23060[(1)] = (1));
return statearr_23060;
});
var state_machine__6481__auto____1 = (function (state_22972){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22972);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23061){if((e23061 instanceof Object))
{var ex__6484__auto__ = e23061;var statearr_23062_23121 = state_22972;(statearr_23062_23121[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22972);
return cljs.core.constant$keyword$16;
} else
{throw e23061;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23122 = state_22972;
state_22972 = G__23122;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22972){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23066,cs,m,dchan,dctr,done))
})();var state__6497__auto__ = (function (){var statearr_23063 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23066);
return statearr_23063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23066,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj23127 = {};return obj23127;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23131 = x__4277__auto__;return goog.typeOf(G__23131);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23135 = x__4277__auto__;return goog.typeOf(G__23135);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23139 = x__4277__auto__;return goog.typeOf(G__23139);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23143 = x__4277__auto__;return goog.typeOf(G__23143);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23147 = x__4277__auto__;return goog.typeOf(G__23147);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23148){var map__23154 = p__23148;var map__23154__$1 = ((cljs.core.seq_QMARK_(map__23154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23154):map__23154);var opts = map__23154__$1;var statearr_23155_23159 = state;(statearr_23155_23159[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4219__auto__ = cljs.core.async.do_alts(((function (map__23154,map__23154__$1,opts){
return (function (val){var statearr_23156_23160 = state;(statearr_23156_23160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23154,map__23154__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4219__auto__))
{var cb = temp__4219__auto__;var statearr_23157_23161 = state;(statearr_23157_23161[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23158 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23158) : cljs.core.deref.call(null,G__23158));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23148 = null;if (arguments.length > 3) {
  p__23148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23148);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23162){
var state = cljs.core.first(arglist__23162);
arglist__23162 = cljs.core.next(arglist__23162);
var cont_block = cljs.core.first(arglist__23162);
arglist__23162 = cljs.core.next(arglist__23162);
var ports = cljs.core.first(arglist__23162);
var p__23148 = cljs.core.rest(arglist__23162);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23148);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__23296 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23296) : cljs.core.atom.call(null,G__23296));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__23297 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23297) : cljs.core.atom.call(null,G__23297));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__23298 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23298) : attr.call(null,G__23298));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__23299 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23299) : cljs.core.deref.call(null,G__23299));
})();var mode = (function (){var G__23300 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23300) : cljs.core.deref.call(null,G__23300));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23301 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23302){
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
this.meta23302 = meta23302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23301.cljs$lang$type = true;
cljs.core.async.t23301.cljs$lang$ctorStr = "cljs.core.async/t23301";
cljs.core.async.t23301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__23304_23429 = self__.cs;var G__23305_23430 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23304_23429,G__23305_23430) : cljs.core.reset_BANG_.call(null,G__23304_23429,G__23305_23430));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23306 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23306) : self__.solo_modes.call(null,G__23306));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__23307_23431 = self__.solo_mode;var G__23308_23432 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23307_23431,G__23308_23432) : cljs.core.reset_BANG_.call(null,G__23307_23431,G__23308_23432));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23303){var self__ = this;
var _23303__$1 = this;return self__.meta23302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23303,meta23302__$1){var self__ = this;
var _23303__$1 = this;return (new cljs.core.async.t23301(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23302){return (new cljs.core.async.t23301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23301(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6495__auto___23433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23380){var state_val_23381 = (state_23380[(1)]);if((state_val_23381 === (7)))
{var inst_23322 = (state_23380[(7)]);var inst_23327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23322);var state_23380__$1 = state_23380;var statearr_23382_23434 = state_23380__$1;(statearr_23382_23434[(2)] = inst_23327);
(statearr_23382_23434[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (20)))
{var inst_23337 = (state_23380[(8)]);var state_23380__$1 = state_23380;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23380__$1,(23),out,inst_23337);
} else
{if((state_val_23381 === (1)))
{var inst_23312 = (state_23380[(9)]);var inst_23312__$1 = calc_state();var inst_23313 = cljs.core.seq_QMARK_(inst_23312__$1);var state_23380__$1 = (function (){var statearr_23383 = state_23380;(statearr_23383[(9)] = inst_23312__$1);
return statearr_23383;
})();if(inst_23313)
{var statearr_23384_23435 = state_23380__$1;(statearr_23384_23435[(1)] = (2));
} else
{var statearr_23385_23436 = state_23380__$1;(statearr_23385_23436[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (24)))
{var inst_23330 = (state_23380[(10)]);var inst_23322 = inst_23330;var state_23380__$1 = (function (){var statearr_23386 = state_23380;(statearr_23386[(7)] = inst_23322);
return statearr_23386;
})();var statearr_23387_23437 = state_23380__$1;(statearr_23387_23437[(2)] = null);
(statearr_23387_23437[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (4)))
{var inst_23312 = (state_23380[(9)]);var inst_23318 = (state_23380[(2)]);var inst_23319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23318,cljs.core.constant$keyword$30);var inst_23320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23318,cljs.core.constant$keyword$29);var inst_23321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23318,cljs.core.constant$keyword$28);var inst_23322 = inst_23312;var state_23380__$1 = (function (){var statearr_23388 = state_23380;(statearr_23388[(11)] = inst_23320);
(statearr_23388[(7)] = inst_23322);
(statearr_23388[(12)] = inst_23321);
(statearr_23388[(13)] = inst_23319);
return statearr_23388;
})();var statearr_23389_23438 = state_23380__$1;(statearr_23389_23438[(2)] = null);
(statearr_23389_23438[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (15)))
{var state_23380__$1 = state_23380;var statearr_23390_23439 = state_23380__$1;(statearr_23390_23439[(2)] = null);
(statearr_23390_23439[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (21)))
{var inst_23330 = (state_23380[(10)]);var inst_23322 = inst_23330;var state_23380__$1 = (function (){var statearr_23391 = state_23380;(statearr_23391[(7)] = inst_23322);
return statearr_23391;
})();var statearr_23392_23440 = state_23380__$1;(statearr_23392_23440[(2)] = null);
(statearr_23392_23440[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (13)))
{var inst_23376 = (state_23380[(2)]);var state_23380__$1 = state_23380;var statearr_23393_23441 = state_23380__$1;(statearr_23393_23441[(2)] = inst_23376);
(statearr_23393_23441[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (22)))
{var inst_23374 = (state_23380[(2)]);var state_23380__$1 = state_23380;var statearr_23394_23442 = state_23380__$1;(statearr_23394_23442[(2)] = inst_23374);
(statearr_23394_23442[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (6)))
{var inst_23378 = (state_23380[(2)]);var state_23380__$1 = state_23380;return cljs.core.async.impl.ioc_helpers.return_chan(state_23380__$1,inst_23378);
} else
{if((state_val_23381 === (25)))
{var state_23380__$1 = state_23380;var statearr_23395_23443 = state_23380__$1;(statearr_23395_23443[(2)] = null);
(statearr_23395_23443[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (17)))
{var inst_23353 = (state_23380[(14)]);var state_23380__$1 = state_23380;var statearr_23396_23444 = state_23380__$1;(statearr_23396_23444[(2)] = inst_23353);
(statearr_23396_23444[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (3)))
{var inst_23312 = (state_23380[(9)]);var state_23380__$1 = state_23380;var statearr_23397_23445 = state_23380__$1;(statearr_23397_23445[(2)] = inst_23312);
(statearr_23397_23445[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (12)))
{var inst_23353 = (state_23380[(14)]);var inst_23338 = (state_23380[(15)]);var inst_23333 = (state_23380[(16)]);var inst_23353__$1 = (function (){var G__23398 = inst_23338;return (inst_23333.cljs$core$IFn$_invoke$arity$1 ? inst_23333.cljs$core$IFn$_invoke$arity$1(G__23398) : inst_23333.call(null,G__23398));
})();var state_23380__$1 = (function (){var statearr_23399 = state_23380;(statearr_23399[(14)] = inst_23353__$1);
return statearr_23399;
})();if(cljs.core.truth_(inst_23353__$1))
{var statearr_23400_23446 = state_23380__$1;(statearr_23400_23446[(1)] = (17));
} else
{var statearr_23401_23447 = state_23380__$1;(statearr_23401_23447[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (2)))
{var inst_23312 = (state_23380[(9)]);var inst_23315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23312);var state_23380__$1 = state_23380;var statearr_23402_23448 = state_23380__$1;(statearr_23402_23448[(2)] = inst_23315);
(statearr_23402_23448[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (23)))
{var inst_23365 = (state_23380[(2)]);var state_23380__$1 = state_23380;if(cljs.core.truth_(inst_23365))
{var statearr_23403_23449 = state_23380__$1;(statearr_23403_23449[(1)] = (24));
} else
{var statearr_23404_23450 = state_23380__$1;(statearr_23404_23450[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (19)))
{var inst_23362 = (state_23380[(2)]);var state_23380__$1 = state_23380;if(cljs.core.truth_(inst_23362))
{var statearr_23405_23451 = state_23380__$1;(statearr_23405_23451[(1)] = (20));
} else
{var statearr_23406_23452 = state_23380__$1;(statearr_23406_23452[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (11)))
{var inst_23337 = (state_23380[(8)]);var inst_23343 = (inst_23337 == null);var state_23380__$1 = state_23380;if(cljs.core.truth_(inst_23343))
{var statearr_23407_23453 = state_23380__$1;(statearr_23407_23453[(1)] = (14));
} else
{var statearr_23408_23454 = state_23380__$1;(statearr_23408_23454[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (9)))
{var inst_23330 = (state_23380[(10)]);var inst_23330__$1 = (state_23380[(2)]);var inst_23331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23330__$1,cljs.core.constant$keyword$30);var inst_23332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23330__$1,cljs.core.constant$keyword$29);var inst_23333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23330__$1,cljs.core.constant$keyword$28);var state_23380__$1 = (function (){var statearr_23409 = state_23380;(statearr_23409[(10)] = inst_23330__$1);
(statearr_23409[(17)] = inst_23332);
(statearr_23409[(16)] = inst_23333);
return statearr_23409;
})();return cljs.core.async.ioc_alts_BANG_(state_23380__$1,(10),inst_23331);
} else
{if((state_val_23381 === (5)))
{var inst_23322 = (state_23380[(7)]);var inst_23325 = cljs.core.seq_QMARK_(inst_23322);var state_23380__$1 = state_23380;if(inst_23325)
{var statearr_23410_23455 = state_23380__$1;(statearr_23410_23455[(1)] = (7));
} else
{var statearr_23411_23456 = state_23380__$1;(statearr_23411_23456[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (14)))
{var inst_23338 = (state_23380[(15)]);var inst_23345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23338);var state_23380__$1 = state_23380;var statearr_23412_23457 = state_23380__$1;(statearr_23412_23457[(2)] = inst_23345);
(statearr_23412_23457[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (26)))
{var inst_23370 = (state_23380[(2)]);var state_23380__$1 = state_23380;var statearr_23413_23458 = state_23380__$1;(statearr_23413_23458[(2)] = inst_23370);
(statearr_23413_23458[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (16)))
{var inst_23348 = (state_23380[(2)]);var inst_23349 = calc_state();var inst_23322 = inst_23349;var state_23380__$1 = (function (){var statearr_23414 = state_23380;(statearr_23414[(7)] = inst_23322);
(statearr_23414[(18)] = inst_23348);
return statearr_23414;
})();var statearr_23415_23459 = state_23380__$1;(statearr_23415_23459[(2)] = null);
(statearr_23415_23459[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (10)))
{var inst_23337 = (state_23380[(8)]);var inst_23338 = (state_23380[(15)]);var inst_23336 = (state_23380[(2)]);var inst_23337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23336,(0),null);var inst_23338__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23336,(1),null);var inst_23339 = (inst_23337__$1 == null);var inst_23340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23338__$1,change);var inst_23341 = (inst_23339) || (inst_23340);var state_23380__$1 = (function (){var statearr_23416 = state_23380;(statearr_23416[(8)] = inst_23337__$1);
(statearr_23416[(15)] = inst_23338__$1);
return statearr_23416;
})();if(cljs.core.truth_(inst_23341))
{var statearr_23417_23460 = state_23380__$1;(statearr_23417_23460[(1)] = (11));
} else
{var statearr_23418_23461 = state_23380__$1;(statearr_23418_23461[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (18)))
{var inst_23332 = (state_23380[(17)]);var inst_23338 = (state_23380[(15)]);var inst_23333 = (state_23380[(16)]);var inst_23357 = cljs.core.empty_QMARK_(inst_23333);var inst_23358 = (function (){var G__23419 = inst_23338;return (inst_23332.cljs$core$IFn$_invoke$arity$1 ? inst_23332.cljs$core$IFn$_invoke$arity$1(G__23419) : inst_23332.call(null,G__23419));
})();var inst_23359 = cljs.core.not(inst_23358);var inst_23360 = (inst_23357) && (inst_23359);var state_23380__$1 = state_23380;var statearr_23420_23462 = state_23380__$1;(statearr_23420_23462[(2)] = inst_23360);
(statearr_23420_23462[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23381 === (8)))
{var inst_23322 = (state_23380[(7)]);var state_23380__$1 = state_23380;var statearr_23421_23463 = state_23380__$1;(statearr_23421_23463[(2)] = inst_23322);
(statearr_23421_23463[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6480__auto__,c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23425[(0)] = state_machine__6481__auto__);
(statearr_23425[(1)] = (1));
return statearr_23425;
});
var state_machine__6481__auto____1 = (function (state_23380){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23380);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23426){if((e23426 instanceof Object))
{var ex__6484__auto__ = e23426;var statearr_23427_23464 = state_23380;(statearr_23427_23464[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23380);
return cljs.core.constant$keyword$16;
} else
{throw e23426;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23465 = state_23380;
state_23380 = G__23465;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23380){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6497__auto__ = (function (){var statearr_23428 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23433);
return statearr_23428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23433,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj23467 = {};return obj23467;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23471 = x__4277__auto__;return goog.typeOf(G__23471);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23475 = x__4277__auto__;return goog.typeOf(G__23475);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23481 = x__4277__auto__;return goog.typeOf(G__23481);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23483 = x__4277__auto__;return goog.typeOf(G__23483);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__23622 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23622) : cljs.core.atom.call(null,G__23622));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23624 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23624) : cljs.core.deref.call(null,G__23624));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__23484_SHARP_){if(cljs.core.truth_((function (){var G__23625 = topic;return (p1__23484_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23484_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23625) : p1__23484_SHARP_.call(null,G__23625));
})()))
{return p1__23484_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23484_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__23626 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__23626) : buf_fn.call(null,G__23626));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23627 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23628){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23628 = meta23628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23627.cljs$lang$type = true;
cljs.core.async.t23627.cljs$lang$ctorStr = "cljs.core.async/t23627";
cljs.core.async.t23627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23627");
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__23630 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__23630) : self__.ensure_mult.call(null,G__23630));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23631 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23631) : cljs.core.deref.call(null,G__23631));
})(),topic);if(cljs.core.truth_(temp__4219__auto__))
{var m = temp__4219__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__23632 = self__.mults;var G__23633 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23632,G__23633) : cljs.core.reset_BANG_.call(null,G__23632,G__23633));
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23629){var self__ = this;
var _23629__$1 = this;return self__.meta23628;
});})(mults,ensure_mult))
;
cljs.core.async.t23627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23629,meta23628__$1){var self__ = this;
var _23629__$1 = this;return (new cljs.core.async.t23627(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23628__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23627 = ((function (mults,ensure_mult){
return (function __GT_t23627(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23628){return (new cljs.core.async.t23627(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23628));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23627(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6495__auto___23756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23756,mults,ensure_mult,p){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23756,mults,ensure_mult,p){
return (function (state_23705){var state_val_23706 = (state_23705[(1)]);if((state_val_23706 === (7)))
{var inst_23701 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23707_23757 = state_23705__$1;(statearr_23707_23757[(2)] = inst_23701);
(statearr_23707_23757[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (20)))
{var state_23705__$1 = state_23705;var statearr_23708_23758 = state_23705__$1;(statearr_23708_23758[(2)] = null);
(statearr_23708_23758[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (1)))
{var state_23705__$1 = state_23705;var statearr_23709_23759 = state_23705__$1;(statearr_23709_23759[(2)] = null);
(statearr_23709_23759[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (24)))
{var inst_23684 = (state_23705[(7)]);var inst_23693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23684);var state_23705__$1 = state_23705;var statearr_23710_23760 = state_23705__$1;(statearr_23710_23760[(2)] = inst_23693);
(statearr_23710_23760[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (4)))
{var inst_23636 = (state_23705[(8)]);var inst_23636__$1 = (state_23705[(2)]);var inst_23637 = (inst_23636__$1 == null);var state_23705__$1 = (function (){var statearr_23711 = state_23705;(statearr_23711[(8)] = inst_23636__$1);
return statearr_23711;
})();if(cljs.core.truth_(inst_23637))
{var statearr_23712_23761 = state_23705__$1;(statearr_23712_23761[(1)] = (5));
} else
{var statearr_23713_23762 = state_23705__$1;(statearr_23713_23762[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (15)))
{var inst_23678 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23714_23763 = state_23705__$1;(statearr_23714_23763[(2)] = inst_23678);
(statearr_23714_23763[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (21)))
{var inst_23698 = (state_23705[(2)]);var state_23705__$1 = (function (){var statearr_23715 = state_23705;(statearr_23715[(9)] = inst_23698);
return statearr_23715;
})();var statearr_23716_23764 = state_23705__$1;(statearr_23716_23764[(2)] = null);
(statearr_23716_23764[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (13)))
{var inst_23660 = (state_23705[(10)]);var inst_23662 = cljs.core.chunked_seq_QMARK_(inst_23660);var state_23705__$1 = state_23705;if(inst_23662)
{var statearr_23717_23765 = state_23705__$1;(statearr_23717_23765[(1)] = (16));
} else
{var statearr_23718_23766 = state_23705__$1;(statearr_23718_23766[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (22)))
{var inst_23690 = (state_23705[(2)]);var state_23705__$1 = state_23705;if(cljs.core.truth_(inst_23690))
{var statearr_23719_23767 = state_23705__$1;(statearr_23719_23767[(1)] = (23));
} else
{var statearr_23720_23768 = state_23705__$1;(statearr_23720_23768[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (6)))
{var inst_23684 = (state_23705[(7)]);var inst_23636 = (state_23705[(8)]);var inst_23686 = (state_23705[(11)]);var inst_23684__$1 = (function (){var G__23721 = inst_23636;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23721) : topic_fn.call(null,G__23721));
})();var inst_23685 = (function (){var G__23722 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23722) : cljs.core.deref.call(null,G__23722));
})();var inst_23686__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23685,inst_23684__$1);var state_23705__$1 = (function (){var statearr_23723 = state_23705;(statearr_23723[(7)] = inst_23684__$1);
(statearr_23723[(11)] = inst_23686__$1);
return statearr_23723;
})();if(cljs.core.truth_(inst_23686__$1))
{var statearr_23724_23769 = state_23705__$1;(statearr_23724_23769[(1)] = (19));
} else
{var statearr_23725_23770 = state_23705__$1;(statearr_23725_23770[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (25)))
{var inst_23695 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23726_23771 = state_23705__$1;(statearr_23726_23771[(2)] = inst_23695);
(statearr_23726_23771[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (17)))
{var inst_23660 = (state_23705[(10)]);var inst_23669 = cljs.core.first(inst_23660);var inst_23670 = cljs.core.async.muxch_STAR_(inst_23669);var inst_23671 = cljs.core.async.close_BANG_(inst_23670);var inst_23672 = cljs.core.next(inst_23660);var inst_23646 = inst_23672;var inst_23647 = null;var inst_23648 = (0);var inst_23649 = (0);var state_23705__$1 = (function (){var statearr_23727 = state_23705;(statearr_23727[(12)] = inst_23647);
(statearr_23727[(13)] = inst_23646);
(statearr_23727[(14)] = inst_23649);
(statearr_23727[(15)] = inst_23671);
(statearr_23727[(16)] = inst_23648);
return statearr_23727;
})();var statearr_23728_23772 = state_23705__$1;(statearr_23728_23772[(2)] = null);
(statearr_23728_23772[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (3)))
{var inst_23703 = (state_23705[(2)]);var state_23705__$1 = state_23705;return cljs.core.async.impl.ioc_helpers.return_chan(state_23705__$1,inst_23703);
} else
{if((state_val_23706 === (12)))
{var inst_23680 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23729_23773 = state_23705__$1;(statearr_23729_23773[(2)] = inst_23680);
(statearr_23729_23773[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (2)))
{var state_23705__$1 = state_23705;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23705__$1,(4),ch);
} else
{if((state_val_23706 === (23)))
{var state_23705__$1 = state_23705;var statearr_23730_23774 = state_23705__$1;(statearr_23730_23774[(2)] = null);
(statearr_23730_23774[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (19)))
{var inst_23636 = (state_23705[(8)]);var inst_23686 = (state_23705[(11)]);var inst_23688 = cljs.core.async.muxch_STAR_(inst_23686);var state_23705__$1 = state_23705;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23705__$1,(22),inst_23688,inst_23636);
} else
{if((state_val_23706 === (11)))
{var inst_23646 = (state_23705[(13)]);var inst_23660 = (state_23705[(10)]);var inst_23660__$1 = cljs.core.seq(inst_23646);var state_23705__$1 = (function (){var statearr_23731 = state_23705;(statearr_23731[(10)] = inst_23660__$1);
return statearr_23731;
})();if(inst_23660__$1)
{var statearr_23732_23775 = state_23705__$1;(statearr_23732_23775[(1)] = (13));
} else
{var statearr_23733_23776 = state_23705__$1;(statearr_23733_23776[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (9)))
{var inst_23682 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23734_23777 = state_23705__$1;(statearr_23734_23777[(2)] = inst_23682);
(statearr_23734_23777[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (5)))
{var inst_23643 = (function (){var G__23735 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23735) : cljs.core.deref.call(null,G__23735));
})();var inst_23644 = cljs.core.vals(inst_23643);var inst_23645 = cljs.core.seq(inst_23644);var inst_23646 = inst_23645;var inst_23647 = null;var inst_23648 = (0);var inst_23649 = (0);var state_23705__$1 = (function (){var statearr_23736 = state_23705;(statearr_23736[(12)] = inst_23647);
(statearr_23736[(13)] = inst_23646);
(statearr_23736[(14)] = inst_23649);
(statearr_23736[(16)] = inst_23648);
return statearr_23736;
})();var statearr_23737_23778 = state_23705__$1;(statearr_23737_23778[(2)] = null);
(statearr_23737_23778[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (14)))
{var state_23705__$1 = state_23705;var statearr_23741_23779 = state_23705__$1;(statearr_23741_23779[(2)] = null);
(statearr_23741_23779[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (16)))
{var inst_23660 = (state_23705[(10)]);var inst_23664 = cljs.core.chunk_first(inst_23660);var inst_23665 = cljs.core.chunk_rest(inst_23660);var inst_23666 = cljs.core.count(inst_23664);var inst_23646 = inst_23665;var inst_23647 = inst_23664;var inst_23648 = inst_23666;var inst_23649 = (0);var state_23705__$1 = (function (){var statearr_23742 = state_23705;(statearr_23742[(12)] = inst_23647);
(statearr_23742[(13)] = inst_23646);
(statearr_23742[(14)] = inst_23649);
(statearr_23742[(16)] = inst_23648);
return statearr_23742;
})();var statearr_23743_23780 = state_23705__$1;(statearr_23743_23780[(2)] = null);
(statearr_23743_23780[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (10)))
{var inst_23647 = (state_23705[(12)]);var inst_23646 = (state_23705[(13)]);var inst_23649 = (state_23705[(14)]);var inst_23648 = (state_23705[(16)]);var inst_23654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23647,inst_23649);var inst_23655 = cljs.core.async.muxch_STAR_(inst_23654);var inst_23656 = cljs.core.async.close_BANG_(inst_23655);var inst_23657 = (inst_23649 + (1));var tmp23738 = inst_23647;var tmp23739 = inst_23646;var tmp23740 = inst_23648;var inst_23646__$1 = tmp23739;var inst_23647__$1 = tmp23738;var inst_23648__$1 = tmp23740;var inst_23649__$1 = inst_23657;var state_23705__$1 = (function (){var statearr_23744 = state_23705;(statearr_23744[(12)] = inst_23647__$1);
(statearr_23744[(17)] = inst_23656);
(statearr_23744[(13)] = inst_23646__$1);
(statearr_23744[(14)] = inst_23649__$1);
(statearr_23744[(16)] = inst_23648__$1);
return statearr_23744;
})();var statearr_23745_23781 = state_23705__$1;(statearr_23745_23781[(2)] = null);
(statearr_23745_23781[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (18)))
{var inst_23675 = (state_23705[(2)]);var state_23705__$1 = state_23705;var statearr_23746_23782 = state_23705__$1;(statearr_23746_23782[(2)] = inst_23675);
(statearr_23746_23782[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23706 === (8)))
{var inst_23649 = (state_23705[(14)]);var inst_23648 = (state_23705[(16)]);var inst_23651 = (inst_23649 < inst_23648);var inst_23652 = inst_23651;var state_23705__$1 = state_23705;if(cljs.core.truth_(inst_23652))
{var statearr_23747_23783 = state_23705__$1;(statearr_23747_23783[(1)] = (10));
} else
{var statearr_23748_23784 = state_23705__$1;(statearr_23748_23784[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___23756,mults,ensure_mult,p))
;return ((function (switch__6480__auto__,c__6495__auto___23756,mults,ensure_mult,p){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23752[(0)] = state_machine__6481__auto__);
(statearr_23752[(1)] = (1));
return statearr_23752;
});
var state_machine__6481__auto____1 = (function (state_23705){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23705);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23753){if((e23753 instanceof Object))
{var ex__6484__auto__ = e23753;var statearr_23754_23785 = state_23705;(statearr_23754_23785[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23705);
return cljs.core.constant$keyword$16;
} else
{throw e23753;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23786 = state_23705;
state_23705 = G__23786;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23705){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23756,mults,ensure_mult,p))
})();var state__6497__auto__ = (function (){var statearr_23755 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23756);
return statearr_23755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23756,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23867 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23867) : cljs.core.atom.call(null,G__23867));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6495__auto___23940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23906){var state_val_23907 = (state_23906[(1)]);if((state_val_23907 === (7)))
{var state_23906__$1 = state_23906;var statearr_23908_23941 = state_23906__$1;(statearr_23908_23941[(2)] = null);
(statearr_23908_23941[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (1)))
{var state_23906__$1 = state_23906;var statearr_23909_23942 = state_23906__$1;(statearr_23909_23942[(2)] = null);
(statearr_23909_23942[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (4)))
{var inst_23870 = (state_23906[(7)]);var inst_23872 = (inst_23870 < cnt);var state_23906__$1 = state_23906;if(cljs.core.truth_(inst_23872))
{var statearr_23910_23943 = state_23906__$1;(statearr_23910_23943[(1)] = (6));
} else
{var statearr_23911_23944 = state_23906__$1;(statearr_23911_23944[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (15)))
{var inst_23902 = (state_23906[(2)]);var state_23906__$1 = state_23906;var statearr_23912_23945 = state_23906__$1;(statearr_23912_23945[(2)] = inst_23902);
(statearr_23912_23945[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (13)))
{var inst_23895 = cljs.core.async.close_BANG_(out);var state_23906__$1 = state_23906;var statearr_23913_23946 = state_23906__$1;(statearr_23913_23946[(2)] = inst_23895);
(statearr_23913_23946[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (6)))
{var state_23906__$1 = state_23906;var statearr_23914_23947 = state_23906__$1;(statearr_23914_23947[(2)] = null);
(statearr_23914_23947[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (3)))
{var inst_23904 = (state_23906[(2)]);var state_23906__$1 = state_23906;return cljs.core.async.impl.ioc_helpers.return_chan(state_23906__$1,inst_23904);
} else
{if((state_val_23907 === (12)))
{var inst_23892 = (state_23906[(8)]);var inst_23892__$1 = (state_23906[(2)]);var inst_23893 = cljs.core.some(cljs.core.nil_QMARK_,inst_23892__$1);var state_23906__$1 = (function (){var statearr_23915 = state_23906;(statearr_23915[(8)] = inst_23892__$1);
return statearr_23915;
})();if(cljs.core.truth_(inst_23893))
{var statearr_23916_23948 = state_23906__$1;(statearr_23916_23948[(1)] = (13));
} else
{var statearr_23917_23949 = state_23906__$1;(statearr_23917_23949[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (2)))
{var inst_23869 = (function (){var G__23918 = dctr;var G__23919 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23918,G__23919) : cljs.core.reset_BANG_.call(null,G__23918,G__23919));
})();var inst_23870 = (0);var state_23906__$1 = (function (){var statearr_23920 = state_23906;(statearr_23920[(9)] = inst_23869);
(statearr_23920[(7)] = inst_23870);
return statearr_23920;
})();var statearr_23921_23950 = state_23906__$1;(statearr_23921_23950[(2)] = null);
(statearr_23921_23950[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (11)))
{var inst_23870 = (state_23906[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23906,(10),Object,null,(9));var inst_23879 = (function (){var G__23922 = inst_23870;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__23922) : chs__$1.call(null,G__23922));
})();var inst_23880 = (function (){var G__23923 = inst_23870;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23923) : done.call(null,G__23923));
})();var inst_23881 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23879,inst_23880);var state_23906__$1 = state_23906;var statearr_23924_23951 = state_23906__$1;(statearr_23924_23951[(2)] = inst_23881);
cljs.core.async.impl.ioc_helpers.process_exception(state_23906__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (9)))
{var inst_23870 = (state_23906[(7)]);var inst_23883 = (state_23906[(2)]);var inst_23884 = (inst_23870 + (1));var inst_23870__$1 = inst_23884;var state_23906__$1 = (function (){var statearr_23925 = state_23906;(statearr_23925[(10)] = inst_23883);
(statearr_23925[(7)] = inst_23870__$1);
return statearr_23925;
})();var statearr_23926_23952 = state_23906__$1;(statearr_23926_23952[(2)] = null);
(statearr_23926_23952[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (5)))
{var inst_23890 = (state_23906[(2)]);var state_23906__$1 = (function (){var statearr_23927 = state_23906;(statearr_23927[(11)] = inst_23890);
return statearr_23927;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23906__$1,(12),dchan);
} else
{if((state_val_23907 === (14)))
{var inst_23892 = (state_23906[(8)]);var inst_23897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23892);var state_23906__$1 = state_23906;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23906__$1,(16),out,inst_23897);
} else
{if((state_val_23907 === (16)))
{var inst_23899 = (state_23906[(2)]);var state_23906__$1 = (function (){var statearr_23928 = state_23906;(statearr_23928[(12)] = inst_23899);
return statearr_23928;
})();var statearr_23929_23953 = state_23906__$1;(statearr_23929_23953[(2)] = null);
(statearr_23929_23953[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (10)))
{var inst_23874 = (state_23906[(2)]);var inst_23875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23906__$1 = (function (){var statearr_23930 = state_23906;(statearr_23930[(13)] = inst_23874);
return statearr_23930;
})();var statearr_23931_23954 = state_23906__$1;(statearr_23931_23954[(2)] = inst_23875);
cljs.core.async.impl.ioc_helpers.process_exception(state_23906__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_23907 === (8)))
{var inst_23888 = (state_23906[(2)]);var state_23906__$1 = state_23906;var statearr_23932_23955 = state_23906__$1;(statearr_23932_23955[(2)] = inst_23888);
(statearr_23932_23955[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6480__auto__,c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23936[(0)] = state_machine__6481__auto__);
(statearr_23936[(1)] = (1));
return statearr_23936;
});
var state_machine__6481__auto____1 = (function (state_23906){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23906);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23937){if((e23937 instanceof Object))
{var ex__6484__auto__ = e23937;var statearr_23938_23956 = state_23906;(statearr_23938_23956[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23906);
return cljs.core.constant$keyword$16;
} else
{throw e23937;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23957 = state_23906;
state_23906 = G__23957;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23906){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6497__auto__ = (function (){var statearr_23939 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23940);
return statearr_23939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23940,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24067,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24067,out){
return (function (state_24043){var state_val_24044 = (state_24043[(1)]);if((state_val_24044 === (7)))
{var inst_24023 = (state_24043[(7)]);var inst_24022 = (state_24043[(8)]);var inst_24022__$1 = (state_24043[(2)]);var inst_24023__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24022__$1,(0),null);var inst_24024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24022__$1,(1),null);var inst_24025 = (inst_24023__$1 == null);var state_24043__$1 = (function (){var statearr_24045 = state_24043;(statearr_24045[(7)] = inst_24023__$1);
(statearr_24045[(8)] = inst_24022__$1);
(statearr_24045[(9)] = inst_24024);
return statearr_24045;
})();if(cljs.core.truth_(inst_24025))
{var statearr_24046_24068 = state_24043__$1;(statearr_24046_24068[(1)] = (8));
} else
{var statearr_24047_24069 = state_24043__$1;(statearr_24047_24069[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (1)))
{var inst_24014 = cljs.core.vec(chs);var inst_24015 = inst_24014;var state_24043__$1 = (function (){var statearr_24048 = state_24043;(statearr_24048[(10)] = inst_24015);
return statearr_24048;
})();var statearr_24049_24070 = state_24043__$1;(statearr_24049_24070[(2)] = null);
(statearr_24049_24070[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (4)))
{var inst_24015 = (state_24043[(10)]);var state_24043__$1 = state_24043;return cljs.core.async.ioc_alts_BANG_(state_24043__$1,(7),inst_24015);
} else
{if((state_val_24044 === (6)))
{var inst_24039 = (state_24043[(2)]);var state_24043__$1 = state_24043;var statearr_24050_24071 = state_24043__$1;(statearr_24050_24071[(2)] = inst_24039);
(statearr_24050_24071[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (3)))
{var inst_24041 = (state_24043[(2)]);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.return_chan(state_24043__$1,inst_24041);
} else
{if((state_val_24044 === (2)))
{var inst_24015 = (state_24043[(10)]);var inst_24017 = cljs.core.count(inst_24015);var inst_24018 = (inst_24017 > (0));var state_24043__$1 = state_24043;if(cljs.core.truth_(inst_24018))
{var statearr_24052_24072 = state_24043__$1;(statearr_24052_24072[(1)] = (4));
} else
{var statearr_24053_24073 = state_24043__$1;(statearr_24053_24073[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (11)))
{var inst_24015 = (state_24043[(10)]);var inst_24032 = (state_24043[(2)]);var tmp24051 = inst_24015;var inst_24015__$1 = tmp24051;var state_24043__$1 = (function (){var statearr_24054 = state_24043;(statearr_24054[(11)] = inst_24032);
(statearr_24054[(10)] = inst_24015__$1);
return statearr_24054;
})();var statearr_24055_24074 = state_24043__$1;(statearr_24055_24074[(2)] = null);
(statearr_24055_24074[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (9)))
{var inst_24023 = (state_24043[(7)]);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24043__$1,(11),out,inst_24023);
} else
{if((state_val_24044 === (5)))
{var inst_24037 = cljs.core.async.close_BANG_(out);var state_24043__$1 = state_24043;var statearr_24056_24075 = state_24043__$1;(statearr_24056_24075[(2)] = inst_24037);
(statearr_24056_24075[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (10)))
{var inst_24035 = (state_24043[(2)]);var state_24043__$1 = state_24043;var statearr_24057_24076 = state_24043__$1;(statearr_24057_24076[(2)] = inst_24035);
(statearr_24057_24076[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24044 === (8)))
{var inst_24023 = (state_24043[(7)]);var inst_24022 = (state_24043[(8)]);var inst_24015 = (state_24043[(10)]);var inst_24024 = (state_24043[(9)]);var inst_24027 = (function (){var c = inst_24024;var v = inst_24023;var vec__24020 = inst_24022;var cs = inst_24015;return ((function (c,v,vec__24020,cs,inst_24023,inst_24022,inst_24015,inst_24024,state_val_24044,c__6495__auto___24067,out){
return (function (p1__23958_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23958_SHARP_);
});
;})(c,v,vec__24020,cs,inst_24023,inst_24022,inst_24015,inst_24024,state_val_24044,c__6495__auto___24067,out))
})();var inst_24028 = cljs.core.filterv(inst_24027,inst_24015);var inst_24015__$1 = inst_24028;var state_24043__$1 = (function (){var statearr_24058 = state_24043;(statearr_24058[(10)] = inst_24015__$1);
return statearr_24058;
})();var statearr_24059_24077 = state_24043__$1;(statearr_24059_24077[(2)] = null);
(statearr_24059_24077[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24067,out))
;return ((function (switch__6480__auto__,c__6495__auto___24067,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24063 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24063[(0)] = state_machine__6481__auto__);
(statearr_24063[(1)] = (1));
return statearr_24063;
});
var state_machine__6481__auto____1 = (function (state_24043){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24043);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24064){if((e24064 instanceof Object))
{var ex__6484__auto__ = e24064;var statearr_24065_24078 = state_24043;(statearr_24065_24078[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24043);
return cljs.core.constant$keyword$16;
} else
{throw e24064;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24079 = state_24043;
state_24043 = G__24079;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24067,out))
})();var state__6497__auto__ = (function (){var statearr_24066 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24067);
return statearr_24066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24067,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24175,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24175,out){
return (function (state_24152){var state_val_24153 = (state_24152[(1)]);if((state_val_24153 === (7)))
{var inst_24134 = (state_24152[(7)]);var inst_24134__$1 = (state_24152[(2)]);var inst_24135 = (inst_24134__$1 == null);var inst_24136 = cljs.core.not(inst_24135);var state_24152__$1 = (function (){var statearr_24154 = state_24152;(statearr_24154[(7)] = inst_24134__$1);
return statearr_24154;
})();if(inst_24136)
{var statearr_24155_24176 = state_24152__$1;(statearr_24155_24176[(1)] = (8));
} else
{var statearr_24156_24177 = state_24152__$1;(statearr_24156_24177[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (1)))
{var inst_24129 = (0);var state_24152__$1 = (function (){var statearr_24157 = state_24152;(statearr_24157[(8)] = inst_24129);
return statearr_24157;
})();var statearr_24158_24178 = state_24152__$1;(statearr_24158_24178[(2)] = null);
(statearr_24158_24178[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (4)))
{var state_24152__$1 = state_24152;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24152__$1,(7),ch);
} else
{if((state_val_24153 === (6)))
{var inst_24147 = (state_24152[(2)]);var state_24152__$1 = state_24152;var statearr_24159_24179 = state_24152__$1;(statearr_24159_24179[(2)] = inst_24147);
(statearr_24159_24179[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (3)))
{var inst_24149 = (state_24152[(2)]);var inst_24150 = cljs.core.async.close_BANG_(out);var state_24152__$1 = (function (){var statearr_24160 = state_24152;(statearr_24160[(9)] = inst_24149);
return statearr_24160;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24152__$1,inst_24150);
} else
{if((state_val_24153 === (2)))
{var inst_24129 = (state_24152[(8)]);var inst_24131 = (inst_24129 < n);var state_24152__$1 = state_24152;if(cljs.core.truth_(inst_24131))
{var statearr_24161_24180 = state_24152__$1;(statearr_24161_24180[(1)] = (4));
} else
{var statearr_24162_24181 = state_24152__$1;(statearr_24162_24181[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (11)))
{var inst_24129 = (state_24152[(8)]);var inst_24139 = (state_24152[(2)]);var inst_24140 = (inst_24129 + (1));var inst_24129__$1 = inst_24140;var state_24152__$1 = (function (){var statearr_24163 = state_24152;(statearr_24163[(10)] = inst_24139);
(statearr_24163[(8)] = inst_24129__$1);
return statearr_24163;
})();var statearr_24164_24182 = state_24152__$1;(statearr_24164_24182[(2)] = null);
(statearr_24164_24182[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (9)))
{var state_24152__$1 = state_24152;var statearr_24165_24183 = state_24152__$1;(statearr_24165_24183[(2)] = null);
(statearr_24165_24183[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (5)))
{var state_24152__$1 = state_24152;var statearr_24166_24184 = state_24152__$1;(statearr_24166_24184[(2)] = null);
(statearr_24166_24184[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (10)))
{var inst_24144 = (state_24152[(2)]);var state_24152__$1 = state_24152;var statearr_24167_24185 = state_24152__$1;(statearr_24167_24185[(2)] = inst_24144);
(statearr_24167_24185[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24153 === (8)))
{var inst_24134 = (state_24152[(7)]);var state_24152__$1 = state_24152;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24152__$1,(11),out,inst_24134);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24175,out))
;return ((function (switch__6480__auto__,c__6495__auto___24175,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24171 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24171[(0)] = state_machine__6481__auto__);
(statearr_24171[(1)] = (1));
return statearr_24171;
});
var state_machine__6481__auto____1 = (function (state_24152){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24152);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24172){if((e24172 instanceof Object))
{var ex__6484__auto__ = e24172;var statearr_24173_24186 = state_24152;(statearr_24173_24186[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24152);
return cljs.core.constant$keyword$16;
} else
{throw e24172;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24187 = state_24152;
state_24152 = G__24187;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24152){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24175,out))
})();var state__6497__auto__ = (function (){var statearr_24174 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24175);
return statearr_24174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24175,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24200 = (function (ch,f,map_LT_,meta24201){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24201 = meta24201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24200.cljs$lang$type = true;
cljs.core.async.t24200.cljs$lang$ctorStr = "cljs.core.async/t24200";
cljs.core.async.t24200.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24200");
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24203 = (function (fn1,_,meta24201,ch,f,map_LT_,meta24204){
this.fn1 = fn1;
this._ = _;
this.meta24201 = meta24201;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24204 = meta24204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24203.cljs$lang$type = true;
cljs.core.async.t24203.cljs$lang$ctorStr = "cljs.core.async/t24203";
cljs.core.async.t24203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24203");
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24188_SHARP_){var G__24206 = (((p1__24188_SHARP_ == null))?null:(function (){var G__24207 = p1__24188_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24207) : self__.f.call(null,G__24207));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24206) : f1.call(null,G__24206));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24205){var self__ = this;
var _24205__$1 = this;return self__.meta24204;
});})(___$1))
;
cljs.core.async.t24203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24205,meta24204__$1){var self__ = this;
var _24205__$1 = this;return (new cljs.core.async.t24203(self__.fn1,self__._,self__.meta24201,self__.ch,self__.f,self__.map_LT_,meta24204__$1));
});})(___$1))
;
cljs.core.async.__GT_t24203 = ((function (___$1){
return (function __GT_t24203(fn1__$1,___$2,meta24201__$1,ch__$2,f__$2,map_LT___$2,meta24204){return (new cljs.core.async.t24203(fn1__$1,___$2,meta24201__$1,ch__$2,f__$2,map_LT___$2,meta24204));
});})(___$1))
;
}
return (new cljs.core.async.t24203(fn1,___$1,self__.meta24201,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__24208 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24208) : cljs.core.deref.call(null,G__24208));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24209 = (function (){var G__24210 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24210) : cljs.core.deref.call(null,G__24210));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24209) : self__.f.call(null,G__24209));
})());
} else
{return ret;
}
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24202){var self__ = this;
var _24202__$1 = this;return self__.meta24201;
});
cljs.core.async.t24200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24202,meta24201__$1){var self__ = this;
var _24202__$1 = this;return (new cljs.core.async.t24200(self__.ch,self__.f,self__.map_LT_,meta24201__$1));
});
cljs.core.async.__GT_t24200 = (function __GT_t24200(ch__$1,f__$1,map_LT___$1,meta24201){return (new cljs.core.async.t24200(ch__$1,f__$1,map_LT___$1,meta24201));
});
}
return (new cljs.core.async.t24200(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24215 = (function (ch,f,map_GT_,meta24216){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24216 = meta24216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24215.cljs$lang$type = true;
cljs.core.async.t24215.cljs$lang$ctorStr = "cljs.core.async/t24215";
cljs.core.async.t24215.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24215");
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24218 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24218) : self__.f.call(null,G__24218));
})(),fn1);
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24217){var self__ = this;
var _24217__$1 = this;return self__.meta24216;
});
cljs.core.async.t24215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24217,meta24216__$1){var self__ = this;
var _24217__$1 = this;return (new cljs.core.async.t24215(self__.ch,self__.f,self__.map_GT_,meta24216__$1));
});
cljs.core.async.__GT_t24215 = (function __GT_t24215(ch__$1,f__$1,map_GT___$1,meta24216){return (new cljs.core.async.t24215(ch__$1,f__$1,map_GT___$1,meta24216));
});
}
return (new cljs.core.async.t24215(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24223 = (function (ch,p,filter_GT_,meta24224){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24224 = meta24224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24223.cljs$lang$type = true;
cljs.core.async.t24223.cljs$lang$ctorStr = "cljs.core.async/t24223";
cljs.core.async.t24223.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24223");
});
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24226 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24226) : self__.p.call(null,G__24226));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24225){var self__ = this;
var _24225__$1 = this;return self__.meta24224;
});
cljs.core.async.t24223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24225,meta24224__$1){var self__ = this;
var _24225__$1 = this;return (new cljs.core.async.t24223(self__.ch,self__.p,self__.filter_GT_,meta24224__$1));
});
cljs.core.async.__GT_t24223 = (function __GT_t24223(ch__$1,p__$1,filter_GT___$1,meta24224){return (new cljs.core.async.t24223(ch__$1,p__$1,filter_GT___$1,meta24224));
});
}
return (new cljs.core.async.t24223(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24314,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24314,out){
return (function (state_24292){var state_val_24293 = (state_24292[(1)]);if((state_val_24293 === (7)))
{var inst_24288 = (state_24292[(2)]);var state_24292__$1 = state_24292;var statearr_24294_24315 = state_24292__$1;(statearr_24294_24315[(2)] = inst_24288);
(statearr_24294_24315[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (1)))
{var state_24292__$1 = state_24292;var statearr_24295_24316 = state_24292__$1;(statearr_24295_24316[(2)] = null);
(statearr_24295_24316[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (4)))
{var inst_24274 = (state_24292[(7)]);var inst_24274__$1 = (state_24292[(2)]);var inst_24275 = (inst_24274__$1 == null);var state_24292__$1 = (function (){var statearr_24296 = state_24292;(statearr_24296[(7)] = inst_24274__$1);
return statearr_24296;
})();if(cljs.core.truth_(inst_24275))
{var statearr_24297_24317 = state_24292__$1;(statearr_24297_24317[(1)] = (5));
} else
{var statearr_24298_24318 = state_24292__$1;(statearr_24298_24318[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (6)))
{var inst_24274 = (state_24292[(7)]);var inst_24279 = (function (){var G__24299 = inst_24274;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24299) : p.call(null,G__24299));
})();var state_24292__$1 = state_24292;if(cljs.core.truth_(inst_24279))
{var statearr_24300_24319 = state_24292__$1;(statearr_24300_24319[(1)] = (8));
} else
{var statearr_24301_24320 = state_24292__$1;(statearr_24301_24320[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (3)))
{var inst_24290 = (state_24292[(2)]);var state_24292__$1 = state_24292;return cljs.core.async.impl.ioc_helpers.return_chan(state_24292__$1,inst_24290);
} else
{if((state_val_24293 === (2)))
{var state_24292__$1 = state_24292;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24292__$1,(4),ch);
} else
{if((state_val_24293 === (11)))
{var inst_24282 = (state_24292[(2)]);var state_24292__$1 = state_24292;var statearr_24302_24321 = state_24292__$1;(statearr_24302_24321[(2)] = inst_24282);
(statearr_24302_24321[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (9)))
{var state_24292__$1 = state_24292;var statearr_24303_24322 = state_24292__$1;(statearr_24303_24322[(2)] = null);
(statearr_24303_24322[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (5)))
{var inst_24277 = cljs.core.async.close_BANG_(out);var state_24292__$1 = state_24292;var statearr_24304_24323 = state_24292__$1;(statearr_24304_24323[(2)] = inst_24277);
(statearr_24304_24323[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (10)))
{var inst_24285 = (state_24292[(2)]);var state_24292__$1 = (function (){var statearr_24305 = state_24292;(statearr_24305[(8)] = inst_24285);
return statearr_24305;
})();var statearr_24306_24324 = state_24292__$1;(statearr_24306_24324[(2)] = null);
(statearr_24306_24324[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24293 === (8)))
{var inst_24274 = (state_24292[(7)]);var state_24292__$1 = state_24292;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24292__$1,(11),out,inst_24274);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24314,out))
;return ((function (switch__6480__auto__,c__6495__auto___24314,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24310 = [null,null,null,null,null,null,null,null,null];(statearr_24310[(0)] = state_machine__6481__auto__);
(statearr_24310[(1)] = (1));
return statearr_24310;
});
var state_machine__6481__auto____1 = (function (state_24292){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24292);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object))
{var ex__6484__auto__ = e24311;var statearr_24312_24325 = state_24292;(statearr_24312_24325[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24292);
return cljs.core.constant$keyword$16;
} else
{throw e24311;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24326 = state_24292;
state_24292 = G__24326;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24292){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24314,out))
})();var state__6497__auto__ = (function (){var statearr_24313 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24314);
return statearr_24313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24314,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__){
return (function (state_24496){var state_val_24497 = (state_24496[(1)]);if((state_val_24497 === (7)))
{var inst_24492 = (state_24496[(2)]);var state_24496__$1 = state_24496;var statearr_24498_24540 = state_24496__$1;(statearr_24498_24540[(2)] = inst_24492);
(statearr_24498_24540[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (20)))
{var inst_24462 = (state_24496[(7)]);var inst_24473 = (state_24496[(2)]);var inst_24474 = cljs.core.next(inst_24462);var inst_24448 = inst_24474;var inst_24449 = null;var inst_24450 = (0);var inst_24451 = (0);var state_24496__$1 = (function (){var statearr_24499 = state_24496;(statearr_24499[(8)] = inst_24449);
(statearr_24499[(9)] = inst_24473);
(statearr_24499[(10)] = inst_24448);
(statearr_24499[(11)] = inst_24450);
(statearr_24499[(12)] = inst_24451);
return statearr_24499;
})();var statearr_24500_24541 = state_24496__$1;(statearr_24500_24541[(2)] = null);
(statearr_24500_24541[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (1)))
{var state_24496__$1 = state_24496;var statearr_24501_24542 = state_24496__$1;(statearr_24501_24542[(2)] = null);
(statearr_24501_24542[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (4)))
{var inst_24437 = (state_24496[(13)]);var inst_24437__$1 = (state_24496[(2)]);var inst_24438 = (inst_24437__$1 == null);var state_24496__$1 = (function (){var statearr_24502 = state_24496;(statearr_24502[(13)] = inst_24437__$1);
return statearr_24502;
})();if(cljs.core.truth_(inst_24438))
{var statearr_24503_24543 = state_24496__$1;(statearr_24503_24543[(1)] = (5));
} else
{var statearr_24504_24544 = state_24496__$1;(statearr_24504_24544[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (15)))
{var state_24496__$1 = state_24496;var statearr_24508_24545 = state_24496__$1;(statearr_24508_24545[(2)] = null);
(statearr_24508_24545[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (21)))
{var state_24496__$1 = state_24496;var statearr_24509_24546 = state_24496__$1;(statearr_24509_24546[(2)] = null);
(statearr_24509_24546[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (13)))
{var inst_24449 = (state_24496[(8)]);var inst_24448 = (state_24496[(10)]);var inst_24450 = (state_24496[(11)]);var inst_24451 = (state_24496[(12)]);var inst_24458 = (state_24496[(2)]);var inst_24459 = (inst_24451 + (1));var tmp24505 = inst_24449;var tmp24506 = inst_24448;var tmp24507 = inst_24450;var inst_24448__$1 = tmp24506;var inst_24449__$1 = tmp24505;var inst_24450__$1 = tmp24507;var inst_24451__$1 = inst_24459;var state_24496__$1 = (function (){var statearr_24510 = state_24496;(statearr_24510[(8)] = inst_24449__$1);
(statearr_24510[(14)] = inst_24458);
(statearr_24510[(10)] = inst_24448__$1);
(statearr_24510[(11)] = inst_24450__$1);
(statearr_24510[(12)] = inst_24451__$1);
return statearr_24510;
})();var statearr_24511_24547 = state_24496__$1;(statearr_24511_24547[(2)] = null);
(statearr_24511_24547[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (22)))
{var state_24496__$1 = state_24496;var statearr_24512_24548 = state_24496__$1;(statearr_24512_24548[(2)] = null);
(statearr_24512_24548[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (6)))
{var inst_24437 = (state_24496[(13)]);var inst_24446 = (function (){var G__24513 = inst_24437;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24513) : f.call(null,G__24513));
})();var inst_24447 = cljs.core.seq(inst_24446);var inst_24448 = inst_24447;var inst_24449 = null;var inst_24450 = (0);var inst_24451 = (0);var state_24496__$1 = (function (){var statearr_24514 = state_24496;(statearr_24514[(8)] = inst_24449);
(statearr_24514[(10)] = inst_24448);
(statearr_24514[(11)] = inst_24450);
(statearr_24514[(12)] = inst_24451);
return statearr_24514;
})();var statearr_24515_24549 = state_24496__$1;(statearr_24515_24549[(2)] = null);
(statearr_24515_24549[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (17)))
{var inst_24462 = (state_24496[(7)]);var inst_24466 = cljs.core.chunk_first(inst_24462);var inst_24467 = cljs.core.chunk_rest(inst_24462);var inst_24468 = cljs.core.count(inst_24466);var inst_24448 = inst_24467;var inst_24449 = inst_24466;var inst_24450 = inst_24468;var inst_24451 = (0);var state_24496__$1 = (function (){var statearr_24516 = state_24496;(statearr_24516[(8)] = inst_24449);
(statearr_24516[(10)] = inst_24448);
(statearr_24516[(11)] = inst_24450);
(statearr_24516[(12)] = inst_24451);
return statearr_24516;
})();var statearr_24517_24550 = state_24496__$1;(statearr_24517_24550[(2)] = null);
(statearr_24517_24550[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (3)))
{var inst_24494 = (state_24496[(2)]);var state_24496__$1 = state_24496;return cljs.core.async.impl.ioc_helpers.return_chan(state_24496__$1,inst_24494);
} else
{if((state_val_24497 === (12)))
{var inst_24482 = (state_24496[(2)]);var state_24496__$1 = state_24496;var statearr_24518_24551 = state_24496__$1;(statearr_24518_24551[(2)] = inst_24482);
(statearr_24518_24551[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (2)))
{var state_24496__$1 = state_24496;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24496__$1,(4),in$);
} else
{if((state_val_24497 === (23)))
{var inst_24490 = (state_24496[(2)]);var state_24496__$1 = state_24496;var statearr_24519_24552 = state_24496__$1;(statearr_24519_24552[(2)] = inst_24490);
(statearr_24519_24552[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (19)))
{var inst_24477 = (state_24496[(2)]);var state_24496__$1 = state_24496;var statearr_24520_24553 = state_24496__$1;(statearr_24520_24553[(2)] = inst_24477);
(statearr_24520_24553[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (11)))
{var inst_24462 = (state_24496[(7)]);var inst_24448 = (state_24496[(10)]);var inst_24462__$1 = cljs.core.seq(inst_24448);var state_24496__$1 = (function (){var statearr_24521 = state_24496;(statearr_24521[(7)] = inst_24462__$1);
return statearr_24521;
})();if(inst_24462__$1)
{var statearr_24522_24554 = state_24496__$1;(statearr_24522_24554[(1)] = (14));
} else
{var statearr_24523_24555 = state_24496__$1;(statearr_24523_24555[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (9)))
{var inst_24484 = (state_24496[(2)]);var inst_24485 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_24496__$1 = (function (){var statearr_24524 = state_24496;(statearr_24524[(15)] = inst_24484);
return statearr_24524;
})();if(cljs.core.truth_(inst_24485))
{var statearr_24525_24556 = state_24496__$1;(statearr_24525_24556[(1)] = (21));
} else
{var statearr_24526_24557 = state_24496__$1;(statearr_24526_24557[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (5)))
{var inst_24440 = cljs.core.async.close_BANG_(out);var state_24496__$1 = state_24496;var statearr_24527_24558 = state_24496__$1;(statearr_24527_24558[(2)] = inst_24440);
(statearr_24527_24558[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (14)))
{var inst_24462 = (state_24496[(7)]);var inst_24464 = cljs.core.chunked_seq_QMARK_(inst_24462);var state_24496__$1 = state_24496;if(inst_24464)
{var statearr_24528_24559 = state_24496__$1;(statearr_24528_24559[(1)] = (17));
} else
{var statearr_24529_24560 = state_24496__$1;(statearr_24529_24560[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (16)))
{var inst_24480 = (state_24496[(2)]);var state_24496__$1 = state_24496;var statearr_24530_24561 = state_24496__$1;(statearr_24530_24561[(2)] = inst_24480);
(statearr_24530_24561[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24497 === (10)))
{var inst_24449 = (state_24496[(8)]);var inst_24451 = (state_24496[(12)]);var inst_24456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24449,inst_24451);var state_24496__$1 = state_24496;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24496__$1,(13),out,inst_24456);
} else
{if((state_val_24497 === (18)))
{var inst_24462 = (state_24496[(7)]);var inst_24471 = cljs.core.first(inst_24462);var state_24496__$1 = state_24496;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24496__$1,(20),out,inst_24471);
} else
{if((state_val_24497 === (8)))
{var inst_24450 = (state_24496[(11)]);var inst_24451 = (state_24496[(12)]);var inst_24453 = (inst_24451 < inst_24450);var inst_24454 = inst_24453;var state_24496__$1 = state_24496;if(cljs.core.truth_(inst_24454))
{var statearr_24531_24562 = state_24496__$1;(statearr_24531_24562[(1)] = (10));
} else
{var statearr_24532_24563 = state_24496__$1;(statearr_24532_24563[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto__))
;return ((function (switch__6480__auto__,c__6495__auto__){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24536[(0)] = state_machine__6481__auto__);
(statearr_24536[(1)] = (1));
return statearr_24536;
});
var state_machine__6481__auto____1 = (function (state_24496){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24496);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24537){if((e24537 instanceof Object))
{var ex__6484__auto__ = e24537;var statearr_24538_24564 = state_24496;(statearr_24538_24564[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24496);
return cljs.core.constant$keyword$16;
} else
{throw e24537;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24565 = state_24496;
state_24496 = G__24565;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24496){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_24539 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_24539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__))
);
return c__6495__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24670,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24670,out){
return (function (state_24645){var state_val_24646 = (state_24645[(1)]);if((state_val_24646 === (7)))
{var inst_24640 = (state_24645[(2)]);var state_24645__$1 = state_24645;var statearr_24647_24671 = state_24645__$1;(statearr_24647_24671[(2)] = inst_24640);
(statearr_24647_24671[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (1)))
{var inst_24622 = null;var state_24645__$1 = (function (){var statearr_24648 = state_24645;(statearr_24648[(7)] = inst_24622);
return statearr_24648;
})();var statearr_24649_24672 = state_24645__$1;(statearr_24649_24672[(2)] = null);
(statearr_24649_24672[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (4)))
{var inst_24625 = (state_24645[(8)]);var inst_24625__$1 = (state_24645[(2)]);var inst_24626 = (inst_24625__$1 == null);var inst_24627 = cljs.core.not(inst_24626);var state_24645__$1 = (function (){var statearr_24650 = state_24645;(statearr_24650[(8)] = inst_24625__$1);
return statearr_24650;
})();if(inst_24627)
{var statearr_24651_24673 = state_24645__$1;(statearr_24651_24673[(1)] = (5));
} else
{var statearr_24652_24674 = state_24645__$1;(statearr_24652_24674[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (6)))
{var state_24645__$1 = state_24645;var statearr_24653_24675 = state_24645__$1;(statearr_24653_24675[(2)] = null);
(statearr_24653_24675[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (3)))
{var inst_24642 = (state_24645[(2)]);var inst_24643 = cljs.core.async.close_BANG_(out);var state_24645__$1 = (function (){var statearr_24654 = state_24645;(statearr_24654[(9)] = inst_24642);
return statearr_24654;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24645__$1,inst_24643);
} else
{if((state_val_24646 === (2)))
{var state_24645__$1 = state_24645;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24645__$1,(4),ch);
} else
{if((state_val_24646 === (11)))
{var inst_24625 = (state_24645[(8)]);var inst_24634 = (state_24645[(2)]);var inst_24622 = inst_24625;var state_24645__$1 = (function (){var statearr_24655 = state_24645;(statearr_24655[(10)] = inst_24634);
(statearr_24655[(7)] = inst_24622);
return statearr_24655;
})();var statearr_24656_24676 = state_24645__$1;(statearr_24656_24676[(2)] = null);
(statearr_24656_24676[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (9)))
{var inst_24625 = (state_24645[(8)]);var state_24645__$1 = state_24645;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24645__$1,(11),out,inst_24625);
} else
{if((state_val_24646 === (5)))
{var inst_24622 = (state_24645[(7)]);var inst_24625 = (state_24645[(8)]);var inst_24629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24625,inst_24622);var state_24645__$1 = state_24645;if(inst_24629)
{var statearr_24658_24677 = state_24645__$1;(statearr_24658_24677[(1)] = (8));
} else
{var statearr_24659_24678 = state_24645__$1;(statearr_24659_24678[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (10)))
{var inst_24637 = (state_24645[(2)]);var state_24645__$1 = state_24645;var statearr_24660_24679 = state_24645__$1;(statearr_24660_24679[(2)] = inst_24637);
(statearr_24660_24679[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24646 === (8)))
{var inst_24622 = (state_24645[(7)]);var tmp24657 = inst_24622;var inst_24622__$1 = tmp24657;var state_24645__$1 = (function (){var statearr_24661 = state_24645;(statearr_24661[(7)] = inst_24622__$1);
return statearr_24661;
})();var statearr_24662_24680 = state_24645__$1;(statearr_24662_24680[(2)] = null);
(statearr_24662_24680[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24670,out))
;return ((function (switch__6480__auto__,c__6495__auto___24670,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24666 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24666[(0)] = state_machine__6481__auto__);
(statearr_24666[(1)] = (1));
return statearr_24666;
});
var state_machine__6481__auto____1 = (function (state_24645){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24645);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object))
{var ex__6484__auto__ = e24667;var statearr_24668_24681 = state_24645;(statearr_24668_24681[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24645);
return cljs.core.constant$keyword$16;
} else
{throw e24667;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24682 = state_24645;
state_24645 = G__24682;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24645){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24670,out))
})();var state__6497__auto__ = (function (){var statearr_24669 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24670);
return statearr_24669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24670,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24820,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24820,out){
return (function (state_24790){var state_val_24791 = (state_24790[(1)]);if((state_val_24791 === (7)))
{var inst_24786 = (state_24790[(2)]);var state_24790__$1 = state_24790;var statearr_24792_24821 = state_24790__$1;(statearr_24792_24821[(2)] = inst_24786);
(statearr_24792_24821[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (1)))
{var inst_24753 = (new Array(n));var inst_24754 = inst_24753;var inst_24755 = (0);var state_24790__$1 = (function (){var statearr_24793 = state_24790;(statearr_24793[(7)] = inst_24755);
(statearr_24793[(8)] = inst_24754);
return statearr_24793;
})();var statearr_24794_24822 = state_24790__$1;(statearr_24794_24822[(2)] = null);
(statearr_24794_24822[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (4)))
{var inst_24758 = (state_24790[(9)]);var inst_24758__$1 = (state_24790[(2)]);var inst_24759 = (inst_24758__$1 == null);var inst_24760 = cljs.core.not(inst_24759);var state_24790__$1 = (function (){var statearr_24795 = state_24790;(statearr_24795[(9)] = inst_24758__$1);
return statearr_24795;
})();if(inst_24760)
{var statearr_24796_24823 = state_24790__$1;(statearr_24796_24823[(1)] = (5));
} else
{var statearr_24797_24824 = state_24790__$1;(statearr_24797_24824[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (15)))
{var inst_24780 = (state_24790[(2)]);var state_24790__$1 = state_24790;var statearr_24798_24825 = state_24790__$1;(statearr_24798_24825[(2)] = inst_24780);
(statearr_24798_24825[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (13)))
{var state_24790__$1 = state_24790;var statearr_24799_24826 = state_24790__$1;(statearr_24799_24826[(2)] = null);
(statearr_24799_24826[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (6)))
{var inst_24755 = (state_24790[(7)]);var inst_24776 = (inst_24755 > (0));var state_24790__$1 = state_24790;if(cljs.core.truth_(inst_24776))
{var statearr_24800_24827 = state_24790__$1;(statearr_24800_24827[(1)] = (12));
} else
{var statearr_24801_24828 = state_24790__$1;(statearr_24801_24828[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (3)))
{var inst_24788 = (state_24790[(2)]);var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.return_chan(state_24790__$1,inst_24788);
} else
{if((state_val_24791 === (12)))
{var inst_24754 = (state_24790[(8)]);var inst_24778 = cljs.core.vec(inst_24754);var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24790__$1,(15),out,inst_24778);
} else
{if((state_val_24791 === (2)))
{var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24790__$1,(4),ch);
} else
{if((state_val_24791 === (11)))
{var inst_24770 = (state_24790[(2)]);var inst_24771 = (new Array(n));var inst_24754 = inst_24771;var inst_24755 = (0);var state_24790__$1 = (function (){var statearr_24802 = state_24790;(statearr_24802[(7)] = inst_24755);
(statearr_24802[(8)] = inst_24754);
(statearr_24802[(10)] = inst_24770);
return statearr_24802;
})();var statearr_24803_24829 = state_24790__$1;(statearr_24803_24829[(2)] = null);
(statearr_24803_24829[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (9)))
{var inst_24754 = (state_24790[(8)]);var inst_24768 = cljs.core.vec(inst_24754);var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24790__$1,(11),out,inst_24768);
} else
{if((state_val_24791 === (5)))
{var inst_24758 = (state_24790[(9)]);var inst_24755 = (state_24790[(7)]);var inst_24763 = (state_24790[(11)]);var inst_24754 = (state_24790[(8)]);var inst_24762 = (inst_24754[inst_24755] = inst_24758);var inst_24763__$1 = (inst_24755 + (1));var inst_24764 = (inst_24763__$1 < n);var state_24790__$1 = (function (){var statearr_24804 = state_24790;(statearr_24804[(12)] = inst_24762);
(statearr_24804[(11)] = inst_24763__$1);
return statearr_24804;
})();if(cljs.core.truth_(inst_24764))
{var statearr_24805_24830 = state_24790__$1;(statearr_24805_24830[(1)] = (8));
} else
{var statearr_24806_24831 = state_24790__$1;(statearr_24806_24831[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (14)))
{var inst_24783 = (state_24790[(2)]);var inst_24784 = cljs.core.async.close_BANG_(out);var state_24790__$1 = (function (){var statearr_24808 = state_24790;(statearr_24808[(13)] = inst_24783);
return statearr_24808;
})();var statearr_24809_24832 = state_24790__$1;(statearr_24809_24832[(2)] = inst_24784);
(statearr_24809_24832[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (10)))
{var inst_24774 = (state_24790[(2)]);var state_24790__$1 = state_24790;var statearr_24810_24833 = state_24790__$1;(statearr_24810_24833[(2)] = inst_24774);
(statearr_24810_24833[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24791 === (8)))
{var inst_24763 = (state_24790[(11)]);var inst_24754 = (state_24790[(8)]);var tmp24807 = inst_24754;var inst_24754__$1 = tmp24807;var inst_24755 = inst_24763;var state_24790__$1 = (function (){var statearr_24811 = state_24790;(statearr_24811[(7)] = inst_24755);
(statearr_24811[(8)] = inst_24754__$1);
return statearr_24811;
})();var statearr_24812_24834 = state_24790__$1;(statearr_24812_24834[(2)] = null);
(statearr_24812_24834[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24820,out))
;return ((function (switch__6480__auto__,c__6495__auto___24820,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24816[(0)] = state_machine__6481__auto__);
(statearr_24816[(1)] = (1));
return statearr_24816;
});
var state_machine__6481__auto____1 = (function (state_24790){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24790);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24817){if((e24817 instanceof Object))
{var ex__6484__auto__ = e24817;var statearr_24818_24835 = state_24790;(statearr_24818_24835[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24790);
return cljs.core.constant$keyword$16;
} else
{throw e24817;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24836 = state_24790;
state_24790 = G__24836;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24790){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24820,out))
})();var state__6497__auto__ = (function (){var statearr_24819 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24820);
return statearr_24819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24820,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24984,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24984,out){
return (function (state_24953){var state_val_24954 = (state_24953[(1)]);if((state_val_24954 === (7)))
{var inst_24949 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24955_24985 = state_24953__$1;(statearr_24955_24985[(2)] = inst_24949);
(statearr_24955_24985[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (1)))
{var inst_24912 = [];var inst_24913 = inst_24912;var inst_24914 = cljs.core.constant$keyword$31;var state_24953__$1 = (function (){var statearr_24956 = state_24953;(statearr_24956[(7)] = inst_24914);
(statearr_24956[(8)] = inst_24913);
return statearr_24956;
})();var statearr_24957_24986 = state_24953__$1;(statearr_24957_24986[(2)] = null);
(statearr_24957_24986[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (4)))
{var inst_24917 = (state_24953[(9)]);var inst_24917__$1 = (state_24953[(2)]);var inst_24918 = (inst_24917__$1 == null);var inst_24919 = cljs.core.not(inst_24918);var state_24953__$1 = (function (){var statearr_24958 = state_24953;(statearr_24958[(9)] = inst_24917__$1);
return statearr_24958;
})();if(inst_24919)
{var statearr_24959_24987 = state_24953__$1;(statearr_24959_24987[(1)] = (5));
} else
{var statearr_24960_24988 = state_24953__$1;(statearr_24960_24988[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (15)))
{var inst_24943 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24961_24989 = state_24953__$1;(statearr_24961_24989[(2)] = inst_24943);
(statearr_24961_24989[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (13)))
{var state_24953__$1 = state_24953;var statearr_24962_24990 = state_24953__$1;(statearr_24962_24990[(2)] = null);
(statearr_24962_24990[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (6)))
{var inst_24913 = (state_24953[(8)]);var inst_24938 = inst_24913.length;var inst_24939 = (inst_24938 > (0));var state_24953__$1 = state_24953;if(cljs.core.truth_(inst_24939))
{var statearr_24963_24991 = state_24953__$1;(statearr_24963_24991[(1)] = (12));
} else
{var statearr_24964_24992 = state_24953__$1;(statearr_24964_24992[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (3)))
{var inst_24951 = (state_24953[(2)]);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.return_chan(state_24953__$1,inst_24951);
} else
{if((state_val_24954 === (12)))
{var inst_24913 = (state_24953[(8)]);var inst_24941 = cljs.core.vec(inst_24913);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24953__$1,(15),out,inst_24941);
} else
{if((state_val_24954 === (2)))
{var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24953__$1,(4),ch);
} else
{if((state_val_24954 === (11)))
{var inst_24921 = (state_24953[(10)]);var inst_24917 = (state_24953[(9)]);var inst_24931 = (state_24953[(2)]);var inst_24932 = [];var inst_24933 = inst_24932.push(inst_24917);var inst_24913 = inst_24932;var inst_24914 = inst_24921;var state_24953__$1 = (function (){var statearr_24965 = state_24953;(statearr_24965[(7)] = inst_24914);
(statearr_24965[(11)] = inst_24931);
(statearr_24965[(8)] = inst_24913);
(statearr_24965[(12)] = inst_24933);
return statearr_24965;
})();var statearr_24966_24993 = state_24953__$1;(statearr_24966_24993[(2)] = null);
(statearr_24966_24993[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (9)))
{var inst_24913 = (state_24953[(8)]);var inst_24929 = cljs.core.vec(inst_24913);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24953__$1,(11),out,inst_24929);
} else
{if((state_val_24954 === (5)))
{var inst_24914 = (state_24953[(7)]);var inst_24921 = (state_24953[(10)]);var inst_24917 = (state_24953[(9)]);var inst_24921__$1 = (function (){var G__24967 = inst_24917;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24967) : f.call(null,G__24967));
})();var inst_24922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24921__$1,inst_24914);var inst_24923 = cljs.core.keyword_identical_QMARK_(inst_24914,cljs.core.constant$keyword$31);var inst_24924 = (inst_24922) || (inst_24923);var state_24953__$1 = (function (){var statearr_24968 = state_24953;(statearr_24968[(10)] = inst_24921__$1);
return statearr_24968;
})();if(cljs.core.truth_(inst_24924))
{var statearr_24969_24994 = state_24953__$1;(statearr_24969_24994[(1)] = (8));
} else
{var statearr_24970_24995 = state_24953__$1;(statearr_24970_24995[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (14)))
{var inst_24946 = (state_24953[(2)]);var inst_24947 = cljs.core.async.close_BANG_(out);var state_24953__$1 = (function (){var statearr_24972 = state_24953;(statearr_24972[(13)] = inst_24946);
return statearr_24972;
})();var statearr_24973_24996 = state_24953__$1;(statearr_24973_24996[(2)] = inst_24947);
(statearr_24973_24996[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (10)))
{var inst_24936 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24974_24997 = state_24953__$1;(statearr_24974_24997[(2)] = inst_24936);
(statearr_24974_24997[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24954 === (8)))
{var inst_24913 = (state_24953[(8)]);var inst_24921 = (state_24953[(10)]);var inst_24917 = (state_24953[(9)]);var inst_24926 = inst_24913.push(inst_24917);var tmp24971 = inst_24913;var inst_24913__$1 = tmp24971;var inst_24914 = inst_24921;var state_24953__$1 = (function (){var statearr_24975 = state_24953;(statearr_24975[(14)] = inst_24926);
(statearr_24975[(7)] = inst_24914);
(statearr_24975[(8)] = inst_24913__$1);
return statearr_24975;
})();var statearr_24976_24998 = state_24953__$1;(statearr_24976_24998[(2)] = null);
(statearr_24976_24998[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6495__auto___24984,out))
;return ((function (switch__6480__auto__,c__6495__auto___24984,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24980[(0)] = state_machine__6481__auto__);
(statearr_24980[(1)] = (1));
return statearr_24980;
});
var state_machine__6481__auto____1 = (function (state_24953){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24953);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24981){if((e24981 instanceof Object))
{var ex__6484__auto__ = e24981;var statearr_24982_24999 = state_24953;(statearr_24982_24999[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24953);
return cljs.core.constant$keyword$16;
} else
{throw e24981;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__25000 = state_24953;
state_24953 = G__25000;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24984,out))
})();var state__6497__auto__ = (function (){var statearr_24983 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24984);
return statearr_24983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24984,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
