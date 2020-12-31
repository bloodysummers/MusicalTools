import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../utils/colors';

const WhiteKey = ({ onPressIn, notationType, noteData, mark, disabled }) => (
    <TouchableHighlight
        style={[styles.whiteKey, disabled ? styles.disabled : {}]}
        underlayColor={colors.softBlue}
        onPressIn={!disabled ? onPressIn : null}
    >
        {notationType === 'None' ? (
            <View style={mark ? styles.emptyMark : null} />
        ) : (
            <View style={mark ? styles.mark : null}>
                <Text category="h6" status={!mark ? 'basic' : 'control'}>
                    {notationType === 'C' ? noteData.note.name : noteData.note.latinName}
                </Text>
            </View>
        )}
    </TouchableHighlight>
);

WhiteKey.defaultProps = {
    notationType: 'None',
    noteData: {}
};

WhiteKey.propTypes = {
    onPressIn: PropTypes.func,
    notationType: PropTypes.oneOf(['C', 'Do', 'None']),
    noteData: PropTypes.shape({
        note: PropTypes.string,
        latin: PropTypes.string
    }),
    mark: PropTypes.bool,
    disabled: PropTypes.bool
};

export default WhiteKey;