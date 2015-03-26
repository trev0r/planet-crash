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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21753 = (function (f,fn_handler,meta21754){
this.f = f;
this.fn_handler = fn_handler;
this.meta21754 = meta21754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21753.cljs$lang$type = true;
cljs.core.async.t21753.cljs$lang$ctorStr = "cljs.core.async/t21753";
cljs.core.async.t21753.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21753");
});
cljs.core.async.t21753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21755){var self__ = this;
var _21755__$1 = this;return self__.meta21754;
});
cljs.core.async.t21753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21755,meta21754__$1){var self__ = this;
var _21755__$1 = this;return (new cljs.core.async.t21753(self__.f,self__.fn_handler,meta21754__$1));
});
cljs.core.async.__GT_t21753 = (function __GT_t21753(f__$1,fn_handler__$1,meta21754){return (new cljs.core.async.t21753(f__$1,fn_handler__$1,meta21754));
});
}
return (new cljs.core.async.t21753(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21757 = buff;if(G__21757)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__21757.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21757);
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
{var val_21774 = (function (){var G__21771 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21771) : cljs.core.deref.call(null,G__21771));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__21772_21775 = val_21774;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21772_21775) : fn1.call(null,G__21772_21775));
} else
{cljs.core.async.impl.dispatch.run(((function (val_21774,ret){
return (function (){var G__21773 = val_21774;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21773) : fn1.call(null,G__21773));
});})(val_21774,ret))
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
{var ret = temp__4217__auto__;var G__21784 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21784) : cljs.core.deref.call(null,G__21784));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4217__auto__))
{var retb = temp__4217__auto__;var ret = (function (){var G__21785 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21785) : cljs.core.deref.call(null,G__21785));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__21786_21788 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21786_21788) : fn1.call(null,G__21786_21788));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4217__auto__){
return (function (){var G__21787 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21787) : fn1.call(null,G__21787));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___21789 = n;var x_21790 = (0);while(true){
if((x_21790 < n__4510__auto___21789))
{(a[x_21790] = (0));
{
var G__21791 = (x_21790 + (1));
x_21790 = G__21791;
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
var G__21792 = (i + (1));
i = G__21792;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__21800 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21800) : cljs.core.atom.call(null,G__21800));
})();if(typeof cljs.core.async.t21801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21801 = (function (flag,alt_flag,meta21802){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21802 = meta21802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21801.cljs$lang$type = true;
cljs.core.async.t21801.cljs$lang$ctorStr = "cljs.core.async/t21801";
cljs.core.async.t21801.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21801");
});})(flag))
;
cljs.core.async.t21801.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__21804 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21804) : cljs.core.deref.call(null,G__21804));
});})(flag))
;
cljs.core.async.t21801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__21805_21807 = self__.flag;var G__21806_21808 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21805_21807,G__21806_21808) : cljs.core.reset_BANG_.call(null,G__21805_21807,G__21806_21808));
return true;
});})(flag))
;
cljs.core.async.t21801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21803){var self__ = this;
var _21803__$1 = this;return self__.meta21802;
});})(flag))
;
cljs.core.async.t21801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21803,meta21802__$1){var self__ = this;
var _21803__$1 = this;return (new cljs.core.async.t21801(self__.flag,self__.alt_flag,meta21802__$1));
});})(flag))
;
cljs.core.async.__GT_t21801 = ((function (flag){
return (function __GT_t21801(flag__$1,alt_flag__$1,meta21802){return (new cljs.core.async.t21801(flag__$1,alt_flag__$1,meta21802));
});})(flag))
;
}
return (new cljs.core.async.t21801(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21812 = (function (cb,flag,alt_handler,meta21813){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21813 = meta21813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21812.cljs$lang$type = true;
cljs.core.async.t21812.cljs$lang$ctorStr = "cljs.core.async/t21812";
cljs.core.async.t21812.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t21812");
});
cljs.core.async.t21812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t21812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t21812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21814){var self__ = this;
var _21814__$1 = this;return self__.meta21813;
});
cljs.core.async.t21812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21814,meta21813__$1){var self__ = this;
var _21814__$1 = this;return (new cljs.core.async.t21812(self__.cb,self__.flag,self__.alt_handler,meta21813__$1));
});
cljs.core.async.__GT_t21812 = (function __GT_t21812(cb__$1,flag__$1,alt_handler__$1,meta21813){return (new cljs.core.async.t21812(cb__$1,flag__$1,alt_handler__$1,meta21813));
});
}
return (new cljs.core.async.t21812(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__21822 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21822) : port.call(null,G__21822));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__21823 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21823) : port.call(null,G__21823));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21815_SHARP_){var G__21824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21815_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21824) : fret.call(null,G__21824));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21816_SHARP_){var G__21825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21816_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21825) : fret.call(null,G__21825));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21826 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21826) : cljs.core.deref.call(null,G__21826));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21827 = (i + (1));
i = G__21827;
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
var alts_BANG___delegate = function (ports,p__21828){var map__21830 = p__21828;var map__21830__$1 = ((cljs.core.seq_QMARK_(map__21830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21830):map__21830);var opts = map__21830__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21828 = null;if (arguments.length > 1) {
  p__21828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21828);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21831){
var ports = cljs.core.first(arglist__21831);
var p__21828 = cljs.core.rest(arglist__21831);
return alts_BANG___delegate(ports,p__21828);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6495__auto___21929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___21929){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___21929){
return (function (state_21905){var state_val_21906 = (state_21905[(1)]);if((state_val_21906 === (7)))
{var inst_21901 = (state_21905[(2)]);var state_21905__$1 = state_21905;var statearr_21907_21930 = state_21905__$1;(statearr_21907_21930[(2)] = inst_21901);
(statearr_21907_21930[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (1)))
{var state_21905__$1 = state_21905;var statearr_21908_21931 = state_21905__$1;(statearr_21908_21931[(2)] = null);
(statearr_21908_21931[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (4)))
{var inst_21884 = (state_21905[(7)]);var inst_21884__$1 = (state_21905[(2)]);var inst_21885 = (inst_21884__$1 == null);var state_21905__$1 = (function (){var statearr_21909 = state_21905;(statearr_21909[(7)] = inst_21884__$1);
return statearr_21909;
})();if(cljs.core.truth_(inst_21885))
{var statearr_21910_21932 = state_21905__$1;(statearr_21910_21932[(1)] = (5));
} else
{var statearr_21911_21933 = state_21905__$1;(statearr_21911_21933[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (13)))
{var state_21905__$1 = state_21905;var statearr_21912_21934 = state_21905__$1;(statearr_21912_21934[(2)] = null);
(statearr_21912_21934[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (6)))
{var inst_21884 = (state_21905[(7)]);var state_21905__$1 = state_21905;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21905__$1,(11),to,inst_21884);
} else
{if((state_val_21906 === (3)))
{var inst_21903 = (state_21905[(2)]);var state_21905__$1 = state_21905;return cljs.core.async.impl.ioc_helpers.return_chan(state_21905__$1,inst_21903);
} else
{if((state_val_21906 === (12)))
{var state_21905__$1 = state_21905;var statearr_21913_21935 = state_21905__$1;(statearr_21913_21935[(2)] = null);
(statearr_21913_21935[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (2)))
{var state_21905__$1 = state_21905;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21905__$1,(4),from);
} else
{if((state_val_21906 === (11)))
{var inst_21894 = (state_21905[(2)]);var state_21905__$1 = state_21905;if(cljs.core.truth_(inst_21894))
{var statearr_21914_21936 = state_21905__$1;(statearr_21914_21936[(1)] = (12));
} else
{var statearr_21915_21937 = state_21905__$1;(statearr_21915_21937[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (9)))
{var state_21905__$1 = state_21905;var statearr_21916_21938 = state_21905__$1;(statearr_21916_21938[(2)] = null);
(statearr_21916_21938[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (5)))
{var state_21905__$1 = state_21905;if(cljs.core.truth_(close_QMARK_))
{var statearr_21917_21939 = state_21905__$1;(statearr_21917_21939[(1)] = (8));
} else
{var statearr_21918_21940 = state_21905__$1;(statearr_21918_21940[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (14)))
{var inst_21899 = (state_21905[(2)]);var state_21905__$1 = state_21905;var statearr_21919_21941 = state_21905__$1;(statearr_21919_21941[(2)] = inst_21899);
(statearr_21919_21941[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (10)))
{var inst_21891 = (state_21905[(2)]);var state_21905__$1 = state_21905;var statearr_21920_21942 = state_21905__$1;(statearr_21920_21942[(2)] = inst_21891);
(statearr_21920_21942[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21906 === (8)))
{var inst_21888 = cljs.core.async.close_BANG_(to);var state_21905__$1 = state_21905;var statearr_21921_21943 = state_21905__$1;(statearr_21921_21943[(2)] = inst_21888);
(statearr_21921_21943[(1)] = (10));
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
});})(c__6495__auto___21929))
;return ((function (switch__6480__auto__,c__6495__auto___21929){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_21925 = [null,null,null,null,null,null,null,null];(statearr_21925[(0)] = state_machine__6481__auto__);
(statearr_21925[(1)] = (1));
return statearr_21925;
});
var state_machine__6481__auto____1 = (function (state_21905){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_21905);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e21926){if((e21926 instanceof Object))
{var ex__6484__auto__ = e21926;var statearr_21927_21944 = state_21905;(statearr_21927_21944[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21905);
return cljs.core.constant$keyword$16;
} else
{throw e21926;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__21945 = state_21905;
state_21905 = G__21945;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_21905){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_21905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___21929))
})();var state__6497__auto__ = (function (){var statearr_21928 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_21928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___21929);
return statearr_21928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___21929))
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
return (function (p__22131){var vec__22132 = p__22131;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132,(1),null);var job = vec__22132;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__6495__auto___22316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results){
return (function (state_22137){var state_val_22138 = (state_22137[(1)]);if((state_val_22138 === (2)))
{var inst_22134 = (state_22137[(2)]);var inst_22135 = cljs.core.async.close_BANG_(res);var state_22137__$1 = (function (){var statearr_22139 = state_22137;(statearr_22139[(7)] = inst_22134);
return statearr_22139;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22137__$1,inst_22135);
} else
{if((state_val_22138 === (1)))
{var state_22137__$1 = state_22137;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22137__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results))
;return ((function (switch__6480__auto__,c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22143 = [null,null,null,null,null,null,null,null];(statearr_22143[(0)] = state_machine__6481__auto__);
(statearr_22143[(1)] = (1));
return statearr_22143;
});
var state_machine__6481__auto____1 = (function (state_22137){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22137);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object))
{var ex__6484__auto__ = e22144;var statearr_22145_22317 = state_22137;(statearr_22145_22317[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22137);
return cljs.core.constant$keyword$16;
} else
{throw e22144;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22318 = state_22137;
state_22137 = G__22318;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22137){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results))
})();var state__6497__auto__ = (function (){var statearr_22146 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22316);
return statearr_22146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22316,res,vec__22132,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22147){var vec__22148 = p__22147;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(1),null);var job = vec__22148;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__22149_22319 = v;var G__22150_22320 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22149_22319,G__22150_22320) : xf.call(null,G__22149_22319,G__22150_22320));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___22321 = n;var __22322 = (0);while(true){
if((__22322 < n__4510__auto___22321))
{var G__22151_22323 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22151_22323) {
case "async":
var c__6495__auto___22325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22322,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (__22322,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function (state_22164){var state_val_22165 = (state_22164[(1)]);if((state_val_22165 === (7)))
{var inst_22160 = (state_22164[(2)]);var state_22164__$1 = state_22164;var statearr_22166_22326 = state_22164__$1;(statearr_22166_22326[(2)] = inst_22160);
(statearr_22166_22326[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22165 === (6)))
{var state_22164__$1 = state_22164;var statearr_22167_22327 = state_22164__$1;(statearr_22167_22327[(2)] = null);
(statearr_22167_22327[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22165 === (5)))
{var state_22164__$1 = state_22164;var statearr_22168_22328 = state_22164__$1;(statearr_22168_22328[(2)] = null);
(statearr_22168_22328[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22165 === (4)))
{var inst_22154 = (state_22164[(2)]);var inst_22155 = async(inst_22154);var state_22164__$1 = state_22164;if(cljs.core.truth_(inst_22155))
{var statearr_22169_22329 = state_22164__$1;(statearr_22169_22329[(1)] = (5));
} else
{var statearr_22170_22330 = state_22164__$1;(statearr_22170_22330[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22165 === (3)))
{var inst_22162 = (state_22164[(2)]);var state_22164__$1 = state_22164;return cljs.core.async.impl.ioc_helpers.return_chan(state_22164__$1,inst_22162);
} else
{if((state_val_22165 === (2)))
{var state_22164__$1 = state_22164;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22164__$1,(4),jobs);
} else
{if((state_val_22165 === (1)))
{var state_22164__$1 = state_22164;var statearr_22171_22331 = state_22164__$1;(statearr_22171_22331[(2)] = null);
(statearr_22171_22331[(1)] = (2));
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
});})(__22322,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
;return ((function (__22322,switch__6480__auto__,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22175 = [null,null,null,null,null,null,null];(statearr_22175[(0)] = state_machine__6481__auto__);
(statearr_22175[(1)] = (1));
return statearr_22175;
});
var state_machine__6481__auto____1 = (function (state_22164){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22164);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22176){if((e22176 instanceof Object))
{var ex__6484__auto__ = e22176;var statearr_22177_22332 = state_22164;(statearr_22177_22332[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22164);
return cljs.core.constant$keyword$16;
} else
{throw e22176;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22333 = state_22164;
state_22164 = G__22333;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22164){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(__22322,switch__6480__auto__,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22178 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22325);
return statearr_22178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(__22322,c__6495__auto___22325,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
);

break;
case "compute":
var c__6495__auto___22334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22322,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (__22322,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function (state_22191){var state_val_22192 = (state_22191[(1)]);if((state_val_22192 === (7)))
{var inst_22187 = (state_22191[(2)]);var state_22191__$1 = state_22191;var statearr_22193_22335 = state_22191__$1;(statearr_22193_22335[(2)] = inst_22187);
(statearr_22193_22335[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22192 === (6)))
{var state_22191__$1 = state_22191;var statearr_22194_22336 = state_22191__$1;(statearr_22194_22336[(2)] = null);
(statearr_22194_22336[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22192 === (5)))
{var state_22191__$1 = state_22191;var statearr_22195_22337 = state_22191__$1;(statearr_22195_22337[(2)] = null);
(statearr_22195_22337[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22192 === (4)))
{var inst_22181 = (state_22191[(2)]);var inst_22182 = process(inst_22181);var state_22191__$1 = state_22191;if(cljs.core.truth_(inst_22182))
{var statearr_22196_22338 = state_22191__$1;(statearr_22196_22338[(1)] = (5));
} else
{var statearr_22197_22339 = state_22191__$1;(statearr_22197_22339[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22192 === (3)))
{var inst_22189 = (state_22191[(2)]);var state_22191__$1 = state_22191;return cljs.core.async.impl.ioc_helpers.return_chan(state_22191__$1,inst_22189);
} else
{if((state_val_22192 === (2)))
{var state_22191__$1 = state_22191;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22191__$1,(4),jobs);
} else
{if((state_val_22192 === (1)))
{var state_22191__$1 = state_22191;var statearr_22198_22340 = state_22191__$1;(statearr_22198_22340[(2)] = null);
(statearr_22198_22340[(1)] = (2));
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
});})(__22322,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
;return ((function (__22322,switch__6480__auto__,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22202 = [null,null,null,null,null,null,null];(statearr_22202[(0)] = state_machine__6481__auto__);
(statearr_22202[(1)] = (1));
return statearr_22202;
});
var state_machine__6481__auto____1 = (function (state_22191){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22191);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22203){if((e22203 instanceof Object))
{var ex__6484__auto__ = e22203;var statearr_22204_22341 = state_22191;(statearr_22204_22341[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22191);
return cljs.core.constant$keyword$16;
} else
{throw e22203;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22342 = state_22191;
state_22191 = G__22342;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22191){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(__22322,switch__6480__auto__,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22205 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22334);
return statearr_22205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(__22322,c__6495__auto___22334,G__22151_22323,n__4510__auto___22321,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22343 = (__22322 + (1));
__22322 = G__22343;
continue;
}
} else
{}
break;
}
var c__6495__auto___22344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22344,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22344,jobs,results,process,async){
return (function (state_22227){var state_val_22228 = (state_22227[(1)]);if((state_val_22228 === (9)))
{var inst_22220 = (state_22227[(2)]);var state_22227__$1 = (function (){var statearr_22229 = state_22227;(statearr_22229[(7)] = inst_22220);
return statearr_22229;
})();var statearr_22230_22345 = state_22227__$1;(statearr_22230_22345[(2)] = null);
(statearr_22230_22345[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22228 === (8)))
{var inst_22213 = (state_22227[(8)]);var inst_22218 = (state_22227[(2)]);var state_22227__$1 = (function (){var statearr_22231 = state_22227;(statearr_22231[(9)] = inst_22218);
return statearr_22231;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22227__$1,(9),results,inst_22213);
} else
{if((state_val_22228 === (7)))
{var inst_22223 = (state_22227[(2)]);var state_22227__$1 = state_22227;var statearr_22232_22346 = state_22227__$1;(statearr_22232_22346[(2)] = inst_22223);
(statearr_22232_22346[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22228 === (6)))
{var inst_22208 = (state_22227[(10)]);var inst_22213 = (state_22227[(8)]);var inst_22213__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_22214 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22215 = [inst_22208,inst_22213__$1];var inst_22216 = (new cljs.core.PersistentVector(null,2,(5),inst_22214,inst_22215,null));var state_22227__$1 = (function (){var statearr_22233 = state_22227;(statearr_22233[(8)] = inst_22213__$1);
return statearr_22233;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22227__$1,(8),jobs,inst_22216);
} else
{if((state_val_22228 === (5)))
{var inst_22211 = cljs.core.async.close_BANG_(jobs);var state_22227__$1 = state_22227;var statearr_22234_22347 = state_22227__$1;(statearr_22234_22347[(2)] = inst_22211);
(statearr_22234_22347[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22228 === (4)))
{var inst_22208 = (state_22227[(10)]);var inst_22208__$1 = (state_22227[(2)]);var inst_22209 = (inst_22208__$1 == null);var state_22227__$1 = (function (){var statearr_22235 = state_22227;(statearr_22235[(10)] = inst_22208__$1);
return statearr_22235;
})();if(cljs.core.truth_(inst_22209))
{var statearr_22236_22348 = state_22227__$1;(statearr_22236_22348[(1)] = (5));
} else
{var statearr_22237_22349 = state_22227__$1;(statearr_22237_22349[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22228 === (3)))
{var inst_22225 = (state_22227[(2)]);var state_22227__$1 = state_22227;return cljs.core.async.impl.ioc_helpers.return_chan(state_22227__$1,inst_22225);
} else
{if((state_val_22228 === (2)))
{var state_22227__$1 = state_22227;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22227__$1,(4),from);
} else
{if((state_val_22228 === (1)))
{var state_22227__$1 = state_22227;var statearr_22238_22350 = state_22227__$1;(statearr_22238_22350[(2)] = null);
(statearr_22238_22350[(1)] = (2));
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
});})(c__6495__auto___22344,jobs,results,process,async))
;return ((function (switch__6480__auto__,c__6495__auto___22344,jobs,results,process,async){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22242 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22242[(0)] = state_machine__6481__auto__);
(statearr_22242[(1)] = (1));
return statearr_22242;
});
var state_machine__6481__auto____1 = (function (state_22227){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22227);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22243){if((e22243 instanceof Object))
{var ex__6484__auto__ = e22243;var statearr_22244_22351 = state_22227;(statearr_22244_22351[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22227);
return cljs.core.constant$keyword$16;
} else
{throw e22243;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22352 = state_22227;
state_22227 = G__22352;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22227){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22344,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22245 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22344);
return statearr_22245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22344,jobs,results,process,async))
);
var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__,jobs,results,process,async){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__,jobs,results,process,async){
return (function (state_22283){var state_val_22284 = (state_22283[(1)]);if((state_val_22284 === (7)))
{var inst_22279 = (state_22283[(2)]);var state_22283__$1 = state_22283;var statearr_22285_22353 = state_22283__$1;(statearr_22285_22353[(2)] = inst_22279);
(statearr_22285_22353[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (20)))
{var state_22283__$1 = state_22283;var statearr_22286_22354 = state_22283__$1;(statearr_22286_22354[(2)] = null);
(statearr_22286_22354[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (1)))
{var state_22283__$1 = state_22283;var statearr_22287_22355 = state_22283__$1;(statearr_22287_22355[(2)] = null);
(statearr_22287_22355[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (4)))
{var inst_22248 = (state_22283[(7)]);var inst_22248__$1 = (state_22283[(2)]);var inst_22249 = (inst_22248__$1 == null);var state_22283__$1 = (function (){var statearr_22288 = state_22283;(statearr_22288[(7)] = inst_22248__$1);
return statearr_22288;
})();if(cljs.core.truth_(inst_22249))
{var statearr_22289_22356 = state_22283__$1;(statearr_22289_22356[(1)] = (5));
} else
{var statearr_22290_22357 = state_22283__$1;(statearr_22290_22357[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (15)))
{var inst_22261 = (state_22283[(8)]);var state_22283__$1 = state_22283;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22283__$1,(18),to,inst_22261);
} else
{if((state_val_22284 === (21)))
{var inst_22274 = (state_22283[(2)]);var state_22283__$1 = state_22283;var statearr_22291_22358 = state_22283__$1;(statearr_22291_22358[(2)] = inst_22274);
(statearr_22291_22358[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (13)))
{var inst_22276 = (state_22283[(2)]);var state_22283__$1 = (function (){var statearr_22292 = state_22283;(statearr_22292[(9)] = inst_22276);
return statearr_22292;
})();var statearr_22293_22359 = state_22283__$1;(statearr_22293_22359[(2)] = null);
(statearr_22293_22359[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (6)))
{var inst_22248 = (state_22283[(7)]);var state_22283__$1 = state_22283;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22283__$1,(11),inst_22248);
} else
{if((state_val_22284 === (17)))
{var inst_22269 = (state_22283[(2)]);var state_22283__$1 = state_22283;if(cljs.core.truth_(inst_22269))
{var statearr_22294_22360 = state_22283__$1;(statearr_22294_22360[(1)] = (19));
} else
{var statearr_22295_22361 = state_22283__$1;(statearr_22295_22361[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (3)))
{var inst_22281 = (state_22283[(2)]);var state_22283__$1 = state_22283;return cljs.core.async.impl.ioc_helpers.return_chan(state_22283__$1,inst_22281);
} else
{if((state_val_22284 === (12)))
{var inst_22258 = (state_22283[(10)]);var state_22283__$1 = state_22283;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22283__$1,(14),inst_22258);
} else
{if((state_val_22284 === (2)))
{var state_22283__$1 = state_22283;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22283__$1,(4),results);
} else
{if((state_val_22284 === (19)))
{var state_22283__$1 = state_22283;var statearr_22296_22362 = state_22283__$1;(statearr_22296_22362[(2)] = null);
(statearr_22296_22362[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (11)))
{var inst_22258 = (state_22283[(2)]);var state_22283__$1 = (function (){var statearr_22297 = state_22283;(statearr_22297[(10)] = inst_22258);
return statearr_22297;
})();var statearr_22298_22363 = state_22283__$1;(statearr_22298_22363[(2)] = null);
(statearr_22298_22363[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (9)))
{var state_22283__$1 = state_22283;var statearr_22299_22364 = state_22283__$1;(statearr_22299_22364[(2)] = null);
(statearr_22299_22364[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (5)))
{var state_22283__$1 = state_22283;if(cljs.core.truth_(close_QMARK_))
{var statearr_22300_22365 = state_22283__$1;(statearr_22300_22365[(1)] = (8));
} else
{var statearr_22301_22366 = state_22283__$1;(statearr_22301_22366[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (14)))
{var inst_22261 = (state_22283[(8)]);var inst_22263 = (state_22283[(11)]);var inst_22261__$1 = (state_22283[(2)]);var inst_22262 = (inst_22261__$1 == null);var inst_22263__$1 = cljs.core.not(inst_22262);var state_22283__$1 = (function (){var statearr_22302 = state_22283;(statearr_22302[(8)] = inst_22261__$1);
(statearr_22302[(11)] = inst_22263__$1);
return statearr_22302;
})();if(inst_22263__$1)
{var statearr_22303_22367 = state_22283__$1;(statearr_22303_22367[(1)] = (15));
} else
{var statearr_22304_22368 = state_22283__$1;(statearr_22304_22368[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (16)))
{var inst_22263 = (state_22283[(11)]);var state_22283__$1 = state_22283;var statearr_22305_22369 = state_22283__$1;(statearr_22305_22369[(2)] = inst_22263);
(statearr_22305_22369[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (10)))
{var inst_22255 = (state_22283[(2)]);var state_22283__$1 = state_22283;var statearr_22306_22370 = state_22283__$1;(statearr_22306_22370[(2)] = inst_22255);
(statearr_22306_22370[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (18)))
{var inst_22266 = (state_22283[(2)]);var state_22283__$1 = state_22283;var statearr_22307_22371 = state_22283__$1;(statearr_22307_22371[(2)] = inst_22266);
(statearr_22307_22371[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22284 === (8)))
{var inst_22252 = cljs.core.async.close_BANG_(to);var state_22283__$1 = state_22283;var statearr_22308_22372 = state_22283__$1;(statearr_22308_22372[(2)] = inst_22252);
(statearr_22308_22372[(1)] = (10));
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
var state_machine__6481__auto____0 = (function (){var statearr_22312 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22312[(0)] = state_machine__6481__auto__);
(statearr_22312[(1)] = (1));
return statearr_22312;
});
var state_machine__6481__auto____1 = (function (state_22283){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22283);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22313){if((e22313 instanceof Object))
{var ex__6484__auto__ = e22313;var statearr_22314_22373 = state_22283;(statearr_22314_22373[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22283);
return cljs.core.constant$keyword$16;
} else
{throw e22313;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22374 = state_22283;
state_22283 = G__22374;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22283){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__,jobs,results,process,async))
})();var state__6497__auto__ = (function (){var statearr_22315 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22315;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6495__auto___22497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___22497,tc,fc){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___22497,tc,fc){
return (function (state_22471){var state_val_22472 = (state_22471[(1)]);if((state_val_22472 === (7)))
{var inst_22467 = (state_22471[(2)]);var state_22471__$1 = state_22471;var statearr_22473_22498 = state_22471__$1;(statearr_22473_22498[(2)] = inst_22467);
(statearr_22473_22498[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (1)))
{var state_22471__$1 = state_22471;var statearr_22474_22499 = state_22471__$1;(statearr_22474_22499[(2)] = null);
(statearr_22474_22499[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (4)))
{var inst_22448 = (state_22471[(7)]);var inst_22448__$1 = (state_22471[(2)]);var inst_22449 = (inst_22448__$1 == null);var state_22471__$1 = (function (){var statearr_22475 = state_22471;(statearr_22475[(7)] = inst_22448__$1);
return statearr_22475;
})();if(cljs.core.truth_(inst_22449))
{var statearr_22476_22500 = state_22471__$1;(statearr_22476_22500[(1)] = (5));
} else
{var statearr_22477_22501 = state_22471__$1;(statearr_22477_22501[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (13)))
{var state_22471__$1 = state_22471;var statearr_22478_22502 = state_22471__$1;(statearr_22478_22502[(2)] = null);
(statearr_22478_22502[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (6)))
{var inst_22448 = (state_22471[(7)]);var inst_22454 = (function (){var G__22479 = inst_22448;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22479) : p.call(null,G__22479));
})();var state_22471__$1 = state_22471;if(cljs.core.truth_(inst_22454))
{var statearr_22480_22503 = state_22471__$1;(statearr_22480_22503[(1)] = (9));
} else
{var statearr_22481_22504 = state_22471__$1;(statearr_22481_22504[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (3)))
{var inst_22469 = (state_22471[(2)]);var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.return_chan(state_22471__$1,inst_22469);
} else
{if((state_val_22472 === (12)))
{var state_22471__$1 = state_22471;var statearr_22482_22505 = state_22471__$1;(statearr_22482_22505[(2)] = null);
(statearr_22482_22505[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (2)))
{var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22471__$1,(4),ch);
} else
{if((state_val_22472 === (11)))
{var inst_22448 = (state_22471[(7)]);var inst_22458 = (state_22471[(2)]);var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22471__$1,(8),inst_22458,inst_22448);
} else
{if((state_val_22472 === (9)))
{var state_22471__$1 = state_22471;var statearr_22483_22506 = state_22471__$1;(statearr_22483_22506[(2)] = tc);
(statearr_22483_22506[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (5)))
{var inst_22451 = cljs.core.async.close_BANG_(tc);var inst_22452 = cljs.core.async.close_BANG_(fc);var state_22471__$1 = (function (){var statearr_22484 = state_22471;(statearr_22484[(8)] = inst_22451);
return statearr_22484;
})();var statearr_22485_22507 = state_22471__$1;(statearr_22485_22507[(2)] = inst_22452);
(statearr_22485_22507[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (14)))
{var inst_22465 = (state_22471[(2)]);var state_22471__$1 = state_22471;var statearr_22486_22508 = state_22471__$1;(statearr_22486_22508[(2)] = inst_22465);
(statearr_22486_22508[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (10)))
{var state_22471__$1 = state_22471;var statearr_22487_22509 = state_22471__$1;(statearr_22487_22509[(2)] = fc);
(statearr_22487_22509[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22472 === (8)))
{var inst_22460 = (state_22471[(2)]);var state_22471__$1 = state_22471;if(cljs.core.truth_(inst_22460))
{var statearr_22488_22510 = state_22471__$1;(statearr_22488_22510[(1)] = (12));
} else
{var statearr_22489_22511 = state_22471__$1;(statearr_22489_22511[(1)] = (13));
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
});})(c__6495__auto___22497,tc,fc))
;return ((function (switch__6480__auto__,c__6495__auto___22497,tc,fc){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_22493 = [null,null,null,null,null,null,null,null,null];(statearr_22493[(0)] = state_machine__6481__auto__);
(statearr_22493[(1)] = (1));
return statearr_22493;
});
var state_machine__6481__auto____1 = (function (state_22471){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22471);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22494){if((e22494 instanceof Object))
{var ex__6484__auto__ = e22494;var statearr_22495_22512 = state_22471;(statearr_22495_22512[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22471);
return cljs.core.constant$keyword$16;
} else
{throw e22494;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22513 = state_22471;
state_22471 = G__22513;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___22497,tc,fc))
})();var state__6497__auto__ = (function (){var statearr_22496 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___22497);
return statearr_22496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___22497,tc,fc))
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
return (function (state_22562){var state_val_22563 = (state_22562[(1)]);if((state_val_22563 === (7)))
{var inst_22558 = (state_22562[(2)]);var state_22562__$1 = state_22562;var statearr_22564_22582 = state_22562__$1;(statearr_22564_22582[(2)] = inst_22558);
(statearr_22564_22582[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22563 === (6)))
{var inst_22551 = (state_22562[(7)]);var inst_22548 = (state_22562[(8)]);var inst_22555 = (function (){var G__22565 = inst_22548;var G__22566 = inst_22551;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22565,G__22566) : f.call(null,G__22565,G__22566));
})();var inst_22548__$1 = inst_22555;var state_22562__$1 = (function (){var statearr_22567 = state_22562;(statearr_22567[(8)] = inst_22548__$1);
return statearr_22567;
})();var statearr_22568_22583 = state_22562__$1;(statearr_22568_22583[(2)] = null);
(statearr_22568_22583[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22563 === (5)))
{var inst_22548 = (state_22562[(8)]);var state_22562__$1 = state_22562;var statearr_22569_22584 = state_22562__$1;(statearr_22569_22584[(2)] = inst_22548);
(statearr_22569_22584[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22563 === (4)))
{var inst_22551 = (state_22562[(7)]);var inst_22551__$1 = (state_22562[(2)]);var inst_22552 = (inst_22551__$1 == null);var state_22562__$1 = (function (){var statearr_22570 = state_22562;(statearr_22570[(7)] = inst_22551__$1);
return statearr_22570;
})();if(cljs.core.truth_(inst_22552))
{var statearr_22571_22585 = state_22562__$1;(statearr_22571_22585[(1)] = (5));
} else
{var statearr_22572_22586 = state_22562__$1;(statearr_22572_22586[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22563 === (3)))
{var inst_22560 = (state_22562[(2)]);var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.return_chan(state_22562__$1,inst_22560);
} else
{if((state_val_22563 === (2)))
{var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22562__$1,(4),ch);
} else
{if((state_val_22563 === (1)))
{var inst_22548 = init;var state_22562__$1 = (function (){var statearr_22573 = state_22562;(statearr_22573[(8)] = inst_22548);
return statearr_22573;
})();var statearr_22574_22587 = state_22562__$1;(statearr_22574_22587[(2)] = null);
(statearr_22574_22587[(1)] = (2));
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
var state_machine__6481__auto____0 = (function (){var statearr_22578 = [null,null,null,null,null,null,null,null,null];(statearr_22578[(0)] = state_machine__6481__auto__);
(statearr_22578[(1)] = (1));
return statearr_22578;
});
var state_machine__6481__auto____1 = (function (state_22562){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22562);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22579){if((e22579 instanceof Object))
{var ex__6484__auto__ = e22579;var statearr_22580_22588 = state_22562;(statearr_22580_22588[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22562);
return cljs.core.constant$keyword$16;
} else
{throw e22579;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22589 = state_22562;
state_22562 = G__22589;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22562){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_22581 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22581;
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
return (function (state_22666){var state_val_22667 = (state_22666[(1)]);if((state_val_22667 === (7)))
{var inst_22648 = (state_22666[(2)]);var state_22666__$1 = state_22666;var statearr_22668_22691 = state_22666__$1;(statearr_22668_22691[(2)] = inst_22648);
(statearr_22668_22691[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (1)))
{var inst_22642 = cljs.core.seq(coll);var inst_22643 = inst_22642;var state_22666__$1 = (function (){var statearr_22669 = state_22666;(statearr_22669[(7)] = inst_22643);
return statearr_22669;
})();var statearr_22670_22692 = state_22666__$1;(statearr_22670_22692[(2)] = null);
(statearr_22670_22692[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (4)))
{var inst_22643 = (state_22666[(7)]);var inst_22646 = cljs.core.first(inst_22643);var state_22666__$1 = state_22666;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22666__$1,(7),ch,inst_22646);
} else
{if((state_val_22667 === (13)))
{var inst_22660 = (state_22666[(2)]);var state_22666__$1 = state_22666;var statearr_22671_22693 = state_22666__$1;(statearr_22671_22693[(2)] = inst_22660);
(statearr_22671_22693[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (6)))
{var inst_22651 = (state_22666[(2)]);var state_22666__$1 = state_22666;if(cljs.core.truth_(inst_22651))
{var statearr_22672_22694 = state_22666__$1;(statearr_22672_22694[(1)] = (8));
} else
{var statearr_22673_22695 = state_22666__$1;(statearr_22673_22695[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (3)))
{var inst_22664 = (state_22666[(2)]);var state_22666__$1 = state_22666;return cljs.core.async.impl.ioc_helpers.return_chan(state_22666__$1,inst_22664);
} else
{if((state_val_22667 === (12)))
{var state_22666__$1 = state_22666;var statearr_22674_22696 = state_22666__$1;(statearr_22674_22696[(2)] = null);
(statearr_22674_22696[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (2)))
{var inst_22643 = (state_22666[(7)]);var state_22666__$1 = state_22666;if(cljs.core.truth_(inst_22643))
{var statearr_22675_22697 = state_22666__$1;(statearr_22675_22697[(1)] = (4));
} else
{var statearr_22676_22698 = state_22666__$1;(statearr_22676_22698[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (11)))
{var inst_22657 = cljs.core.async.close_BANG_(ch);var state_22666__$1 = state_22666;var statearr_22677_22699 = state_22666__$1;(statearr_22677_22699[(2)] = inst_22657);
(statearr_22677_22699[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (9)))
{var state_22666__$1 = state_22666;if(cljs.core.truth_(close_QMARK_))
{var statearr_22678_22700 = state_22666__$1;(statearr_22678_22700[(1)] = (11));
} else
{var statearr_22679_22701 = state_22666__$1;(statearr_22679_22701[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (5)))
{var inst_22643 = (state_22666[(7)]);var state_22666__$1 = state_22666;var statearr_22680_22702 = state_22666__$1;(statearr_22680_22702[(2)] = inst_22643);
(statearr_22680_22702[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (10)))
{var inst_22662 = (state_22666[(2)]);var state_22666__$1 = state_22666;var statearr_22681_22703 = state_22666__$1;(statearr_22681_22703[(2)] = inst_22662);
(statearr_22681_22703[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22667 === (8)))
{var inst_22643 = (state_22666[(7)]);var inst_22653 = cljs.core.next(inst_22643);var inst_22643__$1 = inst_22653;var state_22666__$1 = (function (){var statearr_22682 = state_22666;(statearr_22682[(7)] = inst_22643__$1);
return statearr_22682;
})();var statearr_22683_22704 = state_22666__$1;(statearr_22683_22704[(2)] = null);
(statearr_22683_22704[(1)] = (2));
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
var state_machine__6481__auto____0 = (function (){var statearr_22687 = [null,null,null,null,null,null,null,null];(statearr_22687[(0)] = state_machine__6481__auto__);
(statearr_22687[(1)] = (1));
return statearr_22687;
});
var state_machine__6481__auto____1 = (function (state_22666){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_22666);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object))
{var ex__6484__auto__ = e22688;var statearr_22689_22705 = state_22666;(statearr_22689_22705[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22666);
return cljs.core.constant$keyword$16;
} else
{throw e22688;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__22706 = state_22666;
state_22666 = G__22706;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_22666){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_22666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_22690 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_22690;
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
cljs.core.async.Mux = (function (){var obj22708 = {};return obj22708;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__22712 = x__4277__auto__;return goog.typeOf(G__22712);
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
cljs.core.async.Mult = (function (){var obj22714 = {};return obj22714;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__22718 = x__4277__auto__;return goog.typeOf(G__22718);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__22722 = x__4277__auto__;return goog.typeOf(G__22722);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__22726 = x__4277__auto__;return goog.typeOf(G__22726);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__22956 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22956) : cljs.core.atom.call(null,G__22956));
})();var m = (function (){if(typeof cljs.core.async.t22957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22957 = (function (cs,ch,mult,meta22958){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22958 = meta22958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22957.cljs$lang$type = true;
cljs.core.async.t22957.cljs$lang$ctorStr = "cljs.core.async/t22957";
cljs.core.async.t22957.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22957");
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__22960_23185 = self__.cs;var G__22961_23186 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22960_23185,G__22961_23186) : cljs.core.reset_BANG_.call(null,G__22960_23185,G__22961_23186));
return null;
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22959){var self__ = this;
var _22959__$1 = this;return self__.meta22958;
});})(cs))
;
cljs.core.async.t22957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22959,meta22958__$1){var self__ = this;
var _22959__$1 = this;return (new cljs.core.async.t22957(self__.cs,self__.ch,self__.mult,meta22958__$1));
});})(cs))
;
cljs.core.async.__GT_t22957 = ((function (cs){
return (function __GT_t22957(cs__$1,ch__$1,mult__$1,meta22958){return (new cljs.core.async.t22957(cs__$1,ch__$1,mult__$1,meta22958));
});})(cs))
;
}
return (new cljs.core.async.t22957(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__22962 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22962) : cljs.core.atom.call(null,G__22962));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6495__auto___23187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23187,cs,m,dchan,dctr,done){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23187,cs,m,dchan,dctr,done){
return (function (state_23093){var state_val_23094 = (state_23093[(1)]);if((state_val_23094 === (7)))
{var inst_23089 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23095_23188 = state_23093__$1;(statearr_23095_23188[(2)] = inst_23089);
(statearr_23095_23188[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (20)))
{var inst_22994 = (state_23093[(7)]);var inst_23004 = cljs.core.first(inst_22994);var inst_23005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23004,(0),null);var inst_23006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23004,(1),null);var state_23093__$1 = (function (){var statearr_23096 = state_23093;(statearr_23096[(8)] = inst_23005);
return statearr_23096;
})();if(cljs.core.truth_(inst_23006))
{var statearr_23097_23189 = state_23093__$1;(statearr_23097_23189[(1)] = (22));
} else
{var statearr_23098_23190 = state_23093__$1;(statearr_23098_23190[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (27)))
{var inst_22965 = (state_23093[(9)]);var inst_23041 = (state_23093[(10)]);var inst_23034 = (state_23093[(11)]);var inst_23036 = (state_23093[(12)]);var inst_23041__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23034,inst_23036);var inst_23042 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23041__$1,inst_22965,done);var state_23093__$1 = (function (){var statearr_23099 = state_23093;(statearr_23099[(10)] = inst_23041__$1);
return statearr_23099;
})();if(cljs.core.truth_(inst_23042))
{var statearr_23100_23191 = state_23093__$1;(statearr_23100_23191[(1)] = (30));
} else
{var statearr_23101_23192 = state_23093__$1;(statearr_23101_23192[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (1)))
{var state_23093__$1 = state_23093;var statearr_23102_23193 = state_23093__$1;(statearr_23102_23193[(2)] = null);
(statearr_23102_23193[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (24)))
{var inst_22994 = (state_23093[(7)]);var inst_23011 = (state_23093[(2)]);var inst_23012 = cljs.core.next(inst_22994);var inst_22974 = inst_23012;var inst_22975 = null;var inst_22976 = (0);var inst_22977 = (0);var state_23093__$1 = (function (){var statearr_23103 = state_23093;(statearr_23103[(13)] = inst_23011);
(statearr_23103[(14)] = inst_22976);
(statearr_23103[(15)] = inst_22974);
(statearr_23103[(16)] = inst_22975);
(statearr_23103[(17)] = inst_22977);
return statearr_23103;
})();var statearr_23104_23194 = state_23093__$1;(statearr_23104_23194[(2)] = null);
(statearr_23104_23194[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (39)))
{var state_23093__$1 = state_23093;var statearr_23108_23195 = state_23093__$1;(statearr_23108_23195[(2)] = null);
(statearr_23108_23195[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (4)))
{var inst_22965 = (state_23093[(9)]);var inst_22965__$1 = (state_23093[(2)]);var inst_22966 = (inst_22965__$1 == null);var state_23093__$1 = (function (){var statearr_23109 = state_23093;(statearr_23109[(9)] = inst_22965__$1);
return statearr_23109;
})();if(cljs.core.truth_(inst_22966))
{var statearr_23110_23196 = state_23093__$1;(statearr_23110_23196[(1)] = (5));
} else
{var statearr_23111_23197 = state_23093__$1;(statearr_23111_23197[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (15)))
{var inst_22976 = (state_23093[(14)]);var inst_22974 = (state_23093[(15)]);var inst_22975 = (state_23093[(16)]);var inst_22977 = (state_23093[(17)]);var inst_22990 = (state_23093[(2)]);var inst_22991 = (inst_22977 + (1));var tmp23105 = inst_22976;var tmp23106 = inst_22974;var tmp23107 = inst_22975;var inst_22974__$1 = tmp23106;var inst_22975__$1 = tmp23107;var inst_22976__$1 = tmp23105;var inst_22977__$1 = inst_22991;var state_23093__$1 = (function (){var statearr_23112 = state_23093;(statearr_23112[(14)] = inst_22976__$1);
(statearr_23112[(15)] = inst_22974__$1);
(statearr_23112[(18)] = inst_22990);
(statearr_23112[(16)] = inst_22975__$1);
(statearr_23112[(17)] = inst_22977__$1);
return statearr_23112;
})();var statearr_23113_23198 = state_23093__$1;(statearr_23113_23198[(2)] = null);
(statearr_23113_23198[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (21)))
{var inst_23015 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23117_23199 = state_23093__$1;(statearr_23117_23199[(2)] = inst_23015);
(statearr_23117_23199[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (31)))
{var inst_23041 = (state_23093[(10)]);var inst_23045 = done(null);var inst_23046 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23041);var state_23093__$1 = (function (){var statearr_23118 = state_23093;(statearr_23118[(19)] = inst_23045);
return statearr_23118;
})();var statearr_23119_23200 = state_23093__$1;(statearr_23119_23200[(2)] = inst_23046);
(statearr_23119_23200[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (32)))
{var inst_23033 = (state_23093[(20)]);var inst_23034 = (state_23093[(11)]);var inst_23035 = (state_23093[(21)]);var inst_23036 = (state_23093[(12)]);var inst_23048 = (state_23093[(2)]);var inst_23049 = (inst_23036 + (1));var tmp23114 = inst_23033;var tmp23115 = inst_23034;var tmp23116 = inst_23035;var inst_23033__$1 = tmp23114;var inst_23034__$1 = tmp23115;var inst_23035__$1 = tmp23116;var inst_23036__$1 = inst_23049;var state_23093__$1 = (function (){var statearr_23120 = state_23093;(statearr_23120[(20)] = inst_23033__$1);
(statearr_23120[(11)] = inst_23034__$1);
(statearr_23120[(21)] = inst_23035__$1);
(statearr_23120[(22)] = inst_23048);
(statearr_23120[(12)] = inst_23036__$1);
return statearr_23120;
})();var statearr_23121_23201 = state_23093__$1;(statearr_23121_23201[(2)] = null);
(statearr_23121_23201[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (40)))
{var inst_23061 = (state_23093[(23)]);var inst_23065 = done(null);var inst_23066 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23061);var state_23093__$1 = (function (){var statearr_23122 = state_23093;(statearr_23122[(24)] = inst_23065);
return statearr_23122;
})();var statearr_23123_23202 = state_23093__$1;(statearr_23123_23202[(2)] = inst_23066);
(statearr_23123_23202[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (33)))
{var inst_23052 = (state_23093[(25)]);var inst_23054 = cljs.core.chunked_seq_QMARK_(inst_23052);var state_23093__$1 = state_23093;if(inst_23054)
{var statearr_23124_23203 = state_23093__$1;(statearr_23124_23203[(1)] = (36));
} else
{var statearr_23125_23204 = state_23093__$1;(statearr_23125_23204[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (13)))
{var inst_22984 = (state_23093[(26)]);var inst_22987 = cljs.core.async.close_BANG_(inst_22984);var state_23093__$1 = state_23093;var statearr_23126_23205 = state_23093__$1;(statearr_23126_23205[(2)] = inst_22987);
(statearr_23126_23205[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (22)))
{var inst_23005 = (state_23093[(8)]);var inst_23008 = cljs.core.async.close_BANG_(inst_23005);var state_23093__$1 = state_23093;var statearr_23127_23206 = state_23093__$1;(statearr_23127_23206[(2)] = inst_23008);
(statearr_23127_23206[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (36)))
{var inst_23052 = (state_23093[(25)]);var inst_23056 = cljs.core.chunk_first(inst_23052);var inst_23057 = cljs.core.chunk_rest(inst_23052);var inst_23058 = cljs.core.count(inst_23056);var inst_23033 = inst_23057;var inst_23034 = inst_23056;var inst_23035 = inst_23058;var inst_23036 = (0);var state_23093__$1 = (function (){var statearr_23128 = state_23093;(statearr_23128[(20)] = inst_23033);
(statearr_23128[(11)] = inst_23034);
(statearr_23128[(21)] = inst_23035);
(statearr_23128[(12)] = inst_23036);
return statearr_23128;
})();var statearr_23129_23207 = state_23093__$1;(statearr_23129_23207[(2)] = null);
(statearr_23129_23207[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (41)))
{var inst_23052 = (state_23093[(25)]);var inst_23068 = (state_23093[(2)]);var inst_23069 = cljs.core.next(inst_23052);var inst_23033 = inst_23069;var inst_23034 = null;var inst_23035 = (0);var inst_23036 = (0);var state_23093__$1 = (function (){var statearr_23130 = state_23093;(statearr_23130[(27)] = inst_23068);
(statearr_23130[(20)] = inst_23033);
(statearr_23130[(11)] = inst_23034);
(statearr_23130[(21)] = inst_23035);
(statearr_23130[(12)] = inst_23036);
return statearr_23130;
})();var statearr_23131_23208 = state_23093__$1;(statearr_23131_23208[(2)] = null);
(statearr_23131_23208[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (43)))
{var state_23093__$1 = state_23093;var statearr_23132_23209 = state_23093__$1;(statearr_23132_23209[(2)] = null);
(statearr_23132_23209[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (29)))
{var inst_23077 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23133_23210 = state_23093__$1;(statearr_23133_23210[(2)] = inst_23077);
(statearr_23133_23210[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (44)))
{var inst_23086 = (state_23093[(2)]);var state_23093__$1 = (function (){var statearr_23134 = state_23093;(statearr_23134[(28)] = inst_23086);
return statearr_23134;
})();var statearr_23135_23211 = state_23093__$1;(statearr_23135_23211[(2)] = null);
(statearr_23135_23211[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (6)))
{var inst_23025 = (state_23093[(29)]);var inst_23024 = (function (){var G__23136 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23136) : cljs.core.deref.call(null,G__23136));
})();var inst_23025__$1 = cljs.core.keys(inst_23024);var inst_23026 = cljs.core.count(inst_23025__$1);var inst_23027 = (function (){var G__23137 = dctr;var G__23138 = inst_23026;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23137,G__23138) : cljs.core.reset_BANG_.call(null,G__23137,G__23138));
})();var inst_23032 = cljs.core.seq(inst_23025__$1);var inst_23033 = inst_23032;var inst_23034 = null;var inst_23035 = (0);var inst_23036 = (0);var state_23093__$1 = (function (){var statearr_23139 = state_23093;(statearr_23139[(30)] = inst_23027);
(statearr_23139[(20)] = inst_23033);
(statearr_23139[(11)] = inst_23034);
(statearr_23139[(21)] = inst_23035);
(statearr_23139[(29)] = inst_23025__$1);
(statearr_23139[(12)] = inst_23036);
return statearr_23139;
})();var statearr_23140_23212 = state_23093__$1;(statearr_23140_23212[(2)] = null);
(statearr_23140_23212[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (28)))
{var inst_23033 = (state_23093[(20)]);var inst_23052 = (state_23093[(25)]);var inst_23052__$1 = cljs.core.seq(inst_23033);var state_23093__$1 = (function (){var statearr_23141 = state_23093;(statearr_23141[(25)] = inst_23052__$1);
return statearr_23141;
})();if(inst_23052__$1)
{var statearr_23142_23213 = state_23093__$1;(statearr_23142_23213[(1)] = (33));
} else
{var statearr_23143_23214 = state_23093__$1;(statearr_23143_23214[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (25)))
{var inst_23035 = (state_23093[(21)]);var inst_23036 = (state_23093[(12)]);var inst_23038 = (inst_23036 < inst_23035);var inst_23039 = inst_23038;var state_23093__$1 = state_23093;if(cljs.core.truth_(inst_23039))
{var statearr_23144_23215 = state_23093__$1;(statearr_23144_23215[(1)] = (27));
} else
{var statearr_23145_23216 = state_23093__$1;(statearr_23145_23216[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (34)))
{var state_23093__$1 = state_23093;var statearr_23146_23217 = state_23093__$1;(statearr_23146_23217[(2)] = null);
(statearr_23146_23217[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (17)))
{var state_23093__$1 = state_23093;var statearr_23147_23218 = state_23093__$1;(statearr_23147_23218[(2)] = null);
(statearr_23147_23218[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (3)))
{var inst_23091 = (state_23093[(2)]);var state_23093__$1 = state_23093;return cljs.core.async.impl.ioc_helpers.return_chan(state_23093__$1,inst_23091);
} else
{if((state_val_23094 === (12)))
{var inst_23020 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23148_23219 = state_23093__$1;(statearr_23148_23219[(2)] = inst_23020);
(statearr_23148_23219[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (2)))
{var state_23093__$1 = state_23093;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23093__$1,(4),ch);
} else
{if((state_val_23094 === (23)))
{var state_23093__$1 = state_23093;var statearr_23149_23220 = state_23093__$1;(statearr_23149_23220[(2)] = null);
(statearr_23149_23220[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (35)))
{var inst_23075 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23150_23221 = state_23093__$1;(statearr_23150_23221[(2)] = inst_23075);
(statearr_23150_23221[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (19)))
{var inst_22994 = (state_23093[(7)]);var inst_22998 = cljs.core.chunk_first(inst_22994);var inst_22999 = cljs.core.chunk_rest(inst_22994);var inst_23000 = cljs.core.count(inst_22998);var inst_22974 = inst_22999;var inst_22975 = inst_22998;var inst_22976 = inst_23000;var inst_22977 = (0);var state_23093__$1 = (function (){var statearr_23151 = state_23093;(statearr_23151[(14)] = inst_22976);
(statearr_23151[(15)] = inst_22974);
(statearr_23151[(16)] = inst_22975);
(statearr_23151[(17)] = inst_22977);
return statearr_23151;
})();var statearr_23152_23222 = state_23093__$1;(statearr_23152_23222[(2)] = null);
(statearr_23152_23222[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (11)))
{var inst_22994 = (state_23093[(7)]);var inst_22974 = (state_23093[(15)]);var inst_22994__$1 = cljs.core.seq(inst_22974);var state_23093__$1 = (function (){var statearr_23153 = state_23093;(statearr_23153[(7)] = inst_22994__$1);
return statearr_23153;
})();if(inst_22994__$1)
{var statearr_23154_23223 = state_23093__$1;(statearr_23154_23223[(1)] = (16));
} else
{var statearr_23155_23224 = state_23093__$1;(statearr_23155_23224[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (9)))
{var inst_23022 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23156_23225 = state_23093__$1;(statearr_23156_23225[(2)] = inst_23022);
(statearr_23156_23225[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (5)))
{var inst_22972 = (function (){var G__23157 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23157) : cljs.core.deref.call(null,G__23157));
})();var inst_22973 = cljs.core.seq(inst_22972);var inst_22974 = inst_22973;var inst_22975 = null;var inst_22976 = (0);var inst_22977 = (0);var state_23093__$1 = (function (){var statearr_23158 = state_23093;(statearr_23158[(14)] = inst_22976);
(statearr_23158[(15)] = inst_22974);
(statearr_23158[(16)] = inst_22975);
(statearr_23158[(17)] = inst_22977);
return statearr_23158;
})();var statearr_23159_23226 = state_23093__$1;(statearr_23159_23226[(2)] = null);
(statearr_23159_23226[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (14)))
{var state_23093__$1 = state_23093;var statearr_23160_23227 = state_23093__$1;(statearr_23160_23227[(2)] = null);
(statearr_23160_23227[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (45)))
{var inst_23083 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23161_23228 = state_23093__$1;(statearr_23161_23228[(2)] = inst_23083);
(statearr_23161_23228[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (26)))
{var inst_23025 = (state_23093[(29)]);var inst_23079 = (state_23093[(2)]);var inst_23080 = cljs.core.seq(inst_23025);var state_23093__$1 = (function (){var statearr_23162 = state_23093;(statearr_23162[(31)] = inst_23079);
return statearr_23162;
})();if(inst_23080)
{var statearr_23163_23229 = state_23093__$1;(statearr_23163_23229[(1)] = (42));
} else
{var statearr_23164_23230 = state_23093__$1;(statearr_23164_23230[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (16)))
{var inst_22994 = (state_23093[(7)]);var inst_22996 = cljs.core.chunked_seq_QMARK_(inst_22994);var state_23093__$1 = state_23093;if(inst_22996)
{var statearr_23165_23231 = state_23093__$1;(statearr_23165_23231[(1)] = (19));
} else
{var statearr_23166_23232 = state_23093__$1;(statearr_23166_23232[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (38)))
{var inst_23072 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23167_23233 = state_23093__$1;(statearr_23167_23233[(2)] = inst_23072);
(statearr_23167_23233[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (30)))
{var state_23093__$1 = state_23093;var statearr_23168_23234 = state_23093__$1;(statearr_23168_23234[(2)] = null);
(statearr_23168_23234[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (10)))
{var inst_22975 = (state_23093[(16)]);var inst_22977 = (state_23093[(17)]);var inst_22983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22975,inst_22977);var inst_22984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22983,(0),null);var inst_22985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22983,(1),null);var state_23093__$1 = (function (){var statearr_23169 = state_23093;(statearr_23169[(26)] = inst_22984);
return statearr_23169;
})();if(cljs.core.truth_(inst_22985))
{var statearr_23170_23235 = state_23093__$1;(statearr_23170_23235[(1)] = (13));
} else
{var statearr_23171_23236 = state_23093__$1;(statearr_23171_23236[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (18)))
{var inst_23018 = (state_23093[(2)]);var state_23093__$1 = state_23093;var statearr_23172_23237 = state_23093__$1;(statearr_23172_23237[(2)] = inst_23018);
(statearr_23172_23237[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (42)))
{var state_23093__$1 = state_23093;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23093__$1,(45),dchan);
} else
{if((state_val_23094 === (37)))
{var inst_22965 = (state_23093[(9)]);var inst_23061 = (state_23093[(23)]);var inst_23052 = (state_23093[(25)]);var inst_23061__$1 = cljs.core.first(inst_23052);var inst_23062 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23061__$1,inst_22965,done);var state_23093__$1 = (function (){var statearr_23173 = state_23093;(statearr_23173[(23)] = inst_23061__$1);
return statearr_23173;
})();if(cljs.core.truth_(inst_23062))
{var statearr_23174_23238 = state_23093__$1;(statearr_23174_23238[(1)] = (39));
} else
{var statearr_23175_23239 = state_23093__$1;(statearr_23175_23239[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23094 === (8)))
{var inst_22976 = (state_23093[(14)]);var inst_22977 = (state_23093[(17)]);var inst_22979 = (inst_22977 < inst_22976);var inst_22980 = inst_22979;var state_23093__$1 = state_23093;if(cljs.core.truth_(inst_22980))
{var statearr_23176_23240 = state_23093__$1;(statearr_23176_23240[(1)] = (10));
} else
{var statearr_23177_23241 = state_23093__$1;(statearr_23177_23241[(1)] = (11));
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
});})(c__6495__auto___23187,cs,m,dchan,dctr,done))
;return ((function (switch__6480__auto__,c__6495__auto___23187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23181[(0)] = state_machine__6481__auto__);
(statearr_23181[(1)] = (1));
return statearr_23181;
});
var state_machine__6481__auto____1 = (function (state_23093){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23093);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23182){if((e23182 instanceof Object))
{var ex__6484__auto__ = e23182;var statearr_23183_23242 = state_23093;(statearr_23183_23242[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23093);
return cljs.core.constant$keyword$16;
} else
{throw e23182;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23243 = state_23093;
state_23093 = G__23243;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23093){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23187,cs,m,dchan,dctr,done))
})();var state__6497__auto__ = (function (){var statearr_23184 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23187);
return statearr_23184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23187,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23248 = {};return obj23248;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23252 = x__4277__auto__;return goog.typeOf(G__23252);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23256 = x__4277__auto__;return goog.typeOf(G__23256);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23260 = x__4277__auto__;return goog.typeOf(G__23260);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23264 = x__4277__auto__;return goog.typeOf(G__23264);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23268 = x__4277__auto__;return goog.typeOf(G__23268);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23269){var map__23275 = p__23269;var map__23275__$1 = ((cljs.core.seq_QMARK_(map__23275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23275):map__23275);var opts = map__23275__$1;var statearr_23276_23280 = state;(statearr_23276_23280[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4219__auto__ = cljs.core.async.do_alts(((function (map__23275,map__23275__$1,opts){
return (function (val){var statearr_23277_23281 = state;(statearr_23277_23281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23275,map__23275__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4219__auto__))
{var cb = temp__4219__auto__;var statearr_23278_23282 = state;(statearr_23278_23282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23279 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23279) : cljs.core.deref.call(null,G__23279));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23269 = null;if (arguments.length > 3) {
  p__23269 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23269);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23283){
var state = cljs.core.first(arglist__23283);
arglist__23283 = cljs.core.next(arglist__23283);
var cont_block = cljs.core.first(arglist__23283);
arglist__23283 = cljs.core.next(arglist__23283);
var ports = cljs.core.first(arglist__23283);
var p__23269 = cljs.core.rest(arglist__23283);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23269);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__23417 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23417) : cljs.core.atom.call(null,G__23417));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__23418 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23418) : cljs.core.atom.call(null,G__23418));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__23419 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23419) : attr.call(null,G__23419));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__23420 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23420) : cljs.core.deref.call(null,G__23420));
})();var mode = (function (){var G__23421 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23421) : cljs.core.deref.call(null,G__23421));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23422 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23423){
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
this.meta23423 = meta23423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23422.cljs$lang$type = true;
cljs.core.async.t23422.cljs$lang$ctorStr = "cljs.core.async/t23422";
cljs.core.async.t23422.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23422");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__23425_23550 = self__.cs;var G__23426_23551 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23425_23550,G__23426_23551) : cljs.core.reset_BANG_.call(null,G__23425_23550,G__23426_23551));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23427 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23427) : self__.solo_modes.call(null,G__23427));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__23428_23552 = self__.solo_mode;var G__23429_23553 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23428_23552,G__23429_23553) : cljs.core.reset_BANG_.call(null,G__23428_23552,G__23429_23553));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23424){var self__ = this;
var _23424__$1 = this;return self__.meta23423;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23424,meta23423__$1){var self__ = this;
var _23424__$1 = this;return (new cljs.core.async.t23422(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23423__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23422 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23422(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23423){return (new cljs.core.async.t23422(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23423));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23422(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6495__auto___23554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23501){var state_val_23502 = (state_23501[(1)]);if((state_val_23502 === (7)))
{var inst_23443 = (state_23501[(7)]);var inst_23448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23443);var state_23501__$1 = state_23501;var statearr_23503_23555 = state_23501__$1;(statearr_23503_23555[(2)] = inst_23448);
(statearr_23503_23555[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (20)))
{var inst_23458 = (state_23501[(8)]);var state_23501__$1 = state_23501;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23501__$1,(23),out,inst_23458);
} else
{if((state_val_23502 === (1)))
{var inst_23433 = (state_23501[(9)]);var inst_23433__$1 = calc_state();var inst_23434 = cljs.core.seq_QMARK_(inst_23433__$1);var state_23501__$1 = (function (){var statearr_23504 = state_23501;(statearr_23504[(9)] = inst_23433__$1);
return statearr_23504;
})();if(inst_23434)
{var statearr_23505_23556 = state_23501__$1;(statearr_23505_23556[(1)] = (2));
} else
{var statearr_23506_23557 = state_23501__$1;(statearr_23506_23557[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (24)))
{var inst_23451 = (state_23501[(10)]);var inst_23443 = inst_23451;var state_23501__$1 = (function (){var statearr_23507 = state_23501;(statearr_23507[(7)] = inst_23443);
return statearr_23507;
})();var statearr_23508_23558 = state_23501__$1;(statearr_23508_23558[(2)] = null);
(statearr_23508_23558[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (4)))
{var inst_23433 = (state_23501[(9)]);var inst_23439 = (state_23501[(2)]);var inst_23440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23439,cljs.core.constant$keyword$30);var inst_23441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23439,cljs.core.constant$keyword$29);var inst_23442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23439,cljs.core.constant$keyword$28);var inst_23443 = inst_23433;var state_23501__$1 = (function (){var statearr_23509 = state_23501;(statearr_23509[(11)] = inst_23442);
(statearr_23509[(7)] = inst_23443);
(statearr_23509[(12)] = inst_23440);
(statearr_23509[(13)] = inst_23441);
return statearr_23509;
})();var statearr_23510_23559 = state_23501__$1;(statearr_23510_23559[(2)] = null);
(statearr_23510_23559[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (15)))
{var state_23501__$1 = state_23501;var statearr_23511_23560 = state_23501__$1;(statearr_23511_23560[(2)] = null);
(statearr_23511_23560[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (21)))
{var inst_23451 = (state_23501[(10)]);var inst_23443 = inst_23451;var state_23501__$1 = (function (){var statearr_23512 = state_23501;(statearr_23512[(7)] = inst_23443);
return statearr_23512;
})();var statearr_23513_23561 = state_23501__$1;(statearr_23513_23561[(2)] = null);
(statearr_23513_23561[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (13)))
{var inst_23497 = (state_23501[(2)]);var state_23501__$1 = state_23501;var statearr_23514_23562 = state_23501__$1;(statearr_23514_23562[(2)] = inst_23497);
(statearr_23514_23562[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (22)))
{var inst_23495 = (state_23501[(2)]);var state_23501__$1 = state_23501;var statearr_23515_23563 = state_23501__$1;(statearr_23515_23563[(2)] = inst_23495);
(statearr_23515_23563[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (6)))
{var inst_23499 = (state_23501[(2)]);var state_23501__$1 = state_23501;return cljs.core.async.impl.ioc_helpers.return_chan(state_23501__$1,inst_23499);
} else
{if((state_val_23502 === (25)))
{var state_23501__$1 = state_23501;var statearr_23516_23564 = state_23501__$1;(statearr_23516_23564[(2)] = null);
(statearr_23516_23564[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (17)))
{var inst_23474 = (state_23501[(14)]);var state_23501__$1 = state_23501;var statearr_23517_23565 = state_23501__$1;(statearr_23517_23565[(2)] = inst_23474);
(statearr_23517_23565[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (3)))
{var inst_23433 = (state_23501[(9)]);var state_23501__$1 = state_23501;var statearr_23518_23566 = state_23501__$1;(statearr_23518_23566[(2)] = inst_23433);
(statearr_23518_23566[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (12)))
{var inst_23474 = (state_23501[(14)]);var inst_23459 = (state_23501[(15)]);var inst_23454 = (state_23501[(16)]);var inst_23474__$1 = (function (){var G__23519 = inst_23459;return (inst_23454.cljs$core$IFn$_invoke$arity$1 ? inst_23454.cljs$core$IFn$_invoke$arity$1(G__23519) : inst_23454.call(null,G__23519));
})();var state_23501__$1 = (function (){var statearr_23520 = state_23501;(statearr_23520[(14)] = inst_23474__$1);
return statearr_23520;
})();if(cljs.core.truth_(inst_23474__$1))
{var statearr_23521_23567 = state_23501__$1;(statearr_23521_23567[(1)] = (17));
} else
{var statearr_23522_23568 = state_23501__$1;(statearr_23522_23568[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (2)))
{var inst_23433 = (state_23501[(9)]);var inst_23436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23433);var state_23501__$1 = state_23501;var statearr_23523_23569 = state_23501__$1;(statearr_23523_23569[(2)] = inst_23436);
(statearr_23523_23569[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (23)))
{var inst_23486 = (state_23501[(2)]);var state_23501__$1 = state_23501;if(cljs.core.truth_(inst_23486))
{var statearr_23524_23570 = state_23501__$1;(statearr_23524_23570[(1)] = (24));
} else
{var statearr_23525_23571 = state_23501__$1;(statearr_23525_23571[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (19)))
{var inst_23483 = (state_23501[(2)]);var state_23501__$1 = state_23501;if(cljs.core.truth_(inst_23483))
{var statearr_23526_23572 = state_23501__$1;(statearr_23526_23572[(1)] = (20));
} else
{var statearr_23527_23573 = state_23501__$1;(statearr_23527_23573[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (11)))
{var inst_23458 = (state_23501[(8)]);var inst_23464 = (inst_23458 == null);var state_23501__$1 = state_23501;if(cljs.core.truth_(inst_23464))
{var statearr_23528_23574 = state_23501__$1;(statearr_23528_23574[(1)] = (14));
} else
{var statearr_23529_23575 = state_23501__$1;(statearr_23529_23575[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (9)))
{var inst_23451 = (state_23501[(10)]);var inst_23451__$1 = (state_23501[(2)]);var inst_23452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23451__$1,cljs.core.constant$keyword$30);var inst_23453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23451__$1,cljs.core.constant$keyword$29);var inst_23454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23451__$1,cljs.core.constant$keyword$28);var state_23501__$1 = (function (){var statearr_23530 = state_23501;(statearr_23530[(10)] = inst_23451__$1);
(statearr_23530[(16)] = inst_23454);
(statearr_23530[(17)] = inst_23453);
return statearr_23530;
})();return cljs.core.async.ioc_alts_BANG_(state_23501__$1,(10),inst_23452);
} else
{if((state_val_23502 === (5)))
{var inst_23443 = (state_23501[(7)]);var inst_23446 = cljs.core.seq_QMARK_(inst_23443);var state_23501__$1 = state_23501;if(inst_23446)
{var statearr_23531_23576 = state_23501__$1;(statearr_23531_23576[(1)] = (7));
} else
{var statearr_23532_23577 = state_23501__$1;(statearr_23532_23577[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (14)))
{var inst_23459 = (state_23501[(15)]);var inst_23466 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23459);var state_23501__$1 = state_23501;var statearr_23533_23578 = state_23501__$1;(statearr_23533_23578[(2)] = inst_23466);
(statearr_23533_23578[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (26)))
{var inst_23491 = (state_23501[(2)]);var state_23501__$1 = state_23501;var statearr_23534_23579 = state_23501__$1;(statearr_23534_23579[(2)] = inst_23491);
(statearr_23534_23579[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (16)))
{var inst_23469 = (state_23501[(2)]);var inst_23470 = calc_state();var inst_23443 = inst_23470;var state_23501__$1 = (function (){var statearr_23535 = state_23501;(statearr_23535[(7)] = inst_23443);
(statearr_23535[(18)] = inst_23469);
return statearr_23535;
})();var statearr_23536_23580 = state_23501__$1;(statearr_23536_23580[(2)] = null);
(statearr_23536_23580[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (10)))
{var inst_23458 = (state_23501[(8)]);var inst_23459 = (state_23501[(15)]);var inst_23457 = (state_23501[(2)]);var inst_23458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23457,(0),null);var inst_23459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23457,(1),null);var inst_23460 = (inst_23458__$1 == null);var inst_23461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23459__$1,change);var inst_23462 = (inst_23460) || (inst_23461);var state_23501__$1 = (function (){var statearr_23537 = state_23501;(statearr_23537[(8)] = inst_23458__$1);
(statearr_23537[(15)] = inst_23459__$1);
return statearr_23537;
})();if(cljs.core.truth_(inst_23462))
{var statearr_23538_23581 = state_23501__$1;(statearr_23538_23581[(1)] = (11));
} else
{var statearr_23539_23582 = state_23501__$1;(statearr_23539_23582[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (18)))
{var inst_23459 = (state_23501[(15)]);var inst_23454 = (state_23501[(16)]);var inst_23453 = (state_23501[(17)]);var inst_23478 = cljs.core.empty_QMARK_(inst_23454);var inst_23479 = (function (){var G__23540 = inst_23459;return (inst_23453.cljs$core$IFn$_invoke$arity$1 ? inst_23453.cljs$core$IFn$_invoke$arity$1(G__23540) : inst_23453.call(null,G__23540));
})();var inst_23480 = cljs.core.not(inst_23479);var inst_23481 = (inst_23478) && (inst_23480);var state_23501__$1 = state_23501;var statearr_23541_23583 = state_23501__$1;(statearr_23541_23583[(2)] = inst_23481);
(statearr_23541_23583[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23502 === (8)))
{var inst_23443 = (state_23501[(7)]);var state_23501__$1 = state_23501;var statearr_23542_23584 = state_23501__$1;(statearr_23542_23584[(2)] = inst_23443);
(statearr_23542_23584[(1)] = (9));
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
});})(c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6480__auto__,c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23546[(0)] = state_machine__6481__auto__);
(statearr_23546[(1)] = (1));
return statearr_23546;
});
var state_machine__6481__auto____1 = (function (state_23501){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23501);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23547){if((e23547 instanceof Object))
{var ex__6484__auto__ = e23547;var statearr_23548_23585 = state_23501;(statearr_23548_23585[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23501);
return cljs.core.constant$keyword$16;
} else
{throw e23547;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23586 = state_23501;
state_23501 = G__23586;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23501){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6497__auto__ = (function (){var statearr_23549 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23554);
return statearr_23549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj23588 = {};return obj23588;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23592 = x__4277__auto__;return goog.typeOf(G__23592);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23596 = x__4277__auto__;return goog.typeOf(G__23596);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23602 = x__4277__auto__;return goog.typeOf(G__23602);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23604 = x__4277__auto__;return goog.typeOf(G__23604);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__23743 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23743) : cljs.core.atom.call(null,G__23743));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23745 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23745) : cljs.core.deref.call(null,G__23745));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__23605_SHARP_){if(cljs.core.truth_((function (){var G__23746 = topic;return (p1__23605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23605_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23746) : p1__23605_SHARP_.call(null,G__23746));
})()))
{return p1__23605_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__23747 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__23747) : buf_fn.call(null,G__23747));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23748 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23749){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23749 = meta23749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23748.cljs$lang$type = true;
cljs.core.async.t23748.cljs$lang$ctorStr = "cljs.core.async/t23748";
cljs.core.async.t23748.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23748");
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23748.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__23751 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__23751) : self__.ensure_mult.call(null,G__23751));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23752 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23752) : cljs.core.deref.call(null,G__23752));
})(),topic);if(cljs.core.truth_(temp__4219__auto__))
{var m = temp__4219__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__23753 = self__.mults;var G__23754 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23753,G__23754) : cljs.core.reset_BANG_.call(null,G__23753,G__23754));
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23750){var self__ = this;
var _23750__$1 = this;return self__.meta23749;
});})(mults,ensure_mult))
;
cljs.core.async.t23748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23750,meta23749__$1){var self__ = this;
var _23750__$1 = this;return (new cljs.core.async.t23748(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23749__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23748 = ((function (mults,ensure_mult){
return (function __GT_t23748(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23749){return (new cljs.core.async.t23748(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23749));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23748(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6495__auto___23877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___23877,mults,ensure_mult,p){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___23877,mults,ensure_mult,p){
return (function (state_23826){var state_val_23827 = (state_23826[(1)]);if((state_val_23827 === (7)))
{var inst_23822 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23828_23878 = state_23826__$1;(statearr_23828_23878[(2)] = inst_23822);
(statearr_23828_23878[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (20)))
{var state_23826__$1 = state_23826;var statearr_23829_23879 = state_23826__$1;(statearr_23829_23879[(2)] = null);
(statearr_23829_23879[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (1)))
{var state_23826__$1 = state_23826;var statearr_23830_23880 = state_23826__$1;(statearr_23830_23880[(2)] = null);
(statearr_23830_23880[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (24)))
{var inst_23805 = (state_23826[(7)]);var inst_23814 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23805);var state_23826__$1 = state_23826;var statearr_23831_23881 = state_23826__$1;(statearr_23831_23881[(2)] = inst_23814);
(statearr_23831_23881[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (4)))
{var inst_23757 = (state_23826[(8)]);var inst_23757__$1 = (state_23826[(2)]);var inst_23758 = (inst_23757__$1 == null);var state_23826__$1 = (function (){var statearr_23832 = state_23826;(statearr_23832[(8)] = inst_23757__$1);
return statearr_23832;
})();if(cljs.core.truth_(inst_23758))
{var statearr_23833_23882 = state_23826__$1;(statearr_23833_23882[(1)] = (5));
} else
{var statearr_23834_23883 = state_23826__$1;(statearr_23834_23883[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (15)))
{var inst_23799 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23835_23884 = state_23826__$1;(statearr_23835_23884[(2)] = inst_23799);
(statearr_23835_23884[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (21)))
{var inst_23819 = (state_23826[(2)]);var state_23826__$1 = (function (){var statearr_23836 = state_23826;(statearr_23836[(9)] = inst_23819);
return statearr_23836;
})();var statearr_23837_23885 = state_23826__$1;(statearr_23837_23885[(2)] = null);
(statearr_23837_23885[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (13)))
{var inst_23781 = (state_23826[(10)]);var inst_23783 = cljs.core.chunked_seq_QMARK_(inst_23781);var state_23826__$1 = state_23826;if(inst_23783)
{var statearr_23838_23886 = state_23826__$1;(statearr_23838_23886[(1)] = (16));
} else
{var statearr_23839_23887 = state_23826__$1;(statearr_23839_23887[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (22)))
{var inst_23811 = (state_23826[(2)]);var state_23826__$1 = state_23826;if(cljs.core.truth_(inst_23811))
{var statearr_23840_23888 = state_23826__$1;(statearr_23840_23888[(1)] = (23));
} else
{var statearr_23841_23889 = state_23826__$1;(statearr_23841_23889[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (6)))
{var inst_23757 = (state_23826[(8)]);var inst_23807 = (state_23826[(11)]);var inst_23805 = (state_23826[(7)]);var inst_23805__$1 = (function (){var G__23842 = inst_23757;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23842) : topic_fn.call(null,G__23842));
})();var inst_23806 = (function (){var G__23843 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23843) : cljs.core.deref.call(null,G__23843));
})();var inst_23807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23806,inst_23805__$1);var state_23826__$1 = (function (){var statearr_23844 = state_23826;(statearr_23844[(11)] = inst_23807__$1);
(statearr_23844[(7)] = inst_23805__$1);
return statearr_23844;
})();if(cljs.core.truth_(inst_23807__$1))
{var statearr_23845_23890 = state_23826__$1;(statearr_23845_23890[(1)] = (19));
} else
{var statearr_23846_23891 = state_23826__$1;(statearr_23846_23891[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (25)))
{var inst_23816 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23847_23892 = state_23826__$1;(statearr_23847_23892[(2)] = inst_23816);
(statearr_23847_23892[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (17)))
{var inst_23781 = (state_23826[(10)]);var inst_23790 = cljs.core.first(inst_23781);var inst_23791 = cljs.core.async.muxch_STAR_(inst_23790);var inst_23792 = cljs.core.async.close_BANG_(inst_23791);var inst_23793 = cljs.core.next(inst_23781);var inst_23767 = inst_23793;var inst_23768 = null;var inst_23769 = (0);var inst_23770 = (0);var state_23826__$1 = (function (){var statearr_23848 = state_23826;(statearr_23848[(12)] = inst_23769);
(statearr_23848[(13)] = inst_23767);
(statearr_23848[(14)] = inst_23770);
(statearr_23848[(15)] = inst_23792);
(statearr_23848[(16)] = inst_23768);
return statearr_23848;
})();var statearr_23849_23893 = state_23826__$1;(statearr_23849_23893[(2)] = null);
(statearr_23849_23893[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (3)))
{var inst_23824 = (state_23826[(2)]);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.return_chan(state_23826__$1,inst_23824);
} else
{if((state_val_23827 === (12)))
{var inst_23801 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23850_23894 = state_23826__$1;(statearr_23850_23894[(2)] = inst_23801);
(statearr_23850_23894[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (2)))
{var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23826__$1,(4),ch);
} else
{if((state_val_23827 === (23)))
{var state_23826__$1 = state_23826;var statearr_23851_23895 = state_23826__$1;(statearr_23851_23895[(2)] = null);
(statearr_23851_23895[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (19)))
{var inst_23757 = (state_23826[(8)]);var inst_23807 = (state_23826[(11)]);var inst_23809 = cljs.core.async.muxch_STAR_(inst_23807);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23826__$1,(22),inst_23809,inst_23757);
} else
{if((state_val_23827 === (11)))
{var inst_23781 = (state_23826[(10)]);var inst_23767 = (state_23826[(13)]);var inst_23781__$1 = cljs.core.seq(inst_23767);var state_23826__$1 = (function (){var statearr_23852 = state_23826;(statearr_23852[(10)] = inst_23781__$1);
return statearr_23852;
})();if(inst_23781__$1)
{var statearr_23853_23896 = state_23826__$1;(statearr_23853_23896[(1)] = (13));
} else
{var statearr_23854_23897 = state_23826__$1;(statearr_23854_23897[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (9)))
{var inst_23803 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23855_23898 = state_23826__$1;(statearr_23855_23898[(2)] = inst_23803);
(statearr_23855_23898[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (5)))
{var inst_23764 = (function (){var G__23856 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23856) : cljs.core.deref.call(null,G__23856));
})();var inst_23765 = cljs.core.vals(inst_23764);var inst_23766 = cljs.core.seq(inst_23765);var inst_23767 = inst_23766;var inst_23768 = null;var inst_23769 = (0);var inst_23770 = (0);var state_23826__$1 = (function (){var statearr_23857 = state_23826;(statearr_23857[(12)] = inst_23769);
(statearr_23857[(13)] = inst_23767);
(statearr_23857[(14)] = inst_23770);
(statearr_23857[(16)] = inst_23768);
return statearr_23857;
})();var statearr_23858_23899 = state_23826__$1;(statearr_23858_23899[(2)] = null);
(statearr_23858_23899[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (14)))
{var state_23826__$1 = state_23826;var statearr_23862_23900 = state_23826__$1;(statearr_23862_23900[(2)] = null);
(statearr_23862_23900[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (16)))
{var inst_23781 = (state_23826[(10)]);var inst_23785 = cljs.core.chunk_first(inst_23781);var inst_23786 = cljs.core.chunk_rest(inst_23781);var inst_23787 = cljs.core.count(inst_23785);var inst_23767 = inst_23786;var inst_23768 = inst_23785;var inst_23769 = inst_23787;var inst_23770 = (0);var state_23826__$1 = (function (){var statearr_23863 = state_23826;(statearr_23863[(12)] = inst_23769);
(statearr_23863[(13)] = inst_23767);
(statearr_23863[(14)] = inst_23770);
(statearr_23863[(16)] = inst_23768);
return statearr_23863;
})();var statearr_23864_23901 = state_23826__$1;(statearr_23864_23901[(2)] = null);
(statearr_23864_23901[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (10)))
{var inst_23769 = (state_23826[(12)]);var inst_23767 = (state_23826[(13)]);var inst_23770 = (state_23826[(14)]);var inst_23768 = (state_23826[(16)]);var inst_23775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23768,inst_23770);var inst_23776 = cljs.core.async.muxch_STAR_(inst_23775);var inst_23777 = cljs.core.async.close_BANG_(inst_23776);var inst_23778 = (inst_23770 + (1));var tmp23859 = inst_23769;var tmp23860 = inst_23767;var tmp23861 = inst_23768;var inst_23767__$1 = tmp23860;var inst_23768__$1 = tmp23861;var inst_23769__$1 = tmp23859;var inst_23770__$1 = inst_23778;var state_23826__$1 = (function (){var statearr_23865 = state_23826;(statearr_23865[(12)] = inst_23769__$1);
(statearr_23865[(13)] = inst_23767__$1);
(statearr_23865[(17)] = inst_23777);
(statearr_23865[(14)] = inst_23770__$1);
(statearr_23865[(16)] = inst_23768__$1);
return statearr_23865;
})();var statearr_23866_23902 = state_23826__$1;(statearr_23866_23902[(2)] = null);
(statearr_23866_23902[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (18)))
{var inst_23796 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23867_23903 = state_23826__$1;(statearr_23867_23903[(2)] = inst_23796);
(statearr_23867_23903[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23827 === (8)))
{var inst_23769 = (state_23826[(12)]);var inst_23770 = (state_23826[(14)]);var inst_23772 = (inst_23770 < inst_23769);var inst_23773 = inst_23772;var state_23826__$1 = state_23826;if(cljs.core.truth_(inst_23773))
{var statearr_23868_23904 = state_23826__$1;(statearr_23868_23904[(1)] = (10));
} else
{var statearr_23869_23905 = state_23826__$1;(statearr_23869_23905[(1)] = (11));
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
});})(c__6495__auto___23877,mults,ensure_mult,p))
;return ((function (switch__6480__auto__,c__6495__auto___23877,mults,ensure_mult,p){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_23873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23873[(0)] = state_machine__6481__auto__);
(statearr_23873[(1)] = (1));
return statearr_23873;
});
var state_machine__6481__auto____1 = (function (state_23826){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_23826);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e23874){if((e23874 instanceof Object))
{var ex__6484__auto__ = e23874;var statearr_23875_23906 = state_23826;(statearr_23875_23906[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23826);
return cljs.core.constant$keyword$16;
} else
{throw e23874;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__23907 = state_23826;
state_23826 = G__23907;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_23826){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_23826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___23877,mults,ensure_mult,p))
})();var state__6497__auto__ = (function (){var statearr_23876 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_23876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___23877);
return statearr_23876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___23877,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23988 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23988) : cljs.core.atom.call(null,G__23988));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6495__auto___24061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24027){var state_val_24028 = (state_24027[(1)]);if((state_val_24028 === (7)))
{var state_24027__$1 = state_24027;var statearr_24029_24062 = state_24027__$1;(statearr_24029_24062[(2)] = null);
(statearr_24029_24062[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (1)))
{var state_24027__$1 = state_24027;var statearr_24030_24063 = state_24027__$1;(statearr_24030_24063[(2)] = null);
(statearr_24030_24063[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (4)))
{var inst_23991 = (state_24027[(7)]);var inst_23993 = (inst_23991 < cnt);var state_24027__$1 = state_24027;if(cljs.core.truth_(inst_23993))
{var statearr_24031_24064 = state_24027__$1;(statearr_24031_24064[(1)] = (6));
} else
{var statearr_24032_24065 = state_24027__$1;(statearr_24032_24065[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (15)))
{var inst_24023 = (state_24027[(2)]);var state_24027__$1 = state_24027;var statearr_24033_24066 = state_24027__$1;(statearr_24033_24066[(2)] = inst_24023);
(statearr_24033_24066[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (13)))
{var inst_24016 = cljs.core.async.close_BANG_(out);var state_24027__$1 = state_24027;var statearr_24034_24067 = state_24027__$1;(statearr_24034_24067[(2)] = inst_24016);
(statearr_24034_24067[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (6)))
{var state_24027__$1 = state_24027;var statearr_24035_24068 = state_24027__$1;(statearr_24035_24068[(2)] = null);
(statearr_24035_24068[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (3)))
{var inst_24025 = (state_24027[(2)]);var state_24027__$1 = state_24027;return cljs.core.async.impl.ioc_helpers.return_chan(state_24027__$1,inst_24025);
} else
{if((state_val_24028 === (12)))
{var inst_24013 = (state_24027[(8)]);var inst_24013__$1 = (state_24027[(2)]);var inst_24014 = cljs.core.some(cljs.core.nil_QMARK_,inst_24013__$1);var state_24027__$1 = (function (){var statearr_24036 = state_24027;(statearr_24036[(8)] = inst_24013__$1);
return statearr_24036;
})();if(cljs.core.truth_(inst_24014))
{var statearr_24037_24069 = state_24027__$1;(statearr_24037_24069[(1)] = (13));
} else
{var statearr_24038_24070 = state_24027__$1;(statearr_24038_24070[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (2)))
{var inst_23990 = (function (){var G__24039 = dctr;var G__24040 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24039,G__24040) : cljs.core.reset_BANG_.call(null,G__24039,G__24040));
})();var inst_23991 = (0);var state_24027__$1 = (function (){var statearr_24041 = state_24027;(statearr_24041[(9)] = inst_23990);
(statearr_24041[(7)] = inst_23991);
return statearr_24041;
})();var statearr_24042_24071 = state_24027__$1;(statearr_24042_24071[(2)] = null);
(statearr_24042_24071[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (11)))
{var inst_23991 = (state_24027[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24027,(10),Object,null,(9));var inst_24000 = (function (){var G__24043 = inst_23991;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24043) : chs__$1.call(null,G__24043));
})();var inst_24001 = (function (){var G__24044 = inst_23991;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24044) : done.call(null,G__24044));
})();var inst_24002 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24000,inst_24001);var state_24027__$1 = state_24027;var statearr_24045_24072 = state_24027__$1;(statearr_24045_24072[(2)] = inst_24002);
cljs.core.async.impl.ioc_helpers.process_exception(state_24027__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (9)))
{var inst_23991 = (state_24027[(7)]);var inst_24004 = (state_24027[(2)]);var inst_24005 = (inst_23991 + (1));var inst_23991__$1 = inst_24005;var state_24027__$1 = (function (){var statearr_24046 = state_24027;(statearr_24046[(7)] = inst_23991__$1);
(statearr_24046[(10)] = inst_24004);
return statearr_24046;
})();var statearr_24047_24073 = state_24027__$1;(statearr_24047_24073[(2)] = null);
(statearr_24047_24073[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (5)))
{var inst_24011 = (state_24027[(2)]);var state_24027__$1 = (function (){var statearr_24048 = state_24027;(statearr_24048[(11)] = inst_24011);
return statearr_24048;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24027__$1,(12),dchan);
} else
{if((state_val_24028 === (14)))
{var inst_24013 = (state_24027[(8)]);var inst_24018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24013);var state_24027__$1 = state_24027;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24027__$1,(16),out,inst_24018);
} else
{if((state_val_24028 === (16)))
{var inst_24020 = (state_24027[(2)]);var state_24027__$1 = (function (){var statearr_24049 = state_24027;(statearr_24049[(12)] = inst_24020);
return statearr_24049;
})();var statearr_24050_24074 = state_24027__$1;(statearr_24050_24074[(2)] = null);
(statearr_24050_24074[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (10)))
{var inst_23995 = (state_24027[(2)]);var inst_23996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24027__$1 = (function (){var statearr_24051 = state_24027;(statearr_24051[(13)] = inst_23995);
return statearr_24051;
})();var statearr_24052_24075 = state_24027__$1;(statearr_24052_24075[(2)] = inst_23996);
cljs.core.async.impl.ioc_helpers.process_exception(state_24027__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24028 === (8)))
{var inst_24009 = (state_24027[(2)]);var state_24027__$1 = state_24027;var statearr_24053_24076 = state_24027__$1;(statearr_24053_24076[(2)] = inst_24009);
(statearr_24053_24076[(1)] = (5));
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
});})(c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6480__auto__,c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24057[(0)] = state_machine__6481__auto__);
(statearr_24057[(1)] = (1));
return statearr_24057;
});
var state_machine__6481__auto____1 = (function (state_24027){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24027);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object))
{var ex__6484__auto__ = e24058;var statearr_24059_24077 = state_24027;(statearr_24059_24077[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24027);
return cljs.core.constant$keyword$16;
} else
{throw e24058;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24078 = state_24027;
state_24027 = G__24078;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24027){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6497__auto__ = (function (){var statearr_24060 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24061);
return statearr_24060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24061,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24188,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24188,out){
return (function (state_24164){var state_val_24165 = (state_24164[(1)]);if((state_val_24165 === (7)))
{var inst_24144 = (state_24164[(7)]);var inst_24143 = (state_24164[(8)]);var inst_24143__$1 = (state_24164[(2)]);var inst_24144__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24143__$1,(0),null);var inst_24145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24143__$1,(1),null);var inst_24146 = (inst_24144__$1 == null);var state_24164__$1 = (function (){var statearr_24166 = state_24164;(statearr_24166[(9)] = inst_24145);
(statearr_24166[(7)] = inst_24144__$1);
(statearr_24166[(8)] = inst_24143__$1);
return statearr_24166;
})();if(cljs.core.truth_(inst_24146))
{var statearr_24167_24189 = state_24164__$1;(statearr_24167_24189[(1)] = (8));
} else
{var statearr_24168_24190 = state_24164__$1;(statearr_24168_24190[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (1)))
{var inst_24135 = cljs.core.vec(chs);var inst_24136 = inst_24135;var state_24164__$1 = (function (){var statearr_24169 = state_24164;(statearr_24169[(10)] = inst_24136);
return statearr_24169;
})();var statearr_24170_24191 = state_24164__$1;(statearr_24170_24191[(2)] = null);
(statearr_24170_24191[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (4)))
{var inst_24136 = (state_24164[(10)]);var state_24164__$1 = state_24164;return cljs.core.async.ioc_alts_BANG_(state_24164__$1,(7),inst_24136);
} else
{if((state_val_24165 === (6)))
{var inst_24160 = (state_24164[(2)]);var state_24164__$1 = state_24164;var statearr_24171_24192 = state_24164__$1;(statearr_24171_24192[(2)] = inst_24160);
(statearr_24171_24192[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (3)))
{var inst_24162 = (state_24164[(2)]);var state_24164__$1 = state_24164;return cljs.core.async.impl.ioc_helpers.return_chan(state_24164__$1,inst_24162);
} else
{if((state_val_24165 === (2)))
{var inst_24136 = (state_24164[(10)]);var inst_24138 = cljs.core.count(inst_24136);var inst_24139 = (inst_24138 > (0));var state_24164__$1 = state_24164;if(cljs.core.truth_(inst_24139))
{var statearr_24173_24193 = state_24164__$1;(statearr_24173_24193[(1)] = (4));
} else
{var statearr_24174_24194 = state_24164__$1;(statearr_24174_24194[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (11)))
{var inst_24136 = (state_24164[(10)]);var inst_24153 = (state_24164[(2)]);var tmp24172 = inst_24136;var inst_24136__$1 = tmp24172;var state_24164__$1 = (function (){var statearr_24175 = state_24164;(statearr_24175[(11)] = inst_24153);
(statearr_24175[(10)] = inst_24136__$1);
return statearr_24175;
})();var statearr_24176_24195 = state_24164__$1;(statearr_24176_24195[(2)] = null);
(statearr_24176_24195[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (9)))
{var inst_24144 = (state_24164[(7)]);var state_24164__$1 = state_24164;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24164__$1,(11),out,inst_24144);
} else
{if((state_val_24165 === (5)))
{var inst_24158 = cljs.core.async.close_BANG_(out);var state_24164__$1 = state_24164;var statearr_24177_24196 = state_24164__$1;(statearr_24177_24196[(2)] = inst_24158);
(statearr_24177_24196[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (10)))
{var inst_24156 = (state_24164[(2)]);var state_24164__$1 = state_24164;var statearr_24178_24197 = state_24164__$1;(statearr_24178_24197[(2)] = inst_24156);
(statearr_24178_24197[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24165 === (8)))
{var inst_24145 = (state_24164[(9)]);var inst_24144 = (state_24164[(7)]);var inst_24143 = (state_24164[(8)]);var inst_24136 = (state_24164[(10)]);var inst_24148 = (function (){var c = inst_24145;var v = inst_24144;var vec__24141 = inst_24143;var cs = inst_24136;return ((function (c,v,vec__24141,cs,inst_24145,inst_24144,inst_24143,inst_24136,state_val_24165,c__6495__auto___24188,out){
return (function (p1__24079_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24079_SHARP_);
});
;})(c,v,vec__24141,cs,inst_24145,inst_24144,inst_24143,inst_24136,state_val_24165,c__6495__auto___24188,out))
})();var inst_24149 = cljs.core.filterv(inst_24148,inst_24136);var inst_24136__$1 = inst_24149;var state_24164__$1 = (function (){var statearr_24179 = state_24164;(statearr_24179[(10)] = inst_24136__$1);
return statearr_24179;
})();var statearr_24180_24198 = state_24164__$1;(statearr_24180_24198[(2)] = null);
(statearr_24180_24198[(1)] = (2));
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
});})(c__6495__auto___24188,out))
;return ((function (switch__6480__auto__,c__6495__auto___24188,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24184 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24184[(0)] = state_machine__6481__auto__);
(statearr_24184[(1)] = (1));
return statearr_24184;
});
var state_machine__6481__auto____1 = (function (state_24164){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24164);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object))
{var ex__6484__auto__ = e24185;var statearr_24186_24199 = state_24164;(statearr_24186_24199[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24164);
return cljs.core.constant$keyword$16;
} else
{throw e24185;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24200 = state_24164;
state_24164 = G__24200;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24164){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24188,out))
})();var state__6497__auto__ = (function (){var statearr_24187 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24188);
return statearr_24187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24188,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24296,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24296,out){
return (function (state_24273){var state_val_24274 = (state_24273[(1)]);if((state_val_24274 === (7)))
{var inst_24255 = (state_24273[(7)]);var inst_24255__$1 = (state_24273[(2)]);var inst_24256 = (inst_24255__$1 == null);var inst_24257 = cljs.core.not(inst_24256);var state_24273__$1 = (function (){var statearr_24275 = state_24273;(statearr_24275[(7)] = inst_24255__$1);
return statearr_24275;
})();if(inst_24257)
{var statearr_24276_24297 = state_24273__$1;(statearr_24276_24297[(1)] = (8));
} else
{var statearr_24277_24298 = state_24273__$1;(statearr_24277_24298[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (1)))
{var inst_24250 = (0);var state_24273__$1 = (function (){var statearr_24278 = state_24273;(statearr_24278[(8)] = inst_24250);
return statearr_24278;
})();var statearr_24279_24299 = state_24273__$1;(statearr_24279_24299[(2)] = null);
(statearr_24279_24299[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (4)))
{var state_24273__$1 = state_24273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24273__$1,(7),ch);
} else
{if((state_val_24274 === (6)))
{var inst_24268 = (state_24273[(2)]);var state_24273__$1 = state_24273;var statearr_24280_24300 = state_24273__$1;(statearr_24280_24300[(2)] = inst_24268);
(statearr_24280_24300[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (3)))
{var inst_24270 = (state_24273[(2)]);var inst_24271 = cljs.core.async.close_BANG_(out);var state_24273__$1 = (function (){var statearr_24281 = state_24273;(statearr_24281[(9)] = inst_24270);
return statearr_24281;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24273__$1,inst_24271);
} else
{if((state_val_24274 === (2)))
{var inst_24250 = (state_24273[(8)]);var inst_24252 = (inst_24250 < n);var state_24273__$1 = state_24273;if(cljs.core.truth_(inst_24252))
{var statearr_24282_24301 = state_24273__$1;(statearr_24282_24301[(1)] = (4));
} else
{var statearr_24283_24302 = state_24273__$1;(statearr_24283_24302[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (11)))
{var inst_24250 = (state_24273[(8)]);var inst_24260 = (state_24273[(2)]);var inst_24261 = (inst_24250 + (1));var inst_24250__$1 = inst_24261;var state_24273__$1 = (function (){var statearr_24284 = state_24273;(statearr_24284[(10)] = inst_24260);
(statearr_24284[(8)] = inst_24250__$1);
return statearr_24284;
})();var statearr_24285_24303 = state_24273__$1;(statearr_24285_24303[(2)] = null);
(statearr_24285_24303[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (9)))
{var state_24273__$1 = state_24273;var statearr_24286_24304 = state_24273__$1;(statearr_24286_24304[(2)] = null);
(statearr_24286_24304[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (5)))
{var state_24273__$1 = state_24273;var statearr_24287_24305 = state_24273__$1;(statearr_24287_24305[(2)] = null);
(statearr_24287_24305[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (10)))
{var inst_24265 = (state_24273[(2)]);var state_24273__$1 = state_24273;var statearr_24288_24306 = state_24273__$1;(statearr_24288_24306[(2)] = inst_24265);
(statearr_24288_24306[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24274 === (8)))
{var inst_24255 = (state_24273[(7)]);var state_24273__$1 = state_24273;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24273__$1,(11),out,inst_24255);
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
});})(c__6495__auto___24296,out))
;return ((function (switch__6480__auto__,c__6495__auto___24296,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24292 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24292[(0)] = state_machine__6481__auto__);
(statearr_24292[(1)] = (1));
return statearr_24292;
});
var state_machine__6481__auto____1 = (function (state_24273){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24273);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object))
{var ex__6484__auto__ = e24293;var statearr_24294_24307 = state_24273;(statearr_24294_24307[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24273);
return cljs.core.constant$keyword$16;
} else
{throw e24293;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24308 = state_24273;
state_24273 = G__24308;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24296,out))
})();var state__6497__auto__ = (function (){var statearr_24295 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24296);
return statearr_24295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24296,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24321 = (function (ch,f,map_LT_,meta24322){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24321.cljs$lang$type = true;
cljs.core.async.t24321.cljs$lang$ctorStr = "cljs.core.async/t24321";
cljs.core.async.t24321.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24321");
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24324 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24324 = (function (fn1,_,meta24322,ch,f,map_LT_,meta24325){
this.fn1 = fn1;
this._ = _;
this.meta24322 = meta24322;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24325 = meta24325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24324.cljs$lang$type = true;
cljs.core.async.t24324.cljs$lang$ctorStr = "cljs.core.async/t24324";
cljs.core.async.t24324.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24324");
});})(___$1))
;
cljs.core.async.t24324.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24309_SHARP_){var G__24327 = (((p1__24309_SHARP_ == null))?null:(function (){var G__24328 = p1__24309_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24328) : self__.f.call(null,G__24328));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24327) : f1.call(null,G__24327));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24326){var self__ = this;
var _24326__$1 = this;return self__.meta24325;
});})(___$1))
;
cljs.core.async.t24324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24326,meta24325__$1){var self__ = this;
var _24326__$1 = this;return (new cljs.core.async.t24324(self__.fn1,self__._,self__.meta24322,self__.ch,self__.f,self__.map_LT_,meta24325__$1));
});})(___$1))
;
cljs.core.async.__GT_t24324 = ((function (___$1){
return (function __GT_t24324(fn1__$1,___$2,meta24322__$1,ch__$2,f__$2,map_LT___$2,meta24325){return (new cljs.core.async.t24324(fn1__$1,___$2,meta24322__$1,ch__$2,f__$2,map_LT___$2,meta24325));
});})(___$1))
;
}
return (new cljs.core.async.t24324(fn1,___$1,self__.meta24322,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__24329 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24329) : cljs.core.deref.call(null,G__24329));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24330 = (function (){var G__24331 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24331) : cljs.core.deref.call(null,G__24331));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24330) : self__.f.call(null,G__24330));
})());
} else
{return ret;
}
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24323){var self__ = this;
var _24323__$1 = this;return self__.meta24322;
});
cljs.core.async.t24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24323,meta24322__$1){var self__ = this;
var _24323__$1 = this;return (new cljs.core.async.t24321(self__.ch,self__.f,self__.map_LT_,meta24322__$1));
});
cljs.core.async.__GT_t24321 = (function __GT_t24321(ch__$1,f__$1,map_LT___$1,meta24322){return (new cljs.core.async.t24321(ch__$1,f__$1,map_LT___$1,meta24322));
});
}
return (new cljs.core.async.t24321(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24336 = (function (ch,f,map_GT_,meta24337){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24337 = meta24337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24336.cljs$lang$type = true;
cljs.core.async.t24336.cljs$lang$ctorStr = "cljs.core.async/t24336";
cljs.core.async.t24336.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24336");
});
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24339 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24339) : self__.f.call(null,G__24339));
})(),fn1);
});
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24338){var self__ = this;
var _24338__$1 = this;return self__.meta24337;
});
cljs.core.async.t24336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24338,meta24337__$1){var self__ = this;
var _24338__$1 = this;return (new cljs.core.async.t24336(self__.ch,self__.f,self__.map_GT_,meta24337__$1));
});
cljs.core.async.__GT_t24336 = (function __GT_t24336(ch__$1,f__$1,map_GT___$1,meta24337){return (new cljs.core.async.t24336(ch__$1,f__$1,map_GT___$1,meta24337));
});
}
return (new cljs.core.async.t24336(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24344 = (function (ch,p,filter_GT_,meta24345){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24345 = meta24345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24344.cljs$lang$type = true;
cljs.core.async.t24344.cljs$lang$ctorStr = "cljs.core.async/t24344";
cljs.core.async.t24344.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24344");
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24347 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24347) : self__.p.call(null,G__24347));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24346){var self__ = this;
var _24346__$1 = this;return self__.meta24345;
});
cljs.core.async.t24344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24346,meta24345__$1){var self__ = this;
var _24346__$1 = this;return (new cljs.core.async.t24344(self__.ch,self__.p,self__.filter_GT_,meta24345__$1));
});
cljs.core.async.__GT_t24344 = (function __GT_t24344(ch__$1,p__$1,filter_GT___$1,meta24345){return (new cljs.core.async.t24344(ch__$1,p__$1,filter_GT___$1,meta24345));
});
}
return (new cljs.core.async.t24344(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24435,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24435,out){
return (function (state_24413){var state_val_24414 = (state_24413[(1)]);if((state_val_24414 === (7)))
{var inst_24409 = (state_24413[(2)]);var state_24413__$1 = state_24413;var statearr_24415_24436 = state_24413__$1;(statearr_24415_24436[(2)] = inst_24409);
(statearr_24415_24436[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (1)))
{var state_24413__$1 = state_24413;var statearr_24416_24437 = state_24413__$1;(statearr_24416_24437[(2)] = null);
(statearr_24416_24437[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (4)))
{var inst_24395 = (state_24413[(7)]);var inst_24395__$1 = (state_24413[(2)]);var inst_24396 = (inst_24395__$1 == null);var state_24413__$1 = (function (){var statearr_24417 = state_24413;(statearr_24417[(7)] = inst_24395__$1);
return statearr_24417;
})();if(cljs.core.truth_(inst_24396))
{var statearr_24418_24438 = state_24413__$1;(statearr_24418_24438[(1)] = (5));
} else
{var statearr_24419_24439 = state_24413__$1;(statearr_24419_24439[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (6)))
{var inst_24395 = (state_24413[(7)]);var inst_24400 = (function (){var G__24420 = inst_24395;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24420) : p.call(null,G__24420));
})();var state_24413__$1 = state_24413;if(cljs.core.truth_(inst_24400))
{var statearr_24421_24440 = state_24413__$1;(statearr_24421_24440[(1)] = (8));
} else
{var statearr_24422_24441 = state_24413__$1;(statearr_24422_24441[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (3)))
{var inst_24411 = (state_24413[(2)]);var state_24413__$1 = state_24413;return cljs.core.async.impl.ioc_helpers.return_chan(state_24413__$1,inst_24411);
} else
{if((state_val_24414 === (2)))
{var state_24413__$1 = state_24413;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24413__$1,(4),ch);
} else
{if((state_val_24414 === (11)))
{var inst_24403 = (state_24413[(2)]);var state_24413__$1 = state_24413;var statearr_24423_24442 = state_24413__$1;(statearr_24423_24442[(2)] = inst_24403);
(statearr_24423_24442[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (9)))
{var state_24413__$1 = state_24413;var statearr_24424_24443 = state_24413__$1;(statearr_24424_24443[(2)] = null);
(statearr_24424_24443[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (5)))
{var inst_24398 = cljs.core.async.close_BANG_(out);var state_24413__$1 = state_24413;var statearr_24425_24444 = state_24413__$1;(statearr_24425_24444[(2)] = inst_24398);
(statearr_24425_24444[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (10)))
{var inst_24406 = (state_24413[(2)]);var state_24413__$1 = (function (){var statearr_24426 = state_24413;(statearr_24426[(8)] = inst_24406);
return statearr_24426;
})();var statearr_24427_24445 = state_24413__$1;(statearr_24427_24445[(2)] = null);
(statearr_24427_24445[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24414 === (8)))
{var inst_24395 = (state_24413[(7)]);var state_24413__$1 = state_24413;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24413__$1,(11),out,inst_24395);
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
});})(c__6495__auto___24435,out))
;return ((function (switch__6480__auto__,c__6495__auto___24435,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24431 = [null,null,null,null,null,null,null,null,null];(statearr_24431[(0)] = state_machine__6481__auto__);
(statearr_24431[(1)] = (1));
return statearr_24431;
});
var state_machine__6481__auto____1 = (function (state_24413){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24413);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24432){if((e24432 instanceof Object))
{var ex__6484__auto__ = e24432;var statearr_24433_24446 = state_24413;(statearr_24433_24446[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24413);
return cljs.core.constant$keyword$16;
} else
{throw e24432;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24447 = state_24413;
state_24413 = G__24447;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24413){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24435,out))
})();var state__6497__auto__ = (function (){var statearr_24434 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24435);
return statearr_24434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24435,out))
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
return (function (state_24617){var state_val_24618 = (state_24617[(1)]);if((state_val_24618 === (7)))
{var inst_24613 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24619_24661 = state_24617__$1;(statearr_24619_24661[(2)] = inst_24613);
(statearr_24619_24661[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (20)))
{var inst_24583 = (state_24617[(7)]);var inst_24594 = (state_24617[(2)]);var inst_24595 = cljs.core.next(inst_24583);var inst_24569 = inst_24595;var inst_24570 = null;var inst_24571 = (0);var inst_24572 = (0);var state_24617__$1 = (function (){var statearr_24620 = state_24617;(statearr_24620[(8)] = inst_24571);
(statearr_24620[(9)] = inst_24572);
(statearr_24620[(10)] = inst_24570);
(statearr_24620[(11)] = inst_24594);
(statearr_24620[(12)] = inst_24569);
return statearr_24620;
})();var statearr_24621_24662 = state_24617__$1;(statearr_24621_24662[(2)] = null);
(statearr_24621_24662[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (1)))
{var state_24617__$1 = state_24617;var statearr_24622_24663 = state_24617__$1;(statearr_24622_24663[(2)] = null);
(statearr_24622_24663[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (4)))
{var inst_24558 = (state_24617[(13)]);var inst_24558__$1 = (state_24617[(2)]);var inst_24559 = (inst_24558__$1 == null);var state_24617__$1 = (function (){var statearr_24623 = state_24617;(statearr_24623[(13)] = inst_24558__$1);
return statearr_24623;
})();if(cljs.core.truth_(inst_24559))
{var statearr_24624_24664 = state_24617__$1;(statearr_24624_24664[(1)] = (5));
} else
{var statearr_24625_24665 = state_24617__$1;(statearr_24625_24665[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (15)))
{var state_24617__$1 = state_24617;var statearr_24629_24666 = state_24617__$1;(statearr_24629_24666[(2)] = null);
(statearr_24629_24666[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (21)))
{var state_24617__$1 = state_24617;var statearr_24630_24667 = state_24617__$1;(statearr_24630_24667[(2)] = null);
(statearr_24630_24667[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (13)))
{var inst_24571 = (state_24617[(8)]);var inst_24572 = (state_24617[(9)]);var inst_24570 = (state_24617[(10)]);var inst_24569 = (state_24617[(12)]);var inst_24579 = (state_24617[(2)]);var inst_24580 = (inst_24572 + (1));var tmp24626 = inst_24571;var tmp24627 = inst_24570;var tmp24628 = inst_24569;var inst_24569__$1 = tmp24628;var inst_24570__$1 = tmp24627;var inst_24571__$1 = tmp24626;var inst_24572__$1 = inst_24580;var state_24617__$1 = (function (){var statearr_24631 = state_24617;(statearr_24631[(8)] = inst_24571__$1);
(statearr_24631[(9)] = inst_24572__$1);
(statearr_24631[(10)] = inst_24570__$1);
(statearr_24631[(12)] = inst_24569__$1);
(statearr_24631[(14)] = inst_24579);
return statearr_24631;
})();var statearr_24632_24668 = state_24617__$1;(statearr_24632_24668[(2)] = null);
(statearr_24632_24668[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (22)))
{var state_24617__$1 = state_24617;var statearr_24633_24669 = state_24617__$1;(statearr_24633_24669[(2)] = null);
(statearr_24633_24669[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (6)))
{var inst_24558 = (state_24617[(13)]);var inst_24567 = (function (){var G__24634 = inst_24558;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24634) : f.call(null,G__24634));
})();var inst_24568 = cljs.core.seq(inst_24567);var inst_24569 = inst_24568;var inst_24570 = null;var inst_24571 = (0);var inst_24572 = (0);var state_24617__$1 = (function (){var statearr_24635 = state_24617;(statearr_24635[(8)] = inst_24571);
(statearr_24635[(9)] = inst_24572);
(statearr_24635[(10)] = inst_24570);
(statearr_24635[(12)] = inst_24569);
return statearr_24635;
})();var statearr_24636_24670 = state_24617__$1;(statearr_24636_24670[(2)] = null);
(statearr_24636_24670[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (17)))
{var inst_24583 = (state_24617[(7)]);var inst_24587 = cljs.core.chunk_first(inst_24583);var inst_24588 = cljs.core.chunk_rest(inst_24583);var inst_24589 = cljs.core.count(inst_24587);var inst_24569 = inst_24588;var inst_24570 = inst_24587;var inst_24571 = inst_24589;var inst_24572 = (0);var state_24617__$1 = (function (){var statearr_24637 = state_24617;(statearr_24637[(8)] = inst_24571);
(statearr_24637[(9)] = inst_24572);
(statearr_24637[(10)] = inst_24570);
(statearr_24637[(12)] = inst_24569);
return statearr_24637;
})();var statearr_24638_24671 = state_24617__$1;(statearr_24638_24671[(2)] = null);
(statearr_24638_24671[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (3)))
{var inst_24615 = (state_24617[(2)]);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.return_chan(state_24617__$1,inst_24615);
} else
{if((state_val_24618 === (12)))
{var inst_24603 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24639_24672 = state_24617__$1;(statearr_24639_24672[(2)] = inst_24603);
(statearr_24639_24672[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (2)))
{var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24617__$1,(4),in$);
} else
{if((state_val_24618 === (23)))
{var inst_24611 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24640_24673 = state_24617__$1;(statearr_24640_24673[(2)] = inst_24611);
(statearr_24640_24673[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (19)))
{var inst_24598 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24641_24674 = state_24617__$1;(statearr_24641_24674[(2)] = inst_24598);
(statearr_24641_24674[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (11)))
{var inst_24583 = (state_24617[(7)]);var inst_24569 = (state_24617[(12)]);var inst_24583__$1 = cljs.core.seq(inst_24569);var state_24617__$1 = (function (){var statearr_24642 = state_24617;(statearr_24642[(7)] = inst_24583__$1);
return statearr_24642;
})();if(inst_24583__$1)
{var statearr_24643_24675 = state_24617__$1;(statearr_24643_24675[(1)] = (14));
} else
{var statearr_24644_24676 = state_24617__$1;(statearr_24644_24676[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (9)))
{var inst_24605 = (state_24617[(2)]);var inst_24606 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_24617__$1 = (function (){var statearr_24645 = state_24617;(statearr_24645[(15)] = inst_24605);
return statearr_24645;
})();if(cljs.core.truth_(inst_24606))
{var statearr_24646_24677 = state_24617__$1;(statearr_24646_24677[(1)] = (21));
} else
{var statearr_24647_24678 = state_24617__$1;(statearr_24647_24678[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (5)))
{var inst_24561 = cljs.core.async.close_BANG_(out);var state_24617__$1 = state_24617;var statearr_24648_24679 = state_24617__$1;(statearr_24648_24679[(2)] = inst_24561);
(statearr_24648_24679[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (14)))
{var inst_24583 = (state_24617[(7)]);var inst_24585 = cljs.core.chunked_seq_QMARK_(inst_24583);var state_24617__$1 = state_24617;if(inst_24585)
{var statearr_24649_24680 = state_24617__$1;(statearr_24649_24680[(1)] = (17));
} else
{var statearr_24650_24681 = state_24617__$1;(statearr_24650_24681[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (16)))
{var inst_24601 = (state_24617[(2)]);var state_24617__$1 = state_24617;var statearr_24651_24682 = state_24617__$1;(statearr_24651_24682[(2)] = inst_24601);
(statearr_24651_24682[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24618 === (10)))
{var inst_24572 = (state_24617[(9)]);var inst_24570 = (state_24617[(10)]);var inst_24577 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24570,inst_24572);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24617__$1,(13),out,inst_24577);
} else
{if((state_val_24618 === (18)))
{var inst_24583 = (state_24617[(7)]);var inst_24592 = cljs.core.first(inst_24583);var state_24617__$1 = state_24617;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24617__$1,(20),out,inst_24592);
} else
{if((state_val_24618 === (8)))
{var inst_24571 = (state_24617[(8)]);var inst_24572 = (state_24617[(9)]);var inst_24574 = (inst_24572 < inst_24571);var inst_24575 = inst_24574;var state_24617__$1 = state_24617;if(cljs.core.truth_(inst_24575))
{var statearr_24652_24683 = state_24617__$1;(statearr_24652_24683[(1)] = (10));
} else
{var statearr_24653_24684 = state_24617__$1;(statearr_24653_24684[(1)] = (11));
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
var state_machine__6481__auto____0 = (function (){var statearr_24657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24657[(0)] = state_machine__6481__auto__);
(statearr_24657[(1)] = (1));
return statearr_24657;
});
var state_machine__6481__auto____1 = (function (state_24617){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24617);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24658){if((e24658 instanceof Object))
{var ex__6484__auto__ = e24658;var statearr_24659_24685 = state_24617;(statearr_24659_24685[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24617);
return cljs.core.constant$keyword$16;
} else
{throw e24658;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24686 = state_24617;
state_24617 = G__24686;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24617){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__))
})();var state__6497__auto__ = (function (){var statearr_24660 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_24660;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24791,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24791,out){
return (function (state_24766){var state_val_24767 = (state_24766[(1)]);if((state_val_24767 === (7)))
{var inst_24761 = (state_24766[(2)]);var state_24766__$1 = state_24766;var statearr_24768_24792 = state_24766__$1;(statearr_24768_24792[(2)] = inst_24761);
(statearr_24768_24792[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (1)))
{var inst_24743 = null;var state_24766__$1 = (function (){var statearr_24769 = state_24766;(statearr_24769[(7)] = inst_24743);
return statearr_24769;
})();var statearr_24770_24793 = state_24766__$1;(statearr_24770_24793[(2)] = null);
(statearr_24770_24793[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (4)))
{var inst_24746 = (state_24766[(8)]);var inst_24746__$1 = (state_24766[(2)]);var inst_24747 = (inst_24746__$1 == null);var inst_24748 = cljs.core.not(inst_24747);var state_24766__$1 = (function (){var statearr_24771 = state_24766;(statearr_24771[(8)] = inst_24746__$1);
return statearr_24771;
})();if(inst_24748)
{var statearr_24772_24794 = state_24766__$1;(statearr_24772_24794[(1)] = (5));
} else
{var statearr_24773_24795 = state_24766__$1;(statearr_24773_24795[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (6)))
{var state_24766__$1 = state_24766;var statearr_24774_24796 = state_24766__$1;(statearr_24774_24796[(2)] = null);
(statearr_24774_24796[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (3)))
{var inst_24763 = (state_24766[(2)]);var inst_24764 = cljs.core.async.close_BANG_(out);var state_24766__$1 = (function (){var statearr_24775 = state_24766;(statearr_24775[(9)] = inst_24763);
return statearr_24775;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24766__$1,inst_24764);
} else
{if((state_val_24767 === (2)))
{var state_24766__$1 = state_24766;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24766__$1,(4),ch);
} else
{if((state_val_24767 === (11)))
{var inst_24746 = (state_24766[(8)]);var inst_24755 = (state_24766[(2)]);var inst_24743 = inst_24746;var state_24766__$1 = (function (){var statearr_24776 = state_24766;(statearr_24776[(10)] = inst_24755);
(statearr_24776[(7)] = inst_24743);
return statearr_24776;
})();var statearr_24777_24797 = state_24766__$1;(statearr_24777_24797[(2)] = null);
(statearr_24777_24797[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (9)))
{var inst_24746 = (state_24766[(8)]);var state_24766__$1 = state_24766;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24766__$1,(11),out,inst_24746);
} else
{if((state_val_24767 === (5)))
{var inst_24746 = (state_24766[(8)]);var inst_24743 = (state_24766[(7)]);var inst_24750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24746,inst_24743);var state_24766__$1 = state_24766;if(inst_24750)
{var statearr_24779_24798 = state_24766__$1;(statearr_24779_24798[(1)] = (8));
} else
{var statearr_24780_24799 = state_24766__$1;(statearr_24780_24799[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (10)))
{var inst_24758 = (state_24766[(2)]);var state_24766__$1 = state_24766;var statearr_24781_24800 = state_24766__$1;(statearr_24781_24800[(2)] = inst_24758);
(statearr_24781_24800[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24767 === (8)))
{var inst_24743 = (state_24766[(7)]);var tmp24778 = inst_24743;var inst_24743__$1 = tmp24778;var state_24766__$1 = (function (){var statearr_24782 = state_24766;(statearr_24782[(7)] = inst_24743__$1);
return statearr_24782;
})();var statearr_24783_24801 = state_24766__$1;(statearr_24783_24801[(2)] = null);
(statearr_24783_24801[(1)] = (2));
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
});})(c__6495__auto___24791,out))
;return ((function (switch__6480__auto__,c__6495__auto___24791,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24787 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24787[(0)] = state_machine__6481__auto__);
(statearr_24787[(1)] = (1));
return statearr_24787;
});
var state_machine__6481__auto____1 = (function (state_24766){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24766);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24788){if((e24788 instanceof Object))
{var ex__6484__auto__ = e24788;var statearr_24789_24802 = state_24766;(statearr_24789_24802[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24766);
return cljs.core.constant$keyword$16;
} else
{throw e24788;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24803 = state_24766;
state_24766 = G__24803;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24766){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24791,out))
})();var state__6497__auto__ = (function (){var statearr_24790 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24791);
return statearr_24790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24791,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___24941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___24941,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___24941,out){
return (function (state_24911){var state_val_24912 = (state_24911[(1)]);if((state_val_24912 === (7)))
{var inst_24907 = (state_24911[(2)]);var state_24911__$1 = state_24911;var statearr_24913_24942 = state_24911__$1;(statearr_24913_24942[(2)] = inst_24907);
(statearr_24913_24942[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (1)))
{var inst_24874 = (new Array(n));var inst_24875 = inst_24874;var inst_24876 = (0);var state_24911__$1 = (function (){var statearr_24914 = state_24911;(statearr_24914[(7)] = inst_24876);
(statearr_24914[(8)] = inst_24875);
return statearr_24914;
})();var statearr_24915_24943 = state_24911__$1;(statearr_24915_24943[(2)] = null);
(statearr_24915_24943[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (4)))
{var inst_24879 = (state_24911[(9)]);var inst_24879__$1 = (state_24911[(2)]);var inst_24880 = (inst_24879__$1 == null);var inst_24881 = cljs.core.not(inst_24880);var state_24911__$1 = (function (){var statearr_24916 = state_24911;(statearr_24916[(9)] = inst_24879__$1);
return statearr_24916;
})();if(inst_24881)
{var statearr_24917_24944 = state_24911__$1;(statearr_24917_24944[(1)] = (5));
} else
{var statearr_24918_24945 = state_24911__$1;(statearr_24918_24945[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (15)))
{var inst_24901 = (state_24911[(2)]);var state_24911__$1 = state_24911;var statearr_24919_24946 = state_24911__$1;(statearr_24919_24946[(2)] = inst_24901);
(statearr_24919_24946[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (13)))
{var state_24911__$1 = state_24911;var statearr_24920_24947 = state_24911__$1;(statearr_24920_24947[(2)] = null);
(statearr_24920_24947[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (6)))
{var inst_24876 = (state_24911[(7)]);var inst_24897 = (inst_24876 > (0));var state_24911__$1 = state_24911;if(cljs.core.truth_(inst_24897))
{var statearr_24921_24948 = state_24911__$1;(statearr_24921_24948[(1)] = (12));
} else
{var statearr_24922_24949 = state_24911__$1;(statearr_24922_24949[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (3)))
{var inst_24909 = (state_24911[(2)]);var state_24911__$1 = state_24911;return cljs.core.async.impl.ioc_helpers.return_chan(state_24911__$1,inst_24909);
} else
{if((state_val_24912 === (12)))
{var inst_24875 = (state_24911[(8)]);var inst_24899 = cljs.core.vec(inst_24875);var state_24911__$1 = state_24911;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24911__$1,(15),out,inst_24899);
} else
{if((state_val_24912 === (2)))
{var state_24911__$1 = state_24911;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24911__$1,(4),ch);
} else
{if((state_val_24912 === (11)))
{var inst_24891 = (state_24911[(2)]);var inst_24892 = (new Array(n));var inst_24875 = inst_24892;var inst_24876 = (0);var state_24911__$1 = (function (){var statearr_24923 = state_24911;(statearr_24923[(7)] = inst_24876);
(statearr_24923[(8)] = inst_24875);
(statearr_24923[(10)] = inst_24891);
return statearr_24923;
})();var statearr_24924_24950 = state_24911__$1;(statearr_24924_24950[(2)] = null);
(statearr_24924_24950[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (9)))
{var inst_24875 = (state_24911[(8)]);var inst_24889 = cljs.core.vec(inst_24875);var state_24911__$1 = state_24911;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24911__$1,(11),out,inst_24889);
} else
{if((state_val_24912 === (5)))
{var inst_24876 = (state_24911[(7)]);var inst_24875 = (state_24911[(8)]);var inst_24879 = (state_24911[(9)]);var inst_24884 = (state_24911[(11)]);var inst_24883 = (inst_24875[inst_24876] = inst_24879);var inst_24884__$1 = (inst_24876 + (1));var inst_24885 = (inst_24884__$1 < n);var state_24911__$1 = (function (){var statearr_24925 = state_24911;(statearr_24925[(11)] = inst_24884__$1);
(statearr_24925[(12)] = inst_24883);
return statearr_24925;
})();if(cljs.core.truth_(inst_24885))
{var statearr_24926_24951 = state_24911__$1;(statearr_24926_24951[(1)] = (8));
} else
{var statearr_24927_24952 = state_24911__$1;(statearr_24927_24952[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (14)))
{var inst_24904 = (state_24911[(2)]);var inst_24905 = cljs.core.async.close_BANG_(out);var state_24911__$1 = (function (){var statearr_24929 = state_24911;(statearr_24929[(13)] = inst_24904);
return statearr_24929;
})();var statearr_24930_24953 = state_24911__$1;(statearr_24930_24953[(2)] = inst_24905);
(statearr_24930_24953[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (10)))
{var inst_24895 = (state_24911[(2)]);var state_24911__$1 = state_24911;var statearr_24931_24954 = state_24911__$1;(statearr_24931_24954[(2)] = inst_24895);
(statearr_24931_24954[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24912 === (8)))
{var inst_24875 = (state_24911[(8)]);var inst_24884 = (state_24911[(11)]);var tmp24928 = inst_24875;var inst_24875__$1 = tmp24928;var inst_24876 = inst_24884;var state_24911__$1 = (function (){var statearr_24932 = state_24911;(statearr_24932[(7)] = inst_24876);
(statearr_24932[(8)] = inst_24875__$1);
return statearr_24932;
})();var statearr_24933_24955 = state_24911__$1;(statearr_24933_24955[(2)] = null);
(statearr_24933_24955[(1)] = (2));
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
});})(c__6495__auto___24941,out))
;return ((function (switch__6480__auto__,c__6495__auto___24941,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_24937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24937[(0)] = state_machine__6481__auto__);
(statearr_24937[(1)] = (1));
return statearr_24937;
});
var state_machine__6481__auto____1 = (function (state_24911){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_24911);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object))
{var ex__6484__auto__ = e24938;var statearr_24939_24956 = state_24911;(statearr_24939_24956[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24911);
return cljs.core.constant$keyword$16;
} else
{throw e24938;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__24957 = state_24911;
state_24911 = G__24957;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_24911){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_24911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___24941,out))
})();var state__6497__auto__ = (function (){var statearr_24940 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_24940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___24941);
return statearr_24940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___24941,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6495__auto___25105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___25105,out){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___25105,out){
return (function (state_25074){var state_val_25075 = (state_25074[(1)]);if((state_val_25075 === (7)))
{var inst_25070 = (state_25074[(2)]);var state_25074__$1 = state_25074;var statearr_25076_25106 = state_25074__$1;(statearr_25076_25106[(2)] = inst_25070);
(statearr_25076_25106[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (1)))
{var inst_25033 = [];var inst_25034 = inst_25033;var inst_25035 = cljs.core.constant$keyword$31;var state_25074__$1 = (function (){var statearr_25077 = state_25074;(statearr_25077[(7)] = inst_25035);
(statearr_25077[(8)] = inst_25034);
return statearr_25077;
})();var statearr_25078_25107 = state_25074__$1;(statearr_25078_25107[(2)] = null);
(statearr_25078_25107[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (4)))
{var inst_25038 = (state_25074[(9)]);var inst_25038__$1 = (state_25074[(2)]);var inst_25039 = (inst_25038__$1 == null);var inst_25040 = cljs.core.not(inst_25039);var state_25074__$1 = (function (){var statearr_25079 = state_25074;(statearr_25079[(9)] = inst_25038__$1);
return statearr_25079;
})();if(inst_25040)
{var statearr_25080_25108 = state_25074__$1;(statearr_25080_25108[(1)] = (5));
} else
{var statearr_25081_25109 = state_25074__$1;(statearr_25081_25109[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (15)))
{var inst_25064 = (state_25074[(2)]);var state_25074__$1 = state_25074;var statearr_25082_25110 = state_25074__$1;(statearr_25082_25110[(2)] = inst_25064);
(statearr_25082_25110[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (13)))
{var state_25074__$1 = state_25074;var statearr_25083_25111 = state_25074__$1;(statearr_25083_25111[(2)] = null);
(statearr_25083_25111[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (6)))
{var inst_25034 = (state_25074[(8)]);var inst_25059 = inst_25034.length;var inst_25060 = (inst_25059 > (0));var state_25074__$1 = state_25074;if(cljs.core.truth_(inst_25060))
{var statearr_25084_25112 = state_25074__$1;(statearr_25084_25112[(1)] = (12));
} else
{var statearr_25085_25113 = state_25074__$1;(statearr_25085_25113[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (3)))
{var inst_25072 = (state_25074[(2)]);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.return_chan(state_25074__$1,inst_25072);
} else
{if((state_val_25075 === (12)))
{var inst_25034 = (state_25074[(8)]);var inst_25062 = cljs.core.vec(inst_25034);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25074__$1,(15),out,inst_25062);
} else
{if((state_val_25075 === (2)))
{var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25074__$1,(4),ch);
} else
{if((state_val_25075 === (11)))
{var inst_25042 = (state_25074[(10)]);var inst_25038 = (state_25074[(9)]);var inst_25052 = (state_25074[(2)]);var inst_25053 = [];var inst_25054 = inst_25053.push(inst_25038);var inst_25034 = inst_25053;var inst_25035 = inst_25042;var state_25074__$1 = (function (){var statearr_25086 = state_25074;(statearr_25086[(11)] = inst_25054);
(statearr_25086[(12)] = inst_25052);
(statearr_25086[(7)] = inst_25035);
(statearr_25086[(8)] = inst_25034);
return statearr_25086;
})();var statearr_25087_25114 = state_25074__$1;(statearr_25087_25114[(2)] = null);
(statearr_25087_25114[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (9)))
{var inst_25034 = (state_25074[(8)]);var inst_25050 = cljs.core.vec(inst_25034);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25074__$1,(11),out,inst_25050);
} else
{if((state_val_25075 === (5)))
{var inst_25042 = (state_25074[(10)]);var inst_25035 = (state_25074[(7)]);var inst_25038 = (state_25074[(9)]);var inst_25042__$1 = (function (){var G__25088 = inst_25038;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25088) : f.call(null,G__25088));
})();var inst_25043 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25042__$1,inst_25035);var inst_25044 = cljs.core.keyword_identical_QMARK_(inst_25035,cljs.core.constant$keyword$31);var inst_25045 = (inst_25043) || (inst_25044);var state_25074__$1 = (function (){var statearr_25089 = state_25074;(statearr_25089[(10)] = inst_25042__$1);
return statearr_25089;
})();if(cljs.core.truth_(inst_25045))
{var statearr_25090_25115 = state_25074__$1;(statearr_25090_25115[(1)] = (8));
} else
{var statearr_25091_25116 = state_25074__$1;(statearr_25091_25116[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (14)))
{var inst_25067 = (state_25074[(2)]);var inst_25068 = cljs.core.async.close_BANG_(out);var state_25074__$1 = (function (){var statearr_25093 = state_25074;(statearr_25093[(13)] = inst_25067);
return statearr_25093;
})();var statearr_25094_25117 = state_25074__$1;(statearr_25094_25117[(2)] = inst_25068);
(statearr_25094_25117[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (10)))
{var inst_25057 = (state_25074[(2)]);var state_25074__$1 = state_25074;var statearr_25095_25118 = state_25074__$1;(statearr_25095_25118[(2)] = inst_25057);
(statearr_25095_25118[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25075 === (8)))
{var inst_25042 = (state_25074[(10)]);var inst_25034 = (state_25074[(8)]);var inst_25038 = (state_25074[(9)]);var inst_25047 = inst_25034.push(inst_25038);var tmp25092 = inst_25034;var inst_25034__$1 = tmp25092;var inst_25035 = inst_25042;var state_25074__$1 = (function (){var statearr_25096 = state_25074;(statearr_25096[(14)] = inst_25047);
(statearr_25096[(7)] = inst_25035);
(statearr_25096[(8)] = inst_25034__$1);
return statearr_25096;
})();var statearr_25097_25119 = state_25074__$1;(statearr_25097_25119[(2)] = null);
(statearr_25097_25119[(1)] = (2));
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
});})(c__6495__auto___25105,out))
;return ((function (switch__6480__auto__,c__6495__auto___25105,out){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_25101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25101[(0)] = state_machine__6481__auto__);
(statearr_25101[(1)] = (1));
return statearr_25101;
});
var state_machine__6481__auto____1 = (function (state_25074){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_25074);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e25102){if((e25102 instanceof Object))
{var ex__6484__auto__ = e25102;var statearr_25103_25120 = state_25074;(statearr_25103_25120[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25074);
return cljs.core.constant$keyword$16;
} else
{throw e25102;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__25121 = state_25074;
state_25074 = G__25121;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_25074){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_25074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___25105,out))
})();var state__6497__auto__ = (function (){var statearr_25104 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_25104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___25105);
return statearr_25104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___25105,out))
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
