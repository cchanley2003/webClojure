// Compiled by ClojureScript 1.8.51 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__24331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24331__auto__,navigation){
return (function (){
var f__24332__auto__ = (function (){var switch__24219__auto__ = ((function (c__24331__auto__,navigation){
return (function (state_27147){
var state_val_27148 = (state_27147[(1)]);
if((state_val_27148 === (1))){
var state_27147__$1 = state_27147;
var statearr_27149_27163 = state_27147__$1;
(statearr_27149_27163[(2)] = null);

(statearr_27149_27163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (2))){
var state_27147__$1 = state_27147;
var statearr_27150_27164 = state_27147__$1;
(statearr_27150_27164[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (3))){
var inst_27145 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27147__$1,inst_27145);
} else {
if((state_val_27148 === (4))){
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27147__$1,(7),navigation);
} else {
if((state_val_27148 === (5))){
var state_27147__$1 = state_27147;
var statearr_27152_27165 = state_27147__$1;
(statearr_27152_27165[(2)] = null);

(statearr_27152_27165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (6))){
var inst_27143 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27153_27166 = state_27147__$1;
(statearr_27153_27166[(2)] = inst_27143);

(statearr_27153_27166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (7))){
var inst_27137 = (state_27147[(2)]);
var inst_27138 = inst_27137.token;
var inst_27139 = nav_handler.call(null,inst_27138);
var state_27147__$1 = (function (){var statearr_27154 = state_27147;
(statearr_27154[(7)] = inst_27139);

return statearr_27154;
})();
var statearr_27155_27167 = state_27147__$1;
(statearr_27155_27167[(2)] = null);

(statearr_27155_27167[(1)] = (2));


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
});})(c__24331__auto__,navigation))
;
return ((function (switch__24219__auto__,c__24331__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____0 = (function (){
var statearr_27159 = [null,null,null,null,null,null,null,null];
(statearr_27159[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__);

(statearr_27159[(1)] = (1));

return statearr_27159;
});
var accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____1 = (function (state_27147){
while(true){
var ret_value__24221__auto__ = (function (){try{while(true){
var result__24222__auto__ = switch__24219__auto__.call(null,state_27147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24222__auto__;
}
break;
}
}catch (e27160){if((e27160 instanceof Object)){
var ex__24223__auto__ = e27160;
var statearr_27161_27168 = state_27147;
(statearr_27161_27168[(5)] = ex__24223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27169 = state_27147;
state_27147 = G__27169;
continue;
} else {
return ret_value__24221__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__ = function(state_27147){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____1.call(this,state_27147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__24220__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__24220__auto__;
})()
;})(switch__24219__auto__,c__24331__auto__,navigation))
})();
var state__24333__auto__ = (function (){var statearr_27162 = f__24332__auto__.call(null);
(statearr_27162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24331__auto__);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24333__auto__);
});})(c__24331__auto__,navigation))
);

return c__24331__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4655__auto__ = e.href;
if(cljs.core.truth_(temp__4655__auto__)){
var href = temp__4655__auto__;
return href;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__27170 = parent;
e = G__27170;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url.call(null,history,token);
js_history.pushState(null,(function (){var or__21651__auto__ = title;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
var or__21651__auto____$1 = document.title;
if(cljs.core.truth_(or__21651__auto____$1)){
return or__21651__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_.call(null,fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__21651__auto__ = meta_key;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
var or__21651__auto____$1 = alt_key;
if(cljs.core.truth_(or__21651__auto____$1)){
return or__21651__auto____$1;
} else {
var or__21651__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__21651__auto____$2)){
return or__21651__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href.call(null,target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query.call(null,uri);
var fragment = accountant.core.uri__GT_fragment.call(null,uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__21639__auto__ = cljs.core.not.call(null,any_key);
if(and__21639__auto__){
var and__21639__auto____$1 = cljs.core._EQ_.call(null,button,(0));
if(and__21639__auto____$1){
var and__21639__auto____$2 = path_exists_QMARK_.call(null,path);
if(cljs.core.truth_(and__21639__auto____$2)){
return cljs.core._EQ_.call(null,host,current_host);
} else {
return and__21639__auto____$2;
}
} else {
return and__21639__auto____$1;
}
} else {
return and__21639__auto__;
}
})())){
accountant.core.set_token_BANG_.call(null,history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
}));
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__27171){
var map__27174 = p__27171;
var map__27174__$1 = ((((!((map__27174 == null)))?((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174):map__27174);
var nav_handler = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate.call(null,accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__27176_SHARP_){
return cljs.core.name.call(null,p1__27176_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__27177_SHARP_){
return clojure.string.join.call(null,"=",p1__27177_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args27178 = [];
var len__22721__auto___27181 = arguments.length;
var i__22722__auto___27182 = (0);
while(true){
if((i__22722__auto___27182 < len__22721__auto___27181)){
args27178.push((arguments[i__22722__auto___27182]));

var G__27183 = (i__22722__auto___27182 + (1));
i__22722__auto___27182 = G__27183;
continue;
} else {
}
break;
}

var G__27180 = args27178.length;
switch (G__27180) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27178.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
return accountant.core.nav_handler.call(null,[cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join(''));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

//# sourceMappingURL=core.js.map