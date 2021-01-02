import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Layout, Button, Icon } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from "react-native-admob";

import Keyboard from '../../../instruments/keyboard';
import styles from './style';
import ads from '../../../../config/ads';

const PlayIcon = props => 
    <Icon {...props} name="play-circle-outline" />;

const Chord = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [showAd, setShowAd] = useState(true);
    const { params: { scale } } = route;

    useEffect(() => {
        navigation.setOptions({
            title: scale.nameToDisplay
        });
    }, [scale]);

    return (
        <View>
            <Layout level="1">
                <Keyboard
                    scale={scale}
                    allow={false}
                />
                <Layout style={showAd ? styles.ad : styles.hideAd}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={ads.chordBanner}
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={() => setShowAd(false)}
                        onAdLoaded={() => setShowAd(false)}
                    />
                </Layout>
                <Layout style={styles.titleWrap}>
                    <Button
                        appearance="outline"
                        style={styles.leftButton}
                        accessoryLeft={PlayIcon}
                    >
                        Play chord
                    </Button>
                    <Button
                        appearance="outline"
                        style={styles.rightButton}
                        accessoryLeft={PlayIcon}
                    >
                        Play arpeggio
                    </Button>
                </Layout>
            </Layout>
        </View>
    );
};

export default Chord;