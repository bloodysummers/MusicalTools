import React from 'react';
import { View } from 'react-native';
import { Icon, Toggle } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import { Stack, MenuButton, screenOptions } from './common';
import CircleOfFifths from '../../components/circleOfFifths';
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

const CircleOfFifthsStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name={circleOfFifths.screen}
            options={{
                headerTitle: circleOfFifths.name,
                headerLeft: MenuButton,
                headerRight: ToggleButton
            }}
            component={CircleOfFifths}
        />
    </Stack.Navigator>
);

export default CircleOfFifthsStack;