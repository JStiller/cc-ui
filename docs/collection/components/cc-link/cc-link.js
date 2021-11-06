import { Component, Host, h, Prop } from '@stencil/core';
export class CcLink {
  constructor() {
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
    return (h(Host, null,
      h("a", { href: this.href, ref: (ele) => this.linkElement = ele },
        h("slot", null),
        h("slot", { name: "icon" }, this.renderIcon()))));
  }
  static get is() { return "cc-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-link.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-link.css"]
  }; }
  static get properties() { return {
    "href": {
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
        "text": "What do you want to link?"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "external": {
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
        "text": "Is the linked ressource external?"
      },
      "attribute": "external",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
