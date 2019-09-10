import { storiesOf } from '@storybook/react';
import React from 'react';
import { NerdyBunnyButton } from '.';

export default {
  title: 'Button',
};

storiesOf('Button', module).add('with text', () => (
  <NerdyBunnyButton>HELLO WORLD</NerdyBunnyButton>
));
