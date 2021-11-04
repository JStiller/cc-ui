import { newE2EPage } from '@stencil/core/testing';

describe('cc-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-link></cc-link>');

    const element = await page.find('cc-link');
    expect(element).toHaveClass('hydrated');
  });
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-link external></cc-link>');

    const element = await page.find('cc-link');
    expect(element).toHaveClass('hydrated');
  });
});
