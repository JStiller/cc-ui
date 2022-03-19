import { newSpecPage } from '@stencil/core/testing';
import { CcHeadline } from '../cc-headline';

describe('cc-headline', () => {
  it('renders h1', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="1"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="1">
        <mock:shadow-root>
          <h1>
            <slot></slot>
          </h1>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
  it('renders h2', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="2"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="2">
        <mock:shadow-root>
          <h2>
            <slot></slot>
          </h2>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
  it('renders h3', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="3"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="3">
        <mock:shadow-root>
          <h3>
            <slot></slot>
          </h3>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
  it('renders h4', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="4"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="4">
        <mock:shadow-root>
          <h4>
            <slot></slot>
          </h4>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
  it('renders h5', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="5"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="5">
        <mock:shadow-root>
          <h5>
            <slot></slot>
          </h5>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
  it('renders h6', async () => {
    const page = await newSpecPage({
      components: [CcHeadline],
      html: `<cc-headline rank="6"></cc-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-headline rank="6">
        <mock:shadow-root>
          <h6>
            <slot></slot>
          </h6>
        </mock:shadow-root>
      </cc-headline>
    `);
  });
});
