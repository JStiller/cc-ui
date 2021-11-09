import { Component, Host, h } from '@stencil/core';
export class CcTag {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "cc-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["cc-tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["cc-tag.css"]
  }; }
}
