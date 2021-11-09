import { r as registerInstance, h, H as Host } from './index-975d6e50.js';

const ccLinkCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:-ms-inline-flexbox;display:inline-flex}:host>a{font-family:\"Panton\";color:#000000;font-size:20px;font-weight:normal;line-height:36px;display:-ms-inline-flexbox;display:inline-flex;text-decoration:none;background-image:-webkit-gradient(linear, left top, left bottom, from(#D2FCEE));background-image:linear-gradient(to bottom, #D2FCEE 0% 100%);background-position:0 20px;background-repeat:repeat-x;background-size:100% 7px}:host>a:hover{background-image:-webkit-gradient(linear, left top, left bottom, from(#22F4AE));background-image:linear-gradient(to bottom, #22F4AE 0% 100%)}";

let CcLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("cc-icon", { icon: "share-external" }));
    }
  }
  componentDidRender() {
    if (this.external === true) {
      this.linkElement.setAttribute('target', '_blank');
      this.linkElement.setAttribute('rel', 'noreferrer noopener');
    }
  }
  render() {
    return (h(Host, null, h("a", { href: this.href, ref: (ele) => this.linkElement = ele }, h("slot", null), h("slot", { name: "icon" }, this.renderIcon()))));
  }
};
CcLink.style = ccLinkCss;

export { CcLink as cc_link };
