import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { Layout, Icon, Toggle } from '@ui-kitten/components';
import { PieChart } from 'react-native-svg-charts';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal';

import Labels from './labels';
import { keys, getColor, getArc, chords } from './helper';
import styles from './styles';
import theme from '../../../utils/theme';

const sharedProps = {
    padAngle: 0,
    spacing: 0
};

const postFix = {
    major: '',
    minor: 'm',
    dim: '°'
};

const postFixSound = {
    default: 'M',
    minor: 'm',
    dim: 'd'
};

const Circle = ({ lock }) => {
    const { instrumentSound } = useSelector(state => state.settings);
    const [currentKey, setCurrentKey] = useState(0);

    const pieData = useCallback((type) => {
        return keys.map((key, i) => ({
            name: `${key[type]}${postFix[type]}`,
            value: 30,
            svg: {
                fill: getColor(i, currentKey, type),
                onPress: () => onPress(i, type === 'major' ? 'default' : type)
            },
            arc: type === 'major' ? getArc(i, currentKey) : null,
            key: `pie-${key[type]}`
        }));
    }, [currentKey, lock, instrumentSound]);

    const onPress = useCallback((pressedIndex, type) => {
        if (!lock) setCurrentKey(pressedIndex);
        if (instrumentSound) playChord(pressedIndex, type);
    }, [lock, instrumentSound]);

    const playChord = useCallback((pressedIndex, type) => {
        const note = noteName = keys[pressedIndex][type];
        let chordKeyNote;
        if (note.indexOf('#') > -1) {
            chordKeyNote = Note.enharmonic(note);
        } else chordKeyNote = note;
        const chordName = `${noteName}${postFixSound[type]}`;
        const chord = chords[chordName];
        chord.forEach(sound => {
            if (sound.isPlaying()) sound.stop();
            sound.play(() => sound.stop());
        });
    }, []);

    return (
        <Layout level="1">
            <Layout style={styles.circleWrap}>
                <View style={styles.externalCircleWrap}>
                    <PieChart
                        {...sharedProps}
                        style={styles.externalCircle}
                        outerRadius="97%"
                        innerRadius="70%"
                        data={pieData('major')}
                    >
                        <Labels />
                    </PieChart>
                </View>
                <View style={styles.midCircleWrap}>
                    <PieChart
                        {...sharedProps}
                        style={styles.midCircle}
                        outerRadius="100%"
                        innerRadius="64%"
                        data={pieData('minor')}
                    >
                        <Labels fontSize={14} />
                    </PieChart>
                </View>
                <View style={styles.innerCircleWrap}>
                    <PieChart
                        {...sharedProps}
                        style={styles.innerCircle}
                        outerRadius="100%"
                        innerRadius="56%"
                        data={pieData('dim')}
                    >
                        <Labels fontSize={13} />
                    </PieChart>
                </View>
            </Layout>
        </Layout>
    );
};

export default Circle;