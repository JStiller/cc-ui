import { newE2EPage } from '@stencil/core/testing';

describe('cc-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-icon icon="arrow-right"></cc-icon>');

    const element = await page.find('cc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
