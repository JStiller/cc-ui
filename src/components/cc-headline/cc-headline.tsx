import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'cc-headline',
  styleUrl: 'cc-headline.scss',
  shadow: true,
})
export class CcHeadline implements ComponentInterface {
  /**
   * Which rank do you want?
   */
  @Prop({ mutable: false }) rank = 1;

  private getHeadline(): JSX.Element {
    switch (this.rank) {
      case 1: {
        return (
          <h1>
            <slot></slot>
          </h1>
        );
      }
      case 2: {
        return (
          <h2>
            <slot></slot>
          </h2>
        );
      }
      case 3: {
        return (
          <h3>
            <slot></slot>
          </h3>
        );
      }
      case 4: {
        return (
          <h4>
            <slot></slot>
          </h4>
        );
      }
      case 5: {
        return (
          <h5>
            <slot></slot>
          </h5>
        );
      }
      case 6: {
        return (
          <h6>
            <slot></slot>
          </h6>
        );
      }
    }
  }

  render(): HTMLCcHeadlineElement {
    return <Host>{this.getHeadline()}</Host>;
  }
}
