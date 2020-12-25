/**
 * @format
 */

import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import Keyboard from './src/components/instruments/keyboard';
import Guitar from './src/components/instruments/guitar';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Keyboard />
      <Guitar />
    </ApplicationProvider>
  </>
);
