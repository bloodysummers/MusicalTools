import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Keyboard from '../../instruments/keyboard';
import scales from '../../../utils/scales';
import { showToast } from '../../../utils/functions';

const Scale = () => {
    const [scale, setScale] = useState();
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({
            title: params.scale
        });
        const scale = scales.find(scale => scale.name === params.scale);
        if (scale) {
            const scaleNotes = scale.scale.map(note => note.name);
            setScale(scaleNotes);
        } else showToast('error', 'Error loading the scale.');
    }, [params]);
    
    return (
        <Keyboard
            noteType={'C'}
            scale={scale}
            allow={false}
            sound={true}
        />
    );
};;

export default Scale;