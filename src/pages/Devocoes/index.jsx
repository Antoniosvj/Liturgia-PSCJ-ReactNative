import React from 'react';
import { ScrollView, Text, TouchableOpacity, View  } from 'react-native';
import { globalStyles } from '../../styles/style';

export default function Oracoes() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Devoções e Carismas</Text>
        <ScrollView style={globalStyles.container}>
          <TouchableOpacity>
            <Text style={globalStyles.button}>Devoção a São Lourenço</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.button}>Carisma Passionista</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }