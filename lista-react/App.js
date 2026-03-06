import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {DATA} from "./bd.js"

const Item = ({nomeProduto, dataCadastro, valor, qtd}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nomeProduto}</Text>
    <Text style={styles.title}>{dataCadastro}</Text>
    <Text style={styles.title}>{valor}</Text>
    <Text style={styles.title}>{qtd}</Text>
  </View>
);

export default function App(){  
return(
  <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item nomeProduto={item.nomeProduto} dataCadastro={item.dataCadastro} valor={item.valor} qtd={item.qtd} />}
      keyExtractor={item => item.id}
    />
  </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});