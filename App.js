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

import InstrumentPanel from './src/components/instrumentPanel';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <InstrumentPanel />
    </ApplicationProvider>
  </>
);
