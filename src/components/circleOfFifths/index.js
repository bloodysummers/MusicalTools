import React, { useState, useMemo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Circle from './circle';
import styles from './styles';
import { getTriads } from './helper';
import Keyboard from '../instruments/keyboard';
import ChordsList from './chordsList';
import { majorScales, getNotesAndEnharmonics } from '../../utils/scales';
import ads from '../../config/ads';
import { keys } from './circle/helper';
import { latinNotes } from '../../utils/notes';
import routes from '../../routes';
const { circleOfFifths } = routes;

const CircleOfFifths = () => {
    const navigation = useNavigation();
    const [currentKey, setCurrentKey] = useState(0);
    const [tab, setTab] = useState(0);
    const { lockCircle } = useSelector(state => state.circleOfFifths);
    const { notationType } = useSelector(state => state.settings);
    const { t } = useTranslation();

    const note = useMemo(() => keys[currentKey], [currentKey]);

    const scale = useMemo(() => {
        return majorScales.find(scale => {
            return scale.tonic === note.default || (scale.alt && scale.alt.tonic === note.default);
        })
    }, [note]);

    const triads = useMemo(() => {
        const triads = getTriads(tab === 0 ? note.default : note.minor, tab === 0 ? 'major' : 'minor');
        const triadsWithFindBy = triads.map(triad => {
            const { notes, tonic, aliases } = triad;
            triad.findBy = getNotesAndEnharmonics(notes);
            triad.nameToDisplay = `${notationType !== 'Do' ? tonic : latinNotes[tonic]}${aliases[0]}`;;
            return triad;
        });
        return triadsWithFindBy;
    }, [note, tab]);

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
                <Keyboard
                    allow={false}
                    scale={scale}
                />
            </Layout>
            <Layout style={styles.list}>
                <TabBar
                    selectedIndex={tab}
                    onSelect={index => setTab(index)}
                >
                    <Tab title={t('major').toUpperCase()} />
                    <Tab title={t('minor').toUpperCase()} />
                </TabBar>
                <ChordsList
                    chords={triads}
                    onTry={tryChord}
                    notationType={notationType}
                />
            </Layout>
        </ScrollView>
    );
};

export default CircleOfFifths;