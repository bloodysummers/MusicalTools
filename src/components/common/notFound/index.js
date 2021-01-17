import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Text } from '@ui-kitten/components';

import styles from './styles';

const NotFound = ({ children }) => {
	return (
		<Layout style={styles.notFound}>
			<Text category="h6" style={styles.text}>
				{children}
			</Text>
		</Layout>
	);
};

NotFound.propTypes = {
	children: PropTypes.node
};

export default NotFound;
