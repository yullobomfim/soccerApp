import React, {useState} from 'react'
import {View, Text, ScrollView, TextInput} from "react-native"
import {RectButton} from 'react-native-gesture-handler'
import {players} from '../../api/index'
import {styles} from "./styles"

export const Search = () => {
    const [playerName, setPlayerName] = useState()
    const [playerSelected, setPlayerSelected] = useState([])
    

    function playerNameInputHandler(value) {
        setPlayerName(value)
    }

    function searchPlayer(value) {
        const search = players.filter((item) => item.name.toLocaleLowerCase().match(value.toLocaleLowerCase()))

        setPlayerSelected(search)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={styles.searchView}
                >
                    <TextInput
                        style={styles.input}
                        onChangeText={playerNameInputHandler}
                    />
                    <RectButton
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={() => searchPlayer(playerName)}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </RectButton>
                </View>
                {
                    playerSelected.length > 0 && playerSelected.map((item) =>
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