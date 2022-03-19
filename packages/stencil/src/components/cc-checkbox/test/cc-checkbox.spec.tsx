import { newSpecPage } from '@stencil/core/testing';
import { CcCheckbox } from '../cc-checkbox';

describe('cc-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CcCheckbox],
      html: `<cc-checkbox></cc-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <cc-checkbox>
        <mock:shadow-root>
          <label>
            <input type="checkbox">
            <slot></slot>
          </label>
        </mock:shadow-root>
      </cc-checkbox>
    `);
  });
});
