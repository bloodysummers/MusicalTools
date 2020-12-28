import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Layout, Icon } from '@ui-kitten/components';

import Keyboard from '../instruments/keyboard';
import Guitar from '../instruments/guitar';
import styles from './styles';

const InstrumentPanel = () => {
    const [noteType, setNoteType] = useState('C');
    const [allow, setAllow] = useState(true);
    const [instrument, setInstrument] = useState('Piano');

    const AllowIcon = (props) => (
        <Icon {...props} name={allow ? 'checkmark-square-2-outline' : 'close-square-outline'} />
    );

    const activeButton = type => type === noteType ? 'primary' : 'basic';

    return (
        <>
            {instrument === 'Piano' ? (
                <Keyboard
                    noteType={noteType}
                    scale={['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']}
                    allow={allow}
                    onPress={note => console.log(note)}
                />
            ) : (
                <Guitar />
            )}
            <Layout style={styles.buttons}>
                <View style={styles.notesButtons}>
                    <Button status={activeButton('C')} onPress={() => setNoteType('C')}>C</Button>
                    <Button status={activeButton('Do')} onPress={() => setNoteType('Do')}>Do</Button>
                    <Button status={activeButton('None')} onPress={() => setNoteType('None')}>None</Button>
                </View>
                <Button
                    size="medium"
                    style={styles.button}
                    status={allow ? 'primary' : 'basic'}
                    onPress={() => setAllow(!allow)}
                    accessoryLeft={AllowIcon}
                />
                <Button
                    size="medium"
                    style={styles.button}
                    status={instrument === 'piano' ? 'warning' : 'danger'}
                    onPress={() => setInstrument(instrument === 'Piano' ? 'Guitar' : 'Piano')}
                >
                    {instrument.toUpperCase()}
                </Button>
            </Layout>
        </>
    );
};

export default InstrumentPanel;