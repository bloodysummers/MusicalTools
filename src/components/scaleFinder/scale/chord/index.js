import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import { Layout, Button, Icon } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from 'react-native-admob';
import * as tonal from '@tonaljs/tonal';

window.tonal = tonal;

import Keyboard from '../../../instruments/keyboard';
import styles from './style';
import ads from '../../../../config/ads';
import { getNotesWithOctave } from './helper';
import { sounds } from '../../../../utils/sounds';

const PlayIcon = props => 
    <Icon {...props} name="play-circle-outline" />;

const Chord = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [showAd, setShowAd] = useState(true);
    const { params: { scale } } = route;

    const playChord = useCallback(() => {
        const notes = getNotesToPlay();
        notes.forEach(sound => {
            if (sound.isPlaying()) sound.stop();
            sound.play(() => sound.stop());
        });
    }, [scale]);

    const playArpeggio = useCallback(() => {
        const notes = getNotesToPlay();
        notes.forEach((sound, i) => {
            if (sound.isPlaying()) sound.stop();
            setTimeout(() => {
                sound.play(() => sound.stop());
            }, 400*i);
        });
    }, [scale]);
    
    const getNotesToPlay = useCallback(() => {
        const notes = getNotesWithOctave(scale.notes);
        return notes.map(note => sounds[note.toLowerCase()]);
    }, [scale])

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
                        onPress={playChord}
                    >
                        Play chord
                    </Button>
                    <Button
                        appearance="outline"
                        style={styles.rightButton}
                        accessoryLeft={PlayIcon}
                        onPress={playArpeggio}
                    >
                        Play arpeggio
                    </Button>
                </Layout>
            </Layout>
        </View>
    );
};

export default Chord;