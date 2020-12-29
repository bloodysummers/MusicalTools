import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';
import theme from '../../../../utils/theme';

export default StyleSheet.create({
    whiteKey: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.white,
        width: `${100 / 7}%`,
        height: '100%',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 2,
        borderColor: '#cccccc',
        paddingBottom: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 6
    },
    mark: {
        backgroundColor: theme['color-danger-500'],
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 15
    },
    emptyMark: {
        width: 20,
        height: 20,
        backgroundColor: theme['color-danger-500'],
        borderRadius: 10
    },
    disabled: {
        backgroundColor: colors.grey1
    }
});