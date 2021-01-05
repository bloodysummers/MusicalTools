import React from 'react';
import { Stack, MenuButton, screenOptions } from './common';
import Home from '../../components/home';
import routes from '../../routes';
const { home } = routes;

const HomeStack = () => (
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

export default HomeStack;