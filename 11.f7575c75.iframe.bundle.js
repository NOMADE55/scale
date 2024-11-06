/*! For license information please see 11.f7575c75.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"../../node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("../../node_modules/core-js/internals/global.js"),trim=__webpack_require__("../../node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("../../node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,hex=/^[+-]?0[Xx]/,FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16");module.exports=FORCED?function parseInt(string,radix){var S=trim(String(string));return $parseInt(S,radix>>>0||(hex.test(S)?16:10))}:$parseInt},"../../node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),parseIntImplementation=__webpack_require__("../../node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=parseIntImplementation},{parseInt:parseIntImplementation})},"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-segment.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_segment",(function(){return Segment}));__webpack_require__("../../node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../components/dist/esm/utils-c4af5b47.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var i=0,Segment=function(){function Segment(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Segment),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.i)(this,hostRef),this.scaleClick=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.e)(this,"scale-click",7),this.scaleClickLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.e)(this,"scaleClick",7),this.size="small",this.selected=!1,this.disabled=!1,this.segmentId="segment-"+i++,this.ariaLangSelected="selected",this.ariaLangDeselected="deselected",this.ariaDescriptionTranslation="$selected",this.handleClick=function(event){parseInt(_this.selectedIndex,10)+1!==_this.position&&(event.preventDefault(),_this.selected=!_this.selected,Object(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_12__.d)(_this,"scaleClick",{id:_this.segmentId,selected:_this.selected}))}}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Segment,[{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.focusableElement.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"componentWillLoad",value:function componentWillLoad(){this.handleIcon()}},{key:"componentWillUpdate",value:function componentWillUpdate(){this.handleIcon()}},{key:"getAriaDescriptionTranslation",value:function getAriaDescriptionTranslation(){var replaceSelected=this.selected?this.ariaLangSelected:this.ariaLangDeselected;return this.ariaDescriptionTranslation.replace(/\$position/g,""+this.position).replace(/\$selected/g,""+replaceSelected)}},{key:"handleIcon",value:function handleIcon(){var _this2=this;Array.from(this.hostElement.childNodes).forEach((function(child){if(1===child.nodeType&&"SCALE-ICON"===child.nodeName.substr(0,10)){var icon=_this2.hostElement.querySelector(child.nodeName);switch(_this2.size){case"small":icon.setAttribute("size","14");break;case"medium":icon.setAttribute("size","16");break;case"large":icon.setAttribute("size","20")}icon.style.display="inline-flex",icon.style.marginRight="4px",_this2.hasIcon=!0}if(3===child.nodeType&&1===_this2.hostElement.childNodes.length){_this2.textOnly=!0;var span=document.createElement("span");child.parentNode.insertBefore(span,child),span.appendChild(child)}if(1===child.nodeType&&"SCALE-ICON"===child.nodeName.substr(0,10)&&1===_this2.hostElement.childNodes.length){_this2.iconOnly=!0,_this2.hostElement.setAttribute("icon-only","true");var _icon=_this2.hostElement.querySelector(child.nodeName);_icon.style.marginRight="0px",_this2.selected?_icon.setAttribute("selected",""):_icon.removeAttribute("selected")}}))}},{key:"render",value:function render(){var _this3=this;return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.c,null,this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("button",{ref:function ref(el){return _this3.focusableElement=el},class:this.getCssClassMap(),id:this.segmentId,onClick:this.handleClick,disabled:this.disabled,type:"button",style:{width:this.width},"aria-label":this.ariaLabelSegment,"aria-pressed":this.selected,part:this.getBasePartMap(),"aria-description":this.getAriaDescriptionTranslation()},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("div",{class:"segment--mask"},!this.iconOnly&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("div",{class:"success-icon-container"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("scale-icon-action-checkmark",{size:"small"===this.size?14:"medium"===this.size?16:20,class:"scale-icon-action-checkmark","aria-hidden":"true",selected:!0})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("div",{class:"icon-container"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("slot",{name:"segment-icon"})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.g)("slot",null))))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"segment--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_11__.a)("segment",this.size&&""+prefix+this.size,this.selected&&prefix+"selected",this.disabled&&prefix+"disabled",this.adjacentSiblings&&""+prefix+this.adjacentSiblings.replace(/ /g,"-")+"-sibling-selected",this.hasIcon&&prefix+"has-icon",this.iconOnly&&prefix+"icon-only")}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_10__.f)(this)}}]),Segment}();Segment.style=":host{--background-color-selected:var(--telekom-color-ui-base);--button-radius:6px;--padding-top-bottom:var(--telekom-spacing-composition-space-03);--height:28px;--font:var(--telekom-text-style-caption-bold);--label-disabled:var(--telekom-color-text-and-icon-disabled);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-medium:var(--telekom-text-style-ui-bold);--height-medium:36px;--font-large:var(--telekom-text-style-ui-bold);--height-large:40px;--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-active:var(--telekom-color-ui-state-fill-pressed);display:flex;align-items:center;justify-content:center;flex:1}.segment{box-sizing:border-box;position:relative;border:0;height:100%;width:100%;border-radius:var(--button-radius);padding-top:var(--padding-top-bottom);padding-bottom:var(--padding-top-bottom);transition:var(--transition);background-color:transparent;padding:0}.segment--mask{box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:100%;border-radius:var(--button-radius);background-color:transparent;font:var(--font);transition:var(--transition);white-space:nowrap;color:var(--color);line-height:1}button.segment--small.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-04);padding-right:var(--telekom-spacing-composition-space-05)}button.segment--icon-only.segment--small .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--small .segment--mask{padding-left:0.625rem;padding-right:0.625rem}.segment--small{height:var(--height)}.segment--medium{height:var(--height-medium)}button.segment--medium.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-05);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--medium .segment--mask{font:var(--font-medium);padding-left:0.875rem;padding-right:0.875rem}.segment--large{height:var(--height-large)}button.segment--large.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}button.segment--large .segment--mask{font:var(--font-large);padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}.segment--selected{background-color:var(--background-color-selected);box-shadow:var(--telekom-shadow-raised-standard)}.segment--selected .segment--mask{color:var(--color-selected)}.segment--disabled.segment--selected .segment--mask{color:var(--label-disabled)}.segment--disabled:not(.segment--selected) .segment--mask{color:var(--label-disabled);background-color:transparent}.segment--left-sibling-selected{border-radius:0 var(--button-radius) var(--button-radius) 0;margin-left:0;clip-path:inset(-2.75rem -2.75rem -2.75rem 0);backface-visibility:hidden;overflow:hidden}.segment--right-sibling-selected{border-radius:var(--button-radius) 0 0 var(--button-radius);clip-path:inset(-2.75rem 0 -2.75rem -2.75rem);margin-right:0;backface-visibility:hidden;overflow:hidden;position:relative}.segment--left-right-sibling-selected{clip-path:inset(-2.75rem 0 -2.75rem 0);border-radius:0;margin-left:0;margin-right:0;backface-visibility:hidden}.segment:not(.segment--disabled):hover .segment--mask{background-color:var(--background-color-hover)}.segment:not(.segment--disabled):active .segment--mask{background-color:var(--background-color-active)}.segment:focus{box-shadow:var(--telekom-shadow-raised-standard);outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01);z-index:40;position:relative}.segment:not(.segment--selected):focus{outline-offset:0}.segment--left-right-sibling-selected:focus,.segment--right-sibling-selected:focus,.segment--left-sibling-selected:focus{clip-path:none}.segment:not(.segment--icon-only) scale-icon-action-checkmark,.segment scale-icon-action-close{margin-right:var(--telekom-spacing-composition-space-03)}.segment:not(.segment--selected) scale-icon-action-checkmark{visibility:hidden !important}.segment scale-icon-action-checkmark{vertical-align:middle}.segment--selected:not(.segment--icon-only) .icon-container{display:none !important}.segment .success-icon-container{display:none}.segment--selected .success-icon-container{display:flex;justify-content:center;align-items:center}.icon-container{height:100%;display:flex;justify-content:center;align-items:center}.segment--selected .icon-container{color:var(--color-selected)}"},"../components/dist/esm/utils-c4af5b47.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return animationsFinished})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"d",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"e",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"f",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isScaleIcon}));__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js");var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}var animationsFinished=function animationsFinished(el){return Promise.all(el.getAnimations({subtree:!0}).map((function(x){return x.finished})))}}}]);
//# sourceMappingURL=11.f7575c75.iframe.bundle.js.map