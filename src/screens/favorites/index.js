import React, {useState, useEffect} from "react"
import { Image, View, Text, ScrollView } from "react-native"
import  api  from '../../api/index'
import { styles } from "./styles"
import { useRoute } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const Favorites = () => {
  const route = useRoute();
  const idUser = route.params;
  const [dados, dadosSet] = useState([])
  const [players, setPlayers] = useState([]);


  // Salva os dados favoritos no storage
  const storeData = async (value) => {
    try {
      var peopleList = JSON.parse(await AsyncStorage.getItem('players') || '[]');

      // Adiciona pessoa ao cadastro

      peopleList.push({
        value
      });

      // Salva a lista alterada
      AsyncStorage.setItem("players", JSON.stringify(peopleList));

    } catch (e) {
      console.error(e)
    }
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


  function storage() {

    players.map((item) => {
      if (item.id == idUser.params) {
        storeData(item)
      }

    })
  }

  if (route.params) {
    var repeat = false
    dados.map((item) => {
      if (item.value.id === route.params.params) {
         repeat = true
      }
    })
    if (!repeat) {
      storage()
    }
  }

  async function getFavorites() {
    const peopleList = JSON.parse(await AsyncStorage.getItem('players') || '[]');
    return peopleList;
  }
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getFavorites()
      dadosSet(response)
    }
    fetchMyAPI()
  }, [idUser])

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