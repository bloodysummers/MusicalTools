import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../utils/colors';
import { latinNotes } from '../../../../utils/notes';

const BlackKey = ({
	style,
	onPressIn,
	notationType,
	noteData,
	mark,
	root,
	disabled
}) => (
	<TouchableHighlight
		style={[styles.blackKey, style, disabled ? styles.disabled : {}]}
		underlayColor={colors.black}
		accessibilityLabel={noteData.note}
		accessibilityState={{
			disabled
		}}
		onPressIn={!disabled ? onPressIn : null}>
		<>
			<Text category="s1" status="control" style={styles.blackKeyText}>
				{notationType === 'C' ? noteData.note : latinNotes[noteData.note]}
			</Text>
			<Text category="s1" status="control" style={styles.blackKeyText}>
				{notationType === 'C' ? noteData.flat : latinNotes[noteData.flat]}
			</Text>
			<View
				style={[
					mark ? styles.mark : styles.emptyMark,
					root ? styles.root : null
				]}
			/>
		</>
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
		flat: PropTypes.string
	}),
	mark: PropTypes.bool,
	disabled: PropTypes.bool,
	root: PropTypes.bool
};

export default BlackKey;
