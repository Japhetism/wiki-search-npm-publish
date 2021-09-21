import React from 'react';

import { LoaderComponent } from './Loader';

export default {
  title: 'Wikipedia/Loader',
  component: LoaderComponent,
};

const Template = (args) => <LoaderComponent {...args} />;

export const CustomLoader = Template.bind({});
