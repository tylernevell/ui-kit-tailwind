import React, { useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { useIntersectionObserver } from './use-intersection-observer';

const Block: React.VoidFunctionComponent = () => {
  const intersectionRef = useRef(null);
  const intersection = useIntersectionObserver(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'whitesmoke',
        overflow: 'scroll',
      }}
    >
      Scroll me
      <div
        style={{
          width: '200px',
          height: '300px',
          backgroundColor: 'whitesmoke',
        }}
      />
      <div
        ref={intersectionRef}
        style={{
          width: '100px',
          height: '100px',
          padding: '20px',
          backgroundColor: 'palegreen',
        }}
      >
        {intersection && intersection.intersectionRatio < 1
          ? 'Obscured'
          : 'Fully in view'}
      </div>
      <div
        style={{
          width: '200px',
          height: '300px',
          backgroundColor: 'whitesmoke',
        }}
      />
    </div>
  );
};
export default {
  title: `Components/Hooks/UseIntersectionObserver`,
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};
