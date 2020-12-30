import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner } from "react-native-admob";
import { useSelector } from 'react-redux';

import Keyboard from '../instruments/keyboard';
import ScalesList from './scalesList';
import { findScales } from './helper';
import { showToast } from '../../utils/functions';
import styles from './styles';
import routes from '../../routes';
import ads from '../../config/ads';
const { scaleFinder } = routes;

const ScaleFinder = () => {
    const [scale, setScale] = useState([]);
    const [finds, setFinds] = useState([]);
    const [showAd, setShowAd] = useState(true);
    const [init, setInit] = useState(true);
    const { notationType, instrumentSound} = useSelector(state => state.settings);
    const navigation = useNavigation();

    const toggleScale = useCallback(note => {
        const newScale = [...scale];
        const index = scale.indexOf(note);
        if (scale.indexOf(note) > -1) {
            newScale.splice(index, 1);
        } else {
            newScale.push(note);
        }
        setFinds([]);
        setInit(true);
        setScale(newScale);
    },[scale]);

    const startFinding = useCallback(() => {
        if (scale.length < 3) {
            showToast('error', 'Select at least 3 notes');
            setFinds([]);
        } else {
            if (init) setInit(false);
            const scales = findScales(scale);
            setFinds(scales);
        }
    }, [scale]);

    const clear = useCallback(() => {
        setScale([]);
        setFinds([]);
        setInit(true);
    }, []);

    const tryScale = useCallback((scale) => {
        navigation.navigate(scaleFinder.scale, {
            scale: scale.name
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Layout level="1">
                <Layout style={styles.titleWrap}>
                    <Text category="h5">Select the notes</Text>
                </Layout>
                <Keyboard
                    noteType={notationType}
                    scale={scale}
                    allow
                    sound={instrumentSound}
                    onPress={toggleScale}
                />
                <Layout style={styles.titleWrap}>
                    <Button style={styles.button} onPress={startFinding}>Find</Button>
                    <Button style={styles.button} status="basic" onPress={clear}>Clear</Button>
                </Layout>
                <Layout style={showAd ? styles.ad : styles.hideAd}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={ads.scaleFinderBanner}
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={() => setShowAd(false)}
                        onAdLoaded={() => setShowAd(false)}
                    />
                </Layout>
                {finds.length > 0 ? (
                    <ScalesList scales={finds} notationType={notationType} onTry={tryScale} />
                ) : !init && (
                    <Text>No scales found</Text>
                )}
            </Layout>
        </ScrollView>
    );
};

export default ScaleFinder;