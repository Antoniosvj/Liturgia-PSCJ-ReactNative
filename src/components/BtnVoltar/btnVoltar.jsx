import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BtnVoltar ( { navigation }){
    return(
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.btnVoltar}
        >
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnVoltar:{
      alignItems:'flex-end',
      justifyContent:'flex-end',
      marginTop:-20,
      marginBottom:20,
    },
    text:{
        color:'#d82622',
    }
})