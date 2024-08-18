import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../../styles/style';
import devocoes from '../../assets/devocoes.json';
import { BtnVoltar } from '../../components';

const Stack = createNativeStackNavigator();

function DevocoesList({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Devoções e Carismas</Text>
            <ScrollView style={globalStyles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('SCJesus')}>
                    <Text style={globalStyles.button}>Devoção ao Sagrado Coração de Jesus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SLourenco')}>
                    <Text style={globalStyles.button}>Devoção a São Lourenço</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Passionistas')}>
                    <Text style={globalStyles.button}>Carisma Passionista</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function SCJesus({ navigation }) {
  const {titulo, devocao} = devocoes.SCJesus;
    return (
        <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{devocao}</Text>
              <View style={globalStyles.containerImage}>
                    <Image 
                    source={require('../../assets/img/paroquia.png')}
                    style= {globalStyles.image}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

function SLourenco({ navigation }){
    const {titulo, devocao} = devocoes.SLourenco;
    return(
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.title}>{titulo}</Text>
                <BtnVoltar navigation={navigation}/>
            </View>
            <ScrollView style={globalStyles.containerText}>
                <Text style={globalStyles.text}>{devocao}</Text>
            </ScrollView>
        </View>
    )
}
function Passionistas({ navigation }){
    const {titulo,subtitulo, carisma} = devocoes.Passionistas;
    return(
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.title}>{titulo}</Text>
                <BtnVoltar navigation={navigation}/>
            </View>
            <ScrollView style={globalStyles.containerText}>
                <Text style={globalStyles.subtitle}>{subtitulo}</Text>
                <Text style={globalStyles.text}>{carisma}</Text>
                <View style={globalStyles.containerImage}>
                    <Image 
                    source={require('../../assets/img/passionista.gif')}
                    style= {globalStyles.image}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default function Devocoes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="DevocoesList" 
              component={DevocoesList} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="SCJesus" 
              component={SCJesus} 
              options={{ 
                title: 'Sagrado Coração de Jesus',
                headerShown:false,
              }} 
            />
            <Stack.Screen 
              name="SLourenco" 
              component={SLourenco} 
              options={{ 
                title: 'Sâo Lourenço',
                headerShown:false,
              }} 
            />
            <Stack.Screen 
              name="Passionistas" 
              component={Passionistas} 
              options={{ 
                title: 'Passionistas',
                headerShown:false,
              }} 
            />
        </Stack.Navigator>
    );
}
