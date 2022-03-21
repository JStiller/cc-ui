import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cc-breadcrumb',
  styleUrl: 'cc-breadcrumb.scss',
  shadow: true,
})
export class CcBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
