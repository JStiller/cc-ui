import { newSpecPage } from '@stencil/core/testing';
import { CcButton } from '../cc-button';

describe('cc-button', () => {
  it('renders primary button', async () => {
    const page = await newSpecPage({
      components: [CcButton],
      html: `<cc-button primary></cc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-button primary role="button">
        <mock:shadow-root>
          <button>
            <slot></slot>
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(0.625,0,0,0.625,4,4)">
                <path d="M0.75 12L23.25 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                <path d="M12.75 22.5L23.25 12 12.75 1.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
              </g>
            </svg>
          </button>
        </mock:shadow-root>
      </cc-button>
    `);
  });
  it('renders secondary button', async () => {
    const page = await newSpecPage({
      components: [CcButton],
      html: `<cc-button></cc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-button role="button">
        <mock:shadow-root>
          <button>
            <slot></slot>
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(0.625,0,0,0.625,4,4)">
                <path d="M0.75 12L23.25 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                <path d="M12.75 22.5L23.25 12 12.75 1.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
              </g>
            </svg>
          </button>
        </mock:shadow-root>
      </cc-button>
    `);
  });
  it('renders primary button', async () => {
    const page = await newSpecPage({
      components: [CcButton],
      html: `<cc-button primary href="/"></cc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-button primary href="/" role="link">
        <mock:shadow-root>
          <a href="/">
            <slot></slot>
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(0.625,0,0,0.625,4,4)">
                <path d="M0.75 12L23.25 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                <path d="M12.75 22.5L23.25 12 12.75 1.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
              </g>
            </svg>
          </a>
        </mock:shadow-root>
      </cc-button>
    `);
  });
  it('renders secondary button', async () => {
    const page = await newSpecPage({
      components: [CcButton],
      html: `<cc-button href="/"></cc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-button href="/" role="link">
        <mock:shadow-root>
          <a href="/">
            <slot></slot>
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(0.625,0,0,0.625,4,4)">
                <path d="M0.75 12L23.25 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                <path d="M12.75 22.5L23.25 12 12.75 1.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
              </g>
            </svg>
          </a>
        </mock:shadow-root>
      </cc-button>
    `);
  });
});
