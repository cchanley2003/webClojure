// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22866__auto__ = [];
var len__22859__auto___29234 = arguments.length;
var i__22860__auto___29235 = (0);
while(true){
if((i__22860__auto___29235 < len__22859__auto___29234)){
args__22866__auto__.push((arguments[i__22860__auto___29235]));

var G__29236 = (i__22860__auto___29235 + (1));
i__22860__auto___29235 = G__29236;
continue;
} else {
}
break;
}

var argseq__22867__auto__ = ((((2) < args__22866__auto__.length))?(new cljs.core.IndexedSeq(args__22866__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22867__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29226_29237 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29227_29238 = null;
var count__29228_29239 = (0);
var i__29229_29240 = (0);
while(true){
if((i__29229_29240 < count__29228_29239)){
var k_29241 = cljs.core._nth.call(null,chunk__29227_29238,i__29229_29240);
e.setAttribute(cljs.core.name.call(null,k_29241),cljs.core.get.call(null,attrs,k_29241));

var G__29242 = seq__29226_29237;
var G__29243 = chunk__29227_29238;
var G__29244 = count__29228_29239;
var G__29245 = (i__29229_29240 + (1));
seq__29226_29237 = G__29242;
chunk__29227_29238 = G__29243;
count__29228_29239 = G__29244;
i__29229_29240 = G__29245;
continue;
} else {
var temp__4657__auto___29246 = cljs.core.seq.call(null,seq__29226_29237);
if(temp__4657__auto___29246){
var seq__29226_29247__$1 = temp__4657__auto___29246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29226_29247__$1)){
var c__22599__auto___29248 = cljs.core.chunk_first.call(null,seq__29226_29247__$1);
var G__29249 = cljs.core.chunk_rest.call(null,seq__29226_29247__$1);
var G__29250 = c__22599__auto___29248;
var G__29251 = cljs.core.count.call(null,c__22599__auto___29248);
var G__29252 = (0);
seq__29226_29237 = G__29249;
chunk__29227_29238 = G__29250;
count__29228_29239 = G__29251;
i__29229_29240 = G__29252;
continue;
} else {
var k_29253 = cljs.core.first.call(null,seq__29226_29247__$1);
e.setAttribute(cljs.core.name.call(null,k_29253),cljs.core.get.call(null,attrs,k_29253));

var G__29254 = cljs.core.next.call(null,seq__29226_29247__$1);
var G__29255 = null;
var G__29256 = (0);
var G__29257 = (0);
seq__29226_29237 = G__29254;
chunk__29227_29238 = G__29255;
count__29228_29239 = G__29256;
i__29229_29240 = G__29257;
continue;
}
} else {
}
}
break;
}

var seq__29230_29258 = cljs.core.seq.call(null,children);
var chunk__29231_29259 = null;
var count__29232_29260 = (0);
var i__29233_29261 = (0);
while(true){
if((i__29233_29261 < count__29232_29260)){
var ch_29262 = cljs.core._nth.call(null,chunk__29231_29259,i__29233_29261);
e.appendChild(ch_29262);

var G__29263 = seq__29230_29258;
var G__29264 = chunk__29231_29259;
var G__29265 = count__29232_29260;
var G__29266 = (i__29233_29261 + (1));
seq__29230_29258 = G__29263;
chunk__29231_29259 = G__29264;
count__29232_29260 = G__29265;
i__29233_29261 = G__29266;
continue;
} else {
var temp__4657__auto___29267 = cljs.core.seq.call(null,seq__29230_29258);
if(temp__4657__auto___29267){
var seq__29230_29268__$1 = temp__4657__auto___29267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29230_29268__$1)){
var c__22599__auto___29269 = cljs.core.chunk_first.call(null,seq__29230_29268__$1);
var G__29270 = cljs.core.chunk_rest.call(null,seq__29230_29268__$1);
var G__29271 = c__22599__auto___29269;
var G__29272 = cljs.core.count.call(null,c__22599__auto___29269);
var G__29273 = (0);
seq__29230_29258 = G__29270;
chunk__29231_29259 = G__29271;
count__29232_29260 = G__29272;
i__29233_29261 = G__29273;
continue;
} else {
var ch_29274 = cljs.core.first.call(null,seq__29230_29268__$1);
e.appendChild(ch_29274);

var G__29275 = cljs.core.next.call(null,seq__29230_29268__$1);
var G__29276 = null;
var G__29277 = (0);
var G__29278 = (0);
seq__29230_29258 = G__29275;
chunk__29231_29259 = G__29276;
count__29232_29260 = G__29277;
i__29233_29261 = G__29278;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29223){
var G__29224 = cljs.core.first.call(null,seq29223);
var seq29223__$1 = cljs.core.next.call(null,seq29223);
var G__29225 = cljs.core.first.call(null,seq29223__$1);
var seq29223__$2 = cljs.core.next.call(null,seq29223__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29224,G__29225,seq29223__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22716__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22717__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22713__auto__,prefer_table__22714__auto__,method_cache__22715__auto__,cached_hierarchy__22716__auto__,hierarchy__22717__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22713__auto__,prefer_table__22714__auto__,method_cache__22715__auto__,cached_hierarchy__22716__auto__,hierarchy__22717__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22717__auto__,method_table__22713__auto__,prefer_table__22714__auto__,method_cache__22715__auto__,cached_hierarchy__22716__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29279 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29279.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29279.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29279.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29279);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29280,st_map){
var map__29285 = p__29280;
var map__29285__$1 = ((((!((map__29285 == null)))?((((map__29285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29285):map__29285);
var container_el = cljs.core.get.call(null,map__29285__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29285,map__29285__$1,container_el){
return (function (p__29287){
var vec__29288 = p__29287;
var k = cljs.core.nth.call(null,vec__29288,(0),null);
var v = cljs.core.nth.call(null,vec__29288,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29285,map__29285__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29289,dom_str){
var map__29292 = p__29289;
var map__29292__$1 = ((((!((map__29292 == null)))?((((map__29292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var c = map__29292__$1;
var content_area_el = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29294){
var map__29297 = p__29294;
var map__29297__$1 = ((((!((map__29297 == null)))?((((map__29297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29297):map__29297);
var content_area_el = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (1))){
var inst_29325 = (state_29340[(7)]);
var inst_29325__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29326 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29327 = ["10px","10px","100%","68px","1.0"];
var inst_29328 = cljs.core.PersistentHashMap.fromArrays(inst_29326,inst_29327);
var inst_29329 = cljs.core.merge.call(null,inst_29328,style);
var inst_29330 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29325__$1,inst_29329);
var inst_29331 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29325__$1,msg);
var inst_29332 = cljs.core.async.timeout.call(null,(300));
var state_29340__$1 = (function (){var statearr_29342 = state_29340;
(statearr_29342[(8)] = inst_29331);

(statearr_29342[(7)] = inst_29325__$1);

(statearr_29342[(9)] = inst_29330);

return statearr_29342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29340__$1,(2),inst_29332);
} else {
if((state_val_29341 === (2))){
var inst_29325 = (state_29340[(7)]);
var inst_29334 = (state_29340[(2)]);
var inst_29335 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29336 = ["auto"];
var inst_29337 = cljs.core.PersistentHashMap.fromArrays(inst_29335,inst_29336);
var inst_29338 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29325,inst_29337);
var state_29340__$1 = (function (){var statearr_29343 = state_29340;
(statearr_29343[(10)] = inst_29334);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29340__$1,inst_29338);
} else {
return null;
}
}
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____0 = (function (){
var statearr_29347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29347[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__);

(statearr_29347[(1)] = (1));

return statearr_29347;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____1 = (function (state_29340){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_29340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e29348){if((e29348 instanceof Object)){
var ex__24800__auto__ = e29348;
var statearr_29349_29351 = state_29340;
(statearr_29349_29351[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29352 = state_29340;
state_29340 = G__29352;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_29350 = f__24909__auto__.call(null);
(statearr_29350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_29350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args29353 = [];
var len__22859__auto___29356 = arguments.length;
var i__22860__auto___29357 = (0);
while(true){
if((i__22860__auto___29357 < len__22859__auto___29356)){
args29353.push((arguments[i__22860__auto___29357]));

var G__29358 = (i__22860__auto___29357 + (1));
i__22860__auto___29357 = G__29358;
continue;
} else {
}
break;
}

var G__29355 = args29353.length;
switch (G__29355) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29353.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29361 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__29361,(0),null);
var ln = cljs.core.nth.call(null,vec__29361,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29364 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29364,(0),null);
var file_line = cljs.core.nth.call(null,vec__29364,(1),null);
var file_column = cljs.core.nth.call(null,vec__29364,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29364,file_name,file_line,file_column){
return (function (p1__29362_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29362_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29364,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21788__auto__ = file_line;
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
var and__21776__auto__ = cause;
if(cljs.core.truth_(and__21776__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21776__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__29365){
var map__29368 = p__29365;
var map__29368__$1 = ((((!((map__29368 == null)))?((((map__29368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);
var ex = map__29368__$1;
var exception_data = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__21776__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__21776__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__21776__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__29370){
var map__29376 = p__29370;
var map__29376__$1 = ((((!((map__29376 == null)))?((((map__29376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29376):map__29376);
var ex = map__29376__$1;
var exception_data = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29376,map__29376__$1,ex,exception_data){
return (function (p__29378){
var map__29379 = p__29378;
var map__29379__$1 = ((((!((map__29379 == null)))?((((map__29379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29379):map__29379);
var exc = map__29379__$1;
var data = cljs.core.get.call(null,map__29379__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21776__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21776__auto__)){
return data;
} else {
return and__21776__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__29376,map__29376__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__21788__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__21788__auto__)){
return or__21788__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__29381){
var map__29387 = p__29381;
var map__29387__$1 = ((((!((map__29387 == null)))?((((map__29387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);
var ex = map__29387__$1;
var exception_data = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29387,map__29387__$1,ex,exception_data){
return (function (p__29389){
var map__29390 = p__29389;
var map__29390__$1 = ((((!((map__29390 == null)))?((((map__29390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);
var exc = map__29390__$1;
var data = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21776__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21776__auto__)){
return data;
} else {
return and__21776__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__29387,map__29387__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__29392){
var map__29396 = p__29392;
var map__29396__$1 = ((((!((map__29396 == null)))?((((map__29396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var ex = map__29396__$1;
var reader_exception = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__21776__auto__ = reader_exception;
if(cljs.core.truth_(and__21776__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__21776__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__29398 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__29398,(0),null);
var line = cljs.core.nth.call(null,vec__29398,(1),null);
var column = cljs.core.nth.call(null,vec__29398,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__29399){
var map__29405 = p__29399;
var map__29405__$1 = ((((!((map__29405 == null)))?((((map__29405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29405):map__29405);
var ex = map__29405__$1;
var exception_data = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__29407 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__29407__$1 = ((((!((map__29407 == null)))?((((map__29407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29407):map__29407);
var file = cljs.core.get.call(null,map__29407__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__29409 = ex;
var G__29409__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__29409):G__29409);
var G__29409__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__29409__$1):G__29409__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__29409__$2);
} else {
return G__29409__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__29410){
var map__29413 = p__29410;
var map__29413__$1 = ((((!((map__29413 == null)))?((((map__29413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var ex = map__29413__$1;
var message = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21776__auto__ = file;
if(cljs.core.truth_(and__21776__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__21776__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__29417){
var map__29420 = p__29417;
var map__29420__$1 = ((((!((map__29420 == null)))?((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var exception = map__29420__$1;
var failed_compiling = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__21776__auto__ = file;
if(cljs.core.truth_(and__21776__auto__)){
return line;
} else {
return and__21776__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__29420,map__29420__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__29415_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29415_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__29420,map__29420__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__29420,map__29420__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__29416_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__29416_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__29416_SHARP_)))].join('');
});})(last_message,map__29420,map__29420__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__29425 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__29425__$1 = ((((!((map__29425 == null)))?((((map__29425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29425):map__29425);
var head = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29429 = figwheel.client.heads_up.ensure_container.call(null);
var map__29429__$1 = ((((!((map__29429 == null)))?((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29429):map__29429);
var content_area_el = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_29477){
var state_val_29478 = (state_29477[(1)]);
if((state_val_29478 === (1))){
var inst_29460 = (state_29477[(7)]);
var inst_29460__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29461 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29462 = ["0.0"];
var inst_29463 = cljs.core.PersistentHashMap.fromArrays(inst_29461,inst_29462);
var inst_29464 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29460__$1,inst_29463);
var inst_29465 = cljs.core.async.timeout.call(null,(300));
var state_29477__$1 = (function (){var statearr_29479 = state_29477;
(statearr_29479[(7)] = inst_29460__$1);

(statearr_29479[(8)] = inst_29464);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29477__$1,(2),inst_29465);
} else {
if((state_val_29478 === (2))){
var inst_29460 = (state_29477[(7)]);
var inst_29467 = (state_29477[(2)]);
var inst_29468 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29469 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29470 = cljs.core.PersistentHashMap.fromArrays(inst_29468,inst_29469);
var inst_29471 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29460,inst_29470);
var inst_29472 = cljs.core.async.timeout.call(null,(200));
var state_29477__$1 = (function (){var statearr_29480 = state_29477;
(statearr_29480[(9)] = inst_29467);

(statearr_29480[(10)] = inst_29471);

return statearr_29480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29477__$1,(3),inst_29472);
} else {
if((state_val_29478 === (3))){
var inst_29460 = (state_29477[(7)]);
var inst_29474 = (state_29477[(2)]);
var inst_29475 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29460,"");
var state_29477__$1 = (function (){var statearr_29481 = state_29477;
(statearr_29481[(11)] = inst_29474);

return statearr_29481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29477__$1,inst_29475);
} else {
return null;
}
}
}
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24797__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24797__auto____0 = (function (){
var statearr_29485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29485[(0)] = figwheel$client$heads_up$clear_$_state_machine__24797__auto__);

(statearr_29485[(1)] = (1));

return statearr_29485;
});
var figwheel$client$heads_up$clear_$_state_machine__24797__auto____1 = (function (state_29477){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_29477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e29486){if((e29486 instanceof Object)){
var ex__24800__auto__ = e29486;
var statearr_29487_29489 = state_29477;
(statearr_29487_29489[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29490 = state_29477;
state_29477 = G__29490;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24797__auto__ = function(state_29477){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24797__auto____1.call(this,state_29477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24797__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24797__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_29488 = f__24909__auto__.call(null);
(statearr_29488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_29488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24908__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24908__auto__){
return (function (){
var f__24909__auto__ = (function (){var switch__24796__auto__ = ((function (c__24908__auto__){
return (function (state_29522){
var state_val_29523 = (state_29522[(1)]);
if((state_val_29523 === (1))){
var inst_29512 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29522__$1 = state_29522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29522__$1,(2),inst_29512);
} else {
if((state_val_29523 === (2))){
var inst_29514 = (state_29522[(2)]);
var inst_29515 = cljs.core.async.timeout.call(null,(400));
var state_29522__$1 = (function (){var statearr_29524 = state_29522;
(statearr_29524[(7)] = inst_29514);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29522__$1,(3),inst_29515);
} else {
if((state_val_29523 === (3))){
var inst_29517 = (state_29522[(2)]);
var inst_29518 = figwheel.client.heads_up.clear.call(null);
var state_29522__$1 = (function (){var statearr_29525 = state_29522;
(statearr_29525[(8)] = inst_29517);

return statearr_29525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29522__$1,(4),inst_29518);
} else {
if((state_val_29523 === (4))){
var inst_29520 = (state_29522[(2)]);
var state_29522__$1 = state_29522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29522__$1,inst_29520);
} else {
return null;
}
}
}
}
});})(c__24908__auto__))
;
return ((function (switch__24796__auto__,c__24908__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____0 = (function (){
var statearr_29529 = [null,null,null,null,null,null,null,null,null];
(statearr_29529[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__);

(statearr_29529[(1)] = (1));

return statearr_29529;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____1 = (function (state_29522){
while(true){
var ret_value__24798__auto__ = (function (){try{while(true){
var result__24799__auto__ = switch__24796__auto__.call(null,state_29522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24799__auto__;
}
break;
}
}catch (e29530){if((e29530 instanceof Object)){
var ex__24800__auto__ = e29530;
var statearr_29531_29533 = state_29522;
(statearr_29531_29533[(5)] = ex__24800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29534 = state_29522;
state_29522 = G__29534;
continue;
} else {
return ret_value__24798__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__ = function(state_29522){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____1.call(this,state_29522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24797__auto__;
})()
;})(switch__24796__auto__,c__24908__auto__))
})();
var state__24910__auto__ = (function (){var statearr_29532 = f__24909__auto__.call(null);
(statearr_29532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24908__auto__);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24910__auto__);
});})(c__24908__auto__))
);

return c__24908__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map