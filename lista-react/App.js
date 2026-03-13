import {View, FlatList, StyleSheet, Image, Text, StatusBar} from 'react-native';
import {DATA} from "./bd.js"

const Imagens = {
  batata: require("./imagens/batata.png"),
  tomate: require("./imagens/tomate.png"),
  alface: require("./imagens/alface.png"),
  cenoura: require("./imagens/cenoura.png"),
  banana: require("./imagens/banana.png")
}

const Item = ({nomeProduto, dataCadastro, imagem, valor, qtd}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nomeProduto}</Text>
    <View style={styles.imagem_view}>
      <Image source={Imagens[imagem]} 
      style={{ width: 200, height: 200 }}/>
    </View>
    <Text style={styles.title}>{dataCadastro}</Text>
    <Text style={styles.title}>R${valor}</Text>
    <Text style={styles.title}>{qtd}</Text>
  </View>
);

export default function App(){  
return(
  <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item nomeProduto={item.nomeProduto} dataCadastro={item.dataCadastro} imagem={item.imagem} valor={item.valor} qtd={item.qtd} />}
      keyExtractor={item => item.id}
    />
  </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignContent: "center"
  },
  item: {
    backgroundColor: '#28d84e',
    padding: 20,
    marginVertical: 8,
    width: 300,
    marginHorizontal: 16,
    borderRadius: 8
  },
  imagem_view: {
    backgroundColor: 'white',
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    width: 230,
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    color: "white",
  },
});