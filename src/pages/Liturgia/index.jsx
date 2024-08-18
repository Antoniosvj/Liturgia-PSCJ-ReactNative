import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../../styles/style"; 

export default function Liturgia() {
  const [liturgia, setLiturgia] = useState(null);
  const [conteudo, setConteudo] = useState(null);

  const fetchLiturgia = async () => {
    try {
      const response = await fetch("https://liturgiadiaria.site/");
      const json = await response.json();
      setLiturgia(json);
      setConteudo(<PrimeiraLeitura liturgia={json} />); // Define a Primeira Leitura como conteúdo padrão
    } catch (error) {
      console.error(error);
      setConteudo(
        <Text style={globalStyles.text}>Erro ao carregar liturgia</Text>
      );
    }
  };

  useEffect(() => {
    fetchLiturgia();
  }, []);

  function PrimeiraLeitura({ liturgia }) {
    return (
      <ScrollView style={globalStyles.containerText}>
        <Text style={globalStyles.text}>
          {liturgia?.primeiraLeitura.titulo} (
          {liturgia?.primeiraLeitura.referencia})
        </Text>
        <Text style={globalStyles.text}>{liturgia?.primeiraLeitura.texto}</Text>
      </ScrollView>
    );
  }

  function Salmo({ liturgia }) {
    return (
      <ScrollView style={globalStyles.containerText}>
        <Text style={globalStyles.text}>{liturgia?.salmo.referencia}</Text>
        <Text style={globalStyles.text}>{liturgia?.salmo.refrao}</Text>
        <Text style={globalStyles.text}>{liturgia?.salmo.texto}</Text>
      </ScrollView>
    );
  }

  function SegundaLeitura({ liturgia }) {
    // Verifica se a segunda leitura existe e tem conteúdo
    if (liturgia && liturgia.segundaLeitura && liturgia.segundaLeitura.texto) {
      return (
        <ScrollView style={globalStyles.containerText}>
          <Text style={globalStyles.text}>
            {liturgia.segundaLeitura.titulo} (
            {liturgia.segundaLeitura.referencia})
          </Text>
          <Text style={globalStyles.text}>{liturgia.segundaLeitura.texto}</Text>
        </ScrollView>
      );
    } else {
      // Retorna uma mensagem se não houver segunda leitura
      return (
        <View style={globalStyles.containerText}>
          <Text style={globalStyles.text}>Não há segunda leitura hoje!</Text>
        </View>
      );
    }
  }

  function Evangelho({ liturgia }) {
    return (
      <ScrollView style={globalStyles.containerText} >
        <Text style={globalStyles.text}>
          {liturgia?.evangelho.titulo} ({liturgia?.evangelho.referencia})
        </Text>
        <Text style={globalStyles.text}>{liturgia?.evangelho.texto}</Text>
      </ScrollView>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Liturgia</Text>
      <View style={globalStyles.containerButtom}>
        <TouchableOpacity
          onPress={() => setConteudo(<PrimeiraLeitura liturgia={liturgia} />)}
        >
          <Text style={globalStyles.subtitle}>1ª Leitura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setConteudo(<Salmo liturgia={liturgia} />)}
        >
          <Text style={globalStyles.subtitle}>Salmo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setConteudo(<SegundaLeitura liturgia={liturgia} />)}
        >
          <Text style={globalStyles.subtitle}>2ª Leitura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setConteudo(<Evangelho liturgia={liturgia} />)}
        >
          <Text style={globalStyles.subtitle}>Evangelho</Text>
        </TouchableOpacity>
      </View>
      {conteudo || <ScrollView style={globalStyles.containerText}></ScrollView>}
    </View>
  );
}
