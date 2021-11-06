import { r as registerInstance, h, H as Host } from './index-e3a83d7c.js';

const ccHeadlineCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:-ms-flexbox;display:flex}:host>h1,:host>h2,:host>h3,:host>h4,:host>h5,:host>h6{margin:0}:host>h1{font-family:\"Panton\";color:#000000;font-size:80px;font-weight:800;line-height:96px}:host>h2{font-family:\"Panton\";color:#000000;font-size:56px;font-weight:800;line-height:68px}:host>h3{font-family:\"Panton\";color:#000000;font-size:48px;font-weight:800;line-height:60px}:host>h4{font-family:\"Panton\";color:#000000;font-size:40px;font-weight:800;line-height:52px}:host>h5{font-family:\"Panton\";color:#000000;font-size:32px;font-weight:800;line-height:45px}:host>h6{font-family:\"Panton\";color:#000000;font-size:24px;font-weight:800;line-height:36px}";

let CcHeadline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Which rank do you want?
     */
    this.rank = 1;
  }
  getHeadline() {
    switch (this.rank) {
      case 1: {
        return (h("h1", null, h("slot", null)));
      }
      case 2: {
        return (h("h2", null, h("slot", null)));
      }
      case 3: {
        return (h("h3", null, h("slot", null)));
      }
      case 4: {
        return (h("h4", null, h("slot", null)));
      }
      case 5: {
        return (h("h5", null, h("slot", null)));
      }
      case 6: {
        return (h("h6", null, h("slot", null)));
      }
    }
  }
  render() {
    return h(Host, null, this.getHeadline());
  }
};
CcHeadline.style = ccHeadlineCss;

export { CcHeadline as cc_headline };