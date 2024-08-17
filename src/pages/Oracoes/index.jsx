import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View  } from 'react-native';
import { globalStyles } from '../../styles/style';

const Stack = createNativeStackNavigator();

function PaiNosso(){
  return(
    <View>
      <Text>Pai Nosso</Text>
    </View>
  )
}

function OracoesList({ navigation }) {  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Orações</Text>
        <ScrollView style={globalStyles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('PaiNosso')}>
            <Text style={globalStyles.button}>Oração do Pai Nosso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.button}>Oração da Ave Maria</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.button}>Oração de São Lourenço</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={globalStyles.button}>Oração do Santo Terço</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.button}>Oração Apostolado da Oração</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  export default function Oracoes(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="OracoesList" component={OracoesList} options={{ headerShown: false }} />
        <Stack.Screen name="PaiNosso" component={PaiNosso} options={{ title: 'Pai Nosso' }} />
      </Stack.Navigator>  
    );
  }