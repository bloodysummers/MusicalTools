import React, { useCallback} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

import styles from './styles';
import { keys, sounds } from './helper';

const whiteKeys = keys.filter(key => key.whole);
const blackKeys = keys.filter(key => !key.whole);

const KeyboardPad = ({ noteType, allow, scale, onPress }) => {

    const playSound = useCallback(key => {
        if (onPress) onPress(key.note);
        if (allow || scale.indexOf(key.note) > -1) {
            const player = sounds[key.sound];
            player.play(() => player.stop());
        }
    }, [onPress, allow, scale]);

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
    scale: PropTypes.array,
    allow: PropTypes.bool,
    onPress: PropTypes.func
};

export default KeyboardPad;