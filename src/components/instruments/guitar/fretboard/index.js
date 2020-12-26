import React from 'react';
import { TouchableHighlight, ScrollView, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import { tones, getNoteByFret } from './helper';
import colors from '../../../../utils/colors';

const Fretboard = ({ tuning }) => {
    return (
        <View style={styles.fretboard}>
            <ScrollView horizontal>
                <View style={styles.nut} />
                <View style={styles.frets}>
                    {tones.slice(0, tones.length -1).map((item, i) => (
                        <View key={i} style={styles.fretWrap}>
                            <View key={i} style={styles.fret} />
                        </View>       
                    ))}
                </View>
                <View style={styles.strings}>
                    {tuning.map(({ note, octave }) => (
                        <View style={styles.stringWrap} key={`${note}${octave}`}>
                            <View style={styles.string} />
                        </View>
                    ))}
                </View>
                <View style={styles.notesPerString}>
                    {tuning.map(({ note, octave }) => (
                        <View style={styles.stringNotes} key={`${note}${octave}`}>
                            {tones.map((item, i) => {
                                const noteByFret = getNoteByFret(note, i);
                                return (
                                    <TouchableHighlight
                                        key={i}
                                        underlayColor={colors.red}
                                        style={styles.note}
                                        onPress={() => console.log(`sound: ${noteByFret.sound}${octave}`)}
                                    >
                                        <Text category="h6" style={styles.noteName}>{noteByFret.note}</Text>
                                    </TouchableHighlight>
                                )
                            })}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

Fretboard.defaultProps = {
    tuning: [
        { note: 'E', octave: 4 },
        { note: 'B', octave: 3 },
        { note: 'G', octave: 3 },
        { note: 'D', octave: 3 },
        { note: 'A', octave: 2 },
        { note: 'E', octave: 2 }
    ]
};

export default Fretboard;