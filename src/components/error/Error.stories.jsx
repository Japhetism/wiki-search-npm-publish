import React from 'react';

import { Error } from './Error';

export default {
  title: 'Wikipedia/Error',
  component: Error,
};

const Template = (args) => <Error {...args} />;

export const ErrorContent = Template.bind({});
ErrorContent.args = {
  text: 'An error occurred.',
};