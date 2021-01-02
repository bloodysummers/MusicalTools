import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from "react-native-admob";
import { useSelector } from 'react-redux';
import * as tonal from '@tonaljs/tonal';

import Keyboard from '../../instruments/keyboard';
import ScalesList from '../scalesList';
import styles from './styles';
import routes from '../../../routes';
import ads from '../../../config/ads';
const { scaleFinder } = routes;

const Scale = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params: { scale, isChord } } = route;
    const [showAd, setShowAd] = useState(true);
    const { notationType } = useSelector(state => state.settings);

    useEffect(() => {
        navigation.setOptions({
            title: scale.nameToDisplay
        });
    }, [scale]);

    const chords = useMemo(() => {
        if (isChord) return [];
        const modes = tonal.Scale.modeNames(scale.name);
        const chords = modes.reduce((chords, mode) => {
            const chordsInTonic = tonal.Scale.scaleChords(mode.join(' '));
            const chordsData = chordsInTonic.map(chord => {
                const chordData = tonal.Chord.getChord(chord, mode[0]);
                const { symbol, name, tonic, notes } = chordData;
                chordData.nameToDisplay = symbol;
                chordData.subtitle = name !== `${tonic} ` && `(${name})`;
                chordData.findBy = notes.reduce((notes, note) => {
                    const regularNote = tonal.Note.simplify(note);
                    notes.push(regularNote);
                    const enharmonic = tonal.Note.simplify(tonal.Note.enharmonic(note));
                    if (regularNote !== enharmonic) notes.push(enharmonic);
                    return notes;
                }, []);;
                return chordData;
            });
            const newChords = chords.concat(chordsData);
            return newChords;
        }, []);
        return chords;
    }, [scale]);

    const tryChord = useCallback((chord) => {
        navigation.navigate(scaleFinder.scale.chord, {
            scale: chord,
            isChord: true
        });
    }, [navigation]);
    
    return (
        <ScrollView>
            <Keyboard
                scale={scale || {}}
                allow={false}
            />
            <Layout style={showAd ? styles.ad : styles.hideAd}>
                <AdMobBanner
                    adSize="banner"
                    adUnitID={ads.scaleBanner}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={() => setShowAd(false)}
                    onAdLoaded={() => setShowAd(false)}
                />
            </Layout>
            {chords.length > 0 && (
                <ScalesList scales={chords} notationType={notationType} onTry={tryChord} />
            )}
        </ScrollView>
    );
};;

export default Scale;