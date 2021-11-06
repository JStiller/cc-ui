import { ComponentInterface } from '../../stencil-public-runtime';
export declare class CcButton implements ComponentInterface {
  /**
   * Do you want an primary button?
   **/
  primary: boolean;
  /**
   * Do you want to link a document?
   **/
  href: string | false;
  private content;
  private type;
  render(): HTMLCcButtonElement;
}
