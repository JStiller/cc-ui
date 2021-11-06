/**
 * Primary UI component for user interaction
 */
export const createCheckbox = ({ value = 'false', checked = false, innerHTML = 'Checkbox' }) => {
  const checkbox = document.createElement('cc-checkbox');
  checkbox.innerHTML = innerHTML;
  if (typeof checked === 'boolean' && checked !== false) {
    checkbox.setAttribute('checked', checked.toString());
  }
  if (value !== 'false') {
    checkbox.setAttribute('value', value);
  }
  return checkbox;
};
