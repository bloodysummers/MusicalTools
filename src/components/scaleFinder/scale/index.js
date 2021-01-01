import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Keyboard from '../../instruments/keyboard';
import { latinNotes } from '../../../utils/notes';

const Scale = () => {
    const { notationType } = useSelector(state => state.settings);
    const navigation = useNavigation();
    const route = useRoute();
    const { params: { scale } } = route;

    const getScaleName = scale => {
        const key = notationType !== 'Do' ? scale.tonic : latinNotes[scale.tonic];
        if (scale.alt) {
            const altKey = notationType !== 'Do' ? scale.alt.tonic : latinNotes[scale.alt.tonic];
            return `${key} / ${altKey} ${scale.type}`;
        }
        return `${key} ${scale.type}`;
    };

    useEffect(() => {
        navigation.setOptions({
            title: getScaleName(scale)
        });
    }, [scale]);
    
    return (
        <Keyboard
            notationType={notationType}
            sound
            scale={scale || {}}
            allow={false}
        />
    );
};;

export default Scale;