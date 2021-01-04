import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { PieChart } from 'react-native-svg-charts';
import { Text as TextSvg } from 'react-native-svg';

import { keys, pieData } from './helper';
import styles from './styles';

const distance = 300/2;

const CircleOfFifths = () => {
    const [key, setKey] = useState(0);

    const degreesToRadians = (degrees) => {
        const pi = Math.PI;
        return degrees * (pi/180);
    };

    const Labels = ({ slices, fontSize }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <TextSvg
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontWeight="bold"
                    fontSize={fontSize || 16}
                    transform={`rotate(15, ${labelCentroid[0]}, ${labelCentroid[1]})`}
                    onPress={data.svg.onPress}
                >
                    {data.name}
                </TextSvg>
            )
        })
    }

    return (
        <Layout level="1">
            <Layout style={styles.circleWrap}>
                <View style={styles.externalCircleWrap}>
                    <PieChart
                        padAngle={0}
                        valueAccessor={({ item }) => item.value}
                        style={styles.externalCircle}
                        outerRadius="97%"
                        innerRadius="70%"
                        data={pieData(key, (i) => setKey(i), 'major')}
                        spacing={0}
                    >
                        <Labels />
                    </PieChart>
                </View>
                <View style={styles.midCircleWrap}>
                    <PieChart
                        padAngle={0}
                        valueAccessor={({ item }) => item.value}
                        style={styles.midCircle}
                        outerRadius="100%"
                        innerRadius="64%"
                        data={pieData(key, (i) => setKey(i), 'minor')}
                        spacing={0}
                    >
                        <Labels fontSize={14} />
                    </PieChart>
                </View>
                <View style={styles.innerCircleWrap}>
                    <PieChart
                        padAngle={0}
                        valueAccessor={({ item }) => item.value}
                        style={styles.innerCircle}
                        outerRadius="100%"
                        innerRadius="56%"
                        data={pieData(key, (i) => setKey(i), 'dim')}
                        spacing={0}
                    >
                        <Labels fontSize={13} />
                    </PieChart>
                </View>
            </Layout>
        </Layout>
    );
};

export default CircleOfFifths;