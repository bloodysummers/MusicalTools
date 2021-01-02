import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Keyboard from '../../../instruments/keyboard';

const Chord = () => {
    const route = useRoute();
    const { params: { scale } } = useRoute();

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