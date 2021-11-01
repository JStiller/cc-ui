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
        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(0.625,0,0,0.625,4,4)">
            <path d="M0.75 12L23.25 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
            <path d="M12.75 22.5L23.25 12 12.75 1.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
          </g>
        </svg>
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
