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
        margin: 5,
        color:'yellow'
    },
    textCountry:{
        color:'#fff'
    },
    textTeam:{
        color:'#fff'
    },
    addtofavorites: {
        backgroundColor:'yellow',
        padding: 7,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    rectcss: {
        backgroundColor:'yellow',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

})