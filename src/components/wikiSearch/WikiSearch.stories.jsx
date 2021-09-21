import React from 'react';

import { WikiSearch } from './WikiSearch';

export default {
  title: 'Wikipedia/WikiSearch',
  component: WikiSearch,
};

const Template = (args) => <WikiSearch {...args} />;

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search for pages containing [X]...',
  pageSize: 10,
};