import React from 'react';
import { View, ActivityIndicator, Text, StatusBar } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';
import theme from '../../utils/theme';

const Splash = () => (
    <>
        <StatusBar backgroundColor={theme['color-primary-700']} barStyle="default" />
        <View style={styles.splash}>
            <Text style={styles.title}>MusicalTools</Text>
            <ActivityIndicator color={colors.white} size="large" />
        </View>
    </>
);

export default Splash;