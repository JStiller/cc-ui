'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8ede2969.js');

const ccIconCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:block}";

let CcIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * What icon do you need?
     */
    this.icon = 'undefined';
  }
  render() {
    return (index.h(index.Host, null, index.h("svg", { style: { 'height': '22', 'width': '22' } }, index.h("use", { href: `iconography/${this.icon}.svg#${this.icon}` }))));
  }
};
CcIcon.style = ccIconCss;

exports.cc_icon = CcIcon;
