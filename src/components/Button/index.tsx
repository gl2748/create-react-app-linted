import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';

export interface INerdyBunnyButtonProps {
  primary?: boolean;
}

const Button = styled('button')<INerdyBunnyButtonProps>(
  {
    border: '2px solid palevioletred',
    borderRadius: '3px',
    fontSize: '1em',
    margin: '1em',
    padding: '0.25em 1em',
  },
  props => ({
    background: props.primary ? 'blue' : 'red',
  }),
);

export const NerdyBunnyButton: React.FC<
  INerdyBunnyButtonProps & HTMLProps<HTMLButtonElement>
> = ({ primary, children, ...props }) => {
  return (
    <div>
      <Button primary={primary}>{children}</Button>
    </div>
  );
};
