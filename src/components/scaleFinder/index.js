import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdMobBanner } from "react-native-admob";

import Keyboard from '../instruments/keyboard';
import ScalesList from './scalesList';
import { findScales } from './helper';
import { showToast } from '../../utils/functions';
import styles from './styles';
import routes from '../../routes';
// import ads from '../../config/ads';
const { scaleFinder } = routes;

const ScaleFinder = () => {
    const [scale, setScale] = useState([]);
    const [finds, setFinds] = useState([]);
    const [showAd, setShowAd] = useState(true);
    const [init, setInit] = useState(true);
    const [notationType, setNotationType] = useState('None');
    const [sound, setSound] = useState('on');
    const navigation = useNavigation();
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

    const toggleScale = note => {
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
    };

    const startFinding = () => {
        if (scale.length < 3) {
            showToast('error', 'Select at least 3 notes');
            setFinds([]);
        } else {
            if (init) setInit(false);
            const scales = findScales(scale);
            setFinds(scales);
        }
    };

    const clear = () => {
        setScale([]);
        setFinds([]);
        setInit(true);
    };

    const tryScale = (scale) => {
        navigation.navigate(scaleFinder.scale, {
            scale: scale.name
        });
    };

    const bannerError = (e) => {
        setShowAd(false);
    };

    const bannerSuccess = (hey) => {
        setShowAd(true);
    };

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
                    sound={sound === 'on'}
                    onPress={toggleScale}
                />
                <Layout style={styles.titleWrap}>
                    <Button style={styles.button} onPress={startFinding}>Find</Button>
                    <Button style={styles.button} status="basic" onPress={clear}>Clear</Button>
                </Layout>
                <Layout style={showAd ? styles.ad : styles.hideAd}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={'ca-app-pub-3940256099942544/6300978111'}
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={bannerError}
                        onAdLoaded={bannerSuccess}
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