/**
 * Primary UI component for user interaction
 */
export const createHeadline = ({ rank = 1, innerHTML = 'Headline' }: Partial<HTMLCcHeadlineElement>): HTMLCcHeadlineElement => {
  const headline = document.createElement('cc-headline');
  headline.innerHTML = innerHTML;

  if (typeof rank === 'number') {
    headline.setAttribute('rank', rank.toString());
  }

  return headline;
};
