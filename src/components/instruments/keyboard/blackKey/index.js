import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../utils/colors';

const BlackKey = ({ style, onPressIn, notationType, noteData, mark, disabled }) => (
    <TouchableHighlight
        style={[styles.blackKey, style, disabled ? styles.disabled : {}]}
        underlayColor={colors.black}
        onPressIn={!disabled ? onPressIn : null}
    >
        {notationType === 'None' ? <View style={mark ? styles.emptyMark : null} /> : (
            <View style={mark ? styles.mark : null}>
                <Text
                    category="s1"
                    status="control"
                    style={styles.blackKeyText}
                >
                    {notationType === 'C' ? noteData.note.name : noteData.note.latinName}
                </Text>
                <Text
                    category="s1"
                    status="control"
                    style={styles.blackKeyText}
                >
                    {notationType === 'C' ? noteData.flat.name : noteData.flat.latinName}
                </Text>
            </View>
        )}
    </TouchableHighlight>
);

BlackKey.defaultProps = {
    notationType: 'None',
    noteData: {}
};

BlackKey.propTypes = {
    style: PropTypes.object,
    onPressIn: PropTypes.func,
    notationType: PropTypes.oneOf(['C', 'Do', 'None']),
    noteData: PropTypes.shape({
        note: PropTypes.string,
        flatNote: PropTypes.string,
        latin: PropTypes.string,
        flatLatin: PropTypes.string
    }),
    mark: PropTypes.bool,
    disabled: PropTypes.bool
};

export default BlackKey;