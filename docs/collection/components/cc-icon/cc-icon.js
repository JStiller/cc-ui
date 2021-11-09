import { Component, Host, h, Prop } from '@stencil/core';
export class CcIcon {
  constructor() {
    /**
     * What icon do you need?
     */
    this.icon = 'undefined';
  }
  render() {
    return (h(Host, null,
      h("svg", { style: { 'height': '22', 'width': '22' } },
        h("use", { href: `iconography/${this.icon}.svg#${this.icon}` }))));
  }
  static get is() { return "cc-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-icon.css"]
  }; }
  static get properties() { return {
    "icon": {
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
        "text": "What icon do you need?"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "'undefined'"
    }
  }; }
}
