import { newE2EPage } from '@stencil/core/testing';

describe('cc-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-breadcrumb></cc-breadcrumb>');

    const element = await page.find('cc-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
