import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import theme from '../../utils/theme';

export default StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor: theme['color-primary-700'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.white,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 50
    }
});