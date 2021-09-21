import React from 'react';

import { Search } from './Search';

export default {
  title: 'Wikipedia/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const SearchInput = Template.bind({});
SearchInput.args = {
  placeholder: 'Search for pages containing [X]...',
};