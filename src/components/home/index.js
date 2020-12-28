import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Card } from '@ui-kitten/components';
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Keyboard from '../instruments/keyboard';

const Home = () => {
    const [notationType, setNotationType] = useState('None');
    const [sound, setSound] = useState('on');
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) getInitialData();
    }, [isFocused]);

    const getInitialData = useCallback(async () => {
        try {
            const notationType = await AsyncStorage.getItem('notation_type');
            setNotationType(notationType || 'None');
            const sound = await AsyncStorage.getItem('sound');
            setSound(sound || 'on');
        } catch(e) {
            setNotationType('None');
            setSound('on');
        }
    }, [setNotationType, setSound]);

    return (
        <Layout level="4">
            <Keyboard
                noteType={notationType}
                scale={['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']}
                allow={false}
                sound={sound === 'on'}
                onPress={note => console.log(note)}
            />
        </Layout>
    );
};

export default Home;