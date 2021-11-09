import { r as registerInstance, h, H as Host } from './index-975d6e50.js';

const ccTagCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{font-family:\"Panton\";color:#000000;font-size:20px;font-weight:normal;line-height:36px;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#F7F7F7;height:36px;padding:0 16px}";

let CcTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
CcTag.style = ccTagCss;

export { CcTag as cc_tag };
