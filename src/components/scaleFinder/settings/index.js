import React, { useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { Layout, Card, Text, Toggle, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import { setScaleType } from '../../../store/actions/scaleFinder';
import styles from './styles';

const Settings = () => {
    const dispatch = useDispatch();
    const scaleTypes = useSelector(state => state.scaleFinder.scaleTypes);
    
    const types = useMemo(() => [
        { name: 'Major and minor', key: 'regular', type: scaleTypes.regular },
        { name: 'Modes', key: 'modes', type: scaleTypes.modes },
        { name: 'Harmonic minor modes', key: 'harmonicMinorModes', type: scaleTypes.harmonicMinorModes },
        { name: 'Melodic minor modes', key: 'melodicMinorModes', type: scaleTypes.melodicMinorModes },
        { name: 'Pentatonic', key: 'pentatonic', type: scaleTypes.pentatonic },
        { name: 'Blues', key: 'blues', type: scaleTypes.blues },
        { name: 'Augmented and diminished', key: 'augmentedDiminished', type: scaleTypes.augmentedDiminished }
    ], [scaleTypes]);

    const setType = useCallback(type => {
        dispatch(setScaleType(type));
    }, [dispatch]);

    return (
        <Layout style={styles.page} level="4">
            <Card disabled header={() => (
                <Layout style={styles.header}>
                    <Text category="h6">Scale types</Text>
                </Layout>
            )}>
                {types.map((item, i) => (
                    <View key={item.name}>
                        <Layout style={styles.item}>
                            <Text>{item.name}</Text>
                            <Toggle
                                checked={item.type}
                                onChange={() => setType({ [item.key]: !item.type })}
                            />
                        </Layout>
                        {i < types.length-1 && <Divider />}
                    </View>
                ))}
            </Card>
        </Layout>
    );
};

export default Settings;