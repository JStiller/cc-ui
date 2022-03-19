import { newE2EPage } from '@stencil/core/testing';

describe('cc-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-headline rank="1"></cc-headline>');

    const element = await page.find('cc-headline');
    expect(element).toHaveClass('hydrated');
  });
});
