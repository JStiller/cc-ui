import { newSpecPage } from '@stencil/core/testing';
import { CcLink } from '../cc-link';

describe('cc-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link>
        <mock:shadow-root>
          <a href="#">
            <slot></slot>
            <slot name="icon"></slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
  it('renders with empty href', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link href=""></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link href="">
        <mock:shadow-root>
          <a href="">
            <slot></slot>
            <slot name="icon"></slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
  it('renders with filled href', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link href="/test"></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link href="/test">
        <mock:shadow-root>
          <a href="/test">
            <slot></slot>
            <slot name="icon"></slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
  it('renders external', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link external></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link external>
        <mock:shadow-root>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <slot></slot>
            <slot name="icon">
              <cc-icon icon="share-external"></cc-icon>
            </slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
  it('renders external with empty href', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link href="" external></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link href="" external>
        <mock:shadow-root>
          <a href="" target="_blank" rel="noreferrer noopener">
            <slot></slot>
            <slot name="icon">
              <cc-icon icon="share-external"></cc-icon>
            </slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
  it('renders external with filled href', async () => {
    const page = await newSpecPage({
      components: [CcLink],
      html: `<cc-link href="/test" external></cc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-link href="/test" external>
        <mock:shadow-root>
          <a href="/test" target="_blank" rel="noreferrer noopener">
            <slot></slot>
            <slot name="icon">
              <cc-icon icon="share-external"></cc-icon>
            </slot>
          </a>
        </mock:shadow-root>
      </cc-link>
    `);
  });
});
