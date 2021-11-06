/**
 * Primary UI component for user interaction
 */
export const createLink = ({ external = false, href = 'false', innerHTML = 'Link' }) => {
  const link = document.createElement('cc-link');
  link.innerHTML = innerHTML;
  if (external !== false) {
    link.setAttribute('external', external.toString());
  }
  if (href !== 'false') {
    link.setAttribute('href', href);
  }
  return link;
};
