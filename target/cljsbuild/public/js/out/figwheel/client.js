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
var pred__28954 = cljs.core._EQ_;
var expr__28955 = (function (){var or__21651__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28958){if((e28958 instanceof Error)){
var e = e28958;
return false;
} else {
throw e28958;

}
}})();
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28954.call(null,"true",expr__28955))){
return true;
} else {
if(cljs.core.truth_(pred__28954.call(null,"false",expr__28955))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28955)].join('')));
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
}catch (e28960){if((e28960 instanceof Error)){
var e = e28960;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28960;

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
var len__22721__auto___28962 = arguments.length;
var i__22722__auto___28963 = (0);
while(true){
if((i__22722__auto___28963 < len__22721__auto___28962)){
args__22728__auto__.push((arguments[i__22722__auto___28963]));

var G__28964 = (i__22722__auto___28963 + (1));
i__22722__auto___28963 = G__28964;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28961){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28961));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28965){
var map__28968 = p__28965;
var map__28968__$1 = ((((!((map__28968 == null)))?((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);
var message = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24392__auto___29130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___29130,ch){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___29130,ch){
return (function (state_29099){
var state_val_29100 = (state_29099[(1)]);
if((state_val_29100 === (7))){
var inst_29095 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29101_29131 = state_29099__$1;
(statearr_29101_29131[(2)] = inst_29095);

(statearr_29101_29131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (1))){
var state_29099__$1 = state_29099;
var statearr_29102_29132 = state_29099__$1;
(statearr_29102_29132[(2)] = null);

(statearr_29102_29132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (4))){
var inst_29052 = (state_29099[(7)]);
var inst_29052__$1 = (state_29099[(2)]);
var state_29099__$1 = (function (){var statearr_29103 = state_29099;
(statearr_29103[(7)] = inst_29052__$1);

return statearr_29103;
})();
if(cljs.core.truth_(inst_29052__$1)){
var statearr_29104_29133 = state_29099__$1;
(statearr_29104_29133[(1)] = (5));

} else {
var statearr_29105_29134 = state_29099__$1;
(statearr_29105_29134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (15))){
var inst_29059 = (state_29099[(8)]);
var inst_29074 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29059);
var inst_29075 = cljs.core.first.call(null,inst_29074);
var inst_29076 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29075);
var inst_29077 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29076)].join('');
var inst_29078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29077);
var state_29099__$1 = state_29099;
var statearr_29106_29135 = state_29099__$1;
(statearr_29106_29135[(2)] = inst_29078);

(statearr_29106_29135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (13))){
var inst_29083 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29107_29136 = state_29099__$1;
(statearr_29107_29136[(2)] = inst_29083);

(statearr_29107_29136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (6))){
var state_29099__$1 = state_29099;
var statearr_29108_29137 = state_29099__$1;
(statearr_29108_29137[(2)] = null);

(statearr_29108_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (17))){
var inst_29081 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29109_29138 = state_29099__$1;
(statearr_29109_29138[(2)] = inst_29081);

(statearr_29109_29138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (3))){
var inst_29097 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29099__$1,inst_29097);
} else {
if((state_val_29100 === (12))){
var inst_29058 = (state_29099[(9)]);
var inst_29072 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29058,opts);
var state_29099__$1 = state_29099;
if(cljs.core.truth_(inst_29072)){
var statearr_29110_29139 = state_29099__$1;
(statearr_29110_29139[(1)] = (15));

} else {
var statearr_29111_29140 = state_29099__$1;
(statearr_29111_29140[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (2))){
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29099__$1,(4),ch);
} else {
if((state_val_29100 === (11))){
var inst_29059 = (state_29099[(8)]);
var inst_29064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29065 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29059);
var inst_29066 = cljs.core.async.timeout.call(null,(1000));
var inst_29067 = [inst_29065,inst_29066];
var inst_29068 = (new cljs.core.PersistentVector(null,2,(5),inst_29064,inst_29067,null));
var state_29099__$1 = state_29099;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29099__$1,(14),inst_29068);
} else {
if((state_val_29100 === (9))){
var inst_29059 = (state_29099[(8)]);
var inst_29085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29086 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29059);
var inst_29087 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29086);
var inst_29088 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29087)].join('');
var inst_29089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29088);
var state_29099__$1 = (function (){var statearr_29112 = state_29099;
(statearr_29112[(10)] = inst_29085);

return statearr_29112;
})();
var statearr_29113_29141 = state_29099__$1;
(statearr_29113_29141[(2)] = inst_29089);

(statearr_29113_29141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (5))){
var inst_29052 = (state_29099[(7)]);
var inst_29054 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29055 = (new cljs.core.PersistentArrayMap(null,2,inst_29054,null));
var inst_29056 = (new cljs.core.PersistentHashSet(null,inst_29055,null));
var inst_29057 = figwheel.client.focus_msgs.call(null,inst_29056,inst_29052);
var inst_29058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29057);
var inst_29059 = cljs.core.first.call(null,inst_29057);
var inst_29060 = figwheel.client.autoload_QMARK_.call(null);
var state_29099__$1 = (function (){var statearr_29114 = state_29099;
(statearr_29114[(9)] = inst_29058);

(statearr_29114[(8)] = inst_29059);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29060)){
var statearr_29115_29142 = state_29099__$1;
(statearr_29115_29142[(1)] = (8));

} else {
var statearr_29116_29143 = state_29099__$1;
(statearr_29116_29143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (14))){
var inst_29070 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29117_29144 = state_29099__$1;
(statearr_29117_29144[(2)] = inst_29070);

(statearr_29117_29144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (16))){
var state_29099__$1 = state_29099;
var statearr_29118_29145 = state_29099__$1;
(statearr_29118_29145[(2)] = null);

(statearr_29118_29145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (10))){
var inst_29091 = (state_29099[(2)]);
var state_29099__$1 = (function (){var statearr_29119 = state_29099;
(statearr_29119[(11)] = inst_29091);

return statearr_29119;
})();
var statearr_29120_29146 = state_29099__$1;
(statearr_29120_29146[(2)] = null);

(statearr_29120_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (8))){
var inst_29058 = (state_29099[(9)]);
var inst_29062 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29058,opts);
var state_29099__$1 = state_29099;
if(cljs.core.truth_(inst_29062)){
var statearr_29121_29147 = state_29099__$1;
(statearr_29121_29147[(1)] = (11));

} else {
var statearr_29122_29148 = state_29099__$1;
(statearr_29122_29148[(1)] = (12));

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
});})(c__24392__auto___29130,ch))
;
return ((function (switch__24280__auto__,c__24392__auto___29130,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____0 = (function (){
var statearr_29126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29126[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____1 = (function (state_29099){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_29099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__24284__auto__ = e29127;
var statearr_29128_29149 = state_29099;
(statearr_29128_29149[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29150 = state_29099;
state_29099 = G__29150;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__ = function(state_29099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____1.call(this,state_29099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24281__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___29130,ch))
})();
var state__24394__auto__ = (function (){var statearr_29129 = f__24393__auto__.call(null);
(statearr_29129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___29130);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___29130,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29151_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29151_SHARP_));
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
var base_path_29158 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29158){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29157 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29157;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29156;
}}catch (e29155){if((e29155 instanceof Error)){
var e = e29155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29158], null));
} else {
var e = e29155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29158))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29159){
var map__29166 = p__29159;
var map__29166__$1 = ((((!((map__29166 == null)))?((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166):map__29166);
var opts = map__29166__$1;
var build_id = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29166,map__29166__$1,opts,build_id){
return (function (p__29168){
var vec__29169 = p__29168;
var map__29170 = cljs.core.nth.call(null,vec__29169,(0),null);
var map__29170__$1 = ((((!((map__29170 == null)))?((((map__29170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29170):map__29170);
var msg = map__29170__$1;
var msg_name = cljs.core.get.call(null,map__29170__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29169,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29169,map__29170,map__29170__$1,msg,msg_name,_,map__29166,map__29166__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29169,map__29170,map__29170__$1,msg,msg_name,_,map__29166,map__29166__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29166,map__29166__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29176){
var vec__29177 = p__29176;
var map__29178 = cljs.core.nth.call(null,vec__29177,(0),null);
var map__29178__$1 = ((((!((map__29178 == null)))?((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29178):map__29178);
var msg = map__29178__$1;
var msg_name = cljs.core.get.call(null,map__29178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29177,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29180){
var map__29190 = p__29180;
var map__29190__$1 = ((((!((map__29190 == null)))?((((map__29190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);
var on_compile_warning = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29190,map__29190__$1,on_compile_warning,on_compile_fail){
return (function (p__29192){
var vec__29193 = p__29192;
var map__29194 = cljs.core.nth.call(null,vec__29193,(0),null);
var map__29194__$1 = ((((!((map__29194 == null)))?((((map__29194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);
var msg = map__29194__$1;
var msg_name = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29193,(1));
var pred__29196 = cljs.core._EQ_;
var expr__29197 = msg_name;
if(cljs.core.truth_(pred__29196.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29197))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29196.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29197))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29190,map__29190__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__,msg_hist,msg_names,msg){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29333 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29333)){
var statearr_29407_29453 = state_29405__$1;
(statearr_29407_29453[(1)] = (8));

} else {
var statearr_29408_29454 = state_29405__$1;
(statearr_29408_29454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (20))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29409_29455 = state_29405__$1;
(statearr_29409_29455[(2)] = inst_29399);

(statearr_29409_29455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (27))){
var inst_29395 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29410_29456 = state_29405__$1;
(statearr_29410_29456[(2)] = inst_29395);

(statearr_29410_29456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29326 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29326)){
var statearr_29411_29457 = state_29405__$1;
(statearr_29411_29457[(1)] = (2));

} else {
var statearr_29412_29458 = state_29405__$1;
(statearr_29412_29458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (24))){
var inst_29397 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29413_29459 = state_29405__$1;
(statearr_29413_29459[(2)] = inst_29397);

(statearr_29413_29459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (15))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29414_29460 = state_29405__$1;
(statearr_29414_29460[(2)] = inst_29401);

(statearr_29414_29460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (21))){
var inst_29360 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29415_29461 = state_29405__$1;
(statearr_29415_29461[(2)] = inst_29360);

(statearr_29415_29461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (31))){
var inst_29384 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29384)){
var statearr_29416_29462 = state_29405__$1;
(statearr_29416_29462[(1)] = (34));

} else {
var statearr_29417_29463 = state_29405__$1;
(statearr_29417_29463[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (32))){
var inst_29393 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29418_29464 = state_29405__$1;
(statearr_29418_29464[(2)] = inst_29393);

(statearr_29418_29464[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (33))){
var inst_29382 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29419_29465 = state_29405__$1;
(statearr_29419_29465[(2)] = inst_29382);

(statearr_29419_29465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (13))){
var inst_29347 = figwheel.client.heads_up.clear.call(null);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(16),inst_29347);
} else {
if((state_val_29406 === (22))){
var inst_29364 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29365 = figwheel.client.heads_up.append_message.call(null,inst_29364);
var state_29405__$1 = state_29405;
var statearr_29420_29466 = state_29405__$1;
(statearr_29420_29466[(2)] = inst_29365);

(statearr_29420_29466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (36))){
var inst_29391 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29421_29467 = state_29405__$1;
(statearr_29421_29467[(2)] = inst_29391);

(statearr_29421_29467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (29))){
var inst_29375 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29422_29468 = state_29405__$1;
(statearr_29422_29468[(2)] = inst_29375);

(statearr_29422_29468[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29328 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29423_29469 = state_29405__$1;
(statearr_29423_29469[(2)] = inst_29328);

(statearr_29423_29469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (28))){
var inst_29371 = (state_29405[(2)]);
var inst_29372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29373 = figwheel.client.heads_up.display_warning.call(null,inst_29372);
var state_29405__$1 = (function (){var statearr_29424 = state_29405;
(statearr_29424[(8)] = inst_29371);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(29),inst_29373);
} else {
if((state_val_29406 === (25))){
var inst_29369 = figwheel.client.heads_up.clear.call(null);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(28),inst_29369);
} else {
if((state_val_29406 === (34))){
var inst_29386 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(37),inst_29386);
} else {
if((state_val_29406 === (17))){
var inst_29353 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29425_29470 = state_29405__$1;
(statearr_29425_29470[(2)] = inst_29353);

(statearr_29425_29470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29345 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29345)){
var statearr_29426_29471 = state_29405__$1;
(statearr_29426_29471[(1)] = (13));

} else {
var statearr_29427_29472 = state_29405__$1;
(statearr_29427_29472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (12))){
var inst_29341 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29428_29473 = state_29405__$1;
(statearr_29428_29473[(2)] = inst_29341);

(statearr_29428_29473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var inst_29328 = (state_29405[(7)]);
var inst_29328__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29405__$1 = (function (){var statearr_29429 = state_29405;
(statearr_29429[(7)] = inst_29328__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29328__$1)){
var statearr_29430_29474 = state_29405__$1;
(statearr_29430_29474[(1)] = (5));

} else {
var statearr_29431_29475 = state_29405__$1;
(statearr_29431_29475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (23))){
var inst_29367 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29367)){
var statearr_29432_29476 = state_29405__$1;
(statearr_29432_29476[(1)] = (25));

} else {
var statearr_29433_29477 = state_29405__$1;
(statearr_29433_29477[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (35))){
var state_29405__$1 = state_29405;
var statearr_29434_29478 = state_29405__$1;
(statearr_29434_29478[(2)] = null);

(statearr_29434_29478[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (19))){
var inst_29362 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29362)){
var statearr_29435_29479 = state_29405__$1;
(statearr_29435_29479[(1)] = (22));

} else {
var statearr_29436_29480 = state_29405__$1;
(statearr_29436_29480[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (11))){
var inst_29337 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29437_29481 = state_29405__$1;
(statearr_29437_29481[(2)] = inst_29337);

(statearr_29437_29481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (9))){
var inst_29339 = figwheel.client.heads_up.clear.call(null);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(12),inst_29339);
} else {
if((state_val_29406 === (5))){
var inst_29330 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29405__$1 = state_29405;
var statearr_29438_29482 = state_29405__$1;
(statearr_29438_29482[(2)] = inst_29330);

(statearr_29438_29482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (14))){
var inst_29355 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29355)){
var statearr_29439_29483 = state_29405__$1;
(statearr_29439_29483[(1)] = (18));

} else {
var statearr_29440_29484 = state_29405__$1;
(statearr_29440_29484[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (26))){
var inst_29377 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29377)){
var statearr_29441_29485 = state_29405__$1;
(statearr_29441_29485[(1)] = (30));

} else {
var statearr_29442_29486 = state_29405__$1;
(statearr_29442_29486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (16))){
var inst_29349 = (state_29405[(2)]);
var inst_29350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29351 = figwheel.client.heads_up.display_exception.call(null,inst_29350);
var state_29405__$1 = (function (){var statearr_29443 = state_29405;
(statearr_29443[(9)] = inst_29349);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(17),inst_29351);
} else {
if((state_val_29406 === (30))){
var inst_29379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29380 = figwheel.client.heads_up.display_warning.call(null,inst_29379);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(33),inst_29380);
} else {
if((state_val_29406 === (10))){
var inst_29343 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29444_29487 = state_29405__$1;
(statearr_29444_29487[(2)] = inst_29343);

(statearr_29444_29487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (18))){
var inst_29357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29358 = figwheel.client.heads_up.display_exception.call(null,inst_29357);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(21),inst_29358);
} else {
if((state_val_29406 === (37))){
var inst_29388 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29445_29488 = state_29405__$1;
(statearr_29445_29488[(2)] = inst_29388);

(statearr_29445_29488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29335 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(11),inst_29335);
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
});})(c__24392__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24280__auto__,c__24392__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____0 = (function (){
var statearr_29449 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29449[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__);

(statearr_29449[(1)] = (1));

return statearr_29449;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____1 = (function (state_29405){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e29450){if((e29450 instanceof Object)){
var ex__24284__auto__ = e29450;
var statearr_29451_29489 = state_29405;
(statearr_29451_29489[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29490 = state_29405;
state_29405 = G__29490;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__,msg_hist,msg_names,msg))
})();
var state__24394__auto__ = (function (){var statearr_29452 = f__24393__auto__.call(null);
(statearr_29452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__,msg_hist,msg_names,msg))
);

return c__24392__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24392__auto___29553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto___29553,ch){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto___29553,ch){
return (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (1))){
var state_29536__$1 = state_29536;
var statearr_29538_29554 = state_29536__$1;
(statearr_29538_29554[(2)] = null);

(statearr_29538_29554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (2))){
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(4),ch);
} else {
if((state_val_29537 === (3))){
var inst_29534 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29536__$1,inst_29534);
} else {
if((state_val_29537 === (4))){
var inst_29524 = (state_29536[(7)]);
var inst_29524__$1 = (state_29536[(2)]);
var state_29536__$1 = (function (){var statearr_29539 = state_29536;
(statearr_29539[(7)] = inst_29524__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29524__$1)){
var statearr_29540_29555 = state_29536__$1;
(statearr_29540_29555[(1)] = (5));

} else {
var statearr_29541_29556 = state_29536__$1;
(statearr_29541_29556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (5))){
var inst_29524 = (state_29536[(7)]);
var inst_29526 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29524);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(8),inst_29526);
} else {
if((state_val_29537 === (6))){
var state_29536__$1 = state_29536;
var statearr_29542_29557 = state_29536__$1;
(statearr_29542_29557[(2)] = null);

(statearr_29542_29557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (7))){
var inst_29532 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29543_29558 = state_29536__$1;
(statearr_29543_29558[(2)] = inst_29532);

(statearr_29543_29558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (8))){
var inst_29528 = (state_29536[(2)]);
var state_29536__$1 = (function (){var statearr_29544 = state_29536;
(statearr_29544[(8)] = inst_29528);

return statearr_29544;
})();
var statearr_29545_29559 = state_29536__$1;
(statearr_29545_29559[(2)] = null);

(statearr_29545_29559[(1)] = (2));


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
});})(c__24392__auto___29553,ch))
;
return ((function (switch__24280__auto__,c__24392__auto___29553,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24281__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24281__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24281__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var figwheel$client$heads_up_plugin_$_state_machine__24281__auto____1 = (function (state_29536){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_29536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__24284__auto__ = e29550;
var statearr_29551_29560 = state_29536;
(statearr_29551_29560[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29561 = state_29536;
state_29536 = G__29561;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24281__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24281__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24281__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24281__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto___29553,ch))
})();
var state__24394__auto__ = (function (){var statearr_29552 = f__24393__auto__.call(null);
(statearr_29552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto___29553);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto___29553,ch))
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
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_29582){
var state_val_29583 = (state_29582[(1)]);
if((state_val_29583 === (1))){
var inst_29577 = cljs.core.async.timeout.call(null,(3000));
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29582__$1,(2),inst_29577);
} else {
if((state_val_29583 === (2))){
var inst_29579 = (state_29582[(2)]);
var inst_29580 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29582__$1 = (function (){var statearr_29584 = state_29582;
(statearr_29584[(7)] = inst_29579);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29582__$1,inst_29580);
} else {
return null;
}
}
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____1 = (function (state_29582){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_29582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e29589){if((e29589 instanceof Object)){
var ex__24284__auto__ = e29589;
var statearr_29590_29592 = state_29582;
(statearr_29590_29592[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29593 = state_29582;
state_29582 = G__29593;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__ = function(state_29582){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____1.call(this,state_29582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24281__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_29591 = f__24393__auto__.call(null);
(statearr_29591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29594){
var map__29601 = p__29594;
var map__29601__$1 = ((((!((map__29601 == null)))?((((map__29601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29601):map__29601);
var ed = map__29601__$1;
var formatted_exception = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29603_29607 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29604_29608 = null;
var count__29605_29609 = (0);
var i__29606_29610 = (0);
while(true){
if((i__29606_29610 < count__29605_29609)){
var msg_29611 = cljs.core._nth.call(null,chunk__29604_29608,i__29606_29610);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29611);

var G__29612 = seq__29603_29607;
var G__29613 = chunk__29604_29608;
var G__29614 = count__29605_29609;
var G__29615 = (i__29606_29610 + (1));
seq__29603_29607 = G__29612;
chunk__29604_29608 = G__29613;
count__29605_29609 = G__29614;
i__29606_29610 = G__29615;
continue;
} else {
var temp__4657__auto___29616 = cljs.core.seq.call(null,seq__29603_29607);
if(temp__4657__auto___29616){
var seq__29603_29617__$1 = temp__4657__auto___29616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29603_29617__$1)){
var c__22462__auto___29618 = cljs.core.chunk_first.call(null,seq__29603_29617__$1);
var G__29619 = cljs.core.chunk_rest.call(null,seq__29603_29617__$1);
var G__29620 = c__22462__auto___29618;
var G__29621 = cljs.core.count.call(null,c__22462__auto___29618);
var G__29622 = (0);
seq__29603_29607 = G__29619;
chunk__29604_29608 = G__29620;
count__29605_29609 = G__29621;
i__29606_29610 = G__29622;
continue;
} else {
var msg_29623 = cljs.core.first.call(null,seq__29603_29617__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29623);

var G__29624 = cljs.core.next.call(null,seq__29603_29617__$1);
var G__29625 = null;
var G__29626 = (0);
var G__29627 = (0);
seq__29603_29607 = G__29624;
chunk__29604_29608 = G__29625;
count__29605_29609 = G__29626;
i__29606_29610 = G__29627;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29628){
var map__29631 = p__29628;
var map__29631__$1 = ((((!((map__29631 == null)))?((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var w = map__29631__$1;
var message = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29639 = cljs.core.seq.call(null,plugins);
var chunk__29640 = null;
var count__29641 = (0);
var i__29642 = (0);
while(true){
if((i__29642 < count__29641)){
var vec__29643 = cljs.core._nth.call(null,chunk__29640,i__29642);
var k = cljs.core.nth.call(null,vec__29643,(0),null);
var plugin = cljs.core.nth.call(null,vec__29643,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29645 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29639,chunk__29640,count__29641,i__29642,pl_29645,vec__29643,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29645.call(null,msg_hist);
});})(seq__29639,chunk__29640,count__29641,i__29642,pl_29645,vec__29643,k,plugin))
);
} else {
}

var G__29646 = seq__29639;
var G__29647 = chunk__29640;
var G__29648 = count__29641;
var G__29649 = (i__29642 + (1));
seq__29639 = G__29646;
chunk__29640 = G__29647;
count__29641 = G__29648;
i__29642 = G__29649;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29639);
if(temp__4657__auto__){
var seq__29639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29639__$1)){
var c__22462__auto__ = cljs.core.chunk_first.call(null,seq__29639__$1);
var G__29650 = cljs.core.chunk_rest.call(null,seq__29639__$1);
var G__29651 = c__22462__auto__;
var G__29652 = cljs.core.count.call(null,c__22462__auto__);
var G__29653 = (0);
seq__29639 = G__29650;
chunk__29640 = G__29651;
count__29641 = G__29652;
i__29642 = G__29653;
continue;
} else {
var vec__29644 = cljs.core.first.call(null,seq__29639__$1);
var k = cljs.core.nth.call(null,vec__29644,(0),null);
var plugin = cljs.core.nth.call(null,vec__29644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29654 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29639,chunk__29640,count__29641,i__29642,pl_29654,vec__29644,k,plugin,seq__29639__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29654.call(null,msg_hist);
});})(seq__29639,chunk__29640,count__29641,i__29642,pl_29654,vec__29644,k,plugin,seq__29639__$1,temp__4657__auto__))
);
} else {
}

var G__29655 = cljs.core.next.call(null,seq__29639__$1);
var G__29656 = null;
var G__29657 = (0);
var G__29658 = (0);
seq__29639 = G__29655;
chunk__29640 = G__29656;
count__29641 = G__29657;
i__29642 = G__29658;
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
var args29659 = [];
var len__22721__auto___29662 = arguments.length;
var i__22722__auto___29663 = (0);
while(true){
if((i__22722__auto___29663 < len__22721__auto___29662)){
args29659.push((arguments[i__22722__auto___29663]));

var G__29664 = (i__22722__auto___29663 + (1));
i__22722__auto___29663 = G__29664;
continue;
} else {
}
break;
}

var G__29661 = args29659.length;
switch (G__29661) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29659.length)].join('')));

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
var len__22721__auto___29670 = arguments.length;
var i__22722__auto___29671 = (0);
while(true){
if((i__22722__auto___29671 < len__22721__auto___29670)){
args__22728__auto__.push((arguments[i__22722__auto___29671]));

var G__29672 = (i__22722__auto___29671 + (1));
i__22722__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((0) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22729__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29667){
var map__29668 = p__29667;
var map__29668__$1 = ((((!((map__29668 == null)))?((((map__29668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29668):map__29668);
var opts = map__29668__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29666){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29666));
});

//# sourceMappingURL=client.js.map