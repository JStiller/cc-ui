import { Component, Host, h, Prop } from '@stencil/core';
export class CcContent {
  constructor() {
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
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "cc-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-content.css"]
  }; }
  static get properties() { return {
    "portfolio": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | false",
        "resolved": "boolean | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which topic you want to address?"
      },
      "attribute": "portfolio",
      "reflect": false,
      "defaultValue": "false"
    },
    "columns": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | false",
        "resolved": "boolean | number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which topic you want to address?"
      },
      "attribute": "columns",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
}
