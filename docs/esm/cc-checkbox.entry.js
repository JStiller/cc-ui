import { r as registerInstance, h, H as Host } from './index-e3a83d7c.js';

const ccCheckboxCss = "@font-face{font-family:\"Panton\";font-style:normal;font-weight:normal;src:url(../../typography/Panton.otf) format(\"opentype\")}:host{display:-ms-flexbox;display:flex}:host>label{font-family:\"Panton\";color:#000000;font-size:18px;font-weight:normal;line-height:32px;line-height:22px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host>label::before{-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\";display:-ms-flexbox;display:flex;width:22px;height:22px;border-style:solid;border-width:1px;border-color:#DADADA;margin:0 22px 0 0}:host>label>input[type=checkbox]{display:none}:host([checked])>label::after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:4px;content:\"\";display:-ms-flexbox;display:flex;width:14px;height:14px;margin:0 22px 0 0;background-color:#22F4AE}";

let CcCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Is the checkbox preselected?
     */
    this.checked = false;
  }
  handleClick() {
    this.checked = this.inputElement.checked;
  }
  render() {
    return (h(Host, null, h("label", null, h("input", { type: "checkbox", value: this.value, checked: this.checked, ref: (ele) => this.inputElement = ele }), h("slot", null))));
  }
};
CcCheckbox.style = ccCheckboxCss;

export { CcCheckbox as cc_checkbox };
