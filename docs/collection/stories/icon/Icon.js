/**
 * Primary UI component for user interaction
 */
export const createIcon = ({ icon = 'false' }) => {
  const iconElement = document.createElement('cc-icon');
  if (icon !== 'false') {
    iconElement.setAttribute('icon', icon.toString());
  }
  return iconElement;
};
