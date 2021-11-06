import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'cc-checkbox',
  styleUrl: 'cc-checkbox.scss',
  shadow: true,
})
export class CcCheckbox {
  /**
   * Is the checkbox preselected?
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * What value should the check box have?
   */
  @Prop() value: string;

  private inputElement: HTMLInputElement;

  @Listen('click', {})
  handleClick(): void {
    this.checked = this.inputElement.checked;
  }

  render(): HTMLCcCheckboxElement {
    return (
      <Host>
        <label>
          <input type="checkbox" value={this.value} checked={this.checked} ref={(ele) => this.inputElement = ele}/>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
