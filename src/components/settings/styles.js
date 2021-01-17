import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	page: {
		flex: 1,
		padding: 15
	},
	section: {
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	notesButtons: {
		flexDirection: 'row'
	},
	firstButton: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	middleButton: {
		borderRadius: 0
	},
	lastButton: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0
	},
	language: {
		minWidth: 150
	}
});
