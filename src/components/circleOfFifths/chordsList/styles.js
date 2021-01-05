import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    list: {
        paddingLeft: 15,
        paddingRight: 15
    },
    itemWrap: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        justifyContent: 'center'
    },
    numeral: {
        width: 45,
        marginRight: 10,
        textAlign: 'center'
        // fontFamily: 'serif'
    }
})