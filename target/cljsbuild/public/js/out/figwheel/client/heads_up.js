// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22728__auto__ = [];
var len__22721__auto___28651 = arguments.length;
var i__22722__auto___28652 = (0);
while(true){
if((i__22722__auto___28652 < len__22721__auto___28651)){
args__22728__auto__.push((arguments[i__22722__auto___28652]));

var G__28653 = (i__22722__auto___28652 + (1));
i__22722__auto___28652 = G__28653;
continue;
} else {
}
break;
}

var argseq__22729__auto__ = ((((2) < args__22728__auto__.length))?(new cljs.core.IndexedSeq(args__22728__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22729__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28643_28654 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28644_28655 = null;
var count__28645_28656 = (0);
var i__28646_28657 = (0);
while(true){
if((i__28646_28657 < count__28645_28656)){
var k_28658 = cljs.core._nth.call(null,chunk__28644_28655,i__28646_28657);
e.setAttribute(cljs.core.name.call(null,k_28658),cljs.core.get.call(null,attrs,k_28658));

var G__28659 = seq__28643_28654;
var G__28660 = chunk__28644_28655;
var G__28661 = count__28645_28656;
var G__28662 = (i__28646_28657 + (1));
seq__28643_28654 = G__28659;
chunk__28644_28655 = G__28660;
count__28645_28656 = G__28661;
i__28646_28657 = G__28662;
continue;
} else {
var temp__4657__auto___28663 = cljs.core.seq.call(null,seq__28643_28654);
if(temp__4657__auto___28663){
var seq__28643_28664__$1 = temp__4657__auto___28663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28643_28664__$1)){
var c__22462__auto___28665 = cljs.core.chunk_first.call(null,seq__28643_28664__$1);
var G__28666 = cljs.core.chunk_rest.call(null,seq__28643_28664__$1);
var G__28667 = c__22462__auto___28665;
var G__28668 = cljs.core.count.call(null,c__22462__auto___28665);
var G__28669 = (0);
seq__28643_28654 = G__28666;
chunk__28644_28655 = G__28667;
count__28645_28656 = G__28668;
i__28646_28657 = G__28669;
continue;
} else {
var k_28670 = cljs.core.first.call(null,seq__28643_28664__$1);
e.setAttribute(cljs.core.name.call(null,k_28670),cljs.core.get.call(null,attrs,k_28670));

var G__28671 = cljs.core.next.call(null,seq__28643_28664__$1);
var G__28672 = null;
var G__28673 = (0);
var G__28674 = (0);
seq__28643_28654 = G__28671;
chunk__28644_28655 = G__28672;
count__28645_28656 = G__28673;
i__28646_28657 = G__28674;
continue;
}
} else {
}
}
break;
}

var seq__28647_28675 = cljs.core.seq.call(null,children);
var chunk__28648_28676 = null;
var count__28649_28677 = (0);
var i__28650_28678 = (0);
while(true){
if((i__28650_28678 < count__28649_28677)){
var ch_28679 = cljs.core._nth.call(null,chunk__28648_28676,i__28650_28678);
e.appendChild(ch_28679);

var G__28680 = seq__28647_28675;
var G__28681 = chunk__28648_28676;
var G__28682 = count__28649_28677;
var G__28683 = (i__28650_28678 + (1));
seq__28647_28675 = G__28680;
chunk__28648_28676 = G__28681;
count__28649_28677 = G__28682;
i__28650_28678 = G__28683;
continue;
} else {
var temp__4657__auto___28684 = cljs.core.seq.call(null,seq__28647_28675);
if(temp__4657__auto___28684){
var seq__28647_28685__$1 = temp__4657__auto___28684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647_28685__$1)){
var c__22462__auto___28686 = cljs.core.chunk_first.call(null,seq__28647_28685__$1);
var G__28687 = cljs.core.chunk_rest.call(null,seq__28647_28685__$1);
var G__28688 = c__22462__auto___28686;
var G__28689 = cljs.core.count.call(null,c__22462__auto___28686);
var G__28690 = (0);
seq__28647_28675 = G__28687;
chunk__28648_28676 = G__28688;
count__28649_28677 = G__28689;
i__28650_28678 = G__28690;
continue;
} else {
var ch_28691 = cljs.core.first.call(null,seq__28647_28685__$1);
e.appendChild(ch_28691);

var G__28692 = cljs.core.next.call(null,seq__28647_28685__$1);
var G__28693 = null;
var G__28694 = (0);
var G__28695 = (0);
seq__28647_28675 = G__28692;
chunk__28648_28676 = G__28693;
count__28649_28677 = G__28694;
i__28650_28678 = G__28695;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28640){
var G__28641 = cljs.core.first.call(null,seq28640);
var seq28640__$1 = cljs.core.next.call(null,seq28640);
var G__28642 = cljs.core.first.call(null,seq28640__$1);
var seq28640__$2 = cljs.core.next.call(null,seq28640__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28641,G__28642,seq28640__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22576__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22577__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22578__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22579__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22580__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22576__auto__,prefer_table__22577__auto__,method_cache__22578__auto__,cached_hierarchy__22579__auto__,hierarchy__22580__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22576__auto__,prefer_table__22577__auto__,method_cache__22578__auto__,cached_hierarchy__22579__auto__,hierarchy__22580__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22580__auto__,method_table__22576__auto__,prefer_table__22577__auto__,method_cache__22578__auto__,cached_hierarchy__22579__auto__));
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
var el_28696 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28696.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28696.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28696.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28696);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28697,st_map){
var map__28702 = p__28697;
var map__28702__$1 = ((((!((map__28702 == null)))?((((map__28702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);
var container_el = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28702,map__28702__$1,container_el){
return (function (p__28704){
var vec__28705 = p__28704;
var k = cljs.core.nth.call(null,vec__28705,(0),null);
var v = cljs.core.nth.call(null,vec__28705,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28702,map__28702__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28706,dom_str){
var map__28709 = p__28706;
var map__28709__$1 = ((((!((map__28709 == null)))?((((map__28709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28709):map__28709);
var c = map__28709__$1;
var content_area_el = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28711){
var map__28714 = p__28711;
var map__28714__$1 = ((((!((map__28714 == null)))?((((map__28714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);
var content_area_el = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_28757){
var state_val_28758 = (state_28757[(1)]);
if((state_val_28758 === (1))){
var inst_28742 = (state_28757[(7)]);
var inst_28742__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28743 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28744 = ["10px","10px","100%","68px","1.0"];
var inst_28745 = cljs.core.PersistentHashMap.fromArrays(inst_28743,inst_28744);
var inst_28746 = cljs.core.merge.call(null,inst_28745,style);
var inst_28747 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28742__$1,inst_28746);
var inst_28748 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28742__$1,msg);
var inst_28749 = cljs.core.async.timeout.call(null,(300));
var state_28757__$1 = (function (){var statearr_28759 = state_28757;
(statearr_28759[(8)] = inst_28748);

(statearr_28759[(7)] = inst_28742__$1);

(statearr_28759[(9)] = inst_28747);

return statearr_28759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28757__$1,(2),inst_28749);
} else {
if((state_val_28758 === (2))){
var inst_28742 = (state_28757[(7)]);
var inst_28751 = (state_28757[(2)]);
var inst_28752 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28753 = ["auto"];
var inst_28754 = cljs.core.PersistentHashMap.fromArrays(inst_28752,inst_28753);
var inst_28755 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28742,inst_28754);
var state_28757__$1 = (function (){var statearr_28760 = state_28757;
(statearr_28760[(10)] = inst_28751);

return statearr_28760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28757__$1,inst_28755);
} else {
return null;
}
}
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____0 = (function (){
var statearr_28764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28764[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__);

(statearr_28764[(1)] = (1));

return statearr_28764;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____1 = (function (state_28757){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_28757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e28765){if((e28765 instanceof Object)){
var ex__24284__auto__ = e28765;
var statearr_28766_28768 = state_28757;
(statearr_28766_28768[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28769 = state_28757;
state_28757 = G__28769;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__ = function(state_28757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____1.call(this,state_28757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_28767 = f__24393__auto__.call(null);
(statearr_28767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_28767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args28770 = [];
var len__22721__auto___28773 = arguments.length;
var i__22722__auto___28774 = (0);
while(true){
if((i__22722__auto___28774 < len__22721__auto___28773)){
args28770.push((arguments[i__22722__auto___28774]));

var G__28775 = (i__22722__auto___28774 + (1));
i__22722__auto___28774 = G__28775;
continue;
} else {
}
break;
}

var G__28772 = args28770.length;
switch (G__28772) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28770.length)].join('')));

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
var vec__28778 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__28778,(0),null);
var ln = cljs.core.nth.call(null,vec__28778,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28781 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28781,(0),null);
var file_line = cljs.core.nth.call(null,vec__28781,(1),null);
var file_column = cljs.core.nth.call(null,vec__28781,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28781,file_name,file_line,file_column){
return (function (p1__28779_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28779_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28781,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21651__auto__ = file_line;
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
var and__21639__auto__ = cause;
if(cljs.core.truth_(and__21639__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21639__auto__;
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
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__28782){
var map__28785 = p__28782;
var map__28785__$1 = ((((!((map__28785 == null)))?((((map__28785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28785):map__28785);
var ex = map__28785__$1;
var exception_data = cljs.core.get.call(null,map__28785__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__21639__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__21639__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__28787){
var map__28793 = p__28787;
var map__28793__$1 = ((((!((map__28793 == null)))?((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var ex = map__28793__$1;
var exception_data = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28793,map__28793__$1,ex,exception_data){
return (function (p__28795){
var map__28796 = p__28795;
var map__28796__$1 = ((((!((map__28796 == null)))?((((map__28796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);
var exc = map__28796__$1;
var data = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21639__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21639__auto__)){
return data;
} else {
return and__21639__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__28793,map__28793__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__21651__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__21651__auto__)){
return or__21651__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__28798){
var map__28804 = p__28798;
var map__28804__$1 = ((((!((map__28804 == null)))?((((map__28804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var ex = map__28804__$1;
var exception_data = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28804,map__28804__$1,ex,exception_data){
return (function (p__28806){
var map__28807 = p__28806;
var map__28807__$1 = ((((!((map__28807 == null)))?((((map__28807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28807):map__28807);
var exc = map__28807__$1;
var data = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21639__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21639__auto__)){
return data;
} else {
return and__21639__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__28804,map__28804__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__28809){
var map__28813 = p__28809;
var map__28813__$1 = ((((!((map__28813 == null)))?((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28813):map__28813);
var ex = map__28813__$1;
var reader_exception = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__21639__auto__ = reader_exception;
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__21639__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__28815 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__28815,(0),null);
var line = cljs.core.nth.call(null,vec__28815,(1),null);
var column = cljs.core.nth.call(null,vec__28815,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__28816){
var map__28822 = p__28816;
var map__28822__$1 = ((((!((map__28822 == null)))?((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var ex = map__28822__$1;
var exception_data = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__28824 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__28824__$1 = ((((!((map__28824 == null)))?((((map__28824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);
var file = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__28826 = ex;
var G__28826__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__28826):G__28826);
var G__28826__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__28826__$1):G__28826__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__28826__$2);
} else {
return G__28826__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__28827){
var map__28830 = p__28827;
var map__28830__$1 = ((((!((map__28830 == null)))?((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var ex = map__28830__$1;
var message = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21639__auto__ = file;
if(cljs.core.truth_(and__21639__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__21639__auto__;
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
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__28834){
var map__28837 = p__28834;
var map__28837__$1 = ((((!((map__28837 == null)))?((((map__28837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28837):map__28837);
var exception = map__28837__$1;
var failed_compiling = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__21639__auto__ = file;
if(cljs.core.truth_(and__21639__auto__)){
return line;
} else {
return and__21639__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__28837,map__28837__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__28832_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28832_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__28837,map__28837__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__28837,map__28837__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__28833_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__28833_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__28833_SHARP_)))].join('');
});})(last_message,map__28837,map__28837__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__28842 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__28842__$1 = ((((!((map__28842 == null)))?((((map__28842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28842):map__28842);
var head = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var map__28846 = figwheel.client.heads_up.ensure_container.call(null);
var map__28846__$1 = ((((!((map__28846 == null)))?((((map__28846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846):map__28846);
var content_area_el = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_28894){
var state_val_28895 = (state_28894[(1)]);
if((state_val_28895 === (1))){
var inst_28877 = (state_28894[(7)]);
var inst_28877__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28878 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28879 = ["0.0"];
var inst_28880 = cljs.core.PersistentHashMap.fromArrays(inst_28878,inst_28879);
var inst_28881 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28877__$1,inst_28880);
var inst_28882 = cljs.core.async.timeout.call(null,(300));
var state_28894__$1 = (function (){var statearr_28896 = state_28894;
(statearr_28896[(7)] = inst_28877__$1);

(statearr_28896[(8)] = inst_28881);

return statearr_28896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(2),inst_28882);
} else {
if((state_val_28895 === (2))){
var inst_28877 = (state_28894[(7)]);
var inst_28884 = (state_28894[(2)]);
var inst_28885 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28886 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28887 = cljs.core.PersistentHashMap.fromArrays(inst_28885,inst_28886);
var inst_28888 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28877,inst_28887);
var inst_28889 = cljs.core.async.timeout.call(null,(200));
var state_28894__$1 = (function (){var statearr_28897 = state_28894;
(statearr_28897[(9)] = inst_28888);

(statearr_28897[(10)] = inst_28884);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(3),inst_28889);
} else {
if((state_val_28895 === (3))){
var inst_28877 = (state_28894[(7)]);
var inst_28891 = (state_28894[(2)]);
var inst_28892 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28877,"");
var state_28894__$1 = (function (){var statearr_28898 = state_28894;
(statearr_28898[(11)] = inst_28891);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28894__$1,inst_28892);
} else {
return null;
}
}
}
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24281__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24281__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = figwheel$client$heads_up$clear_$_state_machine__24281__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var figwheel$client$heads_up$clear_$_state_machine__24281__auto____1 = (function (state_28894){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_28894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__24284__auto__ = e28903;
var statearr_28904_28906 = state_28894;
(statearr_28904_28906[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28907 = state_28894;
state_28894 = G__28907;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24281__auto__ = function(state_28894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24281__auto____1.call(this,state_28894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24281__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24281__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_28905 = f__24393__auto__.call(null);
(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24392__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24392__auto__){
return (function (){
var f__24393__auto__ = (function (){var switch__24280__auto__ = ((function (c__24392__auto__){
return (function (state_28939){
var state_val_28940 = (state_28939[(1)]);
if((state_val_28940 === (1))){
var inst_28929 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(2),inst_28929);
} else {
if((state_val_28940 === (2))){
var inst_28931 = (state_28939[(2)]);
var inst_28932 = cljs.core.async.timeout.call(null,(400));
var state_28939__$1 = (function (){var statearr_28941 = state_28939;
(statearr_28941[(7)] = inst_28931);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(3),inst_28932);
} else {
if((state_val_28940 === (3))){
var inst_28934 = (state_28939[(2)]);
var inst_28935 = figwheel.client.heads_up.clear.call(null);
var state_28939__$1 = (function (){var statearr_28942 = state_28939;
(statearr_28942[(8)] = inst_28934);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(4),inst_28935);
} else {
if((state_val_28940 === (4))){
var inst_28937 = (state_28939[(2)]);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28939__$1,inst_28937);
} else {
return null;
}
}
}
}
});})(c__24392__auto__))
;
return ((function (switch__24280__auto__,c__24392__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____0 = (function (){
var statearr_28946 = [null,null,null,null,null,null,null,null,null];
(statearr_28946[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__);

(statearr_28946[(1)] = (1));

return statearr_28946;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____1 = (function (state_28939){
while(true){
var ret_value__24282__auto__ = (function (){try{while(true){
var result__24283__auto__ = switch__24280__auto__.call(null,state_28939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24283__auto__;
}
break;
}
}catch (e28947){if((e28947 instanceof Object)){
var ex__24284__auto__ = e28947;
var statearr_28948_28950 = state_28939;
(statearr_28948_28950[(5)] = ex__24284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28939;
state_28939 = G__28951;
continue;
} else {
return ret_value__24282__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__ = function(state_28939){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____1.call(this,state_28939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24281__auto__;
})()
;})(switch__24280__auto__,c__24392__auto__))
})();
var state__24394__auto__ = (function (){var statearr_28949 = f__24393__auto__.call(null);
(statearr_28949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24392__auto__);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24394__auto__);
});})(c__24392__auto__))
);

return c__24392__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map