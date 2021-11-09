'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8ede2969.js');

const ccTagCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{font-family:\"Panton\";color:#000000;font-size:20px;font-weight:normal;line-height:36px;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#F7F7F7;height:36px;padding:0 16px}";

let CcTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
CcTag.style = ccTagCss;

exports.cc_tag = CcTag;
