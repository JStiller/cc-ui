import { newSpecPage } from '@stencil/core/testing';
import { CcContent } from '../cc-content';

describe('cc-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcContent],
      html: `<cc-content></cc-content>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cc-content>
    `);
  });
});
