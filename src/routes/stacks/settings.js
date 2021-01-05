import React from 'react';
import { Stack, MenuButton, screenOptions } from './common';
import Settings from '../../components/settings';
import routes from '../../routes';
const { settings } = routes;

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

export default SettingsStack;