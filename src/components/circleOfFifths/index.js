import React, { useState, useMemo } from 'react';
import { Layout } from '@ui-kitten/components';
import { useSelector } from 'react-redux';

import Circle from './circle';
import Keyboard from '../instruments/keyboard';
import { majorScales } from '../../utils/scales';
import { keys } from './circle/helper';

const CircleOfFifths = () => {
    const [currentKey, setCurrentKey] = useState(0);
    const { lockCircle } = useSelector(state => state.circleOfFifths);

    const currentScale = useMemo(() => {
        const note = keys[currentKey];
        return majorScales.find(scale => {
            return scale.tonic === note.default || (scale.alt && scale.alt.tonic === note.default);
        })
    }, [currentKey]);
    
    return (
        <Layout level="1">
            <Circle
                lock={lockCircle}
                currentKey={currentKey}
                setCurrentKey={setCurrentKey}
            />
            <Keyboard
                allow={false}
                scale={currentScale}
            />
        </Layout>
    );
};

export default CircleOfFifths;