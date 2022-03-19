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
            <cc-icon icon="arrow-right" />
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
            <cc-icon icon="arrow-right" />
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
            <cc-icon icon="arrow-right" />
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
            <cc-icon icon="arrow-right" />
          </a>
        </mock:shadow-root>
      </cc-button>
    `);
  });
});
