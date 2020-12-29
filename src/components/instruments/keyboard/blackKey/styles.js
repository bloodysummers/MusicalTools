import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
    blackKey: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        width: `${100 / 10}%`,
        height: '70%',
        backgroundColor: colors.darkBlue,
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },
    mark: {
        backgroundColor: colors.red,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 15
    },
    emptyMark: {
        width: 20,
        height: 20,
        backgroundColor: colors.red,
        borderRadius: 10
    },
    disabled: {
        backgroundColor: colors.black3
    }
});