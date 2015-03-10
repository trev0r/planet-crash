// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$15);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t25038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t25038 = (function (f,fn_handler,meta25039){
this.f = f;
this.fn_handler = fn_handler;
this.meta25039 = meta25039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t25038.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t25038.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t25038";
cljs.core.async.impl.ioc_helpers.t25038.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async.impl.ioc-helpers/t25038");
});
cljs.core.async.impl.ioc_helpers.t25038.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t25038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t25038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t25038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25040){var self__ = this;
var _25040__$1 = this;return self__.meta25039;
});
cljs.core.async.impl.ioc_helpers.t25038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25040,meta25039__$1){var self__ = this;
var _25040__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t25038(self__.f,self__.fn_handler,meta25039__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t25038 = (function __GT_t25038(f__$1,fn_handler__$1,meta25039){return (new cljs.core.async.impl.ioc_helpers.t25038(f__$1,fn_handler__$1,meta25039));
});
}
return (new cljs.core.async.impl.ioc_helpers.t25038(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e25042){if((e25042 instanceof Object))
{var ex = e25042;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e25042;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4217__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_25046_25049 = state;(statearr_25046_25049[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_25046_25049[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4217__auto__))
{var cb = temp__4217__auto__;var statearr_25047_25050 = state;(statearr_25047_25050[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25048 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25048) : cljs.core.deref.call(null,G__25048));
})());
(statearr_25047_25050[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4217__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_25054_25057 = state;(statearr_25054_25057[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_25054_25057[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4217__auto__))
{var cb = temp__4217__auto__;var statearr_25055_25058 = state;(statearr_25055_25058[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25056 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25056) : cljs.core.deref.call(null,G__25056));
})());
(statearr_25055_25058[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4236__auto____$1,k__4237__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k25060,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__25062 = (((k25060 instanceof cljs.core.Keyword))?k25060.fqn:null);switch (G__25062) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25060,else__4239__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer(writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4251__auto__,pr_pair__4253__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4252__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap(this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map(this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$20,null], null), null),k__4246__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4246__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__25059){var self__ = this;
var this__4243__auto____$1 = this;var pred__25063 = cljs.core.keyword_identical_QMARK_;var expr__25064 = k__4244__auto__;if(cljs.core.truth_((function (){var G__25066 = cljs.core.constant$keyword$17;var G__25067 = expr__25064;return (pred__25063.cljs$core$IFn$_invoke$arity$2 ? pred__25063.cljs$core$IFn$_invoke$arity$2(G__25066,G__25067) : pred__25063.call(null,G__25066,G__25067));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__25059,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__25068 = cljs.core.constant$keyword$18;var G__25069 = expr__25064;return (pred__25063.cljs$core$IFn$_invoke$arity$2 ? pred__25063.cljs$core$IFn$_invoke$arity$2(G__25068,G__25069) : pred__25063.call(null,G__25068,G__25069));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__25059,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__25070 = cljs.core.constant$keyword$19;var G__25071 = expr__25064;return (pred__25063.cljs$core$IFn$_invoke$arity$2 ? pred__25063.cljs$core$IFn$_invoke$arity$2(G__25070,G__25071) : pred__25063.call(null,G__25070,G__25071));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__25059,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__25072 = cljs.core.constant$keyword$20;var G__25073 = expr__25064;return (pred__25063.cljs$core$IFn$_invoke$arity$2 ? pred__25063.cljs$core$IFn$_invoke$arity$2(G__25072,G__25073) : pred__25063.call(null,G__25072,G__25073));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__25059,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__25074 = cljs.core.constant$keyword$21;var G__25075 = expr__25064;return (pred__25063.cljs$core$IFn$_invoke$arity$2 ? pred__25063.cljs$core$IFn$_invoke$arity$2(G__25074,G__25075) : pred__25063.call(null,G__25074,G__25075));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__25059,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4244__auto__,G__25059),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__25059){var self__ = this;
var this__4235__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__25059,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4242__auto__))
{return cljs.core._assoc(this__4241__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4242__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write(writer__4271__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__25061){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__25061),cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__25061),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__25061),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__25061),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__25061),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25061,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$18,cljs.core.constant$keyword$19,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_25078 = state;(statearr_25078[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_25078;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3628__auto__ = exception;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3628__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = exception;if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = catch_block;if(cljs.core.truth_(and__3628__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{var statearr_25084 = state;(statearr_25084[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_25084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_25084[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_25084[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$17,null,cljs.core.array_seq([cljs.core.constant$keyword$18,null], 0)));
return statearr_25084;
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = exception;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3628__auto__;
}
})()))
{var statearr_25085_25089 = state;(statearr_25085_25089[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__25090 = state;
state = G__25090;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = exception;if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.not(catch_block);if(and__3628__auto____$1)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{var statearr_25086 = state;(statearr_25086[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_25086[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_25086;
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not(exception);if(and__3628__auto__)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3628__auto__;
}
})()))
{var statearr_25087 = state;(statearr_25087[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_25087[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_25087;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_25088 = state;(statearr_25088[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_25088[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_25088;
} else
{throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
