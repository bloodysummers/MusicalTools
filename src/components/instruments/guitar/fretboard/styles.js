import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
    guitarWrap: {
        width: '100%',
        height: 180,
        backgroundColor: colors.black
    },
    nut: {
        height: '100%',
        width: 10,
        backgroundColor: colors.bone,
        borderColor: colors.bone2,
        borderWidth: 1
    },
    guitar: {
        width: 620,
        backgroundColor: colors.brown
    },
    fret: {
        height: '100%',
        width: 4,
        backgroundColor: colors.golden,
        borderColor: colors.bone2,
        borderRightWidth: 1,
        position: 'absolute'
    },
    string: {
        width: '100%',
        height: 5,
        backgroundColor: colors.grey2,
        borderBottomWidth: 3,
        borderColor: colors.grey1,
        position: 'absolute'
    }
});