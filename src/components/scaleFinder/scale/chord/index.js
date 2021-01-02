import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Keyboard from '../../../instruments/keyboard';

const Chord = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params: { scale } } = route;

    useEffect(() => {
        navigation.setOptions({
            title: scale.nameToDisplay
        });
    }, [scale]);

    return (
        <View>
            <Keyboard
                scale={scale}
                allow={false}
            />
        </View>
    );
};

export default Chord;