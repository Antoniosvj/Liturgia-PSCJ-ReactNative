import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View  } from 'react-native';
import { globalStyles } from '../../styles/style';
import { Apostolado, AveMaria, Divino, PaiNosso, SalveRainha, SLourenco, SMiguel, STerco, Gloria, Creio } from './oracoes';

const Stack = createNativeStackNavigator();

function OracoesList({ navigation }) {  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Orações</Text>
        <ScrollView style={globalStyles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('PaiNosso')}>
            <Text style={globalStyles.button}>Oração do Pai Nosso</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AveMaria')}>
            <Text style={globalStyles.button}>Oração da Ave Maria</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SalveRainha')}>
            <Text style={globalStyles.button}>Salve Rainha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Divino')}>
            <Text style={globalStyles.button}>Oração do Divino Espírito Santo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SLourenco')}>
            <Text style={globalStyles.button}>Oração de São Lourenço</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SMiguel')}>
            <Text style={globalStyles.button}>Oração de São Miguel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('STerco')}>
            <Text style={globalStyles.button}>Oração do Santo Terço</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Apostolado')}>
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
        <Stack.Screen name="Apostolado" component={Apostolado} options={{ title: 'Apostolado' }} />
        <Stack.Screen name="AveMaria" component={AveMaria} options={{title: 'Ave Maria'}}/>
        <Stack.Screen name="SalveRainha" component={SalveRainha} options={{title: 'Salve Rainha'}}/>
        <Stack.Screen name="SLourenco" component={SLourenco} options={{title: 'São Lourenço'}}/>
        <Stack.Screen name="SMiguel" component={SMiguel} options={{title: 'São Miguel'}}/>
        <Stack.Screen name="STerco" component={STerco} options={{title: 'Santo Terço'}}/>
        <Stack.Screen name="Divino" component={Divino} options={{title: 'Divino Espírito Santo'}}/>
        <Stack.Screen name="Gloria" component={Gloria} options={{title: 'Glória'}}/>
        <Stack.Screen name="Creio" component={Creio} options={{title: 'Creio'}}/>
      </Stack.Navigator>  
    );
  }