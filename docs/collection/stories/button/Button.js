/**
 * Primary UI component for user interaction
 */
export const createButton = ({ primary = false, href = false, innerHTML = 'Button' }) => {
  const btn = document.createElement('cc-button');
  btn.innerHTML = innerHTML;
  if (primary) {
    btn.setAttribute('primary', '');
  }
  if (href !== false) {
    btn.setAttribute('href', href);
  }
  return btn;
};
