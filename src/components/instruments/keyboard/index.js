import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

import styles from './styles';
import { keys, sounds } from './helper';

const whiteKeys = keys.filter(key => key.whole);
const blackKeys = keys.filter(key => !key.whole);

const Keyboard = ({ notationType, allow, sound, scale, onPress }) => {

    const notesInScale = useMemo(() => [...scale.scale, ...scale.findBy], [scale]);

    const playSound = useCallback(key => {
        debugger;
        if (onPress) onPress(key.note);
        if (sound && (allow || notesInScale.indexOf(key.note) > -1)) {
            const player = sounds[key.sound];
            if (player.isPlaying()) player.stop();
            player.play(() => player.stop());
        }
    }, [onPress, allow, scale]);

    const markKey = useCallback((note) => {
        return notesInScale.indexOf(note) > -1;
    }, [notesInScale]);

    const checkDisabled = useCallback(note => {
        return !allow && notesInScale.indexOf(note) === -1;
    }, [notesInScale, allow]);

    const checkRoot = useCallback(note => {
        return scale.root === note;
    }, [scale]);

    return (
        <View style={styles.keyboard}>
            <View style={styles.whiteKeys}>
                {whiteKeys.map(key => {
                    const disabled = checkDisabled(key.note);
                    return (
                        <WhiteKey
                            key={key.note.name}
                            disabled={disabled}
                            mark={markKey(key.note)}
                            root={checkRoot(key.note)}
                            onPressIn={!disabled ? () => playSound(key) : null}
                            notationType={notationType}
                            noteData={key}
                        />
                    );
                })}
            </View>
            {/* <View style={styles.blackKeys}>
                {blackKeys.map((key, i) => {
                    const disabled = checkDisabled(key.note);
                    return (
                        <BlackKey
                            key={key.note.name}
                            disabled={disabled}
                            mark={markKey(key.note)}
                            root={checkRoot(key.note)}
                            style={styles[`blackKey${i+1}`]}
                            onPressIn={!disabled ? () => playSound(key) : null}
                            notationType={notationType}
                            noteData={key}
                        />
                    );
                })}
            </View> */}
        </View>
    );
};

Keyboard.defaultProps = {
    notationType: 'None',
    scale: {}
};

Keyboard.propTypes = {
    notationType: PropTypes.oneOf(['C', 'Do', 'None']),
    scale: PropTypes.shape({
        name: PropTypes.string,
        root: PropTypes.shape({
            name: PropTypes.string,
            latinName: PropTypes.string,
            homonym: PropTypes.string
        }),
        category: PropTypes.string,
        latinName: PropTypes.string,
        scale: PropTypes.array,
        findBy: PropTypes.array,
        alt: PropTypes.object
    }),
    allow: PropTypes.bool,
    sound: PropTypes.bool,
    onPress: PropTypes.func
};

export default Keyboard;