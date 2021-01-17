import { StyleSheet } from 'react-native';

import colors from '../../../utils/colors';
import theme from '../../../utils/theme';

export default StyleSheet.create({
	toastWrap: {
		padding: 15,
		paddingBottom: 0,
		width: '100%'
	},
	toast: {
		width: '100%',
		flexDirection: 'row',
		borderRadius: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8
	},
	textWrap: {
		padding: 10,
		flex: 1,
		height: '100%',
		justifyContent: 'center'
	},
	text1: {
		fontWeight: 'bold'
	},
	closeWrap: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	success: {
		backgroundColor: theme['color-success-600']
	},
	error: {
		backgroundColor: theme['color-danger-600']
	},
	info: {
		backgroundColor: theme['color-info-600']
	}
});
