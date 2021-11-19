import React from "react"
import { Image, View, Text, ScrollView } from "react-native"
import { players } from '../../api/index'
import { styles } from "./styles"
import { useRoute } from '@react-navigation/native'

export const Favorites = () => {
  const route = useRoute();
  const idUser = route.params;

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

    } catch (e) {
      console.error(e)
    }
  }

  function storage() {

    players.map((item) => {
      if (item.id == idUser.params) {
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
  }

  const dados = getFavorites()

  return (
    <ScrollView>
      <Text style={styles.title}> My Favorites Players</Text>
      <View style={styles.container}>
        {dados.length > 0 && dados.map((item, index) =>
          <View key={index} style={styles.content}>
            <Image
              source={item.value.avatar} S
              style={{ width: 160, height: 170, padding: 5 }}
              resizeMode="cover">
            </Image>
            <Text style={styles.textName}>{item.value.name}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}