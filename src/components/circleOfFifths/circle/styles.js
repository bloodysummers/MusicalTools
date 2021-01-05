import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    circleWrap: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 32
    },
    externalCircleWrap: {
        position: 'relative',
        width: 300,
        height: 300
    },
    externalCircle: {
        height: 300,
        transform: [{rotate: '-15deg'}]
    },
    midCircleWrap: {
        position: 'absolute',
        top: 44,
        width: 212,
        height: 212,
        borderRadius: 100
    },
    midCircle: {
        height: 212,
        transform: [{rotate: '-15deg'}]
    },
    innerCircleWrap: {
        position: 'absolute',
        top: 82,
        width: 136,
        height: 136,
        borderRadius: 75
    },
    innerCircle: {
        height: 136,
        transform: [{rotate: '-15deg'}]
    },
    lock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    lockIcon: {
        width: 32,
        height: 32
    }
});