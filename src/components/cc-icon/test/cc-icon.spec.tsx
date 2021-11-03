import { newSpecPage } from '@stencil/core/testing';
import { CcIcon } from '../cc-icon';

describe('cc-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcIcon],
      html: `<cc-icon icon="arrow-right"></cc-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-icon icon="arrow-right">
        <mock:shadow-root>
          <svg style="height: 22; width: 22;">
            <use href="/src/assets/iconography/arrow-right.svg#arrow-right"></use>
          </svg>
        </mock:shadow-root>
      </cc-icon>
    `);
  });
});
