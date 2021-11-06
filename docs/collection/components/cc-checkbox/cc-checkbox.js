import { Component, Host, h, Prop, Listen } from '@stencil/core';
export class CcCheckbox {
  constructor() {
    /**
     * Is the checkbox preselected?
     */
    this.checked = false;
  }
  handleClick() {
    this.checked = this.inputElement.checked;
  }
  render() {
    return (h(Host, null,
      h("label", null,
        h("input", { type: "checkbox", value: this.value, checked: this.checked, ref: (ele) => this.inputElement = ele }),
        h("slot", null))));
  }
  static get is() { return "cc-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-checkbox.css"]
  }; }
  static get properties() { return {
    "checked": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is the checkbox preselected?"
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "What value should the check box have?"
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
