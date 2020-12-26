import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/colors';

export default StyleSheet.create({
    whiteKey: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.white,
        width: `${100 / 7}%`,
        height: '100%',
        borderRightWidth: 1,
        borderBottomWidth: 2,
        borderColor: colors.black,
        paddingBottom: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    mark: {
        backgroundColor: colors.red,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 15
    },
    emptyMark: {
        width: 20,
        height: 20,
        backgroundColor: colors.red,
        borderRadius: 10
    },
    disabled: {
        backgroundColor: colors.grey1
    }
});