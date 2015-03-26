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
if(typeof planet_crash.core.preset_sizes !== 'undefined')
{} else
{planet_crash.core.preset_sizes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(1),cljs.core.constant$keyword$64,(15),cljs.core.constant$keyword$65,"Earth"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(5),cljs.core.constant$keyword$64,(20),cljs.core.constant$keyword$65,"Super-Earth"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(15),cljs.core.constant$keyword$64,(25),cljs.core.constant$keyword$65,"Ice giant"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(300),cljs.core.constant$keyword$64,(40),cljs.core.constant$keyword$65,"Giant planet"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(5000),cljs.core.constant$keyword$64,(60),cljs.core.constant$keyword$65,"Brown dwarf"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,(30000),cljs.core.constant$keyword$64,(100),cljs.core.constant$keyword$65,"Dwarf starf"], null)], null);
}
if(typeof planet_crash.core.app_state !== 'undefined')
{} else
{planet_crash.core.app_state = (function (){var G__15153 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$66,(1280),cljs.core.constant$keyword$67,(700),cljs.core.constant$keyword$68,true,cljs.core.constant$keyword$69,cljs.core.first(planet_crash.core.preset_sizes),cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(350)], null),cljs.core.constant$keyword$72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$64,(30),cljs.core.constant$keyword$63,(333000),cljs.core.constant$keyword$73,"#FFCC66",cljs.core.constant$keyword$74,false], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(150)], null),cljs.core.constant$keyword$72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [40.8,(0)], null),cljs.core.constant$keyword$64,(10),cljs.core.constant$keyword$63,(50),cljs.core.constant$keyword$73,cljs.core.first(planet_crash.core.colors),cljs.core.constant$keyword$74,false], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(50)], null),cljs.core.constant$keyword$72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [33.3,(0)], null),cljs.core.constant$keyword$64,(15),cljs.core.constant$keyword$63,(1),cljs.core.constant$keyword$73,cljs.core.second(planet_crash.core.colors),cljs.core.constant$keyword$74,false], null)], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15153) : cljs.core.atom.call(null,G__15153));
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
planet_crash.core.draw_BANG_ = (function draw_BANG_(context,p__15166){var map__15169 = p__15166;var map__15169__$1 = ((cljs.core.seq_QMARK_(map__15169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15169):map__15169);var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$73);var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$64);var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,cljs.core.constant$keyword$71);var vec__15170 = position;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(1),null);context.beginPath();
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
planet_crash.core.agg_acceleration = (function agg_acceleration(p0,ps){var accs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15542){var map__15543 = p__15542;var map__15543__$1 = ((cljs.core.seq_QMARK_(map__15543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15543):map__15543);var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15543__$1,cljs.core.constant$keyword$63);var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15543__$1,cljs.core.constant$keyword$71);return planet_crash.core.acceleration(p0,position,mass);
}),ps);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(planet_crash.core.add,accs);
});
planet_crash.core.orbital_velocity = (function orbital_velocity(c1,c2,m){var vec__15545 = planet_crash.core.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c1,c2], 0));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(1),null);var theta = Math.atan2(y,x);var r = Math.pow(((x * x) + (y * y)),.5);var v_mag = Math.pow((m / r),.5);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- v_mag) * Math.sin(theta)),(v_mag * Math.cos(theta))], null);
});
planet_crash.core.update_planets = (function update_planets(planets,delta_t){var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$72,planets);var ps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$71,planets);var as = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps){
return (function (p){return planet_crash.core.agg_acceleration(p,planets);
});})(vs,ps))
,ps);var vs_delta = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps,as){
return (function (a){return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,delta_t], 0));
});})(vs,ps,as))
,as);var vs_new = cljs.core.map.cljs$core$IFn$_invoke$arity$3(planet_crash.core.add,vs,vs_delta);var ps_delta = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,ps,as,vs_delta,vs_new){
return (function (v){return planet_crash.core.mul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v,delta_t], 0));
});})(vs,ps,as,vs_delta,vs_new))
,vs_new);var ps_new = cljs.core.map.cljs$core$IFn$_invoke$arity$3(planet_crash.core.add,ps,ps_delta);return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (vs,ps,as,vs_delta,vs_new,ps_delta,ps_new){
return (function (planet,v,p){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(planet,cljs.core.constant$keyword$72,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,v),cljs.core.array_seq([cljs.core.constant$keyword$71,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p)], 0));
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
var ___$1 = this;var G__15586 = null;var G__15587 = (cljs.core.truth_(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(self__.planet))?(function (){var G__15588 = null;var G__15589 = (function (){var G__15598 = {"className": "inspector"};var G__15599 = "{:mass ";return React.DOM.code(G__15598,G__15599);
})();var G__15590 = (function (){var G__15600 = {"onChange": ((function (G__15588,G__15589,G__15586,___$1){
return (function (p1__15548_SHARP_){return planet_crash.core.handle_change(p1__15548_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$63);
});})(G__15588,G__15589,G__15586,___$1))
, "size": (10), "value": cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.planet), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15600) : om.dom.input.call(null,G__15600));
})();var G__15591 = (function (){var G__15601 = {"className": "inspector"};var G__15602 = ", :radius ";return React.DOM.code(G__15601,G__15602);
})();var G__15592 = (function (){var G__15603 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15586,___$1){
return (function (p1__15549_SHARP_){return planet_crash.core.handle_change(p1__15549_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$64);
});})(G__15588,G__15589,G__15590,G__15591,G__15586,___$1))
, "size": (40), "value": cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.planet), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15603) : om.dom.input.call(null,G__15603));
})();var G__15593 = (function (){var G__15604 = {"className": "inspector"};var G__15605 = ", :position ";return React.DOM.code(G__15604,G__15605);
})();var G__15594 = (function (){var G__15606 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15586,___$1){
return (function (p1__15550_SHARP_){return planet_crash.core.handle_change(p1__15550_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$71);
});})(G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15586,___$1))
, "size": (40), "value": om.core.value(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(self__.planet)), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15606) : om.dom.input.call(null,G__15606));
})();var G__15595 = (function (){var G__15607 = {"className": "inspector"};var G__15608 = ", :velocity ";return React.DOM.code(G__15607,G__15608);
})();var G__15596 = (function (){var G__15609 = {"onChange": ((function (G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15586,___$1){
return (function (p1__15551_SHARP_){return planet_crash.core.handle_change(p1__15551_SHARP_,self__.planet,self__.owner,cljs.core.constant$keyword$72);
});})(G__15588,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15586,___$1))
, "size": (45), "value": om.core.value(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(self__.planet)), "className": "edit"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15609) : om.dom.input.call(null,G__15609));
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
planet_crash.core.mass_selecter = (function mass_selecter(selected_mass,owner){if(typeof planet_crash.core.t15653 !== 'undefined')
{} else
{
/**
* @constructor
*/
planet_crash.core.t15653 = (function (owner,selected_mass,mass_selecter,meta15654){
this.owner = owner;
this.selected_mass = selected_mass;
this.mass_selecter = mass_selecter;
this.meta15654 = meta15654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planet_crash.core.t15653.cljs$lang$type = true;
planet_crash.core.t15653.cljs$lang$ctorStr = "planet-crash.core/t15653";
planet_crash.core.t15653.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"planet-crash.core/t15653");
});
planet_crash.core.t15653.prototype.om$core$IRender$ = true;
planet_crash.core.t15653.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__15656 = {"id": "mass-selecter"};var G__15657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "nav nav-pills nav-stacked", "id": "masses"},(function (){var iter__4379__auto__ = ((function (G__15656,___$1){
return (function iter__15658(s__15659){return (new cljs.core.LazySeq(null,((function (G__15656,___$1){
return (function (){var s__15659__$1 = s__15659;while(true){
var temp__4219__auto__ = cljs.core.seq(s__15659__$1);if(temp__4219__auto__)
{var s__15659__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_(s__15659__$2))
{var c__4377__auto__ = cljs.core.chunk_first(s__15659__$2);var size__4378__auto__ = cljs.core.count(c__4377__auto__);var b__15661 = cljs.core.chunk_buffer(size__4378__auto__);if((function (){var i__15660 = (0);while(true){
if((i__15660 < size__4378__auto__))
{var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4377__auto__,i__15660);cljs.core.chunk_append(b__15661,(function (){var G__15678 = {"className": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,self__.selected_mass))?"active":null)};var G__15679 = (function (){var G__15680 = {"onClick": ((function (i__15660,G__15678,p,c__4377__auto__,size__4378__auto__,b__15661,s__15659__$2,temp__4219__auto__,G__15656,___$1){
return (function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.selected_mass,((function (i__15660,G__15678,p,c__4377__auto__,size__4378__auto__,b__15661,s__15659__$2,temp__4219__auto__,G__15656,___$1){
return (function (___$2){return p;
});})(i__15660,G__15678,p,c__4377__auto__,size__4378__auto__,b__15661,s__15659__$2,temp__4219__auto__,G__15656,___$1))
);
});})(i__15660,G__15678,p,c__4377__auto__,size__4378__auto__,b__15661,s__15659__$2,temp__4219__auto__,G__15656,___$1))
, "className": "mass-sel", "href": "#"};var G__15681 = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(p);var G__15682 = (function (){var G__15683 = {"className": "badge pull-right"};var G__15684 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(p))+"x");return React.DOM.span(G__15683,G__15684);
})();return React.DOM.a(G__15680,G__15681,G__15682);
})();return React.DOM.li(G__15678,G__15679);
})());
{
var G__15692 = (i__15660 + (1));
i__15660 = G__15692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15661),iter__15658(cljs.core.chunk_rest(s__15659__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15661),null);
}
} else
{var p = cljs.core.first(s__15659__$2);return cljs.core.cons((function (){var G__15685 = {"className": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,self__.selected_mass))?"active":null)};var G__15686 = (function (){var G__15687 = {"onClick": ((function (G__15685,p,s__15659__$2,temp__4219__auto__,G__15656,___$1){
return (function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.selected_mass,((function (G__15685,p,s__15659__$2,temp__4219__auto__,G__15656,___$1){
return (function (___$2){return p;
});})(G__15685,p,s__15659__$2,temp__4219__auto__,G__15656,___$1))
);
});})(G__15685,p,s__15659__$2,temp__4219__auto__,G__15656,___$1))
, "className": "mass-sel", "href": "#"};var G__15688 = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(p);var G__15689 = (function (){var G__15690 = {"className": "badge pull-right"};var G__15691 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(p))+"x");return React.DOM.span(G__15690,G__15691);
})();return React.DOM.a(G__15687,G__15688,G__15689);
})();return React.DOM.li(G__15685,G__15686);
})(),iter__15658(cljs.core.rest(s__15659__$2)));
}
} else
{return null;
}
break;
}
});})(G__15656,___$1))
,null,null));
});})(G__15656,___$1))
;return iter__4379__auto__(planet_crash.core.preset_sizes);
})());return React.DOM.div(G__15656,G__15657);
});
planet_crash.core.t15653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15655){var self__ = this;
var _15655__$1 = this;return self__.meta15654;
});
planet_crash.core.t15653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15655,meta15654__$1){var self__ = this;
var _15655__$1 = this;return (new planet_crash.core.t15653(self__.owner,self__.selected_mass,self__.mass_selecter,meta15654__$1));
});
planet_crash.core.__GT_t15653 = (function __GT_t15653(owner__$1,selected_mass__$1,mass_selecter__$1,meta15654){return (new planet_crash.core.t15653(owner__$1,selected_mass__$1,mass_selecter__$1,meta15654));
});
}
return (new planet_crash.core.t15653(owner,selected_mass,mass_selecter,null));
});
planet_crash.core.main = (function main(){return om.core.root((function (app,owner){if(typeof planet_crash.core.t15833 !== 'undefined')
{} else
{
/**
* @constructor
*/
planet_crash.core.t15833 = (function (owner,app,main,meta15834){
this.owner = owner;
this.app = app;
this.main = main;
this.meta15834 = meta15834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
planet_crash.core.t15833.cljs$lang$type = true;
planet_crash.core.t15833.cljs$lang$ctorStr = "planet-crash.core/t15833";
planet_crash.core.t15833.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"planet-crash.core/t15833");
});
planet_crash.core.t15833.prototype.om$core$IRender$ = true;
planet_crash.core.t15833.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__15836 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75);var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(0),null);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(1),null);var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(2),null);var G__15837 = null;var G__15838 = (function (){var G__15841 = {"ref": "universe-ref", "height": (function (){var G__15843 = cljs.core.constant$keyword$67;return (self__.app.cljs$core$IFn$_invoke$arity$1 ? self__.app.cljs$core$IFn$_invoke$arity$1(G__15843) : self__.app.call(null,G__15843));
})(), "width": (function (){var G__15842 = cljs.core.constant$keyword$66;return (self__.app.cljs$core$IFn$_invoke$arity$1 ? self__.app.cljs$core$IFn$_invoke$arity$1(G__15842) : self__.app.call(null,G__15842));
})(), "id": "universe"};return React.DOM.canvas(G__15841);
})();var G__15839 = (function (){var G__15844 = {"id": "sidebar"};var G__15845 = (function (){var G__15849 = {"id": "title"};var G__15850 = "Planet Crash";return React.DOM.h1(G__15849,G__15850);
})();var G__15846 = (function (){var G__15851 = null;var G__15852 = "Click on the type of body to add next:";return React.DOM.div(G__15851,G__15852);
})();var G__15847 = om.core.build.cljs$core$IFn$_invoke$arity$2(planet_crash.core.mass_selecter,cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(self__.app));var G__15848 = (function (){var G__15853 = {"id": "control"};var G__15854 = (function (){var G__15855 = {"onClick": ((function (G__15853,G__15844,G__15845,G__15846,G__15847,G__15837,G__15838,vec__15836,___$2,start,stop,___$1){
return (function (___$3){var control = (cljs.core.truth_(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1((function (){var G__15857 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15857) : cljs.core.deref.call(null,G__15857));
})()))?stop:start);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(control,true);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$68,cljs.core.not);
});})(G__15853,G__15844,G__15845,G__15846,G__15847,G__15837,G__15838,vec__15836,___$2,start,stop,___$1))
, "className": "btn btn-default"};var G__15856 = (function (){var G__15858 = {"className": (cljs.core.truth_(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app))?"fa fa-pause":"fa fa-play")};return React.DOM.span(G__15858);
})();return React.DOM.button(G__15855,G__15856);
})();return React.DOM.div(G__15853,G__15854);
})();return React.DOM.div(G__15844,G__15845,G__15846,G__15847,G__15848);
})();var G__15840 = null;return React.DOM.div(G__15837,G__15838,G__15839,G__15840);
});
planet_crash.core.t15833.prototype.om$core$IDidMount$ = true;
planet_crash.core.t15833.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var universe = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"universe-ref");var context = universe.getContext("2d");var render = planet_crash.core.render_chan(context);var vec__15859 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75);var clock = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859,(0),null);var clicks = planet_crash.core.events__GT_chan.cljs$core$IFn$_invoke$arity$3(universe,goog.events.EventType.CLICK,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(planet_crash.core.mouse_loc__GT_vec)));var c__6495__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1){
return (function (){var f__6496__auto__ = (function (){var switch__6480__auto__ = ((function (c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1){
return (function (state_15933){var state_val_15934 = (state_15933[(1)]);if((state_val_15934 === (7)))
{var inst_15928 = (state_15933[(2)]);var state_15933__$1 = (function (){var statearr_15935 = state_15933;(statearr_15935[(7)] = inst_15928);
return statearr_15935;
})();var statearr_15936_15971 = state_15933__$1;(statearr_15936_15971[(2)] = null);
(statearr_15936_15971[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (1)))
{var state_15933__$1 = state_15933;var statearr_15937_15972 = state_15933__$1;(statearr_15937_15972[(2)] = null);
(statearr_15937_15972[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (4)))
{var inst_15869 = (state_15933[(8)]);var inst_15871 = (state_15933[(9)]);var inst_15869__$1 = (state_15933[(2)]);var inst_15870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15869__$1,(0),null);var inst_15871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15869__$1,(1),null);var inst_15875 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clicks,inst_15871__$1);var state_15933__$1 = (function (){var statearr_15938 = state_15933;(statearr_15938[(8)] = inst_15869__$1);
(statearr_15938[(10)] = inst_15870);
(statearr_15938[(9)] = inst_15871__$1);
return statearr_15938;
})();if(inst_15875)
{var statearr_15939_15973 = state_15933__$1;(statearr_15939_15973[(1)] = (5));
} else
{var statearr_15940_15974 = state_15933__$1;(statearr_15940_15974[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (13)))
{var inst_15926 = (state_15933[(2)]);var state_15933__$1 = state_15933;var statearr_15941_15975 = state_15933__$1;(statearr_15941_15975[(2)] = inst_15926);
(statearr_15941_15975[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (6)))
{var inst_15871 = (state_15933[(9)]);var inst_15912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clock,inst_15871);var state_15933__$1 = state_15933;if(inst_15912)
{var statearr_15942_15976 = state_15933__$1;(statearr_15942_15976[(1)] = (11));
} else
{var statearr_15943_15977 = state_15933__$1;(statearr_15943_15977[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (3)))
{var inst_15931 = (state_15933[(2)]);var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.return_chan(state_15933__$1,inst_15931);
} else
{if((state_val_15934 === (12)))
{var inst_15871 = (state_15933[(9)]);var inst_15922 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15871));var inst_15923 = (new Error(inst_15922));var inst_15924 = (function(){throw inst_15923})();var state_15933__$1 = state_15933;var statearr_15944_15978 = state_15933__$1;(statearr_15944_15978[(2)] = inst_15924);
(statearr_15944_15978[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (2)))
{var inst_15861 = (function (){var G__15945 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15945) : cljs.core.deref.call(null,G__15945));
})();var inst_15862 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15861);var inst_15863 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15862);var inst_15865 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15866 = [clicks,clock];var inst_15867 = (new cljs.core.PersistentVector(null,2,(5),inst_15865,inst_15866,null));var state_15933__$1 = (function (){var statearr_15946 = state_15933;(statearr_15946[(11)] = inst_15863);
return statearr_15946;
})();return cljs.core.async.ioc_alts_BANG_(state_15933__$1,(4),inst_15867);
} else
{if((state_val_15934 === (11)))
{var inst_15869 = (state_15933[(8)]);var inst_15870 = (state_15933[(10)]);var inst_15871 = (state_15933[(9)]);var inst_15914 = (function (){var G__15947 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15947) : cljs.core.deref.call(null,G__15947));
})();var inst_15915 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15914);var inst_15916 = (function (){var old_planets = inst_15915;var expr__15873 = inst_15871;var pred__15872 = cljs.core._EQ_;var ch = inst_15871;var val = inst_15870;var vec__15864 = inst_15869;return ((function (old_planets,expr__15873,pred__15872,ch,val,vec__15864,inst_15869,inst_15870,inst_15871,inst_15914,inst_15915,state_val_15934,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1){
return (function (p1__15694_SHARP_){return planet_crash.core.update_planets(p1__15694_SHARP_,.3);
});
;})(old_planets,expr__15873,pred__15872,ch,val,vec__15864,inst_15869,inst_15870,inst_15871,inst_15914,inst_15915,state_val_15934,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1))
})();var inst_15917 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$70,inst_15916);var inst_15918 = (function (){var G__15948 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15948) : cljs.core.deref.call(null,G__15948));
})();var inst_15919 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15918);var inst_15920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15919);var state_15933__$1 = (function (){var statearr_15949 = state_15933;(statearr_15949[(12)] = inst_15917);
return statearr_15949;
})();var statearr_15950_15979 = state_15933__$1;(statearr_15950_15979[(2)] = inst_15920);
(statearr_15950_15979[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (9)))
{var inst_15887 = (state_15933[(13)]);var state_15933__$1 = state_15933;var statearr_15951_15980 = state_15933__$1;(statearr_15951_15980[(2)] = inst_15887);
(statearr_15951_15980[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (5)))
{var inst_15887 = (state_15933[(13)]);var inst_15878 = (function (){var G__15952 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15952) : cljs.core.deref.call(null,G__15952));
})();var inst_15879 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15878);var inst_15880 = cljs.core.first(inst_15879);var inst_15881 = (function (){var G__15953 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15953) : cljs.core.deref.call(null,G__15953));
})();var inst_15882 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15881);var inst_15883 = cljs.core.count(inst_15882);var inst_15884 = cljs.core.count(planet_crash.core.colors);var inst_15885 = cljs.core.mod(inst_15883,inst_15884);var inst_15886 = (function (){var G__15954 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15954) : cljs.core.deref.call(null,G__15954));
})();var inst_15887__$1 = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(inst_15886);var inst_15888 = cljs.core.seq_QMARK_(inst_15887__$1);var state_15933__$1 = (function (){var statearr_15955 = state_15933;(statearr_15955[(13)] = inst_15887__$1);
(statearr_15955[(14)] = inst_15880);
(statearr_15955[(15)] = inst_15885);
return statearr_15955;
})();if(inst_15888)
{var statearr_15956_15981 = state_15933__$1;(statearr_15956_15981[(1)] = (8));
} else
{var statearr_15957_15982 = state_15933__$1;(statearr_15957_15982[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (10)))
{var inst_15880 = (state_15933[(14)]);var inst_15869 = (state_15933[(8)]);var inst_15885 = (state_15933[(15)]);var inst_15870 = (state_15933[(10)]);var inst_15871 = (state_15933[(9)]);var inst_15893 = (state_15933[(2)]);var inst_15894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15893,cljs.core.constant$keyword$64);var inst_15895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15893,cljs.core.constant$keyword$63);var inst_15896 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(inst_15880);var inst_15897 = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(inst_15880);var inst_15898 = planet_crash.core.orbital_velocity(inst_15870,inst_15896,inst_15897);var inst_15899 = [cljs.core.constant$keyword$71,cljs.core.constant$keyword$72,cljs.core.constant$keyword$64,cljs.core.constant$keyword$63,cljs.core.constant$keyword$73,cljs.core.constant$keyword$74];var inst_15900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(planet_crash.core.colors,inst_15885);var inst_15901 = (function (){var G__15958 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15958) : cljs.core.deref.call(null,G__15958));
})();var inst_15902 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_15901);var inst_15903 = cljs.core.not(inst_15902);var inst_15904 = [inst_15870,inst_15898,inst_15894,inst_15895,inst_15900,inst_15903];var inst_15905 = cljs.core.PersistentHashMap.fromArrays(inst_15899,inst_15904);var inst_15906 = (function (){var new_planet = inst_15905;var mass = inst_15895;var color_index = inst_15885;var pred__15872 = cljs.core._EQ_;var initial_velocity = inst_15898;var val = inst_15870;var radius = inst_15894;var ch = inst_15871;var expr__15873 = inst_15871;var vec__15864 = inst_15869;var map__15877 = inst_15893;var sun = inst_15880;return ((function (new_planet,mass,color_index,pred__15872,initial_velocity,val,radius,ch,expr__15873,vec__15864,map__15877,sun,inst_15880,inst_15869,inst_15885,inst_15870,inst_15871,inst_15893,inst_15894,inst_15895,inst_15896,inst_15897,inst_15898,inst_15899,inst_15900,inst_15901,inst_15902,inst_15903,inst_15904,inst_15905,state_val_15934,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1){
return (function (p1__15693_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15693_SHARP_,new_planet);
});
;})(new_planet,mass,color_index,pred__15872,initial_velocity,val,radius,ch,expr__15873,vec__15864,map__15877,sun,inst_15880,inst_15869,inst_15885,inst_15870,inst_15871,inst_15893,inst_15894,inst_15895,inst_15896,inst_15897,inst_15898,inst_15899,inst_15900,inst_15901,inst_15902,inst_15903,inst_15904,inst_15905,state_val_15934,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1))
})();var inst_15907 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$70,inst_15906);var inst_15908 = (function (){var G__15959 = self__.app;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15959) : cljs.core.deref.call(null,G__15959));
})();var inst_15909 = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(inst_15908);var inst_15910 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(render,inst_15909);var state_15933__$1 = (function (){var statearr_15960 = state_15933;(statearr_15960[(16)] = inst_15907);
return statearr_15960;
})();var statearr_15961_15983 = state_15933__$1;(statearr_15961_15983[(2)] = inst_15910);
(statearr_15961_15983[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_15934 === (8)))
{var inst_15887 = (state_15933[(13)]);var inst_15890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15887);var state_15933__$1 = state_15933;var statearr_15962_15984 = state_15933__$1;(statearr_15962_15984[(2)] = inst_15890);
(statearr_15962_15984[(1)] = (10));
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
});})(c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1))
;return ((function (switch__6480__auto__,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1){
return (function() {
var state_machine__6481__auto__ = null;
var state_machine__6481__auto____0 = (function (){var statearr_15966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15966[(0)] = state_machine__6481__auto__);
(statearr_15966[(1)] = (1));
return statearr_15966;
});
var state_machine__6481__auto____1 = (function (state_15933){while(true){
var ret_value__6482__auto__ = (function (){try{while(true){
var result__6483__auto__ = switch__6480__auto__(state_15933);if(cljs.core.keyword_identical_QMARK_(result__6483__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6483__auto__;
}
break;
}
}catch (e15967){if((e15967 instanceof Object))
{var ex__6484__auto__ = e15967;var statearr_15968_15985 = state_15933;(statearr_15968_15985[(5)] = ex__6484__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15933);
return cljs.core.constant$keyword$16;
} else
{throw e15967;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6482__auto__,cljs.core.constant$keyword$16))
{{
var G__15986 = state_15933;
state_15933 = G__15986;
continue;
}
} else
{return ret_value__6482__auto__;
}
break;
}
});
state_machine__6481__auto__ = function(state_15933){
switch(arguments.length){
case 0:
return state_machine__6481__auto____0.call(this);
case 1:
return state_machine__6481__auto____1.call(this,state_15933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6481__auto____0;
state_machine__6481__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6481__auto____1;
return state_machine__6481__auto__;
})()
;})(switch__6480__auto__,c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1))
})();var state__6497__auto__ = (function (){var statearr_15969 = (function (){return (f__6496__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6496__auto__.cljs$core$IFn$_invoke$arity$0() : f__6496__auto__.call(null));
})();(statearr_15969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6495__auto__);
return statearr_15969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6497__auto__);
});})(c__6495__auto__,universe,context,render,vec__15859,clock,clicks,___$1))
);
return c__6495__auto__;
});
planet_crash.core.t15833.prototype.om$core$IInitState$ = true;
planet_crash.core.t15833.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__15970 = planet_crash.core.clock((30));var clk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(2),null);var c = vec__15970;var running = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.not(running))
{cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop,true);
} else
{}
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,c], null);
});
planet_crash.core.t15833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15835){var self__ = this;
var _15835__$1 = this;return self__.meta15834;
});
planet_crash.core.t15833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15835,meta15834__$1){var self__ = this;
var _15835__$1 = this;return (new planet_crash.core.t15833(self__.owner,self__.app,self__.main,meta15834__$1));
});
planet_crash.core.__GT_t15833 = (function __GT_t15833(owner__$1,app__$1,main__$1,meta15834){return (new planet_crash.core.t15833(owner__$1,app__$1,main__$1,meta15834));
});
}
return (new planet_crash.core.t15833(owner,app,main,null));
}),planet_crash.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,document.getElementById("app")], null));
});
