import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const produtos = [
  { nome: 'Bebidas', imagem: require('./assets/bebidas.png') },
  { nome: 'Sanduíche', imagem: require('./assets/hamburguer.avif') },
  { nome: 'Sobremesa', imagem: require('./assets/sobremesa.jpg') },
  { nome: 'Outros', imagem: require('./assets/batata.avif') },
  { nome: 'Combos', imagem: require('./assets/combos.avif') },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={styles.botao} onPress={() => alert('Voltar')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => alert('Cupons')}>
          <Text style={styles.textoBotao}>Cupons</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.textoProdutos}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lista: {
    paddingHorizontal: 10,
  },
  card: {
    alignItems: 'center',
    margin: 10,
    width: '45%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textoProdutos: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
