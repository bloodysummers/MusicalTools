import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Button, Layout, Divider, Text, Icon, Card } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { showToast } from '../../utils/functions';

const Settings = () => {
    const [notationType, setNotationType] = useState('');
    const [sound, setSound] = useState('');

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        try {
            const notationType = await AsyncStorage.getItem('notation_type');
            setNotationType(notationType || 'None');
            const sound = await AsyncStorage.getItem('sound');
            setSound(sound || 'on');
        } catch(e) {
            showToast('error', 'Sorry', 'An error ocurred while retrieving the saved data');
        }
      }

    const activeButton = useMemo(() =>
        type => type === notationType ? 'primary' : 'basic'
    ,[notationType]);

    const VolumeIcon = useCallback((props) => (
        <Icon {...props} name={sound === 'on' ? 'volume-up-outline' : 'volume-off-outline'} />
    ), [sound]);

    const saveNotationType = async value => {
        const oldValue = notationType;
        try {
            setNotationType(value);
            await AsyncStorage.setItem('notation_type', value);
        } catch (e) {
            setNotationType(oldValue);
            showToast('error', 'Sorry', 'An error ocurred while saving the data.');
        }
    };

    const saveSound = async () => {
        const oldValue = sound;
        try {
            const value = sound === 'on' ? 'off' : 'on';
            setSound(value);
            await AsyncStorage.setItem('sound', value);
        } catch(e) {
            setSound(oldValue);
            showToast('error', 'Sorry', 'An error ocurred while saving the data.');
        }
    };

    return (
        <Layout style={styles.page} level="4">
            <Card disabled>
                <Layout style={styles.section}>
                    <Text>Notation</Text>
                    <View style={styles.notesButtons}>
                        <Button status={activeButton('C')} style={styles.firstButton} onPress={() => saveNotationType('C')}>C</Button>
                        <Button status={activeButton('Do')} style={styles.middleButton} onPress={() => saveNotationType('Do')}>Do</Button>
                        <Button status={activeButton('None')} style={styles.lastButton} onPress={() => saveNotationType('None')}>None</Button>
                    </View>
                </Layout>
                <Divider />
                <Layout style={styles.section}>
                    <Text>Instrument sound</Text>
                    <Button status={sound === 'on' ? 'primary' : 'basic'} onPress={saveSound} accessoryLeft={VolumeIcon} />
                </Layout>
            </Card>
        </Layout>
    );
};

export default Settings;