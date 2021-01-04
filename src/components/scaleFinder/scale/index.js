import React, { useEffect, useMemo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from "react-native-admob";
import { useSelector } from 'react-redux';

import Keyboard from '../../instruments/keyboard';
import ScalesList from '../scalesList';
import { findChords } from './helper';
import styles from './styles';
import routes from '../../../routes';
import ads from '../../../config/ads';
const { scaleFinder } = routes;

const Scale = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params: { scale } } = route;
    const { notationType } = useSelector(state => state.settings);

    useEffect(() => {
        navigation.setOptions({
            title: scale.nameToDisplay
        });
    }, [scale]);

    const chords = useMemo(() => findChords(scale.name), [scale]);

    const tryChord = useCallback((chord) => {
        navigation.navigate(scaleFinder.scale.chord, {
            scale: chord
        });
    }, [navigation]);
    
    return (
        <ScrollView>
            <Layout level="1">
                <Keyboard
                    scale={scale || {}}
                    allow={false}
                />
                <Layout style={styles.ad}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={ads.scaleBanner}
                    />
                </Layout>
                {chords.length > 0 && (
                    <ScalesList scales={chords} notationType={notationType} onTry={tryChord} />
                )}
            </Layout>
        </ScrollView>
    );
};;

export default Scale;