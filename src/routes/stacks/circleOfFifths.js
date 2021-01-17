import React from 'react';
import { View } from 'react-native';
import { Icon, Toggle } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionPresets } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { Stack, BackButton, MenuButton, screenOptions } from './common';
import CircleOfFifths from '../../components/circleOfFifths';
import Chord from '../../components/scaleFinder/scale/chord';
import { setLockCircle } from '../../store/actions/circleOfFifths';
import routes from '../../routes';
import colors from '../../utils/colors';
import styles from './styles';
const { circleOfFifths } = routes;

const ToggleButton = () => {
	const dispatch = useDispatch();
	const { lockCircle } = useSelector(state => state.circleOfFifths);

	return (
		<View style={styles.lock}>
			<Icon
				fill={colors.white}
				style={styles.lockIcon}
				name={lockCircle ? 'lock' : 'unlock'}
			/>
			<Toggle
				checked={lockCircle}
				onChange={() => dispatch(setLockCircle(!lockCircle))}
			/>
		</View>
	);
};

const CircleOfFifthsStack = () => {
	const { t } = useTranslation();

	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name={circleOfFifths.screen}
				options={{
					headerTitle: t(circleOfFifths.name),
					headerLeft: MenuButton,
					headerRight: ToggleButton
				}}
				component={CircleOfFifths}
			/>
			<Stack.Screen
				name={circleOfFifths.triad}
				options={{
					headerLeft: BackButton,
					...TransitionPresets.SlideFromRightIOS,
					gestureDirection: 'horizontal'
				}}
				component={Chord}
			/>
		</Stack.Navigator>
	);
};

export default CircleOfFifthsStack;
