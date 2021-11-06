import { ComponentInterface } from '../../stencil-public-runtime';
export declare class CcLink implements ComponentInterface {
  /**
   * What do you want to link?
   */
  href: string;
  /**
   * Is the linked ressource external?
   */
  external: boolean;
  private linkElement;
  private renderIcon;
  componentDidRender(): void;
  render(): HTMLCcLinkElement;
}
