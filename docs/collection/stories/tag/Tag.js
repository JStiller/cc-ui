/**
 * Primary UI component for user interaction
 */
export const createTag = ({ innerHTML = 'Tag' }) => {
  const tag = document.createElement('cc-tag');
  tag.innerHTML = innerHTML;
  return tag;
};
