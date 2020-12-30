import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Button, Layout, Divider, Text, Icon, Card } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { setNotationType, setInstrumentSound } from '../../store/actions/settings';

const Settings = () => {
    const dispatch = useDispatch();
    const { notationType, instrumentSound } = useSelector(state => state.settings);

    const activeButton = useMemo(() =>
        type => type === notationType ? 'primary' : 'basic'
    ,[notationType]);

    const VolumeIcon = useCallback((props) => (
        <Icon
            {...props}
            name={instrumentSound ? 'volume-up-outline' : 'volume-off-outline'}
        />
    ), [instrumentSound]);

    const saveNotationType = useCallback(async value => {
        dispatch(setNotationType(value));
    }, [dispatch]);

    const saveSound = useCallback(async () => {
        dispatch(setInstrumentSound(!instrumentSound));
    }, [instrumentSound, dispatch]);

    return (
        <Layout style={styles.page} level="4">
            <Card disabled>
                <Layout style={styles.section}>
                    <Text>Notation</Text>
                    <View style={styles.notesButtons}>
                        <Button
                            status={activeButton('C')}
                            style={styles.firstButton}
                            onPress={() => saveNotationType('C')}
                        >C</Button>
                        <Button
                            status={activeButton('Do')}
                            style={styles.middleButton}
                            onPress={() => saveNotationType('Do')}
                        >Do</Button>
                        <Button
                            status={activeButton('None')}
                            style={styles.lastButton}
                            onPress={() => saveNotationType('None')}
                        >None</Button>
                    </View>
                </Layout>
                <Divider />
                <Layout style={styles.section}>
                    <Text>Instrument sound</Text>
                    <Button
                        status={instrumentSound ? 'primary' : 'basic'}
                        onPress={saveSound}
                        accessoryLeft={VolumeIcon}
                    />
                </Layout>
            </Card>
        </Layout>
    );
};

export default Settings;