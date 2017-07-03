import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiColumn from '../src/MultiColumn';

storiesOf('Multi-Column', module)
  .add('1 column', () => (
    <MultiColumn>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </MultiColumn>
  ))
  .add('2 columns', () => (
    <MultiColumn columns={2}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </MultiColumn>
  ))
  .add('2 columns with gutter', () => (
    <MultiColumn columns={2} gutter={16}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </MultiColumn>
));
