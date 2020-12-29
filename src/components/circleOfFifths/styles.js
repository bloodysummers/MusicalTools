import { StyleSheet } from 'react-native';
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
        // borderWidth: 4,
        borderColor: colors.black,
        backgroundColor: 'blue'
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
        backgroundColor: 'red',
        borderRadius: buttonSize/2,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    }
});