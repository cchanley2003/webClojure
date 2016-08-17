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
var pred__29537 = cljs.core._EQ_;
var expr__29538 = (function (){var or__21788__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29541){if((e29541 instanceof Error)){
var e = e29541;
return false;
} else {
throw e29541;

}
}})();
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29537.call(null,"true",expr__29538))){
return true;
} else {
if(cljs.core.truth_(pred__29537.call(null,"false",expr__29538))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29538)].join('')));
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
}catch (e29543){if((e29543 instanceof Error)){
var e = e29543;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29543;

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
var args__22866__auto__ = [];
var len__22859__auto___29545 = arguments.length;
var i__22860__auto___29546 = (0);
while(true){
if((i__22860__auto___29546 < len__22859__auto___29545)){
args__22866__auto__.push((arguments[i__22860__auto___29546]));

var G__29547 = (i__22860__auto___29546 + (1));
i__22860__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((0) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22867__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq29544){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29544));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29548){
var map__29551 = p__29548;
var map__29551__$1 = ((((!((map__29551 == null)))?((((map__29551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29551):map__29551);
var message = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21788__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21776__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21776__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21776__auto__;
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
var c__24908__auto___29713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___29713,ch){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___29713,ch){
return (function (state_29682){
var state_val_29683 = (state_29682[(1)]);
if((state_val_29683 === (7))){
var inst_29678 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29684_29714 = state_29682__$1;
(statearr_29684_29714[(2)] = inst_29678);

(statearr_29684_29714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (1))){
var state_29682__$1 = state_29682;
var statearr_29685_29715 = state_29682__$1;
(statearr_29685_29715[(2)] = null);

(statearr_29685_29715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (4))){
var inst_29635 = (state_29682[(7)]);
var inst_29635__$1 = (state_29682[(2)]);
var state_29682__$1 = (function (){var statearr_29686 = state_29682;
(statearr_29686[(7)] = inst_29635__$1);

return statearr_29686;
})();
if(cljs.core.truth_(inst_29635__$1)){
var statearr_29687_29716 = state_29682__$1;
(statearr_29687_29716[(1)] = (5));

} else {
var statearr_29688_29717 = state_29682__$1;
(statearr_29688_29717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (15))){
var inst_29642 = (state_29682[(8)]);
var inst_29657 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29642);
var inst_29658 = cljs.core.first.call(null,inst_29657);
var inst_29659 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29658);
var inst_29660 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29659)].join('');
var inst_29661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29660);
var state_29682__$1 = state_29682;
var statearr_29689_29718 = state_29682__$1;
(statearr_29689_29718[(2)] = inst_29661);

(statearr_29689_29718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (13))){
var inst_29666 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29690_29719 = state_29682__$1;
(statearr_29690_29719[(2)] = inst_29666);

(statearr_29690_29719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (6))){
var state_29682__$1 = state_29682;
var statearr_29691_29720 = state_29682__$1;
(statearr_29691_29720[(2)] = null);

(statearr_29691_29720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (17))){
var inst_29664 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29692_29721 = state_29682__$1;
(statearr_29692_29721[(2)] = inst_29664);

(statearr_29692_29721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (3))){
var inst_29680 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29682__$1,inst_29680);
} else {
if((state_val_29683 === (12))){
var inst_29641 = (state_29682[(9)]);
var inst_29655 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29641,opts);
var state_29682__$1 = state_29682;
if(cljs.core.truth_(inst_29655)){
var statearr_29693_29722 = state_29682__$1;
(statearr_29693_29722[(1)] = (15));

} else {
var statearr_29694_29723 = state_29682__$1;
(statearr_29694_29723[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (2))){
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29682__$1,(4),ch);
} else {
if((state_val_29683 === (11))){
var inst_29642 = (state_29682[(8)]);
var inst_29647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29648 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29642);
var inst_29649 = cljs.core.async.timeout.call(null,(1000));
var inst_29650 = [inst_29648,inst_29649];
var inst_29651 = (new cljs.core.PersistentVector(null,2,(5),inst_29647,inst_29650,null));
var state_29682__$1 = state_29682;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29682__$1,(14),inst_29651);
} else {
if((state_val_29683 === (9))){
var inst_29642 = (state_29682[(8)]);
var inst_29668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29669 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29642);
var inst_29670 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29669);
var inst_29671 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29670)].join('');
var inst_29672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29671);
var state_29682__$1 = (function (){var statearr_29695 = state_29682;
(statearr_29695[(10)] = inst_29668);

return statearr_29695;
})();
var statearr_29696_29724 = state_29682__$1;
(statearr_29696_29724[(2)] = inst_29672);

(statearr_29696_29724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (5))){
var inst_29635 = (state_29682[(7)]);
var inst_29637 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29638 = (new cljs.core.PersistentArrayMap(null,2,inst_29637,null));
var inst_29639 = (new cljs.core.PersistentHashSet(null,inst_29638,null));
var inst_29640 = figwheel.client.focus_msgs.call(null,inst_29639,inst_29635);
var inst_29641 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29640);
var inst_29642 = cljs.core.first.call(null,inst_29640);
var inst_29643 = figwheel.client.autoload_QMARK_.call(null);
var state_29682__$1 = (function (){var statearr_29697 = state_29682;
(statearr_29697[(8)] = inst_29642);

(statearr_29697[(9)] = inst_29641);

return statearr_29697;
})();
if(cljs.core.truth_(inst_29643)){
var statearr_29698_29725 = state_29682__$1;
(statearr_29698_29725[(1)] = (8));

} else {
var statearr_29699_29726 = state_29682__$1;
(statearr_29699_29726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (14))){
var inst_29653 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29700_29727 = state_29682__$1;
(statearr_29700_29727[(2)] = inst_29653);

(statearr_29700_29727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (16))){
var state_29682__$1 = state_29682;
var statearr_29701_29728 = state_29682__$1;
(statearr_29701_29728[(2)] = null);

(statearr_29701_29728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (10))){
var inst_29674 = (state_29682[(2)]);
var state_29682__$1 = (function (){var statearr_29702 = state_29682;
(statearr_29702[(11)] = inst_29674);

return statearr_29702;
})();
var statearr_29703_29729 = state_29682__$1;
(statearr_29703_29729[(2)] = null);

(statearr_29703_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (8))){
var inst_29641 = (state_29682[(9)]);
var inst_29645 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29641,opts);
var state_29682__$1 = state_29682;
if(cljs.core.truth_(inst_29645)){
var statearr_29704_29730 = state_29682__$1;
(statearr_29704_29730[(1)] = (11));

} else {
var statearr_29705_29731 = state_29682__$1;
(statearr_29705_29731[(1)] = (12));

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
});})(c__24908__auto___29713,ch))
;
return ((function (switch__24796__auto__,c__24908__auto___29713,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____0 = (function (){
var statearr_29709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29709[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__);

(statearr_29709[(1)] = (1));

return statearr_29709;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____1 = (function (state_29682){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_29682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e29710){if((e29710 instanceof Object)){
var ex__24800__auto__ = e29710;
var statearr_29711_29732 = state_29682;
(statearr_29711_29732[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29733 = state_29682;
state_29682 = G__29733;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__ = function(state_29682){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____1.call(this,state_29682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24797__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___29713,ch))
})();
var state__24910__auto__ = (function (){var statearr_29712 = f__24909__auto__.call(null);
(statearr_29712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___29713);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___29713,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29734_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29734_SHARP_));
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
var base_path_29741 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29741){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29739 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29740 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29740;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29739;
}}catch (e29738){if((e29738 instanceof Error)){
var e = e29738;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29741], null));
} else {
var e = e29738;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29741))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29742){
var map__29749 = p__29742;
var map__29749__$1 = ((((!((map__29749 == null)))?((((map__29749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29749):map__29749);
var opts = map__29749__$1;
var build_id = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29749,map__29749__$1,opts,build_id){
return (function (p__29751){
var vec__29752 = p__29751;
var map__29753 = cljs.core.nth.call(null,vec__29752,(0),null);
var map__29753__$1 = ((((!((map__29753 == null)))?((((map__29753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29753):map__29753);
var msg = map__29753__$1;
var msg_name = cljs.core.get.call(null,map__29753__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29752,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29752,map__29753,map__29753__$1,msg,msg_name,_,map__29749,map__29749__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29752,map__29753,map__29753__$1,msg,msg_name,_,map__29749,map__29749__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29749,map__29749__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29759){
var vec__29760 = p__29759;
var map__29761 = cljs.core.nth.call(null,vec__29760,(0),null);
var map__29761__$1 = ((((!((map__29761 == null)))?((((map__29761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29761):map__29761);
var msg = map__29761__$1;
var msg_name = cljs.core.get.call(null,map__29761__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29760,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29763){
var map__29773 = p__29763;
var map__29773__$1 = ((((!((map__29773 == null)))?((((map__29773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29773):map__29773);
var on_compile_warning = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29773,map__29773__$1,on_compile_warning,on_compile_fail){
return (function (p__29775){
var vec__29776 = p__29775;
var map__29777 = cljs.core.nth.call(null,vec__29776,(0),null);
var map__29777__$1 = ((((!((map__29777 == null)))?((((map__29777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var msg = map__29777__$1;
var msg_name = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29776,(1));
var pred__29779 = cljs.core._EQ_;
var expr__29780 = msg_name;
if(cljs.core.truth_(pred__29779.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29780))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29779.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29780))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29773,map__29773__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__,msg_hist,msg_names,msg){
return (function (state_29988){
var state_val_29989 = (state_29988[(1)]);
if((state_val_29989 === (7))){
var inst_29916 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29916)){
var statearr_29990_30036 = state_29988__$1;
(statearr_29990_30036[(1)] = (8));

} else {
var statearr_29991_30037 = state_29988__$1;
(statearr_29991_30037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (20))){
var inst_29982 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29992_30038 = state_29988__$1;
(statearr_29992_30038[(2)] = inst_29982);

(statearr_29992_30038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (27))){
var inst_29978 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29993_30039 = state_29988__$1;
(statearr_29993_30039[(2)] = inst_29978);

(statearr_29993_30039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (1))){
var inst_29909 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29909)){
var statearr_29994_30040 = state_29988__$1;
(statearr_29994_30040[(1)] = (2));

} else {
var statearr_29995_30041 = state_29988__$1;
(statearr_29995_30041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (24))){
var inst_29980 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29996_30042 = state_29988__$1;
(statearr_29996_30042[(2)] = inst_29980);

(statearr_29996_30042[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (4))){
var inst_29986 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29988__$1,inst_29986);
} else {
if((state_val_29989 === (15))){
var inst_29984 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29997_30043 = state_29988__$1;
(statearr_29997_30043[(2)] = inst_29984);

(statearr_29997_30043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (21))){
var inst_29943 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29998_30044 = state_29988__$1;
(statearr_29998_30044[(2)] = inst_29943);

(statearr_29998_30044[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (31))){
var inst_29967 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29967)){
var statearr_29999_30045 = state_29988__$1;
(statearr_29999_30045[(1)] = (34));

} else {
var statearr_30000_30046 = state_29988__$1;
(statearr_30000_30046[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (32))){
var inst_29976 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30001_30047 = state_29988__$1;
(statearr_30001_30047[(2)] = inst_29976);

(statearr_30001_30047[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (33))){
var inst_29965 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30002_30048 = state_29988__$1;
(statearr_30002_30048[(2)] = inst_29965);

(statearr_30002_30048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (13))){
var inst_29930 = figwheel.client.heads_up.clear.call(null);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(16),inst_29930);
} else {
if((state_val_29989 === (22))){
var inst_29947 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29948 = figwheel.client.heads_up.append_message.call(null,inst_29947);
var state_29988__$1 = state_29988;
var statearr_30003_30049 = state_29988__$1;
(statearr_30003_30049[(2)] = inst_29948);

(statearr_30003_30049[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (36))){
var inst_29974 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30004_30050 = state_29988__$1;
(statearr_30004_30050[(2)] = inst_29974);

(statearr_30004_30050[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (29))){
var inst_29958 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30005_30051 = state_29988__$1;
(statearr_30005_30051[(2)] = inst_29958);

(statearr_30005_30051[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (6))){
var inst_29911 = (state_29988[(7)]);
var state_29988__$1 = state_29988;
var statearr_30006_30052 = state_29988__$1;
(statearr_30006_30052[(2)] = inst_29911);

(statearr_30006_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (28))){
var inst_29954 = (state_29988[(2)]);
var inst_29955 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29956 = figwheel.client.heads_up.display_warning.call(null,inst_29955);
var state_29988__$1 = (function (){var statearr_30007 = state_29988;
(statearr_30007[(8)] = inst_29954);

return statearr_30007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(29),inst_29956);
} else {
if((state_val_29989 === (25))){
var inst_29952 = figwheel.client.heads_up.clear.call(null);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(28),inst_29952);
} else {
if((state_val_29989 === (34))){
var inst_29969 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(37),inst_29969);
} else {
if((state_val_29989 === (17))){
var inst_29936 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30008_30053 = state_29988__$1;
(statearr_30008_30053[(2)] = inst_29936);

(statearr_30008_30053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (3))){
var inst_29928 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29928)){
var statearr_30009_30054 = state_29988__$1;
(statearr_30009_30054[(1)] = (13));

} else {
var statearr_30010_30055 = state_29988__$1;
(statearr_30010_30055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (12))){
var inst_29924 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30011_30056 = state_29988__$1;
(statearr_30011_30056[(2)] = inst_29924);

(statearr_30011_30056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (2))){
var inst_29911 = (state_29988[(7)]);
var inst_29911__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29988__$1 = (function (){var statearr_30012 = state_29988;
(statearr_30012[(7)] = inst_29911__$1);

return statearr_30012;
})();
if(cljs.core.truth_(inst_29911__$1)){
var statearr_30013_30057 = state_29988__$1;
(statearr_30013_30057[(1)] = (5));

} else {
var statearr_30014_30058 = state_29988__$1;
(statearr_30014_30058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (23))){
var inst_29950 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29950)){
var statearr_30015_30059 = state_29988__$1;
(statearr_30015_30059[(1)] = (25));

} else {
var statearr_30016_30060 = state_29988__$1;
(statearr_30016_30060[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (35))){
var state_29988__$1 = state_29988;
var statearr_30017_30061 = state_29988__$1;
(statearr_30017_30061[(2)] = null);

(statearr_30017_30061[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (19))){
var inst_29945 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29945)){
var statearr_30018_30062 = state_29988__$1;
(statearr_30018_30062[(1)] = (22));

} else {
var statearr_30019_30063 = state_29988__$1;
(statearr_30019_30063[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (11))){
var inst_29920 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30020_30064 = state_29988__$1;
(statearr_30020_30064[(2)] = inst_29920);

(statearr_30020_30064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (9))){
var inst_29922 = figwheel.client.heads_up.clear.call(null);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(12),inst_29922);
} else {
if((state_val_29989 === (5))){
var inst_29913 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29988__$1 = state_29988;
var statearr_30021_30065 = state_29988__$1;
(statearr_30021_30065[(2)] = inst_29913);

(statearr_30021_30065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (14))){
var inst_29938 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29938)){
var statearr_30022_30066 = state_29988__$1;
(statearr_30022_30066[(1)] = (18));

} else {
var statearr_30023_30067 = state_29988__$1;
(statearr_30023_30067[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (26))){
var inst_29960 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29960)){
var statearr_30024_30068 = state_29988__$1;
(statearr_30024_30068[(1)] = (30));

} else {
var statearr_30025_30069 = state_29988__$1;
(statearr_30025_30069[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (16))){
var inst_29932 = (state_29988[(2)]);
var inst_29933 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29934 = figwheel.client.heads_up.display_exception.call(null,inst_29933);
var state_29988__$1 = (function (){var statearr_30026 = state_29988;
(statearr_30026[(9)] = inst_29932);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(17),inst_29934);
} else {
if((state_val_29989 === (30))){
var inst_29962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29963 = figwheel.client.heads_up.display_warning.call(null,inst_29962);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(33),inst_29963);
} else {
if((state_val_29989 === (10))){
var inst_29926 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30027_30070 = state_29988__$1;
(statearr_30027_30070[(2)] = inst_29926);

(statearr_30027_30070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (18))){
var inst_29940 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29941 = figwheel.client.heads_up.display_exception.call(null,inst_29940);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(21),inst_29941);
} else {
if((state_val_29989 === (37))){
var inst_29971 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30028_30071 = state_29988__$1;
(statearr_30028_30071[(2)] = inst_29971);

(statearr_30028_30071[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (8))){
var inst_29918 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(11),inst_29918);
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
});})(c__24908__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24796__auto__,c__24908__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____0 = (function (){
var statearr_30032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30032[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__);

(statearr_30032[(1)] = (1));

return statearr_30032;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____1 = (function (state_29988){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_29988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e30033){if((e30033 instanceof Object)){
var ex__24800__auto__ = e30033;
var statearr_30034_30072 = state_29988;
(statearr_30034_30072[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30073 = state_29988;
state_29988 = G__30073;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__ = function(state_29988){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____1.call(this,state_29988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__,msg_hist,msg_names,msg))
})();
var state__24910__auto__ = (function (){var statearr_30035 = f__24909__auto__.call(null);
(statearr_30035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_30035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__,msg_hist,msg_names,msg))
);

return c__24908__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24908__auto___30136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto___30136,ch){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto___30136,ch){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (1))){
var state_30119__$1 = state_30119;
var statearr_30121_30137 = state_30119__$1;
(statearr_30121_30137[(2)] = null);

(statearr_30121_30137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(4),ch);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (4))){
var inst_30107 = (state_30119[(7)]);
var inst_30107__$1 = (state_30119[(2)]);
var state_30119__$1 = (function (){var statearr_30122 = state_30119;
(statearr_30122[(7)] = inst_30107__$1);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30107__$1)){
var statearr_30123_30138 = state_30119__$1;
(statearr_30123_30138[(1)] = (5));

} else {
var statearr_30124_30139 = state_30119__$1;
(statearr_30124_30139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (5))){
var inst_30107 = (state_30119[(7)]);
var inst_30109 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30107);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(8),inst_30109);
} else {
if((state_val_30120 === (6))){
var state_30119__$1 = state_30119;
var statearr_30125_30140 = state_30119__$1;
(statearr_30125_30140[(2)] = null);

(statearr_30125_30140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (7))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30126_30141 = state_30119__$1;
(statearr_30126_30141[(2)] = inst_30115);

(statearr_30126_30141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (8))){
var inst_30111 = (state_30119[(2)]);
var state_30119__$1 = (function (){var statearr_30127 = state_30119;
(statearr_30127[(8)] = inst_30111);

return statearr_30127;
})();
var statearr_30128_30142 = state_30119__$1;
(statearr_30128_30142[(2)] = null);

(statearr_30128_30142[(1)] = (2));


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
});})(c__24908__auto___30136,ch))
;
return ((function (switch__24796__auto__,c__24908__auto___30136,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24797__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24797__auto____0 = (function (){
var statearr_30132 = [null,null,null,null,null,null,null,null,null];
(statearr_30132[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24797__auto__);

(statearr_30132[(1)] = (1));

return statearr_30132;
});
var figwheel$client$heads_up_plugin_$_state_machine__24797__auto____1 = (function (state_30119){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e30133){if((e30133 instanceof Object)){
var ex__24800__auto__ = e30133;
var statearr_30134_30143 = state_30119;
(statearr_30134_30143[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30144 = state_30119;
state_30119 = G__30144;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24797__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24797__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24797__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24797__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto___30136,ch))
})();
var state__24910__auto__ = (function (){var statearr_30135 = f__24909__auto__.call(null);
(statearr_30135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto___30136);

return statearr_30135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto___30136,ch))
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
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_30165){
var state_val_30166 = (state_30165[(1)]);
if((state_val_30166 === (1))){
var inst_30160 = cljs.core.async.timeout.call(null,(3000));
var state_30165__$1 = state_30165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30165__$1,(2),inst_30160);
} else {
if((state_val_30166 === (2))){
var inst_30162 = (state_30165[(2)]);
var inst_30163 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30165__$1 = (function (){var statearr_30167 = state_30165;
(statearr_30167[(7)] = inst_30162);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30165__$1,inst_30163);
} else {
return null;
}
}
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____0 = (function (){
var statearr_30171 = [null,null,null,null,null,null,null,null];
(statearr_30171[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__);

(statearr_30171[(1)] = (1));

return statearr_30171;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____1 = (function (state_30165){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_30165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e30172){if((e30172 instanceof Object)){
var ex__24800__auto__ = e30172;
var statearr_30173_30175 = state_30165;
(statearr_30173_30175[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30176 = state_30165;
state_30165 = G__30176;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__ = function(state_30165){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____1.call(this,state_30165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24797__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_30174 = f__24909__auto__.call(null);
(statearr_30174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_30174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30177){
var map__30184 = p__30177;
var map__30184__$1 = ((((!((map__30184 == null)))?((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184):map__30184);
var ed = map__30184__$1;
var formatted_exception = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30186_30190 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30187_30191 = null;
var count__30188_30192 = (0);
var i__30189_30193 = (0);
while(true){
if((i__30189_30193 < count__30188_30192)){
var msg_30194 = cljs.core._nth.call(null,chunk__30187_30191,i__30189_30193);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30194);

var G__30195 = seq__30186_30190;
var G__30196 = chunk__30187_30191;
var G__30197 = count__30188_30192;
var G__30198 = (i__30189_30193 + (1));
seq__30186_30190 = G__30195;
chunk__30187_30191 = G__30196;
count__30188_30192 = G__30197;
i__30189_30193 = G__30198;
continue;
} else {
var temp__4657__auto___30199 = cljs.core.seq.call(null,seq__30186_30190);
if(temp__4657__auto___30199){
var seq__30186_30200__$1 = temp__4657__auto___30199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30186_30200__$1)){
var c__22599__auto___30201 = cljs.core.chunk_first.call(null,seq__30186_30200__$1);
var G__30202 = cljs.core.chunk_rest.call(null,seq__30186_30200__$1);
var G__30203 = c__22599__auto___30201;
var G__30204 = cljs.core.count.call(null,c__22599__auto___30201);
var G__30205 = (0);
seq__30186_30190 = G__30202;
chunk__30187_30191 = G__30203;
count__30188_30192 = G__30204;
i__30189_30193 = G__30205;
continue;
} else {
var msg_30206 = cljs.core.first.call(null,seq__30186_30200__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30206);

var G__30207 = cljs.core.next.call(null,seq__30186_30200__$1);
var G__30208 = null;
var G__30209 = (0);
var G__30210 = (0);
seq__30186_30190 = G__30207;
chunk__30187_30191 = G__30208;
count__30188_30192 = G__30209;
i__30189_30193 = G__30210;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30211){
var map__30214 = p__30211;
var map__30214__$1 = ((((!((map__30214 == null)))?((((map__30214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30214):map__30214);
var w = map__30214__$1;
var message = cljs.core.get.call(null,map__30214__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21776__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21776__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21776__auto__;
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
var seq__30222 = cljs.core.seq.call(null,plugins);
var chunk__30223 = null;
var count__30224 = (0);
var i__30225 = (0);
while(true){
if((i__30225 < count__30224)){
var vec__30226 = cljs.core._nth.call(null,chunk__30223,i__30225);
var k = cljs.core.nth.call(null,vec__30226,(0),null);
var plugin = cljs.core.nth.call(null,vec__30226,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30228 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30222,chunk__30223,count__30224,i__30225,pl_30228,vec__30226,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30228.call(null,msg_hist);
});})(seq__30222,chunk__30223,count__30224,i__30225,pl_30228,vec__30226,k,plugin))
);
} else {
}

var G__30229 = seq__30222;
var G__30230 = chunk__30223;
var G__30231 = count__30224;
var G__30232 = (i__30225 + (1));
seq__30222 = G__30229;
chunk__30223 = G__30230;
count__30224 = G__30231;
i__30225 = G__30232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30222);
if(temp__4657__auto__){
var seq__30222__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30222__$1)){
var c__22599__auto__ = cljs.core.chunk_first.call(null,seq__30222__$1);
var G__30233 = cljs.core.chunk_rest.call(null,seq__30222__$1);
var G__30234 = c__22599__auto__;
var G__30235 = cljs.core.count.call(null,c__22599__auto__);
var G__30236 = (0);
seq__30222 = G__30233;
chunk__30223 = G__30234;
count__30224 = G__30235;
i__30225 = G__30236;
continue;
} else {
var vec__30227 = cljs.core.first.call(null,seq__30222__$1);
var k = cljs.core.nth.call(null,vec__30227,(0),null);
var plugin = cljs.core.nth.call(null,vec__30227,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30237 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30222,chunk__30223,count__30224,i__30225,pl_30237,vec__30227,k,plugin,seq__30222__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30237.call(null,msg_hist);
});})(seq__30222,chunk__30223,count__30224,i__30225,pl_30237,vec__30227,k,plugin,seq__30222__$1,temp__4657__auto__))
);
} else {
}

var G__30238 = cljs.core.next.call(null,seq__30222__$1);
var G__30239 = null;
var G__30240 = (0);
var G__30241 = (0);
seq__30222 = G__30238;
chunk__30223 = G__30239;
count__30224 = G__30240;
i__30225 = G__30241;
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
var args30242 = [];
var len__22859__auto___30245 = arguments.length;
var i__22860__auto___30246 = (0);
while(true){
if((i__22860__auto___30246 < len__22859__auto___30245)){
args30242.push((arguments[i__22860__auto___30246]));

var G__30247 = (i__22860__auto___30246 + (1));
i__22860__auto___30246 = G__30247;
continue;
} else {
}
break;
}

var G__30244 = args30242.length;
switch (G__30244) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30242.length)].join('')));

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
var args__22866__auto__ = [];
var len__22859__auto___30253 = arguments.length;
var i__22860__auto___30254 = (0);
while(true){
if((i__22860__auto___30254 < len__22859__auto___30253)){
args__22866__auto__.push((arguments[i__22860__auto___30254]));

var G__30255 = (i__22860__auto___30254 + (1));
i__22860__auto___30254 = G__30255;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((0) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22867__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30250){
var map__30251 = p__30250;
var map__30251__$1 = ((((!((map__30251 == null)))?((((map__30251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30251):map__30251);
var opts = map__30251__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30249){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30249));
});

//# sourceMappingURL=client.js.map