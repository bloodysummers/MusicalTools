import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/colors';

export default StyleSheet.create({
    keyboard: {
        height: 250,
        width: '100%',
        backgroundColor: colors.black2
    },
    whiteKeys: {
        flexDirection: 'row',
        height: '100%'
    },
    blackKeys: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    blackKey1: {
        left: `${100 / 7 - (100/20)}%`
    },
    blackKey2: {
        left: `${(100 / 7)* 2 - (100/20)}%`
    },
    blackKey3: {
        left: `${(100 / 7)* 4 - (100/20)}%`
    },
    blackKey4: {
        left: `${(100 / 7)* 5 - (100/20)}%`
    },
    blackKey5: {
        left: `${(100 / 7)* 6 - (100/20)}%`
    },
    blackKeyText: {
        marginTop: 2
    }
});