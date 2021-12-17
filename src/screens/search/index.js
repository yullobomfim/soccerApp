import React, { useState, useEffect } from 'react'
import { Image, View, Text, ScrollView, TextInput } from "react-native"
import { RectButton } from 'react-native-gesture-handler'
import api from '../../api/index'
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/native'

export const Search = () => {
    const [playerName, setPlayerName] = useState()
    const [playerSelected, setPlayerSelected] = useState([])
    const [players, setPlayers] = useState([])


    function playerNameInputHandler(value) {
        setPlayerName(value)
    }

    async function load() {
        api.get('/api/players').then((response) => {
            setPlayers(response.data.data)
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    useEffect(() => {
        load()
    }, []);

    function searchPlayer(value) {
        const search = players.filter((item) => item.name.toLocaleLowerCase().match(value.toLocaleLowerCase()))

        setPlayerSelected(search)
    }
    const navigation = useNavigation()

    function handleFavorites(params) {
        navigation.navigate('Favorites', { params })
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
                        <RectButton style={styles.addtofavorites}
                            onPress={() => handleFavorites(item.id)}>
                            <Text>Add to Favorites</Text>
                        </RectButton>

                    </View>
                )
            }
        </ScrollView>
    )
}
