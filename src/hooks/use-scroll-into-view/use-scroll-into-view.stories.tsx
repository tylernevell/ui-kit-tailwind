import React, { useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { useScrollIntoView } from './use-scroll-into-view';

const Block: React.VoidFunctionComponent = () => {
  const targetElementRef = useRef(null);
  const { scrollIntoView } = useScrollIntoView(targetElementRef);

  const onClickHandler = () => {
    scrollIntoView();
  };

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'whitesmoke',
        overflow: 'scroll',
      }}
    >
      <button
        type="button"
        onClick={onClickHandler}
        className="h-8 w-64 text-white bg-indigo-500 rounded-lg"
      >
        Click here to Scroll to Element
      </button>
      <div
        style={{
          width: '200px',
          height: '700px',
          backgroundColor: 'whitesmoke',
        }}
      />
      <div
        ref={targetElementRef}
        style={{
          width: '100px',
          height: '100px',
          padding: '20px',
          backgroundColor: 'palegreen',
        }}
      >
        Target Element
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
  title: 'Components/Hooks/UseScrollIntoViewDemo',
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
