/**
 * Primary UI component for user interaction
 */
export const createContent = ({ portfolio = false, columns = false, innerHTML = 'Button' }: Partial<HTMLCcContentElement>): HTMLCcContentElement => {
  const content = document.createElement('cc-content');
  content.innerHTML = innerHTML;

  if (portfolio !== false) {
    content.setAttribute('portfolio', portfolio);
  }

  if (typeof columns === 'number') {
    content.setAttribute('columns', columns.toString());
  }

  return content;
};
