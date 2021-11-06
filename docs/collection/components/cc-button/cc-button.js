import { Component, Host, h, Prop, Fragment } from '@stencil/core';
export class CcButton {
  constructor() {
    /**
     * Do you want an primary button?
     **/
    this.primary = false;
    /**
     * Do you want to link a document?
     **/
    this.href = false;
  }
  content() {
    return (h(Fragment, null,
      h("slot", null),
      h("cc-icon", { icon: "arrow-right" })));
  }
  type() {
    if (this.href === false || this.href.length === 0) {
      return (h("button", null, this.content()));
    }
    return (h("a", { href: this.href }, this.content()));
  }
  render() {
    return (h(Host, { role: this.href === false || this.href.length === 0 ? "button" : "link" }, this.type()));
  }
  static get is() { return "cc-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-button.css"]
  }; }
  static get properties() { return {
    "primary": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Do you want an primary button?"
      },
      "attribute": "primary",
      "reflect": false,
      "defaultValue": "false"
    },
    "href": {
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
        "text": "Do you want to link a document?"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
