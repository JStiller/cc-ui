import { newE2EPage } from '@stencil/core/testing';

describe('cc-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-content></cc-content>');

    const element = await page.find('cc-content');
    expect(element).toHaveClass('hydrated');
  });
});
