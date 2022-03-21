import { newSpecPage } from '@stencil/core/testing';
import { CcBreadcrumb } from '../cc-breadcrumb';

describe('cc-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcBreadcrumb],
      html: `<cc-breadcrumb></cc-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cc-breadcrumb>
    `);
  });
});
