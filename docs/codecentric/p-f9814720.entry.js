import{r as e,h as o,H as t}from"./p-085acdbc.js";let l=class{constructor(o){e(this,o),this.checked=!1}handleClick(){this.checked=this.inputElement.checked}render(){return o(t,null,o("label",null,o("input",{type:"checkbox",value:this.value,checked:this.checked,ref:e=>this.inputElement=e}),o("slot",null)))}};l.style='@font-face{font-family:"Panton";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format("opentype")}:host{display:-ms-flexbox;display:flex}:host>label{font-family:"Panton";color:#000000;font-size:18px;font-weight:normal;line-height:32px;line-height:22px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host>label::before{-webkit-box-sizing:border-box;box-sizing:border-box;content:"";display:-ms-flexbox;display:flex;width:22px;height:22px;border-style:solid;border-width:1px;border-color:#DADADA;margin:0 22px 0 0}:host>label>input[type=checkbox]{display:none}:host([checked])>label::after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:4px;content:"";display:-ms-flexbox;display:flex;width:14px;height:14px;margin:0 22px 0 0;background-color:#22F4AE}';export{l as cc_checkbox}