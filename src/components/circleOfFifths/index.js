import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';

import { keys } from './helper';
import styles from './styles';

const distance = 300/2;

const CircleOfFifths = () => {

    const degreesToRadians = (degrees) => {
        const pi = Math.PI;
        return degrees * (pi/180);
    };

    return (
        <View style={styles.circleWrap}>
            <View style={styles.circle}>
                <View style={styles.innerCircle} />
                <View style={styles.anchor}>
                    {keys.map((key, i) => (
                        <Pressable onPress={() => console.log(key.name)} key={key.name} style={[styles.note, {
                            left: -distance*Math.cos(degreesToRadians((30*i) + 90)),
                            top: -distance*Math.sin(degreesToRadians((30*i) + 90))
                        }]}>
                            <Text category="h5">{key.name}</Text>
                        </Pressable>
                    ))}
                </View>
                {/* {keys.map((key, i) => (
                    <TouchableHighlight onPress={() => console.log(key.name)} key={key.name} style={[styles.note, {
                        left: -distance*Math.cos(degreesToRadians((30*i) + 90)) + distance,
                        top: -distance*Math.sin(degreesToRadians((30*i) + 90)) + distance
                    }]}>
                        <Text category="h5">{key.name}</Text>
                    </TouchableHighlight>
                ))} */}
                {/* {keys.map((key, i) => (
                    <TouchableHighlight onPress={() => console.log(key.relative)} key={key.relative} style={[styles.note, {
                        left: -(distance-60)*Math.cos(degreesToRadians((30*i) + 90)) + distance,
                        top: -(distance-60)*Math.sin(degreesToRadians((30*i) + 90)) + distance-2
                    }]}>
                        <Text category="h5">{key.name}</Text>
                    </TouchableHighlight>
                ))} */}
            </View>
        </View>
    );
};

export default CircleOfFifths;