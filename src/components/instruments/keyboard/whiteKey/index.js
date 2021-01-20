import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../../../utils/colors';
import { latinNotes } from '../../../../utils/notes';

const WhiteKey = ({
	onPressIn,
	notationType,
	noteData,
	mark,
	root,
	disabled
}) => (
	<TouchableHighlight
		style={[styles.whiteKey, disabled ? styles.disabled : {}]}
		underlayColor={colors.softBlue}
		accessibilityLabel={noteData.note}
		accessibilityState={{
			disabled,
			checked: mark
		}}
		onPressIn={!disabled ? onPressIn : null}>
		<>
			<Text category="h6">
				{notationType === 'C' ? noteData.note : latinNotes[noteData.note]}
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

WhiteKey.defaultProps = {
	notationType: 'None',
	noteData: {}
};

WhiteKey.propTypes = {
	onPressIn: PropTypes.func,
	notationType: PropTypes.oneOf(['C', 'Do', 'None']),
	noteData: PropTypes.shape({
		note: PropTypes.string
	}),
	mark: PropTypes.bool,
	disabled: PropTypes.bool,
	root: PropTypes.bool
};

export default WhiteKey;
