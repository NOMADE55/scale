/*! For license information please see 34.d7c7da31.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-chip.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_chip",(function(){return Chip}));__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/utils-c4af5b47.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Chip=function(){function Chip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Chip),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.i)(this,hostRef),this.scaleChange=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"scale-change",7),this.scaleChangeLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"scaleChange",7),this.scaleClose=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"scale-close",7),this.scaleCloseLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"scaleClose",7),this.variant="standard",this.type="persistent",this.selected=!1,this.ariaRoleTitle="switch",this.ariaCheckedState=!1,this.disabled=!1,this.dismissText="dismiss",this.handleClose=function(event){event.preventDefault(),event.stopPropagation(),Object(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_6__.d)(_this,"scaleClose",event)},this.handleClick=function(event){_this.handleChange(event)},this.handleKeyDown=function(event){"Space"===event.code&&_this.handleChange(event)},this.handleChange=function(event){event.preventDefault(),event.stopPropagation(),_this.disabled||"dynamic"===_this.type||(_this.selected=!_this.selected,Object(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_6__.d)(_this,"scaleChange",event))}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Chip,[{key:"componentDidRender",value:function componentDidRender(){var iconSlot=this.hostElement.querySelector('[slot="chip-icon"]');null!==iconSlot&&(iconSlot.children[0].getAttribute("size")===String(24)&&iconSlot.children[0].setAttribute("size",String(16)),this.selected?iconSlot.children[0].setAttribute("selected",String(!0)):iconSlot.children[0].setAttribute("selected",String(!1)))}},{key:"disconnectedCallback",value:function disconnectedCallback(){}},{key:"getIcon",value:function getIcon(){return"dynamic"===this.type&&this.selected?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("button",{part:"button-dismissable",disabled:this.disabled,"aria-label":this.dismissText,onClick:this.disabled?null:this.handleClose},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("scale-icon-action-close",{"accessibility-title":"close",size:16,selected:!0})):"persistent"===this.type&&this.selected?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("scale-icon-action-checkmark",{"accessibility-title":"success",size:16,selected:!0}):"persistent"===this.type?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("scale-icon-action-checkmark",{"accessibility-title":"success",size:16}):void 0}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.c,null,this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("span",{role:this.ariaRoleTitle,"aria-checked":this.selected.toString(),tabindex:this.disabled?"-1":"0",part:this.getBasePartMap(),class:this.getCssClassMap(),onClick:this.handleClick,onKeyDown:this.handleKeyDown},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("slot",{name:"chip-icon"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("span",{class:"chip-label"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.g)("slot",null)),this.selected?this.getIcon():null))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"chip--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_5__.a)("basePart"===mode?"base":"chip",!!this.selected&&prefix+"selected",!!this.disabled&&prefix+"disabled",this.type&&prefix+"type-"+this.type,this.variant&&prefix+"variant-"+this.variant)}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_4__.f)(this)}}]),Chip}();Chip.style=":host{--height:32px;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--font-weight:var(--telekom-typography-font-weight-bold);--color-focus:var(--telekom-color-functional-focus-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--box-shadow:0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);--background-standard-selected:var(--telekom-color-ui-extra-strong);--color-standard-selected:var(\n    --telekom-color-text-and-icon-inverted-standard\n  )}.chip{box-sizing:border-box;border:var(--telekom-spacing-composition-space-01) solid transparent;display:inline-flex;outline:none;padding:0 var(--telekom-spacing-composition-space-05);text-align:center;align-items:center;white-space:nowrap;border-radius:1rem;border-color:rgba(255, 255, 255, 0.14);height:var(--height);vertical-align:baseline;justify-content:center;cursor:default;color:var(--telekom-color-text-and-icon-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-ui-border-standard)}.chip.chip--selected.chip--type-dynamic{padding-right:var(--telekom-spacing-composition-space-03)}.chip.chip--selected.chip--type-dynamic button{border:none;cursor:pointer;padding:0;height:24px;width:24px;outline:none;background:transparent;border-radius:var(--telekom-radius-circle);display:flex;justify-content:center;align-items:center;background-color:transparent}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:hover{background:var(--telekom-color-ui-state-fill-hovered-inverted)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:active{background:var(--telekom-color-ui-state-fill-pressed-inverted)}.chip.chip--selected.chip--type-dynamic button:focus{justify-content:center;outline:var(--focus-outline)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):focus{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}.chip:not(.chip--disabled):not(.chip--type-dynamic):hover,.chip.chip--type-dynamic:not(.chip--selected):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):not(.chip--type-dynamic):active,.chip.chip--type-dynamic:not(.chip--selected):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip--selected{background:var(--background-standard-selected);color:var(--color-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered-inverted),\n      var(--telekom-color-ui-state-fill-hovered-inverted)\n    ),\n    var(--background-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed-inverted),\n      var(--telekom-color-ui-state-fill-pressed-inverted)\n    ),\n    var(--background-standard-selected)}.chip-label{padding:0 var(--telekom-spacing-composition-space-03) 0\n    var(--telekom-spacing-composition-space-03);font-weight:var(--telekom-typography-font-weight-bold);font-size:1rem;line-height:100%}.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-04)}.chip--type-dynamic.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-03)}.chip slot[name='chip-icon']::slotted(*){padding-right:var(--telekom-spacing-composition-space-03);padding-top:var(--telekom-spacing-composition-space-03)}.chip.chip--disabled:not(.chip--type-dynamic){color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip--selected:not(.chip--variant-outlined):not(.chip--type-dynamic).chip--disabled{background:var(--telekom-color-ui-disabled);color:var(--telekom-color-text-and-icon-disabled);border:none}.chip--variant-outlined.chip--selected.chip--disabled:not(.chip--type-dynamic){background-color:var(--telekom-color-text-and-icon-inverted-standard);color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected{color:var(--telekom-color-text-and-icon-primary-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover{background:var(--telekom-color-ui-state-fill-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active{background:var(telekom-color-ui-state-fill-pressed)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-pressed)}"},"../components/dist/esm/utils-c4af5b47.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return animationsFinished})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"d",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"e",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"f",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isScaleIcon}));__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js");var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}var animationsFinished=function animationsFinished(el){return Promise.all(el.getAnimations({subtree:!0}).map((function(x){return x.finished})))}}}]);
//# sourceMappingURL=34.d7c7da31.iframe.bundle.js.map