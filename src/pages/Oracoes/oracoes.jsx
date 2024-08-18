import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../styles/style';
import { BtnVoltar } from '../../components';
import oracoes from '../../assets/oracoes.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Apostolado({ navigation}){
    const {titulo, oracao} = oracoes.Apostolado;
    return(
        <View style={globalStyles.container}>
              <View>
                <Text style={globalStyles.title}>{titulo}</Text>
                <BtnVoltar navigation={navigation} />
              </View>
              <ScrollView style={globalStyles.containerText}>
                <Text style={globalStyles.text}>{oracao}</Text>
              </ScrollView>
          </View>
    )
}

export function AveMaria({ navigation}){
    const {titulo, oracao} = oracoes.AveMaria;
    return(
        <View style={globalStyles.container}>
              <View>
                <Text style={globalStyles.title}>{titulo}</Text>
                <BtnVoltar navigation={navigation} />
              </View>
              <ScrollView style={globalStyles.containerText}>
                <Text style={globalStyles.text}>{oracao}</Text>
              </ScrollView>
          </View>
    )
}

export function Creio({ navigation}){
    const {titulo, oracao} = oracoes.Creio;
    return(
        <View style={globalStyles.container}>
              <View>
                <Text style={globalStyles.title}>{titulo}</Text>
                <BtnVoltar navigation={navigation} />
              </View>
              <ScrollView style={globalStyles.containerText}>
                <Text style={globalStyles.text}>{oracao}</Text>
              </ScrollView>
          </View>
    )
}

export function Divino({ navigation }){
    const {titulo, oracao}= oracoes.Divino;
    return(
        <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
}
export function Gloria({ navigation }){
    const {titulo, oracao}= oracoes.Gloria;
    return(
        <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
}

export function PaiNosso({ navigation }){
    const {titulo, oracao} = oracoes.PaiNosso;
    return(
      <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
  }
export function SalveRainha({ navigation }){
    const {titulo, oracao} = oracoes.SalveRainha;
    return(
      <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
  }
export function SLourenco({ navigation }){
    const {titulo, oracao} = oracoes.SLourenco;
    return(
      <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
  }
export function SMiguel({ navigation }){
    const {titulo, oracao} = oracoes.SMiguel;
    return(
      <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
            </View>
            <ScrollView style={globalStyles.containerText}>
              <Text style={globalStyles.text}>{oracao}</Text>
            </ScrollView>
        </View>
    )
  }
export function STerco({ navigation }){
    const {titulo, inicio, final, contemplacoes} = oracoes.STerco;

    //controlar o misterio selecionado
    const [MisterioSelecionado, setMisterioSelecionado] = useState('misteriosGozosos')

    const renderMisterio = ()=>{
        const misterio = contemplacoes[MisterioSelecionado];
        return(
            <>
                <Text style={globalStyles.titleTerco}>{misterio.misterio}</Text>
                <Text style={globalStyles.text}>{misterio.dia}</Text>
            </>
        );
    };
    const renderMisterioContemplacao = ()=>{
        const misterio = contemplacoes[MisterioSelecionado];
        return(
            <>
                <Text style={globalStyles.text}>{misterio.contemplacao}</Text>
            </>
        );
    };

    return(
      <View style={globalStyles.container}>
            <View>
              <Text style={globalStyles.title}>{titulo}</Text>
              <BtnVoltar navigation={navigation} />
              <View style={globalStyles.containerButtom}>
                <TouchableOpacity onPress={() => setMisterioSelecionado('misteriosGozosos')}>
                    <Text style={globalStyles.subtitle}>Gozosos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMisterioSelecionado('misteriosLuminosos')}>
                    <Text style={globalStyles.subtitle}>Luminosos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMisterioSelecionado('misteriosDolorosos')}>
                    <Text style={globalStyles.subtitle}>Dolorosos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMisterioSelecionado('misteriosGloriosos')}>
                    <Text style={globalStyles.subtitle}>Gloriosos</Text>
                </TouchableOpacity>
                
              </View>
            </View>
            <ScrollView style={globalStyles.containerText}>
                {renderMisterio()}
                <Text style={globalStyles.subtitle}>Início</Text>
                <Text style={globalStyles.text}>{inicio}</Text>
                <Text style={globalStyles.subtitle}>Orações</Text>
                <View style={globalStyles.containerButtom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Creio')}>
                        <Text style={globalStyles.subtitle}>Creio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PaiNosso')}>
                        <Text style={globalStyles.subtitle}>Pai Nosso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AveMaria')}>
                        <Text style={globalStyles.subtitle}>Ave Maria</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gloria')}>
                        <Text style={globalStyles.subtitle}>Glória</Text>
                    </TouchableOpacity>
                </View>
                <Text style={globalStyles.subtitle}>Mistérios</Text>
                {renderMisterioContemplacao()}
                <Text style={globalStyles.subtitle}>Final</Text>
                <Text style={globalStyles.text}>{final}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SalveRainha')}>
                    <Text style={globalStyles.subtitle}>Salve Rainha</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
  }
