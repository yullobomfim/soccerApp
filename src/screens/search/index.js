import React, { useState } from 'react'
import { Image, View, Text, ScrollView, TextInput } from "react-native"
import { RectButton } from 'react-native-gesture-handler'
import { players } from '../../api/index'
import { styles } from "./styles"

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
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={playerNameInputHandler}
                />
                <RectButton
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => searchPlayer(playerName)}
                >
                    <Text style={styles.buttonText}>Search players</Text>
                </RectButton>
            </View>
            {
                playerSelected.length > 0 && playerSelected.map((item, index) =>
                    <View key={index} style={styles.content}>
                        <Image source={item.avatar} style={{ width: 160, height: 170, padding: 5 }}
                            resizeMode="cover">
                        </Image>
                        <Text key={item.name} style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textCountry}>{item.country}</Text>

                    </View>
                )
            }
        </ScrollView>
    )
}