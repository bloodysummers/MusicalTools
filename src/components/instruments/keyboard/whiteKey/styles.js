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
        backgroundColor: theme['color-primary-400'],
        width: 20,
        height: 20,
        borderRadius: 10,
        marginTop: 5
    },
    emptyMark: {
        height: 25
    },
    root: {
        backgroundColor: theme['color-success-600']
    },
    disabled: {
        backgroundColor: colors.grey1
    }
});