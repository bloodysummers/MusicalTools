import React, { useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { Layout, Card, Text, Toggle, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setScaleType } from '../../../store/actions/scaleFinder';
import styles from './styles';
import { showToast } from '../../../utils/functions';

const Settings = () => {
    const dispatch = useDispatch();
    const scaleTypes = useSelector(state => state.scaleFinder.scaleTypes);
    const { t, i18n } = useTranslation();
    
    const types = useMemo(() => [
        { name: t('scaleFinder:majorAndMinor'), key: 'regular', type: scaleTypes.regular },
        { name: t('scaleFinder:modes'), key: 'modes', type: scaleTypes.modes },
        { name: t('scaleFinder:harmonicMinorModes'), key: 'harmonicMinorModes', type: scaleTypes.harmonicMinorModes },
        { name: t('scaleFinder:melodicMinorModes'), key: 'melodicMinorModes', type: scaleTypes.melodicMinorModes },
        { name: t('scaleFinder:pentatonic'), key: 'pentatonic', type: scaleTypes.pentatonic },
        { name: t('scaleFinder:blues'), key: 'blues', type: scaleTypes.blues },
        { name: t('scaleFinder:augmentedAndDiminished'), key: 'augmentedDiminished', type: scaleTypes.augmentedDiminished }
    ], [scaleTypes, i18n.language]);

    const setType = useCallback((key, value) => {
        const activeTypes = Object.values(scaleTypes).filter(type => type).length;
        if (activeTypes <= 1 && !value) {
            showToast('error', 'There must be at least one type selected');
            return;
        }
        dispatch(setScaleType({ [key]: value }));
    }, [dispatch, scaleTypes]);

    return (
        <Layout style={styles.page} level="4">
            <Card disabled header={() => (
                <Layout style={styles.header}>
                    <Text category="h6">{t('scaleFinder:scaleTypes')}</Text>
                </Layout>
            )}>
                {types.map((item, i) => (
                    <View key={item.name}>
                        <Layout style={styles.item}>
                            <Text>{item.name}</Text>
                            <Toggle
                                checked={item.type}
                                onChange={() => setType(item.key, !item.type)}
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