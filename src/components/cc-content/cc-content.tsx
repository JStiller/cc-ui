import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cc-content',
  styleUrl: 'cc-content.scss',
  shadow: true,
})
export class CcContent {
  /**
   * Which topic you want to address?
   */
  @Prop() portfolio: string | false = false;
  /**
   * Which topic you want to address?
   */
  @Prop() columns: number | false = 1;

  render(): HTMLCcContentElement {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
