import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../../utils/colors';

const WhiteKey = ({ onPressIn, onPressOut, noteType, noteData, mark, disabled }) => (
    <TouchableHighlight
        style={[styles.whiteKey, disabled ? styles.disabled : {}]}
        underlayColor={colors.softBlue}
        onPressIn={!disabled ? onPressIn : null}
        onPressOut={!disabled ? onPressOut : null}
    >
        {noteType === 'None' ? (
            <View style={mark ? styles.emptyMark : null} />
        ) : (
            <View style={mark ? styles.mark : null}>
                <Text category="h6" status={!mark ? 'basic' : 'control'}>
                    {noteType === 'C' ? noteData.note : noteData.latin}
                </Text>
            </View>
        )}
    </TouchableHighlight>
);

WhiteKey.defaultProps = {
    noteType: 'None',
    noteData: {}
};

WhiteKey.propTypes = {
    onPress: PropTypes.func,
    noteType: PropTypes.oneOf(['C', 'Do', 'None']),
    noteData: PropTypes.shape({
        note: PropTypes.string,
        latin: PropTypes.string
    })
};

export default WhiteKey;