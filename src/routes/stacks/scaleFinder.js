import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { Stack, MenuButton, BackButton, screenOptions } from './common';
import ScaleFinder from '../../components/scaleFinder';
import Scale from '../../components/scaleFinder/scale';
import Chord from '../../components/scaleFinder/scale/chord';
import ScaleFinderSettings from '../../components/scaleFinder/settings';
import routes from '../../routes';
import colors from '../../utils/colors';
import styles from './styles';
const { scaleFinder } = routes;

const ScaleFinderSettingsButton = props => {
	const navigation = useNavigation();
	return (
		<Button
			appearance="ghost"
			status="danger"
			accessoryLeft={() => (
				<Icon {...props} name="settings" style={styles.icon} fill={colors.white} />
			)}
			onPress={() => navigation.navigate(scaleFinder.settings.screen)}
		/>
	);
};

const ScaleStack = () => (
	<Stack.Navigator screenOptions={screenOptions}>
		<Stack.Screen
			name={scaleFinder.scale.screen}
			options={{
				headerLeft: BackButton
			}}
			component={Scale}
		/>
		<Stack.Screen
			name={scaleFinder.scale.chord}
			options={{
				headerLeft: BackButton,
				...TransitionPresets.SlideFromRightIOS,
				gestureDirection: 'horizontal'
			}}
			component={Chord}
		/>
	</Stack.Navigator>
);

export const ScaleFinderStack = () => {
	const { t } = useTranslation();

	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name={scaleFinder.screen}
				options={{
					headerTitle: t(scaleFinder.name),
					headerLeft: MenuButton,
					headerRight: ScaleFinderSettingsButton
				}}
				component={ScaleFinder}
			/>
			<Stack.Screen
				name={scaleFinder.scale.section}
				options={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
					gestureDirection: 'horizontal'
				}}
				component={ScaleStack}
			/>
			<Stack.Screen
				name={scaleFinder.settings.screen}
				options={{
					headerLeft: BackButton,
					title: t(scaleFinder.settings.name),
					...TransitionPresets.SlideFromRightIOS,
					gestureDirection: 'horizontal'
				}}
				component={ScaleFinderSettings}
			/>
		</Stack.Navigator>
	);
};

export default ScaleFinderStack;
