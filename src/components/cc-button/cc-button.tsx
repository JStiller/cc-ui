import { Component, Host, h, ComponentInterface, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'cc-button',
  styleUrl: 'cc-button.scss',
  shadow: true,
})
export class CcButton implements ComponentInterface {
  /**
   * Do you want an primary button?
   **/
  @Prop({ mutable: false }) primary = false;
  /**
   * Do you want to link a document?
   **/
  @Prop({ mutable: false }) href: string | false = false;

  private content(): JSX.Element {
    return (
      <Fragment>
        <slot></slot>
        <cc-icon icon="arrow-right" />
      </Fragment>
    );
  }

  private type(): JSX.Element {
    if(this.href === false || this.href.length === 0) {
      return (
        <button>
          {this.content()}
        </button>
      );
    }

    return (
      <a href={this.href}>
        {this.content()}
      </a>
    );
  }

  render(): HTMLCcButtonElement {
    return (
      <Host role={this.href === false || this.href.length === 0 ? "button" : "link"}>
        {this.type()}
      </Host>
    );
  }
}
