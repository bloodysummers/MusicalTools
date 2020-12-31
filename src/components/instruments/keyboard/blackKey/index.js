import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../utils/colors';

const BlackKey = ({ style, onPressIn, notationType, noteData, mark, root, disabled }) => (
    <TouchableHighlight
        style={[styles.blackKey, style, disabled ? styles.disabled : {}]}
        underlayColor={colors.black}
        onPressIn={!disabled ? onPressIn : null}
    >
        {notationType === 'None' ? <View style={[mark ? styles.emptyMark : null, root ? styles.root : null]} /> : (
            <View style={[mark ? styles.mark : null, root ? styles.root : null]}>
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
        note: PropTypes.object,
        flat: PropTypes.object
    }),
    mark: PropTypes.bool,
    disabled: PropTypes.bool
};

export default BlackKey;