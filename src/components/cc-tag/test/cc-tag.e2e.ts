import { newE2EPage } from '@stencil/core/testing';

describe('cc-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-tag></cc-tag>');

    const element = await page.find('cc-tag');
    expect(element).toHaveClass('hydrated');
  });
});
