import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'cc-icon',
  styleUrl: 'cc-icon.scss',
  shadow: true,
})
export class CcIcon implements ComponentInterface {
  /**
   * What icon do you need?
   */
  @Prop({ mutable: false }) icon = 'undefined';

  render(): HTMLCcIconElement {
    return (
      <Host>
        <svg style={{ 'height': '22', 'width': '22' }}>
          <use href={`/src/assets/iconography/${this.icon}.svg#${this.icon}`}></use>
        </svg>
      </Host>
    );
  }
}
