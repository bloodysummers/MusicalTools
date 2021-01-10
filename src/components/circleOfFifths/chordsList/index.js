import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import styles from './styles';
import { latinNotes } from '../../../utils/notes';

export const romanNumerals = [
    'i',
    'ii',
    'iii',
    'iv',
    'v',
    'vi',
    'vii'
];

const ChordsList = ({ chords, notationType, onTry }) => {
    const { t } = useTranslation();

    const chordToString = chord => {
        const notationArray = chord.map(note => notationType !== 'Do' ? note : latinNotes[note]);
        return notationArray.join(' ');
    };

    const getRomanNumeral = (i, quality) => {
        const roman = romanNumerals[i];
        switch(quality) {
            case 'Major':
                return roman.toUpperCase();
            case 'Minor':
                return roman;
            case 'Diminished':
                return `${roman}°`;
        }
    };
  
    return (
        <Layout style={styles.list}>
            {chords.map((chord, index) => (
                <Layout key={index}>
                    <Layout style={styles.itemWrap}>
                        <Text category="h4" style={styles.numeral}>{getRomanNumeral(index, chord.quality)}</Text>
                        <Layout style={styles.item}>
                            <Layout style={styles.itemText}>
                                <Text category="h6">
                                    {chord.symbol} <Text appearance="hint">({t(chord.quality.toLowerCase())})</Text>
                                </Text>
                                <Text category="s1" appearance="hint">
                                    {chordToString(chord.notes)}
                                </Text>
                            </Layout>
                            <Button status="basic" onPress={() => onTry(chord)}>{t('try')}</Button>
                        </Layout>
                    </Layout>
                    {index !== chords.length -1 && <Divider />}
                        
                </Layout>
            ))}
        </Layout>
    );
};

export default ChordsList;