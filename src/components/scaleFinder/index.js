import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner } from "react-native-admob";
import { useSelector } from 'react-redux';

import Keyboard from '../instruments/keyboard';
import ScalesList from './scalesList';
import { findScales } from './helper';
import styles from './styles';
import routes from '../../routes';
import ads from '../../config/ads';
const { scaleFinder } = routes;

const ScaleFinder = () => {
    const [scale, setScale] = useState([]);
    const [finds, setFinds] = useState([]);
    const [init, setInit] = useState(true);
    const { notationType } = useSelector(state => state.settings);
    const { scaleTypes } = useSelector(state => state.scaleFinder);
    const navigation = useNavigation();

    useEffect(() => {
        setFinds([]);
        setInit(true);
    }, [scaleTypes, notationType]);

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
        if (init) setInit(false);
        const scales = findScales(scale, scaleTypes, notationType);
        setFinds(scales);
    }, [scale, scaleTypes, notationType]);

    const clear = useCallback(() => {
        setScale([]);
        setFinds([]);
        setInit(true);
    }, []);

    const tryScale = useCallback((scale) => {
        navigation.navigate(scaleFinder.scale.section, {
            screen: scaleFinder.scale.screen,
            params: { scale }
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Layout level="1">
                <Layout style={styles.titleWrap}>
                    <Text category="h6">Select at least 3 notes</Text>
                </Layout>
                <Keyboard
                    scale={{findBy: scale}}
                    allow
                    onPress={toggleScale}
                />
                <Layout style={styles.titleWrap}>
                    <Button
                        style={styles.leftButton}
                        disabled={scale.length < 3}
                        onPress={startFinding}
                    >
                        Find
                    </Button>
                    <Button
                        style={styles.rightButton}
                        status="basic"
                        disabled={!scale.length}
                        onPress={clear}
                    >
                        Clear
                    </Button>
                </Layout>
                <Layout style={styles.ad}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={ads.scaleFinderBanner}
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