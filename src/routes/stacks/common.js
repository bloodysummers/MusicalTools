import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Button } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../utils/colors';

export const Stack = createStackNavigator();

export const MenuButton = (props) => {
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

export const BackButton = (props) => {
    const navigation = useNavigation();
    return (
        <Button
            appearance="ghost"
            status="danger"
            accessoryLeft={() => (
                <Icon
                    {...props}
                    name="arrow-back"
                    style={styles.icon}
                    fill={colors.white}
                />
            )}
            onPress={() => navigation.goBack()}
        />
    );
};

export const screenOptions = {
    headerTintColor: colors.white,
    headerStyle: styles.header
};