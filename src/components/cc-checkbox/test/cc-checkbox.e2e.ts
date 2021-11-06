import { newE2EPage } from '@stencil/core/testing';

describe('cc-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-checkbox></cc-checkbox>');

    const element = await page.find('cc-checkbox');
    expect(element).not.toHaveAttribute('checked');
    expect(element).toHaveClass('hydrated');
  });
  it('renders checked', async () => {
    const page = await newE2EPage();
    await page.setContent('<cc-checkbox checked></cc-checkbox>');

    const element = await page.find('cc-checkbox');
    expect(element).toHaveAttribute('checked');
    expect(element).toHaveClass('hydrated');
  });
});
