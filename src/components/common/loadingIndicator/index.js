import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Spinner } from '@ui-kitten/components';

import styles from './styles';

const LoadingIndicator = ({ style, status }) => (
	<View style={[style, styles.indicator]}>
		<Spinner size="small" status={status} />
	</View>
);

LoadingIndicator.propTypes = {
	style: PropTypes.object,
	status: PropTypes.string
};

export default LoadingIndicator;
