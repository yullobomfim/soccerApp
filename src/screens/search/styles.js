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
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'  
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        backgroundColor: 'gray',
        margin: 5,
        paddingBottom: 5
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