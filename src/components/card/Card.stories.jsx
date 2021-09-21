import React from 'react';

import { Card } from './Card';

export default {
  title: 'Wikipedia/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const QueryCard = Template.bind({});
QueryCard.args = {
  title: "Lorem Ipsum",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};