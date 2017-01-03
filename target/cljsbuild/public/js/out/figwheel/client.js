// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30207 = cljs.core._EQ_;
var expr__30208 = (function (){var or__22239__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30211){if((e30211 instanceof Error)){
var e = e30211;
return false;
} else {
throw e30211;

}
}})();
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30207.call(null,"true",expr__30208))){
return true;
} else {
if(cljs.core.truth_(pred__30207.call(null,"false",expr__30208))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30208)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30213){if((e30213 instanceof Error)){
var e = e30213;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30213;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__23316__auto__ = [];
var len__23309__auto___30215 = arguments.length;
var i__23310__auto___30216 = (0);
while(true){
if((i__23310__auto___30216 < len__23309__auto___30215)){
args__23316__auto__.push((arguments[i__23310__auto___30216]));

var G__30217 = (i__23310__auto___30216 + (1));
i__23310__auto___30216 = G__30217;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((0) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23317__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30214){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30214));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30218){
var map__30221 = p__30218;
var map__30221__$1 = ((((!((map__30221 == null)))?((((map__30221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var message = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22239__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22239__auto__)){
return or__22239__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22227__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22227__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22227__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25578__auto___30383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___30383,ch){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___30383,ch){
return (function (state_30352){
var state_val_30353 = (state_30352[(1)]);
if((state_val_30353 === (7))){
var inst_30348 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30354_30384 = state_30352__$1;
(statearr_30354_30384[(2)] = inst_30348);

(statearr_30354_30384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (1))){
var state_30352__$1 = state_30352;
var statearr_30355_30385 = state_30352__$1;
(statearr_30355_30385[(2)] = null);

(statearr_30355_30385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (4))){
var inst_30305 = (state_30352[(7)]);
var inst_30305__$1 = (state_30352[(2)]);
var state_30352__$1 = (function (){var statearr_30356 = state_30352;
(statearr_30356[(7)] = inst_30305__$1);

return statearr_30356;
})();
if(cljs.core.truth_(inst_30305__$1)){
var statearr_30357_30386 = state_30352__$1;
(statearr_30357_30386[(1)] = (5));

} else {
var statearr_30358_30387 = state_30352__$1;
(statearr_30358_30387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (15))){
var inst_30312 = (state_30352[(8)]);
var inst_30327 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30312);
var inst_30328 = cljs.core.first.call(null,inst_30327);
var inst_30329 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30328);
var inst_30330 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30329)].join('');
var inst_30331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30330);
var state_30352__$1 = state_30352;
var statearr_30359_30388 = state_30352__$1;
(statearr_30359_30388[(2)] = inst_30331);

(statearr_30359_30388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (13))){
var inst_30336 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30360_30389 = state_30352__$1;
(statearr_30360_30389[(2)] = inst_30336);

(statearr_30360_30389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (6))){
var state_30352__$1 = state_30352;
var statearr_30361_30390 = state_30352__$1;
(statearr_30361_30390[(2)] = null);

(statearr_30361_30390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (17))){
var inst_30334 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30362_30391 = state_30352__$1;
(statearr_30362_30391[(2)] = inst_30334);

(statearr_30362_30391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (3))){
var inst_30350 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30352__$1,inst_30350);
} else {
if((state_val_30353 === (12))){
var inst_30311 = (state_30352[(9)]);
var inst_30325 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30311,opts);
var state_30352__$1 = state_30352;
if(cljs.core.truth_(inst_30325)){
var statearr_30363_30392 = state_30352__$1;
(statearr_30363_30392[(1)] = (15));

} else {
var statearr_30364_30393 = state_30352__$1;
(statearr_30364_30393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (2))){
var state_30352__$1 = state_30352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30352__$1,(4),ch);
} else {
if((state_val_30353 === (11))){
var inst_30312 = (state_30352[(8)]);
var inst_30317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30318 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30312);
var inst_30319 = cljs.core.async.timeout.call(null,(1000));
var inst_30320 = [inst_30318,inst_30319];
var inst_30321 = (new cljs.core.PersistentVector(null,2,(5),inst_30317,inst_30320,null));
var state_30352__$1 = state_30352;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30352__$1,(14),inst_30321);
} else {
if((state_val_30353 === (9))){
var inst_30312 = (state_30352[(8)]);
var inst_30338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30339 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30312);
var inst_30340 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30339);
var inst_30341 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30340)].join('');
var inst_30342 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30341);
var state_30352__$1 = (function (){var statearr_30365 = state_30352;
(statearr_30365[(10)] = inst_30338);

return statearr_30365;
})();
var statearr_30366_30394 = state_30352__$1;
(statearr_30366_30394[(2)] = inst_30342);

(statearr_30366_30394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (5))){
var inst_30305 = (state_30352[(7)]);
var inst_30307 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30308 = (new cljs.core.PersistentArrayMap(null,2,inst_30307,null));
var inst_30309 = (new cljs.core.PersistentHashSet(null,inst_30308,null));
var inst_30310 = figwheel.client.focus_msgs.call(null,inst_30309,inst_30305);
var inst_30311 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30310);
var inst_30312 = cljs.core.first.call(null,inst_30310);
var inst_30313 = figwheel.client.autoload_QMARK_.call(null);
var state_30352__$1 = (function (){var statearr_30367 = state_30352;
(statearr_30367[(9)] = inst_30311);

(statearr_30367[(8)] = inst_30312);

return statearr_30367;
})();
if(cljs.core.truth_(inst_30313)){
var statearr_30368_30395 = state_30352__$1;
(statearr_30368_30395[(1)] = (8));

} else {
var statearr_30369_30396 = state_30352__$1;
(statearr_30369_30396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (14))){
var inst_30323 = (state_30352[(2)]);
var state_30352__$1 = state_30352;
var statearr_30370_30397 = state_30352__$1;
(statearr_30370_30397[(2)] = inst_30323);

(statearr_30370_30397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (16))){
var state_30352__$1 = state_30352;
var statearr_30371_30398 = state_30352__$1;
(statearr_30371_30398[(2)] = null);

(statearr_30371_30398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (10))){
var inst_30344 = (state_30352[(2)]);
var state_30352__$1 = (function (){var statearr_30372 = state_30352;
(statearr_30372[(11)] = inst_30344);

return statearr_30372;
})();
var statearr_30373_30399 = state_30352__$1;
(statearr_30373_30399[(2)] = null);

(statearr_30373_30399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30353 === (8))){
var inst_30311 = (state_30352[(9)]);
var inst_30315 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30311,opts);
var state_30352__$1 = state_30352;
if(cljs.core.truth_(inst_30315)){
var statearr_30374_30400 = state_30352__$1;
(statearr_30374_30400[(1)] = (11));

} else {
var statearr_30375_30401 = state_30352__$1;
(statearr_30375_30401[(1)] = (12));

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
});})(c__25578__auto___30383,ch))
;
return ((function (switch__25465__auto__,c__25578__auto___30383,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____0 = (function (){
var statearr_30379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30379[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__);

(statearr_30379[(1)] = (1));

return statearr_30379;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____1 = (function (state_30352){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_30352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e30380){if((e30380 instanceof Object)){
var ex__25469__auto__ = e30380;
var statearr_30381_30402 = state_30352;
(statearr_30381_30402[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30403 = state_30352;
state_30352 = G__30403;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__ = function(state_30352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____1.call(this,state_30352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___30383,ch))
})();
var state__25580__auto__ = (function (){var statearr_30382 = f__25579__auto__.call(null);
(statearr_30382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___30383);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___30383,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30404_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30404_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30411 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30411){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30409 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30410 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30410;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30409;
}}catch (e30408){if((e30408 instanceof Error)){
var e = e30408;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30411], null));
} else {
var e = e30408;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30411))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30412){
var map__30419 = p__30412;
var map__30419__$1 = ((((!((map__30419 == null)))?((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var opts = map__30419__$1;
var build_id = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30419,map__30419__$1,opts,build_id){
return (function (p__30421){
var vec__30422 = p__30421;
var map__30423 = cljs.core.nth.call(null,vec__30422,(0),null);
var map__30423__$1 = ((((!((map__30423 == null)))?((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var msg = map__30423__$1;
var msg_name = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30422,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30422,map__30423,map__30423__$1,msg,msg_name,_,map__30419,map__30419__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30422,map__30423,map__30423__$1,msg,msg_name,_,map__30419,map__30419__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30419,map__30419__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30429){
var vec__30430 = p__30429;
var map__30431 = cljs.core.nth.call(null,vec__30430,(0),null);
var map__30431__$1 = ((((!((map__30431 == null)))?((((map__30431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30431):map__30431);
var msg = map__30431__$1;
var msg_name = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30430,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30433){
var map__30443 = p__30433;
var map__30443__$1 = ((((!((map__30443 == null)))?((((map__30443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30443):map__30443);
var on_compile_warning = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30443,map__30443__$1,on_compile_warning,on_compile_fail){
return (function (p__30445){
var vec__30446 = p__30445;
var map__30447 = cljs.core.nth.call(null,vec__30446,(0),null);
var map__30447__$1 = ((((!((map__30447 == null)))?((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var msg = map__30447__$1;
var msg_name = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30446,(1));
var pred__30449 = cljs.core._EQ_;
var expr__30450 = msg_name;
if(cljs.core.truth_(pred__30449.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30450))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30449.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30450))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30443,map__30443__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__,msg_hist,msg_names,msg){
return (function (state_30658){
var state_val_30659 = (state_30658[(1)]);
if((state_val_30659 === (7))){
var inst_30586 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30586)){
var statearr_30660_30706 = state_30658__$1;
(statearr_30660_30706[(1)] = (8));

} else {
var statearr_30661_30707 = state_30658__$1;
(statearr_30661_30707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (20))){
var inst_30652 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30662_30708 = state_30658__$1;
(statearr_30662_30708[(2)] = inst_30652);

(statearr_30662_30708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (27))){
var inst_30648 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30663_30709 = state_30658__$1;
(statearr_30663_30709[(2)] = inst_30648);

(statearr_30663_30709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (1))){
var inst_30579 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30579)){
var statearr_30664_30710 = state_30658__$1;
(statearr_30664_30710[(1)] = (2));

} else {
var statearr_30665_30711 = state_30658__$1;
(statearr_30665_30711[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (24))){
var inst_30650 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30666_30712 = state_30658__$1;
(statearr_30666_30712[(2)] = inst_30650);

(statearr_30666_30712[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (4))){
var inst_30656 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30658__$1,inst_30656);
} else {
if((state_val_30659 === (15))){
var inst_30654 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30667_30713 = state_30658__$1;
(statearr_30667_30713[(2)] = inst_30654);

(statearr_30667_30713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (21))){
var inst_30613 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30668_30714 = state_30658__$1;
(statearr_30668_30714[(2)] = inst_30613);

(statearr_30668_30714[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (31))){
var inst_30637 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30637)){
var statearr_30669_30715 = state_30658__$1;
(statearr_30669_30715[(1)] = (34));

} else {
var statearr_30670_30716 = state_30658__$1;
(statearr_30670_30716[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (32))){
var inst_30646 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30671_30717 = state_30658__$1;
(statearr_30671_30717[(2)] = inst_30646);

(statearr_30671_30717[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (33))){
var inst_30635 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30672_30718 = state_30658__$1;
(statearr_30672_30718[(2)] = inst_30635);

(statearr_30672_30718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (13))){
var inst_30600 = figwheel.client.heads_up.clear.call(null);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(16),inst_30600);
} else {
if((state_val_30659 === (22))){
var inst_30617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30618 = figwheel.client.heads_up.append_message.call(null,inst_30617);
var state_30658__$1 = state_30658;
var statearr_30673_30719 = state_30658__$1;
(statearr_30673_30719[(2)] = inst_30618);

(statearr_30673_30719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (36))){
var inst_30644 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30674_30720 = state_30658__$1;
(statearr_30674_30720[(2)] = inst_30644);

(statearr_30674_30720[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (29))){
var inst_30628 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30675_30721 = state_30658__$1;
(statearr_30675_30721[(2)] = inst_30628);

(statearr_30675_30721[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (6))){
var inst_30581 = (state_30658[(7)]);
var state_30658__$1 = state_30658;
var statearr_30676_30722 = state_30658__$1;
(statearr_30676_30722[(2)] = inst_30581);

(statearr_30676_30722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (28))){
var inst_30624 = (state_30658[(2)]);
var inst_30625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30626 = figwheel.client.heads_up.display_warning.call(null,inst_30625);
var state_30658__$1 = (function (){var statearr_30677 = state_30658;
(statearr_30677[(8)] = inst_30624);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(29),inst_30626);
} else {
if((state_val_30659 === (25))){
var inst_30622 = figwheel.client.heads_up.clear.call(null);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(28),inst_30622);
} else {
if((state_val_30659 === (34))){
var inst_30639 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(37),inst_30639);
} else {
if((state_val_30659 === (17))){
var inst_30606 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30678_30723 = state_30658__$1;
(statearr_30678_30723[(2)] = inst_30606);

(statearr_30678_30723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (3))){
var inst_30598 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30598)){
var statearr_30679_30724 = state_30658__$1;
(statearr_30679_30724[(1)] = (13));

} else {
var statearr_30680_30725 = state_30658__$1;
(statearr_30680_30725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (12))){
var inst_30594 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30681_30726 = state_30658__$1;
(statearr_30681_30726[(2)] = inst_30594);

(statearr_30681_30726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (2))){
var inst_30581 = (state_30658[(7)]);
var inst_30581__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30658__$1 = (function (){var statearr_30682 = state_30658;
(statearr_30682[(7)] = inst_30581__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30581__$1)){
var statearr_30683_30727 = state_30658__$1;
(statearr_30683_30727[(1)] = (5));

} else {
var statearr_30684_30728 = state_30658__$1;
(statearr_30684_30728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (23))){
var inst_30620 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30620)){
var statearr_30685_30729 = state_30658__$1;
(statearr_30685_30729[(1)] = (25));

} else {
var statearr_30686_30730 = state_30658__$1;
(statearr_30686_30730[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (35))){
var state_30658__$1 = state_30658;
var statearr_30687_30731 = state_30658__$1;
(statearr_30687_30731[(2)] = null);

(statearr_30687_30731[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (19))){
var inst_30615 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30615)){
var statearr_30688_30732 = state_30658__$1;
(statearr_30688_30732[(1)] = (22));

} else {
var statearr_30689_30733 = state_30658__$1;
(statearr_30689_30733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (11))){
var inst_30590 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30690_30734 = state_30658__$1;
(statearr_30690_30734[(2)] = inst_30590);

(statearr_30690_30734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (9))){
var inst_30592 = figwheel.client.heads_up.clear.call(null);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(12),inst_30592);
} else {
if((state_val_30659 === (5))){
var inst_30583 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30658__$1 = state_30658;
var statearr_30691_30735 = state_30658__$1;
(statearr_30691_30735[(2)] = inst_30583);

(statearr_30691_30735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (14))){
var inst_30608 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30608)){
var statearr_30692_30736 = state_30658__$1;
(statearr_30692_30736[(1)] = (18));

} else {
var statearr_30693_30737 = state_30658__$1;
(statearr_30693_30737[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (26))){
var inst_30630 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30630)){
var statearr_30694_30738 = state_30658__$1;
(statearr_30694_30738[(1)] = (30));

} else {
var statearr_30695_30739 = state_30658__$1;
(statearr_30695_30739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (16))){
var inst_30602 = (state_30658[(2)]);
var inst_30603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30604 = figwheel.client.heads_up.display_exception.call(null,inst_30603);
var state_30658__$1 = (function (){var statearr_30696 = state_30658;
(statearr_30696[(9)] = inst_30602);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(17),inst_30604);
} else {
if((state_val_30659 === (30))){
var inst_30632 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30633 = figwheel.client.heads_up.display_warning.call(null,inst_30632);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(33),inst_30633);
} else {
if((state_val_30659 === (10))){
var inst_30596 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30697_30740 = state_30658__$1;
(statearr_30697_30740[(2)] = inst_30596);

(statearr_30697_30740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (18))){
var inst_30610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30611 = figwheel.client.heads_up.display_exception.call(null,inst_30610);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(21),inst_30611);
} else {
if((state_val_30659 === (37))){
var inst_30641 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30698_30741 = state_30658__$1;
(statearr_30698_30741[(2)] = inst_30641);

(statearr_30698_30741[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (8))){
var inst_30588 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(11),inst_30588);
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
});})(c__25578__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25465__auto__,c__25578__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____0 = (function (){
var statearr_30702 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30702[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__);

(statearr_30702[(1)] = (1));

return statearr_30702;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____1 = (function (state_30658){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_30658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e30703){if((e30703 instanceof Object)){
var ex__25469__auto__ = e30703;
var statearr_30704_30742 = state_30658;
(statearr_30704_30742[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30743 = state_30658;
state_30658 = G__30743;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__ = function(state_30658){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____1.call(this,state_30658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__,msg_hist,msg_names,msg))
})();
var state__25580__auto__ = (function (){var statearr_30705 = f__25579__auto__.call(null);
(statearr_30705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_30705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__,msg_hist,msg_names,msg))
);

return c__25578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25578__auto___30806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto___30806,ch){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto___30806,ch){
return (function (state_30789){
var state_val_30790 = (state_30789[(1)]);
if((state_val_30790 === (1))){
var state_30789__$1 = state_30789;
var statearr_30791_30807 = state_30789__$1;
(statearr_30791_30807[(2)] = null);

(statearr_30791_30807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (2))){
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30789__$1,(4),ch);
} else {
if((state_val_30790 === (3))){
var inst_30787 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30789__$1,inst_30787);
} else {
if((state_val_30790 === (4))){
var inst_30777 = (state_30789[(7)]);
var inst_30777__$1 = (state_30789[(2)]);
var state_30789__$1 = (function (){var statearr_30792 = state_30789;
(statearr_30792[(7)] = inst_30777__$1);

return statearr_30792;
})();
if(cljs.core.truth_(inst_30777__$1)){
var statearr_30793_30808 = state_30789__$1;
(statearr_30793_30808[(1)] = (5));

} else {
var statearr_30794_30809 = state_30789__$1;
(statearr_30794_30809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (5))){
var inst_30777 = (state_30789[(7)]);
var inst_30779 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30777);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30789__$1,(8),inst_30779);
} else {
if((state_val_30790 === (6))){
var state_30789__$1 = state_30789;
var statearr_30795_30810 = state_30789__$1;
(statearr_30795_30810[(2)] = null);

(statearr_30795_30810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (7))){
var inst_30785 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
var statearr_30796_30811 = state_30789__$1;
(statearr_30796_30811[(2)] = inst_30785);

(statearr_30796_30811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (8))){
var inst_30781 = (state_30789[(2)]);
var state_30789__$1 = (function (){var statearr_30797 = state_30789;
(statearr_30797[(8)] = inst_30781);

return statearr_30797;
})();
var statearr_30798_30812 = state_30789__$1;
(statearr_30798_30812[(2)] = null);

(statearr_30798_30812[(1)] = (2));


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
});})(c__25578__auto___30806,ch))
;
return ((function (switch__25465__auto__,c__25578__auto___30806,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25466__auto____0 = (function (){
var statearr_30802 = [null,null,null,null,null,null,null,null,null];
(statearr_30802[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25466__auto__);

(statearr_30802[(1)] = (1));

return statearr_30802;
});
var figwheel$client$heads_up_plugin_$_state_machine__25466__auto____1 = (function (state_30789){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_30789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__25469__auto__ = e30803;
var statearr_30804_30813 = state_30789;
(statearr_30804_30813[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30814 = state_30789;
state_30789 = G__30814;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25466__auto__ = function(state_30789){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25466__auto____1.call(this,state_30789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto___30806,ch))
})();
var state__25580__auto__ = (function (){var statearr_30805 = f__25579__auto__.call(null);
(statearr_30805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto___30806);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto___30806,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25578__auto__){
return (function (){
var f__25579__auto__ = (function (){var switch__25465__auto__ = ((function (c__25578__auto__){
return (function (state_30835){
var state_val_30836 = (state_30835[(1)]);
if((state_val_30836 === (1))){
var inst_30830 = cljs.core.async.timeout.call(null,(3000));
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30835__$1,(2),inst_30830);
} else {
if((state_val_30836 === (2))){
var inst_30832 = (state_30835[(2)]);
var inst_30833 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30835__$1 = (function (){var statearr_30837 = state_30835;
(statearr_30837[(7)] = inst_30832);

return statearr_30837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30835__$1,inst_30833);
} else {
return null;
}
}
});})(c__25578__auto__))
;
return ((function (switch__25465__auto__,c__25578__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____0 = (function (){
var statearr_30841 = [null,null,null,null,null,null,null,null];
(statearr_30841[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__);

(statearr_30841[(1)] = (1));

return statearr_30841;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____1 = (function (state_30835){
while(true){
var ret_value__25467__auto__ = (function (){try{while(true){
var result__25468__auto__ = switch__25465__auto__.call(null,state_30835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25468__auto__;
}
break;
}
}catch (e30842){if((e30842 instanceof Object)){
var ex__25469__auto__ = e30842;
var statearr_30843_30845 = state_30835;
(statearr_30843_30845[(5)] = ex__25469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30846 = state_30835;
state_30835 = G__30846;
continue;
} else {
return ret_value__25467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__ = function(state_30835){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____1.call(this,state_30835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25466__auto__;
})()
;})(switch__25465__auto__,c__25578__auto__))
})();
var state__25580__auto__ = (function (){var statearr_30844 = f__25579__auto__.call(null);
(statearr_30844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25578__auto__);

return statearr_30844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25580__auto__);
});})(c__25578__auto__))
);

return c__25578__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30847){
var map__30854 = p__30847;
var map__30854__$1 = ((((!((map__30854 == null)))?((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);
var ed = map__30854__$1;
var formatted_exception = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30856_30860 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30857_30861 = null;
var count__30858_30862 = (0);
var i__30859_30863 = (0);
while(true){
if((i__30859_30863 < count__30858_30862)){
var msg_30864 = cljs.core._nth.call(null,chunk__30857_30861,i__30859_30863);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30864);

var G__30865 = seq__30856_30860;
var G__30866 = chunk__30857_30861;
var G__30867 = count__30858_30862;
var G__30868 = (i__30859_30863 + (1));
seq__30856_30860 = G__30865;
chunk__30857_30861 = G__30866;
count__30858_30862 = G__30867;
i__30859_30863 = G__30868;
continue;
} else {
var temp__4657__auto___30869 = cljs.core.seq.call(null,seq__30856_30860);
if(temp__4657__auto___30869){
var seq__30856_30870__$1 = temp__4657__auto___30869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30856_30870__$1)){
var c__23050__auto___30871 = cljs.core.chunk_first.call(null,seq__30856_30870__$1);
var G__30872 = cljs.core.chunk_rest.call(null,seq__30856_30870__$1);
var G__30873 = c__23050__auto___30871;
var G__30874 = cljs.core.count.call(null,c__23050__auto___30871);
var G__30875 = (0);
seq__30856_30860 = G__30872;
chunk__30857_30861 = G__30873;
count__30858_30862 = G__30874;
i__30859_30863 = G__30875;
continue;
} else {
var msg_30876 = cljs.core.first.call(null,seq__30856_30870__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30876);

var G__30877 = cljs.core.next.call(null,seq__30856_30870__$1);
var G__30878 = null;
var G__30879 = (0);
var G__30880 = (0);
seq__30856_30860 = G__30877;
chunk__30857_30861 = G__30878;
count__30858_30862 = G__30879;
i__30859_30863 = G__30880;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30881){
var map__30884 = p__30881;
var map__30884__$1 = ((((!((map__30884 == null)))?((((map__30884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30884):map__30884);
var w = map__30884__$1;
var message = cljs.core.get.call(null,map__30884__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22227__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22227__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22227__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30892 = cljs.core.seq.call(null,plugins);
var chunk__30893 = null;
var count__30894 = (0);
var i__30895 = (0);
while(true){
if((i__30895 < count__30894)){
var vec__30896 = cljs.core._nth.call(null,chunk__30893,i__30895);
var k = cljs.core.nth.call(null,vec__30896,(0),null);
var plugin = cljs.core.nth.call(null,vec__30896,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30898 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30892,chunk__30893,count__30894,i__30895,pl_30898,vec__30896,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30898.call(null,msg_hist);
});})(seq__30892,chunk__30893,count__30894,i__30895,pl_30898,vec__30896,k,plugin))
);
} else {
}

var G__30899 = seq__30892;
var G__30900 = chunk__30893;
var G__30901 = count__30894;
var G__30902 = (i__30895 + (1));
seq__30892 = G__30899;
chunk__30893 = G__30900;
count__30894 = G__30901;
i__30895 = G__30902;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30892);
if(temp__4657__auto__){
var seq__30892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30892__$1)){
var c__23050__auto__ = cljs.core.chunk_first.call(null,seq__30892__$1);
var G__30903 = cljs.core.chunk_rest.call(null,seq__30892__$1);
var G__30904 = c__23050__auto__;
var G__30905 = cljs.core.count.call(null,c__23050__auto__);
var G__30906 = (0);
seq__30892 = G__30903;
chunk__30893 = G__30904;
count__30894 = G__30905;
i__30895 = G__30906;
continue;
} else {
var vec__30897 = cljs.core.first.call(null,seq__30892__$1);
var k = cljs.core.nth.call(null,vec__30897,(0),null);
var plugin = cljs.core.nth.call(null,vec__30897,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30907 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30892,chunk__30893,count__30894,i__30895,pl_30907,vec__30897,k,plugin,seq__30892__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30907.call(null,msg_hist);
});})(seq__30892,chunk__30893,count__30894,i__30895,pl_30907,vec__30897,k,plugin,seq__30892__$1,temp__4657__auto__))
);
} else {
}

var G__30908 = cljs.core.next.call(null,seq__30892__$1);
var G__30909 = null;
var G__30910 = (0);
var G__30911 = (0);
seq__30892 = G__30908;
chunk__30893 = G__30909;
count__30894 = G__30910;
i__30895 = G__30911;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30912 = [];
var len__23309__auto___30915 = arguments.length;
var i__23310__auto___30916 = (0);
while(true){
if((i__23310__auto___30916 < len__23309__auto___30915)){
args30912.push((arguments[i__23310__auto___30916]));

var G__30917 = (i__23310__auto___30916 + (1));
i__23310__auto___30916 = G__30917;
continue;
} else {
}
break;
}

var G__30914 = args30912.length;
switch (G__30914) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30912.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23316__auto__ = [];
var len__23309__auto___30923 = arguments.length;
var i__23310__auto___30924 = (0);
while(true){
if((i__23310__auto___30924 < len__23309__auto___30923)){
args__23316__auto__.push((arguments[i__23310__auto___30924]));

var G__30925 = (i__23310__auto___30924 + (1));
i__23310__auto___30924 = G__30925;
continue;
} else {
}
break;
}

var argseq__23317__auto__ = ((((0) < args__23316__auto__.length))?(new cljs.core.IndexedSeq(args__23316__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23317__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30920){
var map__30921 = p__30920;
var map__30921__$1 = ((((!((map__30921 == null)))?((((map__30921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30921):map__30921);
var opts = map__30921__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30919){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30919));
});

//# sourceMappingURL=client.js.map