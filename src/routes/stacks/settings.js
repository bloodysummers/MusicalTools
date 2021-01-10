import React from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, MenuButton, screenOptions } from './common';
import Settings from '../../components/settings';
import routes from '../../routes';
const { settings } = routes;

export const SettingsStack = () => {
    const { t } = useTranslation();
    
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name={settings.screen}
                options={{
                    headerTitle: t(settings.name),
                    headerLeft: MenuButton
                }}
                component={Settings}
            />
        </Stack.Navigator>
    );
};

export default SettingsStack;