import { StyleSheet } from 'react-native';

import theme from '../../utils/theme';

export default StyleSheet.create({
	header: {
		backgroundColor: theme['color-primary-600']
	},
	icon: {
		width: 32,
		height: 32
	},
	lock: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginRight: 15
	},
	lockIcon: {
		width: 32,
		height: 32,
		marginRight: 5
	}
});
