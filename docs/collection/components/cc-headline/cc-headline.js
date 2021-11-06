import { Component, Host, h, Prop } from '@stencil/core';
export class CcHeadline {
  constructor() {
    /**
     * Which rank do you want?
     */
    this.rank = 1;
  }
  getHeadline() {
    switch (this.rank) {
      case 1: {
        return (h("h1", null,
          h("slot", null)));
      }
      case 2: {
        return (h("h2", null,
          h("slot", null)));
      }
      case 3: {
        return (h("h3", null,
          h("slot", null)));
      }
      case 4: {
        return (h("h4", null,
          h("slot", null)));
      }
      case 5: {
        return (h("h5", null,
          h("slot", null)));
      }
      case 6: {
        return (h("h6", null,
          h("slot", null)));
      }
    }
  }
  render() {
    return h(Host, null, this.getHeadline());
  }
  static get is() { return "cc-headline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-headline.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-headline.css"]
  }; }
  static get properties() { return {
    "rank": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which rank do you want?"
      },
      "attribute": "rank",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
}
