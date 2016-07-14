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
var pred__28951 = cljs.core._EQ_;
var expr__28952 = (function (){var or__21651__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28955){if((e28955 instanceof Error)){
var e = e28955;
return false;
} else {
throw e28955;

}
}})();
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28951.call(null,"true",expr__28952))){
return true;
} else {
if(cljs.core.truth_(pred__28951.call(null,"false",expr__28952))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28952)].join('')));
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
}catch (e28957){if((e28957 instanceof Error)){
var e = e28957;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28957;

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
var args__22728__auto__ = [];
var len__22721__auto___28959 = arguments.length;
var i__22722__auto___28960 = (0);
while(true){
if((i__22722__auto___28960 < len__22721__auto___28959)){
args__22728__auto__.push((arguments[i__22722__auto___28960]));

var G__28961 = (i__22722__auto___28960 + (1));
i__22722__auto___28960 = G__28961;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((0) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22729__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28958){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28958));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28962){
var map__28965 = p__28962;
var map__28965__$1 = ((((!((map__28965 == null)))?((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var message = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21651__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21639__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21639__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21639__auto__;
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
var c__24331__auto___29127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___29127,ch){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___29127,ch){
return (function (state_29096){
var state_val_29097 = (state_29096[(1)]);
if((state_val_29097 === (7))){
var inst_29092 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29098_29128 = state_29096__$1;
(statearr_29098_29128[(2)] = inst_29092);

(statearr_29098_29128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (1))){
var state_29096__$1 = state_29096;
var statearr_29099_29129 = state_29096__$1;
(statearr_29099_29129[(2)] = null);

(statearr_29099_29129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (4))){
var inst_29049 = (state_29096[(7)]);
var inst_29049__$1 = (state_29096[(2)]);
var state_29096__$1 = (function (){var statearr_29100 = state_29096;
(statearr_29100[(7)] = inst_29049__$1);

return statearr_29100;
})();
if(cljs.core.truth_(inst_29049__$1)){
var statearr_29101_29130 = state_29096__$1;
(statearr_29101_29130[(1)] = (5));

} else {
var statearr_29102_29131 = state_29096__$1;
(statearr_29102_29131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (15))){
var inst_29056 = (state_29096[(8)]);
var inst_29071 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29056);
var inst_29072 = cljs.core.first.call(null,inst_29071);
var inst_29073 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29072);
var inst_29074 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29073)].join('');
var inst_29075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29074);
var state_29096__$1 = state_29096;
var statearr_29103_29132 = state_29096__$1;
(statearr_29103_29132[(2)] = inst_29075);

(statearr_29103_29132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (13))){
var inst_29080 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29104_29133 = state_29096__$1;
(statearr_29104_29133[(2)] = inst_29080);

(statearr_29104_29133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (6))){
var state_29096__$1 = state_29096;
var statearr_29105_29134 = state_29096__$1;
(statearr_29105_29134[(2)] = null);

(statearr_29105_29134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (17))){
var inst_29078 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29106_29135 = state_29096__$1;
(statearr_29106_29135[(2)] = inst_29078);

(statearr_29106_29135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (3))){
var inst_29094 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29096__$1,inst_29094);
} else {
if((state_val_29097 === (12))){
var inst_29055 = (state_29096[(9)]);
var inst_29069 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29055,opts);
var state_29096__$1 = state_29096;
if(cljs.core.truth_(inst_29069)){
var statearr_29107_29136 = state_29096__$1;
(statearr_29107_29136[(1)] = (15));

} else {
var statearr_29108_29137 = state_29096__$1;
(statearr_29108_29137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (2))){
var state_29096__$1 = state_29096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29096__$1,(4),ch);
} else {
if((state_val_29097 === (11))){
var inst_29056 = (state_29096[(8)]);
var inst_29061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29062 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29056);
var inst_29063 = cljs.core.async.timeout.call(null,(1000));
var inst_29064 = [inst_29062,inst_29063];
var inst_29065 = (new cljs.core.PersistentVector(null,2,(5),inst_29061,inst_29064,null));
var state_29096__$1 = state_29096;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29096__$1,(14),inst_29065);
} else {
if((state_val_29097 === (9))){
var inst_29056 = (state_29096[(8)]);
var inst_29082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29083 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29056);
var inst_29084 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29083);
var inst_29085 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29084)].join('');
var inst_29086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29085);
var state_29096__$1 = (function (){var statearr_29109 = state_29096;
(statearr_29109[(10)] = inst_29082);

return statearr_29109;
})();
var statearr_29110_29138 = state_29096__$1;
(statearr_29110_29138[(2)] = inst_29086);

(statearr_29110_29138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (5))){
var inst_29049 = (state_29096[(7)]);
var inst_29051 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29052 = (new cljs.core.PersistentArrayMap(null,2,inst_29051,null));
var inst_29053 = (new cljs.core.PersistentHashSet(null,inst_29052,null));
var inst_29054 = figwheel.client.focus_msgs.call(null,inst_29053,inst_29049);
var inst_29055 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29054);
var inst_29056 = cljs.core.first.call(null,inst_29054);
var inst_29057 = figwheel.client.autoload_QMARK_.call(null);
var state_29096__$1 = (function (){var statearr_29111 = state_29096;
(statearr_29111[(8)] = inst_29056);

(statearr_29111[(9)] = inst_29055);

return statearr_29111;
})();
if(cljs.core.truth_(inst_29057)){
var statearr_29112_29139 = state_29096__$1;
(statearr_29112_29139[(1)] = (8));

} else {
var statearr_29113_29140 = state_29096__$1;
(statearr_29113_29140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (14))){
var inst_29067 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29114_29141 = state_29096__$1;
(statearr_29114_29141[(2)] = inst_29067);

(statearr_29114_29141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (16))){
var state_29096__$1 = state_29096;
var statearr_29115_29142 = state_29096__$1;
(statearr_29115_29142[(2)] = null);

(statearr_29115_29142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (10))){
var inst_29088 = (state_29096[(2)]);
var state_29096__$1 = (function (){var statearr_29116 = state_29096;
(statearr_29116[(11)] = inst_29088);

return statearr_29116;
})();
var statearr_29117_29143 = state_29096__$1;
(statearr_29117_29143[(2)] = null);

(statearr_29117_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (8))){
var inst_29055 = (state_29096[(9)]);
var inst_29059 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29055,opts);
var state_29096__$1 = state_29096;
if(cljs.core.truth_(inst_29059)){
var statearr_29118_29144 = state_29096__$1;
(statearr_29118_29144[(1)] = (11));

} else {
var statearr_29119_29145 = state_29096__$1;
(statearr_29119_29145[(1)] = (12));

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
});})(c__24331__auto___29127,ch))
;
return ((function (switch__24219__auto__,c__24331__auto___29127,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____0 = (function (){
var statearr_29123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29123[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____1 = (function (state_29096){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_29096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__24223__auto__ = e29124;
var statearr_29125_29146 = state_29096;
(statearr_29125_29146[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29147 = state_29096;
state_29096 = G__29147;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__ = function(state_29096){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____1.call(this,state_29096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24220__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___29127,ch))
})();
var state__24333__auto__ = (function (){var statearr_29126 = f__24332__auto__.call(null);
(statearr_29126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___29127);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___29127,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29148_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29148_SHARP_));
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
var base_path_29155 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29155){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29154 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29154;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29153;
}}catch (e29152){if((e29152 instanceof Error)){
var e = e29152;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29155], null));
} else {
var e = e29152;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29155))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29156){
var map__29163 = p__29156;
var map__29163__$1 = ((((!((map__29163 == null)))?((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var opts = map__29163__$1;
var build_id = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29163,map__29163__$1,opts,build_id){
return (function (p__29165){
var vec__29166 = p__29165;
var map__29167 = cljs.core.nth.call(null,vec__29166,(0),null);
var map__29167__$1 = ((((!((map__29167 == null)))?((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var msg = map__29167__$1;
var msg_name = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29166,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29166,map__29167,map__29167__$1,msg,msg_name,_,map__29163,map__29163__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29166,map__29167,map__29167__$1,msg,msg_name,_,map__29163,map__29163__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29163,map__29163__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29173){
var vec__29174 = p__29173;
var map__29175 = cljs.core.nth.call(null,vec__29174,(0),null);
var map__29175__$1 = ((((!((map__29175 == null)))?((((map__29175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29175):map__29175);
var msg = map__29175__$1;
var msg_name = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29174,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29177){
var map__29187 = p__29177;
var map__29187__$1 = ((((!((map__29187 == null)))?((((map__29187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29187):map__29187);
var on_compile_warning = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29187,map__29187__$1,on_compile_warning,on_compile_fail){
return (function (p__29189){
var vec__29190 = p__29189;
var map__29191 = cljs.core.nth.call(null,vec__29190,(0),null);
var map__29191__$1 = ((((!((map__29191 == null)))?((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var msg = map__29191__$1;
var msg_name = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29190,(1));
var pred__29193 = cljs.core._EQ_;
var expr__29194 = msg_name;
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29194))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29194))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29187,map__29187__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__,msg_hist,msg_names,msg){
return (function (state_29402){
var state_val_29403 = (state_29402[(1)]);
if((state_val_29403 === (7))){
var inst_29330 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29330)){
var statearr_29404_29450 = state_29402__$1;
(statearr_29404_29450[(1)] = (8));

} else {
var statearr_29405_29451 = state_29402__$1;
(statearr_29405_29451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (20))){
var inst_29396 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29406_29452 = state_29402__$1;
(statearr_29406_29452[(2)] = inst_29396);

(statearr_29406_29452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (27))){
var inst_29392 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29407_29453 = state_29402__$1;
(statearr_29407_29453[(2)] = inst_29392);

(statearr_29407_29453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (1))){
var inst_29323 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29323)){
var statearr_29408_29454 = state_29402__$1;
(statearr_29408_29454[(1)] = (2));

} else {
var statearr_29409_29455 = state_29402__$1;
(statearr_29409_29455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (24))){
var inst_29394 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29410_29456 = state_29402__$1;
(statearr_29410_29456[(2)] = inst_29394);

(statearr_29410_29456[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (4))){
var inst_29400 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29402__$1,inst_29400);
} else {
if((state_val_29403 === (15))){
var inst_29398 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29411_29457 = state_29402__$1;
(statearr_29411_29457[(2)] = inst_29398);

(statearr_29411_29457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (21))){
var inst_29357 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29412_29458 = state_29402__$1;
(statearr_29412_29458[(2)] = inst_29357);

(statearr_29412_29458[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (31))){
var inst_29381 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29381)){
var statearr_29413_29459 = state_29402__$1;
(statearr_29413_29459[(1)] = (34));

} else {
var statearr_29414_29460 = state_29402__$1;
(statearr_29414_29460[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (32))){
var inst_29390 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29415_29461 = state_29402__$1;
(statearr_29415_29461[(2)] = inst_29390);

(statearr_29415_29461[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (33))){
var inst_29379 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29416_29462 = state_29402__$1;
(statearr_29416_29462[(2)] = inst_29379);

(statearr_29416_29462[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (13))){
var inst_29344 = figwheel.client.heads_up.clear.call(null);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(16),inst_29344);
} else {
if((state_val_29403 === (22))){
var inst_29361 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29362 = figwheel.client.heads_up.append_message.call(null,inst_29361);
var state_29402__$1 = state_29402;
var statearr_29417_29463 = state_29402__$1;
(statearr_29417_29463[(2)] = inst_29362);

(statearr_29417_29463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (36))){
var inst_29388 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29418_29464 = state_29402__$1;
(statearr_29418_29464[(2)] = inst_29388);

(statearr_29418_29464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (29))){
var inst_29372 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29419_29465 = state_29402__$1;
(statearr_29419_29465[(2)] = inst_29372);

(statearr_29419_29465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (6))){
var inst_29325 = (state_29402[(7)]);
var state_29402__$1 = state_29402;
var statearr_29420_29466 = state_29402__$1;
(statearr_29420_29466[(2)] = inst_29325);

(statearr_29420_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (28))){
var inst_29368 = (state_29402[(2)]);
var inst_29369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29370 = figwheel.client.heads_up.display_warning.call(null,inst_29369);
var state_29402__$1 = (function (){var statearr_29421 = state_29402;
(statearr_29421[(8)] = inst_29368);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(29),inst_29370);
} else {
if((state_val_29403 === (25))){
var inst_29366 = figwheel.client.heads_up.clear.call(null);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(28),inst_29366);
} else {
if((state_val_29403 === (34))){
var inst_29383 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(37),inst_29383);
} else {
if((state_val_29403 === (17))){
var inst_29350 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29422_29467 = state_29402__$1;
(statearr_29422_29467[(2)] = inst_29350);

(statearr_29422_29467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (3))){
var inst_29342 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29342)){
var statearr_29423_29468 = state_29402__$1;
(statearr_29423_29468[(1)] = (13));

} else {
var statearr_29424_29469 = state_29402__$1;
(statearr_29424_29469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (12))){
var inst_29338 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29425_29470 = state_29402__$1;
(statearr_29425_29470[(2)] = inst_29338);

(statearr_29425_29470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (2))){
var inst_29325 = (state_29402[(7)]);
var inst_29325__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29402__$1 = (function (){var statearr_29426 = state_29402;
(statearr_29426[(7)] = inst_29325__$1);

return statearr_29426;
})();
if(cljs.core.truth_(inst_29325__$1)){
var statearr_29427_29471 = state_29402__$1;
(statearr_29427_29471[(1)] = (5));

} else {
var statearr_29428_29472 = state_29402__$1;
(statearr_29428_29472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (23))){
var inst_29364 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29364)){
var statearr_29429_29473 = state_29402__$1;
(statearr_29429_29473[(1)] = (25));

} else {
var statearr_29430_29474 = state_29402__$1;
(statearr_29430_29474[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (35))){
var state_29402__$1 = state_29402;
var statearr_29431_29475 = state_29402__$1;
(statearr_29431_29475[(2)] = null);

(statearr_29431_29475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (19))){
var inst_29359 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29359)){
var statearr_29432_29476 = state_29402__$1;
(statearr_29432_29476[(1)] = (22));

} else {
var statearr_29433_29477 = state_29402__$1;
(statearr_29433_29477[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (11))){
var inst_29334 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29434_29478 = state_29402__$1;
(statearr_29434_29478[(2)] = inst_29334);

(statearr_29434_29478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (9))){
var inst_29336 = figwheel.client.heads_up.clear.call(null);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(12),inst_29336);
} else {
if((state_val_29403 === (5))){
var inst_29327 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29402__$1 = state_29402;
var statearr_29435_29479 = state_29402__$1;
(statearr_29435_29479[(2)] = inst_29327);

(statearr_29435_29479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (14))){
var inst_29352 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29352)){
var statearr_29436_29480 = state_29402__$1;
(statearr_29436_29480[(1)] = (18));

} else {
var statearr_29437_29481 = state_29402__$1;
(statearr_29437_29481[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (26))){
var inst_29374 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29374)){
var statearr_29438_29482 = state_29402__$1;
(statearr_29438_29482[(1)] = (30));

} else {
var statearr_29439_29483 = state_29402__$1;
(statearr_29439_29483[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (16))){
var inst_29346 = (state_29402[(2)]);
var inst_29347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29348 = figwheel.client.heads_up.display_exception.call(null,inst_29347);
var state_29402__$1 = (function (){var statearr_29440 = state_29402;
(statearr_29440[(9)] = inst_29346);

return statearr_29440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(17),inst_29348);
} else {
if((state_val_29403 === (30))){
var inst_29376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29377 = figwheel.client.heads_up.display_warning.call(null,inst_29376);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(33),inst_29377);
} else {
if((state_val_29403 === (10))){
var inst_29340 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29441_29484 = state_29402__$1;
(statearr_29441_29484[(2)] = inst_29340);

(statearr_29441_29484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (18))){
var inst_29354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29355 = figwheel.client.heads_up.display_exception.call(null,inst_29354);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(21),inst_29355);
} else {
if((state_val_29403 === (37))){
var inst_29385 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29442_29485 = state_29402__$1;
(statearr_29442_29485[(2)] = inst_29385);

(statearr_29442_29485[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (8))){
var inst_29332 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(11),inst_29332);
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
});})(c__24331__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24219__auto__,c__24331__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____0 = (function (){
var statearr_29446 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29446[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__);

(statearr_29446[(1)] = (1));

return statearr_29446;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____1 = (function (state_29402){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_29402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e29447){if((e29447 instanceof Object)){
var ex__24223__auto__ = e29447;
var statearr_29448_29486 = state_29402;
(statearr_29448_29486[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29487 = state_29402;
state_29402 = G__29487;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__ = function(state_29402){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____1.call(this,state_29402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__,msg_hist,msg_names,msg))
})();
var state__24333__auto__ = (function (){var statearr_29449 = f__24332__auto__.call(null);
(statearr_29449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__,msg_hist,msg_names,msg))
);

return c__24331__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24331__auto___29550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto___29550,ch){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto___29550,ch){
return (function (state_29533){
var state_val_29534 = (state_29533[(1)]);
if((state_val_29534 === (1))){
var state_29533__$1 = state_29533;
var statearr_29535_29551 = state_29533__$1;
(statearr_29535_29551[(2)] = null);

(statearr_29535_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (2))){
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(4),ch);
} else {
if((state_val_29534 === (3))){
var inst_29531 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else {
if((state_val_29534 === (4))){
var inst_29521 = (state_29533[(7)]);
var inst_29521__$1 = (state_29533[(2)]);
var state_29533__$1 = (function (){var statearr_29536 = state_29533;
(statearr_29536[(7)] = inst_29521__$1);

return statearr_29536;
})();
if(cljs.core.truth_(inst_29521__$1)){
var statearr_29537_29552 = state_29533__$1;
(statearr_29537_29552[(1)] = (5));

} else {
var statearr_29538_29553 = state_29533__$1;
(statearr_29538_29553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (5))){
var inst_29521 = (state_29533[(7)]);
var inst_29523 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29521);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(8),inst_29523);
} else {
if((state_val_29534 === (6))){
var state_29533__$1 = state_29533;
var statearr_29539_29554 = state_29533__$1;
(statearr_29539_29554[(2)] = null);

(statearr_29539_29554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (7))){
var inst_29529 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29540_29555 = state_29533__$1;
(statearr_29540_29555[(2)] = inst_29529);

(statearr_29540_29555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (8))){
var inst_29525 = (state_29533[(2)]);
var state_29533__$1 = (function (){var statearr_29541 = state_29533;
(statearr_29541[(8)] = inst_29525);

return statearr_29541;
})();
var statearr_29542_29556 = state_29533__$1;
(statearr_29542_29556[(2)] = null);

(statearr_29542_29556[(1)] = (2));


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
});})(c__24331__auto___29550,ch))
;
return ((function (switch__24219__auto__,c__24331__auto___29550,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24220__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24220__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24220__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var figwheel$client$heads_up_plugin_$_state_machine__24220__auto____1 = (function (state_29533){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_29533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object)){
var ex__24223__auto__ = e29547;
var statearr_29548_29557 = state_29533;
(statearr_29548_29557[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29558 = state_29533;
state_29533 = G__29558;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24220__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24220__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24220__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24220__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto___29550,ch))
})();
var state__24333__auto__ = (function (){var statearr_29549 = f__24332__auto__.call(null);
(statearr_29549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto___29550);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto___29550,ch))
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
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__){
return (function (state_29579){
var state_val_29580 = (state_29579[(1)]);
if((state_val_29580 === (1))){
var inst_29574 = cljs.core.async.timeout.call(null,(3000));
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29579__$1,(2),inst_29574);
} else {
if((state_val_29580 === (2))){
var inst_29576 = (state_29579[(2)]);
var inst_29577 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29579__$1 = (function (){var statearr_29581 = state_29579;
(statearr_29581[(7)] = inst_29576);

return statearr_29581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29579__$1,inst_29577);
} else {
return null;
}
}
});})(c__24331__auto__))
;
return ((function (switch__24219__auto__,c__24331__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____0 = (function (){
var statearr_29585 = [null,null,null,null,null,null,null,null];
(statearr_29585[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__);

(statearr_29585[(1)] = (1));

return statearr_29585;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____1 = (function (state_29579){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_29579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e29586){if((e29586 instanceof Object)){
var ex__24223__auto__ = e29586;
var statearr_29587_29589 = state_29579;
(statearr_29587_29589[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29590 = state_29579;
state_29579 = G__29590;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__ = function(state_29579){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____1.call(this,state_29579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24220__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__))
})();
var state__24333__auto__ = (function (){var statearr_29588 = f__24332__auto__.call(null);
(statearr_29588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_29588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__))
);

return c__24331__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29591){
var map__29598 = p__29591;
var map__29598__$1 = ((((!((map__29598 == null)))?((((map__29598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29598):map__29598);
var ed = map__29598__$1;
var formatted_exception = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29600_29604 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29601_29605 = null;
var count__29602_29606 = (0);
var i__29603_29607 = (0);
while(true){
if((i__29603_29607 < count__29602_29606)){
var msg_29608 = cljs.core._nth.call(null,chunk__29601_29605,i__29603_29607);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29608);

var G__29609 = seq__29600_29604;
var G__29610 = chunk__29601_29605;
var G__29611 = count__29602_29606;
var G__29612 = (i__29603_29607 + (1));
seq__29600_29604 = G__29609;
chunk__29601_29605 = G__29610;
count__29602_29606 = G__29611;
i__29603_29607 = G__29612;
continue;
} else {
var temp__4657__auto___29613 = cljs.core.seq.call(null,seq__29600_29604);
if(temp__4657__auto___29613){
var seq__29600_29614__$1 = temp__4657__auto___29613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29600_29614__$1)){
var c__22462__auto___29615 = cljs.core.chunk_first.call(null,seq__29600_29614__$1);
var G__29616 = cljs.core.chunk_rest.call(null,seq__29600_29614__$1);
var G__29617 = c__22462__auto___29615;
var G__29618 = cljs.core.count.call(null,c__22462__auto___29615);
var G__29619 = (0);
seq__29600_29604 = G__29616;
chunk__29601_29605 = G__29617;
count__29602_29606 = G__29618;
i__29603_29607 = G__29619;
continue;
} else {
var msg_29620 = cljs.core.first.call(null,seq__29600_29614__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29620);

var G__29621 = cljs.core.next.call(null,seq__29600_29614__$1);
var G__29622 = null;
var G__29623 = (0);
var G__29624 = (0);
seq__29600_29604 = G__29621;
chunk__29601_29605 = G__29622;
count__29602_29606 = G__29623;
i__29603_29607 = G__29624;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29625){
var map__29628 = p__29625;
var map__29628__$1 = ((((!((map__29628 == null)))?((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var w = map__29628__$1;
var message = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21639__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21639__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21639__auto__;
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
var seq__29636 = cljs.core.seq.call(null,plugins);
var chunk__29637 = null;
var count__29638 = (0);
var i__29639 = (0);
while(true){
if((i__29639 < count__29638)){
var vec__29640 = cljs.core._nth.call(null,chunk__29637,i__29639);
var k = cljs.core.nth.call(null,vec__29640,(0),null);
var plugin = cljs.core.nth.call(null,vec__29640,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29642 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29636,chunk__29637,count__29638,i__29639,pl_29642,vec__29640,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29642.call(null,msg_hist);
});})(seq__29636,chunk__29637,count__29638,i__29639,pl_29642,vec__29640,k,plugin))
);
} else {
}

var G__29643 = seq__29636;
var G__29644 = chunk__29637;
var G__29645 = count__29638;
var G__29646 = (i__29639 + (1));
seq__29636 = G__29643;
chunk__29637 = G__29644;
count__29638 = G__29645;
i__29639 = G__29646;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29636);
if(temp__4657__auto__){
var seq__29636__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29636__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__29636__$1);
var G__29647 = cljs.core.chunk_rest.call(null,seq__29636__$1);
var G__29648 = c__22462__auto__;
var G__29649 = cljs.core.count.call(null,c__22462__auto__);
var G__29650 = (0);
seq__29636 = G__29647;
chunk__29637 = G__29648;
count__29638 = G__29649;
i__29639 = G__29650;
continue;
} else {
var vec__29641 = cljs.core.first.call(null,seq__29636__$1);
var k = cljs.core.nth.call(null,vec__29641,(0),null);
var plugin = cljs.core.nth.call(null,vec__29641,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29651 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29636,chunk__29637,count__29638,i__29639,pl_29651,vec__29641,k,plugin,seq__29636__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29651.call(null,msg_hist);
});})(seq__29636,chunk__29637,count__29638,i__29639,pl_29651,vec__29641,k,plugin,seq__29636__$1,temp__4657__auto__))
);
} else {
}

var G__29652 = cljs.core.next.call(null,seq__29636__$1);
var G__29653 = null;
var G__29654 = (0);
var G__29655 = (0);
seq__29636 = G__29652;
chunk__29637 = G__29653;
count__29638 = G__29654;
i__29639 = G__29655;
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
var args29656 = [];
var len__22721__auto___29659 = arguments.length;
var i__22722__auto___29660 = (0);
while(true){
if((i__22722__auto___29660 < len__22721__auto___29659)){
args29656.push((arguments[i__22722__auto___29660]));

var G__29661 = (i__22722__auto___29660 + (1));
i__22722__auto___29660 = G__29661;
continue;
} else {
}
break;
}

var G__29658 = args29656.length;
switch (G__29658) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29656.length)].join('')));

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
var args__22728__auto__ = [];
var len__22721__auto___29667 = arguments.length;
var i__22722__auto___29668 = (0);
while(true){
if((i__22722__auto___29668 < len__22721__auto___29667)){
args__22728__auto__.push((arguments[i__22722__auto___29668]));

var G__29669 = (i__22722__auto___29668 + (1));
i__22722__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((0) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22729__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29664){
var map__29665 = p__29664;
var map__29665__$1 = ((((!((map__29665 == null)))?((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);
var opts = map__29665__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29663){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29663));
});

//# sourceMappingURL=client.js.map