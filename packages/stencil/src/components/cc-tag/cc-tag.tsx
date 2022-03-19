import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cc-tag',
  styleUrl: 'cc-tag.scss',
  shadow: true,
})
export class CcTag {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
