import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchField } from './search-field';

export default {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {},
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <form>
    <SearchField {...args} />
  </form>
);

export const CustomSearchField = Template.bind({});
CustomSearchField.args = {
  placeholder: 'Search',
  name: 'search',
  id: 'searchTest',
};
