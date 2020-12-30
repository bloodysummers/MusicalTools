import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import colors from '../../utils/colors';

const size = 300;
const buttonSize = 64;

export default StyleSheet.create({
    circleWrap: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 32
    },
    circle: {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor: colors.black
    },
    circleColor: {
        width: size-8,
        height: size-8,
        position: 'absolute',
        left: 4,
        top: 4,
        borderRadius: (size-8)/2,
        backgroundColor: colors.white
    },
    innerCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: colors.black,
        backgroundColor: colors.white,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -100,
        marginTop: -100
    },
    anchor: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10
    },
    note: {
        position: 'absolute',
        width: buttonSize,
        height: buttonSize,
        marginLeft: -buttonSize/2,
        marginTop: -buttonSize/2,
        borderRadius: buttonSize/2,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    }
});