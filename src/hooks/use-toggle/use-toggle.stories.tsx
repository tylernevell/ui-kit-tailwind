import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { useToggle } from './use-toggle';

const Block: React.VoidFunctionComponent = () => {
  const [isOn, toggle] = useToggle(true);

  const toggleHandler = () => {
    toggle();
  };

  return (
    <>
      <div>{isOn ? 'ON' : 'OFF'}</div>
      <button
        className="h-8 w-16 text-white bg-indigo-500 rounded-lg"
        type="button"
        onClick={toggleHandler}
      >
        Toggle
      </button>
    </>
  );
};
export default {
  title: `Components/Hooks/UseToggle`,
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};
