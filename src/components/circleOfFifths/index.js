import React, { useState, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AdMobBanner } from "react-native-admob";

import Circle from './circle';
import styles from './styles';
import Keyboard from '../instruments/keyboard';
import { majorScales } from '../../utils/scales';
import ads from '../../config/ads';
import { keys } from './circle/helper';

const CircleOfFifths = () => {
    const [currentKey, setCurrentKey] = useState(0);
    const [tab, setTab] = useState(0);
    const { lockCircle } = useSelector(state => state.circleOfFifths);

    const currentScale = useMemo(() => {
        const note = keys[currentKey];
        return majorScales.find(scale => {
            return scale.tonic === note.default || (scale.alt && scale.alt.tonic === note.default);
        })
    }, [currentKey]);
    
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
                    scale={currentScale}
                />
            </Layout>
            <TabBar
                selectedIndex={tab}
                onSelect={index => setTab(index)}
            >
                <Tab title='MAJOR'/>
                <Tab title='MINOR'/>
            </TabBar>
            <Layout level="1">

            </Layout>
        </ScrollView>
    );
};

export default CircleOfFifths;