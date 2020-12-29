import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Button } from '@ui-kitten/components';

import Home from '../components/home';
import Settings from '../components/settings';
import ScaleFinder from '../components/scaleFinder';
import Scale from '../components/scaleFinder/scale';

import routes from './';
import styles from './styles';
import colors from '../utils/colors';
const { home, settings, scaleFinder } = routes;

const Stack = createStackNavigator();

const MenuButton = (props) => {
    const navigation = useNavigation();
    return (
        <Button
            appearance="ghost"
            status="danger"
            accessoryLeft={() => (
                <Icon
                    {...props}
                    name="menu"
                    style={styles.icon}
                    fill={colors.white}
                />
            )}
            onPress={() => navigation.openDrawer()}
        />
    );
};

const screenOptions = {
    headerTintColor: colors.white,
    headerStyle: styles.header
};

export const HomeStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={home.screen}
        options={{
            headerTitle: home.headerName,
            headerLeft: MenuButton
        }}
        component={Home}
      />
    </Stack.Navigator>
);

export const ScaleFinderStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name={scaleFinder.screen}
            options={{
                headerTitle: scaleFinder.name,
                headerLeft: MenuButton
            }}
            component={ScaleFinder}
        />
        <Stack.Screen
            name={scaleFinder.scale}
            // options={}
            component={Scale}
        />
    </Stack.Navigator>
);
  
export const SettingsStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={settings.screen}
        options={{
            headerTitle: settings.name,
            headerLeft: MenuButton
        }}
        component={Settings}
      />
      </Stack.Navigator>
);