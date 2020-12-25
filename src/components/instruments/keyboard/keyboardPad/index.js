import React, { useCallback} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

import styles from './styles';
import { keys, sounds } from './helper';

const whiteKeys = keys.filter(key => key.whole);
const blackKeys = keys.filter(key => !key.whole);

const KeyboardPad = ({ noteType, sound, allow, scale, onPress }) => {

    const playSound = useCallback(key => {
        if (onPress) onPress(key.note);
        if (sound && (allow || scale.indexOf(key.note) > -1)) {
            const player = sounds[key.sound];
            player.play(() => player.stop());
        }
    }, [sound, onPress, allow, scale]);

    const stopSound = useCallback(key => {
        if (sound && (allow || scale.indexOf(key.note) > -1)) {
            const player = sounds[key.sound];
            player.stop();
        }
    }, [sound, allow, scale]);

    return (
        <View style={styles.keyboard}>
            <View style={styles.whiteKeys}>
                {whiteKeys.map(key => {
                    const disabled = !allow && scale.indexOf(key.note) === -1;
                    return (
                        <WhiteKey
                            key={key.note}
                            disabled={disabled}
                            mark={scale.indexOf(key.note) > -1}
                            onPressIn={!disabled ? () => playSound(key) : null}
                            onPressOut={!disabled ? () => stopSound(key) : null}
                            noteType={noteType}
                            noteData={key}
                        />
                    );
                })}
            </View>
            <View style={styles.blackKeys}>
                {blackKeys.map((key, i) => {
                    const disabled = !allow && scale.indexOf(key.note) === -1;
                    return (
                        <BlackKey
                            key={key.note}
                            disabled={disabled}
                            mark={scale.indexOf(key.note) > -1}
                            style={styles[`blackKey${i+1}`]}
                            onPressIn={!disabled ? () => playSound(key) : null}
                            onPressOut={!disabled ? () => stopSound(key) : null}
                            noteType={noteType}
                            noteData={key}
                        />
                    );
                })}
            </View>
        </View>
    );
};

KeyboardPad.defaultProps = {
    noteType: 'None',
    scale: []
};

KeyboardPad.propTypes = {
    noteType: PropTypes.oneOf(['C', 'Do', 'None']),
    scale: PropTypes.array
};

export default KeyboardPad;