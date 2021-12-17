import React, { useState, useEffect } from "react"
import { View, Text, ScrollView, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler'
import api from '../../api/index';
import { styles } from "./styles"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'



export const Feed = () => {
  const navigation = useNavigation()
  const [players, setPlayers] = useState([]);

  async function load() {
    api.get('/api/players').then((response) => {
      setPlayers(response.data.data)
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  function handleFavorites(params) {
    navigation.navigate('Favorites', { params })
  }

  useEffect(() => {
    load()
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}> My Players</Text>
      <View style={styles.container}>
        {players.length > 0 && players.map((item, index) =>
          <View key={index} style={styles.content}>
            <Image
              source={item.avatar} S
              style={{ width: 160, height: 170, padding: 5 }}
              resizeMode="cover">
            </Image>
            <Text key={item.name} style={styles.textName}>{item.name}</Text>
            <Text style={styles.textCountry}>{item.country}</Text>
            <Text style={styles.textTeam}>{item.team}</Text>
            <RectButton style={styles.addtofavorites}
              onPress={() => handleFavorites(item.id)}>
              <Text>Add to Favorites</Text>
            </RectButton>
          </View>
        )}

      </View>
    </ScrollView>
  )
}