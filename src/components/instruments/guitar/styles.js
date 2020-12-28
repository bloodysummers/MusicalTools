import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

export default StyleSheet.create({
    fretboard: {
        width: '100%',
        height: 220,
        backgroundColor: colors.black
    },
    nut: {
        height: '100%',
        width: 10,
        backgroundColor: colors.bone,
        borderColor: colors.bone2,
        borderWidth: 1
    },
    frets: {
        width: 800,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.brown
    },
    fret: {
        height: '100%',
        width: 4,
        backgroundColor: colors.golden,
        borderColor: colors.bone2,
        borderRightWidth: 1
    },
    strings: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    stringWrap: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    string: {
        width: '100%',
        height: 5,
        backgroundColor: colors.grey2,
        borderBottomWidth: 3,
        borderColor: colors.grey1,
        position: 'absolute'
    },
    notesPerString: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        paddingLeft: 8
    },
    stringNotes: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        height: 5,
        justifyContent: 'space-around'
    },
    note: {
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noteName: {
        width: 40,
        backgroundColor: colors.grey1,
        textAlign: 'center',
        borderRadius: 10,
        color: colors.white,
    }
});