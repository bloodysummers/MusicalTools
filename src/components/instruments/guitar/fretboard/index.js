import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

import { tones } from './helper';

const Fretboard = () => {
    return (
        <View style={styles.guitarWrap}>
            <ScrollView horizontal>
                <View style={styles.nut} />
                <View style={styles.guitar}>
                    {tones.map((item, i) => 
                        <View key={i} style={[styles.fret, {left: 50*(i+1)}]} />
                    )}
                </View>
                <View style={[styles.string, { top: 10}]} />
                <View style={[styles.string, { top: 40}]} />
                <View style={[styles.string, { top: 70}]} />
                <View style={[styles.string, { top: 100}]} />
                <View style={[styles.string, { top: 130}]} />
                <View style={[styles.string, { top: 160}]} />
            </ScrollView>
        </View>
    );
};

export default Fretboard;