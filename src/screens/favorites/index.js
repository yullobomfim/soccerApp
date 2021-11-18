import React from "react"
import { ImageBackground, View, Text, ScrollView } from "react-native"
import { players } from '../../api/index'
import { styles } from "./styles"
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Favorites = () => {
  const navigation = useNavigation()
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const route = useRoute();
  const idUser = route.params.params

  // Salva os dados favoritos no storage

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)

      var peopleList = JSON.parse(localStorage.getItem('players') || '[]');

      // Adiciona pessoa ao cadastro

      peopleList.push({
        value
      });

      // Salva a lista alterada
      localStorage.setItem("players", JSON.stringify(peopleList));

      console.log('Save Successful.');
    } catch (e) {
      console.error(e)
    }
  }

  function storage() {
    players.map((item) => {
      if (item.id == idUser) {
        console.log(item)
        storeData(item)

      }
    })
  }

  function getFavorites() {
    const peopleList = JSON.parse(localStorage.getItem('players') || '[]');
    return peopleList;
  }

  if (route.params) {
    storage()
    console.log('Storage complete')
  }

  const dados = getFavorites()


  return (
    <View style={styles.container}>
      <ScrollView>
        {dados.length > 0 && dados.map((item) =>
          <View style={styles.container}>
            <Text style={styles.textName}>{item.value.name}</Text>
            <ImageBackground
              source={item.value.avatar}
              style={{ width: 160, height: 160 }}
              resizeMode="cover">
            </ImageBackground>
          </View>
        )}
      </ScrollView>
    </View>)
}