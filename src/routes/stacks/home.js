import React from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, MenuButton, screenOptions } from './common';
import Home from '../../components/home';
import routes from '../../routes';
const { home } = routes;

const HomeStack = () => {
	const { t } = useTranslation();
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name={home.screen}
				options={{
					headerTitle: t(home.name),
					headerLeft: MenuButton
				}}
				component={Home}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
