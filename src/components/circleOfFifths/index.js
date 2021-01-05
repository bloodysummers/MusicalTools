import React, { useState, useMemo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';
import { useNavigation } from '@react-navigation/native';

import Circle from './circle';
import styles from './styles';
import { getTriads } from './helper';
import Keyboard from '../instruments/keyboard';
import ChordsList from './chordsList';
import { majorScales, getNotesAndEnharmonics } from '../../utils/scales';
import ads from '../../config/ads';
import { keys } from './circle/helper';
import routes from '../../routes';
const { circleOfFifths } = routes;

const CircleOfFifths = () => {
    const navigation = useNavigation();
    const [currentKey, setCurrentKey] = useState(0);
    const [tab, setTab] = useState(0);
    const { lockCircle } = useSelector(state => state.circleOfFifths);

    const note = useMemo(() => keys[currentKey], [currentKey]);

    const scale = useMemo(() => {
        return majorScales.find(scale => {
            return scale.tonic === note.default || (scale.alt && scale.alt.tonic === note.default);
        })
    }, [note]);

    const triads = useMemo(() => {
        const triads = getTriads(tab === 0 ? note.default : note.minor, tab === 0 ? 'major' : 'minor');
        const triadsWithFindBy = triads.map(triad => {
            triad.findBy = getNotesAndEnharmonics(triad.notes);
            return triad;
        });
        return triadsWithFindBy;
    }, [note, tab]);

    console.log(triads);

    const tryChord = useCallback((chord) => {
        navigation.navigate(circleOfFifths.triad, {
            scale: chord
        });
    }, [navigation]);
    
    return (
        <ScrollView>
            <Layout level="1">
                <Circle
                    lock={lockCircle}
                    currentKey={currentKey}
                    setCurrentKey={setCurrentKey}
                />
                <Layout style={styles.ad}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID={ads.circleOfFifthsBanner}
                    />
                </Layout>
            </Layout>
            <Layout style={styles.list}>
                <TabBar
                    selectedIndex={tab}
                    onSelect={index => setTab(index)}
                >
                    <Tab title="MAJOR" />
                    <Tab title="MINOR" />
                </TabBar>
                <ChordsList chords={triads} onTry={tryChord} />
                <Keyboard
                    allow={false}
                    scale={scale}
                />
            </Layout>
        </ScrollView>
    );
};

export default CircleOfFifths;