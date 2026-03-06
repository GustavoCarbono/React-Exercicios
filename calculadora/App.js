// IMPORTAÇÃO
import {useState} from 'react';
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

export default function Aplicacao(){

  const [n1,setN1] = useState()
  const [n2,setN2] = useState()
  const [resultado,setResultado] = useState()
  
  // função anonima function(){console.lo('fdadf')}
  const calcular = ()=>{
    let res
    res = somar()
    res = subtracao(res)
    res = multiplicacao(res)
    res = divisao(res)
    setResultado(res)
  }
  const somar = ()=>{
    let r = parseInt(n1) + parseInt(n2)
    let rs = "Total da soma: "+r
    return rs
  }
  const subtracao = (res)=>{
    let r = parseInt(n1) - parseInt(n2)
    let rs = res+" Total da subtração: "+r
    return rs
  }
  const divisao = (res)=>{
    let r = parseInt(n1) / parseInt(n2)
    let rs = res+" Total da divisão: "+r
    return rs
  }
  const multiplicacao = (res)=>{
    let r = parseInt(n1) * parseInt(n2)
    let rs = res+" Total da multiplicação: "+r
    return rs
  }
  
  return(
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}> Somando dois Valores </Text>
      </View>

      <View style={{margin:15}}>
        <Text> Primeiro número: </Text>          
        <TextInput              
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o primeiro número'
          placeholderTextColor='#6f6f6f'
          autoFocus={true}
          keyboardType={'numeric'}

          onChangeText = {text =>setN1(text)}
        />            
      </View>           

      <View style={{margin:15}}>
        <Text> Segundo número:  </Text>          
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o segundo número'
          placeholderTextColor='#6f6f6f'              
          keyboardType={'numeric'}
          // evento para mudar o estado da caixa de texto
          onChangeText = {text =>setN2(text)}
        />            
      </View>           

      <View style={{margin:15}}>           

        <TouchableOpacity 
          style={styles.botao} 
          onPress={()=>calcular()}
          activeOpacity={0.5}
        >
          <Text style={styles.textoBotao}> Calcular </Text>
        </TouchableOpacity>
      </View>

      <View style={{margin:15}}>
          <Text style={styles.resposta}>{resultado}</Text>
      </View>
      
    </View>
);
}

const styles = StyleSheet.create({
  tudo:{
    backgroundColor:'#000',
    height:'100%',
    width:'100%'
  },

  titulo:{
    color:'#d30f59',
    fontSize:25,
    textAlign:'center',
    marginTop:25,
    marginBottom:10    
  },

  caixaDeTexto:{
    borderWidth:1,
    borderColor:'#2f2f2f',
    color:'#f2f2f2',
    borderRadius:40,
    paddingLeft: 25,
    height:60    
  },

  botao:{
    backgroundColor: '#d30f33ff',    
    borderRadius: 25, 
    paddingVertical: 15,
    alignItems: 'center'    
  },

  textoBotao:{
    color:'#fff',
    fontSize:18
  },

  resposta:{
    color:'#d30f59',
    fontSize:25,
    textAlign:'center',
    marginTop:30
  }
});