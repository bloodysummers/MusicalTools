import React, { useMemo } from 'react';
import { Layout, Card, Text, Toggle, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import { setScaleType } from '../../../store/actions/scaleFinder';
import styles from './styles';

const Settings = () => {
    const dispatch = useDispatch();
    const { regular, modes, pentatonic, blues, harmonicMinorModes, melodicMinorModes, augmentedDiminished } = useSelector(state => state.scaleFinder.scaleTypes);
    
    const types = [
        { name: 'Major and minor', key: 'regular', type: regular },
        { name: 'Modes', key: 'modes', type: modes },
        { name: 'Harmonic minor modes', key: 'harmonicMinorModes', type: harmonicMinorModes },
        { name: 'Melodic minor modes', key: 'melodicMinorModes', type: melodicMinorModes },
        { name: 'Pentatonic', key: 'pentatonic', type: pentatonic },
        { name: 'Blues', key: 'blues', type: blues },
        { name: 'Augmented and diminished', key: 'augmentedDiminished', type: augmentedDiminished }
    ];

    const setType = type => {
        dispatch(setScaleType(type));
    };

    return (
        <Layout style={styles.page} level="4">
            <Card disabled header={() => (
                <Layout style={styles.header}>
                    <Text category="h6">Scale types</Text>
                </Layout>
            )}>
                {types.map((item, i) => (
                    <>
                        <Layout key={item.name} style={styles.item}>
                            <Text>{item.name}</Text>
                            <Toggle
                                checked={item.type}
                                onChange={() => setType({ [item.key]: !item.type })}
                            />
                        </Layout>
                        {i < types.length-1 && <Divider />}
                    </>
                ))}
            </Card>
        </Layout>
    );
};

export default Settings;