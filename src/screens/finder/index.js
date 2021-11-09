import React, { useState } from 'react'
import { Button, View, Text, ScrollView, TextInput } from "react-native"
import { players } from '../../api/index'
import { styles } from "./styles"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const Finder = () => {    
    const [playerName, setPlayerName] = useState()
    const [playerSelected, setPlayerSelected] = useState()

    function playerNameInputHandler(value) {
        setPlayerName(value)
    }

    function findPlayer(value){
        const helper = players.filter((item)=> item.name.match('Ronaldo'))

        setPlayerName(helper)
    }

    return (
        <View style={styles.container}>
        <ScrollView>
        <TextInput
            style={styles.input}
            onChangeText={playerNameInputHandler}
        />
        {playerSelected.length > 0 && playerSelected.map((item)=>
            <View style={styles.container}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textCountry}>{item.country}</Text>
                <Text style={styles.textTeam}>{item.team}</Text>
            </View>
        )
        }

        </ScrollView>
    </View>)
}      