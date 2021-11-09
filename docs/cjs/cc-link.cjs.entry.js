'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8ede2969.js');

const ccLinkCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:-ms-inline-flexbox;display:inline-flex}:host>a{font-family:\"Panton\";color:#000000;font-size:20px;font-weight:normal;line-height:36px;display:-ms-inline-flexbox;display:inline-flex;text-decoration:none;background-image:-webkit-gradient(linear, left top, left bottom, from(#D2FCEE));background-image:linear-gradient(to bottom, #D2FCEE 0% 100%);background-position:0 20px;background-repeat:repeat-x;background-size:100% 7px}:host>a:hover{background-image:-webkit-gradient(linear, left top, left bottom, from(#22F4AE));background-image:linear-gradient(to bottom, #22F4AE 0% 100%)}";

let CcLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * What do you want to link?
     */
    this.href = '#';
    /**
     * Is the linked ressource external?
     */
    this.external = false;
  }
  renderIcon() {
    if (this.external === true) {
      return (index.h("cc-icon", { icon: "share-external" }));
    }
  }
  componentDidRender() {
    if (this.external === true) {
      this.linkElement.setAttribute('target', '_blank');
      this.linkElement.setAttribute('rel', 'noreferrer noopener');
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("a", { href: this.href, ref: (ele) => this.linkElement = ele }, index.h("slot", null), index.h("slot", { name: "icon" }, this.renderIcon()))));
  }
};
CcLink.style = ccLinkCss;

exports.cc_link = CcLink;
