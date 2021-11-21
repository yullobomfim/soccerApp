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
        color: '#fff',
        margin: 5
    },
    textTeam: {
        margin: 5,
        color: '#fff'
    }
})