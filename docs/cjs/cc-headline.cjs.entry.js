'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3502f251.js');

const ccHeadlineCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:-ms-flexbox;display:flex}:host>h1,:host>h2,:host>h3,:host>h4,:host>h5,:host>h6{margin:0}:host>h1{font-family:\"Panton\";color:#000000;font-size:80px;font-weight:800;line-height:96px}:host>h2{font-family:\"Panton\";color:#000000;font-size:56px;font-weight:800;line-height:68px}:host>h3{font-family:\"Panton\";color:#000000;font-size:48px;font-weight:800;line-height:60px}:host>h4{font-family:\"Panton\";color:#000000;font-size:40px;font-weight:800;line-height:52px}:host>h5{font-family:\"Panton\";color:#000000;font-size:32px;font-weight:800;line-height:45px}:host>h6{font-family:\"Panton\";color:#000000;font-size:24px;font-weight:800;line-height:36px}";

let CcHeadline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Which rank do you want?
     */
    this.rank = 1;
  }
  getHeadline() {
    switch (this.rank) {
      case 1: {
        return (index.h("h1", null, index.h("slot", null)));
      }
      case 2: {
        return (index.h("h2", null, index.h("slot", null)));
      }
      case 3: {
        return (index.h("h3", null, index.h("slot", null)));
      }
      case 4: {
        return (index.h("h4", null, index.h("slot", null)));
      }
      case 5: {
        return (index.h("h5", null, index.h("slot", null)));
      }
      case 6: {
        return (index.h("h6", null, index.h("slot", null)));
      }
    }
  }
  render() {
    return index.h(index.Host, null, this.getHeadline());
  }
};
CcHeadline.style = ccHeadlineCss;

exports.cc_headline = CcHeadline;
