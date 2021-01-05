/**
 * @format
 */

import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import theme from './src/utils/theme';

import { Home, ScaleFinder, CircleOfFifths, Settings } from './src/routes/stacks';
import { CustomDrawer } from './src/routes/drawer';
import routes from './src/routes';
const { home, settings, scaleFinder, circleOfFifths } = routes;

const Drawer = createDrawerNavigator();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 500);
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <StatusBar backgroundColor={theme['color-primary-700']} barStyle="default" />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName={circleOfFifths.section}
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen
              name={home.section}
              options={{ title: home.name }}
              component={Home}
            />
            <Drawer.Screen
              name={scaleFinder.section}
              options={{ title: scaleFinder.name }}
              component={ScaleFinder}
            />
            <Drawer.Screen
              name={circleOfFifths.section}
              options={{ title: circleOfFifths.name }}
              component={CircleOfFifths}
            />
            <Drawer.Screen
              name={settings.section}
              options={{ title: settings.name }}
              component={Settings}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};