import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'cc-link',
  styleUrl: 'cc-link.scss',
  shadow: true,
})
export class CcLink implements ComponentInterface {
  /**
   * What do you want to link?
   */
  @Prop() href = '#';

  /**
   * Is the linked ressource external?
   */
  @Prop() external = false;

  private linkElement !: HTMLAnchorElement;

  private renderIcon(): JSX.Element {
    if(this.external === true) {
      return (
        <cc-icon icon="share-external"></cc-icon>
      );
    }
  }

  componentDidRender(): void {
    if(this.external === true) {
      this.linkElement.setAttribute('target', '_blank');
      this.linkElement.setAttribute('rel', 'noreferrer noopener');
    }
  }

  render(): HTMLCcLinkElement{
    return (
      <Host>
        <a href={this.href} ref={(ele) => this.linkElement = ele}>
          <slot></slot>
          <slot name="icon">
            {this.renderIcon()}
          </slot>
        </a>
      </Host>
    );
  }
}
