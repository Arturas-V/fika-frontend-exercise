import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        fontStyle: 'italic',
        fontWeight: '600'
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    block: {
        flexBasis: '48%'
    },
    image: {
        display: 'flex',
        height: 230
    },
    description: {
        marginBottom: 20
    },
    meta: {
        marginBottom: 5
    }
});