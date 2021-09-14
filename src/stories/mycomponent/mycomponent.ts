export interface MyComponentProps {
  first?: string;
  middle?: string;
  last: string;
}

/**
 * Primary UI component for user interaction
 */
export const createMyComponent = ({ first = 'Stencil', middle = "'Don't call me a framework'", last = 'JS' }: MyComponentProps) => {
  return `<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;
};
