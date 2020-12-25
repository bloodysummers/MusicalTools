import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Layout, Icon } from '@ui-kitten/components';

import KeyboardPad from './keyboardPad';
import styles from './styles';

const Keyboard = () => {
    const [noteType, setNoteType] = useState('C');
    const [sound, setSound] = useState(true);
    const [allow, setAllow] = useState(true);

    const VolumeIcon = (props) => (
        <Icon {...props} name={sound ? 'volume-up-outline' : 'volume-off-outline'} />
    );

    const AllowIcon = (props) => (
        <Icon {...props} name={allow ? 'checkmark-square-2-outline' : 'close-square-outline'} />
    );

    const activeButton = type => type === noteType ? 'primary' : 'basic';

    return (
        <>
            <KeyboardPad
                noteType={noteType}
                scale={['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']}
                sound={sound}
                allow={allow}
                onPress={note => console.log(note)}
            />
            <Layout style={styles.buttons}>
                <View style={styles.notesButtons}>
                    <Button status={activeButton('C')} onPress={() => setNoteType('C')}>C</Button>
                    <Button status={activeButton('Do')} onPress={() => setNoteType('Do')}>Do</Button>
                    <Button status={activeButton('None')} onPress={() => setNoteType('None')}>None</Button>
                </View>
                <Button
                    size="medium"
                    style={styles.button}
                    status={sound ? 'primary' : 'basic'}
                    onPress={() => setSound(!sound)}
                    accessoryLeft={VolumeIcon}
                />
                <Button
                    size="medium"
                    style={styles.button}
                    status={allow ? 'primary' : 'basic'}
                    onPress={() => setAllow(!allow)}
                    accessoryLeft={AllowIcon}
                />
            </Layout>
        </>
    );
};

export default Keyboard;