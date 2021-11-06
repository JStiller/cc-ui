export declare class CcCheckbox {
  /**
   * Is the checkbox preselected?
   */
  checked: boolean;
  /**
   * What value should the check box have?
   */
  value: string;
  private inputElement;
  handleClick(): void;
  render(): HTMLCcCheckboxElement;
}
