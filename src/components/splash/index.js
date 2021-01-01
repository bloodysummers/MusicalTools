import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';

const Splash = () => (
    <View style={styles.splash}>
        <Text style={styles.title}>MusicalTools</Text>
        <ActivityIndicator color={colors.white} size="large" />
    </View>
);

export default Splash;