import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { PieChart } from 'react-native-svg-charts';
import { useSelector } from 'react-redux';

import { latinNotes } from '../../../utils/notes';
import Labels from './labels';
import { keys, getColor, getArc, playChord } from './helper';
import styles from './styles';

const sharedProps = {
    padAngle: 0,
    spacing: 0
};

const postFix = {
    major: '',
    minor: 'm',
    dim: '°'
};

const Circle = ({ lock, currentKey, setCurrentKey }) => {
    const { notationType, instrumentSound } = useSelector(state => state.settings);

    const pieData = useCallback((type) => {
        return keys.map((key, i) => {
            const notes = key[type].split('/');
            const inNotation = notes.map(note => {
                return notationType !== 'Do' ? note : latinNotes[note];
            });
            return {
                name: `${inNotation.join('/')}${postFix[type]}`,
                value: 30,
                svg: {
                    fill: getColor(i, currentKey, type),
                    onPress: () => onPress(i, type === 'major' ? 'default' : type)
                },
                arc: type === 'major' ? getArc(i, currentKey) : null,
                key: `pie-${key[type]}`
            };
        });
    }, [currentKey, lock, notationType, instrumentSound]);

    const onPress = useCallback((pressedIndex, type) => {
        if (!lock) setCurrentKey(pressedIndex);
        if (instrumentSound) playChord(pressedIndex, type);
    }, [lock, instrumentSound]);

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

Circle.propTypes = {
    lock: PropTypes.bool,
    currentKey: PropTypes.number,
    setCurrentKey: PropTypes.func
};

export default Circle;