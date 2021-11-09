import { r as registerInstance, h, H as Host } from './index-975d6e50.js';

const ccIconCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:block}";

let CcIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * What icon do you need?
     */
    this.icon = 'undefined';
  }
  render() {
    return (h(Host, null, h("svg", { style: { 'height': '22', 'width': '22' } }, h("use", { href: `iconography/${this.icon}.svg#${this.icon}` }))));
  }
};
CcIcon.style = ccIconCss;

export { CcIcon as cc_icon };
