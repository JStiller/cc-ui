import { r as registerInstance, h, H as Host } from './index-975d6e50.js';

const ccContentCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host([portfolio=create]){--background-color:#F7EA2D}:host([portfolio=technology]){--background-color:#47D9CB}:host([portfolio=empower]){--background-color:#00C9EC}:host([columns=\"2\"]){--columns:1fr 1fr}:host([columns=\"3\"]){--columns:1fr 1fr 1fr}:host([columns=\"4\"]){--columns:1fr 1fr 1fr 1fr}:host{--background-color:#FFFFFF;--columns:1fr;font-family:\"Panton\";color:#000000;font-size:20px;font-weight:normal;line-height:36px;display:grid;grid-template-columns:var(--columns);grid-template-rows:1fr;gap:40px 40px;width:1170px;padding:40px;margin:0 auto;background-color:var(--background-color)}";

let CcContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Which topic you want to address?
     */
    this.portfolio = false;
    /**
     * Which topic you want to address?
     */
    this.columns = 1;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
CcContent.style = ccContentCss;

export { CcContent as cc_content };
