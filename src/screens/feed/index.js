import React from "react"
import { View, Text, ScrollView } from "react-native"
import { RectButton } from 'react-native-gesture-handler'
import { players } from '../../api/index'
import { styles } from "./styles"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'

export const Feed = () => {
    const navigation = useNavigation()

        function handleStart (){
          navigation.navigate('Favorites')
        }

         return (
          <View style={styles.container}>
        <ScrollView>
        {players.length > 0 && players.map((item) =>
            <View style={styles.container}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textCountry}>{item.country}</Text>
                <Text style={styles.textTeam}>{item.team}</Text>
            </View>
        )} 

      
      <RectButton style={styles.rectcss}
        onPress={handleStart}
      >
            <Text>START</Text>
      </RectButton>
    
        </ScrollView>
    </View>)
}      