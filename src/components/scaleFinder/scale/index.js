import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Keyboard from '../../instruments/keyboard';
import { showToast } from '../../../utils/functions';

const Scale = () => {
    const { notationType } = useSelector(state => state.settings);
    const navigation = useNavigation();
    const route = useRoute();
    const { params: { scale } } = route;

    const getScaleName = scale => {
        const key = notationType !== 'Do' ? 'name' : 'latinName';
        if (scale.alt) {
            return `${scale.root[key]} / ${scale.alt[key]}`;
        } else return scale[key]
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