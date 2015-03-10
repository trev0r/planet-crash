// Compiled by ClojureScript 0.0-2371
goog.provide('planet_crash.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
if(typeof planet_crash.core.colors !== 'undefined')
{} else
{planet_crash.core.colors = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#F97A77","#6699CC","#99CC99","#F99157","#66CCCC","#CC99CC","#D27B53","#A0A093","#F2F0EC","#00FFFF","#E8E6DF"], null);
}
if(typeof planet_crash.core.app_state !== 'undefined')
{} else
{planet_crash.core.app_state = (function (){var G__15153 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,(1280),cljs.core.constant$keyword$64,(700),cljs.core.constant$keyword$65,true,cljs.core.constant$keyword$66,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(350)], null),cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$69,(30),cljs.core.constant$keyword$70,(333000),cljs.core.constant$keyword$71,"#FFCC66",cljs.core.constant$keyword$72,false], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(150)], null),cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [40.8,(0)], null),cljs.core.constant$keyword$69,(10),cljs.core.constant$keyword$70,(50),cljs.core.constant$keyword$71,cljs.core.first(planet_crash.core.colors),cljs.core.constant$keyword$72,false], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(50)], null),cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [33.3,(0)], null),cljs.core.constant$keyword$69,(15),cljs.core.constant$keyword$70,(1),cljs.core.constant$keyword$71,cljs.core.second(planet_crash.core.colors),cljs.core.constant$keyword$72,false], null)], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15153) : cljs.core.atom.call(null,G__15153));
})();
}
cljs.core.enable_console_print_BANG_();
/**
* Given a target DOM element and event type return a channel of
* observed events. Can supply the channel to receive events as third
* optional argument.
*/
planet_crash.core.events__GT_chan = (function() {
var events__GT_chan = null;
var events__GT_chan__2 = (function (el,event_type){return events__GT_chan.cljs$core$IFn$_invoke$arity$3(el,event_type,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var events__GT_chan__3 = (function (el,event_type,c){var G__15160_15163 = el;var G__15161_15164 = event_type;var G__15162_15165 = ((function (G__15160_15163,G__15161_15164){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,e);
});})(G__15160_15163,G__15161_15164))
;goog.events.listen(G__15160_15163,G__15161_15164,G__15162_15165);
return c;
});
events__GT_chan = function(el,event_type,c){
switch(arguments.length){
case 2:
return events__GT_chan__2.call(this,el,event_type);
case 3:
return events__GT_chan__3.call(this,el,event_type,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
events__GT_chan.cljs$core$IFn$_invoke$arity$2 = events__GT_chan__2;
events__GT_chan.cljs$core$IFn$_invoke$arity$3 = events__GT_chan__3;
return events__GT_chan;
})()
;
/**
* Given a Google Closure normalized DOM mouse event return the
* mouse x and y position as a two element vector.
*/
planet_crash.core.mouse_loc__GT_vec = (function mouse_loc__GT_vec(e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
planet_crash.core.set_background_BANG_ = (function set_background_BANG_(context){var gradient = context.createRadialGradient((640),(350),(5),(640),(350),(640));gradient.addColorStop((0),"#666666");
gradient.addColorStop((1),"#212121");
context.fillStyle = gradient;
return context.fillRect((0),(0),(1280),(700));
});
planet_crash.core.draw_BANG_ = (function draw_BANG_(context,p__15166){var map__15169 = p__15166;var map__15169__$1 = ((cljs.core.seq_QMARK_(map__15169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15169):map__15169);var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$71);var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$69);var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$67);var vec__15170 = position;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(1),null);context.beginPath();
context.arc(Math.floor(x),Math.floor(y),radius,(0),((2) * Math.PI),false);
context.fillStyle = color;
context.fill();
context.lineWidth = (0);
context.strokeStyle = color;
return context.stroke();
});
planet_crash.core.render_chan = (function render_chan(context){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6495__auto___15335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___15335,c){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___15335,c){
return (function (state_15301){var state_val_15302 = (state_15301[(1)]);if((state_val_15302 === (7)))
{var inst_15265 = (state_15301[(7)]);var inst_15264 = (state_15301[(8)]);var inst_15263 = (state_15301[(9)]);var inst_15262 = (state_15301[(10)]);var inst_15270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15263,inst_15265);var inst_15271 = planet_crash.core.draw_BANG_(context,inst_15270);var inst_15272 = (inst_15265 + (1));var tmp15303 = inst_15264;var tmp15304 = inst_15263;var tmp15305 = inst_15262;var inst_15262__$1 = tmp15305;var inst_15263__$1 = tmp15304;var inst_15264__$1 = tmp15303;var inst_15265__$1 = inst_15272;var state_15301__$1 = (function (){var statearr_15306 = state_15301;(statearr_15306[(7)] = inst_15265__$1);
(statearr_15306[(8)] = inst_15264__$1);
(statearr_15306[(9)] = inst_15263__$1);
(statearr_15306[(11)] = inst_15271);
(statearr_15306[(10)] = inst_15262__$1);
return statearr_15306;
})();var statearr_15307_15336 = state_15301__$1;(statearr_15307_15336[(2)] = null);
(statearr_15307_15336[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (1)))
{var state_15301__$1 = state_15301;var statearr_15308_15337 = state_15301__$1;(statearr_15308_15337[(2)] = null);
(statearr_15308_15337[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (4)))
{var inst_15255 = (state_15301[(2)]);var inst_15256 = planet_crash.core.set_background_BANG_(context);var inst_15261 = cljs.core.seq(inst_15255);var inst_15262 = inst_15261;var inst_15263 = null;var inst_15264 = (0);var inst_15265 = (0);var state_15301__$1 = (function (){var statearr_15309 = state_15301;(statearr_15309[(12)] = inst_15256);
(statearr_15309[(7)] = inst_15265);
(statearr_15309[(8)] = inst_15264);
(statearr_15309[(9)] = inst_15263);
(statearr_15309[(10)] = inst_15262);
return statearr_15309;
})();var statearr_15310_15338 = state_15301__$1;(statearr_15310_15338[(2)] = null);
(statearr_15310_15338[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (15)))
{var inst_15289 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15311_15339 = state_15301__$1;(statearr_15311_15339[(2)] = inst_15289);
(statearr_15311_15339[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (13)))
{var inst_15275 = (state_15301[(13)]);var inst_15279 = cljs.core.chunk_first(inst_15275);var inst_15280 = cljs.core.chunk_rest(inst_15275);var inst_15281 = cljs.core.count(inst_15279);var inst_15262 = inst_15280;var inst_15263 = inst_15279;var inst_15264 = inst_15281;var inst_15265 = (0);var state_15301__$1 = (function (){var statearr_15312 = state_15301;(statearr_15312[(7)] = inst_15265);
(statearr_15312[(8)] = inst_15264);
(statearr_15312[(9)] = inst_15263);
(statearr_15312[(10)] = inst_15262);
return statearr_15312;
})();var statearr_15313_15340 = state_15301__$1;(statearr_15313_15340[(2)] = null);
(statearr_15313_15340[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (6)))
{var inst_15296 = (state_15301[(2)]);var state_15301__$1 = (function (){var statearr_15314 = state_15301;(statearr_15314[(14)] = inst_15296);
return statearr_15314;
})();var statearr_15315_15341 = state_15301__$1;(statearr_15315_15341[(2)] = null);
(statearr_15315_15341[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (3)))
{var inst_15299 = (state_15301[(2)]);var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.return_chan(state_15301__$1,inst_15299);
} else
{if((state_val_15302 === (12)))
{var inst_15292 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15316_15342 = state_15301__$1;(statearr_15316_15342[(2)] = inst_15292);
(statearr_15316_15342[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (2)))
{var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15301__$1,(4),c);
} else
{if((state_val_15302 === (11)))
{var state_15301__$1 = state_15301;var statearr_15317_15343 = state_15301__$1;(statearr_15317_15343[(2)] = null);
(statearr_15317_15343[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (9)))
{var inst_15294 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15318_15344 = state_15301__$1;(statearr_15318_15344[(2)] = inst_15294);
(statearr_15318_15344[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (5)))
{var inst_15265 = (state_15301[(7)]);var inst_15264 = (state_15301[(8)]);var inst_15267 = (inst_15265 < inst_15264);var inst_15268 = inst_15267;var state_15301__$1 = state_15301;if(cljs.core.truth_(inst_15268))
{var statearr_15319_15345 = state_15301__$1;(statearr_15319_15345[(1)] = (7));
} else
{var statearr_15320_15346 = state_15301__$1;(statearr_15320_15346[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (14)))
{var inst_15275 = (state_15301[(13)]);var inst_15284 = cljs.core.first(inst_15275);var inst_15285 = planet_crash.core.draw_BANG_(context,inst_15284);var inst_15286 = cljs.core.next(inst_15275);var inst_15262 = inst_15286;var inst_15263 = null;var inst_15264 = (0);var inst_15265 = (0);var state_15301__$1 = (function (){var statearr_15321 = state_15301;(statearr_15321[(7)] = inst_15265);
(statearr_15321[(8)] = inst_15264);
(statearr_15321[(15)] = inst_15285);
(statearr_15321[(9)] = inst_15263);
(statearr_15321[(10)] = inst_15262);
return statearr_15321;
})();var statearr_15322_15347 = state_15301__$1;(statearr_15322_15347[(2)] = null);
(statearr_15322_15347[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (10)))
{var inst_15275 = (state_15301[(13)]);var inst_15277 = cljs.core.chunked_seq_QMARK_(inst_15275);var state_15301__$1 = state_15301;if(inst_15277)
{var statearr_15323_15348 = state_15301__$1;(statearr_15323_15348[(1)] = (13));
} else
{var statearr_15324_15349 = state_15301__$1;(statearr_15324_15349[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15302 === (8)))
{var inst_15275 = (state_15301[(13)]);var inst_15262 = (state_15301[(10)]);var inst_15275__$1 = cljs.core.seq(inst_15262);var state_15301__$1 = (function (){var statearr_15325 = state_15301;(statearr_15325[(13)] = inst_15275__$1);
return statearr_15325;
})();if(inst_15275__$1)
{var statearr_15326_15350 = state_15301__$1;(statearr_15326_15350[(1)] = (10));
} else
{var statearr_15327_15351 = state_15301__$1;(statearr_15327_15351[(1)] = (11));
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
});})(c__6495__auto___15335,c))
;return ((function (switch__6480__auto__,c__6495__auto___15335,c){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_15331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15331[(0)] = state_machine__6481__auto__);
(statearr_15331[(1)] = (1));
return statearr_15331;
});
var state_machine__6481__auto____1 = (function (state_15301){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_15301);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e15332){if((e15332 instanceof Object))
{var ex__6484__auto__ = e15332;var statearr_15333_15352 = state_15301;(statearr_15333_15352[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15301);
return cljs.core.constant$keyword$16;
} else
{throw e15332;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__15353 = state_15301;
state_15301 = G__15353;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_15301){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_15301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___15335,c))
})();var state__6497__auto__ = (function (){var statearr_15334 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_15334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___15335);
return statearr_15334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___15335,c))
);
return c;
});
/**
* Create a channel which emits the current time every interval milliseconds.
* Any value written to start/stop will start/stop the messages. Taken from an
* om cookbook.
*/
planet_crash.core.clock = (function clock(interval){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var start = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var stop = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6495__auto___15516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto___15516,out,start,stop){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto___15516,out,start,stop){
return (function (state_15481){var state_val_15482 = (state_15481[(1)]);if((state_val_15482 === (7)))
{var inst_15445 = (state_15481[(7)]);var inst_15453 = (state_15481[(2)]);var inst_15457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stop,inst_15445);var state_15481__$1 = (function (){var statearr_15483 = state_15481;(statearr_15483[(8)] = inst_15453);
return statearr_15483;
})();if(inst_15457)
{var statearr_15484_15517 = state_15481__$1;(statearr_15484_15517[(1)] = (9));
} else
{var statearr_15485_15518 = state_15481__$1;(statearr_15485_15518[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (1)))
{var inst_15435 = true;var state_15481__$1 = (function (){var statearr_15486 = state_15481;(statearr_15486[(9)] = inst_15435);
return statearr_15486;
})();var statearr_15487_15519 = state_15481__$1;(statearr_15487_15519[(2)] = null);
(statearr_15487_15519[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (4)))
{var inst_15435 = (state_15481[(9)]);var inst_15443 = (state_15481[(2)]);var inst_15444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15443,(0),null);var inst_15445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15443,(1),null);var state_15481__$1 = (function (){var statearr_15488 = state_15481;(statearr_15488[(10)] = inst_15444);
(statearr_15488[(7)] = inst_15445);
return statearr_15488;
})();if(cljs.core.truth_(inst_15435))
{var statearr_15489_15520 = state_15481__$1;(statearr_15489_15520[(1)] = (5));
} else
{var statearr_15490_15521 = state_15481__$1;(statearr_15490_15521[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (15)))
{var inst_15435 = true;var state_15481__$1 = (function (){var statearr_15491 = state_15481;(statearr_15491[(9)] = inst_15435);
return statearr_15491;
})();var statearr_15492_15522 = state_15481__$1;(statearr_15492_15522[(2)] = null);
(statearr_15492_15522[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (13)))
{var inst_15445 = (state_15481[(7)]);var inst_15465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,inst_15445);var state_15481__$1 = state_15481;if(inst_15465)
{var statearr_15493_15523 = state_15481__$1;(statearr_15493_15523[(1)] = (15));
} else
{var statearr_15494_15524 = state_15481__$1;(statearr_15494_15524[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (6)))
{var state_15481__$1 = state_15481;var statearr_15495_15525 = state_15481__$1;(statearr_15495_15525[(2)] = null);
(statearr_15495_15525[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (17)))
{var inst_15473 = (state_15481[(2)]);var state_15481__$1 = state_15481;var statearr_15497_15526 = state_15481__$1;(statearr_15497_15526[(2)] = inst_15473);
(statearr_15497_15526[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (3)))
{var inst_15479 = (state_15481[(2)]);var state_15481__$1 = state_15481;return cljs.core.async.impl.ioc_helpers.return_chan(state_15481__$1,inst_15479);
} else
{if((state_val_15482 === (12)))
{var inst_15435 = (state_15481[(9)]);var tmp15496 = inst_15435;var inst_15435__$1 = tmp15496;var state_15481__$1 = (function (){var statearr_15498 = state_15481;(statearr_15498[(9)] = inst_15435__$1);
return statearr_15498;
})();var statearr_15499_15527 = state_15481__$1;(statearr_15499_15527[(2)] = null);
(statearr_15499_15527[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (2)))
{var inst_15438 = (state_15481[(11)]);var inst_15438__$1 = cljs.core.async.timeout(interval);var inst_15439 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15440 = [stop,inst_15438__$1,start];var inst_15441 = (new cljs.core.PersistentVector(null,3,(5),inst_15439,inst_15440,null));var state_15481__$1 = (function (){var statearr_15500 = state_15481;(statearr_15500[(11)] = inst_15438__$1);
return statearr_15500;
})();return cljs.core.async.ioc_alts_BANG_(state_15481__$1,(4),inst_15441);
} else
{if((state_val_15482 === (11)))
{var inst_15477 = (state_15481[(2)]);var state_15481__$1 = state_15481;var statearr_15501_15528 = state_15481__$1;(statearr_15501_15528[(2)] = inst_15477);
(statearr_15501_15528[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (9)))
{var inst_15435 = false;var state_15481__$1 = (function (){var statearr_15502 = state_15481;(statearr_15502[(9)] = inst_15435);
return statearr_15502;
})();var statearr_15503_15529 = state_15481__$1;(statearr_15503_15529[(2)] = null);
(statearr_15503_15529[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (5)))
{var inst_15447 = window.performance;var inst_15448 = inst_15447.now();var state_15481__$1 = state_15481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15481__$1,(8),out,inst_15448);
} else
{if((state_val_15482 === (14)))
{var inst_15475 = (state_15481[(2)]);var state_15481__$1 = state_15481;var statearr_15504_15530 = state_15481__$1;(statearr_15504_15530[(2)] = inst_15475);
(statearr_15504_15530[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (16)))
{var inst_15445 = (state_15481[(7)]);var inst_15469 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15445));var inst_15470 = (new Error(inst_15469));var inst_15471 = (function(){throw inst_15470})();var state_15481__$1 = state_15481;var statearr_15505_15531 = state_15481__$1;(statearr_15505_15531[(2)] = inst_15471);
(statearr_15505_15531[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (10)))
{var inst_15438 = (state_15481[(11)]);var inst_15445 = (state_15481[(7)]);var inst_15461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15438,inst_15445);var state_15481__$1 = state_15481;if(inst_15461)
{var statearr_15506_15532 = state_15481__$1;(statearr_15506_15532[(1)] = (12));
} else
{var statearr_15507_15533 = state_15481__$1;(statearr_15507_15533[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15482 === (8)))
{var inst_15450 = (state_15481[(2)]);var state_15481__$1 = state_15481;var statearr_15508_15534 = state_15481__$1;(statearr_15508_15534[(2)] = inst_15450);
(statearr_15508_15534[(1)] = (7));
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
});})(c__6495__auto___15516,out,start,stop))
;return ((function (switch__6480__auto__,c__6495__auto___15516,out,start,stop){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_15512 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15512[(0)] = state_machine__6481__auto__);
(statearr_15512[(1)] = (1));
return statearr_15512;
});
var state_machine__6481__auto____1 = (function (state_15481){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_15481);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e15513){if((e15513 instanceof Object))
{var ex__6484__auto__ = e15513;var statearr_15514_15535 = state_15481;(statearr_15514_15535[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15481);
return cljs.core.constant$keyword$16;
} else
{throw e15513;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__15536 = state_15481;
state_15481 = G__15536;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_15481){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_15481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto___15516,out,start,stop))
})();var state__6497__auto__ = (function (){var statearr_15515 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_15515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto___15516);
return statearr_15515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto___15516,out,start,stop))
);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,start,stop], null);
});
/**
* @param {...*} var_args
*/
planet_crash.core.add = (function() { 
var add__delegate = function (args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){if((typeof A === 'number') && (typeof B === 'number'))
{return (A + B);
} else
{if((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,A,B);
} else
{if((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.replicate(cljs.core.count(B),A),B);
} else
{if((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,A,cljs.core.replicate(cljs.core.count(A),B));
} else
{return null;
}
}
}
}
}),args);
};
var add = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add__delegate.call(this,args);};
add.cljs$lang$maxFixedArity = 0;
add.cljs$lang$applyTo = (function (arglist__15537){
var args = cljs.core.seq(arglist__15537);
return add__delegate(args);
});
add.cljs$core$IFn$_invoke$arity$variadic = add__delegate;
return add;
})()
;
/**
* @param {...*} var_args
*/
planet_crash.core.sub = (function() { 
var sub__delegate = function (args){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1)))
{if((typeof (0) === 'number') && (typeof cljs.core.first(args) === 'number'))
{return ((0) - cljs.core.first(args));
} else
{if((cljs.core.coll_QMARK_((0))) && (cljs.core.coll_QMARK_(cljs.core.first(args))))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,(0),cljs.core.first(args));
} else
{if((typeof (0) === 'number') && (cljs.core.coll_QMARK_(cljs.core.first(args))))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.replicate(cljs.core.count(cljs.core.first(args)),(0)),cljs.core.first(args));
} else
{if((cljs.core.coll_QMARK_((0))) && (typeof cljs.core.first(args) === 'number'))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,(0),cljs.core.replicate(cljs.core.count((0)),cljs.core.first(args)));
} else
{return null;
}
}
}
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){if((typeof A === 'number') && (typeof B === 'number'))
{return (A - B);
} else
{if((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,A,B);
} else
{if((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.replicate(cljs.core.count(B),A),B);
} else
{if((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,A,cljs.core.replicate(cljs.core.count(A),B));
} else
{return null;
}
}
}
}
}),args);
}
};
var sub = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__15538){
var args = cljs.core.seq(arglist__15538);
return sub__delegate(args);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
planet_crash.core.mul = (function() { 
var mul__delegate = function (args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){if((typeof A === 'number') && (typeof B === 'number'))
{return (A * B);
} else
{if((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,A,B);
} else
{if((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,cljs.core.replicate(cljs.core.count(B),A),B);
} else
{if((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,A,cljs.core.replicate(cljs.core.count(A),B));
} else
{return null;
}
}
}
}
}),args);
};
var mul = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mul__delegate.call(this,args);};
mul.cljs$lang$maxFixedArity = 0;
mul.cljs$lang$applyTo = (function (arglist__15539){
var args = cljs.core.seq(arglist__15539);
return mul__delegate(args);
});
mul.cljs$core$IFn$_invoke$arity$variadic = mul__delegate;
return mul;
})()
;
planet_crash.core.power = (function power(xs,pow){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){return Math.pow(x,pow);
}),xs);
});
planet_crash.core.acceleration = (function acceleration(p1,p2,m){var p = planet_crash.core.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));var a_mag = (- Math.pow(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,planet_crash.core.power(p,(2))),-1.5));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2))
{return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),p], 0));
} else
{return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(m * a_mag),p], 0));
}
});
planet_crash.core.agg_acceleration = (function agg_acceleration(p0,ps){var accs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15542){var map__15543 = p__15542;var map__15543__$1 = ((cljs.core.seq_QMARK_(map__15543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15543):map__15543);var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15543__$1,cljs.core.constant$keyword$70);var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15543__$1,cljs.core.constant$keyword$67);return planet_crash.core.acceleration(p0,position,mass);
}),ps);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(planet_crash.core.add,accs);
});
planet_crash.core.orbital_velocity = (function orbital_velocity(c1,c2,m){var vec__15545 = planet_crash.core.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c1,c2], 0));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(1),null);var theta = Math.atan2(y,x);var r = Math.pow(((x * x) + (y * y)),.5);var v_mag = Math.pow((m / r),.5);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- v_mag) * Math.sin(theta)),(v_mag * Math.cos(theta))], null);
});
planet_crash.core.update_planets = (function update_planets(planets,delta_t){var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$68,planets);var ps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$67,planets);var as = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps){
return (function (p){return planet_crash.core.agg_acceleration(p,planets);
});})(vs,ps))
,ps);var vs_delta = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps,as){
return (function (a){return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,delta_t], 0));
});})(vs,ps,as))
,as);var vs_new = cljs.core.map.cljs$core$IFn$_invoke$arity$3(planet_crash.core.add,vs,vs_delta);var ps_delta = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps,as,vs_delta,vs_new){
return (function (v){return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v,delta_t], 0));
});})(vs,ps,as,vs_delta,vs_new))
,vs_new);var ps_new = cljs.core.map.cljs$core$IFn$_invoke$arity$3(planet_crash.core.add,ps,ps_delta);return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (vs,ps,as,vs_delta,vs_new,ps_delta,ps_new){
return (function (planet,v,p){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(planet,cljs.core.constant$keyword$68,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,v),cljs.core.array_seq([cljs.core.constant$keyword$67,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p)], 0));
});})(vs,ps,as,vs_delta,vs_new,ps_delta,ps_new))
,planets,vs_new,ps_new));
});
planet_crash.core.pr_map_cursor = (function pr_map_cursor(cursor){return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,om.core.value(cursor))], 0));
});
planet_crash.core.handle_change = (function handle_change(e,cursor,owner,key){var value = e.target.value;try{var data = cljs.reader.read_string(value);om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,key,((function (data,value){
return (function (_){return data;
});})(data,value))
);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,key,value);
}catch (e15547){var ex = e15547;return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,key,value);
}});
planet_crash.core.planet_editor = (function planet_editor(planet,owner){if(typeof planet_crash.core.t15583 !== 'undefined')
{} else
{
/**
* @constructor
*/
planet_crash.core.t15583 = (function (owner,planet,planet_editor,meta15584){
this.owner = owner;
this.planet = planet;
this.planet_editor = planet_editor;
this.meta15584 = meta15584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planet_crash.core.t15583.cljs$lang$type = true;
planet_crash.core.t15583.cljs$lang$ctorStr = "planet-crash.core/t15583";
planet_crash.core.t15583.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"planet-crash.core/t15583");
});
planet_crash.core.t15583.prototype.om$core$IRender$ = true;
planet_crash.core.t15583.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__15586 = null;var G__15587 = (cljs.core.truth_(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(self__.planet))?(function (){var G__15588 = null;var G__15589 = (function (){var G__15598 = {"className": "inspector"};var G__15599 = "{:mass ";return React.DOM.code(G__15598,G__15599);
})();var G__15590 = (function (){var G__15600 = {"onChange": ((function (G__15588,G__15589,G__15586,___$1){
return (function (p1__15548_SHARP_){return planet_crash.core.handle_change(p1__15548_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$70);
});})(G__15588,G__15589,G__15586,___$1))
, "size": (10), "value": cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(self__.planet), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15600) : om.dom.input.call(null,G__15600));
})();var G__15591 = (function (){var G__15601 = {"className": "inspector"};var G__15602 = ", :radius ";return React.DOM.code(G__15601,G__15602);
})();var G__15592 = (function (){var G__15603 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15586,___$1){
return (function (p1__15549_SHARP_){return planet_crash.core.handle_change(p1__15549_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$69);
});})(G__15588,G__15589,G__15590,G__15591,G__15586,___$1))
, "size": (40), "value": cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(self__.planet), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15603) : om.dom.input.call(null,G__15603));
})();var G__15593 = (function (){var G__15604 = {"className": "inspector"};var G__15605 = ", :position ";return React.DOM.code(G__15604,G__15605);
})();var G__15594 = (function (){var G__15606 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15586,___$1){
return (function (p1__15550_SHARP_){return planet_crash.core.handle_change(p1__15550_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$67);
});})(G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15586,___$1))
, "size": (40), "value": om.core.value(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.planet)), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15606) : om.dom.input.call(null,G__15606));
})();var G__15595 = (function (){var G__15607 = {"className": "inspector"};var G__15608 = ", :velocity ";return React.DOM.code(G__15607,G__15608);
})();var G__15596 = (function (){var G__15609 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15586,___$1){
return (function (p1__15551_SHARP_){return planet_crash.core.handle_change(p1__15551_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$68);
});})(G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15586,___$1))
, "size": (45), "value": om.core.value(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.planet)), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15609) : om.dom.input.call(null,G__15609));
})();var G__15597 = (function (){var G__15610 = {"className": "inspector"};var G__15611 = " }";return React.DOM.code(G__15610,G__15611);
})();return React.DOM.div(G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597);
})():(function (){var G__15612 = null;var G__15613 = planet_crash.core.pr_map_cursor(self__.planet);return React.DOM.code(G__15612,G__15613);
})());return React.DOM.div(G__15586,G__15587);
});
planet_crash.core.t15583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15585){var self__ = this;
var _15585__$1 = this;return self__.meta15584;
});
planet_crash.core.t15583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15585,meta15584__$1){var self__ = this;
var _15585__$1 = this;return (new planet_crash.core.t15583(self__.owner,self__.planet,self__.planet_editor,meta15584__$1));
});
planet_crash.core.__GT_t15583 = (function __GT_t15583(owner__$1,planet__$1,planet_editor__$1,meta15584){return (new planet_crash.core.t15583(owner__$1,planet__$1,planet_editor__$1,meta15584));
});
}
return (new planet_crash.core.t15583(owner,planet,planet_editor,null));
});
planet_crash.core.main = (function main(){return om.core.root((function (app,owner){if(typeof planet_crash.core.t15736 !== 'undefined')
{} else
{
/**
* @constructor
*/
planet_crash.core.t15736 = (function (owner,app,main,meta15737){
this.owner = owner;
this.app = app;
this.main = main;
this.meta15737 = meta15737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planet_crash.core.t15736.cljs$lang$type = true;
planet_crash.core.t15736.cljs$lang$ctorStr = "planet-crash.core/t15736";
planet_crash.core.t15736.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"planet-crash.core/t15736");
});
planet_crash.core.t15736.prototype.om$core$IRender$ = true;
planet_crash.core.t15736.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__15739 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$73);var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(0),null);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(1),null);var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(2),null);var G__15740 = null;var G__15741 = (function (){var G__15744 = {"ref": "universe-ref", "height": (function (){var G__15746 = cljs.core.constant$keyword$64;return (self__.app.cljs$core$IFn$_invoke$arity$1 ? self__.app.cljs$core$IFn$_invoke$arity$1(G__15746) : self__.app.call(null,G__15746));
})(), "width": (function (){var G__15745 = cljs.core.constant$keyword$63;return (self__.app.cljs$core$IFn$_invoke$arity$1 ? self__.app.cljs$core$IFn$_invoke$arity$1(G__15745) : self__.app.call(null,G__15745));
})(), "id": "universe"};return React.DOM.canvas(G__15744);
})();var G__15742 = (function (){var G__15747 = null;var G__15748 = (function (){var G__15751 = null;var G__15752 = "Click to add a planet ";return React.DOM.label(G__15751,G__15752);
})();var G__15749 = (function (){var G__15753 = {"onClick": ((function (G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (___$3){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop,true);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$65,false);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$66,((function (G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (ps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (p1__15616_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15616_SHARP_,cljs.core.constant$keyword$72,true);
});})(G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
,ps));
});})(G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
);
});})(G__15747,G__15748,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
};var G__15754 = "Pause";return React.DOM.button(G__15753,G__15754);
})();var G__15750 = (function (){var G__15755 = {"onClick": ((function (G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (___$3){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(start,true);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$65,true);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$66,((function (G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (ps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1){
return (function (p1__15617_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15617_SHARP_,cljs.core.constant$keyword$72,false);
});})(G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
,ps));
});})(G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
);
});})(G__15747,G__15748,G__15749,G__15740,G__15741,vec__15739,___$2,start,stop,___$1))
};var G__15756 = "Play";return React.DOM.button(G__15755,G__15756);
})();return React.DOM.div(G__15747,G__15748,G__15749,G__15750);
})();var G__15743 = (function (){var G__15757 = null;var G__15758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,om.core.build_all.cljs$core$IFn$_invoke$arity$2(planet_crash.core.planet_editor,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(self__.app)));return React.DOM.div(G__15757,G__15758);
})();return React.DOM.div(G__15740,G__15741,G__15742,G__15743);
});
planet_crash.core.t15736.prototype.om$core$IDidMount$ = true;
planet_crash.core.t15736.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var universe = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"universe-ref");var context = universe.getContext("2d");var render = planet_crash.core.render_chan(context);var vec__15759 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$73);var clock = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759,(0),null);var clicks = planet_crash.core.events__GT_chan.cljs$core$IFn$_invoke$arity$3(universe,goog.events.EventType.CLICK,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(planet_crash.core.mouse_loc__GT_vec)));var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1){
return (function (state_15822){var state_val_15823 = (state_15822[(1)]);if((state_val_15823 === (7)))
{var inst_15817 = (state_15822[(2)]);var state_15822__$1 = (function (){var statearr_15824 = state_15822;(statearr_15824[(7)] = inst_15817);
return statearr_15824;
})();var statearr_15825_15854 = state_15822__$1;(statearr_15825_15854[(2)] = null);
(statearr_15825_15854[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (1)))
{var state_15822__$1 = state_15822;var statearr_15826_15855 = state_15822__$1;(statearr_15826_15855[(2)] = null);
(statearr_15826_15855[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (4)))
{var inst_15771 = (state_15822[(8)]);var inst_15769 = (state_15822[(9)]);var inst_15769__$1 = (state_15822[(2)]);var inst_15770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15769__$1,(0),null);var inst_15771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15769__$1,(1),null);var inst_15775 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clicks,inst_15771__$1);var state_15822__$1 = (function (){var statearr_15827 = state_15822;(statearr_15827[(8)] = inst_15771__$1);
(statearr_15827[(9)] = inst_15769__$1);
(statearr_15827[(10)] = inst_15770);
return statearr_15827;
})();if(inst_15775)
{var statearr_15828_15856 = state_15822__$1;(statearr_15828_15856[(1)] = (5));
} else
{var statearr_15829_15857 = state_15822__$1;(statearr_15829_15857[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (6)))
{var inst_15771 = (state_15822[(8)]);var inst_15801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clock,inst_15771);var state_15822__$1 = state_15822;if(inst_15801)
{var statearr_15830_15858 = state_15822__$1;(statearr_15830_15858[(1)] = (8));
} else
{var statearr_15831_15859 = state_15822__$1;(statearr_15831_15859[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (3)))
{var inst_15820 = (state_15822[(2)]);var state_15822__$1 = state_15822;return cljs.core.async.impl.ioc_helpers.return_chan(state_15822__$1,inst_15820);
} else
{if((state_val_15823 === (2)))
{var inst_15761 = (function (){var G__15832 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15832) : cljs.core.deref.call(null,G__15832));
})();var inst_15762 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15761);var inst_15763 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15762);var inst_15765 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15766 = [clicks,clock];var inst_15767 = (new cljs.core.PersistentVector(null,2,(5),inst_15765,inst_15766,null));var state_15822__$1 = (function (){var statearr_15833 = state_15822;(statearr_15833[(11)] = inst_15763);
return statearr_15833;
})();return cljs.core.async.ioc_alts_BANG_(state_15822__$1,(4),inst_15767);
} else
{if((state_val_15823 === (9)))
{var inst_15771 = (state_15822[(8)]);var inst_15811 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15771));var inst_15812 = (new Error(inst_15811));var inst_15813 = (function(){throw inst_15812})();var state_15822__$1 = state_15822;var statearr_15834_15860 = state_15822__$1;(statearr_15834_15860[(2)] = inst_15813);
(statearr_15834_15860[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (5)))
{var inst_15771 = (state_15822[(8)]);var inst_15769 = (state_15822[(9)]);var inst_15770 = (state_15822[(10)]);var inst_15777 = (function (){var G__15835 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15835) : cljs.core.deref.call(null,G__15835));
})();var inst_15778 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15777);var inst_15779 = cljs.core.first(inst_15778);var inst_15780 = (function (){var G__15836 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15836) : cljs.core.deref.call(null,G__15836));
})();var inst_15781 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15780);var inst_15782 = cljs.core.count(inst_15781);var inst_15783 = cljs.core.count(planet_crash.core.colors);var inst_15784 = cljs.core.mod(inst_15782,inst_15783);var inst_15785 = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(inst_15779);var inst_15786 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15779);var inst_15787 = planet_crash.core.orbital_velocity(inst_15770,inst_15785,inst_15786);var inst_15788 = [cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72];var inst_15789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(planet_crash.core.colors,inst_15784);var inst_15790 = (function (){var G__15837 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15837) : cljs.core.deref.call(null,G__15837));
})();var inst_15791 = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(inst_15790);var inst_15792 = cljs.core.not(inst_15791);var inst_15793 = [inst_15770,inst_15787,(10),(1),inst_15789,inst_15792];var inst_15794 = cljs.core.PersistentHashMap.fromArrays(inst_15788,inst_15793);var inst_15795 = (function (){var new_planet = inst_15794;var initial_velocity = inst_15787;var color_index = inst_15784;var sun = inst_15779;var expr__15773 = inst_15771;var pred__15772 = cljs.core._EQ_;var ch = inst_15771;var val = inst_15770;var vec__15764 = inst_15769;return ((function (new_planet,initial_velocity,color_index,sun,expr__15773,pred__15772,ch,val,vec__15764,inst_15771,inst_15769,inst_15770,inst_15777,inst_15778,inst_15779,inst_15780,inst_15781,inst_15782,inst_15783,inst_15784,inst_15785,inst_15786,inst_15787,inst_15788,inst_15789,inst_15790,inst_15791,inst_15792,inst_15793,inst_15794,state_val_15823,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1){
return (function (p1__15614_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15614_SHARP_,new_planet);
});
;})(new_planet,initial_velocity,color_index,sun,expr__15773,pred__15772,ch,val,vec__15764,inst_15771,inst_15769,inst_15770,inst_15777,inst_15778,inst_15779,inst_15780,inst_15781,inst_15782,inst_15783,inst_15784,inst_15785,inst_15786,inst_15787,inst_15788,inst_15789,inst_15790,inst_15791,inst_15792,inst_15793,inst_15794,state_val_15823,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1))
})();var inst_15796 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$66,inst_15795);var inst_15797 = (function (){var G__15838 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15838) : cljs.core.deref.call(null,G__15838));
})();var inst_15798 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15797);var inst_15799 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15798);var state_15822__$1 = (function (){var statearr_15839 = state_15822;(statearr_15839[(12)] = inst_15796);
return statearr_15839;
})();var statearr_15840_15861 = state_15822__$1;(statearr_15840_15861[(2)] = inst_15799);
(statearr_15840_15861[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (10)))
{var inst_15815 = (state_15822[(2)]);var state_15822__$1 = state_15822;var statearr_15841_15862 = state_15822__$1;(statearr_15841_15862[(2)] = inst_15815);
(statearr_15841_15862[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15823 === (8)))
{var inst_15771 = (state_15822[(8)]);var inst_15769 = (state_15822[(9)]);var inst_15770 = (state_15822[(10)]);var inst_15803 = (function (){var G__15842 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15842) : cljs.core.deref.call(null,G__15842));
})();var inst_15804 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15803);var inst_15805 = (function (){var old_planets = inst_15804;var expr__15773 = inst_15771;var pred__15772 = cljs.core._EQ_;var ch = inst_15771;var val = inst_15770;var vec__15764 = inst_15769;return ((function (old_planets,expr__15773,pred__15772,ch,val,vec__15764,inst_15771,inst_15769,inst_15770,inst_15803,inst_15804,state_val_15823,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1){
return (function (p1__15615_SHARP_){return planet_crash.core.update_planets(p1__15615_SHARP_,.3);
});
;})(old_planets,expr__15773,pred__15772,ch,val,vec__15764,inst_15771,inst_15769,inst_15770,inst_15803,inst_15804,state_val_15823,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1))
})();var inst_15806 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$66,inst_15805);var inst_15807 = (function (){var G__15843 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15843) : cljs.core.deref.call(null,G__15843));
})();var inst_15808 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15807);var inst_15809 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15808);var state_15822__$1 = (function (){var statearr_15844 = state_15822;(statearr_15844[(13)] = inst_15806);
return statearr_15844;
})();var statearr_15845_15863 = state_15822__$1;(statearr_15845_15863[(2)] = inst_15809);
(statearr_15845_15863[(1)] = (10));
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
});})(c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1))
;return ((function (switch__6480__auto__,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_15849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15849[(0)] = state_machine__6481__auto__);
(statearr_15849[(1)] = (1));
return statearr_15849;
});
var state_machine__6481__auto____1 = (function (state_15822){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_15822);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e15850){if((e15850 instanceof Object))
{var ex__6484__auto__ = e15850;var statearr_15851_15864 = state_15822;(statearr_15851_15864[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15822);
return cljs.core.constant$keyword$16;
} else
{throw e15850;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__15865 = state_15822;
state_15822 = G__15865;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1))
})();var state__6497__auto__ = (function (){var statearr_15852 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_15852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_15852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__,universe,context,render,vec__15759,clock,clicks,___$1))
);
return c__6495__auto__;
});
planet_crash.core.t15736.prototype.om$core$IInitState$ = true;
planet_crash.core.t15736.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__15853 = planet_crash.core.clock((30));var clk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15853,(0),null);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15853,(1),null);var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15853,(2),null);var c = vec__15853;var running = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.not(running))
{cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop,true);
} else
{}
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,c], null);
});
planet_crash.core.t15736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15738){var self__ = this;
var _15738__$1 = this;return self__.meta15737;
});
planet_crash.core.t15736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15738,meta15737__$1){var self__ = this;
var _15738__$1 = this;return (new planet_crash.core.t15736(self__.owner,self__.app,self__.main,meta15737__$1));
});
planet_crash.core.__GT_t15736 = (function __GT_t15736(owner__$1,app__$1,main__$1,meta15737){return (new planet_crash.core.t15736(owner__$1,app__$1,main__$1,meta15737));
});
}
return (new planet_crash.core.t15736(owner,app,main,null));
}),planet_crash.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,document.getElementById("app")], null));
});
