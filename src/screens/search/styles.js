import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',  
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'center',

    },
    button: {
        padding: 15,
        justifyContent: 'center',
        color: '#fff'
    },
    textName:{
        color:'#fff'

    },
    textCountry:{
        color:'white'
    },
    textTeam:{
        color:'yellow'
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        padding: 10,
        color: 'gray',
        width: '100%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 15
    }
})