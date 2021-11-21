import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000',
        color: 'yellow',
        fontSize: 17,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        backgroundColor: 'gray',
        margin: 5,
        paddingBottom: 5
    },
    textName: {
        margin: 5,
        color: 'yellow'
    },
    textCountry: {
        color: '#fff'
    },
    textTeam: {
        color: '#fff'
    },
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'yellow',
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    input: {
        padding: 10,
        color: 'gray',
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 15
    }
})