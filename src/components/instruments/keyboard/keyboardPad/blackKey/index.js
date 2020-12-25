import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../../utils/colors';

const BlackKey = ({ style, onPressIn, onPressOut, noteType, noteData, mark, disabled }) => (
    <TouchableHighlight
        style={[styles.blackKey, style, disabled ? styles.disabled : {}]}
        underlayColor={colors.darkBlue}
        onPressIn={!disabled ? onPressIn : null}
        onPressOut={!disabled ? onPressOut : null}
    >
        {noteType === 'None' ? <View style={mark ? styles.emptyMark : null} /> : (
            <View style={mark ? styles.mark : null}>
                <Text
                    category="s1"
                    status="control"
                    style={styles.blackKeyText}
                >
                    {noteType === 'C' ? noteData.note : noteData.latin}
                </Text>
                <Text
                    category="s1"
                    status="control"
                    style={styles.blackKeyText}
                >
                    {noteType === 'C' ? noteData.flatNote : noteData.flatLatin}
                </Text>
            </View>
        )}
    </TouchableHighlight>
);

BlackKey.defaultProps = {
    noteType: 'None',
    noteData: {}
};

BlackKey.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    noteType: PropTypes.oneOf(['C', 'Do', 'None']),
    noteData: PropTypes.shape({
        note: PropTypes.string,
        flatNote: PropTypes.string,
        latin: PropTypes.string,
        flatLatin: PropTypes.string
    })
};

export default BlackKey;