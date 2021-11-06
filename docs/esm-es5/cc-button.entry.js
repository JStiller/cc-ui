import{r as registerInstance,h,F as Fragment,H as Host}from"./index-e3a83d7c.js";var ccButtonCss='@font-face{font-family:"Panton";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format("opentype")}:host([primary]){--background-color:#22F4AE;--border-color:#22F4AE;--text-color:#000000}:host{--background-color:#FFFFFF;--border-color:#000000;--text-color:#000000;display:-ms-inline-flexbox;display:inline-flex}:host button,:host a{font-family:"Panton";color:#000000;font-size:18px;font-weight:normal;line-height:32px;line-height:22px;position:relative;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--background-color);border-style:solid;border-width:3px;border-color:var(--border-color);padding:13px 69px 14px 36px;min-height:55px;color:var(--text-color)}:host button>cc-icon,:host a>cc-icon{position:absolute;right:39px}:host button:hover,:host a:hover{--background-color:#000000;--border-color:#000000;--text-color:#22F4AE;cursor:pointer}:host a{text-decoration:none}';var CcButton=function(){function o(o){registerInstance(this,o);this.primary=false;this.href=false}o.prototype.content=function(){return h(Fragment,null,h("slot",null),h("cc-icon",{icon:"arrow-right"}))};o.prototype.type=function(){if(this.href===false||this.href.length===0){return h("button",null,this.content())}return h("a",{href:this.href},this.content())};o.prototype.render=function(){return h(Host,{role:this.href===false||this.href.length===0?"button":"link"},this.type())};return o}();CcButton.style=ccButtonCss;export{CcButton as cc_button};