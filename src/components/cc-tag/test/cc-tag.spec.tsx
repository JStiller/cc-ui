import { newSpecPage } from '@stencil/core/testing';
import { CcTag } from '../cc-tag';

describe('cc-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcTag],
      html: `<cc-tag></cc-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cc-tag>
    `);
  });
});
